import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button size="xl" className="rounded-full text-custom-color">
      <CirclePlus />
        Click me
      </Button>
    </div>
  );
};

export default HomePage;