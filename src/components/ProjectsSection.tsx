import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Project, projects } from '../types/project';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1a1a] rounded-lg p-6 border border-[#7ed957]/20 hover:border-[#7ed957]/40 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#242424] rounded-full text-xs text-[#7ed957]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => setSelectedProject(project)}
                className="text-[#7ed957] hover:text-[#6bc746] inline-flex items-center gap-2"
              >
                See More <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}