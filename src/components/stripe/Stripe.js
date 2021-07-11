import React from "react";
import MyNav from "./MyNav";
import Hero from "./Hero";
import Submenu from "./Submenu";
function Stripe() {
  return (
    <div className="stripe-bg">
      <Submenu />
      <MyNav />
      <Hero />
    </div>
  );
}

export default Stripe;
