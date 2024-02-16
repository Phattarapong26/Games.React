// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import './Home.css';

const HomeGame = () => {
  return (
    <Container fluid className="screens">
      <Row className="justify-content-center align-items-center button-group">
        <Col md={6} className="text-center">
          <Row className="button-container">
            <Col>
              <Link to="/easy">
                <Button variant="warning" size="lg" block className="start-button start-buttonH">EASY</Button>
              </Link>
            </Col>
          </Row>
          <Row className="button-container">
            <Col>
              <Link to="/normal">
                <Button variant="warning" size="lg" block className="start-button start-buttonH">NORMAL</Button>
              </Link>
            </Col>
          </Row>
          <Row className="button-container">
            <Col>
              <Link to="/start">
                <Button variant="dark" size="lg" block className="start-button">Lock Out</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeGame;
