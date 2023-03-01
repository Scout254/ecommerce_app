export const initialState = {
  basket: [],
  details: [],
  user:null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      const existingIndex = state.basket.findIndex((item) => item.id === action.item.id);
      if (existingIndex >= 0) {
        const existingItem = state.basket[existingIndex];
        const updatedItem = { ...existingItem, quantity: existingItem.quantity + 1 };
        const updatedBasket = [...state.basket];
        updatedBasket.splice(existingIndex, 1, updatedItem);
        return { ...state, basket: updatedBasket };
      } else {
        return { ...state, basket: [...state.basket, { ...action.item, quantity: 1 }] };
      }

    case 'REMOVE_FROM_BASKET':
      const existingItemIndex = state.basket.findIndex((item) => item.id === action.id);
      const existingItem = state.basket[existingItemIndex];
      if (existingItem.quantity > 1) {
        const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
        const updatedBasket = [...state.basket];
        updatedBasket.splice(existingItemIndex, 1, updatedItem);
        return { ...state, basket: updatedBasket };
      } else {
        const updatedBasket = [...state.basket];
        updatedBasket.splice(existingItemIndex, 1);
        return { ...state, basket: updatedBasket };
      }

    case 'DECREASE_QUANTITY':
      const decreaseItemIndex = state.basket.findIndex((item) => item.id === action.id);
      const decreaseItem = state.basket[decreaseItemIndex];
      if (decreaseItem.quantity > 1) {
        const updatedItem = { ...decreaseItem, quantity: decreaseItem.quantity - 1 };
        const updatedBasket = [...state.basket];
        updatedBasket.splice(decreaseItemIndex, 1, updatedItem);
        return { ...state, basket: updatedBasket };
      } else {
        const updatedBasket = [...state.basket];
        updatedBasket.splice(decreaseItemIndex, 1);
        return { ...state, basket: updatedBasket };
      }

    case 'INCREASE_QUANTITY':
      const increaseItemIndex = state.basket.findIndex((item) => item.id === action.id);
      const increaseItem = state.basket[increaseItemIndex];
      const updatedItem = { ...increaseItem, quantity: increaseItem.quantity + 1 };
      const updatedBasket = [...state.basket];
      updatedBasket.splice(increaseItemIndex, 1, updatedItem);
      return { ...state, basket: updatedBasket };

    case 'REMOVE_ALL_FROM_BASKET_BY_ID':
      const filteredBasket = state.basket.filter((item) => item.id !== action.id);
      return { ...state, basket: filteredBasket };

    case 'SET_DETAILS':
      return {
        ...state,
        details: [action.details]
      };
    case 'SET_LOGIN':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_LOGOUT':
      return {
        ...state,
        user:null,
      };
      

    default:
      return state;
  }
};

export default reducer;
