import { ProjectsSection } from '../components/ProjectsSection';

export function ProjectsPage() {
  return (
    <div className="pt-16">
      {/* Intro Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7ed957] to-[#5fa847] animate-fade-in-up">
                Getting Started with Open Source
              </h1>
              <div className="space-y-6 text-gray-300 animate-fade-in-up delay-100">
                <p className="text-lg leading-relaxed">
                  Open source is more than just code—it's a global movement that empowers collaboration, innovation, and learning. By contributing to open source, you join a community of developers who share knowledge, solve problems, and build the future of technology.
                </p>
                <div className="bg-[#242424] p-6 rounded-lg border border-[#7ed957]/20">
                  <h2 className="text-xl font-semibold mb-4 text-[#7ed957]">
                    Why Contribute to Open Source?
                  </h2>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Gain real-world experience and build your portfolio</li>
                    <li>Collaborate with developers worldwide</li>
                    <li>Improve your coding and problem-solving skills</li>
                    <li>Give back to the community and make an impact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-center animate-fade-in-up delay-200">
              <img
                src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif"
                alt="GitHub Contribution Animation"
                className="rounded-lg shadow-2xl border border-[#7ed957]/20 hover:border-[#7ed957]/40 transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#7ed957] to-[#5fa847]">
            Explore Open Source Projects
          </h2>
          <ProjectsSection />
        </div>
      </section>
    </div>
  );
}