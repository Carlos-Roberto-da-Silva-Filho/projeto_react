import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap"

import "./Menu.css"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Navbar expand="md" className="navbar">
      {/* Botão só aparece quando a tela for menor que 500px */}
      <NavbarToggler onClick={toggle} className="toggler">☰</NavbarToggler>
      
      {/* Links sempre no canto direito */}
      <Collapse isOpen={isOpen} navbar>
        <Nav className={`nav-list ${isOpen ? "show" : ""}`} navbar>
          <NavItem>
            <NavLink tag={Link} to="/" className="nav-link">
              Principal
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/usuarios" className="nav-link">
              Usuários
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/comentarios" className="nav-link">
              Comentários
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/hora" className="nav-link">
              Hora
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  )
}

export default Menu
