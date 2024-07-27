import express, { Request, Response } from "express"
import { signup } from "../controller/signup.controller"
import signin from "../controller/signin.controller"

const router = express.Router()

router.post("/signup", signup)

router.post("/signin", signin)


export default router