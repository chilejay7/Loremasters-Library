import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
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
            <img
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.thumbnail
                  : ""
              }
              title={book.volumeInfo.title}
              alt={`${book.volumeInfo.title} cover`}
            />
          </Card.Link>
          <hr></hr>

          <div className="card-text">
            <Card.Text className="book-description">
              {book.volumeInfo.description}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
