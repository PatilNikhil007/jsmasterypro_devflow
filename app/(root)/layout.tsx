import Navbar from "@/components/navigation/navbar";
import LeftSidebar from "@/components/navigation/LeftSidebar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative ">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex justify-between mt-16  gap-4">
        <div className="bg-dark-200 max-h-screen sticky top-10 px-4 py-4 hidden lg:block shadow-sm">
          <LeftSidebar />
        </div>

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pd-14 sm:px-14">
          {children}
        </section>
        <div>
          {/* Right Sidebar could go here */}
          <LeftSidebar />
        </div>
      </div>
    </main>
  );
};

export default RootLayout;
