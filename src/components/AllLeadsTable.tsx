const AllLeadsTable = () => {
  return (
    <div className="container p-3 md:mx-auto md:max-w-4xl ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-700 hover:bg-gray-600 hover:text-white">
              <th
                scope="row"
                className="px-6 py-4 font-medium"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="px-6 py-4">Silver</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">$2999</td>
            </tr>
           
          </tbody>
        </table>
      </div>
      <div>
        pagination
      </div>
    </div>
  );
};

export default AllLeadsTable;
