import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Plus, Download, Archive, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Chauffeur {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "archived";
  joinDate: string;
  shiftsCompleted: number;
}

// Mock data - replace with actual API calls later
const mockChauffeurs: Chauffeur[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    status: "active",
    joinDate: "2024-01-15",
    shiftsCompleted: 45,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 234 567 891",
    status: "active",
    joinDate: "2024-02-01",
    shiftsCompleted: 32,
  },
  {
    id: "3",
    name: "Mike Johnson",
    email: "mike.j@example.com",
    phone: "+1 234 567 892",
    status: "archived",
    joinDate: "2023-11-20",
    shiftsCompleted: 128,
  },
];

const ChauffeurList = () => {
  const [chauffeurs] = useState<Chauffeur[]>(mockChauffeurs);
  const { toast } = useToast();

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Your data is being prepared for download.",
    });
  };

  const handleArchive = (id: string) => {
    toast({
      title: "Chauffeur Archived",
      description: "The chauffeur has been archived successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Chauffeur Management</h1>
        <div className="space-x-2">
          <Button onClick={handleExport}>
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Chauffeur
          </Button>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>Shifts</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {chauffeurs.map((chauffeur) => (
              <TableRow key={chauffeur.id}>
                <TableCell className="font-medium">{chauffeur.name}</TableCell>
                <TableCell>{chauffeur.email}</TableCell>
                <TableCell>{chauffeur.phone}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      chauffeur.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {chauffeur.status}
                  </span>
                </TableCell>
                <TableCell>{chauffeur.joinDate}</TableCell>
                <TableCell>{chauffeur.shiftsCompleted}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button variant="ghost" size="icon">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleArchive(chauffeur.id)}
                  >
                    <Archive className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ChauffeurList;