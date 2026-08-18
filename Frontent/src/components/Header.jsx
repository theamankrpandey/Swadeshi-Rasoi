import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import MyCart from "../pages/MyCart";
import { useSelector } from "react-redux";
import "../assets/css/Header.css";
const TopNav = () => {
  const cart = useSelector((state) => state.MyCart.cart);
  const cartlength = cart.length;
  return (
    <>
      <Navbar style={{ backgroundColor: "#111111" }}>
        <Container>
          {/* Left Side */}
          <Nav className="me-auto">
            <Nav.Link style={{ color: "#aaa", fontSize: "17px" }}>
              📞 +91 99292xxxxx
            </Nav.Link>

            <Nav.Link style={{ color: "#aaa", fontSize: "17px" }}>
              ✉️ YourEmail.com
            </Nav.Link>

            <Nav.Link style={{ color: "#aaa", fontSize: "17px" }}>
              📍 India
            </Nav.Link>
          </Nav>

          
          <Nav>
            <Nav.Link
              style={{
                backgroundColor: "#f32626",
                color: "white",
                borderRadius: "25px",
                padding: "7px 18px",
                fontWeight: "bold",
                marginRight: "25px",
              }}
            >
              🔥 FREE DELIVERY TODAY!
            </Nav.Link>

            <Nav.Link style={{ color: "#aaa" }} href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "rgb(244, 235, 235)" }}
              />
            </Nav.Link>
            <Nav.Link style={{ color: "#aaa" }}>◎</Nav.Link>
            <Nav.Link style={{ color: "#aaa" }}>♪</Nav.Link>
            <Nav.Link style={{ color: "#aaa" }}>▶</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar
        bg="light"
        data-bs-theme="light"
        style={{
          display: "flex",
          height: "100px",
          position: "sticky",
          zIndex: 100,
          top: "0",
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src="https://thumbs.dreamstime.com/b/plate-spoon-fork-vector-icon-abstract-cafe-sign-cutlery-doodles-line-art-88763358.jpg"
                style={{
                  width: "50px",
                  height: "50px",
                  marginRight: "10px",
                }}
              />

              <div>
                <div>
                  <span style={{ color: "black" }}>Swadeshi</span>
                  <span style={{ color: "red" }}> Rasoi</span>
                </div>

                <div style={{ fontSize: "12px", color: "gray" }}>
                  Fast Food And Restaurant
                </div>
              </div>
            </div>
          </Navbar.Brand>
          <Nav className="me-auto" style={{ marginLeft: "20px" }}>
            <Nav.Link as={Link} to="home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="snacks">
              Snacks
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
        <div className="cart-box">
          <Link to="mycart" className="cart-link">
            <div className="cart-icon-box">
              <FontAwesomeIcon icon={faCartShopping} className="cart-icon" />

              <span className="cart-count">{cartlength}</span>
            </div>

            <span className="cart-text">My Cart</span>
          </Link>
        </div>
      </Navbar>
    </>
  );
};
export default TopNav;
