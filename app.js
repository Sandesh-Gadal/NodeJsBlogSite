
const express = require('express')

const app = express()


app.get('/',(req,res)=>{
   console.log('Starting NodeJS journey') 
})

app.listen(3000,()=>{
    console.log("Server has started at port : 3000")
})