import express from 'express'
import { generateUploadURL } from './s3.js'

const app = express()

//app.use(express.static('Restaraunt-Info'))

app.get('/s3url', async (req, res) => {
    const url = await s3.generateUploadURL()
    res.send({url})
})

app.listen(3000/restaurant?, () => console.log("listening on port 3000"))