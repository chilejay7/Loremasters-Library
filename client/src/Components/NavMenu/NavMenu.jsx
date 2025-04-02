import Avatar from './Avatar';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./NavMenu.css";

export default function NavMenu() {
  return (
    <>
      <header id="main-header">
        <h1 id="site-header"><a href='/'>The Loremaster's Library</a></h1>
        <h2>A study of Books, Whiskey, & Games</h2>

        <Navbar expand="lg" className="bg-body-tertiary">
          <Container className="NavMenu">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <NavDropdown title="Site Locations" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/books">Books</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/gamers_corner">Tabletop Games</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/whiskey">Whiskey</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/tobacco">
                    Pipes and Cigars
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/">Home</Nav.Link>
              
                <Nav.Link href="/login" className='login-link'>Login</Nav.Link>
                <Avatar />
              
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
