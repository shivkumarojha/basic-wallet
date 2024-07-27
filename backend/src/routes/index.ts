import express from "express"
import { router as userRouter } from "./user"

export const router = express.Router()

router.use("/user", userRouter)
