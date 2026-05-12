export default function Home() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400&family=Bebas+Neue&display=swap');

        :root {
          --sf-navy: #222E50;
          --sf-orange: #F58D39;
        }

        body {
          margin: 0;
          font-family: 'DM Sans', sans-serif;
        }

        .sf { max-width: 1100px; margin: 0 auto; }
        .sf-hero { background: var(--sf-navy); color: #fff; padding: 60px 20px; }
        .sf-h1 { font-family: 'Bebas Neue', sans-serif; font-size: 48px; }
        .sf-btn { background: var(--sf-orange); color: #fff; padding: 14px; border: none; border-radius: 6px; cursor: pointer; width: 100%; }
        .sf-form { background: #fff; padding: 20px; border-radius: 10px; color: #000; }
        input, select { width: 100%; padding: 10px; margin-bottom: 10px; }
      `}</style>

      <div className="sf">

        {/* HERO */}
        <div className="sf-hero">
          <h1 className="sf-h1">
            Stop Guessing.<br />
            <span style={{ color: "#F58D39" }}>See Every Foot</span><br />
            of Your Site.
          </h1>

          <p>
            Survey-grade drone data for contractors, engineers, and developers.
          </p>

          <div className="sf-form">
            <h3>Get a Free Site Assessment</h3>

            <input placeholder="Full Name" />
            <input placeholder="Email" />
            <input placeholder="Phone" />

            <select>
              <option>Project Type</option>
              <option>Commercial</option>
              <option>Civil</option>
              <option>Residential</option>
            </select>

            <button className="sf-btn">
              Connect Me →
            </button>
          </div>
        </div>

      </div>
    </>
  );
}