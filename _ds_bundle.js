/* UNERADesignSystem_679671 design system bundle. Built from every .jsx under components/ by tools/bundle.mjs. Needs React 18 UMD on the page. */
var React = window.React;
var __ds_tmp = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // g:react
  var require_react = __commonJS({
    "g:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // <stdin>
  var stdin_exports = {};
  __export(stdin_exports, {
    Avatar: () => Avatar,
    Badge: () => Badge,
    Button: () => Button,
    Card: () => Card,
    Checkbox: () => Checkbox,
    Input: () => Input,
    NotificationBell: () => NotificationBell,
    SaveToAddressBook: () => SaveToAddressBook,
    Select: () => Select,
    Stepper: () => Stepper,
    WalletPill: () => WalletPill
  });

  // components/core/Avatar.jsx
  var import_react = __toESM(require_react());
  var CSS = `
.unera-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-full);
  background: var(--brand-deep-blue);
  color: var(--brand-white);
  font-family: var(--font-display);
  flex-shrink: 0;
  overflow: visible;
}
.unera-avatar img { width: 100%; height: 100%; border-radius: var(--radius-full); object-fit: cover; }
.unera-avatar--blockie { background: color-mix(in srgb, var(--brand-light-blue) 40%, var(--brand-deep-blue)); }
.unera-avatar__badge {
  position: absolute; bottom: -1px; right: -1px;
  display: flex; align-items: center; justify-content: center;
  border-radius: var(--radius-full);
  background: #F6851B; /* MetaMask fox tile */
  border: 2px solid var(--brand-white);
  line-height: 1;
}
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-avatar-css")) {
    const el = document.createElement("style");
    el.id = "unera-avatar-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
  var SIZES = {
    sm: { px: 28, fs: "0.75rem", fw: 600 },
    md: { px: 32, fs: "0.813rem", fw: 600 },
    lg: { px: 48, fs: "1.125rem", fw: 700 },
    xl: { px: 80, fs: "1.75rem", fw: 700 }
  };
  function Avatar({
    size = "md",
    initials,
    src,
    alt = "",
    blockie = false,
    badge,
    className = "",
    style = {},
    ...rest
  }) {
    const s = SIZES[size] || SIZES.md;
    const badgePx = Math.max(12, Math.round(s.px * 0.4));
    return /* @__PURE__ */ import_react.default.createElement(
      "span",
      {
        className: `unera-avatar ${blockie ? "unera-avatar--blockie" : ""} ${className}`.trim(),
        style: { width: s.px, height: s.px, fontSize: s.fs, fontWeight: s.fw, ...style },
        ...rest
      },
      src ? /* @__PURE__ */ import_react.default.createElement("img", { src, alt }) : !blockie && initials,
      badge && /* @__PURE__ */ import_react.default.createElement("span", { className: "unera-avatar__badge", style: { width: badgePx, height: badgePx, fontSize: Math.round(badgePx * 0.58) } }, badge)
    );
  }

  // components/core/Badge.jsx
  var import_react2 = __toESM(require_react());
  var CSS2 = `
.unera-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.375rem 0.75rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-body);
  font-size: var(--fs-xs);
  font-weight: var(--fw-bold);
  line-height: 1;
  white-space: nowrap;
}
.unera-badge svg { width: 14px; height: 14px; flex-shrink: 0; fill: currentColor; }

/* Financial direction - always pair with a directional icon */
.unera-badge--up      { background: var(--fin-up-bg);      color: var(--fin-up); }
.unera-badge--down    { background: var(--fin-down-bg);    color: var(--fin-down); }
.unera-badge--neutral { background: var(--fin-neutral-bg); color: var(--fin-neutral); }

/* Status */
.unera-badge--success { background: var(--fin-up-bg);  color: var(--fin-up); }
.unera-badge--warning { background: var(--warning-bg); color: var(--warning); }
.unera-badge--error   { background: var(--error-bg);   color: var(--error); }
.unera-badge--info    { background: color-mix(in srgb, var(--brand-deep-blue) 10%, var(--brand-white)); color: var(--brand-deep-blue); }

.unera-badge--solid   { background: var(--brand-deep-blue); color: var(--brand-white); }
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-badge-css")) {
    const el = document.createElement("style");
    el.id = "unera-badge-css";
    el.textContent = CSS2;
    document.head.appendChild(el);
  }
  var ARROW_UP = /* @__PURE__ */ import_react2.default.createElement("svg", { viewBox: "0 -960 960 960", "aria-hidden": "true" }, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" }));
  var ARROW_DOWN = /* @__PURE__ */ import_react2.default.createElement("svg", { viewBox: "0 -960 960 960", "aria-hidden": "true" }, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" }));
  function Badge({ variant = "info", icon, children, className = "", ...rest }) {
    let leading = icon;
    if (leading === void 0) {
      if (variant === "up") leading = ARROW_UP;
      else if (variant === "down") leading = ARROW_DOWN;
    }
    return /* @__PURE__ */ import_react2.default.createElement("span", { className: `unera-badge unera-badge--${variant} ${className}`.trim(), ...rest }, leading, children);
  }

  // components/core/Button.jsx
  var import_react3 = __toESM(require_react());
  var CSS3 = `
.unera-btn {
  font-family: var(--font-body);
  font-weight: var(--fw-semibold);
  font-size: var(--fs-label);
  border-radius: var(--radius-md);
  border: 2px solid transparent;
  min-height: var(--control-h);
  padding: 0 1.5rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  line-height: 1;
  transition: all var(--dur-base);
}
.unera-btn:focus-visible { outline: 3px solid rgba(23,61,71,0.3); outline-offset: 2px; }
.unera-btn[disabled] { opacity: 0.5; cursor: not-allowed; }
.unera-btn svg { width: 18px; height: 18px; flex-shrink: 0; }

/* Primary - Deep Blue fill (solid; never gradient on product UI) */
.unera-btn--primary { background: var(--brand-deep-blue); color: var(--brand-white); }
.unera-btn--primary:hover:not([disabled]) { background: var(--neutral-800); box-shadow: 0 4px 12px rgba(23,61,71,0.3); }

/* Secondary - transparent, subtle border, hover to Deep Blue ink */
.unera-btn--secondary { background: transparent; color: var(--text-secondary); border-color: var(--border-subtle); }
.unera-btn--secondary:hover:not([disabled]) { border-color: var(--brand-deep-blue); color: var(--brand-deep-blue); background: rgba(23,61,71,0.02); }

/* Accent - Deep Blue fill + Yellow text (warm banners only) */
.unera-btn--accent { background: var(--brand-deep-blue); color: var(--brand-yellow); }
.unera-btn--accent:hover:not([disabled]) { background: var(--neutral-800); }

/* Sizes */
.unera-btn--sm { min-height: var(--control-h-sm); padding: 0 0.875rem; font-size: var(--fs-xs); }
.unera-btn--block { width: 100%; }
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-btn-css")) {
    const el = document.createElement("style");
    el.id = "unera-btn-css";
    el.textContent = CSS3;
    document.head.appendChild(el);
  }
  function Button({
    variant = "primary",
    size = "md",
    block = false,
    href,
    icon,
    iconRight,
    children,
    className = "",
    ...rest
  }) {
    const cls = [
      "unera-btn",
      `unera-btn--${variant}`,
      size === "sm" ? "unera-btn--sm" : "",
      block ? "unera-btn--block" : "",
      className
    ].filter(Boolean).join(" ");
    const content = /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, icon, children, iconRight);
    if (href) {
      return /* @__PURE__ */ import_react3.default.createElement("a", { href, className: cls, ...rest }, content);
    }
    return /* @__PURE__ */ import_react3.default.createElement("button", { className: cls, ...rest }, content);
  }

  // components/core/Card.jsx
  var import_react4 = __toESM(require_react());
  var CSS4 = `
.unera-card {
  background: var(--surface-card);
  border: 2px solid var(--border-subtle);
  border-radius: var(--radius-card);
  padding: 2rem;
  box-shadow: var(--shadow-card);
  position: relative;
  overflow: hidden;
  transition: border-color var(--dur-slow), box-shadow var(--dur-slow), transform var(--dur-slow);
  color: var(--text-primary);
  display: block;
  text-decoration: none;
}
/* Surface tint variants - never flat grey, never rainbow */
.unera-card--impact { background: var(--surface-impact); }
.unera-card--action { background: var(--surface-action); }
.unera-card--warm   { background: var(--surface-warm); }
.unera-card--sky    { background: var(--surface-sky); }
.unera-card--cad    { background: var(--surface-cad-hub); }
.unera-card--inverse { background: var(--brand-deep-blue); color: var(--brand-white); border-color: transparent; }

/* Interactive lift */
.unera-card--interactive { cursor: pointer; }
.unera-card--interactive:hover {
  border-color: var(--brand-deep-blue);
  box-shadow: var(--shadow-hover);
  transform: var(--lift-hover-lg);
}
.unera-card--interactive:focus-visible,
.unera-card--interactive:focus-within { outline: 2px solid var(--brand-deep-blue); outline-offset: 2px; }

/* Top accent rule that wipes in on hover (impact / center pattern) */
.unera-card--accent::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;
  background: var(--brand-deep-blue); transform: scaleX(0);
  transition: transform var(--dur-slow); transform-origin: left;
}
.unera-card--accent:hover::before { transform: scaleX(1); }
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-card-css")) {
    const el = document.createElement("style");
    el.id = "unera-card-css";
    el.textContent = CSS4;
    document.head.appendChild(el);
  }
  function Card({
    surface = "card",
    interactive = false,
    accent = false,
    href,
    children,
    className = "",
    ...rest
  }) {
    const cls = [
      "unera-card",
      `unera-card--${surface}`,
      interactive ? "unera-card--interactive" : "",
      accent ? "unera-card--accent" : "",
      className
    ].filter(Boolean).join(" ");
    if (href) {
      return /* @__PURE__ */ import_react4.default.createElement("a", { href, className: cls, ...rest }, children);
    }
    return /* @__PURE__ */ import_react4.default.createElement("div", { className: cls, ...rest }, children);
  }

  // components/core/Stepper.jsx
  var import_react5 = __toESM(require_react());
  var CSS5 = `
.unera-stepper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding: 0 1rem;
  max-width: 700px;
  margin: 0 auto 3rem;
}
.unera-stepper__track {
  content: ''; position: absolute; top: 24px; left: 24px; right: 24px;
  height: 2px; background: var(--neutral-300); z-index: 0;
}
.unera-stepper__progress {
  position: absolute; top: 24px; left: 24px; height: 2px;
  background: var(--brand-deep-blue); z-index: 1;
  transition: width var(--dur-prog) ease; max-width: calc(100% - 48px);
}
.unera-step {
  display: flex; flex-direction: column; align-items: center; gap: 0.75rem;
  position: relative; z-index: 2; flex: 1;
}
.unera-step__circle {
  width: 48px; height: 48px; border-radius: var(--radius-full);
  background: var(--brand-white); border: 2px solid var(--neutral-300);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-display); font-weight: var(--fw-bold); font-size: 1.125rem;
  color: var(--text-secondary);
  transition: background var(--dur-slow), border-color var(--dur-slow), color var(--dur-slow), transform var(--dur-slow);
}
.unera-step__circle svg { width: 22px; height: 22px; }
.unera-step--active .unera-step__circle {
  background: var(--brand-deep-blue); border-color: transparent;
  color: var(--brand-white); transform: scale(1.1);
}
.unera-step--done .unera-step__circle {
  background: var(--brand-deep-blue); border-color: transparent; color: var(--brand-white);
}
.unera-step__label { font-size: var(--fs-sm); color: var(--neutral-600); font-weight: var(--fw-medium); text-align: center; }
.unera-step--active .unera-step__label { color: var(--brand-deep-blue); font-weight: var(--fw-semibold); }
.unera-step--done .unera-step__label { color: var(--fin-up); }

@media (max-width: 640px) {
  .unera-stepper { display: none; }
}
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-stepper-css")) {
    const el = document.createElement("style");
    el.id = "unera-stepper-css";
    el.textContent = CSS5;
    document.head.appendChild(el);
  }
  var CHECK = /* @__PURE__ */ import_react5.default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ import_react5.default.createElement("path", { d: "M5 13l4 4L19 7" }));
  function Stepper({ steps = [], current = 0, className = "", ...rest }) {
    const last = Math.max(steps.length - 1, 1);
    const pct = Math.min(current / last, 1) * 100;
    return /* @__PURE__ */ import_react5.default.createElement("div", { className: `unera-stepper ${className}`.trim(), role: "list", "aria-label": "Progress", ...rest }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "unera-stepper__track", "aria-hidden": "true" }), /* @__PURE__ */ import_react5.default.createElement("div", { className: "unera-stepper__progress", style: { width: `calc(${pct}% - ${pct === 0 ? 0 : 0}px)` }, "aria-hidden": "true" }), steps.map((label, i) => {
      const state = i < current ? "done" : i === current ? "active" : "todo";
      return /* @__PURE__ */ import_react5.default.createElement("div", { key: i, className: `unera-step unera-step--${state}`, role: "listitem", "aria-current": state === "active" ? "step" : void 0 }, /* @__PURE__ */ import_react5.default.createElement("div", { className: "unera-step__circle" }, state === "done" ? CHECK : i + 1), /* @__PURE__ */ import_react5.default.createElement("div", { className: "unera-step__label" }, label));
    }));
  }

  // components/forms/Checkbox.jsx
  var import_react6 = __toESM(require_react());
  var CSS6 = `
.unera-checkbox {
  display: flex; align-items: flex-start; gap: 0.75rem;
  min-height: var(--row-tap); /* whole 48px row is tappable */
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-family: var(--font-body);
  transition: background var(--dur-fast);
}
.unera-checkbox:hover { background: rgba(23,61,71,0.04); }
.unera-checkbox input { position: absolute; opacity: 0; width: 0; height: 0; }
.unera-checkbox__box {
  flex-shrink: 0; width: 22px; height: 22px; margin-top: 1px;
  border: 2px solid var(--border-strong); border-radius: 6px;
  background: var(--brand-white);
  display: flex; align-items: center; justify-content: center;
  color: var(--brand-white);
  transition: background var(--dur-fast), border-color var(--dur-fast);
}
.unera-checkbox__box svg { width: 14px; height: 14px; opacity: 0; }
.unera-checkbox input:checked + .unera-checkbox__box {
  background: var(--brand-deep-blue); border-color: var(--brand-deep-blue);
}
.unera-checkbox input:checked + .unera-checkbox__box svg { opacity: 1; }
.unera-checkbox input:focus-visible + .unera-checkbox__box { outline: 2px solid var(--brand-deep-blue); outline-offset: 2px; }
.unera-checkbox--radio .unera-checkbox__box { border-radius: var(--radius-full); }
.unera-checkbox--radio input:checked + .unera-checkbox__box { background: var(--brand-deep-blue); }
.unera-checkbox__text { font-size: var(--fs-label); color: var(--text-primary); line-height: 1.45; }
.unera-checkbox__sub { display: block; font-size: var(--fs-xs); color: var(--text-secondary); margin-top: 2px; }
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-checkbox-css")) {
    const el = document.createElement("style");
    el.id = "unera-checkbox-css";
    el.textContent = CSS6;
    document.head.appendChild(el);
  }
  var CHECK2 = /* @__PURE__ */ import_react6.default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ import_react6.default.createElement("path", { d: "M5 13l4 4L19 7" }));
  var DOT = /* @__PURE__ */ import_react6.default.createElement("svg", { viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ import_react6.default.createElement("circle", { cx: "12", cy: "12", r: "6" }));
  function Checkbox({ label, sublabel, type = "checkbox", className = "", ...rest }) {
    const isRadio = type === "radio";
    return /* @__PURE__ */ import_react6.default.createElement("label", { className: `unera-checkbox ${isRadio ? "unera-checkbox--radio" : ""} ${className}`.trim() }, /* @__PURE__ */ import_react6.default.createElement("input", { type, ...rest }), /* @__PURE__ */ import_react6.default.createElement("span", { className: "unera-checkbox__box" }, isRadio ? DOT : CHECK2), /* @__PURE__ */ import_react6.default.createElement("span", { className: "unera-checkbox__text" }, label, sublabel && /* @__PURE__ */ import_react6.default.createElement("span", { className: "unera-checkbox__sub" }, sublabel)));
  }

  // components/forms/Input.jsx
  var import_react7 = __toESM(require_react());
  var CSS7 = `
.unera-field { display: flex; flex-direction: column; gap: 0.5rem; font-family: var(--font-body); }
.unera-field__label { font-size: var(--fs-label); font-weight: var(--fw-semibold); color: var(--text-primary); }
.unera-field__label .req { color: var(--error); margin-left: 2px; }
.unera-input {
  font-family: var(--font-body);
  font-size: var(--fs-body); /* 16px - prevents iOS zoom */
  color: var(--text-primary);
  background: var(--brand-white);
  border: 2px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.75rem 0.875rem;
  min-height: var(--control-h);
  width: 100%;
  transition: border-color var(--dur-base), box-shadow var(--dur-base);
}
.unera-input::placeholder { color: var(--neutral-500); }
.unera-input:focus {
  outline: none;
  border-color: var(--brand-deep-blue);
  box-shadow: 0 0 0 3px rgba(23,61,71,0.12);
}
.unera-input:disabled { background: var(--neutral-100); cursor: not-allowed; opacity: 0.7; }
.unera-input--error { border-color: var(--error); }
.unera-input--error:focus { box-shadow: 0 0 0 3px var(--error-bg); }
.unera-field__hint { font-size: var(--fs-xs); color: var(--text-secondary); }
.unera-field__error { font-size: var(--fs-xs); color: var(--error); font-weight: var(--fw-medium); }
.unera-field__prefix-wrap { position: relative; display: flex; align-items: center; }
.unera-field__prefix { position: absolute; left: 0.875rem; color: var(--text-secondary); font-size: var(--fs-body); pointer-events: none; }
.unera-field__prefix-wrap .unera-input { padding-left: 1.85rem; }
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-input-css")) {
    const el = document.createElement("style");
    el.id = "unera-input-css";
    el.textContent = CSS7;
    document.head.appendChild(el);
  }
  var _uid = 0;
  function Input({
    label,
    hint,
    error,
    required = false,
    prefix,
    id,
    className = "",
    ...rest
  }) {
    const fieldId = id || `unera-input-${++_uid}`;
    const inputCls = `unera-input ${error ? "unera-input--error" : ""}`.trim();
    const input = /* @__PURE__ */ import_react7.default.createElement("input", { id: fieldId, className: inputCls, "aria-invalid": !!error, ...rest });
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: `unera-field ${className}`.trim() }, label && /* @__PURE__ */ import_react7.default.createElement("label", { className: "unera-field__label", htmlFor: fieldId }, label, required && /* @__PURE__ */ import_react7.default.createElement("span", { className: "req", "aria-hidden": "true" }, "*")), prefix ? /* @__PURE__ */ import_react7.default.createElement("div", { className: "unera-field__prefix-wrap" }, /* @__PURE__ */ import_react7.default.createElement("span", { className: "unera-field__prefix" }, prefix), input) : input, error ? /* @__PURE__ */ import_react7.default.createElement("span", { className: "unera-field__error" }, error) : hint ? /* @__PURE__ */ import_react7.default.createElement("span", { className: "unera-field__hint" }, hint) : null);
  }

  // components/forms/Select.jsx
  var import_react8 = __toESM(require_react());
  var CSS8 = `
.unera-select { position: relative; font-family: var(--font-body); }
.unera-select__label { display: block; font-size: var(--fs-label); font-weight: var(--fw-semibold); color: var(--text-primary); margin-bottom: 0.5rem; }
.unera-select__trigger {
  width: 100%; min-height: var(--control-h);
  display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;
  background: var(--brand-white); border: 2px solid var(--border-subtle);
  border-radius: var(--radius-md); padding: 0.75rem 0.875rem;
  font-family: var(--font-body); font-size: var(--fs-body); color: var(--text-primary);
  cursor: pointer; text-align: left;
  transition: border-color var(--dur-base), box-shadow var(--dur-base);
}
.unera-select__trigger[aria-expanded="true"], .unera-select__trigger:focus-visible {
  outline: none; border-color: var(--brand-deep-blue); box-shadow: 0 0 0 3px rgba(23,61,71,0.12);
}
.unera-select__placeholder { color: var(--neutral-500); }
.unera-select__chev { width: 18px; height: 18px; color: var(--text-secondary); flex-shrink: 0; transition: transform var(--dur-base); }
.unera-select__trigger[aria-expanded="true"] .unera-select__chev { transform: rotate(180deg); }
.unera-select__menu {
  position: absolute; top: calc(100% + 4px); left: 0; right: 0; z-index: var(--z-dropdown);
  background: var(--brand-white); border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md); box-shadow: var(--shadow-pop);
  padding: 0.35rem; margin: 0; list-style: none; max-height: 280px; overflow-y: auto;
}
.unera-select__opt {
  display: flex; align-items: center; justify-content: space-between; gap: 0.5rem;
  padding: 0.625rem 0.75rem; min-height: var(--touch-min);
  border-radius: var(--radius-sm); font-size: var(--fs-sm); color: var(--text-primary); cursor: pointer;
}
.unera-select__opt:hover, .unera-select__opt--active { background: color-mix(in srgb, var(--brand-cloud-blue) 60%, var(--brand-white)); color: var(--brand-deep-blue); }
.unera-select__opt[aria-selected="true"] { font-weight: var(--fw-semibold); background: color-mix(in srgb, var(--brand-yellow) 30%, var(--brand-white)); }
.unera-select__check { width: 16px; height: 16px; color: var(--brand-deep-blue); flex-shrink: 0; }
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-select-css")) {
    const el = document.createElement("style");
    el.id = "unera-select-css";
    el.textContent = CSS8;
    document.head.appendChild(el);
  }
  var CHEV = /* @__PURE__ */ import_react8.default.createElement("svg", { className: "unera-select__chev", viewBox: "0 -960 960 960", fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ import_react8.default.createElement("path", { d: "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" }));
  var CHECK3 = /* @__PURE__ */ import_react8.default.createElement("svg", { className: "unera-select__check", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ import_react8.default.createElement("path", { d: "M5 13l4 4L19 7" }));
  function Select({ label, options = [], value, defaultValue, onChange, placeholder = "Select\u2026", name, className = "" }) {
    const [open, setOpen] = import_react8.default.useState(false);
    const [internal, setInternal] = import_react8.default.useState(defaultValue ?? "");
    const [active, setActive] = import_react8.default.useState(0);
    const ref = import_react8.default.useRef(null);
    const current = value !== void 0 ? value : internal;
    const opts = options.map((o) => typeof o === "string" ? { value: o, label: o } : o);
    const selected = opts.find((o) => o.value === current);
    import_react8.default.useEffect(() => {
      function onDoc(e) {
        if (ref.current && !ref.current.contains(e.target)) setOpen(false);
      }
      document.addEventListener("mousedown", onDoc);
      return () => document.removeEventListener("mousedown", onDoc);
    }, []);
    function choose(opt) {
      if (value === void 0) setInternal(opt.value);
      onChange && onChange(opt.value);
      setOpen(false);
    }
    function onKey(e) {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
        setActive((a) => Math.min(a + 1, opts.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => Math.max(a - 1, 0));
      } else if (e.key === "Enter" && open) {
        e.preventDefault();
        choose(opts[active]);
      } else if (e.key === "Escape") setOpen(false);
    }
    return /* @__PURE__ */ import_react8.default.createElement("div", { className: `unera-select ${className}`.trim(), ref }, label && /* @__PURE__ */ import_react8.default.createElement("span", { className: "unera-select__label" }, label), /* @__PURE__ */ import_react8.default.createElement("input", { type: "hidden", name, value: current, readOnly: true }), /* @__PURE__ */ import_react8.default.createElement(
      "button",
      {
        type: "button",
        className: "unera-select__trigger",
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        onClick: () => setOpen((o) => !o),
        onKeyDown: onKey
      },
      /* @__PURE__ */ import_react8.default.createElement("span", { className: selected ? "" : "unera-select__placeholder" }, selected ? selected.label : placeholder),
      CHEV
    ), open && /* @__PURE__ */ import_react8.default.createElement("ul", { className: "unera-select__menu", role: "listbox" }, opts.map((o, i) => /* @__PURE__ */ import_react8.default.createElement(
      "li",
      {
        key: o.value,
        role: "option",
        "aria-selected": o.value === current,
        className: `unera-select__opt ${i === active ? "unera-select__opt--active" : ""}`,
        onMouseEnter: () => setActive(i),
        onClick: () => choose(o)
      },
      /* @__PURE__ */ import_react8.default.createElement("span", null, o.label),
      o.value === current && CHECK3
    ))));
  }

  // components/navigation/NotificationBell.jsx
  var import_react9 = __toESM(require_react());
  var LEVELS = {
    completed: { label: "Completed", ink: "var(--fin-up)", well: "var(--fin-up-bg)", path: "m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" },
    progressing: { label: "In progress", ink: "var(--brand-deep-blue)", well: "rgba(23,61,71,0.10)", path: "M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm112-192 56-56-148-148v-184h-80v216l172 172Z" },
    info: { label: "Info", ink: "var(--fin-neutral)", well: "var(--fin-neutral-bg)", path: "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" },
    warning: { label: "Warning", ink: "var(--warning)", well: "rgba(184,160,48,0.14)", path: "m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Z" },
    error: { label: "Error", ink: "var(--error)", well: "var(--error-bg)", path: "M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" }
  };
  var SAMPLE_ITEMS = [
    { id: "e1", level: "error", title: "Swap couldn\u2019t be completed", message: "We couldn\u2019t finalize your 100 USDC \u2192 USDT swap. No funds left your wallet.", time: "6 min ago", ctaLabel: "View details", read: false },
    { id: "c1", level: "completed", title: "Buy order completed", message: "Your OTC purchase of 500 hUSD is complete and added to your balance.", time: "22 min ago", ctaLabel: "View order", read: false },
    { id: "p1", level: "progressing", title: "Swap is settling", message: "Your USDC \u2192 USDT swap is confirmed. Balances are updating now.", time: "25 min ago", ctaLabel: "View transaction", read: false },
    { id: "i1", level: "info", title: "New network supported", message: "You can now hold and move hUSD on Base.", time: "yesterday", ctaLabel: "Learn more", read: true }
  ];
  var BELL_PATH = "M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0";
  var X_PATH = "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z";
  var CSS9 = `
.unera-notif { position: relative; display: inline-block; }
.unera-notif__bell { width: 36px; height: 36px; border-radius: 50%; border: none; background: transparent; cursor: pointer; position: relative; display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
.unera-notif--on-dark .unera-notif__bell:hover { background: rgba(255,255,255,0.1); }
.unera-notif--on-dark .unera-notif__bell-icon { color: rgba(255,255,255,0.85); }
.unera-notif--on-dark .unera-notif__bell:hover .unera-notif__bell-icon { color: var(--brand-yellow); }
.unera-notif__bell:focus-visible { outline: 2px solid var(--brand-yellow); outline-offset: 2px; }
.unera-notif__bell-icon { width: 20px; height: 20px; color: var(--brand-deep-blue); transition: color 0.2s; }
.unera-notif__badge { min-width: 18px; height: 18px; padding: 0 3px; border-radius: 9px; position: absolute; top: 0; right: 0; background: var(--brand-yellow); color: var(--brand-deep-blue); font-size: 0.625rem; font-weight: 700; display: flex; align-items: center; justify-content: center; border: 2px solid var(--brand-deep-blue); box-sizing: border-box; }
.unera-notif__panel { position: absolute; top: calc(100% + 0.75rem); right: 0; width: 400px; max-height: 70vh; background: var(--brand-white); border-radius: 0.75rem; box-shadow: 0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08); display: none; flex-direction: column; overflow: hidden; z-index: 10002; }
.unera-notif__panel.is-open { display: flex; }
.unera-notif__head { padding: 1.25rem; flex-shrink: 0; background: color-mix(in srgb, var(--brand-cloud-blue) 30%, var(--brand-white)); border-bottom: 1px solid rgba(0,0,0,0.06); }
.unera-notif__head-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; }
.unera-notif__title { font-size: 0.875rem; font-weight: 600; color: var(--text-primary); }
.unera-notif__unread { font-size: 0.75rem; color: var(--brand-deep-blue); font-weight: 600; }
.unera-notif__actions { display: flex; align-items: center; gap: 0.75rem; }
.unera-notif__link { background: none; border: none; cursor: pointer; font-size: 0.75rem; color: var(--text-secondary); text-decoration: none; font-weight: 500; padding: 0; font-family: var(--font-body); }
.unera-notif__link:hover { text-decoration: underline; }
.unera-notif__link--all { color: var(--brand-deep-blue); font-weight: 600; }
.unera-notif__wrap { padding: 0.5rem; flex: 1; min-height: 0; overflow-y: auto; }
.unera-notif__sect { font-size: 0.688rem; font-weight: 700; color: var(--neutral-600); letter-spacing: 0.05em; padding: 0.75rem 0.75rem 0.5rem; text-transform: uppercase; }
.unera-notif__list { list-style: none; padding: 0; margin: 0; }
.unera-notif__item { display: flex; align-items: flex-start; gap: 0.625rem; padding: 0.75rem; border-radius: 0.5rem; transition: background 0.15s; font-size: 0.875rem; }
.unera-notif__item:hover { background: rgba(23,61,71,0.08); }
.unera-notif__item:hover .unera-notif__dismiss { opacity: 1; }
.unera-notif__item:not(.is-read) { box-shadow: none; }
.unera-notif__icon { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.unera-notif__icon svg { width: 14px; height: 14px; fill: currentColor; }
.unera-notif__body { flex: 1; min-width: 0; }
.unera-notif__item-title { font-size: 0.8125rem; font-weight: 500; color: var(--text-primary); margin: 0; }
.unera-notif__item.is-read .unera-notif__item-title { font-weight: 400; color: var(--neutral-600); }
.unera-notif__msg { font-size: 0.75rem; color: var(--text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin: 0.125rem 0 0; }
.unera-notif__time { font-size: 0.6875rem; color: var(--text-secondary); display: block; margin-top: 0.125rem; }
.unera-notif__cta { font-size: 0.75rem; font-weight: 600; color: var(--brand-deep-blue); text-decoration: none; margin-top: 0.25rem; display: inline-block; }
.unera-notif__cta:hover { text-decoration: underline; }
.unera-notif__dot { width: 6px; height: 6px; border-radius: 50%; background: var(--brand-deep-blue); flex-shrink: 0; margin-top: 6px; }
.unera-notif__dismiss { width: 20px; height: 20px; min-width: 20px; border: none; background: none; cursor: pointer; padding: 0; display: flex; align-items: center; justify-content: center; color: var(--text-secondary); opacity: 0; transition: opacity 0.2s; }
.unera-notif__dismiss:hover { color: var(--error); }
.unera-notif__dismiss svg { width: 14px; height: 14px; fill: currentColor; }
.unera-notif__empty { padding: 1.5rem; text-align: center; color: var(--text-secondary); font-size: 0.875rem; }
.unera-notif__divider { height: 1px; background: rgba(0,0,0,0.06); flex-shrink: 0; }
.unera-notif__foot { padding: 0.5rem; flex-shrink: 0; }
.unera-notif__foot-btn { width: 100%; padding: 0.875rem 1.5rem; border-radius: 0.75rem; font-weight: 600; font-size: 0.938rem; display: flex; align-items: center; justify-content: center; border: 2px solid var(--border-subtle); background: var(--brand-white); color: var(--text-primary); cursor: pointer; font-family: var(--font-body); }
.unera-notif__foot-btn:hover { border-color: var(--brand-deep-blue); color: var(--brand-deep-blue); }
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-notif-bell-css")) {
    const el = document.createElement("style");
    el.id = "unera-notif-bell-css";
    el.textContent = CSS9;
    document.head.appendChild(el);
  }
  function NotifItem({ item, onDismiss }) {
    const lvl = LEVELS[item.level] || LEVELS.info;
    return /* @__PURE__ */ import_react9.default.createElement(
      "li",
      {
        className: `unera-notif__item ${item.read ? "is-read" : ""}`.trim(),
        role: "listitem",
        style: { "--nlvl": lvl.ink }
      },
      /* @__PURE__ */ import_react9.default.createElement("span", { className: "unera-notif__icon", role: "img", "aria-label": lvl.label, style: { background: lvl.well, color: lvl.ink } }, /* @__PURE__ */ import_react9.default.createElement("svg", { viewBox: "0 -960 960 960", "aria-hidden": "true" }, /* @__PURE__ */ import_react9.default.createElement("path", { d: lvl.path }))),
      /* @__PURE__ */ import_react9.default.createElement("div", { className: "unera-notif__body" }, /* @__PURE__ */ import_react9.default.createElement("p", { className: "unera-notif__item-title" }, item.title), /* @__PURE__ */ import_react9.default.createElement("p", { className: "unera-notif__msg" }, item.message), /* @__PURE__ */ import_react9.default.createElement("time", { className: "unera-notif__time" }, item.time), item.ctaLabel ? /* @__PURE__ */ import_react9.default.createElement("a", { className: "unera-notif__cta", href: item.ctaUrl || "#" }, item.ctaLabel) : null),
      !item.read ? /* @__PURE__ */ import_react9.default.createElement("span", { className: "unera-notif__dot", "aria-hidden": "true" }) : null,
      /* @__PURE__ */ import_react9.default.createElement("button", { type: "button", className: "unera-notif__dismiss", "aria-label": `Dismiss: ${item.title}`, onClick: () => onDismiss && onDismiss(item.id) }, /* @__PURE__ */ import_react9.default.createElement("svg", { viewBox: "0 -960 960 960", "aria-hidden": "true" }, /* @__PURE__ */ import_react9.default.createElement("path", { d: X_PATH })))
    );
  }
  function NotificationBell({
    unreadCount = 3,
    items = SAMPLE_ITEMS,
    open = false,
    onDark = true,
    onBellClick,
    onMarkAllRead,
    onClearAll,
    onDismiss,
    viewAllHref = "#",
    className = "",
    ...rest
  }) {
    const count = typeof unreadCount === "number" ? unreadCount : items.filter((n) => !n.read).length;
    const badge = count > 99 ? "99+" : String(count);
    const empty = !items || items.length === 0;
    return /* @__PURE__ */ import_react9.default.createElement("div", { className: `unera-notif ${onDark ? "unera-notif--on-dark" : ""} ${className}`.trim(), ...rest }, /* @__PURE__ */ import_react9.default.createElement(
      "button",
      {
        type: "button",
        className: "unera-notif__bell",
        "aria-haspopup": "true",
        "aria-expanded": open ? "true" : "false",
        "aria-label": count === 0 ? "Notifications" : `Notifications, ${count} unread`,
        onClick: onBellClick
      },
      /* @__PURE__ */ import_react9.default.createElement("svg", { className: "unera-notif__bell-icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.75", "aria-hidden": "true" }, /* @__PURE__ */ import_react9.default.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: BELL_PATH })),
      count > 0 ? /* @__PURE__ */ import_react9.default.createElement("span", { className: "unera-notif__badge", "aria-hidden": "true" }, badge) : null
    ), /* @__PURE__ */ import_react9.default.createElement("div", { className: `unera-notif__panel ${open ? "is-open" : ""}`.trim(), role: "dialog", "aria-label": "Notifications" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "unera-notif__head" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "unera-notif__head-row" }, /* @__PURE__ */ import_react9.default.createElement("span", { className: "unera-notif__title" }, "Notifications"), count > 0 ? /* @__PURE__ */ import_react9.default.createElement("span", { className: "unera-notif__unread" }, count, " unread") : null), /* @__PURE__ */ import_react9.default.createElement("div", { className: "unera-notif__actions" }, /* @__PURE__ */ import_react9.default.createElement("a", { href: viewAllHref, className: "unera-notif__link unera-notif__link--all" }, "View all"), /* @__PURE__ */ import_react9.default.createElement("button", { type: "button", className: "unera-notif__link", onClick: onMarkAllRead }, "Mark all read"))), /* @__PURE__ */ import_react9.default.createElement("div", { className: "unera-notif__wrap" }, empty ? /* @__PURE__ */ import_react9.default.createElement("p", { className: "unera-notif__empty" }, "You're all caught up") : /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("div", { className: "unera-notif__sect" }, "NEW"), /* @__PURE__ */ import_react9.default.createElement("ul", { className: "unera-notif__list", role: "list", "aria-live": "polite" }, items.map((it) => /* @__PURE__ */ import_react9.default.createElement(NotifItem, { key: it.id, item: it, onDismiss }))))), !empty ? /* @__PURE__ */ import_react9.default.createElement(import_react9.default.Fragment, null, /* @__PURE__ */ import_react9.default.createElement("div", { className: "unera-notif__divider" }), /* @__PURE__ */ import_react9.default.createElement("div", { className: "unera-notif__foot" }, /* @__PURE__ */ import_react9.default.createElement("button", { type: "button", className: "unera-notif__foot-btn", onClick: onClearAll }, "Clear all notifications"))) : null));
  }

  // components/navigation/WalletPill.jsx
  var import_react10 = __toESM(require_react());
  var CSS10 = `
.unera-wallet-pill {
  display: inline-flex; align-items: center; gap: 0.3125rem;
  padding: 0.125rem 0.375rem 0.125rem 0.25rem;
  background: var(--brand-white); border: 1px solid var(--border-subtle);
  border-radius: var(--radius-pill); box-shadow: 0 1px 4px rgba(23,61,71,0.08);
  color: var(--text-primary); font-family: var(--font-body);
}
.unera-wallet-pill--disconnected { padding: 0.125rem; }
.unera-wallet-pill__info { display: flex; flex-direction: column; min-width: 0; padding: 0 0.125rem; cursor: pointer; }
.unera-wallet-pill__addr { font-size: var(--fs-2xs); font-weight: var(--fw-semibold); line-height: 1.2; white-space: nowrap; }
.unera-wallet-pill__bal { font-size: var(--fs-3xs); line-height: 1.2; color: var(--text-secondary); white-space: nowrap; }
.unera-wallet-pill__net {
  display: inline-flex; align-items: center; gap: 0.25rem;
  padding: 0.25rem 0.5rem; margin-left: 0.125rem;
  background: var(--neutral-200); border: none; border-radius: var(--radius-sm);
  font-family: var(--font-body); font-size: var(--fs-3xs); font-weight: var(--fw-semibold);
  color: var(--text-secondary); cursor: pointer;
}
.unera-wallet-pill__net:hover { background: color-mix(in srgb, var(--neutral-300) 70%, var(--brand-white)); }
.unera-wallet-pill__net-dot { width: 8px; height: 8px; border-radius: var(--radius-full); background: var(--brand-ext-ethereum, #627EEA); flex-shrink: 0; }
.unera-wallet-pill__connect {
  background: transparent; border: none; cursor: pointer; font-family: var(--font-body);
  font-size: var(--fs-2xs); font-weight: var(--fw-semibold); letter-spacing: 0.02em; text-transform: uppercase;
  color: var(--brand-deep-blue); padding: 0.45rem 0.6rem; border-radius: var(--radius-pill);
}
.unera-wallet-pill__connect:hover { background: rgba(23,61,71,0.06); }
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-wallet-pill-css")) {
    const el = document.createElement("style");
    el.id = "unera-wallet-pill-css";
    el.textContent = CSS10;
    document.head.appendChild(el);
  }
  function WalletPill({
    connected = false,
    address = "0x742d\u20263a8f",
    balance = "$10,240",
    network = "Ethereum",
    initials = "JS",
    onConnect,
    className = "",
    ...rest
  }) {
    if (!connected) {
      return /* @__PURE__ */ import_react10.default.createElement("span", { className: `unera-wallet-pill unera-wallet-pill--disconnected ${className}`.trim(), ...rest }, /* @__PURE__ */ import_react10.default.createElement(Avatar, { initials, size: "md" }), /* @__PURE__ */ import_react10.default.createElement("button", { type: "button", className: "unera-wallet-pill__connect", onClick: onConnect }, "Connect"));
    }
    return /* @__PURE__ */ import_react10.default.createElement("span", { className: `unera-wallet-pill ${className}`.trim(), ...rest }, /* @__PURE__ */ import_react10.default.createElement(Avatar, { blockie: true, size: "md", badge: "\u{1F98A}" }), /* @__PURE__ */ import_react10.default.createElement("span", { className: "unera-wallet-pill__info" }, /* @__PURE__ */ import_react10.default.createElement("span", { className: "unera-wallet-pill__addr" }, address), /* @__PURE__ */ import_react10.default.createElement("span", { className: "unera-wallet-pill__bal" }, balance)), /* @__PURE__ */ import_react10.default.createElement("button", { type: "button", className: "unera-wallet-pill__net" }, /* @__PURE__ */ import_react10.default.createElement("span", { className: "unera-wallet-pill__net-dot", "aria-hidden": "true" }), network));
  }

  // components/transact/SaveToAddressBook.jsx
  var import_react11 = __toESM(require_react());
  var STAB_CSS = `
.stab-block { margin: 1.25rem 0 0; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; width: 100%; }
.stab-block > [hidden] { display: none !important; }
.stab-btn, .stab-chip { width: 100%; max-width: 22rem; box-sizing: border-box; }
.stab-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 0.5rem;
  min-height: 46px; padding: 0 1.25rem; border-radius: var(--radius-md, 0.75rem);
  border: 2px solid var(--border-subtle); background: var(--brand-white);
  color: var(--text-primary); font-family: var(--font-body); font-size: 0.938rem; font-weight: 600;
  cursor: pointer; transition: border-color .2s, color .2s, background .2s;
}
.stab-btn:hover { border-color: var(--brand-deep-blue); color: var(--brand-deep-blue); }
.stab-btn:focus-visible { outline: 2px solid var(--brand-deep-blue); outline-offset: 2px; }
.stab-btn svg { width: 18px; height: 18px; fill: currentColor; flex-shrink: 0; }
.stab-chip {
  display: inline-flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 0.375rem;
  padding: 0.625rem 1rem; border-radius: var(--radius-md, 0.75rem);
  background: var(--fin-up-bg); color: var(--fin-up); font-size: 0.875rem; font-weight: 600; margin: 0;
}
.stab-chip svg { width: 16px; height: 16px; flex-shrink: 0; }
.stab-chip__manage {
  margin-left: 0.5rem; font-size: 0.8125rem; color: var(--brand-deep-blue); font-weight: 600; text-decoration: none;
}
.stab-chip__manage:hover { text-decoration: underline; }
.stab-chip__manage:focus-visible { outline: 2px solid var(--brand-deep-blue); outline-offset: 2px; }

/* Modal */
.stab-overlay {
  position: fixed; inset: 0; z-index: 10010; background: rgba(15,32,38,0.55);
  display: flex; align-items: center; justify-content: center; padding: 1rem;
}
.stab-modal {
  width: 100%; max-width: 400px; background: var(--brand-white); border-radius: 0.5rem;
  box-shadow: 0 24px 64px rgba(0,0,0,0.28); display: flex; flex-direction: column;
  max-height: 90vh; overflow: hidden;
}
.stab-modal__header { display: flex; align-items: flex-start; gap: 1rem; padding: 1.5rem 1.5rem 0.75rem; }
.stab-modal__header-text { flex: 1; min-width: 0; }
.stab-modal__title { font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0 0 0.25rem; }
.stab-modal__desc { font-size: 0.875rem; color: var(--text-secondary); margin: 0; line-height: 1.5; }
.stab-modal__close {
  flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; border: none; background: var(--neutral-100);
  color: var(--text-secondary); cursor: pointer; display: flex; align-items: center; justify-content: center;
}
.stab-modal__close:hover { background: var(--neutral-200); color: var(--text-primary); }
.stab-modal__close svg { width: 20px; height: 20px; fill: currentColor; }
.stab-modal__body { padding: 0.75rem 1.5rem 1.25rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1rem; }
.stab-field { display: flex; flex-direction: column; gap: 0.375rem; }
.stab-label { font-size: 0.875rem; font-weight: 600; color: var(--text-primary); }
.stab-label__hint { font-weight: 400; color: var(--text-secondary); }
.stab-input, .stab-textarea {
  width: 100%; box-sizing: border-box; padding: 0.75rem 1rem; border: 2px solid var(--border-subtle);
  border-radius: 0.75rem; font-family: var(--font-body); font-size: 1rem; color: var(--text-primary); background: var(--brand-white);
}
.stab-input:focus, .stab-textarea:focus { outline: none; border-color: var(--brand-deep-blue); }
.stab-textarea { resize: vertical; min-height: 72px; line-height: 1.5; }
.stab-static {
  display: flex; align-items: center; min-height: 52px; padding: 0.75rem 1rem;
  background: var(--neutral-100); border: 2px solid var(--border-subtle); border-radius: 0.75rem;
  font-size: 0.875rem; color: var(--text-primary); word-break: break-all;
}
.stab-static--mono { font-family: ui-monospace, monospace; }
.stab-modal__hint { font-size: 0.813rem; color: var(--text-secondary); margin: 0; }
.stab-modal__footer { padding: 1rem 1.5rem 1.5rem; display: flex; gap: 0.75rem; }
.stab-modal__footer .stab-foot-btn { flex: 1; min-height: 46px; border-radius: 0.75rem; font-family: var(--font-body); font-size: 0.938rem; font-weight: 600; cursor: pointer; border: 2px solid transparent; }
.stab-foot-btn--secondary { background: var(--brand-white); border-color: var(--border-subtle); color: var(--text-primary); }
.stab-foot-btn--secondary:hover { border-color: var(--brand-deep-blue); color: var(--brand-deep-blue); }
.stab-foot-btn--primary { background: var(--brand-deep-blue); color: var(--brand-white); }
.stab-foot-btn--primary:hover { background: var(--neutral-800, #0f2026); }
`;
  if (typeof document !== "undefined" && !document.getElementById("unera-stab-css")) {
    const el = document.createElement("style");
    el.id = "unera-stab-css";
    el.textContent = STAB_CSS;
    document.head.appendChild(el);
  }
  var ICON_PERSON_ADD = /* @__PURE__ */ import_react11.default.createElement("svg", { viewBox: "0 -960 960 960", "aria-hidden": "true" }, /* @__PURE__ */ import_react11.default.createElement("path", { d: "M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" }));
  var ICON_CHECK = /* @__PURE__ */ import_react11.default.createElement("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, /* @__PURE__ */ import_react11.default.createElement("path", { d: "M5 13l4 4L19 7" }));
  var ICON_CLOSE = /* @__PURE__ */ import_react11.default.createElement("svg", { viewBox: "0 -960 960 960", "aria-hidden": "true" }, /* @__PURE__ */ import_react11.default.createElement("path", { d: "m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" }));
  function loadBook(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "[]");
    } catch (e) {
      return [];
    }
  }
  function upsertEntry(key, entry) {
    const list = loadBook(key);
    const i = list.findIndex((e) => (e.address || "").toLowerCase() === entry.address.toLowerCase() && e.network === entry.network);
    if (i >= 0) list[i] = { ...list[i], ...entry, lastUsedAt: (/* @__PURE__ */ new Date()).toISOString() };
    else list.push({ ...entry, id: "addr_" + Date.now(), addedAt: (/* @__PURE__ */ new Date()).toISOString(), lastUsedAt: (/* @__PURE__ */ new Date()).toISOString() });
    localStorage.setItem(key, JSON.stringify(list));
  }
  function SaveToAddressBook({
    address,
    network = "Ethereum",
    addressType = "EVM",
    storageKey = "unera_addressBook_v1",
    manageHref = "#",
    buttonLabel = "Save to address book",
    onSaved,
    ...rest
  }) {
    const [open, setOpen] = import_react11.default.useState(false);
    const [saved, setSaved] = import_react11.default.useState(false);
    const [savedLabel, setSavedLabel] = import_react11.default.useState("");
    const [label, setLabel] = import_react11.default.useState("");
    const [description, setDescription] = import_react11.default.useState("");
    const labelRef = import_react11.default.useRef(null);
    import_react11.default.useEffect(() => {
      if (open && labelRef.current) {
        const t = setTimeout(() => labelRef.current.focus(), 60);
        return () => clearTimeout(t);
      }
    }, [open]);
    import_react11.default.useEffect(() => {
      if (!open) return;
      const onKey = (e) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [open]);
    function openModal() {
      setLabel("");
      setDescription("");
      setOpen(true);
    }
    function confirmSave() {
      const l = label.trim();
      if (!l) {
        if (labelRef.current) labelRef.current.focus();
        return;
      }
      const entry = { label: l, description: description.trim(), address, addressType, network };
      upsertEntry(storageKey, entry);
      setSavedLabel(l);
      setSaved(true);
      setOpen(false);
      if (typeof onSaved === "function") onSaved(entry);
    }
    return /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-block", ...rest }, !saved && /* @__PURE__ */ import_react11.default.createElement("button", { type: "button", className: "stab-btn", onClick: openModal }, ICON_PERSON_ADD, buttonLabel), saved && /* @__PURE__ */ import_react11.default.createElement("p", { className: "stab-chip", role: "status" }, ICON_CHECK, /* @__PURE__ */ import_react11.default.createElement("span", null, 'Saved as "', savedLabel, '"'), /* @__PURE__ */ import_react11.default.createElement("a", { href: manageHref, className: "stab-chip__manage" }, "Manage wallets")), open && /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-overlay", onClick: (e) => {
      if (e.target === e.currentTarget) setOpen(false);
    } }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-modal", role: "dialog", "aria-modal": "true", "aria-label": "Save wallet" }, /* @__PURE__ */ import_react11.default.createElement("header", { className: "stab-modal__header" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-modal__header-text" }, /* @__PURE__ */ import_react11.default.createElement("h2", { className: "stab-modal__title" }, "Save wallet"), /* @__PURE__ */ import_react11.default.createElement("p", { className: "stab-modal__desc" }, "Label this address so you can recognize it when sending. Double-check the network before saving.")), /* @__PURE__ */ import_react11.default.createElement("button", { type: "button", className: "stab-modal__close", onClick: () => setOpen(false), "aria-label": "Close" }, ICON_CLOSE)), /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-modal__body" }, /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-field" }, /* @__PURE__ */ import_react11.default.createElement("label", { className: "stab-label", htmlFor: "stab-label-input" }, "Label"), /* @__PURE__ */ import_react11.default.createElement(
      "input",
      {
        ref: labelRef,
        id: "stab-label-input",
        className: "stab-input",
        type: "text",
        value: label,
        onChange: (e) => setLabel(e.target.value),
        maxLength: 60,
        placeholder: "e.g. Ledger (personal), Exchange hot wallet"
      }
    )), /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-field" }, /* @__PURE__ */ import_react11.default.createElement("span", { className: "stab-label" }, "Wallet address"), /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-static stab-static--mono" }, address || "\u2013")), /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-field" }, /* @__PURE__ */ import_react11.default.createElement("span", { className: "stab-label" }, "Address type & network"), /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-static" }, addressType, " \xB7 ", network)), /* @__PURE__ */ import_react11.default.createElement("div", { className: "stab-field" }, /* @__PURE__ */ import_react11.default.createElement("label", { className: "stab-label", htmlFor: "stab-desc-input" }, "Description ", /* @__PURE__ */ import_react11.default.createElement("span", { className: "stab-label__hint" }, "(optional)")), /* @__PURE__ */ import_react11.default.createElement(
      "textarea",
      {
        id: "stab-desc-input",
        className: "stab-textarea",
        value: description,
        onChange: (e) => setDescription(e.target.value),
        maxLength: 120,
        rows: 2,
        placeholder: "e.g. Cold storage, Exchange deposit wallet"
      }
    )), /* @__PURE__ */ import_react11.default.createElement("p", { className: "stab-modal__hint" }, "No wallet signature is required to save an address.")), /* @__PURE__ */ import_react11.default.createElement("footer", { className: "stab-modal__footer" }, /* @__PURE__ */ import_react11.default.createElement("button", { type: "button", className: "stab-foot-btn stab-foot-btn--secondary", onClick: () => setOpen(false) }, "Cancel"), /* @__PURE__ */ import_react11.default.createElement("button", { type: "button", className: "stab-foot-btn stab-foot-btn--primary", onClick: confirmSave }, "Save Wallet")))));
  }
  return __toCommonJS(stdin_exports);
})();
window.UNERADesignSystem_679671 = Object.assign(window.UNERADesignSystem_679671 || {}, __ds_tmp); window.__DS__ = window.UNERADesignSystem_679671;
