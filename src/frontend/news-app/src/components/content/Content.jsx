import React from "react";
import './../../App.css';


const Content = () => {
    return(
        <div>
            <div className="content-1">
                <div className="content-cards">

                    <div className="news-card">
                        <a href="#" className="news-card__card-link"/>
                        <img src="News/News1.jpg" alt="" className="news-card__image"/>
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">"КАМАЗ" представил новый электромобиль "КАМА-1"</h2>
                            <div className="news-card__post-date">Декабрь 10, 2020</div>
                            <div className="news-card__details-wrapper">
                                <p className="news-card__excerpt">Трехдверный смарт-кроссовер может вместить до 4 человек, имеет запас хода в 250 км и способен развивать скорость до 150 км/ч&hellip;</p>
                                <a href="#" className="news-card__read-more">ПРОЧИТАТЬ <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="news-card">
                        <a href="#" className="news-card__card-link"></a>
                        <img src="News/News2.jpg" alt="" className="news-card__image"/>
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">Завод по производству растительного масла построят в Володарске</h2>
                            <div className="news-card__post-date">Декабрь 10, 2020</div>
                            <div className="news-card__details-wrapper">
                                <p className="news-card__excerpt">Совет по земельным отношениям при Правительстве Нижегородской области одобрил 11 заявок на участки для реализации инвестпроектов&hellip;</p>
                                <a href="#" className="news-card__read-more">ПРОЧИТАТЬ <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="news-card">
                        <a href="#" className="news-card__card-link"></a>
                        <img src="News/News3.jpg" alt="" className="news-card__image"/>
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">Представлен проект застройки Черниговской набережной в Нижнем Новгороде</h2>
                            <div className="news-card__post-date">Декабрь 09, 2020</div>
                            <div className="news-card__details-wrapper">
                                <p className="news-card__excerpt">Концепцию архитектурно-планировочного и объемно-пространственного решения территории по улице Черниговской от метромоста до Молитовского моста&hellip;</p>
                                <a href="#" className="news-card__read-more">ПРОЧИТАТЬ <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="news-card">
                        <a href="#" className="news-card__card-link"></a>
                        <img src="News/News4.jpg" alt="" className="news-card__image"/>
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">Съемки военного фильма проходят на Нижегородской ярмарке</h2>
                            <div className="news-card__post-date">Декабрь 09, 2020</div>
                            <div className="news-card__details-wrapper">
                                <p className="news-card__excerpt">На Нижегородской ярмарке проходят съемки фильма о войне. Согласно информации, на территории ярмарки создается картина</p>
                                <a href="#" className="news-card__read-more">ПРОЧИТАТЬ <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="news-card">
                        <a href="#" className="news-card__card-link"></a>
                        <img src="News/News5.jpg" alt="" className="news-card__image"/>
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">«Великое соединение планет!»</h2>
                            <div className="news-card__post-date">Декабрь 08, 2020</div>
                            <div className="news-card__details-wrapper">
                                <p className="news-card__excerpt">Весь декабрь жители Нижегородской области смогут наблюдать за редчайшим астрономическим явлением&hellip;</p>
                                <a href="#" className="news-card__read-more">ПРОЧИТАТЬ <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="news-card">
                        <a href="#" className="news-card__card-link"></a>
                        <img src="News/News6.jpg" alt="" className="news-card__image"/>
                        <div className="news-card__text-wrapper">
                            <h2 className="news-card__title">«Росатом» планирует создать Национальный центр физики и математики в Сарове</h2>
                            <div className="news-card__post-date">Декабрь 08, 2020</div>
                            <div className="news-card__details-wrapper">
                                <p className="news-card__excerpt">Национальный центр физики и математики планируют создать в Сарове Нижегородской области на базе Всероссийского&hellip;</p>
                                <a href="#" className="news-card__read-more">ПРОЧИТАТЬ <i className="fas fa-long-arrow-alt-right"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );


}

export default Content;