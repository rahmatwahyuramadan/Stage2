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
            const id = Number(req.params.id)
            if (id===null){
                return res.status(404).json({massage: "user not found"})
            }

            const transaction = await this.TransactionRepository.create({
                data: {
                    amount: body.amount,
                    date:  new Date(body.date).toISOString(),
                    category: body.category,
                    note: body.note,
                    userId: id,
                    // walletId: id,
                    createdAt: new Date()
                }
            })
            const wallet = await this.WalletRepository.create({
                data: {
                    inflow: transaction.amount,
                    outflow: transaction.amount,
                    balence: transaction.amount,
                    userId: id,
                    createdAt: new Date()
                }
            })
            const _ = await this.TransactionRepository.updateMany({
                where: {
                    id: transaction.id,
                },
                data: {
                    walletId: wallet.id,
                }
            })

            transaction.walletId = wallet.id

            return res
            .status(201)
            .json({transaction: transaction, wallet: wallet})

        } catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    }}