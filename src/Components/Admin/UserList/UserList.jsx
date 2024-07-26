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

  if (users.length === 0) {
    return <Empty message="No Users Available" />;
  }

  return (
    <>
      <div className="my-[140px] lg:my-[50px] mx-2 lg:mx-5 relative top-20">
        <h1 className="my-2 lg:my-5 text-4xl">User List</h1>
        <h3 className="lg:my-[10px] flex lg:justify-end font-sans text-xl">
          Total Users: {totalUsers}
        </h3>
        <h3 className="mb-2 lg:my-[10px] flex lg:justify-end font-sans text-xl">
          Total Blocked Users: {totalBlockedUsers}
        </h3>
        <div>
          <table className="w-[100%] border-collapse mb-[100px]">
            <thead>
              <tr>
                <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
                  Username
                </th>
                <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
                  Email
                </th>
                <th className="px-[4px] lg:p-2 border-2 border-[#ddd] bg-[#f2f2f2] text-left font-sans">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.username}
                  className="even:bg-[#f2f2f2] hover:bg-[#ddd] text-[12px] lg:text-base"
                >
                  <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                    {user.username}
                  </td>
                  <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                    {user.email}
                  </td>
                  <td className="border-2 border-[#ddd] px-[4px] lg:p-2 ">
                    {user.blockStatus ? (
                      <button
                        className="w-[50px] lg:w-[100px] h-10 m-[5px] border-none rounded-md lg:text-sm cursor-pointer text-white bg-green-500 hover:bg-green-600 transition-colors duration-300"
                        id="admUserListUnblock"
                        onClick={() => handleBlock(user._id)}
                      >
                        Unblock
                      </button>
                    ) : (
                      <button
                        className="w-[50px] lg:w-[100px] h-10 m-[5px] border-none rounded-md lg:text-sm cursor-pointer text-white bg-red-500 hover:bg-red-600 transition-colors duration-300"
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
