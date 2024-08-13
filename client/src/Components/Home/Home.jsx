import { useState, useEffect } from "react";
import BookCard from "../Cards/BookCard";
import axios from "axios"
import './Home.css'

export default function Home () {

    const [bookData, updateBookData] = useState();

    const apiKey = import.meta.env.VITE_BOOK_KEY;
  
    useEffect(() => {
      const getBook = async () => {
        try {
          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=brandon+sanderson&key=${apiKey}`
          );
  
          const books = response.data.items;
  
          console.log("The response is:", response);
          console.log("The data returned from the API is:", books);

          // for (let i=0; i < books.length; i++) {
          //   console.log(i, 'The thumbnail image link is:', books[i].volumeInfo.imageLinks.thumbnail)
          // }
  
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

    return (
        <>

      <div id="main-body">
        {bookData ? (
          <>
            <h2 className="header author">{bookData[0].volumeInfo.authors[0]}</h2>

            <div id="card-display">

            {bookData.map((book) => (

              <BookCard book={ book } key={book.id} />
              
            ))}
            </div>
          </>
        ) : (
          <p className="loading">Loading...Book Data Will Appear Here</p>
        )}

      </div>
  
    </>
    )
}