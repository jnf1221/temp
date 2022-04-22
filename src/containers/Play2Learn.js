import React from 'react';
import MathFacts from './MathFacts';
import { Fragment } from 'react';
import AnagramHunt from './AnagramHunt';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../components/Main.css';

function Play2Learn() {
    return(
      <>
        <div>
        <h1>Welcome</h1>
        <Container>
          <div>
          <Row>
            <Col><AnagramHunt /></Col>
            <Col><MathFacts /></Col>
          </Row>
          </div>
        </Container>
        </div>
      </>
  );
}

export default Play2Learn;