import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";

export const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedModel, setSelectedModel] = useState("openai");
  const { toast } = useToast();

  const handleDarkModeToggle = (checked: boolean) => {
    setIsDarkMode(checked);
    document.documentElement.classList.toggle("dark", checked);
  };

  const handleFeedback = () => {
    toast({
      title: "Feedback Sent",
      description: "Thank you for your feedback! We'll review it shortly.",
    });
  };

  return (
    <div className="space-y-8 slide-in">
      <div>
        <h2 className="text-2xl font-bold mb-4">Settings</h2>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Dark Mode</Label>
              <p className="text-sm text-muted-foreground">
                Toggle dark mode on/off
              </p>
            </div>
            <Switch
              checked={isDarkMode}
              onCheckedChange={handleDarkModeToggle}
            />
          </div>

          <div className="space-y-3">
            <Label>AI Model</Label>
            <RadioGroup
              value={selectedModel}
              onValueChange={setSelectedModel}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="openai" id="openai" />
                <Label htmlFor="openai">OpenAI GPT</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="claude" id="claude" />
                <Label htmlFor="claude">Claude Sonnet 3.5</Label>
              </div>
            </RadioGroup>
          </div>

          <div>
            <Button
              variant="outline"
              onClick={handleFeedback}
              className="w-full"
            >
              Send Feedback
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};