import {
  Eye,
  Edit,
  Trash2,
  Building2,
  Users,
  RefreshCw,
  SquarePen,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "next-i18next";

const AgenciesTable = () => {
  const agencies = [
    {
      id: 1,
      name: "وكالة المستقبل",
      ownerName: "أحمد علي",
      phone: "01012345678",
      email: "ahmed@example.com",
      subscriptionPlan: "ذهبي",
      status: "active",
      createdAt: "2025-01-10",
    },
    {
      id: 2,
      name: "وكالة النجاح",
      ownerName: "سارة محمد",
      phone: "01198765432",
      email: "sara@example.com",
      subscriptionPlan: "فضي",
      status: "inactive",
      createdAt: "2024-11-22",
    },
    {
      id: 3,
      name: "وكالة التميز",
      ownerName: "محمود حسن",
      phone: "01234567890",
      email: "mahmoud@example.com",
      subscriptionPlan: "ذهبي",
      status: "active",
      createdAt: "2025-05-15",
    },
    {
      id: 4,
      name: "وكالة التميز",
      ownerName: "محمود حسن",
      phone: "01234567890",
      email: "mahmoud@example.com",
      subscriptionPlan: "ذهبي",
      status: "active",
      createdAt: "2025-05-15",
    },
  ];

  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <Table className="border-collapse">
        <TableHeader className="bg-muted/50">
          <TableRow className="border-b-0">
            <TableHead className="font-semibold p-3 text-center">
              اسم الوكالة
            </TableHead>
            <TableHead className="font-semibold p-3 text-center">
              اسم المالك
            </TableHead>
            <TableHead className="font-semibold p-3 text-center">
              رقم الهاتف
            </TableHead>
            <TableHead className="font-semibold p-3 text-center">
              البريد الإلكتروني
            </TableHead>
            <TableHead className="font-semibold p-3 text-center">
              الاشتراك
            </TableHead>
            <TableHead className="font-semibold p-3 text-center">
              الحالة
            </TableHead>
            <TableHead className="font-semibold p-3 text-center">
              تاريخ الإنشاء
            </TableHead>
            <TableHead className="font-semibold p-3 text-center">
              إجراءات
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-center">
          {agencies.map((agency) => (
            <TableRow
              key={agency.id}
              className="hover:bg-muted/50 transition-colors odd:bg-white even:bg-gray-50"
              dir="ltr"
            >
              <TableCell className="font-medium text-center p-3">
                {agency.name}
              </TableCell>
              <TableCell className="text-center p-3">
                {agency.ownerName}
              </TableCell>
              <TableCell className="text-center p-3">{agency.phone}</TableCell>
              <TableCell className="text-center p-3">{agency.email}</TableCell>
              <TableCell className="text-center p-3">
                <div className="flex justify-center">
                  <Badge
                    className={
                      agency.subscriptionPlan === "ذهبي"
                        ? "bg-yellow-100 text-black"
                        : agency.subscriptionPlan === "فضي"
                        ? "bg-gray-100 text-black"
                        : "bg-gray-200 text-black"
                    }
                  >
                    {agency.subscriptionPlan}
                  </Badge>
                </div>
              </TableCell>
              <TableCell className="text-center p-3">
                <div className="flex justify-center">
                  <Badge
                    variant={
                      agency.status === "active" ? "default" : "secondary"
                    }
                  >
                    {agency.status === "active" ? "✓ مفعل" : "○ غير مفعل"}
                  </Badge>
                </div>
              </TableCell>
              <TableCell className="text-center p-3 text-sm">
                {new Date(agency.createdAt).toLocaleDateString("ar-EG", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </TableCell>
              <TableCell className="text-center p-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-end mx-auto block"
                    >
                      <SquarePen />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align={isRTL ? "start" : "end"} className="w-48">
                    <DropdownMenuItem className="cursor-pointer">
                      <Eye className="mr-2 h-4 w-4" />
                      عرض
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Edit className="mr-2 h-4 w-4" />
                      تعديل
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Building2 className="mr-2 h-4 w-4" />
                      عرض العقارات
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Users className="mr-2 h-4 w-4" />
                      عرض المستخدمين
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      تجديد الاشتراك
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Trash2 className="mr-2 h-4 w-4 text-destructive" />
                      <span className="text-destructive">حذف</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AgenciesTable;
