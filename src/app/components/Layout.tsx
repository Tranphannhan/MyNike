"use client";

import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/signup/createinfo";

  const isAdminPage = pathname.startsWith("/admin"); // 👈 check nếu là trang admin

  const hideLayout = isAuthPage || isAdminPage; // 👈 ẩn layout nếu là auth hoặc admin

  return (
    <>
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
};

export default Layout;
