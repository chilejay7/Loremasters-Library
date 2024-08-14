import { useState, useEffect } from "react";
import BookCard from "../Cards/BookCard";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const apiKey = import.meta.env.VITE_BOOK_KEY;

  const [searchTerm, setSearchTerm] = useState('brandon sanderson');

  const [bookData, updateBookData] = useState();

  const getBook = async () => {
    try {

      console.log('The search term is:', searchTerm);

      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=12&key=${apiKey}`
      );

      const books = response.data.items;

      console.log("The response is:", response);
      console.log("The data returned from the API is:", books);

      updateBookData(books);

      setSearchTerm('');

    } catch (error) {
      console.error(
        "There was an error fetching data from the API.  Please try again.",
        error
      );
    }
  };

  useEffect(() => {
    getBook();
  }, []);

  const handleChange = (evt) => {
    evt.preventDefault();

    const text = evt.target.value;
    console.log('The new search term is:', text);

    setSearchTerm(currTerm => {
      currTerm = text;
      return currTerm;
    })
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    getBook();
  };

  return (
    <>
      <Form className="d-flex" onSubmit = { handleSearch }>
        <Form.Control
          type="search"
          placeholder="Search for the title or author"
          className="me-2"
          aria-label="Search"
          value = { searchTerm }
          onChange = { handleChange }
        />
        <Button variant="outline-success">Search</Button>
      </Form>

      <div id="main-body">
        {bookData ? (
          <>
            <h2 className="header author">
              {bookData[0].volumeInfo.authors[0]}
            </h2>

            <div id="card-display">
              {bookData.map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
            </div>
          </>
        ) : (
          <p className="loading">Loading...Book Data Will Appear Here</p>
        )}
      </div>
    </>
  );
}
