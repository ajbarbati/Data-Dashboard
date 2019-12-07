import React from 'react';
import './App.css';
import Header from './components/Headers/Header';
import Chart1 from './components/chart-bar'
import Chart2 from './components/chart-line'
import {Container, Row, Col } from 'reactstrap';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Container>
        <Row>
          <Col>
            <span></span>
          </Col>
          <Col>
            <span></span>
          </Col>
          <div className="w-100" />
          <Col>
            <span><Chart1/></span>
          </Col>
          <Col>
            <span><Chart2/></span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
