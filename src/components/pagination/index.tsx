interface PaginationProps {
  page: number;
  total_pages: number;
  handlePageChange: (num: number) => void;
}
const Pagination = ({
  page,
  total_pages,
  handlePageChange,
}: PaginationProps) => {
  const getVisiblePages = () => {
    if (total_pages <= 5) return pageNumbers;

    if (page <= 3) return [...pageNumbers.slice(0, 5), "...", total_pages];
    if (page >= total_pages - 2)
      return [1, "...", ...pageNumbers.slice(total_pages - 5)];

    return [1, "...", page - 1, page, page + 1, "...", total_pages];
  };

  const pageNumbers = Array.from({ length: total_pages }, (_, i) => i + 1);
  const visiblePages = getVisiblePages();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4  rounded-lg p-2 sm:p-4 ">
      <button
        className="px-2 sm:px-4 py-1 sm:py-2 bg-white text-gray-900 rounded-md disabled:opacity-50 text-sm sm:text-base"
        onClick={() => handlePageChange(page - 1)}
        disabled={page <= 1}
      >
        {`< Previous` }
      </button>

      <div className="flex items-center gap-1 sm:gap-2">
        {visiblePages.map((num, idx) => (
          <button
            key={idx}
            className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border rounded-md text-sm sm:text-base ${
              num === "..."
                ? "border-none"
                : page === num
                ? "bg-slate-900 text-white font-bold"
                : "bg-white hover:bg-gray-100  dark:text-black"
            }`}
            onClick={() => num !== "..." && handlePageChange(Number(num))}
            disabled={num === "..."}
          >
            {num}
          </button>
        ))}
      </div>

      <button
        className="px-2 sm:px-4 py-1 sm:py-2 bg-white text-gray-900 rounded-md disabled:opacity-50 text-sm sm:text-base"
        onClick={() => handlePageChange(page + 1)}
        disabled={page >= total_pages}
      >
         {`Next >` }
      </button>
    </div>
  );
};

export default Pagination;
