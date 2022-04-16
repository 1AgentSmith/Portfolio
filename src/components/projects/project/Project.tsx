import React from 'react';
import style from './Project.module.css'

type PropsType = {
    projectName: string
    descriptionProject: string
    linkUrl: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={style.projectInfo}>
               <h3>{props.projectName}</h3>
               <div className={style.buttonLink}>
                   <a target="_blank" href={props.linkUrl}>View project</a>
               </div>
               <p>{props.descriptionProject}</p>
        </div>
    )
}