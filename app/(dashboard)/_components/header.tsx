import Logo from "@/components/logo";
import { SignedIn, UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="h-20 border-b-1 w-full m-auto bg-slate-400 rounded-b-xl">
      <div className="w-full h-full max-w-[600px] md:max-w-[1400px] m-auto flex items-center justify-between">
        <Logo />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
                button: {
                  backgroundColor: "white",
                  padding: 4,
                },
              },
            }}
            showName
          />
        </SignedIn>
      </div>
    </header>
  );
};
