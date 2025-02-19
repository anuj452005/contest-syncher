
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const difficulties = ["800-1000", "1100-1300", "1400-1600", "1700-1900", "2000-2200"];
const problemTypes = ["implementation", "dp", "graphs", "math", "data structures"];

export const ContestCreator = () => {
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const createContest = () => {
    // Here we'll add the contest creation logic
    console.log("Creating contest with:", { selectedDifficulties, selectedTypes });
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
