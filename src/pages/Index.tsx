
import { courses } from "@/lib/data";
import CourseSection from "@/components/courses/CourseSection";
import { Link } from "react-router-dom";

const Index = () => {
  const bestSellers = courses.filter((course) => course.enrolled > 1000);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-[80vh] relative overflow-hidden flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"></div>
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  backgroundColor: 'var(--primary)',
                  borderRadius: '50%',
                  opacity: Math.random() * 0.5 + 0.2
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-8">
            <h1 className="font-display text-7xl font-bold leading-tight text-foreground tracking-wider animate-fade-up">
              Learn with{" "}
              <span className="text-primary bg-clip-text">
                COXDO
              </span>
            </h1>
            <p className="text-2xl text-muted-foreground font-display tracking-wide animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Unlock the future of learning with cutting-edge online courses
            </p>
            <div className="pt-4 flex gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/courses"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 neo-brutalism"
              >
                Explore Courses
              </Link>
              <Link
                to="/about"
                className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-secondary/80 transition-all hover:scale-105 neo-brutalism"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <div className="animate-fade-in">
        <CourseSection title="Best Selling Courses" courses={bestSellers} />
      </div>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary/30 animate-fade-in">
        <div className="container text-center space-y-6">
          <h2 className="font-display text-3xl font-bold">
            Ready to Start Learning?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our full collection of courses and start your learning journey today.
          </p>
          <Link
            to="/courses"
            className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105 neo-brutalism"
          >
            View All Courses
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
