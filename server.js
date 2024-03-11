console.log('Hello')
const express = require('express')
const app = express()

// routes
app.get('/',(req,res) => {
    res.send('Hello NODE API')
})
app.get('/blog',(req,res) => {
    res.send('Hello Blog my name is Chumani')
})
app.listen(3000, () => {
    console.log('Node API app is running on port 3000')
})