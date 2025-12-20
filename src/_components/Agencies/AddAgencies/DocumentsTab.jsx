import React, { useRef } from "react";
import { useFormContext } from "react-hook-form";
import { useTranslation } from "next-i18next";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileText, Upload, X } from "lucide-react";

const DocumentsTab = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === "ar";
  const fileInputRef = useRef(null);
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const documents = watch("documents") || [];

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const newDocuments = [...documents, ...files];
    setValue("documents", newDocuments, { shouldValidate: true });
  };

  const handleRemoveFile = (index) => {
    const newDocuments = documents.filter((_, i) => i !== index);
    setValue("documents", newDocuments);
  };

  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {isRTL ? "المستندات" : "Documents"}
        </h3>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label>
            {isRTL ? "رفع المستندات" : "Upload Documents"}
            {documents.length === 0 && <span className="text-red-500"> *</span>}
          </Label>
          <div
            className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="h-10 w-10 mx-auto text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-2">
              {isRTL
                ? "انقر أو اسحب الملفات هنا للرفع"
                : "Click or drag files here to upload"}
            </p>
            <p className="text-xs text-muted-foreground">
              {isRTL
                ? "PDF, DOC, DOCX (حتى 10MB)"
                : "PDF, DOC, DOCX (up to 10MB)"}
            </p>
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>
          {documents.length === 0 && errors.documents && (
            <p className="text-sm text-red-500">{errors.documents.message}</p>
          )}
          <input
            type="hidden"
            {...register("documents", {
              validate: (value) => {
                if (!value || value.length === 0) {
                  return isRTL ? "يجب رفع مستند واحد على الأقل" : "At least one document is required";
                }
                return true;
              },
            })}
          />
        </div>

        {/* Uploaded Files List */}
        {documents.length > 0 && (
          <div className="space-y-2">
            <Label>{isRTL ? "الملفات المرفوعة" : "Uploaded Files"}</Label>
            <div className="space-y-2">
              {documents.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900/50 rounded-lg border"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm font-medium">{file.name}</span>
                    <span className="text-xs text-muted-foreground">
                      ({(file.size / 1024 / 1024).toFixed(2)} MB)
                    </span>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => handleRemoveFile(index)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentsTab;