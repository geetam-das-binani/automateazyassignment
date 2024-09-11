import AllLeadsTable from "../components/AllLeadsTable"


const AllLeads = () => {
  return (
    <div>
      <h2 className="p-2 m-6 text-2xl font-medium text-center  bg-gray-200 rounded-lg shadow-lg md:text-5xl w-[50%] mx-auto">All Leads</h2>
      <AllLeadsTable />
    </div>
  )
}

export default AllLeads
