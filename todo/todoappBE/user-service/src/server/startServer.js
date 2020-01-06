
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
import setUpRoutes from "./routes"
import accessEnv from '../helpers/accessEnv'
const PORT = accessEnv("PORT" , 8080)


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())

setUpRoutes(app);

app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

app.listen(PORT, () => {
    console.log('Example app listening on port 8080!');
})