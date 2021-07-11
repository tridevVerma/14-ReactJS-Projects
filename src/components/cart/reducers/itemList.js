import mobile from "../components/data";
const initialState = {
  list: [],
};

const itemList = (state = initialState, action) => {
  switch (action.type) {
    case "SHOWALL":
      return {
        ...state,
        list: mobile,
      };
    case "REMOVE":
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };

    case "REMOVEALL":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default itemList;
