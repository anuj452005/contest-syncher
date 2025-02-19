
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

export const ContestTimer = ({ startTime, duration = 120 }: { startTime: Date; duration: number }) => {
  const [timeLeft, setTimeLeft] = useState(duration * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = duration * 60 - Math.floor((now.getTime() - startTime.getTime()) / 1000);
      
      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft(0);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, duration]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <Card className="p-4 bg-primary text-primary-foreground">
      <div className="text-center font-mono text-2xl">
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </div>
    </Card>
  );
};
