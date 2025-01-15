import React from 'react'
 import { Outlet, useNavigate } from 'react-router-dom';
export const Courses = () => {

    const navigate=useNavigate();
  return (
    <div>  
      <h1>Courses</h1>


        <button onClick={()=>navigate('/courses/enligne')}> Cours en ligne</button>
        <button onClick={()=> navigate('/courses/presentiel')}>Cours en présentiel </button>

        <Outlet/>




    </div>
  )
}

export default Courses;