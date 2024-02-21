import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    const user = {
      name,
      email,
    };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Data added Successfully");
          form.reset();
        }
      });
  };
  return (
    <>
      <div>
        <h2>Simple CRUD</h2>
        <form onSubmit={handleAddUser}>
          <input type="text" name="name" />
          <br />
          <input type="email" name="email" />
          <br />
          <input type="submit" value="Add User" />
        </form>
      </div>
    </>
  );
}

export default App;
