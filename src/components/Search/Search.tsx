import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ChangeEvent, useEffect, useState} from "react";
import {observer} from "mobx-react-lite";
import GetMatchData from "../../GetMatchData";
import {MouseEvent} from "react";
import {getQuery, setQuery} from "../../Utils/query";
import {createBrowserHistory} from "history";
import {useHistory, Router} from "react-router-dom"

const Search: React.FC = observer(() => {

    useEffect(() => {
        const query = getQuery(history, 'textInput')
        if (query) {
            setFormData(query)
        }
    }, [])

    const history = useHistory()
    const customHistory = createBrowserHistory()
    const [formData, setFormData] = useState<string>('')

    const onHandleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(e.target.value)
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === 'Enter') {
            GetMatchData(formData)
                .then(data => history.push(data as string))
            setQuery(history, {textInput: formData})

        }
    }

    const onHandleSubmit = (e: MouseEvent<HTMLInputElement>) => {
        e.preventDefault()
        GetMatchData(formData)
            .then(data => history.push(data as string))
        setQuery(history, {textInput: formData})
    }

    return (
        <Router history={customHistory}>
            <div>
                <h1 className='title'>Search</h1>
                <div className='form'>
                    <p className='form__title'>Введите запрос</p>
                    <Form.Group className="form__group mb-3" controlId="formBasicEmail">
                        <Form.Control type="text"
                                      className="form__input"
                                      placeholder="Введите свой запрос"
                                      value={formData}
                                      onChange={(e) => onHandleChange(e)}
                                      onKeyPress={(e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => onKeyPress(e)}
                                      autoFocus
                        />
                        <Button variant="primary" type="submit" className='search__button'
                                onClick={(e: MouseEvent<HTMLInputElement>) => onHandleSubmit(e)}>
                            Search
                        </Button>
                    </Form.Group>

                </div>
            </div>
        </Router>
    )
})

export default Search;