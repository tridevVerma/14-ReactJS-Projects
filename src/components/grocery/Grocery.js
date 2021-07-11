import React, { useState, useEffect } from "react";
import GroceryItem from "./GroceryItem";
import "./grocery.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("itemList");
  if (list) {
    return JSON.parse(localStorage.getItem("itemList"));
  } else {
    return [];
  }
};

function Grocery() {
  const messages = [
    "item added to the list",
    "value changed",
    "item removed",
    "empty list",
    "please enter value",
  ];
  const messagesStyle = ["#ccffcc", "#ccffcc", "#ffcccc", "#ffcccc", "#ffcccc"];
  const [messageIndex, setmessageIndex] = useState(-1);
  const [item, setitem] = useState("");
  const [itemList, setitemList] = useState(getLocalStorage());
  const [Edit, setEdit] = useState(false);
  const [editItemID, setEditItemID] = useState(-1);
  const [submitText, setsubmitText] = useState("Submit");

  const grocerySubmit = (e) => {
    e.preventDefault();
    if (item.length > 0 && Edit === false) {
      let newList = itemList;
      newList.push(item);
      setitemList(newList);
      console.log(itemList);
      setmessageIndex(0);
    } else if (item.length > 0 && Edit === true) {
      const newList = itemList.map((value, index) => {
        if (index === editItemID) {
          return item;
        }
        return value;
      });
      setitemList(newList);
      setmessageIndex(1);
    } else {
      setmessageIndex(4);
    }
    setitem("");
    setEdit(false);
    setsubmitText("Submit");
  };

  const editGroceryItem = (groceryItemIndex) => {
    setEdit(true);
    setsubmitText("Editing...");
    const currentItem = itemList[groceryItemIndex];
    setitem(currentItem);
    const inputBox = document.getElementsByName("item-input");
    inputBox[0].focus();
    setEditItemID(groceryItemIndex);
  };

  const deleteGroceryItem = (groceryItemIndex) => {
    const newList = itemList.filter(
      (item, index) => index !== groceryItemIndex
    );
    setitemList(newList);
    setmessageIndex(2);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      console.log("set time out");
      setmessageIndex(-1);
    }, 3000);
    return () => clearTimeout(timeOut);
  }, [messageIndex, itemList]);

  useEffect(() => {
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }, [messageIndex, itemList]);

  return (
    <div className="grocery-bg">
      <div className="grocery-box py-4 d-flex flex-column align-items-center">
        {messageIndex !== -1 ? (
          <div
            className="grocery-message rounded text-capitalize"
            style={{ backgroundColor: messagesStyle[messageIndex] }}
          >
            {messages[messageIndex]}
          </div>
        ) : (
          ""
        )}

        <h1 className="text-center text-capitalize my-4">grocery bud</h1>
        <form className="grocery-form row" onSubmit={(e) => grocerySubmit(e)}>
          <input
            type="text"
            name="item-input"
            placeholder="e.g. eggs"
            className="grocery-input col-md-8 col-lg-8 col-10 mx-auto"
            value={item}
            onChange={(e) => setitem(e.target.value)}
          />
          <button
            type="submit"
            className="grocery-submit col-md-4 col-lg-4 col-10 mx-auto"
          >
            {submitText}
          </button>
        </form>
        <div className="grocery-items-list">
          {itemList.map((item, index) => {
            return (
              <GroceryItem
                item={item}
                edit={editGroceryItem}
                remove={deleteGroceryItem}
                itemIndex={index}
                key={index}
              />
            );
          })}
        </div>
        {itemList.length > 0 ? (
          <button
            className="btn btn-outline-danger text-capitalize mt-3"
            onClick={() => {
              setitemList([]);
              setmessageIndex(3);
            }}
          >
            clear all
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Grocery;
