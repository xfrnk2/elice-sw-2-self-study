import React from "react";
import { Card, Button } from "react-bootstrap";

function ProfileCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://static.remove.bg/remove-bg-web/035676ee65d6ce9f128769532ffdff315f3005c7/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProfileCard;