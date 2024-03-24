'use client';
import { PROJECTS } from '@/constants';
import ProjectCard from '../sections-content/ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center py-20 pb-40"
    >
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h2>

      <motion.div
        // variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        // initial={{ x: -50, opacity: 0 }}
        // animate={{ x: 0, opacity: 1 }}
        className="projects h-full w-full px-10"
      >
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.src}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
