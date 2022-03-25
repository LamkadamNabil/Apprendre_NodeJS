const express = require('express')
const app = express()
const Joi=require('joi')
const Logged=require('./Logged');

app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('public'))
app.use(Logged.log)
app.get('/', function (req, res) {
  res.send('Hello World')
})
///http://localhost:3333/api/product?orderby=1992&id=123

app.get('/api/:id/:year', function (req, res) {
    res.send(req.params.id+req.params.year)
  })

  app.get('/api/product', function (req, res) {
    const {
        id,
        orderby = 'default'
      } = req.query;
    res.send(id + ' '+orderby);
  })

  app.post('/api/addProduct', function (req, res) {
    const schema = Joi.object({

        title:Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    })
   const {error ,value}= schema.validate(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
    }
  
    const newProduct={
        title :value.title 
    };
    res.send(newProduct);
  })
const Port =process.env.PORT || 6000
app.listen(Port,()=>{
    console.log(`the app is listening   
    port ${Port}`)
}) 