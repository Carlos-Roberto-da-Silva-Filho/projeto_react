import { Container } from 'reactstrap'; // Reactstrap

const Content = ({ children }) => {
  return (
    <Container className="flex-grow-1">
      {children}
    </Container>
  )
}

export default Content;