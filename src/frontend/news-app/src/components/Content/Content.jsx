import React from "react";
import styles from "./Content.module.css";
import News from "./News/News";

const Content = (props) => {
    return (
        <div className={styles.content}>
            <News />
        </div>
    )
}

export default Content;