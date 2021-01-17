import express from "express";
import { CreateBook, DeleteBook, GetAllBooks, 
    GetOneBook, UpdateBook } from "../controllers/bookCon";

export const bookRt: express.Router = express.Router();
    bookRt.post("/", CreateBook);
    bookRt.get("/", GetAllBooks);
    bookRt.get("/:id", GetOneBook);
    bookRt.put("/:id", UpdateBook);
    bookRt.delete("/:id", DeleteBook);


    