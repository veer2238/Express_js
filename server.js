const express = require('express')
const app = express()


app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(3000, () => {
console.log("server connected")
})

//Run the app with the following command
//node app.js