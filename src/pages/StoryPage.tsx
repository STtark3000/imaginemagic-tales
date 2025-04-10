
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Share2, Home, Bookmark, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StoryCharacter from '@/components/StoryCharacter';
import { StorageService } from '@/lib/storage';
import { Story } from '@/types/story';

const StoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [story, setStory] = useState<Story | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundStory = StorageService.getStoryById(id);
      if (foundStory) {
        setStory(foundStory);
      }
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl animate-pulse">Loading your magical story...</p>
      </div>
    );
  }

  if (!story) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Story Not Found</h1>
            <p className="mb-6 text-muted-foreground">The story you're looking for seems to have disappeared into the mist.</p>
            <Button onClick={() => navigate('/')}>
              <Home className="mr-2" size={18} />
              Return Home
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleNext = () => {
    if (currentPage < story.pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleShare = () => {
    // In a real app, this would share the story
    toast.success("Sharing functionality will be available soon!");
  };

  const handleSave = () => {
    // In a real app, this would allow downloading or saving the story
    toast.success("Story saved to your collection!");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this story?")) {
      StorageService.deleteStory(story.id);
      toast.success("Story deleted successfully");
      navigate('/stories');
    }
  };

  const getThemeColor = () => {
    const themeColors = {
      "Space Adventure": "from-storybook-purple to-storybook-blue",
      "Ocean Exploration": "from-storybook-blue to-storybook-green",
      "Enchanted Forest": "from-storybook-green to-storybook-yellow",
      "Desert Journey": "from-storybook-yellow to-storybook-orange",
      "Mountain Quest": "from-storybook-orange to-storybook-pink",
      "Magical Kingdom": "from-storybook-pink to-storybook-purple",
    };
    
    return themeColors[story.options.theme as keyof typeof themeColors] || "from-storybook-purple to-storybook-blue";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-storybook-purple to-storybook-blue mb-2 sm:mb-0">
              {story.title}
            </h1>
            
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={handleSave}>
                <Bookmark size={20} />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleShare}>
                <Share2 size={20} />
              </Button>
              <Button variant="ghost" size="icon" onClick={handleDelete}>
                <Trash2 size={20} />
              </Button>
            </div>
          </div>
          
          <Card className={`relative w-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br ${getThemeColor()} p-8`}>
            <div className="absolute top-4 right-4">
              <StoryCharacter character={story.options.character} className="text-5xl" />
            </div>
            
            <div className="text-white max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-inner">
                <p className="text-xl leading-relaxed">{story.pages[currentPage].text}</p>
              </div>
              
              <div className="mt-8 bg-white/10 backdrop-blur-sm p-4 rounded-xl text-sm italic">
                <p>{story.pages[currentPage].illustration}</p>
              </div>
            </div>
          </Card>
          
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className="border-2 border-storybook-purple/30"
            >
              <ArrowLeft className="mr-2" size={18} />
              Previous Page
            </Button>
            
            <div className="text-sm text-muted-foreground self-center">
              Page {currentPage + 1} of {story.pages.length}
            </div>
            
            <Button
              onClick={handleNext}
              disabled={currentPage === story.pages.length - 1}
              className="bg-gradient-to-r from-storybook-purple to-storybook-blue"
            >
              Next Page
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StoryPage;
