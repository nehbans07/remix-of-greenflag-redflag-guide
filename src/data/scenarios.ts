import { Scenario } from "@/types/scenario";

// Character Images
import priyaImg from "@/assets/characters/priya.jpg";
import kabirImg from "@/assets/characters/kabir.jpg";
import raniImg from "@/assets/characters/rani.jpg";
import meenaImg from "@/assets/characters/meena.jpg";
import arjunImg from "@/assets/characters/arjun.jpg";
import diyaImg from "@/assets/characters/diya.jpg";
import amanImg from "@/assets/characters/aman.jpg";
import reemaImg from "@/assets/characters/reema.jpg";
import tinaImg from "@/assets/characters/tina.jpg";
import raviImg from "@/assets/characters/ravi.jpg";
import varunImg from "@/assets/characters/varun.jpg";
import nehaImg from "@/assets/characters/neha.jpg";
import alokImg from "@/assets/characters/alok.jpg";
import rheaImg from "@/assets/characters/rhea.jpg";
import ishaanImg from "@/assets/characters/ishaan.jpg";
import zoyaImg from "@/assets/characters/zoya.jpg";
import tanyaImg from "@/assets/characters/tanya.jpg";
import sahilImg from "@/assets/characters/sahil.jpg";
import riyaImg from "@/assets/characters/riya.jpg";
import kunalImg from "@/assets/characters/kunal.jpg";

export const scenarios: Scenario[] = [
  {
    id: "dress-code-drama",
    title: "Dress Code Drama",
    characters: [
      { name: "Priya", avatar: priyaImg },
      { name: "Kabir", avatar: kabirImg }
    ],
    messages: [
      {
        speaker: "Kabir",
        text: "Hey Priya, can I say something honestly? I feel a little uncomfortable when people stare. I know it's my own insecurity."
      },
      {
        speaker: "Priya", 
        text: "Thanks for telling me. I feel confident in what I wear, but I'm glad we can talk about this."
      },
      {
        speaker: "Kabir",
        text: "I trust you — just working through my feelings."
      }
    ],
    isGreenFlag: true,
    explanation: "It's okay to feel insecure — what matters is how you communicate it, with respect.",
    truthToKeep: "You can be vulnerable without being controlling.",
    reflection: "Have you ever shared something uncomfortable without making it the other person's fault?"
  },
  {
    id: "secret-sharing",
    title: "Secret Sharing",
    characters: [
      { name: "Rani", avatar: raniImg },
      { name: "Meena", avatar: meenaImg }
    ],
    messages: [
      {
        speaker: "Rani",
        text: "You won't believe what Priya told me. Full gossip!"
      },
      {
        speaker: "Meena",
        text: "Wait, didn't she say that in confidence?"
      },
      {
        speaker: "Rani",
        text: "Yeah, but you're my bestie. It's fine!"
      }
    ],
    isGreenFlag: false,
    explanation: "Sharing secrets without consent breaks trust.",
    truthToKeep: "Being close to someone doesn't mean breaking others' trust.",
    reflection: "What does it take to build broken trust?"
  },
  {
    id: "love-or-isolation",
    title: "Love or Isolation?",
    characters: [
      { name: "Arjun", avatar: arjunImg },
      { name: "Diya", avatar: diyaImg }
    ],
    messages: [
      {
        speaker: "Diya",
        text: "I'm going to the music fest with my friends!"
      },
      {
        speaker: "Arjun",
        text: "Why not stay in with me? They're a bad influence anyway."
      },
      {
        speaker: "Diya",
        text: "But I haven't seen them in weeks."
      },
      {
        speaker: "Arjun",
        text: "I just want our time."
      }
    ],
    isGreenFlag: false,
    explanation: "Isolation is disguised here as affection.",
    truthToKeep: "Love gives space — not cages.",
    reflection: "What are the other healthy ways of asking for your partner's time in a relationship?"
  },
  {
    id: "private-stalker",
    title: "Private Stalker",
    characters: [
      { name: "Aman", avatar: amanImg },
      { name: "Reema", avatar: reemaImg }
    ],
    messages: [
      {
        speaker: "Aman",
        text: "Who were you texting last night?"
      },
      {
        speaker: "Reema",
        text: "Just an old classmate."
      },
      {
        speaker: "Aman",
        text: "Show me your phone. If you've got nothing to hide, prove it."
      }
    ],
    isGreenFlag: false,
    explanation: "Real love shouldn't require surveillance. It is built heavily on mutual trust.",
    truthToKeep: "Trust is not the same as control.",
    reflection: "What practices can both partners adopt to build trust and privacy without feeling jealous or over possessive?"
  },
  {
    id: "fast-forward-intensity",
    title: "Fast Forward Intensity", 
    characters: [
      { name: "Tina", avatar: tinaImg },
      { name: "Ravi", avatar: raviImg }
    ],
    messages: [
      {
        speaker: "Ravi",
        text: "I know we just met but I've never felt this way. I love you."
      },
      {
        speaker: "Tina",
        text: "It's been 3 days..."
      },
      {
        speaker: "Ravi",
        text: "Time doesn't matter when it's real."
      }
    ],
    isGreenFlag: false,
    explanation: "Intense declarations early on can signal manipulation.",
    truthToKeep: "Healthy love takes time, not pressure.",
    reflection: "How can taking things slow be seen as a healthy sign in a relationship and what does it mean for both of the partners?"
  },
  {
    id: "good-vibes-support",
    title: "Good Vibes Only?",
    characters: [
      { name: "Varun", avatar: varunImg },
      { name: "Neha", avatar: nehaImg }
    ],
    messages: [
      {
        speaker: "Neha",
        text: "I've been feeling really low lately."
      },
      {
        speaker: "Varun",
        text: "I'm really sorry to hear that. Do you want to talk about it?"
      },
      {
        speaker: "Neha",
        text: "Thanks... I'm trying."
      },
      {
        speaker: "Varun",
        text: "Take your time. I'm here if you need someone."
      }
    ],
    isGreenFlag: true,
    explanation: "Being too positive all the time can feel fake. It's super important to give space and support when someone is feeling low.",
    truthToKeep: "Support means holding space for all feelings — not just the shiny ones.",
    reflection: "What practices can help us hold spaces for our friends and partner for all their emotions meanwhile preserving our space and mental energy too?"
  },
  {
    id: "jokes-or-jabs",
    title: "Jokes or Jabs?",
    characters: [
      { name: "Alok", avatar: alokImg },
      { name: "Rhea", avatar: rheaImg }
    ],
    messages: [
      {
        speaker: "Alok",
        text: "Haha, you're so slow. Must be your tiny brain."
      },
      {
        speaker: "Rhea",
        text: "That hurts."
      },
      {
        speaker: "Alok",
        text: "Relax! Can't you take a joke?"
      }
    ],
    isGreenFlag: false,
    explanation: "Mocking disguised as jokes erodes self-worth.",
    truthToKeep: "Humor should never humiliate.",
    reflection: "How to draw boundaries in friendships/relationships to prioritize our self worth?"
  },
  {
    id: "privacy-please",
    title: "Privacy Please",
    characters: [
      { name: "Ishaan", avatar: ishaanImg },
      { name: "Zoya", avatar: zoyaImg }
    ],
    messages: [
      {
        speaker: "Ishaan",
        text: "Hey, you always look cute. Send me a selfie?"
      },
      {
        speaker: "Zoya",
        text: "I don't feel like it right now."
      },
      {
        speaker: "Ishaan",
        text: "All good. Just chatting with you is enough :)"
      }
    ],
    isGreenFlag: true,
    explanation: "Respecting each others' boundaries builds emotional safety in relationships.",
    truthToKeep: "Boundaries ≠ Rejection.",
    reflection: "If someone really likes you, should they pressure you to share something you're not comfortable with? Why or why not?"
  },
  {
    id: "all-my-exes-were-crazy",
    title: "All My Exes Were Crazy",
    characters: [
      { name: "Tanya", avatar: tanyaImg },
      { name: "Sahil", avatar: sahilImg }
    ],
    messages: [
      {
        speaker: "Sahil",
        text: "You're different. All my exes were toxic and manipulative."
      },
      {
        speaker: "Tanya",
        text: "Why do you think that happened?"
      },
      {
        speaker: "Sahil",
        text: "Because I give too much, and they couldn't handle me."
      }
    ],
    isGreenFlag: false,
    explanation: "Blaming all exes with no self-reflection? 🚩",
    truthToKeep: "Watch how they talk about their past — it might be your future.",
    reflection: "How do you tell the difference between someone who's hurt and someone who never takes responsibility?"
  },
  {
    id: "i-dont-do-feelings",
    title: "I Don't Do Feelings",
    characters: [
      { name: "Riya", avatar: riyaImg },
      { name: "Kunal", avatar: kunalImg }
    ],
    messages: [
      {
        speaker: "Kunal",
        text: "You know I'm not good with emotions. Can't we just chill and not overthink?"
      },
      {
        speaker: "Riya",
        text: "But I'm just sharing how I felt when you cancelled again."
      },
      {
        speaker: "Kunal",
        text: "Yeah, but talking like this ruins the vibe."
      }
    ],
    isGreenFlag: false,
    explanation: "Avoiding emotional conversations is a classic sign of emotional unavailability. 🚩",
    truthToKeep: "If someone can't hold space for your feelings now, they won't suddenly learn it later.",
    reflection: "What does emotional safety mean to you in a relationship — and what makes it hard to create?"
  }
];