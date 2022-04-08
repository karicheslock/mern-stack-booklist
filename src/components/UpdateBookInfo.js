import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';

function UpdateBookInfo() {
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

    useEffect(() => {
        axios
            .get('http://localhost:8082/api/books/'+id)
            .then(res => {
                setTitle(res.data.title)
                setIsbn(res.data.isbn)
                setAuthor(res.data.author)
                setDescription(res.data.description)
                setPublishedDate(res.data.publishedDate)
                setPublisher(res.data.publisher)
            })
            .catch(err => {
                console.log("Error from UpdateBookInfo");
            })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            title,
            isbn,
            author,
            description,
            publishedDate,
            publisher
        };

        axios
            .put('http://localhost:8082/api/books/'+id, data)
            .then(res => {
                navigate('/show-book/'+id);
            })
            .catch(err => {
                console.log("Error in UpdateBookInfo!");
            })

    };

    return (
      <div className="UpdateBookInfo">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                  Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Edit Book</h1>
              <p className="lead text-center">
                  Update Book's Info
              </p>
            </div>
          </div>

          <div className="col-md-8 m-auto">
          <form noValidate onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="title">Title</label>
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
            <label htmlFor="isbn">ISBN</label>
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
            <label htmlFor="author">Author</label>
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
            <label htmlFor="description">Description</label>
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
            <label htmlFor="published_date">Published Date</label>
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
            <label htmlFor="publisher">Publisher</label>
              <input
                type='text'
                placeholder='Publisher of this Book'
                name='publisher'
                className='form-control'
                value={publisher}
                onChange={handlePublisherChange}
              />
            </div>

            <button type="submit" className="btn btn-outline-info btn-lg btn-block">Update Book</button>
            </form>
          </div>

        </div>
      </div>
    );
}

export default UpdateBookInfo;