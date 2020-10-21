import React, { useState } from "react";
import Navigation from "./Navigation";
import { ReactComponent as Logo } from "../library_logo.svg";
import './header.scss';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => setNavOpen(!navOpen);

    return (
        <header className="Header">
            <h1 className="Header__title"><a href="/" className="Header__link"><Logo />Library</a></h1>

            <button onClick={toggleNav} className={`Header__navBtn ${navOpen ? 'Header__navBtn--toggled' : ''}`}>
                <span>Navigation</span>
                <span className="Header__navBtnLine Header__navBtnLine--1" />
                <span className="Header__navBtnLine Header__navBtnLine--2" />
                <span className="Header__navBtnLine Header__navBtnLine--3" />
            </button>
            <Navigation open={navOpen} />
        </header>
    )
}