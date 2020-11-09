import React from "react";
import styles from "./News.module.css";
import Axios from "axios";

export default class News extends React.Component {

    state = {
        persons: []
    }

    componentDidMount() {
        Axios.get("http://localhost:8080/api/v1/news")
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <ul className={styles.posts}>
                {
                    this.state.persons.map(
                        person =>
                            <li className={styles.post}>
                                <div>
                                    Номер: {person.id}
                                </div>
                                <div>
                                    {person.title}
                                </div>
                                <div>
                                    {person.text}
                                </div>
                                <div className={styles.publicationTime}>
                                    Время публикации: {person.time}
                                </div>
                            </li>
                    )
                }
            </ul>
        )
    }

}
