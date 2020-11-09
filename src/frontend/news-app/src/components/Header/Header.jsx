import React from "react";
import styles from "./Header.module.css"

const Header = (props) => {
        return(
            <header className={styles.header}>
                    <img src="https://img1.freepng.ru/20180320/bae/kisspng-pile-of-poo-emoji-feces-t-shirt-sticker-poop-png-emoji-island-5ab1c1e213f8a6.9432476215215989460818.jpg"
                    />
                    <div className={styles.topics}>
                        <h3 className={styles.topic}>
                            Раздел 1
                        </h3>
                        <h3 className={styles.topic}>
                            Раздел 2
                        </h3>
                        <h3 className={styles.topic}>
                            Раздел 3
                        </h3>
                        <h3 className={styles.topic}>
                            Раздел 4
                        </h3>
                    </div>
            </header>
        );

}

export default Header;