
import CourseCard from "./CourseCard";
import { Course } from "@/lib/types";

interface CourseSectionProps {
  title: string;
  courses: Course[];
}

const CourseSection = ({ title, courses }: CourseSectionProps) => {
  return (
    <section className="py-12 animate-fade-in">
      <div className="container">
        <h2 className="font-display text-3xl font-bold mb-8 text-foreground">{title}</h2>
        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
