export interface LeaderboardEntry {
  rank: number;
  name: string;
  username: string;
  points: number;
  contributions: number;
  projects: string[];

}

export const leaderboardData: LeaderboardEntry[] = [
  {
    rank: 1,
    name: '--',
    username: '--',
    points: 2500,
    contributions: 156,
    projects: ["Project 1", "Project 2"]
  },
  {
    rank: 2,
    name: '--',
    username: '--',
    points: 2350,
    contributions: 142,
    projects: ["Project 1", "Project 2"]
  },
  {
    rank: 3,
    name: '--',
    username: '--',
    points: 2200,
    contributions: 128,
    projects: ["Project 1", "Project 2"]
  },
  {
    rank: 4,
    name: '--',
    username: '--',
    points: 2100,
    contributions: 115,
    projects: ["Project 1", "Project 2"]
  },
  {
    rank: 5,
    name: '--',
    username: '--',
    points: 2000,
    contributions: 98,
    projects: ["Project 1", "Project 2"]
  }
  // Add more entries as needed
];