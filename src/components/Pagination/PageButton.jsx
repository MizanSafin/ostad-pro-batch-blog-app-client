const PageButton = ({ pg, setPage, page }) => {
  return (
    <button
      className={`px-4  rounded-sm  ${
        pg === page
          ? "bg-green-700 text-gray-300"
          : "bg-green-200 text-gray-600"
      }`}
      onClick={() => setPage(pg)}
    >
      {pg}
    </button>
  );
};

export default PageButton;
