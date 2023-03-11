import React from 'react';
import { SkillsType} from '../../../data/SkillsData/skillData';
import styles from './SkillItem.module.css'


type SkillsPropsType = {
  skillsData: SkillsType[]
}
const SkillItem = (props: SkillsType) => {


  return (
    <div className={styles.skillItem}>
      <p className={styles.title}>{props.title}</p>
      <img className={styles.icon} src={props.img} alt={props.title}/>
    </div>
  );
};

export default SkillItem;