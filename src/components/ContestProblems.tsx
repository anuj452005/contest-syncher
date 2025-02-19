
import { Problem } from "@/types/codeforces";
import { ContestProblem } from "./ContestProblem";

interface ContestProblemsProps {
  problems: Problem[];
  solvedProblems: string[];
}

export const ContestProblems = ({ problems, solvedProblems }: ContestProblemsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {problems.map((problem, index) => (
        <ContestProblem
          key={`${problem.contestId}${problem.index}`}
          problem={problem}
          index={index}
          isSolved={solvedProblems.includes(`${problem.contestId}${problem.index}`)}
        />
      ))}
    </div>
  );
};
