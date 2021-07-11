import React from "react";
import phone from "./images/phone.svg";
function Hero() {
  return (
    <div className="container stripe-hero ">
      <div className="row">
        <div className="col-md-10 col-lg-6 col-10 mx-auto stripe-hero-text order-md-0 order-1">
          <h1 className="display-1">
            Payments infrastructure for the internet
          </h1>
          <p className="my-4">
            Millions of companies of all sizes - from startups to Fortune 500s -
            use Stripe's software and APIs to accept payments, send payouts, and
            manage their business online.
          </p>
          <button className="btn btn-dark">Start now</button>
        </div>
        <div className="stripe-hero-phone col-md-5 col-lg-6 order-md-1 order-0 d-flex justify-content-center">
          <img src={phone} alt="hero-phone" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
