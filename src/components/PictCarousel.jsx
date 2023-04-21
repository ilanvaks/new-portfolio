import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";

export default function PictCarousel () {

  return (
    <section>
      <Container className="carousel-container">
        <Row>
          <Col sm={12}>
            <Carousel>
              <Carousel.Item>
                <img src="https://picsum.photos/300/200?random=1"
                  className="d-block w-100"
                  alt="slide 1" />
                  <Carousel.Caption>
                <h2>First Item</h2>
                  <p>First Items are great because theyre the first and i must learn to write better english</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src="https://picsum.photos/300/200?random=2"
                  className="d-block w-100"
                  alt="slide 1" />
                  <Carousel.Caption>
                <h2>First Item</h2>
                  <p>First Items are great because theyre the first and i must learn to write better english</p>
                  </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
              <img src="https://picsum.photos/300/200?random=3"
                  className="d-block w-100"
                  alt="slide 1" />
                  <Carousel.Caption>
                <h2>First Item</h2>
                  <p>First Items are great because theyre the first and i must learn to write better english</p>
                  </Carousel.Caption>
              </Carousel.Item>

            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

