import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./component/Homepage";
import Contatti from "./component/Contatti";
import Privacy from "./component/Privacy";
import Cookie from "./component/Cookie";
import Login from "./component/Login";
import Products from "./component/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacts" element={<Contatti />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
