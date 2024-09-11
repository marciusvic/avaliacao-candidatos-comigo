import React from 'react';
import { Ticket } from '../Ticket/Ticket';

// Dados de exemplo
const ticketData = [
  {
    id: 110,
    type: 'Suporte',
    reason: 'Incidente',
    description: 'Veículos sem comunicação',
    customer: 'Cliente 1',
    vehicle: 'Veículo 2, Veículo 6',
    date: '02/07/2023',
    term: '05/07/2023',
  },
  {
    id: 111,
    type: 'Vendas',
    reason: 'Upgrade',
    description: 'Upgrade veículo 2',
    customer: 'Cliente 2',
    vehicle: 'Veículo 2',
    date: '01/07/2023',
    term: '05/07/2023',
  },
  {
    id: 112,
    type: 'Operacional',
    reason: 'Teste de rastreador',
    description: 'Testes de instalação - OS 002',
    customer: 'Cliente 1',
    vehicle: 'Veículo 3',
    date: '01/07/2023',
    term: '05/07/2023',
  },
];

export const ListTickets: React.FC = () => {
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
              date={ticket.date}
              term={ticket.term}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
