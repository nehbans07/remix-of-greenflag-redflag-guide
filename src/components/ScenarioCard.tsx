import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scenario } from "@/types/scenario";
import { ArrowLeft } from "lucide-react";

interface ScenarioCardProps {
  scenario: Scenario;
  onChoice: (choice: 'green' | 'red') => void;
  onBack?: () => void;
}

export const ScenarioCard = ({ scenario, onChoice, onBack }: ScenarioCardProps) => {
  return (
    <div className="w-full max-w-md">
      <Card className="bg-card/95 backdrop-blur-sm shadow-card border-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-secondary text-white">
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
          <div className={`text-center ${onBack ? 'pb-4 px-4' : 'p-4'}`}>
            <h2 className="text-lg font-bold">{scenario.title}</h2>
          </div>
        </div>

        {/* Characters */}
        <div className="p-4 bg-muted/30">
          <div className="flex items-center justify-center gap-6">
            {scenario.characters.map((character, index) => (
              <div key={index} className="flex items-center gap-3">
                <img 
                  src={character.avatar} 
                  alt={`${character.name} profile picture`}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <span className="font-medium text-sm">{character.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Messages */}
        <div className="p-4 space-y-3 min-h-[200px]">
          {scenario.messages.map((message, index) => (
            <div key={index} className="space-y-1">
              <div className="text-sm font-semibold text-primary">
                {message.speaker}:
              </div>
              <div className="bg-muted/50 rounded-lg p-3 text-sm leading-relaxed">
                "{message.text}"
              </div>
            </div>
          ))}
        </div>

        {/* Question */}
        <div className="p-4 text-center border-t border-border/50">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl">🔍</span>
            <span className="font-semibold">What do you think?</span>
          </div>

          <div className="flex gap-3 justify-center">
            <Button 
              variant="red-flag"
              className="flex-1 max-w-[140px]"
              onClick={() => onChoice('red')}
            >
              <span className="text-lg mr-1">✕</span>
              Red Flag
            </Button>
            <Button 
              variant="green-flag"
              className="flex-1 max-w-[140px]"
              onClick={() => onChoice('green')}
            >
              <span className="text-lg mr-1">💚</span>
              Green Flag
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};