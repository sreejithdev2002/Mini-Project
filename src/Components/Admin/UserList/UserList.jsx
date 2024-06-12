import React, { useEffect, useState } from "react";
import "./UserList.css";
import { blockUser, userList } from "../../../Services/AdminApi";
import Empty from "../../User/Empty/Empty";

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
  }, []);


  if(users.length === 0){
    return <Empty message="No Users Available"/>
  }

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
                        id="admUserListUnblock"
                        onClick={() => handleBlock(user._id)}
                      >
                        Unblock
                      </button>
                    ) : (
                      <button
                        className="adminUserListBlock"
                        id="admUserListBlock"
                        onClick={() => handleBlock(user._id)}
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
