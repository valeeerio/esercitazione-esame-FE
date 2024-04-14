import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState();
  const cambiaEmail = (item) => {
    setEmail(item.target.value);
  };

  const [password, setPassword] = useState();
  const cambiaPassword = (item) => {
    setPassword(item.target.value);
  };

  const login = async () => {
    const url = "http://localhost:8080/utente/registrazioni";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  };
  return (
    <div className="login">
      LOGIN
      <div className="email">
        <textarea
          placeholder="mail"
          value={email}
          onChange={cambiaEmail}
        ></textarea>
      </div>
      <div className="password">
        <textarea
          placeholder="password"
          value={password}
          onChange={cambiaPassword}
        ></textarea>
      </div>
      <div className="login">
        <button type="button" onClick={login}>
          Login
        </button>
      </div>
    </div>
  );
}
