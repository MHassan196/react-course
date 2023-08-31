import React from 'react'

function List({items, layout}) {
    let style = "circle";
    switch(layout){
        case "numbered":
            style = "upper-roman";
            break;
        
        case "alpha":
            style = "lower-alpha";
            break;

        default:
            style = "circle"
    }
  return (
    <div>
        <ul style={{listStyleType: style}}>
        {
            items.map(it=><li>{it.title}</li>)
        }
        </ul>
    </div>
  )
}

export default List
