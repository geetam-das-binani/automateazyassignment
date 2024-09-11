import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import toast from "react-hot-toast";
import TableData from "./TableData";

const ITEMS_PER_PAGE = 6;
const AllLeadsTable = () => {
  const [page, setPage] = useState(1);
  const [leads, setLeads] = useState([
    {
      leadId: 101,
      name: "John Doe",
      phone: "123-456-7890",
      email: "johndoe@example.com",
      leadPriority: "High",
      leadOwner: "Alice Johnson",
    },
    {
      leadId: 102,
      name: "Jane Smith",
      phone: "987-654-3210",
      email: "janesmith@example.com",
      leadPriority: "Medium",
      leadOwner: "Bob Williams",
    },
    {
      leadId: 103,
      name: "Michael Brown",
      phone: "456-789-0123",
      email: "michaelbrown@example.com",
      leadPriority: "Low",
      leadOwner: "Alice Johnson",
    },
    {
      leadId: 104,
      name: "Sarah Green",
      phone: "321-654-9870",
      email: "sarahgreen@example.com",
      leadPriority: "High",
      leadOwner: "Charlie Adams",
    },
    {
      leadId: 105,
      name: "Chris Blue",
      phone: "654-987-3210",
      email: "chrisblue@example.com",
      leadPriority: "Medium",
      leadOwner: "Emily White",
    },
    {
      leadId: 106,
      name: "David White",
      phone: "789-012-3456",
      email: "davidwhite@example.com",
      leadPriority: "Low",
      leadOwner: "Bob Williams",
    },
    {
      leadId: 107,
      name: "Emma Black",
      phone: "012-345-6789",
      email: "emmablack@example.com",
      leadPriority: "High",
      leadOwner: "Alice Johnson",
    },
    {
      leadId: 108,
      name: "Sophia Brown",
      phone: "345-678-9012",
      email: "sophiabrown@example.com",
      leadPriority: "Medium",
      leadOwner: "Charlie Adams",
    },
    {
      leadId: 109,
      name: "Olivia Green",
      phone: "678-901-2345",
      email: "oliviagreen@example.com",
      leadPriority: "Low",
      leadOwner: "Emily White",
    },
    {
      leadId: 110,
      name: "James Grey",
      phone: "901-234-5678",
      email: "jamesgrey@example.com",
      leadPriority: "High",
      leadOwner: "Bob Williams",
    },
    {
      leadId: 111,
      name: "Liam Johnson",
      phone: "234-567-8901",
      email: "liamjohnson@example.com",
      leadPriority: "Medium",
      leadOwner: "Alice Johnson",
    },
    {
      leadId: 112,
      name: "Noah Williams",
      phone: "567-890-1234",
      email: "noahwilliams@example.com",
      leadPriority: "Low",
      leadOwner: "Charlie Adams",
    },
    {
      leadId: 113,
      name: "Ava Taylor",
      phone: "890-123-4567",
      email: "avataylor@example.com",
      leadPriority: "High",
      leadOwner: "Emily White",
    },
    {
      leadId: 114,
      name: "Isabella King",
      phone: "123-456-7899",
      email: "isabellaking@example.com",
      leadPriority: "Medium",
      leadOwner: "Bob Williams",
    },
    {
      leadId: 115,
      name: "Lucas Lee",
      phone: "987-654-3219",
      email: "lucaslee@example.com",
      leadPriority: "Low",
      leadOwner: "Alice Johnson",
    },
    {
      leadId: 116,
      name: "Mason Brown",
      phone: "456-789-0129",
      email: "masonbrown@example.com",
      leadPriority: "High",
      leadOwner: "Charlie Adams",
    },
    {
      leadId: 117,
      name: "Mia Clark",
      phone: "321-654-9879",
      email: "miaclark@example.com",
      leadPriority: "Medium",
      leadOwner: "Emily White",
    },
    {
      leadId: 118,
      name: "Harper Wilson",
      phone: "654-987-3219",
      email: "harperwilson@example.com",
      leadPriority: "Low",
      leadOwner: "Bob Williams",
    },
    {
      leadId: 119,
      name: "Elijah Harris",
      phone: "789-012-3459",
      email: "elijahharris@example.com",
      leadPriority: "High",
      leadOwner: "Alice Johnson",
    },
    {
      leadId: 120,
      name: "Benjamin Young",
      phone: "012-345-6789",
      email: "benjaminyoung@example.com",
      leadPriority: "Medium",
      leadOwner: "Charlie Adams",
    },
  ]);
  const [allPages, setAllPages] = useState(20);
  const totalPages = Math.ceil(allPages / ITEMS_PER_PAGE);

  const handleGetAllLeads = async () => {
    try {
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
      setLeads(data.data);
      setAllPages(data.totalPages);
    } catch (error: any) {
      console.log(error?.message ?? "Something went wrong");
      toast.error(error?.message ?? "Something went wrong");
    }
  };

  const handleSerialNumber = (index: number) => {
    return (page - 1) * ITEMS_PER_PAGE + index + 1;
  };
  useEffect(() => {
    handleGetAllLeads();
  }, []);
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
            {leads
              .slice(
                page * ITEMS_PER_PAGE - ITEMS_PER_PAGE,
                page * ITEMS_PER_PAGE
              )
              .map((lead, index) => (
                <TableData
                  getSerialNumber={handleSerialNumber(index)}
                  key={lead.leadId}
                  {...lead}
                />
              ))}
          </tbody>
        </table>
      </div>
      <div className="mt-2 text-center">
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
