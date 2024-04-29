import { Header } from "./_components/header";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <Header />
      <div className="flex gap-x-7 h-full mt-6 p-4">
        <div className="w-64 h-[80%] shrink-0 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
