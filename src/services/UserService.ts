import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { register } from "../utils/UserUtils";
import { login } from "../utils/UserUtils"
import * as bcyrpt from 'bcrypt'
import * as jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export default new class UserService{
    private readonly UserRepoitory = prisma.user
    private readonly WalletRepository = prisma.wallet

    async register (req: Request, res: Response): Promise<Response> {
        try{
            const body = req.body
            const {error} = register.validate(body)
            if (error) return res.status(400).json(error)

            const isMailRegisted = await this.UserRepoitory.count({ where: {email: body.email} })
            if (isMailRegisted > 0) return res.status(400).json({massage: "email already registed"})

            const hashPassword = await bcyrpt.hash(body.password, 10)

            const user = await this.UserRepoitory.create({
                data: {
                    email: body.email,
                    password: hashPassword,
                    fullname: body.fullname,
                    createdAt: new Date()
                }
            })

            return res.status(201).json(user)
        }catch(error){
            return res.status(500).json(error)
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try{
            const body = req.body

            const {error, value} = login.validate(body)
            if (error) return res.status(400).json({massage: "error while validating data"})

            const isMailRegisted = await this.UserRepoitory.findFirst({ where: { email: value.email } })
            if (!isMailRegisted) return res.status(409).json({ message: "Email isnt Registed" })

            const isMacthPassword = await bcyrpt.compare(value.password, isMailRegisted.password)
            if (!isMacthPassword) return res.status(409).json({ message: "Incorrect Password!" })

            const tokenPayload = {
                id: isMailRegisted.id
            }
            const token = jwt.sign({ tokenPayload }, 'SECRET_KEY', { expiresIn: 99999 })

            const isWallet = await this.WalletRepository.findUnique({
                where: {userId: isMailRegisted.id}
            })
            let thisWallet: any
            if (!isWallet){
                const wallet = await this.WalletRepository.create({
                    data: {
                        inflow: 0,
                        outflow: 0,
                        balance: 0,
                        userId: isMailRegisted.id,
                        createdAt: new Date()
                    }
                })
                thisWallet = wallet
            }


            return res.status(200).json({token, thisWallet})

        }catch (error) {
            return res.status(500).json(error)
        }
    }
}