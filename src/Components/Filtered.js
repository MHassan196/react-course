import React, { useState } from 'react'
import List from './List';
import Form from './Form';

function Filtered({items}) {

    const [filteredItems, setFilteredItems] = useState(items)

    const handleChange = (e) => {
        console.log(e.target.value);
        setFilteredItems(items.filter(it=>(it.title.indexOf(e.target.value)>-1)))
    }

  return (
    <div>
      <Form handleChange={handleChange}></Form>
      <List filteredItems={filteredItems}></List>
      
    </div>
  )
}

export default Filtered
