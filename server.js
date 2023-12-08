const express = require('express')
const app = express()


app.get('/', (req, res) => {

  try {
    res.send('Hello World!')
  } catch (error) {
    res.status("ok")
  }

})

app.listen(3000, () => {
console.log("server connected")
})

//Run the app with the following command
//node app.js