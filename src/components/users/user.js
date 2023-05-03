import React, { useState } from "react";


export function UserData() {
  const [users, setUsers] = useState([]);

  function getUsers() {
    fetch("https://reqres.in/api/users/")
      .then(response => response.json())
      .then(data => {
        setUsers(data.data);
      })
      
      .catch(error => console.log(error));
  }

  return (
      <>
      <h1>User List</h1>
      <button onClick={getUsers}>Get Users</button>
      <div className="user-list">
        {users.map(user => (
          <div className="user-card" key={user.id}>
            <img src={user.avatar} alt={user.first_name} />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
      </>
  );
}



