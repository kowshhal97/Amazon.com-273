const express = require('express')
require('./db/SQLdatabase')
const cors = require('cors')
const customerRouter = require('./routers/customer');
const app = express()

app.use(cors({ origin: true, credentials: true }))
app.use(express.json({ extended: false }))
const port = process.env.PORT || 3000

app.use(express.json())

app.use(customerRouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})