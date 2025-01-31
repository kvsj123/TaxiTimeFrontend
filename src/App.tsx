import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminLayout from "./components/AdminLayout";
import NotFound from "./pages/NotFound";
import ChauffeurList from "./pages/chauffeur/ChauffeurList";
import AddChauffeurForm from "./pages/chauffeur/AddChauffeurForm/AddChauffeurForm";
import FeuillesDeRoute from "./pages/chauffeur/FeuillesDeRoute";
import Settings from "./pages/chauffeur/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<div>Dashboard Content</div>} />
            <Route path="chauffeurs" element={<ChauffeurList />} />
            <Route path="chauffeurs/add" element={<AddChauffeurForm />} />
            <Route path="vehicles" element={<div>Vehicles Management</div>} />
            <Route path="shifts" element={<div>Shifts Calendar</div>} />
            <Route path="reports" element={<div>Reports Generator</div>} />
            <Route path="feuilles-de-route" element={<FeuillesDeRoute />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
