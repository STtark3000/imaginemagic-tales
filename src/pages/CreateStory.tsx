
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, BookOpenText } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageTitle from '@/components/PageTitle';
import { StoryOptions } from '@/types/story';
import { generateStory } from '@/lib/storyGenerator';
import { StorageService } from '@/lib/storage';

const CreateStory = () => {
  const navigate = useNavigate();
  const [isGenerating, setIsGenerating] = useState(false);
  const [storyOptions, setStoryOptions] = useState<StoryOptions>({
    childName: '',
    age: '5-7',
    character: 'Unicorn',
    theme: 'Enchanted Forest',
    learningGoal: 'Kindness',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStoryOptions(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!storyOptions.childName.trim()) {
      toast.error("Please enter your child's name");
      return;
    }
    
    setIsGenerating(true);
    
    // Simulate AI generation with a delay
    setTimeout(() => {
      try {
        const generatedStory = generateStory(storyOptions);
        StorageService.saveStory(generatedStory);
        toast.success("Your story has been created!");
        navigate(`/story/${generatedStory.id}`);
      } catch (error) {
        console.error("Error generating story:", error);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsGenerating(false);
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-10 px-6">
        <div className="max-w-3xl mx-auto">
          <PageTitle 
            title="Create Your Story" 
            subtitle="Customize every detail to make a unique storybook adventure"
          />
          
          <Card className="shadow-lg border-2 border-storybook-purple/20">
            <CardHeader className="bg-gradient-to-r from-storybook-purple/10 to-storybook-blue/10">
              <CardTitle className="flex items-center gap-2">
                <BookOpenText className="text-storybook-purple" />
                Story Details
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="story-input">
                  <label htmlFor="childName">Child's Name</label>
                  <input
                    id="childName"
                    name="childName"
                    type="text"
                    value={storyOptions.childName}
                    onChange={handleInputChange}
                    placeholder="Enter child's name"
                    maxLength={20}
                  />
                </div>
                
                <div className="story-input">
                  <label htmlFor="age">Age Range</label>
                  <select
                    id="age"
                    name="age"
                    value={storyOptions.age}
                    onChange={handleInputChange}
                  >
                    <option value="3-4">3-4 years</option>
                    <option value="5-7">5-7 years</option>
                    <option value="8-10">8-10 years</option>
                    <option value="11-12">11-12 years</option>
                  </select>
                </div>
                
                <div className="story-input">
                  <label htmlFor="character">Main Character</label>
                  <select
                    id="character"
                    name="character"
                    value={storyOptions.character}
                    onChange={handleInputChange}
                  >
                    <option value="Dragon">Dragon</option>
                    <option value="Unicorn">Unicorn</option>
                    <option value="Lion">Lion</option>
                    <option value="Elephant">Elephant</option>
                    <option value="Dolphin">Dolphin</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Wolf">Wolf</option>
                    <option value="Owl">Owl</option>
                    <option value="Fox">Fox</option>
                    <option value="Butterfly">Butterfly</option>
                    <option value="Tiger">Tiger</option>
                    <option value="Bear">Bear</option>
                  </select>
                </div>
                
                <div className="story-input">
                  <label htmlFor="theme">Story Theme</label>
                  <select
                    id="theme"
                    name="theme"
                    value={storyOptions.theme}
                    onChange={handleInputChange}
                  >
                    <option value="Space Adventure">Space Adventure</option>
                    <option value="Ocean Exploration">Ocean Exploration</option>
                    <option value="Enchanted Forest">Enchanted Forest</option>
                    <option value="Desert Journey">Desert Journey</option>
                    <option value="Mountain Quest">Mountain Quest</option>
                    <option value="Magical Kingdom">Magical Kingdom</option>
                  </select>
                </div>
                
                <div className="story-input">
                  <label htmlFor="learningGoal">Learning Goal</label>
                  <select
                    id="learningGoal"
                    name="learningGoal"
                    value={storyOptions.learningGoal}
                    onChange={handleInputChange}
                  >
                    <option value="Vocabulary">Vocabulary</option>
                    <option value="Counting">Counting</option>
                    <option value="Kindness">Kindness</option>
                    <option value="Problem Solving">Problem Solving</option>
                    <option value="Friendship">Friendship</option>
                    <option value="Courage">Courage</option>
                  </select>
                </div>
                
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    disabled={isGenerating}
                    className="w-full py-6 rounded-xl bg-gradient-to-r from-storybook-purple to-storybook-blue hover:opacity-90 transition-opacity"
                  >
                    {isGenerating ? (
                      <>
                        <span className="animate-pulse">Creating Your Magic Story...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2" size={18} />
                        Generate Story
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateStory;
