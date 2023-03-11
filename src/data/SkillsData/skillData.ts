import react from '../../assets/icons/react.svg'
import html from '../../assets/icons/html.svg'
import css from '../../assets/icons/css.svg'
import javascript from '../../assets/icons/javascript.svg'
import typescript from '../../assets/icons/typescript.svg'
import redux from '../../assets/icons/redux.svg'
import rest from '../../assets/icons/rest.svg'
import storybook from '../../assets/icons/storybook.svg'
import git from '../../assets/icons/git.svg'
import material from '../../assets/icons/material.svg'
import vite from '../../assets/icons/vite.svg'


export type SkillsType = {
  title: string
  img: string
}

export const skillData : SkillsType[]= [
  {title: 'HTML', img: html},
  {title: 'CSS', img: css},
  {title: 'Javascript', img: javascript},
  {title: 'Typescript', img: typescript},
  {title: 'React', img: react},
  {title: 'Redux', img: redux},
  {title: 'Redux Toolkit', img: redux},
  {title: 'Rest API', img: rest},
  {title: 'Storybook', img: storybook},
  {title: 'GIT', img: git},
  {title: 'Material UI', img: material},
  {title: 'Vite', img: vite},

]