import React from "react";
import "../styles/Contacts.css"
import { LuSend } from "react-icons/lu";
import { FaCheck, FaLinkedin, FaDiscord, FaInstagram, FaGithub } from "react-icons/fa";


const Contacts = () => {
  const [buttonStyle, setButtonStyle] = React.useState(false);
  const [buttonText, setButtonText] = React.useState("Send");
  const [buttonIcon, setButtonIcon] = React.useState(<LuSend/>)
  const [disabled, setDisable] = React.useState(false)
  const [ _ , setResult] = React.useState("");

  const handleClick = () => {
    setButtonStyle(true)
    setButtonText("Sent")
    setButtonIcon(<FaCheck/>)
    setDisable(true)
  }

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2308be3a-a8f2-46f3-8492-b8d2d203b7bd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      handleClick()
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section id="contacts">
      <h1 className="contacts-title">Contact Me</h1>

      <div className="contacts-container">
        <form className="email-form" onSubmit={onSubmit}>
          <h3 className="email-title">Send me an email</h3>
          <p className="email-desc">If you would like to contact me via email, fill in the form below.</p>

          <div className="email-container">
            <div className="input-container">
              <div className="input-row">
                <div className="input-group">
                  <input type="text" name="First name" placeholder="First name" className="input" autoComplete="off" disabled={disabled} required></input>
                  <input type="text" name="Last name" placeholder="Last name" className="input" autoComplete="off" disabled={disabled} required></input>
                </div>

                <div className="input-group">
                  <input type="email" name="Email Address" placeholder="Email address" className="input" autoComplete="off" disabled={disabled} required></input>
                  <input type="phone" name="Phone number" placeholder="Phone number (Optional)" className="input" autoComplete="off" disabled={disabled}></input>
                </div>
              </div>
              <div className="input-message-container">
                <textarea name="Message" placeholder="Type your message here." className="input-message" autoComplete="off" disabled={disabled}></textarea>
              </div>
              <div className="send-button-container">
                <button className={buttonStyle ? "sent-button" : "send-button"} type="submit">{buttonText}{buttonIcon}</button>
              </div>
            </div>
          </div>
        </form>

        <div className="vl-container"> 
          <div className="vertical-line"></div>
        </div>

        <div className="social-container">
          <h4 className="social-intro">Or alternatively just send me a message on these platforms.</h4>
          <div className="social-button-container">
            <button className="social-button linkedin" onClick={() => window.open("https://www.linkedin.com/in/hei-wing-lee-a58a72294/", "_blank", "noreferrer")}><FaLinkedin/></button>
            <button className="social-button github" onClick={() => window.open("https://github.com/InstinctM", "_blank", "noreferrer")}><FaGithub/></button>
            <button className="social-button discord" onClick={() => window.open("https://discordapp.com/users/456667749758795777", "_blank", "noreferrer")}><FaDiscord/></button>
            <button className="social-button instagram" onClick={() => window.open("https://www.instagram.com/matthewleehw/", "_blank", "noreferrer")}><FaInstagram/></button>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Contacts;