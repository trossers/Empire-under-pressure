/* eslint-disable */
// Shared primitives for Empire Under Pressure UI kit
const { useState } = React;

const Card = ({ chrome, title, kicker, children, footer, style, accent = false }) => (
  <div className={"eup-card" + (accent ? " accent" : "")} style={style}>
    {chrome && (
      <div className="eup-card-chrome">
        <span><i className={"ph " + (chrome.icon || "ph-scroll")}></i> {chrome.label}</span>
        <i className="ph ph-dots-three"></i>
      </div>
    )}
    <div className="eup-card-body">
      {kicker && <div className="eup-kicker">{kicker}</div>}
      {title && <h3 className="eup-card-title">{title}</h3>}
      {(title || kicker) && <div className="gold-rule"></div>}
      {children}
    </div>
    {footer && <div className="eup-card-footer">{footer}</div>}
  </div>
);

const Button = ({ kind = "primary", icon, children, onClick, size, disabled }) => (
  <button
    className={`eup-btn eup-btn-${kind}` + (size ? ` eup-btn-${size}` : "")}
    onClick={onClick}
    disabled={disabled}
  >
    {icon && <i className={"ph " + (kind === "primary" ? "ph-bold " : "") + icon}></i>}
    {children}
  </button>
);

const Chip = ({ tone = "neutral", icon, children }) => (
  <span className={`eup-chip eup-chip-${tone}`}>
    {icon && <i className={"ph-fill " + icon}></i>}
    {children}
  </span>
);

const Resource = ({ icon, value, delta, label }) => (
  <div className="eup-resource">
    <i className={"ph " + icon}></i>
    <div className="eup-resource-num">
      <div className="eup-resource-value">{value}</div>
      {label && <div className="eup-resource-label">{label}</div>}
    </div>
    {delta != null && (
      <span className={"eup-delta " + (delta >= 0 ? "up" : "down")}>
        {delta >= 0 ? "+" : ""}{delta}
      </span>
    )}
  </div>
);

const Meter = ({ value, max = 1, tone = "moss", label, valueLabel }) => {
  const pct = Math.max(0, Math.min(1, value / max)) * 100;
  return (
    <div className="eup-meter">
      <div className="eup-meter-row">
        <span className="eup-meter-label">{label}</span>
        <span className="eup-meter-value">{valueLabel ?? `${Math.round(pct)}%`}</span>
      </div>
      <div className="eup-meter-track">
        <div className={`eup-meter-fill tone-${tone}`} style={{ width: pct + "%" }}></div>
      </div>
    </div>
  );
};

const SectionRule = ({ children }) => (
  <div className="eup-section-rule">
    <span className="line"></span>
    <span className="ornament">{children || "✦"}</span>
    <span className="line"></span>
  </div>
);

const Crest = ({ initial = "C", size = 28 }) => (
  <div className="eup-crest" style={{ width: size, height: size, fontSize: size * 0.4 }}>{initial}</div>
);

Object.assign(window, { Card, Button, Chip, Resource, Meter, SectionRule, Crest });
