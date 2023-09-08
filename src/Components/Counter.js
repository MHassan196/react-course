import React, {useRef, useState} from 'react'

function Counter() {
    const [number, setNumber] = useState(0);
    let num = useRef(0);

    const handleClick = (e) => {
        e.stopPropagation();

        setNumber(number=>number+1);
        setNumber(number=>number+1);
        setNumber(number=>number+1);
        num.current++;

        console.log(num.current);
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
