
import { Course } from "@/lib/types";
import { Link } from "react-router-dom";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link 
      to={`/course/${course.id}`} 
      className="block bg-card rounded-lg overflow-hidden neo-brutalism hover:-translate-y-1 transition-all duration-300 glow-effect"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary font-display">
            {course.category}
          </span>
          <span className="text-xs text-muted-foreground font-display">{course.enrolled} enrolled</span>
        </div>
        <h3 className="font-display text-lg font-bold leading-tight text-foreground tracking-wider">
          {course.title}
        </h3>
        <div className="flex items-center gap-3">
          <img
            src={course.instructor.avatar}
            alt={course.instructor.name}
            className="w-8 h-8 rounded-full border-2 border-primary p-0.5"
          />
          <span className="text-sm text-muted-foreground font-display tracking-wide">
            {course.instructor.name}
          </span>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-border/10">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-primary font-display">Rs {course.price}</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-primary font-display">⭐ {course.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
