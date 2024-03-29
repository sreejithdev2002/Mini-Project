import React, { useState } from "react";
import "./UserList.css";
import userData from "../../../Data/Users.json";

function UserList() {
  const [users, setUsers] = useState(userData.users);

  const handleBlockToggle = (userId) => {
    // Find the user by ID
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        // Toggle the isBlocked property
        return { ...user, blockStatus: !user.blockStatus };
      }
      return user;
    });
    // Update the state with the modified users array
    setUsers(updatedUsers);
  };

  const totalUsers = users.length;

  return (
    <>
      <div className="adminHome">
        <h1>User List</h1>
        <h3>
          Total Users: {totalUsers}
        </h3>
        <div className="adminUserTable">
        <table className="userListTable">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Date Joined</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.dateJoined}</td>
                <td>
                  {user.blockStatus ? (
                    <button
                      className="adminUserListBlock"
                      onClick={() => handleBlockToggle(user.id)}
                    >
                      Unblock
                    </button>
                  ) : (
                    <button
                      className="adminUserListBlock"
                      onClick={() => handleBlockToggle(user.id)}
                    >
                      Block
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
}

export default UserList;
