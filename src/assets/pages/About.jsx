import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import '../css/index.css';

const teamData = [
  { id: 1, name: 'Jess', image: '/person_1.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', social: { twitter: '#', facebook: '#', instagram: '#' } },
  { id: 2, name: 'Alice', image: '/person_2.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', social: { twitter: '#', facebook: '#', instagram: '#' } },
  { id: 3, name: 'John', image: '/person_4.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', social: { twitter: '#', facebook: '#', instagram: '#' } },
];

export default function About() {
  return (
    <div className="about-page  text-white pt-5 mt-5">
      <Container className="py-5">
        <Row className="mb-5">
          <Col lg={6}>
            <Image src={"/img_2.jpg"} fluid />
          </Col>
          <Col lg={6} className="my-auto">
            <h1 className="display-4 mb-4">My Mission</h1>
            <p>
              Lorem vel tenetur explicabo necessitatibus, ad soluta consectetuer illo qui voluptatem. Quis soluta maiores eum, iste modi voluptatum in repudiandae fugiat suscipit dolorum harum, porro voluptatum qui? Alias repudiandae dicta doloremque voluptates soluta repellendus, unde laborum quo nam, ullam facere voluptatem similique.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor architecto excepturi aliquid minus nostrum dicta labore iusto abcaecati fugit cupiditate.
            </p>
          </Col>
        </Row>
        <Row className="text-center my-5">
          <h1 className="display-4 mb-5">Team</h1>
          {teamData.map((member) => (
            <Col key={member.id} md={4}>
              <div className="team-member mb-4">
                <Image src={member.image} roundedCircle className="mb-3" />
                <h5 className="mb-2">{member.name}</h5>
                <p className="text-muted">{member.description}</p>
                <div className="social-icons">
                  <a href={member.social.twitter} className="text-white me-3"><FaTwitter /></a>
                  <a href={member.social.facebook} className="text-white me-3"><FaFacebook /></a>
                  <a href={member.social.instagram} className="text-white"><FaInstagram /></a>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}