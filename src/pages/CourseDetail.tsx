
import { useState } from "react";
import { useParams } from "react-router-dom";
import { courses } from "@/lib/data";
import { Lock, Check, Download, Phone, Video, MonitorSmartphone, Clock, Book } from "lucide-react";

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<"overview" | "content">("overview");

  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-semibold">Course not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Tab Navigation */}
      <div className="border-b border-border/10 bg-secondary/30 sticky top-16 z-40">
        <div className="container">
          <div className="flex gap-8">
            <button
              onClick={() => setActiveTab("overview")}
              className={`py-4 px-2 font-medium relative ${
                activeTab === "overview"
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground"
              }`}
            >
              OVERVIEW
            </button>
            <button
              onClick={() => setActiveTab("content")}
              className={`py-4 px-2 font-medium relative ${
                activeTab === "content"
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground"
              }`}
            >
              CONTENT
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-8">
        {activeTab === "overview" ? (
          <div className="space-y-8 max-w-4xl">
            {/* Course Title & Category */}
            <div>
              <h1 className="text-3xl font-bold mb-2 font-display">{course.title}</h1>
              <span className="text-sm text-muted-foreground">{course.category}</span>
            </div>

            {/* Course Preview Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Course Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold font-display">About This Course</h2>
              <p className="text-muted-foreground leading-relaxed">
                {course.content.description}
              </p>
            </div>

            {/* What You'll Learn */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold font-display">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {course.content.whatYouWillLearn.map((item, index) => (
                  <div key={index} className="flex gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prerequisites */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold font-display">Prerequisites</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {course.content.prerequisites.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-secondary/30 rounded-lg">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium">Lifetime Access</h3>
                  <p className="text-sm text-muted-foreground">Buy once and access whenever you want</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium">Live Classes</h3>
                  <p className="text-sm text-muted-foreground">Interactive video lessons</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium">Offline Download</h3>
                  <p className="text-sm text-muted-foreground">Learn at your convenience</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MonitorSmartphone className="w-5 h-5 text-primary" />
                <div>
                  <h3 className="font-medium">Available on PC</h3>
                  <p className="text-sm text-muted-foreground">Bigger screen, better clarity</p>
                </div>
              </div>
            </div>

            {/* Instructor Info */}
            <div className="border border-border/10 rounded-lg p-6 bg-secondary/30">
              <h2 className="text-xl font-semibold mb-4 font-display">About Course Creator</h2>
              <div className="flex items-start gap-4">
                <img
                  src={course.instructor.avatar}
                  alt={course.instructor.name}
                  className="w-16 h-16 rounded-full border-2 border-primary"
                />
                <div>
                  <h3 className="font-medium text-lg">{course.instructor.name}</h3>
                  <p className="text

-muted-foreground mb-2">{course.instructor.bio}</p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• 100+ Students</p>
                    <p>• 10 Courses</p>
                    <p>• 5 yrs Experience</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buy Now Section */}
            <div className="border border-border/10 rounded-lg p-6 bg-secondary/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-primary font-display">${course.price}</p>
                  <p className="text-sm text-muted-foreground">*Amount is inclusive of taxes</p>
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 max-w-4xl">
            <h2 className="text-2xl font-bold font-display">Course Content</h2>
            
            {course.content.topics.map((topic, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold font-display text-primary">{topic.title}</h3>
                <div className="pl-4 space-y-2">
                  {topic.subtopics.map((subtopic, subIndex) => (
                    <div
                      key={subIndex}
                      className="p-4 rounded-lg border border-border/10 bg-secondary/30"
                    >
                      <p className="font-medium">{subtopic}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
