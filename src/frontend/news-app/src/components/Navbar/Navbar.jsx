import React from "react";
import styles from "./Navbar.module.css";
import {BrowserRouter, NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <BrowserRouter>
            <nav className={styles.nav}>
                <div className={styles.item}>
                    <NavLink to="/news1">Тема 1</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/news2">Тема 2</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/news3">Тема 3</NavLink>
                </div>
                <div className={styles.item}>
                    <NavLink to="/news4">Тема 4</NavLink>
                </div>
            </nav>
        </BrowserRouter>
    )
}

export default Navbar;