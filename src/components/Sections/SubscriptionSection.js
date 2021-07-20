import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { api } from "../../services/api";
import { Loading } from "../Loading";
import { SubscriptionSuccess } from "../SubscriptionSuccess";

export const SubscriptionSection = () => {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    error: false,
    nameErrorMsg: "",
    emailErrorMsg: "",
    loading: false,
  });

  const handleSubmit = (e) => {
    if (!state.name || !state.email) {
      return setState({
        error: true,
        email: "",
        name: "",
        nameErrorMsg: "Preencha o nome completo.",
        emailErrorMsg: "Insira um e-mail válido.",
      });
    }
    if (!isNaN(state.name)) {
      return setState({
        error: true,
        email: "",
        name: "",
        nameErrorMsg: "Insira apenas letras no nome.",
      });
    }
    if (state.email.indexOf("@") === -1 || state.email.indexOf(".") === -1) {
      return setState({
        error: true,
        email: "",
        name: "",
        emailErrorMsg: "Insira um e-mail válido.",
      });
    } else {
      setState({ loading: true });
      api
        .post("/newsletter", {
          name: state.name,
          email: state.email,
        })
        .then(() => {
          setState({
            success: true,
            loading: false,
          });
        });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  return (
    <section className="bg-light py-5">
      <Container>
        <Row className="justify-content-center text-center">
          {state.success ? (
            <SubscriptionSuccess onClick={() => setState({ success: false })} />
          ) : (
            <Col md="8">
              <Form>
                <h4 className="fw-bold mb-3">
                  Participe de nossas news com promoções e novidades!
                </h4>
                <Form.Row as={Row} className="text-start">
                  <Col md className="mb-3 mb-sm-0">
                    <Form.Control
                      className={`p-3 ${
                        state.error ? "mb-3 border border-danger" : "border-0"
                      }`}
                      placeholder="Digite seu nome"
                      type="text"
                      name="name"
                      value={state.name}
                      onChange={handleChange}
                    />
                    {state.error && (
                      <span className="text-danger">{state.nameErrorMsg}</span>
                    )}
                  </Col>
                  <Col md className="mb-3 mb-sm-0">
                    <Form.Control
                      className={`p-3 ${
                        state.error ? "mb-3 border border-danger" : "border-0 "
                      }`}
                      placeholder="Digite seu email"
                      type="text"
                      name="email"
                      value={state.email}
                      onChange={handleChange}
                    />
                    {state.error && (
                      <span className="text-danger">{state.emailErrorMsg}</span>
                    )}
                  </Col>
                  <Col md className="d-flex flex-column">
                    <Button
                      className="p-3"
                      onClick={() => handleSubmit()}
                      variant="dark"
                    >
                      {state.loading ? <Loading /> : "Eu quero!"}
                    </Button>
                  </Col>
                </Form.Row>
              </Form>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};
