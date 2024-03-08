"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
// import { CreateInvitation } from "@/app/actions/invitation";

const formSchema = z.object({
  email: z.string().min(2).max(50),
});
export default function InviteUserForm({
  setOpen,
  teamId,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  teamId: number;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // CreateInvitation({
    //   email: values.email,
    //   teamId,
    // }).then(() => {
    //   setOpen(false);
    //   toast.success(`Sent invitation to ${values.email} sucessfully`, {
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="New User@email.com" {...field} />
                </FormControl>
                <FormDescription>Internal or exteranl user</FormDescription>
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
