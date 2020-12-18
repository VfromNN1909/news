import React from "react";
import './../../App.css';


const Navbar = () => {
    return(
        <div className="menu">
            {/*<li><a href="#">Главная</a></li>*/}
            {/*<li>*/}
            {/*    <a href="#">Статьи</a>*/}
            {/*    <ul className="sub-menu">*/}
            {/*        <li><a href="#">Политика</a></li>*/}
            {/*        <li><a href="#">Экономика</a></li>*/}
            {/*        <li><a href="#">Знаменитости</a></li>*/}
            {/*    </ul>*/}
            
            {/*</li>*/}
            {/*<li>*/}
            {/*    <a href="#">Горячие новости</a>*/}
            {/*    <ul className="sub-menu">*/}
            {/*        <li><a href="#">Кот съел собаку</a></li>*/}
            {/*        <li><a href="#">Последние новости</a></li>*/}
            {/*        <li><a href="#">Последние достижения</a></li>*/}
            {/*    </ul>*/}
            {/*</li>*/}
            {/*<li><a href="#">Форум</a></li>*/}
            <li>
                <a href="#">Главная</a>
            </li>
            <li>
                <a href="#">Политика</a>
            </li>
            <li>
                <a href="#">Экономика</a>
            </li>
            <li>
                <a href="#">Знаменитости</a>
            </li>
            <li>
                <a href="#">Спорт</a>
            </li>
            <li>
                <a href="#">Наука</a>
            </li>
            <ul className="singin">
                <li><a className="btn" href="#." target="_blank">Войти</a></li>
            </ul>
        </div>
    );


}

export default Navbar;