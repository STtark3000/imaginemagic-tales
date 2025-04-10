
import { Story } from '@/types/story';

// Local storage service for saving stories
export const StorageService = {
  saveStory: (story: Story): void => {
    try {
      // Get existing stories
      const existingStoriesJSON = localStorage.getItem('userStories');
      const existingStories: Story[] = existingStoriesJSON ? JSON.parse(existingStoriesJSON) : [];
      
      // Add new story
      const updatedStories = [story, ...existingStories];
      
      // Save to local storage
      localStorage.setItem('userStories', JSON.stringify(updatedStories));
    } catch (error) {
      console.error('Error saving story to local storage:', error);
    }
  },
  
  getStories: (): Story[] => {
    try {
      const storiesJSON = localStorage.getItem('userStories');
      return storiesJSON ? JSON.parse(storiesJSON) : [];
    } catch (error) {
      console.error('Error retrieving stories from local storage:', error);
      return [];
    }
  },
  
  getStoryById: (id: string): Story | null => {
    try {
      const stories = StorageService.getStories();
      return stories.find(story => story.id === id) || null;
    } catch (error) {
      console.error('Error retrieving story by ID:', error);
      return null;
    }
  },
  
  deleteStory: (id: string): void => {
    try {
      const stories = StorageService.getStories();
      const updatedStories = stories.filter(story => story.id !== id);
      localStorage.setItem('userStories', JSON.stringify(updatedStories));
    } catch (error) {
      console.error('Error deleting story:', error);
    }
  }
};
