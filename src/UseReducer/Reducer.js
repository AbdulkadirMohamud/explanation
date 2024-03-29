import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.ShowText };
    default:
      return state;
  }
};

const Reducer= () => {
    const [state, dispatch ] = useReducer(reducer, {count: 0, showText: true });
    reutrn(
        <div>
            <h1>(h1/ {state.count }</h1>)
            <button 
            onClick={() => {
                dispatch({type: "INCREMENT"});
                dispatch({type: toggleShowText});
            }}
            >
                Click Here 
            </button>
            {state.showText && <p>this a Text </p>}
        </div>
    );
};

export default Reducer;
