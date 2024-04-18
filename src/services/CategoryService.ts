import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { addCategory } from "../utils/CategoryUtils";
import cloudinary from "../config"
import * as fs from "fs"

const prisma = new PrismaClient()

export default new class CategoryService{
    private readonly CategoryRepository = prisma.category
    private readonly WalletRepository = prisma.wallet

    async addCategory(req: Request, res: Response): Promise<Response>{
        try{
            const body = req.body
            const { error } = addCategory.validate(body)
            if (error) return res.status(400).json(error.message)
            const tokenDecode = res.locals.loginSession.tokenPayload
            const id = tokenDecode.id
            const role = tokenDecode.role

            if( role != "admin") return res.status(404).json({mesaage: "Access Block!!"})

            const image = req.file
            if (!image) return res.status(400).json({ message: "No file added!" })

            const uploadCloudinary = await cloudinary.uploader.upload(image.path, {
                folder: "batch53"
            })

            fs.unlinkSync(image.path)

            const category = await this.CategoryRepository.create({
                data: {
                    category_name: body.category_name,
                    type: body.type,
                    image: uploadCloudinary.secure_url,
                    userId: id
                }
            })

            return res
            .status(201)
            .json(category)
        }catch (error) {
            console.log(error);
            return res.status(500).json(error)
        }
    }
    async findCategoryByUserId(req: Request, res: Response) {
        try{
            const tokenDecode = res.locals.loginSession.tokenPayload
            const user_id = tokenDecode.id

            const thisCategory = await this.CategoryRepository.findMany({
                where: { userId: user_id }
            })

            if(!thisCategory) return res.status(400).json({
                message: "No category found!"
            })

            return res.status(201).json(thisCategory)
        }catch(err) {
            return res.status(500).json(err)
        }
    }
}