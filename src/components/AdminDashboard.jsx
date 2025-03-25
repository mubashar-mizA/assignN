import AdminDashboardNavigation from "@/components/AdminDashboardNavigation";

const AdminDashboard = ({ children }) => {
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4">
                <AdminDashboardNavigation />
            </div>

            {/* Page Content */}
            <div className="w-3/4 p-4">
                {children}  {/* Ye selected page ka content yahan show hoga */}
            </div>
        </div>
    );
};

export default AdminDashboard;
