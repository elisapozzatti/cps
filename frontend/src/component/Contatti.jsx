import Footer from "./subcomponent/Footer";
import Header from "./subcomponent/Header";
import people from "../component/objects/People";
import { Link } from "react-router-dom";
import "./Contatti.css";

function Contatti() {
  return (
    <>
      <div className="containerContatti">
        <Header page="CONTATTI" color="#1C1463" />
        <div className="containerBodyContatti">
          <div className="divPersone">
            {people.map((p, index) => (
              <div className="persona" key={index}>
                <div className="immagine">
                  <img src={p.imm}></img>
                </div>
                <div className="dati">
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "Kyiv*Type Serif",
                      fontWeight: "bold",
                    }}
                  >
                    {p.nome}
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "Kyiv*Type Serif",
                    }}
                  >
                    {p.ruolo}
                  </p>
                  <p
                    style={{
                      margin: "0",
                      fontFamily: "Kyiv*Type Serif",
                    }}
                  >
                    {p.telefono}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="divForm">
            <h3
              style={{
                fontFamily: "Kyiv*Type Serif",
              }}
            >
              INVIO RICHIESTA
            </h3>

            <select>
              <option
                style={{
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                Seleziona reparto...
              </option>
              <option
                style={{
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                Informazioni generali
              </option>
              <option
                style={{
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                Assistenza e spedizioni
              </option>
              <option
                style={{
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                Amministrazione
              </option>
              <option
                style={{
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                Richieste preventivo
              </option>
            </select>

            <input
              type="text"
              placeholder="nome"
              style={{
                fontFamily: "Kyiv*Type Serif",
              }}
            />
            <input
              type="email"
              placeholder="email"
              style={{
                fontFamily: "Kyiv*Type Serif",
              }}
            />
            <input
              type="text"
              placeholder="telefono"
              style={{
                fontFamily: "Kyiv*Type Serif",
              }}
            />

            <textarea
              placeholder="richiesta"
              style={{
                fontFamily: "Kyiv*Type Serif",
              }}
            ></textarea>

            <div className="privacy">
              <input
                type="checkbox"
                style={{
                  width: "10px",
                  height: "10px",
                  marginTop: "20px",
                }}
              />
              <Link
                to="/privacy"
                style={{
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                Dichiaro di aver letto l'informatica sulla privacy
              </Link>
            </div>

            <div className="buttons">
              <button
                style={{
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                INVIA
              </button>
              <button
                style={{
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                ANNULLA
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contatti;
