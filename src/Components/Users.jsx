import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted Successfully");
          window.location.reload();
        }
      });
  };
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <p key={user._id}>
          <span>Name:</span>
          {user.name}
          <span>Email</span>
          {user.email}
          <button onClick={() => handleDelete(user._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
