import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Coffee, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md">
        <div className="w-24 h-24 bg-coffee-light rounded-full flex items-center justify-center mx-auto mb-8">
          <Coffee className="w-12 h-12 text-coffee-dark" />
        </div>
        <h1 className="text-6xl font-bold mb-4 text-coffee-dark">404</h1>
        <h2 className="text-2xl font-semibold mb-4 text-coffee-medium">Oops! Page not found</h2>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Looks like this page got lost in the coffee beans. Let's get you back to something brewing!
        </p>
        <Button 
          asChild
          className="bg-coffee-dark hover:bg-coffee-medium text-cream"
        >
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
