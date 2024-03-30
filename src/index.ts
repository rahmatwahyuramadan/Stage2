import express from 'express'
import * as dotenv from 'dotenv'
import router from "./routers/router"

const app = express()
app.use(express.json())
dotenv.config()

app.use("/api/v2/", router)

app.listen(process.env.PORT, () => {
    console.log(`server running in port: ${process.env.PORT}`)
})