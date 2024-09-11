import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface TicketProps {
  id: number;
  type: string;
  reason: string;
  description: string;
  customer: string;
  vehicle: string;
  date: string;
  term: string;
}

export const Ticket: React.FC<TicketProps> = ({ id, type, reason, description, customer, vehicle, date, term }) => {
  return (
    <tr className="border-b border-transparent bg-white">
      <td className="px-4 py-4">{id}</td> 
      <td className="px-4 py-4">{type}</td>
      <td className="px-4 py-4">{reason}</td>
      <td className="px-4 py-4">{description}</td>
      <td className="px-4 py-4">{customer}</td>
      <td className="px-4 py-4">{vehicle}</td>
      <td className="px-4 py-4">{date}</td>
      <td className="px-4 py-4">{term}</td>
      <td className="px-4 py-4 flex space-x-2">
        <button className="text-blue-500 hover:text-blue-700">
          <EditIcon />
        </button>
        <button className="text-red-500 hover:text-red-700">
          <DeleteIcon />
        </button>
      </td>
    </tr>
  );
};
