import React, { useState } from "react";
import * as client from "./client";
function Signup() {
  const [error, setError] = useState(null);
  const [credentials, setCredentials] = useState({
    username: "rik",
    password: "12345",
  });

  const signup = async () => {
    const { status, data } = await client.signup(credentials);

    if (status === 400) {
      setError(data.message);
      return;
    }
    setError(null);
    window.location.href = "/kanbas/account";
  };

  return (
    <div className="main">
      <div className="root">
        <h1 className="heading">Signup</h1>
        <hr />
        {error && (
          <div className="col width-100 alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <input
          value={credentials.username}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              username: e.target.value,
            })
          }
        />
        <input
          value={credentials.password}
          onChange={(e) =>
            setCredentials({
              ...credentials,
              password: e.target.value,
            })
          }
        />
        <button onClick={signup}>Signup</button>
      </div>
    </div>
  );
}
export default Signup;
