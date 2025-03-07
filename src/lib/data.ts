import { Course } from './types';

export const courses: Course[] = [
  {
    id: "1",
    title: "Professional Web Development Bootcamp",
    description: "Master modern web development with this comprehensive bootcamp",
    price: 199.99,
    category: "Development",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    instructor: {
      name: "Author",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "Senior Web Developer with 10+ years of experience",
    },
    content: {
      overview: "Learn web development from scratch with our comprehensive curriculum",
      description: "This course is designed to take you from a complete beginner to a confident web developer. Through hands-on projects and real-world examples, you'll master the skills needed to build modern web applications.",
      whatYouWillLearn: [
        "Build responsive websites using HTML5, CSS3, and JavaScript",
        "Master modern JavaScript including ES6+ features",
        "Learn React and build single-page applications",
        "Understand backend development with Node.js",
        "Work with databases and APIs",
        "Deploy applications to production"
      ],
      prerequisites: [
        "Basic computer knowledge",
        "Understanding of how the internet works",
        "No prior coding experience required"
      ],
      topics: [
        {
          title: "Frontend Development Fundamentals",
          subtopics: [
            "HTML5 Structure and Semantics",
            "CSS3 Styling and Layouts",
            "JavaScript Basics and DOM Manipulation",
            "Responsive Design Principles"
          ]
        },
        {
          title: "Advanced JavaScript",
          subtopics: [
            "ES6+ Features",
            "Asynchronous Programming",
            "Error Handling",
            "Modern JavaScript Practices"
          ]
        },
        {
          title: "React Development",
          subtopics: [
            "React Fundamentals",
            "State Management",
            "Hooks and Custom Hooks",
            "Performance Optimization"
          ]
        }
      ],
      chapters: [
        {
          id: "c1",
          title: "Introduction to HTML & CSS",
          duration: "45:00",
          videoUrl: "https://example.com/video1",
          pdfUrl: "https://example.com/notes1",
          isLocked: true,
        },
        {
          id: "c2",
          title: "JavaScript Fundamentals",
          duration: "1:30:00",
          videoUrl: "https://example.com/video2",
          pdfUrl: "https://example.com/notes2",
          isLocked: true,
        },
      ],
    },
    features: [
      "24/7 Support",
      "Lifetime Access",
      "Project-based Learning",
      "Industry-standard Tools",
    ],
    enrolled: 1500,
    rating: 4.8,
  },
  {
    id: "2",
    title: "Data Science Essentials",
    description: "Start your journey in data science and machine learning",
    price: 299.99,
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    instructor: {
      name: "Author",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "Data Scientist at Tech Corp, PhD in Machine Learning",
    },
    content: {
      overview: "Comprehensive introduction to data science and machine learning",
      description: "Master data science fundamentals and advanced machine learning concepts through practical examples and real-world projects.",
      whatYouWillLearn: [
        "Python programming for data science",
        "Statistical analysis and visualization",
        "Machine learning algorithms",
        "Deep learning foundations",
        "Data preprocessing techniques",
        "Model deployment"
      ],
      prerequisites: [
        "Basic programming knowledge",
        "Understanding of mathematics",
        "Familiarity with statistics"
      ],
      topics: [
        {
          title: "Data Science Fundamentals",
          subtopics: [
            "Python for Data Science",
            "Data Manipulation with Pandas",
            "Data Visualization",
            "Statistical Analysis"
          ]
        },
        {
          title: "Machine Learning",
          subtopics: [
            "Supervised Learning",
            "Unsupervised Learning",
            "Model Evaluation",
            "Feature Engineering"
          ]
        }
      ],
      chapters: [
        {
          id: "c1",
          title: "Python for Data Science",
          duration: "1:15:00",
          videoUrl: "https://example.com/video3",
          pdfUrl: "https://example.com/notes3",
          isLocked: true,
        },
        {
          id: "c2",
          title: "Introduction to Machine Learning",
          duration: "2:00:00",
          videoUrl: "https://example.com/video4",
          pdfUrl: "https://example.com/notes4",
          isLocked: true,
        },
      ],
    },
    features: [
      "Real-world Projects",
      "Certificate of Completion",
      "Industry Expert Instruction",
      "Career Guidance",
    ],
    enrolled: 2200,
    rating: 4.9,
  },
];

export const categories = [
  "All",
  "Development",
  "Data Science",
  "Business",
  "Design",
  "Marketing",
];

export const navigationLinks = [
  { title: "Home", path: "/" },
  { title: "Courses", path: "/courses" },
  { title: "About Us", path: "/about" },
  { title: "Contact", path: "/contact" }
];

export const footerLinks = {
  company: [
    { title: "About Us", path: "/about" },
    { title: "Careers", path: "/careers" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" }
  ],
  resources: [
    { title: "Documentation", path: "/docs" },
    { title: "Help Center", path: "/help" },
    { title: "Community", path: "/community" },
    { title: "Tutorials", path: "/tutorials" }
  ],
  legal: [
    { title: "Privacy Policy", path: "/privacy" },
    { title: "Terms of Service", path: "/terms" },
    { title: "Cookie Policy", path: "/cookies" }
  ]
};
