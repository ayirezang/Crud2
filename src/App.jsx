import React, { useState } from "react";
import UsersForm from "./Components/UsersForm";
import UsersLists from "./Components/UsersLists";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Ama",
      email: "ama@gmail.com",
      password: "aaabbbbb",
    },
    {
      name: "Ama",
      email: "ama@gmail.com",
      password: "aaabbbbb",
    },
  ]);
  return (
    <div className="flex  gap-5 p-5">
      <UsersForm setUsers={setUsers} />
      <UsersLists users={users} />
    </div>
  );
};

export default App;
