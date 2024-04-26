"use client"
import { PropsWithChildren } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { SignOutAction } from "./auth.action";

export type LoggedInDropDownProps = PropsWithChildren;

export const LoggedInDropDown = (props: LoggedInDropDownProps) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
        <DropdownMenuContent className="mr-2">
          <DropdownMenuItem onClick={() => SignOutAction()}>
            <LogOut size={16} className="mr-2" /> Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
