import UserController from "../controllers/UserController";
import * as express from "express"

const router = express.Router()

router.get('/users', UserController.find)
router.get('/user/:id', UserController.findById)
router.post('/adduser', UserController.addUser)
router.put('/updateuser/:id', UserController.updateUser)
router.delete('/deleteuser/:id', UserController.deleteUser)

export default router