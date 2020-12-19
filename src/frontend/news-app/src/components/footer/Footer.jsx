import React from "react";
import './../../App.css';


const Footer = () => {
    return(
        <div>
            <footer id="footer" className="footer-1">
                <div className="main-footer widgets-dark typo-light">
                    <div className="container">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="widget subscribe no-box">
                                    <h4 className="widget-title">NN News Now<span></span></h4>
                                    <p>Наша компания занимается новостями, которые касаются Нижнего Новгорода и
                                        области.</p>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4">
                                <div className="widget no-box">
                                    <h4 className="widget-title">Навигация<span></span></h4>
                                    <ul className="thumbnail-widget">
                                        <li>
                                            <div className="thumb-content"><a href="#.">Главная</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">Статьи</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">Горячие новости</a></div>
                                        </li>
                                        <li>
                                            <div className="thumb-content"><a href="#.">Форум</a></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-4">

                                <div className="widget no-box">
                                    <h4 className="widget-title">Связаться с нами<span></span></h4>

                                    <p><a href="mailto:newsnownn@yandex.ru" title="Почта"
                                          className="post">newsnownn@yandex.ru </a></p>
                                    <ul className="social-footer2">
                                        <li className="">
                                            <a title="vk" target="_blank" href="https://vk.com/newsnownn"><img alt=""
                                                                                                               width="30px"
                                                                                                               height="30px"
                                                                                                               src="VK.png"/></a>
                                        </li>
                                        <li className="">
                                            <a href="https://twitter.com/nn_newsnow" target="_blank"
                                               title="Twitter"><img alt="" width="30" height="30" src="TWITTER.png"/></a>
                                        </li>
                                        <li className="">
                                            <a href="https://www.instagram.com/nn_news.now/" target="_blank"
                                               title="Instagram"><img alt="" width="30" height="30" src="INSTAGRAM.png"/></a>
                                        </li>
                                        <li className="">
                                            <a title="Telegram" target="_blank" href="https://t.me/NN_NewsNow"><img
                                                alt="" width="30" height="30" src="TELEGRAM.png"/></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
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