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
    name: "Sidarth",
    username: "--",
    points: 50,
    contributions: 1,
    projects: ["ASCII", ""],
  },
  {
    rank: 2,
    name: "Sanjai",
    username: "--",
    points: 30,
    contributions: 1,
    projects: ["Speed Checker", ""],
  },
  {
    rank: 3,
    name: "--",
    username: "--",
    points: 30,
    contributions: 1,
    projects: ["Focus App", ""],
  },
  // Add more entries as needed
];
