import { useState } from 'react';

export const App = () => {

  const [counter, setCounter] = useState(0)

  const incremented = ( number: number ): void => {
    setCounter(counter + number)
  }

  return (
    <div>
      <h1>NikeShoes - TS</h1>
      <p>{ counter }</p>
      <button onClick={ () => incremented(2) }>
        + 1
      </button>
    </div>
  )
}

