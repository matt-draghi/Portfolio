import "../styles/Portfolio.css"

function Portfolio(){

    const projectList = [
        {
            name: "Cantina",
            img: "../assets/cantina.png",
            link: "https://mos-nerdley-cantina.herokuapp.com/",
            github: "https://github.com/matt-draghi/mos-nerdley-cantina",
            demo: "https://vimeo.com/695005651"
        },
        {
            name: "Dotify",
            img: "../assets/dotify.png",
            githubFront: "https://github.com/matt-draghi/Dotify",
            githubBack:"https://github.com/matt-draghi/Dotify-Backend",
            demo: "https://vimeo.com/687259262"
        },
        {
            name: "Baby Brands",
            img: "../assets/baby.png",
            github: "https://github.com/matt-draghi/phase-2-project",
            demo: "https://vimeo.com/687748994"
        },
    ]

    return(
        <section id="portfolio">
            <h1>Click On a Project to View the Demo</h1>
            <div id="portfolio-container">
                <div className="project"> 
                    <a href={projectList[0]["demo"]} target="_blank">
                        <div className="project-image" id="cantina">
                            <div className="middle">
                                <div class="text"><strong>{projectList[0]["name"]}</strong></div>
                            </div>
                        </div>
                    </a>
                    <div className="project-links">
                        <h3><a href={projectList[0]["github"]} target="_blank">Github</a></h3>
                        <h3><a href={projectList[0]["link"]} target="_blank">Website</a></h3>
                    </div>
                </div>
                <div className="project">
                    <a href={projectList[1]["demo"]} target="_blank">
                        <div className="project-image" id="dotify">
                            <div className="middle">
                                <div class="text"><strong>{projectList[1]["name"]}</strong></div>
                            </div>
                        </div>
                    </a>
                    <div className="project-links">
                        <h3><a href={projectList[1]["githubFront"]} target="_blank">Github (Front End)</a></h3>
                        <h3><a href={projectList[1]["githubBack"]} target="_blank">Github (Back End)</a></h3>
                    </div>
                </div>
                <div className="project">
                    <a href={projectList[2]["demo"]} target="_blank">
                        <div className="project-image" id="baby">
                            <div className="middle">
                                <div class="text"><strong>{projectList[2]["name"]}</strong></div>
                            </div>
                        </div>
                    </a>
                    <div className="project-links">
                        <h3><a href={projectList[2]["github"]} target="_blank">Github</a></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio