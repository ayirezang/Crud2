import React from "react";

const UsersLists = ({ users }) => {
  return (
    <div className="flex flex-wrap h-screen  items-center gap-5">
      {users.map((user) => {
        return (
          <div className="">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersLists;
