import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import toast from "react-hot-toast";
import TableData from "./TableData";

const ITEMS_PER_PAGE = 6; // ! Number of items (leads) per page
const AllLeadsTable = () => {
  const [loading,setLoading]=useState(false)
   //!  State to manage current page number
  const [page, setPage] = useState(1);
  
  //! State to store leads data fetched from the API
  const [leads, setLeads] = useState(
  [
  ]);
  const [allPages, setAllPages] = useState(0);

   //! Calculate the total number of pages based on ITEMS_PER_PAGE
  const totalPages = Math.ceil(allPages / ITEMS_PER_PAGE);

  const handleGetAllLeads = async () => {
    try {
      setLoading(true)
      //!  Fetching leads data from the API
      const res = await fetch(
        "https://dev-cc.automateazy.com/api/v1/getLeads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      if (!res.ok) {
        toast.error("Something went wrong");
        console.log("Something went wrong");
      }
      const data = await res.json();

      //!  Setting the leads data and the total number of pages
      setLeads(data.data);
      setAllPages(data.totalPages);
      
    } catch (error: any) {
      console.log(error?.message ?? "Something went wrong");
      toast.error(error?.message ?? "Something went wrong");
    }
    finally{
      setLoading(false)
    }
  };
 //!  Helper function to calculate the serial number of the lead based on page and index
  const handleSerialNumber = (index: number) => {
    return (page - 1) * ITEMS_PER_PAGE + index + 1;
  };
  useEffect(() => {
    handleGetAllLeads();
  }, []);  //! Empty dependency array to fetch leads only once when component mounts
  return (
    <div className="container w-full p-3 mx-auto md:max-w-5xl ">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 shadow-lg rtl:text-right dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:text-gray-400">
            <tr className="text-black">
              <th>
                {" "}
                <div className="ml-8">
                  <input type="checkbox" />
                </div>
              </th>
              <th className="px-6 py-3 font-extrabold ">Lead ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="hidden px-6 py-3 sm:table-cell">Phone</th>
              <th className="hidden px-6 py-3 sm:table-cell">Email</th>
              <th className="px-6 py-3 ">Lead Priority</th>{" "}
              <th className="hidden px-6 py-3 lg:table-cell">Lead Owner</th>
            </tr>
          </thead>
          <tbody>
             {/* Rendering leads in a paginated manner */}
            {leads
              .slice(
                page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
                page * ITEMS_PER_PAGE
              )
              .map((lead, index) => (
                <TableData
                  getSerialNumber={handleSerialNumber(index)}
                  key={lead.leadId}
                  {...lead} //! Spread the rest of the lead's data as props
                />
              ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-center">
        {/* Pagination controls */}
        <Pagination
          page={page}
          onPageChange={(page) => setPage(page)}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default AllLeadsTable;
