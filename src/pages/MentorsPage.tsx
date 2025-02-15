import { Github, Linkedin } from 'lucide-react';
import { mentors } from '../types/mentor';

export function MentorsPage() {
  return (
    <div className="pt-16">
      {/* Intro Section */}
      <section className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#7ed957] to-[#5fa847] animate-fade-in-up">
            Meet Our Mentors
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Our mentors are passionate about open source and dedicated to helping students grow. 
            They provide guidance, code reviews, and support throughout your open source journey.
          </p>
        </div>
      </section>

      {/* Mentors Grid */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-[#242424] p-8 rounded-lg border border-[#7ed957]/20 hover:border-[#7ed957]/40 transition-all hover:-translate-y-2"
              >
                {/* Mentor Details */}
                <h3 className="text-2xl font-bold text-center mb-2 text-white">
                  {mentor.name}
                </h3>
                <p className="text-gray-400 text-center mb-4">
                  Batch of {mentor.batchYear}
                </p>
                <p className="text-gray-300 text-center mb-6">
                  {mentor.expertise}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-6">
                  <a
                    href={mentor.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7ed957] hover:text-[#6bc746] transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href={mentor.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7ed957] hover:text-[#6bc746] transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}