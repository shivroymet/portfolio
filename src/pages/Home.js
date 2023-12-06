import { Intro } from "../containers/intro/Intro";
import Achievements from "../components/experience/Achievments";
import { AboutMe } from "../containers/about/AboutMe";
import { Skills } from "../containers/skills/Skills";
import { EducationHistory } from "../containers/education-history/EducationHistory";
import { Specialization } from "../containers/education-history/Specialization";
import { Special } from "../containers/education-history/Special";
import { Experience } from "../containers/experience/Experience";
import { ProjectCard } from "../components/projects/ProjectCard";
import "./Home.css"

export function Home() {
    return <>
        <Intro />
        <Skills />
        <AboutMe></AboutMe>
        <EducationHistory />
        <Specialization />
        <Special />


        <Experience />
        <ProjectCard/>


        <Achievements></Achievements>
    </>

}