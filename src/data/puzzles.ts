export interface Puzzle {
  question: string;
  answer: string;
  chibi: string;
  hint?: string;
}

export const puzzles: Puzzle[] = [
  {
    question: "I'm small, soft, and always with you. Protecting your favorite things… what am I?",
    answer: "phone case",
    chibi: "slide7.png",
    hint: "It keeps your phone safe and cozy! 📱"
  }
];
