import React, { useState, useEffect } from 'react';
import { NavBar } from '../NavBar/NavBar';
import { ActionBar } from '../../components/ActionBar/ActionBar';
import { ListTickets } from '../../components/ListTickets/ListTickets';
import { fetchTickets, TicketData } from '../../services/api';
import { useAuth } from "../../hooks/AuthContext";

export const Home: React.FC = () => {
  const { user } = useAuth();
  const [ticketData, setTicketData] = useState<TicketData[]>([]);

  const getTickets = async () => {
    const tickets = await fetchTickets(user.token);
    setTicketData(tickets);
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <div className="bg-comigo-gray min-h-screen">
      <NavBar />
      <ActionBar getTickets={getTickets} />
      <ListTickets getTickets={getTickets}/>
    </div>
  );
};
