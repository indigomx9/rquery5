import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { List } from "../components/List";
import { Create } from "../containers/Create";
import { Update } from "../containers/Update";

export const Routes = (): JSX.Element => (
    <BrowserRouter>
        <React.Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={List} />
                <Route path="/create" component={Create} />
                <Route path="/update/:id" component={Update} />
            </Switch>
        </React.Fragment>
    </BrowserRouter>
);


