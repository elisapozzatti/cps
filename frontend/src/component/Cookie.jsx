import Footer from "./subcomponent/Footer";
import Header from "./subcomponent/Header";

function Cookie() {
  return (
    <>
      <Header page="COOKIE" color="#1C1463"></Header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px 40px 10px 40px",
          margin: "10px",
          borderBottom: "2px solid #1C1463",
        }}
      >
        <h3
          style={{
            fontFamily: "Kyiv*Type Serif",
          }}
        >
          Informativa cookie
        </h3>
        <p
          style={{
            fontFamily: "Kyiv*Type Serif",
          }}
        >
          Questo documento spiega "cosa sono i cookie" e come vengono usati su
          questo sito.
        </p>
        <b
          style={{
            fontFamily: "Kyiv*Type Serif",
          }}
        >
          Cosa sono i cookie?
        </b>
        <p
          style={{
            fontFamily: "Kyiv*Type Serif",
          }}
        >
          Un "cookie" è un file di testo che il sito invia al computer o altro
          dispositivo connesso a internet per identificare in modo univoco il
          browser dell’utente o per salvare informazioni o configurazioni nel
          browser.
        </p>
        <b
          style={{
            fontFamily: "Kyiv*Type Serif",
          }}
        >
          Ci sono i cookie su questo sito?
        </b>
        <p
          style={{
            fontFamily: "Kyiv*Type Serif",
          }}
        >
          Sì, usiamo i cookie per migliorare il sito e fornire servizi e
          funzionalità ai suoi utilizzatori. E’ possibile limitare o
          disabilitare l’uso dei cookie tramite il browser web; tuttavia, senza
          cookie alcune o tutte le funzionalità del sito potrebbero essere
          inutilizzabili.
        </p>
        <b
          style={{
            fontFamily: "Kyiv*Type Serif",
          }}
        >
          Che tipo di cookie sono presenti su questo sito?
        </b>
        <ul
          style={{
            fontFamily: "Kyiv*Type Serif",
          }}
        >
          <li
            style={{
              fontFamily: "Kyiv*Type Serif",
            }}
          >
            Cookie strettamente necessari: Questi cookie sono essenziali per
            portare a termine attività richieste dall’utente. Per esempio, per
            memorizzare informazioni fornite dall’utente mentre naviga nel sito
            o per gestire lo stato di "login" durante la visita.
          </li>
          <li
            style={{
              fontFamily: "Kyiv*Type Serif",
            }}
          >
            Cookie funzionali:Questi cookie permettono al sito di memorizzare
            scelte effettuate dall’utente, successivamente riutilizzabili. Per
            esempio permettono al sito di memorizzare le impostazioni di
            ricerca, l’autenticazione e altre funzioni personalizzate.
          </li>
          <li
            style={{
              fontFamily: "Kyiv*Type Serif",
            }}
          >
            Cookie di Analytics: Questi cookie permettono di raccogliere dati
            relativi all’uso del sito, come i contenuti visitati e le
            funzionalità utilizzate, con l’obbiettivo di migliorare le
            performance e il layout del sito. Questi cookie possono essere
            inviati dal fornitore dello strumento di Analytics, ma sono
            utilizzati solo per scopi legati al sito.
          </li>
          <li
            style={{
              fontFamily: "Kyiv*Type Serif",
            }}
          >
            Cookie pubblicitari e di terze parti: Questi cookie memorizzano
            informazioni legate all’uso del sito per fornire informazioni
            personalizzate a scopo promozionale, sia all’interno che all’esterno
            del sito.
          </li>
        </ul>
        <b
          style={{
            fontFamily: "Kyiv*Type Serif",
          }}
        >
          Come si possono limitare o disabilitare i cookie?
        </b>
        <p
          style={{
            fontFamily: "Kyiv*Type Serif",
          }}
        >
          Ogni browser offre metodi per limitare o disabilitare i cookie. Per
          maggiori informazioni sulla gestione dei cookie vai su "Impostazioni"
          o "Preferenze" del proprio browser.
        </p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Cookie;
