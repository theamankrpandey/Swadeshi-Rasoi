import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
const TopNav=()=>{
    return(
        <>
        <Navbar bg="primary" data-bs-theme="dark" style={{height:"100px"}}>
        <Container>
          <Navbar.Brand href="#home" style={{color:"orange"}}>Swadeshi Rasoi</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" >Home</Nav.Link>
            <Nav.Link as={Link} to="snacks" >Snacks</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default TopNav;