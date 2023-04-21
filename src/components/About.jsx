import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { Col } from "react-bootstrap";

export default function About () {

  return (
    <main>
      <Container>
        <Row className="text-center">
          <Col sm={12} md={6}>
          <img src="/images/AboutMePic.jpg" 
            className="rounded-circle"
          alt="Profile" />             
          </Col>

          <Col>
          <h1 className="mt-3">Ilan Vaks</h1>
          <p className="p-container">As a native of Brooklyn, New York, I have always been drawn to the dynamic and innovative world of software engineering. Upon completing this course, my objective is to secure an engaging job or internship that aligns with my passion for this field, with the ultimate goal of advancing into the exciting realm of cloud engineering. </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}