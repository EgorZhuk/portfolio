import React from 'react';
import styles from './Skills.module.css'
import SkillItem from './SkillItem/SkillItem';
import {skillData, SkillsType} from '../../data/SkillsData/skillData';


type SkillsPropsType = {
  skillsData: SkillsType[]
}
export const Skills = () => {
  const skills = skillData.map(s=>{
    return (
      <SkillItem title={s.title} img={s.img}/>
    )
  })
  return (
    <div className={styles.test}>
      <h3 className={styles.title}>My skills</h3>
      <div className={styles.skillsContainer}>
        {skills}
      </div>

    </div>
  );
};
