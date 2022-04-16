import React from 'react';
import styleContainer from '../../common/styles/Container.module.css'
import style from './Projects.module.css'
import {Project} from "./project/Project";

export const Projects = () => {
    const projectInfo = [
        {
            name: 'Counter',
            linkUrl: 'https://valeriivakalov.github.io/Counter/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis deleniti ducimus,',
            id: 0,
        },
        {
            name: 'Social network',
            linkUrl: '#',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis deleniti ducimus,',
            id: 1,
        },
        {
            name: 'To do list',
            linkUrl: 'https://valeriivakalov.github.io/Todolist/',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis deleniti ducimus,',
            id: 2,
        },

    ]
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>My projects</h2>
                <div className={style.projects}>
                    {projectInfo.map(m =>
                        <Project projectName={m.name}
                                 linkUrl={m.linkUrl}
                                 descriptionProject={m.description}
                                 key={m.id}
                        />)}
                </div>
            </div>
        </div>
    )
}
