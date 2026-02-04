import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { scenarios } from "@/data/scenarios";
import { ArrowLeft } from "lucide-react";
import { UserChoice } from "@/types/scenario";

interface ReviewWrongAnswersProps {
  userChoices: UserChoice[];
  onBack: () => void;
  onRetryScenario: (scenarioIndex: number) => void;
}

export const ReviewWrongAnswers = ({ userChoices, onBack, onRetryScenario }: ReviewWrongAnswersProps) => {
  const wrongAnswers = userChoices.filter(choice => !choice.isCorrect);
  
  if (wrongAnswers.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
        <Card className="bg-card/95 backdrop-blur-sm shadow-soft border-0 max-w-md w-full p-6 text-center">
          <div className="text-4xl mb-4">🎉</div>
          <h2 className="text-xl font-bold mb-2">Perfect Score!</h2>
          <p className="text-muted-foreground mb-4">
            You got all scenarios correct! No wrong answers to review.
          </p>
          <Button onClick={onBack} variant="hero" className="w-full">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Results
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero p-4">
      {/* Header */}
      <div className="max-w-md mx-auto mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold text-white">Review Wrong Answers</h1>
        </div>
        <p className="text-white/80 text-sm">
          Let's review the scenarios you got wrong and learn from them!
        </p>
      </div>

      {/* Wrong Answers List */}
      <div className="max-w-md mx-auto space-y-4">
        {wrongAnswers.map((wrongChoice) => {
          const scenario = scenarios.find(s => s.id === wrongChoice.scenarioId);
          const scenarioIndex = scenarios.findIndex(s => s.id === wrongChoice.scenarioId);
          
          if (!scenario) return null;

          const characterNames = scenario.characters.map(c => c.name).join(' & ');
          
          return (
            <Card 
              key={wrongChoice.scenarioId}
              className="bg-card/95 backdrop-blur-sm shadow-soft border-0"
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className="bg-red-500/20 text-red-700 border-red-500/30">
                        ❌ Incorrect
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-base mb-1">{scenario.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{characterNames}</p>
                  </div>
                </div>

                {/* Your Answer vs Correct */}
                <div className="bg-muted/50 rounded-lg p-3 mb-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Your choice:</span>
                    <span className="font-medium">
                      {wrongChoice.userChoice === 'green' ? '✅ Green Flag' : '🚩 Red Flag'}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Correct answer:</span>
                    <span className="font-medium text-green-600">
                      {scenario.isGreenFlag ? '✅ Green Flag' : '🚩 Red Flag'}
                    </span>
                  </div>
                </div>

                {/* Quick Explanation */}
                <div className="bg-primary-light/10 rounded-lg p-3 mb-3">
                  <p className="text-sm text-muted-foreground">
                    <strong>Why:</strong> {scenario.explanation}
                  </p>
                </div>

                {/* Retry Button */}
                <Button 
                  onClick={() => onRetryScenario(scenarioIndex)}
                  variant="outline" 
                  className="w-full"
                >
                  Practice This Scenario Again
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};