import React, {useState} from 'react'

function Counter() {
    const [number, setNumber] = useState(0);

    const handleClick = (e) => {
        e.stopPropagation();

        setNumber(number=>number+1);
        // setNumber(number=>number+1);
        // setNumber(number=>number+1);

        console.log(number);
    }
  return (
    <div>
      <div>
        <h3 style={{color: 'white'}}>{number}</h3>
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  )
}

export default Counter
