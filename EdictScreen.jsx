/* eslint-disable */
const EdictScreen = () => {
  const [scope, setScope] = React.useState("Realm-wide");
  const [magnitude, setMagnitude] = React.useState(20);
  const consequences = [
    { label: "Treasury", delta: "−1,200 coin", tone: "down" },
    { label: "Stability", delta: "+0.04", tone: "up" },
    { label: "Reputation", delta: "−0.02 with mercantile guilds", tone: "down" },
    { label: "S.A.S.S.Y. estimates", delta: "73% favorable reception", tone: "up" }
  ];

  return (
    <div className="eup-page">
      <div className="eup-page-header">
        <div>
          <div className="eup-kicker" style={{ marginBottom: 4 }}>Edict · Drafting</div>
          <h1 className="eup-page-title">Bread Subsidy</h1>
          <div className="eup-page-sub">A measure of generosity, weighed against the coffers.</div>
        </div>
        <div className="eup-row">
          <Button kind="ghost">Discard</Button>
          <Button kind="secondary" icon="ph-floppy-disk">Save Draft</Button>
          <Button kind="primary" icon="ph-seal">Seal & Proclaim</Button>
        </div>
      </div>

      <div className="eup-grid-3-1">
        <div className="eup-stack">
          <Card chrome={{ icon: "ph-feather", label: "The Decree" }}>
            <label className="eup-kicker">Title</label>
            <input className="eup-edict-input" defaultValue="Bread Subsidy" />
            <label className="eup-kicker" style={{ marginTop: 16 }}>Preamble</label>
            <textarea className="eup-edict-textarea" defaultValue="Whereas the granaries of Calidone hold sufficient surplus, and the price of bread has risen above the laboring man's daily wage, the Crown decrees a single-cycle reduction of grain prices, that the Realm may pass through this winter with full hearths and quiet streets."></textarea>

            <div className="gold-rule"></div>

            <label className="eup-kicker">Scope</label>
            <div className="eup-row" style={{ gap: 8, marginTop: 8 }}>
              {["Capital only","Realm-wide","Border counties"].map(s => (
                <button key={s} className={"eup-segment" + (scope === s ? " active" : "")} onClick={() => setScope(s)}>{s}</button>
              ))}
            </div>

            <label className="eup-kicker" style={{ marginTop: 16 }}>Magnitude · {magnitude}% reduction</label>
            <input type="range" min="5" max="40" value={magnitude} onChange={e => setMagnitude(+e.target.value)} className="eup-edict-slider" />
            <div className="eup-row" style={{ justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-4)" }}>
              <span>5% · token gesture</span>
              <span>40% · the coffers will weep</span>
            </div>
          </Card>
        </div>

        <div className="eup-stack">
          <Card accent chrome={{ icon: "ph-scales", label: "Consequence Preview" }}>
            <div className="eup-page-sub" style={{ fontSize: 13, marginBottom: 10 }}>Estimated effects upon sealing. The Crown may not consult these after the decree is proclaimed.</div>
            {consequences.map((c, i) => (
              <div key={i} className="eup-edict-row" style={{ padding: "10px 0" }}>
                <div className="eup-edict-text">
                  <h4 className="eup-edict-title" style={{ fontSize: 11 }}>{c.label}</h4>
                  <div className="eup-edict-summary" style={{ fontSize: 13, color: c.tone === "up" ? "var(--moss-1)" : "var(--oxblood-1)", fontFamily: "var(--font-mono)" }}>{c.delta}</div>
                </div>
              </div>
            ))}
          </Card>

          <div className="eup-vellum">
            <p className="eup-vellum-quote">If the Crown wishes to be generous, it must first wish to be solvent. A 20% reduction will hold; 30% will be remembered as folly within two cycles. I cannot help but notice the Eastern March goes uncourted.</p>
            <div className="eup-vellum-sig">— S.A.S.S.Y., Counsel to the Crown</div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.EdictScreen = EdictScreen;
