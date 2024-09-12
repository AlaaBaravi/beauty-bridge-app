import { createContext, useContext, useReducer } from "react";
import SALONS from "../../data/salonsData";

export const SalonsContext = createContext(initialState);

const initialState = {
  salons: SALONS,
  favIds: [],
  cartItems: [],
  salonCartId: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addSalonCart":
      return {
        ...state,
        salonCartId: action.payload,
      };
    case "addToCart":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "removeFromCart":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.title !== action.payload
        ),
      };
    case "clearCart":
      return {
        ...state,
        cartItems: [],
      };
    case "addFavorite":
      return {
        ...state,
        favIds: [...state.favIds, action.payload],
      };
    case "removeFavorite":
      return {
        ...state,
        favIds: state.favIds.filter((salonid) => salonid !== action.payload),
      };
    default:
      throw new Error("Unknown action type");
  }
};

function SalonsContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SalonsContext.Provider value={{ state, dispatch }}>
      {children}
    </SalonsContext.Provider>
  );
}

export default SalonsContextProvider;

export const useSalonsContext = () => {
  return useContext(SalonsContext);
};
