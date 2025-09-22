import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/index.css';

export default function Contact() {
  return (
    <div className="contact-page  text-white pt-5 mt-5">
      <Container className="py-5">
        <h1 className="text-center mb-5 display-4">Contact</h1>
        <Row className="justify-content-center">
          <Col lg={6} className="mb-4">
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Label >First Name</Form.Label>
                    <Form.Control type="text" className="bg-transparent text-white border-white rounded-0  mb-3" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label >Last Name</Form.Label>
                    <Form.Control type="text" className="bg-transparent text-white border-white rounded-0  mb-3" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group >
                <Form.Label className='mb-3'>Email</Form.Label>
                <Form.Control type="email" className="bg-transparent text-white border-white rounded-0  mb-3" />
              </Form.Group>

              <Form.Group >
                <Form.Label className='mb-3'>Subject</Form.Label>
                <Form.Control type="text" className="bg-transparent text-white border-white rounded-0  mb-3" />
              </Form.Group>

              <Form.Group >
                <Form.Label className='mb-3' >Message</Form.Label>
                <Form.Control as="textarea" rows={6} className="bg-transparent text-white border-white rounded-0 mb-3" />
              </Form.Group>

              <Button type="submit" className="px-4 py-2 mt-2" style={{ backgroundColor: 'rgb(32,201,151)', borderColor: 'rgb(32,201,151)' }}>
                Send Message
              </Button>
            </Form>
          </Col>
          <Col lg={4} className="contact-info ms-lg-5">
            <h5 className="mb-3">Address</h5>
            <p className="mb-4 add">203 Fake St. Mountain View, San Francisca, California, USA</p>
            <h5 className="mb-3 ">Phone</h5>
            <p className="mb-4 ph">+1 232 3235 324</p>
            <h5 className="mb-3">Email Address</h5>
            <p className='em'>youremail@domain.com</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}