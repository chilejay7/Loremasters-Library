import Card from 'react-bootstrap/Card';

export default function BookCard ({ book }) {

  console.log('The card book data is:', book);

  return (
    <Card style={{ width: '18rem' }} key={book.id}>
      <Card.Body>
        <Card.Title>{book.volumeInfo.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}