import { NavBar } from '../NavBar/NavBar';
import { useAuth } from "../../hooks/AuthContext";
import { ActionBar } from '../../components/ActionBar/ActionBar'
import { Locale } from '../../components/Locale/Locale'
import { ListTickets } from '../../components/ListTickets/ListTickets'

export const Home: React.FC = () => {
  return (
    <div className="bg-comigo-gray min-h-screen">
      <NavBar />
      <Locale />
      <ActionBar />
      <ListTickets />
    </div>
  );
};
