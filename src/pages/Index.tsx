
import { useState } from "react";
import { ProfileConnector } from "@/components/ProfileConnector";
import { ContestCreator } from "@/components/ContestCreator";
import { ContestTimer } from "@/components/ContestTimer";

const Index = () => {
  const [isProfileConnected, setIsProfileConnected] = useState(false);
  const [contestStarted, setContestStarted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container">
          <h1 className="text-3xl font-bold">Codeforces Helper</h1>
        </div>
      </header>

      <main className="container py-8 space-y-8">
        {!isProfileConnected ? (
          <ProfileConnector />
        ) : !contestStarted ? (
          <ContestCreator />
        ) : (
          <div className="space-y-6">
            {startTime && <ContestTimer startTime={startTime} duration={120} />}
            {/* Contest problems will be displayed here */}
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
