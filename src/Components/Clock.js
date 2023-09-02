import React, { useEffect, useState } from 'react'

function Clock() {

    const [startDate, setStartDate] = useState(new Date());

    const [date, setDate] = useState(new Date());
    // const id = setInterval(()=>{
    //     setDate(new Date())
    // }, 1000)
    // console.log(id)

    useEffect(()=>{
        const id = setInterval(()=>{
            const currentDate = new Date()
            setDate(currentDate);

            if(currentDate.getSeconds() === 59){
                console.log('End of Minute')
            }
        }, 1000)
        console.log(id)
        
    }, [])
  return (
    <div>
      <h1>{date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}</h1>
      <h1>
        <button onClick={()=>setStartDate(new Date())}>Reset</button>
        {
            Math.floor((date-startDate)/(1000*60*60))%24 + ':' + Math.floor((date-startDate)/(1000*60))%60 + ':' + Math.floor((date-startDate)/(1000))%60
        }
      </h1>
    </div>
  )
}

export default Clock
