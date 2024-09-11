import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatDate } from '../../utils/FormatDate';
import { useAuth } from '../../hooks/AuthContext';
import { deleteTicket } from '../../services/api'

interface TicketProps {
  id: number | undefined;
  type: string;
  reason: string;
  description: string;
  customer: string;
  vehicle: string;
  createdAt: string;
  term: string | undefined;
  getTickets?: () => void;
}


export const Ticket: React.FC<TicketProps> = ({ id, type, reason, description, customer, vehicle, createdAt, term, getTickets }) => {
  const { user } = useAuth();
  const isAdmin = user.role === 'ADMIN';

  const handleDelete = async (id: number | undefined = 0) => {
    try{
      await deleteTicket(id, user?.token);
      getTickets && getTickets();
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <tr className="border-b border-transparent bg-white">
      <td className="px-4 py-4">{id}</td> 
      <td className="px-4 py-4">{type}</td>
      <td className="px-4 py-4">{reason}</td>
      <td className="px-4 py-4">{description}</td>
      <td className="px-4 py-4">{customer}</td>
      <td className="px-4 py-4">{vehicle}</td>
      <td className="px-4 py-4">{formatDate(createdAt)}</td>
      <td className="px-4 py-4">{formatDate(term ?? '')}</td>
      <td className="px-4 py-4 flex space-x-2">
        <button className="text-blue-500 hover:text-blue-700">
          <EditIcon />
        </button>
        {isAdmin && (
          <button className="text-red-500 hover:text-red-700">
            <DeleteIcon 
              onClick={() => handleDelete(id)}
            />
          </button>
        )}
      </td>
    </tr>
  );
};
