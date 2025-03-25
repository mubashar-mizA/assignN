import AdminDashboardNavigation from "@/components/AdminDashboardNavigation";

const AdminDashboardLayout = ({ children }) => {
  return (
    <div className="flex gap-2">
      {/* Sidebar fix  */}
      <div className="w-[15%] bg-white text-black min-h-screen border-r ">
        <AdminDashboardNavigation />
      </div>

      {/* Content area */}
      <div className="w-[85%] ">
        {children}
      </div>

    </div>
  );
};

export default AdminDashboardLayout;
