import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import GalleryCard from '../Components/GalleryCard';



const galleryItemsData = [
  { id: 1, imageSrc: "/nature_small_1.jpg", title: 'NATURE' },
  { id: 2, imageSrc: "/nature_small_2.jpg", title: 'PORTRAITS' },
  { id: 3, imageSrc: "/nature_small_3.jpg", title: 'PEOPLE' },
  { id: 4, imageSrc: "/nature_small_4.jpg", title: 'STREET' },
  { id: 5, imageSrc: "/nature_small_5.jpg", title: 'CITYSCAPE' },
  { id: 6, imageSrc: "/nature_small_6.jpg", title: 'LANDSCAPE' },
  { id: 7, imageSrc: "/nature_small_7.jpg", title: 'FOOD' },
  { id: 8, imageSrc: "/nature_small_8.jpg", title: 'ARCHITECTURE' },
  { id: 9, imageSrc: "/nature_small_9.jpg", title: 'ABSTRACT' },
  { id: 10, imageSrc: "/nature_small_1.jpg", title: 'ABSTRACT' },
  { id: 11, imageSrc: "/nature_small_2.jpg", title: 'ABSTRACT' },
  { id: 12, imageSrc: "/nature_small_3.jpg", title: 'ABSTRACT' },
  { id: 13, imageSrc: "/nature_small_4.jpg", title: 'ABSTRACT' },
  { id: 14, imageSrc: "/nature_small_5.jpg", title: 'ABSTRACT' },
  { id: 15, imageSrc: "/nature_small_8.jpg", title: 'ABSTRACT' },
  { id: 16, imageSrc: "/nature_small_7.jpg", title: 'ABSTRACT' },
];

export default function Gallery() {
  return (
    <div className="gallery-page pt-5 mt-5">
      <Container className="my-5">
        <h1 className="text-white text-center mb-5 display-4">Portrait Gallery</h1>
        <Row className="g-4">
          {galleryItemsData.map((item) => (
            <Col key={item.id} lg={3} md={4} sm={6} xs={12}>
             <GalleryCard imageSrc={item.imageSrc} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}