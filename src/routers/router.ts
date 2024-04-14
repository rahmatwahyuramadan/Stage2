import TransactionController from "../controllers/TransactionController";
import UserController from "../controllers/UserController";
import * as express from 'express'
import path from "path";
import upload from "../middlewares/UploadMidddleware";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import CategoryController from "../controllers/CategoryController";
import WalletController from "../controllers/WalletController";

const router = express.Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.post('/addTransaction', upload.single('image'), AuthMiddleware.AuthTi, TransactionController.addTransaction)
router.get('/Transaction/:id', AuthMiddleware.AuthTi, TransactionController.findById)
router.get('/Transaction/:usetId', AuthMiddleware.AuthTi, TransactionController.findByUserId)
router.get('/lastMonthTransaction', AuthMiddleware.AuthTi, TransactionController.lastMonthTransaction)
router.get('/thisMonthTransaction', AuthMiddleware.AuthTi, TransactionController.thisMonthTransaction)
router.get('/futureTransaction', AuthMiddleware.AuthTi, TransactionController.futureTransaction)

router.post('/addCategory', upload.single('image'), AuthMiddleware.AuthTi, CategoryController.addCategory)

router.get('/findWallet', WalletController.findWalletById)

router.use('/uploads', express.static(path.join(__dirname, 'uploads')))

export default router