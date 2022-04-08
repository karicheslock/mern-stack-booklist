import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';


function CreateBook() {
    const [title, setTitle] = useState('');
    const [isbn, setIsbn] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [publishedDate, setPublishedDate] = useState('');
    const [publisher, setPublisher] = useState('');

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleIsbnChange = (e) => {
        setIsbn(e.target.value);
    }

    const handleAuthorChange = (e) => {
        setAuthor(e.target.value);
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

    const handlePublishedDateChange = (e) => {
        setPublishedDate(e.target.value);
    }

    const handlePublisherChange = (e) => {
        setPublisher(e.target.value);
    }

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title,
            isbn,
            author,
            description,
            publishedDate,
            publisher
        }

        axios
            .post('http://localhost:8082/api/books', data)
            .then(res => {
                setTitle('')
                setIsbn('')
                setAuthor('')
                setDescription('')
                setPublishedDate('')
                setPublisher('')
                navigate('/');
            })
            .catch(err => {
                console.log('Error in CreateBook!')
            }) 
    }

    return (
        <div className="CreateBook">
        <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
                <br />
                <Link to="/" className="btn btn-outline-warning float-left">
                    Show BooK List
                </Link>
            </div>
            <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Add Book</h1>
                <p className="lead text-center">
                    Create new book
                </p>

                <form noValidate onSubmit={handleSubmit}>
                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='Title of the Book'
                    name='title'
                    className='form-control'
                    value={title}
                    onChange={handleTitleChange}
                    />
                </div>
                <br />

                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='ISBN'
                    name='isbn'
                    className='form-control'
                    value={isbn}
                    onChange={handleIsbnChange}
                    />
                </div>

                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='Author'
                    name='author'
                    className='form-control'
                    value={author}
                    onChange={handleAuthorChange}
                    />
                </div>

                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='Describe this book'
                    name='description'
                    className='form-control'
                    value={description}
                    onChange={handleDescriptionChange}
                    />
                </div>

                <div className='form-group'>
                    <input
                    type='date'
                    placeholder='published_date'
                    name='published_date'
                    className='form-control'
                    value={publishedDate}
                    onChange={handlePublishedDateChange}
                    />
                </div>
                <div className='form-group'>
                    <input
                    type='text'
                    placeholder='Publisher of this Book'
                    name='publisher'
                    className='form-control'
                    value={publisher}
                    onChange={handlePublisherChange}
                    />
                </div>

                <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                />
                </form>
            </div>
            </div>
        </div>
        </div>
    );
}

export default CreateBook;