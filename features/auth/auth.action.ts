"use server"
import { signIn, signOut } from "@/lib/auth";

export const SignOutAction = async () => {
    console.log("signout");

    await signOut();
}

export const SignInAction = async () => {
    console.log("sign");

    await signIn();
}