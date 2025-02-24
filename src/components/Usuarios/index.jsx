import React, { useEffect, useState } from "react"
import {
  Container,
  Row,
  Col,
  Input,
  Form,
  FormGroup,
  Label,
  Spinner,
  Alert,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap"
import CardUsuario from "../CardUsuario"
import "./Usuarios.css"

const Usuarios = () => {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://api.npoint.io/df8ddb710770ddbfae8a")

        if (!response.ok) {
          throw new Error("Erro ao buscar os dados")
        }
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        setError(error.message)
        console.error("Sem resposta", error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [])

  const toggleModal = () => setModalOpen(!modalOpen)

  const handleUserClick = (user) => {
    setSelectedUser(user)
    toggleModal()
  }

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((value) =>
      String(value).toLowerCase().includes(filter.toLowerCase())
    )
  )

  if (loading)
    return (
      <Container className="text-center mt-5">
        <Spinner color="primary" />
        <p>Carregando...</p>
      </Container>
    )

  if (error)
    return (
      <Container className="mt-5">
        <Alert color="danger">Erro: {error}</Alert>
      </Container>
    )

  return (
    <Container className="mt-4">
      {/* Filtro centralizado e estilizado */}
      <Form className="form-filtro">
        <FormGroup className="w-100">
          <Label
            for="filter"
            className="text-center d-block"
            style={{ fontSize: "1.5rem", fontWeight: "bold", color: "white", marginRight: "12px" }}
          >
            Filtrar usuários
          </Label>
          <Input
            type="text"
            id="filter"
            placeholder="Digite para filtrar..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="input-estilizado"
          />
        </FormGroup>
      </Form>

      {filteredUsers.length === 0 ? (
        <Alert color="info">Nenhum usuário encontrado.</Alert>
      ) : (
        <Row className="justify-content-center gap-3">
          {filteredUsers.map((user, index) => (
            <Col sm="6" md="4" lg="3" key={index} className="d-flex justify-content-center">
              <CardUsuario user={user} onClick={() => handleUserClick(user)} />
            </Col>
          ))}
        </Row>
      )}

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Detalhes do Usuário</ModalHeader>
        <ModalBody>
          {selectedUser && (
            <>
              <p>
                <strong>Nome:</strong> {selectedUser.nome}
              </p>
              <p>
                <strong>Profissão:</strong> {selectedUser.profissao}
              </p>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>
            Fechar
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  )
}

export default Usuarios
