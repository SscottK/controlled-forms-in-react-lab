import { useState } from "react";


const Bookshelf = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    });

    const handleInputChange = (event) => {
        
        setNewBook({
            ...newBook, 
            [event.target.name]: event.target.value
        })

    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setBooks([...books, newBook])
    }


    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add A Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input name="title" 
                    onChange={handleInputChange} 
                    value={newBook.title}/>
                    <label htmlFor="author">Author: </label>
                    <input name="author" onChange={handleInputChange} value={newBook.author}/>
                    <button type="submit" >Add Book</button>
                </form>
            </div>
            <div className="bookCardDiv">
                {books.map((book, index) => {
                    return (
                        <div className="bookCard" key={index}>
                            <h3>{book.title}</h3>
                            <p>{book.author}</p> 
                        </div>                      
                    )
                })}
            </div>
        </div>
    );
};

export default Bookshelf;