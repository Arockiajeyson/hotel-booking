import React ,{useContext, useState} from 'react'
import axios from 'axios'
import ToastCon from './Tost'
import { useNavigate } from 'react-router-dom'
export default function Register() {
    const {toast} =useContext(ToastCon)
    const nav =useNavigate()
    const [first, setfirst] = useState({
        Name:'',
        Email:'',
        Password:'',
        Types:'customer'
    })
    const handler =async()=>{
        let {Email,Password,Types,Name} =first
        const res = await axios.post('http://localhost:3000/register',{Name,Email,Password,Types})
        if(res.data ==='Successful') {
            toast.success(res.data)
            nav('/')
        }
        else toast.error(res.data)
    }
  return (
    <div className='Reg-main'>
        <h1>Register Page</h1>
        <div>
            <label htmlFor="name">Name : </label>
            <input type="text" id='name' onChange={(e)=>setfirst({...first,Name:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="email">Email : </label>
            <input type="email" id='email' onChange={(e)=>setfirst({...first,Email:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="pass">Password : </label>
            <input type="password" id='pass' onChange={(e)=>setfirst({...first,Password:e.target.value})}/>
        </div>
        <div>
            <label htmlFor="option">Customer or Service provider : </label>
            <select onChange={(e)=>setfirst({...first,Types:e.target.value})}>
                <option value='customer'>Customer</option>
                <option value='service provider'>service provider</option>
            </select>
        </div>
        <div>
            <button onClick={handler}>Register</button>
        </div>
        <div>
            <p>Already have an Account? <span onClick={()=>nav('/')} style={{cursor:'pointer',color:'blue'}}>Click</span></p>
        </div>
    </div>
  )
}
