"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.post('/register', userControllers_1.registerUser);
router.post('/login', userControllers_1.loginUser);
router.get('/:id', authMiddleware_1.authMiddleware, userControllers_1.getUserById);
router.patch('/delete/:id', authMiddleware_1.authMiddleware, userControllers_1.softDeleteUser);
exports.default = router;
/* import {Router, Request, Response} from 'express';
import bcrypt from 'bcryptjs'
import { UserModel } from '../models/user';
import * as Errors from '../utils/errors';
import { SuccessResponse } from '../utils/success';
import { IUser } from '../models/user';
const router = Router();


router.post('/register', async (req: Request, res: Response) => {
    const { username, password, email } = req.body;
    try {
        const user = await UserModel.findOne({ username});

        if (user) {
            return res.status(400).json({ type: Errors.AlreadyExistsError });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const hashedEmail = await bcrypt.hash(email, 10);

        const newUser = new UserModel({ username, password: hashedPassword, email: hashedEmail });
        await newUser.save();

        res.json({ type: SuccessResponse.userCreated});
    }   catch (error) {
        res.status(500).json({ type: Errors.InternalServerError });
    }
    });

    router.post('/login', async (req: Request, res: Response) => {
        const { username, password } = req.body;
        try {
            const user: IUser | null = await UserModel.findOne({ username });

            if(!user) {
                return res.status(400).json({ type: Errors.NotFoundError });
            }
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if(!isPasswordMatch) {
                return res.status(400).json({ type: Errors.UnauthorizedError });
            }

            const token = jwt.sign({id: user._id}, "segredo")

        } catch (error) {
            res.status(500).json({ type: Errors.InternalServerError });
        }
    });


export {router as userRouter} */ 
//# sourceMappingURL=usersRoutes.js.map