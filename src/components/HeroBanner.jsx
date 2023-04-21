import { Container, Row, Col} from "react-bootstrap";

export default function HeroBanner () {

  return (
    <section>
      <Container fluid>
        <Row className="hero-container">
          <Col className="text-center">
          <button type="submit"><a href="mailto:ilanvaks@gmail.com">Contact Me</a></button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}