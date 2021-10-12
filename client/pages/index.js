import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap"
import Image from 'react-bootstrap/Image'

const homePage = () => {

    return (<>

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" className="text-primary font-bold">DPI APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <Container className="flex justify-between w-11/12 h-1/6 bg-blue-200">
            <Container className="">
                <h1 className="text-3xl mt-40 ml-0">Créez votre <span className="text-blue-500 font-bold">dossier
                    patient en ligne</span></h1>
                <p className="mt-10">Using our software, one can book, create, and follow their medical records easily and without using any paper.
                    You can use our product easily by registering and approving your email.
                    Using our software, one can book, create, and follow their medical records easily and without using any paper.
                    You can use our product easily by registering and approving your email.</p>
                <Button variant="primary" className="mt-10 btn-bg">S'inscrire</Button>
            </Container>
            <Image src="doctor-lady-5.png" className="w-1/2 h-1/2 hidden lg:block" />
        </Container>

        <Container className="w-full bg-blue-500 mt-0">
            <h1>First step</h1>
        </Container>

    </>)

}

export default homePage