"use client";

import React from "react";
import { Button } from "@/components/button";
import { TextField } from "@/components/form";
import { Input } from "@/components/input";
import GoogleIcon from "@/components/icons/google";
import FacebookIcon from "@/components/icons/facebook";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const validationSchema = z.object({
  email: z.string().email(),
});

export default function SignIn() {
  const methods = useForm<z.infer<typeof validationSchema>>({
    resolver: zodResolver(validationSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  return (
    <div className="grid min-h-[100dvh] md:grid-cols-2">
      <div className="flex justify-center overflow-y-hidden">
        <div className="flex w-full max-w-md flex-col px-6 md:justify-center">
          <div className="flex flex-col gap-y-10 py-12">
            <h1 className="text-center text-3xl font-semibold">Welcome back</h1>
            <div className="flex flex-col gap-y-6">
              <div className="flex flex-col gap-y-4">
                <Button className="flex gap-2" appearance="secondary">
                  <GoogleIcon />
                  <span className="truncate">Continue with Google</span>
                </Button>
                <Button className="flex gap-2" appearance="secondary">
                  <FacebookIcon />
                  <span className="truncate">Continue with Facebook</span>
                </Button>
              </div>

              <div className="flex items-center justify-center">
                <span className="h-[2px] flex-1 rounded-full bg-gradient-to-l from-gray-100" />
                <h3 className="px-2 py-0.5 text-sm text-gray-400">or</h3>
                <span className="h-[2px] flex-1 rounded-full bg-gradient-to-r from-gray-100" />
              </div>

              <form
                onSubmit={methods.handleSubmit(async (formValues) => {
                  console.log("[client]");
                  methods.reset();
                })}
              >
                <div className="flex flex-col gap-4">
                  <Controller
                    control={methods.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <TextField
                        aria-label="Email"
                        name={field.name}
                        value={field.value}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                        isDisabled={field.disabled}
                        isInvalid={fieldState.invalid}
                      >
                        <Input
                          ref={field.ref}
                          placeholder="Enter email address"
                        />
                      </TextField>
                    )}
                  />
                  <Button
                    isDisabled={methods.formState.isSubmitting}
                    type="submit"
                  >
                    {methods.formState.isSubmitting ? "Submitting" : "Continue"}
                  </Button>
                </div>
              </form>
            </div>
            <div className="text-center text-sm text-gray-400">
              To support you during the pandemic super pro features are free
              until March 31st.
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-gray-950 md:block" aria-hidden="true" />
    </div>
  );
}
