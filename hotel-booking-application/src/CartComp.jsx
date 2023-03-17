import React, { useContext } from 'react'
import ContextV from './AuthContext'
export default function CartComp() {
    const {state} =useContext(ContextV)
  return (
    <div>CartComp</div>
  )
}
