import React from 'react';
import { Github, Users, Code2, ChevronRight } from 'lucide-react';
import { ProjectsPage } from './pages/ProjectsPage';
import { MentorsPage } from './pages/MentorsPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { TeamPage } from './pages/TeamPage';
import { About } from './pages/About';
import BackGround from '../src/assets/background.png';
import Herologo from '../src/assets/herologo.png';
import Logo from '../src/assets/Logo.png';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage />;
      case 'mentors':
        return <MentorsPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'team':
        return <TeamPage />;
      case 'about':
        return <About />;
      default:
        return renderHomePage();
    }
  };

  const renderHomePage = () => (
    <>
      {/* Hero Section */}
      <section
        className="pt-32 pb-20 min-h-screen bg-[#1a1a1a] relative overflow-hidden"
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Hero Image */}
          <img
            src={Herologo}
            alt="Hero Image"
            className="w-64 h-auto mx-auto mb-8 rounded-lg shadow-lg animate-fade-in"
          />

          <h1 className="text-5xl font-bold mb-6 text-white animate-fade-in-up">
            Welcome to SVCE Learners Platform
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-100">
            Empowering innovation through collaboration and open-source contributions.
          </p>
          <button
            onClick={() => setCurrentPage('projects')}
            className="bg-[#7ed957] hover:bg-[#6bc746] text-black px-8 py-3 rounded-full text-lg font-semibold inline-flex items-center gap-2 transition-all animate-fade-in-up delay-200"
          >
            Get Started <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1a1a1a]/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, label: 'Participants', value: '0' },
              { icon: Github, label: 'Projects', value: '1' },
              { icon: Code2, label: 'Contributions', value: '10' },
              { icon: Users, label: 'Mentors', value: '2' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-[#1a1a1a] border border-[#7ed957]/20 hover:border-[#7ed957]/40 transition-all hover:-translate-y-2"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#7ed957]" />
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            About Us
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-gray-300">
            <p>
              Welcome to the SVCE Learners Platform, where we are dedicated to fostering a culture of collaboration, innovation, and continuous learning. Our mission is to empower students to contribute to and harness the potential of open-source technologies, creating a space where creativity, problem-solving, and knowledge-sharing thrive.
            </p>
            <p>
              At SVCE, we believe that open-source projects play a critical role in shaping the future of technology. They enable collaborative efforts among developers worldwide, driving innovation, advancing new solutions, and encouraging the growth of an open digital ecosystem. By engaging in these projects, students gain hands-on experience, improve their technical skills, and have the opportunity to make meaningful contributions to the global tech community.
            </p>
            <p>
              Platforms like GitHub serve as a hub for these collaborations. Here, students can share their work, collaborate with like-minded individuals, and build solutions that are open for anyone to use, enhance, and evolve. This spirit of openness and shared development fosters an environment where ideas can flourish, skills can grow, and technology can continue to advance.
            </p>
            <p className="font-semibold text-[#7ed957]">
              Join us at SVCE Learners Platform and become part of a vibrant community driving innovation through open-source contributions!
            </p>
          </div>
        </div>
      </section>

     {/* Registration Section */}
<section className="py-20 bg-[#1a1a1a]">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16 text-white">
      Registration
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: 'Project Registration',
          description: 'All open-source organizations, Project maintainers are welcome to mentor budding open-source enthusiasts from all different backgrounds. Find students and professionals that have skills and share your vision.',
          icon: Code2,
          url: 'https://forms.gle/kkYEZYWoTaLGJ6vU6' // Add URL
        },
        {
          title: 'Participant',
          description: "Whether you're a newbie or a seasoned professional, we have a space for everyone. Apply now to become a part of something exciting!",
          icon: Users,
          url: 'https://forms.gle/2rfVywD1vT9XVZjW7' // Add URL
        },
        {
          title: 'Mentor',
          description: 'Are you an expert in one (or more) of the projects? Then be a beacon of light for our participants! As a mentor, you will guide one team with your insights and experience all through their Open Source & Hackathon journey.',
          icon: Github,
          url: 'https://forms.gle/6GYtWotW4364sdzn9' // Add URL
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-[#242424] p-8 rounded-lg border border-[#7ed957]/20 hover:border-[#7ed957]/40 transition-all hover:-translate-y-2"
        >
          <item.icon className="w-12 h-12 mb-6 text-[#7ed957]" />
          <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
          <p className="text-gray-400 mb-6">{item.description}</p>
          <a
            href={item.url}
            className="text-[#7ed957] hover:text-[#6bc746] inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Register Now <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#1a1a1a] z-50 border-b border-[#7ed957]/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <img
              src={Logo}
              alt="SVCE Open Source Platform Logo"
              className="w-20 h-auto cursor-pointer"
              onClick={() => setCurrentPage('home')}
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { name: 'Home', key: 'home' },
                { name: 'About', key: 'about' },
                { name: 'Projects', key: 'projects' },
                { name: 'Mentors', key: 'mentors' },
                { name: 'Leader Board', key: 'leaderboard' },
                { name: 'Our Team', key: 'team' },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => setCurrentPage(item.key)}
                  className={`text-gray-300 hover:text-[#7ed957] transition-colors ${
                    currentPage === item.key ? 'text-[#7ed957]' : ''
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-[#7ed957] focus:outline-none"
              >
                {/* Hamburger Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:hidden mt-4 space-y-2`}
          >
            {[
              { name: 'Home', key: 'home' },
              { name: 'About', key: 'about' },
              { name: 'Projects', key: 'projects' },
              { name: 'Mentors', key: 'mentors' },
              { name: 'Leader Board', key: 'leaderboard' },
              { name: 'Our Team', key: 'team' },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key);
                  setIsMenuOpen(false); // Close the menu after selecting an option
                }}
                className={`block w-full text-left px-4 py-2 text-gray-300 hover:text-[#7ed957] transition-colors ${
                  currentPage === item.key ? 'text-[#7ed957]' : ''
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      {renderPage()}

      {/* Footer */}
      <footer className="bg-[#1a1a1a] py-12 border-t border-[#7ed957]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo Section */}
            <div className="flex justify-center md:justify-start">
              <img
                src={Logo}
                alt="SVCE Open Source Platform Logo"
                className="max-w-full"
              />
            </div>

            {/* Quick Links */}
            <div className="text-gray-400">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { name: 'Home', key: 'home' },
                  { name: 'About', key: 'about' },
                  { name: 'Projects', key: 'projects' },
                  { name: 'Mentors', key: 'mentors' },
                  { name: 'Leaderboard', key: 'leaderboard' },
                  { name: 'Our Team', key: 'team' },
                ].map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => setCurrentPage(item.key)}
                      className="text-gray-400 hover:text-[#7ed957] transition-colors"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="text-gray-400">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <p>Email: info@svceopensource.com</p>
              <p>Phone: 7708382698</p>
              <div className="flex justify-start gap-6 mt-4">
                {[Github, Users, Code2].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-[#7ed957] hover:text-[#6bc746] transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-12 text-center text-gray-400">
            <p>© 2025 SVCE Open Source Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;