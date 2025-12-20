import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AgenciesHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-foreground">الوكالات</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          قائمة الوكالات المسجلة
        </p>
      </div>
      <Button
        className="flex items-center gap-2 bg-primary cursor-pointer hover:bg-primary/90"
        onClick={() => navigate("/agencies/add")}
      >
        <Plus className="h-4 w-4" />
        <span>اضافة وكالة</span>
      </Button>
    </div>
  );
};

export default AgenciesHeader;
