import { Component } from "react";
// import { Link } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Header extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="">Hii.. I'm Pebri</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer exact to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer >
                            <LinkContainer exact to="/portofolio">
                                <Nav.Link>Portofolio</Nav.Link>
                            </LinkContainer>
                            <LinkContainer exact to="/profile">
                                <Nav.Link>Profile</Nav.Link>
                            </LinkContainer>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;