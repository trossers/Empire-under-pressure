/* eslint-disable */
const WarRoom = () => (
  <div className="eup-page">
    <div className="eup-page-header">
      <div>
        <div className="eup-kicker" style={{ marginBottom: 4 }}>Chamber · Martial</div>
        <h1 className="eup-page-title">War Room</h1>
        <div className="eup-page-sub">The Crown surveys its banners. No campaign is yet declared.</div>
      </div>
      <div className="eup-row">
        <Button kind="secondary" icon="ph-shield">Defensive Posture</Button>
        <Button kind="danger-out" icon="ph-flag">Declare Hostilities</Button>
      </div>
    </div>

    <div className="eup-grid-3-1">
      <Card chrome={{ icon: "ph-globe-hemisphere-east", label: "Theatre · Western March" }}>
        <div className="eup-war-board">
          <div className="eup-war-token" style={{top:"30%", left:"22%"}}>C
            <span className="eup-war-token-label">Calidone · 3,400</span>
          </div>
          <div className="eup-war-token enemy" style={{top:"24%", left:"58%"}}>V
            <span className="eup-war-token-label">Vorant · 2,800</span>
          </div>
          <div className="eup-war-token neutral" style={{top:"62%", left:"40%"}}>K
            <span className="eup-war-token-label">Khorant · neutral</span>
          </div>
          <div className="eup-war-token neutral" style={{top:"70%", left:"72%"}}>A
            <span className="eup-war-token-label">Astari · allied</span>
          </div>
        </div>
        <div className="eup-row" style={{ marginTop: 16, gap: 8, flexWrap: "wrap" }}>
          <Chip tone="info"><i className="ph ph-eye"></i>Scout the Pass</Chip>
          <Chip tone="warn">Fortify the Border</Chip>
          <Chip tone="danger">Mobilize the Banners</Chip>
        </div>
      </Card>

      <div className="eup-stack">
        <Card chrome={{ icon: "ph-sword", label: "Standing Army" }}>
          <Meter label="Banners Mustered" value={0.68} valueLabel="3,400 / 5,000" tone="oxblood" />
          <Meter label="Levy Reserves" value={0.32} valueLabel="1,600 latent" tone="gold" />
          <Meter label="Morale" value={0.74} valueLabel="0.74 · Resolute" tone="moss" />
          <div className="gold-rule"></div>
          <div className="eup-page-sub" style={{fontSize:13}}>Two captains await orders. The Western March is undermanned by 0.4 banners.</div>
        </Card>

        <div className="eup-vellum">
          <p className="eup-vellum-quote">A war is the most expensive way to lose your stability score. The Crown's army is competent; the Crown's coffers are not. Choose, if you must, but do not pretend you cannot count.</p>
          <div className="eup-vellum-sig">— S.A.S.S.Y., Counsel to the Crown</div>
        </div>
      </div>
    </div>
  </div>
);
window.WarRoom = WarRoom;
