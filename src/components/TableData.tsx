
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMdMail } from "react-icons/io";type Props = {
  leadId: number;
  phone: string;
  email: string;
  leadOwner: string;
  name: string;
  leadPriority: string;
};

const TableData = ({
  leadId,
  phone,
  email,
  leadOwner,
  name,
  leadPriority,
}: Props) => {
  return (
    <tr className="text-gray-700 hover:bg-gray-600 hover:text-white">
      <th scope="row" className="px-6 py-4 font-medium">
        {leadId}
        <dl className="space-y-1 lg:hidden ">
          <dt className="text-sm font-medium sm:hidden">{phone}</dt>
          <dd className="text-sm font-medium sm:hidden">{email}</dd>
          <dd className="text-sm font-medium lg:hidden">{leadOwner}</dd>
        </dl>
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="hidden px-6 py-4 sm:table-cell"><span className="flex items-center gap-1">{phone} <IoLogoWhatsapp className="text-2xl text-green-500" /></span> </td>
      <td className="hidden px-6 py-4 sm:table-cell"><span className="flex items-center gap-1">{email} <IoMdMail  className="text-2xl" /></span></td>
      <td className="px-6 py-4 ">{leadPriority}</td>
      <td className="hidden px-6 py-4 lg:table-cell ">{leadOwner}</td>
    </tr>
  );
};

export default TableData;
