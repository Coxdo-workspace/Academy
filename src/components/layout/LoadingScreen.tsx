
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center animate-fade-out">
      <div className="text-center space-y-4">
        <h1 className="font-display text-4xl font-bold text-primary animate-pulse">
          COXDO ACADEMY
        </h1>
        <div className="w-48 h-1 bg-secondary rounded-full overflow-hidden">
          <div className="w-full h-full bg-primary origin-left animate-slide-right"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
