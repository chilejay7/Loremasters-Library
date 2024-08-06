import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

export default function App() {

  const [bookData, updateBookData] = useState();

  const apiKey = import.meta.env.VITE_BOOK_KEY;

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=steven+erikson&key=${apiKey}`
        );

        const books = response.data.items;

        console.log("The response is:", response);
        console.log("The data returned from the API is:", books);

        updateBookData(books);
      } catch (error) {
        console.error(
          "There was an error fetching data from the API.  Please try again.",
          error
        );
      }
    };

    getBook();
  }, []);

  useEffect(() => {
    if (bookData) {
      console.log(`Here is the bookData:`, bookData);

      console.log(
        "The title of the selected book is:",
        bookData[0].volumeInfo.title
      );
    }
  }, [bookData]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    
      <div id="main-body">
        {bookData != null && bookData != undefined ? (
          <>
            <h2>{bookData[0].volumeInfo.authors[0]}</h2>

            {bookData.map((book) => (
              <>
                <div key={book.id}>
                  <h3>{book.volumeInfo.title}</h3>
                  <p>{book.volumeInfo.subtitle}</p>
                  <a href={book.volumeInfo.previewLink} target="_blank">
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      title={book.volumeInfo.title}
                      alt={`${book.volumeInfo.title} cover`}
                    />
                  </a>
                  <p>{book.volumeInfo.description}</p>
                </div>
                <hr></hr>
              </>
            ))}
          </>
        ) : (
          <p>Loading...Book Data Will Appear Here</p>
        )}
      </div>
  
    </>
  );
}
