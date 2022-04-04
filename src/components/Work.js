import "../styles/Work.css"
function Work(){
    return(
        <section id="work" >
            <div id="work-container">
                <div className="job-header">
                    <h1>Grant Thornton LLP</h1>
                    <h2>Cyber Risk Associate</h2>
                    <h3>August 2020 - December 2021</h3>
                    <ul>
                        <li>Launched Cloud Security Initiative company-wide to expand Grant Thornton’s client base</li>
                        <br/>
                        <li>Deployed the Exabeam platform into 5 client environments and continually developed and modified configuration files (including parsers, event builders, and alert rules) using the Linux Command Line to optimize the platform</li>
                        <br/>
                        <li>Communicated with teammates to create Bash scripts that were used to automate common tasks </li>
                        <br/>
                        <li>Triaged potential incidents using Exabeam Advanced Analytics in conjunction with logs found in the Exabeam Data Lake to determine whether there was an issue which required escalation</li>
                        <br/>
                        <li>Monitored Exabeam platform health and performed root cause analysis for performance issues that would arise</li>
                        <br/>
	                    <li>Supported University Recruiting team across multiple campuses by vetting possible candidates through career fairs and networking sessions</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Work