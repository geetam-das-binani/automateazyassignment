const AllLeadsTable = () => {
  return (
    <div className="container w-full p-3 mx-auto md:max-w-4xl ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 shadow-lg rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Lead ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="hidden px-6 py-3 sm:table-cell">Phone</th>
              <th className="hidden px-6 py-3 sm:table-cell">Email</th>
              <th className="px-6 py-3 ">Lead Priority</th>{" "}
              <th className="hidden px-6 py-3 lg:table-cell">Lead Owner</th>
            </tr>
          </thead>
          <tbody>
            {Array(20)
              .fill(null)
              .map((_) => (
                <tr className="text-gray-700 hover:bg-gray-600 hover:text-white">
                  <th scope="row" className="px-6 py-4 font-medium">
                    Apple MacBook Pro 17"
                    <dl className="space-y-1 lg:hidden ">
                      <dt className="text-sm font-medium sm:hidden">
                        phone
                      </dt>
                      <dd className="text-sm font-medium sm:hidden">
                        email
                      </dd>
                      <dd className="text-sm font-medium lg:hidden">
                        lead-owner
                      </dd>
                    </dl>
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="hidden px-6 py-4 sm:table-cell">Laptop</td>
                  <td className="hidden px-6 py-4 sm:table-cell">@text</td>
                  <td className="px-6 py-4 ">$2999</td>
                  <td className="hidden px-6 py-4 lg:table-cell ">$2999</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div>pagination</div>
    </div>
  );
};

export default AllLeadsTable;
