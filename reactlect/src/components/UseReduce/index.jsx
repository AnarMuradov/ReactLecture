import React, { useReducer } from "react";
import style from "./style.module.scss"
function reducer(state, action) {
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + action.payload };

    case "dec":
      return { ...state, count: state.count - action.payload };

    default:
      return state;
  }
}

const Usereduce = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  function increase(payload) {
    dispatch({ type: "inc", payload });
  }
  function decrease(payload) {
    dispatch({ type: "dec", payload });
  }
const styleh1={
  color:"red"
}
  return (
    <div>
      <h1 style={styleh1}>{state.count}</h1>
      <button className={style.plas} onClick={() => increase(2)}>+</button>
      <button style={{backgroundColor:"red"}} onClick={() => decrease(2)}>-</button>
    </div>
  );
};

export default Usereduce;
