import React, { useEffect } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../actions/remove";
import { incAmount, decAmount, removeItem } from "../actions/updown.js";

function CartItem({ id, title, price, img }) {
  const itemAmount = useSelector((state) => state.itemAmount.amountList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (itemAmount[id].amount < 1) {
      dispatch(remove(id));
    }
  }, [itemAmount, dispatch, id]);

  const removeCartItem = () => {
    dispatch(remove(id));
    dispatch(removeItem(id));
  };

  return (
    <div className="cart-item">
      <div className="cart-img-desc">
        <img src={img} alt="mobile" className="img-fluid cart-item-img" />

        <div className="cart-mobile-desc">
          <p className="cart-p">{title}</p>
          <p className="cart-p">{price}</p>
          <button
            className="cart-btn-remove"
            onClick={() => removeCartItem(id)}
          >
            remove
          </button>
        </div>
      </div>

      <div className="cart-mobile-amount">
        <button className="cart-btn-up" onClick={() => dispatch(incAmount(id))}>
          <BsChevronUp />
        </button>
        <p className="cart-p">{itemAmount[id].amount}</p>
        <button
          className="cart-btn-down"
          onClick={() => dispatch(decAmount(id))}
        >
          <BsChevronDown />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
