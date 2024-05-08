import Logo from "@/components/logo";

export const Header = () => {
  return (
    <header className="h-20 w-full m-auto bg-white border-b-2">
      <div className="w-full h-full max-w-[600px] md:max-w-[1400px] m-auto flex items-center justify-between">
        <Logo />
      </div>
    </header>
  );
};
