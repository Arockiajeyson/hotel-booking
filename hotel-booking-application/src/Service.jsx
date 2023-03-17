import React, { useEffect, useState } from 'react'
import { GrAdd } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
export default function Service() {
  const nav = useNavigate()
  const [state, setState] = useState([])
  useEffect(() => {
    const up = async () => {
      const headers = { 'Authorization': localStorage.getItem('t') }
      const uplo = await axios.post('http://localhost:3000/newPosts/g', null, { headers })
      setState(uplo.data)
      console.log(uplo.data)
    }
    up()
  }, [])
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Your Rooms</h1>
      <h4 style={{ cursor: 'pointer', border: '2px solid white', width: '100px', padding: '20px', backgroundColor: 'rgb(93, 99, 99)',marginLeft:'45%' }} onClick={() => nav('/postNewRooms')}><GrAdd /> Add New</h4>
      <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',marginTop:'30px'}}>
        {state.map((e) => {
          return (
            <div className='gird'>
              <div>
                <img src={e.image} alt="" style={{width:'100%'}}/>
                <div className='content'>
                  <p>Price : ${e.price}</p>
                  <p>City : {e.city}</p>
                  <p>Country : {e.country}</p>
                  <p>Location : {e.location}</p>
                  <p>Pincode :{e.pincode}</p>
                  <p>State : {e.state}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
