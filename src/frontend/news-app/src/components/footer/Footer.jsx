import React from "react";
import './../../App.css';


const Footer = () => {
    return(
        <div>
            <footer id="footer" class="footer-1">
                <div class="main-footer widgets-dark typo-light">
                    <div class="container">
                        <div class="row">

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget subscribe no-box">
                                    <h4 class="widget-title">NN News Now<span></span></h4>
                                    <p>Наша компания занимается новостями, которые касаются Нижнего Новгорода и области.</p>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget no-box">
                                    <h4 class="widget-title">Навигация<span></span></h4>
                                    <ul class="thumbnail-widget">
                                        <li>
                                            <div class="thumb-content"><a href="#.">Главная</a></div>
                                        </li>
                                        <li>
                                            <div class="thumb-content"><a href="#.">Статьи</a></div>
                                        </li>
                                        <li>
                                            <div class="thumb-content"><a href="#.">Горячие новости</a></div>
                                        </li>
                                        <li>
                                            <div class="thumb-content"><a href="#.">Форум</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">
                                <div class="widget no-box">
                                    <h4 class="widget-title">Начать<span></span></h4>
                                    <p>Получите полный доступ к сайту.</p>
                                    <a class="btn" href="#." target="_blank">Зарегистрироваться</a>
                                    <a class="btn" href="#." target="_blank">Войти</a>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-3">

                                <div class="widget no-box">
                                    <h4 class="widget-title">Связаться с нами<span></span></h4>

                                    <p><a href="mailto:newsnownn@yandex.ru" title="Почта" class="post">newsnownn@yandex.ru </a></p>
                                    <ul class="social-footer2">
                                        <li class="">
                                            <a title="vk" target="_blank" href="https://vk.com/newsnownn"><img alt="" width="30px" height="30px" src="VK.png"/></a>
                                        </li>
                                        <li class="">
                                            <a href="https://twitter.com/nn_newsnow" target="_blank" title="Twitter"><img alt="" width="30" height="30" src="TWITTER.png"/></a>
                                        </li>
                                        <li class="">
                                            <a href="https://www.instagram.com/nn_news.now/" target="_blank" title="Instagram"><img alt="" width="30" height="30" src="INSTAGRAM.png"/></a>
                                        </li>
                                        <li class="">
                                            <a title="Telegram" target="_blank" href="https://t.me/NN_NewsNow"><img alt="" width="30" height="30" src="TELEGRAM.png"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <p>Copyright NN News Now © 2020. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );


}

export default Footer;