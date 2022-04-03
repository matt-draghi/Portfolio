import "../styles/Education.css"
function Education(){
    return(
        <section id="education">
            <div id="education-container">
                <div className="school">
                    <h1>Flatiron School</h1>
                    <p>Full Stack Web Development, Ruby on Rails and JavaScript program </p>
                    <p>01/2022 - Present</p>
                </div>
                <br/>
                <div className="school">
                    <h1>Pennsylvania State University</h1>
                    <p>B.S. Information Sciences and Technology (Application Design and Development)</p>
                    <p>B.S. Security and Risk Analysis (Information and Cyber Security)</p>
                    <p>National Security Association Certificate</p>
                    <p>08/2015 - 12/2019</p>
                </div>
            </div>
        </section>
    )
}

export default Education