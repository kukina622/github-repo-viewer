import { Card } from "react-bootstrap";

function RepoCard() {
  return (
    <Card
      style={{ width: "calc(20% - 1rem)" }}
      className="d-inline-flex mx-2 mb-4"
    >
      <Card.Body>
        <Card.Title>chatroom-frontend</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default RepoCard;
