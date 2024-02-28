import React from 'react';
import './UserList.css';
import userData from '../../../Data/Users.json';

function UserList() {
  return (
    <>
      <div className='adminHome'>
        <h1>Admin Homepage</h1>
        <h2>User List</h2>
        <table className='userListTable'>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {userData.users.map(user => (
              <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UserList
