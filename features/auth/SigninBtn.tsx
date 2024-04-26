"use client"

import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { SignInAction } from "./auth.action";

export const SigninBtn = () => {
  return (
    <form>
      <Button size="lg"
        onClick={async (e) => {
          e.preventDefault();
          await SignInAction();
        }}
      >
        <LogIn size={16} className="mr-2"/>
        Sign in
      </Button>
    </form>
  );
};
