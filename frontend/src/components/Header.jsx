import React from "react";
import Navigation from "./Navigation";
import {ReactComponent as Logo} from "../library_logo.svg";
import styles from './header.scss';

export default function Header() {
    return (
        <header className={styles.Header}>
            <h1><a href="/"><Logo/> Site Name</a></h1>

            <Navigation/>
        </header>
    )
}