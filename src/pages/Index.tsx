
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { BookOpenText, Sparkles, Wand2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCard from '@/components/StoryCard';
import { StorageService } from '@/lib/storage';
import { motion } from 'framer-motion';

const Index = () => {
  const recentStories = StorageService.getStories().slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-6">
          <div className="absolute inset-0 bg-gradient-to-br from-storybook-purple/20 to-storybook-blue/20 -z-10" />
          
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-storybook-purple to-storybook-blue">
                  Personalized
                </span> Storybooks for Kids
              </h1>
              
              <p className="text-xl mb-8 text-muted-foreground">
                Create magical, custom stories featuring your child's name, favorite animals, and tailored learning goals.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-storybook-purple to-storybook-blue hover:opacity-90 transition-opacity">
                  <Link to="/create">
                    <Wand2 className="mr-2" size={18} />
                    Create Your Story
                  </Link>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="rounded-full border-2 border-storybook-purple/30">
                  <Link to="/stories">
                    <BookOpenText className="mr-2" size={18} />
                    See Examples
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative w-full h-[400px] bg-gradient-to-br from-storybook-yellow/20 to-storybook-pink/20 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpenText size={120} className="text-white/10" />
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-6 flex flex-col justify-center items-center text-center">
                  <Sparkles size={32} className="text-storybook-yellow mb-4 animate-bounce-gentle" />
                  <h3 className="text-2xl font-bold mb-2">Imagination Unleashed</h3>
                  <p className="text-muted-foreground">Your child becomes the hero of their own learning adventure!</p>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute top-10 right-10 text-5xl animate-float">🦄</div>
              <div className="absolute bottom-10 left-10 text-5xl animate-float" style={{ animationDelay: '1s' }}>🐉</div>
              <div className="absolute top-1/2 right-20 text-4xl animate-float" style={{ animationDelay: '2s' }}>🦊</div>
            </motion.div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 px-6 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-muted-foreground">Create personalized stories in just three simple steps</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-storybook-purple/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-storybook-purple">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Customize</h3>
                <p className="text-muted-foreground">Enter your child's name, age, favorite animal, and learning goals.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-storybook-blue/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-storybook-blue">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Generate</h3>
                <p className="text-muted-foreground">Our AI creates a unique, engaging story tailored to your selections.</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 bg-storybook-pink/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-storybook-pink">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Enjoy</h3>
                <p className="text-muted-foreground">Read the story with your child and save it to revisit anytime.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recent Stories Section - only show if there are stories */}
        {recentStories.length > 0 && (
          <section className="py-16 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold">Your Recent Stories</h2>
                <Button asChild variant="ghost" className="text-storybook-purple">
                  <Link to="/stories">View All</Link>
                </Button>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {recentStories.map((story) => (
                  <StoryCard
                    key={story.id}
                    title={story.title}
                    character={story.options.character}
                    theme={story.options.theme}
                    onClick={() => window.location.href = `/story/${story.id}`}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
