
import { Problem } from "@/types/codeforces";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ContestProblemProps {
  problem: Problem;
  index: number;
  isSolved?: boolean;
}

export const ContestProblem = ({ problem, index, isSolved = false }: ContestProblemProps) => {
  const problemUrl = `https://codeforces.com/problemset/problem/${problem.contestId}/${problem.index}`;

  return (
    <Card className={`transition-colors ${isSolved ? "border-success" : ""}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold font-mono">
            Problem {String.fromCharCode(65 + index)}
          </h3>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">{problem.rating}</Badge>
            {isSolved && (
              <Badge variant="success">
                Solved
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">{problem.name}</h4>
          <div className="flex flex-wrap gap-2">
            {problem.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <a
            href={problemUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline mt-2"
          >
            Open in Codeforces
            <ExternalLink size={16} />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};
