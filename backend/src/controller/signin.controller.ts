import { Request, Response } from "express"

const signin = (req: Request, res: Response) => {
    res.json({
        message: "signin i"
    })
}

export default signin