import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import heroImage from "@/assets/hero-illustration.jpg";

interface LandingPageProps {
  onStart: () => void;
}

export const LandingPage = ({ onStart }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-card/95 backdrop-blur-sm shadow-soft border-0 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-primary text-white p-6 text-center">
            <div className="text-2xl font-bold mb-2">
              🚩 Kaun banaega Green Flag
            </div>
            <p className="text-white/90 text-sm">
              Learn to spot red flags & celebrate green flags in relationships! 💚
            </p>
          </div>

          {/* Hero Image */}
          <div className="p-4">
            <img 
              src={heroImage} 
              alt="Diverse group of people having friendly conversations"
              className="w-full h-48 object-cover rounded-xl"
            />
          </div>

          {/* How it works */}
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold text-center mb-4">How it works:</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="text-2xl">💬</div>
                <div>
                  <div className="font-semibold text-base">Read the chat</div>
                  <div className="text-sm text-muted-foreground">See real-life relationship scenarios</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">👈👉</div>
                <div>
                  <div className="font-semibold text-base">Swipe your answer</div>
                  <div className="text-sm text-muted-foreground">Green flag (right) or Red flag (left)</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="text-2xl">💡</div>
                <div>
                  <div className="font-semibold text-base">Learn & reflect</div>
                  <div className="text-sm text-muted-foreground">Get insights on healthy relationships</div>
                </div>
              </div>
            </div>

            <Button 
              variant="hero" 
              className="w-full mt-6" 
              onClick={onStart}
            >
              Start Learning! 🚀
            </Button>

            <div className="text-center text-xs text-muted-foreground mt-4">
              10 scenarios • Build healthier relationships
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};