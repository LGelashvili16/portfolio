import { PROJECTS } from '@/constants';
import ProjectCard from '../sections-content/ProjectCard';

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20 pb-40"
    >
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h2>

      {/* <div className="h-full w-full flex flex-col flex-wrap md:flex-row gap-10 px-10"> */}
      <div className="h-full w-full grid grid-cols-3 gap-12 px-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
