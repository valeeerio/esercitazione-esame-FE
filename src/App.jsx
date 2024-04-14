import { useState } from "react";
import "./App.css";
import Registrazione from "./components/registrazione";
import Login from "./components/login";

function App() {
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
    <div className="temporaneo">
      <Registrazione
        nome={nome}
        cognome={cognome}
        email={email}
        password={password}
        cambiaNome={cambiaNome}
        cambiaCognome={cambiaCognome}
        cambiaEmail={cambiaEmail}
        cambiaPassword={cambiaPassword}
        registrati={registrati}
      ></Registrazione>
      <Login
        email={email}
        password={password}
        cambiaEmail={cambiaEmail}
        cambiaPassword={cambiaPassword}
      ></Login>
    </div>
  );
}

export default App;
