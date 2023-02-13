import pe, { useLayoutEffect as Or, useEffect as fe, useState as oe, createContext as Sr, forwardRef as jr, useRef as Pr, useMemo as Fr, useCallback as kr, isValidElement as Ze, Fragment as J, useContext as Ar } from "react";
import { createPortal as Ir } from "react-dom";
import { Transition as $r } from "@headlessui/react";
import { useFloating as Dr, offset as Wr, flip as Mr, shift as Nr, autoPlacement as Ur, arrow as Lr, hide as Yr, autoUpdate as Vr } from "@floating-ui/react-dom";
var he = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qe = "Expected a function", He = 0 / 0, zr = "[object Symbol]", Br = /^\s+|\s+$/g, Hr = /^[-+]0x[0-9a-f]+$/i, qr = /^0b[01]+$/i, Gr = /^0o[0-7]+$/i, Jr = parseInt, Kr = typeof he == "object" && he && he.Object === Object && he, Xr = typeof self == "object" && self && self.Object === Object && self, Zr = Kr || Xr || Function("return this")(), Qr = Object.prototype, et = Qr.toString, rt = Math.max, tt = Math.min, je = function() {
  return Zr.Date.now();
};
function nt(r, f, i) {
  var h, R, O, E, b, c, w = 0, m = !1, _ = !1, S = !0;
  if (typeof r != "function")
    throw new TypeError(Qe);
  f = qe(f) || 0, Ee(i) && (m = !!i.leading, _ = "maxWait" in i, O = _ ? rt(qe(i.maxWait) || 0, f) : O, S = "trailing" in i ? !!i.trailing : S);
  function T(d) {
    var g = h, D = R;
    return h = R = void 0, w = d, E = r.apply(D, g), E;
  }
  function M(d) {
    return w = d, b = setTimeout(k, f), m ? T(d) : E;
  }
  function U(d) {
    var g = d - c, D = d - w, Y = f - g;
    return _ ? tt(Y, O - D) : Y;
  }
  function $(d) {
    var g = d - c, D = d - w;
    return c === void 0 || g >= f || g < 0 || _ && D >= O;
  }
  function k() {
    var d = je();
    if ($(d))
      return x(d);
    b = setTimeout(k, U(d));
  }
  function x(d) {
    return b = void 0, S && h ? T(d) : (h = R = void 0, E);
  }
  function L() {
    b !== void 0 && clearTimeout(b), w = 0, h = c = R = b = void 0;
  }
  function z() {
    return b === void 0 ? E : x(je());
  }
  function N() {
    var d = je(), g = $(d);
    if (h = arguments, R = this, c = d, g) {
      if (b === void 0)
        return M(c);
      if (_)
        return b = setTimeout(k, f), T(c);
    }
    return b === void 0 && (b = setTimeout(k, f)), E;
  }
  return N.cancel = L, N.flush = z, N;
}
function at(r, f, i) {
  var h = !0, R = !0;
  if (typeof r != "function")
    throw new TypeError(Qe);
  return Ee(i) && (h = "leading" in i ? !!i.leading : h, R = "trailing" in i ? !!i.trailing : R), nt(r, f, {
    leading: h,
    maxWait: f,
    trailing: R
  });
}
function Ee(r) {
  var f = typeof r;
  return !!r && (f == "object" || f == "function");
}
function it(r) {
  return !!r && typeof r == "object";
}
function ot(r) {
  return typeof r == "symbol" || it(r) && et.call(r) == zr;
}
function qe(r) {
  if (typeof r == "number")
    return r;
  if (ot(r))
    return He;
  if (Ee(r)) {
    var f = typeof r.valueOf == "function" ? r.valueOf() : r;
    r = Ee(f) ? f + "" : f;
  }
  if (typeof r != "string")
    return r === 0 ? r : +r;
  r = r.replace(Br, "");
  var i = qr.test(r);
  return i || Gr.test(r) ? Jr(r.slice(2), i ? 2 : 8) : Hr.test(r) ? He : +r;
}
var ft = at;
const er = typeof window < "u" ? Or : fe, Pe = { serverHandoffComplete: !1 };
function ut() {
  const [r, f] = oe(Pe.serverHandoffComplete);
  return fe(() => {
    r !== !0 && f(!0);
  }, [r]), fe(() => {
    Pe.serverHandoffComplete === !1 && (Pe.serverHandoffComplete = !0);
  }, []), r;
}
let st = 0;
function Ge() {
  return ++st;
}
var Xe;
const lt = (Xe = pe.useId) != null ? Xe : function() {
  const f = ut(), [i, h] = pe.useState(f ? Ge : null);
  return er(() => {
    i === null && h(Ge());
  }, [i]), i != null ? `${i}` : void 0;
}, pt = [
  "origin-bottom",
  "origin-top",
  "origin-right",
  "origin-left",
  "origin-bottom-left",
  "origin-bottom-right",
  "origin-top-left",
  "origin-top-right"
], ct = (r) => {
  switch (r) {
    case "top":
      return "origin-bottom";
    case "bottom":
      return "origin-top";
    case "left":
      return "origin-right";
    case "right":
      return "origin-left";
    case "top-start":
    case "right-end":
      return "origin-bottom-left";
    case "top-end":
    case "left-end":
      return "origin-bottom-right";
    case "right-start":
    case "bottom-start":
      return "origin-top-left";
    case "left-start":
    case "bottom-end":
      return "origin-top-right";
    default:
      return "";
  }
};
var rr = { exports: {} }, ae = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function dt() {
  if (Je)
    return ae;
  Je = 1;
  var r = pe, f = Symbol.for("react.element"), i = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, R = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(b, c, w) {
    var m, _ = {}, S = null, T = null;
    w !== void 0 && (S = "" + w), c.key !== void 0 && (S = "" + c.key), c.ref !== void 0 && (T = c.ref);
    for (m in c)
      h.call(c, m) && !O.hasOwnProperty(m) && (_[m] = c[m]);
    if (b && b.defaultProps)
      for (m in c = b.defaultProps, c)
        _[m] === void 0 && (_[m] = c[m]);
    return { $$typeof: f, type: b, key: S, ref: T, props: _, _owner: R.current };
  }
  return ae.Fragment = i, ae.jsx = E, ae.jsxs = E, ae;
}
var ie = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function vt() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var r = pe, f = !1, i = !1, h = !1, R = !1, O = !1, E = Symbol.for("react.element"), b = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), S = Symbol.for("react.context"), T = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), U = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), L = Symbol.iterator, z = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = L && e[L] || e[z];
      return typeof t == "function" ? t : null;
    }
    var d = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          n[a - 1] = arguments[a];
        D("error", e, n);
      }
    }
    function D(e, t, n) {
      {
        var a = d.ReactDebugCurrentFrame, s = a.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var v = n.map(function(u) {
          return String(u);
        });
        v.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Y;
    Y = Symbol.for("react.module.reference");
    function Re(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === m || O || e === w || e === M || e === U || R || e === x || f || i || h || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === $ || e.$$typeof === _ || e.$$typeof === S || e.$$typeof === T || e.$$typeof === Y || e.getModuleId !== void 0));
    }
    function we(e, t, n) {
      var a = e.displayName;
      if (a)
        return a;
      var s = t.displayName || t.name || "";
      return s !== "" ? n + "(" + s + ")" : n;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case b:
          return "Portal";
        case m:
          return "Profiler";
        case w:
          return "StrictMode";
        case M:
          return "Suspense";
        case U:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case S:
            var t = e;
            return ue(t) + ".Consumer";
          case _:
            var n = e;
            return ue(n._context) + ".Provider";
          case T:
            return we(e, e.render, "ForwardRef");
          case $:
            var a = e.displayName || null;
            return a !== null ? a : j(e.type) || "Memo";
          case k: {
            var s = e, v = s._payload, u = s._init;
            try {
              return j(u(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, V = 0, K, se, le, ce, X, Z, Q;
    function ee() {
    }
    ee.__reactDisabledLog = !0;
    function l() {
      {
        if (V === 0) {
          K = console.log, se = console.info, le = console.warn, ce = console.error, X = console.group, Z = console.groupCollapsed, Q = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        V++;
      }
    }
    function I() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: K
            }),
            info: A({}, e, {
              value: se
            }),
            warn: A({}, e, {
              value: le
            }),
            error: A({}, e, {
              value: ce
            }),
            group: A({}, e, {
              value: X
            }),
            groupCollapsed: A({}, e, {
              value: Z
            }),
            groupEnd: A({}, e, {
              value: Q
            })
          });
        }
        V < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = d.ReactCurrentDispatcher, te;
    function B(e, t, n) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (s) {
            var a = s.stack.trim().match(/\n( *(at )?)/);
            te = a && a[1] || "";
          }
        return `
` + te + e;
      }
    }
    var _e = !1, de;
    {
      var ar = typeof WeakMap == "function" ? WeakMap : Map;
      de = new ar();
    }
    function ke(e, t) {
      if (!e || _e)
        return "";
      {
        var n = de.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      _e = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = re.current, re.current = null, l();
      try {
        if (t) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (W) {
              a = W;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (W) {
              a = W;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            a = W;
          }
          e();
        }
      } catch (W) {
        if (W && a && typeof W.stack == "string") {
          for (var o = W.stack.split(`
`), C = a.stack.split(`
`), y = o.length - 1, p = C.length - 1; y >= 1 && p >= 0 && o[y] !== C[p]; )
            p--;
          for (; y >= 1 && p >= 0; y--, p--)
            if (o[y] !== C[p]) {
              if (y !== 1 || p !== 1)
                do
                  if (y--, p--, p < 0 || o[y] !== C[p]) {
                    var P = `
` + o[y].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && de.set(e, P), P;
                  }
                while (y >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        _e = !1, re.current = v, I(), Error.prepareStackTrace = s;
      }
      var q = e ? e.displayName || e.name : "", Be = q ? B(q) : "";
      return typeof e == "function" && de.set(e, Be), Be;
    }
    function ir(e, t, n) {
      return ke(e, !1);
    }
    function or(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ve(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ke(e, or(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case M:
          return B("Suspense");
        case U:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            return ir(e.render);
          case $:
            return ve(e.type, t, n);
          case k: {
            var a = e, s = a._payload, v = a._init;
            try {
              return ve(v(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Ae = {}, Ie = d.ReactDebugCurrentFrame;
    function me(e) {
      if (e) {
        var t = e._owner, n = ve(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(n);
      } else
        Ie.setExtraStackFrame(null);
    }
    function fr(e, t, n, a, s) {
      {
        var v = Function.call.bind(ge);
        for (var u in e)
          if (v(e, u)) {
            var o = void 0;
            try {
              if (typeof e[u] != "function") {
                var C = Error((a || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              o = e[u](t, u, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              o = y;
            }
            o && !(o instanceof Error) && (me(s), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, u, typeof o), me(null)), o instanceof Error && !(o.message in Ae) && (Ae[o.message] = !0, me(s), g("Failed %s type: %s", n, o.message), me(null));
          }
      }
    }
    var ur = Array.isArray;
    function Te(e) {
      return ur(e);
    }
    function sr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function lr(e) {
      try {
        return $e(e), !1;
      } catch {
        return !0;
      }
    }
    function $e(e) {
      return "" + e;
    }
    function De(e) {
      if (lr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), $e(e);
    }
    var ne = d.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Me, xe;
    xe = {};
    function dr(e) {
      if (ge.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function vr(e) {
      if (ge.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function gr(e, t) {
      if (typeof e.ref == "string" && ne.current && t && ne.current.stateNode !== t) {
        var n = j(ne.current.type);
        xe[n] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(ne.current.type), e.ref), xe[n] = !0);
      }
    }
    function mr(e, t) {
      {
        var n = function() {
          We || (We = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function hr(e, t) {
      {
        var n = function() {
          Me || (Me = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var br = function(e, t, n, a, s, v, u) {
      var o = {
        $$typeof: E,
        type: e,
        key: t,
        ref: n,
        props: u,
        _owner: v
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function yr(e, t, n, a, s) {
      {
        var v, u = {}, o = null, C = null;
        n !== void 0 && (De(n), o = "" + n), vr(t) && (De(t.key), o = "" + t.key), dr(t) && (C = t.ref, gr(t, s));
        for (v in t)
          ge.call(t, v) && !cr.hasOwnProperty(v) && (u[v] = t[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            u[v] === void 0 && (u[v] = y[v]);
        }
        if (o || C) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && mr(u, p), C && hr(u, p);
        }
        return br(e, o, C, s, a, ne.current, u);
      }
    }
    var Ce = d.ReactCurrentOwner, Ne = d.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var t = e._owner, n = ve(e.type, e._source, t ? t.type : null);
        Ne.setExtraStackFrame(n);
      } else
        Ne.setExtraStackFrame(null);
    }
    var Oe;
    Oe = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === E;
    }
    function Ue() {
      {
        if (Ce.current) {
          var e = j(Ce.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function pr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var Le = {};
    function Er(e) {
      {
        var t = Ue();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Ye(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = Er(t);
        if (Le[n])
          return;
        Le[n] = !0;
        var a = "";
        e && e._owner && e._owner !== Ce.current && (a = " It was passed a child from " + j(e._owner.type) + "."), H(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), H(null);
      }
    }
    function Ve(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Te(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            Se(a) && Ye(a, t);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = N(e);
          if (typeof s == "function" && s !== e.entries)
            for (var v = s.call(e), u; !(u = v.next()).done; )
              Se(u.value) && Ye(u.value, t);
        }
      }
    }
    function Rr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === T || t.$$typeof === $))
          n = t.propTypes;
        else
          return;
        if (n) {
          var a = j(t);
          fr(n, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !Oe) {
          Oe = !0;
          var s = j(t);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function wr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var a = t[n];
          if (a !== "children" && a !== "key") {
            H(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), H(null);
            break;
          }
        }
        e.ref !== null && (H(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    function ze(e, t, n, a, s, v) {
      {
        var u = Re(e);
        if (!u) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = pr(s);
          C ? o += C : o += Ue();
          var y;
          e === null ? y = "null" : Te(e) ? y = "array" : e !== void 0 && e.$$typeof === E ? (y = "<" + (j(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, o);
        }
        var p = yr(e, t, n, s, v);
        if (p == null)
          return p;
        if (u) {
          var P = t.children;
          if (P !== void 0)
            if (a)
              if (Te(P)) {
                for (var q = 0; q < P.length; q++)
                  Ve(P[q], e);
                Object.freeze && Object.freeze(P);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(P, e);
        }
        return e === c ? wr(p) : Rr(p), p;
      }
    }
    function _r(e, t, n) {
      return ze(e, t, n, !0);
    }
    function Tr(e, t, n) {
      return ze(e, t, n, !1);
    }
    var xr = Tr, Cr = _r;
    ie.Fragment = c, ie.jsx = xr, ie.jsxs = Cr;
  }()), ie;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = dt() : r.exports = vt();
})(rr);
const F = rr.exports.jsx, be = /* @__PURE__ */ new Map(), G = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map(), Fe = Sr(null);
Fe.displayName = "ArrowContext";
function tr(r) {
  const f = Ar(Fe);
  if (f === null) {
    const i = new Error(`<${r} /> is missing a parent <Float /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(i, tr), i;
  }
  return f;
}
const nr = jr((r, f) => {
  var X, Z, Q, ee;
  const i = lt(), [h, R] = oe(!1), [O, E] = oe(r.show !== void 0 ? r.show : !1), [b, c] = oe(), w = Pr(null), m = {
    show: r.onShow || (() => {
    }),
    hide: r.onHide || (() => {
    }),
    update: r.onUpdate || (() => {
    })
  }, {
    x: _,
    y: S,
    placement: T,
    strategy: M,
    reference: U,
    floating: $,
    update: k,
    refs: x,
    middlewareData: L
  } = Dr({
    placement: r.placement || "bottom-start",
    strategy: r.strategy,
    middleware: b
  }), z = Fr(() => typeof r.originClass == "function" ? r.originClass(T) : typeof r.originClass == "string" ? r.originClass : r.tailwindcssOriginClass ? ct(T) : "", [r.originClass, r.tailwindcssOriginClass]), [N, d] = oe(null), g = kr(() => {
    k(), m.update();
  }, [k]);
  fe(() => {
    const l = [];
    (typeof r.offset == "number" || typeof r.offset == "object" || typeof r.offset == "function") && l.push(Wr(r.offset)), (r.flip === !0 || typeof r.flip == "number" || typeof r.flip == "object") && l.push(Mr({
      padding: typeof r.flip == "number" ? r.flip : void 0,
      ...typeof r.flip == "object" ? r.flip : {}
    })), (r.shift === !0 || typeof r.shift == "number" || typeof r.shift == "object") && l.push(Nr({
      padding: typeof r.shift == "number" ? r.shift : void 0,
      ...typeof r.shift == "object" ? r.shift : {}
    })), (r.autoPlacement === !0 || typeof r.autoPlacement == "object") && l.push(Ur(typeof r.autoPlacement == "object" ? r.autoPlacement : void 0)), (r.arrow === !0 || typeof r.arrow == "number") && l.push(Lr({
      element: w,
      padding: r.arrow === !0 ? 0 : r.arrow
    })), l.push(...typeof r.middleware == "function" ? r.middleware({
      referenceEl: x.reference,
      floatingEl: x.floating
    }) : r.middleware || []), (r.hide === !0 || typeof r.hide == "object") && l.push(Yr(typeof r.hide == "object" ? r.hide : void 0)), c(l);
  }, [r.offset, r.shift, r.flip, r.arrow, r.autoPlacement, r.hide, r.middleware]);
  function D() {
    x.reference.current && x.floating.current && r.autoUpdate !== !1 && !G.get(i) && G.set(i, Vr(x.reference.current, x.floating.current, ft(g, 16), typeof r.autoUpdate == "object" ? r.autoUpdate : void 0));
  }
  function Y() {
    const l = G.get(i);
    l && (l(), G.delete(i));
  }
  function Re() {
    if (r.adaptiveWidth && typeof window < "u" && "ResizeObserver" in window && x.reference.current && !ye.get(i)) {
      const l = new ResizeObserver(([I]) => {
        const re = I.borderBoxSize.reduce((te, {
          inlineSize: B
        }) => te + B, 0);
        d(re);
      });
      l.observe(x.reference.current), ye.set(i, () => {
        l.disconnect();
      });
    }
  }
  function we() {
    const l = ye.get(i);
    l && (l(), ye.delete(i));
  }
  er(() => (x.reference.current && x.floating.current && O === !0 && !be.get(i) ? (be.set(i, !0), D(), m.show()) : O === !1 && be.get(i) && G.get(i) && (be.delete(i), Y(), m.hide()), G.get(i)), [O]), fe(() => (R(!0), Re(), () => {
    we();
  }), []);
  const ue = {
    arrowRef: w,
    placement: T,
    x: (Z = (X = L.arrow) == null ? void 0 : X.x) != null ? Z : null,
    y: (ee = (Q = L.arrow) == null ? void 0 : Q.y) != null ? ee : null
  }, [j, A] = r.children;
  if (!Ze(j))
    return /* @__PURE__ */ F(J, {});
  const V = {
    show: h ? r.show : !1,
    enter: `${r.enter || ""} ${z}`,
    enterFrom: `${r.enterFrom || ""}`,
    enterTo: `${r.enterTo || ""}`,
    leave: `${r.leave || ""} ${z}`,
    leaveFrom: `${r.leaveFrom || ""}`,
    leaveTo: `${r.leaveTo || ""}`,
    beforeEnter: () => {
      E(!0);
    },
    afterLeave: () => {
      E(!1);
    }
  }, K = {
    ref: $,
    style: {
      ...r.transform || r.transform === void 0 ? {
        position: M,
        zIndex: r.zIndex || 9999,
        top: 0,
        left: 0,
        right: "auto",
        bottom: "auto",
        transform: `translate(${Math.round(_ || 0)}px,${Math.round(S || 0)}px)`
      } : {
        position: M,
        zIndex: r.zIndex || 9999,
        top: `${S || 0}px`,
        left: `${_ || 0}px`
      },
      width: r.adaptiveWidth && typeof N == "number" ? `${N}px` : void 0
    }
  };
  function se(l) {
    if (r.as === J)
      return /* @__PURE__ */ F(J, {
        children: l
      });
    const I = r.as || "div";
    return /* @__PURE__ */ F(I, {
      ref: f,
      className: r.className,
      children: l
    });
  }
  function le(l) {
    if (h && r.portal) {
      const I = document.querySelector(r.portal === !0 ? "body" : r.portal);
      if (I)
        return Ir(l, I);
    }
    return l;
  }
  function ce(l) {
    if (r.floatingAs === J)
      return /* @__PURE__ */ F(l.type, {
        ...l.props,
        ...K
      });
    const I = r.floatingAs || "div";
    return /* @__PURE__ */ F(I, {
      ...K,
      children: /* @__PURE__ */ F(l.type, {
        ...l.props
      })
    });
  }
  return se([/* @__PURE__ */ F(j.type, {
    ...j.props,
    ref: U
  }, "ReferenceNode"), /* @__PURE__ */ F(Fe.Provider, {
    value: ue,
    children: le(ce(/* @__PURE__ */ F($r, {
      as: J,
      ...V,
      children: /* @__PURE__ */ F(A.type, {
        ...A.props
      })
    })))
  }, "FloatingNode")]);
});
nr.displayName = "Float";
function gt(r) {
  var c;
  const {
    arrowRef: f,
    placement: i,
    x: h,
    y: R
  } = tr("Float.Arrow"), O = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }[i.split("-")[0]], E = {
    left: typeof h == "number" ? `${h}px` : "",
    top: typeof R == "number" ? `${R}px` : "",
    right: "",
    bottom: "",
    [O]: `${((c = r.offset) != null ? c : 4) * -1}px`
  };
  if (r.as === J) {
    const w = {
      placement: i
    }, m = typeof r.children == "function" ? r.children(w) : r.children;
    if (!m || !Ze(m))
      throw new Error("When the prop `as` of <Float.Arrow /> is <Fragment />, there must be contains 1 child element.");
    return /* @__PURE__ */ F(m.type, {
      ...m.props,
      ref: f,
      style: E
    });
  }
  const b = r.as || "div";
  return /* @__PURE__ */ F(b, {
    ...r,
    ref: f,
    style: E
  });
}
const Et = Object.assign(nr, {
  Arrow: gt
});
export {
  Et as Float,
  ct as tailwindcssOriginClassResolver,
  pt as tailwindcssOriginSafelist
};
