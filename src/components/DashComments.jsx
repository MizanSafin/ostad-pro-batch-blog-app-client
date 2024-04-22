import React, { useEffect, useState } from "react"
import { Button, Modal, Table } from "flowbite-react"
import axios from "axios"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HiOutlineExclamationCircle } from "react-icons/hi"

function DashComments() {
  const [comments, setComments] = useState([])
  const [showMore, setShowMore] = useState(true)
  const [loading, setLoading] = useState(false)
  const { currentUser } = useSelector((state) => state.user)
  const [showModal, setShowModal] = useState(false)
  const [commentIdToDelete, setCommentIdToDelete] = useState("")

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setShowMore(true)
        axios
          .get(`http://localhost:3232/api/v1/comment/get-all-comments`, {
            withCredentials: true,
          })
          .then((res) => {
            setComments(res.data.comments)
            if (res.data.comments.length < 3) {
              setShowMore(false)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } catch (error) {
        console.log(error)
      }
    }

    if (currentUser.isAdmin) {
      fetchComments()
    }
  }, [currentUser._id])

  const handleShowMore = () => {
    let startIndex = comments.length
    setLoading(true)
    axios
      .get(
        `http://localhost:3232/api/v1/comment/get-all-comments?startIndex=${startIndex}`,
        { withCredentials: true }
      )
      .then((res) => {
        setLoading(false)
        if (res.data.success === true) {
          setComments((prevState) => [...prevState, ...res.data.comments])
          if (res.data.comments.length < 3) {
            setShowMore(false)
          }
        }
      })
      .catch((err) => {
        setLoading(false)
        console.log(err)
      })
  }

  const handleDeleteComment = () => {
    setShowModal(false)
    axios
      .delete(
        `http://localhost:3232/api/v1/comment/delete-comment/${commentIdToDelete}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res)
        if (res.data.success === true) {
          setComments((prevState) =>
            prevState.filter((comment) => comment._id !== commentIdToDelete)
          )
        }
      })
      .catch((err) => console.log(err))
  }
  //   console.log(comments)
  return (
    <div className="table-auto overflow-x-scroll md:mx-auto p-3 scrollbar scrollbar-track-slate-100 scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 dark:scrollbar-thumb-slate-500">
      <Table hoverable className="shadow-md">
        <Table.Head className="text-xs text-center">
          <Table.HeadCell className="text-nowrap">
            comment created
          </Table.HeadCell>
          <Table.HeadCell className="text-nowrap">content</Table.HeadCell>
          <Table.HeadCell className=" max-w-[100px] text-nowrap">
            number of likes
          </Table.HeadCell>
          <Table.HeadCell className="text-nowrap">Post Id</Table.HeadCell>
          <Table.HeadCell className="text-nowrap">User Id</Table.HeadCell>
          <Table.HeadCell className="text-nowrap">delete</Table.HeadCell>
        </Table.Head>
        <Table.Body className="text-center">
          {currentUser.isAdmin && comments && comments.length > 0 ? (
            <>
              {comments.map((comment, index) => {
                return (
                  <Table.Row
                    key={index.toString()}
                    className="bg-gray-100 dark:border-gray-600 dark:bg-gray-800"
                  >
                    <Table.Cell>
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell className="line-clamp-3 min-w-[160px] md:max-w-[240px]">
                      {comment.content}
                    </Table.Cell>
                    <Table.Cell className="text-xs">
                      {comment.numbersOfLikes}
                    </Table.Cell>
                    <Table.Cell className="h-[80px]  md:w-[105px] md:h-[90px]">
                      {comment.postId}
                    </Table.Cell>
                    <Table.Cell className="min-w-[160px] md:max-w-[240px]">
                      {comment.userId}
                    </Table.Cell>

                    <Table.Cell className="text-red-800 hover:underline transition-all hover:text-red-500 cursor-pointer">
                      <span
                        onClick={() => {
                          console.log(comment)
                          setShowModal(true)
                          setCommentIdToDelete(comment._id)
                        }}
                      >
                        delete
                      </span>
                    </Table.Cell>
                  </Table.Row>
                )
              })}
            </>
          ) : (
            <>
              <Table.Row>
                <Table.Cell>No comments yet !</Table.Cell>
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
              <Button color="failure" onClick={handleDeleteComment}>
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
  )
}

export default DashComments
