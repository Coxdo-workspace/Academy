
export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  instructor: {
    name: string;
    avatar: string;
    bio: string;
  };
  content: {
    overview: string;
    description: string;
    whatYouWillLearn: string[];
    prerequisites: string[];
    topics: Topic[];
    chapters: Chapter[];
  };
  features: string[];
  enrolled: number;
  rating: number;
}

export interface Topic {
  title: string;
  subtopics: string[];
}

export interface Chapter {
  id: string;
  title: string;
  duration: string;
  videoUrl?: string;
  pdfUrl?: string;
  isLocked: boolean;
}
