const db = require('./db')
const express = require('express')
const productsController = require('./controllers/productsController')
const cors = require('cors')
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001


const app = express()

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/products', productsController.getAllProducts)

app.get('/products/:id', productsController.getOneProduct)

app.post('/products', productsController.createProducts)

app.put('/products/:id', productsController.updateProducts)

app.delete('/products/:id', productsController.deleteProducts)


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})