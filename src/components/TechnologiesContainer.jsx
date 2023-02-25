import {DiHtml5, DiCss3, DiJavascript, DiReact, DiPython} from 'react-icons/di'

import '../styles/components/technologiesContainer.sass'

const technologies = [
  {id: "html5", name: "HTML5", icon: <DiHtml5 />},
  {id: "css", name: "CSS3", icon: <DiCss3 />},
  {id: "js", name: "JavaScript", icon: <DiJavascript />},
  {id: "react", name: "React", icon: <DiReact />},
  {id: "python", name: "Python", icon: <DiPython />},
]

const TechnologiesContainer = () => {
  return <section className='technologies-container'>
    <h2>Tecnologias</h2>
    <div className="technologies-grid">
      {technologies.map((tech) => (
        <div className="technology-card" id={tech.id} key={tech.id}>
          {tech.icon}
          <div className="technology-info">
            <h3>{tech.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </section>
}

export default TechnologiesContainer