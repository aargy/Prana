const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Hello World 3333333')
})
app.listen(3000, () => console.log('Server running on port 3000'))
