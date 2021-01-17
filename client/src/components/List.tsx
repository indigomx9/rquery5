import React from "react";
import { useQuery } from "react-query";
import { getAllBooks } from "../routes/FetchAPI";

type GABooks = {
    id: string,
    title: string,
    author: string
};

export const List = (): JSX.Element => {
    const { data, isLoading } = 
    useQuery("books", getAllBooks);

    if (isLoading) {
        return (
            <p>"Loading...";</p>
        )
    };

    return (
        <React.Fragment>
            {data.map((book: GABooks) => (
                <main key={book.id}>
                    {book.author} {book.title}
                </main>
            ))}
        </React.Fragment>
    );
};


