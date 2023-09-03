import React from 'react'

function Form({handleChange}) {
  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default Form
