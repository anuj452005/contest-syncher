
export interface CodeforcesProfile {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
}

export interface Problem {
  contestId: number;
  problemsetName: string;
  index: string;
  name: string;
  type: string;
  points: number;
  rating: number;
  tags: string[];
}

export interface Contest {
  problems: Problem[];
  startTime: Date;
  duration: number;
}

export interface Submission {
  id: number;
  contestId: number;
  problemIndex: string;
  verdict: string;
  time: number;
}
