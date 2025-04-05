import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import BasicRating from "../Rating/Rating";
import "./DisplayCard.css";

export default function DisplayCard({ id, title, subtitle, link, rating, description, image }) {
  return (
    <section className="card-container">
      <Card key={id} className="book-card" bg="dark">
        <Card.Body>
          <div className="card-title">
            <Card.Title className="book-title">
              {title}
              <Card.Subtitle className="book-subtitle">
                {subtitle}
              </Card.Subtitle>
            </Card.Title>
          </div>

          <hr />
          
          <Card.Link href={link} target="_blank">
            <Image
              src={image}
              title={title}
              alt={title}
              // rounded
            />
          </Card.Link>

          <BasicRating rating={rating} />

          <hr />

          <Card.Text className="book-description">
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
}
