import { useState, useEffect } from "react";
import BookCard from "../../Components/Cards/BookCard";
import axios from "axios";
import SearchForm from "../../Components/SearchForm/SearchForm";
import "./Home.css";

export default function Home() {
  const apiKey = import.meta.env.VITE_BOOK_KEY;

  const [searchTerm, setSearchTerm] = useState("steven erikson");

  const [bookData, updateBookData] = useState();

  const getBook = async () => {
    try {
      console.log("The search term is:", searchTerm);

      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=12&key=${apiKey}`
      );

      const books = response.data.items;

      console.log("The response is:", response);
      console.log("The data returned from the API is:", books);

      updateBookData(books);

      setSearchTerm("");
    } catch (error) {
      console.error(
        "There was an error fetching data from the Google Books API.  Please try again.",
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
    console.log("The new search term is:", text);

    setSearchTerm((currTerm) => {
      currTerm = text;
      return currTerm;
    });
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    getBook();
  };

  return (
    <>
      <SearchForm
        handleSearch={handleSearch}
        handleChange={handleChange}
        searchTerm={searchTerm}
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
            <h3 className="loading construction">
              Something may have gone wrong. We're looking into it.
            </h3>
          </>
        )}
      </div>
    </>
  );
}
