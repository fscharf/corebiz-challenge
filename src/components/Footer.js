import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { AiOutlineCustomerService, AiOutlineMail } from "react-icons/ai";
import CorebizIcon from "../assets/image/brand-light.svg";
import VtexIcon from "../assets/image/vtex-brand.svg";

export const Footer = () => {
  return (
    <section className="bg-dark text-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md>
            <h4>Localização</h4>
            <hr className="section-border section-border-white" />
            <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
            <p>Alphaville, SP</p>
            <p>brasil@corebiza.ag</p>
            <p>+55 11 3090 1039</p>
          </Col>
          <Col md className="text-center d-flex flex-column mb-3 mb-sm-0">
            <Button variant="light" className="mb-3">
              <AiOutlineMail size="25" className="me-2" />
              ENTRE EM CONTATO
            </Button>
            <Button variant="light">
              <AiOutlineCustomerService size="25" className="me-2" />
              <small>FALE COM O NOSSO CONSULTOR ONLINE</small>
            </Button>
          </Col>
          <Col md>
            <Row>
              <Col className="mb-3 mb-sm-0">
                <div>Created by</div>
                <img
                  src={CorebizIcon}
                  alt="Ícone Corebiz"
                  className="img-fluid"
                  width="100"
                />
              </Col>
              <Col>
                <div>Powered by</div>
                <img
                  src={VtexIcon}
                  alt="Ícone Vtex"
                  className="img-fluid"
                  width="100"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
