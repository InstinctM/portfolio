import "../styles/Projects.css"
import { FaGithub } from "react-icons/fa";

interface Project {
  num: string;
  title: string;
  description: string;
  url: string;
}

const projects: Project[] = [
  {
    num: "01", 
    title: "Keep-Er-Goin-", 
    description: "A simple and classical 2D survival game created with Python and Tkinter.",
    url: 'https://github.com/InstinctM/Keep-Er-Going-'
  },
  {
    num: "02", 
    title: "Fungi", 
    description: "The terminal version of the all times favourite card game - Fungi.",
    url: "https://github.com/InstinctM/Fungi"
  },
  {
    num: "03", 
    title: "Mapped Out", 
    description: "A functional, global media for users to upload, share and discover latest news and activities.",
    url: "https://github.com/InstinctM/mapped_out"
  },
  {
    num: "04", 
    title: "Using ChatGPT to play Video games", 
    description: "A Natural Language Processing project involving one of the state-of-the-art transformers, and enables it to play and assist players in video games.",
    url: "https://github.com/InstinctM/Using_ChatGPT_to_play_Video_games"
  }
]

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="project-intro-title">Projects</h1>

      <div className="project-container">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <span className="project-num">{project.num}</span>
            <button className="project-button" role="link" onClick={() => window.open(project.url, "_blank", "noreferrer")}><FaGithub/></button>
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
  
export default Projects;