import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../css/index.css'; 

const HomeCard = ({ imageSrc, title }) => {
  return (
    <div className="gallery-item-container">
      <Card className="bg-dark text-white gallery-item-card">
        <Card.Img src={imageSrc} alt={title} className="gallery-item-image" />
        <div className="overlay"></div>
        <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-center text-center p-4">
          <Card.Title className="gallery-item-title">{title}</Card.Title>
          <Button variant="outline-light" className="gallery-item-button">MORE PHOTOS</Button>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default HomeCard;