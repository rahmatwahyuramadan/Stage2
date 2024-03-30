import TransactionController from "../controllers/TransactionController";
import UserController from "../controllers/UserController";
import * as express from 'express'
import AuthMiddleware from "../middlewares/AuthMiddleware";

const router = express.Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.post('/addTransaction/:id', AuthMiddleware.AuthTi, TransactionController.addTransaction)

export default router