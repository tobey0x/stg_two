const express = require("express")
const hngInternRoutes = require("./src/interns/routes")

const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.use("/api", hngInternRoutes);





app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
})