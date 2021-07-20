import React from "react";
import {
  FormControl,
  Button,
  InputGroup,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { handleAddToCart, handleRemoveCart } from "../Common/AddToCart";

export const CartInstance = ({ value }) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title className="fw-bold">Meu Carrinho</Popover.Title>
      <Popover.Content>
        <p className="text-muted">
          *Bônus: Controle a quantidade de itens no carrinho. 😉
        </p>
        <InputGroup>
          <Button variant="link" onClick={() => handleRemoveCart()}>
            <AiOutlineMinusCircle size="25" />
          </Button>
          <FormControl type="text" value={value} />
          <Button variant="link" onClick={() => handleAddToCart()}>
            <AiOutlinePlusCircle size="25" />
          </Button>
        </InputGroup>
      </Popover.Content>
    </Popover>
  );

  return (
    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
      <a href="#cart" className="nav-link cart-items">
        <AiOutlineShoppingCart size="25" />
        <div className="badge bg-danger rounded-circle">{value}</div>
      </a>
    </OverlayTrigger>
  );
};
