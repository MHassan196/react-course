import React from 'react'

function List({filteredItems}) {
  return (
    <div>
      {filteredItems.map(it=><div key={it.id}>{it.title}</div>)}
    </div>
  )
}

export default List
