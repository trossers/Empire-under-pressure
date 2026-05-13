/* eslint-disable */
const TurnEnd = ({ onClose }) => (
  <div className="eup-turn-ceremony">
    <div className="seal"><i className="ph-fill ph-crown"></i></div>
    <div className="roman">CYCLE XIII</div>
    <div className="caption">The chancellery has sealed the new cycle. Three dispatches arrive at dawn. The granaries are tallied. A war elsewhere has begun without you.</div>
    <button className="eup-btn eup-btn-secondary" onClick={onClose} style={{marginTop:12}}>
      <i className="ph ph-arrow-right"></i>Enter the Realm
    </button>
  </div>
);
window.TurnEnd = TurnEnd;
