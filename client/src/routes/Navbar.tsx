import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = (): JSX.Element => (
    <nav className="navbar">
        <ul className="navbar__ul">
            <NavLink className="navbar__link" to="/">List</NavLink>
            <NavLink className="navbar__link" to="/create">Create</NavLink>
        </ul>
    </nav>
);


