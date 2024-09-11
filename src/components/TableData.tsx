import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
type Props = {
  leadId: number; // The unique ID for the lead
  phone: string; // Lead's phone number
  email: string; // Lead's email address
  leadOwner: string; // Name of the person who owns this lead
  name: string; // Lead's full name
  leadPriority: string; // Priority level of the lead (e.g., high, medium, low)
  getSerialNumber: number; // Serial number to display in the first column
};

const TableData = ({
  leadId,
  phone,
  email,
  leadOwner,
  name,
  leadPriority,
  getSerialNumber,
}: Props) => {
  return (
    <tr className="text-gray-700 hover:bg-gray-600 hover:text-white">
      {/* Serial number and checkbox */}
      <th>
        {" "}
        <div className="flex ml-6">
          <p className="mr-2">{getSerialNumber}</p>
          <input type="checkbox" />
        </div>
      </th>
      {/* Lead ID column with additional details for small screens */}
      <th scope="row" className="px-6 py-4 font-medium">
        {leadId}
        <dl className="space-y-1 lg:hidden ">
          <dt className="text-sm font-medium sm:hidden">{phone}</dt>
          <dd className="text-sm font-medium sm:hidden">{email}</dd>
          <dd className="text-sm font-medium lg:hidden">{leadOwner}</dd>
        </dl>
      </th>
      {/* Name column */}
      <td className="px-6 py-4">{name}</td>

      {/* Phone column with WhatsApp icon, hidden on small screens */}
      <td className="hidden px-6 py-4 sm:table-cell">
        <span className="flex items-center gap-1">
          {phone} <IoLogoWhatsapp className="text-2xl text-green-500" />
        </span>{" "}
      </td>

      {/* Email column with email icon, hidden on small screens */}

      <td className="hidden px-6 py-4 sm:table-cell">
        <span className="flex items-center gap-1">
          {email} <IoMdMail className="text-2xl" />
        </span>
      </td>
      

      {/* Lead Priority column, hidden on small screens */}
      <td className="hidden px-6 py-4 lg:table-cell">{leadPriority}</td>
      

      {/* Lead Owner column, hidden on small screens */}
      <td className="hidden px-6 py-4 lg:table-cell">{leadOwner}</td>
    </tr>
  );
};

export default TableData;
