import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <p key={user._id}>
          <span>Name:</span>
          {user.name}
          <br></br>
          <span>Email</span>
          {user.email}
        </p>
      ))}
    </div>
  );
};

export default Users;
