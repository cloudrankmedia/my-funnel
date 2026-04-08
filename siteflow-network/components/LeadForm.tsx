"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const PROJECT_TYPES = [
  "Commercial / General Contracting",
  "Civil / Earthwork",
  "Residential / Real Estate Development",
  "Infrastructure / Linear Projects",
  "Other",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
};

type FieldError = Partial<Record<keyof FormState, string>>;

export default function LeadForm() {
  const router = useRouter();
  const hasTrackedStart = useRef(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
  });
  const [errors, setErrors] = useState<FieldError>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const trackEvent = (eventName: string, params?: Record<string, string>) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, params);
    }
  };

  const handleFirstInteraction = () => {
    if (!hasTrackedStart.current) {
      hasTrackedStart.current = true;
      trackEvent("form_start", { form_name: "lead_capture" });
    }
  };

  const validate = (): boolean => {
    const newErrors: FieldError = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.projectType) newErrors.projectType = "Please select a project type.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    handleFirstInteraction();
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const res = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      // Fire GA4 lead submitted event
      trackEvent("lead_submitted", {
        form_name: "lead_capture",
        project_type: form.projectType,
      });

      router.push("/thank-you");
    } catch {
      setServerError("Network error. Please check your connection and try again.");
      setSubmitting(false);
    }
  };

  return (
    <form
      id="lead-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-xl p-7 border border-gray-100 shadow-sm"
    >
      <h2 className="text-xl font-medium text-navy mb-1">
        Get a Free Site Assessment
      </h2>
      <p className="text-base text-gray-500 mb-6 leading-relaxed">
        We&apos;ll match you with a certified drone surveyor in your area —
        usually within 24 hours.
      </p>

      {/* Name */}
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-500 uppercase tracking-wide mb-1.5"
        >
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={handleChange}
          placeholder="John Martinez"
          className={`w-full px-4 py-3 text-base rounded-md border bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition ${
            errors.name ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.name && (
          <p className="text-sm text-red-500 mt-1">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-500 uppercase tracking-wide mb-1.5"
        >
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="j.martinez@gcfirm.com"
          className={`w-full px-4 py-3 text-base rounded-md border bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition ${
            errors.email ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-500 uppercase tracking-wide mb-1.5"
        >
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 000-0000"
          className={`w-full px-4 py-3 text-base rounded-md border bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition ${
            errors.phone ? "border-red-400" : "border-gray-200"
          }`}
        />
        {errors.phone && (
          <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
        )}
      </div>

      {/* Project Type */}
      <div className="mb-5">
        <label
          htmlFor="projectType"
          className="block text-sm font-medium text-gray-500 uppercase tracking-wide mb-1.5"
        >
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className={`w-full px-4 py-3 text-base rounded-md border bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent transition ${
            errors.projectType ? "border-red-400" : "border-gray-200"
          }`}
        >
          <option value="">Select your project type…</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.projectType && (
          <p className="text-sm text-red-500 mt-1">{errors.projectType}</p>
        )}
      </div>

      {/* Server error */}
      {serverError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
          <p className="text-sm text-red-600">{serverError}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-brand-orange hover:bg-brand-orange-light disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-white font-medium text-base py-3.5 rounded-md mt-1"
      >
        {submitting ? "Submitting…" : "Connect Me With a Drone Surveyor →"}
      </button>

      {/* Privacy */}
      <p className="text-center text-sm text-gray-400 mt-4 leading-relaxed">
        🔒 Your information is 100% private and never sold.
      </p>

      {/* Trust badges */}
      <div className="flex flex-wrap gap-2 mt-3 justify-center">
        {["FAA Part 107 Certified", "RTK/PPK Accuracy", "Free · No Obligation"].map(
          (badge) => (
            <span
              key={badge}
              className="text-sm bg-gray-100 border border-gray-200 rounded px-2.5 py-1 text-gray-500"
            >
              {badge}
            </span>
          )
        )}
      </div>
    </form>
  );
}
