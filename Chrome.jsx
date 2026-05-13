/* eslint-disable */
const Chrome = ({ active, onNav, kingdom, cycle = "XII", deadline = "1d 04h", onSummonSassy }) => {
  const tabs = ["Realm", "Diplomacy", "Treasury", "War"];
  return (
    <div className="eup-chrome">
      <div className="eup-chrome-bar">
        <div className="eup-brand">
          <span className="eup-brand-seal"><i className="ph ph-crown"></i></span>
          <span className="eup-brand-text">Empire <span className="thin">Under Pressure</span></span>
        </div>
        <nav className="eup-nav">
          {tabs.map(t => (
            <button
              key={t}
              className={"eup-nav-item" + (active === t ? " active" : "")}
              onClick={() => onNav && onNav(t)}
            >{t}</button>
          ))}
        </nav>
        <div className="eup-chrome-right">
          <button className="eup-sassy-summon" onClick={onSummonSassy}>
            <i className="ph ph-quotes"></i>
            <span>S.A.S.S.Y.</span>
          </button>
          <div className="eup-cycle">
            <span className="eup-cycle-label">Cycle</span>
            <span className="eup-cycle-num">{cycle}</span>
            <span className="eup-cycle-sep">·</span>
            <span className="eup-cycle-deadline"><i className="ph ph-hourglass"></i> {deadline}</span>
          </div>
          <div className="eup-self-crest"><i className="ph ph-crown"></i></div>
        </div>
      </div>
      <div className="eup-chrome-sub">
        <div className="eup-realm-name">{kingdom || "The Sovereign Realm of Calidone"}</div>
        <div className="eup-realm-meta">Founded Cycle II · House of Vairn · Constitutional Crown</div>
      </div>
    </div>
  );
};
window.Chrome = Chrome;
