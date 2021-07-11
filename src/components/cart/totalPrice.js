export const totalPrice = (itemAmountList, itemsList) => {
  return itemsList.reduce((total, item) => {
    if (itemAmountList[item.id].amount > 0) {
      return total + itemAmountList[item.id].amount * item.price;
    }
    return total;
  }, 0);
};
