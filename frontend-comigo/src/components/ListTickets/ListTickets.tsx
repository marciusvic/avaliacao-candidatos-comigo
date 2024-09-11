import React, { useState, useEffect } from 'react';
import { Ticket } from '../Ticket/Ticket';
import { fetchTickets, TicketData } from '../../services/api';
import { useAuth } from '../../hooks/AuthContext';

interface ListTicketsProps {
  getTickets: () => void;
}

export const ListTickets: React.FC<ListTicketsProps> = ({ getTickets }) => {
  const { user } = useAuth();
  const [ticketData, setTicketData] = useState<TicketData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const tickets = await fetchTickets(user.token);
      setTicketData(tickets);
    };
    fetchData();
  }, [getTickets, user.token]);
  return (
    <div className="p-4">
      <table className="min-w-full table-auto border-separate" style={{ borderSpacing: '0 10px' }}>
        <thead>
          <tr className="bg-gray-100 border-b">
            <th className="px-4 py-2 text-left text-sm font-semibold">ID</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Tipo</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Motivo</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Descrição</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Cliente</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Veículo</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Data da abertura</th>
            <th className="px-4 py-2 text-left text-sm font-semibold">Prazo</th>
          </tr>
        </thead>
        <tbody>
          {ticketData.map(ticket => (
            <Ticket
              key={ticket.id}
              id={ticket.id}
              type={ticket.type}
              reason={ticket.reason}
              description={ticket.description}
              customer={ticket.customer}
              vehicle={ticket.vehicle}
              createdAt={ticket.createdAt || ''}
              term={ticket.term}
              getTickets={getTickets}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
