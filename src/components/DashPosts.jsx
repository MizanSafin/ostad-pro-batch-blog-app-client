import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DashPosts() {
  const [userPosts, setUserPosts] = useState([]);

  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  useEffect(() => {
    (() => {
      axios
        .get(
          `http://localhost:3232/api/v1/post/get-post?userId=${currentUser._id}`,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          setUserPosts(res.data.posts);
        })
        .catch((error) => console.log(error));
    })();
  }, []);
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
                    className="bg-white dark:border-gray-600 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      {new Date(post.updatedAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell>{post.title}</Table.Cell>
                    <Table.Cell>
                      <Link to={`/post/${post.slug}`}>
                        <img
                          src={post.image}
                          alt="post-img"
                          className="h-10 w-20 object-cover"
                        />
                      </Link>
                    </Table.Cell>
                    <Table.Cell>{post.category}</Table.Cell>
                    <Table.Cell>
                      <span>delete</span>
                    </Table.Cell>
                    <Table.Cell>
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
    </div>
  );
}

export default DashPosts;
