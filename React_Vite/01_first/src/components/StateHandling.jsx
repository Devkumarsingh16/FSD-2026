import React, { useState } from 'react'

function StateHandling() {

    const [counter,setcounter] = useState(20);
    const [red,setRed] = useState(250);
    const [green , setGreen] = useState(0);
    const [blue,setBlue] = useState(0);

    function increment(){
        setcounter(counter+10);
    }

    function changecolor(){
        setRed(Math.random()*255)
            setGreen(Math.random()*255)
                setBlue(Math.random()*255)
        

        
    }
  return (
    <div style = {{backgroundColor:`rgb(${red},${green},${blue})`,border:'2px solid yellow', heigth:'500px'}}>
      Counter App
      <h2>Counter:{counter}</h2>
      <button onClick = {increment} >Increase</button>
      <button onClick = {() => setcounter(counter-5)} style = {{marginLeft:"10px"}}>Decrease</button>
       <button onClick={changecolor} style = {{marginLeft:"10px"}}>Change Color</button>
    </div>
  )
}

export default StateHandling
