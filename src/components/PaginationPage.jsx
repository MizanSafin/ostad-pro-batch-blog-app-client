import { useQuery } from "react-query";
import { useState } from "react";
import { getUsersPage } from "../ApiRequest/usersApi";
import User from "./Pagination/User";
import PageButton from "./Pagination/PageButton";

const PaginationPage = () => {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    isError,
    error,
    data: users,
    isFetching,
    isPreviousData,
  } = useQuery(["/users", page], () => getUsersPage(page), {
    keepPreviousData: true,
  });
  if (isLoading) return <p>Loading Users...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  const content = users.data.map((user) => <User key={user.id} user={user} />);
  const lastPage = () => setPage(users.total_pages);
  const firstPage = () => setPage(1);
  const pagesArray = Array(users.total_pages)
    .fill()
    .map((_, index) => index + 1);

  console.log(page);
  const nav = (
    <nav className="nav-ex2 flex items-center gap-5 justify-center pt-5">
      <button
        className={` px-4 py-1 text-xl  text-slate-400 rounded-md ${
          page == 1 ? "bg-green-100" : "bg-green-700 hover:bg-green-900"
        }`}
        onClick={firstPage}
        disabled={isPreviousData || page === 1}
      >
        &lt;&lt;
      </button>

      {/* Removed isPreviousData from PageButton to keep button focus color instead */}

      {pagesArray.map((pg) => (
        <PageButton key={pg} pg={pg} page={page} setPage={setPage} />
      ))}

      <button
        className={` px-4 py-1 text-xl  text-slate-400 rounded-md ${
          page == users.total_pages
            ? "bg-green-100"
            : "bg-green-700 hover:bg-green-900"
        }`}
        onClick={lastPage}
        disabled={isPreviousData || page === users.total_pages}
      >
        &gt;&gt;
      </button>
    </nav>
  );
  return (
    <div className="w-screen max-w-[900px] mx-auto text-center ">
      <h2 className="mt-10 mb-5 text-3xl font-bold text-gray-500">
        Pagination Demo :
      </h2>
      {isFetching && <span className="loading">Loading...</span>}
      <div className="flex justify-center gap-5 flex-wrap px-10 pt-5 pb-3">
        {content}
      </div>
      {nav}
    </div>
  );
};

export default PaginationPage;
