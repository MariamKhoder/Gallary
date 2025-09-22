import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import HomeCard from '../Components/HomeCard';




const galleryItemsData = [
  { id: 1, imageSrc: "\img_1.jpg", title: 'NATURE' },
  { id: 2, imageSrc: "\img_2.jpg", title: 'PORTRAITS' },
  { id: 3, imageSrc: "\img_3.jpg", title: 'PEOPLE' },
  { id: 4, imageSrc: "\img_4.jpg", title: 'STREET' },
  { id: 5, imageSrc: "\img_5.jpg", title: 'CITYSCAPE' },
  { id: 6, imageSrc: "\img_6.jpg", title: 'LANDSCAPE' },
  { id: 7, imageSrc: "\img_7.jpg", title: 'FOOD' },
  { id: 8, imageSrc: "\img_1.jpg", title: 'ARCHITECTURE' },
  { id: 9, imageSrc: "\img_4.jpg", title: 'ABSTRACT' },
];

export default function Home() {
  return (
    <div className="home-page pt-5  home ">
      <Container className="my-5">
        <Row className="g-4">
          {galleryItemsData.map((item) => (
            <Col key={item.id} lg={4} md={6} sm={12}>
             <HomeCard imageSrc={item.imageSrc} title={item.title}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}