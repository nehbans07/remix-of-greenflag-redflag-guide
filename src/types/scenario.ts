export interface Character {
  name: string;
  avatar: string;
}

export interface Message {
  speaker: string;
  text: string;
}

export interface Scenario {
  id: string;
  title: string;
  characters: Character[];
  messages: Message[];
  isGreenFlag: boolean;
  explanation: string;
  truthToKeep: string;
  reflection: string;
}

export interface UserChoice {
  scenarioId: string;
  userChoice: 'green' | 'red';
  isCorrect: boolean;
}