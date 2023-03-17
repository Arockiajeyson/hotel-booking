import React, { useState } from 'react'
import FileBase64 from 'react-file-base64';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function NewPostCre() {
    const nav = useNavigate()
    const [state1, setState1] = useState({
        image: '',
        price:'',
        location:'',
        country:'',
        pincode:'',
        state:'',
        city:'',
        name:''
    })
    const up = async () => {
        console.log('l')
        const { image,price,city,country,location,pincode,state,name } = state1
        const headers = { 'Authorization': localStorage.getItem('t') }
        const uplo = await axios.post('http://localhost:3000/newPosts/p', { image,price,location,country,pincode,state,city,name }, { headers })
        nav('/service')
    }
    return (
        <>
            <div className='post-div'>
                <h1 style={{ textAlign: 'center' }}>Post Available Rooms</h1>
                <div style={{ backgroundColor: 'white', marginLeft: '50px' }}>
                    <FileBase64 onDone={(e) => { setState1({ ...state1, image: e.base64 }) }} className='file' />
                </div>
            </div>
            <div style={{ marginLeft: '41%', marginTop: '30px' }}>
                <div>
                <h3>Amount :</h3>
                    <input onChange={(e)=>setState1({...state1,price:e.target.value})} type="text" placeholder='Enter Amount...'  style={{ width: '25%', height: '40px', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '20px' }} />
                </div>
                <div>
                    <h3>City :</h3>
                    <input type="text" onChange={(e)=>setState1({...state1,city:e.target.value})} placeholder='Enter city...'  style={{ width: '25%', height: '40px', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '20px' }} />
                </div>
                <div>
                    <h3>Hotel Name :</h3>
                    <input type="text" onChange={(e)=>setState1({...state1,name:e.target.value})} placeholder='Enter Name...'  style={{ width: '25%', height: '40px', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '20px' }} />
                </div>
                <div>
                    <h3>PinCode :</h3>
                    <input type="text" onChange={(e)=>setState1({...state1,pincode:e.target.value})} placeholder='Enter Pincode...'  style={{ width: '25%', height: '40px', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '20px' }} />
                </div>
                <div>
                    <h3>Location :</h3>
                    <input type="text" onChange={(e)=>setState1({...state1,location:e.target.value})} placeholder='Enter Amount...'  style={{ width: '25%', height: '40px', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '20px' }} />
                </div>
                <div>
                    <h3>Country :</h3>
                    <input type="text" onChange={(e)=>setState1({...state1,country:e.target.value})} placeholder='Enter Country...'  style={{ width: '25%', height: '40px', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '20px' }} />
                </div>
                <div>
                    <h3>State :</h3>
                    <input type="text" onChange={(e)=>setState1({...state1,state:e.target.value})} placeholder='Enter Country...'  style={{ width: '25%', height: '40px', borderRadius: '5px', border: 'none', outline: 'none', fontSize: '20px' }} />
                </div>
                <button onClick={up} style={{ width: '30%', height: '40px', cursor: 'pointer', borderRadius: '10px', marginTop: '30px' }}>Upload</button>
            </div>
        </>
    )
}
