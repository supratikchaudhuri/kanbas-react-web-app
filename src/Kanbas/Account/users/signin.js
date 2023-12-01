import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [credentials, setCredentials] = useState({
    username: "iron_man",
    password: "stark123",
  });

  const navigate = useNavigate();
  const signin = async () => {
    const user = await client.signin(credentials);
    console.log(user);

    if (user === undefined) {
      alert("Invalid credentials");
      return;
    }
    // dispatch(setUser(user));
    navigate("/kanbas/account");
  };

  return (
    <div className="container main">
      <div className="row root">
        <h1 className="heading">Signin</h1>
        <hr />
        <input
          value={credentials.username}
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
        <input
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        <button onClick={signin}> Signin </button>
      </div>
    </div>
  );
}
export default Signin;
