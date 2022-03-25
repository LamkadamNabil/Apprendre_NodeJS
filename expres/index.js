const express = require('express')
const app = express()
const Joi = require('joi');


///

const port = process.env.PORT

////
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static('test'))


app.get('/api/product', (req, res) => {
  //res.send('user number ='+req.params.id)
  //res.send(req.query.orderby +' '+ req.query.id)
})
app.get('/api', (req, res) => {
    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required()
    })
        const {value ,error}=schema.validate(req.body);
        if(error){
            res.send(error.details[0].message)
        }
        res.send(value)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
///http://localhost:3333/api/product?orderby=1992&id=123