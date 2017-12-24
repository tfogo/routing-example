const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// body-parser for getting values from forms
app.use(bodyParser.urlencoded({ extended: false }))

// Making a GET request to anything at the /static endpoint
// will return the file in the public folder
app.use('/static', express.static('public'))

// Define routes for sending html. express. static is more intended for just
// js, css, and images. Usually people will define the routes for
// html files more explicitly.
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/first.html')
})

app.post('/submit', (req, res) => {
  console.log(req.body) // Access the form data in req.body
  res.sendFile(__dirname + '/views/second.html')
})

app.listen(8000, () => {
  console.log('server started')
})
