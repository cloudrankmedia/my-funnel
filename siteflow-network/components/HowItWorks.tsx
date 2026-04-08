const STEPS = [
  {
    num: "01",
    title: "Tell us about your project",
    copy: "Fill out the short form with your project type, location, and what data you need.",
  },
  {
    num: "02",
    title: "We match you instantly",
    copy: "SiteFlow routes your request to certified drone surveyors who serve your area and your project type.",
  },
  {
    num: "03",
    title: "Get your data — fast",
    copy: "A verified provider contacts you within 24 hours. Deliverables in days, not weeks.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-3">
          How It Works
        </p>
        <h2 className="font-display text-5xl text-gray-900 mb-4">
          You Submit. We Match. They Fly.
        </h2>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-14">
          SiteFlow Network connects construction businesses with FAA-certified
          drone service providers across the United States — at no cost to you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {STEPS.map(({ num, title, copy }, i) => (
            <div key={num} className="relative text-center px-8 pb-10 md:pb-0">
              {i < STEPS.length - 1 && (
                <span className="hidden md:block absolute right-0 top-7 text-gray-300 text-2xl translate-x-1/2 z-10">
                  →
                </span>
              )}
              <div className="font-display text-7xl text-brand-orange opacity-20 leading-none mb-3">
                {num}
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-3">{title}</h3>
              <p className="text-base text-gray-500 leading-relaxed max-w-xs mx-auto">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}