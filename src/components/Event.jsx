import React from "react";
import { Card, Button } from "react-bootstrap";

const Event = ({ event, onBook, onLike }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", position: "relative" }}>
      <Card.Img variant="top" src={`/images/${event.img}`} />

      {/* SOLD OUT Overlay */}
      {event.nbTickets === 0 && (
        <img
          src="/images/sold_out.png"
          alt="Sold Out"
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            opacity: 0.8,
          }}
        />
      )}

      <Card.Body>
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>
          Price: {event.price} <br />
          Number of tickets: {event.nbTickets} <br />
          Number of participants: {event.nbParticipants}
        </Card.Text>

        <Button
          variant={event.liked ? "danger" : "info"}
          onClick={() => onLike(event.id)}
          className="me-2"
        >
          {event.liked ? "Dislike" : "Like"}
        </Button>

        <Button
          variant="primary"
          onClick={() => onBook(event.id)}
          disabled={event.nbTickets === 0}
        >
          {event.nbTickets === 0 ? "Sold Out" : "Book an event"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Event;
