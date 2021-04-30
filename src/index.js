import { createStore } from "redux";
import ReactDom from "react-dom";

const initialState = 0

const reduce = (state = initialState, action) => {
  if (action.type === "add") {
    return state + 1
  }
  if (action.type === "remove") {
    return state - 1
  }
  if (action.type === "multiply") {
    return state * 2
  }
  if (action.type === "devision") {
    return state / 2
  }
  return state
}

const store = createStore(reduce)

store.subscribe(() => {
  ReactDom.render(
    <div>
      <h1>{store.getState()}</h1>
      <button onClick={() => store.dispatch({ type: "add" })}>+</button>
      <button onClick={() => store.dispatch({ type: "remove" })}>-</button>
      <button onClick={() => store.dispatch({ type: "multiply" })}>*2</button>
      <button onClick={() => store.dispatch({ type: "devision" })}>/2</button>
    </div>
    , document.getElementById("root"))
})


ReactDom.render(
  <div>
    <h1>{store.getState()}</h1>
    <button onClick={() => store.dispatch({ type: "add" })}>+</button>
    <button onClick={() => store.dispatch({ type: "remove" })}>-</button>
    <button onClick={() => store.dispatch({ type: "multiply" })}>*2</button>
    <button onClick={() => store.dispatch({ type: "devision" })}>/2</button>
  </div>
  , document.getElementById("root"))