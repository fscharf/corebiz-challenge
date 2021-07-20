import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

export const handleAddToCart = () => {
  var cartItems = parseInt(localStorage.getItem("cartItems"));

  if (cartItems.valueOf() >= 10) {
    return toast.error("Você só pode adicionar até 10 itens no carrinho.", {
      position: "bottom-left",
    });
  }
  localStorage.setItem("cartItems", ++cartItems);
  toast.success("Item adicionado com sucesso no carrinho.", {
    position: "bottom-right",
  });
};

export const handleRemoveCart = () => {
  var cartItems = parseInt(localStorage.getItem("cartItems"));

  if (cartItems.valueOf() <= 0) {
    return toast.error("Você não pode adicionar menos que 0 itens.", {
      position: "bottom-left",
    });
  }
  localStorage.setItem("cartItems", --cartItems);
  return toast.success("Item removido com sucesso do carrinho.", {
    position: "bottom-right",
  });
};

export const AddToCart = () => {
  return (
    <Button onClick={() => handleAddToCart()} variant="dark" className="p-2">
      COMPRAR
    </Button>
  );
};
