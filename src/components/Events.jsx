import React, { useState, useEffect } from 'react';
import { Row, Col, Alert } from 'react-bootstrap';
import Event from './Event';
import eventData from '../data/events.json';

const Events = () => {
    const [events, setEvents] = useState(eventData);
    const [showMessage, setShowMessage] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowMessage(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleBook = (id) => {
        setEvents(events.map(event =>
            event.id === id && event.nbTickets > 0
                ? { ...event, nbTickets: event.nbTickets - 1, nbParticipants: event.nbParticipants + 1 }
                : event
        ));
    };

    const handleLike = (id) => {
        setEvents(events.map(event =>
            event.id === id ? { ...event, liked: !event.liked } : event
        ));
    };

    return (
        <div>
            {showMessage && <Alert variant="success">Hey welcome to Esprit Events</Alert>}
            <Row>
                {events.map(event => (
                    <Col key={event.id}>
                        <Event event={event} onBook={handleBook} onLike={handleLike} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default Events;
