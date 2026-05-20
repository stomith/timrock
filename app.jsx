// Main app: Nav, mobile menu, sticky call bar, Tweaks panel, and section composition.

function applyTheme(t) {
  // Accent
  document.documentElement.style.setProperty("--accent", t.accent);
  // Density
  document.documentElement.setAttribute("data-density", t.density);
  // Theme
  document.documentElement.setAttribute("data-theme", t.theme);
}

function Nav({ onMenu, menuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#" className="brand" aria-label="TimRock Automotive home">
          <span className="brand-mark">
            <img src="assets/logo.jpg" alt="" />
          </span>
          <span className="brand-text">
            <span className="brand-name">TimRock Automotive</span>
            <span className="brand-sub">Concord, CA · Est. 1995</span>
          </span>
        </a>

        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#visit">Visit</a></li>
        </ul>

        <div className="nav-cta">
          <a className="nav-phone" href={`tel:${SHOP_PHONE_TEL}`}>{SHOP_PHONE_DISPLAY}</a>
          <a className="btn btn-primary" href={`tel:${SHOP_PHONE_TEL}`}>
            <PhoneIcon /> Call now
          </a>
          <button
            className="menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={onMenu}
          >
            <span className="bar"></span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function MobileMenu({ open, onClose }) {
  return (
    <div className={`m-menu ${open ? "open" : ""}`}>
      <ul onClick={onClose}>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#reviews">Reviews</a></li>
        <li><a href="#book">Book</a></li>
        <li><a href="#visit">Hours &amp; Location</a></li>
      </ul>
      <div className="m-cta">
        <a className="btn btn-primary" href={`tel:${SHOP_PHONE_TEL}`} onClick={onClose}>
          <PhoneIcon /> Call {SHOP_PHONE_DISPLAY}
        </a>
        <a className="btn btn-ghost" href="#book" onClick={onClose}>
          Book appointment <Arrow />
        </a>
      </div>
    </div>
  );
}

function CallBar() {
  return (
    <a className="call-bar" href={`tel:${SHOP_PHONE_TEL}`}>
      <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <PhoneIcon size={18} /> Call the shop
      </span>
      <span className="ph-num">{SHOP_PHONE_DISPLAY}</span>
    </a>
  );
}

function App() {
  const [t, setTweak] = useTweaks(window.__TWEAKS_DEFAULTS);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => { applyTheme(t); }, [t.accent, t.density, t.theme]);

  // close mobile menu on link click handled per-link; also on resize up:
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 720) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <Nav onMenu={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <About />
        <Reviews />
        <Booking />
        <Location />
      </main>

      <Footer />
      <CallBar />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={[
            { value: "warm-light", label: "Light" },
            { value: "warm-dark", label: "Dark" },
          ]}
          onChange={(v) => setTweak("theme", v)}
        />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={["#B0593A", "#1F5D4F", "#2C4A7A", "#7A4A2B", "#6B4FA0"]}
          onChange={(v) => setTweak("accent", v)}
        />

        <TweakSection label="Density" />
        <TweakRadio
          label="Spacing"
          value={t.density}
          options={[
            { value: "compact", label: "Compact" },
            { value: "default", label: "Default" },
            { value: "spacious", label: "Spacious" },
          ]}
          onChange={(v) => setTweak("density", v)}
        />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
