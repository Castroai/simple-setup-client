"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
// import { createTeam } from "@/app/actions/index";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { Dispatch, SetStateAction } from "react";

const formSchema = z.object({
  teamName: z.string().min(2).max(50),
});
export default function CreateTeamForm({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // createTeam({
    //   name: values.teamName,
    // }).then(() => {
    //   setOpen(false);
    //   toast.success(`Team ${values.teamName} created sucessfully`, {
    //     hideProgressBar: true,
    //     theme: "colored",
    //   });
    // });
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="teamName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Team Name</FormLabel>
                <FormControl>
                  <Input placeholder="Team Fire" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public team name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
}
