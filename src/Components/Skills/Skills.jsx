import React from 'react'
import { bootstrap, html, css, javascript, reactjs, nodejs, expressjs, mongodb, database, tailwind, python, tosca, git } from '../../assets/skills'
import SphereCanvas from '../Canvas/Sphere'
import { SectionWrapper } from '../../hoc'

const skills = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Oracle Database",
    icon: database
  },
  {
    name: "Express JS",
    icon: expressjs
  },
  {
    name: "Bootstrap",
    icon: bootstrap
  },
  {
    name: "Python",
    icon: python
  },
  {
    name: "Tricentis TOSCA",
    icon: tosca
  }
]
const Skills = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 items-center'>
      {skills.map((skill) => (
        <div className='w-28 h-28' key={skill.name}>
          <SphereCanvas icon={skill.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Skills, '#skills')
