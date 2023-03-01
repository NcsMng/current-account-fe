import {Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <NavbarBs sticky={"top"} className={"bg-white shadow-lg mb-3"}
                  style={{
                      marginBottom: 0,
                      zIndex: 20
        }}>
            <Container>
                <Nav className={"me-auto"}>
                    <Nav.Link to="/customer" as={NavLink}>Customers</Nav.Link>
                    <Nav.Link to="/account" as={NavLink}>Create Account</Nav.Link>
                </Nav>
            </Container>
        </NavbarBs>
    )
}