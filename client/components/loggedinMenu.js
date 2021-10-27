import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const LoggedinMenu = ({ showMenu, Logout }) => {

    const router = useRouter()

    return (<>
        <Navbar bg="light" expand="lg">
            <Container className="mx-24">
                <Navbar.Brand href="#home" className="text-primary font-bold">DPI APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto flex justify-end w-full gap-5">
                        <Nav.Link href="#home" className="font-semibold">Accueil</Nav.Link>
                        <Button className="primary bg-btn font-bold" href="/logout" onClick={Logout} >Se déconnecter</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>);
}

export default LoggedinMenu;