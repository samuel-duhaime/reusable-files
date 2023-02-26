import { createContext, useReducer } from "react";

export const ModelContext = createContext();

// Initial context state
const initialState = {};

// Reducer for all the actions type
const reducer = (state, action) => {
  const { type } = action; // All the action object

  switch (type) {
    case "name-of-action": {
      return {
        ...state,
        // State change
      };
    }
    default: {
      throw new Error(`Invalid type + ${type}`);
    }
  }
};

// Context provider
export const ModelProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Reducer action
  const nameOfAction = () => {
    dispatch({ type: "name-of-action" });
  };

  return (
    <BookingContext.Provider
      value={{
        state,
        actions: {
          nameOfAction,
        },
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
