
const StoreReducer = (state, action) => {
  switch (action.type) {
      case "SET_PRODUCTS":
          return { ...state, products: action.payload };
      case "ADD_TO_CART":
          return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      case "REMOVE_TO_CART":
          return {
              ...state,
              cart: state.cart.filter(c => c.id !== action.payload.id)
          };
      case "CHANGE_PRODUCT":
          return {
              ...state,
              cart: state.cart.filter((c) => 
                  c.id === action.payload.id ?  c.qty=action.payload.qty  : c.qty
              )
          };
      default:
          return state;
  }
};

export default StoreReducer;
