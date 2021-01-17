import { RequestHandler } from "express";
import { Books } from "../models/Books";

export const CreateBook: RequestHandler =
async (req, res, next) => {
    try {
        const book: Books = new Books();
        book.title = req.body.title;
        book.author = req.body.author;
        await book.save();
        return res.status(201).json(book);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetAllBooks: RequestHandler =
async (req, res, next) => {
    try {
        await Books.find().then((books) => res.json(books));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetOneBook: RequestHandler =
async (req, res, next) => {
    try {
        const book: Books = 
            await Books.findOneOrFail(req.params.id);
        return res.status(201).json(book);
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const UpdateBook: RequestHandler =
async (req, res, next) => {
    try {
        const book: Books = await Books.findOneOrFail(req.params.id);
        book.title = req.body.title;
        book.author = req.body.author;
        await book.save();
        return res.status(201).json("The Book was Updated!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const DeleteBook: RequestHandler =
async (req, res, next) => {
    try {
        const book: Books = await Books.findOneOrFail(req.params.id);
        await book.remove();
        return res.status(201).json("Book is deleted!");
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};


