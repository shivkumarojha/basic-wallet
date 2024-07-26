import 'dotenv/config'
import express from "express"

const app = express()

app.get("/health", (req, res) => {
    res.status(200).json({
        message: "Health Okay"
    })
})
app.listen(process.env.PORT, () => {
    console.log("Server is running at port " + process.env.PORT)
})