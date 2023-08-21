import { useReducer } from "react";

type StateType = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
type ActionType = UpdateAction | ResetAction;

const initialState = { count: 0 };

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container">
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement", payload: 5 })}>
        -5
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}
