import "./Login.css";
import { useState } from "react";
import Header from "../component/subcomponent/Header";
import Footer from "../component/subcomponent/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };
  return (
    <>
      <div className="containerLogin">
        <Header page="LOGIN" color="#1C1463"></Header>
        <div>
          <form onSubmit={handleSubmit}>
            <h4>Accedi al tuo account</h4>
            <label for="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label for="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit">Login</button>
            <h5>Password dimenticata?</h5>
            <button type="button">Oppure registrati</button>
          </form>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Login;
