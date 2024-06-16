import "../styles/Skills.css"
import python from "../assets/python.png"
import java from "../assets/java.png"
import cpp from "../assets/cpp.png"
import latex from "../assets/latex.png"
import docker from "../assets/docker.png"
import html from "../assets/html5.png"
import css from "../assets/css3.png"
import javascript from "../assets/js.png"
import pytorch from "../assets/pytorch.png"
import tensorflow from "../assets/tensorflow.png"
import c from "../assets/c.png"
import typescript from "../assets/typescript.png"
import numpy from "../assets/numpy.png"
import mysql from "../assets/mysql.png"
import solidity from "../assets/solidity.png"
import react from "../assets/react.png"
import prolog from "../assets/prolog.png"
import haskell from "../assets/haskell.png"
import pandas from "../assets/pandas.png"
import matplotlib from "../assets/matplotlib.png"

interface Skill {
  name: string;
  image: string;
}

const familiarSkills: Skill[] = [
  {
    name: "Python",
    image: python
  },
  {
    name: "Java",
    image: java
  },
  {
    name: "C++",
    image: cpp
  },
  {
    name: "LaTeX",
    image: latex
  },
  {
    name: "Docker",
    image: docker
  },
  {
    name: "PyTorch",
    image: pytorch
  },
  {
    name: "TensorFlow",
    image: tensorflow
  },
  {
    name: "NumPy",
    image: numpy
  },
  {
    name: "Pandas",
    image: pandas
  },
  {
    name: "Matplotlib",
    image: matplotlib
  },
]

const learningSkills: Skill[] = [
  {
    name: "HTML 5",
    image: html
  },
  {
    name: "CSS 3",
    image: css
  },
  {
    name: "JavaScript",
    image: javascript
  },
  {
    name: "TypeScript",
    image: typescript
  },
  {
    name: "C",
    image: c
  },
  {
    name: "MySQL",
    image: mysql
  },
  {
    name: "Solidity",
    image: solidity
  },
  {
    name: "React",
    image: react
  },
  {
    name: "Haskell",
    image: haskell
  },
  {
    name: "Prolog",
    image: prolog
  },
]

const Skills = () => {
  return (
    <section id="skills">
        <h1 className="skills-title">Skills</h1>

        <div>
          <p className="skills-intro">
            I am familiar with various programming languages, frameworks and platforms.
          </p>

          <div className="skills-container">
            <ul className="skill-list">
              {familiarSkills.map((skill, index) => (
                <li>
                  <div key={index} className="skill">
                    <img src={skill.image} alt={skill.name} className="skill-icon"></img>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div>
          <p className="skills-intro">
            I also have experience with other numerous programming languages and libraries.
          </p>

          <div className="skills-container">
            <ul className="skill-list">
              {learningSkills.map((skill, index) => (
                <li>
                  <div key={index} className="skill">
                    <img src={skill.image} alt={skill.name} className="skill-icon"></img>
                    <p className="skill-name">{skill.name}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
    </section>
  )
}

export default Skills;