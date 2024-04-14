import TransactionService from "../services/TransactionService";
import { Request, Response } from "express";

export default new class TrasactionController{
    addTransaction(req: Request, res: Response){
        TransactionService.addTransaction(req,res)
    }
    findById(req: Request, res: Response){
        TransactionService.findById(req,res)
    }
    findByUserId(req: Request, res: Response){
        TransactionService.findByUserId(req,res)
    }
    lastMonthTransaction(req: Request, res: Response){
        TransactionService.lastMonthTransaction(req,res)
    }
    thisMonthTransaction(req: Request, res: Response){
        TransactionService.thisMonthTransaction(req,res)
    }
    futureTransaction(req: Request, res: Response){
        TransactionService.futureTransaction(req,res)
    }
    
}