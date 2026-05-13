/* eslint-disable */
const KINGDOMS = [
  { name: "Vorant",    house: "House Berenard",    relation: 0.18, status: "warn",    note: "Withdrew emissary three days before levy vote." },
  { name: "Calidone",  house: "House Vairn",       relation: 1.00, status: "self",    note: "Your Crown." },
  { name: "Astari",    house: "House Solven",      relation: 0.74, status: "stable",  note: "Treaty of Solven · grain transit · signed Cycle VII." },
  { name: "Marcos",    house: "House Ortiz",       relation: 0.55, status: "info",    note: "Open trade. No formal accord." },
  { name: "Khorant",   house: "House Eberhardt",   relation: 0.32, status: "warn",    note: "Border skirmish, Cycle X. Reparations unsettled." },
  { name: "Pelagia",   house: "Republic of Pelagia", relation: 0.62, status: "stable", note: "Maritime concord." },
  { name: "Drovari",   house: "House Vlk",         relation: 0.08, status: "danger",  note: "Has refused all dispatches since Cycle VIII." },
  { name: "Imperia",   house: "Imperial Throne",   relation: 0.85, status: "info",    note: "Suzerain. Watchful." },
];

const DiplomacyScreen = () => {
  const [selected, setSelected] = React.useState("Vorant");
  const k = KINGDOMS.find(x => x.name === selected);

  return (
    <div className="eup-page">
      <div className="eup-page-header">
        <div>
          <div className="eup-kicker" style={{ marginBottom: 4 }}>Chancellery · External</div>
          <h1 className="eup-page-title">Council of Sovereigns</h1>
          <div className="eup-page-sub">Eight realms recognize the Crown of Calidone. Two harbor private grievance.</div>
        </div>
        <Button kind="primary" icon="ph-handshake">Propose a Treaty</Button>
      </div>

      <div className="eup-grid-3-1">
        <Card chrome={{ icon: "ph-globe-hemisphere-east", label: "Realms of the High Table" }}>
          {KINGDOMS.filter(k => k.status !== "self").map(k => (
            <div key={k.name} className={"eup-kingdom-row" + (selected === k.name ? " selected" : "")} onClick={() => setSelected(k.name)}>
              <Crest initial={k.name[0]} size={32} />
              <div>
                <div className="eup-kingdom-name">{k.name}</div>
                <div className="eup-kingdom-meta">{k.house} · {k.note}</div>
              </div>
              <div className="eup-relation-bar">
                <div className="needle" style={{ left: `${k.relation * 100}%` }}></div>
              </div>
              <Chip tone={k.status === "danger" ? "danger" : k.status === "warn" ? "warn" : k.status === "info" ? "info" : "stable"}>
                {k.relation >= 0.7 ? "Allied" : k.relation >= 0.4 ? "Cordial" : k.relation >= 0.2 ? "Tense" : "Hostile"}
              </Chip>
            </div>
          ))}
        </Card>

        <div className="eup-stack">
          {k && (
            <Card chrome={{ icon: "ph-eye", label: `Channel · ${k.name}` }}>
              <div className="eup-row" style={{ gap: 12, marginBottom: 14 }}>
                <Crest initial={k.name[0]} size={48} />
                <div>
                  <h3 className="eup-card-title" style={{ fontSize: 16 }}>{k.name}</h3>
                  <div className="eup-page-sub" style={{ fontSize: 12, marginTop: 0 }}>{k.house}</div>
                </div>
              </div>
              <div className="gold-rule"></div>

              <div className="eup-channel">
                <div className="eup-channel-msg them">
                  <div className="eup-channel-meta">{k.name} · Cycle XI</div>
                  <div>The Duchy is troubled by the western levy. Withdraw it within the cycle, or do not expect our emissary at the next sitting.</div>
                </div>
                <div className="eup-channel-msg me">
                  <div className="eup-channel-meta">Calidone · Cycle XI</div>
                  <div>The levy stands. The Crown will entertain a private accord on grain transit in exchange for restraint.</div>
                </div>
                <div className="eup-channel-msg them">
                  <div className="eup-channel-meta">{k.name} · Cycle XII</div>
                  <div>(Silence.)</div>
                </div>
              </div>

              <div className="eup-channel-compose">
                <input className="eup-edict-input" placeholder="Inscribe a private dispatch…" />
                <Button kind="secondary" size="sm" icon="ph-paper-plane-tilt">Send</Button>
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

window.DiplomacyScreen = DiplomacyScreen;
