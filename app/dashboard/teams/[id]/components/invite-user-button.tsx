"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import InviteUserForm from "./invite-user-form";
export default function InviteUserButton({ teamId }: { teamId: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant={"outline"}>Invite User</Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 m-10 " align="center" side="left">
          <InviteUserForm teamId={teamId} setOpen={setOpen} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
