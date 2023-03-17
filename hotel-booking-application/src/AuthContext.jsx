import React, { createContext, useState } from 'react'
const ContextV =createContext()
export function AuthContext({children}) {
  const [state,setState] =useState([])
  const Cart =(id)=>{
    // setState([...state,...id])
    console.log(id)
  }
  return (
    <div>
        <ContextV.Provider value={{Cart,state}}>
            {children}
        </ContextV.Provider>
    </div>
  )
}
export default ContextV