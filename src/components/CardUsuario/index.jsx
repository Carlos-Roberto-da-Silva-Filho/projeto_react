import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap"
import "./CardUsuario.css"

const CardUsuario = ({ user, onClick }) => {
  return (
    <Card onClick={onClick} className="card-usuario">
      <CardImg top width="100%" src={user.avatar} alt={user.nome} className="card-imagem" />
      <CardBody>
        <CardTitle tag="h5" className="card-titulo">{user.nome}</CardTitle>
        <CardText className="card-texto">{user.profissao}</CardText>
      </CardBody>
    </Card>
  )
}

export default CardUsuario
