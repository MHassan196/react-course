import React, { useState } from 'react'

function DropDown() {

    const [options, setOptions] = useState([])
    const [nation, setNation] = useState({name:"", value:""})

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const handleInput = (e) => {
        setNation({...nation, 
            [e.target.name] : e.target.value
        })
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(nation.name && nation.value){
            setOptions([...options, nation])
            setNation({name:"", value:""})
        }
        else{
            console.log('Enter Valid Value')
        }     
    }

  return (
    <div>
      <select onChange={handleChange}>
        <option value="">--Select</option>
        {options.map(op=><option value={op.value}>{op.name}</option>)}
      </select>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='Name' onChange={handleInput} value={nation.name} />
        <input type="text" name="value" placeholder='Value' onChange={handleInput} value={nation.value} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default DropDown
