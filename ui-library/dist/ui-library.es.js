import te from "react";
var g = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ae() {
  if (D) return E;
  D = 1;
  var o = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function d(u, n, s) {
    var f = null;
    if (s !== void 0 && (f = "" + s), n.key !== void 0 && (f = "" + n.key), "key" in n) {
      s = {};
      for (var b in n)
        b !== "key" && (s[b] = n[b]);
    } else s = n;
    return n = s.ref, {
      $$typeof: o,
      type: u,
      key: f,
      ref: n !== void 0 ? n : null,
      props: s
    };
  }
  return E.Fragment = l, E.jsx = d, E.jsxs = d, E;
}
var h = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ne() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && (function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case V:
          return "Profiler";
        case J:
          return "StrictMode";
        case B:
          return "Suspense";
        case H:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case z:
            return "Portal";
          case G:
            return (e.displayName || "Context") + ".Provider";
          case q:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case S:
            r = e._payload, e = e._init;
            try {
              return o(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function d(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var a = r.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          i
        ), l(e);
      }
    }
    function u(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === S)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = R.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, r) {
      function a() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function v() {
      var e = o(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, a, i, x, m, T, w) {
      return a = m.ref, e = {
        $$typeof: P,
        type: e,
        key: r,
        props: m,
        _owner: x
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: T
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function y(e, r, a, i, x, m, T, w) {
      var c = r.children;
      if (c !== void 0)
        if (i)
          if (ee(c)) {
            for (i = 0; i < c.length; i++)
              O(c[i]);
            Object.freeze && Object.freeze(c);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else O(c);
      if (A.call(r, "key")) {
        c = o(e);
        var p = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        i = 0 < p.length ? "{key: someKey, " + p.join(": ..., ") + ": ...}" : "{key: someKey}", I[c + i] || (p = 0 < p.length ? "{" + p.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          i,
          c,
          p,
          c
        ), I[c + i] = !0);
      }
      if (c = null, a !== void 0 && (d(a), c = "" + a), f(r) && (d(r.key), c = "" + r.key), "key" in r) {
        a = {};
        for (var N in r)
          N !== "key" && (a[N] = r[N]);
      } else a = r;
      return c && b(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        c,
        m,
        x,
        n(),
        a,
        T,
        w
      );
    }
    function O(e) {
      typeof e == "object" && e !== null && e.$$typeof === P && e._store && (e._store.validated = 1);
    }
    var _ = te, P = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), R = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, A = Object.prototype.hasOwnProperty, ee = Array.isArray, j = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var C, Y = {}, $ = _.react_stack_bottom_frame.bind(
      _,
      s
    )(), F = j(u(s)), I = {};
    h.Fragment = k, h.jsx = function(e, r, a, i, x) {
      var m = 1e4 > R.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        a,
        !1,
        i,
        x,
        m ? Error("react-stack-top-frame") : $,
        m ? j(u(e)) : F
      );
    }, h.jsxs = function(e, r, a, i, x) {
      var m = 1e4 > R.recentlyCreatedOwnerStacks++;
      return y(
        e,
        r,
        a,
        !0,
        i,
        x,
        m ? Error("react-stack-top-frame") : $,
        m ? j(u(e)) : F
      );
    };
  })()), h;
}
var L;
function oe() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? g.exports = ae() : g.exports = ne()), g.exports;
}
var t = oe();
function W({
  label: o,
  onClick: l,
  disabled: d = !1,
  type: u = "button",
  className: n = ""
}) {
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      type: u,
      onClick: l,
      disabled: d,
      className: `px-4 py-2 rounded-lg text-sm font-medium 
        bg-blue-600 text-white 
        hover:bg-blue-700 focus:outline-none active:bg-blue-800 
        disabled:opacity-60 disabled:cursor-not-allowed 
        dark:bg-blue-600 dark:hover:bg-blue-700 
        ${n}`,
      children: o
    }
  );
}
function le({
  name: o,
  price: l,
  description: d,
  image: u,
  inStock: n = !0,
  discount: s,
  onClick: f
}) {
  const b = s ? l - l * s / 100 : l;
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "w-64 rounded-xl overflow-hidden bg-white shadow-md cursor-pointer flex flex-col transition-transform duration-150 ease-in hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800",
      role: "button",
      onClick: f,
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "h-40 overflow-hidden", children: /* @__PURE__ */ t.jsx("img", { src: u, alt: o, className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ t.jsxs("div", { className: "p-3 flex flex-col gap-2", children: [
          /* @__PURE__ */ t.jsx("h3", { className: "text-base font-semibold text-gray-900 dark:text-slate-100", children: o }),
          /* @__PURE__ */ t.jsx("p", { className: "text-sm text-gray-500 dark:text-slate-300 min-h-[36px]", children: d }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-center gap-2", children: [
            n ? s ? /* @__PURE__ */ t.jsxs("div", { className: "font-semibold", children: [
              /* @__PURE__ */ t.jsxs("span", { className: "line-through text-red-500 mr-2", children: [
                "$",
                l.toFixed(2)
              ] }),
              /* @__PURE__ */ t.jsxs("span", { className: "text-green-600 dark:text-green-400", children: [
                "$",
                b.toFixed(2)
              ] })
            ] }) : /* @__PURE__ */ t.jsxs("div", { className: "font-semibold text-gray-800 dark:text-green-400", children: [
              "$",
              l.toFixed(2)
            ] }) : /* @__PURE__ */ t.jsx("span", { className: "font-semibold text-gray-400 dark:text-slate-400", children: "Out of stock" }),
            /* @__PURE__ */ t.jsx(
              W,
              {
                label: "View",
                onClick: (v) => {
                  v.stopPropagation(), f?.();
                }
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function ie({
  label: o,
  type: l = "text",
  placeholder: d,
  value: u,
  onChange: n,
  required: s,
  as: f = "input",
  options: b
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-1", children: [
    o && /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-gray-900 dark:text-slate-100", children: o }),
    f === "select" ? /* @__PURE__ */ t.jsx(
      "select",
      {
        className: "px-3 py-2 border border-gray-300 rounded-md text-sm outline-none bg-white text-gray-900 transition-all duration-200 focus:border-blue-600 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:focus:border-blue-500",
        value: String(u),
        onChange: n,
        required: s,
        children: b?.map((v) => /* @__PURE__ */ t.jsx("option", { value: v.value, children: v.label }, v.value))
      }
    ) : /* @__PURE__ */ t.jsx(
      "input",
      {
        className: "px-3 py-2 border border-gray-300 rounded-md text-sm outline-none bg-white text-gray-900 transition-all duration-200 focus:border-blue-600 dark:bg-slate-800 dark:text-slate-100 dark:border-slate-600 dark:focus:border-blue-500",
        type: l,
        placeholder: d,
        value: String(u),
        onChange: n,
        required: s
      }
    )
  ] });
}
function ce({ isOpen: o, title: l, message: d, onClose: u }) {
  return o ? /* @__PURE__ */ t.jsx(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center bg-black/40 z-50",
      onClick: u,
      children: /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: "bg-white rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.08)] w-[360px] max-w-[90%] p-6",
          onClick: (n) => n.stopPropagation(),
          children: [
            /* @__PURE__ */ t.jsx("h2", { className: "text-[18px] font-semibold mb-3", children: l }),
            /* @__PURE__ */ t.jsx("p", { className: "text-[14px] text-gray-700 mb-5", children: d }),
            /* @__PURE__ */ t.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ t.jsx(W, { label: "OK", onClick: u }) })
          ]
        }
      )
    }
  ) : null;
}
export {
  W as Button,
  ie as Input,
  ce as Modal,
  le as ProductCard
};
