import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { Building2, User, CreditCard, FileText, AlertCircle } from "lucide-react";
import { useFormContext } from "react-hook-form";
import BasicInfoTab from "./BasicInfoTab";
import OwnerDetailsTab from "./OwnerDetailsTab";
import SubscriptionTab from "./SubscriptionTab";
import DocumentsTab from "./DocumentsTab";

const Tabs = ({ onTabChange }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const [activeTab, setActiveTab] = useState("basic");

  const {
    formState: { errors },
    trigger,
  } = useFormContext();

  const tabs = [
    {
      id: "basic",
      label: isRTL ? "البيانات الأساسية للوكاله" : "Agency Information",
      icon: Building2,
      component: BasicInfoTab,
      fields: ["name", "email", "phone", "address"], // Add your field names here
    },
    {
      id: "owner",
      label: isRTL ? "بيانات المالك" : "Owner Details",
      icon: User,
      component: OwnerDetailsTab,
      fields: ["ownerName", "ownerEmail", "ownerPhone"], // Add your field names here
    },
    {
      id: "subscription",
      label: isRTL ? "الاشتراك" : "Subscription",
      icon: CreditCard,
      component: SubscriptionTab,
      fields: ["subscriptionPlan", "subscriptionStatus"], // Add your field names here
    },
    {
      id: "documents",
      label: isRTL ? "المستندات" : "Documents Verification",
      icon: FileText,
      component: DocumentsTab,
      fields: ["documents"],
    },
  ];

  // Check if tab has errors
  const hasTabErrors = (tabFields) => {
    return tabFields.some((field) => {
      const fieldError = errors[field];
      return fieldError !== undefined;
    });
  };

  // Function to find first tab with errors
  const findFirstErrorTab = () => {
    for (const tab of tabs) {
      if (hasTabErrors(tab.fields)) {
        return tab.id;
      }
    }
    return null;
  };

  // Expose function to parent component
  useEffect(() => {
    if (onTabChange) {
      onTabChange({ setActiveTab, findFirstErrorTab });
    }
  }, [onTabChange]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className="w-full">
      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-800 mb-6 bg-white dark:bg-gray-950 rounded-t-lg">
        <div className="flex flex-wrap gap-1 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            const hasErrors = hasTabErrors(tab.fields);

            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`
                  relative flex items-center gap-2 px-5 py-3 text-sm font-medium transition-all duration-300 rounded-t-lg
                  ${
                    isActive
                      ? "text-primary bg-primary/5 border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-gray-50 dark:hover:bg-gray-900/50"
                  }
                  ${hasErrors && !isActive ? "text-red-600 dark:text-red-400" : ""}
                `}
              >
                <Icon
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isActive ? "text-primary scale-110" : ""
                  }`}
                />
                <span className="whitespace-nowrap">{tab.label}</span>
                {hasErrors && (
                  <AlertCircle className="h-3 w-3 text-red-600 dark:text-red-400" />
                )}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-t-full animate-in slide-in-from-left duration-300" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-6 bg-white dark:bg-gray-950 rounded-lg border p-6 min-h-[400px]">
        {ActiveComponent && (
          <div className="animate-in fade-in slide-in-from-top-2 duration-300">
            <ActiveComponent />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
