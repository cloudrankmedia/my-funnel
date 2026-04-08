
<style>
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;1,400&family=Bebas+Neue&display=swap');
  :root {
    --sf-navy: #222E50;
    --sf-orange: #F58D39;
    --sf-navy-light: #2d3d69;
    --sf-orange-light: #faa96a;
    --sf-orange-pale: #fef3ea;
  }
  .sf { font-family: 'DM Sans', sans-serif; color: var(--color-text-primary); max-width: 900px; margin: 0 auto; }
  .sf-nav { display: flex; justify-content: space-between; align-items: center; padding: 14px 28px; border-bottom: 0.5px solid var(--color-border-tertiary); background: var(--color-background-primary); }
  .sf-logo-img { height: 38px; width: auto; display: block; }
  .sf-nav-cta { background: var(--sf-orange); color: #fff; border: none; padding: 9px 18px; border-radius: 6px; font-size: 13px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; }

  .sf-hero { background: var(--sf-navy); color: #fff; padding: 52px 32px 44px; position: relative; overflow: hidden; }
  .sf-hero::before { content: ''; position: absolute; inset: 0; background: repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 28px); pointer-events: none; }
  .sf-eyebrow { font-size: 11px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; color: var(--sf-orange); margin-bottom: 16px; }
  .sf-h1 { font-family: 'Bebas Neue', sans-serif; font-size: 52px; line-height: 1.04; letter-spacing: 1px; margin: 0 0 18px; max-width: 520px; color: #fff; }
  .sf-h1 span { color: var(--sf-orange); }
  .sf-sub { font-size: 15px; line-height: 1.65; color: rgba(255,255,255,0.7); max-width: 480px; margin-bottom: 28px; }
  .sf-stats { display: flex; gap: 28px; flex-wrap: wrap; margin-bottom: 28px; }
  .sf-stat-num { font-family: 'Bebas Neue', sans-serif; font-size: 34px; color: var(--sf-orange); line-height: 1; }
  .sf-stat-label { font-size: 11px; color: rgba(255,255,255,0.55); letter-spacing: 0.3px; margin-top: 2px; }
  .sf-trust { display: flex; align-items: center; gap: 18px; font-size: 12px; color: rgba(255,255,255,0.55); flex-wrap: wrap; }
  .sf-trust-item { display: flex; align-items: center; gap: 5px; }
  .sf-trust-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--sf-orange); flex-shrink: 0; }

  .sf-hero-grid { display: grid; grid-template-columns: 1fr 330px; gap: 36px; align-items: start; }

  .sf-form-card { background: var(--color-background-primary); border-radius: 12px; padding: 24px; border: 0.5px solid rgba(255,255,255,0.12); }
  .sf-form-title { font-size: 15px; font-weight: 500; color: var(--color-text-primary); margin-bottom: 5px; }
  .sf-form-sub { font-size: 12px; color: var(--color-text-secondary); margin-bottom: 16px; line-height: 1.5; }
  .sf-form-field { margin-bottom: 10px; }
  .sf-form-field label { display: block; font-size: 11px; font-weight: 500; color: var(--color-text-secondary); margin-bottom: 4px; text-transform: uppercase; letter-spacing: 0.5px; }
  .sf-form-field input, .sf-form-field select { width: 100%; padding: 9px 11px; border-radius: 6px; border: 0.5px solid var(--color-border-secondary); font-size: 13px; background: var(--color-background-secondary); color: var(--color-text-primary); box-sizing: border-box; font-family: 'DM Sans', sans-serif; }
  .sf-form-btn { width: 100%; background: var(--sf-orange); color: #fff; border: none; padding: 13px; border-radius: 7px; font-size: 14px; font-weight: 500; cursor: pointer; margin-top: 6px; font-family: 'DM Sans', sans-serif; }
  .sf-form-btn:hover { background: var(--sf-orange-light); }
  .sf-privacy { font-size: 11px; color: var(--color-text-tertiary); text-align: center; margin-top: 10px; line-height: 1.5; }
  .sf-badges { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 12px; justify-content: center; }
  .sf-badge { font-size: 10px; background: var(--color-background-secondary); border: 0.5px solid var(--color-border-tertiary); border-radius: 4px; padding: 3px 8px; color: var(--color-text-secondary); }

  .sf-section { padding: 44px 32px; border-bottom: 0.5px solid var(--color-border-tertiary); background: var(--color-background-primary); }
  .sf-section.alt { background: var(--color-background-secondary); }
  .sf-section-label { font-size: 11px; font-weight: 500; letter-spacing: 3px; text-transform: uppercase; color: var(--sf-orange); margin-bottom: 8px; }
  .sf-section-h { font-family: 'Bebas Neue', sans-serif; font-size: 32px; letter-spacing: 0.5px; margin: 0 0 8px; color: var(--color-text-primary); }
  .sf-section-sub { font-size: 14px; color: var(--color-text-secondary); max-width: 560px; line-height: 1.65; margin-bottom: 28px; }

  .sf-benefits-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .sf-ben { background: var(--color-background-primary); border-radius: 10px; padding: 18px; border: 0.5px solid var(--color-border-tertiary); }
  .sf-ben-icon { width: 34px; height: 34px; background: var(--sf-orange-pale); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 10px; }
  .sf-ben-icon svg { width: 16px; height: 16px; stroke: var(--sf-orange); fill: none; stroke-width: 1.5; }
  .sf-ben-title { font-size: 13px; font-weight: 500; margin-bottom: 5px; color: var(--color-text-primary); }
  .sf-ben-copy { font-size: 12px; color: var(--color-text-secondary); line-height: 1.55; }

  .sf-segments { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .sf-seg { border: 0.5px solid var(--color-border-tertiary); border-radius: 10px; padding: 20px; background: var(--color-background-primary); }
  .sf-seg-tag { font-size: 10px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: #fff; background: var(--sf-navy); border-radius: 4px; padding: 3px 9px; display: inline-block; margin-bottom: 10px; }
  .sf-seg h4 { font-size: 14px; font-weight: 500; margin: 0 0 7px; color: var(--color-text-primary); }
  .sf-seg p { font-size: 12px; color: var(--color-text-secondary); margin: 0 0 10px; line-height: 1.55; }
  .sf-seg ul { margin: 0; padding-left: 0; list-style: none; }
  .sf-seg ul li { font-size: 12px; color: var(--color-text-secondary); margin-bottom: 4px; padding-left: 14px; position: relative; }
  .sf-seg ul li::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--sf-orange); position: absolute; left: 0; top: 6px; }

  .sf-how { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; }
  .sf-step { padding: 24px 20px; text-align: center; position: relative; }
  .sf-step:not(:last-child)::after { content: '→'; position: absolute; right: -8px; top: 36px; color: var(--color-text-tertiary); font-size: 18px; }
  .sf-step-num { font-family: 'Bebas Neue', sans-serif; font-size: 48px; color: var(--sf-orange); opacity: 0.25; line-height: 1; }
  .sf-step-title { font-size: 13px; font-weight: 500; margin: 4px 0 6px; color: var(--color-text-primary); }
  .sf-step-copy { font-size: 12px; color: var(--color-text-secondary); line-height: 1.55; }

  .sf-social { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .sf-test { background: var(--color-background-primary); border-radius: 10px; padding: 20px; border: 0.5px solid var(--color-border-tertiary); border-top: 3px solid var(--sf-orange); }
  .sf-test-quote { font-size: 13px; line-height: 1.65; color: var(--color-text-primary); margin-bottom: 14px; font-style: italic; }
  .sf-test-author { font-size: 13px; font-weight: 500; color: var(--color-text-primary); }
  .sf-test-role { font-size: 11px; color: var(--color-text-secondary); margin-top: 2px; }

  .sf-faq { max-width: 660px; }
  .sf-faq-item { border-bottom: 0.5px solid var(--color-border-tertiary); padding: 16px 0; }
  .sf-faq-q { font-size: 14px; font-weight: 500; margin-bottom: 8px; color: var(--color-text-primary); }
  .sf-faq-a { font-size: 13px; color: var(--color-text-secondary); line-height: 1.65; }

  .sf-cta-band { background: var(--sf-navy); padding: 52px 32px; text-align: center; }
  .sf-cta-h { font-family: 'Bebas Neue', sans-serif; font-size: 38px; color: #fff; letter-spacing: 1px; margin: 0 0 12px; }
  .sf-cta-p { font-size: 14px; color: rgba(255,255,255,0.6); margin-bottom: 26px; max-width: 480px; margin-left: auto; margin-right: auto; line-height: 1.6; }
  .sf-cta-big { background: var(--sf-orange); color: #fff; border: none; padding: 15px 36px; border-radius: 8px; font-size: 15px; font-weight: 500; cursor: pointer; font-family: 'DM Sans', sans-serif; }
  .sf-cta-trust { margin-top: 16px; font-size: 12px; color: rgba(255,255,255,0.4); }

  .sf-footer { padding: 20px 32px; display: flex; justify-content: space-between; align-items: center; border-top: 0.5px solid var(--color-border-tertiary); flex-wrap: wrap; gap: 12px; }
  .sf-footer-links { display: flex; gap: 20px; }
  .sf-footer-links a { font-size: 12px; color: var(--color-text-secondary); text-decoration: none; }
  .sf-footer-copy { font-size: 12px; color: var(--color-text-tertiary); }

  @media (max-width: 620px) {
    .sf-hero-grid { grid-template-columns: 1fr; }
    .sf-benefits-grid, .sf-segments, .sf-how, .sf-social { grid-template-columns: 1fr; }
    .sf-h1 { font-size: 36px; }
    .sf-step:not(:last-child)::after { display: none; }
  }
</style>

<div class="sf">
  <h2 style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)">SiteFlow Network — Construction Aerial Intelligence Lead Generation Landing Page</h2>

  <nav class="sf-nav">
    <img src="/mnt/user-data/uploads/siteflow_logo_Long.png" alt="SiteFlow Network" class="sf-logo-img" />
    <div style="display:flex;gap:16px;align-items:center;">
      <span style="font-size:13px;color:var(--color-text-secondary);">For Contractors</span>
      <button class="sf-nav-cta">Get Free Site Assessment</button>
    </div>
  </nav>

  <div class="sf-hero">
    <div class="sf-hero-grid">
      <div>
        <div class="sf-eyebrow">Construction Aerial Intelligence</div>
        <h1 class="sf-h1">Stop Guessing.<br><span>See Every Foot</span><br>of Your Site.</h1>
        <p class="sf-sub">Survey-grade drone data for general contractors, civil engineers, and developers. Track progress, verify quantities, and document every phase — without the cost of traditional surveys.</p>
        <div class="sf-stats">
          <div class="sf-stat"><div class="sf-stat-num">85%</div><div class="sf-stat-label">Faster than ground surveys</div></div>
          <div class="sf-stat"><div class="sf-stat-num">&lt;1cm</div><div class="sf-stat-label">RTK/PPK accuracy</div></div>
          <div class="sf-stat"><div class="sf-stat-num">50%</div><div class="sf-stat-label">Cost savings vs. traditional</div></div>
          <div class="sf-stat"><div class="sf-stat-num">10×</div><div class="sf-stat-label">More data per visit</div></div>
        </div>
        <div class="sf-trust">
          <div class="sf-trust-item"><div class="sf-trust-dot"></div> FAA Part 107 certified pilots</div>
          <div class="sf-trust-item"><div class="sf-trust-dot"></div> No cost, no commitment</div>
          <div class="sf-trust-item"><div class="sf-trust-dot"></div> Matched within 24 hours</div>
        </div>
      </div>
      <div class="sf-form-card">
        <div class="sf-form-title">Get a Free Site Assessment</div>
        <div class="sf-form-sub">We'll match you with a certified drone surveyor in your area — usually within 24 hours.</div>
        <div class="sf-form-field"><label>Full Name</label><input type="text" placeholder="John Martinez" /></div>
        <div class="sf-form-field"><label>Email Address</label><input type="email" placeholder="j.martinez@gcfirm.com" /></div>
        <div class="sf-form-field"><label>Phone Number</label><input type="tel" placeholder="(555) 000-0000" /></div>
        <div class="sf-form-field"><label>Project Type</label>
          <select>
            <option>Select your project type…</option>
            <option>Commercial / General Contracting</option>
            <option>Civil / Earthwork</option>
            <option>Residential / Real Estate Development</option>
            <option>Infrastructure / Linear Projects</option>
            <option>Other</option>
          </select>
        </div>
        <button class="sf-form-btn">Connect Me With a Drone Surveyor →</button>
        <div class="sf-privacy">🔒 Your information is 100% private and never sold.</div>
        <div class="sf-badges">
          <span class="sf-badge">FAA Part 107 Certified</span>
          <span class="sf-badge">RTK/PPK Accuracy</span>
          <span class="sf-badge">Free · No Obligation</span>
        </div>
      </div>
    </div>
  </div>

  <div class="sf-section alt">
    <div class="sf-section-label">What You Get</div>
    <div class="sf-section-h">Every Data Type Your Project Needs</div>
    <div class="sf-section-sub">From groundbreaking to final as-builts — one provider, every phase documented with survey-grade precision.</div>
    <div class="sf-benefits-grid">
      <div class="sf-ben">
        <div class="sf-ben-icon"><svg viewBox="0 0 24 24"><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg></div>
        <div class="sf-ben-title">Progress Monitoring</div>
        <div class="sf-ben-copy">Weekly drone flights compared against BIM models and schedules. Catch delays before they escalate.</div>
      </div>
      <div class="sf-ben">
        <div class="sf-ben-icon"><svg viewBox="0 0 24 24"><path d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"/></svg></div>
        <div class="sf-ben-title">Volumetric Analysis</div>
        <div class="sf-ben-copy">Precise cut/fill calculations and stockpile tracking for billing verification and earthwork planning.</div>
      </div>
      <div class="sf-ben">
        <div class="sf-ben-icon"><svg viewBox="0 0 24 24"><path d="M3 7l9-4 9 4v10l-9 4-9-4V7z"/></svg></div>
        <div class="sf-ben-title">3D Models & Point Clouds</div>
        <div class="sf-ben-copy">Mesh models for clash detection, visualization, and stakeholder sign-off meetings.</div>
      </div>
      <div class="sf-ben">
        <div class="sf-ben-icon"><svg viewBox="0 0 24 24"><path d="M9 20H5a2 2 0 01-2-2V6a2 2 0 012-2h11l4 4v12a2 2 0 01-2 2h-4m-6 0v-6h8v6m-8 0h8"/></svg></div>
        <div class="sf-ben-title">As-Built Documentation</div>
        <div class="sf-ben-copy">Permanent records of each phase. Underground utilities documented before burial.</div>
      </div>
      <div class="sf-ben">
        <div class="sf-ben-icon"><svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg></div>
        <div class="sf-ben-title">Site Mapping</div>
        <div class="sf-ben-copy">High-res orthomosaics and topo maps for grading verification and planning.</div>
      </div>
      <div class="sf-ben">
        <div class="sf-ben-icon"><svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></div>
        <div class="sf-ben-title">Quality Inspections</div>
        <div class="sf-ben-copy">Identify defects, verify installations, and document conditions for warranty and compliance.</div>
      </div>
    </div>
  </div>

  <div class="sf-section">
    <div class="sf-section-label">Who We Serve</div>
    <div class="sf-section-h">Built for Every Type of Construction Business</div>
    <div class="sf-section-sub">Whether you're managing a single commercial build or hundreds of miles of corridor, we'll connect you with the right certified drone provider.</div>
    <div class="sf-segments">
      <div class="sf-seg"><span class="sf-seg-tag">General Contractors</span><h4>Keep projects on track — and prove it</h4><p>Regular progress flights let you share visual updates with owners and resolve disputes before they become claims.</p><ul><li>Weekly progress flights</li><li>Schedule comparison overlays</li><li>Stakeholder-ready reports</li></ul></div>
      <div class="sf-seg"><span class="sf-seg-tag">Civil & Earthwork</span><h4>Verify quantities. Stop overpaying.</h4><p>Accurate cut/fill calculations and stockpile measurement you can take to the billing table with confidence.</p><ul><li>Volume calculations</li><li>Grading verification</li><li>Haul road planning</li></ul></div>
      <div class="sf-seg"><span class="sf-seg-tag">Property Developers</span><h4>Document progress. Close pre-sales faster.</h4><p>Marketing-grade aerials and lot surveys that attract buyers before a single unit is complete.</p><ul><li>Lot surveys & subdivision mapping</li><li>Marketing aerials for pre-sales</li><li>Completion documentation</li></ul></div>
      <div class="sf-seg"><span class="sf-seg-tag">Infrastructure</span><h4>Track linear projects across miles</h4><p>Corridor mapping for roads, pipelines, and utility projects with ROW documentation at scale.</p><ul><li>Corridor mapping</li><li>ROW documentation</li><li>Linear progress tracking</li></ul></div>
    </div>
  </div>

  <div class="sf-section alt">
    <div class="sf-section-label">How It Works</div>
    <div class="sf-section-h">You Submit. We Match. They Fly.</div>
    <div class="sf-section-sub">SiteFlow Network connects construction businesses with FAA-certified drone service providers — at no cost to you.</div>
    <div class="sf-how">
      <div class="sf-step"><div class="sf-step-num">01</div><div class="sf-step-title">Tell us about your project</div><div class="sf-step-copy">Fill out the short form with your project type, location, and what data you need.</div></div>
      <div class="sf-step"><div class="sf-step-num">02</div><div class="sf-step-title">We match you instantly</div><div class="sf-step-copy">SiteFlow routes your request to certified drone surveyors who serve your area and your project type.</div></div>
      <div class="sf-step"><div class="sf-step-num">03</div><div class="sf-step-title">Get your data — fast</div><div class="sf-step-copy">A verified provider contacts you within 24 hours. Deliverables in days, not weeks.</div></div>
    </div>
  </div>

  <div class="sf-section">
    <div class="sf-section-label">Social Proof</div>
    <div class="sf-section-h">What Construction Teams Say</div>
    <div class="sf-section-sub" style="margin-bottom:20px;">Results from contractors, civil engineers, and developers who replaced traditional surveying with drone data.</div>
    <div class="sf-social">
      <div class="sf-test"><div class="sf-test-quote">"We cut survey turnaround from two weeks to two days. The volumetric reports alone saved us from a major billing dispute on a $4M earthwork contract."</div><div class="sf-test-author">Mike Delgado</div><div class="sf-test-role">Project Manager, Delgado Civil LLC</div></div>
      <div class="sf-test"><div class="sf-test-quote">"Our owner wanted weekly photo updates. Before, that meant two hours walking the site. Now it's one drone flight and a report lands in their inbox automatically."</div><div class="sf-test-author">Sarah Kowalski</div><div class="sf-test-role">Senior PM, Kowalski Construction Group</div></div>
      <div class="sf-test"><div class="sf-test-quote">"We used the aerial footage to sell 40% of our development pre-completion. Buyers could see exactly where their lot sat and how grading was progressing. It closed deals."</div><div class="sf-test-author">James Tran</div><div class="sf-test-role">Principal, Tran Development Partners</div></div>
    </div>
  </div>

  <div class="sf-section alt">
    <div class="sf-section-label">FAQ</div>
    <div class="sf-section-h">Common Questions</div>
    <div class="sf-faq">
      <div class="sf-faq-item"><div class="sf-faq-q">Is SiteFlow the drone provider?</div><div class="sf-faq-a">No. SiteFlow Network is a matching platform. We connect your project with pre-vetted, FAA Part 107 certified drone service providers in your area. There is no markup or middleman fee — you work directly with the provider.</div></div>
      <div class="sf-faq-item"><div class="sf-faq-q">How quickly can I expect a provider to contact me?</div><div class="sf-faq-a">Most requests are matched and followed up within 24 business hours. For urgent projects, note your timeline in the form and we'll prioritize accordingly.</div></div>
      <div class="sf-faq-item"><div class="sf-faq-q">What does it cost to submit a request?</div><div class="sf-faq-a">The matching service is completely free to construction businesses. Pricing for drone services is set by and paid directly to the provider.</div></div>
      <div class="sf-faq-item"><div class="sf-faq-q">Are the pilots FAA certified?</div><div class="sf-faq-a">Yes. Every provider in the SiteFlow network holds an FAA Part 107 Remote Pilot Certificate and carries appropriate liability insurance for commercial construction sites.</div></div>
      <div class="sf-faq-item"><div class="sf-faq-q">What deliverables can I expect?</div><div class="sf-faq-a">Depending on your needs: orthomosaic maps, point clouds, 3D mesh models, volumetric reports, progress photos and video, and as-built documentation. Your matched provider will confirm deliverable formats before any flight.</div></div>
      <div class="sf-faq-item"><div class="sf-faq-q">What if my project is still in pre-construction?</div><div class="sf-faq-a">Pre-construction surveys are one of the most valuable applications. Tell us in the form and we'll match you with a provider experienced in baseline mapping and pre-construction documentation.</div></div>
    </div>
  </div>

  <div class="sf-cta-band">
    <div class="sf-cta-h">Ready to See Your Site from Above?</div>
    <p class="sf-cta-p">Submit your project details and we'll match you with a certified drone surveyor in your area — usually within 24 hours. No cost, no commitment.</p>
    <button class="sf-cta-big">Get My Free Site Assessment →</button>
    <div class="sf-cta-trust">🔒 Your information is never sold &nbsp;·&nbsp; FAA-certified pilots only &nbsp;·&nbsp; No obligation</div>
  </div>

  <footer class="sf-footer">
    <img src="/mnt/user-data/uploads/siteflow_logo_Long.png" alt="SiteFlow Network" style="height:28px;width:auto;" />
    <div class="sf-footer-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact</a>
    </div>
    <div class="sf-footer-copy">© 2025 SiteFlow Network. All rights reserved.</div>
  </footer>
</div>
