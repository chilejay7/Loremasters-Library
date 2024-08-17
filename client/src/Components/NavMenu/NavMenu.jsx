import "./NavMenu.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavMenu() {
  return (
    <>
      <header id="main-header">
        <h1 id="site-header">The Loremaster's Library</h1>
        <h2>A study of books & whiskey</h2>

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="NavMenu">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
                <NavDropdown title="Site Locations" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/books">Books</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/tabletop">Tabletop Games</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/whiskey">Whiskey</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/tobacco">
                    Pipes and Cigars
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      {/* 
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='NavMenu'>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Site Locations" id="basic-nav-dropdown">
              <NavDropdown.Item href="/books">Books</NavDropdown.Item>
              <NavDropdown.Item href="/tabletop">
                Tabletop Games
              </NavDropdown.Item>
              <NavDropdown.Item href="/whiskey">Whiskey</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar> */}
    </>
  );
}
