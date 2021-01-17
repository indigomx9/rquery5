import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Routes } from "../routes/Routes";
import "./App.css";

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes />
        </QueryClientProvider>
    );
};


