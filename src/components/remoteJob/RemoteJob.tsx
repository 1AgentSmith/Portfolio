import React from 'react';
import style from './RemoteJob.module.css'
import styleContainer from '../../common/styles/Container.module.css'


export const RemoteJob = () => {
    return(
        <div className={style.remoteJobContainer}>
            <div className={`${styleContainer.container} ${style.blockRemoteJob}`}>
                <h3>Looking into remote work</h3>
                <button>Hire me</button>
            </div>
        </div>
    )
}