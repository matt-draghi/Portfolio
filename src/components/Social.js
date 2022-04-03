import "../styles/Social.css"
import { FaGithub,  FaLinkedin, FaMedium, FaTwitter} from "react-icons/fa";

function Social(){
    return(
        <section id="social" >
            <div id="social-container">
                <div className="text-container">
                    <h3>Follow or Connect with me on one of these social media platforms</h3>
                </div>
                <div className="icon-container">
                    <a href="https://github.com/matt-draghi" target="_blank"><FaGithub className="icon" style={{color:"#161B22"}}/></a>
                    <a href="https://www.linkedin.com/in/draghim/" target="_blank"><FaLinkedin className="icon" style={{color:"#0B65C2"}}/></a>
                    <a href="https://medium.com/@mtd5264" target="_blank"><FaMedium className="icon" style={{color:"black"}}/></a>
                    <a href="https://twitter.com/MattDraghi" target="_blank"><FaTwitter className="icon" style={{color:"#188CD8"}}/></a>
                </div>
            </div>
        </section>
    )
}

export default Social