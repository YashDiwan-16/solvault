"use client";
import React from "react";
import ContactAnimation from "./ContactAnimation";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SuccessCard from "./SuccessCard";
import { ShineBorder } from "@/components/ui/shine-border";
const words = `Let's Connect and Create Something Amazing Together!`;

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  email: z.string().email("Invalid email address"),
  subject: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type FormData = z.infer<typeof schema>;

const Contact: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const { toast } = useToast();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "Email Sent Successfully",
          description: "We will get back to you soon.",
          variant: "default",
          className: "bg-green-500 text-white",
        });
      } else {
        toast({
          title: "Failed to Send Email",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Failed to Send Email",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 py-8">
      <div className="w-full max-w-4xl mx-auto">
        <TextGenerateEffect words={words} />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl mx-auto mt-8 lg:mt-16 gap-8">
        <div className="w-full lg:w-1/2 flex justify-center">
          <ContactAnimation />
        </div>

        <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6">
          <ShineBorder
            className="rounded-lg w-full max-w-[500px]"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
          >
            {isSuccess ? (
              <SuccessCard />
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="p-4 sm:p-6 lg:p-8 text-white rounded-lg space-y-4 sm:space-y-6 shadow-xl w-full"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center font-poppins">
                    Contact Us
                  </h2>

                  <FormField
                    control={form.control}
                    name="name"
                    render={({
                      field,
                    }: {
                      field: ControllerRenderProps<FormData, "name">;
                    }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 px-3 py-2 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs sm:text-sm mt-1" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="Your Email"
                            {...field}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 px-3 py-2 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs sm:text-sm mt-1" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Subject
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 px-3 py-2 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs sm:text-sm mt-1" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your Message"
                            {...field}
                            rows={4}
                            className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-200 shadow-sm focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500 px-3 py-2 text-sm sm:text-base"
                          />
                        </FormControl>
                        <FormMessage className="text-red-500 text-xs sm:text-sm mt-1" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white py-2 sm:py-3 px-4 sm:px-5 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 text-sm sm:text-base"
                  >
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            )}
          </ShineBorder>
        </div>
      </div>
    </div>
  );
};

export default Contact;
