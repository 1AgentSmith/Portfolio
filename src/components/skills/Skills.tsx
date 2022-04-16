import React from 'react';
import style from './Skills.module.css'
import styleContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    const skillDescription = [
        {
            title: 'JS',
            description: 'description incididunt ut labore et dolore magna aliqua Ut enim...',
            id: 0
        },
        {
            title: 'HTML',
            description: 'description incididunt ut labore et dolore magna aliqua Ut enim...',
            id: 1
        },
        {
            title: 'React',
            description: 'description incididunt ut labore et dolore magna aliqua Ut enim...',
            id: 2,
        },
        {
            title: 'React',
            description: 'description incididunt ut labore et dolore magna aliqua Ut enim...',
            id: 2,
        },
        {
            title: 'React',
            description: 'description incididunt ut labore et dolore magna aliqua Ut enim...',
            id: 2,
        },
        {
            title: 'React',
            description: 'description incididunt ut labore et dolore magna aliqua Ut enim...',
            id: 2,
        },
        {
            title: 'React',
            description: 'description incididunt ut labore et dolore magna aliqua Ut enim...',
            id: 2,
        },
        {
            title: 'Redux',
            description: 'description incididunt ut labore et dolore magna aliqua Ut enim...',
            id: 3,
        },
    ]
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {skillDescription.map(m => <Skill title={m.title} description={m.description} key={m.id}/>)}
                </div>
            </div>

        </div>
    )
}