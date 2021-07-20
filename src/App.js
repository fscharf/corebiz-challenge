import React from "react";
import { CarouselSection } from "./components/Sections/CarouselSection";
import { Footer } from "./components/Footer";
import { NavbarInstance } from "./components/Instances/NavbarInstance";
import { ProductsSection } from "./components/Sections/ProductsSection";
import { SubscriptionSection } from "./components/Sections/SubscriptionSection";
import { ToastContainer } from "react-toastify";

export const App = () => {
  return (
    <>
      <NavbarInstance />
      <CarouselSection />
      <ProductsSection />
      <SubscriptionSection />
      <Footer />
      <ToastContainer />
    </>
  );
};
