/* eslint-disable */
const Treasury = () => (
  <div className="eup-page">
    <div className="eup-page-header">
      <div>
        <div className="eup-kicker" style={{marginBottom:4}}>Chancellery · Coffers</div>
        <h1 className="eup-page-title">Treasury & Trade</h1>
        <div className="eup-page-sub">A solvent crown is a quiet crown. The granaries are abundant; the coin is not.</div>
      </div>
      <Button kind="primary" icon="ph-coins">Levy a Tax</Button>
    </div>

    <div className="eup-grid-4" style={{marginBottom:24}}>
      <Resource icon="ph-coins" value="14,820" delta={-1240} label="Coffers" />
      <Resource icon="ph-grains" value="9,212" delta={340} label="Granaries" />
      <Resource icon="ph-anchor" value="1,840" delta={60} label="Tariff income" />
      <Resource icon="ph-scales" value="0.41" label="Treasury health" />
    </div>

    <div className="eup-grid-3-1">
      <Card chrome={{icon:"ph-scroll", label:"Ledger · Cycle XII"}}>
        <table className="eup-ledger">
          <thead><tr>
            <th>Entry</th><th>Origin</th><th style={{textAlign:"right"}}>Coin</th><th style={{textAlign:"right"}}>Grain</th>
          </tr></thead>
          <tbody>
            <tr><td>Spring Levy</td><td>Capital + Eastern March</td><td className="num" style={{color:"var(--moss-1)"}}>+3,200</td><td className="num">—</td></tr>
            <tr><td>Concord Tribute</td><td>Astari (annual)</td><td className="num" style={{color:"var(--moss-1)"}}>+800</td><td className="num">—</td></tr>
            <tr><td>Garrison Wages</td><td>Standing Army</td><td className="num" style={{color:"var(--oxblood-1)"}}>−2,200</td><td className="num">—</td></tr>
            <tr><td>Bridge Contract · West</td><td>Public Works</td><td className="num" style={{color:"var(--oxblood-1)"}}>−1,800</td><td className="num">—</td></tr>
            <tr><td>Harvest</td><td>Granaries</td><td className="num">—</td><td className="num" style={{color:"var(--moss-1)"}}>+1,400</td></tr>
            <tr><td>Bread Subsidy (drafted)</td><td>Realm-wide</td><td className="num" style={{color:"var(--ink-4)", fontStyle:"italic"}}>−1,200</td><td className="num">—</td></tr>
          </tbody>
        </table>
      </Card>

      <div className="eup-stack">
        <Card chrome={{icon:"ph-handshake", label:"Trade Routes"}}>
          <div className="eup-edict-row">
            <div className="eup-edict-icon"><i className="ph ph-anchor" style={{fontSize:18}}></i></div>
            <div className="eup-edict-text">
              <h4 className="eup-edict-title">Pelagia Maritime</h4>
              <div className="eup-edict-summary">+800 coin / cycle · stable</div>
            </div>
          </div>
          <div className="eup-edict-row">
            <div className="eup-edict-icon"><i className="ph ph-grains" style={{fontSize:18}}></i></div>
            <div className="eup-edict-text">
              <h4 className="eup-edict-title">Astari Grain Transit</h4>
              <div className="eup-edict-summary">+340 grain / cycle · conditional</div>
            </div>
          </div>
          <div className="eup-edict-row">
            <div className="eup-edict-icon"><i className="ph ph-warning-octagon" style={{fontSize:18, color:"var(--oxblood-1)"}}></i></div>
            <div className="eup-edict-text">
              <h4 className="eup-edict-title">Vorant Northern Pass</h4>
              <div className="eup-edict-summary" style={{color:"var(--oxblood-1)"}}>Suspended · pending dispatch</div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
);
window.Treasury = Treasury;
