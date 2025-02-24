import React from "react"
import { Container, Row, Col } from "reactstrap"
import "./Principal.css"

const Principal = () => {
  return (
    <>
      <Container className="container-principal">
        <Row className="align-items-center">
          <Col md="7" className="texto">
            <h1> Pós-Graduação Web Full Stack do Instituto Infnet x React</h1>
            <p>
              A pós-graduação Web Full Stack do Instituto Infnet oferece uma formação
              completa, abordando desde o frontend até o backend. Os alunos aprendem
              tecnologias essenciais como React, Node.js, bancos de dados e boas
              práticas de desenvolvimento, preparando-se para o mercado de trabalho.
            </p>
            <p>
              React é uma biblioteca JavaScript popular para a criação de interfaces
              dinâmicas e eficientes, baseada no conceito de componentes reutilizáveis.
              Com sua abordagem declarativa, o React facilita o desenvolvimento de
              aplicações modernas e escaláveis.
            </p>
          </Col>
          <Col md="5" className="text-center">
            <img src="/img/Icone_logo_infnet.png" alt="Instituto Infnet" className="img-infnet" />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Principal
