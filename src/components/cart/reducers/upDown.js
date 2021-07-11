import mobile from "../components/data";
const initialState = {
  amountList: mobile.map((item) => {
    return { id: item.id, amount: item.amount };
  }),
};

const itemAmount = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        amountList: state.amountList.map((item) => {
          return {
            id: item.id,
            amount: item.id === action.payload ? item.amount + 1 : item.amount,
          };
        }),
      };
    }

    case "DECREMENT": {
      return {
        ...state,
        amountList: state.amountList.map((item) => {
          return {
            id: item.id,
            amount: item.id === action.payload ? item.amount - 1 : item.amount,
          };
        }),
      };
    }

    case "REMOVEITEM": {
      return {
        ...state,
        amountList: state.amountList.map((item) => {
          if (item.id === action.payload) {
            return { id: item.id, amount: 0 };
          }
          return { id: item.id, amount: item.amount };
        }),
      };
    }

    case "EMPTYAMOUNT": {
      return {
        ...state,
        amountList: state.amountList.map((item) => {
          return { id: item.id, amount: 0 };
        }),
      };
    }
    default:
      return state;
  }
};

export default itemAmount;
