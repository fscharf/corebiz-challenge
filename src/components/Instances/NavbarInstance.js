import React from "react";
import { Container, Nav, Navbar, InputGroup } from "react-bootstrap";
import Brand from "../../assets/image/brand.svg";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

export const NavbarInstance = () => {
  const [state, setState] = React.useState({
    cartCount: "",
  });

  React.useEffect(() => {
    setState({
      cartCount: localStorage.getItem("cartItems"),
    });
  }, [state]);

  return (
    <Navbar
      sticky="top"
      bg="white"
      variant="light"
      expand="lg"
      className="py-3 shadow-sm"
    >
      <Container>
        <a
          href="#collapsedNavbar"
          className="navbar-menu-icon text-dark"
          data-bs-toggle="collapse"
        >
          <AiOutlineMenu size="35" />
        </a>
        <Navbar.Brand className="object-centered-mobile mb-3 mb-sm-0" href="#">
          <img src={Brand} width="150" alt="Corebiz Logo" />
        </Navbar.Brand>
        <Nav className="object-centered">
          <InputGroup>
            <input
              className="custom-search-input"
              placeholder="O que está procurando?"
              type="text"
            />
            <a
              href="#search"
              className="text-muted "
              style={{ position: "absolute", right: ".6rem", bottom: ".4rem" }}
            >
              <AiOutlineSearch size="25" />
            </a>
          </InputGroup>
        </Nav>
        <Nav className="ms-auto">
          <div className="collapse navbar-collapse" id="collapsedNavbar">
            <Nav.Link href="#account">
              <AiOutlineUser size="25" className="me-2" />
              Minha Conta
            </Nav.Link>
          </div>
          <Nav.Link
            title="Meu Carrinho"
            className="cart-items"
            active
            href="#cart"
          >
            <AiOutlineShoppingCart size="25" />
            <div className="badge bg-danger rounded-circle">
              {state.cartCount}
            </div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
