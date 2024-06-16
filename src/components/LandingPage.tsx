import "../styles/LandingPage.css"
import photo from "../assets/photo.png"

const LandingPage = () => {
    return (
      <section id="landing">

        <div className="landing-content">

          <div className="text-container">
            <h1 className="intro">Hello! I am</h1>
            <h2 className="intro name">Hei Wing Lee Matthew</h2>
            <div className="intro text">
                <p>I enjoy working on deep learning projects, especially those involving transformers.</p>
                <p>I also hold a special heart for game development.</p>
            </div>
          </div>

          <div className="pic-container">
            <img src={photo} alt="Picture of me" className="photo" />
          </div>

        </div>
      </section>
    );
  };
  
export default LandingPage;