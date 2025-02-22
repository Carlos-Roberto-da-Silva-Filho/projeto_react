import { Container, Row, Col } from 'reactstrap';

import Facebook from '../Facebook'
import Instagram from '../Instagram'
import YouTube from '../YouTube'
import LinkedIn from '../LinkedIn'
import WhatsApp from '../WhatsApp'

const Footer = () => {
    return (
        <footer className="footer bg-primaria text-white text-center">
        <Container>
          <Row className="d-flex flex-wrap justify-content-center align-items-center gap-3">
            <Col xs="auto">
              <Instagram />
            </Col>
            <Col xs="auto">
              <Facebook />
            </Col>
            <Col xs="auto">
              <YouTube />
            </Col>
            <Col xs="auto">
              <LinkedIn />
            </Col>
            <Col xs="auto">
              <WhatsApp />
            </Col>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer