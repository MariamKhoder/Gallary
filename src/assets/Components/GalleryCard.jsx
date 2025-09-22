
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import '../css/index.css'; 

export default function GalleryCard({ imageSrc, title }) {
  return (
    <div className="gallery-item-container">
      <Card className="bg-dark text-white gallery-item-card">
        <Card.Img src={imageSrc} alt={title} className="gallery-item-image" />
        <div className="overlay"></div>
        <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-center text-center p-4">
        </Card.ImgOverlay>
      </Card>
    </div>
  );
}