import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

const ItemCard:React.FC = () => {

    return (
        <Card style={{ width: '18rem' }} className='m-2'>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Enter</Button>
            </Card.Body>
        </Card>
    )
}

export default ItemCard