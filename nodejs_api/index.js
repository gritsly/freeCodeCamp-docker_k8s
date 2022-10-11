const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.json([{
    name: 'Ben',
    email: 'you.wish@to.know'
  },
  {
    name: 'John',
    email: 'another@one.pm'
  },
  {
    name: 'Jake',
    email: 'third@one.pm'
  },
  {
    name: 'Jane',
    email: 'cuatro@one.pm'
  }
  ]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})