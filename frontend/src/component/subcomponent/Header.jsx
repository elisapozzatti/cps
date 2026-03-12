function Header({ page, color }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderBottom: "2px solid #1C1463",
          height: "10vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0",
            marginRight: "5px",
          }}
        >
          <h1
            style={{
              fontFamily: "Kyiv*Type Serif",
              fontWeight: "bolder",
              color: "#E14A2B",
              fontSize: "3rem",
            }}
          >
            C
          </h1>
          <h1
            style={{
              fontFamily: "Kyiv*Type Serif",
              fontWeight: "bolder",
              color: "#F7941F",
              fontSize: "3rem",
            }}
          >
            P
          </h1>
          <h1
            style={{
              fontFamily: "Kyiv*Type Serif",
              fontWeight: "bolder",
              color: "#1C1463",
              fontSize: "3rem",
            }}
          >
            S
          </h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <h5
            style={{
              fontFamily: "Kyiv*Type Serif",
              color: "#E14A2B",
              margin: "0",
            }}
          >
            COOPERATIVA
          </h5>
          <h5
            style={{
              fontFamily: "Kyiv*Type Serif",
              color: "#F7941F",
              margin: "0",
            }}
          >
            PRODOTTI
          </h5>
          <h5
            style={{
              fontFamily: "Kyiv*Type Serif",
              color: "#1C1463",
              margin: "0",
            }}
          >
            SERVIZI
          </h5>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "5vh",
          padding: "0 5px 0 5px",
        }}
      >
        <img
          src="menu.svg"
          style={{
            height: "30px",
            width: "30px",
            marginRight: "auto",
          }}
        ></img>
        <h5
          style={{
            color: `${color}`,
          }}
        >
          {page}
        </h5>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <img
            src="star.svg"
            style={{
              height: "20px",
              width: "20px",
            }}
          ></img>
          <img
            src="cart.svg"
            style={{
              height: "20px",
              width: "20px",
            }}
          ></img>
          <img
            src="user.svg"
            style={{
              height: "20px",
              width: "20px",
            }}
          ></img>
        </div>
      </div>
    </>
  );
}

export default Header;
