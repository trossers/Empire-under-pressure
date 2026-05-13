/* eslint-disable */
const KingdomDashboard = ({ onSummonSassy }) => (
  <div className="eup-page">
    <div className="eup-page-header">
      <div>
        <h1 className="eup-page-title">The Realm at Cycle XII</h1>
        <div className="eup-page-sub">Three matters await your seal. The harvest closes in twelve hours.</div>
      </div>
      <div className="eup-row">
        <Button kind="secondary" icon="ph-scroll">Scribe a Decree</Button>
        <Button kind="primary" icon="ph-seal">Advance the Cycle</Button>
      </div>
    </div>

    <div className="eup-grid-4" style={{ marginBottom: 24 }}>
      <Resource icon="ph-coins" value="14,820" delta={-1240} label="Coffers" />
      <Resource icon="ph-grains" value="9,212" delta={340} label="Granaries" />
      <Resource icon="ph-sword" value="3,400" delta={-12} label="Standing Army" />
      <Resource icon="ph-users-three" value="62,400" delta={120} label="Souls" />
    </div>

    <div className="eup-grid-3-1">
      <div className="eup-stack">
        <Card chrome={{ icon: "ph-globe-hemisphere-east", label: "State of the Realm" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}>
            <Meter label="Stability" value={0.62} tone="moss" valueLabel="0.62 · Restless" />
            <Meter label="Legitimacy" value={0.78} tone="navy" valueLabel="0.78 · Recognized" />
            <Meter label="Treasury Health" value={0.41} tone="oxblood" valueLabel="0.41 · Strained" />
            <Meter label="Reputation Abroad" value={0.55} tone="gold" valueLabel="0.55 · Watchful" />
          </div>
          <div className="gold-rule" style={{ marginTop: 18 }}></div>
          <div className="eup-row" style={{ gap: 8, flexWrap: "wrap" }}>
            <Chip tone="warn" icon="ph-circle">Bread Riots Brewing</Chip>
            <Chip tone="info" icon="ph-handshake">Vorant Concord Active</Chip>
            <Chip tone="danger" icon="ph-circle">Borderline Insolvent</Chip>
            <Chip tone="neutral">Cycle XII of XX</Chip>
          </div>
        </Card>

        <Card chrome={{ icon: "ph-scroll", label: "Pending Edicts" }}>
          <div className="eup-edict-row">
            <div className="eup-edict-icon"><i className="ph ph-grains" style={{fontSize:20}}></i></div>
            <div className="eup-edict-text">
              <h4 className="eup-edict-title">Bread Subsidy</h4>
              <div className="eup-edict-summary">Reduce grain prices by one fifth for a single cycle. Consequence: −1,200 coin, +0.04 stability.</div>
            </div>
            <Chip tone="warn">Drafted</Chip>
          </div>
          <div className="eup-edict-row">
            <div className="eup-edict-icon"><i className="ph ph-handshake" style={{fontSize:20}}></i></div>
            <div className="eup-edict-text">
              <h4 className="eup-edict-title">Embassy to Vorant</h4>
              <div className="eup-edict-summary">Dispatch an emissary to renegotiate the grain transit clause. Risk: emissary may be dishonored.</div>
            </div>
            <Chip tone="info">Awaiting Seal</Chip>
          </div>
          <div className="eup-edict-row">
            <div className="eup-edict-icon"><i className="ph ph-flag" style={{fontSize:20}}></i></div>
            <div className="eup-edict-text">
              <h4 className="eup-edict-title">Levy Three Banners from the Eastern March</h4>
              <div className="eup-edict-summary">Conscript 600 from rural counties. Consequence: −0.06 stability in those counties; +600 standing army.</div>
            </div>
            <Chip tone="danger">Inflammatory</Chip>
          </div>
        </Card>

        <Card chrome={{ icon: "ph-bell-simple", label: "Dispatches · Cycle XII" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="eup-row" style={{alignItems:"flex-start", gap:12}}>
              <span className="eup-chip eup-chip-info" style={{whiteSpace:"nowrap"}}>Diplomacy</span>
              <div style={{flex:1}}>
                <div style={{fontFamily:"var(--font-serif)", fontSize:14, color:"var(--ink-1)"}}>Vorant has withdrawn its emissary from the high table.</div>
                <div className="eup-page-sub" style={{fontSize:12, marginTop:2}}>Three days before the grain levy vote — the timing is not subtle.</div>
              </div>
            </div>
            <div className="eup-row" style={{alignItems:"flex-start", gap:12}}>
              <span className="eup-chip eup-chip-warn" style={{whiteSpace:"nowrap"}}>Treasury</span>
              <div style={{flex:1}}>
                <div style={{fontFamily:"var(--font-serif)", fontSize:14, color:"var(--ink-1)"}}>The chancellery cannot honor the western bridge contract without further levies.</div>
              </div>
            </div>
            <div className="eup-row" style={{alignItems:"flex-start", gap:12}}>
              <span className="eup-chip eup-chip-stable" style={{whiteSpace:"nowrap"}}>Court</span>
              <div style={{flex:1}}>
                <div style={{fontFamily:"var(--font-serif)", fontSize:14, color:"var(--ink-1)"}}>Two scholars petitioned an audience to discuss the constitutional question.</div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="eup-stack">
        <div className="eup-vellum">
          <p className="eup-vellum-quote">Your Majesty inherits a fragile peace. The Duchy of Vorant has not forgotten the bread riots — and yet, neither have your bakers. A subsidy now is generosity; later, desperation. I leave the choice, naturally, to your better judgment.</p>
          <div className="eup-vellum-sig">— S.A.S.S.Y., Counsel to the Crown</div>
        </div>

        <Card chrome={{ icon: "ph-book-open-text", label: "Essay · Outstanding" }}>
          <h3 className="eup-card-title" style={{fontSize:14}}>On the Limits of Sovereign Mercy</h3>
          <div className="gold-rule"></div>
          <div className="eup-page-sub" style={{fontSize:13, marginBottom:12}}>Due Cycle XIV. 1,200 — 1,800 words. The Crown may invoke S.A.S.S.Y. but not delegate the writing.</div>
          <Button kind="secondary" size="sm" icon="ph-feather">Open Manuscript</Button>
        </Card>

        <Card chrome={{ icon: "ph-hourglass", label: "World Clock" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink-1)", lineHeight: 1.8 }}>
            <div>· Cycle XII closes in <strong style={{color:"var(--oxblood-1)"}}>1d 04h</strong></div>
            <div>· Harvest tally at cycle end</div>
            <div>· Two emissaries en route</div>
            <div>· One war declaration pending elsewhere</div>
          </div>
        </Card>
      </div>
    </div>
  </div>
);
window.KingdomDashboard = KingdomDashboard;
