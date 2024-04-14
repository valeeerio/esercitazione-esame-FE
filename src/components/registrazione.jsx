export default function Registrazione({
  nome,
  cognome,
  email,
  password,
  cambiaNome,
  cambiaCognome,
  cambiaEmail,
  cambiaPassword,
  registrati,
}) {
  return (
    <div className="registrazione">
      REGISTRAZIONE
      <div className="nome">
        <textarea
          placeholder="Inserisci il nome"
          value={nome}
          onChange={cambiaNome}
        ></textarea>
      </div>
      <div className="cognome">
        <textarea
          placeholder="Inserisci il cognome"
          value={cognome}
          onChange={cambiaCognome}
        ></textarea>
      </div>
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
      <div className="registrati">
        <button type="button" onClick={registrati}>
          Registrati
        </button>
      </div>
    </div>
  );
}
