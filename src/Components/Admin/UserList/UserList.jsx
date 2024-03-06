import React, {useState} from 'react';
import './UserList.css';
import userData from '../../../Data/Users.json';

function UserList() {
  const [users, setUsers] = useState(userData.users);

  const handleBlockToggle = (userId) => {
    // Find the user by ID
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        // Toggle the isBlocked property
        return { ...user, isBlocked: !user.isBlocked };
      }
      return user;
    });
    // Update the state with the modified users array
    setUsers(updatedUsers);
  };

  const totalUsers = users.length;

  return (
    <>
      <div className='adminHome'>
        <h1>User List</h1>
        <h3 style={{margin: '10px 0px', fontFamily: 'sans-serif'}}>Total Users: {totalUsers}</h3>
        <table className='userListTable'>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.isBlocked ? (
                    <button
                      className='adminUserListBlock'
                      onClick={() => handleBlockToggle(user.id)}
                    >
                      Unblock
                    </button>
                  ) : (
                    <button
                      className='adminUserListBlock'
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
    </>
  )
}

export default UserList;
