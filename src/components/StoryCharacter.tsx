
import React from 'react';

type StoryCharacterProps = {
  character: string;
  className?: string;
};

const CHARACTERS = {
  "Dragon": "🐉",
  "Unicorn": "🦄",
  "Lion": "🦁",
  "Elephant": "🐘",
  "Dolphin": "🐬",
  "Rabbit": "🐰",
  "Wolf": "🐺",
  "Owl": "🦉",
  "Fox": "🦊",
  "Butterfly": "🦋",
  "Tiger": "🐯",
  "Bear": "🐻",
};

const StoryCharacter: React.FC<StoryCharacterProps> = ({ character, className }) => {
  const emoji = CHARACTERS[character as keyof typeof CHARACTERS] || "🦄";
  
  return (
    <div className={`text-6xl ${className}`}>
      {emoji}
    </div>
  );
};

export default StoryCharacter;
