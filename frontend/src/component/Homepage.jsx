import "./Homepage.css";
import Header from "../component/subcomponent/Header";
import Footer from "../component/subcomponent/Footer";
import { useState } from "react";

function Homepage() {
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate(!rotate);
  };
  return (
    <>
      <div className="containerHome">
        <Header page="HOME" color="#1C1463"></Header>
        <div className="containerBody">
          <div className="containerBioText">
            <div className="containerBio">
              <img
                src="mucca.png"
                className="cow"
                onClick={handleRotate}
                style={{
                  transform: rotate ? "rotate(360deg)" : "rotate(0deg)",
                  transition: "transform 2s ease",
                }}
              ></img>
              <div className="text">
                <h3
                  style={{
                    color: "#E14A2B",
                    fontSize: "30px",
                    fontFamily: "Kyiv*Type Serif",
                    margin: "0",
                  }}
                >
                  C
                </h3>
                <h3
                  style={{
                    color: "#F7941F",
                    fontSize: "30px",
                    fontFamily: "Kyiv*Type Serif",
                    margin: "0",
                  }}
                >
                  P
                </h3>
                <h3
                  style={{
                    color: "#1C1463",
                    fontSize: "30px",
                    fontFamily: "Kyiv*Type Serif",
                    margin: "0",
                  }}
                >
                  S
                </h3>
                <h4
                  style={{
                    fontFamily: "Kyiv*Type Serif",
                    margin: "5px 0 0 5px",
                  }}
                >
                  è una cooperativa nata del 2001 dalla fusione di tre
                  cooperative che operavano nel campo dei servizi zootecnici,
                  ambientali e commerciali
                </h4>
              </div>
            </div>
          </div>
          <div className="services">
            <h3
              style={{
                fontFamily: "Kyiv*Type Serif",
                color: "#1C1463",
                marginBottom: "10px",
              }}
            >
              SERVIZI DI CPS:
            </h3>
            <div>
              <p
                style={{
                  fontFamily: "Kyiv*Type Serif",
                  margin: "3px",
                }}
              >
                •Servizio di fecondazione artificiale a cura dei propri
                veterinari associati con o senza fornitura seme.
              </p>
              <p
                style={{
                  fontFamily: "Kyiv*Type Serif",
                  margin: "3px",
                }}
              >
                •Redazione piani di accoppiamento tradizionali e genomici.
              </p>
              <p
                style={{
                  fontFamily: "Kyiv*Type Serif",
                  margin: "3px",
                }}
              >
                •Prelievi biologici per test genomici e conseguente elaborazione
                e presentazione dei risultati.
              </p>
              <p
                style={{
                  fontFamily: "Kyiv*Type Serif",
                  margin: "3px",
                }}
              >
                •Assistenza zooiatrica a cura dei veterinari soci.
              </p>
              <p
                style={{
                  fontFamily: "Kyiv*Type Serif",
                  margin: "3px",
                }}
              >
                •Fornitura e formazione all’uso dei più innovativi sistemi di
                monitoraggio della mandria.
              </p>
              <p
                style={{
                  fontFamily: "Kyiv*Type Serif",
                  margin: "3px",
                }}
              >
                •Fornitura e installazione di igloo per singoli o gruppi di
                vitelli che garantiscono comfort e benessere al giovane
                bestiame.
              </p>
              <p
                style={{
                  fontFamily: "Kyiv*Type Serif",
                  margin: "3px",
                }}
              >
                •Consulenza e prodotti per un’efficace strategia di controllo
                delle mosche in allavamento.
              </p>
              <p
                style={{
                  fontFamily: "Kyiv*Type Serif",
                  margin: "3px",
                }}
              >
                •Fornitura e formazione all’uso di software dedicati per la
                gestione della vostra azienda.
              </p>
              <p
                style={{
                  fontFamily: "Kyiv*Type Serif",
                  margin: "3px",
                }}
              >
                •Consulenza in materia di sicurezza, fornitura e installazione
                di cartellonistica, estintori ed altri presidi per la gestione
                dei rischi, nonchè redazione del DVR.
              </p>
              <p
                style={{
                  fontFamily: "Kyiv*Type Serif",
                  margin: "3px",
                }}
              >
                •Tramite CPS è possibile anche accedere a tutta la gamma di
                servizi specialistici offerti dalla partner A.V.A. (metti link
                su ava per info)
              </p>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Homepage;
