import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "flowbite-react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiOutlineExclamationCircle } from "react-icons/hi";

function DashUsers() {
  const [users, setUsers] = useState([]);
  const [showMore, setShowMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setShowMore(true);
        axios
          .get(`http://localhost:3232/api/v1/user/get-users`, {
            withCredentials: true,
          })
          .then((res) => {
            setUsers(res.data.users);
            if (res.data.users.length < 3) {
              setShowMore(false);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    };

    if (currentUser.isAdmin) {
      fetchUsers();
    }
  }, [currentUser._id]);

  console.log(users);
  const handleShowMore = () => {
    let startIndex = users.length;
    setLoading(true);
    axios
      .get(
        `http://localhost:3232/api/v1/user/get-users?startIndex=${startIndex}`,
        { withCredentials: true }
      )
      .then((res) => {
        setLoading(false);
        if (res.data.success === true) {
          setUsers((prevState) => [...prevState, ...res.data.users]);
          if (res.data.users.length < 3) {
            setShowMore(false);
          }
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleDeleteUser = () => {
    setShowModal(false);
    axios
      .get(`http://localhost:3232/api/v1/user/delete/${userIdToDelete}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.success === true) {
          setUsers((prevState) =>
            prevState.filter((user) => user._id !== userIdToDelete)
          );
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(users);
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <Table hoverable className="shadow-md">
        <Table.Head>
          <Table.HeadCell>post created</Table.HeadCell>
          <Table.HeadCell>User name</Table.HeadCell>
          <Table.HeadCell>User image</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>isAdmin</Table.HeadCell>
          <Table.HeadCell>delete</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {currentUser.isAdmin && users && users.length > 0 ? (
            <>
              {users.map((user, index) => {
                return (
                  <Table.Row
                    key={index.toString()}
                    className="bg-gray-100 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      {new Date(user.createdAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell className="min-w-[160px] md:max-w-[240px]">
                      {user.userName}
                    </Table.Cell>
                    <Table.Cell className="w-[70px] h-[70px] md:w-[105px] md:h-[90px]">
                      <img
                        src={user.profilePicture}
                        alt="user-img"
                        className="w-full h-full rounded-full  object-cover"
                      />
                    </Table.Cell>
                    <Table.Cell className="min-w-[160px] md:max-w-[240px]">
                      {user.email}
                    </Table.Cell>

                    <Table.Cell>{user.isAdmin ? "✔" : "❌"}</Table.Cell>
                    <Table.Cell className="text-red-800 hover:underline transition-all hover:text-red-500 cursor-pointer">
                      <span
                        onClick={() => {
                          setShowModal(true);
                          setUserIdToDelete(user._id);
                        }}
                      >
                        delete
                      </span>
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
              <Button color="failure" onClick={handleDeleteUser}>
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

export default DashUsers;
