import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home">
      Benvenuto nella pagina.
      <div>
        <button type="button" onClick={() => navigate("/registrati")}>
          REGISTRATI
        </button>
        <button type="button" onClick={() => navigate("/login")}>
          LOGIN
        </button>
      </div>
    </div>
  );
}
