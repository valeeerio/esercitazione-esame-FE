export default function Login({
  email,
  password,
  cambiaEmail,
  cambiaPassword,
}) {
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
        <button type="button">Login</button>
      </div>
    </div>
  );
}
