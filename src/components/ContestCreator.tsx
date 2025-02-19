
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Problem } from "@/types/codeforces";

interface ContestCreatorProps {
  onContestStart: (problems: Problem[]) => void;
}

const difficulties = ["800-1000", "1100-1300", "1400-1600", "1700-1900", "2000-2200"];
const problemTypes = ["implementation", "dp", "graphs", "math", "data structures"];

// Mock problems for now - we'll replace this with actual API calls later
const mockProblems: Problem[] = [
  {
    contestId: 1721,
    problemsetName: "Contest 1721",
    index: "A",
    name: "Image Problem",
    type: "implementation",
    points: 500,
    rating: 800,
    tags: ["implementation"]
  },
  {
    contestId: 1722,
    problemsetName: "Contest 1722",
    index: "B",
    name: "Dynamic Programming Challenge",
    type: "dp",
    points: 1000,
    rating: 1300,
    tags: ["dp", "math"]
  },
  {
    contestId: 1723,
    problemsetName: "Contest 1723",
    index: "C",
    name: "Graph Theory",
    type: "graphs",
    points: 1500,
    rating: 1600,
    tags: ["graphs", "dfs and similar"]
  },
  {
    contestId: 1724,
    problemsetName: "Contest 1724",
    index: "D",
    name: "Math Problem",
    type: "math",
    points: 2000,
    rating: 1900,
    tags: ["math", "number theory"]
  },
  {
    contestId: 1725,
    problemsetName: "Contest 1725",
    index: "E",
    name: "Data Structures Problem",
    type: "data structures",
    points: 2500,
    rating: 2200,
    tags: ["data structures", "trees"]
  }
];

export const ContestCreator = ({ onContestStart }: ContestCreatorProps) => {
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const createContest = () => {
    try {
      // For now, we'll use mock problems
      // Later, this will fetch problems from Codeforces API based on selected difficulties and types
      toast.success("Contest created successfully!");
      onContestStart(mockProblems);
    } catch (error) {
      toast.error("Failed to create contest");
    }
  };

  return (
    <Card className="p-6 space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-bold text-primary">Create Virtual Contest</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">Select Problem Difficulties</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {difficulties.map((diff, index) => (
              <Select key={diff} onValueChange={(value) => {
                const newDiffs = [...selectedDifficulties];
                newDiffs[index] = value;
                setSelectedDifficulties(newDiffs);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder={`Problem ${index + 1} Difficulty`} />
                </SelectTrigger>
                <SelectContent>
                  {difficulties.map((d) => (
                    <SelectItem key={d} value={d}>{d}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Select Problem Types</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {problemTypes.map((type, index) => (
              <Select key={type} onValueChange={(value) => {
                const newTypes = [...selectedTypes];
                newTypes[index] = value;
                setSelectedTypes(newTypes);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder={`Problem ${index + 1} Type`} />
                </SelectTrigger>
                <SelectContent>
                  {problemTypes.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
          </div>
        </div>

        <Button 
          onClick={createContest}
          className="w-full bg-accent hover:bg-accent/90 transition-colors"
          disabled={selectedDifficulties.length < 4 || selectedTypes.length < 4}
        >
          Create Contest
        </Button>
      </div>
    </Card>
  );
};
