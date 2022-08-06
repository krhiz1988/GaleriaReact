import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import Button from "react-bootstrap/Button"; // Importamos el componente
const Footer = () => {
    return (
    <div>
        <Container fluid>
            <Row className='footer'>
                <Col sm={6}>@Todos los derechos reservado.</Col>
                <Col sm={6}> 
                    <Button href="https://www.google.cl" target='_blank'> 
                        Ver más información
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
    );
};
export default Footer;