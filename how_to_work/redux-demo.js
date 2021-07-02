// importovanie redux knižnice
const redux = require('redux')

// reducer funkcia, 
// musi byt inicializacna hodnota counter
const counterReducer = (state = { counter: 0}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    }
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    }
  }

  return state
}

// vytvorenie Redux uložiska
const store = redux.createStore(counterReducer)

// console.log(store.getState());
// output: { counter: 1 }

// funkcia, kt. schváli zmeny
const counterSubscriber = () => {
  const latestState = store.getState()
  console.log(latestState)
}

// subscribe metóda očakáva funkciu, kt. sa vykona po každej zmene stavu
store.subscribe(counterSubscriber)

// dispatch metoda, ak chcem odoslat akciu
store.dispatch({ type: 'increment' })
// output: { counter: 1 }
store.dispatch({ type: 'decrement' })
// output: { counter: 0 }

