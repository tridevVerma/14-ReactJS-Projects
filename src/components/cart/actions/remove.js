export const remove = (id) => {
  return { type: "REMOVE", payload: id };
};

export const removeAll = () => {
  return { type: "REMOVEALL" };
};

export const showAll = () => {
  return { type: "SHOWALL" };
};
