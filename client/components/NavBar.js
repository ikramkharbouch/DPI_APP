import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'

const NavBar = () => {
    return (<>
        <Navbar bg="light" expand="lg">
            <Container className="mx-24">
                <Navbar.Brand href="#home" className="text-primary font-bold">DPI APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto flex justify-end w-full gap-5">
                        <Nav.Link href="#home" className="font-semibold">Accueil</Nav.Link>
                        <Link href="/login"><Button className="primary bg-btn font-bold" href="#link">S'identifier</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}

export default NavBar