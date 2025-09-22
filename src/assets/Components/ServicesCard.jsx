import React from 'react';
import { Card } from 'react-bootstrap';
import { FaCamera, FaHeart, FaPaw } from 'react-icons/fa';
import '../css/index.css';

const ServicesCard = ({ icon, title, description, price }) => {
  const getIcon = (iconName) => {
    switch(iconName) {
      case 'camera':
        return <FaCamera size={50} />;
      case 'wedding':
        return <FaHeart size={50} />;
      case 'animal':
        return <FaPaw size={50} />;
      default:
        return null;
    }
  };

  return (
    <Card className="services-card text-center bg-dark text-white p-4">
      <div className="icon-container mb-4">
        {getIcon(icon)}
      </div>
      <Card.Body>
        <Card.Title className="services-card-title">{title}</Card.Title>
        <Card.Text className="services-card-description">
          {description}
        </Card.Text>
        <Card.Text className="services-card-price">
          ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ServicesCard;