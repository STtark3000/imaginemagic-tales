
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenText, Sparkles } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-storybook-purple rounded-full p-2 text-white">
          <BookOpenText size={24} className="animate-pulse-gentle" />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-storybook-purple to-storybook-blue bg-clip-text text-transparent">
          ImagineMagic Tales
        </h1>
      </Link>
      <div className="flex items-center gap-3">
        <Link 
          to="/create" 
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-storybook-purple to-storybook-blue text-white shadow-md hover:shadow-lg transition-all duration-300"
        >
          <Sparkles size={18} />
          <span>Create Story</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
