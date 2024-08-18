import { Request, Response } from 'express';
import Product from '../models/product';
import * as Errors from '../utils/errors';
import { SuccessResponse } from '../utils/success';

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

export const getProductsById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
          res.json(product);
        } else {
          res.status(404).json({ message: 'Produto não encontrado' });
        }
      } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produto' });
      }
};

export const getProductsByName = async (req: Request, res: Response) => {
    try {
        const products = await Product.find({ productName: req.params.name });
        if (products.length > 0) {
            res.json(products);
        } else {
            res.status(404).json({ message: 'Nenhum produto encontrado com esse nome' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos' });
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
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar produto' });
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
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao atualizar produto' });
    }
};


export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (deletedProduct) {
            res.status(200).json({ message: 'Produto deletado com sucesso' });
        } else {
            res.status(404).json({ message: 'Produto não encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao deletar produto' });
    }
};

