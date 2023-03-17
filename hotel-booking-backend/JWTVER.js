const jwt =require('jsonwebtoken')

const JWt = (req,res,next)=>{
    try {
        
        const token =req.headers.authorization
        // console.log(token)
        if(token){
            const result =jwt.verify(token,'new')
            if(result){
                req.user=result.data
                next()
            }else{
                res.json('invalid token')
            }
        }else{
            return res.json('forbiddin')
        }
    } catch (error) {
        return res.json(error.message)
    }
}
module.exports=JWt