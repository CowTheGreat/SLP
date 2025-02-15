
import { Github, Linkedin } from 'lucide-react';
import { teamMembers } from '../types/team';

export function TeamPage() {
  return (
    <div className="pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Our Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-[#1a1a1a] rounded-lg overflow-hidden border border-[#7ed957]/20 hover:border-[#7ed957]/40 transition-all"
              >
                {/* Fixed-size image */}
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-64 object-cover" // Fixed height and width with object-cover
                  style={{ height: '256px', width: '100%' }} // Explicitly set height and width
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-[#7ed957] mb-2">{member.role}</p>
                  <p className="text-gray-400 mb-4">Batch of {member.batchYear}</p>
                  <div className="flex gap-4">
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7ed957] hover:text-[#6bc746] transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#7ed957] hover:text-[#6bc746] transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}