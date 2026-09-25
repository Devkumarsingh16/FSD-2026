import React from 'react'
import ICard from './ICard'
import myi from '../images/myimg.jpg'

function ICardGallery() {

const student=[
  {
    pic:myi,
    roll:'069',
    name:'Dev Singh',
    branch:'CSE-AIML'
},
{
    pic:myi,
    roll:'069',
    name:'Dev Singh',
    branch:'CSE-AIML'
},{
    pic:myi,
    roll:'069',
    name:'Dev Singh',
    branch:'CSE-AIML'
},{
    pic:myi,
    roll:'069',
    name:'Dev Singh',
    branch:'CSE-AIML'
}

]
  return (
    <div style = {{display:'flex'}}>

      {/* using props */}
      {/* <ICard pic = {myi} roll = '068' name = 'Dev' branch = 'AIML' />
       {/* <ICard roll = '069' name = 'Ram' branch = 'AIML'/>
        <ICard roll = '061' name = 'Shyam' branch = 'AIML'/>
         <ICard roll = '062' name = 'Prince' branch = 'AIML'/> */} 

         {/* {
          student.map((ele)=>{
            <ICard data = {ele}/>
          })
         } */}

         {/* <ICard data={student} /> */}


         {
          student.map(ele=>(
            <ICard data={ele} /> 
          ))
         }

        
    </div>
  )
}

export default ICardGallery
