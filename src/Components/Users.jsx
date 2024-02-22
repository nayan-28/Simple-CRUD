import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();

  const [users, setUsers] = useState(loadUsers);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");

          const remaining = users.filter((user) => user._id !== _id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <p key={user._id}>
          <span>Name:</span>
          {user.name},<span>Email</span>
          {user.email}
          <button onClick={() => handleDelete(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
