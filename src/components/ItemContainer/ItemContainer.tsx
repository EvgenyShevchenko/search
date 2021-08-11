import Container from 'react-bootstrap/Container';
import Store from "../../store/store"
import ItemCard from "../ItemCard/ItemCard";
import {Row} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {useHistory} from 'react-router-dom';
import {getQuery} from "../../Utils/query";
import {useEffect} from "react";
import GetMatchData from "../../GetMatchData";

const ItemContainer: React.FC = observer(() => {
    const history = useHistory()
    useEffect(() => {
        const query = getQuery(history, 'textInput')
        if (query) {
            GetMatchData(query)
        }
    }, [])

    return (
        <Container>
            <Row className='d-flex justify-content-center align-items-center'>
                {(Store.error !== 'Ошибка') ? Store.data.map((card, i) =>
                    <ItemCard key={i}/>
                ) : <div className='error mt-2 d-flex justify-content-center align-items-center'>"Ошибка введите верный
                    запрос"</div>}
            </Row>
        </Container>
    )
})

export default ItemContainer;

