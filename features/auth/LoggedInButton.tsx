import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LoggedInDropDown } from "./LoggedInDropDown";
import { Session } from "next-auth";



export const LoggedInButton = async (session: Session | null) => {

  if (!session?.user) {
    return ;
  }
  return (
    <LoggedInDropDown>
      <Button variant="outline" size="sm" className="flex gap-2 max-lg:hidden">
        <Avatar className="w-6 h-6">
          <AvatarFallback>{session.user.name}</AvatarFallback>
          {session.user.image ? (
            <AvatarImage
              src={session.user.image}
              alt={`${session.user.name} - profile picture`}
            />
          ) : null}
        </Avatar>
      </Button>
    </LoggedInDropDown>
  );
};


export type LoggedInButtonProps = {
  
}
