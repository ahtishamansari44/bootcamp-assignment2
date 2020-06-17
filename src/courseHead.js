import React from 'react'
import Course from './course'

function Courses(props){
   return (
       <div>
           <h1>{props.title}</h1>
           <ul>
               {props.children}
           </ul>
       </div>
   )
}

export default Courses;