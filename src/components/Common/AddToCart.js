import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

export const AddToCart = () => {
  const handleAdd = () => {
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

  return (
    <Button onClick={() => handleAdd()} variant="dark" className="p-2">
      COMPRAR
    </Button>
  );
};
