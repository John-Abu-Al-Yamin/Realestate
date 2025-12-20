import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

const OwnerDetailsTab = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
          <User className="h-5 w-5 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {isRTL ? "بيانات المالك" : "Owner Details"}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Owner Name */}
        <div className="space-y-2">
          <Label htmlFor="ownerName">
            {isRTL ? "اسم المالك" : "Owner Name"} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="ownerName"
            {...register("ownerName", {
              required: isRTL ? "اسم المالك مطلوب" : "Owner name is required",
            })}
            placeholder={isRTL ? "أدخل اسم المالك" : "Enter owner name"}
            className={errors.ownerName ? "border-red-500" : ""}
          />
          {errors.ownerName && (
            <p className="text-sm text-red-500">{errors.ownerName.message}</p>
          )}
        </div>

        {/* Owner Email */}
        <div className="space-y-2">
          <Label htmlFor="ownerEmail">
            {isRTL ? "بريد المالك الإلكتروني" : "Owner Email"} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="ownerEmail"
            type="email"
            {...register("ownerEmail", {
              required: isRTL ? "بريد المالك مطلوب" : "Owner email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: isRTL ? "البريد الإلكتروني غير صحيح" : "Invalid email address",
              },
            })}
            placeholder={isRTL ? "أدخل بريد المالك" : "Enter owner email"}
            className={errors.ownerEmail ? "border-red-500" : ""}
          />
          {errors.ownerEmail && (
            <p className="text-sm text-red-500">{errors.ownerEmail.message}</p>
          )}
        </div>

        {/* Owner Phone */}
        <div className="space-y-2">
          <Label htmlFor="ownerPhone">
            {isRTL ? "هاتف المالك" : "Owner Phone"} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="ownerPhone"
            {...register("ownerPhone", {
              required: isRTL ? "هاتف المالك مطلوب" : "Owner phone is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: isRTL ? "رقم الهاتف غير صحيح" : "Invalid phone number",
              },
            })}
            placeholder={isRTL ? "أدخل هاتف المالك" : "Enter owner phone"}
            className={errors.ownerPhone ? "border-red-500" : ""}
          />
          {errors.ownerPhone && (
            <p className="text-sm text-red-500">{errors.ownerPhone.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnerDetailsTab;