import { Intro } from "../containers/intro/Intro";
import Achievements from "../components/experience/Achievments";
import { AboutMe } from "../containers/about/AboutMe";
import { Skills } from "../containers/skills/Skills";
import { EducationHistory } from "../containers/education-history/EducationHistory";
import { Specialization } from "../containers/education-history/Specialization";
import { Special } from "../containers/education-history/Special";
import { Experience } from "../containers/experience/Experience";
import "./Home.css"
import { Projects } from "../containers/projects/Projects";

export function Home() {
    return <>
        <Intro />
        <Skills />
        <AboutMe></AboutMe>
        <EducationHistory />
        <Specialization />
        <Special />

        <div className="bg-dark experience-intro"> 
        <h2>PAST EXERIENCES</h2>
        
        </div>


        <Experience />
        <div className="project-intro"> 
        <div class="h1">Some Top Projects</div>
        <Projects/>
        </div>


        <Achievements></Achievements>
    </>

}