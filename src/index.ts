import express from 'express'
const app = express()

app.get('/', (req , res) => {
  res.sendFile('register.html', { root: './pages' })
})


app.get('/shop', (req , res) => {
  res.sendFile('shop.html', { root: './pages' })
})













app.listen(8888, () =>{
  console.log('server on');
  
})





