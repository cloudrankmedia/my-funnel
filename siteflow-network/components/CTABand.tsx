"use client";

export default function CTABand() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-navy py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-6xl text-white tracking-wide mb-5">
          Ready to See Your Site from Above?
        </h2>
        <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-md mx-auto">
          Submit your project details and we&apos;ll match you with a certified drone
          surveyor anywhere in the United States — usually within 24 hours. No cost, no
          commitment.
        </p>
        <button
          onClick={scrollToForm}
          className="inline-block bg-brand-orange hover:bg-brand-orange-light transition-colors text-white font-medium text-lg px-12 py-4 rounded-lg"
        >
          Get My Free Site Assessment →
        </button>
        <p className="text-white/30 text-sm mt-6">
          🔒 Your information is never sold &nbsp;·&nbsp; FAA-certified pilots only &nbsp;·&nbsp; No obligation
        </p>
      </div>
    </section>
  );
}
