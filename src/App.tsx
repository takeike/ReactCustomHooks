import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickData = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickData}>GET</button>
      {error ? (
        <p>エラーです </p>
      ) : loading ? (
        <p>読込中</p>
      ) : (
        <p>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </p>
      )}
    </div>
  );
}
