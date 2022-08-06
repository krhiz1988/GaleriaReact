import "bootstrap/dist/css/bootstrap.min.css"; // Importamos CSS
import Button from "react-bootstrap/Button"; // Importamos el componente
import Card from "react-bootstrap/Card";

const CardDos = (props) => {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={props.galeria.url}
                />
                <Card.Body>
                    <Card.Title> {props.galeria.nombre} </Card.Title>
                    <Card.Text>
                    {props.galeria.descripcion}
                    </Card.Text>
                    <Button href={props.galeria.url} target='_blank'> 
                        Ver
                    </Button>
                </Card.Body>
            </Card>
        </div>
        
    );
};
export default CardDos;