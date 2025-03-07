
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import LoadingScreen from "./components/layout/LoadingScreen";
import Index from "./pages/Index";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CourseDetail from "./pages/CourseDetail";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import { initScrollAnimations } from "./utils/scrollAnimations";

// Initialize the query client
const queryClient = new QueryClient();

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    setIsTransitioning(true);
    setPageName(location.pathname.slice(1) || "Home");
    const timer = setTimeout(() => setIsTransitioning(false), 1000);
    return () => clearTimeout(timer);
  }, [location]);

  if (isTransitioning) {
    return (
      <div className="fixed inset-0 bg-background z-40 flex items-center justify-center animate-fade-out">
        <h1 className="text-4xl font-display font-bold text-primary animate-scale-up">
          {pageName}
        </h1>
      </div>
    );
  }

  return <>{children}</>;
};

const App = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LoadingScreen />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <PageTransition>
              <main className="flex-grow pt-16">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/courses" element={<Courses />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/course/:id" element={<CourseDetail />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </PageTransition>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
