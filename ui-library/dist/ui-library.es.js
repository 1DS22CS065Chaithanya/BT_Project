import te from "react";
var R = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function ae() {
  if (M) return E;
  M = 1;
  var o = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function d(u, n, s) {
    var f = null;
    if (s !== void 0 && (f = "" + s), n.key !== void 0 && (f = "" + n.key), "key" in n) {
      s = {};
      for (var x in n)
        x !== "key" && (s[x] = n[x]);
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
var L;
function ne() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case j:
          return "Fragment";
        case V:
          return "Profiler";
        case J:
          return "StrictMode";
        case X:
          return "Suspense";
        case B:
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
          case H:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Z:
            return r = e.displayName || null, r !== null ? r : o(e.type) || "Memo";
          case A:
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
        var a = r.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), l(e);
      }
    }
    function u(e) {
      if (e === j) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === A)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var e = g.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function f(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function x(e, r) {
      function a() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      a.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: a,
        configurable: !0
      });
    }
    function p() {
      var e = o(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function k(e, r, a, c, b, m, T, N) {
      return a = m.ref, e = {
        $$typeof: O,
        type: e,
        key: r,
        props: m,
        _owner: b
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: p
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
        value: N
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, r, a, c, b, m, T, N) {
      var i = r.children;
      if (i !== void 0)
        if (c)
          if (ee(i)) {
            for (c = 0; c < i.length; c++)
              S(i[c]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else S(i);
      if (C.call(r, "key")) {
        i = o(e);
        var v = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        c = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", D[i + c] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          i,
          v,
          i
        ), D[i + c] = !0);
      }
      if (i = null, a !== void 0 && (d(a), i = "" + a), f(r) && (d(r.key), i = "" + r.key), "key" in r) {
        a = {};
        for (var P in r)
          P !== "key" && (a[P] = r[P]);
      } else a = r;
      return i && x(
        a,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), k(
        e,
        i,
        m,
        b,
        n(),
        a,
        T,
        N
      );
    }
    function S(e) {
      typeof e == "object" && e !== null && e.$$typeof === O && e._store && (e._store.validated = 1);
    }
    var _ = te, O = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), G = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), X = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), g = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = Object.prototype.hasOwnProperty, ee = Array.isArray, y = console.createTask ? console.createTask : function() {
      return null;
    };
    _ = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Y, $ = {}, F = _.react_stack_bottom_frame.bind(
      _,
      s
    )(), I = y(u(s)), D = {};
    h.Fragment = j, h.jsx = function(e, r, a, c, b) {
      var m = 1e4 > g.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        a,
        !1,
        c,
        b,
        m ? Error("react-stack-top-frame") : F,
        m ? y(u(e)) : I
      );
    }, h.jsxs = function(e, r, a, c, b) {
      var m = 1e4 > g.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        a,
        !0,
        c,
        b,
        m ? Error("react-stack-top-frame") : F,
        m ? y(u(e)) : I
      );
    };
  })()), h;
}
var W;
function oe() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? R.exports = ae() : R.exports = ne()), R.exports;
}
var t = oe();
function U({
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
        bg-primary text-white 
        hover:bg-primaryHover focus:outline-none active:bg-primaryHover
        disabled:opacity-60 disabled:cursor-not-allowed 
        dark:bg-primary dark:hover:bg-primaryHover
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
  const x = s ? l - l * s / 100 : l, p = (k) => {
    k && typeof k.stopPropagation == "function" && k.stopPropagation(), f?.();
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "w-64 rounded-xl overflow-hidden bg-white shadow-md cursor-pointer flex flex-col transition-transform duration-150 ease-in hover:-translate-y-1 hover:shadow-lg dark:bg-slate-800",
      role: "button",
      onClick: f,
      children: [
        /* @__PURE__ */ t.jsx("div", { className: "h-40 overflow-hidden", children: /* @__PURE__ */ t.jsx("img", { src: u, alt: o, className: "w-full h-full object-cover" }) }),
        /* @__PURE__ */ t.jsxs("div", { className: "p-3 flex flex-col gap-2", children: [
          /* @__PURE__ */ t.jsx("h3", { className: "text-base font-semibold text-black dark:text-onPrimary", children: o }),
          /* @__PURE__ */ t.jsx("p", { className: "text-sm text-textSecondary dark:text-onPrimary min-h-[36px]", children: d }),
          /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-center gap-2", children: [
            n ? s ? /* @__PURE__ */ t.jsxs("div", { className: "font-semibold", children: [
              /* @__PURE__ */ t.jsxs("span", { className: "line-through text-red-500 mr-2", children: [
                "$",
                l.toFixed(2)
              ] }),
              /* @__PURE__ */ t.jsxs("span", { className: "text-success dark:text-success", children: [
                "$",
                x.toFixed(2)
              ] })
            ] }) : /* @__PURE__ */ t.jsxs("div", { className: "font-semibold text-textPrimary dark:text-success", children: [
              "$",
              l.toFixed(2)
            ] }) : /* @__PURE__ */ t.jsx("span", { className: "font-semibold text-textSecondary dark:text-slate-400", children: "Out of stock" }),
            /* @__PURE__ */ t.jsx(U, { label: "View", onClick: p })
          ] })
        ] })
      ]
    }
  );
}
function ce({
  label: o,
  type: l = "text",
  placeholder: d,
  value: u,
  onChange: n,
  required: s,
  as: f = "input",
  options: x
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col gap-1", children: [
    o && /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium text-textPrimary dark:text-onPrimary", children: o }),
    f === "select" ? /* @__PURE__ */ t.jsx(
      "select",
      {
        className: "px-3 py-2 border border-background rounded-md text-sm outline-none bg-background text-textPrimary transition-all duration-200 focus:border-primary dark:text-black dark:text-onPrimary dark:border-textSecondary dark:focus:border-primary",
        value: String(u),
        onChange: n,
        required: s,
        children: x?.map((p) => /* @__PURE__ */ t.jsx("option", { value: p.value, children: p.label }, p.value))
      }
    ) : /* @__PURE__ */ t.jsx(
      "input",
      {
        "data-testid": "input",
        className: "px-3 py-2 border border-background rounded-md text-sm outline-none bg-background text-black transition-all duration-200 focus:border-primary dark:bg-black dark:text-onPrimary dark:border-textSecondary dark:focus:border-primary",
        type: l,
        placeholder: d,
        value: String(u),
        onChange: n,
        required: s
      }
    )
  ] });
}
function ie({ isOpen: o, title: l, message: d, onClose: u }) {
  return o ? /* @__PURE__ */ t.jsx(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center bg-black/40 z-50",
      onClick: u,
      children: /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: "bg-background rounded-xl shadow-[0_6px_18px_rgba(0,0,0,0.08)] w-[360px] max-w-[90%] p-6",
          onClick: (n) => n.stopPropagation(),
          children: [
            /* @__PURE__ */ t.jsx("h2", { className: "text-[18px] font-semibold mb-3", children: l }),
            /* @__PURE__ */ t.jsx("p", { className: "text-[14px] text-textSecondary mb-5", children: d }),
            /* @__PURE__ */ t.jsx("div", { className: "flex justify-end", children: /* @__PURE__ */ t.jsx(U, { label: "OK", onClick: u }) })
          ]
        }
      )
    }
  ) : null;
}
export {
  U as Button,
  le as Card,
  ce as Input,
  ie as Modal
};
