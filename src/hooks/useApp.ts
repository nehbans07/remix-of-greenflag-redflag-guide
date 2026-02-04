import { useState } from 'react';
import { scenarios } from '@/data/scenarios';
import { UserChoice } from '@/types/scenario';

type AppState = 'landing' | 'scenarios' | 'playing' | 'feedback' | 'completed' | 'review';

export const useApp = () => {
  const [currentState, setCurrentState] = useState<AppState>('landing');
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [userChoices, setUserChoices] = useState<UserChoice[]>([]);
  const [currentChoice, setCurrentChoice] = useState<'green' | 'red' | null>(null);

  const currentScenario = scenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === scenarios.length - 1;

  const startApp = () => {
    setCurrentState('scenarios');
  };

  const startPlaying = (scenarioIndex?: number) => {
    if (scenarioIndex !== undefined) {
      setCurrentScenarioIndex(scenarioIndex);
    }
    setCurrentState('playing');
  };

  const goToScenarios = () => {
    setCurrentState('scenarios');
  };

  const goToReview = () => {
    setCurrentState('review');
  };

  const makeChoice = (choice: 'green' | 'red') => {
    const isCorrect = (choice === 'green' && currentScenario.isGreenFlag) || 
                     (choice === 'red' && !currentScenario.isGreenFlag);
    
    const userChoice: UserChoice = {
      scenarioId: currentScenario.id,
      userChoice: choice,
      isCorrect
    };

    setUserChoices(prev => [...prev, userChoice]);
    setCurrentChoice(choice);
    setCurrentState('feedback');
  };

  const nextScenario = () => {
    setCurrentChoice(null);
    setCurrentState('scenarios');
  };

  const restartApp = () => {
    setCurrentState('landing');
    setCurrentScenarioIndex(0);
    setUserChoices([]);
    setCurrentChoice(null);
  };

  const completePractice = () => {
    setCurrentState('completed');
  };

  const getCurrentChoice = () => {
    if (!currentChoice) return null;
    const choice = userChoices[userChoices.length - 1];
    return choice;
  };

  return {
    currentState,
    currentScenario,
    currentScenarioIndex,
    totalScenarios: scenarios.length,
    userChoices,
    currentChoice: getCurrentChoice(),
    startApp,
    startPlaying,
    goToScenarios,
    goToReview,
    makeChoice,
    nextScenario,
    restartApp,
    completePractice
  };
};