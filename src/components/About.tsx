import "../styles/About.css"
import coding from "../assets/codingEg.png"
import travel from "../assets/travelEg.png"
import gaming from "../assets/gamingEg.png"
import track from "../assets/trackEg.png"

interface info {
  name: string;
  value: string | number;
}

interface aboutCard{
  topic: string;
  description: string;
  altText: string;
  imagePath: string;
}

const infos: info[] = [
  {
    name: "Name",
    value: "Hei Wing Lee"
  },
  {
    name: "Age",
    value: 22
  },
  {
    name: "Nationality",
    value: "HongKonger"
  },
  {
    name: "Language",
    value: "Cantonese, Chinese, English, Japanese"
  },
]

const aboutCards: aboutCard[] = [
  {
    topic: "Athletics", 
    description: "I used to be an athlete before getting into an university. I was even the hurdles team leader!", 
    altText: "Picture of a track", 
    imagePath: track
  },
  {
    topic: "Coding", 
    description: "I started coding in 2020, and had my Artificial Intelligence degree in University of Manchester", 
    altText: "Picture of Haskell code", 
    imagePath: coding
  },
  {
    topic: "Gaming", 
    description: "I am a Gamer who loves playing mobile and computer games. My favourite game has to be Minecraft, which I have been playing since its launch!", 
    altText: "Picture of RGB gaming keyboard", 
    imagePath: gaming
  },
  {
    topic: "Travel", 
    description: "I love travelling around the world. In fact, I travel at least once a year!", 
    altText: "Picture of my friends and I on a Shinkansen to Osaka",
    imagePath: travel
  },
]

const About = () => {
  return (
    <section id="about">
      <div>
        <div className="about-container">
          <h1 className="about-title">About Me</h1>
          <p className="about-desc">
            I am an Artificial Intelligence enthusiast, particularly interested in Deep Learning and Natural Language Processing.
          </p>
        </div>

        <div className="info-container">
          <ul className="info">
            {infos.map((item, index) => (
              <li>
                <div key={index} className="info-item">
                  <span className="info-name">{item.name}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="hobbies-intro"> Here are some of my hobbies: </p>
        <ul className="hobbies">
          {aboutCards.map((item, index) => (
            <li>
              <div className="about_card_container">
                <img key={index} src={item.imagePath} alt={item.altText} className="about_card_img"></img>
                <div className="about_card_text">
                  <h2 className="about_card_topic">{item.topic}</h2>
                  <p className="about_card_desc">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About;
