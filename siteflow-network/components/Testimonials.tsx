const TESTIMONIALS = [
  {
    quote:
      "We cut survey turnaround from two weeks to two days. The volumetric reports alone saved us from a major billing dispute on a $4M earthwork contract.",
    author: "Mike Delgado",
    role: "Project Manager, Delgado Civil LLC",
  },
  {
    quote:
      "Our owner wanted weekly photo updates. Before, that meant two hours walking the site. Now it's one drone flight and a report lands in their inbox automatically.",
    author: "Sarah Kowalski",
    role: "Senior PM, Kowalski Construction Group",
  },
  {
    quote:
      "We used the aerial footage to sell 40% of our development pre-completion. Buyers could see exactly where their lot sat and how grading was progressing. It closed deals.",
    author: "James Tran",
    role: "Principal, Tran Development Partners",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 px-6 border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-3">
          Social Proof
        </p>
        <h2 className="font-display text-5xl text-gray-900 tracking-wide mb-4">
          What Construction Teams Say
        </h2>
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed mb-12">
          Results from contractors, civil engineers, and developers who replaced
          traditional surveying with drone data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map(({ quote, author, role }) => (
            <div
              key={author}
              className="bg-white rounded-xl p-7 border border-gray-100 border-t-[3px] border-t-brand-orange"
            >
              <p className="text-base text-gray-700 leading-relaxed italic mb-6">
                &ldquo;{quote}&rdquo;
              </p>
              <div>
                <p className="text-base font-medium text-gray-900">{author}</p>
                <p className="text-sm text-gray-400 mt-1">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
