// Page sections

const SHOP_PHONE_DISPLAY = "(925) 690-7222";
const SHOP_PHONE_TEL = "+19256907222";
const SHOP_ADDRESS_LINE1 = "2570 Cloverdale Ave, Suite 2B";
const SHOP_ADDRESS_LINE2 = "Concord, CA 94518";

// ---------- HERO ----------
function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="eyebrow">Concord, California · Est. 1995</span>
            <h1 className="h-display h1 hero-title">
              The shop your<br/>
              car deserves — <em>and</em><br/>
              the people you can trust.
            </h1>
            <p className="lede">
              Family-run, full-service auto repair. ASE Master and Ford Senior
              Master Technician with thirty years under the hood — diesel and gas,
              transmissions to electrical, suspensions to A/C. Done right the first time.
            </p>

            <div className="hero-ctas">
              <a className="btn btn-primary" href={`tel:${SHOP_PHONE_TEL}`}>
                <PhoneIcon /> Call {SHOP_PHONE_DISPLAY}
              </a>
              <a className="btn btn-ghost" href="#book">
                Book an appointment <Arrow />
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="k">Experience</span>
                <span className="v">30+ years</span>
              </div>
              <div>
                <span className="k">Certifications</span>
                <span className="v">ASE Master</span>
              </div>
              <div>
                <span className="k">Specialty</span>
                <span className="v">Ford Senior Master</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrap">
            <ImgPlaceholder
              label="HERO IMAGE"
              size="1200 × 1400"
              desc="Portrait of Aaron in the shop next to a lifted truck, mid-conversation with a customer. Natural light from open bay door."
              aspect="6 / 7"
            />
            <div className="hero-pill">
              <span className="dot"></span>
              Open today · Walk-ins welcome
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- TRUST STRIP ----------
function TrustStrip() {
  const items = [
    { ic: "30+", k: "Years of experience", s: "Concord local" },
    { ic: "ASE", k: "Master Technician", s: "Certified" },
    { ic: "F", k: "Ford Sr. Master", s: "Factory-trained" },
    { ic: "★", k: "Family-run shop", s: "Honest pricing" },
  ];
  return (
    <section className="trust">
      <div className="wrap">
        <div className="trust-row">
          {items.map((it, i) => (
            <div className="trust-item" key={i}>
              <div className="trust-icon">{it.ic}</div>
              <div>
                <div className="t-k">{it.k}</div>
                <div className="t-sub">{it.s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- SERVICES ----------
const SERVICES = [
  {
    num: "01",
    title: "Engine — Gas & Diesel",
    desc: "Diagnosis, tune-ups, rebuilds, timing, head gaskets and beyond. Modern OBD-II to older carbureted — we've seen it.",
    tags: ["Gas", "Diesel", "Diagnostics"],
  },
  {
    num: "02",
    title: "Transmission",
    desc: "Service, repair and replacement for automatic and manual transmissions. We catch shifting issues before they get expensive.",
    tags: ["Auto", "Manual", "Service"],
  },
  {
    num: "03",
    title: "Suspension & Steering",
    desc: "Shocks, struts, control arms, alignments and ride-feel tuning. Trucks, sedans, SUVs and lifted rigs.",
    tags: ["Alignment", "Struts", "Lift kits"],
  },
  {
    num: "04",
    title: "Rear End & Driveline",
    desc: "Differential service, axle work, U-joints and driveline rebuilds — the kind of work most shops won't take on.",
    tags: ["Diff service", "Axles", "Driveshafts"],
  },
  {
    num: "05",
    title: "Air Conditioning",
    desc: "Full A/C diagnosis, recharge, compressor and component replacement. Cold air, fast turnaround through California summers.",
    tags: ["Recharge", "Compressor", "Diagnosis"],
  },
  {
    num: "06",
    title: "Electrical Systems",
    desc: "Charging, starting, wiring, sensors and module work. We chase the gremlins other shops give up on.",
    tags: ["Wiring", "Alternator", "Sensors"],
  },
  {
    num: "07",
    title: "Brakes",
    desc: "Pads, rotors, calipers, hydraulics and ABS diagnostics — quiet stops and a confident pedal.",
    tags: ["Pads", "ABS", "Hydraulics"],
  },
  {
    num: "08",
    title: "Scheduled Maintenance",
    desc: "Factory-interval oil, fluids, filters and inspections that keep warranties intact and small problems small.",
    tags: ["Oil", "Fluids", "Inspection"],
  },
  {
    num: "09",
    title: "Ford Specialist Work",
    desc: "Power Stroke diesels, EcoBoost, Super Duty trucks — Senior Master factory training that's rare in the East Bay.",
    tags: ["Power Stroke", "EcoBoost", "Super Duty"],
  },
];

function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="h-display h2" style={{ marginTop: 16 }}>
              Full-service. One shop. No run-around.
            </h2>
          </div>
          <p className="lede">
            We work on most makes and models, gas or diesel. If it rolls, tows, hauls
            or just refuses to start in the driveway — bring it by. Estimates are
            honest and explained in plain language.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div className="service-card" key={s.num}>
              <span className="service-num">SERVICE / {s.num}</span>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span className="service-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- ABOUT ----------
function About() {
  const creds = [
    { num: "30+", lbl: "Years repairing cars in the Bay Area", meta: "Since 1995" },
    { num: "ASE", lbl: "Master Technician certification", meta: "All 8 areas" },
    { num: "F-S", lbl: "Ford Motor Co. Senior Master Technician", meta: "Factory-trained" },
    { num: "All", lbl: "Gas, diesel, light truck and passenger work", meta: "Most makes & models" },
  ];
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="about-grid">
          <div>
            <span className="eyebrow">About TimRock</span>
            <h2 className="h-display h2" style={{ marginTop: 16, marginBottom: 24 }}>
              A neighborhood shop that takes the hard jobs.
            </h2>
            <p className="lede">
              Aaron has been turning wrenches in Concord for over three decades. TimRock
              Automotive is the kind of shop where the owner is the one doing your repair,
              where estimates come with explanations, and where work is done right the
              first time — even the tricky stuff most shops won't touch.
            </p>
            <p className="lede" style={{ marginTop: 16 }}>
              Whether it's a 2023 Power Stroke needing diagnostics, a transmission that
              isn't shifting clean, a wiring gremlin nobody else has cracked, or just
              your daily-driver's 60k service — you'll get the same straight answer.
            </p>
          </div>

          <div>
            <ImgPlaceholder
              label="ABOUT IMAGE"
              size="900 × 700"
              desc="Aaron at the workbench, tools laid out, focused on a component. Warm shop lighting, real environment."
              aspect="9 / 7"
            />
            <div className="credentials">
              {creds.map((c, i) => (
                <div className="cred-row" key={i}>
                  <span className="num">{c.num}</span>
                  <span className="lbl">{c.lbl}</span>
                  <span className="meta">{c.meta}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- REVIEWS ----------
const REVIEWS = [
  {
    text: "Aaron diagnosed a wiring issue in my Super Duty that two other shops couldn't figure out. Honest about what it would take, and the truck has run perfect since.",
    who: "Mike R.",
    where: "Pleasant Hill",
  },
  {
    text: "Family has taken cars to TimRock for twelve years. Fair pricing, explains everything, and never tries to sell you work you don't need. Rare these days.",
    who: "Janelle T.",
    where: "Concord",
  },
  {
    text: "Brought in a 7.3 Power Stroke that needed serious attention. The level of knowledge here is the real deal — wouldn't trust my diesel anywhere else.",
    who: "Carlos D.",
    where: "Walnut Creek",
  },
];

function Reviews() {
  return (
    <section id="reviews">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">What customers say</span>
            <h2 className="h-display h2" style={{ marginTop: 16 }}>
              Thirty years of word-of-mouth.
            </h2>
          </div>
          <p className="lede">
            Most of our customers were sent by someone they trust. That's
            the only marketing that's ever really worked for us.
          </p>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((r, i) => (
            <div className="review" key={i}>
              <div className="stars" aria-label="5 out of 5 stars">
                {[0,1,2,3,4].map((n) => <StarIcon key={n} size={14}/>)}
              </div>
              <p>&ldquo;{r.text}&rdquo;</p>
              <div className="review-foot">
                <span className="who">— {r.who}</span>
                <span className="where">{r.where}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- BOOKING (multi-step, interactive) ----------
const SERVICE_OPTIONS = [
  "Diagnostic",
  "Oil & maintenance",
  "Brakes",
  "Engine — gas",
  "Engine — diesel",
  "Transmission",
  "Suspension / alignment",
  "A/C service",
  "Electrical",
  "Other / not sure",
];

function Booking() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({
    services: [],
    vehicle: { year: "", make: "", model: "" },
    name: "",
    phone: "",
    email: "",
    when: "asap",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [ref, setRef] = useState("");

  function set(field, value) {
    setData((d) => ({ ...d, [field]: value }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }
  function setV(field, value) {
    setData((d) => ({ ...d, vehicle: { ...d.vehicle, [field]: value } }));
    setErrors((e) => ({ ...e, [field]: undefined }));
  }
  function toggleService(s) {
    setData((d) => {
      const has = d.services.includes(s);
      return { ...d, services: has ? d.services.filter((x) => x !== s) : [...d.services, s] };
    });
    setErrors((e) => ({ ...e, services: undefined }));
  }

  function validateStep(n) {
    const errs = {};
    if (n === 0) {
      if (data.services.length === 0) errs.services = "Pick at least one service.";
    } else if (n === 1) {
      if (!data.vehicle.year.trim()) errs.year = "Year required.";
      if (!data.vehicle.make.trim()) errs.make = "Make required.";
      if (!data.vehicle.model.trim()) errs.model = "Model required.";
    } else if (n === 2) {
      if (!data.name.trim()) errs.name = "Name required.";
      if (!/^[\d\-\(\)\s\+]{10,}$/.test(data.phone)) errs.phone = "Valid phone required.";
      if (data.email && !/^\S+@\S+\.\S+$/.test(data.email)) errs.email = "Valid email or leave blank.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function next() {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 3));
  }
  function back() { setStep((s) => Math.max(s - 1, 0)); }

  function submit(e) {
    e.preventDefault();
    if (!validateStep(2)) return;
    setRef("TR-" + Math.random().toString(36).slice(2, 7).toUpperCase());
    setSubmitted(true);
    setStep(3);
  }

  const totalSteps = 3;

  return (
    <section className="booking" id="book">
      <div className="wrap">
        <div className="booking-grid">
          <div>
            <span className="eyebrow">Book an appointment</span>
            <h2 className="h-display h2" style={{ marginTop: 16, marginBottom: 24 }}>
              Tell us what's going on. We'll get back same-day.
            </h2>
            <p className="lede">
              Prefer to talk? Call <a href={`tel:${SHOP_PHONE_TEL}`} style={{ color: "var(--accent)", fontWeight: 600 }}>{SHOP_PHONE_DISPLAY}</a>
              {" "}— that's the fastest way to get on the schedule, especially for diagnostic work.
            </p>

            <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
              <Bullet n="1" t="Quick estimate">A no-pressure ballpark before you commit.</Bullet>
              <Bullet n="2" t="Straight pricing">Honest quotes with the work explained in plain English.</Bullet>
              <Bullet n="3" t="Same-day reply">Calls and bookings are answered the same business day.</Bullet>
            </div>
          </div>

          <div className="form-card">
            {!submitted && (
              <div className="form-steps" aria-label={`Step ${step + 1} of ${totalSteps}`}>
                {[0, 1, 2].map((n) => (
                  <div key={n} className={`form-step ${n < step ? "done" : ""} ${n === step ? "active" : ""}`}></div>
                ))}
              </div>
            )}

            {step === 0 && (
              <div>
                <h3 className="h-display h3" style={{ margin: "0 0 18px" }}>What's the car in for?</h3>
                <div className="chip-group">
                  {SERVICE_OPTIONS.map((s) => (
                    <div
                      key={s}
                      className={`chip ${data.services.includes(s) ? "selected" : ""}`}
                      onClick={() => toggleService(s)}
                      role="checkbox"
                      tabIndex={0}
                      aria-checked={data.services.includes(s)}
                      onKeyDown={(e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); toggleService(s); } }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                {errors.services && <div className="err mono" style={{ marginTop: 12, fontSize: 12, color: "oklch(0.55 0.18 28)" }}>{errors.services}</div>}
                <div className="form-foot">
                  <span className="mono" style={{ fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Step 1 of 3
                  </span>
                  <button type="button" className="btn btn-dark" onClick={next}>
                    Continue <Arrow />
                  </button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h3 className="h-display h3" style={{ margin: "0 0 18px" }}>About your vehicle</h3>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="year">Year</label>
                    <input id="year" type="text" inputMode="numeric" placeholder="e.g. 2018"
                      value={data.vehicle.year} onChange={(e) => setV("year", e.target.value)} />
                    {errors.year && <span className="err">{errors.year}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="make">Make</label>
                    <input id="make" type="text" placeholder="e.g. Ford"
                      value={data.vehicle.make} onChange={(e) => setV("make", e.target.value)} />
                    {errors.make && <span className="err">{errors.make}</span>}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="model">Model</label>
                  <input id="model" type="text" placeholder="e.g. F-250 Super Duty"
                    value={data.vehicle.model} onChange={(e) => setV("model", e.target.value)} />
                  {errors.model && <span className="err">{errors.model}</span>}
                </div>
                <div className="field">
                  <label htmlFor="notes">Anything else we should know? (optional)</label>
                  <textarea id="notes" rows="3" placeholder="Noises, warning lights, when it started, etc."
                    value={data.notes} onChange={(e) => set("notes", e.target.value)} />
                </div>
                <div className="form-foot">
                  <button type="button" className="btn btn-ghost" onClick={back}>Back</button>
                  <button type="button" className="btn btn-dark" onClick={next}>Continue <Arrow /></button>
                </div>
              </div>
            )}

            {step === 2 && (
              <form onSubmit={submit}>
                <h3 className="h-display h3" style={{ margin: "0 0 18px" }}>How do we reach you?</h3>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" value={data.name} onChange={(e) => set("name", e.target.value)} />
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" type="tel" placeholder="(925) 555-0123"
                      value={data.phone} onChange={(e) => set("phone", e.target.value)} />
                    {errors.phone && <span className="err">{errors.phone}</span>}
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email (optional)</label>
                    <input id="email" type="email" value={data.email} onChange={(e) => set("email", e.target.value)} />
                    {errors.email && <span className="err">{errors.email}</span>}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="when">When does this need to happen?</label>
                  <select id="when" value={data.when} onChange={(e) => set("when", e.target.value)}>
                    <option value="asap">As soon as possible</option>
                    <option value="this-week">This week</option>
                    <option value="next-week">Next week</option>
                    <option value="flexible">I'm flexible</option>
                  </select>
                </div>
                <div className="form-foot">
                  <button type="button" className="btn btn-ghost" onClick={back}>Back</button>
                  <button type="submit" className="btn btn-primary">Request appointment <Arrow /></button>
                </div>
              </form>
            )}

            {submitted && (
              <div className="success-state">
                <div className="check">✓</div>
                <h4>Got it — we'll be in touch.</h4>
                <p className="lede" style={{ margin: "0 auto", maxWidth: "32ch" }}>
                  Aaron or someone from the shop will reach out today to confirm
                  a time. If it's urgent, give us a call.
                </p>
                <div className="ref">REF · {ref}</div>
                <div style={{ marginTop: 22, display: "flex", justifyContent: "center", gap: 10, flexWrap: "wrap" }}>
                  <a className="btn btn-primary" href={`tel:${SHOP_PHONE_TEL}`}>
                    <PhoneIcon /> Call now
                  </a>
                  <button className="btn btn-ghost" onClick={() => { setSubmitted(false); setStep(0); setData({services: [], vehicle: {year:"",make:"",model:""}, name:"", phone:"", email:"", when:"asap", notes:""}); }}>
                    Book another
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ n, t, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "44px 1fr", gap: 16, alignItems: "start" }}>
      <div style={{
        width: 36, height: 36, borderRadius: 8,
        border: "1px solid var(--hair-2)", background: "var(--bg)",
        display: "grid", placeItems: "center",
        fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)", fontWeight: 600,
      }}>{n}</div>
      <div>
        <div style={{ fontWeight: 600, marginBottom: 2 }}>{t}</div>
        <div style={{ color: "var(--ink-soft)", fontSize: 14.5 }}>{children}</div>
      </div>
    </div>
  );
}

// ---------- LOCATION & HOURS ----------
const HOURS = [
  { d: "Monday",    h: "8:00 AM – 5:30 PM" },
  { d: "Tuesday",   h: "8:00 AM – 5:30 PM" },
  { d: "Wednesday", h: "8:00 AM – 5:30 PM" },
  { d: "Thursday",  h: "8:00 AM – 5:30 PM" },
  { d: "Friday",    h: "8:00 AM – 5:30 PM" },
  { d: "Saturday",  h: "By appointment" },
  { d: "Sunday",    h: "Closed" },
];

function Location() {
  const todayIdx = (new Date().getDay() + 6) % 7; // Mon=0
  return (
    <section id="visit">
      <div className="wrap">
        <div className="sec-head">
          <div>
            <span className="eyebrow">Find the shop</span>
            <h2 className="h-display h2" style={{ marginTop: 16 }}>
              Drop by, drop it off, or call ahead.
            </h2>
          </div>
          <p className="lede">
            We're just off Clayton Road, easy to find and easy to park.
            Free customer parking out front and a small waiting area inside.
          </p>
        </div>

        <div className="location-grid">
          <div className="map-ph" role="img" aria-label="Map showing TimRock Automotive in Concord, CA">
            <div className="map-pin">
              <div className="pin"></div>
              <div className="pin-label">TimRock Automotive</div>
            </div>
            <div className="map-caption">MAP PLACEHOLDER · 800 × 600 · Google Maps embed of 2570 Cloverdale Ave, Concord CA</div>
          </div>

          <div className="info-card">
            <div className="info-block">
              <h4>Address</h4>
              <div className="addr">
                {SHOP_ADDRESS_LINE1}
                <span className="small">{SHOP_ADDRESS_LINE2}</span>
              </div>
              <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <a className="btn btn-ghost" href="https://maps.google.com/?q=2570+Cloverdale+Ave+Concord+CA" target="_blank" rel="noopener noreferrer">
                  Get directions <Arrow />
                </a>
              </div>
            </div>
            <div className="info-block">
              <h4>Hours</h4>
              <dl className="hours-list">
                {HOURS.map((row, i) => (
                  <React.Fragment key={row.d}>
                    <dt className={i === todayIdx ? "today" : ""}>{row.d}{i === todayIdx ? " · Today" : ""}</dt>
                    <dd className={i === todayIdx ? "today" : ""}>{row.h}</dd>
                  </React.Fragment>
                ))}
              </dl>
            </div>
            <div className="info-block">
              <h4>Phone</h4>
              <a href={`tel:${SHOP_PHONE_TEL}`} className="addr" style={{ textDecoration: "none", color: "var(--ink)" }}>
                {SHOP_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- FOOTER ----------
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="ft-top">
          <div>
            <div className="brand-foot">
              <div className="brand-mark">
                <img src="assets/logo.jpg" alt="TimRock Automotive" />
              </div>
              <div className="brand-text">
                <span className="brand-name" style={{ color: "var(--bg)" }}>TimRock Automotive</span>
                <span className="brand-sub">Concord, CA</span>
              </div>
            </div>
            <p className="blurb">
              Family-run full-service auto repair. ASE Master &amp; Ford Senior
              Master Technician. Thirty years in the East Bay.
            </p>
          </div>
          <div>
            <h5>Visit</h5>
            <ul>
              <li>{SHOP_ADDRESS_LINE1}</li>
              <li>{SHOP_ADDRESS_LINE2}</li>
              <li><a href="https://maps.google.com/?q=2570+Cloverdale+Ave+Concord+CA" target="_blank" rel="noopener noreferrer">Get directions →</a></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <ul>
              <li><a href={`tel:${SHOP_PHONE_TEL}`}>{SHOP_PHONE_DISPLAY}</a></li>
              <li><a href="#book">Book online</a></li>
              <li>Mon–Fri · 8a–5:30p</li>
            </ul>
          </div>
          <div>
            <h5>Site</h5>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#visit">Hours &amp; location</a></li>
            </ul>
          </div>
        </div>
        <div className="ft-bot">
          <span>© {new Date().getFullYear()} TimRock Automotive · All rights reserved</span>
          <span>Concord, California</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Hero, TrustStrip, Services, About, Reviews, Booking, Location, Footer, SHOP_PHONE_DISPLAY, SHOP_PHONE_TEL });
