import "../styles/Header.css"
function Header(){

    return(
        <nav className="App-header">
            <div className="header-container">
                <ul>
                    <li className="welcome"><a href="#welcome">Welcome</a></li>
                    <li className="portfolio"><a href="#portfolio">Portfolio</a></li>
                    <li className="work"><a href="#work">Work Experience</a></li>
                    <li className="education"><a href="#education">Education</a></li>
                    <li className="social"><a href="#social">Social</a></li>
                </ul>
                
            </div>
        </nav>
    )
}

export default Header