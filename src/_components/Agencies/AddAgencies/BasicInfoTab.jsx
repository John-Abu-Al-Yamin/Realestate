import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2 } from "lucide-react";

const BasicInfoTab = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Building2 className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {isRTL ? "البيانات الأساسية" : "Basic Information"}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Agency Name */}
        <div className="space-y-2">
          <Label htmlFor="name">
            {isRTL ? "اسم الوكالة" : "Agency Name"} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            {...register("name", {
              required: isRTL ? "اسم الوكالة مطلوب" : "Agency name is required",
            })}
            placeholder={isRTL ? "أدخل اسم الوكالة" : "Enter agency name"}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">
            {isRTL ? "البريد الإلكتروني" : "Email"} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email", {
              required: isRTL ? "البريد الإلكتروني مطلوب" : "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: isRTL ? "البريد الإلكتروني غير صحيح" : "Invalid email address",
              },
            })}
            placeholder={isRTL ? "أدخل البريد الإلكتروني" : "Enter email"}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone">
            {isRTL ? "رقم الهاتف" : "Phone"} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            {...register("phone", {
              required: isRTL ? "رقم الهاتف مطلوب" : "Phone is required",
              pattern: {
                value: /^[0-9]{10,15}$/,
                message: isRTL ? "رقم الهاتف غير صحيح" : "Invalid phone number",
              },
            })}
            placeholder={isRTL ? "أدخل رقم الهاتف" : "Enter phone number"}
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address">
            {isRTL ? "العنوان" : "Address"} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="address"
            {...register("address", {
              required: isRTL ? "العنوان مطلوب" : "Address is required",
            })}
            placeholder={isRTL ? "أدخل العنوان" : "Enter address"}
            className={errors.address ? "border-red-500" : ""}
          />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BasicInfoTab;