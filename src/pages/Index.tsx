import { LandingPage } from "@/components/LandingPage";
import { ScenarioCard } from "@/components/ScenarioCard";
import { FeedbackCard } from "@/components/FeedbackCard";
import { CompletionScreen } from "@/components/CompletionScreen";
import { ScenarioListPage } from "@/components/ScenarioListPage";
import { ReviewWrongAnswers } from "@/components/ReviewWrongAnswers";
import { useApp } from "@/hooks/useApp";

const Index = () => {
  const {
    currentState,
    currentScenario,
    currentScenarioIndex,
    totalScenarios,
    userChoices,
    currentChoice,
    startApp,
    startPlaying,
    goToScenarios,
    goToReview,
    makeChoice,
    nextScenario,
    restartApp,
    completePractice
  } = useApp();

  if (currentState === 'landing') {
    return <LandingPage onStart={startApp} />;
  }

  if (currentState === 'scenarios') {
    return (
      <ScenarioListPage 
        onSelectScenario={startPlaying}
        onBack={() => {
          if (userChoices.length > 0) {
            completePractice();
          } else {
            restartApp();
          }
        }}
        userChoices={userChoices}
      />
    );
  }

  if (currentState === 'completed') {
    return (
      <CompletionScreen 
        choices={userChoices} 
        onRestart={restartApp}
        onReviewWrong={goToReview}
        onBackToScenarios={goToScenarios}
      />
    );
  }

  if (currentState === 'review') {
    return (
      <ReviewWrongAnswers
        userChoices={userChoices}
        onBack={completePractice}
        onRetryScenario={startPlaying}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero flex flex-col items-center justify-center p-4">
      <div className="flex-1 flex items-center justify-center">
        {currentState === 'playing' && (
          <ScenarioCard 
            scenario={currentScenario}
            onChoice={makeChoice}
            onBack={goToScenarios}
          />
        )}
        
        {currentState === 'feedback' && currentChoice && (
          <FeedbackCard
            scenario={currentScenario}
            userChoice={currentChoice.userChoice}
            isCorrect={currentChoice.isCorrect}
            onNext={nextScenario}
            onBack={goToScenarios}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
