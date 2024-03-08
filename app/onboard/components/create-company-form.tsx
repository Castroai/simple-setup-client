"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// import { createCompany } from "@/app/actions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  companyName: z.string().min(2).max(50),
});
export default function CreateCompanyForm() {
  const route = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // createCompany({
    //   name: values.companyName,
    //   address: "",
    // }).then((res) => {
    //   toast.success(`Company ${res.name} created sucessfully`, {
    //     hideProgressBar: true,
    //     theme: "colored",
    //   });
    // });
    // route.push("/dashboard");
  }
  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Create a new company</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Fill out the form below to add a new company to your account
        </p>
      </div>
      <div className="space-y-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="ABC Company" {...field} />
                  </FormControl>
                  <FormDescription>This can be modified later</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
