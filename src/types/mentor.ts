export interface Mentor {
  id: string;
  name: string;
  batchYear: string;
  github: string;
  linkedin: string;
  expertise: string;
}

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Aravindhan C',
    batchYear: '2026',
    github: 'https://github.com/CowTheGreat',
    linkedin: 'https://www.linkedin.com/in/aravindhan-chakravarthy/',
    expertise: 'Full-Stack Development'
  },
  {
    id: '2',
    name: 'Akeel Ahamed RS',
    batchYear: '2026',
    github: 'https://github.com/akeelahamed24',
    linkedin: 'https://www.linkedin.com/in/akeelahamed242k5/',
    expertise: 'Full-Stack Development'
  },
  // {
  //   id: '3',
  //   name: '',
  //   batchYear: '2014',
  //   github: 'https://github.com/emilyrodriguez',
  //   linkedin: 'https://linkedin.com/in/emilyrodriguez'
  // }
  // Add more mentors as needed
];