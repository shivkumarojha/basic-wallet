import 'dotenv/config'
import express from "express"
import { rootRouter } from './routes'
import cors from "cors"

const app = express()

// cors
app.use(cors())

// body parser
app.use(express.json())

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Health Okay"
    })
})

app.use("api/v1", rootRouter)
app.listen(process.env.PORT, () => {
    console.log("Server is running at port " + process.env.PORT)
})