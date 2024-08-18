import { Request, Response } from 'express';
import Product from '../models/product';
import { NotFoundError, InternalServerError } from '../utils/errors';
import { SuccessMessages } from '../utils/success';

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ message: SuccessMessages.productRetrieved, data: products });
    } catch (error) {
        console.error(error);
        throw new InternalServerError();
    }
};

export const getProductsById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.status(200).json({ message: SuccessMessages.productRetrieved, data: product });
        } else {
            throw new NotFoundError();
        }
    } catch (error) {
        console.error(error);
        if (error instanceof NotFoundError) {
            res.status(error.statusCode).json({ message: error.message });
        } else {
            throw new InternalServerError();
        }
    }
};

export const getProductsByName = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({ productName: req.params.name });
        if (products.length > 0) {
            res.status(200).json({ message: SuccessMessages.productRetrieved, data: products });
        } else {
            throw new NotFoundError("Nenhum produto encontrado com esse nome");
        }
    } catch (error) {
        console.error(error);
        if (error instanceof NotFoundError) {
            res.status(error.statusCode).json({ message: error.message });
        } else {
            throw new InternalServerError();
        }
    }
};

export const createProduct = async (req: Request, res: Response) => {
    try {
        const { productName, descriptionShort, photo, price } = req.body;

        const newProduct = new Product({
            productName,
            descriptionShort,
            photo,
            price,
        });

        const savedProduct = await newProduct.save();
        res.status(201).json({ message: SuccessMessages.productCreated, data: savedProduct });
    } catch (error) {
        console.error(error);
        throw new InternalServerError("Erro ao criar produto");
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { productName, descriptionShort, photo, price } = req.body;

        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            { productName, descriptionShort, photo, price },
            { new: true, runValidators: true }
        );

        if (updatedProduct) {
            res.status(200).json({ message: SuccessMessages.productUpdated, data: updatedProduct });
        } else {
            throw new NotFoundError("Produto não encontrado");
        }
    } catch (error) {
        console.error(error);
        if (error instanceof NotFoundError) {
            res.status(error.statusCode).json({ message: error.message });
        } else {
            throw new InternalServerError("Erro ao atualizar produto");
        }
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (deletedProduct) {
            res.status(200).json({ message: SuccessMessages.productDeleted });
        } else {
            throw new NotFoundError("Produto não encontrado");
        }
    } catch (error) {
        console.error(error);
        if (error instanceof NotFoundError) {
            res.status(error.statusCode).json({ message: error.message });
        } else {
            throw new InternalServerError("Erro ao deletar produto");
        }
    }
};
