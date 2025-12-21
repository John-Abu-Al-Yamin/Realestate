import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CreditCard } from "lucide-react";

const SubscriptionTab = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
          <CreditCard className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {isRTL ? "الاشتراك" : "Subscription"}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subscription Plan */}
        <div className="space-y-2">
          <Label htmlFor="subscriptionPlan">
            {isRTL ? "خطة الاشتراك" : "Subscription Plan"} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="subscriptionPlan"
            control={control}
            rules={{
              required: isRTL ? "خطة الاشتراك مطلوبة" : "Subscription plan is required",
            }}
            render={({ field }) => (
              <Select
                value={field.value || ""}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  id="subscriptionPlan"
                  className={`w-full ${errors.subscriptionPlan ? "border-red-500" : ""}`}
                >
                  <SelectValue placeholder={isRTL ? "اختر الخطة" : "Select plan"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gold">{isRTL ? "ذهبي" : "Gold"}</SelectItem>
                  <SelectItem value="silver">{isRTL ? "فضي" : "Silver"}</SelectItem>
                  <SelectItem value="bronze">{isRTL ? "برونزي" : "Bronze"}</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.subscriptionPlan && (
            <p className="text-sm text-red-500">{errors.subscriptionPlan.message}</p>
          )}
        </div>

        {/* Subscription Status */}
        <div className="space-y-2">
          <Label htmlFor="subscriptionStatus">
            {isRTL ? "حالة الاشتراك" : "Subscription Status"} <span className="text-red-500">*</span>
          </Label>
          <Controller
            name="subscriptionStatus"
            control={control}
            rules={{
              required: isRTL ? "حالة الاشتراك مطلوبة" : "Subscription status is required",
            }}
            render={({ field }) => (
              <Select
                value={field.value || ""}
                onValueChange={field.onChange}
              >
                <SelectTrigger
                  id="subscriptionStatus"
                  className={`w-full ${errors.subscriptionStatus ? "border-red-500" : ""}`}
                >
                  <SelectValue placeholder={isRTL ? "اختر الحالة" : "Select status"} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="active">{isRTL ? "نشط" : "Active"}</SelectItem>
                  <SelectItem value="trial">{isRTL ? "تجريبي" : "Trial"}</SelectItem>
                  <SelectItem value="expired">{isRTL ? "منتهي" : "Expired"}</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.subscriptionStatus && (
            <p className="text-sm text-red-500">{errors.subscriptionStatus.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionTab;