import React, { useEffect, useState } from "react";
import "./UserList.css";
import { blockUser, userList } from "../../../Services/AdminApi";

function UserList() {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalBlockedUsers, setTotalBlockedUsers] = useState(0);

  const fetchData = async () => {
    const { data } = await userList();
    if (data.status) {
      setUsers(data.UserList);
      setTotalUsers(data.UserList.length);
      setTotalBlockedUsers(
        data.UserList.filter((user) => user.blockStatus).length
      );
    } else {
      console.log("error");
    }
  };

  const handleBlock = async (userId) => {
    try {
      const { data } = await blockUser(userId);
      if (data.status) {
        setUsers(
          users.map((user) =>
            user._id === userId
              ? { ...user, blockStatus: data.blockStatus }
              : user
          )
        );
      }
    } catch (error) {
      console.log("Error blocking/unblocking user : ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [users]);

  return (
    <>
      <div className="adminHome">
        <h1>User List</h1>
        <h3>Total Users: {totalUsers}</h3>
        <h3>Total Blocked Users: {totalBlockedUsers}</h3>
        <div className="adminUserTable">
          <table className="userListTable">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.username}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.blockStatus ? (
                      <button
                        className="adminUserListBlock"
                        onClick={() => handleBlock(user._id)}
                        style={{ backgroundColor: "rgb(47, 166, 47)" }}
                      >
                        Unblock
                      </button>
                    ) : (
                      <button
                        className="adminUserListBlock"
                        onClick={() => handleBlock(user._id)}
                        style={{ backgroundColor: "#ff5a5a" }}
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
