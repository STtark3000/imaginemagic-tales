
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpenText } from 'lucide-react';
import StoryCharacter from './StoryCharacter';

type StoryCardProps = {
  title: string;
  character: string;
  theme: string;
  onClick?: () => void;
};

const StoryCard: React.FC<StoryCardProps> = ({ title, character, theme, onClick }) => {
  const getThemeColor = () => {
    const themeColors = {
      "Space Adventure": "from-storybook-purple to-storybook-blue",
      "Ocean Exploration": "from-storybook-blue to-storybook-green",
      "Enchanted Forest": "from-storybook-green to-storybook-yellow",
      "Desert Journey": "from-storybook-yellow to-storybook-orange",
      "Mountain Quest": "from-storybook-orange to-storybook-pink",
      "Magical Kingdom": "from-storybook-pink to-storybook-purple",
    };
    
    return themeColors[theme as keyof typeof themeColors] || "from-storybook-purple to-storybook-blue";
  };
  
  return (
    <motion.div 
      className={`w-full h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer page-curl
                bg-gradient-to-br ${getThemeColor()} p-6 text-white relative`}
      whileHover={{ scale: 1.03, rotate: 1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      onClick={onClick}
    >
      <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm p-1.5 rounded-full">
        <BookOpenText size={20} />
      </div>
      
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-80">{theme}</p>
        </div>
        
        <div className="flex justify-end">
          <StoryCharacter character={character} className="animate-float" />
        </div>
      </div>
    </motion.div>
  );
};

export default StoryCard;
