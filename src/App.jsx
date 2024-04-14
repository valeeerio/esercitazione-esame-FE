import "./App.css";
import Registrazione from "./components/registrazione";
import Login from "./components/login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home";

function App() {
  return (
    <div className="temporaneo">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage></HomePage>} />
          <Route path="registrati" element={<Registrazione></Registrazione>} />
          <Route path="login" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
