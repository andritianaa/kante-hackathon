import { Layout } from "@/components/layout";
import Image from "next/image";
import { ModeToggle } from "../theme/ModeToggle";
import Link from "next/link";
import { DropDown } from "@/components/navbar/DropDown";
import { baseAuth } from "@/lib/auth";
import { SigninBtn } from "../auth/SigninBtn";
import { CartDropDown } from "../../components/navbar/CartDropDown";
export const Header = async () => {
  const session = await baseAuth();

  return (
    <header className="w-full border-b border-border py-1 fixed bg-white dark:bg-black top-0 left-0 z-50">
      <Layout className="flex items-center justify-between gap-4 w-full p-2 ">
        <Link href="/" >
          <Image src="/icon.png" width={32} height={32} alt="team uk logo" />
        </Link>
        {/* <div className=" justify-between items-center flex max-md:hidden"><MenuNavigation /></div> */}
        <div className="flex items-center gap-3 m-3">
          <div className="flex items-center">{session?.user && <CartDropDown />}</div>
          <div className=" items-center gap-2 flex-1 justify-end flex md:hidden">
            <ModeToggle />
            {!session?.user && <SigninBtn />}
          </div>
          {session?.user && (
            <div className="">
              <DropDown
                email={session?.user.email!}
                image={session?.user.image!}
                id={session?.user.id!}
              />
            </div>
          )}
        </div>
      </Layout>
    </header>
  );
};
