import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Smile, Meh, Frown } from "lucide-react";

export const SettingsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedModel, setSelectedModel] = useState("openai");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  const [fontSize, setFontSize] = useState("medium");
  const [feedback, setFeedback] = useState("");
  const [mood, setMood] = useState<"happy" | "neutral" | "sad" | null>(null);
  const { toast } = useToast();

  const handleDarkModeToggle = (checked: boolean) => {
    setIsDarkMode(checked);
    document.documentElement.classList.toggle("dark", checked);
  };

  const handleFeedbackSubmit = () => {
    if (!mood || !feedback.trim()) {
      toast({
        title: "Please complete the feedback",
        description: "Both mood and feedback text are required.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Feedback Sent",
      description: "Thank you for your feedback! We'll review it shortly.",
    });
    setFeedback("");
    setMood(null);
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
            <Switch checked={isDarkMode} onCheckedChange={handleDarkModeToggle} />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Notifications</Label>
              <p className="text-sm text-muted-foreground">
                Enable push notifications
              </p>
            </div>
            <Switch
              checked={notificationsEnabled}
              onCheckedChange={setNotificationsEnabled}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-Save</Label>
              <p className="text-sm text-muted-foreground">
                Automatically save changes
              </p>
            </div>
            <Switch checked={autoSave} onCheckedChange={setAutoSave} />
          </div>

          <div className="space-y-3">
            <Label>Font Size</Label>
            <RadioGroup
              value={fontSize}
              onValueChange={setFontSize}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="small" id="small" />
                <Label htmlFor="small">Small</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">Medium</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="large" id="large" />
                <Label htmlFor="large">Large</Label>
              </div>
            </RadioGroup>
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

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full">
                Send Feedback
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Send us your feedback</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="flex justify-center space-x-4">
                  <Button
                    variant={mood === "happy" ? "default" : "outline"}
                    onClick={() => setMood("happy")}
                    className="p-2"
                  >
                    <Smile className="h-6 w-6" />
                  </Button>
                  <Button
                    variant={mood === "neutral" ? "default" : "outline"}
                    onClick={() => setMood("neutral")}
                    className="p-2"
                  >
                    <Meh className="h-6 w-6" />
                  </Button>
                  <Button
                    variant={mood === "sad" ? "default" : "outline"}
                    onClick={() => setMood("sad")}
                    className="p-2"
                  >
                    <Frown className="h-6 w-6" />
                  </Button>
                </div>
                <Textarea
                  placeholder="Tell us what you think..."
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button onClick={handleFeedbackSubmit} className="w-full">
                  Submit Feedback
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};