import { Container } from 'reactstrap'; // Reactstrap

const Content = ({ children }) => {
  return (
    <Container className="flex-grow-1">
        <p>conteúdo</p>
      {children}
    </Container>
  )
}

export default Content;