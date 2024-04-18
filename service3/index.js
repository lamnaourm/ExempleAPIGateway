import express from 'express'

const app = express()

app.get('/', (req,res) => {
    res.send('Get de service 3 ...')
})

app.listen(3000)