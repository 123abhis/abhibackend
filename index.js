require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World! i am abhi')
})

app.get('/twiter', (req,res) =>{
    res.send('google in ')
})

app.get('/login',(req,res) =>{
    res.send('abhi is logged in ')
})

app.get('/youtube',(req,res) =>{
    res.send('youtube is working ')
})

app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})