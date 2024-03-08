"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import CreateTeamForm from "./create-team-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function CreateTeamButton() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant={"outline"}>Create Team</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 m-10 " align="center" side="left">
          <CreateTeamForm setOpen={setOpen} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
