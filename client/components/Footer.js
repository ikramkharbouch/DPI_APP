import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (<>
        <Container className="bg-blue-300 w-full flex items-center absolute bottom-0" style={{ height: "20%", maxWidth: "100%" }}>
            <Container className="flex items-center px-24 text-center">
                <p className="font-bold mx-auto my-auto text-sm lg:text-base">2021-2022. Tous les droits sont réservés.</p>
            </Container>
        </Container>
    </>);
}

export default Footer;