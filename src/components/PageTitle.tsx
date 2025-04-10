
import React from 'react';
import { Sparkles } from 'lucide-react';

type PageTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h1 className="text-4xl md:text-5xl font-bold flex items-center gap-2">
        {title}
        <Sparkles className="text-storybook-yellow" size={24} />
      </h1>
      {subtitle && (
        <p className="mt-2 text-xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
};

export default PageTitle;
