import {
  Eye,
  Pencil,
  Trash2,
  CheckCircle,
  XCircle,
  SquarePen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "next-i18next";
import { useNavigate } from "react-router-dom";

const AgenciesTable = () => {
  const headers = [
    "Name",
    "Owner Name",
    "Phone",
    "Email",
    "Subscription Plan",
    "Status",
    "Created At",
    "Actions",
  ];
  const data = [
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

  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";


  const navigate = useNavigate();


  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50/50 hover:bg-gray-50">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`h-12 px-2 md:px-4 align-middle font-medium text-gray-500 text-xs md:text-sm [&:has([role=checkbox])]:pr-0 ${
                    isRTL ? "text-center" : "text-left"
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gray-200 transition-colors hover:bg-gray-50/50 data-[state=selected]:bg-gray-50"
              >
                <td
                  className={`p-2 md:p-4 align-middle text-xs md:text-sm [&:has([role=checkbox])]:pr-0 ${
                    isRTL ? "text-center" : "text-left"
                  }`}
                >
                  {row.name}
                </td>
                <td
                  className={`p-2 md:p-4 align-middle text-xs md:text-sm [&:has([role=checkbox])]:pr-0 ${
                    isRTL ? "text-center" : "text-left"
                  }`}
                >
                  {row.ownerName}
                </td>
                <td
                  className={`p-2 md:p-4 align-middle text-xs md:text-sm [&:has([role=checkbox])]:pr-0 ${
                    isRTL ? "text-center" : "text-left"
                  }`}
                >
                  {row.phone}
                </td>
                <td
                  className={`p-2 md:p-4 align-middle text-xs md:text-sm [&:has([role=checkbox])]:pr-0 ${
                    isRTL ? "text-center" : "text-left"
                  }`}
                >
                  {row.email}
                </td>

                <td
                  className={`p-2 md:p-4 align-middle text-xs md:text-sm [&:has([role=checkbox])]:pr-0 ${
                    isRTL ? "text-center" : "text-left"
                  }`}
                >
                  <Badge
                    variant="outline"
                    className={
                      row.subscriptionPlan === "ذهبي"
                        ? "bg-yellow-200 text-black border-yellow-300 hover:bg-yellow-200 text-xs"
                        : row.subscriptionPlan === "فضي"
                        ? "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200 text-xs"
                        : "bg-blue-100 text-blue-800 border-blue-300 hover:bg-blue-200 text-xs"
                    }
                  >
                    {row.subscriptionPlan}
                  </Badge>
                </td>
                <td
                  className={`p-2 md:p-4 align-middle text-xs md:text-sm [&:has([role=checkbox])]:pr-0 ${
                    isRTL ? "text-center" : "text-left"
                  }`}
                >
                  <Badge
                    variant={row.status === "active" ? "default" : "secondary"}
                    className={
                      row.status === "active"
                        ? "bg-green-600 hover:bg-green-600 text-xs"
                        : "bg-gray-200 hover:bg-gray-300 text-xs"
                    }
                  >
                    {row.status}
                  </Badge>
                </td>
                <td
                  className={`p-2 md:p-4 align-middle text-xs md:text-sm [&:has([role=checkbox])]:pr-0 ${
                    isRTL ? "text-center" : "text-left"
                  }`}
                >
                  {row.createdAt}
                </td>
                <td
                  className={`p-2 md:p-4 align-middle text-xs md:text-sm [&:has([role=checkbox])]:pr-0 ${
                    isRTL ? "text-center" : "text-left"
                  }`}
                >
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <SquarePen className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align={isRTL ? "start" : "end"}>
                      <DropdownMenuItem onClick={() => navigate(`/agencies/${row.id}`)}>
                        <Eye className="mr-2 h-4 w-4" />
                        {isRTL ? "عرض" : "View"}
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        <Pencil className="mr-2 h-4 w-4" />
                        {isRTL ? "تعديل" : "Edit"}
                      </DropdownMenuItem>

                        <>
                          <DropdownMenuItem >
                            <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                            {isRTL ? "موافقة" : "Approve"}
                          </DropdownMenuItem>

                          <DropdownMenuItem >
                            <XCircle className="mr-2 h-4 w-4 text-orange-600" />
                            {isRTL ? "رفض" : "Reject"}
                          </DropdownMenuItem>
                        </>

                      <DropdownMenuItem
                        className="text-red-600"
                        onClick={() => handleDelete(row)}
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        {isRTL ? "حذف" : "Delete"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgenciesTable;
