import React from 'react';
import style from './Footer.module.css'
import styleContainer from "../../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <footer className={`${style.footerBlock}`}>
                <div className={`${styleContainer.container} ${style.footerContainer}`}>
                    <h4>Valery Vakalov</h4>
                    <div className={style.iconLinkContainer}>
                        <div className={style.linkElement}></div>
                        <div className={style.linkElement}></div>
                        <div className={style.linkElement}></div>
                        <div className={style.linkElement}></div>
                    </div>
                    <p>© 2022 All Rights Reserved.</p>
                </div>
        </footer>
    )
}

