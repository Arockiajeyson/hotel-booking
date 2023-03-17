import React, { useEffect, useState,useContext } from 'react'
import axios from 'axios'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiOutlineSearch } from 'react-icons/ai'
import ToastCon from './Tost'
import ContextV from './AuthContext';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Customer() {
  const {Cart} =useContext(ContextV)
  const [state1, setState1] = useState()
  const [first, setfirst] = useState([])
  const {toast} =useContext(ToastCon)
  const [booked,setBooked] =useState([])
  const [open, setOpen] = useState(false);
  const [secondratings, setsecondratings] = useState()
  const handleOpen = (p) => {
    if(booked.includes(p)){
      return toast.error('hotel is already booked')
    }
    setOpen(false)
    const m =[...booked,p]
    setBooked(m)
    setOpen(true)
    setsecondratings(p)
  };
  const handleClose = () => setOpen(false);

  const [second, setsecond] = useState([])
  const [secondcity, setsecondcity] = useState([])
  const [secondstate, setsecondstate] = useState([])
  const [secondcountry, setsecondcountry] = useState(false)
  const [secondprice, setsecondprice] = useState([])
  useEffect(() => {
    const up = async () => {
      const headers = { 'Authorization': localStorage.getItem('t') }
      const uplo = await axios.post('http://localhost:3000/newPosts/all', null, { headers })
      setfirst(uplo.data)
    }
    up()
  }, [])
  const hane = (e) => {
    setState1(e)
  }
  const filters = async (e) => {
    setsecondcountry(false)
    if (e == 'lprice') {
      let d = [...first].sort((a, b) => parseInt(a.price) - parseInt(b.price))
      setfirst(d)
    }
    else if (e == 'hprice') {
      let d = [...first].sort((a, b) => parseInt(b.price) - parseInt(a.price))
      setfirst(d)
    } else if (e == 'pincode') {
      let d = [...first].sort((a, b) => a.pincode - b.pincode)
      setfirst(d)
    } else if (e == 'ratings') {
      let d = [...first].sort((a, b) => a.ratings - b.ratings)
      setfirst(d)
    } else if (e == 'city') {
      let d = [...first].sort((a, b) => a.city.charCodeAt(0) - b.city.charCodeAt(0))
      setfirst(d)
    } else if (e == 'country') {
      let d = [...first].sort((a, b) => a.country.charCodeAt(0) - b.country.charCodeAt(0))
      setfirst(d)
    } else if (e == 'state') {
      let d = [...first].sort((a, b) => a.state.charCodeAt(0) - b.state.charCodeAt(0))
      setfirst(d)
    } else if (e == 'location') {
      let d = [...first].sort((a, b) => a.location.charCodeAt(0) - b.location.charCodeAt(0))
      setfirst(d)
    }
  }
  const hands = () => {
    let da = first.filter((e) => e.name == state1)
    setsecondstate(da)
    setsecondcountry(true)
  }
  const handsd = (id)=>{
    // if(second.includes(id)){
    //   return toast.error('It is Already Added to Cart')
    // }
    let f =[...second,id]
    setsecond(f)
    let da = first.filter((e)=>id ===e._id)
    console.log(da)
    const d = [...secondprice,...da]
    setsecondprice(d)
    Cart(secondprice)
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <input type="text" onChange={(e) => hane(e.target.value)} style={{ width: '20%', marginTop: '30px', height: '40px', outline: 'none', fontSize: '17px', border: 'none', borderRadius: '5px' }} placeholder='Search Hotel Name....' />
        <span style={{ position: 'absolute', top: '2.6em', right: '39em', cursor: 'pointer' }} onClick={hands}><AiOutlineSearch /></span>
      </div>
      <h1 style={{ textAlign: 'center' }}>Filtering Option...</h1>
      <div style={{ marginLeft: '88vh' }}>
        <select onChange={(e) => filters(e.target.value)} style={{ width: '30%', height: '30px' }}>
          <option value="hprice">high price to low price</option>
          <option value="lprice">low price to high price</option>
          <option value="city">city</option>
          <option value="country">country</option>
          <option value="location">location</option>
          <option value="pincode">pincode</option>
          <option value="state">state</option>
          <option value="ratings">ratings</option>
        </select>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '30px' }}>
        {secondcountry === false ? first.map((e) => {
          return (
            <div className='gird'>
              <div>
                <img src={e.image} alt="" style={{ width: '100%' }} />
                <div className='content' style={{ padding: '20px' }}>
                  <p>Name : {e.name}</p>
                  <p>Price : ${e.price}</p>
                  <p>City : {e.city}</p>
                  <p>Country : {e.country}</p>
                  <p>Location : {e.location}</p>
                  <p>Pincode :{e.pincode}</p>
                  <p>State : {e.state}</p>
                  <Button onClick={()=>handsd(e._id)}>Add To cart</Button>
                  <Button onClick={()=>handleOpen(e.price)}>Book</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2" style={{textAlign:'center'}}>
                        Rent Amount....
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }} style={{textAlign:'center'}}>
                        ${secondratings}
                      </Typography>
                      <Button onClick={handleClose} style={{marginLeft:'12em'}}>Done</Button>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          )
        }) : secondstate.map((e) => {
          return (
            <div className='gird'>
              <div>
                <img src={e.image} alt="" style={{ width: '100%' }} />
                <div className='content' style={{ padding: '20px' }}>
                  <p>Name : {e.name}</p>
                  <p>Price : ${e.price}</p>
                  <p>City : {e.city}</p>
                  <p>Country : {e.country}</p>
                  <p>Location : {e.location}</p>
                  <p>Pincode :{e.pincode}</p>
                  <p>State : {e.state}</p>
                  <Button onClick={()=>handsd(e._id)}>Add To cart</Button>
                  <Button onClick={()=>handleOpen(e.price)}>Book</Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                      </Typography>
                      <Button onClick={handleClose} style={{marginLeft:'12em'}}>Done</Button>
                    </Box>
                  </Modal>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
