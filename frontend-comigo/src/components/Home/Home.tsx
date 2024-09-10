import { NavBar } from '../NavBar/NavBar';
import { useAuth } from "../../hooks/AuthContext";

export const Home: React.FC = () => {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <NavBar />
      <h1>Home</h1>
    </div>
  );
};