import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1> Page not found 404</h1>

      <button onClick={()=>navigate('/')}>Retour à Home</button>
      <Outlet/>


    </div>
  )

}

export default NotFound;