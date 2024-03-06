import {
  KeepAlive,
  Teleport,
  Transition,
  TransitionGroup,
  computed,
  createApp,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  isRef,
  markRaw,
  nextTick,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  provide,
  reactive,
  ref,
  shallowReactive,
  toRaw,
  unref,
  vShow,
  watch,
  withDirectives
} from "./chunk-Z6B2QTD3.js";
import "./chunk-Y2F7D3TJ.js";

// node_modules/quasar/dist/quasar.esm.prod.js
var h0 = Object.create;
var Hs = Object.defineProperty;
var p0 = Object.getOwnPropertyDescriptor;
var b0 = Object.getOwnPropertyNames;
var y0 = Object.getPrototypeOf;
var S0 = Object.prototype.hasOwnProperty;
var Vd = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var zd = (e, t) => {
  for (var o in t)
    Hs(e, o, { get: t[o], enumerable: true });
};
var x0 = (e, t, o, r) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of b0(t))
      !S0.call(e, n) && n !== o && Hs(e, n, { get: () => t[n], enumerable: !(r = p0(t, n)) || r.enumerable });
  return e;
};
var Dd = (e, t, o) => (o = e != null ? h0(y0(e)) : {}, x0(t || !e || !e.__esModule ? Hs(o, "default", { value: e, enumerable: true }) : o, e));
var jd = Vd((DT, Qd) => {
  Qd.exports = { isoName: "en-US", nativeName: "English (US)", label: { clear: "Clear", ok: "OK", cancel: "Cancel", close: "Close", set: "Set", select: "Select", reset: "Reset", remove: "Remove", update: "Update", create: "Create", search: "Search", filter: "Filter", refresh: "Refresh", expand: (e) => e ? `Expand "${e}"` : "Expand", collapse: (e) => e ? `Collapse "${e}"` : "Collapse" }, date: { days: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), daysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), firstDayOfWeek: 0, format24h: false, pluralDay: "days" }, table: { noData: "No data available", noResults: "No matching records found", loading: "Loading...", selectedRecords: (e) => e === 1 ? "1 record selected." : (e === 0 ? "No" : e) + " records selected.", recordsPerPage: "Records per page:", allRows: "All", pagination: (e, t, o) => e + "-" + t + " of " + o, columns: "Columns" }, editor: { url: "URL", bold: "Bold", italic: "Italic", strikethrough: "Strikethrough", underline: "Underline", unorderedList: "Unordered List", orderedList: "Ordered List", subscript: "Subscript", superscript: "Superscript", hyperlink: "Hyperlink", toggleFullscreen: "Toggle Fullscreen", quote: "Quote", left: "Left align", center: "Center align", right: "Right align", justify: "Justify align", print: "Print", outdent: "Decrease indentation", indent: "Increase indentation", removeFormat: "Remove formatting", formatting: "Formatting", fontSize: "Font Size", align: "Align", hr: "Insert Horizontal Rule", undo: "Undo", redo: "Redo", heading1: "Heading 1", heading2: "Heading 2", heading3: "Heading 3", heading4: "Heading 4", heading5: "Heading 5", heading6: "Heading 6", paragraph: "Paragraph", code: "Code", size1: "Very small", size2: "A bit small", size3: "Normal", size4: "Medium-large", size5: "Big", size6: "Very big", size7: "Maximum", defaultFont: "Default Font", viewSource: "View Source" }, tree: { noNodes: "No nodes available", noResults: "No matching nodes found" } };
});
var Zd = Vd((YT, Gd) => {
  Gd.exports = { name: "material-icons", type: { positive: "check_circle", negative: "warning", info: "info", warning: "priority_high" }, arrow: { up: "arrow_upward", right: "arrow_forward", down: "arrow_downward", left: "arrow_back", dropdown: "arrow_drop_down" }, chevron: { left: "chevron_left", right: "chevron_right" }, colorPicker: { spectrum: "gradient", tune: "tune", palette: "style" }, pullToRefresh: { icon: "refresh" }, carousel: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down", navigationIcon: "lens" }, chip: { remove: "cancel", selected: "check" }, datetime: { arrowLeft: "chevron_left", arrowRight: "chevron_right", now: "access_time", today: "today" }, editor: { bold: "format_bold", italic: "format_italic", strikethrough: "strikethrough_s", underline: "format_underlined", unorderedList: "format_list_bulleted", orderedList: "format_list_numbered", subscript: "vertical_align_bottom", superscript: "vertical_align_top", hyperlink: "link", toggleFullscreen: "fullscreen", quote: "format_quote", left: "format_align_left", center: "format_align_center", right: "format_align_right", justify: "format_align_justify", print: "print", outdent: "format_indent_decrease", indent: "format_indent_increase", removeFormat: "format_clear", formatting: "text_format", fontSize: "format_size", align: "format_align_left", hr: "remove", undo: "undo", redo: "redo", heading: "format_size", code: "code", size: "format_size", font: "font_download", viewSource: "code" }, expansionItem: { icon: "keyboard_arrow_down", denseIcon: "arrow_drop_down" }, fab: { icon: "add", activeIcon: "close" }, field: { clear: "cancel", error: "error" }, pagination: { first: "first_page", prev: "keyboard_arrow_left", next: "keyboard_arrow_right", last: "last_page" }, rating: { icon: "grade" }, stepper: { done: "check", active: "edit", error: "warning" }, tabs: { left: "chevron_left", right: "chevron_right", up: "keyboard_arrow_up", down: "keyboard_arrow_down" }, table: { arrowUp: "arrow_upward", warning: "warning", firstPage: "first_page", prevPage: "chevron_left", nextPage: "chevron_right", lastPage: "last_page" }, tree: { icon: "play_arrow" }, uploader: { done: "done", clear: "clear", add: "add_box", upload: "cloud_upload", removeQueue: "clear_all", removeUploaded: "done_all" } };
});
function it(e, t, o, r) {
  return Object.defineProperty(e, t, { get: o, set: r, enumerable: true }), e;
}
function hl(e, t) {
  for (let o in t)
    it(e, o, t[o]);
  return e;
}
var _t = ref(false);
var Qs;
function w0(e, t) {
  let o = /(edg|edge|edga|edgios)\/([\w.]+)/.exec(e) || /(opr)[\/]([\w.]+)/.exec(e) || /(vivaldi)[\/]([\w.]+)/.exec(e) || /(chrome|crios)[\/]([\w.]+)/.exec(e) || /(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e) || /(firefox|fxios)[\/]([\w.]+)/.exec(e) || /(webkit)[\/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[\/]([\w.]+)/.exec(e) || [];
  return { browser: o[5] || o[3] || o[1] || "", version: o[2] || o[4] || "0", versionNumber: o[4] || o[2] || "0", platform: t[0] || "" };
}
function k0(e) {
  return /(ipad)/.exec(e) || /(ipod)/.exec(e) || /(windows phone)/.exec(e) || /(iphone)/.exec(e) || /(kindle)/.exec(e) || /(silk)/.exec(e) || /(android)/.exec(e) || /(win)/.exec(e) || /(mac)/.exec(e) || /(linux)/.exec(e) || /(cros)/.exec(e) || /(playbook)/.exec(e) || /(bb)/.exec(e) || /(blackberry)/.exec(e) || [];
}
var Id = "ontouchstart" in window || window.navigator.maxTouchPoints > 0;
function q0(e) {
  let t = e.toLowerCase(), o = k0(t), r = w0(t, o), n = {};
  r.browser && (n[r.browser] = true, n.version = r.version, n.versionNumber = parseInt(r.versionNumber, 10)), r.platform && (n[r.platform] = true);
  let i = n.android || n.ios || n.bb || n.blackberry || n.ipad || n.iphone || n.ipod || n.kindle || n.playbook || n.silk || n["windows phone"];
  if (i === true || t.indexOf("mobile") !== -1 ? n.mobile = true : n.desktop = true, n["windows phone"] && (n.winphone = true, delete n["windows phone"]), n.edga || n.edgios ? (n.edge = true, r.browser = "edge") : n.crios ? (n.chrome = true, r.browser = "chrome") : n.fxios ? (n.firefox = true, r.browser = "firefox") : (n.ipod || n.ipad || n.iphone) && (n.ios = true), n.vivaldi && (r.browser = "vivaldi", n.vivaldi = true), (n.chrome || n.opr || n.safari || n.vivaldi || n.mobile === true && n.ios !== true && i !== true) && (n.webkit = true), n.edg ? (r.browser = "edgechromium", n.edgeChromium = true) : n.opr && (r.browser = "opera", n.opera = true), n.safari && (n.blackberry || n.bb ? (r.browser = "blackberry", n.blackberry = true) : n.playbook ? (r.browser = "playbook", n.playbook = true) : n.android ? (r.browser = "android", n.android = true) : n.kindle ? (r.browser = "kindle", n.kindle = true) : n.silk && (r.browser = "silk", n.silk = true)), n.name = r.browser, n.platform = r.platform, t.indexOf("electron") !== -1)
    n.electron = true;
  else if (document.location.href.indexOf("-extension://") !== -1)
    n.bex = true;
  else {
    if (window.Capacitor !== void 0 ? (n.capacitor = true, n.nativeMobile = true, n.nativeMobileWrapper = "capacitor") : (window._cordovaNative !== void 0 || window.cordova !== void 0) && (n.cordova = true, n.nativeMobile = true, n.nativeMobileWrapper = "cordova"), _t.value === true && (Qs = { is: { ...n } }), Id === true && n.mac === true && (n.desktop === true && n.safari === true || n.nativeMobile === true && n.android !== true && n.ios !== true && n.ipad !== true)) {
      delete n.mac, delete n.desktop;
      let a = Math.min(window.innerHeight, window.innerWidth) > 414 ? "ipad" : "iphone";
      Object.assign(n, { mobile: true, ios: true, platform: a, [a]: true });
    }
    n.mobile !== true && window.navigator.userAgentData && window.navigator.userAgentData.mobile && (delete n.desktop, n.mobile = true);
  }
  return n;
}
var Od = navigator.userAgent || navigator.vendor || window.opera;
var T0 = { has: { touch: false, webStorage: false }, within: { iframe: false } };
var _e = { userAgent: Od, is: q0(Od), has: { touch: Id }, within: { iframe: window.self !== window.top } };
var js = { install(e) {
  let { $q: t } = e;
  _t.value === true ? (e.onSSRHydrated.push(() => {
    Object.assign(t.platform, _e), _t.value = false;
  }), t.platform = reactive(this)) : t.platform = this;
} };
{
  let e;
  it(_e.has, "webStorage", () => {
    if (e !== void 0)
      return e;
    try {
      if (window.localStorage)
        return e = true, true;
    } catch {
    }
    return e = false, false;
  }), Object.assign(js, _e), _t.value === true && (Object.assign(js, Qs, T0), Qs = null);
}
var Tn = js;
var Xt = (e, t) => {
  let o = reactive(e);
  for (let r in e)
    it(t, r, () => o[r], (n) => {
      o[r] = n;
    });
  return t;
};
var Ye = { hasPassive: false, passiveCapture: true, notPassiveCapture: true };
try {
  let e = Object.defineProperty({}, "passive", { get() {
    Object.assign(Ye, { hasPassive: true, passive: { passive: true }, notPassive: { passive: false }, passiveCapture: { passive: true, capture: true }, notPassiveCapture: { passive: false, capture: true } });
  } });
  window.addEventListener("qtest", null, e), window.removeEventListener("qtest", null, e);
} catch {
}
function Ke() {
}
function Mn(e) {
  return e.button === 0;
}
function R0(e) {
  return e.button === 1;
}
function P0(e) {
  return e.button === 2;
}
function bt(e) {
  return e.touches && e.touches[0] ? e = e.touches[0] : e.changedTouches && e.changedTouches[0] ? e = e.changedTouches[0] : e.targetTouches && e.targetTouches[0] && (e = e.targetTouches[0]), { top: e.clientY, left: e.clientX };
}
function Us(e) {
  if (e.path)
    return e.path;
  if (e.composedPath)
    return e.composedPath();
  let t = [], o = e.target;
  for (; o; ) {
    if (t.push(o), o.tagName === "HTML")
      return t.push(document), t.push(window), t;
    o = o.parentElement;
  }
}
var A0 = 40;
var $0 = 800;
function E0(e) {
  let t = e.deltaX, o = e.deltaY;
  if ((t || o) && e.deltaMode) {
    let r = e.deltaMode === 1 ? A0 : $0;
    t *= r, o *= r;
  }
  return e.shiftKey && !t && ([o, t] = [t, o]), { x: t, y: o };
}
function et(e) {
  e.stopPropagation();
}
function ut(e) {
  e.cancelable !== false && e.preventDefault();
}
function Se(e) {
  e.cancelable !== false && e.preventDefault(), e.stopPropagation();
}
function Rn(e, t) {
  if (e === void 0 || t === true && e.__dragPrevented === true)
    return;
  let o = t === true ? (r) => {
    r.__dragPrevented = true, r.addEventListener("dragstart", ut, Ye.notPassiveCapture);
  } : (r) => {
    delete r.__dragPrevented, r.removeEventListener("dragstart", ut, Ye.notPassiveCapture);
  };
  e.querySelectorAll("a, img").forEach(o);
}
function lt(e, t, o) {
  let r = `__q_${t}_evt`;
  e[r] = e[r] !== void 0 ? e[r].concat(o) : o, o.forEach((n) => {
    n[0].addEventListener(n[1], e[n[2]], Ye[n[3]]);
  });
}
function Ct(e, t) {
  let o = `__q_${t}_evt`;
  e[o] !== void 0 && (e[o].forEach((r) => {
    r[0].removeEventListener(r[1], e[r[2]], Ye[r[3]]);
  }), e[o] = void 0);
}
var B0 = { listenOpts: Ye, leftClick: Mn, middleClick: R0, rightClick: P0, position: bt, getEventPath: Us, getMouseWheelDistance: E0, stop: et, prevent: ut, stopAndPrevent: Se, preventDraggable: Rn };
function So(e, t = 250, o) {
  let r = null;
  function n() {
    let i = arguments, a = () => {
      r = null, o !== true && e.apply(this, i);
    };
    r !== null ? clearTimeout(r) : o === true && e.apply(this, i), r = setTimeout(a, t);
  }
  return n.cancel = () => {
    r !== null && clearTimeout(r);
  }, n;
}
var Ks = ["sm", "md", "lg", "xl"];
var { passive: Nd } = Ye;
var Ws = Xt({ width: 0, height: 0, name: "xs", sizes: { sm: 600, md: 1024, lg: 1440, xl: 1920 }, lt: { sm: true, md: true, lg: true, xl: true }, gt: { xs: false, sm: false, md: false, lg: false }, xs: true, sm: false, md: false, lg: false, xl: false }, { setSizes: Ke, setDebounce: Ke, install({ $q: e, onSSRHydrated: t }) {
  if (e.screen = this, this.__installed === true) {
    e.config.screen !== void 0 && (e.config.screen.bodyClasses === false ? document.body.classList.remove(`screen--${this.name}`) : this.__update(true));
    return;
  }
  let { visualViewport: o } = window, r = o || window, n = document.scrollingElement || document.documentElement, i = o === void 0 || _e.is.mobile === true ? () => [Math.max(window.innerWidth, n.clientWidth), Math.max(window.innerHeight, n.clientHeight)] : () => [o.width * o.scale + window.innerWidth - n.clientWidth, o.height * o.scale + window.innerHeight - n.clientHeight], a = e.config.screen !== void 0 && e.config.screen.bodyClasses === true;
  this.__update = (m) => {
    let [f, d] = i();
    if (d !== this.height && (this.height = d), f !== this.width)
      this.width = f;
    else if (m !== true)
      return;
    let v = this.sizes;
    this.gt.xs = f >= v.sm, this.gt.sm = f >= v.md, this.gt.md = f >= v.lg, this.gt.lg = f >= v.xl, this.lt.sm = f < v.sm, this.lt.md = f < v.md, this.lt.lg = f < v.lg, this.lt.xl = f < v.xl, this.xs = this.lt.sm, this.sm = this.gt.xs === true && this.lt.md === true, this.md = this.gt.sm === true && this.lt.lg === true, this.lg = this.gt.md === true && this.lt.xl === true, this.xl = this.gt.lg, v = this.xs === true && "xs" || this.sm === true && "sm" || this.md === true && "md" || this.lg === true && "lg" || "xl", v !== this.name && (a === true && (document.body.classList.remove(`screen--${this.name}`), document.body.classList.add(`screen--${v}`)), this.name = v);
  };
  let l, s = {}, c = 16;
  this.setSizes = (m) => {
    Ks.forEach((f) => {
      m[f] !== void 0 && (s[f] = m[f]);
    });
  }, this.setDebounce = (m) => {
    c = m;
  };
  let u = () => {
    let m = getComputedStyle(document.body);
    m.getPropertyValue("--q-size-sm") && Ks.forEach((f) => {
      this.sizes[f] = parseInt(m.getPropertyValue(`--q-size-${f}`), 10);
    }), this.setSizes = (f) => {
      Ks.forEach((d) => {
        f[d] && (this.sizes[d] = f[d]);
      }), this.__update(true);
    }, this.setDebounce = (f) => {
      l !== void 0 && r.removeEventListener("resize", l, Nd), l = f > 0 ? So(this.__update, f) : this.__update, r.addEventListener("resize", l, Nd);
    }, this.setDebounce(c), Object.keys(s).length !== 0 ? (this.setSizes(s), s = void 0) : this.__update(), a === true && this.name === "xs" && document.body.classList.add("screen--xs");
  };
  _t.value === true ? t.push(u) : u();
} });
var Gt = Xt({ isActive: false, mode: false }, { __media: void 0, set(e) {
  Gt.mode = e, e === "auto" ? (Gt.__media === void 0 && (Gt.__media = window.matchMedia("(prefers-color-scheme: dark)"), Gt.__updateMedia = () => {
    Gt.set("auto");
  }, Gt.__media.addListener(Gt.__updateMedia)), e = Gt.__media.matches) : Gt.__media !== void 0 && (Gt.__media.removeListener(Gt.__updateMedia), Gt.__media = void 0), Gt.isActive = e === true, document.body.classList.remove(`body--${e === true ? "light" : "dark"}`), document.body.classList.add(`body--${e === true ? "dark" : "light"}`);
}, toggle() {
  Gt.set(Gt.isActive === false);
}, install({ $q: e, ssrContext: t }) {
  let { dark: o } = e.config;
  e.dark = this, this.__installed !== true && this.set(o !== void 0 ? o : false);
} });
var Ys = Gt;
var Hd = () => true;
function F0(e) {
  return typeof e == "string" && e !== "" && e !== "/" && e !== "#/";
}
function L0(e) {
  return e.startsWith("#") === true && (e = e.substring(1)), e.startsWith("/") === false && (e = "/" + e), e.endsWith("/") === true && (e = e.substring(0, e.length - 1)), "#" + e;
}
function V0(e) {
  if (e.backButtonExit === false)
    return () => false;
  if (e.backButtonExit === "*")
    return Hd;
  let t = ["#/"];
  return Array.isArray(e.backButtonExit) === true && t.push(...e.backButtonExit.filter(F0).map(L0)), () => t.includes(window.location.hash);
}
var jn = { __history: [], add: Ke, remove: Ke, install({ $q: e }) {
  if (this.__installed === true)
    return;
  let { cordova: t, capacitor: o } = _e.is;
  if (t !== true && o !== true)
    return;
  let r = e.config[t === true ? "cordova" : "capacitor"];
  if (r !== void 0 && r.backButton === false || o === true && (window.Capacitor === void 0 || window.Capacitor.Plugins.App === void 0))
    return;
  this.add = (a) => {
    a.condition === void 0 && (a.condition = Hd), this.__history.push(a);
  }, this.remove = (a) => {
    let l = this.__history.indexOf(a);
    l >= 0 && this.__history.splice(l, 1);
  };
  let n = V0(Object.assign({ backButtonExit: true }, r)), i = () => {
    if (this.__history.length) {
      let a = this.__history[this.__history.length - 1];
      a.condition() === true && (this.__history.pop(), a.handler());
    } else
      n() === true ? navigator.app.exitApp() : window.history.back();
  };
  t === true ? document.addEventListener("deviceready", () => {
    document.addEventListener("backbutton", i, false);
  }) : window.Capacitor.Plugins.App.addListener("backButton", i);
} };
var wa = Dd(jd());
function Ud() {
  let e = Array.isArray(navigator.languages) === true && navigator.languages.length !== 0 ? navigator.languages[0] : navigator.language;
  if (typeof e == "string")
    return e.split(/[-_]/).map((t, o) => o === 0 ? t.toLowerCase() : o > 1 || t.length < 4 ? t.toUpperCase() : t[0].toUpperCase() + t.slice(1).toLowerCase()).join("-");
}
var Jo = Xt({ __langPack: {} }, { getLocale: Ud, set(e = wa.default, t) {
  let o = { ...e, rtl: e.rtl === true, getLocale: Ud };
  if (o.set = Jo.set, Jo.__langConfig === void 0 || Jo.__langConfig.noHtmlAttrs !== true) {
    let r = document.documentElement;
    r.setAttribute("dir", o.rtl === true ? "rtl" : "ltr"), r.setAttribute("lang", o.isoName);
  }
  Object.assign(Jo.__langPack, o), Jo.props = o, Jo.isoName = o.isoName, Jo.nativeName = o.nativeName;
}, install({ $q: e, lang: t, ssrContext: o }) {
  e.lang = Jo.__langPack, Jo.__langConfig = e.config.lang, this.__installed === true ? t !== void 0 && this.set(t) : this.set(t || wa.default);
} });
var kr = Jo;
function pl(e, t, o = document.body) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as propName");
  if (typeof t != "string")
    throw new TypeError("Expected a string as value");
  if (!(o instanceof Element))
    throw new TypeError("Expected a DOM element");
  o.style.setProperty(`--q-${e}`, t);
}
var Kd = false;
function Wd(e) {
  Kd = e.isComposing === true;
}
function xo(e) {
  return Kd === true || e !== Object(e) || e.isComposing === true || e.qKeyEvent === true;
}
function wt(e, t) {
  return xo(e) === true ? false : [].concat(t).includes(e.keyCode);
}
function Yd(e) {
  if (e.ios === true)
    return "ios";
  if (e.android === true)
    return "android";
}
function z0({ is: e, has: t, within: o }, r) {
  let n = [e.desktop === true ? "desktop" : "mobile", `${t.touch === false ? "no-" : ""}touch`];
  if (e.mobile === true) {
    let i = Yd(e);
    i !== void 0 && n.push("platform-" + i);
  }
  if (e.nativeMobile === true) {
    let i = e.nativeMobileWrapper;
    n.push(i), n.push("native-mobile"), e.ios === true && (r[i] === void 0 || r[i].iosStatusBarPadding !== false) && n.push("q-ios-padding");
  } else
    e.electron === true ? n.push("electron") : e.bex === true && n.push("bex");
  return o.iframe === true && n.push("within-iframe"), n;
}
function D0() {
  let { is: e } = _e, t = document.body.className, o = new Set(t.replace(/ {2}/g, " ").split(" "));
  if (e.nativeMobile !== true && e.electron !== true && e.bex !== true) {
    if (e.desktop === true)
      o.delete("mobile"), o.delete("platform-ios"), o.delete("platform-android"), o.add("desktop");
    else if (e.mobile === true) {
      o.delete("desktop"), o.add("mobile"), o.delete("platform-ios"), o.delete("platform-android");
      let n = Yd(e);
      n !== void 0 && o.add(`platform-${n}`);
    }
  }
  _e.has.touch === true && (o.delete("no-touch"), o.add("touch")), _e.within.iframe === true && o.add("within-iframe");
  let r = Array.from(o).join(" ");
  t !== r && (document.body.className = r);
}
function O0(e) {
  for (let t in e)
    pl(t, e[t]);
}
var Xd = { install(e) {
  if (this.__installed !== true) {
    if (_t.value === true)
      D0();
    else {
      let { $q: t } = e;
      t.config.brand !== void 0 && O0(t.config.brand);
      let o = z0(_e, t.config);
      document.body.classList.add.apply(document.body.classList, o);
    }
    _e.is.ios === true && document.body.addEventListener("touchstart", Ke), window.addEventListener("keydown", Wd, true);
  }
} };
var Jd = Dd(Zd());
var Xs = Xt({ iconMapFn: null, __icons: {} }, { set(e, t) {
  let o = { ...e, rtl: e.rtl === true };
  o.set = Xs.set, Object.assign(Xs.__icons, o);
}, install({ $q: e, iconSet: t, ssrContext: o }) {
  e.config.iconMapFn !== void 0 && (this.iconMapFn = e.config.iconMapFn), e.iconSet = this.__icons, it(e, "iconMapFn", () => this.iconMapFn, (r) => {
    this.iconMapFn = r;
  }), this.__installed === true ? t !== void 0 && this.set(t) : this.set(t || Jd.default);
} });
var bl = Xs;
var yl = "_q_";
var Sl = "_q_t_";
var xl = "_q_s_";
var uo = "_q_l_";
var _l = "_q_pc_";
var Cl = "_q_f_";
var Pn = "_q_fo_";
var wl = "_q_tabs_";
var kl = "_q_u_";
var We = () => {
};
var ni = {};
var Gs = false;
function ef() {
  Gs = true;
}
function Zt(e, t) {
  if (e === t)
    return true;
  if (e !== null && t !== null && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return false;
    let o, r;
    if (e.constructor === Array) {
      if (o = e.length, o !== t.length)
        return false;
      for (r = o; r-- !== 0; )
        if (Zt(e[r], t[r]) !== true)
          return false;
      return true;
    }
    if (e.constructor === Map) {
      if (e.size !== t.size)
        return false;
      let i = e.entries();
      for (r = i.next(); r.done !== true; ) {
        if (t.has(r.value[0]) !== true)
          return false;
        r = i.next();
      }
      for (i = e.entries(), r = i.next(); r.done !== true; ) {
        if (Zt(r.value[1], t.get(r.value[0])) !== true)
          return false;
        r = i.next();
      }
      return true;
    }
    if (e.constructor === Set) {
      if (e.size !== t.size)
        return false;
      let i = e.entries();
      for (r = i.next(); r.done !== true; ) {
        if (t.has(r.value[0]) !== true)
          return false;
        r = i.next();
      }
      return true;
    }
    if (e.buffer != null && e.buffer.constructor === ArrayBuffer) {
      if (o = e.length, o !== t.length)
        return false;
      for (r = o; r-- !== 0; )
        if (e[r] !== t[r])
          return false;
      return true;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf)
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString)
      return e.toString() === t.toString();
    let n = Object.keys(e).filter((i) => e[i] !== void 0);
    if (o = n.length, o !== Object.keys(t).filter((i) => t[i] !== void 0).length)
      return false;
    for (r = o; r-- !== 0; ) {
      let i = n[r];
      if (Zt(e[i], t[i]) !== true)
        return false;
    }
    return true;
  }
  return e !== e && t !== t;
}
function at(e) {
  return e !== null && typeof e == "object" && Array.isArray(e) !== true;
}
function An(e) {
  return Object.prototype.toString.call(e) === "[object Date]";
}
function Zs(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}
function Mo(e) {
  return typeof e == "number" && isFinite(e);
}
var I0 = { deepEqual: Zt, object: at, date: An, regexp: Zs, number: Mo };
var tf = [Tn, Xd, Ys, Ws, jn, kr, bl];
function Un(e, t) {
  let o = createApp(e);
  o.config.globalProperties = t.config.globalProperties;
  let { reload: r, ...n } = t._context;
  return Object.assign(o._context, n), o;
}
function of(e, t) {
  t.forEach((o) => {
    o.install(e), o.__installed = true;
  });
}
function H0(e, t, o) {
  e.config.globalProperties.$q = o.$q, e.provide(yl, o.$q), of(o, tf), t.components !== void 0 && Object.values(t.components).forEach((r) => {
    at(r) === true && r.name !== void 0 && e.component(r.name, r);
  }), t.directives !== void 0 && Object.values(t.directives).forEach((r) => {
    at(r) === true && r.name !== void 0 && e.directive(r.name, r);
  }), t.plugins !== void 0 && of(o, Object.values(t.plugins).filter((r) => typeof r.install == "function" && tf.includes(r) === false)), _t.value === true && (o.$q.onSSRHydrated = () => {
    o.onSSRHydrated.forEach((r) => {
      r();
    }), o.$q.onSSRHydrated = () => {
    };
  });
}
var nf = function(e, t = {}) {
  let o = { version: "2.14.6" };
  Gs === false ? (t.config !== void 0 && Object.assign(ni, t.config), o.config = { ...ni }, ef()) : o.config = t.config || {}, H0(e, t, { parentApp: e, $q: o, lang: t.lang, iconSet: t.iconSet, onSSRHydrated: [] });
};
var qd = {};
zd(qd, { QAjaxBar: () => Tl, QAvatar: () => Rl, QBadge: () => pf, QBanner: () => yf, QBar: () => Sf, QBreadcrumbs: () => Cf, QBreadcrumbsEl: () => Rf, QBtn: () => Be, QBtnDropdown: () => Ql, QBtnGroup: () => gi, QBtnToggle: () => lm, QCard: () => $i, QCardActions: () => jl, QCardSection: () => Io, QCarousel: () => dm, QCarouselControl: () => vm, QCarouselSlide: () => fm, QChatMessage: () => gm, QCheckbox: () => mn, QChip: () => Ki, QCircularProgress: () => Yi, QColor: () => Pm, QDate: () => Qm, QDialog: () => hn, QDrawer: () => tv, QEditor: () => yv, QExpansionItem: () => xv, QFab: () => Cv, QFabAction: () => qv, QField: () => Pu, QFile: () => $v, QFooter: () => Ev, QForm: () => Bv, QFormChildMixin: () => Fv, QHeader: () => Vv, QIcon: () => Ce, QImg: () => zv, QInfiniteScroll: () => Nv, QInnerLoading: () => Qv, QInput: () => sa, QIntersection: () => eg, QItem: () => pn, QItemLabel: () => Nr, QItemSection: () => ho, QKnob: () => ng, QLayout: () => ag, QLinearProgress: () => is, QList: () => Uu, QMarkupTable: () => Wu, QMenu: () => sn, QNoSsr: () => ug, QOptionGroup: () => Gu, QPage: () => vg, QPageContainer: () => gg, QPageScroller: () => yg, QPageSticky: () => Sg, QPagination: () => xg, QParallax: () => Cg, QPopupEdit: () => wg, QPopupProxy: () => qg, QPullToRefresh: () => Mg, QRadio: () => Yu, QRange: () => Rg, QRating: () => Pg, QResizeObserver: () => go, QResponsive: () => Ag, QRouteTab: () => Xh, QScrollArea: () => Lg, QScrollObserver: () => ca, QSelect: () => fs, QSeparator: () => Co, QSkeleton: () => Hg, QSlideItem: () => Ug, QSlideTransition: () => sr, QSlider: () => En, QSpace: () => Kg, QSpinner: () => St, QSpinnerAudio: () => Wg, QSpinnerBall: () => Yg, QSpinnerBars: () => Xg, QSpinnerBox: () => Gg, QSpinnerClock: () => Zg, QSpinnerComment: () => Jg, QSpinnerCube: () => eh, QSpinnerDots: () => th, QSpinnerFacebook: () => oh, QSpinnerGears: () => nh, QSpinnerGrid: () => rh, QSpinnerHearts: () => ih, QSpinnerHourglass: () => ah, QSpinnerInfinity: () => lh, QSpinnerIos: () => uh, QSpinnerOrbit: () => sh, QSpinnerOval: () => ch, QSpinnerPie: () => dh, QSpinnerPuff: () => fh, QSpinnerRadio: () => mh, QSpinnerRings: () => vh, QSpinnerTail: () => gh, QSplitter: () => ph, QStep: () => Sh, QStepper: () => xh, QStepperNavigation: () => _h, QTab: () => ir, QTabPanel: () => Gi, QTabPanels: () => lu, QTable: () => Uh, QTabs: () => Oa, QTd: () => Yh, QTh: () => bs, QTime: () => Zh, QTimeline: () => Jh, QTimelineEntry: () => ep, QToggle: () => Xu, QToolbar: () => tp, QToolbarTitle: () => op, QTooltip: () => Cu, QTr: () => Kh, QTree: () => rp, QUploader: () => sp, QUploaderAddTrigger: () => cp, QVideo: () => fp, QVirtualScroll: () => xs });
var M = (e) => markRaw(defineComponent(e));
var Mt = (e) => markRaw(e);
var af = ["B", "KB", "MB", "GB", "TB", "PB"];
function ri(e) {
  let t = 0;
  for (; parseInt(e, 10) >= 1024 && t < af.length - 1; )
    e /= 1024, ++t;
  return `${e.toFixed(1)}${af[t]}`;
}
function Js(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ge(e, t, o) {
  return o <= t ? t : Math.min(o, Math.max(t, e));
}
function qr(e, t, o) {
  if (o <= t)
    return t;
  let r = o - t + 1, n = t + (e - t) % r;
  return n < t && (n = r + n), n === 0 ? 0 : n;
}
function Ze(e, t = 2, o = "0") {
  if (e == null)
    return e;
  let r = "" + e;
  return r.length >= t ? r : new Array(t - r.length + 1).join(o) + r;
}
var j0 = { humanStorageSize: ri, capitalize: Js, between: Ge, normalizeToInterval: qr, pad: Ze };
var tc = XMLHttpRequest;
var lf = tc.prototype.open;
var X0 = ["top", "right", "bottom", "left"];
var ql = [];
var ka = 0;
function G0({ p: e, pos: t, active: o, horiz: r, reverse: n, dir: i }) {
  let a = 1, l = 1;
  return r === true ? (n === true && (a = -1), t === "bottom" && (l = -1), { transform: `translate3d(${a * (e - 100)}%,${o ? 0 : l * -200}%,0)` }) : (n === true && (l = -1), t === "right" && (a = -1), { transform: `translate3d(${o ? 0 : i * a * -200}%,${l * (e - 100)}%,0)` });
}
function Z0(e, t) {
  return typeof t != "number" && (e < 25 ? t = Math.random() * 3 + 3 : e < 65 ? t = Math.random() * 3 : e < 85 ? t = Math.random() * 2 : e < 99 ? t = 0.6 : t = 0), Ge(e + t, 0, 100);
}
function J0(e) {
  ka++, ql.push(e), !(ka > 1) && (tc.prototype.open = function(t, o) {
    let r = [], n = () => {
      ql.forEach((a) => {
        (a.hijackFilter.value === null || a.hijackFilter.value(o) === true) && (a.start(), r.push(a.stop));
      });
    }, i = () => {
      r.forEach((a) => {
        a();
      });
    };
    this.addEventListener("loadstart", n, { once: true }), this.addEventListener("loadend", i, { once: true }), lf.apply(this, arguments);
  });
}
function eb(e) {
  ql = ql.filter((t) => t.start !== e), ka = Math.max(0, ka - 1), ka === 0 && (tc.prototype.open = lf);
}
var Tl = M({ name: "QAjaxBar", props: { position: { type: String, default: "top", validator: (e) => X0.includes(e) }, size: { type: String, default: "2px" }, color: String, skipHijack: Boolean, reverse: Boolean, hijackFilter: Function }, emits: ["start", "stop"], setup(e, { emit: t }) {
  let { proxy: o } = getCurrentInstance(), r = ref(0), n = ref(false), i = ref(true), a = 0, l = null, s, c = computed(() => `q-loading-bar q-loading-bar--${e.position}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (i.value === true ? "" : " no-transition")), u = computed(() => e.position === "top" || e.position === "bottom"), m = computed(() => u.value === true ? "height" : "width"), f = computed(() => {
    let h2 = n.value, g = G0({ p: r.value, pos: e.position, active: h2, horiz: u.value, reverse: o.$q.lang.rtl === true && ["top", "bottom"].includes(e.position) ? e.reverse === false : e.reverse, dir: o.$q.lang.rtl === true ? -1 : 1 });
    return g[m.value] = e.size, g.opacity = h2 ? 1 : 0, g;
  }), d = computed(() => n.value === true ? { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": r.value } : { "aria-hidden": "true" });
  function v(h2 = 300) {
    let g = s;
    return s = Math.max(0, h2) || 0, a++, a > 1 ? (g === 0 && h2 > 0 ? w() : l !== null && g > 0 && h2 <= 0 && (clearTimeout(l), l = null), a) : (l !== null && clearTimeout(l), t("start"), r.value = 0, l = setTimeout(() => {
      l = null, i.value = true, h2 > 0 && w();
    }, n._value === true ? 500 : 1), n._value !== true && (n.value = true, i.value = false), a);
  }
  function x(h2) {
    return a > 0 && (r.value = Z0(r.value, h2)), a;
  }
  function p() {
    if (a = Math.max(0, a - 1), a > 0)
      return a;
    l !== null && (clearTimeout(l), l = null), t("stop");
    let h2 = () => {
      i.value = true, r.value = 100, l = setTimeout(() => {
        l = null, n.value = false;
      }, 1e3);
    };
    return r.value === 0 ? l = setTimeout(h2, 1) : h2(), a;
  }
  function w() {
    r.value < 100 && (l = setTimeout(() => {
      l = null, x(), w();
    }, s));
  }
  let b;
  return onMounted(() => {
    e.skipHijack !== true && (b = true, J0({ start: v, stop: p, hijackFilter: computed(() => e.hijackFilter || null) }));
  }), onBeforeUnmount(() => {
    l !== null && clearTimeout(l), b === true && eb(v);
  }), Object.assign(o, { start: v, stop: p, increment: x }), () => h("div", { class: c.value, style: f.value, ...d.value });
} });
var Ml = { xs: 18, sm: 24, md: 32, lg: 38, xl: 46 };
var Ot = { size: String };
function It(e, t = Ml) {
  return computed(() => e.size !== void 0 ? { fontSize: e.size in t ? `${t[e.size]}px` : e.size } : null);
}
function ee(e, t) {
  return e !== void 0 && e() || t;
}
function en(e, t) {
  if (e !== void 0) {
    let o = e();
    if (o != null)
      return o.slice();
  }
  return t;
}
function je(e, t) {
  return e !== void 0 ? t.concat(e()) : t;
}
function ai(e, t) {
  return e === void 0 ? t : t !== void 0 ? t.concat(e()) : e();
}
function kt(e, t, o, r, n, i) {
  t.key = r + n;
  let a = h(e, t, o);
  return n === true ? withDirectives(a, i()) : a;
}
var sf = "0 0 24 24";
var cf = (e) => e;
var oc = (e) => `ionicons ${e}`;
var ff = { "mdi-": (e) => `mdi ${e}`, "icon-": cf, "bt-": (e) => `bt ${e}`, "eva-": (e) => `eva ${e}`, "ion-md": oc, "ion-ios": oc, "ion-logo": oc, "iconfont ": cf, "ti-": (e) => `themify-icon ${e}`, "bi-": (e) => `bootstrap-icons ${e}` };
var mf = { o_: "-outlined", r_: "-round", s_: "-sharp" };
var vf = { sym_o_: "-outlined", sym_r_: "-rounded", sym_s_: "-sharp" };
var ib = new RegExp("^(" + Object.keys(ff).join("|") + ")");
var ab = new RegExp("^(" + Object.keys(mf).join("|") + ")");
var df = new RegExp("^(" + Object.keys(vf).join("|") + ")");
var lb = /^[Mm]\s?[-+]?\.?\d/;
var ub = /^img:/;
var sb = /^svguse:/;
var cb = /^ion-/;
var db = /^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;
var Ce = M({ name: "QIcon", props: { ...Ot, tag: { type: String, default: "i" }, name: String, color: String, left: Boolean, right: Boolean }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), r = It(e), n = computed(() => "q-icon" + (e.left === true ? " on-left" : "") + (e.right === true ? " on-right" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), i = computed(() => {
    let a, l = e.name;
    if (l === "none" || !l)
      return { none: true };
    if (o.iconMapFn !== null) {
      let u = o.iconMapFn(l);
      if (u !== void 0)
        if (u.icon !== void 0) {
          if (l = u.icon, l === "none" || !l)
            return { none: true };
        } else
          return { cls: u.cls, content: u.content !== void 0 ? u.content : " " };
    }
    if (lb.test(l) === true) {
      let [u, m = sf] = l.split("|");
      return { svg: true, viewBox: m, nodes: u.split("&&").map((f) => {
        let [d, v, x] = f.split("@@");
        return h("path", { style: v, d, transform: x });
      }) };
    }
    if (ub.test(l) === true)
      return { img: true, src: l.substring(4) };
    if (sb.test(l) === true) {
      let [u, m = sf] = l.split("|");
      return { svguse: true, src: u.substring(7), viewBox: m };
    }
    let s = " ", c = l.match(ib);
    if (c !== null)
      a = ff[c[1]](l);
    else if (db.test(l) === true)
      a = l;
    else if (cb.test(l) === true)
      a = `ionicons ion-${o.platform.is.ios === true ? "ios" : "md"}${l.substring(3)}`;
    else if (df.test(l) === true) {
      a = "notranslate material-symbols";
      let u = l.match(df);
      u !== null && (l = l.substring(6), a += vf[u[1]]), s = l;
    } else {
      a = "notranslate material-icons";
      let u = l.match(ab);
      u !== null && (l = l.substring(2), a += mf[u[1]]), s = l;
    }
    return { cls: a, content: s };
  });
  return () => {
    let a = { class: n.value, style: r.value, "aria-hidden": "true", role: "presentation" };
    return i.value.none === true ? h(e.tag, a, ee(t.default)) : i.value.img === true ? h(e.tag, a, je(t.default, [h("img", { src: i.value.src })])) : i.value.svg === true ? h(e.tag, a, je(t.default, [h("svg", { viewBox: i.value.viewBox || "0 0 24 24" }, i.value.nodes)])) : i.value.svguse === true ? h(e.tag, a, je(t.default, [h("svg", { viewBox: i.value.viewBox }, [h("use", { "xlink:href": i.value.src })])])) : (i.value.cls !== void 0 && (a.class += " " + i.value.cls), h(e.tag, a, je(t.default, [i.value.content])));
  };
} });
var Rl = M({ name: "QAvatar", props: { ...Ot, fontSize: String, color: String, textColor: String, icon: String, square: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  let o = It(e), r = computed(() => "q-avatar" + (e.color ? ` bg-${e.color}` : "") + (e.textColor ? ` text-${e.textColor} q-chip--colored` : "") + (e.square === true ? " q-avatar--square" : e.rounded === true ? " rounded-borders" : "")), n = computed(() => e.fontSize ? { fontSize: e.fontSize } : null);
  return () => {
    let i = e.icon !== void 0 ? [h(Ce, { name: e.icon })] : void 0;
    return h("div", { class: r.value, style: o.value }, [h("div", { class: "q-avatar__content row flex-center overflow-hidden", style: n.value }, ai(t.default, i))]);
  };
} });
var mb = ["top", "middle", "bottom"];
var pf = M({ name: "QBadge", props: { color: String, textColor: String, floating: Boolean, transparent: Boolean, multiLine: Boolean, outline: Boolean, rounded: Boolean, label: [Number, String], align: { type: String, validator: (e) => mb.includes(e) } }, setup(e, { slots: t }) {
  let o = computed(() => e.align !== void 0 ? { verticalAlign: e.align } : null), r = computed(() => {
    let n = e.outline === true && e.color || e.textColor;
    return `q-badge flex inline items-center no-wrap q-badge--${e.multiLine === true ? "multi" : "single"}-line` + (e.outline === true ? " q-badge--outline" : e.color !== void 0 ? ` bg-${e.color}` : "") + (n !== void 0 ? ` text-${n}` : "") + (e.floating === true ? " q-badge--floating" : "") + (e.rounded === true ? " q-badge--rounded" : "") + (e.transparent === true ? " q-badge--transparent" : "");
  });
  return () => h("div", { class: r.value, style: o.value, role: "status", "aria-label": e.label }, je(t.default, e.label !== void 0 ? [e.label] : []));
} });
var pe = { dark: { type: Boolean, default: null } };
function be(e, t) {
  return computed(() => e.dark === null ? t.dark.isActive : e.dark);
}
var yf = M({ name: "QBanner", props: { ...pe, inlineActions: Boolean, dense: Boolean, rounded: Boolean }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), r = be(e, o), n = computed(() => "q-banner row items-center" + (e.dense === true ? " q-banner--dense" : "") + (r.value === true ? " q-banner--dark q-dark" : "") + (e.rounded === true ? " rounded-borders" : "")), i = computed(() => `q-banner__actions row items-center justify-end col-${e.inlineActions === true ? "auto" : "all"}`);
  return () => {
    let a = [h("div", { class: "q-banner__avatar col-auto row items-center self-start" }, ee(t.avatar)), h("div", { class: "q-banner__content col text-body2" }, ee(t.default))], l = ee(t.action);
    return l !== void 0 && a.push(h("div", { class: i.value }, l)), h("div", { class: n.value + (e.inlineActions === false && l !== void 0 ? " q-banner--top-padding" : ""), role: "alert" }, a);
  };
} });
var Sf = M({ name: "QBar", props: { ...pe, dense: Boolean }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), r = be(e, o), n = computed(() => `q-bar row no-wrap items-center q-bar--${e.dense === true ? "dense" : "standard"}  q-bar--${r.value === true ? "dark" : "light"}`);
  return () => h("div", { class: n.value, role: "toolbar" }, ee(t.default));
} });
var xf = { left: "start", center: "center", right: "end", between: "between", around: "around", evenly: "evenly", stretch: "stretch" };
var Sb = Object.keys(xf);
var li = { align: { type: String, validator: (e) => Sb.includes(e) } };
function ui(e) {
  return computed(() => {
    let t = e.align === void 0 ? e.vertical === true ? "stretch" : "left" : e.align;
    return `${e.vertical === true ? "items" : "justify"}-${xf[t]}`;
  });
}
function qa(e) {
  if (Object(e.$parent) === e.$parent)
    return e.$parent;
  let { parent: t } = e.$;
  for (; Object(t) === t; ) {
    if (Object(t.proxy) === t.proxy)
      return t.proxy;
    t = t.parent;
  }
}
function _f(e, t) {
  typeof t.type == "symbol" ? Array.isArray(t.children) === true && t.children.forEach((o) => {
    _f(e, o);
  }) : e.add(t);
}
function si(e) {
  let t = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    _f(t, o);
  }), Array.from(t);
}
function ci(e) {
  return e.appContext.config.globalProperties.$router !== void 0;
}
function so(e) {
  return e.isUnmounted === true || e.isDeactivated === true;
}
var xb = ["", true];
var Cf = M({ name: "QBreadcrumbs", props: { ...li, separator: { type: String, default: "/" }, separatorColor: String, activeColor: { type: String, default: "primary" }, gutter: { type: String, validator: (e) => ["none", "xs", "sm", "md", "lg", "xl"].includes(e), default: "sm" } }, setup(e, { slots: t }) {
  let o = ui(e), r = computed(() => `flex items-center ${o.value}${e.gutter === "none" ? "" : ` q-gutter-${e.gutter}`}`), n = computed(() => e.separatorColor ? ` text-${e.separatorColor}` : ""), i = computed(() => ` text-${e.activeColor}`);
  return () => {
    let a = si(ee(t.default));
    if (a.length === 0)
      return;
    let l = 1, s = [], c = a.filter((m) => m.type !== void 0 && m.type.name === "QBreadcrumbsEl").length, u = t.separator !== void 0 ? t.separator : () => e.separator;
    return a.forEach((m) => {
      if (m.type !== void 0 && m.type.name === "QBreadcrumbsEl") {
        let f = l < c, d = m.props !== null && xb.includes(m.props.disable), v = (f === true ? "" : " q-breadcrumbs--last") + (d !== true && f === true ? i.value : "");
        l++, s.push(h("div", { class: `flex items-center${v}` }, [m])), f === true && s.push(h("div", { class: "q-breadcrumbs__separator" + n.value }, u()));
      } else
        s.push(m);
    }), h("div", { class: "q-breadcrumbs" }, [h("div", { class: r.value }, s)]);
  };
} });
function wf(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
function kf(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function Cb(e, t) {
  for (let o in t) {
    let r = t[o], n = e[o];
    if (typeof r == "string") {
      if (r !== n)
        return false;
    } else if (Array.isArray(n) === false || n.length !== r.length || r.some((i, a) => i !== n[a]))
      return false;
  }
  return true;
}
function qf(e, t) {
  return Array.isArray(t) === true ? e.length === t.length && e.every((o, r) => o === t[r]) : e.length === 1 && e[0] === t;
}
function wb(e, t) {
  return Array.isArray(e) === true ? qf(e, t) : Array.isArray(t) === true ? qf(t, e) : e === t;
}
function kb(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return false;
  for (let o in e)
    if (wb(e[o], t[o]) === false)
      return false;
  return true;
}
var Do = { to: [String, Object], replace: Boolean, exact: Boolean, activeClass: { type: String, default: "q-router-link--active" }, exactActiveClass: { type: String, default: "q-router-link--exact-active" }, href: String, target: String, disable: Boolean };
function Kn({ fallbackTag: e, useDisableForRouterLinkProps: t = true } = {}) {
  let o = getCurrentInstance(), { props: r, proxy: n, emit: i } = o, a = ci(o), l = computed(() => r.disable !== true && r.href !== void 0), s = t === true ? computed(() => a === true && r.disable !== true && l.value !== true && r.to !== void 0 && r.to !== null && r.to !== "") : computed(() => a === true && l.value !== true && r.to !== void 0 && r.to !== null && r.to !== ""), c = computed(() => s.value === true ? b(r.to) : null), u = computed(() => c.value !== null), m = computed(() => l.value === true || u.value === true), f = computed(() => r.type === "a" || m.value === true ? "a" : r.tag || e || "div"), d = computed(() => l.value === true ? { href: r.href, target: r.target } : u.value === true ? { href: c.value.href, target: r.target } : {}), v = computed(() => {
    if (u.value === false)
      return -1;
    let { matched: C } = c.value, { length: R } = C, $ = C[R - 1];
    if ($ === void 0)
      return -1;
    let F = n.$route.matched;
    if (F.length === 0)
      return -1;
    let E = F.findIndex(kf.bind(null, $));
    if (E !== -1)
      return E;
    let A = wf(C[R - 2]);
    return R > 1 && wf($) === A && F[F.length - 1].path !== A ? F.findIndex(kf.bind(null, C[R - 2])) : E;
  }), x = computed(() => u.value === true && v.value !== -1 && Cb(n.$route.params, c.value.params)), p = computed(() => x.value === true && v.value === n.$route.matched.length - 1 && kb(n.$route.params, c.value.params)), w = computed(() => u.value === true ? p.value === true ? ` ${r.exactActiveClass} ${r.activeClass}` : r.exact === true ? "" : x.value === true ? ` ${r.activeClass}` : "" : "");
  function b(C) {
    try {
      return n.$router.resolve(C);
    } catch {
    }
    return null;
  }
  function h2(C, { returnRouterError: R, to: $ = r.to, replace: F = r.replace } = {}) {
    if (r.disable === true)
      return C.preventDefault(), Promise.resolve(false);
    if (C.metaKey || C.altKey || C.ctrlKey || C.shiftKey || C.button !== void 0 && C.button !== 0 || r.target === "_blank")
      return Promise.resolve(false);
    C.preventDefault();
    let E = n.$router[F === true ? "replace" : "push"]($);
    return R === true ? E : E.then(() => {
    }).catch(() => {
    });
  }
  function g(C) {
    if (u.value === true) {
      let R = ($) => h2(C, $);
      i("click", C, R), C.defaultPrevented !== true && R();
    } else
      i("click", C);
  }
  return { hasRouterLink: u, hasHrefLink: l, hasLink: m, linkTag: f, resolvedLink: c, linkIsActive: x, linkIsExactActive: p, linkClass: w, linkAttrs: d, getLink: b, navigateToRouterLink: h2, navigateOnClick: g };
}
var Rf = M({ name: "QBreadcrumbsEl", props: { ...Do, label: String, icon: String, tag: { type: String, default: "span" } }, emits: ["click"], setup(e, { slots: t }) {
  let { linkTag: o, linkAttrs: r, linkClass: n, navigateOnClick: i } = Kn(), a = computed(() => ({ class: "q-breadcrumbs__el q-link flex inline items-center relative-position " + (e.disable !== true ? "q-link--focusable" + n.value : "q-breadcrumbs__el--disable"), ...r.value, onClick: i })), l = computed(() => "q-breadcrumbs__el-icon" + (e.label !== void 0 ? " q-breadcrumbs__el-icon--with-label" : ""));
  return () => {
    let s = [];
    return e.icon !== void 0 && s.push(h(Ce, { class: l.value, name: e.icon })), e.label !== void 0 && s.push(e.label), h(o.value, { ...a.value }, je(t.default, s));
  };
} });
var ze = { size: { type: [Number, String], default: "1em" }, color: String };
function Le(e) {
  return { cSize: computed(() => e.size in Ml ? `${Ml[e.size]}px` : e.size), classes: computed(() => "q-spinner" + (e.color ? ` text-${e.color}` : "")) };
}
var St = M({ name: "QSpinner", props: { ...ze, thickness: { type: Number, default: 5 } }, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value + " q-spinner-mat", width: t.value, height: t.value, viewBox: "25 25 50 50" }, [h("circle", { class: "path", cx: "50", cy: "50", r: "20", fill: "none", stroke: "currentColor", "stroke-width": e.thickness, "stroke-miterlimit": "10" })]);
} });
function Tr(e) {
  if (e === window)
    return { top: 0, left: 0 };
  let { top: t, left: o } = e.getBoundingClientRect();
  return { top: t, left: o };
}
function Tb(e, t) {
  return window.getComputedStyle(e).getPropertyValue(t);
}
function on(e) {
  return e === window ? window.innerHeight : e.getBoundingClientRect().height;
}
function Mb(e) {
  return e === window ? window.innerWidth : e.getBoundingClientRect().width;
}
function Mr(e, t) {
  let o = e.style;
  for (let r in t)
    o[r] = t[r];
}
function Rb(e, t) {
  e.forEach((o) => Mr(o, t));
}
function Pb(e) {
  if (typeof e == "function") {
    if (document.readyState !== "loading")
      return e();
    document.addEventListener("DOMContentLoaded", e, false);
  }
}
function $f(e) {
  if (e == null)
    return;
  if (typeof e == "string")
    try {
      return document.querySelector(e) || void 0;
    } catch {
      return;
    }
  let t = unref(e);
  if (t)
    return t.$el || t;
}
function $l(e, t) {
  if (e == null || e.contains(t) === true)
    return true;
  for (let o = e.nextElementSibling; o !== null; o = o.nextElementSibling)
    if (o.contains(t))
      return true;
  return false;
}
var Ab = { offset: Tr, style: Tb, height: on, width: Mb, css: Mr, cssBatch: Rb, ready: Pb };
function Ta(e, t = 250) {
  let o = false, r;
  return function() {
    return o === false && (o = true, setTimeout(() => {
      o = false;
    }, t), r = e.apply(this, arguments)), r;
  };
}
function Ef(e, t, o, r) {
  o.modifiers.stop === true && et(e);
  let n = o.modifiers.color, i = o.modifiers.center;
  i = i === true || r === true;
  let a = document.createElement("span"), l = document.createElement("span"), s = bt(e), { left: c, top: u, width: m, height: f } = t.getBoundingClientRect(), d = Math.sqrt(m * m + f * f), v = d / 2, x = `${(m - d) / 2}px`, p = i ? x : `${s.left - c - v}px`, w = `${(f - d) / 2}px`, b = i ? w : `${s.top - u - v}px`;
  l.className = "q-ripple__inner", Mr(l, { height: `${d}px`, width: `${d}px`, transform: `translate3d(${p},${b},0) scale3d(.2,.2,1)`, opacity: 0 }), a.className = `q-ripple${n ? " text-" + n : ""}`, a.setAttribute("dir", "ltr"), a.appendChild(l), t.appendChild(a);
  let h2 = () => {
    a.remove(), clearTimeout(g);
  };
  o.abort.push(h2);
  let g = setTimeout(() => {
    l.classList.add("q-ripple__inner--enter"), l.style.transform = `translate3d(${x},${w},0) scale3d(1,1,1)`, l.style.opacity = 0.2, g = setTimeout(() => {
      l.classList.remove("q-ripple__inner--enter"), l.classList.add("q-ripple__inner--leave"), l.style.opacity = 0, g = setTimeout(() => {
        a.remove(), o.abort.splice(o.abort.indexOf(h2), 1);
      }, 275);
    }, 250);
  }, 50);
}
function Bf(e, { modifiers: t, value: o, arg: r }) {
  let n = Object.assign({}, e.cfg.ripple, t, o);
  e.modifiers = { early: n.early === true, stop: n.stop === true, center: n.center === true, color: n.color || r, keyCodes: [].concat(n.keyCodes || 13) };
}
var nn = Mt({ name: "ripple", beforeMount(e, t) {
  let o = t.instance.$.appContext.config.globalProperties.$q.config || {};
  if (o.ripple === false)
    return;
  let r = { cfg: o, enabled: t.value !== false, modifiers: {}, abort: [], start(n) {
    r.enabled === true && n.qSkipRipple !== true && n.type === (r.modifiers.early === true ? "pointerdown" : "click") && Ef(n, e, r, n.qKeyEvent === true);
  }, keystart: Ta((n) => {
    r.enabled === true && n.qSkipRipple !== true && wt(n, r.modifiers.keyCodes) === true && n.type === `key${r.modifiers.early === true ? "down" : "up"}` && Ef(n, e, r, true);
  }, 300) };
  Bf(r, t), e.__qripple = r, lt(r, "main", [[e, "pointerdown", "start", "passive"], [e, "click", "start", "passive"], [e, "keydown", "keystart", "passive"], [e, "keyup", "keystart", "passive"]]);
}, updated(e, t) {
  if (t.oldValue !== t.value) {
    let o = e.__qripple;
    o !== void 0 && (o.enabled = t.value !== false, o.enabled === true && Object(t.value) === t.value && Bf(o, t));
  }
}, beforeUnmount(e) {
  let t = e.__qripple;
  t !== void 0 && (t.abort.forEach((o) => {
    o();
  }), Ct(t, "main"), delete e._qripple);
} });
var Ma = { none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32 };
var $b = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 };
var Eb = ["button", "submit", "reset"];
var Bb = /[^\s]\/[^\s]/;
var ic = ["flat", "outline", "push", "unelevated"];
var El = (e, t) => e.flat === true ? "flat" : e.outline === true ? "outline" : e.push === true ? "push" : e.unelevated === true ? "unelevated" : t;
var Bl = (e) => {
  let t = El(e);
  return t !== void 0 ? { [t]: true } : {};
};
var Ra = { ...Ot, ...Do, type: { type: String, default: "button" }, label: [Number, String], icon: String, iconRight: String, ...ic.reduce((e, t) => (e[t] = Boolean) && e, {}), square: Boolean, round: Boolean, rounded: Boolean, glossy: Boolean, size: String, fab: Boolean, fabMini: Boolean, padding: String, color: String, textColor: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, tabindex: [Number, String], ripple: { type: [Boolean, Object], default: true }, align: { ...li.align, default: "center" }, stack: Boolean, stretch: Boolean, loading: { type: Boolean, default: null }, disable: Boolean };
function Ff(e) {
  let t = It(e, $b), o = ui(e), { hasRouterLink: r, hasLink: n, linkTag: i, linkAttrs: a, navigateOnClick: l } = Kn({ fallbackTag: "button" }), s = computed(() => {
    let p = e.fab === false && e.fabMini === false ? t.value : {};
    return e.padding !== void 0 ? Object.assign({}, p, { padding: e.padding.split(/\s+/).map((w) => w in Ma ? Ma[w] + "px" : w).join(" "), minWidth: "0", minHeight: "0" }) : p;
  }), c = computed(() => e.rounded === true || e.fab === true || e.fabMini === true), u = computed(() => e.disable !== true && e.loading !== true), m = computed(() => u.value === true ? e.tabindex || 0 : -1), f = computed(() => El(e, "standard")), d = computed(() => {
    let p = { tabindex: m.value };
    return n.value === true ? Object.assign(p, a.value) : Eb.includes(e.type) === true && (p.type = e.type), i.value === "a" ? (e.disable === true ? p["aria-disabled"] = "true" : p.href === void 0 && (p.role = "button"), r.value !== true && Bb.test(e.type) === true && (p.type = e.type)) : e.disable === true && (p.disabled = "", p["aria-disabled"] = "true"), e.loading === true && e.percentage !== void 0 && Object.assign(p, { role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": e.percentage }), p;
  }), v = computed(() => {
    let p;
    e.color !== void 0 ? e.flat === true || e.outline === true ? p = `text-${e.textColor || e.color}` : p = `bg-${e.color} text-${e.textColor || "white"}` : e.textColor && (p = `text-${e.textColor}`);
    let w = e.round === true ? "round" : `rectangle${c.value === true ? " q-btn--rounded" : e.square === true ? " q-btn--square" : ""}`;
    return `q-btn--${f.value} q-btn--${w}` + (p !== void 0 ? " " + p : "") + (u.value === true ? " q-btn--actionable q-focusable q-hoverable" : e.disable === true ? " disabled" : "") + (e.fab === true ? " q-btn--fab" : e.fabMini === true ? " q-btn--fab-mini" : "") + (e.noCaps === true ? " q-btn--no-uppercase" : "") + (e.dense === true ? " q-btn--dense" : "") + (e.stretch === true ? " no-border-radius self-stretch" : "") + (e.glossy === true ? " glossy" : "") + (e.square ? " q-btn--square" : "");
  }), x = computed(() => o.value + (e.stack === true ? " column" : " row") + (e.noWrap === true ? " no-wrap text-no-wrap" : "") + (e.loading === true ? " q-btn__content--hidden" : ""));
  return { classes: v, style: s, innerClasses: x, attributes: d, hasLink: n, linkTag: i, navigateOnClick: l, isActionable: u };
}
var { passiveCapture: Po } = Ye;
var fi = null;
var mi = null;
var vi = null;
var Be = M({ name: "QBtn", props: { ...Ra, percentage: Number, darkPercentage: Boolean, onTouchstart: [Function, Array] }, emits: ["click", "keydown", "mousedown", "keyup"], setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), { classes: n, style: i, innerClasses: a, attributes: l, hasLink: s, linkTag: c, navigateOnClick: u, isActionable: m } = Ff(e), f = ref(null), d = ref(null), v = null, x, p = null, w = computed(() => e.label !== void 0 && e.label !== null && e.label !== ""), b = computed(() => e.disable === true || e.ripple === false ? false : { keyCodes: s.value === true ? [13, 32] : [13], ...e.ripple === true ? {} : e.ripple }), h2 = computed(() => ({ center: e.round })), g = computed(() => {
    let q = Math.max(0, Math.min(100, e.percentage));
    return q > 0 ? { transition: "transform 0.6s", transform: `translateX(${q - 100}%)` } : {};
  }), C = computed(() => {
    if (e.loading === true)
      return { onMousedown: S, onTouchstart: S, onClick: S, onKeydown: S, onKeyup: S };
    if (m.value === true) {
      let q = { onClick: $, onKeydown: F, onMousedown: A };
      if (r.$q.platform.has.touch === true) {
        let D = e.onTouchstart !== void 0 ? "" : "Passive";
        q[`onTouchstart${D}`] = E;
      }
      return q;
    }
    return { onClick: Se };
  }), R = computed(() => ({ ref: f, class: "q-btn q-btn-item non-selectable no-outline " + n.value, style: i.value, ...l.value, ...C.value }));
  function $(q) {
    if (f.value !== null) {
      if (q !== void 0) {
        if (q.defaultPrevented === true)
          return;
        let D = document.activeElement;
        if (e.type === "submit" && D !== document.body && f.value.contains(D) === false && D.contains(f.value) === false) {
          f.value.focus();
          let j = () => {
            document.removeEventListener("keydown", Se, true), document.removeEventListener("keyup", j, Po), f.value !== null && f.value.removeEventListener("blur", j, Po);
          };
          document.addEventListener("keydown", Se, true), document.addEventListener("keyup", j, Po), f.value.addEventListener("blur", j, Po);
        }
      }
      u(q);
    }
  }
  function F(q) {
    f.value !== null && (o("keydown", q), wt(q, [13, 32]) === true && mi !== f.value && (mi !== null && P(), q.defaultPrevented !== true && (f.value.focus(), mi = f.value, f.value.classList.add("q-btn--active"), document.addEventListener("keyup", B, true), f.value.addEventListener("blur", B, Po)), Se(q)));
  }
  function E(q) {
    f.value !== null && (o("touchstart", q), q.defaultPrevented !== true && (fi !== f.value && (fi !== null && P(), fi = f.value, v = q.target, v.addEventListener("touchcancel", B, Po), v.addEventListener("touchend", B, Po)), x = true, p !== null && clearTimeout(p), p = setTimeout(() => {
      p = null, x = false;
    }, 200)));
  }
  function A(q) {
    f.value !== null && (q.qSkipRipple = x === true, o("mousedown", q), q.defaultPrevented !== true && vi !== f.value && (vi !== null && P(), vi = f.value, f.value.classList.add("q-btn--active"), document.addEventListener("mouseup", B, Po)));
  }
  function B(q) {
    if (f.value !== null && !(q !== void 0 && q.type === "blur" && document.activeElement === f.value)) {
      if (q !== void 0 && q.type === "keyup") {
        if (mi === f.value && wt(q, [13, 32]) === true) {
          let D = new MouseEvent("click", q);
          D.qKeyEvent = true, q.defaultPrevented === true && ut(D), q.cancelBubble === true && et(D), f.value.dispatchEvent(D), Se(q), q.qKeyEvent = true;
        }
        o("keyup", q);
      }
      P();
    }
  }
  function P(q) {
    let D = d.value;
    q !== true && (fi === f.value || vi === f.value) && D !== null && D !== document.activeElement && (D.setAttribute("tabindex", -1), D.focus()), fi === f.value && (v !== null && (v.removeEventListener("touchcancel", B, Po), v.removeEventListener("touchend", B, Po)), fi = v = null), vi === f.value && (document.removeEventListener("mouseup", B, Po), vi = null), mi === f.value && (document.removeEventListener("keyup", B, true), f.value !== null && f.value.removeEventListener("blur", B, Po), mi = null), f.value !== null && f.value.classList.remove("q-btn--active");
  }
  function S(q) {
    Se(q), q.qSkipRipple = true;
  }
  return onBeforeUnmount(() => {
    P(true);
  }), Object.assign(r, { click: $ }), () => {
    let q = [];
    e.icon !== void 0 && q.push(h(Ce, { name: e.icon, left: e.stack !== true && w.value === true, role: "img", "aria-hidden": "true" })), w.value === true && q.push(h("span", { class: "block" }, [e.label])), q = je(t.default, q), e.iconRight !== void 0 && e.round === false && q.push(h(Ce, { name: e.iconRight, right: e.stack !== true && w.value === true, role: "img", "aria-hidden": "true" }));
    let D = [h("span", { class: "q-focus-helper", ref: d })];
    return e.loading === true && e.percentage !== void 0 && D.push(h("span", { class: "q-btn__progress absolute-full overflow-hidden" + (e.darkPercentage === true ? " q-btn__progress--dark" : "") }, [h("span", { class: "q-btn__progress-indicator fit block", style: g.value })])), D.push(h("span", { class: "q-btn__content text-center col items-center q-anchor--skip " + a.value }, q)), e.loading !== null && D.push(h(Transition, { name: "q-transition--fade" }, () => e.loading === true ? [h("span", { key: "loading", class: "absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : [h(St)])] : null)), withDirectives(h(c.value, R.value, D), [[nn, b.value, void 0, h2.value]]);
  };
} });
var gi = M({ name: "QBtnGroup", props: { unelevated: Boolean, outline: Boolean, flat: Boolean, rounded: Boolean, square: Boolean, push: Boolean, stretch: Boolean, glossy: Boolean, spread: Boolean }, setup(e, { slots: t }) {
  let o = computed(() => {
    let r = ["unelevated", "outline", "flat", "rounded", "square", "push", "stretch", "glossy"].filter((n) => e[n] === true).map((n) => `q-btn-group--${n}`).join(" ");
    return `q-btn-group row no-wrap${r.length !== 0 ? " " + r : ""}` + (e.spread === true ? " q-btn-group--spread" : " inline");
  });
  return () => h("div", { class: o.value }, ee(t.default));
} });
function Ut() {
  if (window.getSelection !== void 0) {
    let e = window.getSelection();
    e.empty !== void 0 ? e.empty() : e.removeAllRanges !== void 0 && (e.removeAllRanges(), Tn.is.mobile !== true && e.addRange(document.createRange()));
  } else
    document.selection !== void 0 && document.selection.empty();
}
var hi = { target: { default: true }, noParentEvent: Boolean, contextMenu: Boolean };
function pi({ showing: e, avoidEmit: t, configureAnchorEl: o }) {
  let { props: r, proxy: n, emit: i } = getCurrentInstance(), a = ref(null), l = null;
  function s(d) {
    return a.value === null ? false : d === void 0 || d.touches === void 0 || d.touches.length <= 1;
  }
  let c = {};
  o === void 0 && (Object.assign(c, { hide(d) {
    n.hide(d);
  }, toggle(d) {
    n.toggle(d), d.qAnchorHandled = true;
  }, toggleKey(d) {
    wt(d, 13) === true && c.toggle(d);
  }, contextClick(d) {
    n.hide(d), ut(d), nextTick(() => {
      n.show(d), d.qAnchorHandled = true;
    });
  }, prevent: ut, mobileTouch(d) {
    if (c.mobileCleanup(d), s(d) !== true)
      return;
    n.hide(d), a.value.classList.add("non-selectable");
    let v = d.target;
    lt(c, "anchor", [[v, "touchmove", "mobileCleanup", "passive"], [v, "touchend", "mobileCleanup", "passive"], [v, "touchcancel", "mobileCleanup", "passive"], [a.value, "contextmenu", "prevent", "notPassive"]]), l = setTimeout(() => {
      l = null, n.show(d), d.qAnchorHandled = true;
    }, 300);
  }, mobileCleanup(d) {
    a.value.classList.remove("non-selectable"), l !== null && (clearTimeout(l), l = null), e.value === true && d !== void 0 && Ut();
  } }), o = function(d = r.contextMenu) {
    if (r.noParentEvent === true || a.value === null)
      return;
    let v;
    d === true ? n.$q.platform.is.mobile === true ? v = [[a.value, "touchstart", "mobileTouch", "passive"]] : v = [[a.value, "mousedown", "hide", "passive"], [a.value, "contextmenu", "contextClick", "notPassive"]] : v = [[a.value, "click", "toggle", "passive"], [a.value, "keyup", "toggleKey", "passive"]], lt(c, "anchor", v);
  });
  function u() {
    Ct(c, "anchor");
  }
  function m(d) {
    for (a.value = d; a.value.classList.contains("q-anchor--skip"); )
      a.value = a.value.parentNode;
    o();
  }
  function f() {
    if (r.target === false || r.target === "" || n.$el.parentNode === null)
      a.value = null;
    else if (r.target === true)
      m(n.$el.parentNode);
    else {
      let d = r.target;
      if (typeof r.target == "string")
        try {
          d = document.querySelector(r.target);
        } catch {
          d = void 0;
        }
      d != null ? (a.value = d.$el || d, o()) : (a.value = null, console.error(`Anchor: target "${r.target}" not found`));
    }
  }
  return watch(() => r.contextMenu, (d) => {
    a.value !== null && (u(), o(d));
  }), watch(() => r.target, () => {
    a.value !== null && u(), f();
  }), watch(() => r.noParentEvent, (d) => {
    a.value !== null && (d === true ? u() : o());
  }), onMounted(() => {
    f(), t !== true && r.modelValue === true && a.value === null && i("update:modelValue", false);
  }), onBeforeUnmount(() => {
    l !== null && clearTimeout(l), u();
  }), { anchorEl: a, canShow: s, anchorEvents: c };
}
function Fl(e, t) {
  let o = ref(null), r;
  function n(l, s) {
    let c = `${s !== void 0 ? "add" : "remove"}EventListener`, u = s !== void 0 ? s : r;
    l !== window && l[c]("scroll", u, Ye.passive), window[c]("scroll", u, Ye.passive), r = s;
  }
  function i() {
    o.value !== null && (n(o.value), o.value = null);
  }
  let a = watch(() => e.noParentEvent, () => {
    o.value !== null && (i(), t());
  });
  return onBeforeUnmount(a), { localScrollTarget: o, unconfigureScrollTarget: i, changeScrollEvent: n };
}
var Ao = { modelValue: { type: Boolean, default: null }, "onUpdate:modelValue": [Function, Array] };
var $o = ["beforeShow", "show", "beforeHide", "hide"];
function Eo({ showing: e, canShow: t, hideOnRouteChange: o, handleShow: r, handleHide: n, processOnMount: i }) {
  let a = getCurrentInstance(), { props: l, emit: s, proxy: c } = a, u;
  function m(b) {
    e.value === true ? v(b) : f(b);
  }
  function f(b) {
    if (l.disable === true || b !== void 0 && b.qAnchorHandled === true || t !== void 0 && t(b) !== true)
      return;
    let h2 = l["onUpdate:modelValue"] !== void 0;
    h2 === true && (s("update:modelValue", true), u = b, nextTick(() => {
      u === b && (u = void 0);
    })), (l.modelValue === null || h2 === false) && d(b);
  }
  function d(b) {
    e.value !== true && (e.value = true, s("beforeShow", b), r !== void 0 ? r(b) : s("show", b));
  }
  function v(b) {
    if (l.disable === true)
      return;
    let h2 = l["onUpdate:modelValue"] !== void 0;
    h2 === true && (s("update:modelValue", false), u = b, nextTick(() => {
      u === b && (u = void 0);
    })), (l.modelValue === null || h2 === false) && x(b);
  }
  function x(b) {
    e.value !== false && (e.value = false, s("beforeHide", b), n !== void 0 ? n(b) : s("hide", b));
  }
  function p(b) {
    l.disable === true && b === true ? l["onUpdate:modelValue"] !== void 0 && s("update:modelValue", false) : b === true !== e.value && (b === true ? d : x)(u);
  }
  watch(() => l.modelValue, p), o !== void 0 && ci(a) === true && watch(() => c.$route.fullPath, () => {
    o.value === true && e.value === true && v();
  }), i === true && onMounted(() => {
    p(l.modelValue);
  });
  let w = { show: f, hide: v, toggle: m };
  return Object.assign(c, w), w;
}
var Rr = [];
var Pa = [];
function Df(e) {
  Pa = Pa.filter((t) => t !== e);
}
function Of(e) {
  Df(e), Pa.push(e);
}
function lc(e) {
  Df(e), Pa.length === 0 && Rr.length !== 0 && (Rr[Rr.length - 1](), Rr = []);
}
function Bo(e) {
  Pa.length === 0 ? e() : Rr.push(e);
}
function If(e) {
  Rr = Rr.filter((t) => t !== e);
}
var bi = [];
var Aa = [];
var Gb = 1;
var Yn = document.body;
function rn(e, t) {
  let o = document.createElement("div");
  if (o.id = t !== void 0 ? `q-portal--${t}--${Gb++}` : e, ni.globalNodes !== void 0) {
    let r = ni.globalNodes.class;
    r !== void 0 && (o.className = r);
  }
  return Yn.appendChild(o), bi.push(o), Aa.push(t), o;
}
function yi(e) {
  let t = bi.indexOf(e);
  bi.splice(t, 1), Aa.splice(t, 1), e.remove();
}
function Nf(e) {
  if (e === Yn)
    return;
  if (Yn = e, Yn === document.body || Aa.reduce((o, r) => r === "dialog" ? o + 1 : o, 0) < 2) {
    bi.forEach((o) => {
      o.contains(Yn) === false && Yn.appendChild(o);
    });
    return;
  }
  let t = Aa.lastIndexOf("dialog");
  for (let o = 0; o < bi.length; o++) {
    let r = bi[o];
    (o === t || Aa[o] !== "dialog") && r.contains(Yn) === false && Yn.appendChild(r);
  }
}
var Xn = [];
function Hf(e) {
  return Xn.find((t) => t.contentEl !== null && t.contentEl.contains(e));
}
function uc(e, t) {
  do {
    if (e.$options.name === "QMenu") {
      if (e.hide(t), e.$props.separateClosePopup === true)
        return qa(e);
    } else if (e.__qPortal === true) {
      let o = qa(e);
      return o !== void 0 && o.$options.name === "QPopupProxy" ? (e.hide(t), o) : e;
    }
    e = qa(e);
  } while (e != null);
}
function Qf(e, t, o) {
  for (; o !== 0 && e !== void 0 && e !== null; ) {
    if (e.__qPortal === true) {
      if (o--, e.$options.name === "QMenu") {
        e = uc(e, t);
        continue;
      }
      e.hide(t);
    }
    e = qa(e);
  }
}
function ty(e) {
  for (e = e.parent; e != null; ) {
    if (e.type.name === "QGlobalDialog")
      return true;
    if (e.type.name === "QDialog" || e.type.name === "QMenu")
      return false;
    e = e.parent;
  }
  return false;
}
function Si(e, t, o, r) {
  let n = ref(false), i = ref(false), a = null, l = {}, s = r === "dialog" && ty(e);
  function c(m) {
    if (m === true) {
      lc(l), i.value = true;
      return;
    }
    i.value = false, n.value === false && (s === false && a === null && (a = rn(false, r)), n.value = true, Xn.push(e.proxy), Of(l));
  }
  function u(m) {
    if (i.value = false, m !== true)
      return;
    lc(l), n.value = false;
    let f = Xn.indexOf(e.proxy);
    f !== -1 && Xn.splice(f, 1), a !== null && (yi(a), a = null);
  }
  return onUnmounted(() => {
    u(true);
  }), e.proxy.__qPortal = true, it(e.proxy, "contentEl", () => t.value), { showPortal: c, hidePortal: u, portalIsActive: n, portalIsAccessible: i, renderPortal: () => s === true ? o() : n.value === true ? [h(Teleport, { to: a }, o())] : void 0 };
}
var an = { transitionShow: { type: String, default: "fade" }, transitionHide: { type: String, default: "fade" }, transitionDuration: { type: [String, Number], default: 300 } };
function Gn(e, t = () => {
}, o = () => {
}) {
  return { transitionProps: computed(() => {
    let r = `q-transition--${e.transitionShow || t()}`, n = `q-transition--${e.transitionHide || o()}`;
    return { appear: true, enterFromClass: `${r}-enter-from`, enterActiveClass: `${r}-enter-active`, enterToClass: `${r}-enter-to`, leaveFromClass: `${n}-leave-from`, leaveActiveClass: `${n}-leave-active`, leaveToClass: `${n}-leave-to` };
  }), transitionStyle: computed(() => `--q-transition-duration: ${e.transitionDuration}ms`) };
}
function ln() {
  let e, t = getCurrentInstance();
  function o() {
    e = void 0;
  }
  return onDeactivated(o), onBeforeUnmount(o), { removeTick: o, registerTick(r) {
    e = r, nextTick(() => {
      e === r && (so(t) === false && e(), e = void 0);
    });
  } };
}
function co() {
  let e = null, t = getCurrentInstance();
  function o() {
    e !== null && (clearTimeout(e), e = null);
  }
  return onDeactivated(o), onBeforeUnmount(o), { removeTimeout: o, registerTimeout(r, n) {
    o(e), so(t) === false && (e = setTimeout(r, n));
  } };
}
var sy = [null, document, document.body, document.scrollingElement, document.documentElement];
function At(e, t) {
  let o = $f(t);
  if (o === void 0) {
    if (e == null)
      return window;
    o = e.closest(".scroll,.scroll-y,.overflow-auto");
  }
  return sy.includes(o) ? window : o;
}
function xi(e) {
  return (e === window ? document.body : e).scrollHeight;
}
function cy(e) {
  return (e === window ? document.body : e).scrollWidth;
}
function fo(e) {
  return e === window ? window.pageYOffset || window.scrollY || document.body.scrollTop || 0 : e.scrollTop;
}
function Zn(e) {
  return e === window ? window.pageXOffset || window.scrollX || document.body.scrollLeft || 0 : e.scrollLeft;
}
function dc(e, t, o = 0) {
  let r = arguments[3] === void 0 ? performance.now() : arguments[3], n = fo(e);
  if (o <= 0) {
    n !== t && sc(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    let a = i - r, l = n + (t - n) / Math.max(a, o) * a;
    sc(e, l), l !== t && dc(e, t, o - a, i);
  });
}
function fc(e, t, o = 0) {
  let r = arguments[3] === void 0 ? performance.now() : arguments[3], n = Zn(e);
  if (o <= 0) {
    n !== t && cc(e, t);
    return;
  }
  requestAnimationFrame((i) => {
    let a = i - r, l = n + (t - n) / Math.max(a, o) * a;
    cc(e, l), l !== t && fc(e, t, o - a, i);
  });
}
function sc(e, t) {
  if (e === window) {
    window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t);
    return;
  }
  e.scrollTop = t;
}
function cc(e, t) {
  if (e === window) {
    window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0);
    return;
  }
  e.scrollLeft = t;
}
function un(e, t, o) {
  if (o) {
    dc(e, t, o);
    return;
  }
  sc(e, t);
}
function $a(e, t, o) {
  if (o) {
    fc(e, t, o);
    return;
  }
  cc(e, t);
}
var Ll;
function Pr() {
  if (Ll !== void 0)
    return Ll;
  let e = document.createElement("p"), t = document.createElement("div");
  Mr(e, { width: "100%", height: "200px" }), Mr(t, { position: "absolute", top: "0px", left: "0px", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), t.appendChild(e), document.body.appendChild(t);
  let o = e.offsetWidth;
  t.style.overflow = "scroll";
  let r = e.offsetWidth;
  return o === r && (r = t.clientWidth), t.remove(), Ll = o - r, Ll;
}
function mc(e, t = true) {
  return !e || e.nodeType !== Node.ELEMENT_NODE ? false : t ? e.scrollHeight > e.clientHeight && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-y"])) : e.scrollWidth > e.clientWidth && (e.classList.contains("scroll") || e.classList.contains("overflow-auto") || ["auto", "scroll"].includes(window.getComputedStyle(e)["overflow-x"]));
}
var dy = { getScrollTarget: At, getScrollHeight: xi, getScrollWidth: cy, getVerticalScrollPosition: fo, getHorizontalScrollPosition: Zn, animVerticalScrollTo: dc, animHorizontalScrollTo: fc, setVerticalScrollPosition: un, setHorizontalScrollPosition: $a, getScrollbarWidth: Pr, hasScrollbar: mc };
var Ar = [];
var _i;
function fy(e) {
  _i = e.keyCode === 27;
}
function my() {
  _i === true && (_i = false);
}
function vy(e) {
  _i === true && (_i = false, wt(e, 27) === true && Ar[Ar.length - 1](e));
}
function Kf(e) {
  window[e]("keydown", fy), window[e]("blur", my), window[e]("keyup", vy), _i = false;
}
function Vl(e) {
  _e.is.desktop === true && (Ar.push(e), Ar.length === 1 && Kf("addEventListener"));
}
function Ci(e) {
  let t = Ar.indexOf(e);
  t !== -1 && (Ar.splice(t, 1), Ar.length === 0 && Kf("removeEventListener"));
}
var $r = [];
function Wf(e) {
  $r[$r.length - 1](e);
}
function wi(e) {
  _e.is.desktop === true && ($r.push(e), $r.length === 1 && document.body.addEventListener("focusin", Wf));
}
function Er(e) {
  let t = $r.indexOf(e);
  t !== -1 && ($r.splice(t, 1), $r.length === 0 && document.body.removeEventListener("focusin", Wf));
}
var ki = null;
var { notPassiveCapture: zl } = Ye;
var Br = [];
function Dl(e) {
  ki !== null && (clearTimeout(ki), ki = null);
  let t = e.target;
  if (t === void 0 || t.nodeType === 8 || t.classList.contains("no-pointer-events") === true)
    return;
  let o = Xn.length - 1;
  for (; o >= 0; ) {
    let r = Xn[o].$;
    if (r.type.name === "QTooltip") {
      o--;
      continue;
    }
    if (r.type.name !== "QDialog")
      break;
    if (r.props.seamless !== true)
      return;
    o--;
  }
  for (let r = Br.length - 1; r >= 0; r--) {
    let n = Br[r];
    if ((n.anchorEl.value === null || n.anchorEl.value.contains(t) === false) && (t === document.body || n.innerRef.value !== null && n.innerRef.value.contains(t) === false))
      e.qClickOutside = true, n.onClickOutside(e);
    else
      return;
  }
}
function Ol(e) {
  Br.push(e), Br.length === 1 && (document.addEventListener("mousedown", Dl, zl), document.addEventListener("touchstart", Dl, zl));
}
function qi(e) {
  let t = Br.findIndex((o) => o === e);
  t !== -1 && (Br.splice(t, 1), Br.length === 0 && (ki !== null && (clearTimeout(ki), ki = null), document.removeEventListener("mousedown", Dl, zl), document.removeEventListener("touchstart", Dl, zl)));
}
var Yf;
var Xf;
function Ti(e) {
  let t = e.split(" ");
  return t.length !== 2 ? false : ["top", "center", "bottom"].includes(t[0]) !== true ? (console.error("Anchor/Self position must start with one of top/center/bottom"), false) : ["left", "middle", "right", "start", "end"].includes(t[1]) !== true ? (console.error("Anchor/Self position must end with one of left/middle/right/start/end"), false) : true;
}
function Il(e) {
  return e ? !(e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number") : true;
}
var gc = { "start#ltr": "left", "start#rtl": "right", "end#ltr": "right", "end#rtl": "left" };
["left", "middle", "right"].forEach((e) => {
  gc[`${e}#ltr`] = e, gc[`${e}#rtl`] = e;
});
function Mi(e, t) {
  let o = e.split(" ");
  return { vertical: o[0], horizontal: gc[`${o[1]}#${t === true ? "rtl" : "ltr"}`] };
}
function gy(e, t) {
  let { top: o, left: r, right: n, bottom: i, width: a, height: l } = e.getBoundingClientRect();
  return t !== void 0 && (o -= t[1], r -= t[0], i += t[1], n += t[0], a += t[0], l += t[1]), { top: o, bottom: i, height: l, left: r, right: n, width: a, middle: r + (n - r) / 2, center: o + (i - o) / 2 };
}
function hy(e, t, o) {
  let { top: r, left: n } = e.getBoundingClientRect();
  return r += t.top, n += t.left, o !== void 0 && (r += o[1], n += o[0]), { top: r, bottom: r + 1, height: 1, left: n, right: n + 1, width: 1, middle: n, center: r };
}
function py(e, t) {
  return { top: 0, center: t / 2, bottom: t, left: 0, middle: e / 2, right: e };
}
function Gf(e, t, o, r) {
  return { top: e[o.vertical] - t[r.vertical], left: e[o.horizontal] - t[r.horizontal] };
}
function Ea(e, t = 0) {
  if (e.targetEl === null || e.anchorEl === null || t > 5)
    return;
  if (e.targetEl.offsetHeight === 0 || e.targetEl.offsetWidth === 0) {
    setTimeout(() => {
      Ea(e, t + 1);
    }, 10);
    return;
  }
  let { targetEl: o, offset: r, anchorEl: n, anchorOrigin: i, selfOrigin: a, absoluteOffset: l, fit: s, cover: c, maxHeight: u, maxWidth: m } = e;
  if (_e.is.ios === true && window.visualViewport !== void 0) {
    let R = document.body.style, { offsetLeft: $, offsetTop: F } = window.visualViewport;
    $ !== Yf && (R.setProperty("--q-pe-left", $ + "px"), Yf = $), F !== Xf && (R.setProperty("--q-pe-top", F + "px"), Xf = F);
  }
  let { scrollLeft: f, scrollTop: d } = o, v = l === void 0 ? gy(n, c === true ? [0, 0] : r) : hy(n, l, r);
  Object.assign(o.style, { top: 0, left: 0, minWidth: null, minHeight: null, maxWidth: m || "100vw", maxHeight: u || "100vh", visibility: "visible" });
  let { offsetWidth: x, offsetHeight: p } = o, { elWidth: w, elHeight: b } = s === true || c === true ? { elWidth: Math.max(v.width, x), elHeight: c === true ? Math.max(v.height, p) : p } : { elWidth: x, elHeight: p }, h2 = { maxWidth: m, maxHeight: u };
  (s === true || c === true) && (h2.minWidth = v.width + "px", c === true && (h2.minHeight = v.height + "px")), Object.assign(o.style, h2);
  let g = py(w, b), C = Gf(v, g, i, a);
  if (l === void 0 || r === void 0)
    vc(C, v, g, i, a);
  else {
    let { top: R, left: $ } = C;
    vc(C, v, g, i, a);
    let F = false;
    if (C.top !== R) {
      F = true;
      let E = 2 * r[1];
      v.center = v.top -= E, v.bottom -= E + 2;
    }
    if (C.left !== $) {
      F = true;
      let E = 2 * r[0];
      v.middle = v.left -= E, v.right -= E + 2;
    }
    F === true && (C = Gf(v, g, i, a), vc(C, v, g, i, a));
  }
  h2 = { top: C.top + "px", left: C.left + "px" }, C.maxHeight !== void 0 && (h2.maxHeight = C.maxHeight + "px", v.height > C.maxHeight && (h2.minHeight = h2.maxHeight)), C.maxWidth !== void 0 && (h2.maxWidth = C.maxWidth + "px", v.width > C.maxWidth && (h2.minWidth = h2.maxWidth)), Object.assign(o.style, h2), o.scrollTop !== d && (o.scrollTop = d), o.scrollLeft !== f && (o.scrollLeft = f);
}
function vc(e, t, o, r, n) {
  let i = o.bottom, a = o.right, l = Pr(), s = window.innerHeight - l, c = document.body.clientWidth;
  if (e.top < 0 || e.top + i > s)
    if (n.vertical === "center")
      e.top = t[r.vertical] > s / 2 ? Math.max(0, s - i) : 0, e.maxHeight = Math.min(i, s);
    else if (t[r.vertical] > s / 2) {
      let u = Math.min(s, r.vertical === "center" ? t.center : r.vertical === n.vertical ? t.bottom : t.top);
      e.maxHeight = Math.min(i, u), e.top = Math.max(0, u - i);
    } else
      e.top = Math.max(0, r.vertical === "center" ? t.center : r.vertical === n.vertical ? t.top : t.bottom), e.maxHeight = Math.min(i, s - e.top);
  if (e.left < 0 || e.left + a > c)
    if (e.maxWidth = Math.min(a, c), n.horizontal === "middle")
      e.left = t[r.horizontal] > c / 2 ? Math.max(0, c - a) : 0;
    else if (t[r.horizontal] > c / 2) {
      let u = Math.min(c, r.horizontal === "middle" ? t.middle : r.horizontal === n.horizontal ? t.right : t.left);
      e.maxWidth = Math.min(a, u), e.left = Math.max(0, u - e.maxWidth);
    } else
      e.left = Math.max(0, r.horizontal === "middle" ? t.middle : r.horizontal === n.horizontal ? t.left : t.right), e.maxWidth = Math.min(a, c - e.left);
}
var sn = M({ name: "QMenu", inheritAttrs: false, props: { ...hi, ...Ao, ...pe, ...an, persistent: Boolean, autoClose: Boolean, separateClosePopup: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, fit: Boolean, cover: Boolean, square: Boolean, anchor: { type: String, validator: Ti }, self: { type: String, validator: Ti }, offset: { type: Array, validator: Il }, scrollTarget: { default: void 0 }, touchPosition: Boolean, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null } }, emits: [...$o, "click", "escapeKey"], setup(e, { slots: t, emit: o, attrs: r }) {
  let n = null, i, a, l, s = getCurrentInstance(), { proxy: c } = s, { $q: u } = c, m = ref(null), f = ref(false), d = computed(() => e.persistent !== true && e.noRouteDismiss !== true), v = be(e, u), { registerTick: x, removeTick: p } = ln(), { registerTimeout: w } = co(), { transitionProps: b, transitionStyle: h2 } = Gn(e), { localScrollTarget: g, changeScrollEvent: C, unconfigureScrollTarget: R } = Fl(e, H), { anchorEl: $, canShow: F } = pi({ showing: f }), { hide: E } = Eo({ showing: f, canShow: F, handleShow: ae, handleHide: V, hideOnRouteChange: d, processOnMount: true }), { showPortal: A, hidePortal: B, renderPortal: P } = Si(s, m, N, "menu"), S = { anchorEl: $, innerRef: m, onClickOutside(y) {
    if (e.persistent !== true && f.value === true)
      return E(y), (y.type === "touchstart" || y.target.classList.contains("q-dialog__backdrop")) && Se(y), true;
  } }, q = computed(() => Mi(e.anchor || (e.cover === true ? "center middle" : "bottom start"), u.lang.rtl)), D = computed(() => e.cover === true ? q.value : Mi(e.self || "top start", u.lang.rtl)), j = computed(() => (e.square === true ? " q-menu--square" : "") + (v.value === true ? " q-menu--dark q-dark" : "")), k = computed(() => e.autoClose === true ? { onClick: O } : {}), I = computed(() => f.value === true && e.persistent !== true);
  watch(I, (y) => {
    y === true ? (Vl(Q), Ol(S)) : (Ci(Q), qi(S));
  });
  function W() {
    Bo(() => {
      let y = m.value;
      y && y.contains(document.activeElement) !== true && (y = y.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || y.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || y.querySelector("[autofocus], [data-autofocus]") || y, y.focus({ preventScroll: true }));
    });
  }
  function ae(y) {
    if (n = e.noRefocus === false ? document.activeElement : null, wi(Y), A(), H(), i = void 0, y !== void 0 && (e.touchPosition || e.contextMenu)) {
      let U = bt(y);
      if (U.left !== void 0) {
        let { top: te, left: le } = $.value.getBoundingClientRect();
        i = { left: U.left - le, top: U.top - te };
      }
    }
    a === void 0 && (a = watch(() => u.screen.width + "|" + u.screen.height + "|" + e.self + "|" + e.anchor + "|" + u.lang.rtl, ne)), e.noFocus !== true && document.activeElement.blur(), x(() => {
      ne(), e.noFocus !== true && W();
    }), w(() => {
      u.platform.is.ios === true && (l = e.autoClose, m.value.click()), ne(), A(true), o("show", y);
    }, e.transitionDuration);
  }
  function V(y) {
    p(), B(), _(true), n !== null && (y === void 0 || y.qClickOutside !== true) && (((y && y.type.indexOf("key") === 0 ? n.closest('[tabindex]:not([tabindex^="-"])') : void 0) || n).focus(), n = null), w(() => {
      B(true), o("hide", y);
    }, e.transitionDuration);
  }
  function _(y) {
    i = void 0, a !== void 0 && (a(), a = void 0), (y === true || f.value === true) && (Er(Y), R(), qi(S), Ci(Q)), y !== true && (n = null);
  }
  function H() {
    ($.value !== null || e.scrollTarget !== void 0) && (g.value = At($.value, e.scrollTarget), C(g.value, ne));
  }
  function O(y) {
    l !== true ? (uc(c, y), o("click", y)) : l = false;
  }
  function Y(y) {
    I.value === true && e.noFocus !== true && $l(m.value, y.target) !== true && W();
  }
  function Q(y) {
    o("escapeKey"), E(y);
  }
  function ne() {
    Ea({ targetEl: m.value, offset: e.offset, anchorEl: $.value, anchorOrigin: q.value, selfOrigin: D.value, absoluteOffset: i, fit: e.fit, cover: e.cover, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function N() {
    return h(Transition, b.value, () => f.value === true ? h("div", { role: "menu", ...r, ref: m, tabindex: -1, class: ["q-menu q-position-engine scroll" + j.value, r.class], style: [r.style, h2.value], ...k.value }, ee(t.default)) : null);
  }
  return onBeforeUnmount(_), Object.assign(c, { focus: W, updatePosition: ne }), P;
} });
var hc;
var Nl = 0;
var Kt = new Array(256);
for (let e = 0; e < 256; e++)
  Kt[e] = (e + 256).toString(16).substring(1);
var xy = (() => {
  let e = typeof crypto < "u" ? crypto : typeof window < "u" ? window.crypto || window.msCrypto : void 0;
  if (e !== void 0) {
    if (e.randomBytes !== void 0)
      return e.randomBytes;
    if (e.getRandomValues !== void 0)
      return (t) => {
        let o = new Uint8Array(t);
        return e.getRandomValues(o), o;
      };
  }
  return (t) => {
    let o = [];
    for (let r = t; r > 0; r--)
      o.push(Math.floor(Math.random() * 256));
    return o;
  };
})();
var tm = 4096;
function Jn() {
  (hc === void 0 || Nl + 16 > tm) && (Nl = 0, hc = xy(tm));
  let e = Array.prototype.slice.call(hc, Nl, Nl += 16);
  return e[6] = e[6] & 15 | 64, e[8] = e[8] & 63 | 128, Kt[e[0]] + Kt[e[1]] + Kt[e[2]] + Kt[e[3]] + "-" + Kt[e[4]] + Kt[e[5]] + "-" + Kt[e[6]] + Kt[e[7]] + "-" + Kt[e[8]] + Kt[e[9]] + "-" + Kt[e[10]] + Kt[e[11]] + Kt[e[12]] + Kt[e[13]] + Kt[e[14]] + Kt[e[15]];
}
function pc(e, t) {
  return e === void 0 ? t === true ? `f_${Jn()}` : void 0 : e;
}
function er(e, t = true) {
  if (_t.value === true) {
    let o = ref(e);
    return t === true && e === void 0 && onMounted(() => {
      o.value = `f_${Jn()}`;
    }), o;
  }
  return ref(pc(e, t));
}
var ky = Object.keys(Ra);
var qy = (e) => ky.reduce((t, o) => {
  let r = e[o];
  return r !== void 0 && (t[o] = r), t;
}, {});
var Ql = M({ name: "QBtnDropdown", props: { ...Ra, ...an, modelValue: Boolean, split: Boolean, dropdownIcon: String, contentClass: [Array, String, Object], contentStyle: [Array, String, Object], cover: Boolean, persistent: Boolean, noRouteDismiss: Boolean, autoClose: Boolean, menuAnchor: { type: String, default: "bottom end" }, menuSelf: { type: String, default: "top end" }, menuOffset: Array, disableMainBtn: Boolean, disableDropdown: Boolean, noIconAnimation: Boolean, toggleAriaLabel: String }, emits: ["update:modelValue", "click", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), n = ref(e.modelValue), i = ref(null), a = er(), l = computed(() => {
    let g = { "aria-expanded": n.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": a.value, "aria-label": e.toggleAriaLabel || r.$q.lang.label[n.value === true ? "collapse" : "expand"](e.label) };
    return (e.disable === true || e.split === false && e.disableMainBtn === true || e.disableDropdown === true) && (g["aria-disabled"] = "true"), g;
  }), s = computed(() => "q-btn-dropdown__arrow" + (n.value === true && e.noIconAnimation === false ? " rotate-180" : "") + (e.split === false ? " q-btn-dropdown__arrow-container" : "")), c = computed(() => Bl(e)), u = computed(() => qy(e));
  watch(() => e.modelValue, (g) => {
    i.value !== null && i.value[g ? "show" : "hide"]();
  }), watch(() => e.split, h2);
  function m(g) {
    n.value = true, o("beforeShow", g);
  }
  function f(g) {
    o("show", g), o("update:modelValue", true);
  }
  function d(g) {
    n.value = false, o("beforeHide", g);
  }
  function v(g) {
    o("hide", g), o("update:modelValue", false);
  }
  function x(g) {
    o("click", g);
  }
  function p(g) {
    et(g), h2(), o("click", g);
  }
  function w(g) {
    i.value !== null && i.value.toggle(g);
  }
  function b(g) {
    i.value !== null && i.value.show(g);
  }
  function h2(g) {
    i.value !== null && i.value.hide(g);
  }
  return Object.assign(r, { show: b, hide: h2, toggle: w }), onMounted(() => {
    e.modelValue === true && b();
  }), () => {
    let g = [h(Ce, { class: s.value, name: e.dropdownIcon || r.$q.iconSet.arrow.dropdown })];
    return e.disableDropdown !== true && g.push(h(sn, { ref: i, id: a.value, class: e.contentClass, style: e.contentStyle, cover: e.cover, fit: true, persistent: e.persistent, noRouteDismiss: e.noRouteDismiss, autoClose: e.autoClose, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, separateClosePopup: true, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: m, onShow: f, onBeforeHide: d, onHide: v }, t.default)), e.split === false ? h(Be, { class: "q-btn-dropdown q-btn-dropdown--simple", ...u.value, ...l.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: x }, { default: () => ee(t.label, []).concat(g), loading: t.loading }) : h(gi, { class: "q-btn-dropdown q-btn-dropdown--split no-wrap q-btn-item", rounded: e.rounded, square: e.square, ...c.value, glossy: e.glossy, stretch: e.stretch }, () => [h(Be, { class: "q-btn-dropdown--current", ...u.value, disable: e.disable === true || e.disableMainBtn === true, noWrap: true, round: false, onClick: p }, { default: t.label, loading: t.loading }), h(Be, { class: "q-btn-dropdown__arrow-container q-anchor--skip", ...l.value, ...c.value, disable: e.disable === true || e.disableDropdown === true, rounded: e.rounded, color: e.color, textColor: e.textColor, dense: e.dense, size: e.size, padding: e.padding, ripple: e.ripple }, () => g)]);
  };
} });
var xt = { name: String };
function cn(e) {
  return computed(() => ({ type: "hidden", name: e.name, value: e.modelValue }));
}
function Jt(e = {}) {
  return (t, o, r) => {
    t[o](h("input", { class: "hidden" + (r || ""), ...e.value }));
  };
}
function Ai(e) {
  return computed(() => e.name || e.for);
}
var lm = M({ name: "QBtnToggle", props: { ...xt, modelValue: { required: true }, options: { type: Array, required: true, validator: (e) => e.every((t) => ("label" in t || "icon" in t || "slot" in t) && "value" in t) }, color: String, textColor: String, toggleColor: { type: String, default: "primary" }, toggleTextColor: String, outline: Boolean, flat: Boolean, unelevated: Boolean, rounded: Boolean, push: Boolean, glossy: Boolean, size: String, padding: String, noCaps: Boolean, noWrap: Boolean, dense: Boolean, readonly: Boolean, disable: Boolean, stack: Boolean, stretch: Boolean, spread: Boolean, clearable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "clear", "click"], setup(e, { slots: t, emit: o }) {
  let r = computed(() => e.options.find((f) => f.value === e.modelValue) !== void 0), n = computed(() => ({ type: "hidden", name: e.name, value: e.modelValue })), i = Jt(n), a = computed(() => Bl(e)), l = computed(() => ({ rounded: e.rounded, dense: e.dense, ...a.value })), s = computed(() => e.options.map((f, d) => {
    let { attrs: v, value: x, slot: p, ...w } = f;
    return { slot: p, props: { key: d, "aria-pressed": x === e.modelValue ? "true" : "false", ...v, ...w, ...l.value, disable: e.disable === true || w.disable === true, color: x === e.modelValue ? u(w, "toggleColor") : u(w, "color"), textColor: x === e.modelValue ? u(w, "toggleTextColor") : u(w, "textColor"), noCaps: u(w, "noCaps") === true, noWrap: u(w, "noWrap") === true, size: u(w, "size"), padding: u(w, "padding"), ripple: u(w, "ripple"), stack: u(w, "stack") === true, stretch: u(w, "stretch") === true, onClick(b) {
      c(x, f, b);
    } } };
  }));
  function c(f, d, v) {
    e.readonly !== true && (e.modelValue === f ? e.clearable === true && (o("update:modelValue", null, null), o("clear")) : o("update:modelValue", f, d), o("click", v));
  }
  function u(f, d) {
    return f[d] === void 0 ? e[d] : f[d];
  }
  function m() {
    let f = s.value.map((d) => h(Be, d.props, d.slot !== void 0 ? t[d.slot] : void 0));
    return e.name !== void 0 && e.disable !== true && r.value === true && i(f, "push"), je(t.default, f);
  }
  return () => h(gi, { class: "q-btn-toggle", ...a.value, rounded: e.rounded, stretch: e.stretch, glossy: e.glossy, spread: e.spread }, m);
} });
var $i = M({ name: "QCard", props: { ...pe, tag: { type: String, default: "div" }, square: Boolean, flat: Boolean, bordered: Boolean }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), r = be(e, o), n = computed(() => "q-card" + (r.value === true ? " q-card--dark q-dark" : "") + (e.bordered === true ? " q-card--bordered" : "") + (e.square === true ? " q-card--square no-border-radius" : "") + (e.flat === true ? " q-card--flat no-shadow" : ""));
  return () => h(e.tag, { class: n.value }, ee(t.default));
} });
var Io = M({ name: "QCardSection", props: { tag: { type: String, default: "div" }, horizontal: Boolean }, setup(e, { slots: t }) {
  let o = computed(() => `q-card__section q-card__section--${e.horizontal === true ? "horiz row no-wrap" : "vert"}`);
  return () => h(e.tag, { class: o.value }, ee(t.default));
} });
var jl = M({ name: "QCardActions", props: { ...li, vertical: Boolean }, setup(e, { slots: t }) {
  let o = ui(e), r = computed(() => `q-card__actions ${o.value} q-card__actions--${e.vertical === true ? "vert column" : "horiz row"}`);
  return () => h("div", { class: r.value }, ee(t.default));
} });
var bc = { left: true, right: true, up: true, down: true, horizontal: true, vertical: true };
var Fy = Object.keys(bc);
bc.all = true;
function Ei(e) {
  let t = {};
  for (let o of Fy)
    e[o] === true && (t[o] = true);
  return Object.keys(t).length === 0 ? bc : (t.horizontal === true ? t.left = t.right = true : t.left === true && t.right === true && (t.horizontal = true), t.vertical === true ? t.up = t.down = true : t.up === true && t.down === true && (t.vertical = true), t.horizontal === true && t.vertical === true && (t.all = true), t);
}
var Ly = ["INPUT", "TEXTAREA"];
function Bi(e, t) {
  return t.event === void 0 && e.target !== void 0 && e.target.draggable !== true && typeof t.handler == "function" && Ly.includes(e.target.nodeName.toUpperCase()) === false && (e.qClonedBy === void 0 || e.qClonedBy.indexOf(t.uid) === -1);
}
function Vy(e) {
  let t = [0.06, 6, 50];
  return typeof e == "string" && e.length && e.split(":").forEach((o, r) => {
    let n = parseFloat(o);
    n && (t[r] = n);
  }), t;
}
var Ul = Mt({ name: "touch-swipe", beforeMount(e, { value: t, arg: o, modifiers: r }) {
  if (r.mouse !== true && _e.has.touch !== true)
    return;
  let n = r.mouseCapture === true ? "Capture" : "", i = { handler: t, sensitivity: Vy(o), direction: Ei(r), noop: Ke, mouseStart(a) {
    Bi(a, i) && Mn(a) && (lt(i, "temp", [[document, "mousemove", "move", `notPassive${n}`], [document, "mouseup", "end", "notPassiveCapture"]]), i.start(a, true));
  }, touchStart(a) {
    if (Bi(a, i)) {
      let l = a.target;
      lt(i, "temp", [[l, "touchmove", "move", "notPassiveCapture"], [l, "touchcancel", "end", "notPassiveCapture"], [l, "touchend", "end", "notPassiveCapture"]]), i.start(a);
    }
  }, start(a, l) {
    _e.is.firefox === true && Rn(e, true);
    let s = bt(a);
    i.event = { x: s.left, y: s.top, time: Date.now(), mouse: l === true, dir: false };
  }, move(a) {
    if (i.event === void 0)
      return;
    if (i.event.dir !== false) {
      Se(a);
      return;
    }
    let l = Date.now() - i.event.time;
    if (l === 0)
      return;
    let s = bt(a), c = s.left - i.event.x, u = Math.abs(c), m = s.top - i.event.y, f = Math.abs(m);
    if (i.event.mouse !== true) {
      if (u < i.sensitivity[1] && f < i.sensitivity[1]) {
        i.end(a);
        return;
      }
    } else if (window.getSelection().toString() !== "") {
      i.end(a);
      return;
    } else if (u < i.sensitivity[2] && f < i.sensitivity[2])
      return;
    let d = u / l, v = f / l;
    i.direction.vertical === true && u < f && u < 100 && v > i.sensitivity[0] && (i.event.dir = m < 0 ? "up" : "down"), i.direction.horizontal === true && u > f && f < 100 && d > i.sensitivity[0] && (i.event.dir = c < 0 ? "left" : "right"), i.direction.up === true && u < f && m < 0 && u < 100 && v > i.sensitivity[0] && (i.event.dir = "up"), i.direction.down === true && u < f && m > 0 && u < 100 && v > i.sensitivity[0] && (i.event.dir = "down"), i.direction.left === true && u > f && c < 0 && f < 100 && d > i.sensitivity[0] && (i.event.dir = "left"), i.direction.right === true && u > f && c > 0 && f < 100 && d > i.sensitivity[0] && (i.event.dir = "right"), i.event.dir !== false ? (Se(a), i.event.mouse === true && (document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Ut(), i.styleCleanup = (x) => {
      i.styleCleanup = void 0, document.body.classList.remove("non-selectable");
      let p = () => {
        document.body.classList.remove("no-pointer-events--children");
      };
      x === true ? setTimeout(p, 50) : p();
    }), i.handler({ evt: a, touch: i.event.mouse !== true, mouse: i.event.mouse, direction: i.event.dir, duration: l, distance: { x: u, y: f } })) : i.end(a);
  }, end(a) {
    i.event !== void 0 && (Ct(i, "temp"), _e.is.firefox === true && Rn(e, false), i.styleCleanup !== void 0 && i.styleCleanup(true), a !== void 0 && i.event.dir !== false && Se(a), i.event = void 0);
  } };
  if (e.__qtouchswipe = i, r.mouse === true) {
    let a = r.mouseCapture === true || r.mousecapture === true ? "Capture" : "";
    lt(i, "main", [[e, "mousedown", "mouseStart", `passive${a}`]]);
  }
  _e.has.touch === true && lt(i, "main", [[e, "touchstart", "touchStart", `passive${r.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  let o = e.__qtouchswipe;
  o !== void 0 && (t.oldValue !== t.value && (typeof t.value != "function" && o.end(), o.handler = t.value), o.direction = Ei(t.modifiers));
}, beforeUnmount(e) {
  let t = e.__qtouchswipe;
  t !== void 0 && (Ct(t, "main"), Ct(t, "temp"), _e.is.firefox === true && Rn(e, false), t.styleCleanup !== void 0 && t.styleCleanup(), delete e.__qtouchswipe);
} });
function dn() {
  let e = /* @__PURE__ */ new Map();
  return { getCache: function(t, o) {
    return e[t] === void 0 ? e[t] = o : e[t];
  }, getCacheWithFn: function(t, o) {
    return e[t] === void 0 ? e[t] = o() : e[t];
  } };
}
var Fi = { name: { required: true }, disable: Boolean };
var sm = { setup(e, { slots: t }) {
  return () => h("div", { class: "q-panel scroll", role: "tabpanel" }, ee(t.default));
} };
var Li = { modelValue: { required: true }, animated: Boolean, infinite: Boolean, swipeable: Boolean, vertical: Boolean, transitionPrev: String, transitionNext: String, transitionDuration: { type: [String, Number], default: 300 }, keepAlive: Boolean, keepAliveInclude: [String, Array, RegExp], keepAliveExclude: [String, Array, RegExp], keepAliveMax: Number };
var Vi = ["update:modelValue", "beforeTransition", "transition"];
function zi() {
  let { props: e, emit: t, proxy: o } = getCurrentInstance(), { getCacheWithFn: r } = dn(), n, i, a = ref(null), l = ref(null);
  function s(S) {
    let q = e.vertical === true ? "up" : "left";
    $((o.$q.lang.rtl === true ? -1 : 1) * (S.direction === q ? 1 : -1));
  }
  let c = computed(() => [[Ul, s, void 0, { horizontal: e.vertical !== true, vertical: e.vertical, mouse: true }]]), u = computed(() => e.transitionPrev || `slide-${e.vertical === true ? "down" : "right"}`), m = computed(() => e.transitionNext || `slide-${e.vertical === true ? "up" : "left"}`), f = computed(() => `--q-transition-duration: ${e.transitionDuration}ms`), d = computed(() => typeof e.modelValue == "string" || typeof e.modelValue == "number" ? e.modelValue : String(e.modelValue)), v = computed(() => ({ include: e.keepAliveInclude, exclude: e.keepAliveExclude, max: e.keepAliveMax })), x = computed(() => e.keepAliveInclude !== void 0 || e.keepAliveExclude !== void 0);
  watch(() => e.modelValue, (S, q) => {
    let D = h2(S) === true ? g(S) : -1;
    i !== true && R(D === -1 ? 0 : D < g(q) ? -1 : 1), a.value !== D && (a.value = D, t("beforeTransition", S, q), nextTick(() => {
      t("transition", S, q);
    }));
  });
  function p() {
    $(1);
  }
  function w() {
    $(-1);
  }
  function b(S) {
    t("update:modelValue", S);
  }
  function h2(S) {
    return S != null && S !== "";
  }
  function g(S) {
    return n.findIndex((q) => q.props.name === S && q.props.disable !== "" && q.props.disable !== true);
  }
  function C() {
    return n.filter((S) => S.props.disable !== "" && S.props.disable !== true);
  }
  function R(S) {
    let q = S !== 0 && e.animated === true && a.value !== -1 ? "q-transition--" + (S === -1 ? u.value : m.value) : null;
    l.value !== q && (l.value = q);
  }
  function $(S, q = a.value) {
    let D = q + S;
    for (; D !== -1 && D < n.length; ) {
      let j = n[D];
      if (j !== void 0 && j.props.disable !== "" && j.props.disable !== true) {
        R(S), i = true, t("update:modelValue", j.props.name), setTimeout(() => {
          i = false;
        });
        return;
      }
      D += S;
    }
    e.infinite === true && n.length !== 0 && q !== -1 && q !== n.length && $(S, S === -1 ? n.length : -1);
  }
  function F() {
    let S = g(e.modelValue);
    return a.value !== S && (a.value = S), true;
  }
  function E() {
    let S = h2(e.modelValue) === true && F() && n[a.value];
    return e.keepAlive === true ? [h(KeepAlive, v.value, [h(x.value === true ? r(d.value, () => ({ ...sm, name: d.value })) : sm, { key: d.value, style: f.value }, () => S)])] : [h("div", { class: "q-panel scroll", style: f.value, key: d.value, role: "tabpanel" }, [S])];
  }
  function A() {
    if (n.length !== 0)
      return e.animated === true ? [h(Transition, { name: l.value }, E)] : E();
  }
  function B(S) {
    return n = si(ee(S.default, [])).filter((q) => q.props !== null && q.props.slot === void 0 && h2(q.props.name) === true), n.length;
  }
  function P() {
    return n;
  }
  return Object.assign(o, { next: p, previous: w, goTo: b }), { panelIndex: a, panelDirectives: c, updatePanelsList: B, updatePanelIndex: F, getPanelContent: A, getEnabledPanels: C, getPanels: P, isValidPanelName: h2, keepAliveProps: v, needsUniqueKeepAliveWrapper: x, goToPanelByOffset: $, goToPanel: b, nextPanel: p, previousPanel: w };
}
var La = 0;
var Di = { fullscreen: Boolean, noRouteFullscreenExit: Boolean };
var Oi = ["update:fullscreen", "fullscreen"];
function Ii() {
  let e = getCurrentInstance(), { props: t, emit: o, proxy: r } = e, n, i, a, l = ref(false);
  ci(e) === true && watch(() => r.$route.fullPath, () => {
    t.noRouteFullscreenExit !== true && u();
  }), watch(() => t.fullscreen, (m) => {
    l.value !== m && s();
  }), watch(l, (m) => {
    o("update:fullscreen", m), o("fullscreen", m);
  });
  function s() {
    l.value === true ? u() : c();
  }
  function c() {
    l.value !== true && (l.value = true, a = r.$el.parentNode, a.replaceChild(i, r.$el), document.body.appendChild(r.$el), La++, La === 1 && document.body.classList.add("q-body--fullscreen-mixin"), n = { handler: u }, jn.add(n));
  }
  function u() {
    l.value === true && (n !== void 0 && (jn.remove(n), n = void 0), a.replaceChild(r.$el, i), l.value = false, La = Math.max(0, La - 1), La === 0 && (document.body.classList.remove("q-body--fullscreen-mixin"), r.$el.scrollIntoView !== void 0 && setTimeout(() => {
      r.$el.scrollIntoView();
    })));
  }
  return onBeforeMount(() => {
    i = document.createElement("span");
  }), onMounted(() => {
    t.fullscreen === true && c();
  }), onBeforeUnmount(u), Object.assign(r, { toggleFullscreen: s, setFullscreen: c, exitFullscreen: u }), { inFullscreen: l, toggleFullscreen: s };
}
var Gy = ["top", "right", "bottom", "left"];
var Zy = ["regular", "flat", "outline", "push", "unelevated"];
var dm = M({ name: "QCarousel", props: { ...pe, ...Li, ...Di, transitionPrev: { type: String, default: "fade" }, transitionNext: { type: String, default: "fade" }, height: String, padding: Boolean, controlColor: String, controlTextColor: String, controlType: { type: String, validator: (e) => Zy.includes(e), default: "flat" }, autoplay: [Number, Boolean], arrows: Boolean, prevIcon: String, nextIcon: String, navigation: Boolean, navigationPosition: { type: String, validator: (e) => Gy.includes(e) }, navigationIcon: String, navigationActiveIcon: String, thumbnails: Boolean }, emits: [...Oi, ...Vi], setup(e, { slots: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), r = be(e, o), n = null, i, { updatePanelsList: a, getPanelContent: l, panelDirectives: s, goToPanel: c, previousPanel: u, nextPanel: m, getEnabledPanels: f, panelIndex: d } = zi(), { inFullscreen: v } = Ii(), x = computed(() => v.value !== true && e.height !== void 0 ? { height: e.height } : {}), p = computed(() => e.vertical === true ? "vertical" : "horizontal"), w = computed(() => `q-carousel q-panel-parent q-carousel--with${e.padding === true ? "" : "out"}-padding` + (v.value === true ? " fullscreen" : "") + (r.value === true ? " q-carousel--dark q-dark" : "") + (e.arrows === true ? ` q-carousel--arrows-${p.value}` : "") + (e.navigation === true ? ` q-carousel--navigation-${C.value}` : "")), b = computed(() => {
    let A = [e.prevIcon || o.iconSet.carousel[e.vertical === true ? "up" : "left"], e.nextIcon || o.iconSet.carousel[e.vertical === true ? "down" : "right"]];
    return e.vertical === false && o.lang.rtl === true ? A.reverse() : A;
  }), h2 = computed(() => e.navigationIcon || o.iconSet.carousel.navigationIcon), g = computed(() => e.navigationActiveIcon || h2.value), C = computed(() => e.navigationPosition || (e.vertical === true ? "right" : "bottom")), R = computed(() => ({ color: e.controlColor, textColor: e.controlTextColor, round: true, [e.controlType]: true, dense: true }));
  watch(() => e.modelValue, () => {
    e.autoplay && $();
  }), watch(() => e.autoplay, (A) => {
    A ? $() : n !== null && (clearTimeout(n), n = null);
  });
  function $() {
    let A = Mo(e.autoplay) === true ? Math.abs(e.autoplay) : 5e3;
    n !== null && clearTimeout(n), n = setTimeout(() => {
      n = null, A >= 0 ? m() : u();
    }, A);
  }
  onMounted(() => {
    e.autoplay && $();
  }), onBeforeUnmount(() => {
    n !== null && clearTimeout(n);
  });
  function F(A, B) {
    return h("div", { class: `q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${A} q-carousel__navigation--${C.value}` + (e.controlColor !== void 0 ? ` text-${e.controlColor}` : "") }, [h("div", { class: "q-carousel__navigation-inner flex flex-center no-wrap" }, f().map(B))]);
  }
  function E() {
    let A = [];
    if (e.navigation === true) {
      let B = t["navigation-icon"] !== void 0 ? t["navigation-icon"] : (S) => h(Be, { key: "nav" + S.name, class: `q-carousel__navigation-icon q-carousel__navigation-icon--${S.active === true ? "" : "in"}active`, ...S.btnProps, onClick: S.onClick }), P = i - 1;
      A.push(F("buttons", (S, q) => {
        let D = S.props.name, j = d.value === q;
        return B({ index: q, maxIndex: P, name: D, active: j, btnProps: { icon: j === true ? g.value : h2.value, size: "sm", ...R.value }, onClick: () => {
          c(D);
        } });
      }));
    } else if (e.thumbnails === true) {
      let B = e.controlColor !== void 0 ? ` text-${e.controlColor}` : "";
      A.push(F("thumbnails", (P) => {
        let S = P.props;
        return h("img", { key: "tmb#" + S.name, class: `q-carousel__thumbnail q-carousel__thumbnail--${S.name === e.modelValue ? "" : "in"}active` + B, src: S.imgSrc || S["img-src"], onClick: () => {
          c(S.name);
        } });
      }));
    }
    return e.arrows === true && d.value >= 0 && ((e.infinite === true || d.value > 0) && A.push(h("div", { key: "prev", class: `q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${p.value} absolute flex flex-center` }, [h(Be, { icon: b.value[0], ...R.value, onClick: u })])), (e.infinite === true || d.value < i - 1) && A.push(h("div", { key: "next", class: `q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${p.value} absolute flex flex-center` }, [h(Be, { icon: b.value[1], ...R.value, onClick: m })]))), je(t.control, A);
  }
  return () => (i = a(t), h("div", { class: w.value, style: x.value }, [kt("div", { class: "q-carousel__slides-container" }, l(), "sl-cont", e.swipeable, () => s.value)].concat(E())));
} });
var fm = M({ name: "QCarouselSlide", props: { ...Fi, imgSrc: String }, setup(e, { slots: t }) {
  let o = computed(() => e.imgSrc ? { backgroundImage: `url("${e.imgSrc}")` } : {});
  return () => h("div", { class: "q-carousel__slide", style: o.value }, ee(t.default));
} });
var vm = M({ name: "QCarouselControl", props: { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, default: () => [18, 18], validator: (e) => e.length === 2 } }, setup(e, { slots: t }) {
  let o = computed(() => `q-carousel__control absolute absolute-${e.position}`), r = computed(() => ({ margin: `${e.offset[1]}px ${e.offset[0]}px` }));
  return () => h("div", { class: o.value, style: r.value }, ee(t.default));
} });
var gm = M({ name: "QChatMessage", props: { sent: Boolean, label: String, bgColor: String, textColor: String, name: String, avatar: String, text: Array, stamp: String, size: String, labelHtml: Boolean, nameHtml: Boolean, textHtml: Boolean, stampHtml: Boolean }, setup(e, { slots: t }) {
  let o = computed(() => e.sent === true ? "sent" : "received"), r = computed(() => `q-message-text-content q-message-text-content--${o.value}` + (e.textColor !== void 0 ? ` text-${e.textColor}` : "")), n = computed(() => `q-message-text q-message-text--${o.value}` + (e.bgColor !== void 0 ? ` text-${e.bgColor}` : "")), i = computed(() => "q-message-container row items-end no-wrap" + (e.sent === true ? " reverse" : "")), a = computed(() => e.size !== void 0 ? `col-${e.size}` : ""), l = computed(() => ({ msg: e.textHtml === true ? "innerHTML" : "textContent", stamp: e.stampHtml === true ? "innerHTML" : "textContent", name: e.nameHtml === true ? "innerHTML" : "textContent", label: e.labelHtml === true ? "innerHTML" : "textContent" }));
  function s(u) {
    return t.stamp !== void 0 ? [u, h("div", { class: "q-message-stamp" }, t.stamp())] : e.stamp ? [u, h("div", { class: "q-message-stamp", [l.value.stamp]: e.stamp })] : [u];
  }
  function c(u, m) {
    let f = m === true ? u.length > 1 ? (d) => d : (d) => h("div", [d]) : (d) => h("div", { [l.value.msg]: d });
    return u.map((d, v) => h("div", { key: v, class: n.value }, [h("div", { class: r.value }, s(f(d)))]));
  }
  return () => {
    let u = [];
    t.avatar !== void 0 ? u.push(t.avatar()) : e.avatar !== void 0 && u.push(h("img", { class: `q-message-avatar q-message-avatar--${o.value}`, src: e.avatar, "aria-hidden": "true" }));
    let m = [];
    t.name !== void 0 ? m.push(h("div", { class: `q-message-name q-message-name--${o.value}` }, t.name())) : e.name !== void 0 && m.push(h("div", { class: `q-message-name q-message-name--${o.value}`, [l.value.name]: e.name })), t.default !== void 0 ? m.push(c(si(t.default()), true)) : e.text !== void 0 && m.push(c(e.text)), u.push(h("div", { class: a.value }, m));
    let f = [];
    return t.label !== void 0 ? f.push(h("div", { class: "q-message-label" }, t.label())) : e.label !== void 0 && f.push(h("div", { class: "q-message-label", [l.value.label]: e.label })), f.push(h("div", { class: i.value }, u)), h("div", { class: `q-message q-message-${o.value}` }, f);
  };
} });
function Kl(e, t) {
  let o = ref(null), r = computed(() => e.disable === true ? null : h("span", { ref: o, class: "no-outline", tabindex: -1 }));
  function n(i) {
    let a = t.value;
    i !== void 0 && i.type.indexOf("key") === 0 ? a !== null && document.activeElement !== a && a.contains(document.activeElement) === true && a.focus() : o.value !== null && (i === void 0 || a !== null && a.contains(i.target) === true) && o.value.focus();
  }
  return { refocusTargetEl: r, refocusTarget: n };
}
var Wl = { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 };
var Yl = { ...pe, ...Ot, ...xt, modelValue: { required: true, default: null }, val: {}, trueValue: { default: true }, falseValue: { default: false }, indeterminateValue: { default: null }, checkedIcon: String, uncheckedIcon: String, indeterminateIcon: String, toggleOrder: { type: String, validator: (e) => e === "tf" || e === "ft" }, toggleIndeterminate: Boolean, label: String, leftLabel: Boolean, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] };
var Xl = ["update:modelValue"];
function Gl(e, t) {
  let { props: o, slots: r, emit: n, proxy: i } = getCurrentInstance(), { $q: a } = i, l = be(o, a), s = ref(null), { refocusTargetEl: c, refocusTarget: u } = Kl(o, s), m = It(o, Wl), f = computed(() => o.val !== void 0 && Array.isArray(o.modelValue)), d = computed(() => {
    let P = toRaw(o.val);
    return f.value === true ? o.modelValue.findIndex((S) => toRaw(S) === P) : -1;
  }), v = computed(() => f.value === true ? d.value !== -1 : toRaw(o.modelValue) === toRaw(o.trueValue)), x = computed(() => f.value === true ? d.value === -1 : toRaw(o.modelValue) === toRaw(o.falseValue)), p = computed(() => v.value === false && x.value === false), w = computed(() => o.disable === true ? -1 : o.tabindex || 0), b = computed(() => `q-${e} cursor-pointer no-outline row inline no-wrap items-center` + (o.disable === true ? " disabled" : "") + (l.value === true ? ` q-${e}--dark` : "") + (o.dense === true ? ` q-${e}--dense` : "") + (o.leftLabel === true ? " reverse" : "")), h2 = computed(() => {
    let P = v.value === true ? "truthy" : x.value === true ? "falsy" : "indet", S = o.color !== void 0 && (o.keepColor === true || (e === "toggle" ? v.value === true : x.value !== true)) ? ` text-${o.color}` : "";
    return `q-${e}__inner relative-position non-selectable q-${e}__inner--${P}${S}`;
  }), g = computed(() => {
    let P = { type: "checkbox" };
    return o.name !== void 0 && Object.assign(P, { ".checked": v.value, "^checked": v.value === true ? "checked" : void 0, name: o.name, value: f.value === true ? o.val : o.trueValue }), P;
  }), C = Jt(g), R = computed(() => {
    let P = { tabindex: w.value, role: e === "toggle" ? "switch" : "checkbox", "aria-label": o.label, "aria-checked": p.value === true ? "mixed" : v.value === true ? "true" : "false" };
    return o.disable === true && (P["aria-disabled"] = "true"), P;
  });
  function $(P) {
    P !== void 0 && (Se(P), u(P)), o.disable !== true && n("update:modelValue", F(), P);
  }
  function F() {
    if (f.value === true) {
      if (v.value === true) {
        let P = o.modelValue.slice();
        return P.splice(d.value, 1), P;
      }
      return o.modelValue.concat([o.val]);
    }
    if (v.value === true) {
      if (o.toggleOrder !== "ft" || o.toggleIndeterminate === false)
        return o.falseValue;
    } else if (x.value === true) {
      if (o.toggleOrder === "ft" || o.toggleIndeterminate === false)
        return o.trueValue;
    } else
      return o.toggleOrder !== "ft" ? o.trueValue : o.falseValue;
    return o.indeterminateValue;
  }
  function E(P) {
    (P.keyCode === 13 || P.keyCode === 32) && Se(P);
  }
  function A(P) {
    (P.keyCode === 13 || P.keyCode === 32) && $(P);
  }
  let B = t(v, p);
  return Object.assign(i, { toggle: $ }), () => {
    let P = B();
    o.disable !== true && C(P, "unshift", ` q-${e}__native absolute q-ma-none q-pa-none`);
    let S = [h("div", { class: h2.value, style: m.value, "aria-hidden": "true" }, P)];
    c.value !== null && S.push(c.value);
    let q = o.label !== void 0 ? je(r.default, [o.label]) : ee(r.default);
    return q !== void 0 && S.push(h("div", { class: `q-${e}__label q-anchor--skip` }, q)), h("div", { ref: s, class: b.value, ...R.value, onClick: $, onKeydown: E, onKeyup: A }, S);
  };
}
var uS = h("div", { key: "svg", class: "q-checkbox__bg absolute" }, [h("svg", { class: "q-checkbox__svg fit absolute-full", viewBox: "0 0 24 24" }, [h("path", { class: "q-checkbox__truthy", fill: "none", d: "M1.73,12.91 8.1,19.28 22.79,4.59" }), h("path", { class: "q-checkbox__indet", d: "M4,14H20V10H4" })])]);
var mn = M({ name: "QCheckbox", props: Yl, emits: Xl, setup(e) {
  function t(o, r) {
    let n = computed(() => (o.value === true ? e.checkedIcon : r.value === true ? e.indeterminateIcon : e.uncheckedIcon) || null);
    return () => n.value !== null ? [h("div", { key: "icon", class: "q-checkbox__icon-container absolute-full flex flex-center no-wrap" }, [h(Ce, { class: "q-checkbox__icon", name: n.value })])] : [uS];
  }
  return Gl("checkbox", t);
} });
var cS = { xs: 8, sm: 10, md: 14, lg: 20, xl: 24 };
var Ki = M({ name: "QChip", props: { ...pe, ...Ot, dense: Boolean, icon: String, iconRight: String, iconRemove: String, iconSelected: String, label: [String, Number], color: String, textColor: String, modelValue: { type: Boolean, default: true }, selected: { type: Boolean, default: null }, square: Boolean, outline: Boolean, clickable: Boolean, removable: Boolean, removeAriaLabel: String, tabindex: [String, Number], disable: Boolean, ripple: { type: [Boolean, Object], default: true } }, emits: ["update:modelValue", "update:selected", "remove", "click"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), n = be(e, r), i = It(e, cS), a = computed(() => e.selected === true || e.icon !== void 0), l = computed(() => e.selected === true ? e.iconSelected || r.iconSet.chip.selected : e.icon), s = computed(() => e.iconRemove || r.iconSet.chip.remove), c = computed(() => e.disable === false && (e.clickable === true || e.selected !== null)), u = computed(() => {
    let p = e.outline === true && e.color || e.textColor;
    return "q-chip row inline no-wrap items-center" + (e.outline === false && e.color !== void 0 ? ` bg-${e.color}` : "") + (p ? ` text-${p} q-chip--colored` : "") + (e.disable === true ? " disabled" : "") + (e.dense === true ? " q-chip--dense" : "") + (e.outline === true ? " q-chip--outline" : "") + (e.selected === true ? " q-chip--selected" : "") + (c.value === true ? " q-chip--clickable cursor-pointer non-selectable q-hoverable" : "") + (e.square === true ? " q-chip--square" : "") + (n.value === true ? " q-chip--dark q-dark" : "");
  }), m = computed(() => {
    let p = e.disable === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: e.tabindex || 0 }, w = { ...p, role: "button", "aria-hidden": "false", "aria-label": e.removeAriaLabel || r.lang.label.remove };
    return { chip: p, remove: w };
  });
  function f(p) {
    p.keyCode === 13 && d(p);
  }
  function d(p) {
    e.disable || (o("update:selected", !e.selected), o("click", p));
  }
  function v(p) {
    (p.keyCode === void 0 || p.keyCode === 13) && (Se(p), e.disable === false && (o("update:modelValue", false), o("remove")));
  }
  function x() {
    let p = [];
    c.value === true && p.push(h("div", { class: "q-focus-helper" })), a.value === true && p.push(h(Ce, { class: "q-chip__icon q-chip__icon--left", name: l.value }));
    let w = e.label !== void 0 ? [h("div", { class: "ellipsis" }, [e.label])] : void 0;
    return p.push(h("div", { class: "q-chip__content col row no-wrap items-center q-anchor--skip" }, ai(t.default, w))), e.iconRight && p.push(h(Ce, { class: "q-chip__icon q-chip__icon--right", name: e.iconRight })), e.removable === true && p.push(h(Ce, { class: "q-chip__icon q-chip__icon--remove cursor-pointer", name: s.value, ...m.value.remove, onClick: v, onKeyup: v })), p;
  }
  return () => {
    if (e.modelValue === false)
      return;
    let p = { class: u.value, style: i.value };
    return c.value === true && Object.assign(p, m.value.chip, { onClick: d, onKeyup: f }), kt("div", p, x(), "ripple", e.ripple !== false && e.disable !== true, () => [[nn, e.ripple]]);
  };
} });
var Va = { ...Ot, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, color: String, centerColor: String, trackColor: String, fontSize: String, rounded: Boolean, thickness: { type: Number, default: 0.2, validator: (e) => e >= 0 && e <= 1 }, angle: { type: Number, default: 0 }, showValue: Boolean, reverse: Boolean, instantFeedback: Boolean };
var xc = 50;
var hm = 2 * xc;
var pm = hm * Math.PI;
var fS = Math.round(pm * 1e3) / 1e3;
var Yi = M({ name: "QCircularProgress", props: { ...Va, value: { type: Number, default: 0 }, animationSpeed: { type: [String, Number], default: 600 }, indeterminate: Boolean }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), r = It(e), n = computed(() => {
    let d = (o.lang.rtl === true ? -1 : 1) * e.angle;
    return { transform: e.reverse !== (o.lang.rtl === true) ? `scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90 - d}deg)` : `rotate3d(0, 0, 1, ${d - 90}deg)` };
  }), i = computed(() => e.instantFeedback !== true && e.indeterminate !== true ? { transition: `stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease` } : ""), a = computed(() => hm / (1 - e.thickness / 2)), l = computed(() => `${a.value / 2} ${a.value / 2} ${a.value} ${a.value}`), s = computed(() => Ge(e.value, e.min, e.max)), c = computed(() => e.max - e.min), u = computed(() => e.thickness / 2 * a.value), m = computed(() => {
    let d = (e.max - s.value) / c.value, v = e.rounded === true && s.value < e.max && d < 0.25 ? u.value / 2 * (1 - d / 0.25) : 0;
    return pm * d + v;
  });
  function f({ thickness: d, offset: v, color: x, cls: p, rounded: w }) {
    return h("circle", { class: "q-circular-progress__" + p + (x !== void 0 ? ` text-${x}` : ""), style: i.value, fill: "transparent", stroke: "currentColor", "stroke-width": d, "stroke-dasharray": fS, "stroke-dashoffset": v, "stroke-linecap": w, cx: a.value, cy: a.value, r: xc });
  }
  return () => {
    let d = [];
    e.centerColor !== void 0 && e.centerColor !== "transparent" && d.push(h("circle", { class: `q-circular-progress__center text-${e.centerColor}`, fill: "currentColor", r: xc - u.value / 2, cx: a.value, cy: a.value })), e.trackColor !== void 0 && e.trackColor !== "transparent" && d.push(f({ cls: "track", thickness: u.value, offset: 0, color: e.trackColor })), d.push(f({ cls: "circle", thickness: u.value, offset: m.value, color: e.color, rounded: e.rounded === true ? "round" : void 0 }));
    let v = [h("svg", { class: "q-circular-progress__svg", style: n.value, viewBox: l.value, "aria-hidden": "true" }, d)];
    return e.showValue === true && v.push(h("div", { class: "q-circular-progress__text absolute-full row flex-center content-center", style: { fontSize: e.fontSize } }, t.default !== void 0 ? t.default() : [h("div", s.value)])), h("div", { class: `q-circular-progress q-circular-progress--${e.indeterminate === true ? "in" : ""}determinate`, style: r.value, role: "progressbar", "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-valuenow": e.indeterminate === true ? void 0 : s.value }, ai(t.internal, v));
  };
} });
function _c(e, t, o) {
  let r = bt(e), n, i = r.left - t.event.x, a = r.top - t.event.y, l = Math.abs(i), s = Math.abs(a), c = t.direction;
  c.horizontal === true && c.vertical !== true ? n = i < 0 ? "left" : "right" : c.horizontal !== true && c.vertical === true ? n = a < 0 ? "up" : "down" : c.up === true && a < 0 ? (n = "up", l > s && (c.left === true && i < 0 ? n = "left" : c.right === true && i > 0 && (n = "right"))) : c.down === true && a > 0 ? (n = "down", l > s && (c.left === true && i < 0 ? n = "left" : c.right === true && i > 0 && (n = "right"))) : c.left === true && i < 0 ? (n = "left", l < s && (c.up === true && a < 0 ? n = "up" : c.down === true && a > 0 && (n = "down"))) : c.right === true && i > 0 && (n = "right", l < s && (c.up === true && a < 0 ? n = "up" : c.down === true && a > 0 && (n = "down")));
  let u = false;
  if (n === void 0 && o === false) {
    if (t.event.isFirst === true || t.event.lastDir === void 0)
      return {};
    n = t.event.lastDir, u = true, n === "left" || n === "right" ? (r.left -= i, l = 0, i = 0) : (r.top -= a, s = 0, a = 0);
  }
  return { synthetic: u, payload: { evt: e, touch: t.event.mouse !== true, mouse: t.event.mouse === true, position: r, direction: n, isFirst: t.event.isFirst, isFinal: o === true, duration: Date.now() - t.event.time, distance: { x: l, y: s }, offset: { x: i, y: a }, delta: { x: r.left - t.event.lastX, y: r.top - t.event.lastY } } };
}
var mS = 0;
var qt = Mt({ name: "touch-pan", beforeMount(e, { value: t, modifiers: o }) {
  if (o.mouse !== true && _e.has.touch !== true)
    return;
  function r(i, a) {
    o.mouse === true && a === true ? Se(i) : (o.stop === true && et(i), o.prevent === true && ut(i));
  }
  let n = { uid: "qvtp_" + mS++, handler: t, modifiers: o, direction: Ei(o), noop: Ke, mouseStart(i) {
    Bi(i, n) && Mn(i) && (lt(n, "temp", [[document, "mousemove", "move", "notPassiveCapture"], [document, "mouseup", "end", "passiveCapture"]]), n.start(i, true));
  }, touchStart(i) {
    if (Bi(i, n)) {
      let a = i.target;
      lt(n, "temp", [[a, "touchmove", "move", "notPassiveCapture"], [a, "touchcancel", "end", "passiveCapture"], [a, "touchend", "end", "passiveCapture"]]), n.start(i);
    }
  }, start(i, a) {
    if (_e.is.firefox === true && Rn(e, true), n.lastEvt = i, a === true || o.stop === true) {
      if (n.direction.all !== true && (a !== true || n.modifiers.mouseAllDir !== true && n.modifiers.mousealldir !== true)) {
        let c = i.type.indexOf("mouse") !== -1 ? new MouseEvent(i.type, i) : new TouchEvent(i.type, i);
        i.defaultPrevented === true && ut(c), i.cancelBubble === true && et(c), Object.assign(c, { qKeyEvent: i.qKeyEvent, qClickOutside: i.qClickOutside, qAnchorHandled: i.qAnchorHandled, qClonedBy: i.qClonedBy === void 0 ? [n.uid] : i.qClonedBy.concat(n.uid) }), n.initialEvent = { target: i.target, event: c };
      }
      et(i);
    }
    let { left: l, top: s } = bt(i);
    n.event = { x: l, y: s, time: Date.now(), mouse: a === true, detected: false, isFirst: true, isFinal: false, lastX: l, lastY: s };
  }, move(i) {
    if (n.event === void 0)
      return;
    let a = bt(i), l = a.left - n.event.x, s = a.top - n.event.y;
    if (l === 0 && s === 0)
      return;
    n.lastEvt = i;
    let c = n.event.mouse === true, u = () => {
      r(i, c);
      let d;
      o.preserveCursor !== true && o.preservecursor !== true && (d = document.documentElement.style.cursor || "", document.documentElement.style.cursor = "grabbing"), c === true && document.body.classList.add("no-pointer-events--children"), document.body.classList.add("non-selectable"), Ut(), n.styleCleanup = (v) => {
        if (n.styleCleanup = void 0, d !== void 0 && (document.documentElement.style.cursor = d), document.body.classList.remove("non-selectable"), c === true) {
          let x = () => {
            document.body.classList.remove("no-pointer-events--children");
          };
          v !== void 0 ? setTimeout(() => {
            x(), v();
          }, 50) : x();
        } else
          v !== void 0 && v();
      };
    };
    if (n.event.detected === true) {
      n.event.isFirst !== true && r(i, n.event.mouse);
      let { payload: d, synthetic: v } = _c(i, n, false);
      d !== void 0 && (n.handler(d) === false ? n.end(i) : (n.styleCleanup === void 0 && n.event.isFirst === true && u(), n.event.lastX = d.position.left, n.event.lastY = d.position.top, n.event.lastDir = v === true ? void 0 : d.direction, n.event.isFirst = false));
      return;
    }
    if (n.direction.all === true || c === true && (n.modifiers.mouseAllDir === true || n.modifiers.mousealldir === true)) {
      u(), n.event.detected = true, n.move(i);
      return;
    }
    let m = Math.abs(l), f = Math.abs(s);
    m !== f && (n.direction.horizontal === true && m > f || n.direction.vertical === true && m < f || n.direction.up === true && m < f && s < 0 || n.direction.down === true && m < f && s > 0 || n.direction.left === true && m > f && l < 0 || n.direction.right === true && m > f && l > 0 ? (n.event.detected = true, n.move(i)) : n.end(i, true));
  }, end(i, a) {
    if (n.event !== void 0) {
      if (Ct(n, "temp"), _e.is.firefox === true && Rn(e, false), a === true)
        n.styleCleanup !== void 0 && n.styleCleanup(), n.event.detected !== true && n.initialEvent !== void 0 && n.initialEvent.target.dispatchEvent(n.initialEvent.event);
      else if (n.event.detected === true) {
        n.event.isFirst === true && n.handler(_c(i === void 0 ? n.lastEvt : i, n).payload);
        let { payload: l } = _c(i === void 0 ? n.lastEvt : i, n, true), s = () => {
          n.handler(l);
        };
        n.styleCleanup !== void 0 ? n.styleCleanup(s) : s();
      }
      n.event = void 0, n.initialEvent = void 0, n.lastEvt = void 0;
    }
  } };
  if (e.__qtouchpan = n, o.mouse === true) {
    let i = o.mouseCapture === true || o.mousecapture === true ? "Capture" : "";
    lt(n, "main", [[e, "mousedown", "mouseStart", `passive${i}`]]);
  }
  _e.has.touch === true && lt(n, "main", [[e, "touchstart", "touchStart", `passive${o.capture === true ? "Capture" : ""}`], [e, "touchmove", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  let o = e.__qtouchpan;
  o !== void 0 && (t.oldValue !== t.value && (typeof value != "function" && o.end(), o.handler = t.value), o.direction = Ei(t.modifiers));
}, beforeUnmount(e) {
  let t = e.__qtouchpan;
  t !== void 0 && (t.event !== void 0 && t.end(), Ct(t, "main"), Ct(t, "temp"), _e.is.firefox === true && Rn(e, false), t.styleCleanup !== void 0 && t.styleCleanup(), delete e.__qtouchpan);
} });
var bm = "q-slider__marker-labels";
var hS = (e) => ({ value: e });
var pS = ({ marker: e }) => h("div", { key: e.value, style: e.style, class: e.classes }, e.label);
var za = [34, 37, 40, 33, 39, 38];
var Jl = { ...pe, ...xt, min: { type: Number, default: 0 }, max: { type: Number, default: 100 }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, snap: Boolean, vertical: Boolean, reverse: Boolean, hideSelection: Boolean, color: String, markerLabelsClass: String, label: Boolean, labelColor: String, labelTextColor: String, labelAlways: Boolean, switchLabelSide: Boolean, markers: [Boolean, Number], markerLabels: [Boolean, Array, Object, Function], switchMarkerLabelsSide: Boolean, trackImg: String, trackColor: String, innerTrackImg: String, innerTrackColor: String, selectionColor: String, selectionImg: String, thumbSize: { type: String, default: "20px" }, trackSize: { type: String, default: "4px" }, disable: Boolean, readonly: Boolean, dense: Boolean, tabindex: [String, Number], thumbColor: String, thumbPath: { type: String, default: "M 4, 10 a 6,6 0 1,0 12,0 a 6,6 0 1,0 -12,0" } };
var eu = ["pan", "update:modelValue", "change"];
function tu({ updateValue: e, updatePosition: t, getDragging: o, formAttrs: r }) {
  let { props: n, emit: i, slots: a, proxy: { $q: l } } = getCurrentInstance(), s = be(n, l), c = Jt(r), u = ref(false), m = ref(false), f = ref(false), d = ref(false), v = computed(() => n.vertical === true ? "--v" : "--h"), x = computed(() => "-" + (n.switchLabelSide === true ? "switched" : "standard")), p = computed(() => n.vertical === true ? n.reverse === true : n.reverse !== (l.lang.rtl === true)), w = computed(() => isNaN(n.innerMin) === true || n.innerMin < n.min ? n.min : n.innerMin), b = computed(() => isNaN(n.innerMax) === true || n.innerMax > n.max ? n.max : n.innerMax), h2 = computed(() => n.disable !== true && n.readonly !== true && w.value < b.value), g = computed(() => {
    if (n.step === 0)
      return (oe) => oe;
    let K = (String(n.step).trim().split(".")[1] || "").length;
    return (oe) => parseFloat(oe.toFixed(K));
  }), C = computed(() => n.step === 0 ? 1 : n.step), R = computed(() => h2.value === true ? n.tabindex || 0 : -1), $ = computed(() => n.max - n.min), F = computed(() => b.value - w.value), E = computed(() => te(w.value)), A = computed(() => te(b.value)), B = computed(() => n.vertical === true ? p.value === true ? "bottom" : "top" : p.value === true ? "right" : "left"), P = computed(() => n.vertical === true ? "height" : "width"), S = computed(() => n.vertical === true ? "width" : "height"), q = computed(() => n.vertical === true ? "vertical" : "horizontal"), D = computed(() => {
    let K = { role: "slider", "aria-valuemin": w.value, "aria-valuemax": b.value, "aria-orientation": q.value, "data-step": n.step };
    return n.disable === true ? K["aria-disabled"] = "true" : n.readonly === true && (K["aria-readonly"] = "true"), K;
  }), j = computed(() => `q-slider q-slider${v.value} q-slider--${u.value === true ? "" : "in"}active inline no-wrap ` + (n.vertical === true ? "row" : "column") + (n.disable === true ? " disabled" : " q-slider--enabled" + (h2.value === true ? " q-slider--editable" : "")) + (f.value === "both" ? " q-slider--focus" : "") + (n.label || n.labelAlways === true ? " q-slider--label" : "") + (n.labelAlways === true ? " q-slider--label-always" : "") + (s.value === true ? " q-slider--dark" : "") + (n.dense === true ? " q-slider--dense q-slider--dense" + v.value : ""));
  function k(K) {
    let oe = "q-slider__" + K;
    return `${oe} ${oe}${v.value} ${oe}${v.value}${x.value}`;
  }
  function I(K) {
    let oe = "q-slider__" + K;
    return `${oe} ${oe}${v.value}`;
  }
  let W = computed(() => {
    let K = n.selectionColor || n.color;
    return "q-slider__selection absolute" + (K !== void 0 ? ` text-${K}` : "");
  }), ae = computed(() => I("markers") + " absolute overflow-hidden"), V = computed(() => I("track-container")), _ = computed(() => k("pin")), H = computed(() => k("label")), O = computed(() => k("text-container")), Y = computed(() => k("marker-labels-container") + (n.markerLabelsClass !== void 0 ? ` ${n.markerLabelsClass}` : "")), Q = computed(() => "q-slider__track relative-position no-outline" + (n.trackColor !== void 0 ? ` bg-${n.trackColor}` : "")), ne = computed(() => {
    let K = { [S.value]: n.trackSize };
    return n.trackImg !== void 0 && (K.backgroundImage = `url(${n.trackImg}) !important`), K;
  }), N = computed(() => "q-slider__inner absolute" + (n.innerTrackColor !== void 0 ? ` bg-${n.innerTrackColor}` : "")), y = computed(() => {
    let K = A.value - E.value, oe = { [B.value]: `${100 * E.value}%`, [P.value]: K === 0 ? "2px" : `${100 * K}%` };
    return n.innerTrackImg !== void 0 && (oe.backgroundImage = `url(${n.innerTrackImg}) !important`), oe;
  });
  function U(K) {
    let { min: oe, max: we, step: Ve } = n, ye = oe + K * (we - oe);
    if (Ve > 0) {
      let Xe = (ye - w.value) % Ve;
      ye += (Math.abs(Xe) >= Ve / 2 ? (Xe < 0 ? -1 : 1) * Ve : 0) - Xe;
    }
    return ye = g.value(ye), Ge(ye, w.value, b.value);
  }
  function te(K) {
    return $.value === 0 ? 0 : (K - n.min) / $.value;
  }
  function le(K, oe) {
    let we = bt(K), Ve = n.vertical === true ? Ge((we.top - oe.top) / oe.height, 0, 1) : Ge((we.left - oe.left) / oe.width, 0, 1);
    return Ge(p.value === true ? 1 - Ve : Ve, E.value, A.value);
  }
  let ve = computed(() => Mo(n.markers) === true ? n.markers : C.value), ue = computed(() => {
    let K = [], oe = ve.value, we = n.max, Ve = n.min;
    do
      K.push(Ve), Ve += oe;
    while (Ve < we);
    return K.push(we), K;
  }), Ee = computed(() => {
    let K = ` ${bm}${v.value}-`;
    return bm + `${K}${n.switchMarkerLabelsSide === true ? "switched" : "standard"}${K}${p.value === true ? "rtl" : "ltr"}`;
  }), Te = computed(() => n.markerLabels === false ? null : tt(n.markerLabels).map((K, oe) => ({ index: oe, value: K.value, label: K.label || K.value, classes: Ee.value + (K.classes !== void 0 ? " " + K.classes : ""), style: { ...He(K.value), ...K.style || {} } }))), ge = computed(() => ({ markerList: Te.value, markerMap: ie.value, classes: Ee.value, getStyle: He })), Fe = computed(() => {
    let K = F.value === 0 ? "2px" : 100 * ve.value / F.value;
    return { ...y.value, backgroundSize: n.vertical === true ? `2px ${K}%` : `${K}% 2px` };
  });
  function tt(K) {
    if (K === false)
      return null;
    if (K === true)
      return ue.value.map(hS);
    if (typeof K == "function")
      return ue.value.map((we) => {
        let Ve = K(we);
        return at(Ve) === true ? { ...Ve, value: we } : { value: we, label: Ve };
      });
    let oe = ({ value: we }) => we >= n.min && we <= n.max;
    return Array.isArray(K) === true ? K.map((we) => at(we) === true ? we : { value: we }).filter(oe) : Object.keys(K).map((we) => {
      let Ve = K[we], ye = Number(we);
      return at(Ve) === true ? { ...Ve, value: ye } : { value: ye, label: Ve };
    }).filter(oe);
  }
  function He(K) {
    return { [B.value]: `${100 * (K - n.min) / $.value}%` };
  }
  let ie = computed(() => {
    if (n.markerLabels === false)
      return null;
    let K = {};
    return Te.value.forEach((oe) => {
      K[oe.value] = oe;
    }), K;
  });
  function se() {
    if (a["marker-label-group"] !== void 0)
      return a["marker-label-group"](ge.value);
    let K = a["marker-label"] || pS;
    return Te.value.map((oe) => K({ marker: oe, ...ge.value }));
  }
  let X = computed(() => [[qt, fe, void 0, { [q.value]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function fe(K) {
    K.isFinal === true ? (d.value !== void 0 && (t(K.evt), K.touch === true && e(true), d.value = void 0, i("pan", "end")), u.value = false, f.value = false) : K.isFirst === true ? (d.value = o(K.evt), t(K.evt), e(), u.value = true, i("pan", "start")) : (t(K.evt), e());
  }
  function Me() {
    f.value = false;
  }
  function Ae(K) {
    t(K, o(K)), e(), m.value = true, u.value = true, document.addEventListener("mouseup", Re, true);
  }
  function Re() {
    m.value = false, u.value = false, e(true), Me(), document.removeEventListener("mouseup", Re, true);
  }
  function nt(K) {
    t(K, o(K)), e(true);
  }
  function ct(K) {
    za.includes(K.keyCode) && e(true);
  }
  function dt(K) {
    if (n.vertical === true)
      return null;
    let oe = l.lang.rtl !== n.reverse ? 1 - K : K;
    return { transform: `translateX(calc(${2 * oe - 1} * ${n.thumbSize} / 2 + ${50 - 100 * oe}%))` };
  }
  function Z(K) {
    let oe = computed(() => m.value === false && (f.value === K.focusValue || f.value === "both") ? " q-slider--focus" : ""), we = computed(() => `q-slider__thumb q-slider__thumb${v.value} q-slider__thumb${v.value}-${p.value === true ? "rtl" : "ltr"} absolute non-selectable` + oe.value + (K.thumbColor.value !== void 0 ? ` text-${K.thumbColor.value}` : "")), Ve = computed(() => ({ width: n.thumbSize, height: n.thumbSize, [B.value]: `${100 * K.ratio.value}%`, zIndex: f.value === K.focusValue ? 2 : void 0 })), ye = computed(() => K.labelColor.value !== void 0 ? ` text-${K.labelColor.value}` : ""), Xe = computed(() => dt(K.ratio.value)), mt = computed(() => "q-slider__text" + (K.labelTextColor.value !== void 0 ? ` text-${K.labelTextColor.value}` : ""));
    return () => {
      let ht = [h("svg", { class: "q-slider__thumb-shape absolute-full", viewBox: "0 0 20 20", "aria-hidden": "true" }, [h("path", { d: n.thumbPath })]), h("div", { class: "q-slider__focus-ring fit" })];
      return (n.label === true || n.labelAlways === true) && (ht.push(h("div", { class: _.value + " absolute fit no-pointer-events" + ye.value }, [h("div", { class: H.value, style: { minWidth: n.thumbSize } }, [h("div", { class: O.value, style: Xe.value }, [h("span", { class: mt.value }, K.label.value)])])])), n.name !== void 0 && n.disable !== true && c(ht, "push")), h("div", { class: we.value, style: Ve.value, ...K.getNodeData() }, ht);
    };
  }
  function re(K, oe, we, Ve) {
    let ye = [];
    n.innerTrackColor !== "transparent" && ye.push(h("div", { key: "inner", class: N.value, style: y.value })), n.selectionColor !== "transparent" && ye.push(h("div", { key: "selection", class: W.value, style: K.value })), n.markers !== false && ye.push(h("div", { key: "marker", class: ae.value, style: Fe.value })), Ve(ye);
    let Xe = [kt("div", { key: "trackC", class: V.value, tabindex: oe.value, ...we.value }, [h("div", { class: Q.value, style: ne.value }, ye)], "slide", h2.value, () => X.value)];
    if (n.markerLabels !== false) {
      let mt = n.switchMarkerLabelsSide === true ? "unshift" : "push";
      Xe[mt](h("div", { key: "markerL", class: Y.value }, se()));
    }
    return Xe;
  }
  return onBeforeUnmount(() => {
    document.removeEventListener("mouseup", Re, true);
  }), { state: { active: u, focus: f, preventFocus: m, dragging: d, editable: h2, classes: j, tabindex: R, attributes: D, roundValueFn: g, keyStep: C, trackLen: $, innerMin: w, innerMinRatio: E, innerMax: b, innerMaxRatio: A, positionProp: B, sizeProp: P, isReversed: p }, methods: { onActivate: Ae, onMobileClick: nt, onBlur: Me, onKeyup: ct, getContent: re, getThumbRenderFn: Z, convertRatioToModel: U, convertModelToRatio: te, getDraggingRatio: le } };
}
var xS = () => ({});
var En = M({ name: "QSlider", props: { ...Jl, modelValue: { required: true, default: null, validator: (e) => typeof e == "number" || e === null }, labelValue: [String, Number] }, emits: eu, setup(e, { emit: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), { state: r, methods: n } = tu({ updateValue: v, updatePosition: p, getDragging: x, formAttrs: cn(e) }), i = ref(null), a = ref(0), l = ref(0);
  function s() {
    l.value = e.modelValue === null ? r.innerMin.value : Ge(e.modelValue, r.innerMin.value, r.innerMax.value);
  }
  watch(() => `${e.modelValue}|${r.innerMin.value}|${r.innerMax.value}`, s), s();
  let c = computed(() => n.convertModelToRatio(l.value)), u = computed(() => r.active.value === true ? a.value : c.value), m = computed(() => {
    let h2 = { [r.positionProp.value]: `${100 * r.innerMinRatio.value}%`, [r.sizeProp.value]: `${100 * (u.value - r.innerMinRatio.value)}%` };
    return e.selectionImg !== void 0 && (h2.backgroundImage = `url(${e.selectionImg}) !important`), h2;
  }), f = n.getThumbRenderFn({ focusValue: true, getNodeData: xS, ratio: u, label: computed(() => e.labelValue !== void 0 ? e.labelValue : l.value), thumbColor: computed(() => e.thumbColor || e.color), labelColor: computed(() => e.labelColor), labelTextColor: computed(() => e.labelTextColor) }), d = computed(() => r.editable.value !== true ? {} : o.platform.is.mobile === true ? { onClick: n.onMobileClick } : { onMousedown: n.onActivate, onFocus: w, onBlur: n.onBlur, onKeydown: b, onKeyup: n.onKeyup });
  function v(h2) {
    l.value !== e.modelValue && t("update:modelValue", l.value), h2 === true && t("change", l.value);
  }
  function x() {
    return i.value.getBoundingClientRect();
  }
  function p(h2, g = r.dragging.value) {
    let C = n.getDraggingRatio(h2, g);
    l.value = n.convertRatioToModel(C), a.value = e.snap !== true || e.step === 0 ? C : n.convertModelToRatio(l.value);
  }
  function w() {
    r.focus.value = true;
  }
  function b(h2) {
    if (!za.includes(h2.keyCode))
      return;
    Se(h2);
    let g = ([34, 33].includes(h2.keyCode) ? 10 : 1) * r.keyStep.value, C = ([34, 37, 40].includes(h2.keyCode) ? -1 : 1) * (r.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * g;
    l.value = Ge(r.roundValueFn.value(l.value + C), r.innerMin.value, r.innerMax.value), v();
  }
  return () => {
    let h2 = n.getContent(m, r.tabindex, d, (g) => {
      g.push(f());
    });
    return h("div", { ref: i, class: r.classes.value + (e.modelValue === null ? " q-slider--no-value" : ""), ...r.attributes.value, "aria-valuenow": e.modelValue }, h2);
  };
} });
function ou() {
  let e = ref(!_t.value);
  return e.value === false && onMounted(() => {
    e.value = true;
  }), e;
}
var Cm = typeof ResizeObserver < "u";
var _m = Cm === true ? {} : { style: "display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;", url: "about:blank" };
var go = M({ name: "QResizeObserver", props: { debounce: { type: [String, Number], default: 100 } }, emits: ["resize"], setup(e, { emit: t }) {
  let o = null, r, n = { width: -1, height: -1 };
  function i(s) {
    s === true || e.debounce === 0 || e.debounce === "0" ? a() : o === null && (o = setTimeout(a, e.debounce));
  }
  function a() {
    if (o !== null && (clearTimeout(o), o = null), r) {
      let { offsetWidth: s, offsetHeight: c } = r;
      (s !== n.width || c !== n.height) && (n = { width: s, height: c }, t("resize", n));
    }
  }
  let { proxy: l } = getCurrentInstance();
  if (l.trigger = i, Cm === true) {
    let s, c = (u) => {
      r = l.$el.parentNode, r ? (s = new ResizeObserver(i), s.observe(r), a()) : u !== true && nextTick(() => {
        c(true);
      });
    };
    return onMounted(() => {
      c();
    }), onBeforeUnmount(() => {
      o !== null && clearTimeout(o), s !== void 0 && (s.disconnect !== void 0 ? s.disconnect() : r && s.unobserve(r));
    }), Ke;
  } else {
    let u = function() {
      o !== null && (clearTimeout(o), o = null), c !== void 0 && (c.removeEventListener !== void 0 && c.removeEventListener("resize", i, Ye.passive), c = void 0);
    }, m = function() {
      u(), r && r.contentDocument && (c = r.contentDocument.defaultView, c.addEventListener("resize", i, Ye.passive), a());
    }, s = ou(), c;
    return onMounted(() => {
      nextTick(() => {
        r = l.$el, r && m();
      });
    }), onBeforeUnmount(u), () => {
      if (s.value === true)
        return h("object", { class: "q--avoid-card-border", style: _m.style, tabindex: -1, type: "text/html", data: _m.url, "aria-hidden": "true", onLoad: m });
    };
  }
} });
var Lr = false;
{
  let e = document.createElement("div");
  e.setAttribute("dir", "rtl"), Object.assign(e.style, { width: "1px", height: "1px", overflow: "auto" });
  let t = document.createElement("div");
  Object.assign(t.style, { width: "1000px", height: "1px" }), document.body.appendChild(e), e.appendChild(t), e.scrollLeft = -1e3, Lr = e.scrollLeft >= 0, e.remove();
}
function AS(e, t, o) {
  let r = o === true ? ["left", "right"] : ["top", "bottom"];
  return `absolute-${t === true ? r[0] : r[1]}${e ? ` text-${e}` : ""}`;
}
var $S = ["left", "center", "right", "justify"];
var Oa = M({ name: "QTabs", props: { modelValue: [Number, String], align: { type: String, default: "center", validator: (e) => $S.includes(e) }, breakpoint: { type: [String, Number], default: 600 }, vertical: Boolean, shrink: Boolean, stretch: Boolean, activeClass: String, activeColor: String, activeBgColor: String, indicatorColor: String, leftIcon: String, rightIcon: String, outsideArrows: Boolean, mobileArrows: Boolean, switchIndicator: Boolean, narrowIndicator: Boolean, inlineLabel: Boolean, noCaps: Boolean, dense: Boolean, contentClass: String, "onUpdate:modelValue": [Function, Array] }, setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), { $q: n } = r, { registerTick: i } = ln(), { registerTick: a } = ln(), { registerTick: l } = ln(), { registerTimeout: s, removeTimeout: c } = co(), { registerTimeout: u, removeTimeout: m } = co(), f = ref(null), d = ref(null), v = ref(e.modelValue), x = ref(false), p = ref(true), w = ref(false), b = ref(false), h2 = [], g = ref(0), C = ref(false), R = null, $ = null, F, E = computed(() => ({ activeClass: e.activeClass, activeColor: e.activeColor, activeBgColor: e.activeBgColor, indicatorClass: AS(e.indicatorColor, e.switchIndicator, e.vertical), narrowIndicator: e.narrowIndicator, inlineLabel: e.inlineLabel, noCaps: e.noCaps })), A = computed(() => {
    let ie = g.value, se = v.value;
    for (let X = 0; X < ie; X++)
      if (h2[X].name.value === se)
        return true;
    return false;
  }), B = computed(() => `q-tabs__content--align-${x.value === true ? "left" : b.value === true ? "justify" : e.align}`), P = computed(() => `q-tabs row no-wrap items-center q-tabs--${x.value === true ? "" : "not-"}scrollable q-tabs--${e.vertical === true ? "vertical" : "horizontal"} q-tabs__arrows--${e.outsideArrows === true ? "outside" : "inside"} q-tabs--mobile-with${e.mobileArrows === true ? "" : "out"}-arrows` + (e.dense === true ? " q-tabs--dense" : "") + (e.shrink === true ? " col-shrink" : "") + (e.stretch === true ? " self-stretch" : "")), S = computed(() => "q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position " + B.value + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), q = computed(() => e.vertical === true ? { container: "height", content: "offsetHeight", scroll: "scrollHeight" } : { container: "width", content: "offsetWidth", scroll: "scrollWidth" }), D = computed(() => e.vertical !== true && n.lang.rtl === true), j = computed(() => Lr === false && D.value === true);
  watch(D, _), watch(() => e.modelValue, (ie) => {
    k({ name: ie, setCurrent: true, skipEmit: true });
  }), watch(() => e.outsideArrows, I);
  function k({ name: ie, setCurrent: se, skipEmit: X }) {
    v.value !== ie && (X !== true && e["onUpdate:modelValue"] !== void 0 && o("update:modelValue", ie), (se === true || e["onUpdate:modelValue"] === void 0) && (ae(v.value, ie), v.value = ie));
  }
  function I() {
    i(() => {
      W({ width: f.value.offsetWidth, height: f.value.offsetHeight });
    });
  }
  function W(ie) {
    if (q.value === void 0 || d.value === null)
      return;
    let se = ie[q.value.container], X = Math.min(d.value[q.value.scroll], Array.prototype.reduce.call(d.value.children, (Me, Ae) => Me + (Ae[q.value.content] || 0), 0)), fe = se > 0 && X > se;
    x.value = fe, fe === true && a(_), b.value = se < parseInt(e.breakpoint, 10);
  }
  function ae(ie, se) {
    let X = ie != null && ie !== "" ? h2.find((Me) => Me.name.value === ie) : null, fe = se != null && se !== "" ? h2.find((Me) => Me.name.value === se) : null;
    if (X && fe) {
      let Me = X.tabIndicatorRef.value, Ae = fe.tabIndicatorRef.value;
      R !== null && (clearTimeout(R), R = null), Me.style.transition = "none", Me.style.transform = "none", Ae.style.transition = "none", Ae.style.transform = "none";
      let Re = Me.getBoundingClientRect(), nt = Ae.getBoundingClientRect();
      Ae.style.transform = e.vertical === true ? `translate3d(0,${Re.top - nt.top}px,0) scale3d(1,${nt.height ? Re.height / nt.height : 1},1)` : `translate3d(${Re.left - nt.left}px,0,0) scale3d(${nt.width ? Re.width / nt.width : 1},1,1)`, l(() => {
        R = setTimeout(() => {
          R = null, Ae.style.transition = "transform .25s cubic-bezier(.4, 0, .2, 1)", Ae.style.transform = "none";
        }, 70);
      });
    }
    fe && x.value === true && V(fe.rootRef.value);
  }
  function V(ie) {
    let { left: se, width: X, top: fe, height: Me } = d.value.getBoundingClientRect(), Ae = ie.getBoundingClientRect(), Re = e.vertical === true ? Ae.top - fe : Ae.left - se;
    if (Re < 0) {
      d.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.floor(Re), _();
      return;
    }
    Re += e.vertical === true ? Ae.height - Me : Ae.width - X, Re > 0 && (d.value[e.vertical === true ? "scrollTop" : "scrollLeft"] += Math.ceil(Re), _());
  }
  function _() {
    let ie = d.value;
    if (ie === null)
      return;
    let se = ie.getBoundingClientRect(), X = e.vertical === true ? ie.scrollTop : Math.abs(ie.scrollLeft);
    D.value === true ? (p.value = Math.ceil(X + se.width) < ie.scrollWidth - 1, w.value = X > 0) : (p.value = X > 0, w.value = e.vertical === true ? Math.ceil(X + se.height) < ie.scrollHeight : Math.ceil(X + se.width) < ie.scrollWidth);
  }
  function H(ie) {
    $ !== null && clearInterval($), $ = setInterval(() => {
      y(ie) === true && Q();
    }, 5);
  }
  function O() {
    H(j.value === true ? Number.MAX_SAFE_INTEGER : 0);
  }
  function Y() {
    H(j.value === true ? 0 : Number.MAX_SAFE_INTEGER);
  }
  function Q() {
    $ !== null && (clearInterval($), $ = null);
  }
  function ne(ie, se) {
    let X = Array.prototype.filter.call(d.value.children, (nt) => nt === se || nt.matches && nt.matches(".q-tab.q-focusable") === true), fe = X.length;
    if (fe === 0)
      return;
    if (ie === 36)
      return V(X[0]), X[0].focus(), true;
    if (ie === 35)
      return V(X[fe - 1]), X[fe - 1].focus(), true;
    let Me = ie === (e.vertical === true ? 38 : 37), Ae = ie === (e.vertical === true ? 40 : 39), Re = Me === true ? -1 : Ae === true ? 1 : void 0;
    if (Re !== void 0) {
      let nt = D.value === true ? -1 : 1, ct = X.indexOf(se) + Re * nt;
      return ct >= 0 && ct < fe && (V(X[ct]), X[ct].focus({ preventScroll: true })), true;
    }
  }
  let N = computed(() => j.value === true ? { get: (ie) => Math.abs(ie.scrollLeft), set: (ie, se) => {
    ie.scrollLeft = -se;
  } } : e.vertical === true ? { get: (ie) => ie.scrollTop, set: (ie, se) => {
    ie.scrollTop = se;
  } } : { get: (ie) => ie.scrollLeft, set: (ie, se) => {
    ie.scrollLeft = se;
  } });
  function y(ie) {
    let se = d.value, { get: X, set: fe } = N.value, Me = false, Ae = X(se), Re = ie < Ae ? -1 : 1;
    return Ae += Re * 5, Ae < 0 ? (Me = true, Ae = 0) : (Re === -1 && Ae <= ie || Re === 1 && Ae >= ie) && (Me = true, Ae = ie), fe(se, Ae), _(), Me;
  }
  function U(ie, se) {
    for (let X in ie)
      if (ie[X] !== se[X])
        return false;
    return true;
  }
  function te() {
    let ie = null, se = { matchedLen: 0, queryDiff: 9999, hrefLen: 0 }, X = h2.filter((Re) => Re.routeData !== void 0 && Re.routeData.hasRouterLink.value === true), { hash: fe, query: Me } = r.$route, Ae = Object.keys(Me).length;
    for (let Re of X) {
      let nt = Re.routeData.exact.value === true;
      if (Re.routeData[nt === true ? "linkIsExactActive" : "linkIsActive"].value !== true)
        continue;
      let { hash: ct, query: dt, matched: Z, href: re } = Re.routeData.resolvedLink.value, K = Object.keys(dt).length;
      if (nt === true) {
        if (ct !== fe || K !== Ae || U(Me, dt) === false)
          continue;
        ie = Re.name.value;
        break;
      }
      if (ct !== "" && ct !== fe || K !== 0 && U(dt, Me) === false)
        continue;
      let oe = { matchedLen: Z.length, queryDiff: Ae - K, hrefLen: re.length - ct.length };
      if (oe.matchedLen > se.matchedLen) {
        ie = Re.name.value, se = oe;
        continue;
      } else if (oe.matchedLen !== se.matchedLen)
        continue;
      if (oe.queryDiff < se.queryDiff)
        ie = Re.name.value, se = oe;
      else if (oe.queryDiff !== se.queryDiff)
        continue;
      oe.hrefLen > se.hrefLen && (ie = Re.name.value, se = oe);
    }
    ie === null && h2.some((Re) => Re.routeData === void 0 && Re.name.value === v.value) === true || k({ name: ie, setCurrent: true });
  }
  function le(ie) {
    if (c(), C.value !== true && f.value !== null && ie.target && typeof ie.target.closest == "function") {
      let se = ie.target.closest(".q-tab");
      se && f.value.contains(se) === true && (C.value = true, x.value === true && V(se));
    }
  }
  function ve() {
    s(() => {
      C.value = false;
    }, 30);
  }
  function ue() {
    Fe.avoidRouteWatcher === false ? u(te) : m();
  }
  function Ee() {
    if (F === void 0) {
      let ie = watch(() => r.$route.fullPath, ue);
      F = () => {
        ie(), F = void 0;
      };
    }
  }
  function Te(ie) {
    h2.push(ie), g.value++, I(), ie.routeData === void 0 || r.$route === void 0 ? u(() => {
      if (x.value === true) {
        let se = v.value, X = se != null && se !== "" ? h2.find((fe) => fe.name.value === se) : null;
        X && V(X.rootRef.value);
      }
    }) : (Ee(), ie.routeData.hasRouterLink.value === true && ue());
  }
  function ge(ie) {
    h2.splice(h2.indexOf(ie), 1), g.value--, I(), F !== void 0 && ie.routeData !== void 0 && (h2.every((se) => se.routeData === void 0) === true && F(), ue());
  }
  let Fe = { currentModel: v, tabProps: E, hasFocus: C, hasActiveTab: A, registerTab: Te, unregisterTab: ge, verifyRouteModel: ue, updateModel: k, onKbdNavigate: ne, avoidRouteWatcher: false };
  provide(wl, Fe);
  function tt() {
    R !== null && clearTimeout(R), Q(), F !== void 0 && F();
  }
  let He;
  return onBeforeUnmount(tt), onDeactivated(() => {
    He = F !== void 0, tt();
  }), onActivated(() => {
    He === true && Ee(), I();
  }), () => h("div", { ref: f, class: P.value, role: "tablist", onFocusin: le, onFocusout: ve }, [h(go, { onResize: W }), h("div", { ref: d, class: S.value, onScroll: _ }, ee(t.default)), h(Ce, { class: "q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon" + (p.value === true ? "" : " q-tabs__arrow--faded"), name: e.leftIcon || n.iconSet.tabs[e.vertical === true ? "up" : "left"], onMousedownPassive: O, onTouchstartPassive: O, onMouseupPassive: Q, onMouseleavePassive: Q, onTouchendPassive: Q }), h(Ce, { class: "q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon" + (w.value === true ? "" : " q-tabs__arrow--faded"), name: e.rightIcon || n.iconSet.tabs[e.vertical === true ? "down" : "right"], onMousedownPassive: Y, onTouchstartPassive: Y, onMouseupPassive: Q, onMouseleavePassive: Q, onTouchendPassive: Q })]);
} });
var zS = 0;
var ru = ["click", "keydown"];
var iu = { icon: String, label: [Number, String], alert: [Boolean, String], alertIcon: String, name: { type: [Number, String], default: () => `t_${zS++}` }, noCaps: Boolean, tabindex: [String, Number], disable: Boolean, contentClass: String, ripple: { type: [Boolean, Object], default: true } };
function au(e, t, o, r) {
  let n = inject(wl, We);
  if (n === We)
    return console.error("QTab/QRouteTab component needs to be child of QTabs"), We;
  let { proxy: i } = getCurrentInstance(), a = ref(null), l = ref(null), s = ref(null), c = computed(() => e.disable === true || e.ripple === false ? false : Object.assign({ keyCodes: [13, 32], early: true }, e.ripple === true ? {} : e.ripple)), u = computed(() => n.currentModel.value === e.name), m = computed(() => "q-tab relative-position self-stretch flex flex-center text-center" + (u.value === true ? " q-tab--active" + (n.tabProps.value.activeClass ? " " + n.tabProps.value.activeClass : "") + (n.tabProps.value.activeColor ? ` text-${n.tabProps.value.activeColor}` : "") + (n.tabProps.value.activeBgColor ? ` bg-${n.tabProps.value.activeBgColor}` : "") : " q-tab--inactive") + (e.icon && e.label && n.tabProps.value.inlineLabel === false ? " q-tab--full" : "") + (e.noCaps === true || n.tabProps.value.noCaps === true ? " q-tab--no-caps" : "") + (e.disable === true ? " disabled" : " q-focusable q-hoverable cursor-pointer") + (r !== void 0 ? r.linkClass.value : "")), f = computed(() => "q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable " + (n.tabProps.value.inlineLabel === true ? "row no-wrap q-tab__content--inline" : "column") + (e.contentClass !== void 0 ? ` ${e.contentClass}` : "")), d = computed(() => e.disable === true || n.hasFocus.value === true || u.value === false && n.hasActiveTab.value === true ? -1 : e.tabindex || 0);
  function v(h2, g) {
    if (g !== true && a.value !== null && a.value.focus(), e.disable === true) {
      r !== void 0 && r.hasRouterLink.value === true && Se(h2);
      return;
    }
    if (r === void 0) {
      n.updateModel({ name: e.name }), o("click", h2);
      return;
    }
    if (r.hasRouterLink.value === true) {
      let C = (R = {}) => {
        let $, F = R.to === void 0 || Zt(R.to, e.to) === true ? n.avoidRouteWatcher = Jn() : null;
        return r.navigateToRouterLink(h2, { ...R, returnRouterError: true }).catch((E) => {
          $ = E;
        }).then((E) => {
          if (F === n.avoidRouteWatcher && (n.avoidRouteWatcher = false, $ === void 0 && (E === void 0 || E.message !== void 0 && E.message.startsWith("Avoided redundant navigation") === true) && n.updateModel({ name: e.name })), R.returnRouterError === true)
            return $ !== void 0 ? Promise.reject($) : E;
        });
      };
      o("click", h2, C), h2.defaultPrevented !== true && C();
      return;
    }
    o("click", h2);
  }
  function x(h2) {
    wt(h2, [13, 32]) ? v(h2, true) : xo(h2) !== true && h2.keyCode >= 35 && h2.keyCode <= 40 && h2.altKey !== true && h2.metaKey !== true && n.onKbdNavigate(h2.keyCode, i.$el) === true && Se(h2), o("keydown", h2);
  }
  function p() {
    let h2 = n.tabProps.value.narrowIndicator, g = [], C = h("div", { ref: s, class: ["q-tab__indicator", n.tabProps.value.indicatorClass] });
    e.icon !== void 0 && g.push(h(Ce, { class: "q-tab__icon", name: e.icon })), e.label !== void 0 && g.push(h("div", { class: "q-tab__label" }, e.label)), e.alert !== false && g.push(e.alertIcon !== void 0 ? h(Ce, { class: "q-tab__alert-icon", color: e.alert !== true ? e.alert : void 0, name: e.alertIcon }) : h("div", { class: "q-tab__alert" + (e.alert !== true ? ` text-${e.alert}` : "") })), h2 === true && g.push(C);
    let R = [h("div", { class: "q-focus-helper", tabindex: -1, ref: a }), h("div", { class: f.value }, je(t.default, g))];
    return h2 === false && R.push(C), R;
  }
  let w = { name: computed(() => e.name), rootRef: l, tabIndicatorRef: s, routeData: r };
  onBeforeUnmount(() => {
    n.unregisterTab(w);
  }), onMounted(() => {
    n.registerTab(w);
  });
  function b(h2, g) {
    let C = { ref: l, class: m.value, tabindex: d.value, role: "tab", "aria-selected": u.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: v, onKeydown: x, ...g };
    return withDirectives(h(h2, C, p()), [[nn, c.value]]);
  }
  return { renderTab: b, $tabs: n };
}
var ir = M({ name: "QTab", props: iu, emits: ru, setup(e, { slots: t, emit: o }) {
  let { renderTab: r } = au(e, t, o);
  return () => r("div");
} });
var lu = M({ name: "QTabPanels", props: { ...Li, ...pe }, emits: Vi, setup(e, { slots: t }) {
  let o = getCurrentInstance(), r = be(e, o.proxy.$q), { updatePanelsList: n, getPanelContent: i, panelDirectives: a } = zi(), l = computed(() => "q-tab-panels q-panel-parent" + (r.value === true ? " q-tab-panels--dark q-dark" : ""));
  return () => (n(t), kt("div", { class: l.value }, i(), "pan", e.swipeable, () => a.value));
} });
var Gi = M({ name: "QTabPanel", props: Fi, setup(e, { slots: t }) {
  return () => h("div", { class: "q-tab-panel", role: "tabpanel" }, ee(t.default));
} });
var wm = /^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/;
var km = /^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/;
var qm = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
var uu = /^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/;
var su = /^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/;
var Vr = { date: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e), time: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e), fulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e), timeOrFulltime: (e) => /^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e), email: (e) => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e), hexColor: (e) => wm.test(e), hexaColor: (e) => km.test(e), hexOrHexaColor: (e) => qm.test(e), rgbColor: (e) => uu.test(e), rgbaColor: (e) => su.test(e), rgbOrRgbaColor: (e) => uu.test(e) || su.test(e), hexOrRgbColor: (e) => wm.test(e) || uu.test(e), hexaOrRgbaColor: (e) => km.test(e) || su.test(e), anyColor: (e) => qm.test(e) || uu.test(e) || su.test(e) };
var NS = { testPattern: Vr };
var HS = /^rgb(a)?\((\d{1,3}),(\d{1,3}),(\d{1,3}),?([01]?\.?\d*?)?\)$/;
function zr({ r: e, g: t, b: o, a: r }) {
  let n = r !== void 0;
  if (e = Math.round(e), t = Math.round(t), o = Math.round(o), e > 255 || t > 255 || o > 255 || n && r > 100)
    throw new TypeError("Expected 3 numbers below 256 (and optionally one below 100)");
  return r = n ? (Math.round(255 * r / 100) | 256).toString(16).slice(1) : "", "#" + (o | t << 8 | e << 16 | 1 << 24).toString(16).slice(1) + r;
}
function kc({ r: e, g: t, b: o, a: r }) {
  return `rgb${r !== void 0 ? "a" : ""}(${e},${t},${o}${r !== void 0 ? "," + r / 100 : ""})`;
}
function cu(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  e = e.replace(/^#/, ""), e.length === 3 ? e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] : e.length === 4 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
  let t = parseInt(e, 16);
  return e.length > 6 ? { r: t >> 24 & 255, g: t >> 16 & 255, b: t >> 8 & 255, a: Math.round((t & 255) / 2.55) } : { r: t >> 16, g: t >> 8 & 255, b: t & 255 };
}
function du({ h: e, s: t, v: o, a: r }) {
  let n, i, a;
  t = t / 100, o = o / 100, e = e / 360;
  let l = Math.floor(e * 6), s = e * 6 - l, c = o * (1 - t), u = o * (1 - s * t), m = o * (1 - (1 - s) * t);
  switch (l % 6) {
    case 0:
      n = o, i = m, a = c;
      break;
    case 1:
      n = u, i = o, a = c;
      break;
    case 2:
      n = c, i = o, a = m;
      break;
    case 3:
      n = c, i = u, a = o;
      break;
    case 4:
      n = m, i = c, a = o;
      break;
    case 5:
      n = o, i = c, a = u;
      break;
  }
  return { r: Math.round(n * 255), g: Math.round(i * 255), b: Math.round(a * 255), a: r };
}
function Ia({ r: e, g: t, b: o, a: r }) {
  let n = Math.max(e, t, o), i = Math.min(e, t, o), a = n - i, l = n === 0 ? 0 : a / n, s = n / 255, c;
  switch (n) {
    case i:
      c = 0;
      break;
    case e:
      c = t - o + a * (t < o ? 6 : 0), c /= 6 * a;
      break;
    case t:
      c = o - e + a * 2, c /= 6 * a;
      break;
    case o:
      c = e - t + a * 4, c /= 6 * a;
      break;
  }
  return { h: Math.round(c * 360), s: Math.round(l * 100), v: Math.round(s * 100), a: r };
}
function vn(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string");
  let t = e.replace(/ /g, ""), o = HS.exec(t);
  if (o === null)
    return cu(t);
  let r = { r: Math.min(255, parseInt(o[2], 10)), g: Math.min(255, parseInt(o[3], 10)), b: Math.min(255, parseInt(o[4], 10)) };
  if (o[1]) {
    let n = parseFloat(o[5]);
    r.a = Math.min(1, isNaN(n) === true ? 1 : n) * 100;
  }
  return r;
}
function QS(e, t) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as color");
  if (typeof t != "number")
    throw new TypeError("Expected a numeric percent");
  let o = vn(e), r = t < 0 ? 0 : 255, n = Math.abs(t) / 100, i = o.r, a = o.g, l = o.b;
  return "#" + (16777216 + (Math.round((r - i) * n) + i) * 65536 + (Math.round((r - a) * n) + a) * 256 + (Math.round((r - l) * n) + l)).toString(16).slice(1);
}
function qc(e) {
  if (typeof e != "string" && (!e || e.r === void 0))
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  let t = typeof e == "string" ? vn(e) : e, o = t.r / 255, r = t.g / 255, n = t.b / 255, i = o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4), a = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4), l = n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
  return 0.2126 * i + 0.7152 * a + 0.0722 * l;
}
function jS(e) {
  if (typeof e != "string" && (!e || e.r === void 0))
    throw new TypeError("Expected a string or a {r, g, b} object as color");
  let t = typeof e == "string" ? vn(e) : e;
  return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
}
function US(e, t) {
  if (typeof e != "string" && (!e || e.r === void 0))
    throw new TypeError("Expected a string or a {r, g, b[, a]} object as fgColor");
  if (typeof t != "string" && (!t || t.r === void 0))
    throw new TypeError("Expected a string or a {r, g, b[, a]} object as bgColor");
  let o = typeof e == "string" ? vn(e) : e, r = o.r / 255, n = o.g / 255, i = o.b / 255, a = o.a !== void 0 ? o.a / 100 : 1, l = typeof t == "string" ? vn(t) : t, s = l.r / 255, c = l.g / 255, u = l.b / 255, m = l.a !== void 0 ? l.a / 100 : 1, f = a + m * (1 - a), d = Math.round((r * a + s * m * (1 - a)) / f * 255), v = Math.round((n * a + c * m * (1 - a)) / f * 255), x = Math.round((i * a + u * m * (1 - a)) / f * 255), p = { r: d, g: v, b: x, a: Math.round(f * 100) };
  return typeof e == "string" ? zr(p) : p;
}
function KS(e, t) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as color");
  if (t === void 0 || t < -1 || t > 1)
    throw new TypeError("Expected offset to be between -1 and 1");
  let { r: o, g: r, b: n, a: i } = vn(e), a = i !== void 0 ? i / 100 : 0;
  return zr({ r: o, g: r, b: n, a: Math.round(Math.min(1, Math.max(0, a + t)) * 100) });
}
function WS(e) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as color");
  let t = document.createElement("div");
  t.className = `text-${e} invisible fixed no-pointer-events`, document.body.appendChild(t);
  let o = getComputedStyle(t).getPropertyValue("color");
  return t.remove(), zr(vn(o));
}
var YS = { rgbToHex: zr, hexToRgb: cu, hsvToRgb: du, rgbToHsv: Ia, textToRgb: vn, lighten: QS, luminosity: qc, brightness: jS, blend: US, changeAlpha: KS, getPaletteColor: WS };
var GS = ["rgb(255,204,204)", "rgb(255,230,204)", "rgb(255,255,204)", "rgb(204,255,204)", "rgb(204,255,230)", "rgb(204,255,255)", "rgb(204,230,255)", "rgb(204,204,255)", "rgb(230,204,255)", "rgb(255,204,255)", "rgb(255,153,153)", "rgb(255,204,153)", "rgb(255,255,153)", "rgb(153,255,153)", "rgb(153,255,204)", "rgb(153,255,255)", "rgb(153,204,255)", "rgb(153,153,255)", "rgb(204,153,255)", "rgb(255,153,255)", "rgb(255,102,102)", "rgb(255,179,102)", "rgb(255,255,102)", "rgb(102,255,102)", "rgb(102,255,179)", "rgb(102,255,255)", "rgb(102,179,255)", "rgb(102,102,255)", "rgb(179,102,255)", "rgb(255,102,255)", "rgb(255,51,51)", "rgb(255,153,51)", "rgb(255,255,51)", "rgb(51,255,51)", "rgb(51,255,153)", "rgb(51,255,255)", "rgb(51,153,255)", "rgb(51,51,255)", "rgb(153,51,255)", "rgb(255,51,255)", "rgb(255,0,0)", "rgb(255,128,0)", "rgb(255,255,0)", "rgb(0,255,0)", "rgb(0,255,128)", "rgb(0,255,255)", "rgb(0,128,255)", "rgb(0,0,255)", "rgb(128,0,255)", "rgb(255,0,255)", "rgb(245,0,0)", "rgb(245,123,0)", "rgb(245,245,0)", "rgb(0,245,0)", "rgb(0,245,123)", "rgb(0,245,245)", "rgb(0,123,245)", "rgb(0,0,245)", "rgb(123,0,245)", "rgb(245,0,245)", "rgb(214,0,0)", "rgb(214,108,0)", "rgb(214,214,0)", "rgb(0,214,0)", "rgb(0,214,108)", "rgb(0,214,214)", "rgb(0,108,214)", "rgb(0,0,214)", "rgb(108,0,214)", "rgb(214,0,214)", "rgb(163,0,0)", "rgb(163,82,0)", "rgb(163,163,0)", "rgb(0,163,0)", "rgb(0,163,82)", "rgb(0,163,163)", "rgb(0,82,163)", "rgb(0,0,163)", "rgb(82,0,163)", "rgb(163,0,163)", "rgb(92,0,0)", "rgb(92,46,0)", "rgb(92,92,0)", "rgb(0,92,0)", "rgb(0,92,46)", "rgb(0,92,92)", "rgb(0,46,92)", "rgb(0,0,92)", "rgb(46,0,92)", "rgb(92,0,92)", "rgb(255,255,255)", "rgb(205,205,205)", "rgb(178,178,178)", "rgb(153,153,153)", "rgb(127,127,127)", "rgb(102,102,102)", "rgb(76,76,76)", "rgb(51,51,51)", "rgb(25,25,25)", "rgb(0,0,0)"];
var Rm = "M5 5 h10 v10 h-10 v-10 z";
var ZS = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAH0lEQVQoU2NkYGAwZkAFZ5G5jPRRgOYEVDeB3EBjBQBOZwTVugIGyAAAAABJRU5ErkJggg==";
var Pm = M({ name: "QColor", props: { ...pe, ...xt, modelValue: String, defaultValue: String, defaultView: { type: String, default: "spectrum", validator: (e) => ["spectrum", "tune", "palette"].includes(e) }, formatModel: { type: String, default: "auto", validator: (e) => ["auto", "hex", "rgb", "hexa", "rgba"].includes(e) }, palette: Array, noHeader: Boolean, noHeaderTabs: Boolean, noFooter: Boolean, square: Boolean, flat: Boolean, bordered: Boolean, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change"], setup(e, { emit: t }) {
  let { proxy: o } = getCurrentInstance(), { $q: r } = o, n = be(e, r), { getCache: i } = dn(), a = ref(null), l = ref(null), s = computed(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("hex") !== -1), c = computed(() => e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1), u = ref(e.formatModel === "auto" ? e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#") ? "hex" : "rgb" : e.formatModel.startsWith("hex") ? "hex" : "rgb"), m = ref(e.defaultView), f = ref(P(e.modelValue || e.defaultValue)), d = computed(() => e.disable !== true && e.readonly !== true), v = computed(() => e.modelValue === void 0 || e.modelValue === null || e.modelValue === "" || e.modelValue.startsWith("#")), x = computed(() => s.value !== null ? s.value : v.value), p = computed(() => ({ type: "hidden", name: e.name, value: f.value[x.value === true ? "hex" : "rgb"] })), w = Jt(p), b = computed(() => c.value !== null ? c.value : f.value.a !== void 0), h2 = computed(() => ({ backgroundColor: f.value.rgb || "#000" })), g = computed(() => `q-color-picker__header-content q-color-picker__header-content--${(f.value.a !== void 0 && f.value.a < 65 ? true : qc(f.value) > 0.4) ? "light" : "dark"}`), C = computed(() => ({ background: `hsl(${f.value.h},100%,50%)` })), R = computed(() => ({ top: `${100 - f.value.v}%`, [r.lang.rtl === true ? "right" : "left"]: `${f.value.s}%` })), $ = computed(() => e.palette !== void 0 && e.palette.length !== 0 ? e.palette : GS), F = computed(() => "q-color-picker" + (e.bordered === true ? " q-color-picker--bordered" : "") + (e.square === true ? " q-color-picker--square no-border-radius" : "") + (e.flat === true ? " q-color-picker--flat no-shadow" : "") + (e.disable === true ? " disabled" : "") + (n.value === true ? " q-color-picker--dark q-dark" : "")), E = computed(() => e.disable === true ? { "aria-disabled": "true" } : {}), A = computed(() => [[qt, I, void 0, { prevent: true, stop: true, mouse: true }]]);
  watch(() => e.modelValue, (y) => {
    let U = P(y || e.defaultValue);
    U.hex !== f.value.hex && (f.value = U);
  }), watch(() => e.defaultValue, (y) => {
    if (!e.modelValue && y) {
      let U = P(y);
      U.hex !== f.value.hex && (f.value = U);
    }
  });
  function B(y, U) {
    f.value.hex = zr(y), f.value.rgb = kc(y), f.value.r = y.r, f.value.g = y.g, f.value.b = y.b, f.value.a = y.a;
    let te = f.value[x.value === true ? "hex" : "rgb"];
    t("update:modelValue", te), U === true && t("change", te);
  }
  function P(y) {
    let U = c.value !== void 0 ? c.value : e.formatModel === "auto" ? null : e.formatModel.indexOf("a") !== -1;
    if (typeof y != "string" || y.length === 0 || Vr.anyColor(y.replace(/ /g, "")) !== true)
      return { h: 0, s: 0, v: 0, r: 0, g: 0, b: 0, a: U === true ? 100 : void 0, hex: void 0, rgb: void 0 };
    let te = vn(y);
    return U === true && te.a === void 0 && (te.a = 100), te.hex = zr(te), te.rgb = kc(te), Object.assign(te, Ia(te));
  }
  function S(y, U, te) {
    let le = a.value;
    if (le === null)
      return;
    let ve = le.clientWidth, ue = le.clientHeight, Ee = le.getBoundingClientRect(), Te = Math.min(ve, Math.max(0, y - Ee.left));
    r.lang.rtl === true && (Te = ve - Te);
    let ge = Math.min(ue, Math.max(0, U - Ee.top)), Fe = Math.round(100 * Te / ve), tt = Math.round(100 * Math.max(0, Math.min(1, -(ge / ue) + 1))), He = du({ h: f.value.h, s: Fe, v: tt, a: b.value === true ? f.value.a : void 0 });
    f.value.s = Fe, f.value.v = tt, B(He, te);
  }
  function q(y, U) {
    let te = Math.round(y), le = du({ h: te, s: f.value.s, v: f.value.v, a: b.value === true ? f.value.a : void 0 });
    f.value.h = te, B(le, U);
  }
  function D(y, U, te, le, ve) {
    if (le !== void 0 && et(le), !/^[0-9]+$/.test(y)) {
      ve === true && o.$forceUpdate();
      return;
    }
    let ue = Math.floor(Number(y));
    if (ue < 0 || ue > te) {
      ve === true && o.$forceUpdate();
      return;
    }
    let Ee = { r: U === "r" ? ue : f.value.r, g: U === "g" ? ue : f.value.g, b: U === "b" ? ue : f.value.b, a: b.value === true ? U === "a" ? ue : f.value.a : void 0 };
    if (U !== "a") {
      let Te = Ia(Ee);
      f.value.h = Te.h, f.value.s = Te.s, f.value.v = Te.v;
    }
    if (B(Ee, ve), le !== void 0 && ve !== true && le.target.selectionEnd !== void 0) {
      let Te = le.target.selectionEnd;
      nextTick(() => {
        le.target.setSelectionRange(Te, Te);
      });
    }
  }
  function j(y, U) {
    let te, le = y.target.value;
    if (et(y), u.value === "hex") {
      if (le.length !== (b.value === true ? 9 : 7) || !/^#[0-9A-Fa-f]+$/.test(le))
        return true;
      te = cu(le);
    } else {
      let ue;
      if (le.endsWith(")"))
        if (b.value !== true && le.startsWith("rgb(")) {
          if (ue = le.substring(4, le.length - 1).split(",").map((Ee) => parseInt(Ee, 10)), ue.length !== 3 || !/^rgb\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3}\)$/.test(le))
            return true;
        } else if (b.value === true && le.startsWith("rgba(")) {
          if (ue = le.substring(5, le.length - 1).split(","), ue.length !== 4 || !/^rgba\([0-9]{1,3},[0-9]{1,3},[0-9]{1,3},(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/.test(le))
            return true;
          for (let Te = 0; Te < 3; Te++) {
            let ge = parseInt(ue[Te], 10);
            if (ge < 0 || ge > 255)
              return true;
            ue[Te] = ge;
          }
          let Ee = parseFloat(ue[3]);
          if (Ee < 0 || Ee > 1)
            return true;
          ue[3] = Ee;
        } else
          return true;
      else
        return true;
      if (ue[0] < 0 || ue[0] > 255 || ue[1] < 0 || ue[1] > 255 || ue[2] < 0 || ue[2] > 255 || b.value === true && (ue[3] < 0 || ue[3] > 1))
        return true;
      te = { r: ue[0], g: ue[1], b: ue[2], a: b.value === true ? ue[3] * 100 : void 0 };
    }
    let ve = Ia(te);
    if (f.value.h = ve.h, f.value.s = ve.s, f.value.v = ve.v, B(te, U), U !== true) {
      let ue = y.target.selectionEnd;
      nextTick(() => {
        y.target.setSelectionRange(ue, ue);
      });
    }
  }
  function k(y) {
    let U = P(y), te = { r: U.r, g: U.g, b: U.b, a: U.a };
    te.a === void 0 && (te.a = f.value.a), f.value.h = U.h, f.value.s = U.s, f.value.v = U.v, B(te, true);
  }
  function I(y) {
    y.isFinal ? S(y.position.left, y.position.top, true) : W(y);
  }
  let W = Ta((y) => {
    S(y.position.left, y.position.top);
  }, 20);
  function ae(y) {
    S(y.pageX - window.pageXOffset, y.pageY - window.pageYOffset, true);
  }
  function V(y) {
    S(y.pageX - window.pageXOffset, y.pageY - window.pageYOffset);
  }
  function _(y) {
    l.value !== null && (l.value.$el.style.opacity = y ? 1 : 0);
  }
  function H() {
    let y = [];
    return e.noHeaderTabs !== true && y.push(h(Oa, { class: "q-color-picker__header-tabs", modelValue: u.value, dense: true, align: "justify", ...i("topVTab", { "onUpdate:modelValue": (U) => {
      u.value = U;
    } }) }, () => [h(ir, { label: "HEX" + (b.value === true ? "A" : ""), name: "hex", ripple: false }), h(ir, { label: "RGB" + (b.value === true ? "A" : ""), name: "rgb", ripple: false })])), y.push(h("div", { class: "q-color-picker__header-banner row flex-center no-wrap" }, [h("input", { class: "fit", value: f.value[u.value], ...d.value !== true ? { readonly: true } : {}, ...i("topIn", { onInput: (U) => {
      _(j(U) === true);
    }, onChange: et, onBlur: (U) => {
      j(U, true) === true && o.$forceUpdate(), _(false);
    } }) }), h(Ce, { ref: l, class: "q-color-picker__error-icon absolute no-pointer-events", name: r.iconSet.type.negative })])), h("div", { class: "q-color-picker__header relative-position overflow-hidden" }, [h("div", { class: "q-color-picker__header-bg absolute-full" }), h("div", { class: g.value, style: h2.value }, y)]);
  }
  function O() {
    return h(lu, { modelValue: m.value, animated: true }, () => [h(Gi, { class: "q-color-picker__spectrum-tab overflow-hidden", name: "spectrum" }, Q), h(Gi, { class: "q-pa-md q-color-picker__tune-tab", name: "tune" }, ne), h(Gi, { class: "q-color-picker__palette-tab", name: "palette" }, N)]);
  }
  function Y() {
    return h("div", { class: "q-color-picker__footer relative-position overflow-hidden" }, [h(Oa, { class: "absolute-full", modelValue: m.value, dense: true, align: "justify", ...i("ftIn", { "onUpdate:modelValue": (y) => {
      m.value = y;
    } }) }, () => [h(ir, { icon: r.iconSet.colorPicker.spectrum, name: "spectrum", ripple: false }), h(ir, { icon: r.iconSet.colorPicker.tune, name: "tune", ripple: false }), h(ir, { icon: r.iconSet.colorPicker.palette, name: "palette", ripple: false })])]);
  }
  function Q() {
    let y = { ref: a, class: "q-color-picker__spectrum non-selectable relative-position cursor-pointer" + (d.value !== true ? " readonly" : ""), style: C.value, ...d.value === true ? { onClick: ae, onMousedown: V } : {} }, U = [h("div", { style: { paddingBottom: "100%" } }), h("div", { class: "q-color-picker__spectrum-white absolute-full" }), h("div", { class: "q-color-picker__spectrum-black absolute-full" }), h("div", { class: "absolute", style: R.value }, [f.value.hex !== void 0 ? h("div", { class: "q-color-picker__spectrum-circle" }) : null])], te = [h(En, { class: "q-color-picker__hue non-selectable", modelValue: f.value.h, min: 0, max: 360, trackSize: "8px", innerTrackColor: "transparent", selectionColor: "transparent", readonly: d.value !== true, thumbPath: Rm, "onUpdate:modelValue": q, ...i("lazyhue", { onChange: (le) => q(le, true) }) })];
    return b.value === true && te.push(h(En, { class: "q-color-picker__alpha non-selectable", modelValue: f.value.a, min: 0, max: 100, trackSize: "8px", trackColor: "white", innerTrackColor: "transparent", selectionColor: "transparent", trackImg: ZS, readonly: d.value !== true, hideSelection: true, thumbPath: Rm, ...i("alphaSlide", { "onUpdate:modelValue": (le) => D(le, "a", 100), onChange: (le) => D(le, "a", 100, void 0, true) }) })), [kt("div", y, U, "spec", d.value, () => A.value), h("div", { class: "q-color-picker__sliders" }, te)];
  }
  function ne() {
    return [h("div", { class: "row items-center no-wrap" }, [h("div", "R"), h(En, { modelValue: f.value.r, min: 0, max: 255, color: "red", dark: n.value, readonly: d.value !== true, ...i("rSlide", { "onUpdate:modelValue": (y) => D(y, "r", 255), onChange: (y) => D(y, "r", 255, void 0, true) }) }), h("input", { value: f.value.r, maxlength: 3, readonly: d.value !== true, onChange: et, ...i("rIn", { onInput: (y) => D(y.target.value, "r", 255, y), onBlur: (y) => D(y.target.value, "r", 255, y, true) }) })]), h("div", { class: "row items-center no-wrap" }, [h("div", "G"), h(En, { modelValue: f.value.g, min: 0, max: 255, color: "green", dark: n.value, readonly: d.value !== true, ...i("gSlide", { "onUpdate:modelValue": (y) => D(y, "g", 255), onChange: (y) => D(y, "g", 255, void 0, true) }) }), h("input", { value: f.value.g, maxlength: 3, readonly: d.value !== true, onChange: et, ...i("gIn", { onInput: (y) => D(y.target.value, "g", 255, y), onBlur: (y) => D(y.target.value, "g", 255, y, true) }) })]), h("div", { class: "row items-center no-wrap" }, [h("div", "B"), h(En, { modelValue: f.value.b, min: 0, max: 255, color: "blue", readonly: d.value !== true, dark: n.value, ...i("bSlide", { "onUpdate:modelValue": (y) => D(y, "b", 255), onChange: (y) => D(y, "b", 255, void 0, true) }) }), h("input", { value: f.value.b, maxlength: 3, readonly: d.value !== true, onChange: et, ...i("bIn", { onInput: (y) => D(y.target.value, "b", 255, y), onBlur: (y) => D(y.target.value, "b", 255, y, true) }) })]), b.value === true ? h("div", { class: "row items-center no-wrap" }, [h("div", "A"), h(En, { modelValue: f.value.a, color: "grey", readonly: d.value !== true, dark: n.value, ...i("aSlide", { "onUpdate:modelValue": (y) => D(y, "a", 100), onChange: (y) => D(y, "a", 100, void 0, true) }) }), h("input", { value: f.value.a, maxlength: 3, readonly: d.value !== true, onChange: et, ...i("aIn", { onInput: (y) => D(y.target.value, "a", 100, y), onBlur: (y) => D(y.target.value, "a", 100, y, true) }) })]) : null];
  }
  function N() {
    let y = (U) => h("div", { class: "q-color-picker__cube col-auto", style: { backgroundColor: U }, ...d.value === true ? i("palette#" + U, { onClick: () => {
      k(U);
    } }) : {} });
    return [h("div", { class: "row items-center q-color-picker__palette-rows" + (d.value === true ? " q-color-picker__palette-rows--editable" : "") }, $.value.map(y))];
  }
  return () => {
    let y = [O()];
    return e.name !== void 0 && e.disable !== true && w(y, "push"), e.noHeader !== true && y.unshift(H()), e.noFooter !== true && y.push(Y()), h("div", { class: F.value, ...E.value }, y);
  };
} });
var ar = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
function Am(e, t, o) {
  return Object.prototype.toString.call(e) === "[object Date]" && (o = e.getDate(), t = e.getMonth() + 1, e = e.getFullYear()), ox(Mc(e, t, o));
}
function Tc(e, t, o) {
  return Em(tx(e, t, o));
}
function JS(e) {
  return ex(e) === 0;
}
function Zi(e, t) {
  return t <= 6 ? 31 : t <= 11 || JS(e) ? 30 : 29;
}
function ex(e) {
  let t = ar.length, o = ar[0], r, n, i, a, l;
  if (e < o || e >= ar[t - 1])
    throw new Error("Invalid Jalaali year " + e);
  for (l = 1; l < t && (r = ar[l], n = r - o, !(e < r)); l += 1)
    o = r;
  return a = e - o, n - a < 6 && (a = a - n + yt(n + 4, 33) * 33), i = _o(_o(a + 1, 33) - 1, 4), i === -1 && (i = 4), i;
}
function $m(e, t) {
  let o = ar.length, r = e + 621, n = -14, i = ar[0], a, l, s, c, u;
  if (e < i || e >= ar[o - 1])
    throw new Error("Invalid Jalaali year " + e);
  for (u = 1; u < o && (a = ar[u], l = a - i, !(e < a)); u += 1)
    n = n + yt(l, 33) * 8 + yt(_o(l, 33), 4), i = a;
  c = e - i, n = n + yt(c, 33) * 8 + yt(_o(c, 33) + 3, 4), _o(l, 33) === 4 && l - c === 4 && (n += 1);
  let m = yt(r, 4) - yt((yt(r, 100) + 1) * 3, 4) - 150, f = 20 + n - m;
  return t || (l - c < 6 && (c = c - l + yt(l + 4, 33) * 33), s = _o(_o(c + 1, 33) - 1, 4), s === -1 && (s = 4)), { leap: s, gy: r, march: f };
}
function tx(e, t, o) {
  let r = $m(e, true);
  return Mc(r.gy, 3, r.march) + (t - 1) * 31 - yt(t, 7) * (t - 7) + o - 1;
}
function ox(e) {
  let t = Em(e).gy, o = t - 621, r, n, i, a = $m(o, false), l = Mc(t, 3, a.march);
  if (i = e - l, i >= 0) {
    if (i <= 185)
      return n = 1 + yt(i, 31), r = _o(i, 31) + 1, { jy: o, jm: n, jd: r };
    i -= 186;
  } else
    o -= 1, i += 179, a.leap === 1 && (i += 1);
  return n = 7 + yt(i, 30), r = _o(i, 30) + 1, { jy: o, jm: n, jd: r };
}
function Mc(e, t, o) {
  let r = yt((e + yt(t - 8, 6) + 100100) * 1461, 4) + yt(153 * _o(t + 9, 12) + 2, 5) + o - 34840408;
  return r = r - yt(yt(e + 100100 + yt(t - 8, 6), 100) * 3, 4) + 752, r;
}
function Em(e) {
  let t = 4 * e + 139361631;
  t = t + yt(yt(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
  let o = yt(_o(t, 1461), 4) * 5 + 308, r = yt(_o(o, 153), 5) + 1, n = _o(yt(o, 153), 12) + 1;
  return { gy: yt(t, 1461) - 100100 + yt(8 - n, 6), gm: n, gd: r };
}
function yt(e, t) {
  return ~~(e / t);
}
function _o(e, t) {
  return e - ~~(e / t) * t;
}
var nx = ["gregorian", "persian"];
var fu = { modelValue: { required: true }, mask: { type: String }, locale: Object, calendar: { type: String, validator: (e) => nx.includes(e), default: "gregorian" }, landscape: Boolean, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, readonly: Boolean, disable: Boolean };
var mu = ["update:modelValue"];
function No(e) {
  return e.year + "/" + Ze(e.month) + "/" + Ze(e.day);
}
function vu(e, t) {
  let o = computed(() => e.disable !== true && e.readonly !== true), r = computed(() => o.value === true ? 0 : -1), n = computed(() => {
    let l = [];
    return e.color !== void 0 && l.push(`bg-${e.color}`), e.textColor !== void 0 && l.push(`text-${e.textColor}`), l.join(" ");
  });
  function i() {
    return e.locale !== void 0 ? { ...t.lang.date, ...e.locale } : t.lang.date;
  }
  function a(l) {
    let s = /* @__PURE__ */ new Date(), c = l === true ? null : 0;
    if (e.calendar === "persian") {
      let u = Am(s);
      return { year: u.jy, month: u.jm, day: u.jd };
    }
    return { year: s.getFullYear(), month: s.getMonth() + 1, day: s.getDate(), hour: c, minute: c, second: c, millisecond: c };
  }
  return { editable: o, tabindex: r, headerClass: n, getLocale: i, getCurrentDate: a };
}
var Vm = 864e5;
var rx = 36e5;
var $c = 6e4;
var zm = "YYYY-MM-DDTHH:mm:ss.SSSZ";
var ix = /\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g;
var ax = /(\[[^\]]*\])|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]|([.*+:?^,\s${}()|\\]+)/g;
var Pc = {};
function lx(e, t) {
  let o = "(" + t.days.join("|") + ")", r = e + o;
  if (Pc[r] !== void 0)
    return Pc[r];
  let n = "(" + t.daysShort.join("|") + ")", i = "(" + t.months.join("|") + ")", a = "(" + t.monthsShort.join("|") + ")", l = {}, s = 0, c = e.replace(ax, (m) => {
    switch (s++, m) {
      case "YY":
        return l.YY = s, "(-?\\d{1,2})";
      case "YYYY":
        return l.YYYY = s, "(-?\\d{1,4})";
      case "M":
        return l.M = s, "(\\d{1,2})";
      case "MM":
        return l.M = s, "(\\d{2})";
      case "MMM":
        return l.MMM = s, a;
      case "MMMM":
        return l.MMMM = s, i;
      case "D":
        return l.D = s, "(\\d{1,2})";
      case "Do":
        return l.D = s++, "(\\d{1,2}(st|nd|rd|th))";
      case "DD":
        return l.D = s, "(\\d{2})";
      case "H":
        return l.H = s, "(\\d{1,2})";
      case "HH":
        return l.H = s, "(\\d{2})";
      case "h":
        return l.h = s, "(\\d{1,2})";
      case "hh":
        return l.h = s, "(\\d{2})";
      case "m":
        return l.m = s, "(\\d{1,2})";
      case "mm":
        return l.m = s, "(\\d{2})";
      case "s":
        return l.s = s, "(\\d{1,2})";
      case "ss":
        return l.s = s, "(\\d{2})";
      case "S":
        return l.S = s, "(\\d{1})";
      case "SS":
        return l.S = s, "(\\d{2})";
      case "SSS":
        return l.S = s, "(\\d{3})";
      case "A":
        return l.A = s, "(AM|PM)";
      case "a":
        return l.a = s, "(am|pm)";
      case "aa":
        return l.aa = s, "(a\\.m\\.|p\\.m\\.)";
      case "ddd":
        return n;
      case "dddd":
        return o;
      case "Q":
      case "d":
      case "E":
        return "(\\d{1})";
      case "Qo":
        return "(1st|2nd|3rd|4th)";
      case "DDD":
      case "DDDD":
        return "(\\d{1,3})";
      case "w":
        return "(\\d{1,2})";
      case "ww":
        return "(\\d{2})";
      case "Z":
        return l.Z = s, "(Z|[+-]\\d{2}:\\d{2})";
      case "ZZ":
        return l.ZZ = s, "(Z|[+-]\\d{2}\\d{2})";
      case "X":
        return l.X = s, "(-?\\d+)";
      case "x":
        return l.x = s, "(-?\\d{4,})";
      default:
        return s--, m[0] === "[" && (m = m.substring(1, m.length - 1)), m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }
  }), u = { map: l, regex: new RegExp("^" + c) };
  return Pc[r] = u, u;
}
function Dm(e, t) {
  return e !== void 0 ? e : t !== void 0 ? t.date : wa.default.date;
}
function Bm(e, t = "") {
  let o = e > 0 ? "-" : "+", r = Math.abs(e), n = Math.floor(r / 60), i = r % 60;
  return o + Ze(n) + t + Ze(i);
}
function ux(e, t, o) {
  let r = e.getFullYear(), n = e.getMonth(), i = e.getDate();
  return t.year !== void 0 && (r += o * t.year, delete t.year), t.month !== void 0 && (n += o * t.month, delete t.month), e.setDate(1), e.setMonth(2), e.setFullYear(r), e.setMonth(n), e.setDate(Math.min(i, Lc(e))), t.date !== void 0 && (e.setDate(e.getDate() + o * t.date), delete t.date), e;
}
function sx(e, t, o) {
  let r = t.year !== void 0 ? t.year : e[`get${o}FullYear`](), n = t.month !== void 0 ? t.month - 1 : e[`get${o}Month`](), i = new Date(r, n + 1, 0).getDate(), a = Math.min(i, t.date !== void 0 ? t.date : e[`get${o}Date`]());
  return e[`set${o}Date`](1), e[`set${o}Month`](2), e[`set${o}FullYear`](r), e[`set${o}Month`](n), e[`set${o}Date`](a), delete t.year, delete t.month, delete t.date, e;
}
function Fc(e, t, o) {
  let r = Om(t), n = new Date(e), i = r.year !== void 0 || r.month !== void 0 || r.date !== void 0 ? ux(n, r, o) : n;
  for (let a in r) {
    let l = Js(a);
    i[`set${l}`](i[`get${l}`]() + o * r[a]);
  }
  return i;
}
function Om(e) {
  let t = { ...e };
  return e.years !== void 0 && (t.year = e.years, delete t.years), e.months !== void 0 && (t.month = e.months, delete t.months), e.days !== void 0 && (t.date = e.days, delete t.days), e.day !== void 0 && (t.date = e.day, delete t.day), e.hour !== void 0 && (t.hours = e.hour, delete t.hour), e.minute !== void 0 && (t.minutes = e.minute, delete t.minute), e.second !== void 0 && (t.seconds = e.second, delete t.second), e.millisecond !== void 0 && (t.milliseconds = e.millisecond, delete t.millisecond), t;
}
function Im(e, t, o) {
  let r = Om(t), n = o === true ? "UTC" : "", i = new Date(e), a = r.year !== void 0 || r.month !== void 0 || r.date !== void 0 ? sx(i, r, n) : i;
  for (let l in r) {
    let s = l.charAt(0).toUpperCase() + l.slice(1);
    a[`set${n}${s}`](r[l]);
  }
  return a;
}
function cx(e, t, o) {
  let r = lr(e, t, o), n = new Date(r.year, r.month === null ? null : r.month - 1, r.day === null ? 1 : r.day, r.hour, r.minute, r.second, r.millisecond), i = n.getTimezoneOffset();
  return r.timezoneOffset === null || r.timezoneOffset === i ? n : Fc(n, { minutes: r.timezoneOffset - i }, 1);
}
function lr(e, t, o, r, n) {
  let i = { year: null, month: null, day: null, hour: null, minute: null, second: null, millisecond: null, timezoneOffset: null, dateHash: null, timeHash: null };
  if (n !== void 0 && Object.assign(i, n), e == null || e === "" || typeof e != "string")
    return i;
  t === void 0 && (t = zm);
  let a = Dm(o, kr.props), l = a.months, s = a.monthsShort, { regex: c, map: u } = lx(t, a), m = e.match(c);
  if (m === null)
    return i;
  let f = "";
  if (u.X !== void 0 || u.x !== void 0) {
    let d = parseInt(m[u.X !== void 0 ? u.X : u.x], 10);
    if (isNaN(d) === true || d < 0)
      return i;
    let v = new Date(d * (u.X !== void 0 ? 1e3 : 1));
    i.year = v.getFullYear(), i.month = v.getMonth() + 1, i.day = v.getDate(), i.hour = v.getHours(), i.minute = v.getMinutes(), i.second = v.getSeconds(), i.millisecond = v.getMilliseconds();
  } else {
    if (u.YYYY !== void 0)
      i.year = parseInt(m[u.YYYY], 10);
    else if (u.YY !== void 0) {
      let d = parseInt(m[u.YY], 10);
      i.year = d < 0 ? d : 2e3 + d;
    }
    if (u.M !== void 0) {
      if (i.month = parseInt(m[u.M], 10), i.month < 1 || i.month > 12)
        return i;
    } else
      u.MMM !== void 0 ? i.month = s.indexOf(m[u.MMM]) + 1 : u.MMMM !== void 0 && (i.month = l.indexOf(m[u.MMMM]) + 1);
    if (u.D !== void 0) {
      if (i.day = parseInt(m[u.D], 10), i.year === null || i.month === null || i.day < 1)
        return i;
      let d = r !== "persian" ? new Date(i.year, i.month, 0).getDate() : Zi(i.year, i.month);
      if (i.day > d)
        return i;
    }
    u.H !== void 0 ? i.hour = parseInt(m[u.H], 10) % 24 : u.h !== void 0 && (i.hour = parseInt(m[u.h], 10) % 12, (u.A && m[u.A] === "PM" || u.a && m[u.a] === "pm" || u.aa && m[u.aa] === "p.m.") && (i.hour += 12), i.hour = i.hour % 24), u.m !== void 0 && (i.minute = parseInt(m[u.m], 10) % 60), u.s !== void 0 && (i.second = parseInt(m[u.s], 10) % 60), u.S !== void 0 && (i.millisecond = parseInt(m[u.S], 10) * 10 ** (3 - m[u.S].length)), (u.Z !== void 0 || u.ZZ !== void 0) && (f = u.Z !== void 0 ? m[u.Z].replace(":", "") : m[u.ZZ], i.timezoneOffset = (f[0] === "+" ? -1 : 1) * (60 * f.slice(1, 3) + 1 * f.slice(3, 5)));
  }
  return i.dateHash = Ze(i.year, 6) + "/" + Ze(i.month) + "/" + Ze(i.day), i.timeHash = Ze(i.hour) + ":" + Ze(i.minute) + ":" + Ze(i.second) + f, i;
}
function dx(e) {
  return typeof e == "number" ? true : isNaN(Date.parse(e)) === false;
}
function fx(e, t) {
  return Im(/* @__PURE__ */ new Date(), e, t);
}
function mx(e) {
  let t = new Date(e).getDay();
  return t === 0 ? 7 : t;
}
function Ec(e) {
  let t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
  t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
  let o = new Date(t.getFullYear(), 0, 4);
  o.setDate(o.getDate() - (o.getDay() + 6) % 7 + 3);
  let r = t.getTimezoneOffset() - o.getTimezoneOffset();
  t.setHours(t.getHours() - r);
  let n = (t - o) / (Vm * 7);
  return 1 + Math.floor(n);
}
function vx(e) {
  return e.getFullYear() * 1e4 + e.getMonth() * 100 + e.getDate();
}
function Ac(e, t) {
  let o = new Date(e);
  return t === true ? vx(o) : o.getTime();
}
function gx(e, t, o, r = {}) {
  let n = Ac(t, r.onlyDate), i = Ac(o, r.onlyDate), a = Ac(e, r.onlyDate);
  return (a > n || r.inclusiveFrom === true && a === n) && (a < i || r.inclusiveTo === true && a === i);
}
function hx(e, t) {
  return Fc(e, t, 1);
}
function px(e, t) {
  return Fc(e, t, -1);
}
function gn(e, t, o) {
  let r = new Date(e), n = `set${o === true ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      r[`${n}Month`](0);
    case "month":
    case "months":
      r[`${n}Date`](1);
    case "day":
    case "days":
    case "date":
      r[`${n}Hours`](0);
    case "hour":
    case "hours":
      r[`${n}Minutes`](0);
    case "minute":
    case "minutes":
      r[`${n}Seconds`](0);
    case "second":
    case "seconds":
      r[`${n}Milliseconds`](0);
  }
  return r;
}
function bx(e, t, o) {
  let r = new Date(e), n = `set${o === true ? "UTC" : ""}`;
  switch (t) {
    case "year":
    case "years":
      r[`${n}Month`](11);
    case "month":
    case "months":
      r[`${n}Date`](Lc(r));
    case "day":
    case "days":
    case "date":
      r[`${n}Hours`](23);
    case "hour":
    case "hours":
      r[`${n}Minutes`](59);
    case "minute":
    case "minutes":
      r[`${n}Seconds`](59);
    case "second":
    case "seconds":
      r[`${n}Milliseconds`](999);
  }
  return r;
}
function yx(e) {
  let t = new Date(e);
  return Array.prototype.slice.call(arguments, 1).forEach((o) => {
    t = Math.max(t, new Date(o));
  }), t;
}
function Sx(e) {
  let t = new Date(e);
  return Array.prototype.slice.call(arguments, 1).forEach((o) => {
    t = Math.min(t, new Date(o));
  }), t;
}
function gu(e, t, o) {
  return (e.getTime() - e.getTimezoneOffset() * $c - (t.getTime() - t.getTimezoneOffset() * $c)) / o;
}
function hu(e, t, o = "days") {
  let r = new Date(e), n = new Date(t);
  switch (o) {
    case "years":
    case "year":
      return r.getFullYear() - n.getFullYear();
    case "months":
    case "month":
      return (r.getFullYear() - n.getFullYear()) * 12 + r.getMonth() - n.getMonth();
    case "days":
    case "day":
    case "date":
      return gu(gn(r, "day"), gn(n, "day"), Vm);
    case "hours":
    case "hour":
      return gu(gn(r, "hour"), gn(n, "hour"), rx);
    case "minutes":
    case "minute":
      return gu(gn(r, "minute"), gn(n, "minute"), $c);
    case "seconds":
    case "second":
      return gu(gn(r, "second"), gn(n, "second"), 1e3);
  }
}
function Bc(e) {
  return hu(e, gn(e, "year"), "days") + 1;
}
function xx(e) {
  return An(e) === true ? "date" : typeof e == "number" ? "number" : "string";
}
function _x(e, t, o) {
  let r = new Date(e);
  if (t) {
    let n = new Date(t);
    if (r < n)
      return n;
  }
  if (o) {
    let n = new Date(o);
    if (r > n)
      return n;
  }
  return r;
}
function Cx(e, t, o) {
  let r = new Date(e), n = new Date(t);
  if (o === void 0)
    return r.getTime() === n.getTime();
  switch (o) {
    case "second":
    case "seconds":
      if (r.getSeconds() !== n.getSeconds())
        return false;
    case "minute":
    case "minutes":
      if (r.getMinutes() !== n.getMinutes())
        return false;
    case "hour":
    case "hours":
      if (r.getHours() !== n.getHours())
        return false;
    case "day":
    case "days":
    case "date":
      if (r.getDate() !== n.getDate())
        return false;
    case "month":
    case "months":
      if (r.getMonth() !== n.getMonth())
        return false;
    case "year":
    case "years":
      if (r.getFullYear() !== n.getFullYear())
        return false;
      break;
    default:
      throw new Error(`date isSameDate unknown unit ${o}`);
  }
  return true;
}
function Lc(e) {
  return new Date(e.getFullYear(), e.getMonth() + 1, 0).getDate();
}
function Fm(e) {
  if (e >= 11 && e <= 13)
    return `${e}th`;
  switch (e % 10) {
    case 1:
      return `${e}st`;
    case 2:
      return `${e}nd`;
    case 3:
      return `${e}rd`;
  }
  return `${e}th`;
}
var Lm = { YY(e, t, o) {
  let r = this.YYYY(e, t, o) % 100;
  return r >= 0 ? Ze(r) : "-" + Ze(Math.abs(r));
}, YYYY(e, t, o) {
  return o ?? e.getFullYear();
}, M(e) {
  return e.getMonth() + 1;
}, MM(e) {
  return Ze(e.getMonth() + 1);
}, MMM(e, t) {
  return t.monthsShort[e.getMonth()];
}, MMMM(e, t) {
  return t.months[e.getMonth()];
}, Q(e) {
  return Math.ceil((e.getMonth() + 1) / 3);
}, Qo(e) {
  return Fm(this.Q(e));
}, D(e) {
  return e.getDate();
}, Do(e) {
  return Fm(e.getDate());
}, DD(e) {
  return Ze(e.getDate());
}, DDD(e) {
  return Bc(e);
}, DDDD(e) {
  return Ze(Bc(e), 3);
}, d(e) {
  return e.getDay();
}, dd(e, t) {
  return this.dddd(e, t).slice(0, 2);
}, ddd(e, t) {
  return t.daysShort[e.getDay()];
}, dddd(e, t) {
  return t.days[e.getDay()];
}, E(e) {
  return e.getDay() || 7;
}, w(e) {
  return Ec(e);
}, ww(e) {
  return Ze(Ec(e));
}, H(e) {
  return e.getHours();
}, HH(e) {
  return Ze(e.getHours());
}, h(e) {
  let t = e.getHours();
  return t === 0 ? 12 : t > 12 ? t % 12 : t;
}, hh(e) {
  return Ze(this.h(e));
}, m(e) {
  return e.getMinutes();
}, mm(e) {
  return Ze(e.getMinutes());
}, s(e) {
  return e.getSeconds();
}, ss(e) {
  return Ze(e.getSeconds());
}, S(e) {
  return Math.floor(e.getMilliseconds() / 100);
}, SS(e) {
  return Ze(Math.floor(e.getMilliseconds() / 10));
}, SSS(e) {
  return Ze(e.getMilliseconds(), 3);
}, A(e) {
  return this.H(e) < 12 ? "AM" : "PM";
}, a(e) {
  return this.H(e) < 12 ? "am" : "pm";
}, aa(e) {
  return this.H(e) < 12 ? "a.m." : "p.m.";
}, Z(e, t, o, r) {
  let n = r ?? e.getTimezoneOffset();
  return Bm(n, ":");
}, ZZ(e, t, o, r) {
  let n = r ?? e.getTimezoneOffset();
  return Bm(n);
}, X(e) {
  return Math.floor(e.getTime() / 1e3);
}, x(e) {
  return e.getTime();
} };
function Ha(e, t, o, r, n) {
  if (e !== 0 && !e || e === 1 / 0 || e === -1 / 0)
    return;
  let i = new Date(e);
  if (isNaN(i))
    return;
  t === void 0 && (t = zm);
  let a = Dm(o, kr.props);
  return t.replace(ix, (l, s) => l in Lm ? Lm[l](i, a, r, n) : s === void 0 ? l : s.split("\\]").join("]"));
}
function wx(e) {
  return An(e) === true ? new Date(e.getTime()) : e;
}
var kx = { isValid: dx, extractDate: cx, buildDate: fx, getDayOfWeek: mx, getWeekOfYear: Ec, isBetweenDates: gx, addToDate: hx, subtractFromDate: px, adjustDate: Im, startOfDate: gn, endOfDate: bx, getMaxDate: yx, getMinDate: Sx, getDateDiff: hu, getDayOfYear: Bc, inferDateFormat: xx, getDateBetween: _x, isSameDate: Cx, daysInMonth: Lc, formatDate: Ha, clone: wx };
var Dr = 20;
var Tx = ["Calendar", "Years", "Months"];
var Hm = (e) => Tx.includes(e);
var Vc = (e) => /^-?[\d]+\/[0-1]\d$/.test(e);
var Ji = " — ";
function ur(e) {
  return e.year + "/" + Ze(e.month);
}
var Qm = M({ name: "QDate", props: { ...fu, ...xt, ...pe, multiple: Boolean, range: Boolean, title: String, subtitle: String, mask: { default: "YYYY/MM/DD" }, defaultYearMonth: { type: String, validator: Vc }, yearsInMonthView: Boolean, events: [Array, Function], eventColor: [String, Function], emitImmediately: Boolean, options: [Array, Function], navigationMinYearMonth: { type: String, validator: Vc }, navigationMaxYearMonth: { type: String, validator: Vc }, noUnset: Boolean, firstDayOfWeek: [String, Number], todayBtn: Boolean, minimal: Boolean, defaultView: { type: String, default: "Calendar", validator: Hm } }, emits: [...mu, "rangeStart", "rangeEnd", "navigation"], setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), { $q: n } = r, i = be(e, n), { getCache: a } = dn(), { tabindex: l, headerClass: s, getLocale: c, getCurrentDate: u } = vu(e, n), m, f = cn(e), d = Jt(f), v = ref(null), x = ref(nt()), p = ref(c()), w = computed(() => nt()), b = computed(() => c()), h2 = computed(() => u()), g = ref(dt(x.value, p.value)), C = ref(e.defaultView), R = n.lang.rtl === true ? "right" : "left", $ = ref(R.value), F = ref(R.value), E = g.value.year, A = ref(E - E % Dr - (E < 0 ? Dr : 0)), B = ref(null), P = computed(() => {
    let T = e.landscape === true ? "landscape" : "portrait";
    return `q-date q-date--${T} q-date--${T}-${e.minimal === true ? "minimal" : "standard"}` + (i.value === true ? " q-date--dark q-dark" : "") + (e.bordered === true ? " q-date--bordered" : "") + (e.square === true ? " q-date--square no-border-radius" : "") + (e.flat === true ? " q-date--flat no-shadow" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-date--readonly" : "");
  }), S = computed(() => e.color || "primary"), q = computed(() => e.textColor || "white"), D = computed(() => e.emitImmediately === true && e.multiple !== true && e.range !== true), j = computed(() => Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue !== null && e.modelValue !== void 0 ? [e.modelValue] : []), k = computed(() => j.value.filter((T) => typeof T == "string").map((T) => ct(T, x.value, p.value)).filter((T) => T.dateHash !== null && T.day !== null && T.month !== null && T.year !== null)), I = computed(() => {
    let T = (z) => ct(z, x.value, p.value);
    return j.value.filter((z) => at(z) === true && z.from !== void 0 && z.to !== void 0).map((z) => ({ from: T(z.from), to: T(z.to) })).filter((z) => z.from.dateHash !== null && z.to.dateHash !== null && z.from.dateHash < z.to.dateHash);
  }), W = computed(() => e.calendar !== "persian" ? (T) => new Date(T.year, T.month - 1, T.day) : (T) => {
    let z = Tc(T.year, T.month, T.day);
    return new Date(z.gy, z.gm - 1, z.gd);
  }), ae = computed(() => e.calendar === "persian" ? No : (T, z, G) => Ha(new Date(T.year, T.month - 1, T.day, T.hour, T.minute, T.second, T.millisecond), z === void 0 ? x.value : z, G === void 0 ? p.value : G, T.year, T.timezoneOffset)), V = computed(() => k.value.length + I.value.reduce((T, z) => T + 1 + hu(W.value(z.to), W.value(z.from)), 0)), _ = computed(() => {
    if (e.title !== void 0 && e.title !== null && e.title.length !== 0)
      return e.title;
    if (B.value !== null) {
      let G = B.value.init, ce = W.value(G);
      return p.value.daysShort[ce.getDay()] + ", " + p.value.monthsShort[G.month - 1] + " " + G.day + Ji + "?";
    }
    if (V.value === 0)
      return Ji;
    if (V.value > 1)
      return `${V.value} ${p.value.pluralDay}`;
    let T = k.value[0], z = W.value(T);
    return isNaN(z.valueOf()) === true ? Ji : p.value.headerTitle !== void 0 ? p.value.headerTitle(z, T) : p.value.daysShort[z.getDay()] + ", " + p.value.monthsShort[T.month - 1] + " " + T.day;
  }), H = computed(() => k.value.concat(I.value.map((z) => z.from)).sort((z, G) => z.year - G.year || z.month - G.month)[0]), O = computed(() => k.value.concat(I.value.map((z) => z.to)).sort((z, G) => G.year - z.year || G.month - z.month)[0]), Y = computed(() => {
    if (e.subtitle !== void 0 && e.subtitle !== null && e.subtitle.length !== 0)
      return e.subtitle;
    if (V.value === 0)
      return Ji;
    if (V.value > 1) {
      let T = H.value, z = O.value, G = p.value.monthsShort;
      return G[T.month - 1] + (T.year !== z.year ? " " + T.year + Ji + G[z.month - 1] + " " : T.month !== z.month ? Ji + G[z.month - 1] : "") + " " + z.year;
    }
    return k.value[0].year;
  }), Q = computed(() => {
    let T = [n.iconSet.datetime.arrowLeft, n.iconSet.datetime.arrowRight];
    return n.lang.rtl === true ? T.reverse() : T;
  }), ne = computed(() => e.firstDayOfWeek !== void 0 ? Number(e.firstDayOfWeek) : p.value.firstDayOfWeek), N = computed(() => {
    let T = p.value.daysShort, z = ne.value;
    return z > 0 ? T.slice(z, 7).concat(T.slice(0, z)) : T;
  }), y = computed(() => {
    let T = g.value;
    return e.calendar !== "persian" ? new Date(T.year, T.month, 0).getDate() : Zi(T.year, T.month);
  }), U = computed(() => typeof e.eventColor == "function" ? e.eventColor : () => e.eventColor), te = computed(() => {
    if (e.navigationMinYearMonth === void 0)
      return null;
    let T = e.navigationMinYearMonth.split("/");
    return { year: parseInt(T[0], 10), month: parseInt(T[1], 10) };
  }), le = computed(() => {
    if (e.navigationMaxYearMonth === void 0)
      return null;
    let T = e.navigationMaxYearMonth.split("/");
    return { year: parseInt(T[0], 10), month: parseInt(T[1], 10) };
  }), ve = computed(() => {
    let T = { month: { prev: true, next: true }, year: { prev: true, next: true } };
    return te.value !== null && te.value.year >= g.value.year && (T.year.prev = false, te.value.year === g.value.year && te.value.month >= g.value.month && (T.month.prev = false)), le.value !== null && le.value.year <= g.value.year && (T.year.next = false, le.value.year === g.value.year && le.value.month <= g.value.month && (T.month.next = false)), T;
  }), ue = computed(() => {
    let T = {};
    return k.value.forEach((z) => {
      let G = ur(z);
      T[G] === void 0 && (T[G] = []), T[G].push(z.day);
    }), T;
  }), Ee = computed(() => {
    let T = {};
    return I.value.forEach((z) => {
      let G = ur(z.from), ce = ur(z.to);
      if (T[G] === void 0 && (T[G] = []), T[G].push({ from: z.from.day, to: G === ce ? z.to.day : void 0, range: z }), G < ce) {
        let de, { year: Je, month: qe } = z.from, Ue = qe < 12 ? { year: Je, month: qe + 1 } : { year: Je + 1, month: 1 };
        for (; (de = ur(Ue)) <= ce; )
          T[de] === void 0 && (T[de] = []), T[de].push({ from: void 0, to: de === ce ? z.to.day : void 0, range: z }), Ue.month++, Ue.month > 12 && (Ue.year++, Ue.month = 1);
      }
    }), T;
  }), Te = computed(() => {
    if (B.value === null)
      return;
    let { init: T, initHash: z, final: G, finalHash: ce } = B.value, [de, Je] = z <= ce ? [T, G] : [G, T], qe = ur(de), Ue = ur(Je);
    if (qe !== ge.value && Ue !== ge.value)
      return;
    let rt = {};
    return qe === ge.value ? (rt.from = de.day, rt.includeFrom = true) : rt.from = 1, Ue === ge.value ? (rt.to = Je.day, rt.includeTo = true) : rt.to = y.value, rt;
  }), ge = computed(() => ur(g.value)), Fe = computed(() => {
    let T = {};
    if (e.options === void 0) {
      for (let G = 1; G <= y.value; G++)
        T[G] = true;
      return T;
    }
    let z = typeof e.options == "function" ? e.options : (G) => e.options.includes(G);
    for (let G = 1; G <= y.value; G++) {
      let ce = ge.value + "/" + Ze(G);
      T[G] = z(ce);
    }
    return T;
  }), tt = computed(() => {
    let T = {};
    if (e.events === void 0)
      for (let z = 1; z <= y.value; z++)
        T[z] = false;
    else {
      let z = typeof e.events == "function" ? e.events : (G) => e.events.includes(G);
      for (let G = 1; G <= y.value; G++) {
        let ce = ge.value + "/" + Ze(G);
        T[G] = z(ce) === true && U.value(ce);
      }
    }
    return T;
  }), He = computed(() => {
    let T, z, { year: G, month: ce } = g.value;
    if (e.calendar !== "persian")
      T = new Date(G, ce - 1, 1), z = new Date(G, ce - 1, 0).getDate();
    else {
      let de = Tc(G, ce, 1);
      T = new Date(de.gy, de.gm - 1, de.gd);
      let Je = ce - 1, qe = G;
      Je === 0 && (Je = 12, qe--), z = Zi(qe, Je);
    }
    return { days: T.getDay() - ne.value - 1, endDay: z };
  }), ie = computed(() => {
    let T = [], { days: z, endDay: G } = He.value, ce = z < 0 ? z + 7 : z;
    if (ce < 6)
      for (let qe = G - ce; qe <= G; qe++)
        T.push({ i: qe, fill: true });
    let de = T.length;
    for (let qe = 1; qe <= y.value; qe++) {
      let Ue = { i: qe, event: tt.value[qe], classes: [] };
      Fe.value[qe] === true && (Ue.in = true, Ue.flat = true), T.push(Ue);
    }
    if (ue.value[ge.value] !== void 0 && ue.value[ge.value].forEach((qe) => {
      let Ue = de + qe - 1;
      Object.assign(T[Ue], { selected: true, unelevated: true, flat: false, color: S.value, textColor: q.value });
    }), Ee.value[ge.value] !== void 0 && Ee.value[ge.value].forEach((qe) => {
      if (qe.from !== void 0) {
        let Ue = de + qe.from - 1, rt = de + (qe.to || y.value) - 1;
        for (let To = Ue; To <= rt; To++)
          Object.assign(T[To], { range: qe.range, unelevated: true, color: S.value, textColor: q.value });
        Object.assign(T[Ue], { rangeFrom: true, flat: false }), qe.to !== void 0 && Object.assign(T[rt], { rangeTo: true, flat: false });
      } else if (qe.to !== void 0) {
        let Ue = de + qe.to - 1;
        for (let rt = de; rt <= Ue; rt++)
          Object.assign(T[rt], { range: qe.range, unelevated: true, color: S.value, textColor: q.value });
        Object.assign(T[Ue], { flat: false, rangeTo: true });
      } else {
        let Ue = de + y.value - 1;
        for (let rt = de; rt <= Ue; rt++)
          Object.assign(T[rt], { range: qe.range, unelevated: true, color: S.value, textColor: q.value });
      }
    }), Te.value !== void 0) {
      let qe = de + Te.value.from - 1, Ue = de + Te.value.to - 1;
      for (let rt = qe; rt <= Ue; rt++)
        T[rt].color = S.value, T[rt].editRange = true;
      Te.value.includeFrom === true && (T[qe].editRangeFrom = true), Te.value.includeTo === true && (T[Ue].editRangeTo = true);
    }
    g.value.year === h2.value.year && g.value.month === h2.value.month && (T[de + h2.value.day - 1].today = true);
    let Je = T.length % 7;
    if (Je > 0) {
      let qe = 7 - Je;
      for (let Ue = 1; Ue <= qe; Ue++)
        T.push({ i: Ue, fill: true });
    }
    return T.forEach((qe) => {
      let Ue = "q-date__calendar-item ";
      qe.fill === true ? Ue += "q-date__calendar-item--fill" : (Ue += `q-date__calendar-item--${qe.in === true ? "in" : "out"}`, qe.range !== void 0 && (Ue += ` q-date__range${qe.rangeTo === true ? "-to" : qe.rangeFrom === true ? "-from" : ""}`), qe.editRange === true && (Ue += ` q-date__edit-range${qe.editRangeFrom === true ? "-from" : ""}${qe.editRangeTo === true ? "-to" : ""}`), (qe.range !== void 0 || qe.editRange === true) && (Ue += ` text-${qe.color}`)), qe.classes = Ue;
    }), T;
  }), se = computed(() => e.disable === true ? { "aria-disabled": "true" } : {});
  watch(() => e.modelValue, (T) => {
    if (m === T)
      m = 0;
    else {
      let z = dt(x.value, p.value);
      Xe(z.year, z.month, z);
    }
  }), watch(C, () => {
    v.value !== null && r.$el.contains(document.activeElement) === true && v.value.focus();
  }), watch(() => g.value.year + "|" + g.value.month, () => {
    o("navigation", { year: g.value.year, month: g.value.month });
  }), watch(w, (T) => {
    J(T, p.value, "mask"), x.value = T;
  }), watch(b, (T) => {
    J(x.value, T, "locale"), p.value = T;
  });
  function X() {
    let { year: T, month: z, day: G } = h2.value, ce = { ...g.value, year: T, month: z, day: G }, de = ue.value[ur(ce)];
    (de === void 0 || de.includes(ce.day) === false) && qn(ce), Ae(ce.year, ce.month);
  }
  function fe(T) {
    Hm(T) === true && (C.value = T);
  }
  function Me(T, z) {
    ["month", "year"].includes(T) && (T === "month" ? re : K)(z === true ? -1 : 1);
  }
  function Ae(T, z) {
    C.value = "Calendar", Xe(T, z);
  }
  function Re(T, z) {
    if (e.range === false || !T) {
      B.value = null;
      return;
    }
    let G = Object.assign({ ...g.value }, T), ce = z !== void 0 ? Object.assign({ ...g.value }, z) : G;
    B.value = { init: G, initHash: No(G), final: ce, finalHash: No(ce) }, Ae(G.year, G.month);
  }
  function nt() {
    return e.calendar === "persian" ? "YYYY/MM/DD" : e.mask;
  }
  function ct(T, z, G) {
    return lr(T, z, G, e.calendar, { hour: 0, minute: 0, second: 0, millisecond: 0 });
  }
  function dt(T, z) {
    let G = Array.isArray(e.modelValue) === true ? e.modelValue : e.modelValue ? [e.modelValue] : [];
    if (G.length === 0)
      return Z();
    let ce = G[G.length - 1], de = ct(ce.from !== void 0 ? ce.from : ce, T, z);
    return de.dateHash === null ? Z() : de;
  }
  function Z() {
    let T, z;
    if (e.defaultYearMonth !== void 0) {
      let G = e.defaultYearMonth.split("/");
      T = parseInt(G[0], 10), z = parseInt(G[1], 10);
    } else {
      let G = h2.value !== void 0 ? h2.value : u();
      T = G.year, z = G.month;
    }
    return { year: T, month: z, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0, dateHash: T + "/" + Ze(z) + "/01" };
  }
  function re(T) {
    let z = g.value.year, G = Number(g.value.month) + T;
    G === 13 ? (G = 1, z++) : G === 0 && (G = 12, z--), Xe(z, G), D.value === true && ht("month");
  }
  function K(T) {
    let z = Number(g.value.year) + T;
    Xe(z, g.value.month), D.value === true && ht("year");
  }
  function oe(T) {
    Xe(T, g.value.month), C.value = e.defaultView === "Years" ? "Months" : "Calendar", D.value === true && ht("year");
  }
  function we(T) {
    Xe(g.value.year, T), C.value = "Calendar", D.value === true && ht("month");
  }
  function Ve(T, z) {
    let G = ue.value[z];
    (G !== void 0 && G.includes(T.day) === true ? Zo : qn)(T);
  }
  function ye(T) {
    return { year: T.year, month: T.month, day: T.day };
  }
  function Xe(T, z, G) {
    if (te.value !== null && T <= te.value.year && ((z < te.value.month || T < te.value.year) && (z = te.value.month), T = te.value.year), le.value !== null && T >= le.value.year && ((z > le.value.month || T > le.value.year) && (z = le.value.month), T = le.value.year), G !== void 0) {
      let { hour: de, minute: Je, second: qe, millisecond: Ue, timezoneOffset: rt, timeHash: To } = G;
      Object.assign(g.value, { hour: de, minute: Je, second: qe, millisecond: Ue, timezoneOffset: rt, timeHash: To });
    }
    let ce = T + "/" + Ze(z) + "/01";
    ce !== g.value.dateHash && ($.value = g.value.dateHash < ce == (n.lang.rtl !== true) ? "left" : "right", T !== g.value.year && (F.value = $.value), nextTick(() => {
      A.value = T - T % Dr - (T < 0 ? Dr : 0), Object.assign(g.value, { year: T, month: z, day: 1, dateHash: ce });
    }));
  }
  function mt(T, z, G) {
    let ce = T !== null && T.length === 1 && e.multiple === false ? T[0] : T;
    m = ce;
    let { reason: de, details: Je } = no(z, G);
    o("update:modelValue", ce, de, Je);
  }
  function ht(T) {
    let z = k.value[0] !== void 0 && k.value[0].dateHash !== null ? { ...k.value[0] } : { ...g.value };
    nextTick(() => {
      z.year = g.value.year, z.month = g.value.month;
      let G = e.calendar !== "persian" ? new Date(z.year, z.month, 0).getDate() : Zi(z.year, z.month);
      z.day = Math.min(Math.max(1, z.day), G);
      let ce = qo(z);
      m = ce;
      let { details: de } = no("", z);
      o("update:modelValue", ce, T, de);
    });
  }
  function no(T, z) {
    return z.from !== void 0 ? { reason: `${T}-range`, details: { ...ye(z.target), from: ye(z.from), to: ye(z.to) } } : { reason: `${T}-day`, details: ye(z) };
  }
  function qo(T, z, G) {
    return T.from !== void 0 ? { from: ae.value(T.from, z, G), to: ae.value(T.to, z, G) } : ae.value(T, z, G);
  }
  function qn(T) {
    let z;
    if (e.multiple === true)
      if (T.from !== void 0) {
        let G = No(T.from), ce = No(T.to), de = k.value.filter((qe) => qe.dateHash < G || qe.dateHash > ce), Je = I.value.filter(({ from: qe, to: Ue }) => Ue.dateHash < G || qe.dateHash > ce);
        z = de.concat(Je).concat(T).map((qe) => qo(qe));
      } else {
        let G = j.value.slice();
        G.push(qo(T)), z = G;
      }
    else
      z = qo(T);
    mt(z, "add", T);
  }
  function Zo(T) {
    if (e.noUnset === true)
      return;
    let z = null;
    if (e.multiple === true && Array.isArray(e.modelValue) === true) {
      let G = qo(T);
      T.from !== void 0 ? z = e.modelValue.filter((ce) => ce.from !== void 0 ? ce.from !== G.from && ce.to !== G.to : true) : z = e.modelValue.filter((ce) => ce !== G), z.length === 0 && (z = null);
    }
    mt(z, "remove", T);
  }
  function J(T, z, G) {
    let ce = k.value.concat(I.value).map((de) => qo(de, T, z)).filter((de) => de.from !== void 0 ? de.from.dateHash !== null && de.to.dateHash !== null : de.dateHash !== null);
    o("update:modelValue", (e.multiple === true ? ce : ce[0]) || null, G);
  }
  function me() {
    if (e.minimal !== true)
      return h("div", { class: "q-date__header " + s.value }, [h("div", { class: "relative-position" }, [h(Transition, { name: "q-transition--fade" }, () => h("div", { key: "h-yr-" + Y.value, class: "q-date__header-subtitle q-date__header-link " + (C.value === "Years" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: l.value, ...a("vY", { onClick() {
        C.value = "Years";
      }, onKeyup(T) {
        T.keyCode === 13 && (C.value = "Years");
      } }) }, [Y.value]))]), h("div", { class: "q-date__header-title relative-position flex no-wrap" }, [h("div", { class: "relative-position col" }, [h(Transition, { name: "q-transition--fade" }, () => h("div", { key: "h-sub" + _.value, class: "q-date__header-title-label q-date__header-link " + (C.value === "Calendar" ? "q-date__header-link--active" : "cursor-pointer"), tabindex: l.value, ...a("vC", { onClick() {
        C.value = "Calendar";
      }, onKeyup(T) {
        T.keyCode === 13 && (C.value = "Calendar");
      } }) }, [_.value]))]), e.todayBtn === true ? h(Be, { class: "q-date__header-today self-start", icon: n.iconSet.datetime.today, flat: true, size: "sm", round: true, tabindex: l.value, onClick: X }) : null])]);
  }
  function ke({ label: T, type: z, key: G, dir: ce, goTo: de, boundaries: Je, cls: qe }) {
    return [h("div", { class: "row items-center q-date__arrow" }, [h(Be, { round: true, dense: true, size: "sm", flat: true, icon: Q.value[0], tabindex: l.value, disable: Je.prev === false, ...a("go-#" + z, { onClick() {
      de(-1);
    } }) })]), h("div", { class: "relative-position overflow-hidden flex flex-center" + qe }, [h(Transition, { name: "q-transition--jump-" + ce }, () => h("div", { key: G }, [h(Be, { flat: true, dense: true, noCaps: true, label: T, tabindex: l.value, ...a("view#" + z, { onClick: () => {
      C.value = z;
    } }) })]))]), h("div", { class: "row items-center q-date__arrow" }, [h(Be, { round: true, dense: true, size: "sm", flat: true, icon: Q.value[1], tabindex: l.value, disable: Je.next === false, ...a("go+#" + z, { onClick() {
      de(1);
    } }) })])];
  }
  let $e = { Calendar: () => [h("div", { key: "calendar-view", class: "q-date__view q-date__calendar" }, [h("div", { class: "q-date__navigation row items-center no-wrap" }, ke({ label: p.value.months[g.value.month - 1], type: "Months", key: g.value.month, dir: $.value, goTo: re, boundaries: ve.value.month, cls: " col" }).concat(ke({ label: g.value.year, type: "Years", key: g.value.year, dir: F.value, goTo: K, boundaries: ve.value.year, cls: "" }))), h("div", { class: "q-date__calendar-weekdays row items-center no-wrap" }, N.value.map((T) => h("div", { class: "q-date__calendar-item" }, [h("div", T)]))), h("div", { class: "q-date__calendar-days-container relative-position overflow-hidden" }, [h(Transition, { name: "q-transition--slide-" + $.value }, () => h("div", { key: ge.value, class: "q-date__calendar-days fit" }, ie.value.map((T) => h("div", { class: T.classes }, [T.in === true ? h(Be, { class: T.today === true ? "q-date__today" : "", dense: true, flat: T.flat, unelevated: T.unelevated, color: T.color, textColor: T.textColor, label: T.i, tabindex: l.value, ...a("day#" + T.i, { onClick: () => {
    Ie(T.i);
  }, onMouseover: () => {
    pt(T.i);
  } }) }, T.event !== false ? () => h("div", { class: "q-date__event bg-" + T.event }) : null) : h("div", "" + T.i)]))))])])], Months() {
    let T = g.value.year === h2.value.year, z = (ce) => te.value !== null && g.value.year === te.value.year && te.value.month > ce || le.value !== null && g.value.year === le.value.year && le.value.month < ce, G = p.value.monthsShort.map((ce, de) => {
      let Je = g.value.month === de + 1;
      return h("div", { class: "q-date__months-item flex flex-center" }, [h(Be, { class: T === true && h2.value.month === de + 1 ? "q-date__today" : null, flat: Je !== true, label: ce, unelevated: Je, color: Je === true ? S.value : null, textColor: Je === true ? q.value : null, tabindex: l.value, disable: z(de + 1), ...a("month#" + de, { onClick: () => {
        we(de + 1);
      } }) })]);
    });
    return e.yearsInMonthView === true && G.unshift(h("div", { class: "row no-wrap full-width" }, [ke({ label: g.value.year, type: "Years", key: g.value.year, dir: F.value, goTo: K, boundaries: ve.value.year, cls: " col" })])), h("div", { key: "months-view", class: "q-date__view q-date__months flex flex-center" }, G);
  }, Years() {
    let T = A.value, z = T + Dr, G = [], ce = (de) => te.value !== null && te.value.year > de || le.value !== null && le.value.year < de;
    for (let de = T; de <= z; de++) {
      let Je = g.value.year === de;
      G.push(h("div", { class: "q-date__years-item flex flex-center" }, [h(Be, { key: "yr" + de, class: h2.value.year === de ? "q-date__today" : null, flat: !Je, label: de, dense: true, unelevated: Je, color: Je === true ? S.value : null, textColor: Je === true ? q.value : null, tabindex: l.value, disable: ce(de), ...a("yr#" + de, { onClick: () => {
        oe(de);
      } }) })]));
    }
    return h("div", { class: "q-date__view q-date__years flex flex-center" }, [h("div", { class: "col-auto" }, [h(Be, { round: true, dense: true, flat: true, icon: Q.value[0], tabindex: l.value, disable: ce(T), ...a("y-", { onClick: () => {
      A.value -= Dr;
    } }) })]), h("div", { class: "q-date__years-content col self-stretch row items-center" }, G), h("div", { class: "col-auto" }, [h(Be, { round: true, dense: true, flat: true, icon: Q.value[1], tabindex: l.value, disable: ce(z), ...a("y+", { onClick: () => {
      A.value += Dr;
    } }) })])]);
  } };
  function Ie(T) {
    let z = { ...g.value, day: T };
    if (e.range === false) {
      Ve(z, ge.value);
      return;
    }
    if (B.value === null) {
      let G = ie.value.find((de) => de.fill !== true && de.i === T);
      if (e.noUnset !== true && G.range !== void 0) {
        Zo({ target: z, from: G.range.from, to: G.range.to });
        return;
      }
      if (G.selected === true) {
        Zo(z);
        return;
      }
      let ce = No(z);
      B.value = { init: z, initHash: ce, final: z, finalHash: ce }, o("rangeStart", ye(z));
    } else {
      let G = B.value.initHash, ce = No(z), de = G <= ce ? { from: B.value.init, to: z } : { from: z, to: B.value.init };
      B.value = null, qn(G === ce ? z : { target: z, ...de }), o("rangeEnd", { from: ye(de.from), to: ye(de.to) });
    }
  }
  function pt(T) {
    if (B.value !== null) {
      let z = { ...g.value, day: T };
      Object.assign(B.value, { final: z, finalHash: No(z) });
    }
  }
  return Object.assign(r, { setToday: X, setView: fe, offsetCalendar: Me, setCalendarTo: Ae, setEditingRange: Re }), () => {
    let T = [h("div", { class: "q-date__content col relative-position" }, [h(Transition, { name: "q-transition--fade" }, $e[C.value])])], z = ee(t.default);
    return z !== void 0 && T.push(h("div", { class: "q-date__actions" }, z)), e.name !== void 0 && e.disable !== true && d(T, "push"), h("div", { class: P.value, ...se.value }, [me(), h("div", { ref: v, class: "q-date__main col column", tabindex: -1 }, T)]);
  };
} });
function pu(e, t, o) {
  let r;
  function n() {
    r !== void 0 && (jn.remove(r), r = void 0);
  }
  return onBeforeUnmount(() => {
    e.value === true && n();
  }), { removeFromHistory: n, addToHistory() {
    r = { condition: () => o.value === true, handler: t }, jn.add(r);
  } };
}
var Ua = 0;
var zc;
var Dc;
var Ka;
var Oc = false;
var jm;
var Um;
var Km;
var Or = null;
function Rx(e) {
  Px(e) && Se(e);
}
function Px(e) {
  if (e.target === document.body || e.target.classList.contains("q-layout__backdrop"))
    return true;
  let t = Us(e), o = e.shiftKey && !e.deltaX, r = !o && Math.abs(e.deltaX) <= Math.abs(e.deltaY), n = o || r ? e.deltaY : e.deltaX;
  for (let i = 0; i < t.length; i++) {
    let a = t[i];
    if (mc(a, r))
      return r ? n < 0 && a.scrollTop === 0 ? true : n > 0 && a.scrollTop + a.clientHeight === a.scrollHeight : n < 0 && a.scrollLeft === 0 ? true : n > 0 && a.scrollLeft + a.clientWidth === a.scrollWidth;
  }
  return true;
}
function Wm(e) {
  e.target === document && (document.scrollingElement.scrollTop = document.scrollingElement.scrollTop);
}
function bu(e) {
  Oc !== true && (Oc = true, requestAnimationFrame(() => {
    Oc = false;
    let { height: t } = e.target, { clientHeight: o, scrollTop: r } = document.scrollingElement;
    (Ka === void 0 || t !== window.innerHeight) && (Ka = o - t, document.scrollingElement.scrollTop = r), r > Ka && (document.scrollingElement.scrollTop -= Math.ceil((r - Ka) / 8));
  }));
}
function Ym(e) {
  let t = document.body, o = window.visualViewport !== void 0;
  if (e === "add") {
    let { overflowY: r, overflowX: n } = window.getComputedStyle(t);
    zc = Zn(window), Dc = fo(window), jm = t.style.left, Um = t.style.top, Km = window.location.href, t.style.left = `-${zc}px`, t.style.top = `-${Dc}px`, n !== "hidden" && (n === "scroll" || t.scrollWidth > window.innerWidth) && t.classList.add("q-body--force-scrollbar-x"), r !== "hidden" && (r === "scroll" || t.scrollHeight > window.innerHeight) && t.classList.add("q-body--force-scrollbar-y"), t.classList.add("q-body--prevent-scroll"), document.qScrollPrevented = true, _e.is.ios === true && (o === true ? (window.scrollTo(0, 0), window.visualViewport.addEventListener("resize", bu, Ye.passiveCapture), window.visualViewport.addEventListener("scroll", bu, Ye.passiveCapture), window.scrollTo(0, 0)) : window.addEventListener("scroll", Wm, Ye.passiveCapture));
  }
  _e.is.desktop === true && _e.is.mac === true && window[`${e}EventListener`]("wheel", Rx, Ye.notPassive), e === "remove" && (_e.is.ios === true && (o === true ? (window.visualViewport.removeEventListener("resize", bu, Ye.passiveCapture), window.visualViewport.removeEventListener("scroll", bu, Ye.passiveCapture)) : window.removeEventListener("scroll", Wm, Ye.passiveCapture)), t.classList.remove("q-body--prevent-scroll"), t.classList.remove("q-body--force-scrollbar-x"), t.classList.remove("q-body--force-scrollbar-y"), document.qScrollPrevented = false, t.style.left = jm, t.style.top = Um, window.location.href === Km && window.scrollTo(zc, Dc), Ka = void 0);
}
function Wa(e) {
  let t = "add";
  if (e === true) {
    if (Ua++, Or !== null) {
      clearTimeout(Or), Or = null;
      return;
    }
    if (Ua > 1)
      return;
  } else {
    if (Ua === 0 || (Ua--, Ua > 0))
      return;
    if (t = "remove", _e.is.ios === true && _e.is.nativeMobile === true) {
      Or !== null && clearTimeout(Or), Or = setTimeout(() => {
        Ym(t), Or = null;
      }, 100);
      return;
    }
  }
  Ym(t);
}
function yu() {
  let e;
  return { preventBodyScroll(t) {
    t !== e && (e !== void 0 || t === true) && (e = t, Wa(t));
  } };
}
var Su = 0;
var Ex = { standard: "fixed-full flex-center", top: "fixed-top justify-center", bottom: "fixed-bottom justify-center", right: "fixed-right items-center", left: "fixed-left items-center" };
var Zm = { standard: ["scale", "scale"], top: ["slide-down", "slide-up"], bottom: ["slide-up", "slide-down"], right: ["slide-left", "slide-right"], left: ["slide-right", "slide-left"] };
var hn = M({ name: "QDialog", inheritAttrs: false, props: { ...Ao, ...an, transitionShow: String, transitionHide: String, persistent: Boolean, autoClose: Boolean, allowFocusOutside: Boolean, noEscDismiss: Boolean, noBackdropDismiss: Boolean, noRouteDismiss: Boolean, noRefocus: Boolean, noFocus: Boolean, noShake: Boolean, seamless: Boolean, maximized: Boolean, fullWidth: Boolean, fullHeight: Boolean, square: Boolean, position: { type: String, default: "standard", validator: (e) => e === "standard" || ["top", "bottom", "left", "right"].includes(e) } }, emits: [...$o, "shake", "click", "escapeKey"], setup(e, { slots: t, emit: o, attrs: r }) {
  let n = getCurrentInstance(), i = ref(null), a = ref(false), l = ref(false), s = null, c = null, u, m, f = computed(() => e.persistent !== true && e.noRouteDismiss !== true && e.seamless !== true), { preventBodyScroll: d } = yu(), { registerTimeout: v } = co(), { registerTick: x, removeTick: p } = ln(), { transitionProps: w, transitionStyle: b } = Gn(e, () => Zm[e.position][0], () => Zm[e.position][1]), { showPortal: h2, hidePortal: g, portalIsAccessible: C, renderPortal: R } = Si(n, i, O, "dialog"), { hide: $ } = Eo({ showing: a, hideOnRouteChange: f, handleShow: q, handleHide: D, processOnMount: true }), { addToHistory: F, removeFromHistory: E } = pu(a, $, f), A = computed(() => `q-dialog__inner flex no-pointer-events q-dialog__inner--${e.maximized === true ? "maximized" : "minimized"} q-dialog__inner--${e.position} ${Ex[e.position]}` + (l.value === true ? " q-dialog__inner--animating" : "") + (e.fullWidth === true ? " q-dialog__inner--fullwidth" : "") + (e.fullHeight === true ? " q-dialog__inner--fullheight" : "") + (e.square === true ? " q-dialog__inner--square" : "")), B = computed(() => a.value === true && e.seamless !== true), P = computed(() => e.autoClose === true ? { onClick: V } : {}), S = computed(() => [`q-dialog fullscreen no-pointer-events q-dialog--${B.value === true ? "modal" : "seamless"}`, r.class]);
  watch(() => e.maximized, (Y) => {
    a.value === true && ae(Y);
  }), watch(B, (Y) => {
    d(Y), Y === true ? (wi(H), Vl(I)) : (Er(H), Ci(I));
  });
  function q(Y) {
    F(), c = e.noRefocus === false && document.activeElement !== null ? document.activeElement : null, ae(e.maximized), h2(), l.value = true, e.noFocus !== true ? (document.activeElement !== null && document.activeElement.blur(), x(j)) : p(), v(() => {
      if (n.proxy.$q.platform.is.ios === true) {
        if (e.seamless !== true && document.activeElement) {
          let { top: Q, bottom: ne } = document.activeElement.getBoundingClientRect(), { innerHeight: N } = window, y = window.visualViewport !== void 0 ? window.visualViewport.height : N;
          Q > 0 && ne > y / 2 && (document.scrollingElement.scrollTop = Math.min(document.scrollingElement.scrollHeight - y, ne >= N ? 1 / 0 : Math.ceil(document.scrollingElement.scrollTop + ne - y / 2))), document.activeElement.scrollIntoView();
        }
        m = true, i.value.click(), m = false;
      }
      h2(true), l.value = false, o("show", Y);
    }, e.transitionDuration);
  }
  function D(Y) {
    p(), E(), W(true), l.value = true, g(), c !== null && (((Y && Y.type.indexOf("key") === 0 ? c.closest('[tabindex]:not([tabindex^="-"])') : void 0) || c).focus(), c = null), v(() => {
      g(true), l.value = false, o("hide", Y);
    }, e.transitionDuration);
  }
  function j(Y) {
    Bo(() => {
      let Q = i.value;
      Q === null || Q.contains(document.activeElement) === true || (Q = (Y !== "" ? Q.querySelector(Y) : null) || Q.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || Q.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || Q.querySelector("[autofocus], [data-autofocus]") || Q, Q.focus({ preventScroll: true }));
    });
  }
  function k(Y) {
    Y && typeof Y.focus == "function" ? Y.focus({ preventScroll: true }) : j(), o("shake");
    let Q = i.value;
    Q !== null && (Q.classList.remove("q-animate--scale"), Q.classList.add("q-animate--scale"), s !== null && clearTimeout(s), s = setTimeout(() => {
      s = null, i.value !== null && (Q.classList.remove("q-animate--scale"), j());
    }, 170));
  }
  function I() {
    e.seamless !== true && (e.persistent === true || e.noEscDismiss === true ? e.maximized !== true && e.noShake !== true && k() : (o("escapeKey"), $()));
  }
  function W(Y) {
    s !== null && (clearTimeout(s), s = null), (Y === true || a.value === true) && (ae(false), e.seamless !== true && (d(false), Er(H), Ci(I))), Y !== true && (c = null);
  }
  function ae(Y) {
    Y === true ? u !== true && (Su < 1 && document.body.classList.add("q-body--dialog"), Su++, u = true) : u === true && (Su < 2 && document.body.classList.remove("q-body--dialog"), Su--, u = false);
  }
  function V(Y) {
    m !== true && ($(Y), o("click", Y));
  }
  function _(Y) {
    e.persistent !== true && e.noBackdropDismiss !== true ? $(Y) : e.noShake !== true && k();
  }
  function H(Y) {
    e.allowFocusOutside !== true && C.value === true && $l(i.value, Y.target) !== true && j('[tabindex]:not([tabindex="-1"])');
  }
  Object.assign(n.proxy, { focus: j, shake: k, __updateRefocusTarget(Y) {
    c = Y || null;
  } }), onBeforeUnmount(W);
  function O() {
    return h("div", { role: "dialog", "aria-modal": B.value === true ? "true" : "false", ...r, class: S.value }, [h(Transition, { name: "q-transition--fade", appear: true }, () => B.value === true ? h("div", { class: "q-dialog__backdrop fixed-full", style: b.value, "aria-hidden": "true", tabindex: -1, onClick: _ }) : null), h(Transition, w.value, () => a.value === true ? h("div", { ref: i, class: A.value, style: b.value, tabindex: -1, ...P.value }, ee(t.default)) : null)]);
  }
  return R;
} });
var ev = 150;
var tv = M({ name: "QDrawer", inheritAttrs: false, props: { ...Ao, ...pe, side: { type: String, default: "left", validator: (e) => ["left", "right"].includes(e) }, width: { type: Number, default: 300 }, mini: Boolean, miniToOverlay: Boolean, miniWidth: { type: Number, default: 57 }, noMiniAnimation: Boolean, breakpoint: { type: Number, default: 1023 }, showIfAbove: Boolean, behavior: { type: String, validator: (e) => ["default", "desktop", "mobile"].includes(e), default: "default" }, bordered: Boolean, elevated: Boolean, overlay: Boolean, persistent: Boolean, noSwipeOpen: Boolean, noSwipeClose: Boolean, noSwipeBackdrop: Boolean }, emits: [...$o, "onLayout", "miniState"], setup(e, { slots: t, emit: o, attrs: r }) {
  let n = getCurrentInstance(), { proxy: { $q: i } } = n, a = be(e, i), { preventBodyScroll: l } = yu(), { registerTimeout: s, removeTimeout: c } = co(), u = inject(uo, We);
  if (u === We)
    return console.error("QDrawer needs to be child of QLayout"), We;
  let m, f = null, d, v = ref(e.behavior === "mobile" || e.behavior !== "desktop" && u.totalWidth.value <= e.breakpoint), x = computed(() => e.mini === true && v.value !== true), p = computed(() => x.value === true ? e.miniWidth : e.width), w = ref(e.showIfAbove === true && v.value === false ? true : e.modelValue === true), b = computed(() => e.persistent !== true && (v.value === true || ae.value === true));
  function h2(X, fe) {
    if ($(), X !== false && u.animate(), ve(0), v.value === true) {
      let Me = u.instances[j.value];
      Me !== void 0 && Me.belowBreakpoint === true && Me.hide(false), ue(1), u.isContainer.value !== true && l(true);
    } else
      ue(0), X !== false && Ee(false);
    s(() => {
      X !== false && Ee(true), fe !== true && o("show", X);
    }, ev);
  }
  function g(X, fe) {
    F(), X !== false && u.animate(), ue(0), ve(B.value * p.value), tt(), fe !== true ? s(() => {
      o("hide", X);
    }, ev) : c();
  }
  let { show: C, hide: R } = Eo({ showing: w, hideOnRouteChange: b, handleShow: h2, handleHide: g }), { addToHistory: $, removeFromHistory: F } = pu(w, R, b), E = { belowBreakpoint: v, hide: R }, A = computed(() => e.side === "right"), B = computed(() => (i.lang.rtl === true ? -1 : 1) * (A.value === true ? 1 : -1)), P = ref(0), S = ref(false), q = ref(false), D = ref(p.value * B.value), j = computed(() => A.value === true ? "left" : "right"), k = computed(() => w.value === true && v.value === false && e.overlay === false ? e.miniToOverlay === true ? e.miniWidth : p.value : 0), I = computed(() => e.overlay === true || e.miniToOverlay === true || u.view.value.indexOf(A.value ? "R" : "L") !== -1 || i.platform.is.ios === true && u.isContainer.value === true), W = computed(() => e.overlay === false && w.value === true && v.value === false), ae = computed(() => e.overlay === true && w.value === true && v.value === false), V = computed(() => "fullscreen q-drawer__backdrop" + (w.value === false && S.value === false ? " hidden" : "")), _ = computed(() => ({ backgroundColor: `rgba(0,0,0,${P.value * 0.4})` })), H = computed(() => A.value === true ? u.rows.value.top[2] === "r" : u.rows.value.top[0] === "l"), O = computed(() => A.value === true ? u.rows.value.bottom[2] === "r" : u.rows.value.bottom[0] === "l"), Y = computed(() => {
    let X = {};
    return u.header.space === true && H.value === false && (I.value === true ? X.top = `${u.header.offset}px` : u.header.space === true && (X.top = `${u.header.size}px`)), u.footer.space === true && O.value === false && (I.value === true ? X.bottom = `${u.footer.offset}px` : u.footer.space === true && (X.bottom = `${u.footer.size}px`)), X;
  }), Q = computed(() => {
    let X = { width: `${p.value}px`, transform: `translateX(${D.value}px)` };
    return v.value === true ? X : Object.assign(X, Y.value);
  }), ne = computed(() => "q-drawer__content fit " + (u.isContainer.value !== true ? "scroll" : "overflow-auto")), N = computed(() => `q-drawer q-drawer--${e.side}` + (q.value === true ? " q-drawer--mini-animate" : "") + (e.bordered === true ? " q-drawer--bordered" : "") + (a.value === true ? " q-drawer--dark q-dark" : "") + (S.value === true ? " no-transition" : w.value === true ? "" : " q-layout--prevent-focus") + (v.value === true ? " fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding" : ` q-drawer--${x.value === true ? "mini" : "standard"}` + (I.value === true || W.value !== true ? " fixed" : "") + (e.overlay === true || e.miniToOverlay === true ? " q-drawer--on-top" : "") + (H.value === true ? " q-drawer--top-padding" : ""))), y = computed(() => {
    let X = i.lang.rtl === true ? e.side : j.value;
    return [[qt, ge, void 0, { [X]: true, mouse: true }]];
  }), U = computed(() => {
    let X = i.lang.rtl === true ? j.value : e.side;
    return [[qt, Fe, void 0, { [X]: true, mouse: true }]];
  }), te = computed(() => {
    let X = i.lang.rtl === true ? j.value : e.side;
    return [[qt, Fe, void 0, { [X]: true, mouse: true, mouseAllDir: true }]];
  });
  function le() {
    ie(v, e.behavior === "mobile" || e.behavior !== "desktop" && u.totalWidth.value <= e.breakpoint);
  }
  watch(v, (X) => {
    X === true ? (m = w.value, w.value === true && R(false)) : e.overlay === false && e.behavior !== "mobile" && m !== false && (w.value === true ? (ve(0), ue(0), tt()) : C(false));
  }), watch(() => e.side, (X, fe) => {
    u.instances[fe] === E && (u.instances[fe] = void 0, u[fe].space = false, u[fe].offset = 0), u.instances[X] = E, u[X].size = p.value, u[X].space = W.value, u[X].offset = k.value;
  }), watch(u.totalWidth, () => {
    (u.isContainer.value === true || document.qScrollPrevented !== true) && le();
  }), watch(() => e.behavior + e.breakpoint, le), watch(u.isContainer, (X) => {
    w.value === true && l(X !== true), X === true && le();
  }), watch(u.scrollbarWidth, () => {
    ve(w.value === true ? 0 : void 0);
  }), watch(k, (X) => {
    He("offset", X);
  }), watch(W, (X) => {
    o("onLayout", X), He("space", X);
  }), watch(A, () => {
    ve();
  }), watch(p, (X) => {
    ve(), se(e.miniToOverlay, X);
  }), watch(() => e.miniToOverlay, (X) => {
    se(X, p.value);
  }), watch(() => i.lang.rtl, () => {
    ve();
  }), watch(() => e.mini, () => {
    e.noMiniAnimation || e.modelValue === true && (Te(), u.animate());
  }), watch(x, (X) => {
    o("miniState", X);
  });
  function ve(X) {
    X === void 0 ? nextTick(() => {
      X = w.value === true ? 0 : p.value, ve(B.value * X);
    }) : (u.isContainer.value === true && A.value === true && (v.value === true || Math.abs(X) === p.value) && (X += B.value * u.scrollbarWidth.value), D.value = X);
  }
  function ue(X) {
    P.value = X;
  }
  function Ee(X) {
    let fe = X === true ? "remove" : u.isContainer.value !== true ? "add" : "";
    fe !== "" && document.body.classList[fe]("q-body--drawer-toggle");
  }
  function Te() {
    f !== null && clearTimeout(f), n.proxy && n.proxy.$el && n.proxy.$el.classList.add("q-drawer--mini-animate"), q.value = true, f = setTimeout(() => {
      f = null, q.value = false, n && n.proxy && n.proxy.$el && n.proxy.$el.classList.remove("q-drawer--mini-animate");
    }, 150);
  }
  function ge(X) {
    if (w.value !== false)
      return;
    let fe = p.value, Me = Ge(X.distance.x, 0, fe);
    if (X.isFinal === true) {
      Me >= Math.min(75, fe) === true ? C() : (u.animate(), ue(0), ve(B.value * fe)), S.value = false;
      return;
    }
    ve((i.lang.rtl === true ? A.value !== true : A.value) ? Math.max(fe - Me, 0) : Math.min(0, Me - fe)), ue(Ge(Me / fe, 0, 1)), X.isFirst === true && (S.value = true);
  }
  function Fe(X) {
    if (w.value !== true)
      return;
    let fe = p.value, Me = X.direction === e.side, Ae = (i.lang.rtl === true ? Me !== true : Me) ? Ge(X.distance.x, 0, fe) : 0;
    if (X.isFinal === true) {
      Math.abs(Ae) < Math.min(75, fe) === true ? (u.animate(), ue(1), ve(0)) : R(), S.value = false;
      return;
    }
    ve(B.value * Ae), ue(Ge(1 - Ae / fe, 0, 1)), X.isFirst === true && (S.value = true);
  }
  function tt() {
    l(false), Ee(true);
  }
  function He(X, fe) {
    u.update(e.side, X, fe);
  }
  function ie(X, fe) {
    X.value !== fe && (X.value = fe);
  }
  function se(X, fe) {
    He("size", X === true ? e.miniWidth : fe);
  }
  return u.instances[e.side] = E, se(e.miniToOverlay, p.value), He("space", W.value), He("offset", k.value), e.showIfAbove === true && e.modelValue !== true && w.value === true && e["onUpdate:modelValue"] !== void 0 && o("update:modelValue", true), onMounted(() => {
    o("onLayout", W.value), o("miniState", x.value), m = e.showIfAbove === true;
    let X = () => {
      (w.value === true ? h2 : g)(false, true);
    };
    if (u.totalWidth.value !== 0) {
      nextTick(X);
      return;
    }
    d = watch(u.totalWidth, () => {
      d(), d = void 0, w.value === false && e.showIfAbove === true && v.value === false ? C(false) : X();
    });
  }), onBeforeUnmount(() => {
    d !== void 0 && d(), f !== null && (clearTimeout(f), f = null), w.value === true && tt(), u.instances[e.side] === E && (u.instances[e.side] = void 0, He("size", 0), He("offset", 0), He("space", false));
  }), () => {
    let X = [];
    v.value === true && (e.noSwipeOpen === false && X.push(withDirectives(h("div", { key: "open", class: `q-drawer__opener fixed-${e.side}`, "aria-hidden": "true" }), y.value)), X.push(kt("div", { ref: "backdrop", class: V.value, style: _.value, "aria-hidden": "true", onClick: R }, void 0, "backdrop", e.noSwipeBackdrop !== true && w.value === true, () => te.value)));
    let fe = x.value === true && t.mini !== void 0, Me = [h("div", { ...r, key: "" + fe, class: [ne.value, r.class] }, fe === true ? t.mini() : ee(t.default))];
    return e.elevated === true && w.value === true && Me.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), X.push(kt("aside", { ref: "content", class: N.value, style: Q.value }, Me, "contentclose", e.noSwipeClose !== true && v.value === true, () => U.value)), h("div", { class: "q-drawer-container" }, X);
  };
} });
function ov(e, t) {
  if (t && e === t)
    return null;
  let o = e.nodeName.toLowerCase();
  if (["div", "li", "ul", "ol", "blockquote"].includes(o) === true)
    return e;
  let r = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle, n = r.display;
  return n === "block" || n === "table" ? e : ov(e.parentNode);
}
function Nc(e, t, o) {
  return !e || e === document.body ? false : o === true && e === t || (t === document ? document.body : t).contains(e.parentNode);
}
function nv(e, t, o) {
  if (o || (o = document.createRange(), o.selectNode(e), o.setStart(e, 0)), t.count === 0)
    o.setEnd(e, t.count);
  else if (t.count > 0)
    if (e.nodeType === Node.TEXT_NODE)
      e.textContent.length < t.count ? t.count -= e.textContent.length : (o.setEnd(e, t.count), t.count = 0);
    else
      for (let r = 0; t.count !== 0 && r < e.childNodes.length; r++)
        o = nv(e.childNodes[r], t, o);
  return o;
}
var Dx = /^https?:\/\//;
var Ga = class {
  constructor(t, o) {
    this.el = t, this.eVm = o, this._range = null;
  }
  get selection() {
    if (this.el) {
      let t = document.getSelection();
      if (Nc(t.anchorNode, this.el, true) && Nc(t.focusNode, this.el, true))
        return t;
    }
    return null;
  }
  get hasSelection() {
    return this.selection !== null ? this.selection.toString().length !== 0 : false;
  }
  get range() {
    let t = this.selection;
    return t !== null && t.rangeCount ? t.getRangeAt(0) : this._range;
  }
  get parent() {
    let t = this.range;
    if (t !== null) {
      let o = t.startContainer;
      return o.nodeType === document.ELEMENT_NODE ? o : o.parentNode;
    }
    return null;
  }
  get blockParent() {
    let t = this.parent;
    return t !== null ? ov(t, this.el) : null;
  }
  save(t = this.range) {
    t !== null && (this._range = t);
  }
  restore(t = this._range) {
    let o = document.createRange(), r = document.getSelection();
    t !== null ? (o.setStart(t.startContainer, t.startOffset), o.setEnd(t.endContainer, t.endOffset), r.removeAllRanges(), r.addRange(o)) : (r.selectAllChildren(this.el), r.collapseToEnd());
  }
  savePosition() {
    let t = -1, o, r = document.getSelection(), n = this.el.parentNode;
    if (r.focusNode && Nc(r.focusNode, n))
      for (o = r.focusNode, t = r.focusOffset; o && o !== n; )
        o !== this.el && o.previousSibling ? (o = o.previousSibling, t += o.textContent.length) : o = o.parentNode;
    this.savedPos = t;
  }
  restorePosition(t = 0) {
    if (this.savedPos > 0 && this.savedPos < t) {
      let o = window.getSelection(), r = nv(this.el, { count: this.savedPos });
      r && (r.collapse(false), o.removeAllRanges(), o.addRange(r));
    }
  }
  hasParent(t, o) {
    let r = o ? this.parent : this.blockParent;
    return r !== null ? r.nodeName.toLowerCase() === t.toLowerCase() : false;
  }
  hasParents(t, o, r = this.parent) {
    return r === null ? false : t.includes(r.nodeName.toLowerCase()) === true ? true : o === true ? this.hasParents(t, o, r.parentNode) : false;
  }
  is(t, o) {
    if (this.selection === null)
      return false;
    switch (t) {
      case "formatBlock":
        return o === "DIV" && this.parent === this.el || this.hasParent(o, o === "PRE");
      case "link":
        return this.hasParent("A", true);
      case "fontSize":
        return document.queryCommandValue(t) === o;
      case "fontName":
        let r = document.queryCommandValue(t);
        return r === `"${o}"` || r === o;
      case "fullscreen":
        return this.eVm.inFullscreen.value;
      case "viewsource":
        return this.eVm.isViewingSource.value;
      case void 0:
        return false;
      default:
        let n = document.queryCommandState(t);
        return o !== void 0 ? n === o : n;
    }
  }
  getParentAttribute(t) {
    return this.parent !== null ? this.parent.getAttribute(t) : null;
  }
  can(t) {
    if (t === "outdent")
      return this.hasParents(["blockquote", "li"], true);
    if (t === "indent")
      return this.hasParents(["li"], true);
    if (t === "link")
      return this.selection !== null || this.is("link");
  }
  apply(t, o, r = Ke) {
    if (t === "formatBlock")
      ["BLOCKQUOTE", "H1", "H2", "H3", "H4", "H5", "H6"].includes(o) && this.is(t, o) && (t = "outdent", o = null), o === "PRE" && this.is(t, "PRE") && (o = "P");
    else if (t === "print") {
      r();
      let n = window.open();
      n.document.write(`
        <!doctype html>
        <html>
          <head>
            <title>Print - ${document.title}</title>
          </head>
          <body>
            <div>${this.el.innerHTML}</div>
          </body>
        </html>
      `), n.print(), n.close();
      return;
    } else if (t === "link") {
      let n = this.getParentAttribute("href");
      if (n === null) {
        let i = this.selectWord(this.selection), a = i ? i.toString() : "";
        if (!a.length && (!this.range || !this.range.cloneContents().querySelector("img")))
          return;
        this.eVm.editLinkUrl.value = Dx.test(a) ? a : "https://", document.execCommand("createLink", false, this.eVm.editLinkUrl.value), this.save(i.getRangeAt(0));
      } else
        this.eVm.editLinkUrl.value = n, this.range.selectNodeContents(this.parent), this.save();
      return;
    } else if (t === "fullscreen") {
      this.eVm.toggleFullscreen(), r();
      return;
    } else if (t === "viewsource") {
      this.eVm.isViewingSource.value = this.eVm.isViewingSource.value === false, this.eVm.setContent(this.eVm.props.modelValue), r();
      return;
    }
    document.execCommand(t, false, o), r();
  }
  selectWord(t) {
    if (t === null || t.isCollapsed !== true || t.modify === void 0)
      return t;
    let o = document.createRange();
    o.setStart(t.anchorNode, t.anchorOffset), o.setEnd(t.focusNode, t.focusOffset);
    let r = o.collapsed ? ["backward", "forward"] : ["forward", "backward"];
    o.detach();
    let n = t.focusNode, i = t.focusOffset;
    return t.collapse(t.anchorNode, t.anchorOffset), t.modify("move", r[0], "character"), t.modify("move", r[1], "word"), t.extend(n, i), t.modify("extend", r[1], "character"), t.modify("extend", r[0], "word"), t;
  }
};
var Cu = M({ name: "QTooltip", inheritAttrs: false, props: { ...hi, ...Ao, ...an, maxHeight: { type: String, default: null }, maxWidth: { type: String, default: null }, transitionShow: { default: "jump-down" }, transitionHide: { default: "jump-up" }, anchor: { type: String, default: "bottom middle", validator: Ti }, self: { type: String, default: "top middle", validator: Ti }, offset: { type: Array, default: () => [14, 14], validator: Il }, scrollTarget: { default: void 0 }, delay: { type: Number, default: 0 }, hideDelay: { type: Number, default: 0 }, persistent: Boolean }, emits: [...$o], setup(e, { slots: t, emit: o, attrs: r }) {
  let n, i, a = getCurrentInstance(), { proxy: { $q: l } } = a, s = ref(null), c = ref(false), u = computed(() => Mi(e.anchor, l.lang.rtl)), m = computed(() => Mi(e.self, l.lang.rtl)), f = computed(() => e.persistent !== true), { registerTick: d, removeTick: v } = ln(), { registerTimeout: x } = co(), { transitionProps: p, transitionStyle: w } = Gn(e), { localScrollTarget: b, changeScrollEvent: h2, unconfigureScrollTarget: g } = Fl(e, ae), { anchorEl: C, canShow: R, anchorEvents: $ } = pi({ showing: c, configureAnchorEl: W }), { show: F, hide: E } = Eo({ showing: c, canShow: R, handleShow: S, handleHide: q, hideOnRouteChange: f, processOnMount: true });
  Object.assign($, { delayShow: k, delayHide: I });
  let { showPortal: A, hidePortal: B, renderPortal: P } = Si(a, s, _, "tooltip");
  if (l.platform.is.mobile === true) {
    let H = { anchorEl: C, innerRef: s, onClickOutside(Y) {
      return E(Y), Y.target.classList.contains("q-dialog__backdrop") && Se(Y), true;
    } }, O = computed(() => e.modelValue === null && e.persistent !== true && c.value === true);
    watch(O, (Y) => {
      (Y === true ? Ol : qi)(H);
    }), onBeforeUnmount(() => {
      qi(H);
    });
  }
  function S(H) {
    A(), d(() => {
      i = new MutationObserver(() => j()), i.observe(s.value, { attributes: false, childList: true, characterData: true, subtree: true }), j(), ae();
    }), n === void 0 && (n = watch(() => l.screen.width + "|" + l.screen.height + "|" + e.self + "|" + e.anchor + "|" + l.lang.rtl, j)), x(() => {
      A(true), o("show", H);
    }, e.transitionDuration);
  }
  function q(H) {
    v(), B(), D(), x(() => {
      B(true), o("hide", H);
    }, e.transitionDuration);
  }
  function D() {
    i !== void 0 && (i.disconnect(), i = void 0), n !== void 0 && (n(), n = void 0), g(), Ct($, "tooltipTemp");
  }
  function j() {
    Ea({ targetEl: s.value, offset: e.offset, anchorEl: C.value, anchorOrigin: u.value, selfOrigin: m.value, maxHeight: e.maxHeight, maxWidth: e.maxWidth });
  }
  function k(H) {
    if (l.platform.is.mobile === true) {
      Ut(), document.body.classList.add("non-selectable");
      let O = C.value, Y = ["touchmove", "touchcancel", "touchend", "click"].map((Q) => [O, Q, "delayHide", "passiveCapture"]);
      lt($, "tooltipTemp", Y);
    }
    x(() => {
      F(H);
    }, e.delay);
  }
  function I(H) {
    l.platform.is.mobile === true && (Ct($, "tooltipTemp"), Ut(), setTimeout(() => {
      document.body.classList.remove("non-selectable");
    }, 10)), x(() => {
      E(H);
    }, e.hideDelay);
  }
  function W() {
    if (e.noParentEvent === true || C.value === null)
      return;
    let H = l.platform.is.mobile === true ? [[C.value, "touchstart", "delayShow", "passive"]] : [[C.value, "mouseenter", "delayShow", "passive"], [C.value, "mouseleave", "delayHide", "passive"]];
    lt($, "anchor", H);
  }
  function ae() {
    if (C.value !== null || e.scrollTarget !== void 0) {
      b.value = At(C.value, e.scrollTarget);
      let H = e.noParentEvent === true ? j : E;
      h2(b.value, H);
    }
  }
  function V() {
    return c.value === true ? h("div", { ...r, ref: s, class: ["q-tooltip q-tooltip--style q-position-engine no-pointer-events", r.class], style: [r.style, w.value], role: "tooltip" }, ee(t.default)) : null;
  }
  function _() {
    return h(Transition, p.value, V);
  }
  return onBeforeUnmount(D), Object.assign(a.proxy, { updatePosition: j }), P;
} });
var pn = M({ name: "QItem", props: { ...pe, ...Do, tag: { type: String, default: "div" }, active: { type: Boolean, default: null }, clickable: Boolean, dense: Boolean, insetLevel: Number, tabindex: [String, Number], focused: Boolean, manualFocus: Boolean }, emits: ["click", "keyup"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), n = be(e, r), { hasLink: i, linkAttrs: a, linkClass: l, linkTag: s, navigateOnClick: c } = Kn(), u = ref(null), m = ref(null), f = computed(() => e.clickable === true || i.value === true || e.tag === "label"), d = computed(() => e.disable !== true && f.value === true), v = computed(() => "q-item q-item-type row no-wrap" + (e.dense === true ? " q-item--dense" : "") + (n.value === true ? " q-item--dark" : "") + (i.value === true && e.active === null ? l.value : e.active === true ? ` q-item--active${e.activeClass !== void 0 ? ` ${e.activeClass}` : ""}` : "") + (e.disable === true ? " disabled" : "") + (d.value === true ? " q-item--clickable q-link cursor-pointer " + (e.manualFocus === true ? "q-manual-focusable" : "q-focusable q-hoverable") + (e.focused === true ? " q-manual-focusable--focused" : "") : "")), x = computed(() => e.insetLevel === void 0 ? null : { ["padding" + (r.lang.rtl === true ? "Right" : "Left")]: 16 + e.insetLevel * 56 + "px" });
  function p(h2) {
    d.value === true && (m.value !== null && (h2.qKeyEvent !== true && document.activeElement === u.value ? m.value.focus() : document.activeElement === m.value && u.value.focus()), c(h2));
  }
  function w(h2) {
    if (d.value === true && wt(h2, [13, 32]) === true) {
      Se(h2), h2.qKeyEvent = true;
      let g = new MouseEvent("click", h2);
      g.qKeyEvent = true, u.value.dispatchEvent(g);
    }
    o("keyup", h2);
  }
  function b() {
    let h2 = en(t.default, []);
    return d.value === true && h2.unshift(h("div", { class: "q-focus-helper", tabindex: -1, ref: m })), h2;
  }
  return () => {
    let h2 = { ref: u, class: v.value, style: x.value, role: "listitem", onClick: p, onKeyup: w };
    return d.value === true ? (h2.tabindex = e.tabindex || "0", Object.assign(h2, a.value)) : f.value === true && (h2["aria-disabled"] = "true"), h(s.value, h2, b());
  };
} });
var ho = M({ name: "QItemSection", props: { avatar: Boolean, thumbnail: Boolean, side: Boolean, top: Boolean, noWrap: Boolean }, setup(e, { slots: t }) {
  let o = computed(() => `q-item__section column q-item__section--${e.avatar === true || e.side === true || e.thumbnail === true ? "side" : "main"}` + (e.top === true ? " q-item__section--top justify-start" : " justify-center") + (e.avatar === true ? " q-item__section--avatar" : "") + (e.thumbnail === true ? " q-item__section--thumbnail" : "") + (e.noWrap === true ? " q-item__section--nowrap" : ""));
  return () => h("div", { class: o.value }, ee(t.default));
} });
function cv(e, t, o) {
  t.handler ? t.handler(e, o, o.caret) : o.runCmd(t.cmd, t.param);
}
function Hc(e) {
  return h("div", { class: "q-editor__toolbar-group" }, e);
}
function dv(e, t, o, r = false) {
  let n = r || (t.type === "toggle" ? t.toggled ? t.toggled(e) : t.cmd && e.caret.is(t.cmd, t.param) : false), i = [];
  if (t.tip && e.$q.platform.is.desktop) {
    let a = t.key ? h("div", [h("small", `(CTRL + ${String.fromCharCode(t.key)})`)]) : null;
    i.push(h(Cu, { delay: 1e3 }, () => [h("div", { innerHTML: t.tip }), a]));
  }
  return h(Be, { ...e.buttonProps.value, icon: t.icon !== null ? t.icon : void 0, color: n ? t.toggleColor || e.props.toolbarToggleColor : t.color || e.props.toolbarColor, textColor: n && !e.props.toolbarPush ? null : t.textColor || e.props.toolbarTextColor, label: t.label, disable: t.disable ? typeof t.disable == "function" ? t.disable(e) : true : false, size: "sm", onClick(a) {
    o && o(), cv(a, t, e);
  } }, () => i);
}
function jx(e, t) {
  let o = t.list === "only-icons", r = t.label, n = t.icon !== null ? t.icon : void 0, i, a;
  function l() {
    c.component.proxy.hide();
  }
  if (o)
    a = t.options.map((u) => {
      let m = u.type === void 0 ? e.caret.is(u.cmd, u.param) : false;
      return m && (r = u.tip, n = u.icon !== null ? u.icon : void 0), dv(e, u, l, m);
    }), i = e.toolbarBackgroundClass.value, a = [Hc(a)];
  else {
    let u = e.props.toolbarToggleColor !== void 0 ? `text-${e.props.toolbarToggleColor}` : null, m = e.props.toolbarTextColor !== void 0 ? `text-${e.props.toolbarTextColor}` : null, f = t.list === "no-icons";
    a = t.options.map((d) => {
      let v = d.disable ? d.disable(e) : false, x = d.type === void 0 ? e.caret.is(d.cmd, d.param) : false;
      x && (r = d.tip, n = d.icon !== null ? d.icon : void 0);
      let p = d.htmlTip;
      return h(pn, { active: x, activeClass: u, clickable: true, disable: v, dense: true, onClick(w) {
        l(), e.contentRef.value !== null && e.contentRef.value.focus(), e.caret.restore(), cv(w, d, e);
      } }, () => [f === true ? null : h(ho, { class: x ? u : m, side: true }, () => h(Ce, { name: d.icon !== null ? d.icon : void 0 })), h(ho, p ? () => h("div", { class: "text-no-wrap", innerHTML: d.htmlTip }) : d.tip ? () => h("div", { class: "text-no-wrap" }, d.tip) : void 0)]);
    }), i = [e.toolbarBackgroundClass.value, m];
  }
  let s = t.highlight && r !== t.label, c = h(Ql, { ...e.buttonProps.value, noCaps: true, noWrap: true, color: s ? e.props.toolbarToggleColor : e.props.toolbarColor, textColor: s && !e.props.toolbarPush ? null : e.props.toolbarTextColor, label: t.fixedLabel ? t.label : r, icon: t.fixedIcon ? t.icon !== null ? t.icon : void 0 : n, contentClass: i, onShow: (u) => e.emit("dropdownShow", u), onHide: (u) => e.emit("dropdownHide", u), onBeforeShow: (u) => e.emit("dropdownBeforeShow", u), onBeforeHide: (u) => e.emit("dropdownBeforeHide", u) }, () => a);
  return c;
}
function fv(e) {
  if (e.caret)
    return e.buttons.value.filter((t) => !e.isViewingSource.value || t.find((o) => o.cmd === "viewsource")).map((t) => Hc(t.map((o) => e.isViewingSource.value && o.cmd !== "viewsource" ? false : o.type === "slot" ? ee(e.slots[o.slot]) : o.type === "dropdown" ? jx(e, o) : dv(e, o))));
}
function mv(e, t, o, r = {}) {
  let n = Object.keys(r);
  if (n.length === 0)
    return {};
  let i = { default_font: { cmd: "fontName", param: e, icon: o, tip: t } };
  return n.forEach((a) => {
    let l = r[a];
    i[a] = { cmd: "fontName", param: l, icon: o, tip: l, htmlTip: `<font face="${l}">${l}</font>` };
  }), i;
}
function vv(e) {
  if (e.caret) {
    let t = e.props.toolbarColor || e.props.toolbarTextColor, o = e.editLinkUrl.value, r = () => {
      e.caret.restore(), o !== e.editLinkUrl.value && document.execCommand("createLink", false, o === "" ? " " : o), e.editLinkUrl.value = null;
    };
    return [h("div", { class: `q-mx-xs text-${t}` }, `${e.$q.lang.editor.url}: `), h("input", { key: "qedt_btm_input", class: "col q-editor__link-input", value: o, onInput: (n) => {
      et(n), o = n.target.value;
    }, onKeydown: (n) => {
      if (xo(n) !== true)
        switch (n.keyCode) {
          case 13:
            return ut(n), r();
          case 27:
            ut(n), e.caret.restore(), (!e.editLinkUrl.value || e.editLinkUrl.value === "https://") && document.execCommand("unlink"), e.editLinkUrl.value = null;
            break;
        }
    } }), Hc([h(Be, { key: "qedt_btm_rem", tabindex: -1, ...e.buttonProps.value, label: e.$q.lang.label.remove, noCaps: true, onClick: () => {
      e.caret.restore(), document.execCommand("unlink"), e.editLinkUrl.value = null;
    } }), h(Be, { key: "qedt_btm_upd", ...e.buttonProps.value, label: e.$q.lang.label.update, noCaps: true, onClick: r })])];
  }
}
var hv = /^on[A-Z]/;
function ku(e, t) {
  let o = { listeners: ref({}), attributes: ref({}) };
  function r() {
    let n = {}, i = {};
    for (let a in e)
      a !== "class" && a !== "style" && hv.test(a) === false && (n[a] = e[a]);
    for (let a in t.props)
      hv.test(a) === true && (i[a] = t.props[a]);
    o.attributes.value = n, o.listeners.value = i;
  }
  return onBeforeUpdate(r), r(), o;
}
var Kx = Object.prototype.toString;
var Qc = Object.prototype.hasOwnProperty;
var Wx = new Set(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp"].map((e) => "[object " + e + "]"));
function pv(e) {
  if (e !== Object(e) || Wx.has(Kx.call(e)) === true || e.constructor && Qc.call(e, "constructor") === false && Qc.call(e.constructor.prototype, "isPrototypeOf") === false)
    return false;
  let t;
  for (t in e)
    ;
  return t === void 0 || Qc.call(e, t);
}
function Ir() {
  let e, t, o, r, n, i, a = arguments[0] || {}, l = 1, s = false, c = arguments.length;
  for (typeof a == "boolean" && (s = a, a = arguments[1] || {}, l = 2), Object(a) !== a && typeof a != "function" && (a = {}), c === l && (a = this, l--); l < c; l++)
    if ((e = arguments[l]) !== null)
      for (t in e)
        o = a[t], r = e[t], a !== r && (s === true && r && ((n = Array.isArray(r)) || pv(r) === true) ? (n === true ? i = Array.isArray(o) === true ? o : [] : i = pv(o) === true ? o : {}, a[t] = Ir(s, i, r)) : r !== void 0 && (a[t] = r));
  return a;
}
var yv = M({ name: "QEditor", props: { ...pe, ...Di, modelValue: { type: String, required: true }, readonly: Boolean, disable: Boolean, minHeight: { type: String, default: "10rem" }, maxHeight: String, height: String, definitions: Object, fonts: Object, placeholder: String, toolbar: { type: Array, validator: (e) => e.length === 0 || e.every((t) => t.length), default() {
  return [["left", "center", "right", "justify"], ["bold", "italic", "underline", "strike"], ["undo", "redo"]];
} }, toolbarColor: String, toolbarBg: String, toolbarTextColor: String, toolbarToggleColor: { type: String, default: "primary" }, toolbarOutline: Boolean, toolbarPush: Boolean, toolbarRounded: Boolean, paragraphTag: { type: String, validator: (e) => ["div", "p"].includes(e), default: "div" }, contentStyle: Object, contentClass: [Object, Array, String], square: Boolean, flat: Boolean, dense: Boolean }, emits: [...Oi, "update:modelValue", "keydown", "click", "mouseup", "keyup", "touchend", "focus", "blur", "dropdownShow", "dropdownHide", "dropdownBeforeShow", "dropdownBeforeHide", "linkShow", "linkHide"], setup(e, { slots: t, emit: o, attrs: r }) {
  let { proxy: n, vnode: i } = getCurrentInstance(), { $q: a } = n, l = be(e, a), { inFullscreen: s, toggleFullscreen: c } = Ii(), u = ku(r, i), m = ref(null), f = ref(null), d = ref(null), v = ref(false), x = computed(() => !e.readonly && !e.disable), p, w, b = e.modelValue;
  document.execCommand("defaultParagraphSeparator", false, e.paragraphTag), p = window.getComputedStyle(document.body).fontFamily;
  let h2 = computed(() => e.toolbarBg ? ` bg-${e.toolbarBg}` : ""), g = computed(() => ({ type: "a", flat: e.toolbarOutline !== true && e.toolbarPush !== true, noWrap: true, outline: e.toolbarOutline, push: e.toolbarPush, rounded: e.toolbarRounded, dense: true, color: e.toolbarColor, disable: !x.value, size: "sm" })), C = computed(() => {
    let N = a.lang.editor, y = a.iconSet.editor;
    return { bold: { cmd: "bold", icon: y.bold, tip: N.bold, key: 66 }, italic: { cmd: "italic", icon: y.italic, tip: N.italic, key: 73 }, strike: { cmd: "strikeThrough", icon: y.strikethrough, tip: N.strikethrough, key: 83 }, underline: { cmd: "underline", icon: y.underline, tip: N.underline, key: 85 }, unordered: { cmd: "insertUnorderedList", icon: y.unorderedList, tip: N.unorderedList }, ordered: { cmd: "insertOrderedList", icon: y.orderedList, tip: N.orderedList }, subscript: { cmd: "subscript", icon: y.subscript, tip: N.subscript, htmlTip: "x<subscript>2</subscript>" }, superscript: { cmd: "superscript", icon: y.superscript, tip: N.superscript, htmlTip: "x<superscript>2</superscript>" }, link: { cmd: "link", disable: (U) => U.caret && !U.caret.can("link"), icon: y.hyperlink, tip: N.hyperlink, key: 76 }, fullscreen: { cmd: "fullscreen", icon: y.toggleFullscreen, tip: N.toggleFullscreen, key: 70 }, viewsource: { cmd: "viewsource", icon: y.viewSource, tip: N.viewSource }, quote: { cmd: "formatBlock", param: "BLOCKQUOTE", icon: y.quote, tip: N.quote, key: 81 }, left: { cmd: "justifyLeft", icon: y.left, tip: N.left }, center: { cmd: "justifyCenter", icon: y.center, tip: N.center }, right: { cmd: "justifyRight", icon: y.right, tip: N.right }, justify: { cmd: "justifyFull", icon: y.justify, tip: N.justify }, print: { type: "no-state", cmd: "print", icon: y.print, tip: N.print, key: 80 }, outdent: { type: "no-state", disable: (U) => U.caret && !U.caret.can("outdent"), cmd: "outdent", icon: y.outdent, tip: N.outdent }, indent: { type: "no-state", disable: (U) => U.caret && !U.caret.can("indent"), cmd: "indent", icon: y.indent, tip: N.indent }, removeFormat: { type: "no-state", cmd: "removeFormat", icon: y.removeFormat, tip: N.removeFormat }, hr: { type: "no-state", cmd: "insertHorizontalRule", icon: y.hr, tip: N.hr }, undo: { type: "no-state", cmd: "undo", icon: y.undo, tip: N.undo, key: 90 }, redo: { type: "no-state", cmd: "redo", icon: y.redo, tip: N.redo, key: 89 }, h1: { cmd: "formatBlock", param: "H1", icon: y.heading1 || y.heading, tip: N.heading1, htmlTip: `<h1 class="q-ma-none">${N.heading1}</h1>` }, h2: { cmd: "formatBlock", param: "H2", icon: y.heading2 || y.heading, tip: N.heading2, htmlTip: `<h2 class="q-ma-none">${N.heading2}</h2>` }, h3: { cmd: "formatBlock", param: "H3", icon: y.heading3 || y.heading, tip: N.heading3, htmlTip: `<h3 class="q-ma-none">${N.heading3}</h3>` }, h4: { cmd: "formatBlock", param: "H4", icon: y.heading4 || y.heading, tip: N.heading4, htmlTip: `<h4 class="q-ma-none">${N.heading4}</h4>` }, h5: { cmd: "formatBlock", param: "H5", icon: y.heading5 || y.heading, tip: N.heading5, htmlTip: `<h5 class="q-ma-none">${N.heading5}</h5>` }, h6: { cmd: "formatBlock", param: "H6", icon: y.heading6 || y.heading, tip: N.heading6, htmlTip: `<h6 class="q-ma-none">${N.heading6}</h6>` }, p: { cmd: "formatBlock", param: e.paragraphTag, icon: y.heading, tip: N.paragraph }, code: { cmd: "formatBlock", param: "PRE", icon: y.code, htmlTip: `<code>${N.code}</code>` }, "size-1": { cmd: "fontSize", param: "1", icon: y.size1 || y.size, tip: N.size1, htmlTip: `<font size="1">${N.size1}</font>` }, "size-2": { cmd: "fontSize", param: "2", icon: y.size2 || y.size, tip: N.size2, htmlTip: `<font size="2">${N.size2}</font>` }, "size-3": { cmd: "fontSize", param: "3", icon: y.size3 || y.size, tip: N.size3, htmlTip: `<font size="3">${N.size3}</font>` }, "size-4": { cmd: "fontSize", param: "4", icon: y.size4 || y.size, tip: N.size4, htmlTip: `<font size="4">${N.size4}</font>` }, "size-5": { cmd: "fontSize", param: "5", icon: y.size5 || y.size, tip: N.size5, htmlTip: `<font size="5">${N.size5}</font>` }, "size-6": { cmd: "fontSize", param: "6", icon: y.size6 || y.size, tip: N.size6, htmlTip: `<font size="6">${N.size6}</font>` }, "size-7": { cmd: "fontSize", param: "7", icon: y.size7 || y.size, tip: N.size7, htmlTip: `<font size="7">${N.size7}</font>` } };
  }), R = computed(() => {
    let N = e.definitions || {}, y = e.definitions || e.fonts ? Ir(true, {}, C.value, N, mv(p, a.lang.editor.defaultFont, a.iconSet.editor.font, e.fonts)) : C.value;
    return e.toolbar.map((U) => U.map((te) => {
      if (te.options)
        return { type: "dropdown", icon: te.icon, label: te.label, size: "sm", dense: true, fixedLabel: te.fixedLabel, fixedIcon: te.fixedIcon, highlight: te.highlight, list: te.list, options: te.options.map((ve) => y[ve]) };
      let le = y[te];
      return le ? le.type === "no-state" || N[te] && (le.cmd === void 0 || C.value[le.cmd] && C.value[le.cmd].type === "no-state") ? le : Object.assign({ type: "toggle" }, le) : { type: "slot", slot: te };
    }));
  }), $ = { $q: a, props: e, slots: t, emit: o, inFullscreen: s, toggleFullscreen: c, runCmd: O, isViewingSource: v, editLinkUrl: d, toolbarBackgroundClass: h2, buttonProps: g, contentRef: f, buttons: R, setContent: H };
  watch(() => e.modelValue, (N) => {
    b !== N && (b = N, H(N, true));
  }), watch(d, (N) => {
    o(`link${N ? "Show" : "Hide"}`);
  });
  let F = computed(() => e.toolbar && e.toolbar.length !== 0), E = computed(() => {
    let N = {}, y = (U) => {
      U.key && (N[U.key] = { cmd: U.cmd, param: U.param });
    };
    return R.value.forEach((U) => {
      U.forEach((te) => {
        te.options ? te.options.forEach(y) : y(te);
      });
    }), N;
  }), A = computed(() => s.value ? e.contentStyle : [{ minHeight: e.minHeight, height: e.height, maxHeight: e.maxHeight }, e.contentStyle]), B = computed(() => `q-editor q-editor--${v.value === true ? "source" : "default"}` + (e.disable === true ? " disabled" : "") + (s.value === true ? " fullscreen column" : "") + (e.square === true ? " q-editor--square no-border-radius" : "") + (e.flat === true ? " q-editor--flat" : "") + (e.dense === true ? " q-editor--dense" : "") + (l.value === true ? " q-editor--dark q-dark" : "")), P = computed(() => [e.contentClass, "q-editor__content", { col: s.value, "overflow-auto": s.value || e.maxHeight }]), S = computed(() => e.disable === true ? { "aria-disabled": "true" } : {});
  function q() {
    if (f.value !== null) {
      let N = `inner${v.value === true ? "Text" : "HTML"}`, y = f.value[N];
      y !== e.modelValue && (b = y, o("update:modelValue", y));
    }
  }
  function D(N) {
    if (o("keydown", N), N.ctrlKey !== true || xo(N) === true) {
      Y();
      return;
    }
    let y = N.keyCode, U = E.value[y];
    if (U !== void 0) {
      let { cmd: te, param: le } = U;
      Se(N), O(te, le, false);
    }
  }
  function j(N) {
    Y(), o("click", N);
  }
  function k(N) {
    if (f.value !== null) {
      let { scrollTop: y, scrollHeight: U } = f.value;
      w = U - y;
    }
    $.caret.save(), o("blur", N);
  }
  function I(N) {
    nextTick(() => {
      f.value !== null && w !== void 0 && (f.value.scrollTop = f.value.scrollHeight - w);
    }), o("focus", N);
  }
  function W(N) {
    let y = m.value;
    if (y !== null && y.contains(N.target) === true && (N.relatedTarget === null || y.contains(N.relatedTarget) !== true)) {
      let U = `inner${v.value === true ? "Text" : "HTML"}`;
      $.caret.restorePosition(f.value[U].length), Y();
    }
  }
  function ae(N) {
    let y = m.value;
    y !== null && y.contains(N.target) === true && (N.relatedTarget === null || y.contains(N.relatedTarget) !== true) && ($.caret.savePosition(), Y());
  }
  function V() {
    w = void 0;
  }
  function _(N) {
    $.caret.save();
  }
  function H(N, y) {
    if (f.value !== null) {
      y === true && $.caret.savePosition();
      let U = `inner${v.value === true ? "Text" : "HTML"}`;
      f.value[U] = N, y === true && ($.caret.restorePosition(f.value[U].length), Y());
    }
  }
  function O(N, y, U = true) {
    Q(), $.caret.restore(), $.caret.apply(N, y, () => {
      Q(), $.caret.save(), U && Y();
    });
  }
  function Y() {
    setTimeout(() => {
      d.value = null, n.$forceUpdate();
    }, 1);
  }
  function Q() {
    Bo(() => {
      f.value !== null && f.value.focus({ preventScroll: true });
    });
  }
  function ne() {
    return f.value;
  }
  return onMounted(() => {
    $.caret = n.caret = new Ga(f.value, $), H(e.modelValue), Y(), document.addEventListener("selectionchange", _);
  }), onBeforeUnmount(() => {
    document.removeEventListener("selectionchange", _);
  }), Object.assign(n, { runCmd: O, refreshToolbar: Y, focus: Q, getContentEl: ne }), () => {
    let N;
    if (F.value) {
      let y = [h("div", { key: "qedt_top", class: "q-editor__toolbar row no-wrap scroll-x" + h2.value }, fv($))];
      d.value !== null && y.push(h("div", { key: "qedt_btm", class: "q-editor__toolbar row no-wrap items-center scroll-x" + h2.value }, vv($))), N = h("div", { key: "toolbar_ctainer", class: "q-editor__toolbars-container" }, y);
    }
    return h("div", { ref: m, class: B.value, style: { height: s.value === true ? "100%" : null }, ...S.value, onFocusin: W, onFocusout: ae }, [N, h("div", { ref: f, style: A.value, class: P.value, contenteditable: x.value, placeholder: e.placeholder, ...u.listeners.value, onInput: q, onKeydown: D, onClick: j, onBlur: k, onFocus: I, onMousedown: V, onTouchstartPassive: V })]);
  };
} });
var Nr = M({ name: "QItemLabel", props: { overline: Boolean, caption: Boolean, header: Boolean, lines: [Number, String] }, setup(e, { slots: t }) {
  let o = computed(() => parseInt(e.lines, 10)), r = computed(() => "q-item__label" + (e.overline === true ? " q-item__label--overline text-overline" : "") + (e.caption === true ? " q-item__label--caption text-caption" : "") + (e.header === true ? " q-item__label--header" : "") + (o.value === 1 ? " ellipsis" : "")), n = computed(() => e.lines !== void 0 && o.value > 1 ? { overflow: "hidden", display: "-webkit-box", "-webkit-box-orient": "vertical", "-webkit-line-clamp": o.value } : null);
  return () => h("div", { style: n.value, class: r.value }, ee(t.default));
} });
var sr = M({ name: "QSlideTransition", props: { appear: Boolean, duration: { type: Number, default: 300 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: o }) {
  let r = false, n, i, a = null, l = null, s, c;
  function u() {
    n && n(), n = null, r = false, a !== null && (clearTimeout(a), a = null), l !== null && (clearTimeout(l), l = null), i !== void 0 && i.removeEventListener("transitionend", s), s = null;
  }
  function m(x, p, w) {
    p !== void 0 && (x.style.height = `${p}px`), x.style.transition = `height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`, r = true, n = w;
  }
  function f(x, p) {
    x.style.overflowY = null, x.style.height = null, x.style.transition = null, u(), p !== c && o(p);
  }
  function d(x, p) {
    let w = 0;
    i = x, r === true ? (u(), w = x.offsetHeight === x.scrollHeight ? 0 : void 0) : (c = "hide", x.style.overflowY = "hidden"), m(x, w, p), a = setTimeout(() => {
      a = null, x.style.height = `${x.scrollHeight}px`, s = (b) => {
        l = null, (Object(b) !== b || b.target === x) && f(x, "show");
      }, x.addEventListener("transitionend", s), l = setTimeout(s, e.duration * 1.1);
    }, 100);
  }
  function v(x, p) {
    let w;
    i = x, r === true ? u() : (c = "show", x.style.overflowY = "hidden", w = x.scrollHeight), m(x, w, p), a = setTimeout(() => {
      a = null, x.style.height = 0, s = (b) => {
        l = null, (Object(b) !== b || b.target === x) && f(x, "hide");
      }, x.addEventListener("transitionend", s), l = setTimeout(s, e.duration * 1.1);
    }, 100);
  }
  return onBeforeUnmount(() => {
    r === true && u();
  }), () => h(Transition, { css: false, appear: e.appear, onEnter: d, onLeave: v }, t.default);
} });
var i_ = { true: "inset", item: "item-inset", "item-thumbnail": "item-thumbnail-inset" };
var Uc = { xs: 2, sm: 4, md: 8, lg: 16, xl: 24 };
var Co = M({ name: "QSeparator", props: { ...pe, spaced: [Boolean, String], inset: [Boolean, String], vertical: Boolean, color: String, size: String }, setup(e) {
  let t = getCurrentInstance(), o = be(e, t.proxy.$q), r = computed(() => e.vertical === true ? "vertical" : "horizontal"), n = computed(() => ` q-separator--${r.value}`), i = computed(() => e.inset !== false ? `${n.value}-${i_[e.inset]}` : ""), a = computed(() => `q-separator${n.value}${i.value}` + (e.color !== void 0 ? ` bg-${e.color}` : "") + (o.value === true ? " q-separator--dark" : "")), l = computed(() => {
    let s = {};
    if (e.size !== void 0 && (s[e.vertical === true ? "width" : "height"] = e.size), e.spaced !== false) {
      let c = e.spaced === true ? `${Uc.md}px` : e.spaced in Uc ? `${Uc[e.spaced]}px` : e.spaced, u = e.vertical === true ? ["Left", "Right"] : ["Top", "Bottom"];
      s[`margin${u[0]}`] = s[`margin${u[1]}`] = c;
    }
    return s;
  });
  return () => h("hr", { class: a.value, style: l.value, "aria-orientation": r.value });
} });
var Hr = shallowReactive({});
var d_ = Object.keys(Do);
var xv = M({ name: "QExpansionItem", props: { ...Do, ...Ao, ...pe, icon: String, label: String, labelLines: [Number, String], caption: String, captionLines: [Number, String], dense: Boolean, toggleAriaLabel: String, expandIcon: String, expandedIcon: String, expandIconClass: [Array, String, Object], duration: Number, headerInsetLevel: Number, contentInsetLevel: Number, expandSeparator: Boolean, defaultOpened: Boolean, hideExpandIcon: Boolean, expandIconToggle: Boolean, switchToggleSide: Boolean, denseToggle: Boolean, group: String, popup: Boolean, headerStyle: [Array, String, Object], headerClass: [Array, String, Object] }, emits: [...$o, "click", "afterShow", "afterHide"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), n = be(e, r), i = ref(e.modelValue !== null ? e.modelValue : e.defaultOpened), a = ref(null), l = er(), { show: s, hide: c, toggle: u } = Eo({ showing: i }), m, f, d = computed(() => `q-expansion-item q-item-type q-expansion-item--${i.value === true ? "expanded" : "collapsed"} q-expansion-item--${e.popup === true ? "popup" : "standard"}`), v = computed(() => e.contentInsetLevel === void 0 ? null : { ["padding" + (r.lang.rtl === true ? "Right" : "Left")]: e.contentInsetLevel * 56 + "px" }), x = computed(() => e.disable !== true && (e.href !== void 0 || e.to !== void 0 && e.to !== null && e.to !== "")), p = computed(() => {
    let k = {};
    return d_.forEach((I) => {
      k[I] = e[I];
    }), k;
  }), w = computed(() => x.value === true || e.expandIconToggle !== true), b = computed(() => e.expandedIcon !== void 0 && i.value === true ? e.expandedIcon : e.expandIcon || r.iconSet.expansionItem[e.denseToggle === true ? "denseIcon" : "icon"]), h2 = computed(() => e.disable !== true && (x.value === true || e.expandIconToggle === true)), g = computed(() => ({ expanded: i.value === true, detailsId: e.targetUid, toggle: u, show: s, hide: c })), C = computed(() => {
    let k = e.toggleAriaLabel !== void 0 ? e.toggleAriaLabel : r.lang.label[i.value === true ? "collapse" : "expand"](e.label);
    return { role: "button", "aria-expanded": i.value === true ? "true" : "false", "aria-controls": l.value, "aria-label": k };
  });
  watch(() => e.group, (k) => {
    f !== void 0 && f(), k !== void 0 && B();
  });
  function R(k) {
    x.value !== true && u(k), o("click", k);
  }
  function $(k) {
    k.keyCode === 13 && F(k, true);
  }
  function F(k, I) {
    I !== true && a.value !== null && a.value.focus(), u(k), Se(k);
  }
  function E() {
    o("afterShow");
  }
  function A() {
    o("afterHide");
  }
  function B() {
    m === void 0 && (m = Jn()), i.value === true && (Hr[e.group] = m);
    let k = watch(i, (W) => {
      W === true ? Hr[e.group] = m : Hr[e.group] === m && delete Hr[e.group];
    }), I = watch(() => Hr[e.group], (W, ae) => {
      ae === m && W !== void 0 && W !== m && c();
    });
    f = () => {
      k(), I(), Hr[e.group] === m && delete Hr[e.group], f = void 0;
    };
  }
  function P() {
    let k = { class: [`q-focusable relative-position cursor-pointer${e.denseToggle === true && e.switchToggleSide === true ? " items-end" : ""}`, e.expandIconClass], side: e.switchToggleSide !== true, avatar: e.switchToggleSide }, I = [h(Ce, { class: "q-expansion-item__toggle-icon" + (e.expandedIcon === void 0 && i.value === true ? " q-expansion-item__toggle-icon--rotated" : ""), name: b.value })];
    return h2.value === true && (Object.assign(k, { tabindex: 0, ...C.value, onClick: F, onKeyup: $ }), I.unshift(h("div", { ref: a, class: "q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded", tabindex: -1 }))), h(ho, k, () => I);
  }
  function S() {
    let k;
    return t.header !== void 0 ? k = [].concat(t.header(g.value)) : (k = [h(ho, () => [h(Nr, { lines: e.labelLines }, () => e.label || ""), e.caption ? h(Nr, { lines: e.captionLines, caption: true }, () => e.caption) : null])], e.icon && k[e.switchToggleSide === true ? "push" : "unshift"](h(ho, { side: e.switchToggleSide === true, avatar: e.switchToggleSide !== true }, () => h(Ce, { name: e.icon })))), e.disable !== true && e.hideExpandIcon !== true && k[e.switchToggleSide === true ? "unshift" : "push"](P()), k;
  }
  function q() {
    let k = { ref: "item", style: e.headerStyle, class: e.headerClass, dark: n.value, disable: e.disable, dense: e.dense, insetLevel: e.headerInsetLevel };
    return w.value === true && (k.clickable = true, k.onClick = R, Object.assign(k, x.value === true ? p.value : C.value)), h(pn, k, S);
  }
  function D() {
    return withDirectives(h("div", { key: "e-content", class: "q-expansion-item__content relative-position", style: v.value, id: l.value }, ee(t.default)), [[vShow, i.value]]);
  }
  function j() {
    let k = [q(), h(sr, { duration: e.duration, onShow: E, onHide: A }, D)];
    return e.expandSeparator === true && k.push(h(Co, { class: "q-expansion-item__border q-expansion-item__border--top absolute-top", dark: n.value }), h(Co, { class: "q-expansion-item__border q-expansion-item__border--bottom absolute-bottom", dark: n.value })), k;
  }
  return e.group !== void 0 && B(), onBeforeUnmount(() => {
    f !== void 0 && f();
  }), () => h("div", { class: d.value }, [h("div", { class: "q-expansion-item__container relative-position" }, j())]);
} });
var f_ = ["top", "right", "bottom", "left"];
var Tu = { type: { type: String, default: "a" }, outline: Boolean, push: Boolean, flat: Boolean, unelevated: Boolean, color: String, textColor: String, glossy: Boolean, square: Boolean, padding: String, label: { type: [String, Number], default: "" }, labelPosition: { type: String, default: "right", validator: (e) => f_.includes(e) }, externalLabel: Boolean, hideLabel: { type: Boolean }, labelClass: [Array, String, Object], labelStyle: [Array, String, Object], disable: Boolean, tabindex: [Number, String] };
function Mu(e, t) {
  return { formClass: computed(() => `q-fab--form-${e.square === true ? "square" : "rounded"}`), stacked: computed(() => e.externalLabel === false && ["top", "bottom"].includes(e.labelPosition)), labelProps: computed(() => {
    if (e.externalLabel === true) {
      let o = e.hideLabel === null ? t.value === false : e.hideLabel;
      return { action: "push", data: { class: [e.labelClass, `q-fab__label q-tooltip--style q-fab__label--external q-fab__label--external-${e.labelPosition}` + (o === true ? " q-fab__label--external-hidden" : "")], style: e.labelStyle } };
    }
    return { action: ["left", "top"].includes(e.labelPosition) ? "unshift" : "push", data: { class: [e.labelClass, `q-fab__label q-fab__label--internal q-fab__label--internal-${e.labelPosition}` + (e.hideLabel === true ? " q-fab__label--internal-hidden" : "")], style: e.labelStyle } };
  }) };
}
var g_ = ["up", "right", "down", "left"];
var h_ = ["left", "center", "right"];
var Cv = M({ name: "QFab", props: { ...Tu, ...Ao, icon: String, activeIcon: String, hideIcon: Boolean, hideLabel: { default: null }, direction: { type: String, default: "right", validator: (e) => g_.includes(e) }, persistent: Boolean, verticalActionsAlign: { type: String, default: "center", validator: (e) => h_.includes(e) } }, emits: $o, setup(e, { slots: t }) {
  let o = ref(null), r = ref(e.modelValue === true), n = er(), { proxy: { $q: i } } = getCurrentInstance(), { formClass: a, labelProps: l } = Mu(e, r), s = computed(() => e.persistent !== true), { hide: c, toggle: u } = Eo({ showing: r, hideOnRouteChange: s }), m = computed(() => ({ opened: r.value })), f = computed(() => `q-fab z-fab row inline justify-center q-fab--align-${e.verticalActionsAlign} ${a.value}` + (r.value === true ? " q-fab--opened" : " q-fab--closed")), d = computed(() => `q-fab__actions flex no-wrap inline q-fab__actions--${e.direction} q-fab__actions--${r.value === true ? "opened" : "closed"}`), v = computed(() => {
    let b = { id: n.value, role: "menu" };
    return r.value !== true && (b["aria-hidden"] = "true"), b;
  }), x = computed(() => `q-fab__icon-holder  q-fab__icon-holder--${r.value === true ? "opened" : "closed"}`);
  function p(b, h2) {
    let g = t[b], C = `q-fab__${b} absolute-full`;
    return g === void 0 ? h(Ce, { class: C, name: e[h2] || i.iconSet.fab[h2] }) : h("div", { class: C }, g(m.value));
  }
  function w() {
    let b = [];
    return e.hideIcon !== true && b.push(h("div", { class: x.value }, [p("icon", "icon"), p("active-icon", "activeIcon")])), (e.label !== "" || t.label !== void 0) && b[l.value.action](h("div", l.value.data, t.label !== void 0 ? t.label(m.value) : [e.label])), je(t.tooltip, b);
  }
  return provide(Cl, { showing: r, onChildClick(b) {
    c(b), o.value !== null && o.value.$el.focus();
  } }), () => h("div", { class: f.value }, [h(Be, { ref: o, class: a.value, ...e, noWrap: true, stack: e.stacked, align: void 0, icon: void 0, label: void 0, noCaps: true, fab: true, "aria-expanded": r.value === true ? "true" : "false", "aria-haspopup": "true", "aria-controls": n.value, onClick: u }, w), h("div", { class: d.value, ...v.value }, ee(t.default))]);
} });
var kv = { start: "self-end", center: "self-center", end: "self-start" };
var y_ = Object.keys(kv);
var qv = M({ name: "QFabAction", props: { ...Tu, icon: { type: String, default: "" }, anchor: { type: String, validator: (e) => y_.includes(e) }, to: [String, Object], replace: Boolean }, emits: ["click"], setup(e, { slots: t, emit: o }) {
  let r = inject(Cl, () => ({ showing: { value: true }, onChildClick: Ke })), { formClass: n, labelProps: i } = Mu(e, r.showing), a = computed(() => {
    let m = kv[e.anchor];
    return n.value + (m !== void 0 ? ` ${m}` : "");
  }), l = computed(() => e.disable === true || r.showing.value !== true);
  function s(m) {
    r.onChildClick(m), o("click", m);
  }
  function c() {
    let m = [];
    return t.icon !== void 0 ? m.push(t.icon()) : e.icon !== "" && m.push(h(Ce, { name: e.icon })), (e.label !== "" || t.label !== void 0) && m[i.value.action](h("div", i.value.data, t.label !== void 0 ? t.label() : [e.label])), je(t.default, m);
  }
  let u = getCurrentInstance();
  return Object.assign(u.proxy, { click: s }), () => h(Be, { class: a.value, ...e, noWrap: true, stack: e.stacked, icon: void 0, label: void 0, noCaps: true, fabMini: true, disable: l.value, onClick: s }, c);
} });
function Xc({ validate: e, resetValidation: t, requiresQForm: o }) {
  let r = inject(Pn, false);
  if (r !== false) {
    let { props: n, proxy: i } = getCurrentInstance();
    Object.assign(i, { validate: e, resetValidation: t }), watch(() => n.disable, (a) => {
      a === true ? (typeof t == "function" && t(), r.unbindComponent(i)) : r.bindComponent(i);
    }), onMounted(() => {
      n.disable !== true && r.bindComponent(i);
    }), onBeforeUnmount(() => {
      n.disable !== true && r.unbindComponent(i);
    });
  } else
    o === true && console.error("Parent QForm not found on useFormChild()!");
}
var T_ = [true, false, "ondemand"];
var Tv = { modelValue: {}, error: { type: Boolean, default: null }, errorMessage: String, noErrorIcon: Boolean, rules: Array, reactiveRules: Boolean, lazyRules: { type: [Boolean, String], default: false, validator: (e) => T_.includes(e) } };
function Mv(e, t) {
  let { props: o, proxy: r } = getCurrentInstance(), n = ref(false), i = ref(null), a = ref(false);
  Xc({ validate: x, resetValidation: v });
  let l = 0, s, c = computed(() => o.rules !== void 0 && o.rules !== null && o.rules.length !== 0), u = computed(() => o.disable !== true && c.value === true && t.value === false), m = computed(() => o.error === true || n.value === true), f = computed(() => typeof o.errorMessage == "string" && o.errorMessage.length !== 0 ? o.errorMessage : i.value);
  watch(() => o.modelValue, () => {
    a.value = true, u.value === true && o.lazyRules === false && p();
  });
  function d() {
    o.lazyRules !== "ondemand" && u.value === true && a.value === true && p();
  }
  watch(() => o.reactiveRules, (w) => {
    w === true ? s === void 0 && (s = watch(() => o.rules, d, { immediate: true, deep: true })) : s !== void 0 && (s(), s = void 0);
  }, { immediate: true }), watch(() => o.lazyRules, d), watch(e, (w) => {
    w === true ? a.value = true : u.value === true && o.lazyRules !== "ondemand" && p();
  });
  function v() {
    l++, t.value = false, a.value = false, n.value = false, i.value = null, p.cancel();
  }
  function x(w = o.modelValue) {
    if (o.disable === true || c.value === false)
      return true;
    let b = ++l, h2 = t.value !== true ? () => {
      a.value = true;
    } : () => {
    }, g = (R, $) => {
      R === true && h2(), n.value = R, i.value = $ || null, t.value = false;
    }, C = [];
    for (let R = 0; R < o.rules.length; R++) {
      let $ = o.rules[R], F;
      if (typeof $ == "function" ? F = $(w, Vr) : typeof $ == "string" && Vr[$] !== void 0 && (F = Vr[$](w)), F === false || typeof F == "string")
        return g(true, F), false;
      F !== true && F !== void 0 && C.push(F);
    }
    return C.length === 0 ? (g(false), true) : (t.value = true, Promise.all(C).then((R) => {
      if (R === void 0 || Array.isArray(R) === false || R.length === 0)
        return b === l && g(false), true;
      let $ = R.find((F) => F === false || typeof F == "string");
      return b === l && g($ !== void 0, $), $ === void 0;
    }, (R) => (b === l && (console.error(R), g(true)), false)));
  }
  let p = So(x, 0);
  return onBeforeUnmount(() => {
    s !== void 0 && s(), p.cancel();
  }), Object.assign(r, { resetValidation: v, validate: x }), it(r, "hasError", () => m.value), { isDirtyModel: a, hasRules: c, hasError: m, errorMessage: f, validate: x, resetValidation: v };
}
function bn(e) {
  return e != null && ("" + e).length !== 0;
}
var zn = { ...pe, ...Tv, label: String, stackLabel: Boolean, hint: String, hideHint: Boolean, prefix: String, suffix: String, labelColor: String, color: String, bgColor: String, filled: Boolean, outlined: Boolean, borderless: Boolean, standout: [Boolean, String], square: Boolean, loading: Boolean, labelSlot: Boolean, bottomSlots: Boolean, hideBottomSpace: Boolean, rounded: Boolean, dense: Boolean, itemAligned: Boolean, counter: Boolean, clearable: Boolean, clearIcon: String, disable: Boolean, readonly: Boolean, autofocus: Boolean, for: String, maxlength: [Number, String] };
var cr = ["update:modelValue", "clear", "focus", "blur", "popupShow", "popupHide"];
function dr({ requiredForAttr: e = true, tagProp: t } = {}) {
  let { props: o, attrs: r, proxy: n, vnode: i } = getCurrentInstance(), a = be(o, n.$q), l = er(o.for, e);
  return { requiredForAttr: e, tag: t === true ? computed(() => o.tag) : { value: "label" }, isDark: a, editable: computed(() => o.disable !== true && o.readonly !== true), innerLoading: ref(false), focused: ref(false), hasPopupOpen: false, splitAttrs: ku(r, i), targetUid: l, rootRef: ref(null), targetRef: ref(null), controlRef: ref(null) };
}
function fr(e) {
  let { props: t, emit: o, slots: r, attrs: n, proxy: i } = getCurrentInstance(), { $q: a } = i, l = null;
  e.hasValue === void 0 && (e.hasValue = computed(() => bn(t.modelValue))), e.emitValue === void 0 && (e.emitValue = (k) => {
    o("update:modelValue", k);
  }), e.controlEvents === void 0 && (e.controlEvents = { onFocusin: E, onFocusout: A }), Object.assign(e, { clearValue: B, onControlFocusin: E, onControlFocusout: A, focus: $ }), e.computedCounter === void 0 && (e.computedCounter = computed(() => {
    if (t.counter !== false) {
      let k = typeof t.modelValue == "string" || typeof t.modelValue == "number" ? ("" + t.modelValue).length : Array.isArray(t.modelValue) === true ? t.modelValue.length : 0, I = t.maxlength !== void 0 ? t.maxlength : t.maxValues;
      return k + (I !== void 0 ? " / " + I : "");
    }
  }));
  let { isDirtyModel: s, hasRules: c, hasError: u, errorMessage: m, resetValidation: f } = Mv(e.focused, e.innerLoading), d = e.floatingLabel !== void 0 ? computed(() => t.stackLabel === true || e.focused.value === true || e.floatingLabel.value === true) : computed(() => t.stackLabel === true || e.focused.value === true || e.hasValue.value === true), v = computed(() => t.bottomSlots === true || t.hint !== void 0 || c.value === true || t.counter === true || t.error !== null), x = computed(() => t.filled === true ? "filled" : t.outlined === true ? "outlined" : t.borderless === true ? "borderless" : t.standout ? "standout" : "standard"), p = computed(() => `q-field row no-wrap items-start q-field--${x.value}` + (e.fieldClass !== void 0 ? ` ${e.fieldClass.value}` : "") + (t.rounded === true ? " q-field--rounded" : "") + (t.square === true ? " q-field--square" : "") + (d.value === true ? " q-field--float" : "") + (b.value === true ? " q-field--labeled" : "") + (t.dense === true ? " q-field--dense" : "") + (t.itemAligned === true ? " q-field--item-aligned q-item-type" : "") + (e.isDark.value === true ? " q-field--dark" : "") + (e.getControl === void 0 ? " q-field--auto-height" : "") + (e.focused.value === true ? " q-field--focused" : "") + (u.value === true ? " q-field--error" : "") + (u.value === true || e.focused.value === true ? " q-field--highlighted" : "") + (t.hideBottomSpace !== true && v.value === true ? " q-field--with-bottom" : "") + (t.disable === true ? " q-field--disabled" : t.readonly === true ? " q-field--readonly" : "")), w = computed(() => "q-field__control relative-position row no-wrap" + (t.bgColor !== void 0 ? ` bg-${t.bgColor}` : "") + (u.value === true ? " text-negative" : typeof t.standout == "string" && t.standout.length !== 0 && e.focused.value === true ? ` ${t.standout}` : t.color !== void 0 ? ` text-${t.color}` : "")), b = computed(() => t.labelSlot === true || t.label !== void 0), h2 = computed(() => "q-field__label no-pointer-events absolute ellipsis" + (t.labelColor !== void 0 && u.value !== true ? ` text-${t.labelColor}` : "")), g = computed(() => ({ id: e.targetUid.value, editable: e.editable.value, focused: e.focused.value, floatingLabel: d.value, modelValue: t.modelValue, emitValue: e.emitValue })), C = computed(() => {
    let k = {};
    return e.targetUid.value && (k.for = e.targetUid.value), t.disable === true && (k["aria-disabled"] = "true"), k;
  });
  watch(() => t.for, (k) => {
    e.targetUid.value = pc(k, e.requiredForAttr);
  });
  function R() {
    let k = document.activeElement, I = e.targetRef !== void 0 && e.targetRef.value;
    I && (k === null || k.id !== e.targetUid.value) && (I.hasAttribute("tabindex") === true || (I = I.querySelector("[tabindex]")), I && I !== k && I.focus({ preventScroll: true }));
  }
  function $() {
    Bo(R);
  }
  function F() {
    If(R);
    let k = document.activeElement;
    k !== null && e.rootRef.value.contains(k) && k.blur();
  }
  function E(k) {
    l !== null && (clearTimeout(l), l = null), e.editable.value === true && e.focused.value === false && (e.focused.value = true, o("focus", k));
  }
  function A(k, I) {
    l !== null && clearTimeout(l), l = setTimeout(() => {
      l = null, !(document.hasFocus() === true && (e.hasPopupOpen === true || e.controlRef === void 0 || e.controlRef.value === null || e.controlRef.value.contains(document.activeElement) !== false)) && (e.focused.value === true && (e.focused.value = false, o("blur", k)), I !== void 0 && I());
    });
  }
  function B(k) {
    Se(k), a.platform.is.mobile !== true ? (e.targetRef !== void 0 && e.targetRef.value || e.rootRef.value).focus() : e.rootRef.value.contains(document.activeElement) === true && document.activeElement.blur(), t.type === "file" && (e.inputRef.value.value = null), o("update:modelValue", null), o("clear", t.modelValue), nextTick(() => {
      let I = s.value;
      f(), s.value = I;
    });
  }
  function P() {
    let k = [];
    return r.prepend !== void 0 && k.push(h("div", { class: "q-field__prepend q-field__marginal row no-wrap items-center", key: "prepend", onClick: ut }, r.prepend())), k.push(h("div", { class: "q-field__control-container col relative-position row no-wrap q-anchor--skip" }, S())), u.value === true && t.noErrorIcon === false && k.push(D("error", [h(Ce, { name: a.iconSet.field.error, color: "negative" })])), t.loading === true || e.innerLoading.value === true ? k.push(D("inner-loading-append", r.loading !== void 0 ? r.loading() : [h(St, { color: t.color })])) : t.clearable === true && e.hasValue.value === true && e.editable.value === true && k.push(D("inner-clearable-append", [h(Ce, { class: "q-field__focusable-action", tag: "button", name: t.clearIcon || a.iconSet.field.clear, tabindex: 0, type: "button", "aria-hidden": null, role: null, onClick: B })])), r.append !== void 0 && k.push(h("div", { class: "q-field__append q-field__marginal row no-wrap items-center", key: "append", onClick: ut }, r.append())), e.getInnerAppend !== void 0 && k.push(D("inner-append", e.getInnerAppend())), e.getControlChild !== void 0 && k.push(e.getControlChild()), k;
  }
  function S() {
    let k = [];
    return t.prefix !== void 0 && t.prefix !== null && k.push(h("div", { class: "q-field__prefix no-pointer-events row items-center" }, t.prefix)), e.getShadowControl !== void 0 && e.hasShadow.value === true && k.push(e.getShadowControl()), e.getControl !== void 0 ? k.push(e.getControl()) : r.rawControl !== void 0 ? k.push(r.rawControl()) : r.control !== void 0 && k.push(h("div", { ref: e.targetRef, class: "q-field__native row", tabindex: -1, ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0 }, r.control(g.value))), b.value === true && k.push(h("div", { class: h2.value }, ee(r.label, t.label))), t.suffix !== void 0 && t.suffix !== null && k.push(h("div", { class: "q-field__suffix no-pointer-events row items-center" }, t.suffix)), k.concat(ee(r.default));
  }
  function q() {
    let k, I;
    u.value === true ? m.value !== null ? (k = [h("div", { role: "alert" }, m.value)], I = `q--slot-error-${m.value}`) : (k = ee(r.error), I = "q--slot-error") : (t.hideHint !== true || e.focused.value === true) && (t.hint !== void 0 ? (k = [h("div", t.hint)], I = `q--slot-hint-${t.hint}`) : (k = ee(r.hint), I = "q--slot-hint"));
    let W = t.counter === true || r.counter !== void 0;
    if (t.hideBottomSpace === true && W === false && k === void 0)
      return;
    let ae = h("div", { key: I, class: "q-field__messages col" }, k);
    return h("div", { class: "q-field__bottom row items-start q-field__bottom--" + (t.hideBottomSpace !== true ? "animated" : "stale"), onClick: ut }, [t.hideBottomSpace === true ? ae : h(Transition, { name: "q-transition--field-message" }, () => ae), W === true ? h("div", { class: "q-field__counter" }, r.counter !== void 0 ? r.counter() : e.computedCounter.value) : null]);
  }
  function D(k, I) {
    return I === null ? null : h("div", { key: k, class: "q-field__append q-field__marginal row no-wrap items-center q-anchor--skip" }, I);
  }
  let j = false;
  return onDeactivated(() => {
    j = true;
  }), onActivated(() => {
    j === true && t.autofocus === true && i.focus();
  }), t.autofocus === true && onMounted(() => {
    i.focus();
  }), onBeforeUnmount(() => {
    l !== null && clearTimeout(l);
  }), Object.assign(i, { focus: $, blur: F }), function() {
    let I = e.getControl === void 0 && r.control === void 0 ? { ...e.splitAttrs.attributes.value, "data-autofocus": t.autofocus === true || void 0, ...C.value } : C.value;
    return h(e.tag.value, { ref: e.rootRef, class: [p.value, n.class], style: n.style, ...I }, [r.before !== void 0 ? h("div", { class: "q-field__before q-field__marginal row no-wrap items-center", onClick: ut }, r.before()) : null, h("div", { class: "q-field__inner relative-position col self-stretch" }, [h("div", { ref: e.controlRef, class: w.value, tabindex: -1, ...e.controlEvents }, P()), v.value === true ? q() : null]), r.after !== void 0 ? h("div", { class: "q-field__after q-field__marginal row no-wrap items-center", onClick: ut }, r.after()) : null]);
  };
}
var Pu = M({ name: "QField", inheritAttrs: false, props: { ...zn, tag: { type: String, default: "label" } }, emits: cr, setup() {
  return fr(dr({ requiredForAttr: false, tagProp: true }));
} });
function oa(e, t, o, r) {
  let n = [];
  return e.forEach((i) => {
    r(i) === true ? n.push(i) : t.push({ failedPropValidation: o, file: i });
  }), n;
}
function Au(e) {
  e && e.dataTransfer && (e.dataTransfer.dropEffect = "copy"), Se(e);
}
var $u = { multiple: Boolean, accept: String, capture: String, maxFileSize: [Number, String], maxTotalSize: [Number, String], maxFiles: [Number, String], filter: Function };
var Eu = ["rejected"];
function Bu({ editable: e, dnd: t, getFileInput: o, addFilesToQueue: r }) {
  let { props: n, emit: i, proxy: a } = getCurrentInstance(), l = ref(null), s = computed(() => n.accept !== void 0 ? n.accept.split(",").map((b) => (b = b.trim(), b === "*" ? "*/" : (b.endsWith("/*") && (b = b.slice(0, b.length - 1)), b.toUpperCase()))) : null), c = computed(() => parseInt(n.maxFiles, 10)), u = computed(() => parseInt(n.maxTotalSize, 10));
  function m(b) {
    if (e.value)
      if (b !== Object(b) && (b = { target: null }), b.target !== null && b.target.matches('input[type="file"]') === true)
        b.clientX === 0 && b.clientY === 0 && et(b);
      else {
        let h2 = o();
        h2 && h2 !== b.target && h2.click(b);
      }
  }
  function f(b) {
    e.value && b && r(null, b);
  }
  function d(b, h2, g, C) {
    let R = Array.from(h2 || b.target.files), $ = [], F = () => {
      $.length !== 0 && i("rejected", $);
    };
    if (n.accept !== void 0 && s.value.indexOf("*/") === -1 && (R = oa(R, $, "accept", (E) => s.value.some((A) => E.type.toUpperCase().startsWith(A) || E.name.toUpperCase().endsWith(A))), R.length === 0))
      return F();
    if (n.maxFileSize !== void 0) {
      let E = parseInt(n.maxFileSize, 10);
      if (R = oa(R, $, "max-file-size", (A) => A.size <= E), R.length === 0)
        return F();
    }
    if (n.multiple !== true && R.length !== 0 && (R = [R[0]]), R.forEach((E) => {
      E.__key = E.webkitRelativePath + E.lastModified + E.name + E.size;
    }), C === true) {
      let E = g.map((A) => A.__key);
      R = oa(R, $, "duplicate", (A) => E.includes(A.__key) === false);
    }
    if (R.length === 0)
      return F();
    if (n.maxTotalSize !== void 0) {
      let E = C === true ? g.reduce((A, B) => A + B.size, 0) : 0;
      if (R = oa(R, $, "max-total-size", (A) => (E += A.size, E <= u.value)), R.length === 0)
        return F();
    }
    if (typeof n.filter == "function") {
      let E = n.filter(R);
      R = oa(R, $, "filter", (A) => E.includes(A));
    }
    if (n.maxFiles !== void 0) {
      let E = C === true ? g.length : 0;
      if (R = oa(R, $, "max-files", () => (E++, E <= c.value)), R.length === 0)
        return F();
    }
    if (F(), R.length !== 0)
      return R;
  }
  function v(b) {
    Au(b), t.value !== true && (t.value = true);
  }
  function x(b) {
    Se(b), (b.relatedTarget !== null || _e.is.safari !== true ? b.relatedTarget !== l.value : document.elementsFromPoint(b.clientX, b.clientY).includes(l.value) === false) === true && (t.value = false);
  }
  function p(b) {
    Au(b);
    let h2 = b.dataTransfer.files;
    h2.length !== 0 && r(null, h2), t.value = false;
  }
  function w(b) {
    if (t.value === true)
      return h("div", { ref: l, class: `q-${b}__dnd absolute-full`, onDragenter: Au, onDragover: Au, onDragleave: x, onDrop: p });
  }
  return Object.assign(a, { pickFiles: m, addFiles: f }), { pickFiles: m, addFiles: f, onDragover: v, onDragleave: x, processFiles: d, getDndNode: w, maxFilesNumber: c, maxTotalSizeNumber: u };
}
function Fu(e, t) {
  function o() {
    let r = e.modelValue;
    try {
      let n = "DataTransfer" in window ? new DataTransfer() : "ClipboardEvent" in window ? new ClipboardEvent("").clipboardData : void 0;
      return Object(r) === r && ("length" in r ? Array.from(r) : [r]).forEach((i) => {
        n.items.add(i);
      }), { files: n.files };
    } catch {
      return { files: void 0 };
    }
  }
  return t === true ? computed(() => {
    if (e.type === "file")
      return o();
  }) : computed(o);
}
var $v = M({ name: "QFile", inheritAttrs: false, props: { ...zn, ...xt, ...$u, modelValue: [File, FileList, Array], append: Boolean, useChips: Boolean, displayValue: [String, Number], tabindex: { type: [String, Number], default: 0 }, counterLabel: Function, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...cr, ...Eu], setup(e, { slots: t, emit: o, attrs: r }) {
  let { proxy: n } = getCurrentInstance(), i = dr(), a = ref(null), l = ref(false), s = Ai(e), { pickFiles: c, onDragover: u, onDragleave: m, processFiles: f, getDndNode: d } = Bu({ editable: i.editable, dnd: l, getFileInput: P, addFilesToQueue: S }), v = Fu(e), x = computed(() => Object(e.modelValue) === e.modelValue ? "length" in e.modelValue ? Array.from(e.modelValue) : [e.modelValue] : []), p = computed(() => bn(x.value)), w = computed(() => x.value.map((k) => k.name).join(", ")), b = computed(() => ri(x.value.reduce((k, I) => k + I.size, 0))), h2 = computed(() => ({ totalSize: b.value, filesNumber: x.value.length, maxFiles: e.maxFiles })), g = computed(() => ({ tabindex: -1, type: "file", title: "", accept: e.accept, capture: e.capture, name: s.value, ...r, id: i.targetUid.value, disabled: i.editable.value !== true })), C = computed(() => "q-file q-field--auto-height" + (l.value === true ? " q-file--dnd" : "")), R = computed(() => e.multiple === true && e.append === true);
  function $(k) {
    let I = x.value.slice();
    I.splice(k, 1), E(I);
  }
  function F(k) {
    let I = x.value.indexOf(k);
    I !== -1 && $(I);
  }
  function E(k) {
    o("update:modelValue", e.multiple === true ? k : k[0]);
  }
  function A(k) {
    k.keyCode === 13 && ut(k);
  }
  function B(k) {
    (k.keyCode === 13 || k.keyCode === 32) && c(k);
  }
  function P() {
    return a.value;
  }
  function S(k, I) {
    let W = f(k, I, x.value, R.value), ae = P();
    ae != null && (ae.value = ""), W !== void 0 && ((e.multiple === true ? e.modelValue && W.every((V) => x.value.includes(V)) : e.modelValue === W[0]) || E(R.value === true ? x.value.concat(W) : W));
  }
  function q() {
    return [h("input", { class: [e.inputClass, "q-file__filler"], style: e.inputStyle })];
  }
  function D() {
    if (t.file !== void 0)
      return x.value.length === 0 ? q() : x.value.map((I, W) => t.file({ index: W, file: I, ref: this }));
    if (t.selected !== void 0)
      return x.value.length === 0 ? q() : t.selected({ files: x.value, ref: this });
    if (e.useChips === true)
      return x.value.length === 0 ? q() : x.value.map((I, W) => h(Ki, { key: "file-" + W, removable: i.editable.value, dense: true, textColor: e.color, tabindex: e.tabindex, onRemove: () => {
        $(W);
      } }, () => h("span", { class: "ellipsis", textContent: I.name })));
    let k = e.displayValue !== void 0 ? e.displayValue : w.value;
    return k.length !== 0 ? [h("div", { class: e.inputClass, style: e.inputStyle, textContent: k })] : q();
  }
  function j() {
    let k = { ref: a, ...g.value, ...v.value, class: "q-field__input fit absolute-full cursor-pointer", onChange: S };
    return e.multiple === true && (k.multiple = true), h("input", k);
  }
  return Object.assign(i, { fieldClass: C, emitValue: E, hasValue: p, inputRef: a, innerValue: x, floatingLabel: computed(() => p.value === true || bn(e.displayValue)), computedCounter: computed(() => {
    if (e.counterLabel !== void 0)
      return e.counterLabel(h2.value);
    let k = e.maxFiles;
    return `${x.value.length}${k !== void 0 ? " / " + k : ""} (${b.value})`;
  }), getControlChild: () => d("file"), getControl: () => {
    let k = { ref: i.targetRef, class: "q-field__native row items-center cursor-pointer", tabindex: e.tabindex };
    return i.editable.value === true && Object.assign(k, { onDragover: u, onDragleave: m, onKeydown: A, onKeyup: B }), h("div", k, [j()].concat(D()));
  } }), Object.assign(n, { removeAtIndex: $, removeFile: F, getNativeElement: () => a.value }), it(n, "nativeEl", () => a.value), fr(i);
} });
var Ev = M({ name: "QFooter", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), n = inject(uo, We);
  if (n === We)
    return console.error("QFooter needs to be child of QLayout"), We;
  let i = ref(parseInt(e.heightHint, 10)), a = ref(true), l = ref(_t.value === true || n.isContainer.value === true ? 0 : window.innerHeight), s = computed(() => e.reveal === true || n.view.value.indexOf("F") !== -1 || r.platform.is.ios && n.isContainer.value === true), c = computed(() => n.isContainer.value === true ? n.containerHeight.value : l.value), u = computed(() => {
    if (e.modelValue !== true)
      return 0;
    if (s.value === true)
      return a.value === true ? i.value : 0;
    let C = n.scroll.value.position + c.value + i.value - n.height.value;
    return C > 0 ? C : 0;
  }), m = computed(() => e.modelValue !== true || s.value === true && a.value !== true), f = computed(() => e.modelValue === true && m.value === true && e.reveal === true), d = computed(() => "q-footer q-layout__section--marginal " + (s.value === true ? "fixed" : "absolute") + "-bottom" + (e.bordered === true ? " q-footer--bordered" : "") + (m.value === true ? " q-footer--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" + (s.value !== true ? " hidden" : "") : "")), v = computed(() => {
    let C = n.rows.value.bottom, R = {};
    return C[0] === "l" && n.left.space === true && (R[r.lang.rtl === true ? "right" : "left"] = `${n.left.size}px`), C[2] === "r" && n.right.space === true && (R[r.lang.rtl === true ? "left" : "right"] = `${n.right.size}px`), R;
  });
  function x(C, R) {
    n.update("footer", C, R);
  }
  function p(C, R) {
    C.value !== R && (C.value = R);
  }
  function w({ height: C }) {
    p(i, C), x("size", C);
  }
  function b() {
    if (e.reveal !== true)
      return;
    let { direction: C, position: R, inflectionPoint: $ } = n.scroll.value;
    p(a, C === "up" || R - $ < 100 || n.height.value - c.value - R - i.value < 300);
  }
  function h2(C) {
    f.value === true && p(a, true), o("focusin", C);
  }
  watch(() => e.modelValue, (C) => {
    x("space", C), p(a, true), n.animate();
  }), watch(u, (C) => {
    x("offset", C);
  }), watch(() => e.reveal, (C) => {
    C === false && p(a, e.modelValue);
  }), watch(a, (C) => {
    n.animate(), o("reveal", C);
  }), watch([i, n.scroll, n.height], b), watch(() => r.screen.height, (C) => {
    n.isContainer.value !== true && p(l, C);
  });
  let g = {};
  return n.instances.footer = g, e.modelValue === true && x("size", i.value), x("space", e.modelValue), x("offset", u.value), onBeforeUnmount(() => {
    n.instances.footer === g && (n.instances.footer = void 0, x("size", 0), x("offset", 0), x("space", false));
  }), () => {
    let C = je(t.default, [h(go, { debounce: 0, onResize: w })]);
    return e.elevated === true && C.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), h("footer", { class: d.value, style: v.value, onFocusin: h2 }, C);
  };
} });
var Bv = M({ name: "QForm", props: { autofocus: Boolean, noErrorFocus: Boolean, noResetFocus: Boolean, greedy: Boolean, onSubmit: Function }, emits: ["reset", "validationSuccess", "validationError"], setup(e, { slots: t, emit: o }) {
  let r = getCurrentInstance(), n = ref(null), i = 0, a = [];
  function l(d) {
    let v = typeof d == "boolean" ? d : e.noErrorFocus !== true, x = ++i, p = (h2, g) => {
      o("validation" + (h2 === true ? "Success" : "Error"), g);
    }, w = (h2) => {
      let g = h2.validate();
      return typeof g.then == "function" ? g.then((C) => ({ valid: C, comp: h2 }), (C) => ({ valid: false, comp: h2, err: C })) : Promise.resolve({ valid: g, comp: h2 });
    };
    return (e.greedy === true ? Promise.all(a.map(w)).then((h2) => h2.filter((g) => g.valid !== true)) : a.reduce((h2, g) => h2.then(() => w(g).then((C) => {
      if (C.valid === false)
        return Promise.reject(C);
    })), Promise.resolve()).catch((h2) => [h2])).then((h2) => {
      if (h2 === void 0 || h2.length === 0)
        return x === i && p(true), true;
      if (x === i) {
        let { comp: g, err: C } = h2[0];
        if (C !== void 0 && console.error(C), p(false, g), v === true) {
          let R = h2.find(({ comp: $ }) => typeof $.focus == "function" && so($.$) === false);
          R !== void 0 && R.comp.focus();
        }
      }
      return false;
    });
  }
  function s() {
    i++, a.forEach((d) => {
      typeof d.resetValidation == "function" && d.resetValidation();
    });
  }
  function c(d) {
    d !== void 0 && Se(d);
    let v = i + 1;
    l().then((x) => {
      v === i && x === true && (e.onSubmit !== void 0 ? o("submit", d) : d !== void 0 && d.target !== void 0 && typeof d.target.submit == "function" && d.target.submit());
    });
  }
  function u(d) {
    d !== void 0 && Se(d), o("reset"), nextTick(() => {
      s(), e.autofocus === true && e.noResetFocus !== true && m();
    });
  }
  function m() {
    Bo(() => {
      if (n.value === null)
        return;
      let d = n.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]") || n.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]") || n.value.querySelector("[autofocus], [data-autofocus]") || Array.prototype.find.call(n.value.querySelectorAll("[tabindex]"), (v) => v.tabIndex !== -1);
      d == null ? void 0 : d.focus({ preventScroll: true });
    });
  }
  provide(Pn, { bindComponent(d) {
    a.push(d);
  }, unbindComponent(d) {
    let v = a.indexOf(d);
    v !== -1 && a.splice(v, 1);
  } });
  let f = false;
  return onDeactivated(() => {
    f = true;
  }), onActivated(() => {
    f === true && e.autofocus === true && m();
  }), onMounted(() => {
    e.autofocus === true && m();
  }), Object.assign(r.proxy, { validate: l, resetValidation: s, submit: c, reset: u, focus: m, getValidationComponents: () => a }), () => h("form", { class: "q-form", ref: n, onSubmit: c, onReset: u }, ee(t.default));
} });
var Fv = { inject: { [Pn]: { default: Ke } }, watch: { disable(e) {
  let t = this.$.provides[Pn];
  t !== void 0 && (e === true ? (this.resetValidation(), t.unbindComponent(this)) : t.bindComponent(this));
} }, methods: { validate() {
}, resetValidation() {
} }, mounted() {
  let e = this.$.provides[Pn];
  e !== void 0 && this.disable !== true && e.bindComponent(this);
}, beforeUnmount() {
  let e = this.$.provides[Pn];
  e !== void 0 && this.disable !== true && e.unbindComponent(this);
} };
var Vv = M({ name: "QHeader", props: { modelValue: { type: Boolean, default: true }, reveal: Boolean, revealOffset: { type: Number, default: 250 }, bordered: Boolean, elevated: Boolean, heightHint: { type: [String, Number], default: 50 } }, emits: ["reveal", "focusin"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), n = inject(uo, We);
  if (n === We)
    return console.error("QHeader needs to be child of QLayout"), We;
  let i = ref(parseInt(e.heightHint, 10)), a = ref(true), l = computed(() => e.reveal === true || n.view.value.indexOf("H") !== -1 || r.platform.is.ios && n.isContainer.value === true), s = computed(() => {
    if (e.modelValue !== true)
      return 0;
    if (l.value === true)
      return a.value === true ? i.value : 0;
    let b = i.value - n.scroll.value.position;
    return b > 0 ? b : 0;
  }), c = computed(() => e.modelValue !== true || l.value === true && a.value !== true), u = computed(() => e.modelValue === true && c.value === true && e.reveal === true), m = computed(() => "q-header q-layout__section--marginal " + (l.value === true ? "fixed" : "absolute") + "-top" + (e.bordered === true ? " q-header--bordered" : "") + (c.value === true ? " q-header--hidden" : "") + (e.modelValue !== true ? " q-layout--prevent-focus" : "")), f = computed(() => {
    let b = n.rows.value.top, h2 = {};
    return b[0] === "l" && n.left.space === true && (h2[r.lang.rtl === true ? "right" : "left"] = `${n.left.size}px`), b[2] === "r" && n.right.space === true && (h2[r.lang.rtl === true ? "left" : "right"] = `${n.right.size}px`), h2;
  });
  function d(b, h2) {
    n.update("header", b, h2);
  }
  function v(b, h2) {
    b.value !== h2 && (b.value = h2);
  }
  function x({ height: b }) {
    v(i, b), d("size", b);
  }
  function p(b) {
    u.value === true && v(a, true), o("focusin", b);
  }
  watch(() => e.modelValue, (b) => {
    d("space", b), v(a, true), n.animate();
  }), watch(s, (b) => {
    d("offset", b);
  }), watch(() => e.reveal, (b) => {
    b === false && v(a, e.modelValue);
  }), watch(a, (b) => {
    n.animate(), o("reveal", b);
  }), watch(n.scroll, (b) => {
    e.reveal === true && v(a, b.direction === "up" || b.position <= e.revealOffset || b.position - b.inflectionPoint < 100);
  });
  let w = {};
  return n.instances.header = w, e.modelValue === true && d("size", i.value), d("space", e.modelValue), d("offset", s.value), onBeforeUnmount(() => {
    n.instances.header === w && (n.instances.header = void 0, d("size", 0), d("offset", 0), d("space", false));
  }), () => {
    let b = en(t.default, []);
    return e.elevated === true && b.push(h("div", { class: "q-layout__shadow absolute-full overflow-hidden no-pointer-events" })), b.push(h(go, { debounce: 0, onResize: x })), h("header", { class: m.value, style: f.value, onFocusin: p }, b);
  };
} });
var aa = { ratio: [String, Number] };
function la(e, t) {
  return computed(() => {
    let o = Number(e.ratio || (t !== void 0 ? t.value : void 0));
    return isNaN(o) !== true && o > 0 ? { paddingBottom: `${100 / o}%` } : null;
  });
}
var n1 = 16 / 9;
var zv = M({ name: "QImg", props: { ...aa, src: String, srcset: String, sizes: String, alt: String, crossorigin: String, decoding: String, referrerpolicy: String, draggable: Boolean, loading: { type: String, default: "lazy" }, loadingShowDelay: { type: [Number, String], default: 0 }, fetchpriority: { type: String, default: "auto" }, width: String, height: String, initialRatio: { type: [Number, String], default: n1 }, placeholderSrc: String, fit: { type: String, default: "cover" }, position: { type: String, default: "50% 50%" }, imgClass: String, imgStyle: Object, noSpinner: Boolean, noNativeMenu: Boolean, noTransition: Boolean, spinnerColor: String, spinnerSize: String }, emits: ["load", "error"], setup(e, { slots: t, emit: o }) {
  let r = ref(e.initialRatio), n = la(e, r), i = getCurrentInstance(), { registerTimeout: a, removeTimeout: l } = co(), { registerTimeout: s, removeTimeout: c } = co(), u = [ref(null), ref(C())], m = ref(0), f = ref(false), d = ref(false), v = computed(() => `q-img q-img--${e.noNativeMenu === true ? "no-" : ""}menu`), x = computed(() => ({ width: e.width, height: e.height })), p = computed(() => `q-img__image ${e.imgClass !== void 0 ? e.imgClass + " " : ""}q-img__image--with${e.noTransition === true ? "out" : ""}-transition`), w = computed(() => ({ ...e.imgStyle, objectFit: e.fit, objectPosition: e.position }));
  watch(() => g(), R);
  function b() {
    if (c(), e.loadingShowDelay === 0) {
      f.value = true;
      return;
    }
    s(() => {
      f.value = true;
    }, e.loadingShowDelay);
  }
  function h2() {
    c(), f.value = false;
  }
  function g() {
    return e.src || e.srcset || e.sizes ? { src: e.src, srcset: e.srcset, sizes: e.sizes } : null;
  }
  function C() {
    return e.placeholderSrc !== void 0 ? { src: e.placeholderSrc } : null;
  }
  function R(S) {
    l(), d.value = false, S === null ? (h2(), u[m.value ^ 1].value = C()) : b(), u[m.value].value = S;
  }
  function $({ target: S }) {
    so(i) === false && (l(), r.value = S.naturalHeight === 0 ? 0.5 : S.naturalWidth / S.naturalHeight, F(S, 1));
  }
  function F(S, q) {
    q === 1e3 || so(i) === true || (S.complete === true ? E(S) : a(() => {
      F(S, q + 1);
    }, 50));
  }
  function E(S) {
    so(i) !== true && (m.value = m.value ^ 1, u[m.value].value = null, h2(), d.value = false, o("load", S.currentSrc || S.src));
  }
  function A(S) {
    l(), h2(), d.value = true, u[m.value].value = null, u[m.value ^ 1].value = C(), o("error", S);
  }
  function B(S) {
    let q = u[S].value, D = { key: "img_" + S, class: p.value, style: w.value, alt: e.alt, crossorigin: e.crossorigin, decoding: e.decoding, referrerpolicy: e.referrerpolicy, height: e.height, width: e.width, loading: e.loading, fetchpriority: e.fetchpriority, "aria-hidden": "true", draggable: e.draggable, ...q };
    return m.value === S ? (D.class += " q-img__image--waiting", Object.assign(D, { onLoad: $, onError: A })) : D.class += " q-img__image--loaded", h("div", { class: "q-img__container absolute-full", key: "img" + S }, h("img", D));
  }
  function P() {
    return f.value === false ? h("div", { key: "content", class: "q-img__content absolute-full q-anchor--skip" }, ee(t[d.value === true ? "error" : "default"])) : h("div", { key: "loading", class: "q-img__loading absolute-full flex flex-center" }, t.loading !== void 0 ? t.loading() : e.noSpinner === true ? void 0 : [h(St, { color: e.spinnerColor, size: e.spinnerSize })]);
  }
  return R(g()), () => {
    let S = [];
    return n.value !== null && S.push(h("div", { key: "filler", style: n.value })), d.value !== true && (u[0].value !== null && S.push(B(0)), u[1].value !== null && S.push(B(1))), S.push(h(Transition, { name: "q-transition--fade" }, P)), h("div", { class: v.value, style: x.value, role: "img", "aria-label": e.alt }, S);
  };
} });
var { passive: Ur } = Ye;
var Nv = M({ name: "QInfiniteScroll", props: { offset: { type: Number, default: 500 }, debounce: { type: [String, Number], default: 100 }, scrollTarget: { default: void 0 }, initialIndex: Number, disable: Boolean, reverse: Boolean }, emits: ["load"], setup(e, { slots: t, emit: o }) {
  let r = ref(false), n = ref(true), i = ref(null), a = ref(null), l = e.initialIndex || 0, s, c, u = computed(() => "q-infinite-scroll__loading" + (r.value === true ? "" : " invisible"));
  function m() {
    if (e.disable === true || r.value === true || n.value === false)
      return;
    let $ = xi(s), F = fo(s), E = on(s);
    e.reverse === false ? Math.round(F + E + e.offset) >= Math.round($) && f() : Math.round(F) <= e.offset && f();
  }
  function f() {
    if (e.disable === true || r.value === true || n.value === false)
      return;
    l++, r.value = true;
    let $ = xi(s);
    o("load", l, (F) => {
      n.value === true && (r.value = false, nextTick(() => {
        if (e.reverse === true) {
          let E = xi(s), A = fo(s), B = E - $;
          un(s, A + B);
        }
        F === true ? x() : i.value && i.value.closest("body") && c();
      }));
    });
  }
  function d() {
    l = 0;
  }
  function v() {
    n.value === false && (n.value = true, s.addEventListener("scroll", c, Ur)), m();
  }
  function x() {
    n.value === true && (n.value = false, r.value = false, s.removeEventListener("scroll", c, Ur), c !== void 0 && c.cancel !== void 0 && c.cancel());
  }
  function p() {
    if (s && n.value === true && s.removeEventListener("scroll", c, Ur), s = At(i.value, e.scrollTarget), n.value === true) {
      if (s.addEventListener("scroll", c, Ur), e.reverse === true) {
        let $ = xi(s), F = on(s);
        un(s, $ - F);
      }
      m();
    }
  }
  function w($) {
    l = $;
  }
  function b($) {
    $ = parseInt($, 10);
    let F = c;
    c = $ <= 0 ? m : So(m, isNaN($) === true ? 100 : $), s && n.value === true && (F !== void 0 && s.removeEventListener("scroll", F, Ur), s.addEventListener("scroll", c, Ur));
  }
  function h2($) {
    if (g.value === true) {
      if (a.value === null) {
        $ !== true && nextTick(() => {
          h2(true);
        });
        return;
      }
      let F = `${r.value === true ? "un" : ""}pauseAnimations`;
      Array.from(a.value.getElementsByTagName("svg")).forEach((E) => {
        E[F]();
      });
    }
  }
  let g = computed(() => e.disable !== true && n.value === true);
  watch([r, g], () => {
    h2();
  }), watch(() => e.disable, ($) => {
    $ === true ? x() : v();
  }), watch(() => e.reverse, () => {
    r.value === false && n.value === true && m();
  }), watch(() => e.scrollTarget, p), watch(() => e.debounce, b);
  let C = false;
  onActivated(() => {
    C !== false && s && un(s, C);
  }), onDeactivated(() => {
    C = s ? fo(s) : false;
  }), onBeforeUnmount(() => {
    n.value === true && s.removeEventListener("scroll", c, Ur);
  }), onMounted(() => {
    b(e.debounce), p(), r.value === false && h2();
  });
  let R = getCurrentInstance();
  return Object.assign(R.proxy, { poll: () => {
    c !== void 0 && c();
  }, trigger: f, stop: x, reset: d, resume: v, setIndex: w, updateScrollTarget: p }), () => {
    let $ = en(t.default, []);
    return g.value === true && $[e.reverse === false ? "push" : "unshift"](h("div", { ref: a, class: u.value }, ee(t.loading))), h("div", { class: "q-infinite-scroll", ref: i }, $);
  };
} });
var Qv = M({ name: "QInnerLoading", props: { ...pe, ...an, showing: Boolean, color: String, size: { type: [String, Number], default: 42 }, label: String, labelClass: String, labelStyle: [String, Array, Object] }, setup(e, { slots: t }) {
  let o = getCurrentInstance(), r = be(e, o.proxy.$q), { transitionProps: n, transitionStyle: i } = Gn(e), a = computed(() => "q-inner-loading q--avoid-card-border absolute-full column flex-center" + (r.value === true ? " q-inner-loading--dark" : "")), l = computed(() => "q-inner-loading__label" + (e.labelClass !== void 0 ? ` ${e.labelClass}` : ""));
  function s() {
    let u = [h(St, { size: e.size, color: e.color })];
    return e.label !== void 0 && u.push(h("div", { class: l.value, style: e.labelStyle }, [e.label])), u;
  }
  function c() {
    return e.showing === true ? h("div", { class: a.value, style: i.value }, t.default !== void 0 ? t.default() : s()) : null;
  }
  return () => h(Transition, n.value, c);
} });
var Uv = { date: "####/##/##", datetime: "####/##/## ##:##", time: "##:##", fulltime: "##:##:##", phone: "(###) ### - ####", card: "#### #### #### ####" };
var Ou = { "#": { pattern: "[\\d]", negate: "[^\\d]" }, S: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]" }, N: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]" }, A: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, a: { pattern: "[a-zA-Z]", negate: "[^a-zA-Z]", transform: (e) => e.toLocaleLowerCase() }, X: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleUpperCase() }, x: { pattern: "[0-9a-zA-Z]", negate: "[^0-9a-zA-Z]", transform: (e) => e.toLocaleLowerCase() } };
var Wv = Object.keys(Ou);
Wv.forEach((e) => {
  Ou[e].regex = new RegExp(Ou[e].pattern);
});
var f1 = new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|([" + Wv.join("") + "])|(.)", "g");
var Kv = /[.*+?^${}()|[\]\\]/g;
var Bt = "";
var Yv = { mask: String, reverseFillMask: Boolean, fillMask: [Boolean, String], unmaskedValue: Boolean };
function Xv(e, t, o, r) {
  let n, i, a, l, s, c, u = ref(null), m = ref(d());
  function f() {
    return e.autogrow === true || ["textarea", "text", "search", "url", "tel", "password"].includes(e.type);
  }
  watch(() => e.type + e.autogrow, x), watch(() => e.mask, (E) => {
    if (E !== void 0)
      p(m.value, true);
    else {
      let A = $(m.value);
      x(), e.modelValue !== A && t("update:modelValue", A);
    }
  }), watch(() => e.fillMask + e.reverseFillMask, () => {
    u.value === true && p(m.value, true);
  }), watch(() => e.unmaskedValue, () => {
    u.value === true && p(m.value);
  });
  function d() {
    if (x(), u.value === true) {
      let E = C($(e.modelValue));
      return e.fillMask !== false ? F(E) : E;
    }
    return e.modelValue;
  }
  function v(E) {
    if (E < n.length)
      return n.slice(-E);
    let A = "", B = n, P = B.indexOf(Bt);
    if (P !== -1) {
      for (let S = E - B.length; S > 0; S--)
        A += Bt;
      B = B.slice(0, P) + A + B.slice(P);
    }
    return B;
  }
  function x() {
    if (u.value = e.mask !== void 0 && e.mask.length !== 0 && f(), u.value === false) {
      l = void 0, n = "", i = "";
      return;
    }
    let E = Uv[e.mask] === void 0 ? e.mask : Uv[e.mask], A = typeof e.fillMask == "string" && e.fillMask.length !== 0 ? e.fillMask.slice(0, 1) : "_", B = A.replace(Kv, "\\$&"), P = [], S = [], q = [], D = e.reverseFillMask === true, j = "", k = "";
    E.replace(f1, (V, _, H, O, Y) => {
      if (O !== void 0) {
        let Q = Ou[O];
        q.push(Q), k = Q.negate, D === true && (S.push("(?:" + k + "+)?(" + Q.pattern + "+)?(?:" + k + "+)?(" + Q.pattern + "+)?"), D = false), S.push("(?:" + k + "+)?(" + Q.pattern + ")?");
      } else if (H !== void 0)
        j = "\\" + (H === "\\" ? "" : H), q.push(H), P.push("([^" + j + "]+)?" + j + "?");
      else {
        let Q = _ !== void 0 ? _ : Y;
        j = Q === "\\" ? "\\\\\\\\" : Q.replace(Kv, "\\\\$&"), q.push(Q), P.push("([^" + j + "]+)?" + j + "?");
      }
    });
    let I = new RegExp("^" + P.join("") + "(" + (j === "" ? "." : "[^" + j + "]") + "+)?" + (j === "" ? "" : "[" + j + "]*") + "$"), W = S.length - 1, ae = S.map((V, _) => _ === 0 && e.reverseFillMask === true ? new RegExp("^" + B + "*" + V) : _ === W ? new RegExp("^" + V + "(" + (k === "" ? "." : k) + "+)?" + (e.reverseFillMask === true ? "$" : B + "*")) : new RegExp("^" + V));
    a = q, l = (V) => {
      let _ = I.exec(e.reverseFillMask === true ? V : V.slice(0, q.length + 1));
      _ !== null && (V = _.slice(1).join(""));
      let H = [], O = ae.length;
      for (let Y = 0, Q = V; Y < O; Y++) {
        let ne = ae[Y].exec(Q);
        if (ne === null)
          break;
        Q = Q.slice(ne.shift().length), H.push(...ne);
      }
      return H.length !== 0 ? H.join("") : V;
    }, n = q.map((V) => typeof V == "string" ? V : Bt).join(""), i = n.split(Bt).join(A);
  }
  function p(E, A, B) {
    let P = r.value, S = P.selectionEnd, q = P.value.length - S, D = $(E);
    A === true && x();
    let j = C(D), k = e.fillMask !== false ? F(j) : j, I = m.value !== k;
    P.value !== k && (P.value = k), I === true && (m.value = k), document.activeElement === P && nextTick(() => {
      if (k === i) {
        let ae = e.reverseFillMask === true ? i.length : 0;
        P.setSelectionRange(ae, ae, "forward");
        return;
      }
      if (B === "insertFromPaste" && e.reverseFillMask !== true) {
        let ae = P.selectionEnd, V = S - 1;
        for (let _ = s; _ <= V && _ < ae; _++)
          n[_] !== Bt && V++;
        b.right(P, V);
        return;
      }
      if (["deleteContentBackward", "deleteContentForward"].indexOf(B) !== -1) {
        let ae = e.reverseFillMask === true ? S === 0 ? k.length > j.length ? 1 : 0 : Math.max(0, k.length - (k === i ? 0 : Math.min(j.length, q) + 1)) + 1 : S;
        P.setSelectionRange(ae, ae, "forward");
        return;
      }
      if (e.reverseFillMask === true)
        if (I === true) {
          let ae = Math.max(0, k.length - (k === i ? 0 : Math.min(j.length, q + 1)));
          ae === 1 && S === 1 ? P.setSelectionRange(ae, ae, "forward") : b.rightReverse(P, ae);
        } else {
          let ae = k.length - q;
          P.setSelectionRange(ae, ae, "backward");
        }
      else if (I === true) {
        let ae = Math.max(0, n.indexOf(Bt), Math.min(j.length, S) - 1);
        b.right(P, ae);
      } else {
        let ae = S - 1;
        b.right(P, ae);
      }
    });
    let W = e.unmaskedValue === true ? $(k) : k;
    String(e.modelValue) !== W && (e.modelValue !== null || W !== "") && o(W, true);
  }
  function w(E, A, B) {
    let P = C($(E.value));
    A = Math.max(0, n.indexOf(Bt), Math.min(P.length, A)), s = A, E.setSelectionRange(A, B, "forward");
  }
  let b = { left(E, A) {
    let B = n.slice(A - 1).indexOf(Bt) === -1, P = Math.max(0, A - 1);
    for (; P >= 0; P--)
      if (n[P] === Bt) {
        A = P, B === true && A++;
        break;
      }
    if (P < 0 && n[A] !== void 0 && n[A] !== Bt)
      return b.right(E, 0);
    A >= 0 && E.setSelectionRange(A, A, "backward");
  }, right(E, A) {
    let B = E.value.length, P = Math.min(B, A + 1);
    for (; P <= B; P++)
      if (n[P] === Bt) {
        A = P;
        break;
      } else
        n[P - 1] === Bt && (A = P);
    if (P > B && n[A - 1] !== void 0 && n[A - 1] !== Bt)
      return b.left(E, B);
    E.setSelectionRange(A, A, "forward");
  }, leftReverse(E, A) {
    let B = v(E.value.length), P = Math.max(0, A - 1);
    for (; P >= 0; P--)
      if (B[P - 1] === Bt) {
        A = P;
        break;
      } else if (B[P] === Bt && (A = P, P === 0))
        break;
    if (P < 0 && B[A] !== void 0 && B[A] !== Bt)
      return b.rightReverse(E, 0);
    A >= 0 && E.setSelectionRange(A, A, "backward");
  }, rightReverse(E, A) {
    let B = E.value.length, P = v(B), S = P.slice(0, A + 1).indexOf(Bt) === -1, q = Math.min(B, A + 1);
    for (; q <= B; q++)
      if (P[q - 1] === Bt) {
        A = q, A > 0 && S === true && A--;
        break;
      }
    if (q > B && P[A - 1] !== void 0 && P[A - 1] !== Bt)
      return b.leftReverse(E, B);
    E.setSelectionRange(A, A, "forward");
  } };
  function h2(E) {
    t("click", E), c = void 0;
  }
  function g(E) {
    if (t("keydown", E), xo(E) === true || E.altKey === true)
      return;
    let A = r.value, B = A.selectionStart, P = A.selectionEnd;
    if (E.shiftKey || (c = void 0), E.keyCode === 37 || E.keyCode === 39) {
      E.shiftKey && c === void 0 && (c = A.selectionDirection === "forward" ? B : P);
      let S = b[(E.keyCode === 39 ? "right" : "left") + (e.reverseFillMask === true ? "Reverse" : "")];
      if (E.preventDefault(), S(A, c === B ? P : B), E.shiftKey) {
        let q = A.selectionStart;
        A.setSelectionRange(Math.min(c, q), Math.max(c, q), "forward");
      }
    } else
      E.keyCode === 8 && e.reverseFillMask !== true && B === P ? (b.left(A, B), A.setSelectionRange(A.selectionStart, P, "backward")) : E.keyCode === 46 && e.reverseFillMask === true && B === P && (b.rightReverse(A, P), A.setSelectionRange(B, A.selectionEnd, "forward"));
  }
  function C(E) {
    if (E == null || E === "")
      return "";
    if (e.reverseFillMask === true)
      return R(E);
    let A = a, B = 0, P = "";
    for (let S = 0; S < A.length; S++) {
      let q = E[B], D = A[S];
      if (typeof D == "string")
        P += D, q === D && B++;
      else if (q !== void 0 && D.regex.test(q))
        P += D.transform !== void 0 ? D.transform(q) : q, B++;
      else
        return P;
    }
    return P;
  }
  function R(E) {
    let A = a, B = n.indexOf(Bt), P = E.length - 1, S = "";
    for (let q = A.length - 1; q >= 0 && P !== -1; q--) {
      let D = A[q], j = E[P];
      if (typeof D == "string")
        S = D + S, j === D && P--;
      else if (j !== void 0 && D.regex.test(j))
        do
          S = (D.transform !== void 0 ? D.transform(j) : j) + S, P--, j = E[P];
        while (B === q && j !== void 0 && D.regex.test(j));
      else
        return S;
    }
    return S;
  }
  function $(E) {
    return typeof E != "string" || l === void 0 ? typeof E == "number" ? l("" + E) : E : l(E);
  }
  function F(E) {
    return i.length - E.length <= 0 ? E : e.reverseFillMask === true && E.length !== 0 ? i.slice(0, -E.length) + E : E + i.slice(E.length);
  }
  return { innerValue: m, hasMask: u, moveCursorForPaste: w, updateMaskValue: p, onMaskedKeydown: g, onMaskedClick: h2 };
}
var m1 = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/;
var v1 = /[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u;
var g1 = /[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;
var h1 = /[a-z0-9_ -]$/i;
function Iu(e) {
  return function(o) {
    if (o.type === "compositionend" || o.type === "change") {
      if (o.target.qComposing !== true)
        return;
      o.target.qComposing = false, e(o);
    } else
      o.type === "compositionupdate" && o.target.qComposing !== true && typeof o.data == "string" && (_e.is.firefox === true ? h1.test(o.data) === false : m1.test(o.data) === true || v1.test(o.data) === true || g1.test(o.data) === true) === true && (o.target.qComposing = true);
  };
}
var sa = M({ name: "QInput", inheritAttrs: false, props: { ...zn, ...Yv, ...xt, modelValue: { required: false }, shadowText: String, type: { type: String, default: "text" }, debounce: [String, Number], autogrow: Boolean, inputClass: [Array, String, Object], inputStyle: [Array, String, Object] }, emits: [...cr, "paste", "change", "keydown", "click", "animationend"], setup(e, { emit: t, attrs: o }) {
  let { proxy: r } = getCurrentInstance(), { $q: n } = r, i = {}, a = NaN, l, s, c = null, u, m = ref(null), f = Ai(e), { innerValue: d, hasMask: v, moveCursorForPaste: x, updateMaskValue: p, onMaskedKeydown: w, onMaskedClick: b } = Xv(e, t, j, m), h2 = Fu(e, true), g = computed(() => bn(d.value)), C = Iu(q), R = dr(), $ = computed(() => e.type === "textarea" || e.autogrow === true), F = computed(() => $.value === true || ["text", "search", "url", "tel", "password"].includes(e.type)), E = computed(() => {
    let _ = { ...R.splitAttrs.listeners.value, onInput: q, onPaste: S, onChange: I, onBlur: W, onFocus: et };
    return _.onCompositionstart = _.onCompositionupdate = _.onCompositionend = C, v.value === true && (_.onKeydown = w, _.onClick = b), e.autogrow === true && (_.onAnimationend = D), _;
  }), A = computed(() => {
    let _ = { tabindex: 0, "data-autofocus": e.autofocus === true || void 0, rows: e.type === "textarea" ? 6 : void 0, "aria-label": e.label, name: f.value, ...R.splitAttrs.attributes.value, id: R.targetUid.value, maxlength: e.maxlength, disabled: e.disable === true, readonly: e.readonly === true };
    return $.value === false && (_.type = e.type), e.autogrow === true && (_.rows = 1), _;
  });
  watch(() => e.type, () => {
    m.value && (m.value.value = e.modelValue);
  }), watch(() => e.modelValue, (_) => {
    if (v.value === true) {
      if (s === true && (s = false, String(_) === a))
        return;
      p(_);
    } else
      d.value !== _ && (d.value = _, e.type === "number" && i.hasOwnProperty("value") === true && (l === true ? l = false : delete i.value));
    e.autogrow === true && nextTick(k);
  }), watch(() => e.autogrow, (_) => {
    _ === true ? nextTick(k) : m.value !== null && o.rows > 0 && (m.value.style.height = "auto");
  }), watch(() => e.dense, () => {
    e.autogrow === true && nextTick(k);
  });
  function B() {
    Bo(() => {
      let _ = document.activeElement;
      m.value !== null && m.value !== _ && (_ === null || _.id !== R.targetUid.value) && m.value.focus({ preventScroll: true });
    });
  }
  function P() {
    m.value !== null && m.value.select();
  }
  function S(_) {
    if (v.value === true && e.reverseFillMask !== true) {
      let H = _.target;
      x(H, H.selectionStart, H.selectionEnd);
    }
    t("paste", _);
  }
  function q(_) {
    if (!_ || !_.target)
      return;
    if (e.type === "file") {
      t("update:modelValue", _.target.files);
      return;
    }
    let H = _.target.value;
    if (_.target.qComposing === true) {
      i.value = H;
      return;
    }
    if (v.value === true)
      p(H, false, _.inputType);
    else if (j(H), F.value === true && _.target === document.activeElement) {
      let { selectionStart: O, selectionEnd: Y } = _.target;
      O !== void 0 && Y !== void 0 && nextTick(() => {
        _.target === document.activeElement && H.indexOf(_.target.value) === 0 && _.target.setSelectionRange(O, Y);
      });
    }
    e.autogrow === true && k();
  }
  function D(_) {
    t("animationend", _), k();
  }
  function j(_, H) {
    u = () => {
      c = null, e.type !== "number" && i.hasOwnProperty("value") === true && delete i.value, e.modelValue !== _ && a !== _ && (a = _, H === true && (s = true), t("update:modelValue", _), nextTick(() => {
        a === _ && (a = NaN);
      })), u = void 0;
    }, e.type === "number" && (l = true, i.value = _), e.debounce !== void 0 ? (c !== null && clearTimeout(c), i.value = _, c = setTimeout(u, e.debounce)) : u();
  }
  function k() {
    requestAnimationFrame(() => {
      let _ = m.value;
      if (_ !== null) {
        let H = _.parentNode.style, { scrollTop: O } = _, { overflowY: Y, maxHeight: Q } = n.platform.is.firefox === true ? {} : window.getComputedStyle(_), ne = Y !== void 0 && Y !== "scroll";
        ne === true && (_.style.overflowY = "hidden"), H.marginBottom = _.scrollHeight - 1 + "px", _.style.height = "1px", _.style.height = _.scrollHeight + "px", ne === true && (_.style.overflowY = parseInt(Q, 10) < _.scrollHeight ? "auto" : "hidden"), H.marginBottom = "", _.scrollTop = O;
      }
    });
  }
  function I(_) {
    C(_), c !== null && (clearTimeout(c), c = null), u !== void 0 && u(), t("change", _.target.value);
  }
  function W(_) {
    _ !== void 0 && et(_), c !== null && (clearTimeout(c), c = null), u !== void 0 && u(), l = false, s = false, delete i.value, e.type !== "file" && setTimeout(() => {
      m.value !== null && (m.value.value = d.value !== void 0 ? d.value : "");
    });
  }
  function ae() {
    return i.hasOwnProperty("value") === true ? i.value : d.value !== void 0 ? d.value : "";
  }
  onBeforeUnmount(() => {
    W();
  }), onMounted(() => {
    e.autogrow === true && k();
  }), Object.assign(R, { innerValue: d, fieldClass: computed(() => `q-${$.value === true ? "textarea" : "input"}` + (e.autogrow === true ? " q-textarea--autogrow" : "")), hasShadow: computed(() => e.type !== "file" && typeof e.shadowText == "string" && e.shadowText.length !== 0), inputRef: m, emitValue: j, hasValue: g, floatingLabel: computed(() => g.value === true && (e.type !== "number" || isNaN(d.value) === false) || bn(e.displayValue)), getControl: () => h($.value === true ? "textarea" : "input", { ref: m, class: ["q-field__native q-placeholder", e.inputClass], style: e.inputStyle, ...A.value, ...E.value, ...e.type !== "file" ? { value: ae() } : h2.value }), getShadowControl: () => h("div", { class: "q-field__native q-field__shadow absolute-bottom no-pointer-events" + ($.value === true ? "" : " text-no-wrap") }, [h("span", { class: "invisible" }, ae()), h("span", e.shadowText)]) });
  let V = fr(R);
  return Object.assign(r, { focus: B, select: P, getNativeElement: () => m.value }), it(r, "nativeEl", () => m.value), V;
} });
var Gv = { threshold: 0, root: null, rootMargin: "0px" };
function Zv(e, t, o) {
  let r, n, i;
  typeof o == "function" ? (r = o, n = Gv, i = t.cfg === void 0) : (r = o.handler, n = Object.assign({}, Gv, o.cfg), i = t.cfg === void 0 || Zt(t.cfg, n) === false), t.handler !== r && (t.handler = r), i === true && (t.cfg = n, t.observer !== void 0 && t.observer.unobserve(e), t.observer = new IntersectionObserver(([a]) => {
    if (typeof t.handler == "function") {
      if (a.rootBounds === null && document.body.contains(e) === true) {
        t.observer.unobserve(e), t.observer.observe(e);
        return;
      }
      (t.handler(a, t.observer) === false || t.once === true && a.isIntersecting === true) && Jv(e);
    }
  }, n), t.observer.observe(e));
}
function Jv(e) {
  let t = e.__qvisible;
  t !== void 0 && (t.observer !== void 0 && t.observer.unobserve(e), delete e.__qvisible);
}
var Qu = Mt({ name: "intersection", mounted(e, { modifiers: t, value: o }) {
  let r = { once: t.once === true };
  Zv(e, r, o), e.__qvisible = r;
}, updated(e, t) {
  let o = e.__qvisible;
  o !== void 0 && Zv(e, o, t.value);
}, beforeUnmount: Jv });
var eg = M({ name: "QIntersection", props: { tag: { type: String, default: "div" }, once: Boolean, transition: String, transitionDuration: { type: [String, Number], default: 300 }, ssrPrerender: Boolean, margin: String, threshold: [Number, Array], root: { default: null }, disable: Boolean, onVisibility: Function }, setup(e, { slots: t, emit: o }) {
  let r = ref(_t.value === true ? e.ssrPrerender : false), n = computed(() => e.root !== void 0 || e.margin !== void 0 || e.threshold !== void 0 ? { handler: s, cfg: { root: e.root, rootMargin: e.margin, threshold: e.threshold } } : s), i = computed(() => e.disable !== true && (_t.value !== true || e.once !== true || e.ssrPrerender !== true)), a = computed(() => [[Qu, n.value, void 0, { once: e.once }]]), l = computed(() => `--q-transition-duration: ${e.transitionDuration}ms`);
  function s(u) {
    r.value !== u.isIntersecting && (r.value = u.isIntersecting, e.onVisibility !== void 0 && o("visibility", r.value));
  }
  function c() {
    if (r.value === true)
      return [h("div", { key: "content", style: l.value }, ee(t.default))];
    if (t.hidden !== void 0)
      return [h("div", { key: "hidden", style: l.value }, t.hidden())];
  }
  return () => {
    let u = e.transition ? [h(Transition, { name: "q-transition--" + e.transition }, c)] : c();
    return kt(e.tag, { class: "q-intersection" }, u, "main", i.value, () => a.value);
  };
} });
var Uu = M({ name: "QList", props: { ...pe, bordered: Boolean, dense: Boolean, separator: Boolean, padding: Boolean, tag: { type: String, default: "div" } }, setup(e, { slots: t }) {
  let o = getCurrentInstance(), r = be(e, o.proxy.$q), n = computed(() => "q-list" + (e.bordered === true ? " q-list--bordered" : "") + (e.dense === true ? " q-list--dense" : "") + (e.separator === true ? " q-list--separator" : "") + (r.value === true ? " q-list--dark" : "") + (e.padding === true ? " q-list--padding" : ""));
  return () => h(e.tag, { class: n.value }, ee(t.default));
} });
var og = [34, 37, 40, 33, 39, 38];
var R1 = Object.keys(Va);
var ng = M({ name: "QKnob", props: { ...xt, ...Va, modelValue: { type: Number, required: true }, innerMin: Number, innerMax: Number, step: { type: Number, default: 1, validator: (e) => e >= 0 }, tabindex: { type: [Number, String], default: 0 }, disable: Boolean, readonly: Boolean }, emits: ["update:modelValue", "change", "dragValue"], setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), { $q: n } = r, i = ref(e.modelValue), a = ref(false), l = computed(() => isNaN(e.innerMin) === true || e.innerMin < e.min ? e.min : e.innerMin), s = computed(() => isNaN(e.innerMax) === true || e.innerMax > e.max ? e.max : e.innerMax), c;
  function u() {
    i.value = e.modelValue === null ? l.value : Ge(e.modelValue, l.value, s.value), B(true);
  }
  watch(() => `${e.modelValue}|${l.value}|${s.value}`, u), u();
  let m = computed(() => e.disable === false && e.readonly === false), f = computed(() => "q-knob non-selectable" + (m.value === true ? " q-knob--editable" : e.disable === true ? " disabled" : "")), d = computed(() => (String(e.step).trim().split(".")[1] || "").length), v = computed(() => e.step === 0 ? 1 : e.step), x = computed(() => e.instantFeedback === true || a.value === true), p = n.platform.is.mobile === true ? computed(() => m.value === true ? { onClick: $ } : {}) : computed(() => m.value === true ? { onMousedown: R, onClick: $, onKeydown: F, onKeyup: A } : {}), w = computed(() => m.value === true ? { tabindex: e.tabindex } : { [`aria-${e.disable === true ? "disabled" : "readonly"}`]: "true" }), b = computed(() => {
    let q = {};
    return R1.forEach((D) => {
      q[D] = e[D];
    }), q;
  });
  function h2(q) {
    q.isFinal ? (E(q.evt, true), a.value = false) : (q.isFirst && (C(), a.value = true), E(q.evt));
  }
  let g = computed(() => [[qt, h2, void 0, { prevent: true, stop: true, mouse: true }]]);
  function C() {
    let { top: q, left: D, width: j, height: k } = r.$el.getBoundingClientRect();
    c = { top: q + k / 2, left: D + j / 2 };
  }
  function R(q) {
    C(), E(q);
  }
  function $(q) {
    C(), E(q, true);
  }
  function F(q) {
    if (!og.includes(q.keyCode))
      return;
    Se(q);
    let D = ([34, 33].includes(q.keyCode) ? 10 : 1) * v.value, j = [34, 37, 40].includes(q.keyCode) ? -D : D;
    i.value = Ge(parseFloat((i.value + j).toFixed(d.value)), l.value, s.value), B();
  }
  function E(q, D) {
    let j = bt(q), k = Math.abs(j.top - c.top), I = Math.sqrt(k ** 2 + Math.abs(j.left - c.left) ** 2), W = Math.asin(k / I) * (180 / Math.PI);
    j.top < c.top ? W = c.left < j.left ? 90 - W : 270 + W : W = c.left < j.left ? W + 90 : 270 - W, n.lang.rtl === true ? W = qr(-W - e.angle, 0, 360) : e.angle && (W = qr(W - e.angle, 0, 360)), e.reverse === true && (W = 360 - W);
    let ae = e.min + W / 360 * (e.max - e.min);
    if (v.value !== 0) {
      let V = ae % v.value;
      ae = ae - V + (Math.abs(V) >= v.value / 2 ? (V < 0 ? -1 : 1) * v.value : 0), ae = parseFloat(ae.toFixed(d.value));
    }
    ae = Ge(ae, l.value, s.value), o("dragValue", ae), i.value !== ae && (i.value = ae), B(D);
  }
  function A(q) {
    og.includes(q.keyCode) && B(true);
  }
  function B(q) {
    e.modelValue !== i.value && o("update:modelValue", i.value), q === true && o("change", i.value);
  }
  let P = cn(e);
  function S() {
    return h("input", P.value);
  }
  return () => {
    let q = { class: f.value, role: "slider", "aria-valuemin": l.value, "aria-valuemax": s.value, "aria-valuenow": e.modelValue, ...w.value, ...b.value, value: i.value, instantFeedback: x.value, ...p.value }, D = { default: t.default };
    return m.value === true && e.name !== void 0 && (D.internal = S), kt(Yi, q, D, "knob", m.value, () => g.value);
  };
} });
var { passive: ig } = Ye;
var E1 = ["both", "horizontal", "vertical"];
var ca = M({ name: "QScrollObserver", props: { axis: { type: String, validator: (e) => E1.includes(e), default: "vertical" }, debounce: [String, Number], scrollTarget: { default: void 0 } }, emits: ["scroll"], setup(e, { emit: t }) {
  let o = { position: { top: 0, left: 0 }, direction: "down", directionChanged: false, delta: { top: 0, left: 0 }, inflectionPoint: { top: 0, left: 0 } }, r = null, n, i;
  watch(() => e.scrollTarget, () => {
    s(), l();
  });
  function a() {
    r !== null && r();
    let m = Math.max(0, fo(n)), f = Zn(n), d = { top: m - o.position.top, left: f - o.position.left };
    if (e.axis === "vertical" && d.top === 0 || e.axis === "horizontal" && d.left === 0)
      return;
    let v = Math.abs(d.top) >= Math.abs(d.left) ? d.top < 0 ? "up" : "down" : d.left < 0 ? "left" : "right";
    o.position = { top: m, left: f }, o.directionChanged = o.direction !== v, o.delta = d, o.directionChanged === true && (o.direction = v, o.inflectionPoint = o.position), t("scroll", { ...o });
  }
  function l() {
    n = At(i, e.scrollTarget), n.addEventListener("scroll", c, ig), c(true);
  }
  function s() {
    n !== void 0 && (n.removeEventListener("scroll", c, ig), n = void 0);
  }
  function c(m) {
    if (m === true || e.debounce === 0 || e.debounce === "0")
      a();
    else if (r === null) {
      let [f, d] = e.debounce ? [setTimeout(a, e.debounce), clearTimeout] : [requestAnimationFrame(a), cancelAnimationFrame];
      r = () => {
        d(f), r = null;
      };
    }
  }
  let { proxy: u } = getCurrentInstance();
  return watch(() => u.$q.lang.rtl, a), onMounted(() => {
    i = u.$el.parentNode, l();
  }), onBeforeUnmount(() => {
    r !== null && r(), s();
  }), Object.assign(u, { trigger: c, getPosition: () => o }), Ke;
} });
var ag = M({ name: "QLayout", props: { container: Boolean, view: { type: String, default: "hhh lpr fff", validator: (e) => /^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase()) }, onScroll: Function, onScrollHeight: Function, onResize: Function }, setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), n = ref(null), i = ref(r.screen.height), a = ref(e.container === true ? 0 : r.screen.width), l = ref({ position: 0, direction: "down", inflectionPoint: 0 }), s = ref(0), c = ref(_t.value === true ? 0 : Pr()), u = computed(() => "q-layout q-layout--" + (e.container === true ? "containerized" : "standard")), m = computed(() => e.container === false ? { minHeight: r.screen.height + "px" } : null), f = computed(() => c.value !== 0 ? { [r.lang.rtl === true ? "left" : "right"]: `${c.value}px` } : null), d = computed(() => c.value !== 0 ? { [r.lang.rtl === true ? "right" : "left"]: 0, [r.lang.rtl === true ? "left" : "right"]: `-${c.value}px`, width: `calc(100% + ${c.value}px)` } : null);
  function v(g) {
    if (e.container === true || document.qScrollPrevented !== true) {
      let C = { position: g.position.top, direction: g.direction, directionChanged: g.directionChanged, inflectionPoint: g.inflectionPoint.top, delta: g.delta.top };
      l.value = C, e.onScroll !== void 0 && o("scroll", C);
    }
  }
  function x(g) {
    let { height: C, width: R } = g, $ = false;
    i.value !== C && ($ = true, i.value = C, e.onScrollHeight !== void 0 && o("scrollHeight", C), w()), a.value !== R && ($ = true, a.value = R), $ === true && e.onResize !== void 0 && o("resize", g);
  }
  function p({ height: g }) {
    s.value !== g && (s.value = g, w());
  }
  function w() {
    if (e.container === true) {
      let g = i.value > s.value ? Pr() : 0;
      c.value !== g && (c.value = g);
    }
  }
  let b = null, h2 = { instances: {}, view: computed(() => e.view), isContainer: computed(() => e.container), rootRef: n, height: i, containerHeight: s, scrollbarWidth: c, totalWidth: computed(() => a.value + c.value), rows: computed(() => {
    let g = e.view.toLowerCase().split(" ");
    return { top: g[0].split(""), middle: g[1].split(""), bottom: g[2].split("") };
  }), header: reactive({ size: 0, offset: 0, space: false }), right: reactive({ size: 300, offset: 0, space: false }), footer: reactive({ size: 0, offset: 0, space: false }), left: reactive({ size: 300, offset: 0, space: false }), scroll: l, animate() {
    b !== null ? clearTimeout(b) : document.body.classList.add("q-body--layout-animate"), b = setTimeout(() => {
      b = null, document.body.classList.remove("q-body--layout-animate");
    }, 155);
  }, update(g, C, R) {
    h2[g][C] = R;
  } };
  if (provide(uo, h2), Pr() > 0) {
    let R = function() {
      g = null, C.classList.remove("hide-scrollbar");
    }, $ = function() {
      if (g === null) {
        if (C.scrollHeight > r.screen.height)
          return;
        C.classList.add("hide-scrollbar");
      } else
        clearTimeout(g);
      g = setTimeout(R, 300);
    }, F = function(E) {
      g !== null && E === "remove" && (clearTimeout(g), R()), window[`${E}EventListener`]("resize", $);
    }, g = null, C = document.body;
    watch(() => e.container !== true ? "add" : "remove", F), e.container !== true && F("add"), onUnmounted(() => {
      F("remove");
    });
  }
  return () => {
    let g = je(t.default, [h(ca, { onScroll: v }), h(go, { onResize: x })]), C = h("div", { class: u.value, style: m.value, ref: e.container === true ? void 0 : n, tabindex: -1 }, g);
    return e.container === true ? h("div", { class: "q-layout-container overflow-hidden", ref: n }, [h(go, { onResize: p }), h("div", { class: "absolute-full", style: f.value }, [h("div", { class: "scroll", style: d.value }, [C])])]) : C;
  };
} });
var O1 = ["horizontal", "vertical", "cell", "none"];
var Wu = M({ name: "QMarkupTable", props: { ...pe, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, wrapCells: Boolean, separator: { type: String, default: "horizontal", validator: (e) => O1.includes(e) } }, setup(e, { slots: t }) {
  let o = getCurrentInstance(), r = be(e, o.proxy.$q), n = computed(() => `q-markup-table q-table__container q-table__card q-table--${e.separator}-separator` + (r.value === true ? " q-table--dark q-table__card--dark q-dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "") + (e.square === true ? " q-table--square" : "") + (e.wrapCells === false ? " q-table--no-wrap" : ""));
  return () => h("div", { class: n.value }, [h("table", { class: "q-table" }, ee(t.default))]);
} });
var ug = M({ name: "QNoSsr", props: { tag: { type: String, default: "div" }, placeholder: String }, setup(e, { slots: t }) {
  let o = ou();
  return () => {
    if (o.value === true) {
      let i = ee(t.default);
      return i === void 0 ? i : i.length > 1 ? h(e.tag, {}, i) : i[0];
    }
    let r = { class: "q-no-ssr-placeholder" }, n = ee(t.placeholder);
    if (n !== void 0)
      return n.length > 1 ? h(e.tag, r, n) : n[0];
    if (e.placeholder !== void 0)
      return h(e.tag, r, e.placeholder);
  };
} });
var H1 = h("svg", { key: "svg", class: "q-radio__bg absolute non-selectable", viewBox: "0 0 24 24" }, [h("path", { d: "M12,22a10,10 0 0 1 -10,-10a10,10 0 0 1 10,-10a10,10 0 0 1 10,10a10,10 0 0 1 -10,10m0,-22a12,12 0 0 0 -12,12a12,12 0 0 0 12,12a12,12 0 0 0 12,-12a12,12 0 0 0 -12,-12" }), h("path", { class: "q-radio__check", d: "M12,6a6,6 0 0 0 -6,6a6,6 0 0 0 6,6a6,6 0 0 0 6,-6a6,6 0 0 0 -6,-6" })]);
var Yu = M({ name: "QRadio", props: { ...pe, ...Ot, ...xt, modelValue: { required: true }, val: { required: true }, label: String, leftLabel: Boolean, checkedIcon: String, uncheckedIcon: String, color: String, keepColor: Boolean, dense: Boolean, disable: Boolean, tabindex: [String, Number] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), n = be(e, r.$q), i = It(e, Wl), a = ref(null), { refocusTargetEl: l, refocusTarget: s } = Kl(e, a), c = computed(() => toRaw(e.modelValue) === toRaw(e.val)), u = computed(() => "q-radio cursor-pointer no-outline row inline no-wrap items-center" + (e.disable === true ? " disabled" : "") + (n.value === true ? " q-radio--dark" : "") + (e.dense === true ? " q-radio--dense" : "") + (e.leftLabel === true ? " reverse" : "")), m = computed(() => {
    let h2 = e.color !== void 0 && (e.keepColor === true || c.value === true) ? ` text-${e.color}` : "";
    return `q-radio__inner relative-position q-radio__inner--${c.value === true ? "truthy" : "falsy"}${h2}`;
  }), f = computed(() => (c.value === true ? e.checkedIcon : e.uncheckedIcon) || null), d = computed(() => e.disable === true ? -1 : e.tabindex || 0), v = computed(() => {
    let h2 = { type: "radio" };
    return e.name !== void 0 && Object.assign(h2, { ".checked": c.value === true, "^checked": c.value === true ? "checked" : void 0, name: e.name, value: e.val }), h2;
  }), x = Jt(v);
  function p(h2) {
    h2 !== void 0 && (Se(h2), s(h2)), e.disable !== true && c.value !== true && o("update:modelValue", e.val, h2);
  }
  function w(h2) {
    (h2.keyCode === 13 || h2.keyCode === 32) && Se(h2);
  }
  function b(h2) {
    (h2.keyCode === 13 || h2.keyCode === 32) && p(h2);
  }
  return Object.assign(r, { set: p }), () => {
    let h2 = f.value !== null ? [h("div", { key: "icon", class: "q-radio__icon-container absolute-full flex flex-center no-wrap" }, [h(Ce, { class: "q-radio__icon", name: f.value })])] : [H1];
    e.disable !== true && x(h2, "unshift", " q-radio__native q-ma-none q-pa-none");
    let g = [h("div", { class: m.value, style: i.value, "aria-hidden": "true" }, h2)];
    l.value !== null && g.push(l.value);
    let C = e.label !== void 0 ? je(t.default, [e.label]) : ee(t.default);
    return C !== void 0 && g.push(h("div", { class: "q-radio__label q-anchor--skip" }, C)), h("div", { ref: a, class: u.value, tabindex: d.value, role: "radio", "aria-label": e.label, "aria-checked": c.value === true ? "true" : "false", "aria-disabled": e.disable === true ? "true" : void 0, onClick: p, onKeydown: w, onKeyup: b }, g);
  };
} });
var Xu = M({ name: "QToggle", props: { ...Yl, icon: String, iconColor: String }, emits: Xl, setup(e) {
  function t(o, r) {
    let n = computed(() => (o.value === true ? e.checkedIcon : r.value === true ? e.indeterminateIcon : e.uncheckedIcon) || e.icon), i = computed(() => o.value === true ? e.iconColor : null);
    return () => [h("div", { class: "q-toggle__track" }), h("div", { class: "q-toggle__thumb absolute flex flex-center no-wrap" }, n.value !== void 0 ? [h(Ce, { name: n.value, color: i.value })] : void 0)];
  }
  return Gl("toggle", t);
} });
var dg = { radio: Yu, checkbox: mn, toggle: Xu };
var j1 = Object.keys(dg);
var Gu = M({ name: "QOptionGroup", props: { ...pe, modelValue: { required: true }, options: { type: Array, validator: (e) => e.every((t) => "value" in t && "label" in t) }, name: String, type: { default: "radio", validator: (e) => j1.includes(e) }, color: String, keepColor: Boolean, dense: Boolean, size: String, leftLabel: Boolean, inline: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { emit: t, slots: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), n = Array.isArray(e.modelValue);
  e.type === "radio" ? n === true && console.error("q-option-group: model should not be array") : n === false && console.error("q-option-group: model should be array in your case");
  let i = be(e, r), a = computed(() => dg[e.type]), l = computed(() => "q-option-group q-gutter-x-sm" + (e.inline === true ? " q-option-group--inline" : "")), s = computed(() => {
    let u = { role: "group" };
    return e.type === "radio" && (u.role = "radiogroup", e.disable === true && (u["aria-disabled"] = "true")), u;
  });
  function c(u) {
    t("update:modelValue", u);
  }
  return () => h("div", { class: l.value, ...s.value }, e.options.map((u, m) => {
    let f = o["label-" + m] !== void 0 ? () => o["label-" + m](u) : o.label !== void 0 ? () => o.label(u) : void 0;
    return h("div", [h(a.value, { modelValue: e.modelValue, val: u.value, name: u.name === void 0 ? e.name : u.name, disable: e.disable || u.disable, label: f === void 0 ? u.label : null, leftLabel: u.leftLabel === void 0 ? e.leftLabel : u.leftLabel, color: u.color === void 0 ? e.color : u.color, checkedIcon: u.checkedIcon, uncheckedIcon: u.uncheckedIcon, dark: u.dark || i.value, size: u.size === void 0 ? e.size : u.size, dense: e.dense, keepColor: u.keepColor === void 0 ? e.keepColor : u.keepColor, "onUpdate:modelValue": c }, f)]);
  }));
} });
var vg = M({ name: "QPage", props: { padding: Boolean, styleFn: Function }, setup(e, { slots: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), r = inject(uo, We);
  if (r === We)
    return console.error("QPage needs to be a deep child of QLayout"), We;
  if (inject(_l, We) === We)
    return console.error("QPage needs to be child of QPageContainer"), We;
  let i = computed(() => {
    let l = (r.header.space === true ? r.header.size : 0) + (r.footer.space === true ? r.footer.size : 0);
    if (typeof e.styleFn == "function") {
      let s = r.isContainer.value === true ? r.containerHeight.value : o.screen.height;
      return e.styleFn(l, s);
    }
    return { minHeight: r.isContainer.value === true ? r.containerHeight.value - l + "px" : o.screen.height === 0 ? l !== 0 ? `calc(100vh - ${l}px)` : "100vh" : o.screen.height - l + "px" };
  }), a = computed(() => `q-page${e.padding === true ? " q-layout-padding" : ""}`);
  return () => h("main", { class: a.value, style: i.value }, ee(t.default));
} });
var gg = M({ name: "QPageContainer", setup(e, { slots: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), r = inject(uo, We);
  if (r === We)
    return console.error("QPageContainer needs to be child of QLayout"), We;
  provide(_l, true);
  let n = computed(() => {
    let i = {};
    return r.header.space === true && (i.paddingTop = `${r.header.size}px`), r.right.space === true && (i[`padding${o.lang.rtl === true ? "Left" : "Right"}`] = `${r.right.size}px`), r.footer.space === true && (i.paddingBottom = `${r.footer.size}px`), r.left.space === true && (i[`padding${o.lang.rtl === true ? "Right" : "Left"}`] = `${r.left.size}px`), i;
  });
  return () => h("div", { class: "q-page-container", style: n.value }, ee(t.default));
} });
var Zu = { position: { type: String, default: "bottom-right", validator: (e) => ["top-right", "top-left", "bottom-right", "bottom-left", "top", "right", "bottom", "left"].includes(e) }, offset: { type: Array, validator: (e) => e.length === 2 }, expand: Boolean };
function Ju() {
  let { props: e, proxy: { $q: t } } = getCurrentInstance(), o = inject(uo, We);
  if (o === We)
    return console.error("QPageSticky needs to be child of QLayout"), We;
  let r = computed(() => {
    let m = e.position;
    return { top: m.indexOf("top") !== -1, right: m.indexOf("right") !== -1, bottom: m.indexOf("bottom") !== -1, left: m.indexOf("left") !== -1, vertical: m === "top" || m === "bottom", horizontal: m === "left" || m === "right" };
  }), n = computed(() => o.header.offset), i = computed(() => o.right.offset), a = computed(() => o.footer.offset), l = computed(() => o.left.offset), s = computed(() => {
    let m = 0, f = 0, d = r.value, v = t.lang.rtl === true ? -1 : 1;
    d.top === true && n.value !== 0 ? f = `${n.value}px` : d.bottom === true && a.value !== 0 && (f = `${-a.value}px`), d.left === true && l.value !== 0 ? m = `${v * l.value}px` : d.right === true && i.value !== 0 && (m = `${-v * i.value}px`);
    let x = { transform: `translate(${m}, ${f})` };
    return e.offset && (x.margin = `${e.offset[1]}px ${e.offset[0]}px`), d.vertical === true ? (l.value !== 0 && (x[t.lang.rtl === true ? "right" : "left"] = `${l.value}px`), i.value !== 0 && (x[t.lang.rtl === true ? "left" : "right"] = `${i.value}px`)) : d.horizontal === true && (n.value !== 0 && (x.top = `${n.value}px`), a.value !== 0 && (x.bottom = `${a.value}px`)), x;
  }), c = computed(() => `q-page-sticky row flex-center fixed-${e.position} q-page-sticky--${e.expand === true ? "expand" : "shrink"}`);
  function u(m) {
    let f = ee(m.default);
    return h("div", { class: c.value, style: s.value }, e.expand === true ? f : [h("div", f)]);
  }
  return { $layout: o, getStickyContent: u };
}
var yg = M({ name: "QPageScroller", props: { ...Zu, scrollOffset: { type: Number, default: 1e3 }, reverse: Boolean, duration: { type: Number, default: 300 }, offset: { default: () => [18, 18] } }, emits: ["click"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), { $layout: n, getStickyContent: i } = Ju(), a = ref(null), l, s = computed(() => n.height.value - (n.isContainer.value === true ? n.containerHeight.value : r.screen.height));
  function c() {
    return e.reverse === true ? s.value - n.scroll.value.position > e.scrollOffset : n.scroll.value.position > e.scrollOffset;
  }
  let u = ref(c());
  function m() {
    let p = c();
    u.value !== p && (u.value = p);
  }
  function f() {
    e.reverse === true ? l === void 0 && (l = watch(s, m)) : d();
  }
  watch(n.scroll, m), watch(() => e.reverse, f);
  function d() {
    l !== void 0 && (l(), l = void 0);
  }
  function v(p) {
    let w = At(n.isContainer.value === true ? a.value : n.rootRef.value);
    un(w, e.reverse === true ? n.height.value : 0, e.duration), o("click", p);
  }
  function x() {
    return u.value === true ? h("div", { ref: a, class: "q-page-scroller", onClick: v }, i(t)) : null;
  }
  return f(), onBeforeUnmount(d), () => h(Transition, { name: "q-transition--fade" }, x);
} });
var Sg = M({ name: "QPageSticky", props: Zu, setup(e, { slots: t }) {
  let { getStickyContent: o } = Ju();
  return () => o(t);
} });
function es(e, t) {
  return [true, false].includes(e) ? e : t;
}
var xg = M({ name: "QPagination", props: { ...pe, modelValue: { type: Number, required: true }, min: { type: [Number, String], default: 1 }, max: { type: [Number, String], required: true }, maxPages: { type: [Number, String], default: 0, validator: (e) => (typeof e == "string" ? parseInt(e, 10) : e) >= 0 }, inputStyle: [Array, String, Object], inputClass: [Array, String, Object], size: String, disable: Boolean, input: Boolean, iconPrev: String, iconNext: String, iconFirst: String, iconLast: String, toFn: Function, boundaryLinks: { type: Boolean, default: null }, boundaryNumbers: { type: Boolean, default: null }, directionLinks: { type: Boolean, default: null }, ellipses: { type: Boolean, default: null }, ripple: { type: [Boolean, Object], default: null }, round: Boolean, rounded: Boolean, flat: Boolean, outline: Boolean, unelevated: Boolean, push: Boolean, glossy: Boolean, color: { type: String, default: "primary" }, textColor: String, activeDesign: { type: String, default: "", values: (e) => e === "" || ic.includes(e) }, activeColor: String, activeTextColor: String, gutter: String, padding: { type: String, default: "3px 2px" } }, emits: ["update:modelValue"], setup(e, { emit: t }) {
  let { proxy: o } = getCurrentInstance(), { $q: r } = o, n = be(e, r), i = computed(() => parseInt(e.min, 10)), a = computed(() => parseInt(e.max, 10)), l = computed(() => parseInt(e.maxPages, 10)), s = computed(() => v.value + " / " + a.value), c = computed(() => es(e.boundaryLinks, e.input)), u = computed(() => es(e.boundaryNumbers, !e.input)), m = computed(() => es(e.directionLinks, e.input)), f = computed(() => es(e.ellipses, !e.input)), d = ref(null), v = computed({ get: () => e.modelValue, set: (S) => {
    if (S = parseInt(S, 10), e.disable || isNaN(S))
      return;
    let q = Ge(S, i.value, a.value);
    e.modelValue !== q && t("update:modelValue", q);
  } });
  watch(() => `${i.value}|${a.value}`, () => {
    v.value = e.modelValue;
  });
  let x = computed(() => "q-pagination row no-wrap items-center" + (e.disable === true ? " disabled" : "")), p = computed(() => e.gutter in Ma ? `${Ma[e.gutter]}px` : e.gutter || null), w = computed(() => p.value !== null ? `--q-pagination-gutter-parent:-${p.value};--q-pagination-gutter-child:${p.value}` : null), b = computed(() => {
    let S = [e.iconFirst || r.iconSet.pagination.first, e.iconPrev || r.iconSet.pagination.prev, e.iconNext || r.iconSet.pagination.next, e.iconLast || r.iconSet.pagination.last];
    return r.lang.rtl === true ? S.reverse() : S;
  }), h2 = computed(() => ({ "aria-disabled": e.disable === true ? "true" : "false", role: "navigation" })), g = computed(() => El(e, "flat")), C = computed(() => ({ [g.value]: true, round: e.round, rounded: e.rounded, padding: e.padding, color: e.color, textColor: e.textColor, size: e.size, ripple: e.ripple !== null ? e.ripple : true })), R = computed(() => {
    let S = { [g.value]: false };
    return e.activeDesign !== "" && (S[e.activeDesign] = true), S;
  }), $ = computed(() => ({ ...R.value, color: e.activeColor || e.color, textColor: e.activeTextColor || e.textColor })), F = computed(() => {
    let S = Math.max(l.value, 1 + (f.value ? 2 : 0) + (u.value ? 2 : 0)), q = { pgFrom: i.value, pgTo: a.value, ellipsesStart: false, ellipsesEnd: false, boundaryStart: false, boundaryEnd: false, marginalStyle: { minWidth: `${Math.max(2, String(a.value).length)}em` } };
    return l.value && S < a.value - i.value + 1 && (S = 1 + Math.floor(S / 2) * 2, q.pgFrom = Math.max(i.value, Math.min(a.value - S + 1, e.modelValue - Math.floor(S / 2))), q.pgTo = Math.min(a.value, q.pgFrom + S - 1), u.value && (q.boundaryStart = true, q.pgFrom++), f.value && q.pgFrom > i.value + (u.value ? 1 : 0) && (q.ellipsesStart = true, q.pgFrom++), u.value && (q.boundaryEnd = true, q.pgTo--), f.value && q.pgTo < a.value - (u.value ? 1 : 0) && (q.ellipsesEnd = true, q.pgTo--)), q;
  });
  function E(S) {
    v.value = S;
  }
  function A(S) {
    v.value = v.value + S;
  }
  let B = computed(() => {
    function S() {
      v.value = d.value, d.value = null;
    }
    return { "onUpdate:modelValue": (q) => {
      d.value = q;
    }, onKeyup: (q) => {
      wt(q, 13) === true && S();
    }, onBlur: S };
  });
  function P(S, q, D) {
    let j = { "aria-label": q, "aria-current": "false", ...C.value, ...S };
    return D === true && Object.assign(j, { "aria-current": "true", ...$.value }), q !== void 0 && (e.toFn !== void 0 ? j.to = e.toFn(q) : j.onClick = () => {
      E(q);
    }), h(Be, j);
  }
  return Object.assign(o, { set: E, setByOffset: A }), () => {
    let S = [], q = [], D;
    if (c.value === true && (S.push(P({ key: "bls", disable: e.disable || e.modelValue <= i.value, icon: b.value[0] }, i.value)), q.unshift(P({ key: "ble", disable: e.disable || e.modelValue >= a.value, icon: b.value[3] }, a.value))), m.value === true && (S.push(P({ key: "bdp", disable: e.disable || e.modelValue <= i.value, icon: b.value[1] }, e.modelValue - 1)), q.unshift(P({ key: "bdn", disable: e.disable || e.modelValue >= a.value, icon: b.value[2] }, e.modelValue + 1))), e.input !== true) {
      D = [];
      let { pgFrom: j, pgTo: k, marginalStyle: I } = F.value;
      if (F.value.boundaryStart === true) {
        let W = i.value === e.modelValue;
        S.push(P({ key: "bns", style: I, disable: e.disable, label: i.value }, i.value, W));
      }
      if (F.value.boundaryEnd === true) {
        let W = a.value === e.modelValue;
        q.unshift(P({ key: "bne", style: I, disable: e.disable, label: a.value }, a.value, W));
      }
      F.value.ellipsesStart === true && S.push(P({ key: "bes", style: I, disable: e.disable, label: "…", ripple: false }, j - 1)), F.value.ellipsesEnd === true && q.unshift(P({ key: "bee", style: I, disable: e.disable, label: "…", ripple: false }, k + 1));
      for (let W = j; W <= k; W++)
        D.push(P({ key: `bpg${W}`, style: I, disable: e.disable, label: W }, W, W === e.modelValue));
    }
    return h("div", { class: x.value, ...h2.value }, [h("div", { class: "q-pagination__content row no-wrap items-center", style: w.value }, [...S, e.input === true ? h(sa, { class: "inline", style: { width: `${s.value.length / 1.5}em` }, type: "number", dense: true, value: d.value, disable: e.disable, dark: n.value, borderless: true, inputClass: e.inputClass, inputStyle: e.inputStyle, placeholder: s.value, min: i.value, max: a.value, ...B.value }) : h("div", { class: "q-pagination__middle row justify-center" }, D), ...q])]);
  };
} });
function al(e) {
  let t = false, o, r;
  function n() {
    r = arguments, t !== true && (t = true, o = requestAnimationFrame(() => {
      e.apply(this, r), r = void 0, t = false;
    }));
  }
  return n.cancel = () => {
    window.cancelAnimationFrame(o), t = false;
  }, n;
}
var { passive: ns } = Ye;
var Cg = M({ name: "QParallax", props: { src: String, height: { type: Number, default: 500 }, speed: { type: Number, default: 1, validator: (e) => e >= 0 && e <= 1 }, scrollTarget: { default: void 0 }, onScroll: Function }, setup(e, { slots: t, emit: o }) {
  let r = ref(0), n = ref(null), i = ref(null), a = ref(null), l, s, c, u, m, f;
  watch(() => e.height, () => {
    l === true && v();
  }), watch(() => e.scrollTarget, () => {
    l === true && (b(), w());
  });
  let d = (h2) => {
    r.value = h2, e.onScroll !== void 0 && o("scroll", h2);
  };
  function v() {
    let h2, g, C;
    f === window ? (h2 = 0, C = g = window.innerHeight) : (h2 = Tr(f).top, g = on(f), C = h2 + g);
    let R = Tr(n.value).top, $ = R + e.height;
    if (m !== void 0 || $ > h2 && R < C) {
      let F = (C - R) / (e.height + g);
      x((c - e.height) * F * e.speed), d(F);
    }
  }
  let x = (h2) => {
    s.style.transform = `translate3d(-50%,${Math.round(h2)}px,0)`;
  };
  function p() {
    c = s.naturalHeight || s.videoHeight || on(s), l === true && v();
  }
  function w() {
    l = true, f = At(n.value, e.scrollTarget), f.addEventListener("scroll", v, ns), window.addEventListener("resize", u, ns), v();
  }
  function b() {
    l === true && (l = false, f.removeEventListener("scroll", v, ns), window.removeEventListener("resize", u, ns), f = void 0, x.cancel(), d.cancel(), u.cancel());
  }
  return onMounted(() => {
    x = al(x), d = al(d), u = al(p), s = t.media !== void 0 ? i.value.children[0] : a.value, s.onload = s.onloadstart = s.loadedmetadata = p, p(), s.style.display = "initial", window.IntersectionObserver !== void 0 ? (m = new IntersectionObserver((h2) => {
      (h2[0].isIntersecting === true ? w : b)();
    }), m.observe(n.value)) : w();
  }), onBeforeUnmount(() => {
    b(), m !== void 0 && m.disconnect(), s.onload = s.onloadstart = s.loadedmetadata = null;
  }), () => h("div", { ref: n, class: "q-parallax", style: { height: `${e.height}px` } }, [h("div", { ref: i, class: "q-parallax__media absolute-full" }, t.media !== void 0 ? t.media() : [h("img", { ref: a, src: e.src })]), h("div", { class: "q-parallax__content absolute-full column flex-center" }, t.content !== void 0 ? t.content({ percentScrolled: r.value }) : ee(t.default))]);
} });
function pr(e, t = /* @__PURE__ */ new WeakMap()) {
  if (Object(e) !== e)
    return e;
  if (t.has(e))
    return t.get(e);
  let o = e instanceof Date ? new Date(e) : e instanceof RegExp ? new RegExp(e.source, e.flags) : e instanceof Set ? /* @__PURE__ */ new Set() : e instanceof Map ? /* @__PURE__ */ new Map() : typeof e.constructor != "function" ? /* @__PURE__ */ Object.create(null) : e.prototype !== void 0 && typeof e.prototype.constructor == "function" ? e : new e.constructor();
  if (typeof e.constructor == "function" && typeof e.valueOf == "function") {
    let r = e.valueOf();
    if (Object(r) !== r) {
      let n = new e.constructor(r);
      return t.set(e, n), n;
    }
  }
  return t.set(e, o), e instanceof Set ? e.forEach((r) => {
    o.add(pr(r, t));
  }) : e instanceof Map && e.forEach((r, n) => {
    o.set(n, pr(r, t));
  }), Object.assign(o, ...Object.keys(e).map((r) => ({ [r]: pr(e[r], t) })));
}
var wg = M({ name: "QPopupEdit", props: { modelValue: { required: true }, title: String, buttons: Boolean, labelSet: String, labelCancel: String, color: { type: String, default: "primary" }, validate: { type: Function, default: () => true }, autoSave: Boolean, cover: { type: Boolean, default: true }, disable: Boolean }, emits: ["update:modelValue", "save", "cancel", "beforeShow", "show", "beforeHide", "hide"], setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), { $q: n } = r, i = ref(null), a = ref(""), l = ref(""), s = false, c = computed(() => it({ initialValue: a.value, validate: e.validate, set: u, cancel: m, updatePosition: f }, "value", () => l.value, (g) => {
    l.value = g;
  }));
  function u() {
    e.validate(l.value) !== false && (d() === true && (o("save", l.value, a.value), o("update:modelValue", l.value)), v());
  }
  function m() {
    d() === true && o("cancel", l.value, a.value), v();
  }
  function f() {
    nextTick(() => {
      i.value.updatePosition();
    });
  }
  function d() {
    return Zt(l.value, a.value) === false;
  }
  function v() {
    s = true, i.value.hide();
  }
  function x() {
    s = false, a.value = pr(e.modelValue), l.value = pr(e.modelValue), o("beforeShow");
  }
  function p() {
    o("show");
  }
  function w() {
    s === false && d() === true && (e.autoSave === true && e.validate(l.value) === true ? (o("save", l.value, a.value), o("update:modelValue", l.value)) : o("cancel", l.value, a.value)), o("beforeHide");
  }
  function b() {
    o("hide");
  }
  function h2() {
    let g = t.default !== void 0 ? [].concat(t.default(c.value)) : [];
    return e.title && g.unshift(h("div", { class: "q-dialog__title q-mt-sm q-mb-sm" }, e.title)), e.buttons === true && g.push(h("div", { class: "q-popup-edit__buttons row justify-center no-wrap" }, [h(Be, { flat: true, color: e.color, label: e.labelCancel || n.lang.label.cancel, onClick: m }), h(Be, { flat: true, color: e.color, label: e.labelSet || n.lang.label.set, onClick: u })])), g;
  }
  return Object.assign(r, { set: u, cancel: m, show(g) {
    i.value !== null && i.value.show(g);
  }, hide(g) {
    i.value !== null && i.value.hide(g);
  }, updatePosition: f }), () => {
    if (e.disable !== true)
      return h(sn, { ref: i, class: "q-popup-edit", cover: e.cover, onBeforeShow: x, onShow: p, onBeforeHide: w, onHide: b, onEscapeKey: m }, h2);
  };
} });
var qg = M({ name: "QPopupProxy", props: { ...hi, breakpoint: { type: [String, Number], default: 450 } }, emits: ["show", "hide"], setup(e, { slots: t, emit: o, attrs: r }) {
  let { proxy: n } = getCurrentInstance(), { $q: i } = n, a = ref(false), l = ref(null), s = computed(() => parseInt(e.breakpoint, 10)), { canShow: c } = pi({ showing: a });
  function u() {
    return i.screen.width < s.value || i.screen.height < s.value ? "dialog" : "menu";
  }
  let m = ref(u()), f = computed(() => m.value === "menu" ? { maxHeight: "99vh" } : {});
  watch(() => u(), (x) => {
    a.value !== true && (m.value = x);
  });
  function d(x) {
    a.value = true, o("show", x);
  }
  function v(x) {
    a.value = false, m.value = u(), o("hide", x);
  }
  return Object.assign(n, { show(x) {
    c(x) === true && l.value.show(x);
  }, hide(x) {
    l.value.hide(x);
  }, toggle(x) {
    l.value.toggle(x);
  } }), it(n, "currentComponent", () => ({ type: m.value, ref: l.value })), () => {
    let x = { ref: l, ...f.value, ...r, onShow: d, onHide: v }, p;
    return m.value === "dialog" ? p = hn : (p = sn, Object.assign(x, { target: e.target, contextMenu: e.contextMenu, noParentEvent: true, separateClosePopup: true })), h(p, x, t.default);
  };
} });
var pC = { xs: 2, sm: 4, md: 6, lg: 10, xl: 14 };
function Tg(e, t, o) {
  return { transform: t === true ? `translateX(${o.lang.rtl === true ? "-" : ""}100%) scale3d(${-e},1,1)` : `scale3d(${e},1,1)` };
}
var is = M({ name: "QLinearProgress", props: { ...pe, ...Ot, value: { type: Number, default: 0 }, buffer: Number, color: String, trackColor: String, reverse: Boolean, stripe: Boolean, indeterminate: Boolean, query: Boolean, rounded: Boolean, animationSpeed: { type: [String, Number], default: 2100 }, instantFeedback: Boolean }, setup(e, { slots: t }) {
  let { proxy: o } = getCurrentInstance(), r = be(e, o.$q), n = It(e, pC), i = computed(() => e.indeterminate === true || e.query === true), a = computed(() => e.reverse !== e.query), l = computed(() => ({ ...n.value !== null ? n.value : {}, "--q-linear-progress-speed": `${e.animationSpeed}ms` })), s = computed(() => "q-linear-progress" + (e.color !== void 0 ? ` text-${e.color}` : "") + (e.reverse === true || e.query === true ? " q-linear-progress--reverse" : "") + (e.rounded === true ? " rounded-borders" : "")), c = computed(() => Tg(e.buffer !== void 0 ? e.buffer : 1, a.value, o.$q)), u = computed(() => `with${e.instantFeedback === true ? "out" : ""}-transition`), m = computed(() => `q-linear-progress__track absolute-full q-linear-progress__track--${u.value} q-linear-progress__track--${r.value === true ? "dark" : "light"}` + (e.trackColor !== void 0 ? ` bg-${e.trackColor}` : "")), f = computed(() => Tg(i.value === true ? 1 : e.value, a.value, o.$q)), d = computed(() => `q-linear-progress__model absolute-full q-linear-progress__model--${u.value} q-linear-progress__model--${i.value === true ? "in" : ""}determinate`), v = computed(() => ({ width: `${e.value * 100}%` })), x = computed(() => `q-linear-progress__stripe absolute-${e.reverse === true ? "right" : "left"} q-linear-progress__stripe--${u.value}`);
  return () => {
    let p = [h("div", { class: m.value, style: c.value }), h("div", { class: d.value, style: f.value })];
    return e.stripe === true && i.value === false && p.push(h("div", { class: x.value, style: v.value })), h("div", { class: s.value, style: l.value, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 1, "aria-valuenow": e.indeterminate === true ? void 0 : e.value }, je(t.default, p));
  };
} });
var va = 40;
var cd = 20;
var Mg = M({ name: "QPullToRefresh", props: { color: String, bgColor: String, icon: String, noMouse: Boolean, disable: Boolean, scrollTarget: { default: void 0 } }, emits: ["refresh"], setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), { $q: n } = r, i = ref("pull"), a = ref(0), l = ref(false), s = ref(-va), c = ref(false), u = ref({}), m = computed(() => ({ opacity: a.value, transform: `translateY(${s.value}px) rotate(${a.value * 360}deg)` })), f = computed(() => "q-pull-to-refresh__puller row flex-center" + (c.value === true ? " q-pull-to-refresh__puller--animating" : "") + (e.bgColor !== void 0 ? ` bg-${e.bgColor}` : ""));
  function d(R) {
    if (R.isFinal === true) {
      l.value === true && (l.value = false, i.value === "pulled" ? (i.value = "refreshing", g({ pos: cd }), p()) : i.value === "pull" && g({ pos: -va, ratio: 0 }));
      return;
    }
    if (c.value === true || i.value === "refreshing")
      return false;
    if (R.isFirst === true) {
      if (fo(b) !== 0 || R.direction !== "down")
        return l.value === true && (l.value = false, i.value = "pull", g({ pos: -va, ratio: 0 })), false;
      l.value = true;
      let { top: E, left: A } = w.getBoundingClientRect();
      u.value = { top: E + "px", left: A + "px", width: window.getComputedStyle(w).getPropertyValue("width") };
    }
    ut(R.evt);
    let $ = Math.min(140, Math.max(0, R.distance.y));
    s.value = $ - va, a.value = Ge($ / (cd + va), 0, 1);
    let F = s.value > cd ? "pulled" : "pull";
    i.value !== F && (i.value = F);
  }
  let v = computed(() => {
    let R = { down: true };
    return e.noMouse !== true && (R.mouse = true), [[qt, d, void 0, R]];
  }), x = computed(() => `q-pull-to-refresh__content${l.value === true ? " no-pointer-events" : ""}`);
  function p() {
    o("refresh", () => {
      g({ pos: -va, ratio: 0 }, () => {
        i.value = "pull";
      });
    });
  }
  let w, b, h2 = null;
  function g({ pos: R, ratio: $ }, F) {
    c.value = true, s.value = R, $ !== void 0 && (a.value = $), h2 !== null && clearTimeout(h2), h2 = setTimeout(() => {
      h2 = null, c.value = false, F && F();
    }, 300);
  }
  function C() {
    b = At(w, e.scrollTarget);
  }
  return watch(() => e.scrollTarget, C), onMounted(() => {
    w = r.$el, C();
  }), onBeforeUnmount(() => {
    h2 !== null && clearTimeout(h2);
  }), Object.assign(r, { trigger: p, updateScrollTarget: C }), () => {
    let R = [h("div", { class: x.value }, ee(t.default)), h("div", { class: "q-pull-to-refresh__puller-container fixed row flex-center no-pointer-events z-top", style: u.value }, [h("div", { class: f.value, style: m.value }, [i.value !== "refreshing" ? h(Ce, { name: e.icon || n.iconSet.pullToRefresh.icon, color: e.color, size: "32px" }) : h(St, { size: "24px", color: e.color })])])];
    return kt("div", { class: "q-pull-to-refresh" }, R, "main", e.disable === false, () => v.value);
  };
} });
var br = { MIN: 0, RANGE: 1, MAX: 2 };
var Rg = M({ name: "QRange", props: { ...Jl, modelValue: { type: Object, default: () => ({ min: null, max: null }), validator: (e) => "min" in e && "max" in e }, dragRange: Boolean, dragOnlyRange: Boolean, leftLabelColor: String, leftLabelTextColor: String, rightLabelColor: String, rightLabelTextColor: String, leftLabelValue: [String, Number], rightLabelValue: [String, Number], leftThumbColor: String, rightThumbColor: String }, emits: eu, setup(e, { emit: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), { state: r, methods: n } = tu({ updateValue: F, updatePosition: A, getDragging: E, formAttrs: computed(() => ({ type: "hidden", name: e.name, value: `${e.modelValue.min}|${e.modelValue.max}` })) }), i = ref(null), a = ref(0), l = ref(0), s = ref({ min: 0, max: 0 });
  function c() {
    s.value.min = e.modelValue.min === null ? r.innerMin.value : Ge(e.modelValue.min, r.innerMin.value, r.innerMax.value), s.value.max = e.modelValue.max === null ? r.innerMax.value : Ge(e.modelValue.max, r.innerMin.value, r.innerMax.value);
  }
  watch(() => `${e.modelValue.min}|${e.modelValue.max}|${r.innerMin.value}|${r.innerMax.value}`, c), c();
  let u = computed(() => n.convertModelToRatio(s.value.min)), m = computed(() => n.convertModelToRatio(s.value.max)), f = computed(() => r.active.value === true ? a.value : u.value), d = computed(() => r.active.value === true ? l.value : m.value), v = computed(() => {
    let P = { [r.positionProp.value]: `${100 * f.value}%`, [r.sizeProp.value]: `${100 * (d.value - f.value)}%` };
    return e.selectionImg !== void 0 && (P.backgroundImage = `url(${e.selectionImg}) !important`), P;
  }), x = computed(() => {
    if (r.editable.value !== true)
      return {};
    if (o.platform.is.mobile === true)
      return { onClick: n.onMobileClick };
    let P = { onMousedown: n.onActivate };
    return (e.dragRange === true || e.dragOnlyRange === true) && Object.assign(P, { onFocus: () => {
      r.focus.value = "both";
    }, onBlur: n.onBlur, onKeydown: B, onKeyup: n.onKeyup }), P;
  });
  function p(P) {
    return o.platform.is.mobile !== true && r.editable.value === true && e.dragOnlyRange !== true ? { onFocus: () => {
      r.focus.value = P;
    }, onBlur: n.onBlur, onKeydown: B, onKeyup: n.onKeyup } : {};
  }
  let w = computed(() => e.dragOnlyRange !== true ? r.tabindex.value : null), b = computed(() => o.platform.is.mobile !== true && (e.dragRange || e.dragOnlyRange === true) ? r.tabindex.value : null), h2 = ref(null), g = computed(() => p("min")), C = n.getThumbRenderFn({ focusValue: "min", getNodeData: () => ({ ref: h2, key: "tmin", ...g.value, tabindex: w.value }), ratio: f, label: computed(() => e.leftLabelValue !== void 0 ? e.leftLabelValue : s.value.min), thumbColor: computed(() => e.leftThumbColor || e.thumbColor || e.color), labelColor: computed(() => e.leftLabelColor || e.labelColor), labelTextColor: computed(() => e.leftLabelTextColor || e.labelTextColor) }), R = computed(() => p("max")), $ = n.getThumbRenderFn({ focusValue: "max", getNodeData: () => ({ ...R.value, key: "tmax", tabindex: w.value }), ratio: d, label: computed(() => e.rightLabelValue !== void 0 ? e.rightLabelValue : s.value.max), thumbColor: computed(() => e.rightThumbColor || e.thumbColor || e.color), labelColor: computed(() => e.rightLabelColor || e.labelColor), labelTextColor: computed(() => e.rightLabelTextColor || e.labelTextColor) });
  function F(P) {
    (s.value.min !== e.modelValue.min || s.value.max !== e.modelValue.max) && t("update:modelValue", { ...s.value }), P === true && t("change", { ...s.value });
  }
  function E(P) {
    let { left: S, top: q, width: D, height: j } = i.value.getBoundingClientRect(), k = e.dragOnlyRange === true ? 0 : e.vertical === true ? h2.value.offsetHeight / (2 * j) : h2.value.offsetWidth / (2 * D), I = { left: S, top: q, width: D, height: j, valueMin: s.value.min, valueMax: s.value.max, ratioMin: u.value, ratioMax: m.value }, W = n.getDraggingRatio(P, I);
    return e.dragOnlyRange !== true && W < I.ratioMin + k ? I.type = br.MIN : e.dragOnlyRange === true || W < I.ratioMax - k ? e.dragRange === true || e.dragOnlyRange === true ? (I.type = br.RANGE, Object.assign(I, { offsetRatio: W, offsetModel: n.convertRatioToModel(W), rangeValue: I.valueMax - I.valueMin, rangeRatio: I.ratioMax - I.ratioMin })) : I.type = I.ratioMax - W < W - I.ratioMin ? br.MAX : br.MIN : I.type = br.MAX, I;
  }
  function A(P, S = r.dragging.value) {
    let q, D = n.getDraggingRatio(P, S), j = n.convertRatioToModel(D);
    switch (S.type) {
      case br.MIN:
        D <= S.ratioMax ? (q = { minR: D, maxR: S.ratioMax, min: j, max: S.valueMax }, r.focus.value = "min") : (q = { minR: S.ratioMax, maxR: D, min: S.valueMax, max: j }, r.focus.value = "max");
        break;
      case br.MAX:
        D >= S.ratioMin ? (q = { minR: S.ratioMin, maxR: D, min: S.valueMin, max: j }, r.focus.value = "max") : (q = { minR: D, maxR: S.ratioMin, min: j, max: S.valueMin }, r.focus.value = "min");
        break;
      case br.RANGE:
        let k = D - S.offsetRatio, I = Ge(S.ratioMin + k, r.innerMinRatio.value, r.innerMaxRatio.value - S.rangeRatio), W = j - S.offsetModel, ae = Ge(S.valueMin + W, r.innerMin.value, r.innerMax.value - S.rangeValue);
        q = { minR: I, maxR: I + S.rangeRatio, min: r.roundValueFn.value(ae), max: r.roundValueFn.value(ae + S.rangeValue) }, r.focus.value = "both";
        break;
    }
    s.value = s.value.min === null || s.value.max === null ? { min: q.min || e.min, max: q.max || e.max } : { min: q.min, max: q.max }, e.snap !== true || e.step === 0 ? (a.value = q.minR, l.value = q.maxR) : (a.value = n.convertModelToRatio(s.value.min), l.value = n.convertModelToRatio(s.value.max));
  }
  function B(P) {
    if (!za.includes(P.keyCode))
      return;
    Se(P);
    let S = ([34, 33].includes(P.keyCode) ? 10 : 1) * r.keyStep.value, q = ([34, 37, 40].includes(P.keyCode) ? -1 : 1) * (r.isReversed.value === true ? -1 : 1) * (e.vertical === true ? -1 : 1) * S;
    if (r.focus.value === "both") {
      let D = s.value.max - s.value.min, j = Ge(r.roundValueFn.value(s.value.min + q), r.innerMin.value, r.innerMax.value - D);
      s.value = { min: j, max: r.roundValueFn.value(j + D) };
    } else {
      if (r.focus.value === false)
        return;
      {
        let D = r.focus.value;
        s.value = { ...s.value, [D]: Ge(r.roundValueFn.value(s.value[D] + q), D === "min" ? r.innerMin.value : s.value.min, D === "max" ? r.innerMax.value : s.value.max) };
      }
    }
    F();
  }
  return () => {
    let P = n.getContent(v, b, x, (S) => {
      S.push(C(), $());
    });
    return h("div", { ref: i, class: "q-range " + r.classes.value + (e.modelValue.min === null || e.modelValue.max === null ? " q-slider--no-value" : ""), ...r.attributes.value, "aria-valuenow": e.modelValue.min + "|" + e.modelValue.max }, P);
  };
} });
var Pg = M({ name: "QRating", props: { ...Ot, ...xt, modelValue: { type: Number, required: true }, max: { type: [String, Number], default: 5 }, icon: [String, Array], iconHalf: [String, Array], iconSelected: [String, Array], iconAriaLabel: [String, Array], color: [String, Array], colorHalf: [String, Array], colorSelected: [String, Array], noReset: Boolean, noDimming: Boolean, readonly: Boolean, disable: Boolean }, emits: ["update:modelValue"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), n = It(e), i = cn(e), a = Jt(i), l = ref(0), s = {}, c = computed(() => e.readonly !== true && e.disable !== true), u = computed(() => `q-rating row inline items-center q-rating--${c.value === true ? "" : "non-"}editable` + (e.noDimming === true ? " q-rating--no-dimming" : "") + (e.disable === true ? " disabled" : "") + (e.color !== void 0 && Array.isArray(e.color) === false ? ` text-${e.color}` : "")), m = computed(() => {
    let h2 = Array.isArray(e.icon) === true ? e.icon.length : 0, g = Array.isArray(e.iconSelected) === true ? e.iconSelected.length : 0, C = Array.isArray(e.iconHalf) === true ? e.iconHalf.length : 0, R = Array.isArray(e.color) === true ? e.color.length : 0, $ = Array.isArray(e.colorSelected) === true ? e.colorSelected.length : 0, F = Array.isArray(e.colorHalf) === true ? e.colorHalf.length : 0;
    return { iconLen: h2, icon: h2 > 0 ? e.icon[h2 - 1] : e.icon, selIconLen: g, selIcon: g > 0 ? e.iconSelected[g - 1] : e.iconSelected, halfIconLen: C, halfIcon: C > 0 ? e.iconHalf[g - 1] : e.iconHalf, colorLen: R, color: R > 0 ? e.color[R - 1] : e.color, selColorLen: $, selColor: $ > 0 ? e.colorSelected[$ - 1] : e.colorSelected, halfColorLen: F, halfColor: F > 0 ? e.colorHalf[F - 1] : e.colorHalf };
  }), f = computed(() => {
    if (typeof e.iconAriaLabel == "string") {
      let h2 = e.iconAriaLabel.length !== 0 ? `${e.iconAriaLabel} ` : "";
      return (g) => `${h2}${g}`;
    }
    if (Array.isArray(e.iconAriaLabel) === true) {
      let h2 = e.iconAriaLabel.length;
      if (h2 > 0)
        return (g) => e.iconAriaLabel[Math.min(g, h2) - 1];
    }
    return (h2, g) => `${g} ${h2}`;
  }), d = computed(() => {
    let h2 = [], g = m.value, C = Math.ceil(e.modelValue), R = c.value === true ? 0 : null, $ = e.iconHalf === void 0 || C === e.modelValue ? -1 : C;
    for (let F = 1; F <= e.max; F++) {
      let E = l.value === 0 && e.modelValue >= F || l.value > 0 && l.value >= F, A = $ === F && l.value < F, B = l.value > 0 && (A === true ? C : e.modelValue) >= F && l.value < F, P = A === true ? F <= g.halfColorLen ? e.colorHalf[F - 1] : g.halfColor : g.selColor !== void 0 && E === true ? F <= g.selColorLen ? e.colorSelected[F - 1] : g.selColor : F <= g.colorLen ? e.color[F - 1] : g.color, S = (A === true ? F <= g.halfIconLen ? e.iconHalf[F - 1] : g.halfIcon : g.selIcon !== void 0 && (E === true || B === true) ? F <= g.selIconLen ? e.iconSelected[F - 1] : g.selIcon : F <= g.iconLen ? e.icon[F - 1] : g.icon) || r.iconSet.rating.icon;
      h2.push({ name: (A === true ? F <= g.halfIconLen ? e.iconHalf[F - 1] : g.halfIcon : g.selIcon !== void 0 && (E === true || B === true) ? F <= g.selIconLen ? e.iconSelected[F - 1] : g.selIcon : F <= g.iconLen ? e.icon[F - 1] : g.icon) || r.iconSet.rating.icon, attrs: { tabindex: R, role: "radio", "aria-checked": e.modelValue === F ? "true" : "false", "aria-label": f.value(F, S) }, iconClass: "q-rating__icon" + (E === true || A === true ? " q-rating__icon--active" : "") + (B === true ? " q-rating__icon--exselected" : "") + (l.value === F ? " q-rating__icon--hovered" : "") + (P !== void 0 ? ` text-${P}` : "") });
    }
    return h2;
  }), v = computed(() => {
    let h2 = { role: "radiogroup" };
    return e.disable === true && (h2["aria-disabled"] = "true"), e.readonly === true && (h2["aria-readonly"] = "true"), h2;
  });
  function x(h2) {
    if (c.value === true) {
      let g = Ge(parseInt(h2, 10), 1, parseInt(e.max, 10)), C = e.noReset !== true && e.modelValue === g ? 0 : g;
      C !== e.modelValue && o("update:modelValue", C), l.value = 0;
    }
  }
  function p(h2) {
    c.value === true && (l.value = h2);
  }
  function w(h2, g) {
    switch (h2.keyCode) {
      case 13:
      case 32:
        return x(g), Se(h2);
      case 37:
      case 40:
        return s[`rt${g - 1}`] && s[`rt${g - 1}`].focus(), Se(h2);
      case 39:
      case 38:
        return s[`rt${g + 1}`] && s[`rt${g + 1}`].focus(), Se(h2);
    }
  }
  function b() {
    l.value = 0;
  }
  return onBeforeUpdate(() => {
    s = {};
  }), () => {
    let h2 = [];
    return d.value.forEach(({ iconClass: g, name: C, attrs: R }, $) => {
      let F = $ + 1;
      h2.push(h("div", { key: F, ref: (E) => {
        s[`rt${F}`] = E;
      }, class: "q-rating__icon-container flex flex-center", ...R, onClick() {
        x(F);
      }, onMouseover() {
        p(F);
      }, onMouseout: b, onFocus() {
        p(F);
      }, onBlur: b, onKeyup(E) {
        w(E, F);
      } }, je(t[`tip-${F}`], [h(Ce, { class: g, name: C })])));
    }), e.name !== void 0 && e.disable !== true && a(h2, "push"), h("div", { class: u.value, style: n.value, ...v.value }, h2);
  };
} });
var Ag = M({ name: "QResponsive", props: aa, setup(e, { slots: t }) {
  let o = la(e);
  return () => h("div", { class: "q-responsive" }, [h("div", { class: "q-responsive__filler overflow-hidden" }, [h("div", { style: o.value })]), h("div", { class: "q-responsive__content absolute-full fit" }, ee(t.default))]);
} });
var Eg = ["vertical", "horizontal"];
var fd = { vertical: { offset: "offsetY", scroll: "scrollTop", dir: "down", dist: "y" }, horizontal: { offset: "offsetX", scroll: "scrollLeft", dir: "right", dist: "x" } };
var Bg = { prevent: true, mouse: true, mouseAllDir: true };
var Fg = (e) => e >= 250 ? 50 : Math.ceil(e / 5);
var Lg = M({ name: "QScrollArea", props: { ...pe, thumbStyle: Object, verticalThumbStyle: Object, horizontalThumbStyle: Object, barStyle: [Array, String, Object], verticalBarStyle: [Array, String, Object], horizontalBarStyle: [Array, String, Object], contentStyle: [Array, String, Object], contentActiveStyle: [Array, String, Object], delay: { type: [String, Number], default: 1e3 }, visible: { type: Boolean, default: null }, tabindex: [String, Number], onScroll: Function }, setup(e, { slots: t, emit: o }) {
  let r = ref(false), n = ref(false), i = ref(false), a = { vertical: ref(0), horizontal: ref(0) }, l = { vertical: { ref: ref(null), position: ref(0), size: ref(0) }, horizontal: { ref: ref(null), position: ref(0), size: ref(0) } }, { proxy: s } = getCurrentInstance(), c = be(e, s.$q), u = null, m, f = ref(null), d = computed(() => "q-scrollarea" + (c.value === true ? " q-scrollarea--dark" : ""));
  l.vertical.percentage = computed(() => {
    let k = l.vertical.size.value - a.vertical.value;
    if (k <= 0)
      return 0;
    let I = Ge(l.vertical.position.value / k, 0, 1);
    return Math.round(I * 1e4) / 1e4;
  }), l.vertical.thumbHidden = computed(() => (e.visible === null ? i.value : e.visible) !== true && r.value === false && n.value === false || l.vertical.size.value <= a.vertical.value + 1), l.vertical.thumbStart = computed(() => l.vertical.percentage.value * (a.vertical.value - l.vertical.thumbSize.value)), l.vertical.thumbSize = computed(() => Math.round(Ge(a.vertical.value * a.vertical.value / l.vertical.size.value, Fg(a.vertical.value), a.vertical.value))), l.vertical.style = computed(() => ({ ...e.thumbStyle, ...e.verticalThumbStyle, top: `${l.vertical.thumbStart.value}px`, height: `${l.vertical.thumbSize.value}px` })), l.vertical.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--v absolute-right" + (l.vertical.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), l.vertical.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--v absolute-right" + (l.vertical.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : "")), l.horizontal.percentage = computed(() => {
    let k = l.horizontal.size.value - a.horizontal.value;
    if (k <= 0)
      return 0;
    let I = Ge(Math.abs(l.horizontal.position.value) / k, 0, 1);
    return Math.round(I * 1e4) / 1e4;
  }), l.horizontal.thumbHidden = computed(() => (e.visible === null ? i.value : e.visible) !== true && r.value === false && n.value === false || l.horizontal.size.value <= a.horizontal.value + 1), l.horizontal.thumbStart = computed(() => l.horizontal.percentage.value * (a.horizontal.value - l.horizontal.thumbSize.value)), l.horizontal.thumbSize = computed(() => Math.round(Ge(a.horizontal.value * a.horizontal.value / l.horizontal.size.value, Fg(a.horizontal.value), a.horizontal.value))), l.horizontal.style = computed(() => ({ ...e.thumbStyle, ...e.horizontalThumbStyle, [s.$q.lang.rtl === true ? "right" : "left"]: `${l.horizontal.thumbStart.value}px`, width: `${l.horizontal.thumbSize.value}px` })), l.horizontal.thumbClass = computed(() => "q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom" + (l.horizontal.thumbHidden.value === true ? " q-scrollarea__thumb--invisible" : "")), l.horizontal.barClass = computed(() => "q-scrollarea__bar q-scrollarea__bar--h absolute-bottom" + (l.horizontal.thumbHidden.value === true ? " q-scrollarea__bar--invisible" : ""));
  let v = computed(() => l.vertical.thumbHidden.value === true && l.horizontal.thumbHidden.value === true ? e.contentStyle : e.contentActiveStyle), x = [[qt, (k) => {
    $(k, "vertical");
  }, void 0, { vertical: true, ...Bg }]], p = [[qt, (k) => {
    $(k, "horizontal");
  }, void 0, { horizontal: true, ...Bg }]];
  function w() {
    let k = {};
    return Eg.forEach((I) => {
      let W = l[I];
      k[I + "Position"] = W.position.value, k[I + "Percentage"] = W.percentage.value, k[I + "Size"] = W.size.value, k[I + "ContainerSize"] = a[I].value;
    }), k;
  }
  let b = So(() => {
    let k = w();
    k.ref = s, o("scroll", k);
  }, 0);
  function h2(k, I, W) {
    if (Eg.includes(k) === false) {
      console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");
      return;
    }
    (k === "vertical" ? un : $a)(f.value, I, W);
  }
  function g({ height: k, width: I }) {
    let W = false;
    a.vertical.value !== k && (a.vertical.value = k, W = true), a.horizontal.value !== I && (a.horizontal.value = I, W = true), W === true && B();
  }
  function C({ position: k }) {
    let I = false;
    l.vertical.position.value !== k.top && (l.vertical.position.value = k.top, I = true), l.horizontal.position.value !== k.left && (l.horizontal.position.value = k.left, I = true), I === true && B();
  }
  function R({ height: k, width: I }) {
    l.horizontal.size.value !== I && (l.horizontal.size.value = I, B()), l.vertical.size.value !== k && (l.vertical.size.value = k, B());
  }
  function $(k, I) {
    let W = l[I];
    if (k.isFirst === true) {
      if (W.thumbHidden.value === true)
        return;
      m = W.position.value, n.value = true;
    } else if (n.value !== true)
      return;
    k.isFinal === true && (n.value = false);
    let ae = fd[I], V = a[I].value, _ = (W.size.value - V) / (V - W.thumbSize.value), H = k.distance[ae.dist], O = m + (k.direction === ae.dir ? 1 : -1) * H * _;
    P(O, I);
  }
  function F(k, I) {
    let W = l[I];
    if (W.thumbHidden.value !== true) {
      let ae = k[fd[I].offset];
      if (ae < W.thumbStart.value || ae > W.thumbStart.value + W.thumbSize.value) {
        let V = ae - W.thumbSize.value / 2;
        P(V / a[I].value * W.size.value, I);
      }
      W.ref.value !== null && W.ref.value.dispatchEvent(new MouseEvent(k.type, k));
    }
  }
  function E(k) {
    F(k, "vertical");
  }
  function A(k) {
    F(k, "horizontal");
  }
  function B() {
    r.value = true, u !== null && clearTimeout(u), u = setTimeout(() => {
      u = null, r.value = false;
    }, e.delay), e.onScroll !== void 0 && b();
  }
  function P(k, I) {
    f.value[fd[I].scroll] = k;
  }
  let S = null;
  function q() {
    S !== null && clearTimeout(S), S = setTimeout(() => {
      S = null, i.value = true;
    }, s.$q.platform.is.ios ? 50 : 0);
  }
  function D() {
    S !== null && (clearTimeout(S), S = null), i.value = false;
  }
  let j = null;
  return watch(() => s.$q.lang.rtl, (k) => {
    f.value !== null && $a(f.value, Math.abs(l.horizontal.position.value) * (k === true ? -1 : 1));
  }), onDeactivated(() => {
    j = { top: l.vertical.position.value, left: l.horizontal.position.value };
  }), onActivated(() => {
    if (j === null)
      return;
    let k = f.value;
    k !== null && ($a(k, j.left), un(k, j.top));
  }), onBeforeUnmount(b.cancel), Object.assign(s, { getScrollTarget: () => f.value, getScroll: w, getScrollPosition: () => ({ top: l.vertical.position.value, left: l.horizontal.position.value }), getScrollPercentage: () => ({ top: l.vertical.percentage.value, left: l.horizontal.percentage.value }), setScrollPosition: h2, setScrollPercentage(k, I, W) {
    h2(k, I * (l[k].size.value - a[k].value) * (k === "horizontal" && s.$q.lang.rtl === true ? -1 : 1), W);
  } }), () => h("div", { class: d.value, onMouseenter: q, onMouseleave: D }, [h("div", { ref: f, class: "q-scrollarea__container scroll relative-position fit hide-scrollbar", tabindex: e.tabindex !== void 0 ? e.tabindex : void 0 }, [h("div", { class: "q-scrollarea__content absolute", style: v.value }, je(t.default, [h(go, { debounce: 0, onResize: R })])), h(ca, { axis: "both", onScroll: C })]), h(go, { debounce: 0, onResize: g }), h("div", { class: l.vertical.barClass.value, style: [e.barStyle, e.verticalBarStyle], "aria-hidden": "true", onMousedown: E }), h("div", { class: l.horizontal.barClass.value, style: [e.barStyle, e.horizontalBarStyle], "aria-hidden": "true", onMousedown: A }), withDirectives(h("div", { ref: l.vertical.ref, class: l.vertical.thumbClass.value, style: l.vertical.style.value, "aria-hidden": "true" }), x), withDirectives(h("div", { ref: l.horizontal.ref, class: l.horizontal.thumbClass.value, style: l.horizontal.style.value, "aria-hidden": "true" }), p)]);
} });
var jo = 1e3;
var DC = ["start", "center", "end", "start-force", "center-force", "end-force"];
var Dg = Array.prototype.filter;
var OC = window.getComputedStyle(document.body).overflowAnchor === void 0 ? Ke : function(e, t) {
  e !== null && (e._qOverflowAnimationFrame !== void 0 && cancelAnimationFrame(e._qOverflowAnimationFrame), e._qOverflowAnimationFrame = requestAnimationFrame(() => {
    if (e === null)
      return;
    e._qOverflowAnimationFrame = void 0;
    let o = e.children || [];
    Dg.call(o, (n) => n.dataset && n.dataset.qVsAnchor !== void 0).forEach((n) => {
      delete n.dataset.qVsAnchor;
    });
    let r = o[t];
    r && r.dataset && (r.dataset.qVsAnchor = "");
  }));
};
function ha(e, t) {
  return e + t;
}
function md(e, t, o, r, n, i, a, l) {
  let s = e === window ? document.scrollingElement || document.documentElement : e, c = n === true ? "offsetWidth" : "offsetHeight", u = { scrollStart: 0, scrollViewSize: -a - l, scrollMaxSize: 0, offsetStart: -a, offsetEnd: -l };
  if (n === true ? (e === window ? (u.scrollStart = window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, u.scrollViewSize += document.documentElement.clientWidth) : (u.scrollStart = s.scrollLeft, u.scrollViewSize += s.clientWidth), u.scrollMaxSize = s.scrollWidth, i === true && (u.scrollStart = (Lr === true ? u.scrollMaxSize - u.scrollViewSize : 0) - u.scrollStart)) : (e === window ? (u.scrollStart = window.pageYOffset || window.scrollY || document.body.scrollTop || 0, u.scrollViewSize += document.documentElement.clientHeight) : (u.scrollStart = s.scrollTop, u.scrollViewSize += s.clientHeight), u.scrollMaxSize = s.scrollHeight), o !== null)
    for (let m = o.previousElementSibling; m !== null; m = m.previousElementSibling)
      m.classList.contains("q-virtual-scroll--skip") === false && (u.offsetStart += m[c]);
  if (r !== null)
    for (let m = r.nextElementSibling; m !== null; m = m.nextElementSibling)
      m.classList.contains("q-virtual-scroll--skip") === false && (u.offsetEnd += m[c]);
  if (t !== e) {
    let m = s.getBoundingClientRect(), f = t.getBoundingClientRect();
    n === true ? (u.offsetStart += f.left - m.left, u.offsetEnd -= f.width) : (u.offsetStart += f.top - m.top, u.offsetEnd -= f.height), e !== window && (u.offsetStart += u.scrollStart), u.offsetEnd += u.scrollMaxSize - u.offsetStart;
  }
  return u;
}
function zg(e, t, o, r) {
  t === "end" && (t = (e === window ? document.body : e)[o === true ? "scrollWidth" : "scrollHeight"]), e === window ? o === true ? (r === true && (t = (Lr === true ? document.body.scrollWidth - document.documentElement.clientWidth : 0) - t), window.scrollTo(t, window.pageYOffset || window.scrollY || document.body.scrollTop || 0)) : window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, t) : o === true ? (r === true && (t = (Lr === true ? e.scrollWidth - e.offsetWidth : 0) - t), e.scrollLeft = t) : e.scrollTop = t;
}
function cl(e, t, o, r) {
  if (o >= r)
    return 0;
  let n = t.length, i = Math.floor(o / jo), a = Math.floor((r - 1) / jo) + 1, l = e.slice(i, a).reduce(ha, 0);
  return o % jo !== 0 && (l -= t.slice(i * jo, o).reduce(ha, 0)), r % jo !== 0 && r !== n && (l -= t.slice(r, a * jo).reduce(ha, 0)), l;
}
var Og = { virtualScrollSliceSize: { type: [Number, String], default: null }, virtualScrollSliceRatioBefore: { type: [Number, String], default: 1 }, virtualScrollSliceRatioAfter: { type: [Number, String], default: 1 }, virtualScrollItemSize: { type: [Number, String], default: 24 }, virtualScrollStickySizeStart: { type: [Number, String], default: 0 }, virtualScrollStickySizeEnd: { type: [Number, String], default: 0 }, tableColspan: [Number, String] };
var vd = Object.keys(Og);
var ss = { virtualScrollHorizontal: Boolean, onVirtualScroll: Function, ...Og };
function cs({ virtualScrollLength: e, getVirtualScrollTarget: t, getVirtualScrollEl: o, virtualScrollItemSizeComputed: r }) {
  let n = getCurrentInstance(), { props: i, emit: a, proxy: l } = n, { $q: s } = l, c, u, m, f = [], d, v = ref(0), x = ref(0), p = ref({}), w = ref(null), b = ref(null), h2 = ref(null), g = ref({ from: 0, to: 0 }), C = computed(() => i.tableColspan !== void 0 ? i.tableColspan : 100);
  r === void 0 && (r = computed(() => i.virtualScrollItemSize));
  let R = computed(() => r.value + ";" + i.virtualScrollHorizontal), $ = computed(() => R.value + ";" + i.virtualScrollSliceRatioBefore + ";" + i.virtualScrollSliceRatioAfter);
  watch($, () => {
    j();
  }), watch(R, F);
  function F() {
    D(u, true);
  }
  function E(V) {
    D(V === void 0 ? u : V);
  }
  function A(V, _) {
    let H = t();
    if (H == null || H.nodeType === 8)
      return;
    let O = md(H, o(), w.value, b.value, i.virtualScrollHorizontal, s.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd);
    m !== O.scrollViewSize && j(O.scrollViewSize), P(H, O, Math.min(e.value - 1, Math.max(0, parseInt(V, 10) || 0)), 0, DC.indexOf(_) !== -1 ? _ : u !== -1 && V > u ? "end" : "start");
  }
  function B() {
    let V = t();
    if (V == null || V.nodeType === 8)
      return;
    let _ = md(V, o(), w.value, b.value, i.virtualScrollHorizontal, s.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd), H = e.value - 1, O = _.scrollMaxSize - _.offsetStart - _.offsetEnd - x.value;
    if (c === _.scrollStart)
      return;
    if (_.scrollMaxSize <= 0) {
      P(V, _, 0, 0);
      return;
    }
    m !== _.scrollViewSize && j(_.scrollViewSize), S(g.value.from);
    let Y = Math.floor(_.scrollMaxSize - Math.max(_.scrollViewSize, _.offsetEnd) - Math.min(d[H], _.scrollViewSize / 2));
    if (Y > 0 && Math.ceil(_.scrollStart) >= Y) {
      P(V, _, H, _.scrollMaxSize - _.offsetEnd - f.reduce(ha, 0));
      return;
    }
    let Q = 0, ne = _.scrollStart - _.offsetStart, N = ne;
    if (ne <= O && ne + _.scrollViewSize >= v.value)
      ne -= v.value, Q = g.value.from, N = ne;
    else
      for (let y = 0; ne >= f[y] && Q < H; y++)
        ne -= f[y], Q += jo;
    for (; ne > 0 && Q < H; )
      ne -= d[Q], ne > -_.scrollViewSize ? (Q++, N = ne) : N = d[Q] + ne;
    P(V, _, Q, N);
  }
  function P(V, _, H, O, Y) {
    let Q = typeof Y == "string" && Y.indexOf("-force") !== -1, ne = Q === true ? Y.replace("-force", "") : Y, N = ne !== void 0 ? ne : "start", y = Math.max(0, H - p.value[N]), U = y + p.value.total;
    U > e.value && (U = e.value, y = Math.max(0, U - p.value.total)), c = _.scrollStart;
    let te = y !== g.value.from || U !== g.value.to;
    if (te === false && ne === void 0) {
      I(H);
      return;
    }
    let { activeElement: le } = document, ve = h2.value;
    te === true && ve !== null && ve !== le && ve.contains(le) === true && (ve.addEventListener("focusout", q), setTimeout(() => {
      ve !== null && ve.removeEventListener("focusout", q);
    })), OC(ve, H - y);
    let ue = ne !== void 0 ? d.slice(y, H).reduce(ha, 0) : 0;
    if (te === true) {
      let Ee = U >= g.value.from && y <= g.value.to ? g.value.to : U;
      g.value = { from: y, to: Ee }, v.value = cl(f, d, 0, y), x.value = cl(f, d, U, e.value), requestAnimationFrame(() => {
        g.value.to !== U && c === _.scrollStart && (g.value = { from: g.value.from, to: U }, x.value = cl(f, d, U, e.value));
      });
    }
    requestAnimationFrame(() => {
      if (c !== _.scrollStart)
        return;
      te === true && S(y);
      let Ee = d.slice(y, H).reduce(ha, 0), Te = Ee + _.offsetStart + v.value, ge = Te + d[H], Fe = Te + O;
      if (ne !== void 0) {
        let tt = Ee - ue, He = _.scrollStart + tt;
        Fe = Q !== true && He < Te && ge < He + _.scrollViewSize ? He : ne === "end" ? ge - _.scrollViewSize : Te - (ne === "start" ? 0 : Math.round((_.scrollViewSize - d[H]) / 2));
      }
      c = Fe, zg(V, Fe, i.virtualScrollHorizontal, s.lang.rtl), I(H);
    });
  }
  function S(V) {
    let _ = h2.value;
    if (_) {
      let H = Dg.call(_.children, (y) => y.classList && y.classList.contains("q-virtual-scroll--skip") === false), O = H.length, Y = i.virtualScrollHorizontal === true ? (y) => y.getBoundingClientRect().width : (y) => y.offsetHeight, Q = V, ne, N;
      for (let y = 0; y < O; ) {
        for (ne = Y(H[y]), y++; y < O && H[y].classList.contains("q-virtual-scroll--with-prev") === true; )
          ne += Y(H[y]), y++;
        N = ne - d[Q], N !== 0 && (d[Q] += N, f[Math.floor(Q / jo)] += N), Q++;
      }
    }
  }
  function q() {
    h2.value !== null && h2.value !== void 0 && h2.value.focus();
  }
  function D(V, _) {
    let H = 1 * r.value;
    (_ === true || Array.isArray(d) === false) && (d = []);
    let O = d.length;
    d.length = e.value;
    for (let Q = e.value - 1; Q >= O; Q--)
      d[Q] = H;
    let Y = Math.floor((e.value - 1) / jo);
    f = [];
    for (let Q = 0; Q <= Y; Q++) {
      let ne = 0, N = Math.min((Q + 1) * jo, e.value);
      for (let y = Q * jo; y < N; y++)
        ne += d[y];
      f.push(ne);
    }
    u = -1, c = void 0, v.value = cl(f, d, 0, g.value.from), x.value = cl(f, d, g.value.to, e.value), V >= 0 ? (S(g.value.from), nextTick(() => {
      A(V);
    })) : W();
  }
  function j(V) {
    if (V === void 0 && typeof window < "u") {
      let ne = t();
      ne != null && ne.nodeType !== 8 && (V = md(ne, o(), w.value, b.value, i.virtualScrollHorizontal, s.lang.rtl, i.virtualScrollStickySizeStart, i.virtualScrollStickySizeEnd).scrollViewSize);
    }
    m = V;
    let _ = parseFloat(i.virtualScrollSliceRatioBefore) || 0, H = parseFloat(i.virtualScrollSliceRatioAfter) || 0, O = 1 + _ + H, Y = V === void 0 || V <= 0 ? 1 : Math.ceil(V / r.value), Q = Math.max(1, Y, Math.ceil((i.virtualScrollSliceSize > 0 ? i.virtualScrollSliceSize : 10) / O));
    p.value = { total: Math.ceil(Q * O), start: Math.ceil(Q * _), center: Math.ceil(Q * (0.5 + _)), end: Math.ceil(Q * (1 + _)), view: Y };
  }
  function k(V, _) {
    let H = i.virtualScrollHorizontal === true ? "width" : "height", O = { ["--q-virtual-scroll-item-" + H]: r.value + "px" };
    return [V === "tbody" ? h(V, { class: "q-virtual-scroll__padding", key: "before", ref: w }, [h("tr", [h("td", { style: { [H]: `${v.value}px`, ...O }, colspan: C.value })])]) : h(V, { class: "q-virtual-scroll__padding", key: "before", ref: w, style: { [H]: `${v.value}px`, ...O } }), h(V, { class: "q-virtual-scroll__content", key: "content", ref: h2, tabindex: -1 }, _.flat()), V === "tbody" ? h(V, { class: "q-virtual-scroll__padding", key: "after", ref: b }, [h("tr", [h("td", { style: { [H]: `${x.value}px`, ...O }, colspan: C.value })])]) : h(V, { class: "q-virtual-scroll__padding", key: "after", ref: b, style: { [H]: `${x.value}px`, ...O } })];
  }
  function I(V) {
    u !== V && (i.onVirtualScroll !== void 0 && a("virtualScroll", { index: V, from: g.value.from, to: g.value.to - 1, direction: V < u ? "decrease" : "increase", ref: l }), u = V);
  }
  j();
  let W = So(B, s.platform.is.ios === true ? 120 : 35);
  onBeforeMount(() => {
    j();
  });
  let ae = false;
  return onDeactivated(() => {
    ae = true;
  }), onActivated(() => {
    if (ae !== true)
      return;
    let V = t();
    c !== void 0 && V !== void 0 && V !== null && V.nodeType !== 8 ? zg(V, c, i.virtualScrollHorizontal, s.lang.rtl) : A(u);
  }), onBeforeUnmount(() => {
    W.cancel();
  }), Object.assign(l, { scrollTo: A, reset: F, refresh: E }), { virtualScrollSliceRange: g, virtualScrollSliceSizeComputed: p, setVirtualScrollSize: j, onVirtualScrollEvt: W, localResetVirtualScroll: D, padVirtualScroll: k, scrollTo: A, reset: F, refresh: E };
}
var Ig = (e) => ["add", "add-unique", "toggle"].includes(e);
var jC = ".*+?^${}()|[]\\";
var UC = Object.keys(zn);
var fs = M({ name: "QSelect", inheritAttrs: false, props: { ...ss, ...xt, ...zn, modelValue: { required: true }, multiple: Boolean, displayValue: [String, Number], displayValueHtml: Boolean, dropdownIcon: String, options: { type: Array, default: () => [] }, optionValue: [Function, String], optionLabel: [Function, String], optionDisable: [Function, String], hideSelected: Boolean, hideDropdownIcon: Boolean, fillInput: Boolean, maxValues: [Number, String], optionsDense: Boolean, optionsDark: { type: Boolean, default: null }, optionsSelectedClass: String, optionsHtml: Boolean, optionsCover: Boolean, menuShrink: Boolean, menuAnchor: String, menuSelf: String, menuOffset: Array, popupContentClass: String, popupContentStyle: [String, Array, Object], useInput: Boolean, useChips: Boolean, newValueMode: { type: String, validator: Ig }, mapOptions: Boolean, emitValue: Boolean, inputDebounce: { type: [Number, String], default: 500 }, inputClass: [Array, String, Object], inputStyle: [Array, String, Object], tabindex: { type: [String, Number], default: 0 }, autocomplete: String, transitionShow: String, transitionHide: String, transitionDuration: [String, Number], behavior: { type: String, validator: (e) => ["default", "menu", "dialog"].includes(e), default: "default" }, virtualScrollItemSize: { type: [Number, String], default: void 0 }, onNewValue: Function, onFilter: Function }, emits: [...cr, "add", "remove", "inputValue", "newValue", "keyup", "keypress", "keydown", "filterAbort"], setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), { $q: n } = r, i = ref(false), a = ref(false), l = ref(-1), s = ref(""), c = ref(false), u = ref(false), m = null, f = null, d, v, x, p = null, w, b, h2, g, C = ref(null), R = ref(null), $ = ref(null), F = ref(null), E = ref(null), A = Ai(e), B = Iu(me), P = computed(() => Array.isArray(e.options) ? e.options.length : 0), S = computed(() => e.virtualScrollItemSize === void 0 ? e.optionsDense === true ? 24 : 48 : e.virtualScrollItemSize), { virtualScrollSliceRange: q, virtualScrollSliceSizeComputed: D, localResetVirtualScroll: j, padVirtualScroll: k, onVirtualScrollEvt: I, scrollTo: W, setVirtualScrollSize: ae } = cs({ virtualScrollLength: P, getVirtualScrollTarget: qo, getVirtualScrollEl: no, virtualScrollItemSizeComputed: S }), V = dr(), _ = computed(() => {
    let L = e.mapOptions === true && e.multiple !== true, xe = e.modelValue !== void 0 && (e.modelValue !== null || L === true) ? e.multiple === true && Array.isArray(e.modelValue) ? e.modelValue : [e.modelValue] : [];
    if (e.mapOptions === true && Array.isArray(e.options) === true) {
      let he = e.mapOptions === true && d !== void 0 ? d : [], Qe = xe.map((vt) => K(vt, he));
      return e.modelValue === null && L === true ? Qe.filter((vt) => vt !== null) : Qe;
    }
    return xe;
  }), H = computed(() => {
    let L = {};
    return UC.forEach((xe) => {
      let he = e[xe];
      he !== void 0 && (L[xe] = he);
    }), L;
  }), O = computed(() => e.optionsDark === null ? V.isDark.value : e.optionsDark), Y = computed(() => bn(_.value)), Q = computed(() => {
    let L = "q-field__input q-placeholder col";
    return e.hideSelected === true || _.value.length === 0 ? [L, e.inputClass] : (L += " q-field__input--padding", e.inputClass === void 0 ? L : [L, e.inputClass]);
  }), ne = computed(() => (e.virtualScrollHorizontal === true ? "q-virtual-scroll--horizontal" : "") + (e.popupContentClass ? " " + e.popupContentClass : "")), N = computed(() => P.value === 0), y = computed(() => _.value.map((L) => se.value(L)).join(", ")), U = computed(() => e.displayValue !== void 0 ? e.displayValue : y.value), te = computed(() => e.optionsHtml === true ? () => true : (L) => L != null && L.html === true), le = computed(() => e.displayValueHtml === true || e.displayValue === void 0 && (e.optionsHtml === true || _.value.some(te.value))), ve = computed(() => V.focused.value === true ? e.tabindex : -1), ue = computed(() => {
    let L = { tabindex: e.tabindex, role: "combobox", "aria-label": e.label, "aria-readonly": e.readonly === true ? "true" : "false", "aria-autocomplete": e.useInput === true ? "list" : "none", "aria-expanded": i.value === true ? "true" : "false", "aria-controls": `${V.targetUid.value}_lb` };
    return l.value >= 0 && (L["aria-activedescendant"] = `${V.targetUid.value}_${l.value}`), L;
  }), Ee = computed(() => ({ id: `${V.targetUid.value}_lb`, role: "listbox", "aria-multiselectable": e.multiple === true ? "true" : "false" })), Te = computed(() => _.value.map((L, xe) => ({ index: xe, opt: L, html: te.value(L), selected: true, removeAtIndex: nt, toggleOption: dt, tabindex: ve.value }))), ge = computed(() => {
    if (P.value === 0)
      return [];
    let { from: L, to: xe } = q.value;
    return e.options.slice(L, xe).map((he, Qe) => {
      let vt = X.value(he) === true, ft = we(he) === true, jt = L + Qe, Pt = { clickable: true, active: ft, activeClass: He.value, manualFocus: true, focused: false, disable: vt, tabindex: -1, dense: e.optionsDense, dark: O.value, role: "option", "aria-selected": ft === true ? "true" : "false", id: `${V.targetUid.value}_${jt}`, onClick: () => {
        dt(he);
      } };
      return vt !== true && (l.value === jt && (Pt.focused = true), n.platform.is.desktop === true && (Pt.onMousemove = () => {
        i.value === true && Z(jt);
      })), { index: jt, opt: he, html: te.value(he), label: se.value(he), selected: Pt.active, focused: Pt.focused, toggleOption: dt, setOptionIndex: Z, itemProps: Pt };
    });
  }), Fe = computed(() => e.dropdownIcon !== void 0 ? e.dropdownIcon : n.iconSet.arrow.dropdown), tt = computed(() => e.optionsCover === false && e.outlined !== true && e.standout !== true && e.borderless !== true && e.rounded !== true), He = computed(() => e.optionsSelectedClass !== void 0 ? e.optionsSelectedClass : e.color !== void 0 ? `text-${e.color}` : ""), ie = computed(() => oe(e.optionValue, "value")), se = computed(() => oe(e.optionLabel, "label")), X = computed(() => oe(e.optionDisable, "disable")), fe = computed(() => _.value.map((L) => ie.value(L))), Me = computed(() => {
    let L = { onInput: me, onChange: B, onKeydown: ht, onKeyup: Xe, onKeypress: mt, onFocus: Ve, onClick(xe) {
      v === true && et(xe);
    } };
    return L.onCompositionstart = L.onCompositionupdate = L.onCompositionend = B, L;
  });
  watch(_, (L) => {
    d = L, e.useInput === true && e.fillInput === true && e.multiple !== true && V.innerLoading.value !== true && (a.value !== true && i.value !== true || Y.value !== true) && (x !== true && oi(), (a.value === true || i.value === true) && Ie(""));
  }, { immediate: true }), watch(() => e.fillInput, oi), watch(i, Is), watch(P, g0);
  function Ae(L) {
    return e.emitValue === true ? ie.value(L) : L;
  }
  function Re(L) {
    if (L !== -1 && L < _.value.length)
      if (e.multiple === true) {
        let xe = e.modelValue.slice();
        o("remove", { index: L, value: xe.splice(L, 1)[0] }), o("update:modelValue", xe);
      } else
        o("update:modelValue", null);
  }
  function nt(L) {
    Re(L), V.focus();
  }
  function ct(L, xe) {
    let he = Ae(L);
    if (e.multiple !== true) {
      e.fillInput === true && $e(se.value(L), true, true), o("update:modelValue", he);
      return;
    }
    if (_.value.length === 0) {
      o("add", { index: 0, value: he }), o("update:modelValue", e.multiple === true ? [he] : he);
      return;
    }
    if (xe === true && we(L) === true || e.maxValues !== void 0 && e.modelValue.length >= e.maxValues)
      return;
    let Qe = e.modelValue.slice();
    o("add", { index: Qe.length, value: he }), Qe.push(he), o("update:modelValue", Qe);
  }
  function dt(L, xe) {
    if (V.editable.value !== true || L === void 0 || X.value(L) === true)
      return;
    let he = ie.value(L);
    if (e.multiple !== true) {
      xe !== true && ($e(e.fillInput === true ? se.value(L) : "", true, true), wr()), R.value !== null && R.value.focus(), (_.value.length === 0 || Zt(ie.value(_.value[0]), he) !== true) && o("update:modelValue", e.emitValue === true ? he : L);
      return;
    }
    if ((v !== true || c.value === true) && V.focus(), Ve(), _.value.length === 0) {
      let ft = e.emitValue === true ? he : L;
      o("add", { index: 0, value: ft }), o("update:modelValue", e.multiple === true ? [ft] : ft);
      return;
    }
    let Qe = e.modelValue.slice(), vt = fe.value.findIndex((ft) => Zt(ft, he));
    if (vt !== -1)
      o("remove", { index: vt, value: Qe.splice(vt, 1)[0] });
    else {
      if (e.maxValues !== void 0 && Qe.length >= e.maxValues)
        return;
      let ft = e.emitValue === true ? he : L;
      o("add", { index: Qe.length, value: ft }), Qe.push(ft);
    }
    o("update:modelValue", Qe);
  }
  function Z(L) {
    if (n.platform.is.desktop !== true)
      return;
    let xe = L !== -1 && L < P.value ? L : -1;
    l.value !== xe && (l.value = xe);
  }
  function re(L = 1, xe) {
    if (i.value === true) {
      let he = l.value;
      do
        he = qr(he + L, -1, P.value - 1);
      while (he !== -1 && he !== l.value && X.value(e.options[he]) === true);
      l.value !== he && (Z(he), W(he), xe !== true && e.useInput === true && e.fillInput === true && ke(he >= 0 ? se.value(e.options[he]) : w, true));
    }
  }
  function K(L, xe) {
    let he = (Qe) => Zt(ie.value(Qe), L);
    return e.options.find(he) || xe.find(he) || L;
  }
  function oe(L, xe) {
    let he = L !== void 0 ? L : xe;
    return typeof he == "function" ? he : (Qe) => Qe !== null && typeof Qe == "object" && he in Qe ? Qe[he] : Qe;
  }
  function we(L) {
    let xe = ie.value(L);
    return fe.value.find((he) => Zt(he, xe)) !== void 0;
  }
  function Ve(L) {
    e.useInput === true && R.value !== null && (L === void 0 || R.value === L.target && L.target.value === y.value) && R.value.select();
  }
  function ye(L) {
    wt(L, 27) === true && i.value === true && (et(L), wr(), oi()), o("keyup", L);
  }
  function Xe(L) {
    let { value: xe } = L.target;
    if (L.keyCode !== void 0) {
      ye(L);
      return;
    }
    if (L.target.value = "", m !== null && (clearTimeout(m), m = null), f !== null && (clearTimeout(f), f = null), oi(), typeof xe == "string" && xe.length !== 0) {
      let he = xe.toLocaleLowerCase(), Qe = (ft) => {
        let jt = e.options.find((Pt) => ft.value(Pt).toLocaleLowerCase() === he);
        return jt === void 0 ? false : (_.value.indexOf(jt) === -1 ? dt(jt) : wr(), true);
      }, vt = (ft) => {
        Qe(ie) !== true && (Qe(se) === true || ft === true || Ie(xe, true, () => vt(true)));
      };
      vt();
    } else
      V.clearValue(L);
  }
  function mt(L) {
    o("keypress", L);
  }
  function ht(L) {
    if (o("keydown", L), xo(L) === true)
      return;
    let xe = s.value.length !== 0 && (e.newValueMode !== void 0 || e.onNewValue !== void 0), he = L.shiftKey !== true && e.multiple !== true && (l.value !== -1 || xe === true);
    if (L.keyCode === 27) {
      ut(L);
      return;
    }
    if (L.keyCode === 9 && he === false) {
      rt();
      return;
    }
    if (L.target === void 0 || L.target.id !== V.targetUid.value || V.editable.value !== true)
      return;
    if (L.keyCode === 40 && V.innerLoading.value !== true && i.value === false) {
      Se(L), To();
      return;
    }
    if (L.keyCode === 8 && (e.useChips === true || e.clearable === true) && e.hideSelected !== true && s.value.length === 0) {
      e.multiple === true && Array.isArray(e.modelValue) === true ? Re(e.modelValue.length - 1) : e.multiple !== true && e.modelValue !== null && o("update:modelValue", null);
      return;
    }
    (L.keyCode === 35 || L.keyCode === 36) && (typeof s.value != "string" || s.value.length === 0) && (Se(L), l.value = -1, re(L.keyCode === 36 ? 1 : -1, e.multiple)), (L.keyCode === 33 || L.keyCode === 34) && D.value !== void 0 && (Se(L), l.value = Math.max(-1, Math.min(P.value, l.value + (L.keyCode === 33 ? -1 : 1) * D.value.view)), re(L.keyCode === 33 ? 1 : -1, e.multiple)), (L.keyCode === 38 || L.keyCode === 40) && (Se(L), re(L.keyCode === 38 ? -1 : 1, e.multiple));
    let Qe = P.value;
    if ((h2 === void 0 || g < Date.now()) && (h2 = ""), Qe > 0 && e.useInput !== true && L.key !== void 0 && L.key.length === 1 && L.altKey === false && L.ctrlKey === false && L.metaKey === false && (L.keyCode !== 32 || h2.length !== 0)) {
      i.value !== true && To(L);
      let vt = L.key.toLocaleLowerCase(), ft = h2.length === 1 && h2[0] === vt;
      g = Date.now() + 1500, ft === false && (Se(L), h2 += vt);
      let jt = new RegExp("^" + h2.split("").map((Ns) => jC.indexOf(Ns) !== -1 ? "\\" + Ns : Ns).join(".*"), "i"), Pt = l.value;
      if (ft === true || Pt < 0 || jt.test(se.value(e.options[Pt])) !== true)
        do
          Pt = qr(Pt + 1, -1, Qe - 1);
        while (Pt !== l.value && (X.value(e.options[Pt]) === true || jt.test(se.value(e.options[Pt])) !== true));
      l.value !== Pt && nextTick(() => {
        Z(Pt), W(Pt), Pt >= 0 && e.useInput === true && e.fillInput === true && ke(se.value(e.options[Pt]), true);
      });
      return;
    }
    if (!(L.keyCode !== 13 && (L.keyCode !== 32 || e.useInput === true || h2 !== "") && (L.keyCode !== 9 || he === false))) {
      if (L.keyCode !== 9 && Se(L), l.value !== -1 && l.value < Qe) {
        dt(e.options[l.value]);
        return;
      }
      if (xe === true) {
        let vt = (ft, jt) => {
          if (jt) {
            if (Ig(jt) !== true)
              return;
          } else
            jt = e.newValueMode;
          if ($e("", e.multiple !== true, true), ft == null)
            return;
          (jt === "toggle" ? dt : ct)(ft, jt === "add-unique"), e.multiple !== true && (R.value !== null && R.value.focus(), wr());
        };
        if (e.onNewValue !== void 0 ? o("newValue", s.value, vt) : vt(s.value), e.multiple !== true)
          return;
      }
      i.value === true ? rt() : V.innerLoading.value !== true && To();
    }
  }
  function no() {
    return v === true ? E.value : $.value !== null && $.value.contentEl !== null ? $.value.contentEl : void 0;
  }
  function qo() {
    return no();
  }
  function qn() {
    return e.hideSelected === true ? [] : t["selected-item"] !== void 0 ? Te.value.map((L) => t["selected-item"](L)).slice() : t.selected !== void 0 ? [].concat(t.selected()) : e.useChips === true ? Te.value.map((L, xe) => h(Ki, { key: "option-" + xe, removable: V.editable.value === true && X.value(L.opt) !== true, dense: true, textColor: e.color, tabindex: ve.value, onRemove() {
      L.removeAtIndex(xe);
    } }, () => h("span", { class: "ellipsis", [L.html === true ? "innerHTML" : "textContent"]: se.value(L.opt) }))) : [h("span", { [le.value === true ? "innerHTML" : "textContent"]: U.value })];
  }
  function Zo() {
    if (N.value === true)
      return t["no-option"] !== void 0 ? t["no-option"]({ inputValue: s.value }) : void 0;
    let L = t.option !== void 0 ? t.option : (he) => h(pn, { key: he.index, ...he.itemProps }, () => h(ho, () => h(Nr, () => h("span", { [he.html === true ? "innerHTML" : "textContent"]: he.label })))), xe = k("div", ge.value.map(L));
    return t["before-options"] !== void 0 && (xe = t["before-options"]().concat(xe)), je(t["after-options"], xe);
  }
  function J(L, xe) {
    let he = xe === true ? { ...ue.value, ...V.splitAttrs.attributes.value } : void 0, Qe = { ref: xe === true ? R : void 0, key: "i_t", class: Q.value, style: e.inputStyle, value: s.value !== void 0 ? s.value : "", type: "search", ...he, id: xe === true ? V.targetUid.value : void 0, maxlength: e.maxlength, autocomplete: e.autocomplete, "data-autofocus": L === true || e.autofocus === true || void 0, disabled: e.disable === true, readonly: e.readonly === true, ...Me.value };
    return L !== true && v === true && (Array.isArray(Qe.class) === true ? Qe.class = [...Qe.class, "no-pointer-events"] : Qe.class += " no-pointer-events"), h("input", Qe);
  }
  function me(L) {
    m !== null && (clearTimeout(m), m = null), f !== null && (clearTimeout(f), f = null), !(L && L.target && L.target.qComposing === true) && (ke(L.target.value || ""), x = true, w = s.value, V.focused.value !== true && (v !== true || c.value === true) && V.focus(), e.onFilter !== void 0 && (m = setTimeout(() => {
      m = null, Ie(s.value);
    }, e.inputDebounce)));
  }
  function ke(L, xe) {
    s.value !== L && (s.value = L, xe === true || e.inputDebounce === 0 || e.inputDebounce === "0" ? o("inputValue", L) : f = setTimeout(() => {
      f = null, o("inputValue", L);
    }, e.inputDebounce));
  }
  function $e(L, xe, he) {
    x = he !== true, e.useInput === true && (ke(L, true), (xe === true || he !== true) && (w = L), xe !== true && Ie(L));
  }
  function Ie(L, xe, he) {
    if (e.onFilter === void 0 || xe !== true && V.focused.value !== true)
      return;
    V.innerLoading.value === true ? o("filterAbort") : (V.innerLoading.value = true, u.value = true), L !== "" && e.multiple !== true && _.value.length !== 0 && x !== true && L === se.value(_.value[0]) && (L = "");
    let Qe = setTimeout(() => {
      i.value === true && (i.value = false);
    }, 10);
    p !== null && clearTimeout(p), p = Qe, o("filter", L, (vt, ft) => {
      (xe === true || V.focused.value === true) && p === Qe && (clearTimeout(p), typeof vt == "function" && vt(), u.value = false, nextTick(() => {
        V.innerLoading.value = false, V.editable.value === true && (xe === true ? i.value === true && wr() : i.value === true ? Is(true) : i.value = true), typeof ft == "function" && nextTick(() => {
          ft(r);
        }), typeof he == "function" && nextTick(() => {
          he(r);
        });
      }));
    }, () => {
      V.focused.value === true && p === Qe && (clearTimeout(p), V.innerLoading.value = false, u.value = false), i.value === true && (i.value = false);
    });
  }
  function pt() {
    return h(sn, { ref: $, class: ne.value, style: e.popupContentStyle, modelValue: i.value, fit: e.menuShrink !== true, cover: e.optionsCover === true && N.value !== true && e.useInput !== true, anchor: e.menuAnchor, self: e.menuSelf, offset: e.menuOffset, dark: O.value, noParentEvent: true, noRefocus: true, noFocus: true, square: tt.value, transitionShow: e.transitionShow, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, separateClosePopup: true, ...Ee.value, onScrollPassive: I, onBeforeShow: Bd, onBeforeHide: T, onShow: z }, Zo);
  }
  function T(L) {
    Fd(L), rt();
  }
  function z() {
    ae();
  }
  function G(L) {
    et(L), R.value !== null && R.value.focus(), c.value = true, window.scrollTo(window.pageXOffset || window.scrollX || document.body.scrollLeft || 0, 0);
  }
  function ce(L) {
    et(L), nextTick(() => {
      c.value = false;
    });
  }
  function de() {
    let L = [h(Pu, { class: `col-auto ${V.fieldClass.value}`, ...H.value, for: V.targetUid.value, dark: O.value, square: true, loading: u.value, itemAligned: false, filled: true, stackLabel: s.value.length !== 0, ...V.splitAttrs.listeners.value, onFocus: G, onBlur: ce }, { ...t, rawControl: () => V.getControl(true), before: void 0, after: void 0 })];
    return i.value === true && L.push(h("div", { ref: E, class: ne.value + " scroll", style: e.popupContentStyle, ...Ee.value, onClick: ut, onScrollPassive: I }, Zo())), h(hn, { ref: F, modelValue: a.value, position: e.useInput === true ? "top" : void 0, transitionShow: b, transitionHide: e.transitionHide, transitionDuration: e.transitionDuration, onBeforeShow: Bd, onBeforeHide: Je, onHide: qe, onShow: Ue }, () => h("div", { class: "q-select__dialog" + (O.value === true ? " q-select__dialog--dark q-dark" : "") + (c.value === true ? " q-select__dialog--focused" : "") }, L));
  }
  function Je(L) {
    Fd(L), F.value !== null && F.value.__updateRefocusTarget(V.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")), V.focused.value = false;
  }
  function qe(L) {
    wr(), V.focused.value === false && o("blur", L), oi();
  }
  function Ue() {
    let L = document.activeElement;
    (L === null || L.id !== V.targetUid.value) && R.value !== null && R.value !== L && R.value.focus(), ae();
  }
  function rt() {
    a.value !== true && (l.value = -1, i.value === true && (i.value = false), V.focused.value === false && (p !== null && (clearTimeout(p), p = null), V.innerLoading.value === true && (o("filterAbort"), V.innerLoading.value = false, u.value = false)));
  }
  function To(L) {
    V.editable.value === true && (v === true ? (V.onControlFocusin(L), a.value = true, nextTick(() => {
      V.focus();
    })) : V.focus(), e.onFilter !== void 0 ? Ie(s.value) : (N.value !== true || t["no-option"] !== void 0) && (i.value = true));
  }
  function wr() {
    a.value = false, rt();
  }
  function oi() {
    e.useInput === true && $e(e.multiple !== true && e.fillInput === true && _.value.length !== 0 && se.value(_.value[0]) || "", true, true);
  }
  function Is(L) {
    let xe = -1;
    if (L === true) {
      if (_.value.length !== 0) {
        let he = ie.value(_.value[0]);
        xe = e.options.findIndex((Qe) => Zt(ie.value(Qe), he));
      }
      j(xe);
    }
    Z(xe);
  }
  function g0(L, xe) {
    i.value === true && V.innerLoading.value === false && (j(-1, true), nextTick(() => {
      i.value === true && V.innerLoading.value === false && (L > xe ? j() : Is(true));
    }));
  }
  function Ed() {
    a.value === false && $.value !== null && $.value.updatePosition();
  }
  function Bd(L) {
    L !== void 0 && et(L), o("popupShow", L), V.hasPopupOpen = true, V.onControlFocusin(L);
  }
  function Fd(L) {
    L !== void 0 && et(L), o("popupHide", L), V.hasPopupOpen = false, V.onControlFocusout(L);
  }
  function Ld() {
    v = n.platform.is.mobile !== true && e.behavior !== "dialog" ? false : e.behavior !== "menu" && (e.useInput === true ? t["no-option"] !== void 0 || e.onFilter !== void 0 || N.value === false : true), b = n.platform.is.ios === true && v === true && e.useInput === true ? "fade" : e.transitionShow;
  }
  return onBeforeUpdate(Ld), onUpdated(Ed), Ld(), onBeforeUnmount(() => {
    m !== null && clearTimeout(m), f !== null && clearTimeout(f);
  }), Object.assign(r, { showPopup: To, hidePopup: wr, removeAtIndex: Re, add: ct, toggleOption: dt, getOptionIndex: () => l.value, setOptionIndex: Z, moveOptionSelection: re, filter: Ie, updateMenuPosition: Ed, updateInputValue: $e, isOptionSelected: we, getEmittingOptionValue: Ae, isOptionDisabled: (...L) => X.value.apply(null, L) === true, getOptionValue: (...L) => ie.value.apply(null, L), getOptionLabel: (...L) => se.value.apply(null, L) }), Object.assign(V, { innerValue: _, fieldClass: computed(() => `q-select q-field--auto-height q-select--with${e.useInput !== true ? "out" : ""}-input q-select--with${e.useChips !== true ? "out" : ""}-chips q-select--${e.multiple === true ? "multiple" : "single"}`), inputRef: C, targetRef: R, hasValue: Y, showPopup: To, floatingLabel: computed(() => e.hideSelected !== true && Y.value === true || typeof s.value == "number" || s.value.length !== 0 || bn(e.displayValue)), getControlChild: () => {
    if (V.editable.value !== false && (a.value === true || N.value !== true || t["no-option"] !== void 0))
      return v === true ? de() : pt();
    V.hasPopupOpen === true && (V.hasPopupOpen = false);
  }, controlEvents: { onFocusin(L) {
    V.onControlFocusin(L);
  }, onFocusout(L) {
    V.onControlFocusout(L, () => {
      oi(), rt();
    });
  }, onClick(L) {
    if (ut(L), v !== true && i.value === true) {
      rt(), R.value !== null && R.value.focus();
      return;
    }
    To(L);
  } }, getControl: (L) => {
    let xe = qn(), he = L === true || a.value !== true || v !== true;
    if (e.useInput === true)
      xe.push(J(L, he));
    else if (V.editable.value === true) {
      let vt = he === true ? ue.value : void 0;
      xe.push(h("input", { ref: he === true ? R : void 0, key: "d_t", class: "q-select__focus-target", id: he === true ? V.targetUid.value : void 0, value: U.value, readonly: true, "data-autofocus": L === true || e.autofocus === true || void 0, ...vt, onKeydown: ht, onKeyup: ye, onKeypress: mt })), he === true && typeof e.autocomplete == "string" && e.autocomplete.length !== 0 && xe.push(h("input", { class: "q-select__autocomplete-input", autocomplete: e.autocomplete, tabindex: -1, onKeyup: Xe }));
    }
    if (A.value !== void 0 && e.disable !== true && fe.value.length !== 0) {
      let vt = fe.value.map((ft) => h("option", { value: ft, selected: true }));
      xe.push(h("select", { class: "hidden", name: A.value, multiple: e.multiple }, vt));
    }
    let Qe = e.useInput === true || he !== true ? void 0 : V.splitAttrs.attributes.value;
    return h("div", { class: "q-field__native row items-center", ...Qe, ...V.splitAttrs.listeners.value }, xe);
  }, getInnerAppend: () => e.loading !== true && u.value !== true && e.hideDropdownIcon !== true ? [h(Ce, { class: "q-select__dropdown-icon" + (i.value === true ? " rotate-180" : ""), name: Fe.value })] : null }), fr(V);
} });
var YC = ["text", "rect", "circle", "QBtn", "QBadge", "QChip", "QToolbar", "QCheckbox", "QRadio", "QToggle", "QSlider", "QRange", "QInput", "QAvatar"];
var XC = ["wave", "pulse", "pulse-x", "pulse-y", "fade", "blink", "none"];
var Hg = M({ name: "QSkeleton", props: { ...pe, tag: { type: String, default: "div" }, type: { type: String, validator: (e) => YC.includes(e), default: "rect" }, animation: { type: String, validator: (e) => XC.includes(e), default: "wave" }, animationSpeed: { type: [String, Number], default: 1500 }, square: Boolean, bordered: Boolean, size: String, width: String, height: String }, setup(e, { slots: t }) {
  let o = getCurrentInstance(), r = be(e, o.proxy.$q), n = computed(() => {
    let a = e.size !== void 0 ? [e.size, e.size] : [e.width, e.height];
    return { "--q-skeleton-speed": `${e.animationSpeed}ms`, width: a[0], height: a[1] };
  }), i = computed(() => `q-skeleton q-skeleton--${r.value === true ? "dark" : "light"} q-skeleton--type-${e.type}` + (e.animation !== "none" ? ` q-skeleton--anim q-skeleton--anim-${e.animation}` : "") + (e.square === true ? " q-skeleton--square" : "") + (e.bordered === true ? " q-skeleton--bordered" : ""));
  return () => h(e.tag, { class: i.value, style: n.value }, ee(t.default));
} });
var jg = [["left", "center", "start", "width"], ["right", "center", "end", "width"], ["top", "start", "center", "height"], ["bottom", "end", "center", "height"]];
var Ug = M({ name: "QSlideItem", props: { ...pe, leftColor: String, rightColor: String, topColor: String, bottomColor: String, onSlide: Function }, emits: ["action", "top", "right", "bottom", "left"], setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), { $q: n } = r, i = be(e, n), { getCacheWithFn: a } = dn(), l = ref(null), s = null, c = {}, u = {}, m = {}, f = computed(() => n.lang.rtl === true ? { left: "right", right: "left" } : { left: "left", right: "right" }), d = computed(() => "q-slide-item q-item-type overflow-hidden" + (i.value === true ? " q-slide-item--dark q-dark" : ""));
  function v() {
    l.value.style.transform = "translate(0,0)";
  }
  function x(w, b, h2) {
    e.onSlide !== void 0 && o("slide", { side: w, ratio: b, isReset: h2 });
  }
  function p(w) {
    let b = l.value;
    if (w.isFirst)
      c = { dir: null, size: { left: 0, right: 0, top: 0, bottom: 0 }, scale: 0 }, b.classList.add("no-transition"), jg.forEach((R) => {
        if (t[R[0]] !== void 0) {
          let $ = m[R[0]];
          $.style.transform = "scale(1)", c.size[R[0]] = $.getBoundingClientRect()[R[3]];
        }
      }), c.axis = w.direction === "up" || w.direction === "down" ? "Y" : "X";
    else if (w.isFinal) {
      b.classList.remove("no-transition"), c.scale === 1 ? (b.style.transform = `translate${c.axis}(${c.dir * 100}%)`, s !== null && clearTimeout(s), s = setTimeout(() => {
        s = null, o(c.showing, { reset: v }), o("action", { side: c.showing, reset: v });
      }, 230)) : (b.style.transform = "translate(0,0)", x(c.showing, 0, true));
      return;
    } else
      w.direction = c.axis === "X" ? w.offset.x < 0 ? "left" : "right" : w.offset.y < 0 ? "up" : "down";
    if (t.left === void 0 && w.direction === f.value.right || t.right === void 0 && w.direction === f.value.left || t.top === void 0 && w.direction === "down" || t.bottom === void 0 && w.direction === "up") {
      b.style.transform = "translate(0,0)";
      return;
    }
    let h2, g, C;
    c.axis === "X" ? (g = w.direction === "left" ? -1 : 1, h2 = g === 1 ? f.value.left : f.value.right, C = w.distance.x) : (g = w.direction === "up" ? -2 : 2, h2 = g === 2 ? "top" : "bottom", C = w.distance.y), !(c.dir !== null && Math.abs(g) !== Math.abs(c.dir)) && (c.dir !== g && (["left", "right", "top", "bottom"].forEach((R) => {
      u[R] && (u[R].style.visibility = h2 === R ? "visible" : "hidden");
    }), c.showing = h2, c.dir = g), c.scale = Math.max(0, Math.min(1, (C - 40) / c.size[h2])), b.style.transform = `translate${c.axis}(${C * g / Math.abs(g)}px)`, m[h2].style.transform = `scale(${c.scale})`, x(h2, c.scale, false));
  }
  return onBeforeUpdate(() => {
    u = {}, m = {};
  }), onBeforeUnmount(() => {
    s !== null && clearTimeout(s);
  }), Object.assign(r, { reset: v }), () => {
    let w = [], b = { left: t[f.value.right] !== void 0, right: t[f.value.left] !== void 0, up: t.bottom !== void 0, down: t.top !== void 0 }, h2 = Object.keys(b).filter((C) => b[C] === true);
    jg.forEach((C) => {
      let R = C[0];
      t[R] !== void 0 && w.push(h("div", { key: R, ref: ($) => {
        u[R] = $;
      }, class: `q-slide-item__${R} absolute-full row no-wrap items-${C[1]} justify-${C[2]}` + (e[R + "Color"] !== void 0 ? ` bg-${e[R + "Color"]}` : "") }, [h("div", { ref: ($) => {
        m[R] = $;
      } }, t[R]())]));
    });
    let g = h("div", { key: `${h2.length === 0 ? "only-" : ""} content`, ref: l, class: "q-slide-item__content" }, ee(t.default));
    return h2.length === 0 ? w.push(g) : w.push(withDirectives(g, a("dir#" + h2.join(""), () => {
      let C = { prevent: true, stop: true, mouse: true };
      return h2.forEach((R) => {
        C[R] = true;
      }), [[qt, p, void 0, C]];
    }))), h("div", { class: d.value }, w);
  };
} });
var nw = h("div", { class: "q-space" });
var Kg = M({ name: "QSpace", setup() {
  return () => nw;
} });
var rw = [h("g", { transform: "matrix(1 0 0 -1 0 80)" }, [h("rect", { width: "10", height: "20", rx: "3" }, [h("animate", { attributeName: "height", begin: "0s", dur: "4.3s", values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "15", width: "10", height: "80", rx: "3" }, [h("animate", { attributeName: "height", begin: "0s", dur: "2s", values: "80;55;33;5;75;23;73;33;12;14;60;80", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "30", width: "10", height: "50", rx: "3" }, [h("animate", { attributeName: "height", begin: "0s", dur: "1.4s", values: "50;34;78;23;56;23;34;76;80;54;21;50", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "45", width: "10", height: "30", rx: "3" }, [h("animate", { attributeName: "height", begin: "0s", dur: "2s", values: "30;45;13;80;56;72;45;76;34;23;67;30", calcMode: "linear", repeatCount: "indefinite" })])])];
var Wg = M({ name: "QSpinnerAudio", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 55 80", xmlns: "http://www.w3.org/2000/svg" }, rw);
} });
var iw = [h("g", { transform: "translate(1 1)", "stroke-width": "2", fill: "none", "fill-rule": "evenodd" }, [h("circle", { cx: "5", cy: "50", r: "5" }, [h("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", values: "50;5;50;50", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "cx", begin: "0s", dur: "2.2s", values: "5;27;49;5", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "27", cy: "5", r: "5" }, [h("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", from: "5", to: "5", values: "5;50;50;5", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "cx", begin: "0s", dur: "2.2s", from: "27", to: "27", values: "27;49;5;27", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "49", cy: "50", r: "5" }, [h("animate", { attributeName: "cy", begin: "0s", dur: "2.2s", values: "50;50;5;50", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "cx", from: "49", to: "49", begin: "0s", dur: "2.2s", values: "49;5;27;49", calcMode: "linear", repeatCount: "indefinite" })])])];
var Yg = M({ name: "QSpinnerBall", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 57 57", xmlns: "http://www.w3.org/2000/svg" }, iw);
} });
var aw = [h("rect", { y: "10", width: "15", height: "120", rx: "6" }, [h("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "30", y: "10", width: "15", height: "120", rx: "6" }, [h("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "60", width: "15", height: "140", rx: "6" }, [h("animate", { attributeName: "height", begin: "0s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "y", begin: "0s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "90", y: "10", width: "15", height: "120", rx: "6" }, [h("animate", { attributeName: "height", begin: "0.25s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "y", begin: "0.25s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })]), h("rect", { x: "120", y: "10", width: "15", height: "120", rx: "6" }, [h("animate", { attributeName: "height", begin: "0.5s", dur: "1s", values: "120;110;100;90;80;70;60;50;40;140;120", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "y", begin: "0.5s", dur: "1s", values: "10;15;20;25;30;35;40;45;50;0;10", calcMode: "linear", repeatCount: "indefinite" })])];
var Xg = M({ name: "QSpinnerBars", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 135 140", xmlns: "http://www.w3.org/2000/svg" }, aw);
} });
var lw = [h("rect", { x: "25", y: "25", width: "50", height: "50", fill: "none", "stroke-width": "4", stroke: "currentColor" }, [h("animateTransform", { id: "spinnerBox", attributeName: "transform", type: "rotate", from: "0 50 50", to: "180 50 50", dur: "0.5s", begin: "rectBox.end" })]), h("rect", { x: "27", y: "27", width: "46", height: "50", fill: "currentColor" }, [h("animate", { id: "rectBox", attributeName: "height", begin: "0s;spinnerBox.end", dur: "1.3s", from: "50", to: "0", fill: "freeze" })])];
var Gg = M({ name: "QSpinnerBox", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, lw);
} });
var uw = [h("circle", { cx: "50", cy: "50", r: "48", fill: "none", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor" }), h("line", { "stroke-linecap": "round", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor", x1: "50", y1: "50", x2: "85", y2: "50.5" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "2s", repeatCount: "indefinite" })]), h("line", { "stroke-linecap": "round", "stroke-width": "4", "stroke-miterlimit": "10", stroke: "currentColor", x1: "50", y1: "50", x2: "49.5", y2: "74" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "15s", repeatCount: "indefinite" })])];
var Zg = M({ name: "QSpinnerClock", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, uw);
} });
var sw = [h("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none" }), h("path", { d: "M78,19H22c-6.6,0-12,5.4-12,12v31c0,6.6,5.4,12,12,12h37.2c0.4,3,1.8,5.6,3.7,7.6c2.4,2.5,5.1,4.1,9.1,4 c-1.4-2.1-2-7.2-2-10.3c0-0.4,0-0.8,0-1.3h8c6.6,0,12-5.4,12-12V31C90,24.4,84.6,19,78,19z", fill: "currentColor" }), h("circle", { cx: "30", cy: "47", r: "5", fill: "#fff" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", values: "0;1;1", keyTimes: "0;0.2;1", dur: "1s", repeatCount: "indefinite" })]), h("circle", { cx: "50", cy: "47", r: "5", fill: "#fff" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", values: "0;0;1;1", keyTimes: "0;0.2;0.4;1", dur: "1s", repeatCount: "indefinite" })]), h("circle", { cx: "70", cy: "47", r: "5", fill: "#fff" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", values: "0;0;1;1", keyTimes: "0;0.4;0.6;1", dur: "1s", repeatCount: "indefinite" })])];
var Jg = M({ name: "QSpinnerComment", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, sw);
} });
var cw = [h("rect", { x: "0", y: "0", width: "100", height: "100", fill: "none" }), h("g", { transform: "translate(25 25)" }, [h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.9" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])]), h("g", { transform: "translate(75 25)" }, [h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.8" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.1s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])]), h("g", { transform: "translate(25 75)" }, [h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.7" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.3s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])]), h("g", { transform: "translate(75 75)" }, [h("rect", { x: "-20", y: "-20", width: "40", height: "40", fill: "currentColor", opacity: "0.6" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "1.5", to: "1", repeatCount: "indefinite", begin: "0.2s", dur: "1s", calcMode: "spline", keySplines: "0.2 0.8 0.2 0.8", keyTimes: "0;1" })])])];
var eh = M({ name: "QSpinnerCube", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, cw);
} });
var dw = [h("circle", { cx: "15", cy: "15", r: "15" }, [h("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "60", cy: "15", r: "9", "fill-opacity": ".3" }, [h("animate", { attributeName: "r", from: "9", to: "9", begin: "0s", dur: "0.8s", values: "9;15;9", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "fill-opacity", from: ".5", to: ".5", begin: "0s", dur: "0.8s", values: ".5;1;.5", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "105", cy: "15", r: "15" }, [h("animate", { attributeName: "r", from: "15", to: "15", begin: "0s", dur: "0.8s", values: "15;9;15", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "fill-opacity", from: "1", to: "1", begin: "0s", dur: "0.8s", values: "1;.5;1", calcMode: "linear", repeatCount: "indefinite" })])];
var th = M({ name: "QSpinnerDots", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 120 30", xmlns: "http://www.w3.org/2000/svg" }, dw);
} });
var fw = [h("g", { transform: "translate(20 50)" }, [h("rect", { x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.6" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "2", to: "1", begin: "0s", repeatCount: "indefinite", dur: "1s", calcMode: "spline", keySplines: "0.1 0.9 0.4 1", keyTimes: "0;1", values: "2;1" })])]), h("g", { transform: "translate(50 50)" }, [h("rect", { x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.8" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "2", to: "1", begin: "0.1s", repeatCount: "indefinite", dur: "1s", calcMode: "spline", keySplines: "0.1 0.9 0.4 1", keyTimes: "0;1", values: "2;1" })])]), h("g", { transform: "translate(80 50)" }, [h("rect", { x: "-10", y: "-30", width: "20", height: "60", fill: "currentColor", opacity: "0.9" }, [h("animateTransform", { attributeName: "transform", type: "scale", from: "2", to: "1", begin: "0.2s", repeatCount: "indefinite", dur: "1s", calcMode: "spline", keySplines: "0.1 0.9 0.4 1", keyTimes: "0;1", values: "2;1" })])])];
var oh = M({ name: "QSpinnerFacebook", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", preserveAspectRatio: "xMidYMid" }, fw);
} });
var mw = [h("g", { transform: "translate(-20,-20)" }, [h("path", { d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z", fill: "currentColor" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "90 50 50", to: "0 50 50", dur: "1s", repeatCount: "indefinite" })])]), h("g", { transform: "translate(20,20) rotate(15 50 50)" }, [h("path", { d: "M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z", fill: "currentColor" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "90 50 50", dur: "1s", repeatCount: "indefinite" })])])];
var nh = M({ name: "QSpinnerGears", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, mw);
} });
var vw = [h("circle", { cx: "12.5", cy: "12.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "0s", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "12.5", cy: "52.5", r: "12.5", "fill-opacity": ".5" }, [h("animate", { attributeName: "fill-opacity", begin: "100ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "52.5", cy: "12.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "300ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "52.5", cy: "52.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "600ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "92.5", cy: "12.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "800ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "92.5", cy: "52.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "400ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "12.5", cy: "92.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "700ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "52.5", cy: "92.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "500ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "92.5", cy: "92.5", r: "12.5" }, [h("animate", { attributeName: "fill-opacity", begin: "200ms", dur: "1s", values: "1;.2;1", calcMode: "linear", repeatCount: "indefinite" })])];
var rh = M({ name: "QSpinnerGrid", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 105 105", xmlns: "http://www.w3.org/2000/svg" }, vw);
} });
var gw = [h("path", { d: "M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.716-6.002 11.47-7.65 17.304-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z", "fill-opacity": ".5" }, [h("animate", { attributeName: "fill-opacity", begin: "0s", dur: "1.4s", values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite" })]), h("path", { d: "M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.593-2.32 17.308 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z", "fill-opacity": ".5" }, [h("animate", { attributeName: "fill-opacity", begin: "0.7s", dur: "1.4s", values: "0.5;1;0.5", calcMode: "linear", repeatCount: "indefinite" })]), h("path", { d: "M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" })];
var ih = M({ name: "QSpinnerHearts", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, fill: "currentColor", width: t.value, height: t.value, viewBox: "0 0 140 64", xmlns: "http://www.w3.org/2000/svg" }, gw);
} });
var hw = [h("g", [h("path", { fill: "none", stroke: "currentColor", "stroke-width": "5", "stroke-miterlimit": "10", d: "M58.4,51.7c-0.9-0.9-1.4-2-1.4-2.3s0.5-0.4,1.4-1.4 C70.8,43.8,79.8,30.5,80,15.5H70H30H20c0.2,15,9.2,28.1,21.6,32.3c0.9,0.9,1.4,1.2,1.4,1.5s-0.5,1.6-1.4,2.5 C29.2,56.1,20.2,69.5,20,85.5h10h40h10C79.8,69.5,70.8,55.9,58.4,51.7z" }), h("clipPath", { id: "uil-hourglass-clip1" }, [h("rect", { x: "15", y: "20", width: "70", height: "25" }, [h("animate", { attributeName: "height", from: "25", to: "0", dur: "1s", repeatCount: "indefinite", values: "25;0;0", keyTimes: "0;0.5;1" }), h("animate", { attributeName: "y", from: "20", to: "45", dur: "1s", repeatCount: "indefinite", values: "20;45;45", keyTimes: "0;0.5;1" })])]), h("clipPath", { id: "uil-hourglass-clip2" }, [h("rect", { x: "15", y: "55", width: "70", height: "25" }, [h("animate", { attributeName: "height", from: "0", to: "25", dur: "1s", repeatCount: "indefinite", values: "0;25;25", keyTimes: "0;0.5;1" }), h("animate", { attributeName: "y", from: "80", to: "55", dur: "1s", repeatCount: "indefinite", values: "80;55;55", keyTimes: "0;0.5;1" })])]), h("path", { d: "M29,23c3.1,11.4,11.3,19.5,21,19.5S67.9,34.4,71,23H29z", "clip-path": "url(#uil-hourglass-clip1)", fill: "currentColor" }), h("path", { d: "M71.6,78c-3-11.6-11.5-20-21.5-20s-18.5,8.4-21.5,20H71.6z", "clip-path": "url(#uil-hourglass-clip2)", fill: "currentColor" }), h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "180 50 50", repeatCount: "indefinite", dur: "1s", values: "0 50 50;0 50 50;180 50 50", keyTimes: "0;0.7;1" })])];
var ah = M({ name: "QSpinnerHourglass", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, hw);
} });
var pw = [h("path", { d: "M24.3,30C11.4,30,5,43.3,5,50s6.4,20,19.3,20c19.3,0,32.1-40,51.4-40C88.6,30,95,43.3,95,50s-6.4,20-19.3,20C56.4,70,43.6,30,24.3,30z", fill: "none", stroke: "currentColor", "stroke-width": "8", "stroke-dasharray": "10.691205342610678 10.691205342610678", "stroke-dashoffset": "0" }, [h("animate", { attributeName: "stroke-dashoffset", from: "0", to: "21.382410685221355", begin: "0", dur: "2s", repeatCount: "indefinite", fill: "freeze" })])];
var lh = M({ name: "QSpinnerInfinity", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid" }, pw);
} });
var bw = [h("g", { "stroke-width": "4", "stroke-linecap": "round" }, [h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(180)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(210)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: "0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(240)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(270)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(300)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(330)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(0)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(30)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(60)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(90)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(120)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: ".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85", repeatCount: "indefinite" })]), h("line", { y1: "17", y2: "29", transform: "translate(32,32) rotate(150)" }, [h("animate", { attributeName: "stroke-opacity", dur: "750ms", values: "1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1", repeatCount: "indefinite" })])])];
var uh = M({ name: "QSpinnerIos", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, stroke: "currentColor", fill: "currentColor", viewBox: "0 0 64 64" }, bw);
} });
var yw = [h("circle", { cx: "50", cy: "50", r: "44", fill: "none", "stroke-width": "4", "stroke-opacity": ".5", stroke: "currentColor" }), h("circle", { cx: "8", cy: "54", r: "6", fill: "currentColor", "stroke-width": "3", stroke: "currentColor" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 48", to: "360 50 52", dur: "2s", repeatCount: "indefinite" })])];
var sh = M({ name: "QSpinnerOrbit", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, yw);
} });
var Sw = [h("g", { transform: "translate(1 1)", "stroke-width": "2", fill: "none", "fill-rule": "evenodd" }, [h("circle", { "stroke-opacity": ".5", cx: "18", cy: "18", r: "18" }), h("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })])])];
var ch = M({ name: "QSpinnerOval", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, Sw);
} });
var xw = [h("path", { d: "M0 50A50 50 0 0 1 50 0L50 50L0 50", fill: "currentColor", opacity: "0.5" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "0.8s", repeatCount: "indefinite" })]), h("path", { d: "M50 0A50 50 0 0 1 100 50L50 50L50 0", fill: "currentColor", opacity: "0.5" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "1.6s", repeatCount: "indefinite" })]), h("path", { d: "M100 50A50 50 0 0 1 50 100L50 50L100 50", fill: "currentColor", opacity: "0.5" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "2.4s", repeatCount: "indefinite" })]), h("path", { d: "M50 100A50 50 0 0 1 0 50L50 50L50 100", fill: "currentColor", opacity: "0.5" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 50 50", to: "360 50 50", dur: "3.2s", repeatCount: "indefinite" })])];
var dh = M({ name: "QSpinnerPie", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, xw);
} });
var _w = [h("g", { fill: "none", "fill-rule": "evenodd", "stroke-width": "2" }, [h("circle", { cx: "22", cy: "22", r: "1" }, [h("animate", { attributeName: "r", begin: "0s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-opacity", begin: "0s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })]), h("circle", { cx: "22", cy: "22", r: "1" }, [h("animate", { attributeName: "r", begin: "-0.9s", dur: "1.8s", values: "1; 20", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.165, 0.84, 0.44, 1", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-opacity", begin: "-0.9s", dur: "1.8s", values: "1; 0", calcMode: "spline", keyTimes: "0; 1", keySplines: "0.3, 0.61, 0.355, 1", repeatCount: "indefinite" })])])];
var fh = M({ name: "QSpinnerPuff", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 44 44", xmlns: "http://www.w3.org/2000/svg" }, _w);
} });
var Cw = [h("g", { transform: "scale(0.55)" }, [h("circle", { cx: "30", cy: "150", r: "30", fill: "currentColor" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1" })]), h("path", { d: "M90,150h30c0-49.7-40.3-90-90-90v30C63.1,90,90,116.9,90,150z", fill: "currentColor" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0.1", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1" })]), h("path", { d: "M150,150h30C180,67.2,112.8,0,30,0v30C96.3,30,150,83.7,150,150z", fill: "currentColor" }, [h("animate", { attributeName: "opacity", from: "0", to: "1", dur: "1s", begin: "0.2", repeatCount: "indefinite", keyTimes: "0;0.5;1", values: "0;1;1" })])])];
var mh = M({ name: "QSpinnerRadio", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 100 100", preserveAspectRatio: "xMidYMid", xmlns: "http://www.w3.org/2000/svg" }, Cw);
} });
var ww = [h("g", { fill: "none", "fill-rule": "evenodd", transform: "translate(1 1)", "stroke-width": "2" }, [h("circle", { cx: "22", cy: "22", r: "6" }, [h("animate", { attributeName: "r", begin: "1.5s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-opacity", begin: "1.5s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-width", begin: "1.5s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "22", cy: "22", r: "6" }, [h("animate", { attributeName: "r", begin: "3s", dur: "3s", values: "6;22", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-opacity", begin: "3s", dur: "3s", values: "1;0", calcMode: "linear", repeatCount: "indefinite" }), h("animate", { attributeName: "stroke-width", begin: "3s", dur: "3s", values: "2;0", calcMode: "linear", repeatCount: "indefinite" })]), h("circle", { cx: "22", cy: "22", r: "8" }, [h("animate", { attributeName: "r", begin: "0s", dur: "1.5s", values: "6;1;2;3;4;5;6", calcMode: "linear", repeatCount: "indefinite" })])])];
var vh = M({ name: "QSpinnerRings", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, stroke: "currentColor", width: t.value, height: t.value, viewBox: "0 0 45 45", xmlns: "http://www.w3.org/2000/svg" }, ww);
} });
var kw = [h("defs", [h("linearGradient", { x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" }, [h("stop", { "stop-color": "currentColor", "stop-opacity": "0", offset: "0%" }), h("stop", { "stop-color": "currentColor", "stop-opacity": ".631", offset: "63.146%" }), h("stop", { "stop-color": "currentColor", offset: "100%" })])]), h("g", { transform: "translate(1 1)", fill: "none", "fill-rule": "evenodd" }, [h("path", { d: "M36 18c0-9.94-8.06-18-18-18", stroke: "url(#a)", "stroke-width": "2" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })]), h("circle", { fill: "currentColor", cx: "36", cy: "18", r: "1" }, [h("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" })])])];
var gh = M({ name: "QSpinnerTail", props: ze, setup(e) {
  let { cSize: t, classes: o } = Le(e);
  return () => h("svg", { class: o.value, width: t.value, height: t.value, viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }, kw);
} });
var ph = M({ name: "QSplitter", props: { ...pe, modelValue: { type: Number, required: true }, reverse: Boolean, unit: { type: String, default: "%", validator: (e) => ["%", "px"].includes(e) }, limits: { type: Array, validator: (e) => e.length !== 2 || typeof e[0] != "number" || typeof e[1] != "number" ? false : e[0] >= 0 && e[0] <= e[1] }, emitImmediately: Boolean, horizontal: Boolean, disable: Boolean, beforeClass: [Array, String, Object], afterClass: [Array, String, Object], separatorClass: [Array, String, Object], separatorStyle: [Array, String, Object] }, emits: ["update:modelValue"], setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), n = be(e, r), i = ref(null), a = { before: ref(null), after: ref(null) }, l = computed(() => `q-splitter no-wrap ${e.horizontal === true ? "q-splitter--horizontal column" : "q-splitter--vertical row"} q-splitter--${e.disable === true ? "disabled" : "workable"}` + (n.value === true ? " q-splitter--dark" : "")), s = computed(() => e.horizontal === true ? "height" : "width"), c = computed(() => e.reverse !== true ? "before" : "after"), u = computed(() => e.limits !== void 0 ? e.limits : e.unit === "%" ? [10, 90] : [50, 1 / 0]);
  function m(C) {
    return (e.unit === "%" ? C : Math.round(C)) + e.unit;
  }
  let f = computed(() => ({ [c.value]: { [s.value]: m(e.modelValue) } })), d, v, x, p, w;
  function b(C) {
    if (C.isFirst === true) {
      let $ = i.value.getBoundingClientRect()[s.value];
      d = e.horizontal === true ? "up" : "left", v = e.unit === "%" ? 100 : $, x = Math.min(v, u.value[1], Math.max(u.value[0], e.modelValue)), p = (e.reverse !== true ? 1 : -1) * (e.horizontal === true ? 1 : r.lang.rtl === true ? -1 : 1) * (e.unit === "%" ? $ === 0 ? 0 : 100 / $ : 1), i.value.classList.add("q-splitter--active");
      return;
    }
    if (C.isFinal === true) {
      w !== e.modelValue && o("update:modelValue", w), i.value.classList.remove("q-splitter--active");
      return;
    }
    let R = x + p * (C.direction === d ? -1 : 1) * C.distance[e.horizontal === true ? "y" : "x"];
    w = Math.min(v, u.value[1], Math.max(u.value[0], R)), a[c.value].value.style[s.value] = m(w), e.emitImmediately === true && e.modelValue !== w && o("update:modelValue", w);
  }
  let h2 = computed(() => [[qt, b, void 0, { [e.horizontal === true ? "vertical" : "horizontal"]: true, prevent: true, stop: true, mouse: true, mouseAllDir: true }]]);
  function g(C, R) {
    C < R[0] ? o("update:modelValue", R[0]) : C > R[1] && o("update:modelValue", R[1]);
  }
  return watch(() => e.modelValue, (C) => {
    g(C, u.value);
  }), watch(() => e.limits, () => {
    nextTick(() => {
      g(e.modelValue, u.value);
    });
  }), () => {
    let C = [h("div", { ref: a.before, class: ["q-splitter__panel q-splitter__before" + (e.reverse === true ? " col" : ""), e.beforeClass], style: f.value.before }, ee(t.before)), h("div", { class: ["q-splitter__separator", e.separatorClass], style: e.separatorStyle, "aria-disabled": e.disable === true ? "true" : void 0 }, [kt("div", { class: "q-splitter__separator-area absolute-full" }, ee(t.separator), "sep", e.disable !== true, () => h2.value)]), h("div", { ref: a.after, class: ["q-splitter__panel q-splitter__after" + (e.reverse === true ? "" : " col"), e.afterClass], style: f.value.after }, ee(t.after))];
    return h("div", { class: l.value, ref: i }, je(t.default, C));
  };
} });
var hs = M({ name: "StepHeader", props: { stepper: {}, step: {}, goToPanel: Function }, setup(e, { attrs: t }) {
  let { proxy: { $q: o } } = getCurrentInstance(), r = ref(null), n = computed(() => e.stepper.modelValue === e.step.name), i = computed(() => {
    let p = e.step.disable;
    return p === true || p === "";
  }), a = computed(() => {
    let p = e.step.error;
    return p === true || p === "";
  }), l = computed(() => {
    let p = e.step.done;
    return i.value === false && (p === true || p === "");
  }), s = computed(() => {
    let p = e.step.headerNav, w = p === true || p === "" || p === void 0;
    return i.value === false && e.stepper.headerNav && w;
  }), c = computed(() => e.step.prefix && (n.value === false || e.stepper.activeIcon === "none") && (a.value === false || e.stepper.errorIcon === "none") && (l.value === false || e.stepper.doneIcon === "none")), u = computed(() => {
    let p = e.step.icon || e.stepper.inactiveIcon;
    if (n.value === true) {
      let w = e.step.activeIcon || e.stepper.activeIcon;
      return w === "none" ? p : w || o.iconSet.stepper.active;
    }
    if (a.value === true) {
      let w = e.step.errorIcon || e.stepper.errorIcon;
      return w === "none" ? p : w || o.iconSet.stepper.error;
    }
    if (i.value === false && l.value === true) {
      let w = e.step.doneIcon || e.stepper.doneIcon;
      return w === "none" ? p : w || o.iconSet.stepper.done;
    }
    return p;
  }), m = computed(() => {
    let p = a.value === true ? e.step.errorColor || e.stepper.errorColor : void 0;
    if (n.value === true) {
      let w = e.step.activeColor || e.stepper.activeColor || e.step.color;
      return w !== void 0 ? w : p;
    }
    return p !== void 0 ? p : i.value === false && l.value === true ? e.step.doneColor || e.stepper.doneColor || e.step.color || e.stepper.inactiveColor : e.step.color || e.stepper.inactiveColor;
  }), f = computed(() => "q-stepper__tab col-grow flex items-center no-wrap relative-position" + (m.value !== void 0 ? ` text-${m.value}` : "") + (a.value === true ? " q-stepper__tab--error q-stepper__tab--error-with-" + (c.value === true ? "prefix" : "icon") : "") + (n.value === true ? " q-stepper__tab--active" : "") + (l.value === true ? " q-stepper__tab--done" : "") + (s.value === true ? " q-stepper__tab--navigation q-focusable q-hoverable" : "") + (i.value === true ? " q-stepper__tab--disabled" : "")), d = computed(() => e.stepper.headerNav !== true ? false : s.value);
  function v() {
    r.value !== null && r.value.focus(), n.value === false && e.goToPanel(e.step.name);
  }
  function x(p) {
    p.keyCode === 13 && n.value === false && e.goToPanel(e.step.name);
  }
  return () => {
    let p = { class: f.value };
    s.value === true && (p.onClick = v, p.onKeyup = x, Object.assign(p, i.value === true ? { tabindex: -1, "aria-disabled": "true" } : { tabindex: t.tabindex || 0 }));
    let w = [h("div", { class: "q-focus-helper", tabindex: -1, ref: r }), h("div", { class: "q-stepper__dot row flex-center q-stepper__line relative-position" }, [h("span", { class: "row flex-center" }, [c.value === true ? e.step.prefix : h(Ce, { name: u.value })])])];
    if (e.step.title !== void 0 && e.step.title !== null) {
      let b = [h("div", { class: "q-stepper__title" }, e.step.title)];
      e.step.caption !== void 0 && e.step.caption !== null && b.push(h("div", { class: "q-stepper__caption" }, e.step.caption)), w.push(h("div", { class: "q-stepper__label q-stepper__line relative-position" }, b));
    }
    return withDirectives(h("div", p, w), [[nn, d.value]]);
  };
} });
function yh(e) {
  return h("div", { class: "q-stepper__step-content" }, [h("div", { class: "q-stepper__step-inner" }, ee(e.default))]);
}
var bh = { setup(e, { slots: t }) {
  return () => yh(t);
} };
var Sh = M({ name: "QStep", props: { ...Fi, icon: String, color: String, title: { type: String, required: true }, caption: String, prefix: [String, Number], doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String, headerNav: { type: Boolean, default: true }, done: Boolean, error: Boolean, onScroll: [Function, Array] }, setup(e, { slots: t, emit: o }) {
  let { proxy: { $q: r } } = getCurrentInstance(), n = inject(xl, We);
  if (n === We)
    return console.error("QStep needs to be a child of QStepper"), We;
  let { getCacheWithFn: i } = dn(), a = ref(null), l = computed(() => n.value.modelValue === e.name), s = computed(() => r.platform.is.ios !== true && r.platform.is.chrome === true || l.value !== true || n.value.vertical !== true ? {} : { onScroll(m) {
    let { target: f } = m;
    f.scrollTop > 0 && (f.scrollTop = 0), e.onScroll !== void 0 && o("scroll", m);
  } }), c = computed(() => typeof e.name == "string" || typeof e.name == "number" ? e.name : String(e.name));
  function u() {
    let m = n.value.vertical;
    return m === true && n.value.keepAlive === true ? h(KeepAlive, n.value.keepAliveProps.value, l.value === true ? [h(n.value.needsUniqueKeepAliveWrapper.value === true ? i(c.value, () => ({ ...bh, name: c.value })) : bh, { key: c.value }, t.default)] : void 0) : m !== true || l.value === true ? yh(t) : void 0;
  }
  return () => h("div", { ref: a, class: "q-stepper__step", role: "tabpanel", ...s.value }, n.value.vertical === true ? [h(hs, { stepper: n.value, step: e, goToPanel: n.value.goToPanel }), n.value.animated === true ? h(sr, u) : u()] : [u()]);
} });
var Vw = /(-\w)/g;
function zw(e) {
  let t = {};
  for (let o in e) {
    let r = o.replace(Vw, (n) => n[1].toUpperCase());
    t[r] = e[o];
  }
  return t;
}
var xh = M({ name: "QStepper", props: { ...pe, ...Li, flat: Boolean, bordered: Boolean, alternativeLabels: Boolean, headerNav: Boolean, contracted: Boolean, headerClass: String, inactiveColor: String, inactiveIcon: String, doneIcon: String, doneColor: String, activeIcon: String, activeColor: String, errorIcon: String, errorColor: String }, emits: Vi, setup(e, { slots: t }) {
  let o = getCurrentInstance(), r = be(e, o.proxy.$q), { updatePanelsList: n, isValidPanelName: i, updatePanelIndex: a, getPanelContent: l, getPanels: s, panelDirectives: c, goToPanel: u, keepAliveProps: m, needsUniqueKeepAliveWrapper: f } = zi();
  provide(xl, computed(() => ({ goToPanel: u, keepAliveProps: m, needsUniqueKeepAliveWrapper: f, ...e })));
  let d = computed(() => `q-stepper q-stepper--${e.vertical === true ? "vertical" : "horizontal"}` + (e.flat === true ? " q-stepper--flat" : "") + (e.bordered === true ? " q-stepper--bordered" : "") + (r.value === true ? " q-stepper--dark q-dark" : "")), v = computed(() => `q-stepper__header row items-stretch justify-between q-stepper__header--${e.alternativeLabels === true ? "alternative" : "standard"}-labels` + (e.flat === false || e.bordered === true ? " q-stepper__header--border" : "") + (e.contracted === true ? " q-stepper__header--contracted" : "") + (e.headerClass !== void 0 ? ` ${e.headerClass}` : ""));
  function x() {
    let p = ee(t.message, []);
    if (e.vertical === true) {
      i(e.modelValue) && a();
      let w = h("div", { class: "q-stepper__content" }, ee(t.default));
      return p === void 0 ? [w] : p.concat(w);
    }
    return [h("div", { class: v.value }, s().map((w) => {
      let b = zw(w.props);
      return h(hs, { key: b.name, stepper: e, step: b, goToPanel: u });
    })), p, kt("div", { class: "q-stepper__content q-panel-parent" }, l(), "cont", e.swipeable, () => c.value)];
  }
  return () => (n(t), h("div", { class: d.value }, je(t.navigation, x())));
} });
var _h = M({ name: "QStepperNavigation", setup(e, { slots: t }) {
  return () => h("div", { class: "q-stepper__nav" }, ee(t.default));
} });
var bs = M({ name: "QTh", props: { props: Object, autoWidth: Boolean }, emits: ["click"], setup(e, { slots: t, emit: o }) {
  let r = getCurrentInstance(), { proxy: { $q: n } } = r, i = (a) => {
    o("click", a);
  };
  return () => {
    if (e.props === void 0)
      return h("th", { class: e.autoWidth === true ? "q-table--col-auto-width" : "", onClick: i }, ee(t.default));
    let a, l, s = r.vnode.key;
    if (s) {
      if (a = e.props.colsMap[s], a === void 0)
        return;
    } else
      a = e.props.col;
    if (a.sortable === true) {
      let u = a.align === "right" ? "unshift" : "push";
      l = en(t.default, []), l[u](h(Ce, { class: a.__iconClass, name: n.iconSet.table.arrowUp }));
    } else
      l = ee(t.default);
    let c = { class: a.__thClass + (e.autoWidth === true ? " q-table--col-auto-width" : ""), style: a.headerStyle, onClick: (u) => {
      a.sortable === true && e.props.sort(a), i(u);
    } };
    return h("th", c, l);
  };
} });
function ys(e, t) {
  return h("div", e, [h("table", { class: "q-table" }, t)]);
}
var Ww = { list: Uu, table: Wu };
var Yw = ["list", "table", "__qtable"];
var xs = M({ name: "QVirtualScroll", props: { ...ss, type: { type: String, default: "list", validator: (e) => Yw.includes(e) }, items: { type: Array, default: () => [] }, itemsFn: Function, itemsSize: Number, scrollTarget: { default: void 0 } }, setup(e, { slots: t, attrs: o }) {
  let r, n = ref(null), i = computed(() => e.itemsSize >= 0 && e.itemsFn !== void 0 ? parseInt(e.itemsSize, 10) : Array.isArray(e.items) ? e.items.length : 0), { virtualScrollSliceRange: a, localResetVirtualScroll: l, padVirtualScroll: s, onVirtualScrollEvt: c } = cs({ virtualScrollLength: i, getVirtualScrollTarget: v, getVirtualScrollEl: d }), u = computed(() => {
    if (i.value === 0)
      return [];
    let b = (h2, g) => ({ index: a.value.from + g, item: h2 });
    return e.itemsFn === void 0 ? e.items.slice(a.value.from, a.value.to).map(b) : e.itemsFn(a.value.from, a.value.to - a.value.from).map(b);
  }), m = computed(() => "q-virtual-scroll q-virtual-scroll" + (e.virtualScrollHorizontal === true ? "--horizontal" : "--vertical") + (e.scrollTarget !== void 0 ? "" : " scroll")), f = computed(() => e.scrollTarget !== void 0 ? {} : { tabindex: 0 });
  watch(i, () => {
    l();
  }), watch(() => e.scrollTarget, () => {
    p(), x();
  });
  function d() {
    return n.value.$el || n.value;
  }
  function v() {
    return r;
  }
  function x() {
    r = At(d(), e.scrollTarget), r.addEventListener("scroll", c, Ye.passive);
  }
  function p() {
    r !== void 0 && (r.removeEventListener("scroll", c, Ye.passive), r = void 0);
  }
  function w() {
    let b = s(e.type === "list" ? "div" : "tbody", u.value.map(t.default));
    return t.before !== void 0 && (b = t.before().concat(b)), je(t.after, b);
  }
  return onBeforeMount(() => {
    l();
  }), onMounted(() => {
    x();
  }), onActivated(() => {
    x();
  }), onDeactivated(() => {
    p();
  }), onBeforeUnmount(() => {
    p();
  }), () => {
    if (t.default === void 0) {
      console.error("QVirtualScroll: default scoped slot is required for rendering");
      return;
    }
    return e.type === "__qtable" ? ys({ ref: n, class: "q-table__middle " + m.value }, w()) : h(Ww[e.type], { ...o, ref: n, class: [o.class, m.value], ...f.value }, w);
  };
} });
function kh(e, t) {
  return new Date(e) - new Date(t);
}
var Th = { sortMethod: Function, binaryStateSort: Boolean, columnSortOrder: { type: String, validator: (e) => e === "ad" || e === "da", default: "ad" } };
function Mh(e, t, o, r) {
  let n = computed(() => {
    let { sortBy: l } = t.value;
    return l && o.value.find((s) => s.name === l) || null;
  }), i = computed(() => e.sortMethod !== void 0 ? e.sortMethod : (l, s, c) => {
    let u = o.value.find((d) => d.name === s);
    if (u === void 0 || u.field === void 0)
      return l;
    let m = c === true ? -1 : 1, f = typeof u.field == "function" ? (d) => u.field(d) : (d) => d[u.field];
    return l.sort((d, v) => {
      let x = f(d), p = f(v);
      return u.rawSort !== void 0 ? u.rawSort(x, p, d, v) * m : x == null ? -1 * m : p == null ? 1 * m : u.sort !== void 0 ? u.sort(x, p, d, v) * m : Mo(x) === true && Mo(p) === true ? (x - p) * m : An(x) === true && An(p) === true ? kh(x, p) * m : typeof x == "boolean" && typeof p == "boolean" ? (x - p) * m : ([x, p] = [x, p].map((w) => (w + "").toLocaleString().toLowerCase()), x < p ? -1 * m : x === p ? 0 : m);
    });
  });
  function a(l) {
    let s = e.columnSortOrder;
    if (at(l) === true)
      l.sortOrder && (s = l.sortOrder), l = l.name;
    else {
      let m = o.value.find((f) => f.name === l);
      m !== void 0 && m.sortOrder && (s = m.sortOrder);
    }
    let { sortBy: c, descending: u } = t.value;
    c !== l ? (c = l, u = s === "da") : e.binaryStateSort === true ? u = !u : u === true ? s === "ad" ? c = null : u = false : s === "ad" ? u = true : c = null, r({ sortBy: c, descending: u, page: 1 });
  }
  return { columnToSort: n, computedSortMethod: i, sort: a };
}
var Rh = { filter: [String, Object], filterMethod: Function };
function Ph(e, t) {
  let o = computed(() => e.filterMethod !== void 0 ? e.filterMethod : (r, n, i, a) => {
    let l = n ? n.toLowerCase() : "";
    return r.filter((s) => i.some((c) => {
      let u = a(c, s) + "";
      return (u === "undefined" || u === "null" ? "" : u.toLowerCase()).indexOf(l) !== -1;
    }));
  });
  return watch(() => e.filter, () => {
    nextTick(() => {
      t({ page: 1 }, true);
    });
  }, { deep: true }), { computedFilterMethod: o };
}
function ok(e, t) {
  for (let o in t)
    if (t[o] !== e[o])
      return false;
  return true;
}
function Ah(e) {
  return e.page < 1 && (e.page = 1), e.rowsPerPage !== void 0 && e.rowsPerPage < 1 && (e.rowsPerPage = 0), e;
}
var $h = { pagination: Object, rowsPerPageOptions: { type: Array, default: () => [5, 7, 10, 15, 20, 25, 50, 0] }, "onUpdate:pagination": [Function, Array] };
function Eh(e, t) {
  let { props: o, emit: r } = e, n = ref(Object.assign({ sortBy: null, descending: false, page: 1, rowsPerPage: o.rowsPerPageOptions.length !== 0 ? o.rowsPerPageOptions[0] : 5 }, o.pagination)), i = computed(() => {
    let u = o["onUpdate:pagination"] !== void 0 ? { ...n.value, ...o.pagination } : n.value;
    return Ah(u);
  }), a = computed(() => i.value.rowsNumber !== void 0);
  function l(u) {
    s({ pagination: u, filter: o.filter });
  }
  function s(u = {}) {
    nextTick(() => {
      r("request", { pagination: u.pagination || i.value, filter: u.filter || o.filter, getCellValue: t });
    });
  }
  function c(u, m) {
    let f = Ah({ ...i.value, ...u });
    if (ok(i.value, f) === true) {
      a.value === true && m === true && l(f);
      return;
    }
    if (a.value === true) {
      l(f);
      return;
    }
    o.pagination !== void 0 && o["onUpdate:pagination"] !== void 0 ? r("update:pagination", f) : n.value = f;
  }
  return { innerPagination: n, computedPagination: i, isServerSide: a, requestServerInteraction: s, setPagination: c };
}
function Bh(e, t, o, r, n, i) {
  let { props: a, emit: l, proxy: { $q: s } } = e, c = computed(() => r.value === true ? o.value.rowsNumber || 0 : i.value), u = computed(() => {
    let { page: g, rowsPerPage: C } = o.value;
    return (g - 1) * C;
  }), m = computed(() => {
    let { page: g, rowsPerPage: C } = o.value;
    return g * C;
  }), f = computed(() => o.value.page === 1), d = computed(() => o.value.rowsPerPage === 0 ? 1 : Math.max(1, Math.ceil(c.value / o.value.rowsPerPage))), v = computed(() => m.value === 0 ? true : o.value.page >= d.value), x = computed(() => (a.rowsPerPageOptions.includes(t.value.rowsPerPage) ? a.rowsPerPageOptions : [t.value.rowsPerPage].concat(a.rowsPerPageOptions)).map((C) => ({ label: C === 0 ? s.lang.table.allRows : "" + C, value: C })));
  watch(d, (g, C) => {
    if (g === C)
      return;
    let R = o.value.page;
    g && !R ? n({ page: 1 }) : g < R && n({ page: g });
  });
  function p() {
    n({ page: 1 });
  }
  function w() {
    let { page: g } = o.value;
    g > 1 && n({ page: g - 1 });
  }
  function b() {
    let { page: g, rowsPerPage: C } = o.value;
    m.value > 0 && g * C < c.value && n({ page: g + 1 });
  }
  function h2() {
    n({ page: d.value });
  }
  return a["onUpdate:pagination"] !== void 0 && l("update:pagination", { ...o.value }), { firstRowIndex: u, lastRowIndex: m, isFirstPage: f, isLastPage: v, pagesNumber: d, computedRowsPerPageOptions: x, computedRowsNumber: c, firstPage: p, prevPage: w, nextPage: b, lastPage: h2 };
}
var Fh = { selection: { type: String, default: "none", validator: (e) => ["single", "multiple", "none"].includes(e) }, selected: { type: Array, default: () => [] } };
var Lh = ["update:selected", "selection"];
function Vh(e, t, o, r) {
  let n = computed(() => {
    let v = {};
    return e.selected.map(r.value).forEach((x) => {
      v[x] = true;
    }), v;
  }), i = computed(() => e.selection !== "none"), a = computed(() => e.selection === "single"), l = computed(() => e.selection === "multiple"), s = computed(() => o.value.length !== 0 && o.value.every((v) => n.value[r.value(v)] === true)), c = computed(() => s.value !== true && o.value.some((v) => n.value[r.value(v)] === true)), u = computed(() => e.selected.length);
  function m(v) {
    return n.value[v] === true;
  }
  function f() {
    t("update:selected", []);
  }
  function d(v, x, p, w) {
    t("selection", { rows: x, added: p, keys: v, evt: w });
    let b = a.value === true ? p === true ? x : [] : p === true ? e.selected.concat(x) : e.selected.filter((h2) => v.includes(r.value(h2)) === false);
    t("update:selected", b);
  }
  return { hasSelectionMode: i, singleSelection: a, multipleSelection: l, allRowsSelected: s, someRowsSelected: c, rowsSelectedNumber: u, isRowSelected: m, clearSelection: f, updateSelection: d };
}
function zh(e) {
  return Array.isArray(e) ? e.slice() : [];
}
var Dh = { expanded: Array };
var Oh = ["update:expanded"];
function Ih(e, t) {
  let o = ref(zh(e.expanded));
  watch(() => e.expanded, (a) => {
    o.value = zh(a);
  });
  function r(a) {
    return o.value.includes(a);
  }
  function n(a) {
    e.expanded !== void 0 ? t("update:expanded", a) : o.value = a;
  }
  function i(a, l) {
    let s = o.value.slice(), c = s.indexOf(a);
    l === true ? c === -1 && (s.push(a), n(s)) : c !== -1 && (s.splice(c, 1), n(s));
  }
  return { isRowExpanded: r, setExpanded: n, updateExpanded: i };
}
var Nh = { visibleColumns: Array };
function Hh(e, t, o) {
  let r = computed(() => {
    if (e.columns !== void 0)
      return e.columns;
    let l = e.rows[0];
    return l !== void 0 ? Object.keys(l).map((s) => ({ name: s, label: s.toUpperCase(), field: s, align: Mo(l[s]) ? "right" : "left", sortable: true })) : [];
  }), n = computed(() => {
    let { sortBy: l, descending: s } = t.value;
    return (e.visibleColumns !== void 0 ? r.value.filter((u) => u.required === true || e.visibleColumns.includes(u.name) === true) : r.value).map((u) => {
      let m = u.align || "right", f = `text-${m}`;
      return { ...u, align: m, __iconClass: `q-table__sort-icon q-table__sort-icon--${m}`, __thClass: f + (u.headerClasses !== void 0 ? " " + u.headerClasses : "") + (u.sortable === true ? " sortable" : "") + (u.name === l ? ` sorted ${s === true ? "sort-desc" : ""}` : ""), __tdStyle: u.style !== void 0 ? typeof u.style != "function" ? () => u.style : u.style : () => null, __tdClass: u.classes !== void 0 ? typeof u.classes != "function" ? () => f + " " + u.classes : (d) => f + " " + u.classes(d) : () => f };
    });
  }), i = computed(() => {
    let l = {};
    return n.value.forEach((s) => {
      l[s.name] = s;
    }), l;
  }), a = computed(() => e.tableColspan !== void 0 ? e.tableColspan : n.value.length + (o.value === true ? 1 : 0));
  return { colList: r, computedCols: n, computedColsMap: i, computedColspan: a };
}
var Cs = "q-table__bottom row items-center";
var jh = {};
vd.forEach((e) => {
  jh[e] = {};
});
var Uh = M({ name: "QTable", props: { rows: { type: Array, default: () => [] }, rowKey: { type: [String, Function], default: "id" }, columns: Array, loading: Boolean, iconFirstPage: String, iconPrevPage: String, iconNextPage: String, iconLastPage: String, title: String, hideHeader: Boolean, grid: Boolean, gridHeader: Boolean, dense: Boolean, flat: Boolean, bordered: Boolean, square: Boolean, separator: { type: String, default: "horizontal", validator: (e) => ["horizontal", "vertical", "cell", "none"].includes(e) }, wrapCells: Boolean, virtualScroll: Boolean, virtualScrollTarget: { default: void 0 }, ...jh, noDataLabel: String, noResultsLabel: String, loadingLabel: String, selectedRowsLabel: Function, rowsPerPageLabel: String, paginationLabel: Function, color: { type: String, default: "grey-8" }, titleClass: [String, Array, Object], tableStyle: [String, Array, Object], tableClass: [String, Array, Object], tableHeaderStyle: [String, Array, Object], tableHeaderClass: [String, Array, Object], cardContainerClass: [String, Array, Object], cardContainerStyle: [String, Array, Object], cardStyle: [String, Array, Object], cardClass: [String, Array, Object], hideBottom: Boolean, hideSelectedBanner: Boolean, hideNoData: Boolean, hidePagination: Boolean, onRowClick: Function, onRowDblclick: Function, onRowContextmenu: Function, ...pe, ...Di, ...Nh, ...Rh, ...$h, ...Dh, ...Fh, ...Th }, emits: ["request", "virtualScroll", ...Oi, ...Oh, ...Lh], setup(e, { slots: t, emit: o }) {
  let r = getCurrentInstance(), { proxy: { $q: n } } = r, i = be(e, n), { inFullscreen: a, toggleFullscreen: l } = Ii(), s = computed(() => typeof e.rowKey == "function" ? e.rowKey : (J) => J[e.rowKey]), c = ref(null), u = ref(null), m = computed(() => e.grid !== true && e.virtualScroll === true), f = computed(() => " q-table__card" + (i.value === true ? " q-table__card--dark q-dark" : "") + (e.square === true ? " q-table--square" : "") + (e.flat === true ? " q-table--flat" : "") + (e.bordered === true ? " q-table--bordered" : "")), d = computed(() => `q-table__container q-table--${e.separator}-separator column no-wrap` + (e.grid === true ? " q-table--grid" : f.value) + (i.value === true ? " q-table--dark" : "") + (e.dense === true ? " q-table--dense" : "") + (e.wrapCells === false ? " q-table--no-wrap" : "") + (a.value === true ? " fullscreen scroll" : "")), v = computed(() => d.value + (e.loading === true ? " q-table--loading" : ""));
  watch(() => e.tableStyle + e.tableClass + e.tableHeaderStyle + e.tableHeaderClass + d.value, () => {
    m.value === true && u.value !== null && u.value.reset();
  });
  let { innerPagination: x, computedPagination: p, isServerSide: w, requestServerInteraction: b, setPagination: h2 } = Eh(r, Z), { computedFilterMethod: g } = Ph(e, h2), { isRowExpanded: C, setExpanded: R, updateExpanded: $ } = Ih(e, o), F = computed(() => {
    let J = e.rows;
    if (w.value === true || J.length === 0)
      return J;
    let { sortBy: me, descending: ke } = p.value;
    return e.filter && (J = g.value(J, e.filter, V.value, Z)), O.value !== null && (J = Y.value(e.rows === J ? J.slice() : J, me, ke)), J;
  }), E = computed(() => F.value.length), A = computed(() => {
    let J = F.value;
    if (w.value === true)
      return J;
    let { rowsPerPage: me } = p.value;
    return me !== 0 && (ne.value === 0 && e.rows !== J ? J.length > N.value && (J = J.slice(0, N.value)) : J = J.slice(ne.value, N.value)), J;
  }), { hasSelectionMode: B, singleSelection: P, multipleSelection: S, allRowsSelected: q, someRowsSelected: D, rowsSelectedNumber: j, isRowSelected: k, clearSelection: I, updateSelection: W } = Vh(e, o, A, s), { colList: ae, computedCols: V, computedColsMap: _, computedColspan: H } = Hh(e, p, B), { columnToSort: O, computedSortMethod: Y, sort: Q } = Mh(e, p, ae, h2), { firstRowIndex: ne, lastRowIndex: N, isFirstPage: y, isLastPage: U, pagesNumber: te, computedRowsPerPageOptions: le, computedRowsNumber: ve, firstPage: ue, prevPage: Ee, nextPage: Te, lastPage: ge } = Bh(r, x, p, w, h2, E), Fe = computed(() => A.value.length === 0), tt = computed(() => {
    let J = {};
    return vd.forEach((me) => {
      J[me] = e[me];
    }), J.virtualScrollItemSize === void 0 && (J.virtualScrollItemSize = e.dense === true ? 28 : 48), J;
  });
  function He() {
    m.value === true && u.value.reset();
  }
  function ie() {
    if (e.grid === true)
      return Zo();
    let J = e.hideHeader !== true ? we : null;
    if (m.value === true) {
      let ke = t["top-row"], $e = t["bottom-row"], Ie = { default: (pt) => Me(pt.item, t.body, pt.index) };
      if (ke !== void 0) {
        let pt = h("tbody", ke({ cols: V.value }));
        Ie.before = J === null ? () => pt : () => [J()].concat(pt);
      } else
        J !== null && (Ie.before = J);
      return $e !== void 0 && (Ie.after = () => h("tbody", $e({ cols: V.value }))), h(xs, { ref: u, class: e.tableClass, style: e.tableStyle, ...tt.value, scrollTarget: e.virtualScrollTarget, items: A.value, type: "__qtable", tableColspan: H.value, onVirtualScroll: X }, Ie);
    }
    let me = [Ae()];
    return J !== null && me.unshift(J()), ys({ class: ["q-table__middle scroll", e.tableClass], style: e.tableStyle }, me);
  }
  function se(J, me) {
    if (u.value !== null) {
      u.value.scrollTo(J, me);
      return;
    }
    J = parseInt(J, 10);
    let ke = c.value.querySelector(`tbody tr:nth-of-type(${J + 1})`);
    if (ke !== null) {
      let $e = c.value.querySelector(".q-table__middle.scroll"), Ie = ke.offsetTop - e.virtualScrollStickySizeStart, pt = Ie < $e.scrollTop ? "decrease" : "increase";
      $e.scrollTop = Ie, o("virtualScroll", { index: J, from: 0, to: x.value.rowsPerPage - 1, direction: pt });
    }
  }
  function X(J) {
    o("virtualScroll", J);
  }
  function fe() {
    return [h(is, { class: "q-table__linear-progress", color: e.color, dark: i.value, indeterminate: true, trackColor: "transparent" })];
  }
  function Me(J, me, ke) {
    let $e = s.value(J), Ie = k($e);
    if (me !== void 0)
      return me(Re({ key: $e, row: J, pageIndex: ke, __trClass: Ie ? "selected" : "" }));
    let pt = t["body-cell"], T = V.value.map((G) => {
      let ce = t[`body-cell-${G.name}`], de = ce !== void 0 ? ce : pt;
      return de !== void 0 ? de(nt({ key: $e, row: J, pageIndex: ke, col: G })) : h("td", { class: G.__tdClass(J), style: G.__tdStyle(J) }, Z(G, J));
    });
    if (B.value === true) {
      let G = t["body-selection"], ce = G !== void 0 ? G(ct({ key: $e, row: J, pageIndex: ke })) : [h(mn, { modelValue: Ie, color: e.color, dark: i.value, dense: e.dense, "onUpdate:modelValue": (de, Je) => {
        W([$e], [J], de, Je);
      } })];
      T.unshift(h("td", { class: "q-table--col-auto-width" }, ce));
    }
    let z = { key: $e, class: { selected: Ie } };
    return e.onRowClick !== void 0 && (z.class["cursor-pointer"] = true, z.onClick = (G) => {
      o("RowClick", G, J, ke);
    }), e.onRowDblclick !== void 0 && (z.class["cursor-pointer"] = true, z.onDblclick = (G) => {
      o("RowDblclick", G, J, ke);
    }), e.onRowContextmenu !== void 0 && (z.class["cursor-pointer"] = true, z.onContextmenu = (G) => {
      o("RowContextmenu", G, J, ke);
    }), h("tr", z, T);
  }
  function Ae() {
    let J = t.body, me = t["top-row"], ke = t["bottom-row"], $e = A.value.map((Ie, pt) => Me(Ie, J, pt));
    return me !== void 0 && ($e = me({ cols: V.value }).concat($e)), ke !== void 0 && ($e = $e.concat(ke({ cols: V.value }))), h("tbody", $e);
  }
  function Re(J) {
    return dt(J), J.cols = J.cols.map((me) => it({ ...me }, "value", () => Z(me, J.row))), J;
  }
  function nt(J) {
    return dt(J), it(J, "value", () => Z(J.col, J.row)), J;
  }
  function ct(J) {
    return dt(J), J;
  }
  function dt(J) {
    Object.assign(J, { cols: V.value, colsMap: _.value, sort: Q, rowIndex: ne.value + J.pageIndex, color: e.color, dark: i.value, dense: e.dense }), B.value === true && it(J, "selected", () => k(J.key), (me, ke) => {
      W([J.key], [J.row], me, ke);
    }), it(J, "expand", () => C(J.key), (me) => {
      $(J.key, me);
    });
  }
  function Z(J, me) {
    let ke = typeof J.field == "function" ? J.field(me) : me[J.field];
    return J.format !== void 0 ? J.format(ke, me) : ke;
  }
  let re = computed(() => ({ pagination: p.value, pagesNumber: te.value, isFirstPage: y.value, isLastPage: U.value, firstPage: ue, prevPage: Ee, nextPage: Te, lastPage: ge, inFullscreen: a.value, toggleFullscreen: l }));
  function K() {
    let J = t.top, me = t["top-left"], ke = t["top-right"], $e = t["top-selection"], Ie = B.value === true && $e !== void 0 && j.value > 0, pt = "q-table__top relative-position row items-center";
    if (J !== void 0)
      return h("div", { class: pt }, [J(re.value)]);
    let T;
    if (Ie === true ? T = $e(re.value).slice() : (T = [], me !== void 0 ? T.push(h("div", { class: "q-table__control" }, [me(re.value)])) : e.title && T.push(h("div", { class: "q-table__control" }, [h("div", { class: ["q-table__title", e.titleClass] }, e.title)]))), ke !== void 0 && (T.push(h("div", { class: "q-table__separator col" })), T.push(h("div", { class: "q-table__control" }, [ke(re.value)]))), T.length !== 0)
      return h("div", { class: pt }, T);
  }
  let oe = computed(() => D.value === true ? null : q.value);
  function we() {
    let J = Ve();
    return e.loading === true && t.loading === void 0 && J.push(h("tr", { class: "q-table__progress" }, [h("th", { class: "relative-position", colspan: H.value }, fe())])), h("thead", J);
  }
  function Ve() {
    let J = t.header, me = t["header-cell"];
    if (J !== void 0)
      return J(ye({ header: true })).slice();
    let ke = V.value.map(($e) => {
      let Ie = t[`header-cell-${$e.name}`], pt = Ie !== void 0 ? Ie : me, T = ye({ col: $e });
      return pt !== void 0 ? pt(T) : h(bs, { key: $e.name, props: T }, () => $e.label);
    });
    if (P.value === true && e.grid !== true)
      ke.unshift(h("th", { class: "q-table--col-auto-width" }, " "));
    else if (S.value === true) {
      let $e = t["header-selection"], Ie = $e !== void 0 ? $e(ye({})) : [h(mn, { color: e.color, modelValue: oe.value, dark: i.value, dense: e.dense, "onUpdate:modelValue": Xe })];
      ke.unshift(h("th", { class: "q-table--col-auto-width" }, Ie));
    }
    return [h("tr", { class: e.tableHeaderClass, style: e.tableHeaderStyle }, ke)];
  }
  function ye(J) {
    return Object.assign(J, { cols: V.value, sort: Q, colsMap: _.value, color: e.color, dark: i.value, dense: e.dense }), S.value === true && it(J, "selected", () => oe.value, Xe), J;
  }
  function Xe(J) {
    D.value === true && (J = false), W(A.value.map(s.value), A.value, J);
  }
  let mt = computed(() => {
    let J = [e.iconFirstPage || n.iconSet.table.firstPage, e.iconPrevPage || n.iconSet.table.prevPage, e.iconNextPage || n.iconSet.table.nextPage, e.iconLastPage || n.iconSet.table.lastPage];
    return n.lang.rtl === true ? J.reverse() : J;
  });
  function ht() {
    if (e.hideBottom === true)
      return;
    if (Fe.value === true) {
      if (e.hideNoData === true)
        return;
      let ke = e.loading === true ? e.loadingLabel || n.lang.table.loading : e.filter ? e.noResultsLabel || n.lang.table.noResults : e.noDataLabel || n.lang.table.noData, $e = t["no-data"], Ie = $e !== void 0 ? [$e({ message: ke, icon: n.iconSet.table.warning, filter: e.filter })] : [h(Ce, { class: "q-table__bottom-nodata-icon", name: n.iconSet.table.warning }), ke];
      return h("div", { class: Cs + " q-table__bottom--nodata" }, Ie);
    }
    let J = t.bottom;
    if (J !== void 0)
      return h("div", { class: Cs }, [J(re.value)]);
    let me = e.hideSelectedBanner !== true && B.value === true && j.value > 0 ? [h("div", { class: "q-table__control" }, [h("div", [(e.selectedRowsLabel || n.lang.table.selectedRecords)(j.value)])])] : [];
    if (e.hidePagination !== true)
      return h("div", { class: Cs + " justify-end" }, qo(me));
    if (me.length !== 0)
      return h("div", { class: Cs }, me);
  }
  function no(J) {
    h2({ page: 1, rowsPerPage: J.value });
  }
  function qo(J) {
    let me, { rowsPerPage: ke } = p.value, $e = e.paginationLabel || n.lang.table.pagination, Ie = t.pagination, pt = e.rowsPerPageOptions.length > 1;
    if (J.push(h("div", { class: "q-table__separator col" })), pt === true && J.push(h("div", { class: "q-table__control" }, [h("span", { class: "q-table__bottom-item" }, [e.rowsPerPageLabel || n.lang.table.recordsPerPage]), h(fs, { class: "q-table__select inline q-table__bottom-item", color: e.color, modelValue: ke, options: le.value, displayValue: ke === 0 ? n.lang.table.allRows : ke, dark: i.value, borderless: true, dense: true, optionsDense: true, optionsCover: true, "onUpdate:modelValue": no })])), Ie !== void 0)
      me = Ie(re.value);
    else if (me = [h("span", ke !== 0 ? { class: "q-table__bottom-item" } : {}, [ke ? $e(ne.value + 1, Math.min(N.value, ve.value), ve.value) : $e(1, E.value, ve.value)])], ke !== 0 && te.value > 1) {
      let T = { color: e.color, round: true, dense: true, flat: true };
      e.dense === true && (T.size = "sm"), te.value > 2 && me.push(h(Be, { key: "pgFirst", ...T, icon: mt.value[0], disable: y.value, onClick: ue })), me.push(h(Be, { key: "pgPrev", ...T, icon: mt.value[1], disable: y.value, onClick: Ee }), h(Be, { key: "pgNext", ...T, icon: mt.value[2], disable: U.value, onClick: Te })), te.value > 2 && me.push(h(Be, { key: "pgLast", ...T, icon: mt.value[3], disable: U.value, onClick: ge }));
    }
    return J.push(h("div", { class: "q-table__control" }, me)), J;
  }
  function qn() {
    let J = e.gridHeader === true ? [h("table", { class: "q-table" }, [we(h)])] : e.loading === true && t.loading === void 0 ? fe(h) : void 0;
    return h("div", { class: "q-table__middle" }, J);
  }
  function Zo() {
    let J = t.item !== void 0 ? t.item : (me) => {
      let ke = me.cols.map((Ie) => h("div", { class: "q-table__grid-item-row" }, [h("div", { class: "q-table__grid-item-title" }, [Ie.label]), h("div", { class: "q-table__grid-item-value" }, [Ie.value])]));
      if (B.value === true) {
        let Ie = t["body-selection"], pt = Ie !== void 0 ? Ie(me) : [h(mn, { modelValue: me.selected, color: e.color, dark: i.value, dense: e.dense, "onUpdate:modelValue": (T, z) => {
          W([me.key], [me.row], T, z);
        } })];
        ke.unshift(h("div", { class: "q-table__grid-item-row" }, pt), h(Co, { dark: i.value }));
      }
      let $e = { class: ["q-table__grid-item-card" + f.value, e.cardClass], style: e.cardStyle };
      return (e.onRowClick !== void 0 || e.onRowDblclick !== void 0) && ($e.class[0] += " cursor-pointer", e.onRowClick !== void 0 && ($e.onClick = (Ie) => {
        o("RowClick", Ie, me.row, me.pageIndex);
      }), e.onRowDblclick !== void 0 && ($e.onDblclick = (Ie) => {
        o("RowDblclick", Ie, me.row, me.pageIndex);
      })), h("div", { class: "q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3" + (me.selected === true ? " q-table__grid-item--selected" : "") }, [h("div", $e, ke)]);
    };
    return h("div", { class: ["q-table__grid-content row", e.cardContainerClass], style: e.cardContainerStyle }, A.value.map((me, ke) => J(Re({ key: s.value(me), row: me, pageIndex: ke }))));
  }
  return Object.assign(r.proxy, { requestServerInteraction: b, setPagination: h2, firstPage: ue, prevPage: Ee, nextPage: Te, lastPage: ge, isRowSelected: k, clearSelection: I, isRowExpanded: C, setExpanded: R, sort: Q, resetVirtualScroll: He, scrollTo: se, getCellValue: Z }), hl(r.proxy, { filteredSortedRows: () => F.value, computedRows: () => A.value, computedRowsNumber: () => ve.value }), () => {
    let J = [K()], me = { ref: c, class: v.value };
    return e.grid === true ? J.push(qn()) : Object.assign(me, { class: [me.class, e.cardClass], style: e.cardStyle }), J.push(ie(), ht()), e.loading === true && t.loading !== void 0 && J.push(t.loading()), h("div", me, J);
  };
} });
var Kh = M({ name: "QTr", props: { props: Object, noHover: Boolean }, setup(e, { slots: t }) {
  let o = computed(() => "q-tr" + (e.props === void 0 || e.props.header === true ? "" : " " + e.props.__trClass) + (e.noHover === true ? " q-tr--no-hover" : ""));
  return () => h("tr", { class: o.value }, ee(t.default));
} });
var Yh = M({ name: "QTd", props: { props: Object, autoWidth: Boolean, noHover: Boolean }, setup(e, { slots: t }) {
  let o = getCurrentInstance(), r = computed(() => "q-td" + (e.autoWidth === true ? " q-table--col-auto-width" : "") + (e.noHover === true ? " q-td--no-hover" : "") + " ");
  return () => {
    if (e.props === void 0)
      return h("td", { class: r.value }, ee(t.default));
    let n = o.vnode.key, i = (e.props.colsMap !== void 0 ? e.props.colsMap[n] : null) || e.props.col;
    if (i === void 0)
      return;
    let { row: a } = e.props;
    return h("td", { class: r.value + i.__tdClass(a), style: i.__tdStyle(a) }, ee(t.default));
  };
} });
var Xh = M({ name: "QRouteTab", props: { ...Do, ...iu }, emits: ru, setup(e, { slots: t, emit: o }) {
  let r = Kn({ useDisableForRouterLinkProps: false }), { renderTab: n, $tabs: i } = au(e, t, o, { exact: computed(() => e.exact), ...r });
  return watch(() => `${e.name} | ${e.exact} | ${(r.resolvedLink.value || {}).href}`, () => {
    i.verifyRouteModel();
  }), () => n(r.linkTag.value, r.linkAttrs.value);
} });
function pk(e, t) {
  if (e.hour !== null) {
    if (e.minute === null)
      return "minute";
    if (t === true && e.second === null)
      return "second";
  }
  return "hour";
}
function bk() {
  let e = /* @__PURE__ */ new Date();
  return { hour: e.getHours(), minute: e.getMinutes(), second: e.getSeconds(), millisecond: e.getMilliseconds() };
}
var Zh = M({ name: "QTime", props: { ...pe, ...xt, ...fu, mask: { default: null }, format24h: { type: Boolean, default: null }, defaultDate: { type: String, validator: (e) => /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e) }, options: Function, hourOptions: Array, minuteOptions: Array, secondOptions: Array, withSeconds: Boolean, nowBtn: Boolean }, emits: mu, setup(e, { slots: t, emit: o }) {
  let r = getCurrentInstance(), { $q: n } = r.proxy, i = be(e, n), { tabindex: a, headerClass: l, getLocale: s, getCurrentDate: c } = vu(e, n), u = cn(e), m = Jt(u), f, d, v = ref(null), x = computed(() => Y()), p = computed(() => s()), w = computed(() => Q()), b = lr(e.modelValue, x.value, p.value, e.calendar, w.value), h2 = ref(pk(b)), g = ref(b), C = ref(b.hour === null || b.hour < 12), R = computed(() => `q-time q-time--${e.landscape === true ? "landscape" : "portrait"}` + (i.value === true ? " q-time--dark q-dark" : "") + (e.disable === true ? " disabled" : e.readonly === true ? " q-time--readonly" : "") + (e.bordered === true ? " q-time--bordered" : "") + (e.square === true ? " q-time--square no-border-radius" : "") + (e.flat === true ? " q-time--flat no-shadow" : "")), $ = computed(() => {
    let Z = g.value;
    return { hour: Z.hour === null ? "--" : F.value === true ? Ze(Z.hour) : String(C.value === true ? Z.hour === 0 ? 12 : Z.hour : Z.hour > 12 ? Z.hour - 12 : Z.hour), minute: Z.minute === null ? "--" : Ze(Z.minute), second: Z.second === null ? "--" : Ze(Z.second) };
  }), F = computed(() => e.format24h !== null ? e.format24h : n.lang.date.format24h), E = computed(() => {
    let Z = h2.value === "hour", re = Z === true ? 12 : 60, K = g.value[h2.value], we = `rotate(${Math.round(K * (360 / re)) - 180}deg) translateX(-50%)`;
    return Z === true && F.value === true && g.value.hour >= 12 && (we += " scale(.7)"), { transform: we };
  }), A = computed(() => g.value.hour !== null), B = computed(() => A.value === true && g.value.minute !== null), P = computed(() => e.hourOptions !== void 0 ? (Z) => e.hourOptions.includes(Z) : e.options !== void 0 ? (Z) => e.options(Z, null, null) : null), S = computed(() => e.minuteOptions !== void 0 ? (Z) => e.minuteOptions.includes(Z) : e.options !== void 0 ? (Z) => e.options(g.value.hour, Z, null) : null), q = computed(() => e.secondOptions !== void 0 ? (Z) => e.secondOptions.includes(Z) : e.options !== void 0 ? (Z) => e.options(g.value.hour, g.value.minute, Z) : null), D = computed(() => {
    if (P.value === null)
      return null;
    let Z = _(0, 11, P.value), re = _(12, 11, P.value);
    return { am: Z, pm: re, values: Z.values.concat(re.values) };
  }), j = computed(() => S.value !== null ? _(0, 59, S.value) : null), k = computed(() => q.value !== null ? _(0, 59, q.value) : null), I = computed(() => {
    switch (h2.value) {
      case "hour":
        return D.value;
      case "minute":
        return j.value;
      case "second":
        return k.value;
    }
  }), W = computed(() => {
    let Z, re, K = 0, oe = 1, we = I.value !== null ? I.value.values : void 0;
    h2.value === "hour" ? F.value === true ? (Z = 0, re = 23) : (Z = 0, re = 11, C.value === false && (K = 12)) : (Z = 0, re = 55, oe = 5);
    let Ve = [];
    for (let ye = Z, Xe = Z; ye <= re; ye += oe, Xe++) {
      let mt = ye + K, ht = we !== void 0 && we.includes(mt) === false, no = h2.value === "hour" && ye === 0 ? F.value === true ? "00" : "12" : ye;
      Ve.push({ val: mt, index: Xe, disable: ht, label: no });
    }
    return Ve;
  }), ae = computed(() => [[qt, y, void 0, { stop: true, prevent: true, mouse: true }]]);
  watch(() => e.modelValue, (Z) => {
    let re = lr(Z, x.value, p.value, e.calendar, w.value);
    (re.dateHash !== g.value.dateHash || re.timeHash !== g.value.timeHash) && (g.value = re, re.hour === null ? h2.value = "hour" : C.value = re.hour < 12);
  }), watch([x, p], () => {
    nextTick(() => {
      nt();
    });
  });
  function V() {
    let Z = { ...c(), ...bk() };
    nt(Z), Object.assign(g.value, Z), h2.value = "hour";
  }
  function _(Z, re, K) {
    let oe = Array.apply(null, { length: re + 1 }).map((we, Ve) => {
      let ye = Ve + Z;
      return { index: ye, val: K(ye) === true };
    }).filter((we) => we.val === true).map((we) => we.index);
    return { min: oe[0], max: oe[oe.length - 1], values: oe, threshold: re + 1 };
  }
  function H(Z, re, K) {
    let oe = Math.abs(Z - re);
    return Math.min(oe, K - oe);
  }
  function O(Z, { min: re, max: K, values: oe, threshold: we }) {
    if (Z === re)
      return re;
    if (Z < re || Z > K)
      return H(Z, re, we) <= H(Z, K, we) ? re : K;
    let Ve = oe.findIndex((mt) => Z <= mt), ye = oe[Ve - 1], Xe = oe[Ve];
    return Z - ye <= Xe - Z ? ye : Xe;
  }
  function Y() {
    return e.calendar !== "persian" && e.mask !== null ? e.mask : `HH:mm${e.withSeconds === true ? ":ss" : ""}`;
  }
  function Q() {
    if (typeof e.defaultDate != "string") {
      let Z = c(true);
      return Z.dateHash = No(Z), Z;
    }
    return lr(e.defaultDate, "YYYY/MM/DD", void 0, e.calendar);
  }
  function ne() {
    return so(r) === true || I.value !== null && (I.value.values.length === 0 || h2.value === "hour" && F.value !== true && D.value[C.value === true ? "am" : "pm"].values.length === 0);
  }
  function N() {
    let Z = v.value, { top: re, left: K, width: oe } = Z.getBoundingClientRect(), we = oe / 2;
    return { top: re + we, left: K + we, dist: we * 0.7 };
  }
  function y(Z) {
    if (ne() !== true) {
      if (Z.isFirst === true) {
        f = N(), d = te(Z.evt, f);
        return;
      }
      d = te(Z.evt, f, d), Z.isFinal === true && (f = false, d = null, U());
    }
  }
  function U() {
    h2.value === "hour" ? h2.value = "minute" : e.withSeconds && h2.value === "minute" && (h2.value = "second");
  }
  function te(Z, re, K) {
    let oe = bt(Z), we = Math.abs(oe.top - re.top), Ve = Math.sqrt(Math.pow(Math.abs(oe.top - re.top), 2) + Math.pow(Math.abs(oe.left - re.left), 2)), ye, Xe = Math.asin(we / Ve) * (180 / Math.PI);
    if (oe.top < re.top ? Xe = re.left < oe.left ? 90 - Xe : 270 + Xe : Xe = re.left < oe.left ? Xe + 90 : 270 - Xe, h2.value === "hour") {
      if (ye = Xe / 30, D.value !== null) {
        let mt = F.value !== true ? C.value === true : D.value.am.values.length !== 0 && D.value.pm.values.length !== 0 ? Ve >= re.dist : D.value.am.values.length !== 0;
        ye = O(ye + (mt === true ? 0 : 12), D.value[mt === true ? "am" : "pm"]);
      } else
        ye = Math.round(ye), F.value === true ? Ve < re.dist ? ye < 12 && (ye += 12) : ye === 12 && (ye = 0) : C.value === true && ye === 12 ? ye = 0 : C.value === false && ye !== 12 && (ye += 12);
      F.value === true && (C.value = ye < 12);
    } else
      ye = Math.round(Xe / 6) % 60, h2.value === "minute" && j.value !== null ? ye = O(ye, j.value) : h2.value === "second" && k.value !== null && (ye = O(ye, k.value));
    return K !== ye && X[h2.value](ye), ye;
  }
  let le = { hour() {
    h2.value = "hour";
  }, minute() {
    h2.value = "minute";
  }, second() {
    h2.value = "second";
  } };
  function ve(Z) {
    Z.keyCode === 13 && fe();
  }
  function ue(Z) {
    Z.keyCode === 13 && Me();
  }
  function Ee(Z) {
    ne() !== true && (n.platform.is.desktop !== true && te(Z, N()), U());
  }
  function Te(Z) {
    ne() !== true && te(Z, N());
  }
  function ge(Z) {
    if (Z.keyCode === 13)
      h2.value = "hour";
    else if ([37, 39].includes(Z.keyCode)) {
      let re = Z.keyCode === 37 ? -1 : 1;
      if (D.value !== null) {
        let K = F.value === true ? D.value.values : D.value[C.value === true ? "am" : "pm"].values;
        if (K.length === 0)
          return;
        if (g.value.hour === null)
          He(K[0]);
        else {
          let oe = (K.length + K.indexOf(g.value.hour) + re) % K.length;
          He(K[oe]);
        }
      } else {
        let K = F.value === true ? 24 : 12, oe = F.value !== true && C.value === false ? 12 : 0, we = g.value.hour === null ? -re : g.value.hour;
        He(oe + (24 + we + re) % K);
      }
    }
  }
  function Fe(Z) {
    if (Z.keyCode === 13)
      h2.value = "minute";
    else if ([37, 39].includes(Z.keyCode)) {
      let re = Z.keyCode === 37 ? -1 : 1;
      if (j.value !== null) {
        let K = j.value.values;
        if (K.length === 0)
          return;
        if (g.value.minute === null)
          ie(K[0]);
        else {
          let oe = (K.length + K.indexOf(g.value.minute) + re) % K.length;
          ie(K[oe]);
        }
      } else {
        let K = g.value.minute === null ? -re : g.value.minute;
        ie((60 + K + re) % 60);
      }
    }
  }
  function tt(Z) {
    if (Z.keyCode === 13)
      h2.value = "second";
    else if ([37, 39].includes(Z.keyCode)) {
      let re = Z.keyCode === 37 ? -1 : 1;
      if (k.value !== null) {
        let K = k.value.values;
        if (K.length === 0)
          return;
        if (g.value.seconds === null)
          se(K[0]);
        else {
          let oe = (K.length + K.indexOf(g.value.second) + re) % K.length;
          se(K[oe]);
        }
      } else {
        let K = g.value.second === null ? -re : g.value.second;
        se((60 + K + re) % 60);
      }
    }
  }
  function He(Z) {
    g.value.hour !== Z && (g.value.hour = Z, Re());
  }
  function ie(Z) {
    g.value.minute !== Z && (g.value.minute = Z, Re());
  }
  function se(Z) {
    g.value.second !== Z && (g.value.second = Z, Re());
  }
  let X = { hour: He, minute: ie, second: se };
  function fe() {
    C.value === false && (C.value = true, g.value.hour !== null && (g.value.hour -= 12, Re()));
  }
  function Me() {
    C.value === true && (C.value = false, g.value.hour !== null && (g.value.hour += 12, Re()));
  }
  function Ae(Z) {
    let re = e.modelValue;
    h2.value !== Z && re !== void 0 && re !== null && re !== "" && typeof re != "string" && (h2.value = Z);
  }
  function Re() {
    if (P.value !== null && P.value(g.value.hour) !== true) {
      g.value = lr(), Ae("hour");
      return;
    }
    if (S.value !== null && S.value(g.value.minute) !== true) {
      g.value.minute = null, g.value.second = null, Ae("minute");
      return;
    }
    if (e.withSeconds === true && q.value !== null && q.value(g.value.second) !== true) {
      g.value.second = null, Ae("second");
      return;
    }
    g.value.hour === null || g.value.minute === null || e.withSeconds === true && g.value.second === null || nt();
  }
  function nt(Z) {
    let re = Object.assign({ ...g.value }, Z), K = e.calendar === "persian" ? Ze(re.hour) + ":" + Ze(re.minute) + (e.withSeconds === true ? ":" + Ze(re.second) : "") : Ha(new Date(re.year, re.month === null ? null : re.month - 1, re.day, re.hour, re.minute, re.second, re.millisecond), x.value, p.value, re.year, re.timezoneOffset);
    re.changed = K !== e.modelValue, o("update:modelValue", K, re);
  }
  function ct() {
    let Z = [h("div", { class: "q-time__link " + (h2.value === "hour" ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onClick: le.hour, onKeyup: ge }, $.value.hour), h("div", ":"), h("div", A.value === true ? { class: "q-time__link " + (h2.value === "minute" ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onKeyup: Fe, onClick: le.minute } : { class: "q-time__link" }, $.value.minute)];
    e.withSeconds === true && Z.push(h("div", ":"), h("div", B.value === true ? { class: "q-time__link " + (h2.value === "second" ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onKeyup: tt, onClick: le.second } : { class: "q-time__link" }, $.value.second));
    let re = [h("div", { class: "q-time__header-label row items-center no-wrap", dir: "ltr" }, Z)];
    return F.value === false && re.push(h("div", { class: "q-time__header-ampm column items-between no-wrap" }, [h("div", { class: "q-time__link " + (C.value === true ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onClick: fe, onKeyup: ve }, "AM"), h("div", { class: "q-time__link " + (C.value !== true ? "q-time__link--active" : "cursor-pointer"), tabindex: a.value, onClick: Me, onKeyup: ue }, "PM")])), h("div", { class: "q-time__header flex flex-center no-wrap " + l.value }, re);
  }
  function dt() {
    let Z = g.value[h2.value];
    return h("div", { class: "q-time__content col relative-position" }, [h(Transition, { name: "q-transition--scale" }, () => h("div", { key: "clock" + h2.value, class: "q-time__container-parent absolute-full" }, [h("div", { ref: v, class: "q-time__container-child fit overflow-hidden" }, [withDirectives(h("div", { class: "q-time__clock cursor-pointer non-selectable", onClick: Ee, onMousedown: Te }, [h("div", { class: "q-time__clock-circle fit" }, [h("div", { class: "q-time__clock-pointer" + (g.value[h2.value] === null ? " hidden" : e.color !== void 0 ? ` text-${e.color}` : ""), style: E.value }), W.value.map((re) => h("div", { class: `q-time__clock-position row flex-center q-time__clock-pos-${re.index}` + (re.val === Z ? " q-time__clock-position--active " + l.value : re.disable === true ? " q-time__clock-position--disable" : "") }, [h("span", re.label)]))])]), ae.value)])])), e.nowBtn === true ? h(Be, { class: "q-time__now-button absolute", icon: n.iconSet.datetime.now, unelevated: true, size: "sm", round: true, color: e.color, textColor: e.textColor, tabindex: a.value, onClick: V }) : null]);
  }
  return r.proxy.setNow = V, () => {
    let Z = [dt()], re = ee(t.default);
    return re !== void 0 && Z.push(h("div", { class: "q-time__actions" }, re)), e.name !== void 0 && e.disable !== true && m(Z, "push"), h("div", { class: R.value, tabindex: -1 }, [ct(), h("div", { class: "q-time__main col overflow-auto" }, Z)]);
  };
} });
var Jh = M({ name: "QTimeline", props: { ...pe, color: { type: String, default: "primary" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, layout: { type: String, default: "dense", validator: (e) => ["dense", "comfortable", "loose"].includes(e) } }, setup(e, { slots: t }) {
  let o = getCurrentInstance(), r = be(e, o.proxy.$q);
  provide(Sl, e);
  let n = computed(() => `q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}` + (r.value === true ? " q-timeline--dark" : ""));
  return () => h("ul", { class: n.value }, ee(t.default));
} });
var ep = M({ name: "QTimelineEntry", props: { heading: Boolean, tag: { type: String, default: "h3" }, side: { type: String, default: "right", validator: (e) => ["left", "right"].includes(e) }, icon: String, avatar: String, color: String, title: String, subtitle: String, body: String }, setup(e, { slots: t }) {
  let o = inject(Sl, We);
  if (o === We)
    return console.error("QTimelineEntry needs to be child of QTimeline"), We;
  let r = computed(() => `q-timeline__entry q-timeline__entry--${e.side}` + (e.icon !== void 0 || e.avatar !== void 0 ? " q-timeline__entry--icon" : "")), n = computed(() => `q-timeline__dot text-${e.color || o.color}`), i = computed(() => o.layout === "comfortable" && o.side === "left");
  return () => {
    let a = en(t.default, []);
    if (e.body !== void 0 && a.unshift(e.body), e.heading === true) {
      let c = [h("div"), h("div"), h(e.tag, { class: "q-timeline__heading-title" }, a)];
      return h("div", { class: "q-timeline__heading" }, i.value === true ? c.reverse() : c);
    }
    let l;
    e.icon !== void 0 ? l = [h(Ce, { class: "row items-center justify-center", name: e.icon })] : e.avatar !== void 0 && (l = [h("img", { class: "q-timeline__dot-img", src: e.avatar })]);
    let s = [h("div", { class: "q-timeline__subtitle" }, [h("span", {}, ee(t.subtitle, [e.subtitle]))]), h("div", { class: n.value }, l), h("div", { class: "q-timeline__content" }, [h("h6", { class: "q-timeline__title" }, ee(t.title, [e.title]))].concat(a))];
    return h("li", { class: r.value }, i.value === true ? s.reverse() : s);
  };
} });
var tp = M({ name: "QToolbar", props: { inset: Boolean }, setup(e, { slots: t }) {
  let o = computed(() => "q-toolbar row no-wrap items-center" + (e.inset === true ? " q-toolbar--inset" : ""));
  return () => h("div", { class: o.value, role: "toolbar" }, ee(t.default));
} });
var op = M({ name: "QToolbarTitle", props: { shrink: Boolean }, setup(e, { slots: t }) {
  let o = computed(() => "q-toolbar__title ellipsis" + (e.shrink === true ? " col-shrink" : ""));
  return () => h("div", { class: o.value }, ee(t.default));
} });
var Ek = ["none", "strict", "leaf", "leaf-filtered"];
var rp = M({ name: "QTree", props: { ...pe, nodes: { type: Array, required: true }, nodeKey: { type: String, required: true }, labelKey: { type: String, default: "label" }, childrenKey: { type: String, default: "children" }, dense: Boolean, color: String, controlColor: String, textColor: String, selectedColor: String, icon: String, tickStrategy: { type: String, default: "none", validator: (e) => Ek.includes(e) }, ticked: Array, expanded: Array, selected: {}, noSelectionUnset: Boolean, defaultExpandAll: Boolean, accordion: Boolean, filter: String, filterMethod: Function, duration: Number, noConnectors: Boolean, noTransition: Boolean, noNodesLabel: String, noResultsLabel: String }, emits: ["update:expanded", "update:ticked", "update:selected", "lazyLoad", "afterShow", "afterHide"], setup(e, { slots: t, emit: o }) {
  let { proxy: r } = getCurrentInstance(), { $q: n } = r, i = be(e, n), a = ref({}), l = ref(e.ticked || []), s = ref(e.expanded || []), c = {};
  onBeforeUpdate(() => {
    c = {};
  });
  let u = computed(() => `q-tree q-tree--${e.dense === true ? "dense" : "standard"}` + (e.noConnectors === true ? " q-tree--no-connectors" : "") + (i.value === true ? " q-tree--dark" : "") + (e.color !== void 0 ? ` text-${e.color}` : "")), m = computed(() => e.selected !== void 0), f = computed(() => e.icon || n.iconSet.tree.icon), d = computed(() => e.controlColor || e.color), v = computed(() => e.textColor !== void 0 ? ` text-${e.textColor}` : ""), x = computed(() => {
    let _ = e.selectedColor || e.color;
    return _ ? ` text-${_}` : "";
  }), p = computed(() => e.filterMethod !== void 0 ? e.filterMethod : (_, H) => {
    let O = H.toLowerCase();
    return _[e.labelKey] && _[e.labelKey].toLowerCase().indexOf(O) !== -1;
  }), w = computed(() => {
    let _ = {}, H = (O, Y) => {
      let Q = O.tickStrategy || (Y ? Y.tickStrategy : e.tickStrategy), ne = O[e.nodeKey], N = O[e.childrenKey] && Array.isArray(O[e.childrenKey]) && O[e.childrenKey].length !== 0, y = O.disabled !== true && m.value === true && O.selectable !== false, U = O.disabled !== true && O.expandable !== false, te = Q !== "none", le = Q === "strict", ve = Q === "leaf-filtered", ue = Q === "leaf" || Q === "leaf-filtered", Ee = O.disabled !== true && O.tickable !== false;
      ue === true && Ee === true && Y && Y.tickable !== true && (Ee = false);
      let Te = O.lazy;
      Te === true && a.value[ne] !== void 0 && Array.isArray(O[e.childrenKey]) === true && (Te = a.value[ne]);
      let ge = { key: ne, parent: Y, isParent: N, lazy: Te, disabled: O.disabled, link: O.disabled !== true && (y === true || U === true && (N === true || Te === true)), children: [], matchesFilter: e.filter ? p.value(O, e.filter) : true, selected: ne === e.selected && y === true, selectable: y, expanded: N === true ? s.value.includes(ne) : false, expandable: U, noTick: O.noTick === true || le !== true && Te && Te !== "loaded", tickable: Ee, tickStrategy: Q, hasTicking: te, strictTicking: le, leafFilteredTicking: ve, leafTicking: ue, ticked: le === true ? l.value.includes(ne) : N === true ? false : l.value.includes(ne) };
      if (_[ne] = ge, N === true && (ge.children = O[e.childrenKey].map((Fe) => H(Fe, ge)), e.filter && (ge.matchesFilter !== true ? ge.matchesFilter = ge.children.some((Fe) => Fe.matchesFilter) : ge.noTick !== true && ge.disabled !== true && ge.tickable === true && ve === true && ge.children.every((Fe) => Fe.matchesFilter !== true || Fe.noTick === true || Fe.tickable !== true) === true && (ge.tickable = false)), ge.matchesFilter === true && (ge.noTick !== true && le !== true && ge.children.every((Fe) => Fe.noTick) === true && (ge.noTick = true), ue))) {
        if (ge.ticked = false, ge.indeterminate = ge.children.some((Fe) => Fe.indeterminate === true), ge.tickable = ge.tickable === true && ge.children.some((Fe) => Fe.tickable), ge.indeterminate !== true) {
          let Fe = ge.children.reduce((tt, He) => He.ticked === true ? tt + 1 : tt, 0);
          Fe === ge.children.length ? ge.ticked = true : Fe > 0 && (ge.indeterminate = true);
        }
        ge.indeterminate === true && (ge.indeterminateNextState = ge.children.every((Fe) => Fe.tickable !== true || Fe.ticked !== true));
      }
      return ge;
    };
    return e.nodes.forEach((O) => H(O, null)), _;
  });
  watch(() => e.ticked, (_) => {
    l.value = _;
  }), watch(() => e.expanded, (_) => {
    s.value = _;
  });
  function b(_) {
    let H = [].reduce, O = (Y, Q) => {
      if (Y || !Q)
        return Y;
      if (Array.isArray(Q) === true)
        return H.call(Object(Q), O, Y);
      if (Q[e.nodeKey] === _)
        return Q;
      if (Q[e.childrenKey])
        return O(null, Q[e.childrenKey]);
    };
    return O(null, e.nodes);
  }
  function h2() {
    return l.value.map((_) => b(_));
  }
  function g() {
    return s.value.map((_) => b(_));
  }
  function C(_) {
    return _ && w.value[_] ? w.value[_].expanded : false;
  }
  function R() {
    e.expanded !== void 0 ? o("update:expanded", []) : s.value = [];
  }
  function $() {
    let _ = [], H = (O) => {
      O[e.childrenKey] && O[e.childrenKey].length !== 0 && O.expandable !== false && O.disabled !== true && (_.push(O[e.nodeKey]), O[e.childrenKey].forEach(H));
    };
    e.nodes.forEach(H), e.expanded !== void 0 ? o("update:expanded", _) : s.value = _;
  }
  function F(_, H, O = b(_), Y = w.value[_]) {
    if (Y.lazy && Y.lazy !== "loaded") {
      if (Y.lazy === "loading")
        return;
      a.value[_] = "loading", Array.isArray(O[e.childrenKey]) !== true && (O[e.childrenKey] = []), o("lazyLoad", { node: O, key: _, done: (Q) => {
        a.value[_] = "loaded", O[e.childrenKey] = Array.isArray(Q) === true ? Q : [], nextTick(() => {
          let ne = w.value[_];
          ne && ne.isParent === true && E(_, true);
        });
      }, fail: () => {
        delete a.value[_], O[e.childrenKey].length === 0 && delete O[e.childrenKey];
      } });
    } else
      Y.isParent === true && Y.expandable === true && E(_, H);
  }
  function E(_, H) {
    let O = s.value, Y = e.expanded !== void 0;
    if (Y === true && (O = O.slice()), H) {
      if (e.accordion && w.value[_]) {
        let Q = [];
        w.value[_].parent ? w.value[_].parent.children.forEach((ne) => {
          ne.key !== _ && ne.expandable === true && Q.push(ne.key);
        }) : e.nodes.forEach((ne) => {
          let N = ne[e.nodeKey];
          N !== _ && Q.push(N);
        }), Q.length !== 0 && (O = O.filter((ne) => Q.includes(ne) === false));
      }
      O = O.concat([_]).filter((Q, ne, N) => N.indexOf(Q) === ne);
    } else
      O = O.filter((Q) => Q !== _);
    Y === true ? o("update:expanded", O) : s.value = O;
  }
  function A(_) {
    return _ && w.value[_] ? w.value[_].ticked : false;
  }
  function B(_, H) {
    let O = l.value, Y = e.ticked !== void 0;
    Y === true && (O = O.slice()), H ? O = O.concat(_).filter((Q, ne, N) => N.indexOf(Q) === ne) : O = O.filter((Q) => _.includes(Q) === false), Y === true && o("update:ticked", O);
  }
  function P(_, H, O) {
    let Y = { tree: r, node: _, key: O, color: e.color, dark: i.value };
    return it(Y, "expanded", () => H.expanded, (Q) => {
      Q !== H.expanded && F(O, Q);
    }), it(Y, "ticked", () => H.ticked, (Q) => {
      Q !== H.ticked && B([O], Q);
    }), Y;
  }
  function S(_) {
    return (e.filter ? _.filter((H) => w.value[H[e.nodeKey]].matchesFilter) : _).map((H) => k(H));
  }
  function q(_) {
    if (_.icon !== void 0)
      return h(Ce, { class: "q-tree__icon q-mr-sm", name: _.icon, color: _.iconColor });
    let H = _.img || _.avatar;
    if (H)
      return h("img", { class: `q-tree__${_.img ? "img" : "avatar"} q-mr-sm`, src: H });
  }
  function D() {
    o("afterShow");
  }
  function j() {
    o("afterHide");
  }
  function k(_) {
    let H = _[e.nodeKey], O = w.value[H], Y = _.header && t[`header-${_.header}`] || t["default-header"], Q = O.isParent === true ? S(_[e.childrenKey]) : [], ne = Q.length !== 0 || O.lazy && O.lazy !== "loaded", N = _.body && t[`body-${_.body}`] || t["default-body"], y = Y !== void 0 || N !== void 0 ? P(_, O, H) : null;
    return N !== void 0 && (N = h("div", { class: "q-tree__node-body relative-position" }, [h("div", { class: v.value }, [N(y)])])), h("div", { key: H, class: `q-tree__node relative-position q-tree__node--${ne === true ? "parent" : "child"}` }, [h("div", { class: "q-tree__node-header relative-position row no-wrap items-center" + (O.link === true ? " q-tree__node--link q-hoverable q-focusable" : "") + (O.selected === true ? " q-tree__node--selected" : "") + (O.disabled === true ? " q-tree__node--disabled" : ""), tabindex: O.link === true ? 0 : -1, ariaExpanded: Q.length > 0 ? O.expanded : null, role: "treeitem", onClick: (U) => {
      W(_, O, U);
    }, onKeypress(U) {
      xo(U) !== true && (U.keyCode === 13 ? W(_, O, U, true) : U.keyCode === 32 && ae(_, O, U, true));
    } }, [h("div", { class: "q-focus-helper", tabindex: -1, ref: (U) => {
      c[O.key] = U;
    } }), O.lazy === "loading" ? h(St, { class: "q-tree__spinner", color: d.value }) : ne === true ? h(Ce, { class: "q-tree__arrow" + (O.expanded === true ? " q-tree__arrow--rotate" : ""), name: f.value, onClick(U) {
      ae(_, O, U);
    } }) : null, O.hasTicking === true && O.noTick !== true ? h(mn, { class: "q-tree__tickbox", modelValue: O.indeterminate === true ? null : O.ticked, color: d.value, dark: i.value, dense: true, keepColor: true, disable: O.tickable !== true, onKeydown: Se, "onUpdate:modelValue": (U) => {
      V(O, U);
    } }) : null, h("div", { class: "q-tree__node-header-content col row no-wrap items-center" + (O.selected === true ? x.value : v.value) }, [Y ? Y(y) : [q(_), h("div", _[e.labelKey])]])]), ne === true ? e.noTransition === true ? O.expanded === true ? h("div", { class: "q-tree__node-collapsible" + v.value, key: `${H}__q` }, [N, h("div", { class: "q-tree__children" + (O.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, Q)]) : null : h(sr, { duration: e.duration, onShow: D, onHide: j }, () => withDirectives(h("div", { class: "q-tree__node-collapsible" + v.value, key: `${H}__q` }, [N, h("div", { class: "q-tree__children" + (O.disabled === true ? " q-tree__node--disabled" : ""), role: "group" }, Q)]), [[vShow, O.expanded]])) : N]);
  }
  function I(_) {
    let H = c[_];
    H && H.focus();
  }
  function W(_, H, O, Y) {
    Y !== true && H.selectable !== false && I(H.key), m.value && H.selectable ? e.noSelectionUnset === false ? o("update:selected", H.key !== e.selected ? H.key : null) : H.key !== e.selected && o("update:selected", H.key === void 0 ? null : H.key) : ae(_, H, O, Y), typeof _.handler == "function" && _.handler(_);
  }
  function ae(_, H, O, Y) {
    O !== void 0 && Se(O), Y !== true && H.selectable !== false && I(H.key), F(H.key, !H.expanded, _, H);
  }
  function V(_, H) {
    if (_.indeterminate === true && (H = _.indeterminateNextState), _.strictTicking)
      B([_.key], H);
    else if (_.leafTicking) {
      let O = [], Y = (Q) => {
        Q.isParent ? (H !== true && Q.noTick !== true && Q.tickable === true && O.push(Q.key), Q.leafTicking === true && Q.children.forEach(Y)) : Q.noTick !== true && Q.tickable === true && (Q.leafFilteredTicking !== true || Q.matchesFilter === true) && O.push(Q.key);
      };
      Y(_), B(O, H);
    }
  }
  return e.defaultExpandAll === true && $(), Object.assign(r, { getNodeByKey: b, getTickedNodes: h2, getExpandedNodes: g, isExpanded: C, collapseAll: R, expandAll: $, setExpanded: F, isTicked: A, setTicked: B }), () => {
    let _ = S(e.nodes);
    return h("div", { class: u.value, role: "tree" }, _.length === 0 ? e.filter ? e.noResultsLabel || n.lang.tree.noResults : e.noNodesLabel || n.lang.tree.noNodes : _);
  };
} });
function ip(e) {
  return (e * 100).toFixed(2) + "%";
}
var ap = { ...pe, ...$u, label: String, color: String, textColor: String, square: Boolean, flat: Boolean, bordered: Boolean, noThumbnails: Boolean, autoUpload: Boolean, hideUploadBtn: Boolean, disable: Boolean, readonly: Boolean };
var _d = [...Eu, "start", "finish", "added", "removed"];
function lp(e, t) {
  let o = getCurrentInstance(), { props: r, slots: n, emit: i, proxy: a } = o, { $q: l } = a, s = be(r, l);
  function c(y, U, te) {
    if (y.__status = U, U === "idle") {
      y.__uploaded = 0, y.__progress = 0, y.__sizeLabel = ri(y.size), y.__progressLabel = "0.00%";
      return;
    }
    if (U === "failed") {
      a.$forceUpdate();
      return;
    }
    y.__uploaded = U === "uploaded" ? y.size : te, y.__progress = U === "uploaded" ? 1 : Math.min(0.9999, y.__uploaded / y.size), y.__progressLabel = ip(y.__progress), a.$forceUpdate();
  }
  let u = computed(() => r.disable !== true && r.readonly !== true), m = ref(false), f = ref(null), d = ref(null), v = { files: ref([]), queuedFiles: ref([]), uploadedFiles: ref([]), uploadedSize: ref(0), updateFileStatus: c, isAlive: () => so(o) === false }, { pickFiles: x, addFiles: p, onDragover: w, onDragleave: b, processFiles: h2, getDndNode: g, maxFilesNumber: C, maxTotalSizeNumber: R } = Bu({ editable: u, dnd: m, getFileInput: V, addFilesToQueue: _ });
  Object.assign(v, e({ props: r, slots: n, emit: i, helpers: v, exposeApi: (y) => {
    Object.assign(v, y);
  } })), v.isBusy === void 0 && (v.isBusy = ref(false));
  let $ = ref(0), F = computed(() => $.value === 0 ? 0 : v.uploadedSize.value / $.value), E = computed(() => ip(F.value)), A = computed(() => ri($.value)), B = computed(() => u.value === true && v.isUploading.value !== true && (r.multiple === true || v.queuedFiles.value.length === 0) && (r.maxFiles === void 0 || v.files.value.length < C.value) && (r.maxTotalSize === void 0 || $.value < R.value)), P = computed(() => u.value === true && v.isBusy.value !== true && v.isUploading.value !== true && v.queuedFiles.value.length !== 0);
  provide(kl, Y);
  let S = computed(() => "q-uploader column no-wrap" + (s.value === true ? " q-uploader--dark q-dark" : "") + (r.bordered === true ? " q-uploader--bordered" : "") + (r.square === true ? " q-uploader--square no-border-radius" : "") + (r.flat === true ? " q-uploader--flat no-shadow" : "") + (r.disable === true ? " disabled q-uploader--disable" : "") + (m.value === true ? " q-uploader--dnd" : "")), q = computed(() => "q-uploader__header" + (r.color !== void 0 ? ` bg-${r.color}` : "") + (r.textColor !== void 0 ? ` text-${r.textColor}` : ""));
  watch(v.isUploading, (y, U) => {
    U === false && y === true ? i("start") : U === true && y === false && i("finish");
  });
  function D() {
    r.disable === false && (v.abort(), v.uploadedSize.value = 0, $.value = 0, ae(), v.files.value = [], v.queuedFiles.value = [], v.uploadedFiles.value = []);
  }
  function j() {
    r.disable === false && I(["uploaded"], () => {
      v.uploadedFiles.value = [];
    });
  }
  function k() {
    I(["idle", "failed"], ({ size: y }) => {
      $.value -= y, v.queuedFiles.value = [];
    });
  }
  function I(y, U) {
    if (r.disable === true)
      return;
    let te = { files: [], size: 0 }, le = v.files.value.filter((ve) => y.indexOf(ve.__status) === -1 ? true : (te.size += ve.size, te.files.push(ve), ve.__img !== void 0 && window.URL.revokeObjectURL(ve.__img.src), false));
    te.files.length !== 0 && (v.files.value = le, U(te), i("removed", te.files));
  }
  function W(y) {
    r.disable || (y.__status === "uploaded" ? v.uploadedFiles.value = v.uploadedFiles.value.filter((U) => U.__key !== y.__key) : y.__status === "uploading" ? y.__abort() : $.value -= y.size, v.files.value = v.files.value.filter((U) => U.__key !== y.__key ? true : (U.__img !== void 0 && window.URL.revokeObjectURL(U.__img.src), false)), v.queuedFiles.value = v.queuedFiles.value.filter((U) => U.__key !== y.__key), i("removed", [y]));
  }
  function ae() {
    v.files.value.forEach((y) => {
      y.__img !== void 0 && window.URL.revokeObjectURL(y.__img.src);
    });
  }
  function V() {
    return d.value || f.value.getElementsByClassName("q-uploader__input")[0];
  }
  function _(y, U) {
    let te = h2(y, U, v.files.value, true), le = V();
    le != null && (le.value = ""), te !== void 0 && (te.forEach((ve) => {
      if (v.updateFileStatus(ve, "idle"), $.value += ve.size, r.noThumbnails !== true && ve.type.toUpperCase().startsWith("IMAGE")) {
        let ue = new Image();
        ue.src = window.URL.createObjectURL(ve), ve.__img = ue;
      }
    }), v.files.value = v.files.value.concat(te), v.queuedFiles.value = v.queuedFiles.value.concat(te), i("added", te), r.autoUpload === true && v.upload());
  }
  function H() {
    P.value === true && v.upload();
  }
  function O(y, U, te) {
    if (y === true) {
      let le = { type: "a", key: U, icon: l.iconSet.uploader[U], flat: true, dense: true }, ve;
      return U === "add" ? (le.onClick = x, ve = Y) : le.onClick = te, h(Be, le, ve);
    }
  }
  function Y() {
    return h("input", { ref: d, class: "q-uploader__input overflow-hidden absolute-full", tabindex: -1, type: "file", title: "", accept: r.accept, multiple: r.multiple === true ? "multiple" : void 0, capture: r.capture, onMousedown: et, onClick: x, onChange: _ });
  }
  function Q() {
    return n.header !== void 0 ? n.header(N) : [h("div", { class: "q-uploader__header-content column" }, [h("div", { class: "flex flex-center no-wrap q-gutter-xs" }, [O(v.queuedFiles.value.length !== 0, "removeQueue", k), O(v.uploadedFiles.value.length !== 0, "removeUploaded", j), v.isUploading.value === true ? h(St, { class: "q-uploader__spinner" }) : null, h("div", { class: "col column justify-center" }, [r.label !== void 0 ? h("div", { class: "q-uploader__title" }, [r.label]) : null, h("div", { class: "q-uploader__subtitle" }, [A.value + " / " + E.value])]), O(B.value, "add"), O(r.hideUploadBtn === false && P.value === true, "upload", v.upload), O(v.isUploading.value, "clear", v.abort)])])];
  }
  function ne() {
    return n.list !== void 0 ? n.list(N) : v.files.value.map((y) => h("div", { key: y.__key, class: "q-uploader__file relative-position" + (r.noThumbnails !== true && y.__img !== void 0 ? " q-uploader__file--img" : "") + (y.__status === "failed" ? " q-uploader__file--failed" : y.__status === "uploaded" ? " q-uploader__file--uploaded" : ""), style: r.noThumbnails !== true && y.__img !== void 0 ? { backgroundImage: 'url("' + y.__img.src + '")' } : null }, [h("div", { class: "q-uploader__file-header row flex-center no-wrap" }, [y.__status === "failed" ? h(Ce, { class: "q-uploader__file-status", name: l.iconSet.type.negative, color: "negative" }) : null, h("div", { class: "q-uploader__file-header-content col" }, [h("div", { class: "q-uploader__title" }, [y.name]), h("div", { class: "q-uploader__subtitle row items-center no-wrap" }, [y.__sizeLabel + " / " + y.__progressLabel])]), y.__status === "uploading" ? h(Yi, { value: y.__progress, min: 0, max: 1, indeterminate: y.__progress === 0 }) : h(Be, { round: true, dense: true, flat: true, icon: l.iconSet.uploader[y.__status === "uploaded" ? "done" : "clear"], onClick: () => {
      W(y);
    } })])]));
  }
  onBeforeUnmount(() => {
    v.isUploading.value === true && v.abort(), v.files.value.length !== 0 && ae();
  });
  let N = {};
  for (let y in v)
    isRef(v[y]) === true ? it(N, y, () => v[y].value) : N[y] = v[y];
  return Object.assign(N, { upload: H, reset: D, removeUploadedFiles: j, removeQueuedFiles: k, removeFile: W, pickFiles: x, addFiles: p }), hl(N, { canAddFiles: () => B.value, canUpload: () => P.value, uploadSizeLabel: () => A.value, uploadProgressLabel: () => E.value }), t({ ...v, upload: H, reset: D, removeUploadedFiles: j, removeQueuedFiles: k, removeFile: W, pickFiles: x, addFiles: p, canAddFiles: B, canUpload: P, uploadSizeLabel: A, uploadProgressLabel: E }), () => {
    let y = [h("div", { class: q.value }, Q()), h("div", { class: "q-uploader__list scroll" }, ne()), g("uploader")];
    v.isBusy.value === true && y.push(h("div", { class: "q-uploader__overlay absolute-full flex flex-center" }, [h(St)]));
    let U = { ref: f, class: S.value };
    return B.value === true && Object.assign(U, { onDragover: w, onDragleave: b }), h("div", U, y);
  };
}
var Dk = () => true;
function ks(e) {
  let t = {};
  return e.forEach((o) => {
    t[o] = Dk;
  }), t;
}
var Ok = ks(_d);
var Cd = ({ name: e, props: t, emits: o, injectPlugin: r }) => M({ name: e, props: { ...ap, ...t }, emits: at(o) === true ? { ...Ok, ...o } : [..._d, ...o], setup(n, { expose: i }) {
  return lp(r, i);
} });
function Qn(e) {
  return typeof e == "function" ? e : () => e;
}
var Ik = { url: [Function, String], method: { type: [Function, String], default: "POST" }, fieldName: { type: [Function, String], default: () => (e) => e.name }, headers: [Function, Array], formFields: [Function, Array], withCredentials: [Function, Boolean], sendRaw: [Function, Boolean], batch: [Function, Boolean], factory: Function };
var Nk = ["factoryFailed", "uploaded", "failed", "uploading"];
function Hk({ props: e, emit: t, helpers: o }) {
  let r = ref([]), n = ref([]), i = ref(0), a = computed(() => ({ url: Qn(e.url), method: Qn(e.method), headers: Qn(e.headers), formFields: Qn(e.formFields), fieldName: Qn(e.fieldName), withCredentials: Qn(e.withCredentials), sendRaw: Qn(e.sendRaw), batch: Qn(e.batch) })), l = computed(() => i.value > 0), s = computed(() => n.value.length !== 0), c;
  function u() {
    r.value.forEach((v) => {
      v.abort();
    }), n.value.length !== 0 && (c = true);
  }
  function m() {
    let v = o.queuedFiles.value.slice(0);
    o.queuedFiles.value = [], a.value.batch(v) ? f(v) : v.forEach((x) => {
      f([x]);
    });
  }
  function f(v) {
    if (i.value++, typeof e.factory != "function") {
      d(v, {});
      return;
    }
    let x = e.factory(v);
    if (!x)
      t("factoryFailed", new Error("QUploader: factory() does not return properly"), v), i.value--;
    else if (typeof x.catch == "function" && typeof x.then == "function") {
      n.value.push(x);
      let p = (w) => {
        o.isAlive() === true && (n.value = n.value.filter((b) => b !== x), n.value.length === 0 && (c = false), o.queuedFiles.value = o.queuedFiles.value.concat(v), v.forEach((b) => {
          o.updateFileStatus(b, "failed");
        }), t("factoryFailed", w, v), i.value--);
      };
      x.then((w) => {
        c === true ? p(new Error("Aborted")) : o.isAlive() === true && (n.value = n.value.filter((b) => b !== x), d(v, w));
      }).catch(p);
    } else
      d(v, x || {});
  }
  function d(v, x) {
    let p = new FormData(), w = new XMLHttpRequest(), b = (P, S) => x[P] !== void 0 ? Qn(x[P])(S) : a.value[P](S), h2 = b("url", v);
    if (!h2) {
      console.error("q-uploader: invalid or no URL specified"), i.value--;
      return;
    }
    let g = b("formFields", v);
    g !== void 0 && g.forEach((P) => {
      p.append(P.name, P.value);
    });
    let C = 0, R = 0, $ = 0, F = 0, E;
    w.upload.addEventListener("progress", (P) => {
      if (E === true)
        return;
      let S = Math.min(F, P.loaded);
      o.uploadedSize.value += S - $, $ = S;
      let q = $ - R;
      for (let D = C; q > 0 && D < v.length; D++) {
        let j = v[D];
        if (q > j.size)
          q -= j.size, C++, R += j.size, o.updateFileStatus(j, "uploading", j.size);
        else {
          o.updateFileStatus(j, "uploading", q);
          return;
        }
      }
    }, false), w.onreadystatechange = () => {
      w.readyState < 4 || (w.status && w.status < 400 ? (o.uploadedFiles.value = o.uploadedFiles.value.concat(v), v.forEach((P) => {
        o.updateFileStatus(P, "uploaded");
      }), t("uploaded", { files: v, xhr: w })) : (E = true, o.uploadedSize.value -= $, o.queuedFiles.value = o.queuedFiles.value.concat(v), v.forEach((P) => {
        o.updateFileStatus(P, "failed");
      }), t("failed", { files: v, xhr: w })), i.value--, r.value = r.value.filter((P) => P !== w));
    }, w.open(b("method", v), h2), b("withCredentials", v) === true && (w.withCredentials = true);
    let A = b("headers", v);
    A !== void 0 && A.forEach((P) => {
      w.setRequestHeader(P.name, P.value);
    });
    let B = b("sendRaw", v);
    v.forEach((P) => {
      o.updateFileStatus(P, "uploading", 0), B !== true && p.append(b("fieldName", P), P, P.name), P.xhr = w, P.__abort = () => {
        w.abort();
      }, F += P.size;
    }), t("uploading", { files: v, xhr: w }), r.value.push(w), B === true ? w.send(new Blob(v)) : w.send(p);
  }
  return { isUploading: l, isBusy: s, abort: u, upload: m };
}
var up = { name: "QUploader", props: Ik, emits: Nk, injectPlugin: Hk };
var sp = Cd(up);
var cp = M({ name: "QUploaderAddTrigger", setup() {
  let e = inject(kl, We);
  return e === We && console.error("QUploaderAddTrigger needs to be child of QUploader"), e;
} });
var fp = M({ name: "QVideo", props: { ...aa, src: { type: String, required: true }, title: String, fetchpriority: { type: String, default: "auto" }, loading: { type: String, default: "eager" }, referrerpolicy: { type: String, default: "strict-origin-when-cross-origin" } }, setup(e) {
  let t = la(e), o = computed(() => "q-video" + (e.ratio !== void 0 ? " q-video--responsive" : ""));
  return () => h("div", { class: o.value, style: t.value }, [h("iframe", { src: e.src, title: e.title, fetchpriority: e.fetchpriority, loading: e.loading, referrerpolicy: e.referrerpolicy, frameborder: "0", allowfullscreen: true })]);
} });
var Td = {};
zd(Td, { ClosePopup: () => vp, Intersection: () => Qu, Morph: () => kp, Mutation: () => Mp, Ripple: () => nn, Scroll: () => $p, ScrollFire: () => Pp, TouchHold: () => Ep, TouchPan: () => qt, TouchRepeat: () => Fp, TouchSwipe: () => Ul });
function mp(e) {
  if (e === false)
    return 0;
  if (e === true || e === void 0)
    return 1;
  let t = parseInt(e, 10);
  return isNaN(t) ? 0 : t;
}
var vp = Mt({ name: "close-popup", beforeMount(e, { value: t }) {
  let o = { depth: mp(t), handler(r) {
    o.depth !== 0 && setTimeout(() => {
      let n = Hf(e);
      n !== void 0 && Qf(n, r, o.depth);
    });
  }, handlerKey(r) {
    wt(r, 13) === true && o.handler(r);
  } };
  e.__qclosepopup = o, e.addEventListener("click", o.handler), e.addEventListener("keyup", o.handlerKey);
}, updated(e, { value: t, oldValue: o }) {
  t !== o && (e.__qclosepopup.depth = mp(t));
}, beforeUnmount(e) {
  let t = e.__qclosepopup;
  e.removeEventListener("click", t.handler), e.removeEventListener("keyup", t.handlerKey), delete e.__qclosepopup;
} });
var Uk = 0;
var ml;
function gp(e, t) {
  ml === void 0 && (ml = document.createElement("div"), ml.style.cssText = "position: absolute; left: 0; top: 0", document.body.appendChild(ml));
  let o = e.getBoundingClientRect(), r = ml.getBoundingClientRect(), { marginLeft: n, marginRight: i, marginTop: a, marginBottom: l } = window.getComputedStyle(e), s = parseInt(n, 10) + parseInt(i, 10), c = parseInt(a, 10) + parseInt(l, 10);
  return { left: o.left - r.left, top: o.top - r.top, width: o.right - o.left, height: o.bottom - o.top, widthM: o.right - o.left + (t === true ? 0 : s), heightM: o.bottom - o.top + (t === true ? 0 : c), marginH: t === true ? s : 0, marginV: t === true ? c : 0 };
}
function qs(e) {
  return { width: e.scrollWidth, height: e.scrollHeight };
}
var hp = ["Top", "Right", "Bottom", "Left"];
var pp = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"];
var Kk = /-block|-inline|block-|inline-/;
var Wk = /(-block|-inline|block-|inline-).*:/;
function bp(e, t) {
  let o = window.getComputedStyle(e), r = {};
  for (let n = 0; n < t.length; n++) {
    let i = t[n];
    if (o[i] === "")
      if (i === "cssText") {
        let a = o.length, l = "";
        for (let s = 0; s < a; s++)
          Kk.test(o[s]) !== true && (l += o[s] + ": " + o[o[s]] + "; ");
        r[i] = l;
      } else if (["borderWidth", "borderStyle", "borderColor"].indexOf(i) !== -1) {
        let a = i.replace("border", ""), l = "";
        for (let s = 0; s < hp.length; s++) {
          let c = "border" + hp[s] + a;
          l += o[c] + " ";
        }
        r[i] = l;
      } else if (i === "borderRadius") {
        let a = "", l = "";
        for (let s = 0; s < pp.length; s++) {
          let c = o[pp[s]].split(" ");
          a += c[0] + " ", l += (c[1] === void 0 ? c[0] : c[1]) + " ";
        }
        r[i] = a + "/ " + l;
      } else
        r[i] = o[i];
    else
      i === "cssText" ? r[i] = o[i].split(";").filter((a) => Wk.test(a) !== true).join(";") : r[i] = o[i];
  }
  return r;
}
var Yk = ["absolute", "fixed", "relative", "sticky"];
function yp(e) {
  let t = e, o = 0;
  for (; t !== null && t !== document; ) {
    let { position: r, zIndex: n } = window.getComputedStyle(t), i = Number(n);
    i > o && (t === e || Yk.includes(r) === true) && (o = i), t = t.parentNode;
  }
  return o;
}
function Xk(e) {
  return { from: e.from, to: e.to !== void 0 ? e.to : e.from };
}
function Gk(e) {
  return typeof e == "number" ? e = { duration: e } : typeof e == "function" && (e = { onEnd: e }), { ...e, waitFor: e.waitFor === void 0 ? 0 : e.waitFor, duration: isNaN(e.duration) === true ? 300 : parseInt(e.duration, 10), easing: typeof e.easing == "string" && e.easing.length !== 0 ? e.easing : "ease-in-out", delay: isNaN(e.delay) === true ? 0 : parseInt(e.delay, 10), fill: typeof e.fill == "string" && e.fill.length !== 0 ? e.fill : "none", resize: e.resize === true, useCSS: e.useCSS === true || e.usecss === true, hideFromClone: e.hideFromClone === true || e.hidefromclone === true, keepToClone: e.keepToClone === true || e.keeptoclone === true, tween: e.tween === true, tweenFromOpacity: isNaN(e.tweenFromOpacity) === true ? 0.6 : parseFloat(e.tweenFromOpacity), tweenToOpacity: isNaN(e.tweenToOpacity) === true ? 0.5 : parseFloat(e.tweenToOpacity) };
}
function Sp(e) {
  let t = typeof e;
  return t === "function" ? e() : t === "string" ? document.querySelector(e) : e;
}
function xp(e) {
  return e && e.ownerDocument === document && e.parentNode !== null;
}
function Ts(e) {
  let t = () => false, o = false, r = true, n = Xk(e), i = Gk(e), a = Sp(n.from);
  if (xp(a) !== true)
    return t;
  typeof a.qMorphCancel == "function" && a.qMorphCancel();
  let l, s, c, u, m = a.parentNode, f = a.nextElementSibling, d = gp(a, i.resize), { width: v, height: x } = qs(m), { borderWidth: p, borderStyle: w, borderColor: b, borderRadius: h2, backgroundColor: g, transform: C, position: R, cssText: $ } = bp(a, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), F = a.classList.toString(), E = a.style.cssText, A = a.cloneNode(true), B = i.tween === true ? a.cloneNode(true) : void 0;
  B !== void 0 && (B.className = B.classList.toString().split(" ").filter((S) => /^bg-/.test(S) === false).join(" ")), i.hideFromClone === true && A.classList.add("q-morph--internal"), A.setAttribute("aria-hidden", "true"), A.style.transition = "none", A.style.animation = "none", A.style.pointerEvents = "none", m.insertBefore(A, f), a.qMorphCancel = () => {
    o = true, A.remove(), B !== void 0 && B.remove(), i.hideFromClone === true && A.classList.remove("q-morph--internal"), a.qMorphCancel = void 0;
  };
  let P = () => {
    let S = Sp(n.to);
    if (o === true || xp(S) !== true) {
      typeof a.qMorphCancel == "function" && a.qMorphCancel();
      return;
    }
    a !== S && typeof S.qMorphCancel == "function" && S.qMorphCancel(), i.keepToClone !== true && S.classList.add("q-morph--internal"), A.classList.add("q-morph--internal");
    let { width: q, height: D } = qs(m), { width: j, height: k } = qs(S.parentNode);
    i.hideFromClone !== true && A.classList.remove("q-morph--internal"), S.qMorphCancel = () => {
      o = true, A.remove(), B !== void 0 && B.remove(), i.hideFromClone === true && A.classList.remove("q-morph--internal"), i.keepToClone !== true && S.classList.remove("q-morph--internal"), a.qMorphCancel = void 0, S.qMorphCancel = void 0;
    };
    let I = () => {
      if (o === true) {
        typeof S.qMorphCancel == "function" && S.qMorphCancel();
        return;
      }
      i.hideFromClone !== true && (A.classList.add("q-morph--internal"), A.innerHTML = "", A.style.left = 0, A.style.right = "unset", A.style.top = 0, A.style.bottom = "unset", A.style.transform = "none"), i.keepToClone !== true && S.classList.remove("q-morph--internal");
      let W = S.parentNode, { width: ae, height: V } = qs(W), _ = S.cloneNode(i.keepToClone);
      _.setAttribute("aria-hidden", "true"), i.keepToClone !== true && (_.style.left = 0, _.style.right = "unset", _.style.top = 0, _.style.bottom = "unset", _.style.transform = "none", _.style.pointerEvents = "none"), _.classList.add("q-morph--internal");
      let H = S === a && m === W ? A : S.nextElementSibling;
      W.insertBefore(_, H);
      let { borderWidth: O, borderStyle: Y, borderColor: Q, borderRadius: ne, backgroundColor: N, transform: y, position: U, cssText: te } = bp(S, ["borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "transform", "position", "cssText"]), le = S.classList.toString(), ve = S.style.cssText;
      S.style.cssText = te, S.style.transform = "none", S.style.animation = "none", S.style.transition = "none", S.className = le.split(" ").filter((oe) => /^bg-/.test(oe) === false).join(" ");
      let ue = gp(S, i.resize), Ee = d.left - ue.left, Te = d.top - ue.top, ge = d.width / (ue.width > 0 ? ue.width : 10), Fe = d.height / (ue.height > 0 ? ue.height : 100), tt = v - q, He = x - D, ie = ae - j, se = V - k, X = Math.max(d.widthM, tt), fe = Math.max(d.heightM, He), Me = Math.max(ue.widthM, ie), Ae = Math.max(ue.heightM, se), Re = a === S && ["absolute", "fixed"].includes(U) === false && ["absolute", "fixed"].includes(R) === false, nt = U === "fixed", ct = W;
      for (; nt !== true && ct !== document; )
        nt = window.getComputedStyle(ct).position === "fixed", ct = ct.parentNode;
      if (i.hideFromClone !== true && (A.style.display = "block", A.style.flex = "0 0 auto", A.style.opacity = 0, A.style.minWidth = "unset", A.style.maxWidth = "unset", A.style.minHeight = "unset", A.style.maxHeight = "unset", A.classList.remove("q-morph--internal")), i.keepToClone !== true && (_.style.display = "block", _.style.flex = "0 0 auto", _.style.opacity = 0, _.style.minWidth = "unset", _.style.maxWidth = "unset", _.style.minHeight = "unset", _.style.maxHeight = "unset"), _.classList.remove("q-morph--internal"), typeof i.classes == "string" && (S.className += " " + i.classes), typeof i.style == "string")
        S.style.cssText += " " + i.style;
      else if (at(i.style) === true)
        for (let oe in i.style)
          S.style[oe] = i.style[oe];
      let dt = yp(A), Z = yp(S), re = nt === true ? document.documentElement : { scrollLeft: 0, scrollTop: 0 };
      S.style.position = nt === true ? "fixed" : "absolute", S.style.left = `${ue.left - re.scrollLeft}px`, S.style.right = "unset", S.style.top = `${ue.top - re.scrollTop}px`, S.style.margin = 0, i.resize === true && (S.style.minWidth = "unset", S.style.maxWidth = "unset", S.style.minHeight = "unset", S.style.maxHeight = "unset", S.style.overflow = "hidden", S.style.overflowX = "hidden", S.style.overflowY = "hidden"), document.body.appendChild(S), B !== void 0 && (B.style.cssText = $, B.style.transform = "none", B.style.animation = "none", B.style.transition = "none", B.style.position = S.style.position, B.style.left = `${d.left - re.scrollLeft}px`, B.style.right = "unset", B.style.top = `${d.top - re.scrollTop}px`, B.style.margin = 0, B.style.pointerEvents = "none", i.resize === true && (B.style.minWidth = "unset", B.style.maxWidth = "unset", B.style.minHeight = "unset", B.style.maxHeight = "unset", B.style.overflow = "hidden", B.style.overflowX = "hidden", B.style.overflowY = "hidden"), document.body.appendChild(B));
      let K = (oe) => {
        a === S && r !== true ? (S.style.cssText = E, S.className = F) : (S.style.cssText = ve, S.className = le), _.parentNode === W && W.insertBefore(S, _), A.remove(), _.remove(), B !== void 0 && B.remove(), t = () => false, a.qMorphCancel = void 0, S.qMorphCancel = void 0, typeof i.onEnd == "function" && i.onEnd(r === true ? "to" : "from", oe === true);
      };
      if (i.useCSS !== true && typeof S.animate == "function") {
        let oe = i.resize === true ? { transform: `translate(${Ee}px, ${Te}px)`, width: `${X}px`, height: `${fe}px` } : { transform: `translate(${Ee}px, ${Te}px) scale(${ge}, ${Fe})` }, we = i.resize === true ? { width: `${Me}px`, height: `${Ae}px` } : {}, Ve = i.resize === true ? { width: `${X}px`, height: `${fe}px` } : {}, ye = i.resize === true ? { transform: `translate(${-1 * Ee}px, ${-1 * Te}px)`, width: `${Me}px`, height: `${Ae}px` } : { transform: `translate(${-1 * Ee}px, ${-1 * Te}px) scale(${1 / ge}, ${1 / Fe})` }, Xe = B !== void 0 ? { opacity: i.tweenToOpacity } : { backgroundColor: g }, mt = B !== void 0 ? { opacity: 1 } : { backgroundColor: N };
        u = S.animate([{ margin: 0, borderWidth: p, borderStyle: w, borderColor: b, borderRadius: h2, zIndex: dt, transformOrigin: "0 0", ...oe, ...Xe }, { margin: 0, borderWidth: O, borderStyle: Y, borderColor: Q, borderRadius: ne, zIndex: Z, transformOrigin: "0 0", transform: y, ...we, ...mt }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay }), s = B === void 0 ? void 0 : B.animate([{ opacity: i.tweenFromOpacity, margin: 0, borderWidth: p, borderStyle: w, borderColor: b, borderRadius: h2, zIndex: dt, transformOrigin: "0 0", transform: C, ...Ve }, { opacity: 0, margin: 0, borderWidth: O, borderStyle: Y, borderColor: Q, borderRadius: ne, zIndex: Z, transformOrigin: "0 0", ...ye }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay }), l = i.hideFromClone === true || Re === true ? void 0 : A.animate([{ margin: `${He < 0 ? He / 2 : 0}px ${tt < 0 ? tt / 2 : 0}px`, width: `${X + d.marginH}px`, height: `${fe + d.marginV}px` }, { margin: 0, width: 0, height: 0 }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay }), c = i.keepToClone === true ? void 0 : _.animate([Re === true ? { margin: `${He < 0 ? He / 2 : 0}px ${tt < 0 ? tt / 2 : 0}px`, width: `${X + d.marginH}px`, height: `${fe + d.marginV}px` } : { margin: 0, width: 0, height: 0 }, { margin: `${se < 0 ? se / 2 : 0}px ${ie < 0 ? ie / 2 : 0}px`, width: `${Me + ue.marginH}px`, height: `${Ae + ue.marginV}px` }], { duration: i.duration, easing: i.easing, fill: i.fill, delay: i.delay });
        let ht = (no) => {
          l !== void 0 && l.cancel(), s !== void 0 && s.cancel(), c !== void 0 && c.cancel(), u.cancel(), u.removeEventListener("finish", ht), u.removeEventListener("cancel", ht), K(no), l = void 0, s = void 0, c = void 0, u = void 0;
        };
        a.qMorphCancel = () => {
          a.qMorphCancel = void 0, o = true, ht();
        }, S.qMorphCancel = () => {
          S.qMorphCancel = void 0, o = true, ht();
        }, u.addEventListener("finish", ht), u.addEventListener("cancel", ht), t = (no) => o === true || u === void 0 ? false : no === true ? (ht(true), true) : (r = r !== true, l !== void 0 && l.reverse(), s !== void 0 && s.reverse(), c !== void 0 && c.reverse(), u.reverse(), true);
      } else {
        let oe = `q-morph-anim-${++Uk}`, we = document.createElement("style"), Ve = i.resize === true ? `
            transform: translate(${Ee}px, ${Te}px);
            width: ${X}px;
            height: ${fe}px;
          ` : `transform: translate(${Ee}px, ${Te}px) scale(${ge}, ${Fe});`, ye = i.resize === true ? `
            width: ${Me}px;
            height: ${Ae}px;
          ` : "", Xe = i.resize === true ? `
            width: ${X}px;
            height: ${fe}px;
          ` : "", mt = i.resize === true ? `
            transform: translate(${-1 * Ee}px, ${-1 * Te}px);
            width: ${Me}px;
            height: ${Ae}px;
          ` : `transform: translate(${-1 * Ee}px, ${-1 * Te}px) scale(${1 / ge}, ${1 / Fe});`, ht = B !== void 0 ? `opacity: ${i.tweenToOpacity};` : `background-color: ${g};`, no = B !== void 0 ? "opacity: 1;" : `background-color: ${N};`, qo = B === void 0 ? "" : `
            @keyframes ${oe}-from-tween {
              0% {
                opacity: ${i.tweenFromOpacity};
                margin: 0;
                border-width: ${p};
                border-style: ${w};
                border-color: ${b};
                border-radius: ${h2};
                z-index: ${dt};
                transform-origin: 0 0;
                transform: ${C};
                ${Xe}
              }

              100% {
                opacity: 0;
                margin: 0;
                border-width: ${O};
                border-style: ${Y};
                border-color: ${Q};
                border-radius: ${ne};
                z-index: ${Z};
                transform-origin: 0 0;
                ${mt}
              }
            }
          `, qn = i.hideFromClone === true || Re === true ? "" : `
            @keyframes ${oe}-from {
              0% {
                margin: ${He < 0 ? He / 2 : 0}px ${tt < 0 ? tt / 2 : 0}px;
                width: ${X + d.marginH}px;
                height: ${fe + d.marginV}px;
              }

              100% {
                margin: 0;
                width: 0;
                height: 0;
              }
            }
          `, Zo = Re === true ? `
            margin: ${He < 0 ? He / 2 : 0}px ${tt < 0 ? tt / 2 : 0}px;
            width: ${X + d.marginH}px;
            height: ${fe + d.marginV}px;
          ` : `
            margin: 0;
            width: 0;
            height: 0;
          `, J = i.keepToClone === true ? "" : `
            @keyframes ${oe}-to {
              0% {
                ${Zo}
              }

              100% {
                margin: ${se < 0 ? se / 2 : 0}px ${ie < 0 ? ie / 2 : 0}px;
                width: ${Me + ue.marginH}px;
                height: ${Ae + ue.marginV}px;
              }
            }
          `;
        we.innerHTML = `
          @keyframes ${oe} {
            0% {
              margin: 0;
              border-width: ${p};
              border-style: ${w};
              border-color: ${b};
              border-radius: ${h2};
              background-color: ${g};
              z-index: ${dt};
              transform-origin: 0 0;
              ${Ve}
              ${ht}
            }

            100% {
              margin: 0;
              border-width: ${O};
              border-style: ${Y};
              border-color: ${Q};
              border-radius: ${ne};
              background-color: ${N};
              z-index: ${Z};
              transform-origin: 0 0;
              transform: ${y};
              ${ye}
              ${no}
            }
          }

          ${qn}

          ${qo}

          ${J}
        `, document.head.appendChild(we);
        let me = "normal";
        A.style.animation = `${i.duration}ms ${i.easing} ${i.delay}ms ${me} ${i.fill} ${oe}-from`, B !== void 0 && (B.style.animation = `${i.duration}ms ${i.easing} ${i.delay}ms ${me} ${i.fill} ${oe}-from-tween`), _.style.animation = `${i.duration}ms ${i.easing} ${i.delay}ms ${me} ${i.fill} ${oe}-to`, S.style.animation = `${i.duration}ms ${i.easing} ${i.delay}ms ${me} ${i.fill} ${oe}`;
        let ke = ($e) => {
          $e === Object($e) && $e.animationName !== oe || (S.removeEventListener("animationend", ke), S.removeEventListener("animationcancel", ke), K(), we.remove());
        };
        a.qMorphCancel = () => {
          a.qMorphCancel = void 0, o = true, ke();
        }, S.qMorphCancel = () => {
          S.qMorphCancel = void 0, o = true, ke();
        }, S.addEventListener("animationend", ke), S.addEventListener("animationcancel", ke), t = ($e) => o === true || !S || !A || !_ ? false : $e === true ? (ke(), true) : (r = r !== true, me = me === "normal" ? "reverse" : "normal", A.style.animationDirection = me, B.style.animationDirection = me, _.style.animationDirection = me, S.style.animationDirection = me, true);
      }
    };
    i.waitFor > 0 || i.waitFor === "transitionend" || i.waitFor === Object(i.waitFor) && typeof i.waitFor.then == "function" ? (i.waitFor > 0 ? new Promise((ae) => setTimeout(ae, i.waitFor)) : i.waitFor === "transitionend" ? new Promise((ae) => {
      let V = () => {
        _ !== null && (clearTimeout(_), _ = null), S && (S.removeEventListener("transitionend", V), S.removeEventListener("transitioncancel", V)), ae();
      }, _ = setTimeout(V, 400);
      S.addEventListener("transitionend", V), S.addEventListener("transitioncancel", V);
    }) : i.waitFor).then(I).catch(() => {
      typeof S.qMorphCancel == "function" && S.qMorphCancel();
    }) : I();
  };
  return typeof e.onToggle == "function" && e.onToggle(), requestAnimationFrame(P), (S) => t(S);
}
var Ms = {};
var Zk = ["duration", "delay", "easing", "fill", "classes", "style", "duration", "resize", "useCSS", "hideFromClone", "keepToClone", "tween", "tweenFromOpacity", "tweenToOpacity", "waitFor", "onEnd"];
var Jk = ["resize", "useCSS", "hideFromClone", "keepToClone", "tween"];
function Sa(e, t) {
  e.clsAction !== t && (e.clsAction = t, e.el.classList[t]("q-morph--invisible"));
}
function Cp(e) {
  if (e.animating === true || e.queue.length < 2)
    return;
  let [t, o] = e.queue;
  e.animating = true, t.animating = true, o.animating = true, Sa(t, "remove"), Sa(o, "remove");
  let r = Ts({ from: t.el, to: o.el, onToggle() {
    Sa(t, "add"), Sa(o, "remove");
  }, ...o.opts, onEnd(n, i) {
    o.opts.onEnd !== void 0 && o.opts.onEnd(n, i), i !== true && (t.animating = false, o.animating = false, e.animating = false, e.cancel = void 0, e.queue.shift(), Cp(e));
  } });
  e.cancel = () => {
    r(true), e.cancel = void 0;
  };
}
function wp(e, t) {
  let o = t.opts;
  Jk.forEach((r) => {
    o[r] = e[r] === true;
  });
}
function eq(e, t) {
  let o = typeof e == "string" && e.length !== 0 ? e.split(":") : [];
  t.name = o[0], t.group = o[1], Object.assign(t.opts, { duration: isNaN(o[2]) === true ? 300 : parseFloat(o[2]), waitFor: o[3] });
}
function tq(e, t) {
  e.group !== void 0 && (t.group = e.group), e.name !== void 0 && (t.name = e.name);
  let o = t.opts;
  Zk.forEach((r) => {
    e[r] !== void 0 && (o[r] = e[r]);
  });
}
function oq(e, t) {
  if (t.name === e) {
    let o = Ms[t.group];
    o === void 0 ? (Ms[t.group] = { name: t.group, model: e, queue: [t], animating: false }, Sa(t, "remove")) : o.model !== e && (o.model = e, o.queue.push(t), o.animating === false && o.queue.length === 2 && Cp(o));
    return;
  }
  t.animating === false && Sa(t, "add");
}
function _p(e, t) {
  let o;
  Object(t) === t ? (o = "" + t.model, tq(t, e), wp(t, e)) : o = "" + t, o !== e.model ? (e.model = o, oq(o, e)) : e.animating === false && e.clsAction !== void 0 && e.el.classList[e.clsAction]("q-morph--invisible");
}
var kp = Mt({ name: "morph", mounted(e, t) {
  let o = { el: e, animating: false, opts: {} };
  wp(t.modifiers, o), eq(t.arg, o), _p(o, t.value), e.__qmorph = o;
}, updated(e, t) {
  _p(e.__qmorph, t.value);
}, beforeUnmount(e) {
  let t = e.__qmorph, o = Ms[t.group];
  o !== void 0 && o.queue.indexOf(t) !== -1 && (o.queue = o.queue.filter((n) => n !== t), o.queue.length === 0 && (o.cancel !== void 0 && o.cancel(), delete Ms[t.group])), t.clsAction === "add" && e.classList.remove("q-morph--invisible"), delete e.__qmorph;
} });
var nq = { childList: true, subtree: true, attributes: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };
function qp(e, t, o) {
  t.handler = o, t.observer !== void 0 && t.observer.disconnect(), t.observer = new MutationObserver((r) => {
    typeof t.handler == "function" && (t.handler(r) === false || t.once === true) && Tp(e);
  }), t.observer.observe(e, t.opts);
}
function Tp(e) {
  let t = e.__qmutation;
  t !== void 0 && (t.observer !== void 0 && t.observer.disconnect(), delete e.__qmutation);
}
var Mp = Mt({ name: "mutation", mounted(e, { modifiers: { once: t, ...o }, value: r }) {
  let n = { once: t, opts: Object.keys(o).length === 0 ? nq : o };
  qp(e, n, r), e.__qmutation = n;
}, updated(e, { oldValue: t, value: o }) {
  let r = e.__qmutation;
  r !== void 0 && t !== o && qp(e, r, o);
}, beforeUnmount: Tp });
var { passive: Rs } = Ye;
function Rp(e, { value: t, oldValue: o }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, Rs);
    return;
  }
  e.handler = t, typeof o != "function" && (e.scrollTarget.addEventListener("scroll", e.scroll, Rs), e.scroll());
}
var Pp = Mt({ name: "scroll-fire", mounted(e, t) {
  let o = { scrollTarget: At(e), scroll: So(() => {
    let r, n;
    o.scrollTarget === window ? (n = e.getBoundingClientRect().bottom, r = window.innerHeight) : (n = Tr(e).top + on(e), r = Tr(o.scrollTarget).top + on(o.scrollTarget)), n > 0 && n < r && (o.scrollTarget.removeEventListener("scroll", o.scroll, Rs), o.handler(e));
  }, 25) };
  Rp(o, t), e.__qscrollfire = o;
}, updated(e, t) {
  t.value !== t.oldValue && Rp(e.__qscrollfire, t);
}, beforeUnmount(e) {
  let t = e.__qscrollfire;
  t.scrollTarget.removeEventListener("scroll", t.scroll, Rs), t.scroll.cancel(), delete e.__qscrollfire;
} });
function Ap(e, { value: t, oldValue: o }) {
  if (typeof t != "function") {
    e.scrollTarget.removeEventListener("scroll", e.scroll, Ye.passive);
    return;
  }
  e.handler = t, typeof o != "function" && e.scrollTarget.addEventListener("scroll", e.scroll, Ye.passive);
}
var $p = Mt({ name: "scroll", mounted(e, t) {
  let o = { scrollTarget: At(e), scroll() {
    o.handler(fo(o.scrollTarget), Zn(o.scrollTarget));
  } };
  Ap(o, t), e.__qscroll = o;
}, updated(e, t) {
  e.__qscroll !== void 0 && t.oldValue !== t.value && Ap(e.__qscroll, t);
}, beforeUnmount(e) {
  let t = e.__qscroll;
  t.scrollTarget.removeEventListener("scroll", t.scroll, Ye.passive), delete e.__qscroll;
} });
var Ep = Mt({ name: "touch-hold", beforeMount(e, t) {
  let { modifiers: o } = t;
  if (o.mouse !== true && _e.has.touch !== true)
    return;
  let r = { handler: t.value, noop: Ke, mouseStart(i) {
    typeof r.handler == "function" && Mn(i) === true && (lt(r, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), r.start(i, true));
  }, touchStart(i) {
    if (i.target !== void 0 && typeof r.handler == "function") {
      let a = i.target;
      lt(r, "temp", [[a, "touchmove", "move", "passiveCapture"], [a, "touchcancel", "end", "notPassiveCapture"], [a, "touchend", "end", "notPassiveCapture"]]), r.start(i);
    }
  }, start(i, a) {
    r.origin = bt(i);
    let l = Date.now();
    _e.is.mobile === true && (document.body.classList.add("non-selectable"), Ut(), r.styleCleanup = (s) => {
      r.styleCleanup = void 0;
      let c = () => {
        document.body.classList.remove("non-selectable");
      };
      s === true ? (Ut(), setTimeout(c, 10)) : c();
    }), r.triggered = false, r.sensitivity = a === true ? r.mouseSensitivity : r.touchSensitivity, r.timer = setTimeout(() => {
      r.timer = void 0, Ut(), r.triggered = true, r.handler({ evt: i, touch: a !== true, mouse: a === true, position: r.origin, duration: Date.now() - l });
    }, r.duration);
  }, move(i) {
    let { top: a, left: l } = bt(i);
    r.timer !== void 0 && (Math.abs(l - r.origin.left) >= r.sensitivity || Math.abs(a - r.origin.top) >= r.sensitivity) && (clearTimeout(r.timer), r.timer = void 0);
  }, end(i) {
    Ct(r, "temp"), r.styleCleanup !== void 0 && r.styleCleanup(r.triggered), r.triggered === true ? i !== void 0 && Se(i) : r.timer !== void 0 && (clearTimeout(r.timer), r.timer = void 0);
  } }, n = [600, 5, 7];
  if (typeof t.arg == "string" && t.arg.length !== 0 && t.arg.split(":").forEach((i, a) => {
    let l = parseInt(i, 10);
    l && (n[a] = l);
  }), [r.duration, r.touchSensitivity, r.mouseSensitivity] = n, e.__qtouchhold = r, o.mouse === true) {
    let i = o.mouseCapture === true || o.mousecapture === true ? "Capture" : "";
    lt(r, "main", [[e, "mousedown", "mouseStart", `passive${i}`]]);
  }
  _e.has.touch === true && lt(r, "main", [[e, "touchstart", "touchStart", `passive${o.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "notPassiveCapture"]]);
}, updated(e, t) {
  let o = e.__qtouchhold;
  o !== void 0 && t.oldValue !== t.value && (typeof t.value != "function" && o.end(), o.handler = t.value);
}, beforeUnmount(e) {
  let t = e.__qtouchhold;
  t !== void 0 && (Ct(t, "main"), Ct(t, "temp"), t.timer !== void 0 && clearTimeout(t.timer), t.styleCleanup !== void 0 && t.styleCleanup(), delete e.__qtouchhold);
} });
var Bp = { esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46] };
var rq = new RegExp(`^([\\d+]+|${Object.keys(Bp).join("|")})$`, "i");
function iq(e, t) {
  let { top: o, left: r } = bt(e);
  return Math.abs(r - t.left) >= 7 || Math.abs(o - t.top) >= 7;
}
var Fp = Mt({ name: "touch-repeat", beforeMount(e, { modifiers: t, value: o, arg: r }) {
  let n = Object.keys(t).reduce((s, c) => {
    if (rq.test(c) === true) {
      let u = isNaN(parseInt(c, 10)) ? Bp[c.toLowerCase()] : parseInt(c, 10);
      u >= 0 && s.push(u);
    }
    return s;
  }, []);
  if (t.mouse !== true && _e.has.touch !== true && n.length === 0)
    return;
  let i = typeof r == "string" && r.length !== 0 ? r.split(":").map((s) => parseInt(s, 10)) : [0, 600, 300], a = i.length - 1, l = { keyboard: n, handler: o, noop: Ke, mouseStart(s) {
    l.event === void 0 && typeof l.handler == "function" && Mn(s) === true && (lt(l, "temp", [[document, "mousemove", "move", "passiveCapture"], [document, "click", "end", "notPassiveCapture"]]), l.start(s, true));
  }, keyboardStart(s) {
    if (typeof l.handler == "function" && wt(s, n) === true) {
      if ((i[0] === 0 || l.event !== void 0) && (Se(s), e.focus(), l.event !== void 0))
        return;
      lt(l, "temp", [[document, "keyup", "end", "notPassiveCapture"], [document, "click", "end", "notPassiveCapture"]]), l.start(s, false, true);
    }
  }, touchStart(s) {
    if (s.target !== void 0 && typeof l.handler == "function") {
      let c = s.target;
      lt(l, "temp", [[c, "touchmove", "move", "passiveCapture"], [c, "touchcancel", "end", "notPassiveCapture"], [c, "touchend", "end", "notPassiveCapture"]]), l.start(s);
    }
  }, start(s, c, u) {
    u !== true && (l.origin = bt(s));
    function m(d) {
      l.styleCleanup = void 0, document.documentElement.style.cursor = "";
      let v = () => {
        document.body.classList.remove("non-selectable");
      };
      d === true ? (Ut(), setTimeout(v, 10)) : v();
    }
    _e.is.mobile === true && (document.body.classList.add("non-selectable"), Ut(), l.styleCleanup = m), l.event = { touch: c !== true && u !== true, mouse: c === true, keyboard: u === true, startTime: Date.now(), repeatCount: 0 };
    let f = () => {
      if (l.timer = void 0, l.event === void 0)
        return;
      l.event.repeatCount === 0 && (l.event.evt = s, u === true ? l.event.keyCode = s.keyCode : l.event.position = bt(s), _e.is.mobile !== true && (document.documentElement.style.cursor = "pointer", document.body.classList.add("non-selectable"), Ut(), l.styleCleanup = m)), l.event.duration = Date.now() - l.event.startTime, l.event.repeatCount += 1, l.handler(l.event);
      let d = a < l.event.repeatCount ? a : l.event.repeatCount;
      l.timer = setTimeout(f, i[d]);
    };
    i[0] === 0 ? f() : l.timer = setTimeout(f, i[0]);
  }, move(s) {
    l.event !== void 0 && l.timer !== void 0 && iq(s, l.origin) === true && (clearTimeout(l.timer), l.timer = void 0);
  }, end(s) {
    l.event !== void 0 && (l.styleCleanup !== void 0 && l.styleCleanup(true), s !== void 0 && l.event.repeatCount > 0 && Se(s), Ct(l, "temp"), l.timer !== void 0 && (clearTimeout(l.timer), l.timer = void 0), l.event = void 0);
  } };
  if (e.__qtouchrepeat = l, t.mouse === true) {
    let s = t.mouseCapture === true || t.mousecapture === true ? "Capture" : "";
    lt(l, "main", [[e, "mousedown", "mouseStart", `passive${s}`]]);
  }
  if (_e.has.touch === true && lt(l, "main", [[e, "touchstart", "touchStart", `passive${t.capture === true ? "Capture" : ""}`], [e, "touchend", "noop", "passiveCapture"]]), n.length !== 0) {
    let s = t.keyCapture === true || t.keycapture === true ? "Capture" : "";
    lt(l, "main", [[e, "keydown", "keyboardStart", `notPassive${s}`]]);
  }
}, updated(e, { oldValue: t, value: o }) {
  let r = e.__qtouchrepeat;
  r !== void 0 && t !== o && (typeof o != "function" && r.end(), r.handler = o);
}, beforeUnmount(e) {
  let t = e.__qtouchrepeat;
  t !== void 0 && (t.timer !== void 0 && clearTimeout(t.timer), Ct(t, "main"), Ct(t, "temp"), t.styleCleanup !== void 0 && t.styleCleanup(), delete e.__qtouchrepeat);
} });
function Ps(e, t = document.body) {
  if (typeof e != "string")
    throw new TypeError("Expected a string as propName");
  if (!(t instanceof Element))
    throw new TypeError("Expected a DOM element");
  return getComputedStyle(t).getPropertyValue(`--q-${e}`).trim() || null;
}
var As;
function aq() {
  return _e.is.winphone ? "msapplication-navbutton-color" : _e.is.safari ? "apple-mobile-web-app-status-bar-style" : "theme-color";
}
function lq(e) {
  let t = document.getElementsByTagName("META");
  for (let o in t)
    if (t[o].name === e)
      return t[o];
}
function uq(e) {
  As === void 0 && (As = aq());
  let t = lq(As), o = t === void 0;
  o && (t = document.createElement("meta"), t.setAttribute("name", As)), t.setAttribute("content", e), o && document.head.appendChild(t);
}
var sq = { set: _e.is.mobile === true && (_e.is.nativeMobile === true || _e.is.winphone === true || _e.is.safari === true || _e.is.webkit === true || _e.is.vivaldi === true) ? (e) => {
  let t = e || Ps("primary");
  _e.is.nativeMobile === true && window.StatusBar ? window.StatusBar.backgroundColorByHexString(t) : uq(t);
} : Ke, install({ $q: e }) {
  e.addressbarColor = this, e.config.addressbarColor && this.set(e.config.addressbarColor);
} };
var vl = {};
function cq(e) {
  Object.assign(Yt, { request: e, exit: e, toggle: e });
}
function Vp() {
  return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement || null;
}
function zp() {
  let e = Yt.activeEl = Yt.isActive === false ? null : Vp();
  Nf(e === null || e === document.documentElement ? document.body : e);
}
function dq() {
  Yt.isActive = Yt.isActive === false, zp();
}
function Lp(e, t) {
  try {
    let o = e[t]();
    return o === void 0 ? Promise.resolve() : o;
  } catch (o) {
    return Promise.reject(o);
  }
}
var Yt = Xt({ isActive: false, activeEl: null }, { isCapable: false, install({ $q: e }) {
  e.fullscreen = this;
} });
vl.request = ["requestFullscreen", "msRequestFullscreen", "mozRequestFullScreen", "webkitRequestFullscreen"].find((e) => document.documentElement[e] !== void 0), Yt.isCapable = vl.request !== void 0, Yt.isCapable === false ? cq(() => Promise.reject("Not capable")) : (Object.assign(Yt, { request(e) {
  let t = e || document.documentElement, { activeEl: o } = Yt;
  return t === o ? Promise.resolve() : (o !== null && t.contains(o) === true ? Yt.exit() : Promise.resolve()).finally(() => Lp(t, vl.request));
}, exit() {
  return Yt.isActive === true ? Lp(document, vl.exit) : Promise.resolve();
}, toggle(e) {
  return Yt.isActive === true ? Yt.exit() : Yt.request(e);
} }), vl.exit = ["exitFullscreen", "msExitFullscreen", "mozCancelFullScreen", "webkitExitFullscreen"].find((e) => document[e]), Yt.isActive = !!Vp(), Yt.isActive === true && zp(), ["onfullscreenchange", "onmsfullscreenchange", "onwebkitfullscreenchange"].forEach((e) => {
  document[e] = dq;
}));
var fq = Yt;
var Dp = Xt({ appVisible: true }, { install({ $q: e }) {
  it(e, "appVisible", () => this.appVisible);
} });
{
  let e, t;
  if (typeof document.hidden < "u" ? (e = "hidden", t = "visibilitychange") : typeof document.msHidden < "u" ? (e = "msHidden", t = "msvisibilitychange") : typeof document.webkitHidden < "u" && (e = "webkitHidden", t = "webkitvisibilitychange"), t && typeof document[e] < "u") {
    let o = () => {
      Dp.appVisible = !document[e];
    };
    document.addEventListener(t, o, false);
  }
}
var mq = Dp;
var Op = M({ name: "BottomSheetPlugin", props: { ...pe, title: String, message: String, actions: Array, grid: Boolean, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  let { proxy: o } = getCurrentInstance(), r = be(e, o.$q), n = ref(null);
  function i() {
    n.value.show();
  }
  function a() {
    n.value.hide();
  }
  function l(d) {
    t("ok", d), a();
  }
  function s() {
    t("hide");
  }
  function c() {
    return e.actions.map((d) => {
      let v = d.avatar || d.img;
      return d.label === void 0 ? h(Co, { class: "col-all", dark: r.value }) : h("div", { class: ["q-bottom-sheet__item q-hoverable q-focusable cursor-pointer relative-position", d.class], style: d.style, tabindex: 0, role: "listitem", onClick() {
        l(d);
      }, onKeyup(x) {
        x.keyCode === 13 && l(d);
      } }, [h("div", { class: "q-focus-helper" }), d.icon ? h(Ce, { name: d.icon, color: d.color }) : v ? h("img", { class: d.avatar ? "q-bottom-sheet__avatar" : "", src: v }) : h("div", { class: "q-bottom-sheet__empty-icon" }), h("div", d.label)]);
    });
  }
  function u() {
    return e.actions.map((d) => {
      let v = d.avatar || d.img;
      return d.label === void 0 ? h(Co, { spaced: true, dark: r.value }) : h(pn, { class: ["q-bottom-sheet__item", d.classes], style: d.style, tabindex: 0, clickable: true, dark: r.value, onClick() {
        l(d);
      } }, () => [h(ho, { avatar: true }, () => d.icon ? h(Ce, { name: d.icon, color: d.color }) : v ? h("img", { class: d.avatar ? "q-bottom-sheet__avatar" : "", src: v }) : null), h(ho, () => d.label)]);
    });
  }
  function m() {
    let d = [];
    return e.title && d.push(h(Io, { class: "q-dialog__title" }, () => e.title)), e.message && d.push(h(Io, { class: "q-dialog__message" }, () => e.message)), d.push(e.grid === true ? h("div", { class: "row items-stretch justify-start", role: "list" }, c()) : h("div", { role: "list" }, u())), d;
  }
  function f() {
    return [h($i, { class: [`q-bottom-sheet q-bottom-sheet--${e.grid === true ? "grid" : "list"}` + (r.value === true ? " q-bottom-sheet--dark q-dark" : ""), e.cardClass], style: e.cardStyle }, m)];
  }
  return Object.assign(o, { show: i, hide: a }), () => h(hn, { ref: n, position: "bottom", onHide: s }, f);
} });
function Ip(e, t) {
  for (let o in t)
    o !== "spinner" && Object(t[o]) === t[o] ? (e[o] = Object(e[o]) !== e[o] ? {} : { ...e[o] }, Ip(e[o], t[o])) : e[o] = t[o];
}
function $s(e, t, o) {
  return (r) => {
    let n, i, a = t === true && r.component !== void 0;
    if (a === true) {
      let { component: b, componentProps: h2 } = r;
      n = typeof b == "string" ? o.component(b) : b, i = h2 || {};
    } else {
      let { class: b, style: h2, ...g } = r;
      n = e, i = g, b !== void 0 && (g.cardClass = b), h2 !== void 0 && (g.cardStyle = h2);
    }
    let l, s = false, c = ref(null), u = rn(false, "dialog"), m = (b) => {
      if (c.value !== null && c.value[b] !== void 0) {
        c.value[b]();
        return;
      }
      let h2 = l.$.subTree;
      if (h2 && h2.component) {
        if (h2.component.proxy && h2.component.proxy[b]) {
          h2.component.proxy[b]();
          return;
        }
        if (h2.component.subTree && h2.component.subTree.component && h2.component.subTree.component.proxy && h2.component.subTree.component.proxy[b]) {
          h2.component.subTree.component.proxy[b]();
          return;
        }
      }
      console.error("[Quasar] Incorrectly defined Dialog component");
    }, f = [], d = [], v = { onOk(b) {
      return f.push(b), v;
    }, onCancel(b) {
      return d.push(b), v;
    }, onDismiss(b) {
      return f.push(b), d.push(b), v;
    }, hide() {
      return m("hide"), v;
    }, update(b) {
      if (l !== null) {
        if (a === true)
          Object.assign(i, b);
        else {
          let { class: h2, style: g, ...C } = b;
          h2 !== void 0 && (C.cardClass = h2), g !== void 0 && (C.cardStyle = g), Ip(i, C);
        }
        l.$forceUpdate();
      }
      return v;
    } }, x = (b) => {
      s = true, f.forEach((h2) => {
        h2(b);
      });
    }, p = () => {
      w.unmount(u), yi(u), w = null, l = null, s !== true && d.forEach((b) => {
        b();
      });
    }, w = Un({ name: "QGlobalDialog", setup: () => () => h(n, { ...i, ref: c, onOk: x, onHide: p, onVnodeMounted(...b) {
      typeof i.onVnodeMounted == "function" && i.onVnodeMounted(...b), nextTick(() => m("show"));
    } }) }, o);
    return l = w.mount(u), v;
  };
}
var yq = { install({ $q: e, parentApp: t }) {
  e.bottomSheet = $s(Op, false, t), this.__installed !== true && (this.create = e.bottomSheet);
} };
function Np(e) {
  return encodeURIComponent(e);
}
function Hp(e) {
  return decodeURIComponent(e);
}
function Sq(e) {
  return Np(e === Object(e) ? JSON.stringify(e) : "" + e);
}
function xq(e) {
  if (e === "")
    return e;
  e.indexOf('"') === 0 && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")), e = Hp(e.replace(/\+/g, " "));
  try {
    let t = JSON.parse(e);
    (t === Object(t) || Array.isArray(t) === true) && (e = t);
  } catch {
  }
  return e;
}
function Qp(e) {
  let t = /* @__PURE__ */ new Date();
  return t.setMilliseconds(t.getMilliseconds() + e), t.toUTCString();
}
function _q(e) {
  let t = 0, o = e.match(/(\d+)d/), r = e.match(/(\d+)h/), n = e.match(/(\d+)m/), i = e.match(/(\d+)s/);
  return o && (t += o[1] * 864e5), r && (t += r[1] * 36e5), n && (t += n[1] * 6e4), i && (t += i[1] * 1e3), t === 0 ? e : Qp(t);
}
function jp(e, t, o = {}, r) {
  let n, i;
  o.expires !== void 0 && (Object.prototype.toString.call(o.expires) === "[object Date]" ? n = o.expires.toUTCString() : typeof o.expires == "string" ? n = _q(o.expires) : (i = parseFloat(o.expires), n = isNaN(i) === false ? Qp(i * 864e5) : o.expires));
  let a = `${Np(e)}=${Sq(t)}`, l = [a, n !== void 0 ? "; Expires=" + n : "", o.path ? "; Path=" + o.path : "", o.domain ? "; Domain=" + o.domain : "", o.sameSite ? "; SameSite=" + o.sameSite : "", o.httpOnly ? "; HttpOnly" : "", o.secure ? "; Secure" : "", o.other ? "; " + o.other : ""].join("");
  if (r) {
    r.req.qCookies ? r.req.qCookies.push(l) : r.req.qCookies = [l], r.res.setHeader("Set-Cookie", r.req.qCookies);
    let s = r.req.headers.cookie || "";
    if (n !== void 0 && i < 0) {
      let c = Es(e, r);
      c !== void 0 && (s = s.replace(`${e}=${c}; `, "").replace(`; ${e}=${c}`, "").replace(`${e}=${c}`, ""));
    } else
      s = s ? `${a}; ${s}` : l;
    r.req.headers.cookie = s;
  } else
    document.cookie = l;
}
function Es(e, t) {
  let o = t ? t.req.headers : document, r = o.cookie ? o.cookie.split("; ") : [], n = r.length, i = e ? null : {}, a = 0, l, s, c;
  for (; a < n; a++)
    if (l = r[a].split("="), s = Hp(l.shift()), c = l.join("="), !e)
      i[s] = c;
    else if (e === s) {
      i = xq(c);
      break;
    }
  return i;
}
function Cq(e, t, o) {
  jp(e, "", { expires: -1, ...t }, o);
}
function wq(e, t) {
  return Es(e, t) !== null;
}
function kq(e) {
  return { get: (t) => Es(t, e), set: (t, o, r) => jp(t, o, r, e), has: (t) => wq(t, e), remove: (t, o) => Cq(t, o, e), getAll: () => Es(null, e) };
}
var Up = { install({ $q: e, ssrContext: t }) {
  e.cookies = this;
} };
Object.assign(Up, kq());
var qq = Up;
var Yp = M({ name: "DialogPlugin", props: { ...pe, title: String, message: String, prompt: Object, options: Object, progress: [Boolean, Object], html: Boolean, ok: { type: [String, Object, Boolean], default: true }, cancel: [String, Object, Boolean], focus: { type: String, default: "ok", validator: (e) => ["ok", "cancel", "none"].includes(e) }, stackButtons: Boolean, color: String, cardClass: [String, Array, Object], cardStyle: [String, Array, Object] }, emits: ["ok", "hide"], setup(e, { emit: t }) {
  let { proxy: o } = getCurrentInstance(), { $q: r } = o, n = be(e, r), i = ref(null), a = ref(e.prompt !== void 0 ? e.prompt.model : e.options !== void 0 ? e.options.model : void 0), l = computed(() => "q-dialog-plugin" + (n.value === true ? " q-dialog-plugin--dark q-dark" : "") + (e.progress !== false ? " q-dialog-plugin--progress" : "")), s = computed(() => e.color || (n.value === true ? "amber" : "primary")), c = computed(() => e.progress === false ? null : at(e.progress) === true ? { component: e.progress.spinner || St, props: { color: e.progress.color || s.value } } : { component: St, props: { color: s.value } }), u = computed(() => e.prompt !== void 0 || e.options !== void 0), m = computed(() => {
    if (u.value !== true)
      return {};
    let { model: q, isValid: D, items: j, ...k } = e.prompt !== void 0 ? e.prompt : e.options;
    return k;
  }), f = computed(() => at(e.ok) === true || e.ok === true ? r.lang.label.ok : e.ok), d = computed(() => at(e.cancel) === true || e.cancel === true ? r.lang.label.cancel : e.cancel), v = computed(() => e.prompt !== void 0 ? e.prompt.isValid !== void 0 && e.prompt.isValid(a.value) !== true : e.options !== void 0 ? e.options.isValid !== void 0 && e.options.isValid(a.value) !== true : false), x = computed(() => ({ color: s.value, label: f.value, ripple: false, disable: v.value, ...at(e.ok) === true ? e.ok : { flat: true }, "data-autofocus": e.focus === "ok" && u.value !== true || void 0, onClick: h2 })), p = computed(() => ({ color: s.value, label: d.value, ripple: false, ...at(e.cancel) === true ? e.cancel : { flat: true }, "data-autofocus": e.focus === "cancel" && u.value !== true || void 0, onClick: g }));
  watch(() => e.prompt && e.prompt.model, R), watch(() => e.options && e.options.model, R);
  function w() {
    i.value.show();
  }
  function b() {
    i.value.hide();
  }
  function h2() {
    t("ok", toRaw(a.value)), b();
  }
  function g() {
    b();
  }
  function C() {
    t("hide");
  }
  function R(q) {
    a.value = q;
  }
  function $(q) {
    v.value !== true && e.prompt.type !== "textarea" && wt(q, 13) === true && h2();
  }
  function F(q, D) {
    return e.html === true ? h(Io, { class: q, innerHTML: D }) : h(Io, { class: q }, () => D);
  }
  function E() {
    return [h(sa, { color: s.value, dense: true, autofocus: true, dark: n.value, ...m.value, modelValue: a.value, "onUpdate:modelValue": R, onKeyup: $ })];
  }
  function A() {
    return [h(Gu, { color: s.value, options: e.options.items, dark: n.value, ...m.value, modelValue: a.value, "onUpdate:modelValue": R })];
  }
  function B() {
    let q = [];
    return e.cancel && q.push(h(Be, p.value)), e.ok && q.push(h(Be, x.value)), h(jl, { class: e.stackButtons === true ? "items-end" : "", vertical: e.stackButtons, align: "right" }, () => q);
  }
  function P() {
    let q = [];
    return e.title && q.push(F("q-dialog__title", e.title)), e.progress !== false && q.push(h(Io, { class: "q-dialog__progress" }, () => h(c.value.component, c.value.props))), e.message && q.push(F("q-dialog__message", e.message)), e.prompt !== void 0 ? q.push(h(Io, { class: "scroll q-dialog-plugin__form" }, E)) : e.options !== void 0 && q.push(h(Co, { dark: n.value }), h(Io, { class: "scroll q-dialog-plugin__form" }, A), h(Co, { dark: n.value })), (e.ok || e.cancel) && q.push(B()), q;
  }
  function S() {
    return [h($i, { class: [l.value, e.cardClass], style: e.cardStyle, dark: n.value }, P)];
  }
  return Object.assign(o, { show: w, hide: b }), () => h(hn, { ref: i, onHide: C }, S);
} });
var Rq = { install({ $q: e, parentApp: t }) {
  e.dialog = $s(Yp, true, t), this.__installed !== true && (this.create = e.dialog);
} };
var Bs = ref(null);
var Md = Xt({ isActive: false }, { start: Ke, stop: Ke, increment: Ke, setDefaults: Ke, install({ $q: e, parentApp: t }) {
  if (e.loadingBar = this, this.__installed === true) {
    e.config.loadingBar !== void 0 && this.setDefaults(e.config.loadingBar);
    return;
  }
  let o = ref(e.config.loadingBar !== void 0 ? { ...e.config.loadingBar } : {});
  function r() {
    Md.isActive = true;
  }
  function n() {
    Md.isActive = false;
  }
  let i = rn("q-loading-bar");
  Un({ name: "LoadingBar", devtools: { hide: true }, setup: () => () => h(Tl, { ...o.value, onStart: r, onStop: n, ref: Bs }) }, t).mount(i), Object.assign(this, { start(a) {
    Bs.value.start(a);
  }, stop() {
    Bs.value.stop();
  }, increment() {
    Bs.value.increment.apply(null, arguments);
  }, setDefaults(a) {
    at(a) === true && Object.assign(o.value, a);
  } });
} });
var Aq = Md;
var _a;
var Rd;
var Gp = 0;
var ei = null;
var Qt = {};
var ti = {};
var Zp = { group: "__default_quasar_group__", delay: 0, message: false, html: false, spinnerSize: 80, spinnerColor: "", messageColor: "", backgroundColor: "", boxClass: "", spinner: St, customClass: "" };
var Jp = { ...Zp };
function Bq(e) {
  if (e && e.group !== void 0 && ti[e.group] !== void 0)
    return Object.assign(ti[e.group], e);
  let t = at(e) === true && e.ignoreDefaults === true ? { ...Zp, ...e } : { ...Jp, ...e };
  return ti[t.group] = t, t;
}
var Yo = Xt({ isActive: false }, { show(e) {
  Qt = Bq(e);
  let { group: t } = Qt;
  return Yo.isActive = true, _a !== void 0 ? (Qt.uid = Gp, Rd.$forceUpdate()) : (Qt.uid = ++Gp, ei !== null && clearTimeout(ei), ei = setTimeout(() => {
    ei = null;
    let o = rn("q-loading");
    _a = Un({ name: "QLoading", setup() {
      onMounted(() => {
        Wa(true);
      });
      function r() {
        Yo.isActive !== true && _a !== void 0 && (Wa(false), _a.unmount(o), yi(o), _a = void 0, Rd = void 0);
      }
      function n() {
        if (Yo.isActive !== true)
          return null;
        let i = [h(Qt.spinner, { class: "q-loading__spinner", color: Qt.spinnerColor, size: Qt.spinnerSize })];
        return Qt.message && i.push(h("div", { class: "q-loading__message" + (Qt.messageColor ? ` text-${Qt.messageColor}` : ""), [Qt.html === true ? "innerHTML" : "textContent"]: Qt.message })), h("div", { class: "q-loading fullscreen flex flex-center z-max " + Qt.customClass.trim(), key: Qt.uid }, [h("div", { class: "q-loading__backdrop" + (Qt.backgroundColor ? ` bg-${Qt.backgroundColor}` : "") }), h("div", { class: "q-loading__box column items-center " + Qt.boxClass }, i)]);
      }
      return () => h(Transition, { name: "q-transition--fade", appear: true, onAfterLeave: r }, n);
    } }, Yo.__parentApp), Rd = _a.mount(o);
  }, Qt.delay)), (o) => {
    if (o === void 0 || Object(o) !== o) {
      Yo.hide(t);
      return;
    }
    Yo.show({ ...o, group: t });
  };
}, hide(e) {
  if (Yo.isActive === true) {
    if (e === void 0)
      ti = {};
    else {
      if (ti[e] === void 0)
        return;
      {
        delete ti[e];
        let t = Object.keys(ti);
        if (t.length !== 0) {
          let o = t[t.length - 1];
          Yo.show({ group: o });
          return;
        }
      }
    }
    ei !== null && (clearTimeout(ei), ei = null), Yo.isActive = false;
  }
}, setDefaults(e) {
  at(e) === true && Object.assign(Jp, e);
}, install({ $q: e, parentApp: t }) {
  e.loading = this, Yo.__parentApp = t, e.config.loading !== void 0 && this.setDefaults(e.config.loading);
} });
var Fq = Yo;
var Fs = null;
var Pd;
var Xo = [];
function Lq(e) {
  e.title && (e.title = e.titleTemplate ? e.titleTemplate(e.title) : e.title, delete e.titleTemplate), [["meta", "content"], ["link", "href"]].forEach((t) => {
    let o = e[t[0]], r = t[1];
    for (let n in o) {
      let i = o[n];
      i.template && (Object.keys(i).length === 1 ? delete o[n] : (i[r] = i.template(i[r] || ""), delete i.template));
    }
  });
}
function Vq(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return true;
  for (let o in e)
    if (e[o] !== t[o])
      return true;
}
function e0(e) {
  return ["class", "style"].includes(e) === false;
}
function t0(e) {
  return ["lang", "dir"].includes(e) === false;
}
function zq(e, t) {
  let o = {}, r = {};
  return e === void 0 ? { add: t, remove: r } : (e.title !== t.title && (o.title = t.title), ["meta", "link", "script", "htmlAttr", "bodyAttr"].forEach((n) => {
    let i = e[n], a = t[n];
    if (r[n] = [], i == null) {
      o[n] = a;
      return;
    }
    o[n] = {};
    for (let l in i)
      a.hasOwnProperty(l) === false && r[n].push(l);
    for (let l in a)
      i.hasOwnProperty(l) === false ? o[n][l] = a[l] : Vq(i[l], a[l]) === true && (r[n].push(l), o[n][l] = a[l]);
  }), { add: o, remove: r });
}
function Dq({ add: e, remove: t }) {
  e.title && (document.title = e.title), Object.keys(t).length !== 0 && (["meta", "link", "script"].forEach((o) => {
    t[o].forEach((r) => {
      document.head.querySelector(`${o}[data-qmeta="${r}"]`).remove();
    });
  }), t.htmlAttr.filter(t0).forEach((o) => {
    document.documentElement.removeAttribute(o);
  }), t.bodyAttr.filter(e0).forEach((o) => {
    document.body.removeAttribute(o);
  })), ["meta", "link", "script"].forEach((o) => {
    let r = e[o];
    for (let n in r) {
      let i = document.createElement(o);
      for (let a in r[n])
        a !== "innerHTML" && i.setAttribute(a, r[n][a]);
      i.setAttribute("data-qmeta", n), o === "script" && (i.innerHTML = r[n].innerHTML || ""), document.head.appendChild(i);
    }
  }), Object.keys(e.htmlAttr).filter(t0).forEach((o) => {
    document.documentElement.setAttribute(o, e.htmlAttr[o] || "");
  }), Object.keys(e.bodyAttr).filter(e0).forEach((o) => {
    document.body.setAttribute(o, e.bodyAttr[o] || "");
  });
}
function Oq() {
  Fs = null;
  let e = { title: "", titleTemplate: null, meta: {}, link: {}, script: {}, htmlAttr: {}, bodyAttr: {} };
  for (let t = 0; t < Xo.length; t++) {
    let { active: o, val: r } = Xo[t];
    o === true && Ir(true, e, r);
  }
  Lq(e), Dq(zq(Pd, e)), Pd = e;
}
function ko() {
  Fs !== null && clearTimeout(Fs), Fs = setTimeout(Oq, 50);
}
var Iq = { install(e) {
  this.__installed !== true && _t.value === true && (Pd = window.__Q_META__, document.getElementById("qmeta-init").remove());
} };
var jq = 0;
var Ls = {};
var Vs = {};
var Go = {};
var n0 = {};
var Uq = /^\s*$/;
var r0 = [];
var Kq = [void 0, null, true, false, ""];
var Ad = ["top-left", "top-right", "bottom-left", "bottom-right", "top", "bottom", "left", "right", "center"];
var Wq = ["top-left", "top-right", "bottom-left", "bottom-right"];
var Ca = { positive: { icon: (e) => e.iconSet.type.positive, color: "positive" }, negative: { icon: (e) => e.iconSet.type.negative, color: "negative" }, warning: { icon: (e) => e.iconSet.type.warning, color: "warning", textColor: "dark" }, info: { icon: (e) => e.iconSet.type.info, color: "info" }, ongoing: { group: false, timeout: 0, spinner: true, color: "grey-8" } };
function i0(e, t, o) {
  if (!e)
    return gl("parameter required");
  let r, n = { textColor: "white" };
  if (e.ignoreDefaults !== true && Object.assign(n, Ls), at(e) === false && (n.type && Object.assign(n, Ca[n.type]), e = { message: e }), Object.assign(n, Ca[e.type || n.type], e), typeof n.icon == "function" && (n.icon = n.icon(t)), n.spinner ? (n.spinner === true && (n.spinner = St), n.spinner = markRaw(n.spinner)) : n.spinner = false, n.meta = { hasMedia: !!(n.spinner !== false || n.icon || n.avatar), hasText: o0(n.message) || o0(n.caption) }, n.position) {
    if (Ad.includes(n.position) === false)
      return gl("wrong position", e);
  } else
    n.position = "bottom";
  if (Kq.includes(n.timeout) === true)
    n.timeout = 5e3;
  else {
    let s = Number(n.timeout);
    if (isNaN(s) || s < 0)
      return gl("wrong timeout", e);
    n.timeout = Number.isFinite(s) ? s : 0;
  }
  n.timeout === 0 ? n.progress = false : n.progress === true && (n.meta.progressClass = "q-notification__progress" + (n.progressClass ? ` ${n.progressClass}` : ""), n.meta.progressStyle = { animationDuration: `${n.timeout + 1e3}ms` });
  let i = (Array.isArray(e.actions) === true ? e.actions : []).concat(e.ignoreDefaults !== true && Array.isArray(Ls.actions) === true ? Ls.actions : []).concat(Ca[e.type] !== void 0 && Array.isArray(Ca[e.type].actions) === true ? Ca[e.type].actions : []), { closeBtn: a } = n;
  if (a && i.push({ label: typeof a == "string" ? a : t.lang.label.close }), n.actions = i.map(({ handler: s, noDismiss: c, ...u }) => ({ flat: true, ...u, onClick: typeof s == "function" ? () => {
    s(), c !== true && l();
  } : () => {
    l();
  } })), n.multiLine === void 0 && (n.multiLine = n.actions.length > 1), Object.assign(n.meta, { class: `q-notification row items-stretch q-notification--${n.multiLine === true ? "multi-line" : "standard"}` + (n.color !== void 0 ? ` bg-${n.color}` : "") + (n.textColor !== void 0 ? ` text-${n.textColor}` : "") + (n.classes !== void 0 ? ` ${n.classes}` : ""), wrapperClass: "q-notification__wrapper col relative-position border-radius-inherit " + (n.multiLine === true ? "column no-wrap justify-center" : "row items-center"), contentClass: "q-notification__content row items-center" + (n.multiLine === true ? "" : " col"), leftClass: n.meta.hasText === true ? "additional" : "single", attrs: { role: "alert", ...n.attrs } }), n.group === false ? (n.group = void 0, n.meta.group = void 0) : ((n.group === void 0 || n.group === true) && (n.group = [n.message, n.caption, n.multiline].concat(n.actions.map((s) => `${s.label}*${s.icon}`)).join("|")), n.meta.group = n.group + "|" + n.position), n.actions.length === 0 ? n.actions = void 0 : n.meta.actionsClass = "q-notification__actions row items-center " + (n.multiLine === true ? "justify-end" : "col-auto") + (n.meta.hasMedia === true ? " q-notification__actions--with-media" : ""), o !== void 0) {
    o.notif.meta.timer && (clearTimeout(o.notif.meta.timer), o.notif.meta.timer = void 0), n.meta.uid = o.notif.meta.uid;
    let s = Go[n.position].value.indexOf(o.notif);
    Go[n.position].value[s] = n;
  } else {
    let s = Vs[n.meta.group];
    if (s === void 0) {
      if (n.meta.uid = jq++, n.meta.badge = 1, ["left", "right", "center"].indexOf(n.position) !== -1)
        Go[n.position].value.splice(Math.floor(Go[n.position].value.length / 2), 0, n);
      else {
        let c = n.position.indexOf("top") !== -1 ? "unshift" : "push";
        Go[n.position].value[c](n);
      }
      n.group !== void 0 && (Vs[n.meta.group] = n);
    } else {
      if (s.meta.timer && (clearTimeout(s.meta.timer), s.meta.timer = void 0), n.badgePosition !== void 0) {
        if (Wq.includes(n.badgePosition) === false)
          return gl("wrong badgePosition", e);
      } else
        n.badgePosition = `top-${n.position.indexOf("left") !== -1 ? "right" : "left"}`;
      n.meta.uid = s.meta.uid, n.meta.badge = s.meta.badge + 1, n.meta.badgeClass = `q-notification__badge q-notification__badge--${n.badgePosition}` + (n.badgeColor !== void 0 ? ` bg-${n.badgeColor}` : "") + (n.badgeTextColor !== void 0 ? ` text-${n.badgeTextColor}` : "") + (n.badgeClass ? ` ${n.badgeClass}` : "");
      let c = Go[n.position].value.indexOf(s);
      Go[n.position].value[c] = Vs[n.meta.group] = n;
    }
  }
  let l = () => {
    Yq(n), r = void 0;
  };
  if (n.timeout > 0 && (n.meta.timer = setTimeout(() => {
    n.meta.timer = void 0, l();
  }, n.timeout + 1e3)), n.group !== void 0)
    return (s) => {
      s !== void 0 ? gl("trying to update a grouped one which is forbidden", e) : l();
    };
  if (r = { dismiss: l, config: e, notif: n }, o !== void 0) {
    Object.assign(o, r);
    return;
  }
  return (s) => {
    if (r !== void 0)
      if (s === void 0)
        r.dismiss();
      else {
        let c = Object.assign({}, r.config, s, { group: false, position: n.position });
        i0(c, t, r);
      }
  };
}
function Yq(e) {
  e.meta.timer && (clearTimeout(e.meta.timer), e.meta.timer = void 0);
  let t = Go[e.position].value.indexOf(e);
  if (t !== -1) {
    e.group !== void 0 && delete Vs[e.meta.group];
    let o = r0["" + e.meta.uid];
    if (o) {
      let { width: r, height: n } = getComputedStyle(o);
      o.style.left = `${o.offsetLeft}px`, o.style.width = r, o.style.height = n;
    }
    Go[e.position].value.splice(t, 1), typeof e.onDismiss == "function" && e.onDismiss();
  }
}
function o0(e) {
  return e != null && Uq.test(e) !== true;
}
function gl(e, t) {
  return console.error(`Notify: ${e}`, t), false;
}
function Xq() {
  return M({ name: "QNotifications", devtools: { hide: true }, setup() {
    return () => h("div", { class: "q-notifications" }, Ad.map((e) => h(TransitionGroup, { key: e, class: n0[e], tag: "div", name: `q-notification--${e}` }, () => Go[e].value.map((t) => {
      let o = t.meta, r = [];
      if (o.hasMedia === true && (t.spinner !== false ? r.push(h(t.spinner, { class: "q-notification__spinner q-notification__spinner--" + o.leftClass, color: t.spinnerColor, size: t.spinnerSize })) : t.icon ? r.push(h(Ce, { class: "q-notification__icon q-notification__icon--" + o.leftClass, name: t.icon, color: t.iconColor, size: t.iconSize, role: "img" })) : t.avatar && r.push(h(Rl, { class: "q-notification__avatar q-notification__avatar--" + o.leftClass }, () => h("img", { src: t.avatar, "aria-hidden": "true" })))), o.hasText === true) {
        let i, a = { class: "q-notification__message col" };
        if (t.html === true)
          a.innerHTML = t.caption ? `<div>${t.message}</div><div class="q-notification__caption">${t.caption}</div>` : t.message;
        else {
          let l = [t.message];
          i = t.caption ? [h("div", l), h("div", { class: "q-notification__caption" }, [t.caption])] : l;
        }
        r.push(h("div", a, i));
      }
      let n = [h("div", { class: o.contentClass }, r)];
      return t.progress === true && n.push(h("div", { key: `${o.uid}|p|${o.badge}`, class: o.progressClass, style: o.progressStyle })), t.actions !== void 0 && n.push(h("div", { class: o.actionsClass }, t.actions.map((i) => h(Be, i)))), o.badge > 1 && n.push(h("div", { key: `${o.uid}|${o.badge}`, class: t.meta.badgeClass, style: t.badgeStyle }, [o.badge])), h("div", { ref: (i) => {
        r0["" + o.uid] = i;
      }, key: o.uid, class: o.class, ...o.attrs }, [h("div", { class: o.wrapperClass }, n)]);
    }))));
  } });
}
var Gq = { setDefaults(e) {
  at(e) === true && Object.assign(Ls, e);
}, registerType(e, t) {
  at(t) === true && (Ca[e] = t);
}, install({ $q: e, parentApp: t }) {
  if (e.notify = this.create = (o) => i0(o, e), e.notify.setDefaults = this.setDefaults, e.notify.registerType = this.registerType, e.config.notify !== void 0 && this.setDefaults(e.config.notify), this.__installed !== true) {
    Ad.forEach((r) => {
      Go[r] = ref([]);
      let n = ["left", "center", "right"].includes(r) === true ? "center" : r.indexOf("top") !== -1 ? "top" : "bottom", i = r.indexOf("left") !== -1 ? "start" : r.indexOf("right") !== -1 ? "end" : "center", a = ["left", "right"].includes(r) ? `items-${r === "left" ? "start" : "end"} justify-center` : r === "center" ? "flex-center" : `items-${i}`;
      n0[r] = `q-notifications__list q-notifications__list--${n} fixed column no-wrap ${a}`;
    });
    let o = rn("q-notify");
    Un(Xq(), t).mount(o);
  }
} };
function Zq(e) {
  return An(e) === true ? "__q_date|" + e.toUTCString() : Zs(e) === true ? "__q_expr|" + e.source : typeof e == "number" ? "__q_numb|" + e : typeof e == "boolean" ? "__q_bool|" + (e ? "1" : "0") : typeof e == "string" ? "__q_strn|" + e : typeof e == "function" ? "__q_strn|" + e.toString() : e === Object(e) ? "__q_objt|" + JSON.stringify(e) : e;
}
function Jq(e) {
  if (e.length < 9)
    return e;
  let o = e.substring(0, 8), r = e.substring(9);
  switch (o) {
    case "__q_date":
      return new Date(r);
    case "__q_expr":
      return new RegExp(r);
    case "__q_numb":
      return Number(r);
    case "__q_bool":
      return r === "1";
    case "__q_strn":
      return "" + r;
    case "__q_objt":
      return JSON.parse(r);
    default:
      return e;
  }
}
function zs() {
  let e = () => null;
  return { has: () => false, getLength: () => 0, getItem: e, getIndex: e, getKey: e, getAll: () => {
  }, getAllKeys: () => [], set: Ke, remove: Ke, clear: Ke, isEmpty: () => true };
}
function Ds(e) {
  let t = window[e + "Storage"], o = (r) => {
    let n = t.getItem(r);
    return n ? Jq(n) : null;
  };
  return { has: (r) => t.getItem(r) !== null, getLength: () => t.length, getItem: o, getIndex: (r) => r < t.length ? o(t.key(r)) : null, getKey: (r) => r < t.length ? t.key(r) : null, getAll: () => {
    let r, n = {}, i = t.length;
    for (let a = 0; a < i; a++)
      r = t.key(a), n[r] = o(r);
    return n;
  }, getAllKeys: () => {
    let r = [], n = t.length;
    for (let i = 0; i < n; i++)
      r.push(t.key(i));
    return r;
  }, set: (r, n) => {
    t.setItem(r, Zq(n));
  }, remove: (r) => {
    t.removeItem(r);
  }, clear: () => {
    t.clear();
  }, isEmpty: () => t.length === 0 };
}
var a0 = _e.has.webStorage === false ? zs() : Ds("local");
var l0 = { install({ $q: e }) {
  e.localStorage = a0;
} };
Object.assign(l0, a0);
var eT = l0;
var u0 = _e.has.webStorage === false ? zs() : Ds("session");
var s0 = { install({ $q: e }) {
  e.sessionStorage = u0;
} };
Object.assign(s0, u0);
var tT = s0;
function $d() {
  let { emit: e, proxy: t } = getCurrentInstance(), o = ref(null);
  function r() {
    o.value.show();
  }
  function n() {
    o.value.hide();
  }
  function i(l) {
    e("ok", l), n();
  }
  function a() {
    e("hide");
  }
  return Object.assign(t, { show: r, hide: n }), { dialogRef: o, onDialogHide: a, onDialogOK: i, onDialogCancel: n };
}
var c0 = ["ok", "hide"];
$d.emits = c0;
$d.emitsObject = ks(c0);
var rT = $d;
function cT(e) {
  {
    let t = { active: true };
    if (typeof e == "function") {
      let o = computed(e);
      t.val = o.value, watch(o, (r) => {
        t.val = r, t.active === true && ko();
      });
    } else
      t.val = e;
    Xo.push(t), ko(), onActivated(() => {
      t.active = true, ko();
    }), onDeactivated(() => {
      t.active = false, ko();
    }), onUnmounted(() => {
      Xo.splice(Xo.indexOf(t), 1), ko();
    });
  }
}
function d0() {
  return inject(yl);
}
function fT(e) {
  let t = document.createElement("textarea");
  t.value = e, t.contentEditable = "true", t.style.position = "fixed";
  let o = () => {
  };
  wi(o), document.body.appendChild(t), t.focus(), t.select();
  let r = document.execCommand("copy");
  return t.remove(), Er(o), r;
}
function mT(e) {
  return navigator.clipboard !== void 0 ? navigator.clipboard.writeText(e) : new Promise((t, o) => {
    let r = fT(e);
    r ? t(true) : o(r);
  });
}
var vT = (e) => {
  let t = { activated() {
    this.__qMeta.active = true, ko();
  }, deactivated() {
    this.__qMeta.active = false, ko();
  }, unmounted() {
    Xo.splice(Xo.indexOf(this.__qMeta), 1), ko(), this.__qMeta = void 0;
  } };
  return typeof e == "function" ? Object.assign(t, { computed: { __qMetaOptions() {
    return e.call(this) || {};
  } }, watch: { __qMetaOptions(o) {
    this.__qMeta.val = o, this.__qMeta.active === true && ko();
  } }, created() {
    this.__qMeta = { active: true, val: this.__qMetaOptions }, Xo.push(this.__qMeta), ko();
  } }) : t.created = function() {
    this.__qMeta = { active: true, val: e }, Xo.push(this.__qMeta), ko();
  }, t;
};
var Os = class {
  constructor() {
    this.__stack = {};
  }
  on(t, o, r) {
    return (this.__stack[t] || (this.__stack[t] = [])).push({ fn: o, ctx: r }), this;
  }
  once(t, o, r) {
    let n = (...i) => {
      this.off(t, n), o.apply(r, i);
    };
    return n.__callback = o, this.on(t, n, r);
  }
  emit(t) {
    let o = this.__stack[t];
    if (o !== void 0) {
      let r = [].slice.call(arguments, 1);
      o.forEach((n) => {
        n.fn.apply(n.ctx, r);
      });
    }
    return this;
  }
  off(t, o) {
    let r = this.__stack[t];
    if (r === void 0)
      return this;
    if (o === void 0)
      return delete this.__stack[t], this;
    let n = r.filter((i) => i.fn !== o && i.fn.__callback !== o);
    return n.length !== 0 ? this.__stack[t] = n : delete this.__stack[t], this;
  }
};
function f0(e) {
  setTimeout(() => {
    window.URL.revokeObjectURL(e.href);
  }, 1e4), e.remove();
}
function gT(e, t, o = {}) {
  let { mimeType: r, byteOrderMark: n, encoding: i } = typeof o == "string" ? { mimeType: o } : o, a = i !== void 0 ? new TextEncoder(i).encode([t]) : t, l = n !== void 0 ? [n, a] : [a], s = new Blob(l, { type: r || "application/octet-stream" }), c = document.createElement("a");
  c.href = window.URL.createObjectURL(s), c.setAttribute("download", e), typeof c.download > "u" && c.setAttribute("target", "_blank"), c.classList.add("hidden"), c.style.position = "fixed", document.body.appendChild(c);
  try {
    return c.click(), f0(c), true;
  } catch (u) {
    return f0(c), u;
  }
}
function hT(e) {
  let t = Object.assign({ noopener: true }, e), o = [];
  for (let r in t) {
    let n = t[r];
    n === true ? o.push(r) : (Mo(n) || typeof n == "string" && n !== "") && o.push(r + "=" + n);
  }
  return o.join(",");
}
function m0(e, t, o) {
  let r = window.open;
  if (Tn.is.cordova === true) {
    if (cordova !== void 0 && cordova.InAppBrowser !== void 0 && cordova.InAppBrowser.open !== void 0)
      r = cordova.InAppBrowser.open;
    else if (navigator !== void 0 && navigator.app !== void 0)
      return navigator.app.loadUrl(e, { openExternal: true });
  }
  let n = r(e, "_blank", hT(o));
  if (n)
    return Tn.is.desktop && n.focus(), n;
  t && t();
}
var pT = (e, t, o) => {
  if (Tn.is.ios === true && window.SafariViewController !== void 0) {
    window.SafariViewController.isAvailable((r) => {
      r ? window.SafariViewController.show({ url: e }, Ke, t) : m0(e, t, o);
    });
    return;
  }
  return m0(e, t, o);
};
function bT(e) {
  let t = Array.isArray(e);
  if (t === true) {
    let n = e.length;
    return { isList: t, totalJobs: n, resultAggregator: Array(n).fill(null) };
  }
  let o = Object.keys(e), r = {};
  return o.forEach((n) => {
    r[n] = null;
  }), { isList: t, totalJobs: o.length, resultAggregator: r, resultKeys: o };
}
function v0(e, { threadsNumber: t = 1, abortOnFail: o = true } = {}) {
  let r = -1, n = false, { isList: i, totalJobs: a, resultAggregator: l, resultKeys: s } = bT(e), c = () => new Promise((m, f) => {
    function d() {
      let v = ++r;
      if (n === true || v >= a) {
        m();
        return;
      }
      let x = i === true ? v : s[v];
      e[x](l).then((p) => {
        if (n === true) {
          m();
          return;
        }
        l[x] = { key: x, status: "fulfilled", value: p }, setTimeout(d);
      }).catch((p) => {
        if (n === true) {
          m();
          return;
        }
        let w = { key: x, status: "rejected", reason: p };
        if (l[x] = w, o === true) {
          n = true, f({ ...w, resultAggregator: l });
          return;
        }
        setTimeout(d);
      });
    }
    d();
  }), u = Array(t).fill(c());
  return Promise.all(u).then(() => l);
}
var nX = { version: "2.14.6", install(e, t, o) {
  nf(e, { components: qd, directives: Td, ...t }, o);
}, lang: kr, iconSet: bl };
export {
  sq as AddressbarColor,
  fq as AppFullscreen,
  mq as AppVisibility,
  yq as BottomSheet,
  vp as ClosePopup,
  qq as Cookies,
  Ys as Dark,
  Rq as Dialog,
  Os as EventBus,
  Qu as Intersection,
  Fq as Loading,
  Aq as LoadingBar,
  eT as LocalStorage,
  Iq as Meta,
  kp as Morph,
  Mp as Mutation,
  Gq as Notify,
  Tn as Platform,
  Tl as QAjaxBar,
  Rl as QAvatar,
  pf as QBadge,
  yf as QBanner,
  Sf as QBar,
  Cf as QBreadcrumbs,
  Rf as QBreadcrumbsEl,
  Be as QBtn,
  Ql as QBtnDropdown,
  gi as QBtnGroup,
  lm as QBtnToggle,
  $i as QCard,
  jl as QCardActions,
  Io as QCardSection,
  dm as QCarousel,
  vm as QCarouselControl,
  fm as QCarouselSlide,
  gm as QChatMessage,
  mn as QCheckbox,
  Ki as QChip,
  Yi as QCircularProgress,
  Pm as QColor,
  Qm as QDate,
  hn as QDialog,
  tv as QDrawer,
  yv as QEditor,
  xv as QExpansionItem,
  Cv as QFab,
  qv as QFabAction,
  Pu as QField,
  $v as QFile,
  Ev as QFooter,
  Bv as QForm,
  Fv as QFormChildMixin,
  Vv as QHeader,
  Ce as QIcon,
  zv as QImg,
  Nv as QInfiniteScroll,
  Qv as QInnerLoading,
  sa as QInput,
  eg as QIntersection,
  pn as QItem,
  Nr as QItemLabel,
  ho as QItemSection,
  ng as QKnob,
  ag as QLayout,
  is as QLinearProgress,
  Uu as QList,
  Wu as QMarkupTable,
  sn as QMenu,
  ug as QNoSsr,
  Gu as QOptionGroup,
  vg as QPage,
  gg as QPageContainer,
  yg as QPageScroller,
  Sg as QPageSticky,
  xg as QPagination,
  Cg as QParallax,
  wg as QPopupEdit,
  qg as QPopupProxy,
  Mg as QPullToRefresh,
  Yu as QRadio,
  Rg as QRange,
  Pg as QRating,
  go as QResizeObserver,
  Ag as QResponsive,
  Xh as QRouteTab,
  Lg as QScrollArea,
  ca as QScrollObserver,
  fs as QSelect,
  Co as QSeparator,
  Hg as QSkeleton,
  Ug as QSlideItem,
  sr as QSlideTransition,
  En as QSlider,
  Kg as QSpace,
  St as QSpinner,
  Wg as QSpinnerAudio,
  Yg as QSpinnerBall,
  Xg as QSpinnerBars,
  Gg as QSpinnerBox,
  Zg as QSpinnerClock,
  Jg as QSpinnerComment,
  eh as QSpinnerCube,
  th as QSpinnerDots,
  oh as QSpinnerFacebook,
  nh as QSpinnerGears,
  rh as QSpinnerGrid,
  ih as QSpinnerHearts,
  ah as QSpinnerHourglass,
  lh as QSpinnerInfinity,
  uh as QSpinnerIos,
  sh as QSpinnerOrbit,
  ch as QSpinnerOval,
  dh as QSpinnerPie,
  fh as QSpinnerPuff,
  mh as QSpinnerRadio,
  vh as QSpinnerRings,
  gh as QSpinnerTail,
  ph as QSplitter,
  Sh as QStep,
  xh as QStepper,
  _h as QStepperNavigation,
  ir as QTab,
  Gi as QTabPanel,
  lu as QTabPanels,
  Uh as QTable,
  Oa as QTabs,
  Yh as QTd,
  bs as QTh,
  Zh as QTime,
  Jh as QTimeline,
  ep as QTimelineEntry,
  Xu as QToggle,
  tp as QToolbar,
  op as QToolbarTitle,
  Cu as QTooltip,
  Kh as QTr,
  rp as QTree,
  sp as QUploader,
  cp as QUploaderAddTrigger,
  fp as QVideo,
  xs as QVirtualScroll,
  nX as Quasar,
  nn as Ripple,
  Ws as Screen,
  $p as Scroll,
  Pp as ScrollFire,
  tT as SessionStorage,
  Ep as TouchHold,
  qt as TouchPan,
  Fp as TouchRepeat,
  Ul as TouchSwipe,
  pr as clone,
  YS as colors,
  mT as copyToClipboard,
  vT as createMetaMixin,
  Cd as createUploaderComponent,
  kx as date,
  So as debounce,
  Ab as dom,
  B0 as event,
  gT as exportFile,
  Ir as extend,
  j0 as format,
  al as frameDebounce,
  Ps as getCssVar,
  I0 as is,
  Ts as morph,
  Ke as noop,
  pT as openURL,
  NS as patterns,
  v0 as runSequentialPromises,
  dy as scroll,
  pl as setCssVar,
  Ta as throttle,
  Jn as uid,
  rT as useDialogPluginComponent,
  Xc as useFormChild,
  cT as useMeta,
  d0 as useQuasar
};
/*! Bundled license information:

quasar/dist/quasar.esm.prod.js:
  (*!
   * Quasar Framework v2.14.6
   * (c) 2015-present Razvan Stoenescu
   * Released under the MIT License.
   *)
*/
//# sourceMappingURL=quasar.js.map
