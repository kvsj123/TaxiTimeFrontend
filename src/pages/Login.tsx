import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { LogIn } from "lucide-react";

const Login = () => {
  const [userType, setUserType] = useState<"admin" | "chauffeur">("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, we'll use simple validation
    if (email && password) {
      if (userType === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/chauffeur/dashboard");
      }
      toast({
        title: "Login successful",
        description: `Welcome back, ${email}!`,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            TaxiFleet Manager
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 mb-6">
            <Button
              variant={userType === "admin" ? "default" : "outline"}
              onClick={() => setUserType("admin")}
              className="w-full"
            >
              Admin
            </Button>
            <Button
              variant={userType === "chauffeur" ? "default" : "outline"}
              onClick={() => setUserType("chauffeur")}
              className="w-full"
            >
              Chauffeur
            </Button>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;