import te from "react";
var j = { exports: {} }, x = {};
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
function ne() {
  if (D) return x;
  D = 1;
  var o = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function f(u, a, s) {
    var d = null;
    if (s !== void 0 && (d = "" + s), a.key !== void 0 && (d = "" + a.key), "key" in a) {
      s = {};
      for (var p in a)
        p !== "key" && (s[p] = a[p]);
    } else s = a;
    return a = s.ref, {
      $$typeof: o,
      type: u,
      key: d,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return x.Fragment = l, x.jsx = f, x.jsxs = f, x;
}
var _ = {};
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
function ae() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && (function() {
    function o(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === K ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
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
    function f(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), l(e);
      }
    }
    function u(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === A)
        return "<...>";
      try {
        var r = o(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = h.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function n() {
        C || (C = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function v() {
      var e = o(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function U(e, r, n, c, b, m, N, g) {
      return n = m.ref, e = {
        $$typeof: S,
        type: e,
        key: r,
        props: m,
        _owner: b
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: N
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: g
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function w(e, r, n, c, b, m, N, g) {
      var i = r.children;
      if (i !== void 0)
        if (c)
          if (ee(i)) {
            for (c = 0; c < i.length; c++)
              P(i[c]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(i);
      if (y.call(r, "key")) {
        i = o(e);
        var E = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        c = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", I[i + c] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          i,
          E,
          i
        ), I[i + c] = !0);
      }
      if (i = null, n !== void 0 && (f(n), i = "" + n), d(r) && (f(r.key), i = "" + r.key), "key" in r) {
        n = {};
        for (var O in r)
          O !== "key" && (n[O] = r[O]);
      } else n = r;
      return i && p(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), U(
        e,
        i,
        m,
        b,
        a(),
        n,
        N,
        g
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === S && e._store && (e._store.validated = 1);
    }
    var R = te, S = Symbol.for("react.transitional.element"), z = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), G = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), Q = Symbol.for("react.activity"), K = Symbol.for("react.client.reference"), h = R.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, ee = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    R = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var C, Y = {}, $ = R.react_stack_bottom_frame.bind(
      R,
      s
    )(), F = k(u(s)), I = {};
    _.Fragment = T, _.jsx = function(e, r, n, c, b) {
      var m = 1e4 > h.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        n,
        !1,
        c,
        b,
        m ? Error("react-stack-top-frame") : $,
        m ? k(u(e)) : F
      );
    }, _.jsxs = function(e, r, n, c, b) {
      var m = 1e4 > h.recentlyCreatedOwnerStacks++;
      return w(
        e,
        r,
        n,
        !0,
        c,
        b,
        m ? Error("react-stack-top-frame") : $,
        m ? k(u(e)) : F
      );
    };
  })()), _;
}
var L;
function oe() {
  return L || (L = 1, process.env.NODE_ENV === "production" ? j.exports = ne() : j.exports = ae()), j.exports;
}
var t = oe();
function W({
  label: o,
  onClick: l,
  disabled: f = !1,
  type: u = "button"
}) {
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      className: "custom-button",
      onClick: l,
      disabled: f,
      type: u,
      children: o
    }
  );
}
function le({
  name: o,
  price: l,
  description: f,
  image: u,
  inStock: a = !0,
  discount: s,
  onClick: d
}) {
  const p = s ? l - l * s / 100 : l;
  return /* @__PURE__ */ t.jsxs("div", { className: "product-card", role: "button", onClick: d, children: [
    /* @__PURE__ */ t.jsx("div", { className: "product-image-wrap", children: /* @__PURE__ */ t.jsx("img", { src: u, alt: o, className: "product-image" }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "product-body", children: [
      /* @__PURE__ */ t.jsx("h3", { className: "product-name", children: o }),
      /* @__PURE__ */ t.jsx("p", { className: "product-desc", children: f }),
      /* @__PURE__ */ t.jsxs("div", { className: "product-footer", children: [
        a ? s ? /* @__PURE__ */ t.jsxs("div", { className: "price", children: [
          /* @__PURE__ */ t.jsxs("span", { className: "old-price", children: [
            "$",
            l.toFixed(2)
          ] }),
          /* @__PURE__ */ t.jsxs("span", { className: "discounted", children: [
            "$",
            p.toFixed(2)
          ] })
        ] }) : /* @__PURE__ */ t.jsxs("div", { className: "price", children: [
          "$",
          l.toFixed(2)
        ] }) : /* @__PURE__ */ t.jsx("span", { className: "out-of-stock", children: "Out of stock" }),
        /* @__PURE__ */ t.jsx(
          W,
          {
            label: "View",
            onClick: (v) => {
              v.stopPropagation(), d?.();
            }
          }
        )
      ] })
    ] })
  ] });
}
function ce({
  label: o,
  type: l = "text",
  placeholder: f,
  value: u,
  onChange: a,
  required: s,
  as: d = "input",
  options: p
}) {
  return /* @__PURE__ */ t.jsxs("div", { className: "input-wrapper", children: [
    o && /* @__PURE__ */ t.jsx("label", { className: "input-label", children: o }),
    d === "select" ? /* @__PURE__ */ t.jsx(
      "select",
      {
        className: "input-field",
        value: String(u),
        onChange: a,
        required: s,
        children: p?.map((v) => /* @__PURE__ */ t.jsx("option", { value: v.value, children: v.label }, v.value))
      }
    ) : /* @__PURE__ */ t.jsx(
      "input",
      {
        className: "input-field",
        type: l,
        placeholder: f,
        value: String(u),
        onChange: a,
        required: s
      }
    )
  ] });
}
function ie({ isOpen: o, title: l, message: f, onClose: u }) {
  return o ? /* @__PURE__ */ t.jsx(
    "div",
    {
      className: "modal-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50",
      onClick: u,
      children: /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: "modal-content bg-white rounded-lg shadow-lg w-[360px] max-w-[90%] p-6",
          onClick: (a) => a.stopPropagation(),
          children: [
            /* @__PURE__ */ t.jsx("h2", { className: "modal-title text-lg font-semibold mb-3", children: l }),
            /* @__PURE__ */ t.jsx("p", { className: "modal-message text-gray-700 mb-5", children: f }),
            /* @__PURE__ */ t.jsx("div", { className: "modal-footer flex justify-end", children: /* @__PURE__ */ t.jsx(W, { label: "OK", onClick: u }) })
          ]
        }
      )
    }
  ) : null;
}
export {
  W as Button,
  ce as Input,
  ie as Modal,
  le as ProductCard
};
