import Card from "react-bootstrap/Card";
import './BookCard.css'

export default function BookCard({ book }) {

  return (
    <Card key={book.id} className="book-card" bg="dark">
      <Card.Body>
        <Card.Title>{book.volumeInfo.title}</Card.Title>
        <Card.Subtitle >
          {book.volumeInfo.subtitle}
        </Card.Subtitle>

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

        <Card.Text>{book.volumeInfo.description}</Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        
      </Card.Body>
    </Card>
  );
}
