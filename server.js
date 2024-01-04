const express=require('express')
const dotenv=require('dotenv').config()
const contactRouter=require('./routes/contactRoutes')
const app=express()
app.use(express.json());
const port=process.env.PORT||3000

app.use('/api/contacts',contactRouter)


app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})



// app.get('/api/contacts',(req,res)=>{
// res.status(200).json({message:"get all contacts"})
// })