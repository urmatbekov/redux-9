import React from 'react';
import { connect } from "react-redux"
import { addCount, minusCount, multiplyCount, devideCount } from "./actions"


const App = ({ count, addCount, minusCount, multiplyCount, devideCount }) => {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addCount}>+</button>
            <button onClick={minusCount}>-</button>
            <button onClick={multiplyCount}>*2</button>
            <button onClick={devideCount}>/2</button>
        </div>
    );
};

const msp = ({ count }) => {
    return { count }
}



export default connect(
    msp, { addCount, minusCount, multiplyCount, devideCount }
)(App);