import React from "react";
import { Button, Col } from "react-bootstrap";

export const SubscriptionSuccess = ({ onClick }) => {
  return (
    <Col md="6" className="d-flex flex-column">
      <span className="fw-bold">Seu e-mail foi cadastrado com sucesso!</span>
      <p className="text-muted">
        A partir de agora você receberá as novidade e ofertas exclusivas.
      </p>
      <Button onClick={onClick} variant="dark">
        Cadastrar outro e-mail
      </Button>
    </Col>
  );
};
