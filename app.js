const express = require("express")
const bodyParser = require("body-parser")
const app = express()

const PORT = process.env.PORT || 3000;
const db = require("./queries");

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post('/api', (req, res) => {
  const { firstName, lastname } = req.body;

  
})

app.get('/api/user_id', (req, res) => {
  
})








app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})