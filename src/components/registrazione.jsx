import { useState } from "react";

export default function Registrazione() {
  const [nome, setNome] = useState();
  const cambiaNome = (item) => {
    setNome(item.target.value);
  };

  const [cognome, setCognome] = useState();
  const cambiaCognome = (item) => {
    setCognome(item.target.value);
  };

  const [email, setEmail] = useState();
  const cambiaEmail = (item) => {
    setEmail(item.target.value);
  };

  const [password, setPassword] = useState();
  const cambiaPassword = (item) => {
    setPassword(item.target.value);
  };

  const registrati = async () => {
    const url = "http://localhost:8080/utente/registrazioni";

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        id: 1,
        nome: nome,
        cognome: cognome,
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  };
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
