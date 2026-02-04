import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { scenarios } from "@/data/scenarios";
import { ArrowLeft } from "lucide-react";

interface ScenarioListPageProps {
  onSelectScenario: (index: number) => void;
  onBack: () => void;
  userChoices: Array<{ scenarioId: string; isCorrect: boolean }>;
}

export const ScenarioListPage = ({ onSelectScenario, onBack, userChoices }: ScenarioListPageProps) => {
  const getScenarioStatus = (scenarioId: string) => {
    const choice = userChoices.find(c => c.scenarioId === scenarioId);
    if (!choice) return 'not-attempted';
    return choice.isCorrect ? 'correct' : 'incorrect';
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'correct':
        return <Badge className="bg-green-500/20 text-green-700 border-green-500/30">✅ Correct</Badge>;
      case 'incorrect':
        return <Badge className="bg-red-500/20 text-red-700 border-red-500/30">❌ Incorrect</Badge>;
      default:
        return <Badge variant="outline">Not Attempted</Badge>;
    }
  };

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
          <h1 className="text-xl font-bold text-white">Choose a Scenario</h1>
        </div>
        <p className="text-white/80 text-sm">
          Select any scenario to practice. Each scenario is independent!
        </p>
      </div>

      {/* Scenario List */}
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        {scenarios.map((scenario, index) => {
          const status = getScenarioStatus(scenario.id);
          const characterNames = scenario.characters.map(c => c.name).join(' & ');
          
          return (
            <Card 
              key={scenario.id}
              className="bg-card/95 backdrop-blur-sm shadow-soft border-0 cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => onSelectScenario(index)}
            >
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-xs font-medium text-primary">
                        Scenario {index + 1}
                      </div>
                      {getStatusBadge(status)}
                    </div>
                    <h3 className="font-semibold text-base mb-1">{scenario.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{characterNames}</p>
                  </div>
                </div>
                
                {/* Character avatars */}
                <div className="flex -space-x-2">
                  {scenario.characters.slice(0, 2).map((character, idx) => (
                    <img
                      key={idx}
                      src={character.avatar}
                      alt={character.name}
                      className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                    />
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};