const express =require('express')
const app =express()
const Sche1 =require('./REgisterSchema')
const Sche2 =require('./postNewSchema')

const tokenChe =require('./JWTVER')

app.post('/p',tokenChe,async(req,res)=>{
    try {
        req.body.idx =req.user
        const newP =await Sche2.create(req.body)
        return res.json('Success')
    } catch (error) {
        return res.json(error.message)
    }
})

app.post('/g',tokenChe,async(req,res)=>{
    try {
        const newG =await Sche2.find({idx:req.user})
        return res.json(newG)
    } catch (error) {
        return res.json(error.message)
    }
})

app.post('/all',tokenChe,async(req,res)=>{
    try {
        const all =await Sche2.find()
        console.log(all)
        return res.json(all)
    } catch (error) {
        return res.json(error.message)
    }
})
module.exports=app