
import HeaderAmin from "./HeaderAdmin";
import MenuAdmin from "./SidebarAdmin";


export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <MenuAdmin />
      <div className="flex-1 flex-col">
        <HeaderAmin/>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
