import "./Homepage.css";
import Header from "../component/subcomponent/Header";

function Homepage() {
  return (
    <>
      <div className="containerHome">
        <Header page="HOME" color="#1C1463"></Header>
        <div className="containerBody">
          <div className="containerBio">
            <img src="mucca.svg" className="cow"></img>
            <div className="text">
              <h3
                style={{
                  color: "#E14A2B",
                  fontSize: "30px",
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                C
              </h3>
              <h3
                style={{
                  color: "#F7941F",
                  fontSize: "30px",
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                P
              </h3>
              <h3
                style={{
                  color: "#1C1463",
                  fontSize: "30px",
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                S
              </h3>
              <h4
                style={{
                  fontFamily: "Kyiv*Type Serif",
                }}
              >
                è una cooperativa nata del 2001 dalla fusione di tre cooperative
                che operavano nel campo dei servizi zootecnici, ambientali e
                commerciali
              </h4>
            </div>
          </div>
          <div className="services">
            <h3
              style={{
                fontFamily: "Kyiv*Type Serif",
                color: "#1C1463",
              }}
            >
              SERVIZI DI CPS:
            </h3>
            <p
              style={{
                fontFamily: "Kyiv*Type Serif",
              }}
            >
              •Servizio di fecondazione artificiale a cura dei propri veterinari
              associati con o senza fornitura seme. •Redazione piani di
              accoppiamento tradizionali e genomici. •Prelievi biologici per
              test genomici e conseguente elaborazione e presentazione dei
              risultati. •Assistenza zooiatrica a cura dei veterinari soci.
              •Fornitura e formazione all’uso dei più innovativi sistemi di
              monitoraggio della mandria. •Fornitura e installazione di igloo
              per singoli o gruppi di vitelli che garantiscono comfort e
              benessere al giovane bestiame. •Consulenza e prodotti per
              un’efficace strategia di controllo delle mosche in allavamento.
              •Fornitura e formazione all’uso di software dedicati per la
              gestione della vostra azienda. •Consulenza in materia di
              sicurezza, fornitura e installazione di cartellonistica, estintori
              ed altri presidi per la gestione dei rischi, nonchè redazione del
              DVR. •Tramite CPS è possibile anche accedere a tutta la gamma di
              servizi specialistici offerti dalla partner A.V.A. (metti link su
              ava per info)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
