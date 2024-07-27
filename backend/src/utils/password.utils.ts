import bcrypt from "bcryptjs"


const hashpassword = async (password: any) => {
    const saltRound = 10
    const hashedPassword = await bcrypt.hash(password, saltRound)
    return hashedPassword
}

const matchpasword = async (password: any, hashedPassword: any) => {
    const isMatched = await bcrypt.compare(password, hashedPassword)
    return isMatched
}

export {
    hashpassword,
    matchpasword

}