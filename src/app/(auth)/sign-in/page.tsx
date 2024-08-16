import React from "react";
import { Button } from "@/components/button";
import { TextField } from "@/components/form";
import { Input } from "@/components/input";
import GoogleIcon from "@/components/icons/google";
import FacebookIcon from "@/components/icons/facebook";

export default function SignIn() {
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
                <span className="h-[1px] flex-1 bg-gradient-to-l from-gray-200 from-80%" />
                <h3 className="px-2 py-0.5 text-sm text-gray-300">or</h3>
                <span className="h-[1px] flex-1 bg-gradient-to-r from-gray-200 from-80%" />
              </div>

              <div className="flex flex-col gap-4">
                <TextField>
                  <Input placeholder="donald@example.com" />
                </TextField>
                <Button>Continue</Button>
              </div>
              <span className="text-center text-sm text-gray-300">
                To support you during the pandemic super pro features are free
                until March 31st.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-gray-950 md:block" aria-hidden="true" />
    </div>
  );
}
