import CustomHeader from "@/customs/CustomHeader";
import Tabs from "@/_components/Agencies/AddAgencies/Tabs";
import { useTranslation } from "next-i18next";
import React, { useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const AddAgencies = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const tabControlRef = useRef(null);

  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      // Basic Info
      name: "",
      email: "",
      phone: "",
      address: "",
      // Owner Details
      ownerName: "",
      ownerEmail: "",
      ownerPhone: "",
      // Subscription
      subscriptionPlan: "",
      subscriptionStatus: "",
      // Documents
      documents: [],
    },
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
  } = methods;

  const onSubmit = async (data) => {
    try {
      // Validate all fields
      const allFields = [
        "name",
        "email",
        "phone",
        "address",
        "ownerName",
        "ownerEmail",
        "ownerPhone",
        "subscriptionPlan",
        "subscriptionStatus",
        "documents",
      ];

      const isValid = await trigger(allFields);

      if (!isValid && tabControlRef.current) {
        const firstErrorTab = tabControlRef.current.findFirstErrorTab();
        if (firstErrorTab) {
          tabControlRef.current.setActiveTab(firstErrorTab);
        }
        return;
      }

      // If validation passes, submit the form
      console.log("Form Data:", data);
      // Add your API call here
      // await submitAgency(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="min-h-screen bg-gray-50/50 dark:bg-gray-950/50 p-4 md:p-6">
          <div className="w-full mx-auto space-y-6">
            <CustomHeader
              title={isRTL ? "إضافة وكالة" : "Add Agency"}
              description={isRTL ? "إضافة بيانات الوكالة" : "Add agency details"}
            />
            <div className="bg-card rounded-xl border shadow-sm p-6">
              <Tabs
                onTabChange={(controls) => {
                  tabControlRef.current = controls;
                }}
              />
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end gap-4 bg-card rounded-xl border shadow-sm p-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => window.history.back()}
                className="px-6"
              >
                {isRTL ? "إلغاء" : "Cancel"}
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="px-8 bg-primary hover:bg-primary/90"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    {isRTL ? "جاري الحفظ..." : "Saving..."}
                  </>
                ) : (
                  isRTL ? "حفظ الوكالة" : "Save Agency"
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddAgencies;
