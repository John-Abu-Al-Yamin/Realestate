import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  User,
  Mail,
  Phone,
  Calendar,
  ShieldCheck,
  Clock,
  ShieldAlert,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "next-i18next";

const AgencyDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  // Mock data - replace with actual API call
  const agencyData = {
    id: parseInt(id),
    name: "وكالة المستقبل",
    ownerName: "أحمد علي",
    phone: "01012345678",
    email: "ahmed@example.com",
    subscriptionPlan: "ذهبي",
    agencyStatus: "active",
    subscriptionStatus: "active",
    verificationStatus: "unverified",
    createdAt: "2025-01-10",
    propertiesCount: 45,
    employeesCount: 12,
    leadsCount: 128,
    lastActivity: "2025-01-15 14:30",
  };

  const getVerificationBadge = (status) => {
    switch (status) {
      case "verified":
        return {
          icon: ShieldCheck,
          color: "text-green-600",
          bgColor: "bg-green-100",
          text: isRTL ? "موثّقة" : "Verified",
        };
      case "pending":
        return {
          icon: Clock,
          color: "text-yellow-600",
          bgColor: "bg-yellow-100",
          text: isRTL ? "قيد المراجعة" : "Pending Review",
        };
      case "unverified":
        return {
          icon: ShieldAlert,
          color: "text-red-600",
          bgColor: "bg-red-100",
          text: isRTL ? "غير موثّقة" : "Unverified",
        };
      default:
        return {
          icon: ShieldAlert,
          color: "text-gray-600",
          bgColor: "bg-gray-100",
          text: isRTL ? "غير موثّقة" : "Unverified",
        };
    }
  };

  const verificationBadge = getVerificationBadge(agencyData.verificationStatus);
  const VerificationIcon = verificationBadge.icon;

  return (
    <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950/50 p-4 md:p-6">
      <div className="w-full mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/agencies")}
            className="flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            {isRTL ? "رجوع" : "Back"}
          </Button>
        </div>

        {/* Agency Info Card */}
        <div className="bg-card rounded-xl transition-shadow duration-200 p-6 md:p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <Building2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {agencyData.name}
                </h1>
                <div className="flex items-center gap-2 mt-3">
                  <div
                    className={`p-2 rounded-full ${verificationBadge.bgColor} ${verificationBadge.color} border border-current/20`}
                  >
                    <VerificationIcon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {verificationBadge.text}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border rounded-xl bg-gray-50/50 dark:bg-gray-900/30 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 transition-colors">
              <p className="text-sm font-medium text-muted-foreground mb-3">
                {isRTL ? "حالة الوكالة" : "Agency Status"}
              </p>
              <Badge className="bg-green-600 hover:bg-green-700 text-white shadow-sm">
                {isRTL ? "نشطة" : "Active"}
              </Badge>
            </div>
            <div className="p-5 border rounded-xl bg-gray-50/50 dark:bg-gray-900/30 hover:bg-gray-100/50 dark:hover:bg-gray-900/50 transition-colors">
              <p className="text-sm font-medium text-muted-foreground mb-3">
                {isRTL ? "خطة الاشتراك" : "Subscription Plan"}
              </p>
              <Badge className="bg-yellow-200 text-black border-yellow-300 shadow-sm hover:bg-yellow-300 transition-colors">
                {agencyData.subscriptionPlan}
              </Badge>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {isRTL ? "معلومات الاتصال" : "Contact Information"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-4 p-4 border rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                <div className="p-2.5 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {isRTL ? "اسم المالك" : "Owner Name"}
                  </p>
                  <p className="font-semibold text-foreground">
                    {agencyData.ownerName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                <div className="p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Mail className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">
                    {isRTL ? "البريد الإلكتروني" : "Email"}
                  </p>
                  <p className="font-semibold text-foreground truncate">
                    {agencyData.email}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                <div className="p-2.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <Phone className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {isRTL ? "الهاتف" : "Phone"}
                  </p>
                  <p className="font-semibold text-foreground">
                    {agencyData.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border rounded-xl hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition-colors">
                <div className="p-2.5 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <Calendar className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {isRTL ? "تاريخ الإنشاء" : "Created At"}
                  </p>
                  <p className="font-semibold text-foreground">
                    {agencyData.createdAt}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-foreground">
              {isRTL ? "الإحصائيات" : "Statistics"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 border rounded-xl text-center bg-blue-50/50 dark:bg-blue-950/20 hover:bg-blue-100/50 dark:hover:bg-blue-950/30 transition-all hover:scale-105 transform duration-300">
                <p className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {agencyData.propertiesCount}
                </p>
                <p className="text-sm font-medium text-muted-foreground mt-2">
                  {isRTL ? "عقار" : "Properties"}
                </p>
              </div>
              <div className="p-5 border rounded-xl text-center bg-purple-50/50 dark:bg-purple-950/20 hover:bg-purple-100/50 dark:hover:bg-purple-950/30 transition-all hover:scale-105 transform duration-300">
                <p className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {agencyData.employeesCount}
                </p>
                <p className="text-sm font-medium text-muted-foreground mt-2">
                  {isRTL ? "موظف" : "Employees"}
                </p>
              </div>
              <div className="p-5 border rounded-xl text-center bg-green-50/50 dark:bg-green-950/20 hover:bg-green-100/50 dark:hover:bg-green-950/30 transition-all hover:scale-105 transform duration-300">
                <p className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400">
                  {agencyData.leadsCount}
                </p>
                <p className="text-sm font-medium text-muted-foreground mt-2">
                  {isRTL ? "عميل محتمل" : "Leads"}
                </p>
              </div>
            </div>
          </div>

          {/* Last Activity */}
          <div className="p-5 border rounded-xl bg-gray-50/50 dark:bg-gray-900/30">
            <p className="text-sm font-medium text-muted-foreground mb-2">
              {isRTL ? "آخر نشاط" : "Last Activity"}
            </p>
            <p className="font-semibold text-lg text-foreground">
              {agencyData.lastActivity}
            </p>
          </div>
          {/* actions */}
          <div className="flex items-center justify-end gap-2">
            <Button
              variant="outline"
              className="bg-yellow-400 text-black font-bold py-5 px-8 hover:bg-yellow-500 transition-all duration-300"
            >
              {isRTL ? "تعديل الوكالة" : "Edit Agency"}
            </Button>
            <Button
              variant="outline"
              className=" text-black font-bold py-5 px-8 hover:bg-gray-200  transition-all duration-300"
            >
              {isRTL ? "حذف الوكالة" : "Delete Agency"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyDetailsPage;
