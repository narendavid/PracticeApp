import React, {useState} from "react"

function Counter() {

    const [cont, setCont] = useState(0);

    const increment = () => {
        setCont(cont +1)
    }
    
    const decrement = () => {
        setCont(cont -1)
    }
    
    const reset = () => {
        setCont(0)
    }

    return (
        <> 
            <div className="container">
                <button onClick={increment}>+</button>
                <h1>{cont}</h1>
                <button onClick={decrement}>-</button>
                <br/>
                <button onClick={reset}>Reset</button>
            </div>
        </>
    )
}

export default Counter;