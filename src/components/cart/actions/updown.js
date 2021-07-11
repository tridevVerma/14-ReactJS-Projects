export const incAmount = (id) => {
  return { type: "INCREMENT", payload: id };
};

export const decAmount = (id) => {
  return { type: "DECREMENT", payload: id };
};

export const removeItem = (id) => {
  return { type: "REMOVEITEM", payload: id };
};

export const emptyAmount = () => {
  return { type: "EMPTYAMOUNT" };
};
