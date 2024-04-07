import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { addTransaction } from "../utils/TransactionUtils";
import { number } from "joi";


const prisma = new PrismaClient()

export default new class TransactionService{
    private readonly TransactionRepository = prisma.transaction
    private readonly WalletRepository = prisma.wallet
    private readonly CategoryRepository = prisma.category

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

            const thisCategory = await this.CategoryRepository.findUnique({ 
                where: {category: body.category}
            })

            if(!thisCategory) return res.status(400).json({ message: "Category not found!" })

            const transaction = await this.TransactionRepository.create({
                data: {
                    amount: body.amount,
                    date:  new Date(body.date).toISOString(),
                    category: thisCategory.category,
                    note: body.note,
                    userId: id,
                    createdAt: new Date()
                }
            })
            
            const in_flow = thisWallet.inflow + body.amount
            const out_flow = thisWallet.outflow + body.amount
            let balance: number
            
            let updatedWallet: any

            if(thisCategory?.category === "Salary" || thisCategory?.category === "Sales") {
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

    async findById(req: Request, res:Response): Promise<Response>{
        try{
            const id = Number(req.params.id)

            if(id===null){
                return res.status(404).json({massage: "id not found"})
            }

            const transaction = await this.TransactionRepository.findUnique({
                where: {id: id}
            })

            return res.status(200).json(transaction)
        }catch(error){
            return res.status(500).json(error)
        }
    }

    async findByUserId(req: Request, res:Response): Promise<Response>{
        try{
            const tokenDecode = res.locals.loginSession.tokenPayload
            const id = tokenDecode.id

            const transactions = await this.TransactionRepository.findMany({
                where: { userId: id },
                include: {
                    category_detail: true
                }
            });

            return res.status(200).json(transactions);
        }catch(error){
            return res.status(500).json(error)
        }
    }

}