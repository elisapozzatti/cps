import { Link } from "react-router-dom";
import { useState } from "react";
import "../Homepage.css";

function Header({ page, color }) {
  const [menu, setMenu] = useState(false);

  const HandleMenu = () => {
    setMenu(!menu);
  };

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
          onClick={HandleMenu}
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
          <Link to="/login">
            <img
              src="user.svg"
              style={{
                height: "20px",
                width: "20px",
              }}
            ></img>
          </Link>
        </div>
      </div>
      {menu && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "20px",
            backgroundColor: "white",
            width: "20vh",
            height: "25vh",
            position: "absolute",
            top: "11vh",
            left: "1px",
            borderRadius: "10%",
            border: "2px solid #1C1463",
            paddingRight: "20px",
            gap: "10px",
          }}
        >
          <img
            src="menu.svg"
            style={{
              width: "30px",
              height: "30px",
            }}
            onClick={HandleMenu}
          ></img>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              fontFamily: "Kyiv*Type Serif",
            }}
            className="vociMenu"
          >
            HOME
          </Link>
          <Link
            to="/products"
            style={{
              textDecoration: "none",
              fontFamily: "Kyiv*Type Serif",
            }}
            className="vociMenu"
          >
            PRODOTTI
          </Link>
          <Link
            to="/aboutus"
            style={{
              textDecoration: "none",
              fontFamily: "Kyiv*Type Serif",
            }}
            className="vociMenu"
          >
            CHI SIAMO
          </Link>
          <Link
            to="/news"
            style={{
              textDecoration: "none",
              fontFamily: "Kyiv*Type Serif",
            }}
            className="vociMenu"
          >
            NEWS
          </Link>
          <Link
            to="/contacts"
            style={{
              textDecoration: "none",
              fontFamily: "Kyiv*Type Serif",
            }}
            className="vociMenu"
          >
            CONTATTI
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Link to="https://www.instagram.com/cps_coop/">
              <img
                src="instagram.svg"
                style={{
                  width: "20px",
                  height: "20px",
                }}
                className="vociMenu"
              ></img>
            </Link>
            <Link to="https://www.facebook.com/CPS.Veneto/">
              <img
                src="facebook.svg"
                style={{
                  width: "20px",
                  height: "20px",
                }}
                className="vociMenu"
              />
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <Link
              to="/privacy"
              style={{
                fontFamily: "Kyiv*Type Serif",
                fontSize: "7px",
              }}
            >
              Informativa privacy
            </Link>
            <Link
              to="/cookie"
              style={{
                fontFamily: "Kyiv*Type Serif",
                fontSize: "7px",
              }}
            >
              Informativa cookie
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
