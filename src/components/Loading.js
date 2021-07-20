import React from "react";
import { Spinner } from "react-bootstrap";

export const Loading = ({ dark }) => {
  return <Spinner variant={`${dark ? "dark" : "light"}`} animation="border" />;
};
