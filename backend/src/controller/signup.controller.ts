import { Request, Response } from "express";
import { z } from "zod";
import { PrismaClient } from "@prisma/client";

// Creating prisma client
const prisma = new PrismaClient()
const signupSchema = z.object({
    email: z.string().email(),
    userName: z.string(),
    name: z.string(),
    password: z.string()
})



export async function signup(req: Request, res: Response) {
    const parsedData = signupSchema.safeParse(req.body)
    if (!parsedData.success) {
        return res.json({
            message: "Provide required values",
            error: parsedData.error
        })
    }

    const { email, userName, password, name} = parsedData.data
    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                password,
                userName,
                name
            },
            select: {
                id: true
            }
        })
        return res.json({
            message: "User is successfully registered",
            userId: newUser.id
        })
    } catch (error) {
        return res.json({
            message: "Something went wrong while creating the user",
            error: error
        })
    }

}