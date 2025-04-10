
export interface StoryOptions {
  childName: string;
  age: string;
  character: string;
  theme: string;
  learningGoal: string;
}

export interface StoryPage {
  text: string;
  illustration: string;
}

export interface Story {
  id: string;
  title: string;
  options: StoryOptions;
  createdAt: string;
  pages: StoryPage[];
}
