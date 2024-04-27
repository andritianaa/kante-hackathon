"use client";
import {
  BookImage,
  CircleDollarSign,
  LayoutGrid,
  LayoutPanelTop,
  Menu,
} from "lucide-react";

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
        <DropdownMenuContent className="w-full">
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
            <Link href={"/offer"}>
              <DropdownMenuItem className="flex items-center gap-3">
                <BookImage size={21} />
                Catalogue
              </DropdownMenuItem>
            </Link>
            <Link href={"/offer/allCommands"}>
              <DropdownMenuItem className="flex items-center gap-3">
                <History size={21} />
                Historique
              </DropdownMenuItem>
            </Link>
            <Link href={"/dashboard"}>
              <DropdownMenuItem className="flex items-center gap-3">
                <LayoutGrid size={21} />
                Dashboard
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex items-center gap-3" disabled>
              <CircleDollarSign size={21} />
              <span>{props.voucher}</span>
            </DropdownMenuItem>
            <Link href={"/gift"}>
              <DropdownMenuItem className="flex items-center gap-3">
                <CircleDollarSign size={21} />
                Cadeaux
              </DropdownMenuItem>
            </Link>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem
            className="flex items-center gap-3"
            onClick={() => SignOutAction()}
          >
            <LogOut size={21} />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
};
