
import { StoryOptions, Story, StoryPage } from '@/types/story';

// This is a mock function to generate stories - in a real implementation
// this would connect to an AI service
export const generateStory = (options: StoryOptions): Story => {
  const { childName, character, theme, learningGoal } = options;
  
  // Generate a unique ID
  const id = Math.random().toString(36).substring(2, 15);
  
  // Generate a title based on the options
  const titles = {
    "Space Adventure": [`${childName}'s Cosmic Journey`, `${character} in Space`],
    "Ocean Exploration": [`Deep Sea Adventures with ${childName}`, `${character} Under the Sea`],
    "Enchanted Forest": [`${childName}'s Magical Forest`, `The Enchanted ${character}`],
    "Desert Journey": [`${childName}'s Desert Quest`, `${character} in the Sand Dunes`],
    "Mountain Quest": [`${childName}'s Mountain Adventure`, `The ${character} on the Peak`],
    "Magical Kingdom": [`${childName} in the Magic Kingdom`, `The Royal ${character}`],
  };

  const themeOptions = titles[theme as keyof typeof titles] || [`${childName}'s Adventure`, `The ${character}'s Journey`];
  const title = themeOptions[Math.floor(Math.random() * themeOptions.length)];
  
  // Generate some story pages based on the theme
  const storyIntros = {
    "Space Adventure": `Once upon a time, in a galaxy far, far away, there lived a brave explorer named ${childName}. With their trusty friend, a ${character}, they set off on an incredible journey through the stars.`,
    "Ocean Exploration": `Deep beneath the waves of the great blue ocean, ${childName} and their friend, a friendly ${character}, embarked on an underwater adventure like no other.`,
    "Enchanted Forest": `In the heart of the Enchanted Forest, where trees whispered secrets and flowers glowed in the moonlight, lived ${childName} and a magical ${character}.`,
    "Desert Journey": `Across the golden sands of the vast desert, ${childName} and a wise ${character} traveled in search of an ancient oasis said to grant wishes to those pure of heart.`,
    "Mountain Quest": `High up in the misty mountains, where the air was crisp and the views were breathtaking, ${childName} and a nimble ${character} climbed toward a mysterious peak.`,
    "Magical Kingdom": `In a kingdom filled with magic and wonder, ${childName} was invited to the royal castle by none other than the ${character} of the realm.`,
  };
  
  // Add learning elements based on the selected learning goal
  const learningElements = {
    "Vocabulary": "They learned new words like 'magnificent', 'extraordinary', and 'tremendous' along their journey.",
    "Counting": "They counted all the stars they could see: one, two, three, four, five! Each one shining brightly in the night sky.",
    "Kindness": "They helped everyone they met along the way, showing kindness and compassion to all creatures, big and small.",
    "Problem Solving": "When they faced a challenge, they thought carefully and came up with clever solutions together.",
    "Friendship": "They discovered that true friendship meant supporting each other, even when things got tough.",
    "Courage": "They found their courage even when they felt afraid, proving that being brave doesn't mean never feeling fear.",
  };
  
  const storyIntro = storyIntros[theme as keyof typeof storyIntros] || `Once upon a time, ${childName} and their friend, a ${character}, went on an amazing adventure.`;
  const learningElement = learningElements[learningGoal as keyof typeof learningElements] || "They learned many important lessons during their adventure.";
  
  const pages: StoryPage[] = [
    {
      text: storyIntro,
      illustration: `An illustration of ${childName} and a ${character} embarking on a ${theme} adventure.`,
    },
    {
      text: `As they explored this new world, ${childName} and the ${character} faced exciting challenges together. ${learningElement}`,
      illustration: `${childName} and the ${character} exploring the ${theme} environment.`,
    },
    {
      text: `"This is incredible!" exclaimed ${childName}, as they discovered a hidden treasure. The ${character} smiled proudly, knowing they had accomplished something special.`,
      illustration: `${childName} and the ${character} discovering a treasure in the ${theme} setting.`,
    },
    {
      text: `After their amazing adventure, it was time to return home. ${childName} and the ${character} promised to remember the lessons they learned and to have many more adventures together.`,
      illustration: `${childName} and the ${character} heading home after their ${theme} adventure, looking happy and fulfilled.`,
    },
  ];
  
  return {
    id,
    title,
    options,
    createdAt: new Date().toISOString(),
    pages,
  };
};
