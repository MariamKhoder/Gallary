import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServicesCard from '../Components/ServicesCard';


const servicesData = [
  { id: 1, icon: 'camera', title: 'Camera', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 29 },
  { id: 2, icon: 'wedding', title: 'Wedding Photography', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 46 },
  { id: 3, icon: 'animal', title: 'Animal', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 24 },
  { id: 4, icon: 'camera', title: 'Photo Editing', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 35 },
  { id: 5, icon: 'wedding', title: 'Video Production', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 60 },
  { id: 6, icon: 'animal', title: 'Creative Ideas', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: 45 },
];

export default function Services() {
  return (
    <div className="services-page  pt-5 mt-5">
      <Container className="py-5">
        <h1 className="text-white text-center mb-5 display-4">My Services</h1>
        <Row className="g-4 justify-content-center">
          {servicesData.map((service) => (
            <Col key={service.id} lg={4} md={6} sm={12}>
              <ServicesCard
               icon={service.icon} 
                title={service.title} 
                description={service.description} 
                price={service.price} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}