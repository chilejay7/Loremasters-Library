import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import BasicRating from "../Rating/Rating";
import "./BookCard.css";


export default function BookCard({ book }) {
  return (
    <div className="card-container">
      <Card key={book.id} className="book-card" bg="dark">
        <Card.Body>
          <Card.Title>{book.volumeInfo.title}</Card.Title>
          <Card.Subtitle>{book.volumeInfo.subtitle}</Card.Subtitle>

          <hr></hr>
          
          <Card.Link href={book.volumeInfo.previewLink} target="_blank">
            <Image
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : ""
              }
              title={book.volumeInfo.title}
              alt={`${book.volumeInfo.title} cover`}
            rounded />
          </Card.Link>

          <BasicRating rating={book.volumeInfo.averageRating} />

          <hr></hr>

            <Card.Text className="book-description">
              {book.volumeInfo.description}
            </Card.Text>
        
        </Card.Body>
      </Card>
    </div>
  );
}
