import React, { useEffect } from "react";
import "./Home.css";
import { FaShoppingBag } from "react-icons/fa";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { showAll, removeAll } from "../actions/remove";
import { emptyAmount } from "../actions/updown";
import { totalPrice } from "../totalPrice";

function Home() {
  const listItems = useSelector((state) => state.itemList);
  const dispatch = useDispatch();

  const itemAmount = useSelector((state) => state.itemAmount.amountList);
  let total = itemAmount.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const totalItems = document.getElementsByClassName("cart-bag");
  if (totalItems[0]) {
    totalItems[0].setAttribute("totalItems", total);
  }

  const emptyCart = () => {
    dispatch(removeAll());
    dispatch(emptyAmount());
  };

  useEffect(() => {
    dispatch(showAll());
  }, [dispatch]);

  return (
    <div>
      <div className="cart-my-nav">
        <div className="cart-my-nav-content container d-flex justify-content-around align-items-center">
          <h2 className="cart-h2">Redux Store</h2>
          <div className="cart-bag">
            <FaShoppingBag className="cart-bag-icon" />
          </div>
        </div>
      </div>

      <h1 className="text-center text-uppercase my-5 display-3 fw-bold">
        {listItems.list.length < 1 ? "empty bag" : `your bag`}
      </h1>

      <div className="cart-items-container">
        {listItems.list.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <hr className="cart-hr" />
      <div className="cart-total">
        <p className="cart-p">Total</p>
        <p className="cart-p cart-total-amount">
          ${totalPrice(itemAmount, listItems.list)}
        </p>
      </div>

      <div className="cart-btn-clear">
        <button
          className="btn btn-outline-danger text-uppercase"
          onClick={() => emptyCart()}
        >
          clear cart
        </button>
      </div>
    </div>
  );
}

export default Home;
