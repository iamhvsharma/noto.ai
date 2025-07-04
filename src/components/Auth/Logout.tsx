import React, { useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleLogout = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMessage = null;

    if (!errorMessage) {
      toast.success("You have been successfully logged out");
      router.push("/")
    } else {
        toast.error("Logout failed, try again later.")
    }

    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogout}
      disabled={loading}
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Logout"}
    </Button>
  );
};

export default Logout;
