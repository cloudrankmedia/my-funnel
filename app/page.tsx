"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    zip: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/lead", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-6 flex flex-col items-center">
      
      <section className="max-w-xl w-full text-center space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Get Professional Drone Inspection Services Near You
        </h1>

        <p className="text-lg text-gray-600">
          Fast, accurate aerial inspections for roofing, solar, construction, and property assessments.
        </p>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-500 pt-2">
          <span className="border px-3 py-1 rounded-full">✔ Licensed & Insured</span>
          <span className="border px-3 py-1 rounded-full">✔ FAA Certified Pilots</span>
          <span className="border px-3 py-1 rounded-full">✔ 24–48hr Turnaround</span>
        </div>
      </section>

      <section className="max-w-xl w-full mt-8 bg-gray-50 p-6 rounded-2xl shadow-sm">
        {!submitted ? (
          <>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Get a Free Quote
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border rounded-lg p-3 text-base"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full border rounded-lg p-3 text-base"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="ZIP Code"
                required
                className="w-full border rounded-lg p-3 text-base"
                value={form.zip}
                onChange={(e) =>
                  setForm({ ...form, zip: e.target.value })
                }
              />

              <button
                type="submit"
                className="w-full bg-black text-white p-3 rounded-lg text-lg font-semibold"
              >
                Get My Free Quote →
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <h3 className="text-2xl font-semibold mb-2">
              You're All Set 🎉
            </h3>
            <p className="text-gray-600">
              A local drone specialist will contact you shortly.
            </p>
          </div>
        )}
      </section>

      <section className="max-w-xl w-full mt-6 text-center text-xs text-gray-400">
        <p>
          By submitting, you agree to be contacted by a service provider. No obligation.
        </p>
      </section>

    </main>
  );
}