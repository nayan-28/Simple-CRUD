import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUsers = useLoaderData();

  const [newUser, setNewUser] = useState(loadedUsers);
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const updateUser = { name, email };
    fetch(`http://localhost:5000/users/${loadedUsers._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
  };
  return (
    <div>
      <h3>Information of {loadedUsers.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" name="name" defaultValue={loadedUsers.name} />
        <br />
        <input type="email" name="email" defaultValue={loadedUsers.email} />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Update;
