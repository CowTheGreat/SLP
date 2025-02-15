import { X, Github, Linkedin } from "lucide-react";
import { Project } from "../types/project";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#1a1a1a] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-4">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300">{project.fullDescription}</p>

            <div>
              <h3 className="text-lg font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#242424] rounded-full text-sm text-[#7ed957]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Project Owner</h3>
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">{project.owner.name}</span>
                <a
                  href={project.owner.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7ed957] hover:text-[#6bc746]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={project.owner.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7ed957] hover:text-[#6bc746]"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#7ed957] hover:bg-[#6bc746] text-black px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
