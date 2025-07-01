import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="destructive" size="xl" className="rounded-full">Click me</Button>
    </div>
  );
};

export default HomePage;