import React from "react";
import axios from 'axios';
import './../../App.css';


export default class Content extends React.Component{

    state = {
        news : []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/v1/news')
            .then(res => {
                const news = res.data;
                this.setState({ news });
            })
    }

    render() {

        return (
            <div>
                <div className="content-1">
                    <div className="content-cards">
                        {
                            this.state.news.map(post =>
                                <div className="news-card">
                                    <a href="#" className="news-card__card-link"/>
                                    <img src={post.imageUrl} alt="" className="news-card__image"/>
                                    <div className="news-card__text-wrapper">
                                        <h2 className="news-card__title">{post.title}</h2>
                                        <div className="news-card__post-date">{new Date(post.time).toLocaleDateString()}</div>
                                        <div className="news-card__details-wrapper">
                                            <p className="news-card__excerpt">
                                                {post.shortText}&hellip;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }

}
