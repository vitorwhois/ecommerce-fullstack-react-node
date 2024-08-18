import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { ErrorMessages } from '../utils/errors';
import { SuccessMessages } from '../utils/success';

export const registerUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: ErrorMessages.alreadyExists.message });

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        res.status(SuccessMessages.userCreated.statusCode).json({ message: SuccessMessages.userCreated.message, token, userId: user._id });
    } catch (error) {
        res.status(500).json({ message: ErrorMessages.internalServerError.message });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: ErrorMessages.notFound.message });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: ErrorMessages.unauthorized.message });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });

        res.json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ message: ErrorMessages.internalServerError.message });
    }
};

export const softDeleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndUpdate(userId, { isActive: false }, { new: true });

        if (!user) return res.status(404).json({ message: ErrorMessages.notFound.message });

        res.json({ message: SuccessMessages.userDeleted.message });
    } catch (error) {
        res.status(500).json({ message: ErrorMessages.internalServerError.message });
    }
};

export const hardDeleteUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const user = await User.findByIdAndDelete(userId);

        if (!user) return res.status(404).json({ message: ErrorMessages.notFound.message });

        res.json({ message: SuccessMessages.userDeleted.message });
    } catch (error) {
        res.status(500).json({ message: ErrorMessages.internalServerError.message });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const updates = req.body;

        // Encontrar e atualizar o usuário
        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });

        if (!updatedUser) return res.status(404).json({ message: ErrorMessages.notFound.message });

        res.json({ user: updatedUser, message: SuccessMessages.userUpdated.message });
    } catch (error) {
        res.status(500).json({ message: ErrorMessages.internalServerError.message });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId).select('-password');

        if (!user) return res.status(404).json({ message: ErrorMessages.notFound.message });

        res.json({ user, message: SuccessMessages.userRetrieved.message });
    } catch (error) {
        res.status(500).json({ message: ErrorMessages.internalServerError.message });
    }
};
