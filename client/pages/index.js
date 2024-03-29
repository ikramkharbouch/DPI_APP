import { Navbar, Nav, NavDropdown, Button, Container } from "react-bootstrap"
import Image from 'react-bootstrap/Image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link'
import Footer from '../components/Footer'

const homePage = () => {

    return (<>
        <Navbar bg="light" expand="lg">
            <Container className="mx-24">
                <Navbar.Brand href="#home" className="text-primary font-bold">DPI APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto flex justify-end w-full gap-5">
                        <Nav.Link href="#home" className="">Accueil</Nav.Link>
                        <Link href="/login"><Button className="primary bg-btn" href="#link">S'identifier</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        <Container className="flex justify-around lg:justify-between items-center md:items-start lg:items-start first-section" style={{ height: "50%" }}>
            <Container className="py-4 mt-20">
                <h1 className="text-xl lg:text-3xl ml-0">Créez votre <span className="text-blue-500 font-bold">dossier
                    patient en ligne</span></h1>
                <p className="text-xs md:text-sm lg:text-base md:mt-3 lg:mt-5">Using our software, one can book, create, and follow their medical records easily and without using any paper.
                    You can use our product easily by registering and approving your email.
                    Using our software, one can book, create, and follow their medical records easily and without using any paper.
                    You can use our product easily by registering and approving your email.</p>
                <Link href="/register"><Button variant="primary" className=" md:mt-4 lg:mt-10 btn-bg">S'inscrire</Button></Link>
            </Container>
            <Image src="doctor-lady-5.png" className="w-full h-full hidden md:block lg:block first-image" />
        </Container>

        <Container className="w-full bg-blue-500 mt-0 md:flex lg:flex text-white gap-50 mx-auto" style={{ height: "120px" }}>
            <div className="my-auto mx-24">
                <h3 className="font-light md:text-sm lg:text-base">Etape 1:</h3>
                <h1 className="font-bold md:text-sm lg:text-xl">S'inscrire</h1>
            </div>

            <div className="my-auto mx-24">
                <h3 className="font-light md:text-sm lg:text-base">Etape 2:</h3>
                <h1 className="font-bold md:text-sm lg:text-xl">S'identifier</h1>
            </div>

            <div className="my-auto mx-24">
                <h3 className="font-light md:text-sm lg:text-base">Etape 3:</h3>
                <h1 className="font-bold md:text-sm lg:text-xl">Remplir votre dossier patient informatisé</h1>
            </div>

        </Container>

        <Container className="w-full bg-blue-100 mt-0 md:flex lg:flex text-gray-900 gap-50" style={{ height: "30%" }}>
            <div className="mx-24 my-auto">
                <h1 className="md:text-base lg:text-xl font-bold">Pourquoi choisir notre application ?</h1>
                <p className="md:text-sm lg:text-lg font-light mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </Container>

        <Container className="w-full mt-10 md:flex lg:flex text-gray-900 gap-50 medium-screen" style={{ maxHeight: "30%" }}>
            <div className="mx-24 my-auto w-full">
                <h1 className="md:text-base lg:text-xl font-bold">Nos Fonctionnalités</h1>
                <div className="flex lg:justify-between wrap gap-2 lg:gap-5">
                    <div className="w-1/4 shadow-lg mt-10 rounded-lg h-full flex items-center" style={{ height: "16rem" }}>
                        <div className="mx-10">
                            <h1 className="md:text-sm lg:text-base">Procédure <span className="font-bold text-blue-500">Facile</span></h1>
                            <p className="font-light md:text-xs text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy.</p>
                        </div>
                    </div>
                    <div className="w-1/4 shadow-lg mt-10 rounded-lg h-full flex items-center" style={{ height: "16rem" }}>
                        <div className="mx-10">
                            <h1 className="md:text-sm lg:text-base">Rendez-<span className="font-bold text-blue-500">Vous</span></h1>
                            <p className="font-light md:text-xs text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy.</p>
                        </div>
                    </div>
                    <div className="w-1/4 shadow-lg mt-10 rounded-lg h-full flex items-center" style={{ height: "16rem" }}>
                        <div className="mx-10">
                            <h1 className="md:text-sm lg:text-base">Sécurité des <span className="font-bold text-blue-500">données</span></h1>
                            <p className="font-light md:text-xs text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy.</p>
                        </div>
                    </div>
                    <div className="w-1/4 shadow-lg mt-10 rounded-lg h-full flex items-center" style={{ height: "16rem" }}>
                        <div className="mx-10">
                            <h1 className="md:text-sm lg:text-base">Sécurité des <span className="font-bold text-blue-500">données</span></h1>
                            <p className="font-light md:text-xs text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

        <Container className="w-full mt-3 md:flex lg:flex text-gray-900 gap-50" style={{ height: "40%" }}>
            <div className="mx-24 my-auto">
                <h1 className="md:text-base lg:text-xl font-bold">Nos Partenaires</h1>
                <div className="flex gap-10">
                    <Image src="logo-um6p.png" className="w-1/4 h-full mt-10 opacity-70" />
                    <Image src="logo-um6p.png" className="w-1/4 h-full mt-10 opacity-70" />
                    <Image src="logo-um6p.png" className="w-1/4 h-full mt-10 opacity-70" />
                </div>
            </div>
        </Container>

        <Container className="bg-blue-300 w-full flex items-center relative bottom-0" style={{ height: "20%", maxWidth: "100%" }}>
            <Container className="flex items-center px-24 text-center">
                <p className="font-bold mx-auto my-auto text-sm lg:text-base">2021-2022. Tous les droits sont réservés.</p>
            </Container>
        </Container>
    </>)

}

export default homePage