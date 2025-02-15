import Akeel from '../assets/Akeel.jpeg'
import Aravindhan from '../assets/Aravindhan.jpeg'  
import Devesh from '../assets/Devesh.jpeg'
import Aneesh from '../assets/Aneesh.png'

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  batchYear: string;
  imageUrl: string;
  github: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Akeel Ahamed RS',
    role: 'Lead Developer',
    batchYear: '2026',
    imageUrl: Akeel,
    github: 'https://github.com/akeelahamed24',
    linkedin: 'https://www.linkedin.com/in/akeelahamed242k5/'
  },
  {
    id: '2',
    name: 'Aravindhan C',
    role: 'Lead Developer',
    batchYear: '2026',
    imageUrl: Aravindhan,
    github: 'https://github.com/CowTheGreat',
    linkedin: 'https://www.linkedin.com/in/aravindhan-chakravarthy/'
  },
  {
    id: '3',
    name: 'Devesh S',
    role: 'Backend Developer',
    batchYear: '2026',
    imageUrl: Devesh,
    github: 'https://github.com/Devesh73',
    linkedin: 'https://www.linkedin.com/in/devesh-s-3048b22a7/'
  },
  {
    id: '4',
    name: 'Aneesh Kumar R',
    role: 'Backend Developer',
    batchYear: '2026',
    imageUrl: Aneesh,
    github: 'https://github.com/AneeshKumar23',
    linkedin: 'https://www.linkedin.com/in/aneesh23/'
  }
  // Add more team members as needed
];