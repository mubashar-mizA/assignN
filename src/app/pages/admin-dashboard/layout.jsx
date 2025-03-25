import AdminDashboardNavigation from "@/components/AdminDashboardNavigation";

const AdminDashboardLayout = ({ children }) => {
    return (
        <div className="flex">
            {/* Sidebar fix rakhnay ke liye */}
            <div className="bg-red-600">
                <AdminDashboardNavigation />
            </div>

            {/* Content area */}
            <div className="bg-gray-600">
                {children}
            </div>
        </div>
    );
};

export default AdminDashboardLayout;
