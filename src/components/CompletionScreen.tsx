import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserChoice } from "@/types/scenario";

interface CompletionScreenProps {
  choices: UserChoice[];
  onRestart: () => void;
  onReviewWrong: () => void;
  onBackToScenarios: () => void;
}

export const CompletionScreen = ({ choices, onRestart, onReviewWrong, onBackToScenarios }: CompletionScreenProps) => {
  const correctAnswers = choices.filter(choice => choice.isCorrect).length;
  const wrongAnswers = choices.filter(choice => !choice.isCorrect);
  const totalQuestions = choices.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  const getScoreMessage = () => {
    if (percentage >= 80) return "Amazing! You're a green flag expert! 🌟";
    if (percentage >= 60) return "Great job! You're getting good at spotting flags! 👏";
    if (percentage >= 40) return "Good start! Keep learning about healthy relationships! 💪";
    return "Every step counts! Keep practicing to build healthier relationships! 🌱";
  };

  const getScoreEmoji = () => {
    if (percentage >= 80) return "🏆";
    if (percentage >= 60) return "🎉";
    if (percentage >= 40) return "👍";
    return "🌱";
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-card/95 backdrop-blur-sm shadow-soft border-0 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-primary text-white p-6 text-center">
            <div className="text-4xl mb-2">{getScoreEmoji()}</div>
            <div className="text-xl font-bold mb-2">
              Well Done!
            </div>
            <div className="text-white/90 text-sm">
              You completed all scenarios!
            </div>
          </div>

          {/* Score */}
          <div className="p-6 text-center">
            <div className="text-5xl font-bold text-primary mb-2">
              {correctAnswers}/{totalQuestions}
            </div>
            <div className="text-lg text-muted-foreground mb-4">
              {percentage}% correct
            </div>
            <div className="text-base font-medium text-center leading-relaxed mb-6">
              {getScoreMessage()}
            </div>

            {/* Key Insights */}
            <div className="bg-primary-light/10 rounded-xl p-4 border border-primary-light/20 mb-6">
              <div className="text-sm font-semibold mb-2">💡 Key Insights:</div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• Healthy relationships respect boundaries</div>
                <div>• Trust is built through consistency, not control</div>
                <div>• Communication should be open and honest</div>
                <div>• Love shouldn't feel like walking on eggshells</div>
              </div>
            </div>

            <div className="space-y-3">
              {wrongAnswers.length > 0 && (
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={onReviewWrong}
                >
                  Review Wrong Answers ({wrongAnswers.length}) 📚
                </Button>
              )}
              
              <Button 
                variant="hero" 
                className="w-full"
                onClick={onBackToScenarios}
              >
                Choose More Scenarios 📝
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={onRestart}
              >
                Start Over 🔄
              </Button>
              
              <div className="text-xs text-muted-foreground text-center">
                Share this app with friends to help them build healthier relationships too! 💚
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};