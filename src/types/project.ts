export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  githubUrl: string;
  owner: {
    name: string;
    linkedin: string;
    github: string;
  };
}

export const projects: Project[] = [
  {
    id: "1",
    title: "CSE C Section Class Website",
    description:
      "This is a  website for the CSE C Section class. It contains a basic student list and a timetable, with poor styling, bad layout, and outdated design choices.",
    fullDescription:
      "Description: This is a  website for the CSE C Section class. It contains a basic student list and a timetable, with poor styling, bad layout, and outdated design choices. Features:A plain-looking student list A basic, unresponsive timetableCluttered inline styles and poorly structured CSSNo modern UI/UX principles applied This project is not meant to be taken seriously and serves as an example of bad web design practices.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/CowTheGreat/CSE-C",
    owner: {
      name: "Aravindhan C",
      linkedin: "https://www.linkedin.com/in/aravindhan-chakravarthy/",
      github: "https://github.com/CowTheGreat",
    },
  },
  {
    id: "2",
    title: "FocusFlow",
    description:
      "The app is designed to enhance focus and time management using the Pomodoro Technique, where users work in timed intervals with short breaks. Alongside the timer, a built-in to-do list helps users organize and track tasks efficiently.",
    fullDescription:
      "Overview The app is designed to enhance focus and time management using the Pomodoro Technique, where users work in timed intervals with short breaks. Alongside the timer, a built-in to-do list helps users organize and track tasks efficiently. Core Features Pomodoro Timer – A countdown timer based on the traditional 25-minute Pomodoro session with breaks.Task Management – A simple to-do list where users can add, edit, and complete tasks.Session Tracking – Keeps track of completed Pomodoros to measure productivity.Basic UI – Functional but currently lacks an intuitive and visually appealing design. Potential ImprovementsCustom Timer Settings – Allow users to modify session and break durations.Notifications & Sounds – Alerts when a session ends. Dark Mode – Aesthetic and eye-friendly option.Data Persistence – Ensuring tasks and timer states are saved across sessions.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/CowTheGreat/Focus-app",
    owner: {
      name: "Idhika P",
      linkedin: "https://www.linkedin.com/in/idhika-prabakaran-bb3581244/",
      github: "https://github.com/idhika22",
    },
  },
  // {
  //   id: "3",
  //   title: "Login",
  //   description:
  //     "This project is an interactive desktop application that allows users to record audio in real-time, save the recordings, and transcribe the audio to text using the Whisper AI model. The user-friendly interface is built with Tkinter, making it easy to start and stop recordings and generate transcriptions with just a few clicks.",
  //   fullDescription:
  //     "This project is an interactive desktop application that allows users to record audio in real-time, save the recordings, and transcribe the audio to text using the Whisper AI model. The user-friendly interface is built with Tkinter, making it easy to start and stop recordings and generate transcriptions with just a few clicks. Features: Real-Time Audio Recording: Users can start and stop audio recordings with the click of a button. Audio is captured using PyAudio, ensuring high-quality recordings. Audio File Management: Recorded audio is saved in WAV format for compatibility and quality retention. Automatic file saving upon stopping the recording. AI-Powered Transcription: Uses Whisper, an advanced speech-to-text model, to transcribe recorded audio. Transcription results are saved to a text file for easy access and further use. User-Friendly Interface: Built with Tkinter, the application provides a simple, clean, and responsive interface. Buttons are styled for ease of use and accessibility.",
  //   techStack: ["Python", "Tkinter", "Whisper"],
  //   githubUrl:
  //     "https://github.com/CowTheGreat/Real-Time-Audio-Recorder-and-Transcriber-using-Whisper-AI",
  //   owner: {
  //     name: "Aravindhan C",
  //     linkedin: "https://www.linkedin.com/in/aravindhan-chakravarthy/",
  //     github: "https://github.com/CowTheGreat",
  //   },
  // },
  {
    id: "4",
    title: "LIght Yagami Portfolio",
    description:
      "A simple portfolio website built with HTML, CSS, and JavaScript. The website showcases the owner's projects, skills, and contact information in a clean and professional design.",
    fullDescription:
      "A simple portfolio website built with HTML, CSS, and JavaScript. The website showcases the owner's projects, skills, and contact information in a clean and professional design.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/AneeshKumar23/html_portfolio",
    owner: {
      name: "Aneesh Kumar",
      linkedin: "https://www.linkedin.com/in/aneesh23/",
      github: "https://github.com/AneeshKumar23",
    },
  },
  {
    id: "5",
    title: "Typing Speed Tester",
    description:
      "This project is an interactive desktop application that allows users to know their typing speed",
    fullDescription:
      "This project is an interactive desktop application that allows users to know their typing speed. Features: Typing Speed Test: Users can test their typing speed by typing a given paragraph. The application calculates the typing speed in words per minute (WPM) and displays the result. Accuracy Calculation: The application also calculates the accuracy of the user's typing based on the number of correct words typed. User-Friendly Interface: Built with Tkinter, the application provides a simple, clean, and responsive interface. Buttons are styled for ease of use and accessibility.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Devesh73/typing-speed-tester-slp",
    owner: {
      name: "Devesh S",
      linkedin: "https://www.linkedin.com/in/devesh-s-3048b22a7/",
      github: "https://github.com/Devesh73",
    },
  },
  {
    id: "6",
    title: "ASCII Art Generator",
    description:
      "This project is an interactive desktop application that allows users to generate ASCII art from images",
    fullDescription:
      "This project is an interactive desktop application that allows users to generate ASCII art from images. Features: Image to ASCII Conversion: Users can upload an image and convert it to ASCII art. The application uses a custom algorithm to map pixel values to ASCII characters. Customizable Output: Users can adjust the width and brightness of the ASCII art output. The application provides sliders for easy customization. User-Friendly Interface: Built with Tkinter, the application provides a simple, clean, and responsive interface. Buttons are styled for ease of use and accessibility.",
    techStack: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/Devesh73/ASCII-art-generator-SLP-",
    owner: {
      name: "Devesh S",
      linkedin: "https://www.linkedin.com/in/devesh-s-3048b22a7/",
      github: "https://github.com/Devesh73",
    },
  },
  {
    id: "7",
    title: "Real-Time-Audio-Recorder-and-Transcriber-using-Whisper-AI",
    description:
      "This project is an interactive desktop application that allows users to record audio in real-time, save the recordings, and transcribe the audio to text using the Whisper AI model. The user-friendly interface is built with Tkinter, making it easy to start and stop recordings and generate transcriptions with just a few clicks.",
    fullDescription:
      "This project is an interactive desktop application that allows users to record audio in real-time, save the recordings, and transcribe the audio to text using the Whisper AI model. The user-friendly interface is built with Tkinter, making it easy to start and stop recordings and generate transcriptions with just a few clicks. Features: Real-Time Audio Recording: Users can start and stop audio recordings with the click of a button. Audio is captured using PyAudio, ensuring high-quality recordings. Audio File Management: Recorded audio is saved in WAV format for compatibility and quality retention. Automatic file saving upon stopping the recording. AI-Powered Transcription: Uses Whisper, an advanced speech-to-text model, to transcribe recorded audio. Transcription results are saved to a text file for easy access and further use. User-Friendly Interface: Built with Tkinter, the application provides a simple, clean, and responsive interface. Buttons are styled for ease of use and accessibility.",
    techStack: ["Python", "Tkinter", "Whisper"],
    githubUrl:
      "https://github.com/CowTheGreat/Real-Time-Audio-Recorder-and-Transcriber-using-Whisper-AI",
    owner: {
      name: "Aravindhan C",
      linkedin: "https://www.linkedin.com/in/aravindhan-chakravarthy/",
      github: "https://github.com/CowTheGreat",
    },
  },
  // {
  //   id: '2',
  //   title: 'Community Collaboration Tool',
  //   description: 'A tool designed to facilitate collaboration between open source contributors.',
  //   fullDescription: 'This tool helps open source contributors work together more effectively. It includes features for task management, code review workflows, and team communication. The platform emphasizes ease of use and integration with existing development tools.',
  //   techStack: ['Vue.js', 'FastAPI', 'PostgreSQL', 'Docker'],
  //   githubUrl: 'https://github.com/example/collab-tool',
  //   owner: {
  //     name: 'Jane Smith',
  //     linkedin: 'https://linkedin.com/in/janesmith',
  //     github: 'https://github.com/janesmith'
  //   }
  // },
  // Add more projects as needed
];
