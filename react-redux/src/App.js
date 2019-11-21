import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counter);
  const isLooged = useSelector(state => state.isLooged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(15))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {/* {isLooged ? <h3>Valuable Information I shouldn't see</h3> : ''} */}
      {isLooged && <h3>Valuable Information I shouldn't see</h3>}
    </div>
  );
}

export default App;
