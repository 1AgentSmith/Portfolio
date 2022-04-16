import React from 'react';
import style from './RemoteJob.module.css'
import styleContainer from '../../common/styles/Container.module.css'


export const RemoteJob = () => {
    return(
        <div className={style.remoteJobContainer}>
            <div className={`${styleContainer.container} ${style.blockRemoteJob}`}>
                <h2> Сonsidering options for remote work</h2>
                <button>Hire me</button>
            </div>
        </div>
    )
}