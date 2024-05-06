import Logo from "@/components/logo";
import { SignedIn, UserButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="h-20 w-full m-auto shadow-md rounded-b-xl bg-orange-300">
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
