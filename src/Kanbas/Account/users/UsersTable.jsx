import React, { useState, useEffect } from "react";
import * as client from "./client";
import { Link } from "react-router-dom";

function UsersTable() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER",
  });

  const fetchUsers = async () => {
    const users = await client.findAllUsers();
    setUsers(users);
  };

  const createUser = async () => {
    const u = await client.createUser(user);
    setUsers([u, ...users]);
  };

  const selectUser = async (user) => {
    const u = await client.findUserById(user._id);
    setUser(u);
  };

  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteUser = async (user) => {
    await client.deleteUser(user);
    setUsers(users.filter((u) => u._id !== user._id));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <div className="root">
        <h1 className="heading">User List</h1>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>D.O.B</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  className="form-control"
                  placeholder="Username *"
                  value={user.username}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
                <input
                  className="form-control"
                  type="password"
                  value={user.password}
                  placeholder="Password *"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={user.firstName}
                  onChange={(e) =>
                    setUser({ ...user, firstName: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="form-control"
                  value={user.lastName}
                  onChange={(e) =>
                    setUser({ ...user, lastName: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className="form-control"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </td>
              <td>
                <select
                  className="form-control"
                  value={user.role}
                  onChange={(e) => setUser({ ...user, role: e.target.value })}
                >
                  <option value="USER">User</option>
                  <option value="ADMIN">Admin</option>
                  <option value="FACULTY">Faculty</option>
                  <option value="STUDENT">Student</option>
                  <option value="INSTRUCTOR">INSTRUCTOR</option>
                </select>
              </td>

              <td>
                <input
                  className="form-control"
                  type="date"
                  value={user.dob}
                  onChange={(e) => setUser({ ...user, dob: e.target.value })}
                />
              </td>
              <td>
                <button onClick={createUser}> Add </button>
                <button> Select </button>
              </td>
            </tr>

            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <Link
                    className="color-red pointer"
                    to={`/kanbas/account/${user._id}`}
                  >
                    {user.username}
                  </Link>
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{new Date(user.dob).toLocaleDateString("en-CA")}</td>
                <td>
                  <button>Edit</button>
                  <button onClick={(e) => deleteUser(user)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default UsersTable;
