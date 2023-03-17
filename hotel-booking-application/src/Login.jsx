import React, { useState,useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ToastCon from './Tost'
export default function Login() {
    const nav =useNavigate()
    const {toast} =useContext(ToastCon)
    const [state,setSatet] =useState({
        Email:'',
        Password:''
    })
    const hander =async()=>{
        let {Email,Password} =state
        const res = await axios.post('http://localhost:3000/login',{Email,Password})
        if(res.data[0] =='Logged-in'){
            localStorage.setItem('t',res.data[1])
            toast.success('Success')
            console.log(res.data[2])
            if(res.data[2] =='customer'){
                nav('/cus')
            }else{
                nav('/service')
            }
        }else{
            toast.error(res.data)
        }
    }
  return (
    <div className='log-mai'>
        <h1>Login</h1>
        <div>
            <label htmlFor="email-login">Email : </label>
            <input type="email" onChange={(e)=>setSatet({...state,Email:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="Password-login">Password : </label>
            <input type="password" onChange={(e)=>setSatet({...state,Password:e.target.value})}/>
        </div>
        <div>
            <button onClick={hander}>Login</button>
        </div>
        <div>
            <p>Need an Account? <span onClick={()=>nav('/reg')} style={{cursor:'pointer',color:'blue'}}>Click</span></p>
        </div>
    </div>
  )
}
