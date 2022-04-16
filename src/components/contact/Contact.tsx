import React from 'react';
import style from './Contact.module.css'
import styleContainer from '../../common/styles/Container.module.css'

export const Contact = () => {
    return (
        <div className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <h3>Contact</h3>
                <form action="" className={style.contactForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea></textarea>
                </form>
                <div>
                    <button>Send message</button>
                </div>
            </div>
        </div>
    )
}