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
    
}