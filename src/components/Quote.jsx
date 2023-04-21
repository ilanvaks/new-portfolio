import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useState } from "react";

export default function Quote () {

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const videoLink = "https://www.youtube.com/watch?v=vJHkTtvnUqA";

  const handleClick = () => {
    setIsButtonClicked(!isButtonClicked);
  }

  return (
    <section>
      <Container className="quote-container">
        <Row fade className="text-center">
          <Col>
          <Button className="button" onClick={handleClick}>“It's not about how hard you hit. It's about how hard you can get hit and keep moving forward. How much you can take and keep moving forward.”</Button>
      <div className="video-container">
      {isButtonClicked && <iframe width="480" height="315" src="https://www.youtube.com/embed/vJHkTtvnUqA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> }
      </div>
          </Col>
        </Row>
      </Container>
      <h2></h2>
    </section>
  )
}
