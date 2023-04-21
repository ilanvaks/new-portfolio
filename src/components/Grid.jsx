import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Grid () {

  return (
    <section>
      <Container>
        <Row className="grid-container">
          <Col sm={12} md={4}>
            <h2>Why BC?</h2>
            <p>One aspect of Boca Code that resonated with me was its unwavering focus on building a tight-knit community. At Boca Code, individuals are empowered to uplift each other, creating a supportive atmosphere where each person is motivated to excel and reach new heights.</p>
          </Col>
            
            <Col sm={12} md={4}>
            <h2>Future Projects</h2>
            <p>I am excited to develop a web application that will serve as a virtual gym buddy to empower people to achieve their fitness goals. My aim is to create a user-friendly platform that individuals can leverage to enhance their fitness journey and better themselves.</p>
            </Col>
                
            <Col>
                <h2>Ideal Work Place?</h2>
                <p>I am seeking an organization with a thriving workplace culture that fosters positivity and encourages growth opportunities. Ideally, I would like to find a company that provides mentorship, where I can learn from seasoned professionals and develop my skills in a supportive environment.</p>
            </Col>
        </Row>
      </Container>
    </section>
  )
}