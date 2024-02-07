import TitleSection from "@/components/TitleSection"
import ProjectCard from "../../components/ProjectCard"

const Projects = () => {
  return (
    <div className="w-full">
        <TitleSection>
          My Projects
        </TitleSection>
        <div className="flex">
            <div>
                <ProjectCard />
            </div>
        </div>
    </div>
  )
}

export default Projects