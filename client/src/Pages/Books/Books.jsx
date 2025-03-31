import { useState, useEffect } from "react";
import BookCard from "../../Components/Cards/BookCard";
import axios from "axios";
import SearchForm from "../../Components/SearchForm/SearchForm";
import "./Books.css";

export default function Home() {
  const apiKey = import.meta.env.VITE_BOOK_KEY;

  const [initialBook, setInitialBook] = useState("steven erikson");

  const [bookData, updateBookData] = useState();

  const [errorMessage, setErrorMessage] = useState(null);

  const getBook = async (keyword) => {
    try {
      setErrorMessage(null);

      console.log("The search term is:", keyword);

      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${keyword}&maxResults=12&key=${apiKey}`
      );

      const books = response.data.items;

      console.log("The response is:", response);
      console.log("The data returned from the API is:", books);

      updateBookData(books);

    } catch (error) {

      console.error(
        "There was an error fetching data from the Google Books API.  Please try again.",
        error
      );

      const errorMessage = error.response.data.error.message

      setErrorMessage(errorMessage);
    }
  };

  useEffect(() => {
    getBook(initialBook);
    setInitialBook("");
  }, []);

  return (
    <>
      <SearchForm
        handleSearch={getBook}
      />

      <div id="main-body">
        {bookData ? (
          <>
            <h3 className="header author">
              {bookData[0].volumeInfo.authors[0]}
            </h3>

            <div id="card-display">
              {bookData.map((book) => (
                <BookCard book={book} key={book.id} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h3 className="loading construction">
              Loading...Book Data Will Appear Here
            </h3>
            <h3 className="loading construction error">
              Something may have gone wrong.
              <hr />
              {errorMessage}
            </h3>
          </>
        )}
      </div>
    </>
  );
}
