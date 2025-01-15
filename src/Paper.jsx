import React, { useState } from 'react'


export const Paper = () => {
  const [click , setClick]=useState (true);

  function Click () {
    setClick(!click);
  };
 // const p1= <p> I'am here</p>
  //const p2 = <p> I'am not here</p>

  return (
    <div>
        <button onClick={Click}>
          Click me          
         </button>
         {click?  "Hello" : "im here"}




    </div>
  )
}
export default Paper