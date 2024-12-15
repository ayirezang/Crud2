import React, { useState } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoMdPerson } from "react-icons/io";
import { TiKey } from "react-icons/ti";

const UsersForm = ({ setUsers }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let user = { name, email, password };
    console.log(user);
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div className="  h-screen flex justify-center items-center ">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h1 className="uppercase">Usersform</h1>
        <label className="input input-bordered flex items-center gap-2">
          <IoMdPerson />
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <RxEnvelopeClosed />
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <TiKey />
          <input
            type="password"
            className="grow"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button className="btn btn-primary" type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
