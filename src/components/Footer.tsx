
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 mt-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          Made with <Heart size={16} className="text-storybook-pink fill-storybook-pink" /> for young imaginations everywhere
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} ImagineMagic Tales. All stories are unique and personalized.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
