import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { addTransaction } from "../utils/TransactionUtils";

const prisma = new PrismaClient()

export default new class TransactionService{
    private readonly TransactionRepository = prisma.transaction
    private readonly WalletRepository = prisma.wallet

    async addTransaction(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { error } = addTransaction.validate(body)
            if (error) return res.status(400).json(error.message)
            const tokenDecode = res.locals.loginSession.tokenPayload
            const id = tokenDecode.id

            const thisWallet = await this.WalletRepository.findUnique({ 
                where: {userId: id}
            })

            if(!thisWallet) return res.status(400).json({ message: "Wallet not found!" })

            const transaction = await this.TransactionRepository.create({
                data: {
                    amount: body.amount,
                    date:  new Date(body.date).toISOString(),
                    category: body.category,
                    note: body.note,
                    userId: id,
                    createdAt: new Date()
                }
            })
            
            const in_flow = thisWallet.inflow + body.amount
            const out_flow = thisWallet.outflow + body.amount
            let balance = parseInt('')
            let updatedWallet: any

            if(body.category === "income") {
                balance = thisWallet.balance + body.amount

                const updateWallet = await this.WalletRepository.update({
                        where: {userId: id},
                        data: {
                            inflow: in_flow,
                            balance: balance,
                            userId: id
                        }
                    })

                    updatedWallet = updateWallet
            }else {
                balance = thisWallet.balance - body.amount

                const updateWallet = await this.WalletRepository.update({
                        where: {userId: id},
                        data: {
                            outflow: out_flow,
                            balance: balance,
                            userId: id
                        }
                    })

                    updatedWallet = updateWallet
            }

            return res
            .status(201)
            .json({transaction, updatedWallet})

        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    }

    async addToWallet(req: Request, res: Response){
        try{

        }catch(error){
            return res.status(500).json(error)
        }
    }


}