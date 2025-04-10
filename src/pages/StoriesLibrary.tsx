
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpenText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import StoryCard from '@/components/StoryCard';
import { StorageService } from '@/lib/storage';

const StoriesLibrary = () => {
  const stories = StorageService.getStories();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <PageTitle 
            title="Your Story Library" 
            subtitle="All your custom stories in one magical place"
          />
          
          {stories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <Link to={`/story/${story.id}`} key={story.id}>
                  <StoryCard
                    title={story.title}
                    character={story.options.character}
                    theme={story.options.theme}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="bg-muted/50 inline-block p-6 rounded-full mb-6">
                <BookOpenText size={48} className="text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Your Library is Empty</h2>
              <p className="text-muted-foreground mb-8">Create your first personalized story to start building your collection.</p>
              <Button asChild className="bg-gradient-to-r from-storybook-purple to-storybook-blue">
                <Link to="/create">Create Your First Story</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StoriesLibrary;
