import { useEffect, useState } from "react";
import Header from "../component/subcomponent/Header";
import Footer from "../component/subcomponent/Footer";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const categorie = [
    "tutte",
    "angus",
    "prodotti uso zootecnico",
    "comp. impianti mungitura",
    "blu belga",
    "inra 95",
    "per trattamenti/terapie",
    "articoli generici",
    "pre e post mungitura",
    "detergenti e disincrostanti",
    "per alimentazione e cura",
    "dietetici/mang. vitelli",
    "articoli per insilati",
    "attrezzatura zootecnica",
    "moschicidi e topicidi",
    "articoli per recinzioni",
    "frisona",
  ];

  return (
    <>
      <div className="containerProducts">
        <Header page="PRODOTTI" color="#F7941F"></Header>
        <div className="nbBox">
          È possibile acquistare questi prodotti contattando i nostri venditori
          oppure le sedi operative oppure procedendo all’acquisto online di
          prodotti, con spedizione e consegna a cura di CPS. L’acquisto online è
          in fase di implementazione, pertanto al momento la gamma di prodotti
          disponibili è ridotta e si incrementerà in tempi successivi.
        </div>

        <div className="containerSearchNews">
          <input className="search" placeholder="Cerca..."></input>
          <button className="news">Novità!</button>
        </div>

        <div className="containerCategory">
          {categorie.map((c) => (
            <div className="category">
              <h3>{c}</h3>
            </div>
          ))}
        </div>

        <div className="containerObjects">
          {products.map((p) => (
            <Link to={`/product/${p._id}`} className="object" key={p._id}>
              <img src={p.image} />
              <h3>{p.name}</h3>
            </Link>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Products;
