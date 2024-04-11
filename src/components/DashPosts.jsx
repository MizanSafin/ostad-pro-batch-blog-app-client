import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "flowbite-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function DashPosts() {
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const [postIdToDelete, setPostIdToDelete] = useState("");

  useEffect(() => {
    (() => {
      setShowMore(true);
      axios
        .get(
          `http://localhost:3232/api/v1/post/get-post?userId=${currentUser._id}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setUserPosts(res.data.posts);
          if (res.data.posts.length < 3) {
            setShowMore(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    })();
  }, [currentUser._id]);

  const handleShowMore = () => {
    let startIndex = userPosts.length;
    setLoading(true);
    axios
      .get(
        `http://localhost:3232/api/v1/post/get-post?userId=${currentUser._id}&startIndex=${startIndex}`,
        { withCredentials: true }
      )
      .then((res) => {
        setLoading(false);
        if (res.data.success === true) {
          setUserPosts((prevState) => [...prevState, ...res.data.posts]);
          if (res.data.posts.length < 3) {
            setShowMore(false);
          }
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleDeletePost = () => {
    setShowModal(false);
    axios
      .get(
        `http://localhost:3232/api/v1/post/delete-post/${currentUser._id}/${postIdToDelete}`,
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.success === true) {
          setUserPosts((prevState) =>
            prevState.filter((post) => post._id !== postIdToDelete)
          );
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(userPosts);
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <Table hoverable className="shadow-md">
        <Table.Head>
          <Table.HeadCell>post updated</Table.HeadCell>
          <Table.HeadCell>post title</Table.HeadCell>
          <Table.HeadCell>post image</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>delete</Table.HeadCell>
          <Table.HeadCell>update</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {currentUser.isAdmin && userPosts && userPosts.length > 0 ? (
            <>
              {userPosts.map((post, index) => {
                return (
                  <Table.Row
                    key={index.toString()}
                    className="bg-gray-100 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      {new Date(post.updatedAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell className="min-w-[120px] md:max-w-[240px]">
                      <Link to={`/post/${post.slug}`}>
                        <img
                          src={post.image}
                          alt="post-img"
                          className="w-full rounded-md h-10  object-cover"
                        />
                      </Link>
                    </Table.Cell>
                    <Table.Cell className="min-w-[160px] md:max-w-[240px]">
                      {post.title}
                    </Table.Cell>

                    <Table.Cell>{post.category}</Table.Cell>
                    <Table.Cell className="text-red-800 hover:underline transition-all hover:text-red-500 cursor-pointer">
                      <span
                        onClick={() => {
                          setShowModal(true);
                          setPostIdToDelete(post._id);
                        }}
                      >
                        delete
                      </span>
                    </Table.Cell>
                    <Table.Cell className="text-lime-700 hover:underline hover:text-lime-500 transition-all">
                      <Link to={`/update-post/${post._id}`}>edit</Link>
                    </Table.Cell>
                  </Table.Row>
                );
              })}
            </>
          ) : (
            <>
              <Table.Row>
                <Table.Cell>No user Found</Table.Cell>
              </Table.Row>
            </>
          )}
        </Table.Body>
      </Table>
      {showMore && (
        <>
          <button
            onClick={handleShowMore}
            className="text-sm transition-colors py-3 self-center w-full text-violet-400 hover:text-violet-600"
          >
            {loading ? "please wait ... " : "ShowMore"}
          </button>
        </>
      )}
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        popup
        size="md"
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-gray-200 mb-4 mx-auto" />
            <h3 className="mb-5 text-lg text-gray-500 dark:text-gray-400">
              Are you sure you want to delete your account?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDeletePost}>
                Yes, I'm sure
              </Button>
              <Button color="gray" onClick={() => setShowModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default DashPosts;
