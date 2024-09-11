type Props = {
  page: number; // Current active page
  onPageChange: (page: number) => void; // Callback function to handle page change
  totalPages: number; // Total number of pages
};

const Pagination = ({ page, onPageChange, totalPages }: Props) => {
  


  return (
    <div className="flex justify-center">
      {/* Previous button, disabled when on the first page */}
      <button
        onClick={() => onPageChange(page - 1)}
        className="px-4 py-2 mr-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        disabled={page === 1}
      >
        ⬅️ Prev
      </button>
        {/* Displaying numbered buttons for each page */}
      <div className="flex space-x-2">
        {[...new Array(totalPages)].map((_, index) => (
          <button
            className={` ${
              page === index + 1 && " bg-red-400 hover:bg-red-400 text-white"
            } px-4 py-2 font-bold text-white
                 bg-blue-500 rounded hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300 `}
            key={index}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {/* Next button, disabled when on the last page */}
      <button
        onClick={() => onPageChange(page + 1)}
        className="px-4 py-2 ml-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        disabled={page === totalPages}
      >
        Next ➡️
      </button>
    </div>
  );
};

export default Pagination;
