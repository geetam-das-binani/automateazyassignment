type Props = {
  page: number;
  onPageChange: (page: number) => void;
  totalPages: number;
};

const Pagination = ({ page, onPageChange, totalPages }: Props) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={() => onPageChange(page - 1)}
        className="px-4 py-2 mr-1 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
        disabled={page === 1}
      >
        ⬅️ Prev
      </button>
      <div className="flex space-x-2">
        {Array(totalPages)
          .fill(null)
          .map((page, index) => (
            <button
              className={`px-4 py-2 font-bold text-white
                 bg-blue-500 rounded hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300 ${
                page === index + 1 && " bg-red-400 hover:bg-red-400 text-white"
              }`}
              key={page}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
      </div>
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
