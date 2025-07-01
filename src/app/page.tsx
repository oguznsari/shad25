import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="destructive" size="xl" className="rounded-full">
      <CirclePlus />
        Click me
      </Button>
    </div>
  );
};

export default HomePage;