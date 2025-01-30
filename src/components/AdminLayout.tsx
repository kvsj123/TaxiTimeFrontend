import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Users,
  Car,
  Calendar,
  FileText,
  LogOut,
  Menu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    navigate("/login");
    toast({
      title: "Logged out successfully",
      description: "See you next time!",
    });
  };

  const menuItems = [
    { icon: Users, label: "Chauffeurs", path: "/admin/chauffeurs" },
    { icon: Car, label: "Vehicles", path: "/admin/vehicles" },
    { icon: Calendar, label: "Shifts", path: "/admin/shifts" },
    { icon: FileText, label: "Reports", path: "/admin/reports" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white border-b p-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 border-b">
            <h1 className="text-xl font-bold text-primary">TaxiFleet Manager</h1>
          </div>

          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => navigate(item.path)}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>

          <div className="p-4 border-t">
            <Button
              variant="ghost"
              className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-200 ${
          isSidebarOpen ? "lg:ml-64" : ""
        }`}
      >
        <div className="container mx-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;