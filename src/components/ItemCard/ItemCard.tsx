import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

interface ItemCardProps {
    card: any
}

const ItemCard: React.FC<ItemCardProps> = ({card}) => {

    return (
        <Card style={{width: '18rem'}} className='m-2'>
            <Card.Body>
                <Card.Title>{card.id}</Card.Title>
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