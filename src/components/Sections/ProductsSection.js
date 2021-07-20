import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { api } from "../../services/api";
import { AddToCart } from "../Common/AddToCart";
import { CarouselInstance } from "../Instances/CarouselInstance";
import { Loading } from "../Loading";
import { Rating } from "../Rating";

export const ProductsSection = () => {
  const [state, setState] = React.useState({
    products: [],
    loading: false,
  });

  React.useEffect(() => {
    setState({ loading: true });
    api
      .get("/products")
      .then((res) => setState({ products: res.data, loading: false }));
  }, []);

  //Utiliza String.splice para inserir uma String dentro da String no local desejado
  const intToFloat = (value) => {
    const formatedValue = String(value);

    // eslint-disable-next-line no-extend-native
    String.prototype.splice = function (idx, rem, str) {
      return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };

    let result;

    if (formatedValue.length === 5) {
      result = formatedValue.splice(3, 0, ",");
    }
    if (formatedValue.length === 4) {
      result = formatedValue.splice(2, 0, ",");
    }

    return result;
  };

  return (
    <Container className="py-5">
      <h4 className="fw-bold">Mais Vendidos</h4>
      <hr className="section-border" />

      {state.loading ? (
        <Loading dark />
      ) : (
        <>
          {state.products && state.products.length > 0 && (
            <Row className="text-center">
              <CarouselInstance>
                {state.products.map((data) => (
                  <Col className="mb-3 me-3 h-100">
                    <Card className="h-100" key={data.productId}>
                      <div>
                        <Card.Img src={data.imageUrl} />
                        {data.listPrice && (
                          <div className="badge bg-danger product-badge">
                            % OFF
                          </div>
                        )}
                      </div>
                      <Rating value={data.stars} />
                      <Card.Body>
                        <Card.Text className="text-muted">
                          {data.productName}
                        </Card.Text>
                        {data.listPrice && (
                          <span className="text-muted">
                            de{" "}
                            <span className="text-decoration-line-through">
                              {intToFloat(data.listPrice)}
                            </span>
                          </span>
                        )}
                        <Card.Title className="fw-bold">
                          por {intToFloat(data.price)}
                        </Card.Title>
                        {data.installments &&
                          data.installments.map((i) => (
                            <span className="text-muted">
                              em {i.quantity}x de {intToFloat(i.value)}
                            </span>
                          ))}
                      </Card.Body>
                      <div className="d-flex flex-column p-3">
                        <AddToCart />
                      </div>
                    </Card>
                  </Col>
                ))}
              </CarouselInstance>
            </Row>
          )}
        </>
      )}
    </Container>
  );
};
