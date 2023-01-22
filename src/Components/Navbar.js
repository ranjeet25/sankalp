import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function CollapsibleExample() {
  return (
    <Navbar
      style={{ padding: "20px", backgroundColor: "#8338ec" }}
      collapseOnSelect
      expand="lg"
      variant="dark"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#home">SANKALP</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link href="#memes">Features</Nav.Link>
            <Nav.Link href="#memes">Apply</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <NavDropdown title="Login" id="collasible-nav-dropdown">
              <NavDropdown.Item href="login">Student</NavDropdown.Item>
              <NavDropdown.Item href="login">Teacher</NavDropdown.Item>
              <NavDropdown.Item href="login">Admin</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Resolver</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
