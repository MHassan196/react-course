const Border = function({children}){
    return(
        <div style={{border:'2px solid white', display:'inline-block'}}>
            {children}
        </div>
    )
}

export default Border;