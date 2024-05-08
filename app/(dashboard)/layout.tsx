import { Header } from "./_components/header";
import { Sidebar } from "./_components/sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-row h-full">
        <div className="w-64 shrink-0 hidden md:block">
          <Sidebar />
        </div>
        <div className="w-full">
          <Header />
          <div className="p-8 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
