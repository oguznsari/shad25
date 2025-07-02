"use client";
import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalendarIcon className="w-4 h-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/* List */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          <Card className="p-4 border-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" />
              <Label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4 border-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item-2" />
              <Label htmlFor="item-2" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4 border-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item-3" />
              <Label htmlFor="item-3" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4 border-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item-4" />
              <Label htmlFor="item-4" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4 border-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item-5" />
              <Label htmlFor="item-5" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4 border-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item-6" />
              <Label htmlFor="item-6" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4 border-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item-7" />
              <Label htmlFor="item-7" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4 border-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" />
              <Label htmlFor="item-1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
          <Card className="p-4 border-none">
            <div className="flex items-center gap-4">
              <Checkbox id="item-8" />
              <Label htmlFor="item-8" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </Label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
