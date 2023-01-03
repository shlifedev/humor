import { createStore } from 'redux'
import produce from 'immer';
const a = (state, action) => {
  const newState = produce(state, draft=>{});
}
const store = createStore(a);

 