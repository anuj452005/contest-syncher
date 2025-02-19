
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

interface ProfileConnectorProps {
  onConnect: () => void;
}

export const ProfileConnector = ({ onConnect }: ProfileConnectorProps) => {
  const [handle, setHandle] = useState("");
  const [loading, setLoading] = useState(false);

  const connectProfile = async () => {
    setLoading(true);
    try {
      // Here we'll add the Codeforces API integration
      // For now, we'll just simulate a successful connection
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      toast.success("Profile connected successfully!");
      onConnect();
    } catch (error) {
      toast.error("Failed to connect profile");
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-sm animate-fadeIn">
      <h2 className="text-2xl font-bold text-primary">Connect Your Codeforces Profile</h2>
      <div className="w-full max-w-md space-y-4">
        <Input
          type="text"
          placeholder="Enter your Codeforces handle"
          value={handle}
          onChange={(e) => setHandle(e.target.value)}
          className="font-mono"
        />
        <Button
          onClick={connectProfile}
          disabled={!handle || loading}
          className="w-full bg-accent hover:bg-accent/90 transition-colors"
        >
          {loading ? "Connecting..." : "Connect Profile"}
        </Button>
      </div>
    </div>
  );
};
