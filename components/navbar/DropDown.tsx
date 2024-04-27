"use client";
import { BookImage, CircleDollarSign, Menu } from "lucide-react";

import { LogOut, History } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SignOutAction } from "@/features/auth/auth.action";
import Link from "next/link";

export type DropDownProps = {
  email: string;
  image: string;
  id: string;
  voucher: number;
};

export const DropDown = (props: DropDownProps) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("userId", props.id);
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="flex gap-2 font-normal">
            <Avatar className="w-6 h-6">
              <AvatarFallback>{props.email}</AvatarFallback>
              {props.image ? (
                <AvatarImage
                  src={props.image}
                  alt={`${props.email} - profile picture`}
                />
              ) : (
                <AvatarImage
                  src={`https://api.dicebear.com/8.x/bottts-neutral/svg?seed=${props.email}`}
                  alt={`${props.email} - profile picture`}
                />
              )}
            </Avatar>
            {props.email}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BookImage className="mr-2 h-4 w-4" />
              <Link href={"/offer"}>Catalogue</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <History className="mr-2 h-4 w-4" />
              <Link href={"/offer/allCommands"}>Historique</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem disabled>
              <CircleDollarSign className="mr-2 h-4 w-4" />
              <span>{props.voucher}</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <CircleDollarSign className="mr-2 h-4 w-4" />
              <Link href={"/gift"}>Cadeaux</Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => SignOutAction()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};
