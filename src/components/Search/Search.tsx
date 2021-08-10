import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {ChangeEvent, FormEvent, useState} from "react";
import {observer} from "mobx-react-lite";
import Validation from "../../Validation";

const Search: React.FC = observer(() => {
    const [formData, setFormData] = useState('')

    const onHandleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(e.target.value)
    }

    const onHandleSubmit = (e:any) => {
        e.preventDefault()
        Validation(formData)
    }

    return (
        <div>
            <h1 className='title'>Search</h1>
            <div className='form'>
                <p className='form__title'>Введите запрос</p>
                <Form.Group className="form__group mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Введите свой запрос" value={formData}
                                  onChange={(e) => onHandleChange(e)}/>
                    <Button variant="primary" type="submit" className='search__button' onClick={(e) =>onHandleSubmit(e)}>
                        Search
                    </Button>
                </Form.Group>

            </div>
        </div>
    )
})

export default Search;