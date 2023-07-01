import React, { useReducer, useRef } from 'react'

const Reducer = (state, action) => {
    if(action.type === 'buy_some_ingredients') return { money: state.money - 10 }
    if(action.type === 'sell_a_meal') return { money: state.money + 10 }
    return state
}

const index = () => {
    const initialState = { money: 40 }
    const [state, dispatch] = useReducer(Reducer, initialState)

    const inputRef = useRef(null)

    const handleRef = () => {
        inputRef.current.focus()
    }

    return (
    <div>
        <h1>
            Use Reducer example   
        </h1>
        <p>Total money: { state.money } </p>
        <div>
            <button onClick={() => dispatch({ type: 'buy_some_ingredients' })}>Shopping ingredients!</button>
            <button onClick={() => dispatch({ type:'sell_a_meal' })}>Serve a meal to the customer</button>
        </div>

        <h1>Use Ref example</h1>
        <input ref={inputRef} type="text" />
        <button onClick={handleRef}>Focus input</button>
    </div>
  )
}

export default index