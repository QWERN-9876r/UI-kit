import express from 'express'

const app = express(),
 PORT = 5000


app.listen( PORT, () => {
    console.log(`Server strted on http://localhost:${PORT}`)
} )