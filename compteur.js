import React from 'react'
const startingState = { count: 0 }
const reducerCounter = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count !== 0 ? state.count - 1 : (state.count = 0) }
    default:
      throw new Error('Error occured in counter')
  }
}
export default function ReactCounter() {
  const [state, dispatch] = React.useReducer(reducerCounter, startingState)
  return (
    <div>
      <h2 className="mb-4">React useReducer Counter Example</h2>
      <div>
        <h2>{state.count}</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: 'decrement' })
          }}
        >
          decrement
        </button>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={() => {
            dispatch({ type: 'increment' })
          }}
        >
          increment
        </button>
      </div>
    </div>
  )
}