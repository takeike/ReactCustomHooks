import "./styles.css";
import { UserCard } from "./components/UserCard";

const user = {
  id: 1,
  name: "TOM",
  email: "aaaa@consoto.com",
  address: "Tokyo Harajuku"
};

export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
