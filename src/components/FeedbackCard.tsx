import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scenario } from "@/types/scenario";
import { ArrowLeft } from "lucide-react";

interface FeedbackCardProps {
  scenario: Scenario;
  userChoice: 'green' | 'red';
  isCorrect: boolean;
  onNext: () => void;
  onBack?: () => void;
}

export const FeedbackCard = ({ scenario, userChoice, isCorrect, onNext, onBack }: FeedbackCardProps) => {
  const isGreenFlag = scenario.isGreenFlag;
  
  return (
    <div className="w-full max-w-md">
      <Card className="bg-card/95 backdrop-blur-sm shadow-card border-0 overflow-hidden">
        {/* Result Header */}
        <div className={`text-white ${
          isCorrect 
            ? (isGreenFlag ? 'bg-gradient-success' : 'bg-gradient-destructive')
            : 'bg-gradient-to-r from-orange-400 to-red-400'
        }`}>
          {onBack && (
            <div className="p-4 pb-0">
              <Button
                variant="ghost"
                size="icon"
                onClick={onBack}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </div>
          )}
          <div className={`text-center ${onBack ? 'pb-6 px-6' : 'p-6'}`}>
            <div className="text-3xl mb-2">
              {isCorrect ? '✅' : '❌'}
            </div>
            <div className="text-lg font-bold mb-1">
              {isCorrect ? 'You matched it right!' : 'Hmm... not quite.'}
            </div>
            <div className="text-white/90">
              This is a {isGreenFlag ? 'green' : 'red'} flag.
            </div>
          </div>
        </div>

        {/* Explanation */}
        <div className="p-6 space-y-4">
          <div className="text-sm leading-relaxed text-center">
            {scenario.explanation}
          </div>

          {/* Truth to Keep */}
          <div className="bg-primary-light/10 rounded-xl p-4 border border-primary-light/20">
            <div className="flex items-start gap-2">
              <span className="text-lg">💡</span>
              <div>
                <div className="font-semibold text-sm mb-1">Truth to Keep:</div>
                <div className="text-sm text-muted-foreground italic">
                  "{scenario.truthToKeep}"
                </div>
              </div>
            </div>
          </div>

          {/* Reflection */}
          <div className="bg-secondary-light/10 rounded-xl p-4 border border-secondary-light/20">
            <div className="flex items-start gap-2">
              <span className="text-lg">🤔</span>
              <div>
                <div className="font-semibold text-sm mb-1">Reflection:</div>
                <div className="text-sm text-muted-foreground">
                  {scenario.reflection}
                </div>
              </div>
            </div>
          </div>

          <Button 
            variant="hero" 
            className="w-full mt-6"
            onClick={onNext}
          >
            Back to Scenarios 📝
          </Button>
        </div>
      </Card>
    </div>
  );
};
