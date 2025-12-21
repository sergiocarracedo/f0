import { L as yo, C as ta, c as X, a as rn, u as bo, m as nn, i as Dt, B as on, O as ia, p as ra, w as xo, S as je, b as na, F as wo, d as oa, A as sa, D as aa, e as la, f as Be, g as ca, h as ze, j as re, k as we, l as kt, T as sn, n as q, o as Ir, q as ne, r as Z, s as fe, t as an, v as $r, x as sr, y as jr, z as ie, E as Y, G as ln, H as mt, I as ar, J as gi, K as ii, M as lr, N as cn, P as ua, Q as Di, R as Ii, U as da, V as Pr, W as Dr, X as un, Y as dn, Z as ha, _ as fa, $ as pa, a0 as _o, a1 as cr, a2 as Eo, a3 as Co, a4 as Ao, a5 as Rt, a6 as Ri, a7 as ma, a8 as ga, a9 as va, aa as ya, ab as ba, ac as vi, ad as ur, ae as yi, af as xa, ag as wa, ah as _a, ai as ut, aj as Ea, ak as Ca, al as Ft, am as pe, an as me, ao as Ht, ap as Wt, aq as dr, ar as hr, as as Aa, at as Oa, au as Sa, av as ka, aw as Pa, ax as Da, ay as Ra, az as Na, aA as Mn, aB as Ta, aC as za, aD as Oo, aE as La, aF as $i, aG as So, aH as ko, aI as Ma, aJ as Po, aK as Do, aL as Ro, aM as Ia, aN as $a, aO as No, aP as ja, aQ as Ba, aR as Fa, aS as Ha, aT as Wa, aU as Ga, aV as To, aW as Nt, aX as zo, aY as Ua, aZ as Ka, a_ as In, a$ as Va, b0 as Lo, b1 as Xa, b2 as Ya, b3 as qa, b4 as Ja, b5 as Za, b6 as Qa, b7 as el, b8 as tl, b9 as il, ba as rl, bb as nl, bc as ol } from "./hooks-lyvIqiQ1.js";
import { bG as tp, bT as ip, b$ as rp, bd as np, be as op, bf as sp, bg as ap, bh as lp, bi as cp, bj as up, bk as dp, bm as hp, bn as fp, bo as pp, bp as mp, bq as gp, br as vp, bs as yp, bX as bp, bu as xp, bv as wp, bz as _p, bA as Ep, bB as Cp, bD as Ap, bE as Op, bF as Sp, bI as kp, bx as Pp, bH as Dp, by as Rp, bC as Np, bY as Tp, bS as zp, bN as Lp, bQ as Mp, bM as Ip, c0 as $p, bL as jp, bK as Bp, bl as Fp, bt as Hp, bw as Wp, bJ as Gp, bO as Up, bU as Kp, bV as Vp, bW as Xp, c1 as Yp, bP as qp, b_ as Jp, bR as Zp, bZ as Qp } from "./hooks-lyvIqiQ1.js";
import { jsx as p, jsxs as T, Fragment as lt } from "react/jsx-runtime";
import k, { forwardRef as _e, useRef as I, useImperativeHandle as sl, Children as ji, createContext as Ye, useContext as We, useState as F, useMemo as j, useEffect as $, useCallback as J, useLayoutEffect as Br, createElement as $n, isValidElement as Mo, Fragment as al, memo as ll, useReducer as cl, cloneElement as ul, PureComponent as fr, Component as dl } from "react";
import { createPortal as Io, unstable_batchedUpdates as Ni } from "react-dom";
import { defaultTranslations as tm } from "./i18n-provider-defaults.js";
import './f0.css';const hl = {
  xs: 1,
  sm: 2,
  md: 2,
  lg: 2
}, fl = _e(function({ widgets: e, children: t }, i) {
  const n = I(null);
  sl(i, () => n.current);
  const o = ji.toArray(e).filter((s) => !!s).map((s, a) => p("div", {
    className: "h-full @5xl:h-auto [&>div]:h-full",
    children: s
  }, a));
  return p(yo, {
    layout: "home",
    children: T("div", {
      ref: n,
      className: "@container",
      children: [T("div", {
        className: "flex flex-col gap-6 px-5 pt-4 @md:pt-2 @5xl:hidden",
        children: [p(ta, {
          columns: hl,
          showArrows: !1,
          children: o
        }), p("main", {
          children: t
        })]
      }), T("div", {
        className: "hidden grid-cols-3 gap-5 px-6 pb-6 pt-2 @5xl:grid",
        children: [p("div", {
          className: "col-span-3 flex flex-row gap-5 *:flex-1",
          children: o.slice(0, 3)
        }), p("main", {
          className: "col-span-2",
          children: t
        }), p("div", {
          className: "flex flex-1 flex-col gap-5",
          children: o.slice(3)
        })]
      })]
    })
  });
}), pl = _e(function({ children: e, sideContent: t, mainColumnPosition: i = "left", sticky: n = !1 }, o) {
  return p("div", {
    ref: o,
    className: "h-full",
    children: T("div", {
      className: X("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", n && "md:sticky md:top-0 md:max-h-full"),
      children: [p("main", {
        className: X("sm:min-h-xs order-2 h-fit border-0 px-4 py-5 sm:flex-1 sm:border-solid md:order-2 md:px-6", n ? "md:h-full md:max-h-full md:overflow-y-auto" : "min-h-full", i === "right" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: e
      }), p(ml, {
        sticky: n,
        className: X("order-1", i === "right" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), ml = ({ children: r, className: e }) => p("aside", {
  className: X("min-w-30 py-5 pl-4 pr-4 sm:basis-1/4 sm:pb-6 md:max-w-80 md:pl-2", e),
  children: r
}), gl = rn({
  base: "relative flex min-h-full w-full flex-1 flex-col gap-4 place-self-center overflow-y-auto px-6 py-5",
  variants: {
    variant: {
      narrow: "max-w-screen-lg"
    }
  }
}), $o = k.forwardRef(({ children: r, variant: e, className: t, ...i }, n) => p(yo, {
  layout: "standard",
  children: p("section", {
    ref: n,
    className: X("relative flex-1 overflow-auto", t),
    ...i,
    children: p("div", {
      className: X(gl({
        variant: e
      })),
      children: r
    })
  })
}));
$o.displayName = "StandardLayout";
const jo = Ye(null);
function Bo() {
  const r = We(jo);
  if (!r)
    throw new Error(
      "useGridStackContext must be used within a GridStackProvider"
    );
  return r;
}
function vl(r) {
  const { content: e, ...t } = r;
  return e !== void 0 ? {
    ...t,
    //To avoid and issue with GridStack's deepClone, we need to set _originalContent to null
    _originalContent: null,
    content: () => document.createElement("div")
  } : t;
}
function At(r) {
  const e = vl(r);
  return r.subGridOpts?.children && (e.subGridOpts = {
    ...r.subGridOpts,
    children: r.subGridOpts.children.map(
      (t) => At(t)
    )
  }), e;
}
const yl = ["noMove", "noResize", "locked", "w", "h", "x", "y"], nt = 200;
function bl(r) {
  const e = r.cloneNode(!0);
  return r.querySelectorAll("canvas").forEach((i) => {
    if (i.width > 0 && i.height > 0)
      try {
        const n = i.toDataURL("image/png"), o = e.querySelectorAll("canvas"), s = Array.from(r.querySelectorAll("canvas")).indexOf(i), a = o[s];
        if (a && a.parentElement) {
          const c = document.createElement("img");
          c.src = n, c.style.width = `${i.width}px`, c.style.height = `${i.height}px`, c.style.display = "block", i.className && (c.className = i.className), i.id && (c.id = i.id), a.parentElement.replaceChild(c, a);
        }
      } catch (n) {
        console.warn("Failed to convert canvas to image:", n);
      }
  }), e.innerHTML;
}
function xl({ children: r, options: e, onResizeStop: t, onChange: i, widgets: n }) {
  const [o, s] = F(null), a = I(null), c = I(!1), u = j(() => ({
    ...e,
    children: (n || []).map((v) => At(v))
  }), [e, n]), [l, d] = F(() => {
    const v = /* @__PURE__ */ new Map(), E = n || [], b = (w) => {
      w.id && w.content && v.set(w.id, w.content), w.subGridOpts?.children && w.subGridOpts.children.forEach((C) => {
        b(C);
      });
    };
    return E.forEach((w) => {
      b(w);
    }), v;
  }), h = I(l);
  $(() => {
    h.current = l;
  }, [l]);
  const [f, g] = F(() => {
    const v = /* @__PURE__ */ new Map(), E = n || [], b = (w) => {
      w.id && w._originalContent !== void 0 && v.set(w.id, w._originalContent), w.subGridOpts?.children && w.subGridOpts.children.forEach((C) => {
        b(C);
      });
    };
    return E.forEach((w) => {
      b(w);
    }), v;
  }), m = I(f);
  $(() => {
    m.current = f;
  }, [f]);
  const [y, x] = F(() => {
    const v = /* @__PURE__ */ new Map(), E = n || [], b = (w) => {
      if (w.id) {
        const C = At(w);
        v.set(w.id, C);
      }
      w.subGridOpts?.children && w.subGridOpts.children.forEach((C) => {
        b(C);
      });
    };
    return E.forEach((w) => {
      b(w);
    }), v;
  });
  bo(() => {
    if (!o) return;
    const v = o.save();
    if (!Array.isArray(v))
      return;
    const E = v.map((D) => D.id), b = n || [], w = b.map((D) => D.id), C = b.filter((D) => !E.includes(D.id));
    C.length > 0 && (C.forEach((D) => {
      D.content && h.current.set(D.id, D.content), D._originalContent !== void 0 && m.current.set(D.id, D._originalContent);
    }), C.forEach((D) => {
      const S = At(D);
      o.addWidget(S);
    }), x((D) => {
      const S = new Map(D);
      return C.forEach((P) => {
        const R = At(P);
        S.set(P.id, R);
      }), S;
    }), d((D) => {
      const S = new Map(D);
      return C.forEach((P) => {
        P.content && S.set(P.id, P.content);
      }), S;
    }), g((D) => {
      const S = new Map(D);
      return C.forEach((P) => {
        P._originalContent !== void 0 && S.set(P.id, P._originalContent);
      }), S;
    }));
    const O = v.filter((D) => !w.includes(D.id));
    if (O.length > 0) {
      const D = O.map((S) => S.id).filter(Boolean);
      D.forEach((S) => {
        setTimeout(() => {
          h.current.delete(S), m.current.delete(S);
        }, nt);
      }), O.forEach((S) => {
        const P = o.el.querySelector(`[gs-id="${S.id}"]`);
        P && setTimeout(() => {
          o.removeWidget(P, !0);
        }, nt);
      }), x((S) => {
        const P = new Map(S);
        return D.forEach((R) => {
          setTimeout(() => {
            P.delete(R);
          }, nt);
        }), P;
      }), d((S) => {
        const P = new Map(S);
        return D.forEach((R) => {
          if (P.get(R)) {
            const U = o.el.querySelector(`[gs-id="${R}"] .grid-stack-item-content`);
            let H = "";
            U && (H = bl(U)), P.set(R, p(nn.div, {
              className: "h-full w-full",
              initial: {
                opacity: 1,
                scale: 1,
                filter: "blur(0px)"
              },
              animate: {
                opacity: 0,
                scale: 0.85,
                filter: "blur(14px)"
              },
              exit: {
                opacity: 0,
                scale: 0.85,
                filter: "blur(14px)"
              },
              transition: {
                opacity: {
                  duration: nt / 1e3,
                  ease: [0.32, 0, 0.67, 0]
                },
                scale: {
                  duration: nt / 1e3,
                  ease: [0.65, 0, 0.35, 1]
                },
                filter: {
                  duration: nt / 1e3,
                  ease: "linear"
                }
              },
              dangerouslySetInnerHTML: {
                __html: H
              }
            }));
          }
          setTimeout(() => {
            P.delete(R);
          }, nt);
        }), P;
      }), g((S) => {
        const P = new Map(S);
        return D.forEach((R) => {
          setTimeout(() => {
            P.delete(R);
          }, nt);
        }), P;
      });
    }
    const N = b.filter((D) => E.includes(D.id));
    if (N.length > 0) {
      const D = [];
      N.forEach((S) => {
        const P = v.find((M) => M.id === S.id);
        if (!P)
          return;
        const R = yl.filter((M) => P[M] !== S[M]);
        if (R.length > 0) {
          const M = {}, U = ["w", "h", "x", "y"], H = ["noMove", "noResize", "locked"], V = R.filter((G) => U.includes(G)), le = R.filter((G) => H.includes(G));
          if (V.length > 0 && le.length > 0 && V.length + le.length === R.length ? le.forEach((G) => {
            const Pe = S[G];
            Pe !== void 0 && (M[G] = Pe);
          }) : R.forEach((G) => {
            const Pe = S[G];
            Pe !== void 0 && (M[G] = Pe);
          }), Object.keys(M).length > 0) {
            const G = o.el.querySelector(`[gs-id="${S.id}"]`);
            G && D.push({
              id: S.id,
              element: G,
              updateOptions: M
            });
          }
        }
      }), N.forEach((S) => {
        S.content && h.current.set(S.id, S.content), S._originalContent !== void 0 && m.current.set(S.id, S._originalContent);
      }), D.forEach(({ element: S, updateOptions: P }) => {
        try {
          o.update(S, P);
        } catch (R) {
          console.warn("Error updating widget:", R);
        }
      }), x((S) => {
        const P = new Map(S);
        return N.forEach((R) => {
          const M = At(R);
          P.set(R.id, M);
        }), P;
      }), d((S) => {
        const P = new Map(S);
        return N.forEach((R) => {
          R.content && P.set(R.id, R.content);
        }), P;
      }), g((S) => {
        const P = new Map(S);
        return N.forEach((R) => {
          R._originalContent !== void 0 && P.set(R.id, R._originalContent);
        }), P;
      });
    }
    c.current || (c.current = !0);
  }, [n]), $(() => {
    if (!o || !u.handle) return;
    o.opts && (o.opts.handle = u.handle);
    const v = setTimeout(() => {
      if (o && o.el && u.handle && o.el.querySelectorAll(u.handle).length > 0)
        try {
          !o.opts?.disableResize && (o.disable(!1), o.enable(!1));
        } catch {
        }
    }, 0);
    return () => clearTimeout(v);
  }, [o, u.handle, u.children]);
  const _ = J(() => {
    if (!o)
      return;
    const v = o.save();
    if (Array.isArray(v)) {
      const E = v.map((b) => {
        const w = b.id;
        if (!w) return null;
        const C = h.current.get(w), O = m.current.get(w), N = b;
        return {
          ...b,
          id: w,
          w: b.w ?? 1,
          h: b.h ?? 1,
          x: b.x ?? 0,
          y: b.y ?? 0,
          meta: N.meta,
          _originalContent: O,
          content: C ?? p("div", {
            children: "No content"
          })
        };
      }).filter((b) => b !== null);
      i?.(E);
    }
  }, [o]);
  return $(() => {
    if (!o || !o.el || !o.el.parentElement)
      return;
    const v = (E, b) => {
      t?.(E, b);
    };
    try {
      o.on("resizestop", v), o.on("change added removed", _);
    } catch (E) {
      console.error("Error attaching GridStack event listeners:", E);
      return;
    }
    return () => {
      const E = a.current;
      if (E && E.el)
        try {
          E.off("resizestop"), E.off("change added removed");
        } catch (b) {
          console.warn("Error cleaning up GridStack event listeners:", b);
        }
    };
  }, [o, t, _]), $(() => {
    a.current = o;
  }, [o]), $(() => {
    o && o.el && o.el.parentElement && c.current && _();
  }, [o]), p(jo.Provider, {
    value: {
      options: u,
      gridStack: o,
      _gridStack: {
        value: o,
        set: s
      },
      _rawWidgetMetaMap: {
        value: y,
        set: x
      },
      _reactContentMap: {
        value: l,
        set: d
      }
    },
    children: r
  });
}
const Fo = Ye(null);
function wl() {
  const r = We(Fo);
  if (!r)
    throw new Error(
      "useGridStackRenderContext must be used within a GridStackProvider"
    );
  return r;
}
const _l = Ye(null);
function El() {
  const { _reactContentMap: r } = Bo(), { getWidgetContainer: e } = wl();
  return p(lt, {
    children: Array.from(r.value.entries()).map(([t, i]) => {
      const n = e(t);
      return n ? p(_l.Provider, {
        value: {
          widget: {
            id: t
          }
        },
        children: i && Io(i, n)
      }, t) : (console.error(`Widget container not found for widget ${t}`), null);
    })
  });
}
function Cl(r, e, t, i, n) {
  const o = (...s) => (console.warn("gridstack.js: Function `" + t + "` is deprecated in " + n + " and has been replaced with `" + i + "`. It will be **removed** in a future release"), e.apply(r, s));
  return o.prototype = e.prototype, o;
}
class A {
  /**
   * Convert a potential selector into an actual list of HTML elements.
   * Supports CSS selectors, element references, and special ID handling.
   *
   * @param els selector string, HTMLElement, or array of elements
   * @param root optional root element to search within (defaults to document, useful for shadow DOM)
   * @returns array of HTML elements matching the selector
   *
   * @example
   * const elements = Utils.getElements('.grid-item');
   * const byId = Utils.getElements('#myWidget');
   * const fromShadow = Utils.getElements('.item', shadowRoot);
   */
  static getElements(e, t = document) {
    if (typeof e == "string") {
      const i = "getElementById" in t ? t : void 0;
      if (i && !isNaN(+e[0])) {
        const o = i.getElementById(e);
        return o ? [o] : [];
      }
      let n = t.querySelectorAll(e);
      return !n.length && e[0] !== "." && e[0] !== "#" && (n = t.querySelectorAll("." + e), n.length || (n = t.querySelectorAll("#" + e))), Array.from(n);
    }
    return [e];
  }
  /**
   * Convert a potential selector into a single HTML element.
   * Similar to getElements() but returns only the first match.
   *
   * @param els selector string or HTMLElement
   * @param root optional root element to search within (defaults to document)
   * @returns the first HTML element matching the selector, or null if not found
   *
   * @example
   * const element = Utils.getElement('#myWidget');
   * const first = Utils.getElement('.grid-item');
   */
  static getElement(e, t = document) {
    if (typeof e == "string") {
      const i = "getElementById" in t ? t : void 0;
      if (!e.length)
        return null;
      if (i && e[0] === "#")
        return i.getElementById(e.substring(1));
      if (e[0] === "#" || e[0] === "." || e[0] === "[")
        return t.querySelector(e);
      if (i && !isNaN(+e[0]))
        return i.getElementById(e);
      let n = t.querySelector(e);
      return i && !n && (n = i.getElementById(e)), n || (n = t.querySelector("." + e)), n;
    }
    return e;
  }
  /**
   * Check if a widget should be lazy loaded based on node or grid settings.
   *
   * @param n the grid node to check
   * @returns true if the item should be lazy loaded
   *
   * @example
   * if (Utils.lazyLoad(node)) {
   *   // Set up intersection observer for lazy loading
   * }
   */
  static lazyLoad(e) {
    return e.lazyLoad || e.grid?.opts?.lazyLoad && e.lazyLoad !== !1;
  }
  /**
   * Create a div element with the specified CSS classes.
   *
   * @param classes array of CSS class names to add
   * @param parent optional parent element to append the div to
   * @returns the created div element
   *
   * @example
   * const div = Utils.createDiv(['grid-item', 'draggable']);
   * const nested = Utils.createDiv(['content'], parentDiv);
   */
  static createDiv(e, t) {
    const i = document.createElement("div");
    return e.forEach((n) => {
      n && i.classList.add(n);
    }), t?.appendChild(i), i;
  }
  /**
   * Check if a widget should resize to fit its content.
   *
   * @param n the grid node to check (can be undefined)
   * @param strict if true, only returns true for explicit sizeToContent:true (not numbers)
   * @returns true if the widget should resize to content
   *
   * @example
   * if (Utils.shouldSizeToContent(node)) {
   *   // Trigger content-based resizing
   * }
   */
  static shouldSizeToContent(e, t = !1) {
    return e?.grid && (t ? e.sizeToContent === !0 || e.grid.opts.sizeToContent === !0 && e.sizeToContent === void 0 : !!e.sizeToContent || e.grid.opts.sizeToContent && e.sizeToContent !== !1);
  }
  /**
   * Check if two grid positions overlap/intersect.
   *
   * @param a first position with x, y, w, h properties
   * @param b second position with x, y, w, h properties
   * @returns true if the positions overlap
   *
   * @example
   * const overlaps = Utils.isIntercepted(
   *   {x: 0, y: 0, w: 2, h: 1},
   *   {x: 1, y: 0, w: 2, h: 1}
   * ); // true - they overlap
   */
  static isIntercepted(e, t) {
    return !(e.y >= t.y + t.h || e.y + e.h <= t.y || e.x + e.w <= t.x || e.x >= t.x + t.w);
  }
  /**
   * Check if two grid positions are touching (edges or corners).
   *
   * @param a first position
   * @param b second position
   * @returns true if the positions are touching
   *
   * @example
   * const touching = Utils.isTouching(
   *   {x: 0, y: 0, w: 2, h: 1},
   *   {x: 2, y: 0, w: 1, h: 1}
   * ); // true - they share an edge
   */
  static isTouching(e, t) {
    return A.isIntercepted(e, { x: t.x - 0.5, y: t.y - 0.5, w: t.w + 1, h: t.h + 1 });
  }
  /**
   * Calculate the overlapping area between two grid positions.
   *
   * @param a first position
   * @param b second position
   * @returns the area of overlap (0 if no overlap)
   *
   * @example
   * const overlap = Utils.areaIntercept(
   *   {x: 0, y: 0, w: 3, h: 2},
   *   {x: 1, y: 0, w: 3, h: 2}
   * ); // returns 4 (2x2 overlap)
   */
  static areaIntercept(e, t) {
    const i = e.x > t.x ? e.x : t.x, n = e.x + e.w < t.x + t.w ? e.x + e.w : t.x + t.w;
    if (n <= i)
      return 0;
    const o = e.y > t.y ? e.y : t.y, s = e.y + e.h < t.y + t.h ? e.y + e.h : t.y + t.h;
    return s <= o ? 0 : (n - i) * (s - o);
  }
  /**
   * Calculate the total area of a grid position.
   *
   * @param a position with width and height
   * @returns the total area (width * height)
   *
   * @example
   * const area = Utils.area({x: 0, y: 0, w: 3, h: 2}); // returns 6
   */
  static area(e) {
    return e.w * e.h;
  }
  /**
   * Sort an array of grid nodes by position (y first, then x).
   *
   * @param nodes array of nodes to sort
   * @param dir sort direction: 1 for ascending (top-left first), -1 for descending
   * @returns the sorted array (modifies original)
   *
   * @example
   * const sorted = Utils.sort(nodes); // Sort top-left to bottom-right
   * const reverse = Utils.sort(nodes, -1); // Sort bottom-right to top-left
   */
  static sort(e, t = 1) {
    return e.sort((n, o) => {
      const s = t * ((n.y ?? 1e4) - (o.y ?? 1e4));
      return s === 0 ? t * ((n.x ?? 1e4) - (o.x ?? 1e4)) : s;
    });
  }
  /**
   * Find a grid node by its ID.
   *
   * @param nodes array of nodes to search
   * @param id the ID to search for
   * @returns the node with matching ID, or undefined if not found
   *
   * @example
   * const node = Utils.find(nodes, 'widget-1');
   * if (node) console.log('Found node at:', node.x, node.y);
   */
  static find(e, t) {
    return t ? e.find((i) => i.id === t) : void 0;
  }
  /**
   * Convert various value types to boolean.
   * Handles strings like 'false', 'no', '0' as false.
   *
   * @param v value to convert
   * @returns boolean representation
   *
   * @example
   * Utils.toBool('true');  // true
   * Utils.toBool('false'); // false
   * Utils.toBool('no');    // false
   * Utils.toBool('1');     // true
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static toBool(e) {
    return typeof e == "boolean" ? e : typeof e == "string" ? (e = e.toLowerCase(), !(e === "" || e === "no" || e === "false" || e === "0")) : !!e;
  }
  /**
   * Convert a string value to a number, handling null and empty strings.
   *
   * @param value string or null value to convert
   * @returns number value, or undefined for null/empty strings
   *
   * @example
   * Utils.toNumber('42');  // 42
   * Utils.toNumber('');    // undefined
   * Utils.toNumber(null);  // undefined
   */
  static toNumber(e) {
    return e === null || e.length === 0 ? void 0 : Number(e);
  }
  /**
   * Parse a height value with units into numeric value and unit string.
   * Supports px, em, rem, vh, vw, %, cm, mm units.
   *
   * @param val height value as number or string with units
   * @returns object with h (height) and unit properties
   *
   * @example
   * Utils.parseHeight('100px');  // {h: 100, unit: 'px'}
   * Utils.parseHeight('2rem');   // {h: 2, unit: 'rem'}
   * Utils.parseHeight(50);       // {h: 50, unit: 'px'}
   */
  static parseHeight(e) {
    let t, i = "px";
    if (typeof e == "string")
      if (e === "auto" || e === "")
        t = 0;
      else {
        const n = e.match(/^(-[0-9]+\.[0-9]+|[0-9]*\.[0-9]+|-[0-9]+|[0-9]+)(px|em|rem|vh|vw|%|cm|mm)?$/);
        if (!n)
          throw new Error(`Invalid height val = ${e}`);
        i = n[2] || "px", t = parseFloat(n[1]);
      }
    else
      t = e;
    return { h: t, unit: i };
  }
  /**
   * Copy unset fields from source objects to target object (shallow merge with defaults).
   * Similar to Object.assign but only sets undefined/null fields.
   *
   * @param target the object to copy defaults into
   * @param sources one or more source objects to copy defaults from
   * @returns the modified target object
   *
   * @example
   * const config = { width: 100 };
   * Utils.defaults(config, { width: 200, height: 50 });
   * // config is now { width: 100, height: 50 }
   */
  // eslint-disable-next-line
  static defaults(e, ...t) {
    return t.forEach((i) => {
      for (const n in i) {
        if (!i.hasOwnProperty(n))
          return;
        e[n] === null || e[n] === void 0 ? e[n] = i[n] : typeof i[n] == "object" && typeof e[n] == "object" && A.defaults(e[n], i[n]);
      }
    }), e;
  }
  /**
   * Compare two objects for equality (shallow comparison).
   * Checks if objects have the same fields and values at one level deep.
   *
   * @param a first object to compare
   * @param b second object to compare
   * @returns true if objects have the same values
   *
   * @example
   * Utils.same({x: 1, y: 2}, {x: 1, y: 2}); // true
   * Utils.same({x: 1}, {x: 1, y: 2}); // false
   */
  static same(e, t) {
    if (typeof e != "object")
      return e == t;
    if (typeof e != typeof t || Object.keys(e).length !== Object.keys(t).length)
      return !1;
    for (const i in e)
      if (e[i] !== t[i])
        return !1;
    return !0;
  }
  /**
   * Copy position and size properties from one widget to another.
   * Copies x, y, w, h and optionally min/max constraints.
   *
   * @param a target widget to copy to
   * @param b source widget to copy from
   * @param doMinMax if true, also copy min/max width/height constraints
   * @returns the target widget (a)
   *
   * @example
   * Utils.copyPos(widget1, widget2); // Copy position/size
   * Utils.copyPos(widget1, widget2, true); // Also copy constraints
   */
  static copyPos(e, t, i = !1) {
    return t.x !== void 0 && (e.x = t.x), t.y !== void 0 && (e.y = t.y), t.w !== void 0 && (e.w = t.w), t.h !== void 0 && (e.h = t.h), i && (t.minW && (e.minW = t.minW), t.minH && (e.minH = t.minH), t.maxW && (e.maxW = t.maxW), t.maxH && (e.maxH = t.maxH)), e;
  }
  /** true if a and b has same size & position */
  static samePos(e, t) {
    return e && t && e.x === t.x && e.y === t.y && (e.w || 1) === (t.w || 1) && (e.h || 1) === (t.h || 1);
  }
  /** given a node, makes sure it's min/max are valid */
  static sanitizeMinMax(e) {
    e.minW || delete e.minW, e.minH || delete e.minH, e.maxW || delete e.maxW, e.maxH || delete e.maxH;
  }
  /** removes field from the first object if same as the second objects (like diffing) and internal '_' for saving */
  static removeInternalAndSame(e, t) {
    if (!(typeof e != "object" || typeof t != "object"))
      for (let i in e) {
        const n = e[i], o = t[i];
        i[0] === "_" || n === o ? delete e[i] : n && typeof n == "object" && o !== void 0 && (A.removeInternalAndSame(n, o), Object.keys(n).length || delete e[i]);
      }
  }
  /** removes internal fields '_' and default values for saving */
  static removeInternalForSave(e, t = !0) {
    for (let i in e)
      (i[0] === "_" || e[i] === null || e[i] === void 0) && delete e[i];
    delete e.grid, t && delete e.el, e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, e.locked || delete e.locked, (e.w === 1 || e.w === e.minW) && delete e.w, (e.h === 1 || e.h === e.minH) && delete e.h;
  }
  /** return the closest parent (or itself) matching the given class */
  // static closestUpByClass(el: HTMLElement, name: string): HTMLElement {
  //   while (el) {
  //     if (el.classList.contains(name)) return el;
  //     el = el.parentElement
  //   }
  //   return null;
  // }
  /** delay calling the given function for given delay, preventing new calls from happening while waiting */
  static throttle(e, t) {
    let i = !1;
    return (...n) => {
      i || (i = !0, setTimeout(() => {
        e(...n), i = !1;
      }, t));
    };
  }
  static removePositioningStyles(e) {
    const t = e.style;
    t.position && t.removeProperty("position"), t.left && t.removeProperty("left"), t.top && t.removeProperty("top"), t.width && t.removeProperty("width"), t.height && t.removeProperty("height");
  }
  /** @internal returns the passed element if scrollable, else the closest parent that will, up to the entire document scrolling element */
  static getScrollElement(e) {
    if (!e)
      return document.scrollingElement || document.documentElement;
    const t = getComputedStyle(e);
    return /(auto|scroll)/.test(t.overflow + t.overflowY) ? e : A.getScrollElement(e.parentElement);
  }
  /** @internal */
  static updateScrollPosition(e, t, i) {
    const n = A.getScrollElement(e);
    if (!n)
      return;
    const o = e.getBoundingClientRect(), s = n.getBoundingClientRect(), a = window.innerHeight || document.documentElement.clientHeight, c = o.bottom - Math.min(s.bottom, a), u = o.top - Math.max(s.top, 0), l = n.scrollTop;
    u < 0 && i < 0 ? e.offsetHeight > s.height ? n.scrollTop += i : n.scrollTop += Math.abs(u) > Math.abs(i) ? i : u : c > 0 && i > 0 && (e.offsetHeight > s.height ? n.scrollTop += i : n.scrollTop += c > i ? i : c), t.top += n.scrollTop - l;
  }
  /**
   * @internal Function used to scroll the page.
   *
   * @param event `MouseEvent` that triggers the resize
   * @param el `HTMLElement` that's being resized
   * @param distance Distance from the V edges to start scrolling
   */
  static updateScrollResize(e, t, i) {
    const n = A.getScrollElement(t), o = n.clientHeight, s = n === A.getScrollElement() ? 0 : n.getBoundingClientRect().top, a = e.clientY - s, c = a < i, u = a > o - i;
    c ? n.scrollBy({ behavior: "smooth", top: a - i }) : u && n.scrollBy({ behavior: "smooth", top: i - (o - a) });
  }
  /** single level clone, returning a new object with same top fields. This will share sub objects and arrays */
  static clone(e) {
    return e == null || typeof e != "object" ? e : e instanceof Array ? [...e] : { ...e };
  }
  /**
   * Recursive clone version that returns a full copy, checking for nested objects and arrays ONLY.
   * Note: this will use as-is any key starting with double __ (and not copy inside) some lib have circular dependencies.
   */
  static cloneDeep(e) {
    const t = ["parentGrid", "el", "grid", "subGrid", "engine"], i = A.clone(e);
    for (const n in i)
      i.hasOwnProperty(n) && typeof i[n] == "object" && n.substring(0, 2) !== "__" && !t.find((o) => o === n) && (i[n] = A.cloneDeep(e[n]));
    return i;
  }
  /** deep clone the given HTML node, removing teh unique id field */
  static cloneNode(e) {
    const t = e.cloneNode(!0);
    return t.removeAttribute("id"), t;
  }
  static appendTo(e, t) {
    let i;
    typeof t == "string" ? i = A.getElement(t) : i = t, i && i.appendChild(e);
  }
  // public static setPositionRelative(el: HTMLElement): void {
  //   if (!(/^(?:r|a|f)/).test(getComputedStyle(el).position)) {
  //     el.style.position = "relative";
  //   }
  // }
  static addElStyles(e, t) {
    if (t instanceof Object)
      for (const i in t)
        t.hasOwnProperty(i) && (Array.isArray(t[i]) ? t[i].forEach((n) => {
          e.style[i] = n;
        }) : e.style[i] = t[i]);
  }
  static initEvent(e, t) {
    const i = { type: t.type }, n = {
      button: 0,
      which: 0,
      buttons: 1,
      bubbles: !0,
      cancelable: !0,
      target: t.target ? t.target : e.target
    };
    return ["altKey", "ctrlKey", "metaKey", "shiftKey"].forEach((o) => i[o] = e[o]), ["pageX", "pageY", "clientX", "clientY", "screenX", "screenY"].forEach((o) => i[o] = e[o]), { ...i, ...n };
  }
  /** copies the MouseEvent (or convert Touch) properties and sends it as another event to the given target */
  static simulateMouseEvent(e, t, i) {
    const n = e, o = new MouseEvent(t, {
      bubbles: !0,
      composed: !0,
      cancelable: !0,
      view: window,
      detail: 1,
      screenX: e.screenX,
      screenY: e.screenY,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: n.ctrlKey ?? !1,
      altKey: n.altKey ?? !1,
      shiftKey: n.shiftKey ?? !1,
      metaKey: n.metaKey ?? !1,
      button: 0,
      relatedTarget: e.target
    });
    (i || e.target).dispatchEvent(o);
  }
  /**
   * defines an element that is used to get the offset and scale from grid transforms
   * returns the scale and offsets from said element
  */
  static getValuesFromTransformedElement(e) {
    const t = document.createElement("div");
    A.addElStyles(t, {
      opacity: "0",
      position: "fixed",
      top: "0px",
      left: "0px",
      width: "1px",
      height: "1px",
      zIndex: "-999999"
    }), e.appendChild(t);
    const i = t.getBoundingClientRect();
    return e.removeChild(t), t.remove(), {
      xScale: 1 / i.width,
      yScale: 1 / i.height,
      xOffset: i.left,
      yOffset: i.top
    };
  }
  /** swap the given object 2 field values */
  static swap(e, t, i) {
    if (!e)
      return;
    const n = e[t];
    e[t] = e[i], e[i] = n;
  }
  /** returns true if event is inside the given element rectangle */
  // Note: Safari Mac has null event.relatedTarget which causes #1684 so check if DragEvent is inside the coordinates instead
  //    Utils.el.contains(event.relatedTarget as HTMLElement)
  // public static inside(e: MouseEvent, el: HTMLElement): boolean {
  //   // srcElement, toElement, target: all set to placeholder when leaving simple grid, so we can't use that (Chrome)
  //   const target: HTMLElement = e.relatedTarget || (e as any).fromElement;
  //   if (!target) {
  //     const { bottom, left, right, top } = el.getBoundingClientRect();
  //     return (e.x < right && e.x > left && e.y < bottom && e.y > top);
  //   }
  //   return el.contains(target);
  // }
  /** true if the item can be rotated (checking for prop, not space available) */
  static canBeRotated(e) {
    return !(!e || e.w === e.h || e.locked || e.noResize || e.grid?.opts.disableResize || e.minW && e.minW === e.maxW || e.minH && e.minH === e.maxH);
  }
}
class Xe {
  constructor(e = {}) {
    this.addedNodes = [], this.removedNodes = [], this.defaultColumn = 12, this.column = e.column || this.defaultColumn, this.column > this.defaultColumn && (this.defaultColumn = this.column), this.maxRow = e.maxRow, this._float = e.float, this.nodes = e.nodes || [], this.onChange = e.onChange;
  }
  /**
   * Enable/disable batch mode for multiple operations to optimize performance.
   * When enabled, layout updates are deferred until batch mode is disabled.
   *
   * @param flag true to enable batch mode, false to disable and apply changes
   * @param doPack if true (default), pack/compact nodes when disabling batch mode
   * @returns the engine instance for chaining
   *
   * @example
   * // Start batch mode for multiple operations
   * engine.batchUpdate(true);
   * engine.addNode(node1);
   * engine.addNode(node2);
   * engine.batchUpdate(false); // Apply all changes at once
   */
  batchUpdate(e = !0, t = !0) {
    return !!this.batchMode === e ? this : (this.batchMode = e, e ? (this._prevFloat = this._float, this._float = !0, this.cleanNodes(), this.saveInitial()) : (this._float = this._prevFloat, delete this._prevFloat, t && this._packNodes(), this._notify()), this);
  }
  // use entire row for hitting area (will use bottom reverse sorted first) if we not actively moving DOWN and didn't already skip
  _useEntireRowArea(e, t) {
    return (!this.float || this.batchMode && !this._prevFloat) && !this._hasLocked && (!e._moving || e._skipDown || t.y <= e.y);
  }
  /** @internal fix collision on given 'node', going to given new location 'nn', with optional 'collide' node already found.
   * return true if we moved. */
  _fixCollisions(e, t = e, i, n = {}) {
    if (this.sortNodes(-1), i = i || this.collide(e, t), !i)
      return !1;
    if (e._moving && !n.nested && !this.float && this.swap(e, i))
      return !0;
    let o = t;
    !this._loading && this._useEntireRowArea(e, t) && (o = { x: 0, w: this.column, y: t.y, h: t.h }, i = this.collide(e, o, n.skip));
    let s = !1;
    const a = { nested: !0, pack: !1 };
    let c = 0;
    for (; i = i || this.collide(e, o, n.skip); ) {
      if (c++ > this.nodes.length * 2)
        throw new Error("Infinite collide check");
      let u;
      if (i.locked || this._loading || e._moving && !e._skipDown && t.y > e.y && !this.float && // can take space we had, or before where we're going
      (!this.collide(i, { ...i, y: e.y }, e) || !this.collide(i, { ...i, y: t.y - i.h }, e))) {
        e._skipDown = e._skipDown || t.y > e.y;
        const l = { ...t, y: i.y + i.h, ...a };
        u = this._loading && A.samePos(e, l) ? !0 : this.moveNode(e, l), (i.locked || this._loading) && u ? A.copyPos(t, e) : !i.locked && u && n.pack && (this._packNodes(), t.y = i.y + i.h, A.copyPos(e, t)), s = s || u;
      } else
        u = this.moveNode(i, { ...i, y: t.y + t.h, skip: e, ...a });
      if (!u)
        return s;
      i = void 0;
    }
    return s;
  }
  /**
   * Return the first node that intercepts/collides with the given node or area.
   * Used for collision detection during drag and drop operations.
   *
   * @param skip the node to skip in collision detection (usually the node being moved)
   * @param area the area to check for collisions (defaults to skip node's area)
   * @param skip2 optional second node to skip in collision detection
   * @returns the first colliding node, or undefined if no collision
   *
   * @example
   * const colliding = engine.collide(draggedNode, {x: 2, y: 1, w: 2, h: 1});
   * if (colliding) {
   *   console.log('Would collide with:', colliding.id);
   * }
   */
  collide(e, t = e, i) {
    const n = e._id, o = i?._id;
    return this.nodes.find((s) => s._id !== n && s._id !== o && A.isIntercepted(s, t));
  }
  /**
   * Return all nodes that intercept/collide with the given node or area.
   * Similar to collide() but returns all colliding nodes instead of just the first.
   *
   * @param skip the node to skip in collision detection
   * @param area the area to check for collisions (defaults to skip node's area)
   * @param skip2 optional second node to skip in collision detection
   * @returns array of all colliding nodes
   *
   * @example
   * const allCollisions = engine.collideAll(draggedNode);
   * console.log('Colliding with', allCollisions.length, 'nodes');
   */
  collideAll(e, t = e, i) {
    const n = e._id, o = i?._id;
    return this.nodes.filter((s) => s._id !== n && s._id !== o && A.isIntercepted(s, t));
  }
  /** does a pixel coverage collision based on where we started, returning the node that has the most coverage that is >50% mid line */
  directionCollideCoverage(e, t, i) {
    if (!t.rect || !e._rect)
      return;
    const n = e._rect, o = { ...t.rect };
    o.y > n.y ? (o.h += o.y - n.y, o.y = n.y) : o.h += n.y - o.y, o.x > n.x ? (o.w += o.x - n.x, o.x = n.x) : o.w += n.x - o.x;
    let s, a = 0.5;
    for (let c of i) {
      if (c.locked || !c._rect)
        break;
      const u = c._rect;
      let l = Number.MAX_VALUE, d = Number.MAX_VALUE;
      n.y < u.y ? l = (o.y + o.h - u.y) / u.h : n.y + n.h > u.y + u.h && (l = (u.y + u.h - o.y) / u.h), n.x < u.x ? d = (o.x + o.w - u.x) / u.w : n.x + n.w > u.x + u.w && (d = (u.x + u.w - o.x) / u.w);
      const h = Math.min(d, l);
      h > a && (a = h, s = c);
    }
    return t.collide = s, s;
  }
  /** does a pixel coverage returning the node that has the most coverage by area */
  /*
  protected collideCoverage(r: GridStackPosition, collides: GridStackNode[]): {collide: GridStackNode, over: number} {
    const collide: GridStackNode;
    const overMax = 0;
    collides.forEach(n => {
      if (n.locked || !n._rect) return;
      const over = Utils.areaIntercept(r, n._rect);
      if (over > overMax) {
        overMax = over;
        collide = n;
      }
    });
    return {collide, over: overMax};
  }
  */
  /**
   * Cache the pixel rectangles for all nodes used for collision detection during drag operations.
   * This optimization converts grid coordinates to pixel coordinates for faster collision detection.
   *
   * @param w width of a single grid cell in pixels
   * @param h height of a single grid cell in pixels
   * @param top top margin/padding in pixels
   * @param right right margin/padding in pixels
   * @param bottom bottom margin/padding in pixels
   * @param left left margin/padding in pixels
   * @returns the engine instance for chaining
   *
   * @internal This is typically called by GridStack during resize events
   */
  cacheRects(e, t, i, n, o, s) {
    return this.nodes.forEach((a) => a._rect = {
      y: a.y * t + i,
      x: a.x * e + s,
      w: a.w * e - s - n,
      h: a.h * t - i - o
    }), this;
  }
  /**
   * Attempt to swap the positions of two nodes if they meet swapping criteria.
   * Nodes can swap if they are the same size or in the same column/row, not locked, and touching.
   *
   * @param a first node to swap
   * @param b second node to swap
   * @returns true if swap was successful, false if not possible, undefined if not applicable
   *
   * @example
   * const swapped = engine.swap(nodeA, nodeB);
   * if (swapped) {
   *   console.log('Nodes swapped successfully');
   * }
   */
  swap(e, t) {
    if (!t || t.locked || !e || e.locked)
      return !1;
    function i() {
      const o = t.x, s = t.y;
      return t.x = e.x, t.y = e.y, e.h != t.h ? (e.x = o, e.y = t.y + t.h) : e.w != t.w ? (e.x = t.x + t.w, e.y = s) : (e.x = o, e.y = s), e._dirty = t._dirty = !0, !0;
    }
    let n;
    if (e.w === t.w && e.h === t.h && (e.x === t.x || e.y === t.y) && (n = A.isTouching(e, t)))
      return i();
    if (n !== !1) {
      if (e.w === t.w && e.x === t.x && (n || (n = A.isTouching(e, t)))) {
        if (t.y < e.y) {
          const o = e;
          e = t, t = o;
        }
        return i();
      }
      if (n !== !1) {
        if (e.h === t.h && e.y === t.y && (n || (n = A.isTouching(e, t)))) {
          if (t.x < e.x) {
            const o = e;
            e = t, t = o;
          }
          return i();
        }
        return !1;
      }
    }
  }
  /**
   * Check if the specified rectangular area is empty (no nodes occupy any part of it).
   *
   * @param x the x coordinate (column) of the area to check
   * @param y the y coordinate (row) of the area to check
   * @param w the width in columns of the area to check
   * @param h the height in rows of the area to check
   * @returns true if the area is completely empty, false if any node overlaps
   *
   * @example
   * if (engine.isAreaEmpty(2, 1, 3, 2)) {
   *   console.log('Area is available for placement');
   * }
   */
  isAreaEmpty(e, t, i, n) {
    const o = { x: e || 0, y: t || 0, w: i || 1, h: n || 1 };
    return !this.collide(o);
  }
  /**
   * Re-layout grid items to reclaim any empty space.
   * This optimizes the grid layout by moving items to fill gaps.
   *
   * @param layout layout algorithm to use:
   *   - 'compact' (default): find truly empty spaces, may reorder items
   *   - 'list': keep the sort order exactly the same, move items up sequentially
   * @param doSort if true (default), sort nodes by position before compacting
   * @returns the engine instance for chaining
   *
   * @example
   * // Compact to fill empty spaces
   * engine.compact();
   *
   * // Compact preserving item order
   * engine.compact('list');
   */
  compact(e = "compact", t = !0) {
    if (this.nodes.length === 0)
      return this;
    t && this.sortNodes();
    const i = this.batchMode;
    i || this.batchUpdate();
    const n = this._inColumnResize;
    n || (this._inColumnResize = !0);
    const o = this.nodes;
    return this.nodes = [], o.forEach((s, a, c) => {
      let u;
      s.locked || (s.autoPosition = !0, e === "list" && a && (u = c[a - 1])), this.addNode(s, !1, u);
    }), n || delete this._inColumnResize, i || this.batchUpdate(!1), this;
  }
  /**
   * Enable/disable floating widgets (default: `false`).
   * When floating is enabled, widgets can move up to fill empty spaces.
   * See [example](http://gridstackjs.com/demo/float.html)
   *
   * @param val true to enable floating, false to disable
   *
   * @example
   * engine.float = true;  // Enable floating
   * engine.float = false; // Disable floating (default)
   */
  set float(e) {
    this._float !== e && (this._float = e || !1, e || this._packNodes()._notify());
  }
  /**
   * Get the current floating mode setting.
   *
   * @returns true if floating is enabled, false otherwise
   *
   * @example
   * const isFloating = engine.float;
   * console.log('Floating enabled:', isFloating);
   */
  get float() {
    return this._float || !1;
  }
  /**
   * Sort the nodes array from first to last, or reverse.
   * This is called during collision/placement operations to enforce a specific order.
   *
   * @param dir sort direction: 1 for ascending (first to last), -1 for descending (last to first)
   * @returns the engine instance for chaining
   *
   * @example
   * engine.sortNodes();    // Sort ascending (default)
   * engine.sortNodes(-1);  // Sort descending
   */
  sortNodes(e = 1) {
    return this.nodes = A.sort(this.nodes, e), this;
  }
  /** @internal called to top gravity pack the items back OR revert back to original Y positions when floating */
  _packNodes() {
    return this.batchMode ? this : (this.sortNodes(), this.float ? this.nodes.forEach((e) => {
      if (e._updating || e._orig === void 0 || e.y === e._orig.y)
        return;
      let t = e.y;
      for (; t > e._orig.y; )
        --t, this.collide(e, { x: e.x, y: t, w: e.w, h: e.h }) || (e._dirty = !0, e.y = t);
    }) : this.nodes.forEach((e, t) => {
      if (!e.locked)
        for (; e.y > 0; ) {
          const i = t === 0 ? 0 : e.y - 1;
          if (!(t === 0 || !this.collide(e, { x: e.x, y: i, w: e.w, h: e.h })))
            break;
          e._dirty = e.y !== i, e.y = i;
        }
    }), this);
  }
  /**
   * Prepare and validate a node's coordinates and values for the current grid.
   * This ensures the node has valid position, size, and properties before being added to the grid.
   *
   * @param node the node to prepare and validate
   * @param resizing if true, resize the node down if it's out of bounds; if false, move it to fit
   * @returns the prepared node with valid coordinates
   *
   * @example
   * const node = { w: 3, h: 2, content: 'Hello' };
   * const prepared = engine.prepareNode(node);
   * console.log('Node prepared at:', prepared.x, prepared.y);
   */
  prepareNode(e, t) {
    e._id = e._id ?? Xe._idSeq++;
    const i = e.id;
    if (i) {
      let o = 1;
      for (; this.nodes.find((s) => s.id === e.id && s !== e); )
        e.id = i + "_" + o++;
    }
    (e.x === void 0 || e.y === void 0 || e.x === null || e.y === null) && (e.autoPosition = !0);
    const n = { x: 0, y: 0, w: 1, h: 1 };
    return A.defaults(e, n), e.autoPosition || delete e.autoPosition, e.noResize || delete e.noResize, e.noMove || delete e.noMove, A.sanitizeMinMax(e), typeof e.x == "string" && (e.x = Number(e.x)), typeof e.y == "string" && (e.y = Number(e.y)), typeof e.w == "string" && (e.w = Number(e.w)), typeof e.h == "string" && (e.h = Number(e.h)), isNaN(e.x) && (e.x = n.x, e.autoPosition = !0), isNaN(e.y) && (e.y = n.y, e.autoPosition = !0), isNaN(e.w) && (e.w = n.w), isNaN(e.h) && (e.h = n.h), this.nodeBoundFix(e, t), e;
  }
  /**
   * Part 2 of preparing a node to fit inside the grid - validates and fixes coordinates and dimensions.
   * This ensures the node fits within grid boundaries and respects min/max constraints.
   *
   * @param node the node to validate and fix
   * @param resizing if true, resize the node to fit; if false, move the node to fit
   * @returns the engine instance for chaining
   *
   * @example
   * // Fix a node that might be out of bounds
   * engine.nodeBoundFix(node, true); // Resize to fit
   * engine.nodeBoundFix(node, false); // Move to fit
   */
  nodeBoundFix(e, t) {
    const i = e._orig || A.copyPos({}, e);
    if (e.maxW && (e.w = Math.min(e.w || 1, e.maxW)), e.maxH && (e.h = Math.min(e.h || 1, e.maxH)), e.minW && (e.w = Math.max(e.w || 1, e.minW)), e.minH && (e.h = Math.max(e.h || 1, e.minH)), (e.x || 0) + (e.w || 1) > this.column && this.column < this.defaultColumn && !this._inColumnResize && !this.skipCacheUpdate && e._id != null && this.findCacheLayout(e, this.defaultColumn) === -1) {
      const o = { ...e };
      o.autoPosition || o.x === void 0 ? (delete o.x, delete o.y) : o.x = Math.min(this.defaultColumn - 1, o.x), o.w = Math.min(this.defaultColumn, o.w || 1), this.cacheOneLayout(o, this.defaultColumn);
    }
    return e.w > this.column ? e.w = this.column : e.w < 1 && (e.w = 1), this.maxRow && e.h > this.maxRow ? e.h = this.maxRow : e.h < 1 && (e.h = 1), e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), e.x + e.w > this.column && (t ? e.w = this.column - e.x : e.x = this.column - e.w), this.maxRow && e.y + e.h > this.maxRow && (t ? e.h = this.maxRow - e.y : e.y = this.maxRow - e.h), A.samePos(e, i) || (e._dirty = !0), this;
  }
  /**
   * Returns a list of nodes that have been modified from their original values.
   * This is used to track which nodes need DOM updates.
   *
   * @param verify if true, performs additional verification by comparing current vs original positions
   * @returns array of nodes that have been modified
   *
   * @example
   * const changed = engine.getDirtyNodes();
   * console.log('Modified nodes:', changed.length);
   *
   * // Get verified dirty nodes
   * const verified = engine.getDirtyNodes(true);
   */
  getDirtyNodes(e) {
    return e ? this.nodes.filter((t) => t._dirty && !A.samePos(t, t._orig)) : this.nodes.filter((t) => t._dirty);
  }
  /** @internal call this to call onChange callback with dirty nodes so DOM can be updated */
  _notify(e) {
    if (this.batchMode || !this.onChange)
      return this;
    const t = (e || []).concat(this.getDirtyNodes());
    return this.onChange(t), this;
  }
  /**
   * Clean all dirty and last tried information from nodes.
   * This resets the dirty state tracking for all nodes.
   *
   * @returns the engine instance for chaining
   *
   * @internal
   */
  cleanNodes() {
    return this.batchMode ? this : (this.nodes.forEach((e) => {
      delete e._dirty, delete e._lastTried;
    }), this);
  }
  /**
   * Save the initial position/size of all nodes to track real dirty state.
   * This creates a snapshot of current positions that can be restored later.
   *
   * Note: Should be called right after change events and before move/resize operations.
   *
   * @returns the engine instance for chaining
   *
   * @internal
   */
  saveInitial() {
    return this.nodes.forEach((e) => {
      e._orig = A.copyPos({}, e), delete e._dirty;
    }), this._hasLocked = this.nodes.some((e) => e.locked), this;
  }
  /**
   * Restore all nodes back to their initial values.
   * This is typically called when canceling an operation (e.g., Esc key during drag).
   *
   * @returns the engine instance for chaining
   *
   * @internal
   */
  restoreInitial() {
    return this.nodes.forEach((e) => {
      !e._orig || A.samePos(e, e._orig) || (A.copyPos(e, e._orig), e._dirty = !0);
    }), this._notify(), this;
  }
  /**
   * Find the first available empty spot for the given node dimensions.
   * Updates the node's x,y attributes with the found position.
   *
   * @param node the node to find a position for (w,h must be set)
   * @param nodeList optional list of nodes to check against (defaults to engine nodes)
   * @param column optional column count (defaults to engine column count)
   * @param after optional node to start search after (maintains order)
   * @returns true if an empty position was found and node was updated
   *
   * @example
   * const node = { w: 2, h: 1 };
   * if (engine.findEmptyPosition(node)) {
   *   console.log('Found position at:', node.x, node.y);
   * }
   */
  findEmptyPosition(e, t = this.nodes, i = this.column, n) {
    const o = n ? n.y * i + (n.x + n.w) : 0;
    let s = !1;
    for (let a = o; !s; ++a) {
      const c = a % i, u = Math.floor(a / i);
      if (c + e.w > i)
        continue;
      const l = { x: c, y: u, w: e.w, h: e.h };
      t.find((d) => A.isIntercepted(l, d)) || ((e.x !== c || e.y !== u) && (e._dirty = !0), e.x = c, e.y = u, delete e.autoPosition, s = !0);
    }
    return s;
  }
  /**
   * Add the given node to the grid, handling collision detection and re-packing.
   * This is the main method for adding new widgets to the engine.
   *
   * @param node the node to add to the grid
   * @param triggerAddEvent if true, adds node to addedNodes list for event triggering
   * @param after optional node to place this node after (for ordering)
   * @returns the added node (or existing node if duplicate)
   *
   * @example
   * const node = { x: 0, y: 0, w: 2, h: 1, content: 'Hello' };
   * const added = engine.addNode(node, true);
   */
  addNode(e, t = !1, i) {
    const n = this.nodes.find((s) => s._id === e._id);
    if (n)
      return n;
    this._inColumnResize ? this.nodeBoundFix(e) : this.prepareNode(e), delete e._temporaryRemoved, delete e._removeDOM;
    let o;
    return e.autoPosition && this.findEmptyPosition(e, this.nodes, this.column, i) && (delete e.autoPosition, o = !0), this.nodes.push(e), t && this.addedNodes.push(e), o || this._fixCollisions(e), this.batchMode || this._packNodes()._notify(), e;
  }
  /**
   * Remove the given node from the grid.
   *
   * @param node the node to remove
   * @param removeDOM if true (default), marks node for DOM removal
   * @param triggerEvent if true, adds node to removedNodes list for event triggering
   * @returns the engine instance for chaining
   *
   * @example
   * engine.removeNode(node, true, true);
   */
  removeNode(e, t = !0, i = !1) {
    return this.nodes.find((n) => n._id === e._id) ? (i && this.removedNodes.push(e), t && (e._removeDOM = !0), this.nodes = this.nodes.filter((n) => n._id !== e._id), e._isAboutToRemove || this._packNodes(), this._notify([e]), this) : this;
  }
  /**
   * Remove all nodes from the grid.
   *
   * @param removeDOM if true (default), marks all nodes for DOM removal
   * @param triggerEvent if true (default), triggers removal events
   * @returns the engine instance for chaining
   *
   * @example
   * engine.removeAll(); // Remove all nodes
   */
  removeAll(e = !0, t = !0) {
    if (delete this._layouts, !this.nodes.length)
      return this;
    e && this.nodes.forEach((n) => n._removeDOM = !0);
    const i = this.nodes;
    return this.removedNodes = t ? i : [], this.nodes = [], this._notify(i);
  }
  /**
   * Check if a node can be moved to a new position, considering layout constraints.
   * This is a safer version of moveNode() that validates the move first.
   *
   * For complex cases (like maxRow constraints), it simulates the move in a clone first,
   * then applies the changes only if they meet all specifications.
   *
   * @param node the node to move
   * @param o move options including target position
   * @returns true if the node was successfully moved
   *
   * @example
   * const canMove = engine.moveNodeCheck(node, { x: 2, y: 1 });
   * if (canMove) {
   *   console.log('Node moved successfully');
   * }
   */
  moveNodeCheck(e, t) {
    if (!this.changedPosConstrain(e, t))
      return !1;
    if (t.pack = !0, !this.maxRow)
      return this.moveNode(e, t);
    let i;
    const n = new Xe({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((s) => s._id === e._id ? (i = { ...s }, i) : { ...s })
    });
    if (!i)
      return !1;
    const o = n.moveNode(i, t) && n.getRow() <= Math.max(this.getRow(), this.maxRow);
    if (!o && !t.resizing && t.collide) {
      const s = t.collide.el.gridstackNode;
      if (this.swap(e, s))
        return this._notify(), !0;
    }
    return o ? (n.nodes.filter((s) => s._dirty).forEach((s) => {
      const a = this.nodes.find((c) => c._id === s._id);
      a && (A.copyPos(a, s), a._dirty = !0);
    }), this._notify(), !0) : !1;
  }
  /** return true if can fit in grid height constrain only (always true if no maxRow) */
  willItFit(e) {
    if (delete e._willFitPos, !this.maxRow)
      return !0;
    const t = new Xe({
      column: this.column,
      float: this.float,
      nodes: this.nodes.map((n) => ({ ...n }))
    }), i = { ...e };
    return this.cleanupNode(i), delete i.el, delete i._id, delete i.content, delete i.grid, t.addNode(i), t.getRow() <= this.maxRow ? (e._willFitPos = A.copyPos({}, i), !0) : !1;
  }
  /** true if x,y or w,h are different after clamping to min/max */
  changedPosConstrain(e, t) {
    return t.w = t.w || e.w, t.h = t.h || e.h, e.x !== t.x || e.y !== t.y ? !0 : (e.maxW && (t.w = Math.min(t.w, e.maxW)), e.maxH && (t.h = Math.min(t.h, e.maxH)), e.minW && (t.w = Math.max(t.w, e.minW)), e.minH && (t.h = Math.max(t.h, e.minH)), e.w !== t.w || e.h !== t.h);
  }
  /** return true if the passed in node was actually moved (checks for no-op and locked) */
  moveNode(e, t) {
    if (!e || /*node.locked ||*/
    !t)
      return !1;
    let i;
    t.pack === void 0 && !this.batchMode && (i = t.pack = !0), typeof t.x != "number" && (t.x = e.x), typeof t.y != "number" && (t.y = e.y), typeof t.w != "number" && (t.w = e.w), typeof t.h != "number" && (t.h = e.h);
    const n = e.w !== t.w || e.h !== t.h, o = A.copyPos({}, e, !0);
    if (A.copyPos(o, t), this.nodeBoundFix(o, n), A.copyPos(t, o), !t.forceCollide && A.samePos(e, t))
      return !1;
    const s = A.copyPos({}, e), a = this.collideAll(e, o, t.skip);
    let c = !0;
    if (a.length) {
      const u = e._moving && !t.nested;
      let l = u ? this.directionCollideCoverage(e, t, a) : a[0];
      if (u && l && e.grid?.opts?.subGridDynamic && !e.grid._isTemp) {
        const d = A.areaIntercept(t.rect, l._rect), h = A.area(t.rect), f = A.area(l._rect);
        d / (h < f ? h : f) > 0.8 && (l.grid.makeSubGrid(l.el, void 0, e), l = void 0);
      }
      l ? c = !this._fixCollisions(e, o, l, t) : (c = !1, i && delete t.pack);
    }
    return c && !A.samePos(e, o) && (e._dirty = !0, A.copyPos(e, o)), t.pack && this._packNodes()._notify(), !A.samePos(e, s);
  }
  getRow() {
    return this.nodes.reduce((e, t) => Math.max(e, t.y + t.h), 0);
  }
  beginUpdate(e) {
    return e._updating || (e._updating = !0, delete e._skipDown, this.batchMode || this.saveInitial()), this;
  }
  endUpdate() {
    const e = this.nodes.find((t) => t._updating);
    return e && (delete e._updating, delete e._skipDown), this;
  }
  /** saves a copy of the largest column layout (eg 12 even when rendering 1 column) so we don't loose orig layout, unless explicity column
   * count to use is given. returning a list of widgets for serialization
   * @param saveElement if true (default), the element will be saved to GridStackWidget.el field, else it will be removed.
   * @param saveCB callback for each node -> widget, so application can insert additional data to be saved into the widget data structure.
   * @param column if provided, the grid will be saved for the given column count (IFF we have matching internal saved layout, or current layout).
   * Note: nested grids will ALWAYS save the container w to match overall layouts (parent + child) to be consistent.
  */
  save(e = !0, t, i) {
    const n = this._layouts?.length || 0;
    let o;
    n && (i ? i !== this.column && (o = this._layouts[i]) : this.column !== n - 1 && (o = this._layouts[n - 1]));
    const s = [];
    return this.sortNodes(), this.nodes.forEach((a) => {
      const c = o?.find((l) => l._id === a._id), u = { ...a, ...c || {} };
      A.removeInternalForSave(u, !e), t && t(a, u), s.push(u);
    }), s;
  }
  /** @internal called whenever a node is added or moved - updates the cached layouts */
  layoutsNodesChange(e) {
    return !this._layouts || this._inColumnResize ? this : (this._layouts.forEach((t, i) => {
      if (!t || i === this.column)
        return this;
      if (i < this.column)
        this._layouts[i] = void 0;
      else {
        const n = i / this.column;
        e.forEach((o) => {
          if (!o._orig)
            return;
          const s = t.find((a) => a._id === o._id);
          s && (s.y >= 0 && o.y !== o._orig.y && (s.y += o.y - o._orig.y), o.x !== o._orig.x && (s.x = Math.round(o.x * n)), o.w !== o._orig.w && (s.w = Math.round(o.w * n)));
        });
      }
    }), this);
  }
  /**
   * @internal Called to scale the widget width & position up/down based on the column change.
   * Note we store previous layouts (especially original ones) to make it possible to go
   * from say 12 -> 1 -> 12 and get back to where we were.
   *
   * @param prevColumn previous number of columns
   * @param column  new column number
   * @param layout specify the type of re-layout that will happen (position, size, etc...).
   * Note: items will never be outside of the current column boundaries. default (moveScale). Ignored for 1 column
   */
  columnChanged(e, t, i = "moveScale") {
    if (!this.nodes.length || !t || e === t)
      return this;
    const n = i === "compact" || i === "list";
    n && this.sortNodes(1), t < e && this.cacheLayout(this.nodes, e), this.batchUpdate();
    let o = [], s = n ? this.nodes : A.sort(this.nodes, -1);
    if (t > e && this._layouts) {
      const a = this._layouts[t] || [], c = this._layouts.length - 1;
      !a.length && e !== c && this._layouts[c]?.length && (e = c, this._layouts[c].forEach((u) => {
        const l = s.find((d) => d._id === u._id);
        l && (!n && !u.autoPosition && (l.x = u.x ?? l.x, l.y = u.y ?? l.y), l.w = u.w ?? l.w, (u.x == null || u.y === void 0) && (l.autoPosition = !0));
      })), a.forEach((u) => {
        const l = s.findIndex((d) => d._id === u._id);
        if (l !== -1) {
          const d = s[l];
          if (n) {
            d.w = u.w;
            return;
          }
          (u.autoPosition || isNaN(u.x) || isNaN(u.y)) && this.findEmptyPosition(u, o), u.autoPosition || (d.x = u.x ?? d.x, d.y = u.y ?? d.y, d.w = u.w ?? d.w, o.push(d)), s.splice(l, 1);
        }
      });
    }
    if (n)
      this.compact(i, !1);
    else {
      if (s.length)
        if (typeof i == "function")
          i(t, e, o, s);
        else {
          const a = n || i === "none" ? 1 : t / e, c = i === "move" || i === "moveScale", u = i === "scale" || i === "moveScale";
          s.forEach((l) => {
            l.x = t === 1 ? 0 : c ? Math.round(l.x * a) : Math.min(l.x, t - 1), l.w = t === 1 || e === 1 ? 1 : u ? Math.round(l.w * a) || 1 : Math.min(l.w, t), o.push(l);
          }), s = [];
        }
      o = A.sort(o, -1), this._inColumnResize = !0, this.nodes = [], o.forEach((a) => {
        this.addNode(a, !1), delete a._orig;
      });
    }
    return this.nodes.forEach((a) => delete a._orig), this.batchUpdate(!1, !n), delete this._inColumnResize, this;
  }
  /**
   * call to cache the given layout internally to the given location so we can restore back when column changes size
   * @param nodes list of nodes
   * @param column corresponding column index to save it under
   * @param clear if true, will force other caches to be removed (default false)
   */
  cacheLayout(e, t, i = !1) {
    const n = [];
    return e.forEach((o, s) => {
      if (o._id === void 0) {
        const a = o.id ? this.nodes.find((c) => c.id === o.id) : void 0;
        o._id = a?._id ?? Xe._idSeq++;
      }
      n[s] = { x: o.x, y: o.y, w: o.w, _id: o._id };
    }), this._layouts = i ? [] : this._layouts || [], this._layouts[t] = n, this;
  }
  /**
   * call to cache the given node layout internally to the given location so we can restore back when column changes size
   * @param node single node to cache
   * @param column corresponding column index to save it under
   */
  cacheOneLayout(e, t) {
    e._id = e._id ?? Xe._idSeq++;
    const i = { x: e.x, y: e.y, w: e.w, _id: e._id };
    (e.autoPosition || e.x === void 0) && (delete i.x, delete i.y, e.autoPosition && (i.autoPosition = !0)), this._layouts = this._layouts || [], this._layouts[t] = this._layouts[t] || [];
    const n = this.findCacheLayout(e, t);
    return n === -1 ? this._layouts[t].push(i) : this._layouts[t][n] = i, this;
  }
  findCacheLayout(e, t) {
    return this._layouts?.[t]?.findIndex((i) => i._id === e._id) ?? -1;
  }
  removeNodeFromLayoutCache(e) {
    if (this._layouts)
      for (let t = 0; t < this._layouts.length; t++) {
        const i = this.findCacheLayout(e, t);
        i !== -1 && this._layouts[t].splice(i, 1);
      }
  }
  /** called to remove all internal values but the _id */
  cleanupNode(e) {
    for (const t in e)
      t[0] === "_" && t !== "_id" && delete e[t];
    return this;
  }
}
Xe._idSeq = 0;
const be = {
  alwaysShowResizeHandle: "mobile",
  animate: !0,
  auto: !0,
  cellHeight: "auto",
  cellHeightThrottle: 100,
  cellHeightUnit: "px",
  column: 12,
  draggable: { handle: ".grid-stack-item-content", appendTo: "body", scroll: !0 },
  handle: ".grid-stack-item-content",
  itemClass: "grid-stack-item",
  margin: 10,
  marginUnit: "px",
  maxRow: 0,
  minRow: 0,
  placeholderClass: "grid-stack-placeholder",
  placeholderText: "",
  removableOptions: { accept: "grid-stack-item", decline: "grid-stack-non-removable" },
  resizable: { handles: "se" },
  rtl: "auto"
  // **** same as not being set ****
  // disableDrag: false,
  // disableResize: false,
  // float: false,
  // handleClass: null,
  // removable: false,
  // staticGrid: false,
  //removable
};
class L {
}
const Re = typeof window < "u" && typeof document < "u" && ("ontouchstart" in document || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
class Fe {
}
function Bi(r, e) {
  r.touches.length > 1 || (r.cancelable && r.preventDefault(), A.simulateMouseEvent(r.changedTouches[0], e));
}
function Ho(r, e) {
  r.cancelable && r.preventDefault(), A.simulateMouseEvent(r, e);
}
function Fi(r) {
  Fe.touchHandled || (Fe.touchHandled = !0, Bi(r, "mousedown"));
}
function Hi(r) {
  Fe.touchHandled && Bi(r, "mousemove");
}
function Wi(r) {
  if (!Fe.touchHandled)
    return;
  Fe.pointerLeaveTimeout && (window.clearTimeout(Fe.pointerLeaveTimeout), delete Fe.pointerLeaveTimeout);
  const e = !!L.dragElement;
  Bi(r, "mouseup"), e || Bi(r, "click"), Fe.touchHandled = !1;
}
function Gi(r) {
  r.pointerType !== "mouse" && r.target.releasePointerCapture(r.pointerId);
}
function jn(r) {
  L.dragElement && r.pointerType !== "mouse" && Ho(r, "mouseenter");
}
function Bn(r) {
  L.dragElement && r.pointerType !== "mouse" && (Fe.pointerLeaveTimeout = window.setTimeout(() => {
    delete Fe.pointerLeaveTimeout, Ho(r, "mouseleave");
  }, 10));
}
class pr {
  constructor(e, t, i) {
    this.host = e, this.dir = t, this.option = i, this.moving = !1, this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this._init();
  }
  /** @internal */
  _init() {
    const e = this.el = document.createElement("div");
    return e.classList.add("ui-resizable-handle"), e.classList.add(`${pr.prefix}${this.dir}`), e.style.zIndex = "100", e.style.userSelect = "none", this.host.appendChild(this.el), this.el.addEventListener("mousedown", this._mouseDown), Re && (this.el.addEventListener("touchstart", Fi), this.el.addEventListener("pointerdown", Gi)), this;
  }
  /** call this when resize handle needs to be removed and cleaned up */
  destroy() {
    return this.moving && this._mouseUp(this.mouseDownEvent), this.el.removeEventListener("mousedown", this._mouseDown), Re && (this.el.removeEventListener("touchstart", Fi), this.el.removeEventListener("pointerdown", Gi)), this.host.removeChild(this.el), delete this.el, delete this.host, this;
  }
  /** @internal called on mouse down on us: capture move on the entire document (mouse might not stay on us) until we release the mouse */
  _mouseDown(e) {
    this.mouseDownEvent = e, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Re && (this.el.addEventListener("touchmove", Hi), this.el.addEventListener("touchend", Wi)), e.stopPropagation(), e.preventDefault();
  }
  /** @internal */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    this.moving ? this._triggerEvent("move", e) : Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 2 && (this.moving = !0, this._triggerEvent("start", this.mouseDownEvent), this._triggerEvent("move", e), document.addEventListener("keydown", this._keyEvent)), e.stopPropagation();
  }
  /** @internal */
  _mouseUp(e) {
    this.moving && (this._triggerEvent("stop", e), document.removeEventListener("keydown", this._keyEvent)), document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Re && (this.el.removeEventListener("touchmove", Hi), this.el.removeEventListener("touchend", Wi)), delete this.moving, delete this.mouseDownEvent, e.stopPropagation(), e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel */
  _keyEvent(e) {
    e.key === "Escape" && (this.host.gridstackNode?.grid?.engine.restoreInitial(), this._mouseUp(this.mouseDownEvent));
  }
  /** @internal */
  _triggerEvent(e, t) {
    return this.option[e] && this.option[e](t), this;
  }
}
pr.prefix = "ui-resizable-";
class hn {
  constructor() {
    this._eventRegister = {};
  }
  /**
   * Returns the current disabled state.
   * Note: Use enable()/disable() methods to change state as other operations need to happen.
   */
  get disabled() {
    return this._disabled;
  }
  /**
   * Register an event callback for the specified event.
   *
   * @param event - Event name to listen for
   * @param callback - Function to call when event occurs
   */
  on(e, t) {
    this._eventRegister[e] = t;
  }
  /**
   * Unregister an event callback for the specified event.
   *
   * @param event - Event name to stop listening for
   */
  off(e) {
    delete this._eventRegister[e];
  }
  /**
   * Enable this drag & drop implementation.
   * Subclasses should override to perform additional setup.
   */
  enable() {
    this._disabled = !1;
  }
  /**
   * Disable this drag & drop implementation.
   * Subclasses should override to perform additional cleanup.
   */
  disable() {
    this._disabled = !0;
  }
  /**
   * Destroy this drag & drop implementation and clean up resources.
   * Removes all event handlers and clears internal state.
   */
  destroy() {
    delete this._eventRegister;
  }
  /**
   * Trigger a registered event callback if one exists and the implementation is enabled.
   *
   * @param eventName - Name of the event to trigger
   * @param event - DOM event object to pass to the callback
   * @returns Result from the callback function, if any
   */
  triggerEvent(e, t) {
    if (!this.disabled && this._eventRegister && this._eventRegister[e])
      return this._eventRegister[e](t);
  }
}
class ci extends hn {
  // have to be public else complains for HTMLElementExtendOpt ?
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.rectScale = { x: 1, y: 1 }, this._ui = () => {
      const n = this.el.parentElement.getBoundingClientRect(), o = {
        width: this.originalRect.width,
        height: this.originalRect.height + this.scrolled,
        left: this.originalRect.left,
        top: this.originalRect.top - this.scrolled
      }, s = this.temporalRect || o;
      return {
        position: {
          left: (s.left - n.left) * this.rectScale.x,
          top: (s.top - n.top) * this.rectScale.y
        },
        size: {
          width: s.width * this.rectScale.x,
          height: s.height * this.rectScale.y
        }
        /* Gridstack ONLY needs position set above... keep around in case.
        element: [this.el], // The object representing the element to be resized
        helper: [], // TODO: not support yet - The object representing the helper that's being resized
        originalElement: [this.el],// we don't wrap here, so simplify as this.el //The object representing the original element before it is wrapped
        originalPosition: { // The position represented as { left, top } before the resizable is resized
          left: this.originalRect.left - containmentRect.left,
          top: this.originalRect.top - containmentRect.top
        },
        originalSize: { // The size represented as { width, height } before the resizable is resized
          width: this.originalRect.width,
          height: this.originalRect.height
        }
        */
      };
    }, this._mouseOver = this._mouseOver.bind(this), this._mouseOut = this._mouseOut.bind(this), this.enable(), this._setupAutoHide(this.option.autoHide), this._setupHandlers();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    super.enable(), this.el.classList.remove("ui-resizable-disabled"), this._setupAutoHide(this.option.autoHide);
  }
  disable() {
    super.disable(), this.el.classList.add("ui-resizable-disabled"), this._setupAutoHide(!1);
  }
  destroy() {
    this._removeHandlers(), this._setupAutoHide(!1), delete this.el, super.destroy();
  }
  updateOption(e) {
    const t = e.handles && e.handles !== this.option.handles, i = e.autoHide && e.autoHide !== this.option.autoHide;
    return Object.keys(e).forEach((n) => this.option[n] = e[n]), t && (this._removeHandlers(), this._setupHandlers()), i && this._setupAutoHide(this.option.autoHide), this;
  }
  /** @internal turns auto hide on/off */
  _setupAutoHide(e) {
    return e ? (this.el.classList.add("ui-resizable-autohide"), this.el.addEventListener("mouseover", this._mouseOver), this.el.addEventListener("mouseout", this._mouseOut)) : (this.el.classList.remove("ui-resizable-autohide"), this.el.removeEventListener("mouseover", this._mouseOver), this.el.removeEventListener("mouseout", this._mouseOut), L.overResizeElement === this && delete L.overResizeElement), this;
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOver(e) {
    L.overResizeElement || L.dragElement || (L.overResizeElement = this, this.el.classList.remove("ui-resizable-autohide"));
  }
  /** @internal */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _mouseOut(e) {
    L.overResizeElement === this && (delete L.overResizeElement, this.el.classList.add("ui-resizable-autohide"));
  }
  /** @internal */
  _setupHandlers() {
    return this.handlers = this.option.handles.split(",").map((e) => e.trim()).map((e) => new pr(this.el, e, {
      start: (t) => {
        this._resizeStart(t);
      },
      stop: (t) => {
        this._resizeStop(t);
      },
      move: (t) => {
        this._resizing(t, e);
      }
    })), this;
  }
  /** @internal */
  _resizeStart(e) {
    this.sizeToContent = A.shouldSizeToContent(this.el.gridstackNode, !0), this.originalRect = this.el.getBoundingClientRect(), this.scrollEl = A.getScrollElement(this.el), this.scrollY = this.scrollEl.scrollTop, this.scrolled = 0, this.startEvent = e, this._setupHelper(), this._applyChange();
    const t = A.initEvent(e, { type: "resizestart", target: this.el });
    return this.option.start && this.option.start(t, this._ui()), this.el.classList.add("ui-resizable-resizing"), this.triggerEvent("resizestart", t), this;
  }
  /** @internal */
  _resizing(e, t) {
    this.scrolled = this.scrollEl.scrollTop - this.scrollY, this.temporalRect = this._getChange(e, t), this._applyChange();
    const i = A.initEvent(e, { type: "resize", target: this.el });
    return this.option.resize && this.option.resize(i, this._ui()), this.triggerEvent("resize", i), this;
  }
  /** @internal */
  _resizeStop(e) {
    const t = A.initEvent(e, { type: "resizestop", target: this.el });
    return this._cleanHelper(), this.option.stop && this.option.stop(t), this.el.classList.remove("ui-resizable-resizing"), this.triggerEvent("resizestop", t), delete this.startEvent, delete this.originalRect, delete this.temporalRect, delete this.scrollY, delete this.scrolled, this;
  }
  /** @internal */
  _setupHelper() {
    this.elOriginStyleVal = ci._originStyleProp.map((i) => this.el.style[i]), this.parentOriginStylePosition = this.el.parentElement.style.position;
    const e = this.el.parentElement, t = A.getValuesFromTransformedElement(e);
    return this.rectScale = {
      x: t.xScale,
      y: t.yScale
    }, getComputedStyle(this.el.parentElement).position.match(/static/) && (this.el.parentElement.style.position = "relative"), this.el.style.position = "absolute", this.el.style.opacity = "0.8", this;
  }
  /** @internal */
  _cleanHelper() {
    return ci._originStyleProp.forEach((e, t) => {
      this.el.style[e] = this.elOriginStyleVal[t] || null;
    }), this.el.parentElement.style.position = this.parentOriginStylePosition || null, this;
  }
  /** @internal */
  _getChange(e, t) {
    const i = this.startEvent, n = {
      width: this.originalRect.width,
      height: this.originalRect.height + this.scrolled,
      left: this.originalRect.left,
      top: this.originalRect.top - this.scrolled
    }, o = e.clientX - i.clientX, s = this.sizeToContent ? 0 : e.clientY - i.clientY;
    let a, c;
    t.indexOf("e") > -1 ? n.width += o : t.indexOf("w") > -1 && (n.width -= o, n.left += o, a = !0), t.indexOf("s") > -1 ? n.height += s : t.indexOf("n") > -1 && (n.height -= s, n.top += s, c = !0);
    const u = this._constrainSize(n.width, n.height, a, c);
    return Math.round(n.width) !== Math.round(u.width) && (t.indexOf("w") > -1 && (n.left += n.width - u.width), n.width = u.width), Math.round(n.height) !== Math.round(u.height) && (t.indexOf("n") > -1 && (n.top += n.height - u.height), n.height = u.height), n;
  }
  /** @internal constrain the size to the set min/max values */
  _constrainSize(e, t, i, n) {
    const o = this.option, s = (i ? o.maxWidthMoveLeft : o.maxWidth) || Number.MAX_SAFE_INTEGER, a = o.minWidth / this.rectScale.x || e, c = (n ? o.maxHeightMoveUp : o.maxHeight) || Number.MAX_SAFE_INTEGER, u = o.minHeight / this.rectScale.y || t, l = Math.min(s, Math.max(a, e)), d = Math.min(c, Math.max(u, t));
    return { width: l, height: d };
  }
  /** @internal */
  _applyChange() {
    let e = { left: 0, top: 0, width: 0, height: 0 };
    if (this.el.style.position === "absolute") {
      const t = this.el.parentElement, { left: i, top: n } = t.getBoundingClientRect();
      e = { left: i, top: n, width: 0, height: 0 };
    }
    return this.temporalRect ? (Object.keys(this.temporalRect).forEach((t) => {
      const i = this.temporalRect[t], n = t === "width" || t === "left" ? this.rectScale.x : t === "height" || t === "top" ? this.rectScale.y : 1;
      this.el.style[t] = (i - e[t]) * n + "px";
    }), this) : this;
  }
  /** @internal */
  _removeHandlers() {
    return this.handlers.forEach((e) => e.destroy()), delete this.handlers, this;
  }
}
ci._originStyleProp = ["width", "height", "position", "left", "top", "opacity", "zIndex"];
const Al = 'input,textarea,button,select,option,[contenteditable="true"],.ui-resizable-handle';
class ui extends hn {
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this.dragTransform = {
      xScale: 1,
      yScale: 1,
      xOffset: 0,
      yOffset: 0
    };
    const i = t?.handle?.substring(1), n = e.gridstackNode;
    this.dragEls = !i || e.classList.contains(i) ? [e] : n?.subGrid ? [e.querySelector(t.handle) || e] : Array.from(e.querySelectorAll(t.handle)), this.dragEls.length === 0 && (this.dragEls = [e]), this._mouseDown = this._mouseDown.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseUp = this._mouseUp.bind(this), this._keyEvent = this._keyEvent.bind(this), this.enable();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.dragEls.forEach((e) => {
      e.addEventListener("mousedown", this._mouseDown), Re && (e.addEventListener("touchstart", Fi), e.addEventListener("pointerdown", Gi));
    }), this.el.classList.remove("ui-draggable-disabled"));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.dragEls.forEach((t) => {
      t.removeEventListener("mousedown", this._mouseDown), Re && (t.removeEventListener("touchstart", Fi), t.removeEventListener("pointerdown", Gi));
    }), e || this.el.classList.add("ui-draggable-disabled"));
  }
  destroy() {
    this.dragTimeout && window.clearTimeout(this.dragTimeout), delete this.dragTimeout, this.mouseDownEvent && this._mouseUp(this.mouseDownEvent), this.disable(!0), delete this.el, delete this.helper, delete this.option, super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this;
  }
  /** @internal call when mouse goes down before a dragstart happens */
  _mouseDown(e) {
    if (!L.mouseHandled)
      return e.button !== 0 || !this.dragEls.find((t) => t === e.target) && e.target.closest(Al) || this.option.cancel && e.target.closest(this.option.cancel) || (this.mouseDownEvent = e, delete this.dragging, delete L.dragElement, delete L.dropElement, document.addEventListener("mousemove", this._mouseMove, { capture: !0, passive: !0 }), document.addEventListener("mouseup", this._mouseUp, !0), Re && (e.currentTarget.addEventListener("touchmove", Hi), e.currentTarget.addEventListener("touchend", Wi)), e.preventDefault(), document.activeElement && document.activeElement.blur(), L.mouseHandled = !0), !0;
  }
  /** @internal method to call actual drag event */
  _callDrag(e) {
    if (!this.dragging)
      return;
    const t = A.initEvent(e, { target: this.el, type: "drag" });
    this.option.drag && this.option.drag(t, this.ui()), this.triggerEvent("drag", t);
  }
  /** @internal called when the main page (after successful mousedown) receives a move event to drag the item around the screen */
  _mouseMove(e) {
    const t = this.mouseDownEvent;
    if (this.lastDrag = e, this.dragging)
      if (this._dragFollow(e), L.pauseDrag) {
        const i = Number.isInteger(L.pauseDrag) ? L.pauseDrag : 100;
        this.dragTimeout && window.clearTimeout(this.dragTimeout), this.dragTimeout = window.setTimeout(() => this._callDrag(e), i);
      } else
        this._callDrag(e);
    else if (Math.abs(e.x - t.x) + Math.abs(e.y - t.y) > 3) {
      this.dragging = !0, L.dragElement = this;
      const i = this.el.gridstackNode?.grid;
      i ? L.dropElement = i.el.ddElement.ddDroppable : delete L.dropElement, this.helper = this._createHelper(), this._setupHelperContainmentStyle(), this.dragTransform = A.getValuesFromTransformedElement(this.helperContainment), this.dragOffset = this._getDragOffset(e, this.el, this.helperContainment), this._setupHelperStyle(e);
      const n = A.initEvent(e, { target: this.el, type: "dragstart" });
      this.option.start && this.option.start(n, this.ui()), this.triggerEvent("dragstart", n), document.addEventListener("keydown", this._keyEvent);
    }
    return !0;
  }
  /** @internal call when the mouse gets released to drop the item at current location */
  _mouseUp(e) {
    if (document.removeEventListener("mousemove", this._mouseMove, !0), document.removeEventListener("mouseup", this._mouseUp, !0), Re && e.currentTarget && (e.currentTarget.removeEventListener("touchmove", Hi, !0), e.currentTarget.removeEventListener("touchend", Wi, !0)), this.dragging) {
      delete this.dragging, delete this.el.gridstackNode?._origRotate, document.removeEventListener("keydown", this._keyEvent), L.dropElement?.el === this.el.parentElement && delete L.dropElement, this.helperContainment.style.position = this.parentOriginStylePosition || null, this.helper !== this.el && this.helper.remove(), this._removeHelperStyle();
      const t = A.initEvent(e, { target: this.el, type: "dragstop" });
      this.option.stop && this.option.stop(t), this.triggerEvent("dragstop", t), L.dropElement && L.dropElement.drop(e);
    }
    delete this.helper, delete this.mouseDownEvent, delete L.dragElement, delete L.dropElement, delete L.mouseHandled, e.preventDefault();
  }
  /** @internal call when keys are being pressed - use Esc to cancel, R to rotate */
  _keyEvent(e) {
    const t = this.el.gridstackNode, i = t?.grid || L.dropElement?.el?.gridstack;
    if (e.key === "Escape")
      t && t._origRotate && (t._orig = t._origRotate, delete t._origRotate), i?.cancelDrag(), this._mouseUp(this.mouseDownEvent);
    else if (t && i && (e.key === "r" || e.key === "R")) {
      if (!A.canBeRotated(t))
        return;
      t._origRotate = t._origRotate || { ...t._orig }, delete t._moving, i.setAnimation(!1).rotate(t.el, { top: -this.dragOffset.offsetTop, left: -this.dragOffset.offsetLeft }).setAnimation(), t._moving = !0, this.dragOffset = this._getDragOffset(this.lastDrag, t.el, this.helperContainment), this.helper.style.width = this.dragOffset.width + "px", this.helper.style.height = this.dragOffset.height + "px", A.swap(t._orig, "w", "h"), delete t._rect, this._mouseMove(this.lastDrag);
    }
  }
  /** @internal create a clone copy (or user defined method) of the original drag item if set */
  _createHelper() {
    let e = this.el;
    return typeof this.option.helper == "function" ? e = this.option.helper(this.el) : this.option.helper === "clone" && (e = A.cloneNode(this.el)), e.parentElement || A.appendTo(e, this.option.appendTo === "parent" ? this.el.parentElement : this.option.appendTo), this.dragElementOriginStyle = ui.originStyleProp.map((t) => this.el.style[t]), e;
  }
  /** @internal set the fix position of the dragged item */
  _setupHelperStyle(e) {
    this.helper.classList.add("ui-draggable-dragging"), this.el.gridstackNode?.grid?.el.classList.add("grid-stack-dragging");
    const t = this.helper.style;
    return t.pointerEvents = "none", t.width = this.dragOffset.width + "px", t.height = this.dragOffset.height + "px", t.willChange = "left, top", t.position = "fixed", this._dragFollow(e), t.transition = "none", setTimeout(() => {
      this.helper && (t.transition = null);
    }, 0), this;
  }
  /** @internal restore back the original style before dragging */
  _removeHelperStyle() {
    if (this.helper.classList.remove("ui-draggable-dragging"), this.el.gridstackNode?.grid?.el.classList.remove("grid-stack-dragging"), !this.helper?.gridstackNode?._isAboutToRemove && this.dragElementOriginStyle) {
      const t = this.helper, i = this.dragElementOriginStyle.transition || null;
      t.style.transition = this.dragElementOriginStyle.transition = "none", ui.originStyleProp.forEach((n) => t.style[n] = this.dragElementOriginStyle[n] || null), setTimeout(() => t.style.transition = i, 50);
    }
    return delete this.dragElementOriginStyle, this;
  }
  /** @internal updates the top/left position to follow the mouse */
  _dragFollow(e) {
    const t = { left: 0, top: 0 }, i = this.helper.style, n = this.dragOffset;
    i.left = (e.clientX + n.offsetLeft - t.left) * this.dragTransform.xScale + "px", i.top = (e.clientY + n.offsetTop - t.top) * this.dragTransform.yScale + "px";
  }
  /** @internal */
  _setupHelperContainmentStyle() {
    return this.helperContainment = this.helper.parentElement, this.helper.style.position !== "fixed" && (this.parentOriginStylePosition = this.helperContainment.style.position, getComputedStyle(this.helperContainment).position.match(/static/) && (this.helperContainment.style.position = "relative")), this;
  }
  /** @internal */
  _getDragOffset(e, t, i) {
    let n = 0, o = 0;
    i && (n = this.dragTransform.xOffset, o = this.dragTransform.yOffset);
    const s = t.getBoundingClientRect();
    return {
      left: s.left,
      top: s.top,
      offsetLeft: -e.clientX + s.left - n,
      offsetTop: -e.clientY + s.top - o,
      width: s.width * this.dragTransform.xScale,
      height: s.height * this.dragTransform.yScale
    };
  }
  /** @internal TODO: set to public as called by DDDroppable! */
  ui() {
    const t = this.el.parentElement.getBoundingClientRect(), i = this.helper.getBoundingClientRect();
    return {
      position: {
        top: (i.top - t.top) * this.dragTransform.yScale,
        left: (i.left - t.left) * this.dragTransform.xScale
      }
      /* not used by GridStack for now...
      helper: [this.helper], //The object arr representing the helper that's being dragged.
      offset: { top: offset.top, left: offset.left } // Current offset position of the helper as { top, left } object.
      */
    };
  }
}
ui.originStyleProp = ["width", "height", "transform", "transform-origin", "transition", "pointerEvents", "position", "left", "top", "minWidth", "willChange"];
class Ol extends hn {
  constructor(e, t = {}) {
    super(), this.el = e, this.option = t, this._mouseEnter = this._mouseEnter.bind(this), this._mouseLeave = this._mouseLeave.bind(this), this.enable(), this._setupAccept();
  }
  on(e, t) {
    super.on(e, t);
  }
  off(e) {
    super.off(e);
  }
  enable() {
    this.disabled !== !1 && (super.enable(), this.el.classList.add("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), this.el.addEventListener("mouseenter", this._mouseEnter), this.el.addEventListener("mouseleave", this._mouseLeave), Re && (this.el.addEventListener("pointerenter", jn), this.el.addEventListener("pointerleave", Bn)));
  }
  disable(e = !1) {
    this.disabled !== !0 && (super.disable(), this.el.classList.remove("ui-droppable"), e || this.el.classList.add("ui-droppable-disabled"), this.el.removeEventListener("mouseenter", this._mouseEnter), this.el.removeEventListener("mouseleave", this._mouseLeave), Re && (this.el.removeEventListener("pointerenter", jn), this.el.removeEventListener("pointerleave", Bn)));
  }
  destroy() {
    this.disable(!0), this.el.classList.remove("ui-droppable"), this.el.classList.remove("ui-droppable-disabled"), super.destroy();
  }
  updateOption(e) {
    return Object.keys(e).forEach((t) => this.option[t] = e[t]), this._setupAccept(), this;
  }
  /** @internal called when the cursor enters our area - prepare for a possible drop and track leaving */
  _mouseEnter(e) {
    if (!L.dragElement || !this._canDrop(L.dragElement.el))
      return;
    e.preventDefault(), e.stopPropagation(), L.dropElement && L.dropElement !== this && L.dropElement._mouseLeave(e, !0), L.dropElement = this;
    const t = A.initEvent(e, { target: this.el, type: "dropover" });
    this.option.over && this.option.over(t, this._ui(L.dragElement)), this.triggerEvent("dropover", t), this.el.classList.add("ui-droppable-over");
  }
  /** @internal called when the item is leaving our area, stop tracking if we had moving item */
  _mouseLeave(e, t = !1) {
    if (!L.dragElement || L.dropElement !== this)
      return;
    e.preventDefault(), e.stopPropagation();
    const i = A.initEvent(e, { target: this.el, type: "dropout" });
    if (this.option.out && this.option.out(i, this._ui(L.dragElement)), this.triggerEvent("dropout", i), L.dropElement === this && (delete L.dropElement, !t)) {
      let n, o = this.el.parentElement;
      for (; !n && o; )
        n = o.ddElement?.ddDroppable, o = o.parentElement;
      n && n._mouseEnter(e);
    }
  }
  /** item is being dropped on us - called by the drag mouseup handler - this calls the client drop event */
  drop(e) {
    e.preventDefault();
    const t = A.initEvent(e, { target: this.el, type: "drop" });
    this.option.drop && this.option.drop(t, this._ui(L.dragElement)), this.triggerEvent("drop", t);
  }
  /** @internal true if element matches the string/method accept option */
  _canDrop(e) {
    return e && (!this.accept || this.accept(e));
  }
  /** @internal */
  _setupAccept() {
    return this.option.accept ? (typeof this.option.accept == "string" ? this.accept = (e) => e.classList.contains(this.option.accept) || e.matches(this.option.accept) : this.accept = this.option.accept, this) : this;
  }
  /** @internal */
  _ui(e) {
    return {
      draggable: e.el,
      ...e.ui()
    };
  }
}
class fn {
  static init(e) {
    return e.ddElement || (e.ddElement = new fn(e)), e.ddElement;
  }
  constructor(e) {
    this.el = e;
  }
  on(e, t) {
    return this.ddDraggable && ["drag", "dragstart", "dragstop"].indexOf(e) > -1 ? this.ddDraggable.on(e, t) : this.ddDroppable && ["drop", "dropover", "dropout"].indexOf(e) > -1 ? this.ddDroppable.on(e, t) : this.ddResizable && ["resizestart", "resize", "resizestop"].indexOf(e) > -1 && this.ddResizable.on(e, t), this;
  }
  off(e) {
    return this.ddDraggable && ["drag", "dragstart", "dragstop"].indexOf(e) > -1 ? this.ddDraggable.off(e) : this.ddDroppable && ["drop", "dropover", "dropout"].indexOf(e) > -1 ? this.ddDroppable.off(e) : this.ddResizable && ["resizestart", "resize", "resizestop"].indexOf(e) > -1 && this.ddResizable.off(e), this;
  }
  setupDraggable(e) {
    return this.ddDraggable ? this.ddDraggable.updateOption(e) : this.ddDraggable = new ui(this.el, e), this;
  }
  cleanDraggable() {
    return this.ddDraggable && (this.ddDraggable.destroy(), delete this.ddDraggable), this;
  }
  setupResizable(e) {
    return this.ddResizable ? this.ddResizable.updateOption(e) : this.ddResizable = new ci(this.el, e), this;
  }
  cleanResizable() {
    return this.ddResizable && (this.ddResizable.destroy(), delete this.ddResizable), this;
  }
  setupDroppable(e) {
    return this.ddDroppable ? this.ddDroppable.updateOption(e) : this.ddDroppable = new Ol(this.el, e), this;
  }
  cleanDroppable() {
    return this.ddDroppable && (this.ddDroppable.destroy(), delete this.ddDroppable), this;
  }
}
class Sl {
  /**
   * Enable/disable/configure resizing for grid elements.
   *
   * @param el - Grid item element(s) to configure
   * @param opts - Resize options or command ('enable', 'disable', 'destroy', 'option', or config object)
   * @param key - Option key when using 'option' command
   * @param value - Option value when using 'option' command
   * @returns this instance for chaining
   *
   * @example
   * dd.resizable(element, 'enable');  // Enable resizing
   * dd.resizable(element, 'option', 'minWidth', 100);  // Set minimum width
   */
  resizable(e, t, i, n) {
    return this._getDDElements(e, t).forEach((o) => {
      if (t === "disable" || t === "enable")
        o.ddResizable && o.ddResizable[t]();
      else if (t === "destroy")
        o.ddResizable && o.cleanResizable();
      else if (t === "option")
        o.setupResizable({ [i]: n });
      else {
        const a = o.el.gridstackNode.grid;
        let c = o.el.getAttribute("gs-resize-handles") || a.opts.resizable.handles || "e,s,se";
        c === "all" && (c = "n,e,s,w,se,sw,ne,nw");
        const u = !a.opts.alwaysShowResizeHandle;
        o.setupResizable({
          ...a.opts.resizable,
          handles: c,
          autoHide: u,
          start: t.start,
          stop: t.stop,
          resize: t.resize
        });
      }
    }), this;
  }
  /**
   * Enable/disable/configure dragging for grid elements.
   *
   * @param el - Grid item element(s) to configure
   * @param opts - Drag options or command ('enable', 'disable', 'destroy', 'option', or config object)
   * @param key - Option key when using 'option' command
   * @param value - Option value when using 'option' command
   * @returns this instance for chaining
   *
   * @example
   * dd.draggable(element, 'enable');  // Enable dragging
   * dd.draggable(element, {handle: '.drag-handle'});  // Configure drag handle
   */
  draggable(e, t, i, n) {
    return this._getDDElements(e, t).forEach((o) => {
      if (t === "disable" || t === "enable")
        o.ddDraggable && o.ddDraggable[t]();
      else if (t === "destroy")
        o.ddDraggable && o.cleanDraggable();
      else if (t === "option")
        o.setupDraggable({ [i]: n });
      else {
        const s = o.el.gridstackNode.grid;
        o.setupDraggable({
          ...s.opts.draggable,
          // containment: (grid.parentGridNode && grid.opts.dragOut === false) ? grid.el.parentElement : (grid.opts.draggable.containment || null),
          start: t.start,
          stop: t.stop,
          drag: t.drag
        });
      }
    }), this;
  }
  dragIn(e, t) {
    return this._getDDElements(e).forEach((i) => i.setupDraggable(t)), this;
  }
  droppable(e, t, i, n) {
    return typeof t.accept == "function" && !t._accept && (t._accept = t.accept, t.accept = (o) => t._accept(o)), this._getDDElements(e, t).forEach((o) => {
      t === "disable" || t === "enable" ? o.ddDroppable && o.ddDroppable[t]() : t === "destroy" ? o.ddDroppable && o.cleanDroppable() : t === "option" ? o.setupDroppable({ [i]: n }) : o.setupDroppable(t);
    }), this;
  }
  /** true if element is droppable */
  isDroppable(e) {
    return !!(e?.ddElement?.ddDroppable && !e.ddElement.ddDroppable.disabled);
  }
  /** true if element is draggable */
  isDraggable(e) {
    return !!(e?.ddElement?.ddDraggable && !e.ddElement.ddDraggable.disabled);
  }
  /** true if element is draggable */
  isResizable(e) {
    return !!(e?.ddElement?.ddResizable && !e.ddElement.ddResizable.disabled);
  }
  on(e, t, i) {
    return this._getDDElements(e).forEach((n) => n.on(t, (o) => {
      i(o, L.dragElement ? L.dragElement.el : o.target, L.dragElement ? L.dragElement.helper : null);
    })), this;
  }
  off(e, t) {
    return this._getDDElements(e).forEach((i) => i.off(t)), this;
  }
  /** @internal returns a list of DD elements, creating them on the fly by default unless option is to destroy or disable */
  _getDDElements(e, t) {
    const i = e.gridstack || t !== "destroy" && t !== "disable", n = A.getElements(e);
    return n.length ? n.map((s) => s.ddElement || (i ? fn.init(s) : null)).filter((s) => s) : [];
  }
}
const ce = new Sl();
class z {
  /**
   * initializing the HTML element, or selector string, into a grid will return the grid. Calling it again will
   * simply return the existing instance (ignore any passed options). There is also an initAll() version that support
   * multiple grids initialization at once. Or you can use addGrid() to create the entire grid from JSON.
   * @param options grid options (optional)
   * @param elOrString element or CSS selector (first one used) to convert to a grid (default to '.grid-stack' class selector)
   *
   * @example
   * const grid = GridStack.init();
   *
   * Note: the HTMLElement (of type GridHTMLElement) will store a `gridstack: GridStack` value that can be retrieve later
   * const grid = document.querySelector('.grid-stack').gridstack;
   */
  static init(e = {}, t = ".grid-stack") {
    if (typeof document > "u")
      return null;
    const i = z.getGridElement(t);
    return i ? (i.gridstack || (i.gridstack = new z(i, A.cloneDeep(e))), i.gridstack) : (console.error(typeof t == "string" ? 'GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
Note: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.` : "GridStack.init() no grid element was passed."), null);
  }
  /**
   * Will initialize a list of elements (given a selector) and return an array of grids.
   * @param options grid options (optional)
   * @param selector elements selector to convert to grids (default to '.grid-stack' class selector)
   *
   * @example
   * const grids = GridStack.initAll();
   * grids.forEach(...)
   */
  static initAll(e = {}, t = ".grid-stack") {
    const i = [];
    return typeof document > "u" || (z.getGridElements(t).forEach((n) => {
      n.gridstack || (n.gridstack = new z(n, A.cloneDeep(e))), i.push(n.gridstack);
    }), i.length === 0 && console.error('GridStack.initAll() no grid was found with selector "' + t + `" - element missing or wrong selector ?
Note: ".grid-stack" is required for proper CSS styling and drag/drop, and is the default selector.`)), i;
  }
  /**
   * call to create a grid with the given options, including loading any children from JSON structure. This will call GridStack.init(), then
   * grid.load() on any passed children (recursively). Great alternative to calling init() if you want entire grid to come from
   * JSON serialized data, including options.
   * @param parent HTML element parent to the grid
   * @param opt grids options used to initialize the grid, and list of children
   */
  static addGrid(e, t = {}) {
    if (!e)
      return null;
    let i = e;
    if (i.gridstack) {
      const s = i.gridstack;
      return t && (s.opts = { ...s.opts, ...t }), t.children !== void 0 && s.load(t.children), s;
    }
    return (!e.classList.contains("grid-stack") || z.addRemoveCB) && (z.addRemoveCB ? i = z.addRemoveCB(e, t, !0, !0) : i = A.createDiv(["grid-stack", t.class], e)), z.init(t, i);
  }
  /** call this method to register your engine instead of the default one.
   * See instead `GridStackOptions.engineClass` if you only need to
   * replace just one instance.
   */
  static registerEngine(e) {
    z.engineClass = e;
  }
  /**
   * @internal create placeholder DIV as needed
   * @returns the placeholder element for indicating drop zones during drag operations
   */
  get placeholder() {
    if (!this._placeholder) {
      this._placeholder = A.createDiv([this.opts.placeholderClass, be.itemClass, this.opts.itemClass]);
      const e = A.createDiv(["placeholder-content"], this._placeholder);
      this.opts.placeholderText && (e.textContent = this.opts.placeholderText);
    }
    return this._placeholder;
  }
  /**
   * Construct a grid item from the given element and options
   * @param el the HTML element tied to this grid after it's been initialized
   * @param opts grid options - public for classes to access, but use methods to modify!
   */
  constructor(e, t = {}) {
    this.el = e, this.opts = t, this.animationDelay = 310, this._gsEventHandler = {}, this._extraDragRow = 0, this.dragTransform = { xScale: 1, yScale: 1, xOffset: 0, yOffset: 0 }, e.gridstack = this, this.opts = t = t || {}, e.classList.contains("grid-stack") || this.el.classList.add("grid-stack"), t.row && (t.minRow = t.maxRow = t.row, delete t.row);
    const i = A.toNumber(e.getAttribute("gs-row"));
    t.column === "auto" && delete t.column, t.alwaysShowResizeHandle !== void 0 && (t._alwaysShowResizeHandle = t.alwaysShowResizeHandle);
    const n = t.columnOpts;
    if (n) {
      const u = n.breakpoints;
      !n.columnWidth && !u?.length ? delete t.columnOpts : (n.columnMax = n.columnMax || 12, u?.length > 1 && u.sort((l, d) => (d.w || 0) - (l.w || 0)));
    }
    const o = {
      ...A.cloneDeep(be),
      column: A.toNumber(e.getAttribute("gs-column")) || be.column,
      minRow: i || A.toNumber(e.getAttribute("gs-min-row")) || be.minRow,
      maxRow: i || A.toNumber(e.getAttribute("gs-max-row")) || be.maxRow,
      staticGrid: A.toBool(e.getAttribute("gs-static")) || be.staticGrid,
      sizeToContent: A.toBool(e.getAttribute("gs-size-to-content")) || void 0,
      draggable: {
        handle: (t.handleClass ? "." + t.handleClass : t.handle ? t.handle : "") || be.draggable.handle
      },
      removableOptions: {
        accept: t.itemClass || be.removableOptions.accept,
        decline: be.removableOptions.decline
      }
    };
    e.getAttribute("gs-animate") && (o.animate = A.toBool(e.getAttribute("gs-animate"))), t = A.defaults(t, o), this._initMargin(), this.checkDynamicColumn(), this._updateColumnVar(t), t.rtl === "auto" && (t.rtl = e.style.direction === "rtl"), t.rtl && this.el.classList.add("grid-stack-rtl");
    const a = this.el.closest("." + be.itemClass)?.gridstackNode;
    if (a && (a.subGrid = this, this.parentGridNode = a, this.el.classList.add("grid-stack-nested"), a.el.classList.add("grid-stack-sub-grid")), this._isAutoCellHeight = t.cellHeight === "auto", this._isAutoCellHeight || t.cellHeight === "initial")
      this.cellHeight(void 0);
    else {
      typeof t.cellHeight == "number" && t.cellHeightUnit && t.cellHeightUnit !== be.cellHeightUnit && (t.cellHeight = t.cellHeight + t.cellHeightUnit, delete t.cellHeightUnit);
      const u = t.cellHeight;
      delete t.cellHeight, this.cellHeight(u);
    }
    t.alwaysShowResizeHandle === "mobile" && (t.alwaysShowResizeHandle = Re), this._setStaticClass();
    const c = t.engineClass || z.engineClass || Xe;
    if (this.engine = new c({
      column: this.getColumn(),
      float: t.float,
      maxRow: t.maxRow,
      onChange: (u) => {
        u.forEach((l) => {
          const d = l.el;
          d && (l._removeDOM ? (d && d.remove(), delete l._removeDOM) : this._writePosAttr(d, l));
        }), this._updateContainerHeight();
      }
    }), t.auto && (this.batchUpdate(), this.engine._loading = !0, this.getGridItems().forEach((u) => this._prepareElement(u)), delete this.engine._loading, this.batchUpdate(!1)), t.children) {
      const u = t.children;
      delete t.children, u.length && this.load(u);
    }
    this.setAnimation(), t.subGridDynamic && !L.pauseDrag && (L.pauseDrag = !0), t.draggable?.pause !== void 0 && (L.pauseDrag = t.draggable.pause), this._setupRemoveDrop(), this._setupAcceptWidget(), this._updateResizeEvent();
  }
  _updateColumnVar(e = this.opts) {
    this.el.classList.add("gs-" + e.column), typeof e.column == "number" && this.el.style.setProperty("--gs-column-width", `${100 / e.column}%`);
  }
  /**
   * add a new widget and returns it.
   *
   * Widget will be always placed even if result height is more than actual grid height.
   * You need to use `willItFit()` before calling addWidget for additional check.
   * See also `makeWidget(el)` for DOM element.
   *
   * @example
   * const grid = GridStack.init();
   * grid.addWidget({w: 3, content: 'hello'});
   *
   * @param w GridStackWidget definition. used MakeWidget(el) if you have dom element instead.
   */
  addWidget(e) {
    if (!e)
      return;
    if (typeof e == "string") {
      console.error("V11: GridStack.addWidget() does not support string anymore. see #2736");
      return;
    }
    if (e.ELEMENT_NODE)
      return console.error("V11: GridStack.addWidget() does not support HTMLElement anymore. use makeWidget()"), this.makeWidget(e);
    let t, i = e;
    if (i.grid = this, i.el ? t = i.el : z.addRemoveCB ? t = z.addRemoveCB(this.el, e, !0, !1) : t = this.createWidgetDivs(i), !t)
      return;
    if (i = t.gridstackNode, i && t.parentElement === this.el && this.engine.nodes.find((o) => o._id === i._id))
      return t;
    const n = this._readAttr(t);
    return A.defaults(e, n), this.engine.prepareNode(e), this.el.appendChild(t), this.makeWidget(t, e), t;
  }
  /**
   * Create the default grid item divs and content (possibly lazy loaded) by using GridStack.renderCB().
   *
   * @param n GridStackNode definition containing widget configuration
   * @returns the created HTML element with proper grid item structure
   *
   * @example
   * const element = grid.createWidgetDivs({ w: 2, h: 1, content: 'Hello World' });
   */
  createWidgetDivs(e) {
    const t = A.createDiv(["grid-stack-item", this.opts.itemClass]), i = A.createDiv(["grid-stack-item-content"], t);
    return A.lazyLoad(e) ? e.visibleObservable || (e.visibleObservable = new IntersectionObserver(([n]) => {
      n.isIntersecting && (e.visibleObservable?.disconnect(), delete e.visibleObservable, z.renderCB(i, e), e.grid?.prepareDragDrop(e.el));
    }), window.setTimeout(() => e.visibleObservable?.observe(t))) : z.renderCB(i, e), t;
  }
  /**
   * Convert an existing gridItem element into a sub-grid with the given (optional) options, else inherit them
   * from the parent's subGrid options.
   * @param el gridItem element to convert
   * @param ops (optional) sub-grid options, else default to node, then parent settings, else defaults
   * @param nodeToAdd (optional) node to add to the newly created sub grid (used when dragging over existing regular item)
   * @param saveContent if true (default) the html inside .grid-stack-content will be saved to child widget
   * @returns newly created grid
   */
  makeSubGrid(e, t, i, n = !0) {
    let o = e.gridstackNode;
    if (o || (o = this.makeWidget(e).gridstackNode), o.subGrid?.el)
      return o.subGrid;
    let s, a = this;
    for (; a && !s; )
      s = a.opts?.subGridOpts, a = a.parentGridNode?.grid;
    t = A.cloneDeep({
      // by default sub-grid inherit from us | parent, other than id, children, etc...
      ...this.opts,
      id: void 0,
      children: void 0,
      column: "auto",
      columnOpts: void 0,
      layout: "list",
      subGridOpts: void 0,
      ...s || {},
      ...t || o.subGridOpts || {}
    }), o.subGridOpts = t;
    let c;
    t.column === "auto" && (c = !0, t.column = Math.max(o.w || 1, i?.w || 1), delete t.columnOpts);
    let u = o.el.querySelector(".grid-stack-item-content"), l, d;
    if (n && (this._removeDD(o.el), d = { ...o, x: 0, y: 0 }, A.removeInternalForSave(d), delete d.subGridOpts, o.content && (d.content = o.content, delete o.content), z.addRemoveCB ? l = z.addRemoveCB(this.el, d, !0, !1) : (l = A.createDiv(["grid-stack-item"]), l.appendChild(u), u = A.createDiv(["grid-stack-item-content"], o.el)), this.prepareDragDrop(o.el)), i) {
      const f = c ? t.column : o.w, g = o.h + i.h, m = o.el.style;
      m.transition = "none", this.update(o.el, { w: f, h: g }), setTimeout(() => m.transition = null);
    }
    const h = o.subGrid = z.addGrid(u, t);
    return i?._moving && (h._isTemp = !0), c && (h._autoColumn = !0), n && h.makeWidget(l, d), i && (i._moving ? window.setTimeout(() => A.simulateMouseEvent(i._event, "mouseenter", h.el), 0) : h.makeWidget(o.el, o)), this.resizeToContentCheck(!1, o), h;
  }
  /**
   * called when an item was converted into a nested grid to accommodate a dragged over item, but then item leaves - return back
   * to the original grid-item. Also called to remove empty sub-grids when last item is dragged out (since re-creating is simple)
   */
  removeAsSubGrid(e) {
    const t = this.parentGridNode?.grid;
    t && (t.batchUpdate(), t.removeWidget(this.parentGridNode.el, !0, !0), this.engine.nodes.forEach((i) => {
      i.x += this.parentGridNode.x, i.y += this.parentGridNode.y, t.makeWidget(i.el, i);
    }), t.batchUpdate(!1), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, e && window.setTimeout(() => A.simulateMouseEvent(e._event, "mouseenter", t.el), 0));
  }
  /**
   * saves the current layout returning a list of widgets for serialization which might include any nested grids.
   * @param saveContent if true (default) the latest html inside .grid-stack-content will be saved to GridStackWidget.content field, else it will
   * be removed.
   * @param saveGridOpt if true (default false), save the grid options itself, so you can call the new GridStack.addGrid()
   * to recreate everything from scratch. GridStackOptions.children would then contain the widget list instead.
   * @param saveCB callback for each node -> widget, so application can insert additional data to be saved into the widget data structure.
   * @param column if provided, the grid will be saved for the given column size (IFF we have matching internal saved layout, or current layout).
   * Otherwise it will use the largest possible layout (say 12 even if rendering at 1 column) so we can restore to all layouts.
   * NOTE: if you want to save to currently display layout, pass this.getColumn() as column.
   * NOTE2: nested grids will ALWAYS save to the container size to be in sync with parent.
   * @returns list of widgets or full grid option, including .children list of widgets
   */
  save(e = !0, t = !1, i = z.saveCB, n) {
    const o = this.engine.save(e, i, n);
    if (o.forEach((s) => {
      if (e && s.el && !s.subGrid && !i) {
        const a = s.el.querySelector(".grid-stack-item-content");
        s.content = a?.innerHTML, s.content || delete s.content;
      } else if (!e && !i && delete s.content, s.subGrid?.el) {
        const a = s.w || s.subGrid.getColumn(), c = s.subGrid.save(e, t, i, a);
        s.subGridOpts = t ? c : { children: c }, delete s.subGrid;
      }
      delete s.el;
    }), t) {
      const s = A.cloneDeep(this.opts);
      s.marginBottom === s.marginTop && s.marginRight === s.marginLeft && s.marginTop === s.marginRight && (s.margin = s.marginTop, delete s.marginTop, delete s.marginRight, delete s.marginBottom, delete s.marginLeft), s.rtl === (this.el.style.direction === "rtl") && (s.rtl = "auto"), this._isAutoCellHeight && (s.cellHeight = "auto"), this._autoColumn && (s.column = "auto");
      const a = s._alwaysShowResizeHandle;
      return delete s._alwaysShowResizeHandle, a !== void 0 ? s.alwaysShowResizeHandle = a : delete s.alwaysShowResizeHandle, A.removeInternalAndSame(s, be), s.children = o, s;
    }
    return o;
  }
  /**
   * Load widgets from a list. This will call update() on each (matching by id) or add/remove widgets that are not there.
   * Used to restore a grid layout for a saved layout list (see `save()`).
   *
   * @param items list of widgets definition to update/create
   * @param addRemove boolean (default true) or callback method can be passed to control if and how missing widgets can be added/removed, giving
   * the user control of insertion.
   * @returns the grid instance for chaining
   *
   * @example
   * // Basic usage with saved layout
   * const savedLayout = grid.save(); // Save current layout
   * // ... later restore it
   * grid.load(savedLayout);
   *
   * // Load with custom add/remove callback
   * grid.load(layout, (items, grid, add) => {
   *   if (add) {
   *     // Custom logic for adding new widgets
   *     items.forEach(item => {
   *       const el = document.createElement('div');
   *       el.innerHTML = item.content || '';
   *       grid.addWidget(el, item);
   *     });
   *   } else {
   *     // Custom logic for removing widgets
   *     items.forEach(item => grid.removeWidget(item.el));
   *   }
   * });
   *
   * // Load without adding/removing missing widgets
   * grid.load(layout, false);
   *
   * @see {@link http://gridstackjs.com/demo/serialization.html} for complete example
   */
  load(e, t = z.addRemoveCB || !0) {
    e = A.cloneDeep(e);
    const i = this.getColumn();
    e.forEach((l) => {
      l.w = l.w || l.minW || 1, l.h = l.h || l.minH || 1;
    }), e = A.sort(e), this.engine.skipCacheUpdate = this._ignoreLayoutsNodeChange = !0;
    let n = 0;
    e.forEach((l) => {
      n = Math.max(n, (l.x || 0) + l.w);
    }), n > this.engine.defaultColumn && (this.engine.defaultColumn = n), n > i && (this.engine.nodes.length === 0 && this.responseLayout ? (this.engine.nodes = e, this.engine.columnChanged(n, i, this.responseLayout), e = this.engine.nodes, this.engine.nodes = [], delete this.responseLayout) : this.engine.cacheLayout(e, n, !0));
    const o = z.addRemoveCB;
    typeof t == "function" && (z.addRemoveCB = t);
    const s = [];
    this.batchUpdate();
    const a = !this.engine.nodes.length, c = a && this.opts.animate;
    c && this.setAnimation(!1), !a && t && [...this.engine.nodes].forEach((d) => {
      if (!d.id)
        return;
      A.find(e, d.id) || (z.addRemoveCB && z.addRemoveCB(this.el, d, !1, !1), s.push(d), this.removeWidget(d.el, !0, !1));
    }), this.engine._loading = !0;
    const u = [];
    return this.engine.nodes = this.engine.nodes.filter((l) => A.find(e, l.id) ? (u.push(l), !1) : !0), e.forEach((l) => {
      const d = A.find(u, l.id);
      if (d) {
        if (A.shouldSizeToContent(d) && (l.h = d.h), this.engine.nodeBoundFix(l), (l.autoPosition || l.x === void 0 || l.y === void 0) && (l.w = l.w || d.w, l.h = l.h || d.h, this.engine.findEmptyPosition(l)), this.engine.nodes.push(d), A.samePos(d, l) && this.engine.nodes.length > 1 && (this.moveNode(d, { ...l, forceCollide: !0 }), A.copyPos(l, d)), this.update(d.el, l), l.subGridOpts?.children) {
          const h = d.el.querySelector(".grid-stack");
          h && h.gridstack && h.gridstack.load(l.subGridOpts.children);
        }
      } else t && this.addWidget(l);
    }), delete this.engine._loading, this.engine.removedNodes = s, this.batchUpdate(!1), delete this._ignoreLayoutsNodeChange, delete this.engine.skipCacheUpdate, o ? z.addRemoveCB = o : delete z.addRemoveCB, c && this.setAnimation(!0, !0), this;
  }
  /**
   * use before calling a bunch of `addWidget()` to prevent un-necessary relayouts in between (more efficient)
   * and get a single event callback. You will see no changes until `batchUpdate(false)` is called.
   */
  batchUpdate(e = !0) {
    return this.engine.batchUpdate(e), e || (this._updateContainerHeight(), this._triggerRemoveEvent(), this._triggerAddEvent(), this._triggerChangeEvent()), this;
  }
  /**
   * Gets the current cell height in pixels. This takes into account the unit type and converts to pixels if necessary.
   *
   * @param forcePixel if true, forces conversion to pixels even when cellHeight is specified in other units
   * @returns the cell height in pixels
   *
   * @example
   * const height = grid.getCellHeight();
   * console.log('Cell height:', height, 'px');
   *
   * // Force pixel conversion
   * const pixelHeight = grid.getCellHeight(true);
   */
  getCellHeight(e = !1) {
    if (this.opts.cellHeight && this.opts.cellHeight !== "auto" && (!e || !this.opts.cellHeightUnit || this.opts.cellHeightUnit === "px"))
      return this.opts.cellHeight;
    if (this.opts.cellHeightUnit === "rem")
      return this.opts.cellHeight * parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (this.opts.cellHeightUnit === "em")
      return this.opts.cellHeight * parseFloat(getComputedStyle(this.el).fontSize);
    if (this.opts.cellHeightUnit === "cm")
      return this.opts.cellHeight * (96 / 2.54);
    if (this.opts.cellHeightUnit === "mm")
      return this.opts.cellHeight * (96 / 2.54) / 10;
    const t = this.el.querySelector("." + this.opts.itemClass);
    if (t) {
      const n = A.toNumber(t.getAttribute("gs-h")) || 1;
      return Math.round(t.offsetHeight / n);
    }
    const i = parseInt(this.el.getAttribute("gs-current-row"));
    return i ? Math.round(this.el.getBoundingClientRect().height / i) : this.opts.cellHeight;
  }
  /**
   * Update current cell height - see `GridStackOptions.cellHeight` for format by updating eh Browser CSS variable.
   *
   * @param val the cell height. Options:
   *   - `undefined`: cells content will be made square (match width minus margin)
   *   - `0`: the CSS will be generated by the application instead
   *   - number: height in pixels
   *   - string: height with units (e.g., '70px', '5rem', '2em')
   * @returns the grid instance for chaining
   *
   * @example
   * grid.cellHeight(100);     // 100px height
   * grid.cellHeight('70px');  // explicit pixel height
   * grid.cellHeight('5rem');  // relative to root font size
   * grid.cellHeight(grid.cellWidth() * 1.2); // aspect ratio
   * grid.cellHeight('auto');  // auto-size based on content
   */
  cellHeight(e) {
    if (e !== void 0 && this._isAutoCellHeight !== (e === "auto") && (this._isAutoCellHeight = e === "auto", this._updateResizeEvent()), (e === "initial" || e === "auto") && (e = void 0), e === void 0) {
      const i = -this.opts.marginRight - this.opts.marginLeft + this.opts.marginTop + this.opts.marginBottom;
      e = this.cellWidth() + i;
    }
    const t = A.parseHeight(e);
    return this.opts.cellHeightUnit === t.unit && this.opts.cellHeight === t.h ? this : (this.opts.cellHeightUnit = t.unit, this.opts.cellHeight = t.h, this.el.style.setProperty("--gs-cell-height", `${this.opts.cellHeight}${this.opts.cellHeightUnit}`), this._updateContainerHeight(), this.resizeToContentCheck(), this);
  }
  /** Gets current cell width. */
  /**
   * Gets the current cell width in pixels. This is calculated based on the grid container width divided by the number of columns.
   *
   * @returns the cell width in pixels
   *
   * @example
   * const width = grid.cellWidth();
   * console.log('Cell width:', width, 'px');
   *
   * // Use cell width to calculate widget dimensions
   * const widgetWidth = width * 3; // For a 3-column wide widget
   */
  cellWidth() {
    return this._widthOrContainer() / this.getColumn();
  }
  /** return our expected width (or parent) , and optionally of window for dynamic column check */
  _widthOrContainer(e = !1) {
    return e && this.opts.columnOpts?.breakpointForWindow ? window.innerWidth : this.el.clientWidth || this.el.parentElement.clientWidth || window.innerWidth;
  }
  /** checks for dynamic column count for our current size, returning true if changed */
  checkDynamicColumn() {
    const e = this.opts.columnOpts;
    if (!e || !e.columnWidth && !e.breakpoints?.length)
      return !1;
    const t = this.getColumn();
    let i = t;
    const n = this._widthOrContainer(!0);
    if (e.columnWidth)
      i = Math.min(Math.round(n / e.columnWidth) || 1, e.columnMax);
    else {
      i = e.columnMax;
      let o = 0;
      for (; o < e.breakpoints.length && n <= e.breakpoints[o].w; )
        i = e.breakpoints[o++].c || t;
    }
    if (i !== t) {
      const o = e.breakpoints?.find((s) => s.c === i);
      return this.column(i, o?.layout || e.layout), !0;
    }
    return !1;
  }
  /**
   * Re-layout grid items to reclaim any empty space. This is useful after removing widgets
   * or when you want to optimize the layout.
   *
   * @param layout layout type. Options:
   *   - 'compact' (default): might re-order items to fill any empty space
   *   - 'list': keep the widget left->right order the same, even if that means leaving an empty slot if things don't fit
   * @param doSort re-sort items first based on x,y position. Set to false to do your own sorting ahead (default: true)
   * @returns the grid instance for chaining
   *
   * @example
   * // Compact layout after removing widgets
   * grid.removeWidget('.widget-to-remove');
   * grid.compact();
   *
   * // Use list layout (preserve order)
   * grid.compact('list');
   *
   * // Compact without sorting first
   * grid.compact('compact', false);
   */
  compact(e = "compact", t = !0) {
    return this.engine.compact(e, t), this._triggerChangeEvent(), this;
  }
  /**
   * Set the number of columns in the grid. Will update existing widgets to conform to new number of columns,
   * as well as cache the original layout so you can revert back to previous positions without loss.
   *
   * Requires `gridstack-extra.css` or `gridstack-extra.min.css` for [2-11] columns,
   * else you will need to generate correct CSS.
   * See: https://github.com/gridstack/gridstack.js#change-grid-columns
   *
   * @param column Integer > 0 (default 12)
   * @param layout specify the type of re-layout that will happen. Options:
   *   - 'moveScale' (default): scale widget positions and sizes
   *   - 'move': keep widget sizes, only move positions
   *   - 'scale': keep widget positions, only scale sizes
   *   - 'none': don't change widget positions or sizes
   *   Note: items will never be outside of the current column boundaries.
   *   Ignored for `column=1` as we always want to vertically stack.
   * @returns the grid instance for chaining
   *
   * @example
   * // Change to 6 columns with default scaling
   * grid.column(6);
   *
   * // Change to 4 columns, only move positions
   * grid.column(4, 'move');
   *
   * // Single column layout (vertical stack)
   * grid.column(1);
   */
  column(e, t = "moveScale") {
    if (!e || e < 1 || this.opts.column === e)
      return this;
    const i = this.getColumn();
    return this.opts.column = e, this.engine ? (this.engine.column = e, this.el.classList.remove("gs-" + i), this._updateColumnVar(), this.engine.columnChanged(i, e, t), this._isAutoCellHeight && this.cellHeight(), this.resizeToContentCheck(!0), this._ignoreLayoutsNodeChange = !0, this._triggerChangeEvent(), delete this._ignoreLayoutsNodeChange, this) : (this.responseLayout = t, this);
  }
  /**
   * Get the number of columns in the grid (default 12).
   *
   * @returns the current number of columns in the grid
   *
   * @example
   * const columnCount = grid.getColumn(); // returns 12 by default
   */
  getColumn() {
    return this.opts.column;
  }
  /**
   * Returns an array of grid HTML elements (no placeholder) - used to iterate through our children in DOM order.
   * This method excludes placeholder elements and returns only actual grid items.
   *
   * @returns array of GridItemHTMLElement instances representing all grid items
   *
   * @example
   * const items = grid.getGridItems();
   * items.forEach(item => {
   *   console.log('Item ID:', item.gridstackNode.id);
   * });
   */
  getGridItems() {
    return Array.from(this.el.children).filter((e) => e.matches("." + this.opts.itemClass) && !e.matches("." + this.opts.placeholderClass));
  }
  /**
   * Returns true if change callbacks should be ignored due to column change, sizeToContent, loading, etc.
   * This is useful for callers who want to implement dirty flag functionality.
   *
   * @returns true if change callbacks are currently being ignored
   *
   * @example
   * if (!grid.isIgnoreChangeCB()) {
   *   // Process the change event
   *   console.log('Grid layout changed');
   * }
   */
  isIgnoreChangeCB() {
    return this._ignoreLayoutsNodeChange;
  }
  /**
   * Destroys a grid instance. DO NOT CALL any methods or access any vars after this as it will free up members.
   * @param removeDOM if `false` grid and items HTML elements will not be removed from the DOM (Optional. Default `true`).
   */
  destroy(e = !0) {
    if (this.el)
      return this.offAll(), this._updateResizeEvent(!0), this.setStatic(!0, !1), this.setAnimation(!1), e ? this.el.parentNode.removeChild(this.el) : (this.removeAll(e), this.el.removeAttribute("gs-current-row")), this.parentGridNode && delete this.parentGridNode.subGrid, delete this.parentGridNode, delete this.opts, delete this._placeholder?.gridstackNode, delete this._placeholder, delete this.engine, delete this.el.gridstack, delete this.el, this;
  }
  /**
   * Enable/disable floating widgets (default: `false`). When enabled, widgets can float up to fill empty spaces.
   * See [example](http://gridstackjs.com/demo/float.html)
   *
   * @param val true to enable floating, false to disable
   * @returns the grid instance for chaining
   *
   * @example
   * grid.float(true);  // Enable floating
   * grid.float(false); // Disable floating (default)
   */
  float(e) {
    return this.opts.float !== e && (this.opts.float = this.engine.float = e, this._triggerChangeEvent()), this;
  }
  /**
   * Get the current float mode setting.
   *
   * @returns true if floating is enabled, false otherwise
   *
   * @example
   * const isFloating = grid.getFloat();
   * console.log('Floating enabled:', isFloating);
   */
  getFloat() {
    return this.engine.float;
  }
  /**
   * Get the position of the cell under a pixel on screen.
   * @param position the position of the pixel to resolve in
   * absolute coordinates, as an object with top and left properties
   * @param useDocRelative if true, value will be based on document position vs parent position (Optional. Default false).
   * Useful when grid is within `position: relative` element
   *
   * Returns an object with properties `x` and `y` i.e. the column and row in the grid.
   */
  getCellFromPixel(e, t = !1) {
    const i = this.el.getBoundingClientRect();
    let n;
    t ? n = { top: i.top + document.documentElement.scrollTop, left: i.left } : n = { top: this.el.offsetTop, left: this.el.offsetLeft };
    const o = e.left - n.left, s = e.top - n.top, a = i.width / this.getColumn(), c = i.height / parseInt(this.el.getAttribute("gs-current-row"));
    return { x: Math.floor(o / a), y: Math.floor(s / c) };
  }
  /**
   * Returns the current number of rows, which will be at least `minRow` if set.
   * The row count is based on the highest positioned widget in the grid.
   *
   * @returns the current number of rows in the grid
   *
   * @example
   * const rowCount = grid.getRow();
   * console.log('Grid has', rowCount, 'rows');
   */
  getRow() {
    return Math.max(this.engine.getRow(), this.opts.minRow || 0);
  }
  /**
   * Checks if the specified rectangular area is empty (no widgets occupy any part of it).
   *
   * @param x the x coordinate (column) of the area to check
   * @param y the y coordinate (row) of the area to check
   * @param w the width in columns of the area to check
   * @param h the height in rows of the area to check
   * @returns true if the area is completely empty, false if any widget overlaps
   *
   * @example
   * // Check if a 2x2 area at position (1,1) is empty
   * if (grid.isAreaEmpty(1, 1, 2, 2)) {
   *   console.log('Area is available for placement');
   * }
   */
  isAreaEmpty(e, t, i, n) {
    return this.engine.isAreaEmpty(e, t, i, n);
  }
  /**
   * If you add elements to your grid by hand (or have some framework creating DOM), you have to tell gridstack afterwards to make them widgets.
   * If you want gridstack to add the elements for you, use `addWidget()` instead.
   * Makes the given element a widget and returns it.
   *
   * @param els widget or single selector to convert.
   * @param options widget definition to use instead of reading attributes or using default sizing values
   * @returns the converted GridItemHTMLElement
   *
   * @example
   * const grid = GridStack.init();
   *
   * // Create HTML content manually, possibly looking like:
   * // <div id="item-1" gs-x="0" gs-y="0" gs-w="3" gs-h="2"></div>
   * grid.el.innerHTML = '<div id="item-1" gs-w="3"></div><div id="item-2"></div>';
   *
   * // Convert existing elements to widgets
   * grid.makeWidget('#item-1'); // Uses gs-* attributes from DOM
   * grid.makeWidget('#item-2', {w: 2, h: 1, content: 'Hello World'});
   *
   * // Or pass DOM element directly
   * const element = document.getElementById('item-3');
   * grid.makeWidget(element, {x: 0, y: 1, w: 4, h: 2});
   */
  makeWidget(e, t) {
    const i = z.getElement(e);
    if (!i || i.gridstackNode)
      return i;
    i.parentElement || this.el.appendChild(i), this._prepareElement(i, !0, t);
    const n = i.gridstackNode;
    this._updateContainerHeight(), n.subGridOpts && this.makeSubGrid(i, n.subGridOpts, void 0, !1);
    let o;
    return this.opts.column === 1 && !this._ignoreLayoutsNodeChange && (o = this._ignoreLayoutsNodeChange = !0), this._triggerAddEvent(), this._triggerChangeEvent(), o && delete this._ignoreLayoutsNodeChange, i;
  }
  on(e, t) {
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((n) => this.on(n, t)), this) : (e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable" ? (e === "enable" || e === "disable" ? this._gsEventHandler[e] = (n) => t(n) : this._gsEventHandler[e] = (n) => {
      n.detail && t(n, n.detail);
    }, this.el.addEventListener(e, this._gsEventHandler[e])) : e === "drag" || e === "dragstart" || e === "dragstop" || e === "resizestart" || e === "resize" || e === "resizestop" || e === "dropped" || e === "resizecontent" ? this._gsEventHandler[e] = t : console.error("GridStack.on(" + e + ") event not supported"), this);
  }
  /**
   * unsubscribe from the 'on' event GridStackEvent
   * @param name of the event (see possible values) or list of names space separated
   */
  off(e) {
    return e.indexOf(" ") !== -1 ? (e.split(" ").forEach((i) => this.off(i)), this) : ((e === "change" || e === "added" || e === "removed" || e === "enable" || e === "disable") && this._gsEventHandler[e] && this.el.removeEventListener(e, this._gsEventHandler[e]), delete this._gsEventHandler[e], this);
  }
  /**
   * Remove all event handlers from the grid. This is useful for cleanup when destroying a grid.
   *
   * @returns the grid instance for chaining
   *
   * @example
   * grid.offAll(); // Remove all event listeners
   */
  offAll() {
    return Object.keys(this._gsEventHandler).forEach((e) => this.off(e)), this;
  }
  /**
   * Removes widget from the grid.
   * @param el  widget or selector to modify
   * @param removeDOM if `false` DOM element won't be removed from the tree (Default? true).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeWidget(e, t = !0, i = !0) {
    return e ? (z.getElements(e).forEach((n) => {
      if (n.parentElement && n.parentElement !== this.el)
        return;
      let o = n.gridstackNode;
      o || (o = this.engine.nodes.find((s) => n === s.el)), o && (t && z.addRemoveCB && z.addRemoveCB(this.el, o, !1, !1), delete n.gridstackNode, this._removeDD(n), this.engine.removeNode(o, t, i), t && n.parentElement && n.remove());
    }), i && (this._triggerRemoveEvent(), this._triggerChangeEvent()), this) : (console.error("Error: GridStack.removeWidget(undefined) called"), this);
  }
  /**
   * Removes all widgets from the grid.
   * @param removeDOM if `false` DOM elements won't be removed from the tree (Default? `true`).
   * @param triggerEvent if `false` (quiet mode) element will not be added to removed list and no 'removed' callbacks will be called (Default? true).
   */
  removeAll(e = !0, t = !0) {
    return this.engine.nodes.forEach((i) => {
      e && z.addRemoveCB && z.addRemoveCB(this.el, i, !1, !1), delete i.el.gridstackNode, this.opts.staticGrid || this._removeDD(i.el);
    }), this.engine.removeAll(e, t), t && this._triggerRemoveEvent(), this;
  }
  /**
   * Toggle the grid animation state.  Toggles the `grid-stack-animate` class.
   * @param doAnimate if true the grid will animate.
   * @param delay if true setting will be set on next event loop.
   */
  setAnimation(e = this.opts.animate, t) {
    return t ? setTimeout(() => {
      this.opts && this.setAnimation(e);
    }) : e ? this.el.classList.add("grid-stack-animate") : this.el.classList.remove("grid-stack-animate"), this.opts.animate = e, this;
  }
  /** @internal */
  hasAnimationCSS() {
    return this.el.classList.contains("grid-stack-animate");
  }
  /**
   * Toggle the grid static state, which permanently removes/add Drag&Drop support, unlike disable()/enable() that just turns it off/on.
   * Also toggle the grid-stack-static class.
   * @param val if true the grid become static.
   * @param updateClass true (default) if css class gets updated
   * @param recurse true (default) if sub-grids also get updated
   */
  setStatic(e, t = !0, i = !0) {
    return !!this.opts.staticGrid === e ? this : (e ? this.opts.staticGrid = !0 : delete this.opts.staticGrid, this._setupRemoveDrop(), this._setupAcceptWidget(), this.engine.nodes.forEach((n) => {
      this.prepareDragDrop(n.el), n.subGrid && i && n.subGrid.setStatic(e, t, i);
    }), t && this._setStaticClass(), this);
  }
  /**
   * Updates the passed in options on the grid (similar to update(widget) for for the grid options).
   * @param options PARTIAL grid options to update - only items specified will be updated.
   * NOTE: not all options updating are currently supported (lot of code, unlikely to change)
   */
  updateOptions(e) {
    const t = this.opts;
    return e === t ? this : (e.acceptWidgets !== void 0 && (t.acceptWidgets = e.acceptWidgets, this._setupAcceptWidget()), e.animate !== void 0 && this.setAnimation(e.animate), e.cellHeight && this.cellHeight(e.cellHeight), e.class !== void 0 && e.class !== t.class && (t.class && this.el.classList.remove(t.class), e.class && this.el.classList.add(e.class)), e.columnOpts ? (this.opts.columnOpts = e.columnOpts, this.checkDynamicColumn()) : e.columnOpts === null && this.opts.columnOpts ? (delete this.opts.columnOpts, this._updateResizeEvent()) : typeof e.column == "number" && this.column(e.column), e.margin !== void 0 && this.margin(e.margin), e.staticGrid !== void 0 && this.setStatic(e.staticGrid), e.disableDrag !== void 0 && !e.staticGrid && this.enableMove(!e.disableDrag), e.disableResize !== void 0 && !e.staticGrid && this.enableResize(!e.disableResize), e.float !== void 0 && this.float(e.float), e.row !== void 0 ? (t.minRow = t.maxRow = t.row = e.row, this._updateContainerHeight()) : (e.minRow !== void 0 && (t.minRow = e.minRow, this._updateContainerHeight()), e.maxRow !== void 0 && (t.maxRow = e.maxRow)), e.children?.length && this.load(e.children), this);
  }
  /**
   * Updates widget position/size and other info. This is used to change widget properties after creation.
   * Can update position, size, content, and other widget properties.
   *
   * Note: If you need to call this on all nodes, use load() instead which will update what changed.
   * Setting the same x,y for multiple items will be indeterministic and likely unwanted.
   *
   * @param els widget element(s) or selector to modify
   * @param opt new widget options (x,y,w,h, etc.). Only those set will be updated.
   * @returns the grid instance for chaining
   *
   * @example
   * // Update widget size and position
   * grid.update('.my-widget', { x: 2, y: 1, w: 3, h: 2 });
   *
   * // Update widget content
   * grid.update(widget, { content: '<p>New content</p>' });
   *
   * // Update multiple properties
   * grid.update('#my-widget', {
   *   w: 4,
   *   h: 3,
   *   noResize: true,
   *   locked: true
   * });
   */
  update(e, t) {
    return z.getElements(e).forEach((i) => {
      const n = i?.gridstackNode;
      if (!n)
        return;
      const o = { ...A.copyPos({}, n), ...A.cloneDeep(t) };
      this.engine.nodeBoundFix(o), delete o.autoPosition;
      const s = ["x", "y", "w", "h"];
      let a;
      if (s.some((l) => o[l] !== void 0 && o[l] !== n[l]) && (a = {}, s.forEach((l) => {
        a[l] = o[l] !== void 0 ? o[l] : n[l], delete o[l];
      })), !a && (o.minW || o.minH || o.maxW || o.maxH) && (a = {}), o.content !== void 0) {
        const l = i.querySelector(".grid-stack-item-content");
        l && l.textContent !== o.content && (n.content = o.content, z.renderCB(l, o), n.subGrid?.el && (l.appendChild(n.subGrid.el), n.subGrid._updateContainerHeight())), delete o.content;
      }
      let c = !1, u = !1;
      for (const l in o)
        l[0] !== "_" && n[l] !== o[l] && (n[l] = o[l], c = !0, u = u || !this.opts.staticGrid && (l === "noResize" || l === "noMove" || l === "locked"));
      if (A.sanitizeMinMax(n), a) {
        const l = a.w !== void 0 && a.w !== n.w;
        this.moveNode(n, a), l && n.subGrid ? n.subGrid.onResize(this.hasAnimationCSS() ? n.w : void 0) : this.resizeToContentCheck(l, n), delete n._orig;
      }
      (a || c) && this._writeAttr(i, n), u && this.prepareDragDrop(n.el), z.updateCB && z.updateCB(n);
    }), this;
  }
  moveNode(e, t) {
    const i = e._updating;
    i || this.engine.cleanNodes().beginUpdate(e), this.engine.moveNode(e, t), this._updateContainerHeight(), i || (this._triggerChangeEvent(), this.engine.endUpdate());
  }
  /**
   * Updates widget height to match the content height to avoid vertical scrollbars or dead space.
   * This automatically adjusts the widget height based on its content size.
   *
   * Note: This assumes only 1 child under resizeToContentParent='.grid-stack-item-content'
   * (sized to gridItem minus padding) that represents the entire content size.
   *
   * @param el the grid item element to resize
   *
   * @example
   * // Resize a widget to fit its content
   * const widget = document.querySelector('.grid-stack-item');
   * grid.resizeToContent(widget);
   *
   * // This is commonly used with dynamic content:
   * widget.querySelector('.content').innerHTML = 'New longer content...';
   * grid.resizeToContent(widget);
   */
  resizeToContent(e) {
    if (!e || (e.classList.remove("size-to-content-max"), !e.clientHeight))
      return;
    const t = e.gridstackNode;
    if (!t)
      return;
    const i = t.grid;
    if (!i || e.parentElement !== i.el)
      return;
    const n = i.getCellHeight(!0);
    if (!n)
      return;
    let o = t.h ? t.h * n : e.clientHeight, s;
    if (t.resizeToContentParent && (s = e.querySelector(t.resizeToContentParent)), s || (s = e.querySelector(z.resizeToContentParent)), !s)
      return;
    const a = e.clientHeight - s.clientHeight, c = t.h ? t.h * n - a : s.clientHeight;
    let u;
    if (t.subGrid) {
      u = t.subGrid.getRow() * t.subGrid.getCellHeight(!0);
      const h = t.subGrid.el.getBoundingClientRect(), f = e.getBoundingClientRect();
      u += h.top - f.top;
    } else {
      if (t.subGridOpts?.children?.length)
        return;
      {
        const h = s.firstElementChild;
        if (!h) {
          console.error(`Error: GridStack.resizeToContent() widget id:${t.id} '${z.resizeToContentParent}'.firstElementChild is null, make sure to have a div like container. Skipping sizing.`);
          return;
        }
        u = h.getBoundingClientRect().height || c;
      }
    }
    if (c === u)
      return;
    o += u - c;
    let l = Math.ceil(o / n);
    const d = Number.isInteger(t.sizeToContent) ? t.sizeToContent : 0;
    d && l > d && (l = d, e.classList.add("size-to-content-max")), t.minH && l < t.minH ? l = t.minH : t.maxH && l > t.maxH && (l = t.maxH), l !== t.h && (i._ignoreLayoutsNodeChange = !0, i.moveNode(t, { h: l }), delete i._ignoreLayoutsNodeChange);
  }
  /** call the user resize (so they can do extra work) else our build in version */
  resizeToContentCBCheck(e) {
    z.resizeToContentCB ? z.resizeToContentCB(e) : this.resizeToContent(e);
  }
  /**
   * Rotate widgets by swapping their width and height. This is typically called when the user presses 'r' during dragging.
   * The rotation swaps the w/h dimensions and adjusts min/max constraints accordingly.
   *
   * @param els widget element(s) or selector to rotate
   * @param relative optional pixel coordinate relative to upper/left corner to rotate around (keeps that cell under cursor)
   * @returns the grid instance for chaining
   *
   * @example
   * // Rotate a specific widget
   * grid.rotate('.my-widget');
   *
   * // Rotate with relative positioning during drag
   * grid.rotate(widget, { left: 50, top: 30 });
   */
  rotate(e, t) {
    return z.getElements(e).forEach((i) => {
      const n = i.gridstackNode;
      if (!A.canBeRotated(n))
        return;
      const o = { w: n.h, h: n.w, minH: n.minW, minW: n.minH, maxH: n.maxW, maxW: n.maxH };
      if (t) {
        const a = t.left > 0 ? Math.floor(t.left / this.cellWidth()) : 0, c = t.top > 0 ? Math.floor(t.top / this.opts.cellHeight) : 0;
        o.x = n.x + a - (n.h - (c + 1)), o.y = n.y + c - a;
      }
      Object.keys(o).forEach((a) => {
        o[a] === void 0 && delete o[a];
      });
      const s = n._orig;
      this.update(i, o), n._orig = s;
    }), this;
  }
  /**
   * Updates the margins which will set all 4 sides at once - see `GridStackOptions.margin` for format options.
   * Supports CSS string format of 1, 2, or 4 values or a single number.
   *
   * @param value margin value - can be:
   *   - Single number: `10` (applies to all sides)
   *   - Two values: `'10px 20px'` (top/bottom, left/right)
   *   - Four values: `'10px 20px 5px 15px'` (top, right, bottom, left)
   * @returns the grid instance for chaining
   *
   * @example
   * grid.margin(10);           // 10px all sides
   * grid.margin('10px 20px');  // 10px top/bottom, 20px left/right
   * grid.margin('5px 10px 15px 20px'); // Different for each side
   */
  margin(e) {
    if (!(typeof e == "string" && e.split(" ").length > 1)) {
      const i = A.parseHeight(e);
      if (this.opts.marginUnit === i.unit && this.opts.margin === i.h)
        return;
    }
    return this.opts.margin = e, this.opts.marginTop = this.opts.marginBottom = this.opts.marginLeft = this.opts.marginRight = void 0, this._initMargin(), this;
  }
  /**
   * Returns the current margin value as a number (undefined if the 4 sides don't match).
   * This only returns a number if all sides have the same margin value.
   *
   * @returns the margin value in pixels, or undefined if sides have different values
   *
   * @example
   * const margin = grid.getMargin();
   * if (margin !== undefined) {
   *   console.log('Uniform margin:', margin, 'px');
   * } else {
   *   console.log('Margins are different on different sides');
   * }
   */
  getMargin() {
    return this.opts.margin;
  }
  /**
   * Returns true if the height of the grid will be less than the vertical
   * constraint. Always returns true if grid doesn't have height constraint.
   * @param node contains x,y,w,h,auto-position options
   *
   * @example
   * if (grid.willItFit(newWidget)) {
   *   grid.addWidget(newWidget);
   * } else {
   *   alert('Not enough free space to place the widget');
   * }
   */
  willItFit(e) {
    if (arguments.length > 1) {
      console.warn("gridstack.ts: `willItFit(x,y,w,h,autoPosition)` is deprecated. Use `willItFit({x, y,...})`. It will be removed soon");
      const t = arguments;
      let i = 0, n = { x: t[i++], y: t[i++], w: t[i++], h: t[i++], autoPosition: t[i++] };
      return this.willItFit(n);
    }
    return this.engine.willItFit(e);
  }
  /** @internal */
  _triggerChangeEvent() {
    if (this.engine.batchMode)
      return this;
    const e = this.engine.getDirtyNodes(!0);
    return e && e.length && (this._ignoreLayoutsNodeChange || this.engine.layoutsNodesChange(e), this._triggerEvent("change", e)), this.engine.saveInitial(), this;
  }
  /** @internal */
  _triggerAddEvent() {
    if (this.engine.batchMode)
      return this;
    if (this.engine.addedNodes?.length) {
      this._ignoreLayoutsNodeChange || this.engine.layoutsNodesChange(this.engine.addedNodes), this.engine.addedNodes.forEach((t) => {
        delete t._dirty;
      });
      const e = [...this.engine.addedNodes];
      this.engine.addedNodes = [], this._triggerEvent("added", e);
    }
    return this;
  }
  /** @internal */
  _triggerRemoveEvent() {
    if (this.engine.batchMode)
      return this;
    if (this.engine.removedNodes?.length) {
      const e = [...this.engine.removedNodes];
      this.engine.removedNodes = [], this._triggerEvent("removed", e);
    }
    return this;
  }
  /** @internal */
  _triggerEvent(e, t) {
    const i = t ? new CustomEvent(e, { bubbles: !1, detail: t }) : new Event(e);
    let n = this;
    for (; n.parentGridNode; )
      n = n.parentGridNode.grid;
    return n.el.dispatchEvent(i), this;
  }
  /** @internal */
  _updateContainerHeight() {
    if (!this.engine || this.engine.batchMode)
      return this;
    const e = this.parentGridNode;
    let t = this.getRow() + this._extraDragRow;
    const i = this.opts.cellHeight, n = this.opts.cellHeightUnit;
    if (!i)
      return this;
    if (!e && !this.opts.minRow) {
      const o = A.parseHeight(getComputedStyle(this.el).minHeight);
      if (o.h > 0 && o.unit === n) {
        const s = Math.floor(o.h / i);
        t < s && (t = s);
      }
    }
    return this.el.setAttribute("gs-current-row", String(t)), this.el.style.removeProperty("min-height"), this.el.style.removeProperty("height"), t && (this.el.style[e ? "minHeight" : "height"] = t * i + n), e && A.shouldSizeToContent(e) && e.grid.resizeToContentCBCheck(e.el), this;
  }
  /** @internal */
  _prepareElement(e, t = !1, i) {
    i = i || this._readAttr(e), e.gridstackNode = i, i.el = e, i.grid = this, i = this.engine.addNode(i, t), this._writeAttr(e, i), e.classList.add(be.itemClass, this.opts.itemClass);
    const n = A.shouldSizeToContent(i);
    return n ? e.classList.add("size-to-content") : e.classList.remove("size-to-content"), n && this.resizeToContentCheck(!1, i), A.lazyLoad(i) || this.prepareDragDrop(i.el), this;
  }
  /** @internal write position CSS vars and x,y,w,h attributes (not used for CSS but by users) back to element */
  _writePosAttr(e, t) {
    return (!t._moving && !t._resizing || this._placeholder === e) && (e.style.top = t.y ? t.y === 1 ? "var(--gs-cell-height)" : `calc(${t.y} * var(--gs-cell-height))` : null, e.style.left = t.x ? t.x === 1 ? "var(--gs-column-width)" : `calc(${t.x} * var(--gs-column-width))` : null, e.style.width = t.w > 1 ? `calc(${t.w} * var(--gs-column-width))` : null, e.style.height = t.h > 1 ? `calc(${t.h} * var(--gs-cell-height))` : null), t.x > 0 ? e.setAttribute("gs-x", String(t.x)) : e.removeAttribute("gs-x"), t.y > 0 ? e.setAttribute("gs-y", String(t.y)) : e.removeAttribute("gs-y"), t.w > 1 ? e.setAttribute("gs-w", String(t.w)) : e.removeAttribute("gs-w"), t.h > 1 ? e.setAttribute("gs-h", String(t.h)) : e.removeAttribute("gs-h"), this;
  }
  /** @internal call to write any default attributes back to element */
  _writeAttr(e, t) {
    if (!t)
      return this;
    this._writePosAttr(e, t);
    const i = {
      // autoPosition: 'gs-auto-position', // no need to write out as already in node and doesn't affect CSS
      noResize: "gs-no-resize",
      noMove: "gs-no-move",
      locked: "gs-locked",
      id: "gs-id",
      sizeToContent: "gs-size-to-content"
    };
    for (const n in i)
      t[n] ? e.setAttribute(i[n], String(t[n])) : e.removeAttribute(i[n]);
    return this;
  }
  /** @internal call to read any default attributes from element */
  _readAttr(e, t = !0) {
    const i = {};
    i.x = A.toNumber(e.getAttribute("gs-x")), i.y = A.toNumber(e.getAttribute("gs-y")), i.w = A.toNumber(e.getAttribute("gs-w")), i.h = A.toNumber(e.getAttribute("gs-h")), i.autoPosition = A.toBool(e.getAttribute("gs-auto-position")), i.noResize = A.toBool(e.getAttribute("gs-no-resize")), i.noMove = A.toBool(e.getAttribute("gs-no-move")), i.locked = A.toBool(e.getAttribute("gs-locked"));
    const n = e.getAttribute("gs-size-to-content");
    n && (n === "true" || n === "false" ? i.sizeToContent = A.toBool(n) : i.sizeToContent = parseInt(n, 10)), i.id = e.getAttribute("gs-id"), i.maxW = A.toNumber(e.getAttribute("gs-max-w")), i.minW = A.toNumber(e.getAttribute("gs-min-w")), i.maxH = A.toNumber(e.getAttribute("gs-max-h")), i.minH = A.toNumber(e.getAttribute("gs-min-h")), t && (i.w === 1 && e.removeAttribute("gs-w"), i.h === 1 && e.removeAttribute("gs-h"), i.maxW && e.removeAttribute("gs-max-w"), i.minW && e.removeAttribute("gs-min-w"), i.maxH && e.removeAttribute("gs-max-h"), i.minH && e.removeAttribute("gs-min-h"));
    for (const o in i) {
      if (!i.hasOwnProperty(o))
        return;
      !i[o] && i[o] !== 0 && o !== "sizeToContent" && delete i[o];
    }
    return i;
  }
  /** @internal */
  _setStaticClass() {
    const e = ["grid-stack-static"];
    return this.opts.staticGrid ? (this.el.classList.add(...e), this.el.setAttribute("gs-static", "true")) : (this.el.classList.remove(...e), this.el.removeAttribute("gs-static")), this;
  }
  /**
   * called when we are being resized - check if the one Column Mode needs to be turned on/off
   * and remember the prev columns we used, or get our count from parent, as well as check for cellHeight==='auto' (square)
   * or `sizeToContent` gridItem options.
   */
  onResize(e = this.el?.clientWidth) {
    if (!e || this.prevWidth === e)
      return;
    this.prevWidth = e, this.batchUpdate();
    let t = !1;
    return this._autoColumn && this.parentGridNode ? this.opts.column !== this.parentGridNode.w && (this.column(this.parentGridNode.w, this.opts.layout || "list"), t = !0) : t = this.checkDynamicColumn(), this._isAutoCellHeight && this.cellHeight(), this.engine.nodes.forEach((i) => {
      i.subGrid && i.subGrid.onResize();
    }), this._skipInitialResize || this.resizeToContentCheck(t), delete this._skipInitialResize, this.batchUpdate(!1), this;
  }
  /** resizes content for given node (or all) if shouldSizeToContent() is true */
  resizeToContentCheck(e = !1, t = void 0) {
    if (this.engine) {
      if (e && this.hasAnimationCSS())
        return setTimeout(() => this.resizeToContentCheck(!1, t), this.animationDelay);
      if (t)
        A.shouldSizeToContent(t) && this.resizeToContentCBCheck(t.el);
      else if (this.engine.nodes.some((i) => A.shouldSizeToContent(i))) {
        const i = [...this.engine.nodes];
        this.batchUpdate(), i.forEach((n) => {
          A.shouldSizeToContent(n) && this.resizeToContentCBCheck(n.el);
        }), this._ignoreLayoutsNodeChange = !0, this.batchUpdate(!1), this._ignoreLayoutsNodeChange = !1;
      }
      this._gsEventHandler.resizecontent && this._gsEventHandler.resizecontent(null, t ? [t] : this.engine.nodes);
    }
  }
  /** add or remove the grid element size event handler */
  _updateResizeEvent(e = !1) {
    const t = !this.parentGridNode && (this._isAutoCellHeight || this.opts.sizeToContent || this.opts.columnOpts || this.engine.nodes.find((i) => i.sizeToContent));
    return !e && t && !this.resizeObserver ? (this._sizeThrottle = A.throttle(() => this.onResize(), this.opts.cellHeightThrottle), this.resizeObserver = new ResizeObserver(() => this._sizeThrottle()), this.resizeObserver.observe(this.el), this._skipInitialResize = !0) : (e || !t) && this.resizeObserver && (this.resizeObserver.disconnect(), delete this.resizeObserver, delete this._sizeThrottle), this;
  }
  /** @internal convert a potential selector into actual element */
  static getElement(e = ".grid-stack-item") {
    return A.getElement(e);
  }
  /** @internal */
  static getElements(e = ".grid-stack-item") {
    return A.getElements(e);
  }
  /** @internal */
  static getGridElement(e) {
    return z.getElement(e);
  }
  /** @internal */
  static getGridElements(e) {
    return A.getElements(e);
  }
  /** @internal initialize margin top/bottom/left/right and units */
  _initMargin() {
    let e, t = 0, i = [];
    typeof this.opts.margin == "string" && (i = this.opts.margin.split(" ")), i.length === 2 ? (this.opts.marginTop = this.opts.marginBottom = i[0], this.opts.marginLeft = this.opts.marginRight = i[1]) : i.length === 4 ? (this.opts.marginTop = i[0], this.opts.marginRight = i[1], this.opts.marginBottom = i[2], this.opts.marginLeft = i[3]) : (e = A.parseHeight(this.opts.margin), this.opts.marginUnit = e.unit, t = this.opts.margin = e.h), ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((s) => {
      this.opts[s] === void 0 ? this.opts[s] = t : (e = A.parseHeight(this.opts[s]), this.opts[s] = e.h, delete this.opts.margin);
    }), this.opts.marginUnit = e.unit, this.opts.marginTop === this.opts.marginBottom && this.opts.marginLeft === this.opts.marginRight && this.opts.marginTop === this.opts.marginRight && (this.opts.margin = this.opts.marginTop);
    const o = this.el.style;
    return o.setProperty("--gs-item-margin-top", `${this.opts.marginTop}${this.opts.marginUnit}`), o.setProperty("--gs-item-margin-bottom", `${this.opts.marginBottom}${this.opts.marginUnit}`), o.setProperty("--gs-item-margin-right", `${this.opts.marginRight}${this.opts.marginUnit}`), o.setProperty("--gs-item-margin-left", `${this.opts.marginLeft}${this.opts.marginUnit}`), this;
  }
  /* ===========================================================================================
   * drag&drop methods that used to be stubbed out and implemented in dd-gridstack.ts
   * but caused loading issues in prod - see https://github.com/gridstack/gridstack.js/issues/2039
   * ===========================================================================================
   */
  /**
   * Get the global drag & drop implementation instance.
   * This provides access to the underlying drag & drop functionality.
   *
   * @returns the DDGridStack instance used for drag & drop operations
   *
   * @example
   * const dd = GridStack.getDD();
   * // Access drag & drop functionality
   */
  static getDD() {
    return ce;
  }
  /**
   * call to setup dragging in from the outside (say toolbar), by specifying the class selection and options.
   * Called during GridStack.init() as options, but can also be called directly (last param are used) in case the toolbar
   * is dynamically create and needs to be set later.
   * @param dragIn string selector (ex: '.sidebar-item') or list of dom elements
   * @param dragInOptions options - see DDDragOpt. (default: {handle: '.grid-stack-item-content', appendTo: 'body'}
   * @param widgets GridStackWidget def to assign to each element which defines what to create on drop
   * @param root optional root which defaults to document (for shadow dom pass the parent HTMLDocument)
   */
  static setupDragIn(e, t, i, n = document) {
    t?.pause !== void 0 && (L.pauseDrag = t.pause), t = { appendTo: "body", helper: "clone", ...t || {} }, (typeof e == "string" ? A.getElements(e, n) : e).forEach((s, a) => {
      ce.isDraggable(s) || ce.dragIn(s, t), i?.[a] && (s.gridstackNode = i[a]);
    });
  }
  /**
   * Enables/Disables dragging by the user for specific grid elements.
   * For all items and future items, use enableMove() instead. No-op for static grids.
   *
   * Note: If you want to prevent an item from moving due to being pushed around by another
   * during collision, use the 'locked' property instead.
   *
   * @param els widget element(s) or selector to modify
   * @param val if true widget will be draggable, assuming the parent grid isn't noMove or static
   * @returns the grid instance for chaining
   *
   * @example
   * // Make specific widgets draggable
   * grid.movable('.my-widget', true);
   *
   * // Disable dragging for specific widgets
   * grid.movable('#fixed-widget', false);
   */
  movable(e, t) {
    return this.opts.staticGrid ? this : (z.getElements(e).forEach((i) => {
      const n = i.gridstackNode;
      n && (t ? delete n.noMove : n.noMove = !0, this.prepareDragDrop(n.el));
    }), this);
  }
  /**
   * Enables/Disables user resizing for specific grid elements.
   * For all items and future items, use enableResize() instead. No-op for static grids.
   *
   * @param els widget element(s) or selector to modify
   * @param val if true widget will be resizable, assuming the parent grid isn't noResize or static
   * @returns the grid instance for chaining
   *
   * @example
   * // Make specific widgets resizable
   * grid.resizable('.my-widget', true);
   *
   * // Disable resizing for specific widgets
   * grid.resizable('#fixed-size-widget', false);
   */
  resizable(e, t) {
    return this.opts.staticGrid ? this : (z.getElements(e).forEach((i) => {
      const n = i.gridstackNode;
      n && (t ? delete n.noResize : n.noResize = !0, this.prepareDragDrop(n.el));
    }), this);
  }
  /**
   * Temporarily disables widgets moving/resizing.
   * If you want a more permanent way (which freezes up resources) use `setStatic(true)` instead.
   *
   * Note: This is a no-op for static grids.
   *
   * This is a shortcut for:
   * ```typescript
   * grid.enableMove(false);
   * grid.enableResize(false);
   * ```
   *
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Disable all interactions
   * grid.disable();
   *
   * // Disable only this grid, not sub-grids
   * grid.disable(false);
   */
  disable(e = !0) {
    if (!this.opts.staticGrid)
      return this.enableMove(!1, e), this.enableResize(!1, e), this._triggerEvent("disable"), this;
  }
  /**
   * Re-enables widgets moving/resizing - see disable().
   * Note: This is a no-op for static grids.
   *
   * This is a shortcut for:
   * ```typescript
   * grid.enableMove(true);
   * grid.enableResize(true);
   * ```
   *
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Re-enable all interactions
   * grid.enable();
   *
   * // Enable only this grid, not sub-grids
   * grid.enable(false);
   */
  enable(e = !0) {
    if (!this.opts.staticGrid)
      return this.enableMove(!0, e), this.enableResize(!0, e), this._triggerEvent("enable"), this;
  }
  /**
   * Enables/disables widget moving for all widgets. No-op for static grids.
   * Note: locally defined items (with noMove property) still override this setting.
   *
   * @param doEnable if true widgets will be movable, if false moving is disabled
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Enable moving for all widgets
   * grid.enableMove(true);
   *
   * // Disable moving for all widgets
   * grid.enableMove(false);
   *
   * // Enable only this grid, not sub-grids
   * grid.enableMove(true, false);
   */
  enableMove(e, t = !0) {
    return this.opts.staticGrid ? this : (e ? delete this.opts.disableDrag : this.opts.disableDrag = !0, this.engine.nodes.forEach((i) => {
      this.prepareDragDrop(i.el), i.subGrid && t && i.subGrid.enableMove(e, t);
    }), this);
  }
  /**
   * Enables/disables widget resizing for all widgets. No-op for static grids.
   * Note: locally defined items (with noResize property) still override this setting.
   *
   * @param doEnable if true widgets will be resizable, if false resizing is disabled
   * @param recurse if true (default), sub-grids also get updated
   * @returns the grid instance for chaining
   *
   * @example
   * // Enable resizing for all widgets
   * grid.enableResize(true);
   *
   * // Disable resizing for all widgets
   * grid.enableResize(false);
   *
   * // Enable only this grid, not sub-grids
   * grid.enableResize(true, false);
   */
  enableResize(e, t = !0) {
    return this.opts.staticGrid ? this : (e ? delete this.opts.disableResize : this.opts.disableResize = !0, this.engine.nodes.forEach((i) => {
      this.prepareDragDrop(i.el), i.subGrid && t && i.subGrid.enableResize(e, t);
    }), this);
  }
  /** @internal call when drag (and drop) needs to be cancelled (Esc key) */
  cancelDrag() {
    const e = this._placeholder?.gridstackNode;
    e && (e._isExternal ? (e._isAboutToRemove = !0, this.engine.removeNode(e)) : e._isAboutToRemove && z._itemRemoving(e.el, !1), this.engine.restoreInitial());
  }
  /** @internal removes any drag&drop present (called during destroy) */
  _removeDD(e) {
    return ce.draggable(e, "destroy").resizable(e, "destroy"), e.gridstackNode && delete e.gridstackNode._initDD, delete e.ddElement, this;
  }
  /** @internal called to add drag over to support widgets being added externally */
  _setupAcceptWidget() {
    if (this.opts.staticGrid || !this.opts.acceptWidgets && !this.opts.removable)
      return ce.droppable(this.el, "destroy"), this;
    let e, t;
    const i = (n, o, s) => {
      s = s || o;
      const a = s.gridstackNode;
      if (!a)
        return;
      if (!a.grid?.el) {
        s.style.transform = `scale(${1 / this.dragTransform.xScale},${1 / this.dragTransform.yScale})`;
        const h = s.getBoundingClientRect();
        s.style.left = h.x + (this.dragTransform.xScale - 1) * (n.clientX - h.x) / this.dragTransform.xScale + "px", s.style.top = h.y + (this.dragTransform.yScale - 1) * (n.clientY - h.y) / this.dragTransform.yScale + "px", s.style.transformOrigin = "0px 0px";
      }
      let { top: c, left: u } = s.getBoundingClientRect();
      const l = this.el.getBoundingClientRect();
      u -= l.left, c -= l.top;
      const d = {
        position: {
          top: c * this.dragTransform.xScale,
          left: u * this.dragTransform.yScale
        }
      };
      if (a._temporaryRemoved) {
        if (a.x = Math.max(0, Math.round(u / t)), a.y = Math.max(0, Math.round(c / e)), delete a.autoPosition, this.engine.nodeBoundFix(a), !this.engine.willItFit(a)) {
          if (a.autoPosition = !0, !this.engine.willItFit(a)) {
            ce.off(o, "drag");
            return;
          }
          a._willFitPos && (A.copyPos(a, a._willFitPos), delete a._willFitPos);
        }
        this._onStartMoving(s, n, d, a, t, e);
      } else
        this._dragOrResize(s, n, d, a, t, e);
    };
    return ce.droppable(this.el, {
      accept: (n) => {
        const o = n.gridstackNode || this._readAttr(n, !1);
        if (o?.grid === this)
          return !0;
        if (!this.opts.acceptWidgets)
          return !1;
        let s = !0;
        if (typeof this.opts.acceptWidgets == "function")
          s = this.opts.acceptWidgets(n);
        else {
          const a = this.opts.acceptWidgets === !0 ? ".grid-stack-item" : this.opts.acceptWidgets;
          s = n.matches(a);
        }
        if (s && o && this.opts.maxRow) {
          const a = { w: o.w, h: o.h, minW: o.minW, minH: o.minH };
          s = this.engine.willItFit(a);
        }
        return s;
      }
    }).on(this.el, "dropover", (n, o, s) => {
      let a = s?.gridstackNode || o.gridstackNode;
      if (a?.grid === this && !a._temporaryRemoved)
        return !1;
      if (a?._sidebarOrig && (a.w = a._sidebarOrig.w, a.h = a._sidebarOrig.h), a?.grid && a.grid !== this && !a._temporaryRemoved && a.grid._leave(o, s), s = s || o, t = this.cellWidth(), e = this.getCellHeight(!0), !a) {
        const l = s.getAttribute("data-gs-widget") || s.getAttribute("gridstacknode");
        if (l) {
          try {
            a = JSON.parse(l);
          } catch {
            console.error("Gridstack dropover: Bad JSON format: ", l);
          }
          s.removeAttribute("data-gs-widget"), s.removeAttribute("gridstacknode");
        }
        a || (a = this._readAttr(s)), a._sidebarOrig = { w: a.w, h: a.h };
      }
      a.grid || (a.el || (a = { ...a }), a._isExternal = !0, s.gridstackNode = a);
      const c = a.w || Math.round(s.offsetWidth / t) || 1, u = a.h || Math.round(s.offsetHeight / e) || 1;
      return a.grid && a.grid !== this ? (o._gridstackNodeOrig || (o._gridstackNodeOrig = a), o.gridstackNode = a = { ...a, w: c, h: u, grid: this }, delete a.x, delete a.y, this.engine.cleanupNode(a).nodeBoundFix(a), a._initDD = a._isExternal = // DOM needs to be re-parented on a drop
      a._temporaryRemoved = !0) : (a.w = c, a.h = u, a._temporaryRemoved = !0), z._itemRemoving(a.el, !1), ce.on(o, "drag", i), i(n, o, s), !1;
    }).on(this.el, "dropout", (n, o, s) => {
      const a = s?.gridstackNode || o.gridstackNode;
      return a && (!a.grid || a.grid === this) && (this._leave(o, s), this._isTemp && this.removeAsSubGrid(a)), !1;
    }).on(this.el, "drop", (n, o, s) => {
      const a = s?.gridstackNode || o.gridstackNode;
      if (a?.grid === this && !a._isExternal)
        return !1;
      const c = !!this.placeholder.parentElement, u = o !== s;
      this.placeholder.remove(), delete this.placeholder.gridstackNode, c && this.opts.animate && (this.setAnimation(!1), this.setAnimation(!0, !0));
      const l = o._gridstackNodeOrig;
      if (delete o._gridstackNodeOrig, c && l?.grid && l.grid !== this) {
        const h = l.grid;
        h.engine.removeNodeFromLayoutCache(l), h.engine.removedNodes.push(l), h._triggerRemoveEvent()._triggerChangeEvent(), h.parentGridNode && !h.engine.nodes.length && h.opts.subGridDynamic && h.removeAsSubGrid();
      }
      if (!a || (c && (this.engine.cleanupNode(a), a.grid = this), delete a.grid?._isTemp, ce.off(o, "drag"), s !== o ? (s.remove(), o = s) : o.remove(), this._removeDD(o), !c))
        return !1;
      const d = a.subGrid?.el?.gridstack;
      return A.copyPos(a, this._readAttr(this.placeholder)), A.removePositioningStyles(o), u && (a.content || a.subGridOpts || z.addRemoveCB) ? (delete a.el, o = this.addWidget(a)) : (this._prepareElement(o, !0, a), this.el.appendChild(o), this.resizeToContentCheck(!1, a), d && (d.parentGridNode = a), this._updateContainerHeight()), this.engine.addedNodes.push(a), this._triggerAddEvent(), this._triggerChangeEvent(), this.engine.endUpdate(), this._gsEventHandler.dropped && this._gsEventHandler.dropped({ ...n, type: "dropped" }, l && l.grid ? l : void 0, a), !1;
    }), this;
  }
  /** @internal mark item for removal */
  static _itemRemoving(e, t) {
    if (!e)
      return;
    const i = e ? e.gridstackNode : void 0;
    !i?.grid || e.classList.contains(i.grid.opts.removableOptions.decline) || (t ? i._isAboutToRemove = !0 : delete i._isAboutToRemove, t ? e.classList.add("grid-stack-item-removing") : e.classList.remove("grid-stack-item-removing"));
  }
  /** @internal called to setup a trash drop zone if the user specifies it */
  _setupRemoveDrop() {
    if (typeof this.opts.removable != "string")
      return this;
    const e = document.querySelector(this.opts.removable);
    return e ? (!this.opts.staticGrid && !ce.isDroppable(e) && ce.droppable(e, this.opts.removableOptions).on(e, "dropover", (t, i) => z._itemRemoving(i, !0)).on(e, "dropout", (t, i) => z._itemRemoving(i, !1)), this) : this;
  }
  /**
   * prepares the element for drag&drop - this is normally called by makeWidget() unless are are delay loading
   * @param el GridItemHTMLElement of the widget
   * @param [force=false]
   * */
  prepareDragDrop(e, t = !1) {
    const i = e?.gridstackNode;
    if (!i)
      return;
    const n = i.noMove || this.opts.disableDrag, o = i.noResize || this.opts.disableResize, s = this.opts.staticGrid || n && o;
    if ((t || s) && (i._initDD && (this._removeDD(e), delete i._initDD), s && e.classList.add("ui-draggable-disabled", "ui-resizable-disabled"), !t))
      return this;
    if (!i._initDD) {
      let a, c;
      const u = (h, f) => {
        this.triggerEvent(h, h.target), a = this.cellWidth(), c = this.getCellHeight(!0), this._onStartMoving(e, h, f, i, a, c);
      }, l = (h, f) => {
        this._dragOrResize(e, h, f, i, a, c);
      }, d = (h) => {
        this.placeholder.remove(), delete this.placeholder.gridstackNode, delete i._moving, delete i._resizing, delete i._event, delete i._lastTried;
        const f = i.w !== i._orig.w, g = h.target;
        if (!(!g.gridstackNode || g.gridstackNode.grid !== this)) {
          if (i.el = g, i._isAboutToRemove) {
            const m = e.gridstackNode.grid;
            m._gsEventHandler[h.type] && m._gsEventHandler[h.type](h, g), m.engine.nodes.push(i), m.removeWidget(e, !0, !0);
          } else
            A.removePositioningStyles(g), i._temporaryRemoved ? (this._writePosAttr(g, i), this.engine.addNode(i)) : this._writePosAttr(g, i), this.triggerEvent(h, g);
          this._extraDragRow = 0, this._updateContainerHeight(), this._triggerChangeEvent(), this.engine.endUpdate(), h.type === "resizestop" && (Number.isInteger(i.sizeToContent) && (i.sizeToContent = i.h), this.resizeToContentCheck(f, i));
        }
      };
      ce.draggable(e, {
        start: u,
        stop: d,
        drag: l
      }).resizable(e, {
        start: u,
        stop: d,
        resize: l
      }), i._initDD = !0;
    }
    return ce.draggable(e, n ? "disable" : "enable").resizable(e, o ? "disable" : "enable"), this;
  }
  /** @internal handles actual drag/resize start */
  _onStartMoving(e, t, i, n, o, s) {
    if (this.engine.cleanNodes().beginUpdate(n), this._writePosAttr(this.placeholder, n), this.el.appendChild(this.placeholder), this.placeholder.gridstackNode = n, n.grid?.el)
      this.dragTransform = A.getValuesFromTransformedElement(e);
    else if (this.placeholder && this.placeholder.closest(".grid-stack")) {
      const a = this.placeholder.closest(".grid-stack");
      this.dragTransform = A.getValuesFromTransformedElement(a);
    } else
      this.dragTransform = {
        xScale: 1,
        xOffset: 0,
        yScale: 1,
        yOffset: 0
      };
    if (n.el = this.placeholder, n._lastUiPosition = i.position, n._prevYPix = i.position.top, n._moving = t.type === "dragstart", n._resizing = t.type === "resizestart", delete n._lastTried, t.type === "dropover" && n._temporaryRemoved && (this.engine.addNode(n), n._moving = !0), this.engine.cacheRects(o, s, this.opts.marginTop, this.opts.marginRight, this.opts.marginBottom, this.opts.marginLeft), t.type === "resizestart") {
      const a = this.getColumn() - n.x, c = (this.opts.maxRow || Number.MAX_SAFE_INTEGER) - n.y;
      ce.resizable(e, "option", "minWidth", o * Math.min(n.minW || 1, a)).resizable(e, "option", "minHeight", s * Math.min(n.minH || 1, c)).resizable(e, "option", "maxWidth", o * Math.min(n.maxW || Number.MAX_SAFE_INTEGER, a)).resizable(e, "option", "maxWidthMoveLeft", o * Math.min(n.maxW || Number.MAX_SAFE_INTEGER, n.x + n.w)).resizable(e, "option", "maxHeight", s * Math.min(n.maxH || Number.MAX_SAFE_INTEGER, c)).resizable(e, "option", "maxHeightMoveUp", s * Math.min(n.maxH || Number.MAX_SAFE_INTEGER, n.y + n.h));
    }
  }
  /** @internal handles actual drag/resize */
  _dragOrResize(e, t, i, n, o, s) {
    const a = { ...n._orig };
    let c, u = this.opts.marginLeft, l = this.opts.marginRight, d = this.opts.marginTop, h = this.opts.marginBottom;
    const f = Math.round(s * 0.1), g = Math.round(o * 0.1);
    if (u = Math.min(u, g), l = Math.min(l, g), d = Math.min(d, f), h = Math.min(h, f), t.type === "drag") {
      if (n._temporaryRemoved)
        return;
      const y = i.position.top - n._prevYPix;
      n._prevYPix = i.position.top, this.opts.draggable.scroll !== !1 && A.updateScrollPosition(e, i.position, y);
      const x = i.position.left + (i.position.left > n._lastUiPosition.left ? -l : u), _ = i.position.top + (i.position.top > n._lastUiPosition.top ? -h : d);
      a.x = Math.round(x / o), a.y = Math.round(_ / s);
      const v = this._extraDragRow;
      if (this.engine.collide(n, a)) {
        const E = this.getRow();
        let b = Math.max(0, a.y + n.h - E);
        this.opts.maxRow && E + b > this.opts.maxRow && (b = Math.max(0, this.opts.maxRow - E)), this._extraDragRow = b;
      } else
        this._extraDragRow = 0;
      if (this._extraDragRow !== v && this._updateContainerHeight(), n.x === a.x && n.y === a.y)
        return;
    } else if (t.type === "resize") {
      if (a.x < 0 || (A.updateScrollResize(t, e, s), a.w = Math.round((i.size.width - u) / o), a.h = Math.round((i.size.height - d) / s), n.w === a.w && n.h === a.h) || n._lastTried && n._lastTried.w === a.w && n._lastTried.h === a.h)
        return;
      const y = i.position.left + u, x = i.position.top + d;
      a.x = Math.round(y / o), a.y = Math.round(x / s), c = !0;
    }
    n._event = t, n._lastTried = a;
    const m = {
      x: i.position.left + u,
      y: i.position.top + d,
      w: (i.size ? i.size.width : n.w * o) - u - l,
      h: (i.size ? i.size.height : n.h * s) - d - h
    };
    if (this.engine.moveNodeCheck(n, { ...a, cellWidth: o, cellHeight: s, rect: m, resizing: c })) {
      n._lastUiPosition = i.position, this.engine.cacheRects(o, s, d, l, h, u), delete n._skipDown, c && n.subGrid && n.subGrid.onResize(), this._extraDragRow = 0, this._updateContainerHeight();
      const y = t.target;
      n._sidebarOrig || this._writePosAttr(y, n), this.triggerEvent(t, y);
    }
  }
  /** call given event callback on our main top-most grid (if we're nested) */
  triggerEvent(e, t) {
    let i = this;
    for (; i.parentGridNode; )
      i = i.parentGridNode.grid;
    i._gsEventHandler[e.type] && i._gsEventHandler[e.type](e, t);
  }
  /** @internal called when item leaving our area by either cursor dropout event
   * or shape is outside our boundaries. remove it from us, and mark temporary if this was
   * our item to start with else restore prev node values from prev grid it came from.
   */
  _leave(e, t) {
    t = t || e;
    const i = t.gridstackNode;
    if (!i || (t.style.transform = t.style.transformOrigin = null, ce.off(e, "drag"), i._temporaryRemoved))
      return;
    i._temporaryRemoved = !0, this.engine.removeNode(i), i.el = i._isExternal && t ? t : e;
    const n = i._sidebarOrig;
    i._isExternal && this.engine.cleanupNode(i), i._sidebarOrig = n, this.opts.removable === !0 && z._itemRemoving(e, !0), e._gridstackNodeOrig ? (e.gridstackNode = e._gridstackNodeOrig, delete e._gridstackNodeOrig) : i._isExternal && this.engine.restoreInitial();
  }
  // legacy method removed
  commit() {
    return Cl(this, this.batchUpdate(!1), "commit", "batchUpdate", "5.2"), this;
  }
}
z.renderCB = (r, e) => {
  r && e?.content && (r.textContent = e.content);
};
z.resizeToContentParent = ".grid-stack-item-content";
z.Utils = A;
z.Engine = Xe;
z.GDRev = "12.3.2";
const Ti = /* @__PURE__ */ new WeakMap();
function kl({ children: r }) {
  const { _gridStack: { value: e, set: t }, options: i } = Bo(), n = I(/* @__PURE__ */ new Map()), o = I(null), s = I(i), a = J((l, d) => {
    if (d.id && d.grid) {
      let h = Ti.get(d.grid);
      h || (h = /* @__PURE__ */ new Map(), Ti.set(d.grid, h)), h.set(d.id, l), n.current.set(d.id, l);
    }
  }, []), c = J(() => {
    if (o.current) {
      z.renderCB = a;
      const l = z.init(s.current, o.current);
      return l && s.current.handle && l.opts && (l.opts.handle = s.current.handle), l;
    }
    return null;
  }, [a]), u = (l, d) => {
    const { children: h, ...f } = l, { children: g, ...m } = d;
    return Dt(f, m);
  };
  return Br(() => {
    if (!u(i, s.current) && e)
      try {
        e.removeAll(!1), e.destroy(!1), n.current.clear(), Ti.delete(e), s.current = i, t(null);
      } catch (l) {
        console.error("Error destroying gridstack", l);
      }
    else e && (s.current = i, i.handle && e.opts && (e.opts.handle = i.handle));
  }, [i, e, t]), Br(() => {
    if (!e && o.current)
      try {
        t(c());
      } catch (l) {
        console.error("Error initializing gridstack", l);
      }
  }, [e, c, t]), p(Fo.Provider, {
    value: j(() => ({
      getWidgetContainer: (l) => {
        if (e) {
          const d = Ti.get(e);
          if (d?.has(l))
            return d.get(l) || null;
        }
        return n.current.get(l) || null;
      }
    }), [e]),
    children: p("div", {
      ref: o,
      children: e ? r : null
    })
  });
}
const pn = ({ options: r, widgets: e, onChange: t, className: i }) => {
  const n = j(() => JSON.stringify(e.map((c) => ({
    id: c.id,
    w: c.w,
    h: c.h,
    x: c.x,
    y: c.y,
    noMove: c.noMove,
    noResize: c.noResize,
    locked: c.locked,
    content: c.content?.toString() ?? "",
    _originalContent: c._originalContent?.toString() ?? "",
    allowedSizes: c.allowedSizes
  }))), [e]), o = j(() => ({
    ...r,
    class: i
  }), [r, n, i]), s = (c, u, l) => {
    let d = l[0], h = 1 / 0;
    for (const f of l) {
      const g = f.w - c, m = f.h - u, y = g * g + m * m;
      y < h && (h = y, d = f);
    }
    return d;
  };
  return p(xl, {
    options: o,
    widgets: e,
    onResizeStop: (c, u) => {
      const l = u.gridstackNode;
      if (!l) return;
      const d = u.gridstackNode?.allowedSizes ?? [];
      if (d.length === 0)
        return;
      const h = s(l.w ?? 1, l.h ?? 1, d ?? []);
      (l.w !== h.w || l.h !== h.h) && l.grid?.update(u, {
        w: h.w,
        h: h.h
      });
    },
    onChange: t,
    children: p(kl, {
      children: p(El, {})
    })
  });
};
pn.displayName = "F0GridStack";
const Pl = (r, e, t) => p("div", {
  children: r
}), mr = ({ widgets: r = [], editMode: e = !1, onChange: t = () => {
}, WidgetWrapper: i = Pl, main: n = !1, deps: o }) => {
  const s = J((b, w, C) => p(nn.div, {
    className: "h-full w-full",
    initial: {
      opacity: 0,
      scale: 0.8,
      filter: "blur(8px)"
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)"
    },
    transition: {
      opacity: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
      },
      scale: {
        type: "spring",
        stiffness: 100,
        damping: 6,
        mass: 0.5
      },
      filter: {
        duration: 0.4,
        ease: [0.33, 1, 0.68, 1]
      }
    },
    children: i(b, w, C)
  }), [i]), a = j(() => ({
    acceptWidgets: !0,
    margin: 8,
    handle: "[data-gs-handle='true']",
    column: 4,
    columnOpts: {
      breakpointForWindow: !0,
      breakpoints: [{
        c: 1,
        w: 700
      }, {
        c: 3,
        w: 850
      }, {
        c: 6,
        w: 950
      }, {
        c: 8,
        w: 1100
      }],
      columnMax: 4
    }
  }), []), c = (b, w) => {
    if (typeof b.content == "function" && b.deps && w) {
      const C = {};
      return b.deps.forEach((O) => {
        typeof O == "string" && w[O] !== void 0 && (C[O] = w[O]);
      }), b.content(C);
    }
    return typeof b.content == "function" ? null : b.content;
  }, u = (b, w, C) => b.map((O) => {
    const N = c(O, C), D = {
      id: O.id,
      h: O.h ?? 1,
      w: O.w ?? 1,
      allowedSizes: O.availableSizes,
      noMove: !w,
      noResize: !w,
      locked: O.locked,
      meta: O.meta,
      _originalContent: N,
      content: s(N, O.meta, w)
    };
    return O.x !== void 0 && (D.x = O.x), O.y !== void 0 && (D.y = O.y), D;
  }), [l, d] = F(u(r, e)), h = I(e), f = I(r), g = I(!1), m = I(/* @__PURE__ */ new Map()), y = I(r);
  y.current = r;
  const x = I(o), _ = j(() => {
    const b = /* @__PURE__ */ new Map();
    return !o || Object.keys(o).length === 0 || r.forEach((w) => {
      if (w.deps && w.deps.length > 0) {
        const C = w.deps.map((O) => typeof O == "string" && o[O] !== void 0 ? o[O] : O).filter((O) => O !== null);
        b.set(w.id, C);
      }
    }), b;
  }, [r, o]), v = J((b) => {
    d(b), g.current || t(b.map((w) => {
      const C = y.current.find((O) => O.id === w.id);
      return {
        id: w.id,
        w: w.w ?? 1,
        h: w.h ?? 1,
        allowedSizes: w.allowedSizes,
        meta: w.meta,
        content: typeof C?.content == "function" ? C.content : w._originalContent,
        x: w.x ?? 0,
        y: w.y ?? 0,
        locked: w.locked,
        deps: C?.deps
      };
    })), g.current = !1;
  }, [t]), E = (b, w) => !b && !w ? !1 : !b || !w || b.length !== w.length ? !0 : b.some((C, O) => C !== w[O]);
  return $(() => {
    const b = h.current !== e, w = f.current !== r, C = x.current !== o && (x.current === void 0 || o === void 0 || Object.keys(x.current).length !== Object.keys(o).length || Object.keys(o).some((S) => x.current?.[S] !== o[S])), O = /* @__PURE__ */ new Map();
    r.forEach((S) => {
      if (S.deps && S.deps.length > 0) {
        const P = m.current.get(S.id), R = _.get(S.id);
        O.set(S.id, E(P, R)), R ? m.current.set(S.id, R) : m.current.delete(S.id);
      }
    });
    const N = new Set(r.map((S) => S.id));
    m.current.forEach((S, P) => {
      N.has(P) || m.current.delete(P);
    });
    const D = Array.from(O.values()).some((S) => S) || C;
    b && !w && !D ? (g.current = !0, d((S) => S.map((P) => {
      const R = r.find((U) => U.id === P.id);
      if (!R)
        return P;
      const M = c(R, o);
      return {
        ...P,
        noMove: !e,
        noResize: !e,
        locked: R.locked,
        meta: R.meta,
        _originalContent: M,
        content: s(M, R.meta, e)
      };
    }))) : (w || D) && d((S) => {
      const P = new Map(S.map((R) => [R.id, R]));
      return r.map((R) => {
        const M = P.get(R.id), U = O.get(R.id) ?? !1;
        let H;
        U || !M ? H = c(R, o) : H = M._originalContent ?? c(R, o);
        const V = {
          id: R.id,
          h: M?.h ?? R.h ?? 1,
          w: M?.w ?? R.w ?? 1,
          allowedSizes: R.availableSizes,
          noMove: !e,
          noResize: !e,
          locked: R.locked,
          meta: R.meta,
          _originalContent: H,
          content: s(H, R.meta, e)
        }, le = M?.x ?? R.x, G = M?.y ?? R.y;
        return le !== void 0 && (V.x = le), G !== void 0 && (V.y = G), V;
      });
    }), h.current = e, f.current = r, x.current = o;
  }, [r, e, s, _, o]), p(pn, {
    className: X(n && "h-full flex-1 overflow-auto"),
    options: a,
    onChange: v,
    widgets: l
  });
};
mr.displayName = "GroupGrid";
mr.__isPageLayoutGroup = !0;
const Dl = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutBlock = !0, t;
}, Rl = (r, e) => {
  const t = e;
  return t.displayName = r, t.__isPageLayoutGroup = !0, t;
}, Nl = (r, e) => p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  ref: e,
  ...r,
  children: p("path", {
    fill: "currentColor",
    d: "M11.9912 16C13.452 16.0001 14.8895 16.4311 16.1289 17.2705C16.6275 17.6086 16.6225 18.3843 16.1221 18.7188C14.8843 19.5444 13.4491 19.9999 11.9912 20C10.4905 19.9999 9.08362 19.5285 7.88184 18.7305C7.37377 18.3931 7.37263 17.6066 7.88086 17.2695C9.11404 16.4517 10.5409 16.0001 11.9912 16ZM5.27051 7.87109C5.60858 7.37248 6.38428 7.37747 6.71875 7.87793C7.54437 9.11572 7.9999 10.5509 8 12.0088C7.99994 13.5095 7.52845 14.9164 6.73047 16.1182C6.39307 16.6262 5.60663 16.6274 5.26953 16.1191C4.45167 14.886 4.00006 13.4591 4 12.0088C4.0001 10.548 4.43107 9.1105 5.27051 7.87109ZM17.2705 7.87109C17.6086 7.37248 18.3843 7.37747 18.7188 7.87793C19.5444 9.11572 19.9999 10.5509 20 12.0088C19.9999 13.5095 19.5285 14.9164 18.7305 16.1182C18.3931 16.6262 17.6066 16.6274 17.2695 16.1191C16.4517 14.886 16.0001 13.4591 16 12.0088C16.0001 10.548 16.4311 9.1105 17.2705 7.87109ZM11.9912 4C13.452 4.0001 14.8895 4.43107 16.1289 5.27051C16.6275 5.60858 16.6225 6.38428 16.1221 6.71875C14.8843 7.54437 13.4491 7.9999 11.9912 8C10.4905 7.99994 9.08362 7.52845 7.88184 6.73047C7.37377 6.39307 7.37263 5.60663 7.88086 5.26953C9.11404 4.45167 10.5409 4.00006 11.9912 4Z",
    vectorEffect: "non-scaling-stroke"
  })
}), Wo = _e(Nl), Tl = ["append", "className", "pressed", "compact", "noTitle", "noAutoTooltip", "style", "variant", "loading", "emoji"], Go = _e((r, e) => {
  const t = Tl.reduce((i, n) => {
    const { [n]: o, ...s } = i;
    return s;
  }, r);
  return p(on, {
    ...t,
    variant: "ai",
    ref: e,
    iconRotate: r.icon == Wo
  });
});
Go.displayName = "AIButton";
const Rr = rn({
  base: "text-base text-f1-foreground",
  variants: {
    variant: {
      // -- PUBLIC VARIANTS
      // Heading
      heading: "text-lg font-semibold",
      // Body
      body: "",
      description: "text-f1-foreground-secondary",
      small: "text-sm font-medium text-f1-foreground-secondary",
      inverse: "text-f1-foreground-inverse",
      code: "text-f1-foreground-secondary",
      // Label
      label: "font-medium",
      // -- PRIVATE VARIANTS
      // Heading
      "heading-large": "text-2xl font-semibold",
      // Label
      "label-input": "font-medium text-f1-foreground-secondary",
      // Semantic text
      selected: "font-medium text-f1-foreground-selected",
      warning: "text-f1-foreground-warning",
      critical: "text-f1-foreground-critical",
      positive: "text-f1-foreground-positive",
      info: "text-f1-foreground-info",
      "warning-strong": "font-semibold text-f1-foreground-warning",
      "critical-strong": "font-semibold text-f1-foreground-critical",
      "positive-strong": "font-semibold text-f1-foreground-positive",
      "info-strong": "font-semibold text-f1-foreground-info"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }
  },
  defaultVariants: {
    variant: "body",
    align: "left"
  }
}), zl = {
  "heading-large": "h1",
  heading: "h2",
  body: "p",
  description: "p",
  label: "p",
  "label-input": "label",
  small: "p",
  selected: "p",
  inverse: "p",
  warning: "p",
  critical: "p",
  positive: "p",
  info: "p",
  "warning-strong": "p",
  "critical-strong": "p",
  "positive-strong": "p",
  "info-strong": "p",
  code: "code"
}, mn = _e(({ content: r, variant: e, align: t, className: i, as: n, ellipsis: o, noEllipsisTooltip: s, markdown: a, ...c }, u) => {
  const l = n ?? zl[e ?? "body"];
  if (o !== void 0)
    return p(ia, {
      ref: u,
      lines: typeof o == "number" ? o : 1,
      noTooltip: s,
      tag: l,
      className: X(Rr({
        variant: e,
        align: t
      }), i),
      markdown: a,
      ...c,
      children: r
    });
  if (a) {
    const d = ra(r);
    return $n(l, {
      ...c,
      className: X(Rr({
        variant: e,
        align: t
      }), i),
      ref: u,
      dangerouslySetInnerHTML: {
        __html: d
      }
    });
  }
  return $n(l, {
    ...c,
    className: X(Rr({
      variant: e,
      align: t
    }), i),
    ref: u
  }, r);
});
mn.displayName = "Text";
const Uo = _e((r, e) => p(mn, {
  ref: e,
  markdown: r.markdown ?? !0,
  ...r
}));
Uo.displayName = "F0Text";
const _f = [
  "person",
  "team",
  "company",
  "file",
  "flag"
], Ko = ({ title: r, draggable: e = !1, onDragStart: t, onDragEnd: i, isDragging: n = !1, AIButton: o, actions: s, children: a, selected: c = !1 }) => {
  const [u, l] = F(!1), [d, h] = F(!1), f = na(), g = (y) => {
    l(y);
  }, m = d || u;
  return $(() => {
    if (!n || !i) return;
    const y = () => {
      i();
    };
    return document.addEventListener("mouseup", y), () => {
      document.removeEventListener("mouseup", y);
    };
  }, [n, i]), T("div", {
    className: X("group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-solid border-f1-border bg-f1-background transition-all duration-200", e && u ? "border-f1-border-hover" : e && "hover:border-f1-border-hover", c && "border-f1-border-selected-bold shadow-[0_0_0_4px_hsl(var(--selected-50)/0.1)]", n && "cursor-grabbing border-f1-border-hover shadow-[0_6px_12px_0_hsl(var(--shadow)/0.06),0_16px_24px_-12px_hsl(var(--shadow)/0.05)]"),
    onMouseEnter: () => h(!0),
    onMouseLeave: () => h(!1),
    children: [T("div", {
      className: "flex h-12 w-full items-center justify-between gap-3",
      children: [T("div", {
        className: X("flex min-w-0 flex-1 items-center", !e && "pl-4", !s && !o && "pr-4"),
        children: [e && p("div", {
          className: "flex h-12 w-12 items-center justify-center text-f1-icon-secondary hover:cursor-grab",
          onMouseDown: t,
          "data-gs-handle": "true",
          children: p(wo, {
            icon: oa,
            size: "xs"
          })
        }), p("div", {
          className: X("flex min-w-0 flex-1 items-center", e && "-translate-x-1.5"),
          children: p(Uo, {
            variant: "label",
            content: r,
            ellipsis: !0
          })
        })]
      }), p(sa, {
        children: (o || s) && m && T(nn.div, {
          className: X("flex shrink-0 items-center gap-0.5 pr-2", !s && "pr-4"),
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          transition: {
            duration: 0.2,
            ease: [0.33, 1, 0.68, 1]
          },
          children: [o && p("div", {
            className: "flex h-6 items-center",
            children: p(Go, {
              size: "sm",
              label: f.ai.ask,
              onClick: o,
              icon: Wo
            })
          }), s && p(aa, {
            items: s,
            open: u,
            onOpenChange: g,
            align: "end",
            children: p(on, {
              icon: la,
              label: "Actions",
              variant: "ghost",
              size: "md",
              hideLabel: !0,
              noAutoTooltip: !0,
              noTitle: !0,
              pressed: u
            })
          })]
        })
      })]
    }), p("div", {
      className: "flex max-h-full flex-1 flex-col overflow-y-auto px-4 pb-4",
      children: a
    })]
  });
}, Ll = () => T("div", {
  className: "relative flex h-full w-full cursor-progress flex-col rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
  children: [p("div", {
    className: "flex h-12 w-full items-center px-4",
    children: p(je, {
      className: "h-3 w-full max-w-16 rounded-md"
    })
  }), T("div", {
    className: "flex flex-1 items-end gap-2 px-4 pb-4",
    children: [p(je, {
      className: "h-1/2 w-full rounded-sm"
    }), p(je, {
      className: "h-1/3 w-full rounded-sm"
    }), p(je, {
      className: "h-1/5 w-full rounded-sm"
    }), p(je, {
      className: "h-1/3 w-full rounded-sm"
    }), p(je, {
      className: "h-full w-full rounded-sm"
    }), p(je, {
      className: "h-3/4 w-full rounded-sm"
    })]
  })]
});
Ko.displayName = "F0Widget";
const Ml = xo(Ko, Ll), Il = ({ children: r, title: e, draggable: t = !1, actions: i, aiButton: n }) => p(Ml, {
  title: e,
  draggable: t,
  actions: i,
  AIButton: n,
  children: r
}), Vo = ({ widgets: r, editMode: e = !1, onChange: t = () => {
}, deps: i, ...n }) => p(mr, {
  widgets: r,
  editMode: e,
  onChange: t,
  deps: i,
  ...n,
  WidgetWrapper: (o, s, a) => p(Il, {
    title: s?.title ?? "",
    draggable: a,
    actions: s?.actions,
    aiButton: s?.aiButton,
    children: o
  })
});
Vo.displayName = "Dashboard";
const $l = Rl("Dashboard", Vo), Ef = Be("Dashboard", $l), jl = rn({
  base: "flex w-full flex-col p-4",
  variants: {
    variant: {
      default: "",
      "full-width": "px-0",
      full: "p-0"
    }
  }
}), Bl = (r) => (r || []).map((e) => e.items).reduce((e, t) => (e.length > 0 && e.push({
  type: "separator"
}), e.push(...t), e), []), Fl = (r) => {
  const e = (t) => "onClick" in t;
  return Array.isArray(r) ? r.every(e) ? [{
    items: r
  }] : r : [r];
}, gr = _e(({ children: r, variant: e = "default", className: t, draggable: i = !1, onDragStart: n, onDragEnd: o, onDrop: s, dragId: a, primaryAction: c, ...u }, l) => {
  const d = j(() => Fl(u.actions || []), [u.actions]), h = j(() => d.flatMap((g) => g.items), [d]), f = j(() => h.length > 0 || !!c, [h, c]);
  return T("div", {
    ref: l,
    className: X(jl({
      variant: e
    }), "relative", t),
    draggable: i,
    onDragStart: n,
    onDragEnd: o,
    onDrop: s,
    "data-drag-id": a,
    ...u,
    children: [f && T("div", {
      className: "absolute right-0 top-0 flex items-center justify-end gap-2 p-4",
      children: [!!c && c, h.length > 0 && p(ca, {
        items: Bl(d)
      })]
    }), p("div", {
      children: r
    })]
  });
});
gr.displayName = "Block";
gr.__isPageLayoutBlock = !0;
const Hl = ({ title: r = "", description: e, titleLevel: t = "h2", children: i, className: n, ...o }) => {
  if (!r) return null;
  const s = t;
  return T(gr, {
    ...o,
    className: X("space-y-4", n),
    children: [T("div", {
      className: "space-y-2",
      children: [p(s, {
        className: X("font-semibold text-f1-foreground", {
          "text-2xl": t === "h1",
          "text-xl": t === "h2",
          "text-lg": t === "h3",
          "text-base": t === "h4",
          "text-sm": t === "h5",
          "text-xs": t === "h6"
        }),
        children: r
      }), e && p("p", {
        className: "text-sm text-f1-foreground-secondary",
        children: e
      })]
    }), p("div", {
      className: "flex-1",
      children: i
    })]
  });
}, Wl = Dl("BlockContent", Hl), Gl = (r) => !Mo(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutBlock" in r.type, Ul = (r) => !Mo(r) || !r.type || typeof r.type == "string" || typeof r.type == "symbol" ? !1 : "__isPageLayoutGroup" in r.type, Xo = (r, e, t) => {
  const i = ji.toArray(e);
  for (const n of i)
    t.includes("block") && Gl(n) || t.includes("group") && Ul(n) || console.warn(
      `${r}: Children components must inherit from PageLayoutBlock or PageLayoutGroup. Found:`,
      n
    );
}, gn = _e(({ children: r, onSort: e, ...t }, i) => {
  Xo("GroupLinear", r, ["block"]);
  const [n, o] = F(ji.toArray(r));
  return $(() => {
    o(ji.toArray(r));
  }, [r]), $(() => {
    e?.(n);
  }, [n, e]), p("div", {
    ref: i,
    ...t,
    children: n.map((s, a) => p(al, {
      children: s
    }, a))
  });
});
gn.displayName = "GroupLinear";
gn.__isPageLayoutGroup = !0;
function Kl() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return j(
    () => (i) => {
      e.forEach((n) => n(i));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  );
}
const vr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
function Gt(r) {
  const e = Object.prototype.toString.call(r);
  return e === "[object Window]" || // In Electron context the Window object serializes to [object global]
  e === "[object global]";
}
function vn(r) {
  return "nodeType" in r;
}
function de(r) {
  var e, t;
  return r ? Gt(r) ? r : vn(r) && (e = (t = r.ownerDocument) == null ? void 0 : t.defaultView) != null ? e : window : window;
}
function yn(r) {
  const {
    Document: e
  } = de(r);
  return r instanceof e;
}
function bi(r) {
  return Gt(r) ? !1 : r instanceof de(r).HTMLElement;
}
function Yo(r) {
  return r instanceof de(r).SVGElement;
}
function Ut(r) {
  return r ? Gt(r) ? r.document : vn(r) ? yn(r) ? r : bi(r) || Yo(r) ? r.ownerDocument : document : document : document;
}
const Ne = vr ? Br : $;
function yr(r) {
  const e = I(r);
  return Ne(() => {
    e.current = r;
  }), J(function() {
    for (var t = arguments.length, i = new Array(t), n = 0; n < t; n++)
      i[n] = arguments[n];
    return e.current == null ? void 0 : e.current(...i);
  }, []);
}
function Vl() {
  const r = I(null), e = J((i, n) => {
    r.current = setInterval(i, n);
  }, []), t = J(() => {
    r.current !== null && (clearInterval(r.current), r.current = null);
  }, []);
  return [e, t];
}
function di(r, e) {
  e === void 0 && (e = [r]);
  const t = I(r);
  return Ne(() => {
    t.current !== r && (t.current = r);
  }, e), t;
}
function xi(r, e) {
  const t = I();
  return j(
    () => {
      const i = r(t.current);
      return t.current = i, i;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
function Ui(r) {
  const e = yr(r), t = I(null), i = J(
    (n) => {
      n !== t.current && e?.(n, t.current), t.current = n;
    },
    //eslint-disable-next-line
    []
  );
  return [t, i];
}
function Ki(r) {
  const e = I();
  return $(() => {
    e.current = r;
  }, [r]), e.current;
}
let Nr = {};
function wi(r, e) {
  return j(() => {
    if (e)
      return e;
    const t = Nr[r] == null ? 0 : Nr[r] + 1;
    return Nr[r] = t, r + "-" + t;
  }, [r, e]);
}
function qo(r) {
  return function(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
      i[n - 1] = arguments[n];
    return i.reduce((o, s) => {
      const a = Object.entries(s);
      for (const [c, u] of a) {
        const l = o[c];
        l != null && (o[c] = l + r * u);
      }
      return o;
    }, {
      ...e
    });
  };
}
const Pt = /* @__PURE__ */ qo(1), hi = /* @__PURE__ */ qo(-1);
function Xl(r) {
  return "clientX" in r && "clientY" in r;
}
function br(r) {
  if (!r)
    return !1;
  const {
    KeyboardEvent: e
  } = de(r.target);
  return e && r instanceof e;
}
function Yl(r) {
  if (!r)
    return !1;
  const {
    TouchEvent: e
  } = de(r.target);
  return e && r instanceof e;
}
function Vi(r) {
  if (Yl(r)) {
    if (r.touches && r.touches.length) {
      const {
        clientX: e,
        clientY: t
      } = r.touches[0];
      return {
        x: e,
        y: t
      };
    } else if (r.changedTouches && r.changedTouches.length) {
      const {
        clientX: e,
        clientY: t
      } = r.changedTouches[0];
      return {
        x: e,
        y: t
      };
    }
  }
  return Xl(r) ? {
    x: r.clientX,
    y: r.clientY
  } : null;
}
const ct = /* @__PURE__ */ Object.freeze({
  Translate: {
    toString(r) {
      if (!r)
        return;
      const {
        x: e,
        y: t
      } = r;
      return "translate3d(" + (e ? Math.round(e) : 0) + "px, " + (t ? Math.round(t) : 0) + "px, 0)";
    }
  },
  Scale: {
    toString(r) {
      if (!r)
        return;
      const {
        scaleX: e,
        scaleY: t
      } = r;
      return "scaleX(" + e + ") scaleY(" + t + ")";
    }
  },
  Transform: {
    toString(r) {
      if (r)
        return [ct.Translate.toString(r), ct.Scale.toString(r)].join(" ");
    }
  },
  Transition: {
    toString(r) {
      let {
        property: e,
        duration: t,
        easing: i
      } = r;
      return e + " " + t + "ms " + i;
    }
  }
}), Fn = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function ql(r) {
  return r.matches(Fn) ? r : r.querySelector(Fn);
}
const Jl = {
  display: "none"
};
function Zl(r) {
  let {
    id: e,
    value: t
  } = r;
  return k.createElement("div", {
    id: e,
    style: Jl
  }, t);
}
function Ql(r) {
  let {
    id: e,
    announcement: t,
    ariaLiveType: i = "assertive"
  } = r;
  const n = {
    position: "fixed",
    top: 0,
    left: 0,
    width: 1,
    height: 1,
    margin: -1,
    border: 0,
    padding: 0,
    overflow: "hidden",
    clip: "rect(0 0 0 0)",
    clipPath: "inset(100%)",
    whiteSpace: "nowrap"
  };
  return k.createElement("div", {
    id: e,
    style: n,
    role: "status",
    "aria-live": i,
    "aria-atomic": !0
  }, t);
}
function ec() {
  const [r, e] = F("");
  return {
    announce: J((i) => {
      i != null && e(i);
    }, []),
    announcement: r
  };
}
const Jo = /* @__PURE__ */ Ye(null);
function tc(r) {
  const e = We(Jo);
  $(() => {
    if (!e)
      throw new Error("useDndMonitor must be used within a children of <DndContext>");
    return e(r);
  }, [r, e]);
}
function ic() {
  const [r] = F(() => /* @__PURE__ */ new Set()), e = J((i) => (r.add(i), () => r.delete(i)), [r]);
  return [J((i) => {
    let {
      type: n,
      event: o
    } = i;
    r.forEach((s) => {
      var a;
      return (a = s[n]) == null ? void 0 : a.call(s, o);
    });
  }, [r]), e];
}
const rc = {
  draggable: `
    To pick up a draggable item, press the space bar.
    While dragging, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `
}, nc = {
  onDragStart(r) {
    let {
      active: e
    } = r;
    return "Picked up draggable item " + e.id + ".";
  },
  onDragOver(r) {
    let {
      active: e,
      over: t
    } = r;
    return t ? "Draggable item " + e.id + " was moved over droppable area " + t.id + "." : "Draggable item " + e.id + " is no longer over a droppable area.";
  },
  onDragEnd(r) {
    let {
      active: e,
      over: t
    } = r;
    return t ? "Draggable item " + e.id + " was dropped over droppable area " + t.id : "Draggable item " + e.id + " was dropped.";
  },
  onDragCancel(r) {
    let {
      active: e
    } = r;
    return "Dragging was cancelled. Draggable item " + e.id + " was dropped.";
  }
};
function oc(r) {
  let {
    announcements: e = nc,
    container: t,
    hiddenTextDescribedById: i,
    screenReaderInstructions: n = rc
  } = r;
  const {
    announce: o,
    announcement: s
  } = ec(), a = wi("DndLiveRegion"), [c, u] = F(!1);
  if ($(() => {
    u(!0);
  }, []), tc(j(() => ({
    onDragStart(d) {
      let {
        active: h
      } = d;
      o(e.onDragStart({
        active: h
      }));
    },
    onDragMove(d) {
      let {
        active: h,
        over: f
      } = d;
      e.onDragMove && o(e.onDragMove({
        active: h,
        over: f
      }));
    },
    onDragOver(d) {
      let {
        active: h,
        over: f
      } = d;
      o(e.onDragOver({
        active: h,
        over: f
      }));
    },
    onDragEnd(d) {
      let {
        active: h,
        over: f
      } = d;
      o(e.onDragEnd({
        active: h,
        over: f
      }));
    },
    onDragCancel(d) {
      let {
        active: h,
        over: f
      } = d;
      o(e.onDragCancel({
        active: h,
        over: f
      }));
    }
  }), [o, e])), !c)
    return null;
  const l = k.createElement(k.Fragment, null, k.createElement(Zl, {
    id: i,
    value: n.draggable
  }), k.createElement(Ql, {
    id: a,
    announcement: s
  }));
  return t ? Io(l, t) : l;
}
var Q;
(function(r) {
  r.DragStart = "dragStart", r.DragMove = "dragMove", r.DragEnd = "dragEnd", r.DragCancel = "dragCancel", r.DragOver = "dragOver", r.RegisterDroppable = "registerDroppable", r.SetDroppableDisabled = "setDroppableDisabled", r.UnregisterDroppable = "unregisterDroppable";
})(Q || (Q = {}));
function Xi() {
}
function Hn(r, e) {
  return j(
    () => ({
      sensor: r,
      options: e ?? {}
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r, e]
  );
}
function sc() {
  for (var r = arguments.length, e = new Array(r), t = 0; t < r; t++)
    e[t] = arguments[t];
  return j(
    () => [...e].filter((i) => i != null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [...e]
  );
}
const Te = /* @__PURE__ */ Object.freeze({
  x: 0,
  y: 0
});
function ac(r, e) {
  return Math.sqrt(Math.pow(r.x - e.x, 2) + Math.pow(r.y - e.y, 2));
}
function lc(r, e) {
  const t = Vi(r);
  if (!t)
    return "0 0";
  const i = {
    x: (t.x - e.left) / e.width * 100,
    y: (t.y - e.top) / e.height * 100
  };
  return i.x + "% " + i.y + "%";
}
function cc(r, e) {
  let {
    data: {
      value: t
    }
  } = r, {
    data: {
      value: i
    }
  } = e;
  return t - i;
}
function uc(r, e) {
  let {
    data: {
      value: t
    }
  } = r, {
    data: {
      value: i
    }
  } = e;
  return i - t;
}
function Wn(r) {
  let {
    left: e,
    top: t,
    height: i,
    width: n
  } = r;
  return [{
    x: e,
    y: t
  }, {
    x: e + n,
    y: t
  }, {
    x: e,
    y: t + i
  }, {
    x: e + n,
    y: t + i
  }];
}
function Zo(r, e) {
  if (!r || r.length === 0)
    return null;
  const [t] = r;
  return t[e];
}
const dc = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: i
  } = r;
  const n = Wn(e), o = [];
  for (const s of i) {
    const {
      id: a
    } = s, c = t.get(a);
    if (c) {
      const u = Wn(c), l = n.reduce((h, f, g) => h + ac(u[g], f), 0), d = Number((l / 4).toFixed(4));
      o.push({
        id: a,
        data: {
          droppableContainer: s,
          value: d
        }
      });
    }
  }
  return o.sort(cc);
};
function hc(r, e) {
  const t = Math.max(e.top, r.top), i = Math.max(e.left, r.left), n = Math.min(e.left + e.width, r.left + r.width), o = Math.min(e.top + e.height, r.top + r.height), s = n - i, a = o - t;
  if (i < n && t < o) {
    const c = e.width * e.height, u = r.width * r.height, l = s * a, d = l / (c + u - l);
    return Number(d.toFixed(4));
  }
  return 0;
}
const fc = (r) => {
  let {
    collisionRect: e,
    droppableRects: t,
    droppableContainers: i
  } = r;
  const n = [];
  for (const o of i) {
    const {
      id: s
    } = o, a = t.get(s);
    if (a) {
      const c = hc(a, e);
      c > 0 && n.push({
        id: s,
        data: {
          droppableContainer: o,
          value: c
        }
      });
    }
  }
  return n.sort(uc);
};
function pc(r, e, t) {
  return {
    ...r,
    scaleX: e && t ? e.width / t.width : 1,
    scaleY: e && t ? e.height / t.height : 1
  };
}
function Qo(r, e) {
  return r && e ? {
    x: r.left - e.left,
    y: r.top - e.top
  } : Te;
}
function mc(r) {
  return function(t) {
    for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
      n[o - 1] = arguments[o];
    return n.reduce((s, a) => ({
      ...s,
      top: s.top + r * a.y,
      bottom: s.bottom + r * a.y,
      left: s.left + r * a.x,
      right: s.right + r * a.x
    }), {
      ...t
    });
  };
}
const gc = /* @__PURE__ */ mc(1);
function es(r) {
  if (r.startsWith("matrix3d(")) {
    const e = r.slice(9, -1).split(/, /);
    return {
      x: +e[12],
      y: +e[13],
      scaleX: +e[0],
      scaleY: +e[5]
    };
  } else if (r.startsWith("matrix(")) {
    const e = r.slice(7, -1).split(/, /);
    return {
      x: +e[4],
      y: +e[5],
      scaleX: +e[0],
      scaleY: +e[3]
    };
  }
  return null;
}
function vc(r, e, t) {
  const i = es(e);
  if (!i)
    return r;
  const {
    scaleX: n,
    scaleY: o,
    x: s,
    y: a
  } = i, c = r.left - s - (1 - n) * parseFloat(t), u = r.top - a - (1 - o) * parseFloat(t.slice(t.indexOf(" ") + 1)), l = n ? r.width / n : r.width, d = o ? r.height / o : r.height;
  return {
    width: l,
    height: d,
    top: u,
    right: c + l,
    bottom: u + d,
    left: c
  };
}
const yc = {
  ignoreTransform: !1
};
function Kt(r, e) {
  e === void 0 && (e = yc);
  let t = r.getBoundingClientRect();
  if (e.ignoreTransform) {
    const {
      transform: u,
      transformOrigin: l
    } = de(r).getComputedStyle(r);
    u && (t = vc(t, u, l));
  }
  const {
    top: i,
    left: n,
    width: o,
    height: s,
    bottom: a,
    right: c
  } = t;
  return {
    top: i,
    left: n,
    width: o,
    height: s,
    bottom: a,
    right: c
  };
}
function Gn(r) {
  return Kt(r, {
    ignoreTransform: !0
  });
}
function bc(r) {
  const e = r.innerWidth, t = r.innerHeight;
  return {
    top: 0,
    left: 0,
    right: e,
    bottom: t,
    width: e,
    height: t
  };
}
function xc(r, e) {
  return e === void 0 && (e = de(r).getComputedStyle(r)), e.position === "fixed";
}
function wc(r, e) {
  e === void 0 && (e = de(r).getComputedStyle(r));
  const t = /(auto|scroll|overlay)/;
  return ["overflow", "overflowX", "overflowY"].some((n) => {
    const o = e[n];
    return typeof o == "string" ? t.test(o) : !1;
  });
}
function xr(r, e) {
  const t = [];
  function i(n) {
    if (e != null && t.length >= e || !n)
      return t;
    if (yn(n) && n.scrollingElement != null && !t.includes(n.scrollingElement))
      return t.push(n.scrollingElement), t;
    if (!bi(n) || Yo(n) || t.includes(n))
      return t;
    const o = de(r).getComputedStyle(n);
    return n !== r && wc(n, o) && t.push(n), xc(n, o) ? t : i(n.parentNode);
  }
  return r ? i(r) : t;
}
function ts(r) {
  const [e] = xr(r, 1);
  return e ?? null;
}
function Tr(r) {
  return !vr || !r ? null : Gt(r) ? r : vn(r) ? yn(r) || r === Ut(r).scrollingElement ? window : bi(r) ? r : null : null;
}
function is(r) {
  return Gt(r) ? r.scrollX : r.scrollLeft;
}
function rs(r) {
  return Gt(r) ? r.scrollY : r.scrollTop;
}
function Fr(r) {
  return {
    x: is(r),
    y: rs(r)
  };
}
var ee;
(function(r) {
  r[r.Forward = 1] = "Forward", r[r.Backward = -1] = "Backward";
})(ee || (ee = {}));
function ns(r) {
  return !vr || !r ? !1 : r === document.scrollingElement;
}
function os(r) {
  const e = {
    x: 0,
    y: 0
  }, t = ns(r) ? {
    height: window.innerHeight,
    width: window.innerWidth
  } : {
    height: r.clientHeight,
    width: r.clientWidth
  }, i = {
    x: r.scrollWidth - t.width,
    y: r.scrollHeight - t.height
  }, n = r.scrollTop <= e.y, o = r.scrollLeft <= e.x, s = r.scrollTop >= i.y, a = r.scrollLeft >= i.x;
  return {
    isTop: n,
    isLeft: o,
    isBottom: s,
    isRight: a,
    maxScroll: i,
    minScroll: e
  };
}
const _c = {
  x: 0.2,
  y: 0.2
};
function Ec(r, e, t, i, n) {
  let {
    top: o,
    left: s,
    right: a,
    bottom: c
  } = t;
  i === void 0 && (i = 10), n === void 0 && (n = _c);
  const {
    isTop: u,
    isBottom: l,
    isLeft: d,
    isRight: h
  } = os(r), f = {
    x: 0,
    y: 0
  }, g = {
    x: 0,
    y: 0
  }, m = {
    height: e.height * n.y,
    width: e.width * n.x
  };
  return !u && o <= e.top + m.height ? (f.y = ee.Backward, g.y = i * Math.abs((e.top + m.height - o) / m.height)) : !l && c >= e.bottom - m.height && (f.y = ee.Forward, g.y = i * Math.abs((e.bottom - m.height - c) / m.height)), !h && a >= e.right - m.width ? (f.x = ee.Forward, g.x = i * Math.abs((e.right - m.width - a) / m.width)) : !d && s <= e.left + m.width && (f.x = ee.Backward, g.x = i * Math.abs((e.left + m.width - s) / m.width)), {
    direction: f,
    speed: g
  };
}
function Cc(r) {
  if (r === document.scrollingElement) {
    const {
      innerWidth: o,
      innerHeight: s
    } = window;
    return {
      top: 0,
      left: 0,
      right: o,
      bottom: s,
      width: o,
      height: s
    };
  }
  const {
    top: e,
    left: t,
    right: i,
    bottom: n
  } = r.getBoundingClientRect();
  return {
    top: e,
    left: t,
    right: i,
    bottom: n,
    width: r.clientWidth,
    height: r.clientHeight
  };
}
function ss(r) {
  return r.reduce((e, t) => Pt(e, Fr(t)), Te);
}
function Ac(r) {
  return r.reduce((e, t) => e + is(t), 0);
}
function Oc(r) {
  return r.reduce((e, t) => e + rs(t), 0);
}
function as(r, e) {
  if (e === void 0 && (e = Kt), !r)
    return;
  const {
    top: t,
    left: i,
    bottom: n,
    right: o
  } = e(r);
  ts(r) && (n <= 0 || o <= 0 || t >= window.innerHeight || i >= window.innerWidth) && r.scrollIntoView({
    block: "center",
    inline: "center"
  });
}
const Sc = [["x", ["left", "right"], Ac], ["y", ["top", "bottom"], Oc]];
class bn {
  constructor(e, t) {
    this.rect = void 0, this.width = void 0, this.height = void 0, this.top = void 0, this.bottom = void 0, this.right = void 0, this.left = void 0;
    const i = xr(t), n = ss(i);
    this.rect = {
      ...e
    }, this.width = e.width, this.height = e.height;
    for (const [o, s, a] of Sc)
      for (const c of s)
        Object.defineProperty(this, c, {
          get: () => {
            const u = a(i), l = n[o] - u;
            return this.rect[c] + l;
          },
          enumerable: !0
        });
    Object.defineProperty(this, "rect", {
      enumerable: !1
    });
  }
}
class ri {
  constructor(e) {
    this.target = void 0, this.listeners = [], this.removeAll = () => {
      this.listeners.forEach((t) => {
        var i;
        return (i = this.target) == null ? void 0 : i.removeEventListener(...t);
      });
    }, this.target = e;
  }
  add(e, t, i) {
    var n;
    (n = this.target) == null || n.addEventListener(e, t, i), this.listeners.push([e, t, i]);
  }
}
function kc(r) {
  const {
    EventTarget: e
  } = de(r);
  return r instanceof e ? r : Ut(r);
}
function zr(r, e) {
  const t = Math.abs(r.x), i = Math.abs(r.y);
  return typeof e == "number" ? Math.sqrt(t ** 2 + i ** 2) > e : "x" in e && "y" in e ? t > e.x && i > e.y : "x" in e ? t > e.x : "y" in e ? i > e.y : !1;
}
var Oe;
(function(r) {
  r.Click = "click", r.DragStart = "dragstart", r.Keydown = "keydown", r.ContextMenu = "contextmenu", r.Resize = "resize", r.SelectionChange = "selectionchange", r.VisibilityChange = "visibilitychange";
})(Oe || (Oe = {}));
function Un(r) {
  r.preventDefault();
}
function Pc(r) {
  r.stopPropagation();
}
var B;
(function(r) {
  r.Space = "Space", r.Down = "ArrowDown", r.Right = "ArrowRight", r.Left = "ArrowLeft", r.Up = "ArrowUp", r.Esc = "Escape", r.Enter = "Enter", r.Tab = "Tab";
})(B || (B = {}));
const ls = {
  start: [B.Space, B.Enter],
  cancel: [B.Esc],
  end: [B.Space, B.Enter, B.Tab]
}, Dc = (r, e) => {
  let {
    currentCoordinates: t
  } = e;
  switch (r.code) {
    case B.Right:
      return {
        ...t,
        x: t.x + 25
      };
    case B.Left:
      return {
        ...t,
        x: t.x - 25
      };
    case B.Down:
      return {
        ...t,
        y: t.y + 25
      };
    case B.Up:
      return {
        ...t,
        y: t.y - 25
      };
  }
};
class xn {
  constructor(e) {
    this.props = void 0, this.autoScrollEnabled = !1, this.referenceCoordinates = void 0, this.listeners = void 0, this.windowListeners = void 0, this.props = e;
    const {
      event: {
        target: t
      }
    } = e;
    this.props = e, this.listeners = new ri(Ut(t)), this.windowListeners = new ri(de(t)), this.handleKeyDown = this.handleKeyDown.bind(this), this.handleCancel = this.handleCancel.bind(this), this.attach();
  }
  attach() {
    this.handleStart(), this.windowListeners.add(Oe.Resize, this.handleCancel), this.windowListeners.add(Oe.VisibilityChange, this.handleCancel), setTimeout(() => this.listeners.add(Oe.Keydown, this.handleKeyDown));
  }
  handleStart() {
    const {
      activeNode: e,
      onStart: t
    } = this.props, i = e.node.current;
    i && as(i), t(Te);
  }
  handleKeyDown(e) {
    if (br(e)) {
      const {
        active: t,
        context: i,
        options: n
      } = this.props, {
        keyboardCodes: o = ls,
        coordinateGetter: s = Dc,
        scrollBehavior: a = "smooth"
      } = n, {
        code: c
      } = e;
      if (o.end.includes(c)) {
        this.handleEnd(e);
        return;
      }
      if (o.cancel.includes(c)) {
        this.handleCancel(e);
        return;
      }
      const {
        collisionRect: u
      } = i.current, l = u ? {
        x: u.left,
        y: u.top
      } : Te;
      this.referenceCoordinates || (this.referenceCoordinates = l);
      const d = s(e, {
        active: t,
        context: i.current,
        currentCoordinates: l
      });
      if (d) {
        const h = hi(d, l), f = {
          x: 0,
          y: 0
        }, {
          scrollableAncestors: g
        } = i.current;
        for (const m of g) {
          const y = e.code, {
            isTop: x,
            isRight: _,
            isLeft: v,
            isBottom: E,
            maxScroll: b,
            minScroll: w
          } = os(m), C = Cc(m), O = {
            x: Math.min(y === B.Right ? C.right - C.width / 2 : C.right, Math.max(y === B.Right ? C.left : C.left + C.width / 2, d.x)),
            y: Math.min(y === B.Down ? C.bottom - C.height / 2 : C.bottom, Math.max(y === B.Down ? C.top : C.top + C.height / 2, d.y))
          }, N = y === B.Right && !_ || y === B.Left && !v, D = y === B.Down && !E || y === B.Up && !x;
          if (N && O.x !== d.x) {
            const S = m.scrollLeft + h.x, P = y === B.Right && S <= b.x || y === B.Left && S >= w.x;
            if (P && !h.y) {
              m.scrollTo({
                left: S,
                behavior: a
              });
              return;
            }
            P ? f.x = m.scrollLeft - S : f.x = y === B.Right ? m.scrollLeft - b.x : m.scrollLeft - w.x, f.x && m.scrollBy({
              left: -f.x,
              behavior: a
            });
            break;
          } else if (D && O.y !== d.y) {
            const S = m.scrollTop + h.y, P = y === B.Down && S <= b.y || y === B.Up && S >= w.y;
            if (P && !h.x) {
              m.scrollTo({
                top: S,
                behavior: a
              });
              return;
            }
            P ? f.y = m.scrollTop - S : f.y = y === B.Down ? m.scrollTop - b.y : m.scrollTop - w.y, f.y && m.scrollBy({
              top: -f.y,
              behavior: a
            });
            break;
          }
        }
        this.handleMove(e, Pt(hi(d, this.referenceCoordinates), f));
      }
    }
  }
  handleMove(e, t) {
    const {
      onMove: i
    } = this.props;
    e.preventDefault(), i(t);
  }
  handleEnd(e) {
    const {
      onEnd: t
    } = this.props;
    e.preventDefault(), this.detach(), t();
  }
  handleCancel(e) {
    const {
      onCancel: t
    } = this.props;
    e.preventDefault(), this.detach(), t();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll();
  }
}
xn.activators = [{
  eventName: "onKeyDown",
  handler: (r, e, t) => {
    let {
      keyboardCodes: i = ls,
      onActivation: n
    } = e, {
      active: o
    } = t;
    const {
      code: s
    } = r.nativeEvent;
    if (i.start.includes(s)) {
      const a = o.activatorNode.current;
      return a && r.target !== a ? !1 : (r.preventDefault(), n?.({
        event: r.nativeEvent
      }), !0);
    }
    return !1;
  }
}];
function Kn(r) {
  return !!(r && "distance" in r);
}
function Vn(r) {
  return !!(r && "delay" in r);
}
class wn {
  constructor(e, t, i) {
    var n;
    i === void 0 && (i = kc(e.event.target)), this.props = void 0, this.events = void 0, this.autoScrollEnabled = !0, this.document = void 0, this.activated = !1, this.initialCoordinates = void 0, this.timeoutId = null, this.listeners = void 0, this.documentListeners = void 0, this.windowListeners = void 0, this.props = e, this.events = t;
    const {
      event: o
    } = e, {
      target: s
    } = o;
    this.props = e, this.events = t, this.document = Ut(s), this.documentListeners = new ri(this.document), this.listeners = new ri(i), this.windowListeners = new ri(de(s)), this.initialCoordinates = (n = Vi(o)) != null ? n : Te, this.handleStart = this.handleStart.bind(this), this.handleMove = this.handleMove.bind(this), this.handleEnd = this.handleEnd.bind(this), this.handleCancel = this.handleCancel.bind(this), this.handleKeydown = this.handleKeydown.bind(this), this.removeTextSelection = this.removeTextSelection.bind(this), this.attach();
  }
  attach() {
    const {
      events: e,
      props: {
        options: {
          activationConstraint: t,
          bypassActivationConstraint: i
        }
      }
    } = this;
    if (this.listeners.add(e.move.name, this.handleMove, {
      passive: !1
    }), this.listeners.add(e.end.name, this.handleEnd), e.cancel && this.listeners.add(e.cancel.name, this.handleCancel), this.windowListeners.add(Oe.Resize, this.handleCancel), this.windowListeners.add(Oe.DragStart, Un), this.windowListeners.add(Oe.VisibilityChange, this.handleCancel), this.windowListeners.add(Oe.ContextMenu, Un), this.documentListeners.add(Oe.Keydown, this.handleKeydown), t) {
      if (i != null && i({
        event: this.props.event,
        activeNode: this.props.activeNode,
        options: this.props.options
      }))
        return this.handleStart();
      if (Vn(t)) {
        this.timeoutId = setTimeout(this.handleStart, t.delay), this.handlePending(t);
        return;
      }
      if (Kn(t)) {
        this.handlePending(t);
        return;
      }
    }
    this.handleStart();
  }
  detach() {
    this.listeners.removeAll(), this.windowListeners.removeAll(), setTimeout(this.documentListeners.removeAll, 50), this.timeoutId !== null && (clearTimeout(this.timeoutId), this.timeoutId = null);
  }
  handlePending(e, t) {
    const {
      active: i,
      onPending: n
    } = this.props;
    n(i, e, this.initialCoordinates, t);
  }
  handleStart() {
    const {
      initialCoordinates: e
    } = this, {
      onStart: t
    } = this.props;
    e && (this.activated = !0, this.documentListeners.add(Oe.Click, Pc, {
      capture: !0
    }), this.removeTextSelection(), this.documentListeners.add(Oe.SelectionChange, this.removeTextSelection), t(e));
  }
  handleMove(e) {
    var t;
    const {
      activated: i,
      initialCoordinates: n,
      props: o
    } = this, {
      onMove: s,
      options: {
        activationConstraint: a
      }
    } = o;
    if (!n)
      return;
    const c = (t = Vi(e)) != null ? t : Te, u = hi(n, c);
    if (!i && a) {
      if (Kn(a)) {
        if (a.tolerance != null && zr(u, a.tolerance))
          return this.handleCancel();
        if (zr(u, a.distance))
          return this.handleStart();
      }
      if (Vn(a) && zr(u, a.tolerance))
        return this.handleCancel();
      this.handlePending(a, u);
      return;
    }
    e.cancelable && e.preventDefault(), s(c);
  }
  handleEnd() {
    const {
      onAbort: e,
      onEnd: t
    } = this.props;
    this.detach(), this.activated || e(this.props.active), t();
  }
  handleCancel() {
    const {
      onAbort: e,
      onCancel: t
    } = this.props;
    this.detach(), this.activated || e(this.props.active), t();
  }
  handleKeydown(e) {
    e.code === B.Esc && this.handleCancel();
  }
  removeTextSelection() {
    var e;
    (e = this.document.getSelection()) == null || e.removeAllRanges();
  }
}
const Rc = {
  cancel: {
    name: "pointercancel"
  },
  move: {
    name: "pointermove"
  },
  end: {
    name: "pointerup"
  }
};
class _n extends wn {
  constructor(e) {
    const {
      event: t
    } = e, i = Ut(t.target);
    super(e, Rc, i);
  }
}
_n.activators = [{
  eventName: "onPointerDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: i
    } = e;
    return !t.isPrimary || t.button !== 0 ? !1 : (i?.({
      event: t
    }), !0);
  }
}];
const Nc = {
  move: {
    name: "mousemove"
  },
  end: {
    name: "mouseup"
  }
};
var Hr;
(function(r) {
  r[r.RightClick = 2] = "RightClick";
})(Hr || (Hr = {}));
class Tc extends wn {
  constructor(e) {
    super(e, Nc, Ut(e.event.target));
  }
}
Tc.activators = [{
  eventName: "onMouseDown",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: i
    } = e;
    return t.button === Hr.RightClick ? !1 : (i?.({
      event: t
    }), !0);
  }
}];
const Lr = {
  cancel: {
    name: "touchcancel"
  },
  move: {
    name: "touchmove"
  },
  end: {
    name: "touchend"
  }
};
class zc extends wn {
  constructor(e) {
    super(e, Lr);
  }
  static setup() {
    return window.addEventListener(Lr.move.name, e, {
      capture: !1,
      passive: !1
    }), function() {
      window.removeEventListener(Lr.move.name, e);
    };
    function e() {
    }
  }
}
zc.activators = [{
  eventName: "onTouchStart",
  handler: (r, e) => {
    let {
      nativeEvent: t
    } = r, {
      onActivation: i
    } = e;
    const {
      touches: n
    } = t;
    return n.length > 1 ? !1 : (i?.({
      event: t
    }), !0);
  }
}];
var ni;
(function(r) {
  r[r.Pointer = 0] = "Pointer", r[r.DraggableRect = 1] = "DraggableRect";
})(ni || (ni = {}));
var Yi;
(function(r) {
  r[r.TreeOrder = 0] = "TreeOrder", r[r.ReversedTreeOrder = 1] = "ReversedTreeOrder";
})(Yi || (Yi = {}));
function Lc(r) {
  let {
    acceleration: e,
    activator: t = ni.Pointer,
    canScroll: i,
    draggingRect: n,
    enabled: o,
    interval: s = 5,
    order: a = Yi.TreeOrder,
    pointerCoordinates: c,
    scrollableAncestors: u,
    scrollableAncestorRects: l,
    delta: d,
    threshold: h
  } = r;
  const f = Ic({
    delta: d,
    disabled: !o
  }), [g, m] = Vl(), y = I({
    x: 0,
    y: 0
  }), x = I({
    x: 0,
    y: 0
  }), _ = j(() => {
    switch (t) {
      case ni.Pointer:
        return c ? {
          top: c.y,
          bottom: c.y,
          left: c.x,
          right: c.x
        } : null;
      case ni.DraggableRect:
        return n;
    }
  }, [t, n, c]), v = I(null), E = J(() => {
    const w = v.current;
    if (!w)
      return;
    const C = y.current.x * x.current.x, O = y.current.y * x.current.y;
    w.scrollBy(C, O);
  }, []), b = j(() => a === Yi.TreeOrder ? [...u].reverse() : u, [a, u]);
  $(
    () => {
      if (!o || !u.length || !_) {
        m();
        return;
      }
      for (const w of b) {
        if (i?.(w) === !1)
          continue;
        const C = u.indexOf(w), O = l[C];
        if (!O)
          continue;
        const {
          direction: N,
          speed: D
        } = Ec(w, O, _, e, h);
        for (const S of ["x", "y"])
          f[S][N[S]] || (D[S] = 0, N[S] = 0);
        if (D.x > 0 || D.y > 0) {
          m(), v.current = w, g(E, s), y.current = D, x.current = N;
          return;
        }
      }
      y.current = {
        x: 0,
        y: 0
      }, x.current = {
        x: 0,
        y: 0
      }, m();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      e,
      E,
      i,
      m,
      o,
      s,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(_),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(f),
      g,
      u,
      b,
      l,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      JSON.stringify(h)
    ]
  );
}
const Mc = {
  x: {
    [ee.Backward]: !1,
    [ee.Forward]: !1
  },
  y: {
    [ee.Backward]: !1,
    [ee.Forward]: !1
  }
};
function Ic(r) {
  let {
    delta: e,
    disabled: t
  } = r;
  const i = Ki(e);
  return xi((n) => {
    if (t || !i || !n)
      return Mc;
    const o = {
      x: Math.sign(e.x - i.x),
      y: Math.sign(e.y - i.y)
    };
    return {
      x: {
        [ee.Backward]: n.x[ee.Backward] || o.x === -1,
        [ee.Forward]: n.x[ee.Forward] || o.x === 1
      },
      y: {
        [ee.Backward]: n.y[ee.Backward] || o.y === -1,
        [ee.Forward]: n.y[ee.Forward] || o.y === 1
      }
    };
  }, [t, e, i]);
}
function $c(r, e) {
  const t = e != null ? r.get(e) : void 0, i = t ? t.node.current : null;
  return xi((n) => {
    var o;
    return e == null ? null : (o = i ?? n) != null ? o : null;
  }, [i, e]);
}
function jc(r, e) {
  return j(() => r.reduce((t, i) => {
    const {
      sensor: n
    } = i, o = n.activators.map((s) => ({
      eventName: s.eventName,
      handler: e(s.handler, i)
    }));
    return [...t, ...o];
  }, []), [r, e]);
}
var fi;
(function(r) {
  r[r.Always = 0] = "Always", r[r.BeforeDragging = 1] = "BeforeDragging", r[r.WhileDragging = 2] = "WhileDragging";
})(fi || (fi = {}));
var Wr;
(function(r) {
  r.Optimized = "optimized";
})(Wr || (Wr = {}));
const Xn = /* @__PURE__ */ new Map();
function Bc(r, e) {
  let {
    dragging: t,
    dependencies: i,
    config: n
  } = e;
  const [o, s] = F(null), {
    frequency: a,
    measure: c,
    strategy: u
  } = n, l = I(r), d = y(), h = di(d), f = J(function(x) {
    x === void 0 && (x = []), !h.current && s((_) => _ === null ? x : _.concat(x.filter((v) => !_.includes(v))));
  }, [h]), g = I(null), m = xi((x) => {
    if (d && !t)
      return Xn;
    if (!x || x === Xn || l.current !== r || o != null) {
      const _ = /* @__PURE__ */ new Map();
      for (let v of r) {
        if (!v)
          continue;
        if (o && o.length > 0 && !o.includes(v.id) && v.rect.current) {
          _.set(v.id, v.rect.current);
          continue;
        }
        const E = v.node.current, b = E ? new bn(c(E), E) : null;
        v.rect.current = b, b && _.set(v.id, b);
      }
      return _;
    }
    return x;
  }, [r, o, t, d, c]);
  return $(() => {
    l.current = r;
  }, [r]), $(
    () => {
      d || f();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t, d]
  ), $(
    () => {
      o && o.length > 0 && s(null);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(o)]
  ), $(
    () => {
      d || typeof a != "number" || g.current !== null || (g.current = setTimeout(() => {
        f(), g.current = null;
      }, a));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [a, d, f, ...i]
  ), {
    droppableRects: m,
    measureDroppableContainers: f,
    measuringScheduled: o != null
  };
  function y() {
    switch (u) {
      case fi.Always:
        return !1;
      case fi.BeforeDragging:
        return t;
      default:
        return !t;
    }
  }
}
function En(r, e) {
  return xi((t) => r ? t || (typeof e == "function" ? e(r) : r) : null, [e, r]);
}
function Fc(r, e) {
  return En(r, e);
}
function Hc(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const i = yr(e), n = j(() => {
    if (t || typeof window > "u" || typeof window.MutationObserver > "u")
      return;
    const {
      MutationObserver: o
    } = window;
    return new o(i);
  }, [i, t]);
  return $(() => () => n?.disconnect(), [n]), n;
}
function wr(r) {
  let {
    callback: e,
    disabled: t
  } = r;
  const i = yr(e), n = j(
    () => {
      if (t || typeof window > "u" || typeof window.ResizeObserver > "u")
        return;
      const {
        ResizeObserver: o
      } = window;
      return new o(i);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t]
  );
  return $(() => () => n?.disconnect(), [n]), n;
}
function Wc(r) {
  return new bn(Kt(r), r);
}
function Yn(r, e, t) {
  e === void 0 && (e = Wc);
  const [i, n] = F(null);
  function o() {
    n((c) => {
      if (!r)
        return null;
      if (r.isConnected === !1) {
        var u;
        return (u = c ?? t) != null ? u : null;
      }
      const l = e(r);
      return JSON.stringify(c) === JSON.stringify(l) ? c : l;
    });
  }
  const s = Hc({
    callback(c) {
      if (r)
        for (const u of c) {
          const {
            type: l,
            target: d
          } = u;
          if (l === "childList" && d instanceof HTMLElement && d.contains(r)) {
            o();
            break;
          }
        }
    }
  }), a = wr({
    callback: o
  });
  return Ne(() => {
    o(), r ? (a?.observe(r), s?.observe(document.body, {
      childList: !0,
      subtree: !0
    })) : (a?.disconnect(), s?.disconnect());
  }, [r]), i;
}
function Gc(r) {
  const e = En(r);
  return Qo(r, e);
}
const qn = [];
function Uc(r) {
  const e = I(r), t = xi((i) => r ? i && i !== qn && r && e.current && r.parentNode === e.current.parentNode ? i : xr(r) : qn, [r]);
  return $(() => {
    e.current = r;
  }, [r]), t;
}
function Kc(r) {
  const [e, t] = F(null), i = I(r), n = J((o) => {
    const s = Tr(o.target);
    s && t((a) => a ? (a.set(s, Fr(s)), new Map(a)) : null);
  }, []);
  return $(() => {
    const o = i.current;
    if (r !== o) {
      s(o);
      const a = r.map((c) => {
        const u = Tr(c);
        return u ? (u.addEventListener("scroll", n, {
          passive: !0
        }), [u, Fr(u)]) : null;
      }).filter((c) => c != null);
      t(a.length ? new Map(a) : null), i.current = r;
    }
    return () => {
      s(r), s(o);
    };
    function s(a) {
      a.forEach((c) => {
        const u = Tr(c);
        u?.removeEventListener("scroll", n);
      });
    }
  }, [n, r]), j(() => r.length ? e ? Array.from(e.values()).reduce((o, s) => Pt(o, s), Te) : ss(r) : Te, [r, e]);
}
function Jn(r, e) {
  e === void 0 && (e = []);
  const t = I(null);
  return $(
    () => {
      t.current = null;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    e
  ), $(() => {
    const i = r !== Te;
    i && !t.current && (t.current = r), !i && t.current && (t.current = null);
  }, [r]), t.current ? hi(r, t.current) : Te;
}
function Vc(r) {
  $(
    () => {
      if (!vr)
        return;
      const e = r.map((t) => {
        let {
          sensor: i
        } = t;
        return i.setup == null ? void 0 : i.setup();
      });
      return () => {
        for (const t of e)
          t?.();
      };
    },
    // TO-DO: Sensors length could theoretically change which would not be a valid dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
    r.map((e) => {
      let {
        sensor: t
      } = e;
      return t;
    })
  );
}
function Xc(r, e) {
  return j(() => r.reduce((t, i) => {
    let {
      eventName: n,
      handler: o
    } = i;
    return t[n] = (s) => {
      o(s, e);
    }, t;
  }, {}), [r, e]);
}
function cs(r) {
  return j(() => r ? bc(r) : null, [r]);
}
const Zn = [];
function Yc(r, e) {
  e === void 0 && (e = Kt);
  const [t] = r, i = cs(t ? de(t) : null), [n, o] = F(Zn);
  function s() {
    o(() => r.length ? r.map((c) => ns(c) ? i : new bn(e(c), c)) : Zn);
  }
  const a = wr({
    callback: s
  });
  return Ne(() => {
    a?.disconnect(), s(), r.forEach((c) => a?.observe(c));
  }, [r]), n;
}
function us(r) {
  if (!r)
    return null;
  if (r.children.length > 1)
    return r;
  const e = r.children[0];
  return bi(e) ? e : r;
}
function qc(r) {
  let {
    measure: e
  } = r;
  const [t, i] = F(null), n = J((u) => {
    for (const {
      target: l
    } of u)
      if (bi(l)) {
        i((d) => {
          const h = e(l);
          return d ? {
            ...d,
            width: h.width,
            height: h.height
          } : h;
        });
        break;
      }
  }, [e]), o = wr({
    callback: n
  }), s = J((u) => {
    const l = us(u);
    o?.disconnect(), l && o?.observe(l), i(l ? e(l) : null);
  }, [e, o]), [a, c] = Ui(s);
  return j(() => ({
    nodeRef: a,
    rect: t,
    setRef: c
  }), [t, a, c]);
}
const Jc = [{
  sensor: _n,
  options: {}
}, {
  sensor: xn,
  options: {}
}], Zc = {
  current: {}
}, Li = {
  draggable: {
    measure: Gn
  },
  droppable: {
    measure: Gn,
    strategy: fi.WhileDragging,
    frequency: Wr.Optimized
  },
  dragOverlay: {
    measure: Kt
  }
};
class oi extends Map {
  get(e) {
    var t;
    return e != null && (t = super.get(e)) != null ? t : void 0;
  }
  toArray() {
    return Array.from(this.values());
  }
  getEnabled() {
    return this.toArray().filter((e) => {
      let {
        disabled: t
      } = e;
      return !t;
    });
  }
  getNodeFor(e) {
    var t, i;
    return (t = (i = this.get(e)) == null ? void 0 : i.node.current) != null ? t : void 0;
  }
}
const Qc = {
  activatorEvent: null,
  active: null,
  activeNode: null,
  activeNodeRect: null,
  collisions: null,
  containerNodeRect: null,
  draggableNodes: /* @__PURE__ */ new Map(),
  droppableRects: /* @__PURE__ */ new Map(),
  droppableContainers: /* @__PURE__ */ new oi(),
  over: null,
  dragOverlay: {
    nodeRef: {
      current: null
    },
    rect: null,
    setRef: Xi
  },
  scrollableAncestors: [],
  scrollableAncestorRects: [],
  measuringConfiguration: Li,
  measureDroppableContainers: Xi,
  windowRect: null,
  measuringScheduled: !1
}, ds = {
  activatorEvent: null,
  activators: [],
  active: null,
  activeNodeRect: null,
  ariaDescribedById: {
    draggable: ""
  },
  dispatch: Xi,
  draggableNodes: /* @__PURE__ */ new Map(),
  over: null,
  measureDroppableContainers: Xi
}, _i = /* @__PURE__ */ Ye(ds), hs = /* @__PURE__ */ Ye(Qc);
function eu() {
  return {
    draggable: {
      active: null,
      initialCoordinates: {
        x: 0,
        y: 0
      },
      nodes: /* @__PURE__ */ new Map(),
      translate: {
        x: 0,
        y: 0
      }
    },
    droppable: {
      containers: new oi()
    }
  };
}
function tu(r, e) {
  switch (e.type) {
    case Q.DragStart:
      return {
        ...r,
        draggable: {
          ...r.draggable,
          initialCoordinates: e.initialCoordinates,
          active: e.active
        }
      };
    case Q.DragMove:
      return r.draggable.active == null ? r : {
        ...r,
        draggable: {
          ...r.draggable,
          translate: {
            x: e.coordinates.x - r.draggable.initialCoordinates.x,
            y: e.coordinates.y - r.draggable.initialCoordinates.y
          }
        }
      };
    case Q.DragEnd:
    case Q.DragCancel:
      return {
        ...r,
        draggable: {
          ...r.draggable,
          active: null,
          initialCoordinates: {
            x: 0,
            y: 0
          },
          translate: {
            x: 0,
            y: 0
          }
        }
      };
    case Q.RegisterDroppable: {
      const {
        element: t
      } = e, {
        id: i
      } = t, n = new oi(r.droppable.containers);
      return n.set(i, t), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: n
        }
      };
    }
    case Q.SetDroppableDisabled: {
      const {
        id: t,
        key: i,
        disabled: n
      } = e, o = r.droppable.containers.get(t);
      if (!o || i !== o.key)
        return r;
      const s = new oi(r.droppable.containers);
      return s.set(t, {
        ...o,
        disabled: n
      }), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: s
        }
      };
    }
    case Q.UnregisterDroppable: {
      const {
        id: t,
        key: i
      } = e, n = r.droppable.containers.get(t);
      if (!n || i !== n.key)
        return r;
      const o = new oi(r.droppable.containers);
      return o.delete(t), {
        ...r,
        droppable: {
          ...r.droppable,
          containers: o
        }
      };
    }
    default:
      return r;
  }
}
function iu(r) {
  let {
    disabled: e
  } = r;
  const {
    active: t,
    activatorEvent: i,
    draggableNodes: n
  } = We(_i), o = Ki(i), s = Ki(t?.id);
  return $(() => {
    if (!e && !i && o && s != null) {
      if (!br(o) || document.activeElement === o.target)
        return;
      const a = n.get(s);
      if (!a)
        return;
      const {
        activatorNode: c,
        node: u
      } = a;
      if (!c.current && !u.current)
        return;
      requestAnimationFrame(() => {
        for (const l of [c.current, u.current]) {
          if (!l)
            continue;
          const d = ql(l);
          if (d) {
            d.focus();
            break;
          }
        }
      });
    }
  }, [i, e, n, s, o]), null;
}
function fs(r, e) {
  let {
    transform: t,
    ...i
  } = e;
  return r != null && r.length ? r.reduce((n, o) => o({
    transform: n,
    ...i
  }), t) : t;
}
function ru(r) {
  return j(
    () => ({
      draggable: {
        ...Li.draggable,
        ...r?.draggable
      },
      droppable: {
        ...Li.droppable,
        ...r?.droppable
      },
      dragOverlay: {
        ...Li.dragOverlay,
        ...r?.dragOverlay
      }
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [r?.draggable, r?.droppable, r?.dragOverlay]
  );
}
function nu(r) {
  let {
    activeNode: e,
    measure: t,
    initialRect: i,
    config: n = !0
  } = r;
  const o = I(!1), {
    x: s,
    y: a
  } = typeof n == "boolean" ? {
    x: n,
    y: n
  } : n;
  Ne(() => {
    if (!s && !a || !e) {
      o.current = !1;
      return;
    }
    if (o.current || !i)
      return;
    const u = e?.node.current;
    if (!u || u.isConnected === !1)
      return;
    const l = t(u), d = Qo(l, i);
    if (s || (d.x = 0), a || (d.y = 0), o.current = !0, Math.abs(d.x) > 0 || Math.abs(d.y) > 0) {
      const h = ts(u);
      h && h.scrollBy({
        top: d.y,
        left: d.x
      });
    }
  }, [e, s, a, i, t]);
}
const _r = /* @__PURE__ */ Ye({
  ...Te,
  scaleX: 1,
  scaleY: 1
});
var st;
(function(r) {
  r[r.Uninitialized = 0] = "Uninitialized", r[r.Initializing = 1] = "Initializing", r[r.Initialized = 2] = "Initialized";
})(st || (st = {}));
const ou = /* @__PURE__ */ ll(function(e) {
  var t, i, n, o;
  let {
    id: s,
    accessibility: a,
    autoScroll: c = !0,
    children: u,
    sensors: l = Jc,
    collisionDetection: d = fc,
    measuring: h,
    modifiers: f,
    ...g
  } = e;
  const m = cl(tu, void 0, eu), [y, x] = m, [_, v] = ic(), [E, b] = F(st.Uninitialized), w = E === st.Initialized, {
    draggable: {
      active: C,
      nodes: O,
      translate: N
    },
    droppable: {
      containers: D
    }
  } = y, S = C != null ? O.get(C) : null, P = I({
    initial: null,
    translated: null
  }), R = j(() => {
    var oe;
    return C != null ? {
      id: C,
      // It's possible for the active node to unmount while dragging
      data: (oe = S?.data) != null ? oe : Zc,
      rect: P
    } : null;
  }, [C, S]), M = I(null), [U, H] = F(null), [V, le] = F(null), G = di(g, Object.values(g)), Pe = wi("DndDescribedBy", s), Oi = j(() => D.getEnabled(), [D]), he = ru(h), {
    droppableRects: Ge,
    measureDroppableContainers: dt,
    measuringScheduled: qt
  } = Bc(Oi, {
    dragging: w,
    dependencies: [N.x, N.y],
    config: he.droppable
  }), Ee = $c(O, C), Si = j(() => V ? Vi(V) : null, [V]), Ze = ea(), Ue = Fc(Ee, he.draggable.measure);
  nu({
    activeNode: C != null ? O.get(C) : null,
    config: Ze.layoutShiftCompensation,
    initialRect: Ue,
    measure: he.draggable.measure
  });
  const W = Yn(Ee, he.draggable.measure, Ue), Jt = Yn(Ee ? Ee.parentElement : null), Me = I({
    activatorEvent: null,
    active: null,
    activeNode: Ee,
    collisionRect: null,
    collisions: null,
    droppableRects: Ge,
    draggableNodes: O,
    draggingNode: null,
    draggingNodeRect: null,
    droppableContainers: D,
    over: null,
    scrollableAncestors: [],
    scrollAdjustedTranslate: null
  }), vt = D.getNodeFor((t = Me.current.over) == null ? void 0 : t.id), Ke = qc({
    measure: he.dragOverlay.measure
  }), yt = (i = Ke.nodeRef.current) != null ? i : Ee, bt = w ? (n = Ke.rect) != null ? n : W : null, kn = !!(Ke.nodeRef.current && Ke.rect), Pn = Gc(kn ? null : W), Or = cs(yt ? de(yt) : null), Qe = Uc(w ? vt ?? Ee : null), ki = Yc(Qe), Pi = fs(f, {
    transform: {
      x: N.x - Pn.x,
      y: N.y - Pn.y,
      scaleX: 1,
      scaleY: 1
    },
    activatorEvent: V,
    active: R,
    activeNodeRect: W,
    containerNodeRect: Jt,
    draggingNodeRect: bt,
    over: Me.current.over,
    overlayNodeRect: Ke.rect,
    scrollableAncestors: Qe,
    scrollableAncestorRects: ki,
    windowRect: Or
  }), Dn = Si ? Pt(Si, N) : null, Rn = Kc(Qe), Vs = Jn(Rn), Xs = Jn(Rn, [W]), xt = Pt(Pi, Vs), wt = bt ? gc(bt, Pi) : null, Zt = R && wt ? d({
    active: R,
    collisionRect: wt,
    droppableRects: Ge,
    droppableContainers: Oi,
    pointerCoordinates: Dn
  }) : null, Nn = Zo(Zt, "id"), [et, Tn] = F(null), Ys = kn ? Pi : Pt(Pi, Xs), qs = pc(Ys, (o = et?.rect) != null ? o : null, W), Sr = I(null), zn = J(
    (oe, ge) => {
      let {
        sensor: ve,
        options: tt
      } = ge;
      if (M.current == null)
        return;
      const Ce = O.get(M.current);
      if (!Ce)
        return;
      const ye = oe.nativeEvent, Ie = new ve({
        active: M.current,
        activeNode: Ce,
        event: ye,
        options: tt,
        // Sensors need to be instantiated with refs for arguments that change over time
        // otherwise they are frozen in time with the stale arguments
        context: Me,
        onAbort(te) {
          if (!O.get(te))
            return;
          const {
            onDragAbort: $e
          } = G.current, Ve = {
            id: te
          };
          $e?.(Ve), _({
            type: "onDragAbort",
            event: Ve
          });
        },
        onPending(te, it, $e, Ve) {
          if (!O.get(te))
            return;
          const {
            onDragPending: ei
          } = G.current, rt = {
            id: te,
            constraint: it,
            initialCoordinates: $e,
            offset: Ve
          };
          ei?.(rt), _({
            type: "onDragPending",
            event: rt
          });
        },
        onStart(te) {
          const it = M.current;
          if (it == null)
            return;
          const $e = O.get(it);
          if (!$e)
            return;
          const {
            onDragStart: Ve
          } = G.current, Qt = {
            activatorEvent: ye,
            active: {
              id: it,
              data: $e.data,
              rect: P
            }
          };
          Ni(() => {
            Ve?.(Qt), b(st.Initializing), x({
              type: Q.DragStart,
              initialCoordinates: te,
              active: it
            }), _({
              type: "onDragStart",
              event: Qt
            }), H(Sr.current), le(ye);
          });
        },
        onMove(te) {
          x({
            type: Q.DragMove,
            coordinates: te
          });
        },
        onEnd: _t(Q.DragEnd),
        onCancel: _t(Q.DragCancel)
      });
      Sr.current = Ie;
      function _t(te) {
        return async function() {
          const {
            active: $e,
            collisions: Ve,
            over: Qt,
            scrollAdjustedTranslate: ei
          } = Me.current;
          let rt = null;
          if ($e && ei) {
            const {
              cancelDrop: ti
            } = G.current;
            rt = {
              activatorEvent: ye,
              active: $e,
              collisions: Ve,
              delta: ei,
              over: Qt
            }, te === Q.DragEnd && typeof ti == "function" && await Promise.resolve(ti(rt)) && (te = Q.DragCancel);
          }
          M.current = null, Ni(() => {
            x({
              type: te
            }), b(st.Uninitialized), Tn(null), H(null), le(null), Sr.current = null;
            const ti = te === Q.DragEnd ? "onDragEnd" : "onDragCancel";
            if (rt) {
              const kr = G.current[ti];
              kr?.(rt), _({
                type: ti,
                event: rt
              });
            }
          });
        };
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [O]
  ), Js = J((oe, ge) => (ve, tt) => {
    const Ce = ve.nativeEvent, ye = O.get(tt);
    if (
      // Another sensor is already instantiating
      M.current !== null || // No active draggable
      !ye || // Event has already been captured
      Ce.dndKit || Ce.defaultPrevented
    )
      return;
    const Ie = {
      active: ye
    };
    oe(ve, ge.options, Ie) === !0 && (Ce.dndKit = {
      capturedBy: ge.sensor
    }, M.current = tt, zn(ve, ge));
  }, [O, zn]), Ln = jc(l, Js);
  Vc(l), Ne(() => {
    W && E === st.Initializing && b(st.Initialized);
  }, [W, E]), $(
    () => {
      const {
        onDragMove: oe
      } = G.current, {
        active: ge,
        activatorEvent: ve,
        collisions: tt,
        over: Ce
      } = Me.current;
      if (!ge || !ve)
        return;
      const ye = {
        active: ge,
        activatorEvent: ve,
        collisions: tt,
        delta: {
          x: xt.x,
          y: xt.y
        },
        over: Ce
      };
      Ni(() => {
        oe?.(ye), _({
          type: "onDragMove",
          event: ye
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [xt.x, xt.y]
  ), $(
    () => {
      const {
        active: oe,
        activatorEvent: ge,
        collisions: ve,
        droppableContainers: tt,
        scrollAdjustedTranslate: Ce
      } = Me.current;
      if (!oe || M.current == null || !ge || !Ce)
        return;
      const {
        onDragOver: ye
      } = G.current, Ie = tt.get(Nn), _t = Ie && Ie.rect.current ? {
        id: Ie.id,
        rect: Ie.rect.current,
        data: Ie.data,
        disabled: Ie.disabled
      } : null, te = {
        active: oe,
        activatorEvent: ge,
        collisions: ve,
        delta: {
          x: Ce.x,
          y: Ce.y
        },
        over: _t
      };
      Ni(() => {
        Tn(_t), ye?.(te), _({
          type: "onDragOver",
          event: te
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Nn]
  ), Ne(() => {
    Me.current = {
      activatorEvent: V,
      active: R,
      activeNode: Ee,
      collisionRect: wt,
      collisions: Zt,
      droppableRects: Ge,
      draggableNodes: O,
      draggingNode: yt,
      draggingNodeRect: bt,
      droppableContainers: D,
      over: et,
      scrollableAncestors: Qe,
      scrollAdjustedTranslate: xt
    }, P.current = {
      initial: bt,
      translated: wt
    };
  }, [R, Ee, Zt, wt, O, yt, bt, Ge, D, et, Qe, xt]), Lc({
    ...Ze,
    delta: N,
    draggingRect: wt,
    pointerCoordinates: Dn,
    scrollableAncestors: Qe,
    scrollableAncestorRects: ki
  });
  const Zs = j(() => ({
    active: R,
    activeNode: Ee,
    activeNodeRect: W,
    activatorEvent: V,
    collisions: Zt,
    containerNodeRect: Jt,
    dragOverlay: Ke,
    draggableNodes: O,
    droppableContainers: D,
    droppableRects: Ge,
    over: et,
    measureDroppableContainers: dt,
    scrollableAncestors: Qe,
    scrollableAncestorRects: ki,
    measuringConfiguration: he,
    measuringScheduled: qt,
    windowRect: Or
  }), [R, Ee, W, V, Zt, Jt, Ke, O, D, Ge, et, dt, Qe, ki, he, qt, Or]), Qs = j(() => ({
    activatorEvent: V,
    activators: Ln,
    active: R,
    activeNodeRect: W,
    ariaDescribedById: {
      draggable: Pe
    },
    dispatch: x,
    draggableNodes: O,
    over: et,
    measureDroppableContainers: dt
  }), [V, Ln, R, W, x, Pe, O, et, dt]);
  return k.createElement(Jo.Provider, {
    value: v
  }, k.createElement(_i.Provider, {
    value: Qs
  }, k.createElement(hs.Provider, {
    value: Zs
  }, k.createElement(_r.Provider, {
    value: qs
  }, u)), k.createElement(iu, {
    disabled: a?.restoreFocus === !1
  })), k.createElement(oc, {
    ...a,
    hiddenTextDescribedById: Pe
  }));
  function ea() {
    const oe = U?.autoScrollEnabled === !1, ge = typeof c == "object" ? c.enabled === !1 : c === !1, ve = w && !oe && !ge;
    return typeof c == "object" ? {
      ...c,
      enabled: ve
    } : {
      enabled: ve
    };
  }
}), su = /* @__PURE__ */ Ye(null), Qn = "button", au = "Draggable";
function lu(r) {
  let {
    id: e,
    data: t,
    disabled: i = !1,
    attributes: n
  } = r;
  const o = wi(au), {
    activators: s,
    activatorEvent: a,
    active: c,
    activeNodeRect: u,
    ariaDescribedById: l,
    draggableNodes: d,
    over: h
  } = We(_i), {
    role: f = Qn,
    roleDescription: g = "draggable",
    tabIndex: m = 0
  } = n ?? {}, y = c?.id === e, x = We(y ? _r : su), [_, v] = Ui(), [E, b] = Ui(), w = Xc(s, e), C = di(t);
  Ne(
    () => (d.set(e, {
      id: e,
      key: o,
      node: _,
      activatorNode: E,
      data: C
    }), () => {
      const N = d.get(e);
      N && N.key === o && d.delete(e);
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [d, e]
  );
  const O = j(() => ({
    role: f,
    tabIndex: m,
    "aria-disabled": i,
    "aria-pressed": y && f === Qn ? !0 : void 0,
    "aria-roledescription": g,
    "aria-describedby": l.draggable
  }), [i, f, m, y, g, l.draggable]);
  return {
    active: c,
    activatorEvent: a,
    activeNodeRect: u,
    attributes: O,
    isDragging: y,
    listeners: i ? void 0 : w,
    node: _,
    over: h,
    setNodeRef: v,
    setActivatorNodeRef: b,
    transform: x
  };
}
function ps() {
  return We(hs);
}
const cu = "Droppable", uu = {
  timeout: 25
};
function du(r) {
  let {
    data: e,
    disabled: t = !1,
    id: i,
    resizeObserverConfig: n
  } = r;
  const o = wi(cu), {
    active: s,
    dispatch: a,
    over: c,
    measureDroppableContainers: u
  } = We(_i), l = I({
    disabled: t
  }), d = I(!1), h = I(null), f = I(null), {
    disabled: g,
    updateMeasurementsFor: m,
    timeout: y
  } = {
    ...uu,
    ...n
  }, x = di(m ?? i), _ = J(
    () => {
      if (!d.current) {
        d.current = !0;
        return;
      }
      f.current != null && clearTimeout(f.current), f.current = setTimeout(() => {
        u(Array.isArray(x.current) ? x.current : [x.current]), f.current = null;
      }, y);
    },
    //eslint-disable-next-line react-hooks/exhaustive-deps
    [y]
  ), v = wr({
    callback: _,
    disabled: g || !s
  }), E = J((O, N) => {
    v && (N && (v.unobserve(N), d.current = !1), O && v.observe(O));
  }, [v]), [b, w] = Ui(E), C = di(e);
  return $(() => {
    !v || !b.current || (v.disconnect(), d.current = !1, v.observe(b.current));
  }, [b, v]), $(
    () => (a({
      type: Q.RegisterDroppable,
      element: {
        id: i,
        key: o,
        disabled: t,
        node: b,
        rect: h,
        data: C
      }
    }), () => a({
      type: Q.UnregisterDroppable,
      key: o,
      id: i
    })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [i]
  ), $(() => {
    t !== l.current.disabled && (a({
      type: Q.SetDroppableDisabled,
      id: i,
      key: o,
      disabled: t
    }), l.current.disabled = t);
  }, [i, o, t, a]), {
    active: s,
    rect: h,
    isOver: c?.id === i,
    node: b,
    over: c,
    setNodeRef: w
  };
}
function hu(r) {
  let {
    animation: e,
    children: t
  } = r;
  const [i, n] = F(null), [o, s] = F(null), a = Ki(t);
  return !t && !i && a && n(a), Ne(() => {
    if (!o)
      return;
    const c = i?.key, u = i?.props.id;
    if (c == null || u == null) {
      n(null);
      return;
    }
    Promise.resolve(e(u, o)).then(() => {
      n(null);
    });
  }, [e, i, o]), k.createElement(k.Fragment, null, t, i ? ul(i, {
    ref: s
  }) : null);
}
const fu = {
  x: 0,
  y: 0,
  scaleX: 1,
  scaleY: 1
};
function pu(r) {
  let {
    children: e
  } = r;
  return k.createElement(_i.Provider, {
    value: ds
  }, k.createElement(_r.Provider, {
    value: fu
  }, e));
}
const mu = {
  position: "fixed",
  touchAction: "none"
}, gu = (r) => br(r) ? "transform 250ms ease" : void 0, vu = /* @__PURE__ */ _e((r, e) => {
  let {
    as: t,
    activatorEvent: i,
    adjustScale: n,
    children: o,
    className: s,
    rect: a,
    style: c,
    transform: u,
    transition: l = gu
  } = r;
  if (!a)
    return null;
  const d = n ? u : {
    ...u,
    scaleX: 1,
    scaleY: 1
  }, h = {
    ...mu,
    width: a.width,
    height: a.height,
    top: a.top,
    left: a.left,
    transform: ct.Transform.toString(d),
    transformOrigin: n && i ? lc(i, a) : void 0,
    transition: typeof l == "function" ? l(i) : l,
    ...c
  };
  return k.createElement(t, {
    className: s,
    style: h,
    ref: e
  }, o);
}), yu = (r) => (e) => {
  let {
    active: t,
    dragOverlay: i
  } = e;
  const n = {}, {
    styles: o,
    className: s
  } = r;
  if (o != null && o.active)
    for (const [a, c] of Object.entries(o.active))
      c !== void 0 && (n[a] = t.node.style.getPropertyValue(a), t.node.style.setProperty(a, c));
  if (o != null && o.dragOverlay)
    for (const [a, c] of Object.entries(o.dragOverlay))
      c !== void 0 && i.node.style.setProperty(a, c);
  return s != null && s.active && t.node.classList.add(s.active), s != null && s.dragOverlay && i.node.classList.add(s.dragOverlay), function() {
    for (const [c, u] of Object.entries(n))
      t.node.style.setProperty(c, u);
    s != null && s.active && t.node.classList.remove(s.active);
  };
}, bu = (r) => {
  let {
    transform: {
      initial: e,
      final: t
    }
  } = r;
  return [{
    transform: ct.Transform.toString(e)
  }, {
    transform: ct.Transform.toString(t)
  }];
}, xu = {
  duration: 250,
  easing: "ease",
  keyframes: bu,
  sideEffects: /* @__PURE__ */ yu({
    styles: {
      active: {
        opacity: "0"
      }
    }
  })
};
function wu(r) {
  let {
    config: e,
    draggableNodes: t,
    droppableContainers: i,
    measuringConfiguration: n
  } = r;
  return yr((o, s) => {
    if (e === null)
      return;
    const a = t.get(o);
    if (!a)
      return;
    const c = a.node.current;
    if (!c)
      return;
    const u = us(s);
    if (!u)
      return;
    const {
      transform: l
    } = de(s).getComputedStyle(s), d = es(l);
    if (!d)
      return;
    const h = typeof e == "function" ? e : _u(e);
    return as(c, n.draggable.measure), h({
      active: {
        id: o,
        data: a.data,
        node: c,
        rect: n.draggable.measure(c)
      },
      draggableNodes: t,
      dragOverlay: {
        node: s,
        rect: n.dragOverlay.measure(u)
      },
      droppableContainers: i,
      measuringConfiguration: n,
      transform: d
    });
  });
}
function _u(r) {
  const {
    duration: e,
    easing: t,
    sideEffects: i,
    keyframes: n
  } = {
    ...xu,
    ...r
  };
  return (o) => {
    let {
      active: s,
      dragOverlay: a,
      transform: c,
      ...u
    } = o;
    if (!e)
      return;
    const l = {
      x: a.rect.left - s.rect.left,
      y: a.rect.top - s.rect.top
    }, d = {
      scaleX: c.scaleX !== 1 ? s.rect.width * c.scaleX / a.rect.width : 1,
      scaleY: c.scaleY !== 1 ? s.rect.height * c.scaleY / a.rect.height : 1
    }, h = {
      x: c.x - l.x,
      y: c.y - l.y,
      ...d
    }, f = n({
      ...u,
      active: s,
      dragOverlay: a,
      transform: {
        initial: c,
        final: h
      }
    }), [g] = f, m = f[f.length - 1];
    if (JSON.stringify(g) === JSON.stringify(m))
      return;
    const y = i?.({
      active: s,
      dragOverlay: a,
      ...u
    }), x = a.node.animate(f, {
      duration: e,
      easing: t,
      fill: "forwards"
    });
    return new Promise((_) => {
      x.onfinish = () => {
        y?.(), _();
      };
    });
  };
}
let eo = 0;
function Eu(r) {
  return j(() => {
    if (r != null)
      return eo++, eo;
  }, [r]);
}
const Cu = /* @__PURE__ */ k.memo((r) => {
  let {
    adjustScale: e = !1,
    children: t,
    dropAnimation: i,
    style: n,
    transition: o,
    modifiers: s,
    wrapperElement: a = "div",
    className: c,
    zIndex: u = 999
  } = r;
  const {
    activatorEvent: l,
    active: d,
    activeNodeRect: h,
    containerNodeRect: f,
    draggableNodes: g,
    droppableContainers: m,
    dragOverlay: y,
    over: x,
    measuringConfiguration: _,
    scrollableAncestors: v,
    scrollableAncestorRects: E,
    windowRect: b
  } = ps(), w = We(_r), C = Eu(d?.id), O = fs(s, {
    activatorEvent: l,
    active: d,
    activeNodeRect: h,
    containerNodeRect: f,
    draggingNodeRect: y.rect,
    over: x,
    overlayNodeRect: y.rect,
    scrollableAncestors: v,
    scrollableAncestorRects: E,
    transform: w,
    windowRect: b
  }), N = En(h), D = wu({
    config: i,
    draggableNodes: g,
    droppableContainers: m,
    measuringConfiguration: _
  }), S = N ? y.setRef : void 0;
  return k.createElement(pu, null, k.createElement(hu, {
    animation: D
  }, d && C ? k.createElement(vu, {
    key: C,
    id: d.id,
    ref: S,
    as: a,
    activatorEvent: l,
    adjustScale: e,
    className: c,
    transition: o,
    rect: N,
    style: {
      zIndex: u,
      ...n
    },
    transform: O
  }, t) : null));
});
function Cn(r, e, t) {
  const i = r.slice();
  return i.splice(t < 0 ? i.length + t : t, 0, i.splice(e, 1)[0]), i;
}
function Au(r, e) {
  return r.reduce((t, i, n) => {
    const o = e.get(i);
    return o && (t[n] = o), t;
  }, Array(r.length));
}
function zi(r) {
  return r !== null && r >= 0;
}
function Ou(r, e) {
  if (r === e)
    return !0;
  if (r.length !== e.length)
    return !1;
  for (let t = 0; t < r.length; t++)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function Su(r) {
  return typeof r == "boolean" ? {
    draggable: r,
    droppable: r
  } : r;
}
const ms = (r) => {
  let {
    rects: e,
    activeIndex: t,
    overIndex: i,
    index: n
  } = r;
  const o = Cn(e, i, t), s = e[n], a = o[n];
  return !a || !s ? null : {
    x: a.left - s.left,
    y: a.top - s.top,
    scaleX: a.width / s.width,
    scaleY: a.height / s.height
  };
}, gs = "Sortable", vs = /* @__PURE__ */ k.createContext({
  activeIndex: -1,
  containerId: gs,
  disableTransforms: !1,
  items: [],
  overIndex: -1,
  useDragOverlay: !1,
  sortedRects: [],
  strategy: ms,
  disabled: {
    draggable: !1,
    droppable: !1
  }
});
function ku(r) {
  let {
    children: e,
    id: t,
    items: i,
    strategy: n = ms,
    disabled: o = !1
  } = r;
  const {
    active: s,
    dragOverlay: a,
    droppableRects: c,
    over: u,
    measureDroppableContainers: l
  } = ps(), d = wi(gs, t), h = a.rect !== null, f = j(() => i.map((w) => typeof w == "object" && "id" in w ? w.id : w), [i]), g = s != null, m = s ? f.indexOf(s.id) : -1, y = u ? f.indexOf(u.id) : -1, x = I(f), _ = !Ou(f, x.current), v = y !== -1 && m === -1 || _, E = Su(o);
  Ne(() => {
    _ && g && l(f);
  }, [_, f, g, l]), $(() => {
    x.current = f;
  }, [f]);
  const b = j(
    () => ({
      activeIndex: m,
      containerId: d,
      disabled: E,
      disableTransforms: v,
      items: f,
      overIndex: y,
      useDragOverlay: h,
      sortedRects: Au(f, c),
      strategy: n
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m, d, E.draggable, E.droppable, v, f, y, c, h, n]
  );
  return k.createElement(vs.Provider, {
    value: b
  }, e);
}
const Pu = (r) => {
  let {
    id: e,
    items: t,
    activeIndex: i,
    overIndex: n
  } = r;
  return Cn(t, i, n).indexOf(e);
}, Du = (r) => {
  let {
    containerId: e,
    isSorting: t,
    wasDragging: i,
    index: n,
    items: o,
    newIndex: s,
    previousItems: a,
    previousContainerId: c,
    transition: u
  } = r;
  return !u || !i || a !== o && n === s ? !1 : t ? !0 : s !== n && e === c;
}, Ru = {
  duration: 200,
  easing: "ease"
}, ys = "transform", Nu = /* @__PURE__ */ ct.Transition.toString({
  property: ys,
  duration: 0,
  easing: "linear"
}), Tu = {
  roleDescription: "sortable"
};
function zu(r) {
  let {
    disabled: e,
    index: t,
    node: i,
    rect: n
  } = r;
  const [o, s] = F(null), a = I(t);
  return Ne(() => {
    if (!e && t !== a.current && i.current) {
      const c = n.current;
      if (c) {
        const u = Kt(i.current, {
          ignoreTransform: !0
        }), l = {
          x: c.left - u.left,
          y: c.top - u.top,
          scaleX: c.width / u.width,
          scaleY: c.height / u.height
        };
        (l.x || l.y) && s(l);
      }
    }
    t !== a.current && (a.current = t);
  }, [e, t, i, n]), $(() => {
    o && s(null);
  }, [o]), o;
}
function Lu(r) {
  let {
    animateLayoutChanges: e = Du,
    attributes: t,
    disabled: i,
    data: n,
    getNewIndex: o = Pu,
    id: s,
    strategy: a,
    resizeObserverConfig: c,
    transition: u = Ru
  } = r;
  const {
    items: l,
    containerId: d,
    activeIndex: h,
    disabled: f,
    disableTransforms: g,
    sortedRects: m,
    overIndex: y,
    useDragOverlay: x,
    strategy: _
  } = We(vs), v = Mu(i, f), E = l.indexOf(s), b = j(() => ({
    sortable: {
      containerId: d,
      index: E,
      items: l
    },
    ...n
  }), [d, n, E, l]), w = j(() => l.slice(l.indexOf(s)), [l, s]), {
    rect: C,
    node: O,
    isOver: N,
    setNodeRef: D
  } = du({
    id: s,
    data: b,
    disabled: v.droppable,
    resizeObserverConfig: {
      updateMeasurementsFor: w,
      ...c
    }
  }), {
    active: S,
    activatorEvent: P,
    activeNodeRect: R,
    attributes: M,
    setNodeRef: U,
    listeners: H,
    isDragging: V,
    over: le,
    setActivatorNodeRef: G,
    transform: Pe
  } = lu({
    id: s,
    data: b,
    attributes: {
      ...Tu,
      ...t
    },
    disabled: v.draggable
  }), Oi = Kl(D, U), he = !!S, Ge = he && !g && zi(h) && zi(y), dt = !x && V, qt = dt && Ge ? Pe : null, Si = Ge ? qt ?? (a ?? _)({
    rects: m,
    activeNodeRect: R,
    activeIndex: h,
    overIndex: y,
    index: E
  }) : null, Ze = zi(h) && zi(y) ? o({
    id: s,
    items: l,
    activeIndex: h,
    overIndex: y
  }) : E, Ue = S?.id, W = I({
    activeId: Ue,
    items: l,
    newIndex: Ze,
    containerId: d
  }), Jt = l !== W.current.items, Me = e({
    active: S,
    containerId: d,
    isDragging: V,
    isSorting: he,
    id: s,
    index: E,
    items: l,
    newIndex: W.current.newIndex,
    previousItems: W.current.items,
    previousContainerId: W.current.containerId,
    transition: u,
    wasDragging: W.current.activeId != null
  }), vt = zu({
    disabled: !Me,
    index: E,
    node: O,
    rect: C
  });
  return $(() => {
    he && W.current.newIndex !== Ze && (W.current.newIndex = Ze), d !== W.current.containerId && (W.current.containerId = d), l !== W.current.items && (W.current.items = l);
  }, [he, Ze, d, l]), $(() => {
    if (Ue === W.current.activeId)
      return;
    if (Ue != null && W.current.activeId == null) {
      W.current.activeId = Ue;
      return;
    }
    const yt = setTimeout(() => {
      W.current.activeId = Ue;
    }, 50);
    return () => clearTimeout(yt);
  }, [Ue]), {
    active: S,
    activeIndex: h,
    attributes: M,
    data: b,
    rect: C,
    index: E,
    newIndex: Ze,
    items: l,
    isOver: N,
    isSorting: he,
    isDragging: V,
    listeners: H,
    node: O,
    overIndex: y,
    over: le,
    setNodeRef: Oi,
    setActivatorNodeRef: G,
    setDroppableNodeRef: D,
    setDraggableNodeRef: U,
    transform: vt ?? Si,
    transition: Ke()
  };
  function Ke() {
    if (
      // Temporarily disable transitions for a single frame to set up derived transforms
      vt || // Or to prevent items jumping to back to their "new" position when items change
      Jt && W.current.newIndex === E
    )
      return Nu;
    if (!(dt && !br(P) || !u) && (he || Me))
      return ct.Transition.toString({
        ...u,
        property: ys
      });
  }
}
function Mu(r, e) {
  var t, i;
  return typeof r == "boolean" ? {
    draggable: r,
    // Backwards compatibility
    droppable: !1
  } : {
    draggable: (t = r?.draggable) != null ? t : e.draggable,
    droppable: (i = r?.droppable) != null ? i : e.droppable
  };
}
function qi(r) {
  if (!r)
    return !1;
  const e = r.data.current;
  return !!(e && "sortable" in e && typeof e.sortable == "object" && "containerId" in e.sortable && "items" in e.sortable && "index" in e.sortable);
}
const Iu = [B.Down, B.Right, B.Up, B.Left], $u = (r, e) => {
  let {
    context: {
      active: t,
      collisionRect: i,
      droppableRects: n,
      droppableContainers: o,
      over: s,
      scrollableAncestors: a
    }
  } = e;
  if (Iu.includes(r.code)) {
    if (r.preventDefault(), !t || !i)
      return;
    const c = [];
    o.getEnabled().forEach((d) => {
      if (!d || d != null && d.disabled)
        return;
      const h = n.get(d.id);
      if (h)
        switch (r.code) {
          case B.Down:
            i.top < h.top && c.push(d);
            break;
          case B.Up:
            i.top > h.top && c.push(d);
            break;
          case B.Left:
            i.left > h.left && c.push(d);
            break;
          case B.Right:
            i.left < h.left && c.push(d);
            break;
        }
    });
    const u = dc({
      collisionRect: i,
      droppableRects: n,
      droppableContainers: c
    });
    let l = Zo(u, "id");
    if (l === s?.id && u.length > 1 && (l = u[1].id), l != null) {
      const d = o.get(t.id), h = o.get(l), f = h ? n.get(h.id) : null, g = h?.node.current;
      if (g && f && d && h) {
        const y = xr(g).some((w, C) => a[C] !== w), x = bs(d, h), _ = ju(d, h), v = y || !x ? {
          x: 0,
          y: 0
        } : {
          x: _ ? i.width - f.width : 0,
          y: _ ? i.height - f.height : 0
        }, E = {
          x: f.left,
          y: f.top
        };
        return v.x && v.y ? E : hi(E, v);
      }
    }
  }
};
function bs(r, e) {
  return !qi(r) || !qi(e) ? !1 : r.data.current.sortable.containerId === e.data.current.sortable.containerId;
}
function ju(r, e) {
  return !qi(r) || !qi(e) || !bs(r, e) ? !1 : r.data.current.sortable.index < e.data.current.sortable.index;
}
const to = ({ id: r, children: e }) => {
  const { attributes: t, listeners: i, setNodeRef: n, transform: o, transition: s } = Lu({
    id: r
  }), a = {
    transform: ct.Translate.toString(o),
    transition: s,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return p("div", {
    ref: n,
    style: a,
    ...t,
    ...i,
    children: e
  });
}, An = ({ blocks: r, sortable: e = !1, onSort: t = () => {
}, main: i = !1 }) => {
  const [n, o] = F([]);
  bo(() => {
    o(r.map((d, h) => ({
      id: d.id ?? h.toString(),
      render: d.render
    })));
  }, [r]);
  const [s, a] = F(null), c = sc(Hn(_n), Hn(xn, {
    coordinateGetter: $u
  })), u = (d) => {
    a(d.active.id);
  }, l = (d) => {
    const { active: h, over: f } = d;
    a(null), f && h.id !== f.id && o((g) => {
      const m = g.findIndex((x) => x.id === h.id), y = g.findIndex((x) => x.id === f.id);
      return Cn(g, m, y);
    });
  };
  return p("div", {
    className: X("flex flex-wrap items-stretch gap-4", i && "flex-1"),
    children: T(ou, {
      sensors: c,
      onDragStart: u,
      onDragEnd: l,
      children: [p(ku, {
        items: n,
        children: n.map((d) => p(to, {
          id: d.id,
          children: d.render
        }, d.id))
      }), p(Cu, {
        children: s ? p(to, {
          id: s,
          children: n.find((d) => d.id === s)?.render
        }) : null
      })]
    })
  });
};
An.displayName = "GroupMasonry";
An.__isPageLayoutGroup = !0;
const Bu = _e(function({ children: e, aside: t, header: i, variant: n = "main-aside" }, o) {
  return process.env.NODE_ENV === "development" && Xo("Page", e, ["block", "group"]), p("div", {
    ref: o,
    className: "h-full",
    children: T("div", {
      className: X("flex h-full max-w-full overflow-auto text-f1-foreground md:flex-row", "flex-col", "overflow-y-auto", "md:sticky md:top-0 md:max-h-full"),
      children: [T("main", {
        className: X("sm:min-h-xs h-fit border-0", "order-1 flex flex-col sm:flex-1 sm:border-solid md:order-2", "md:auto md:h-full md:max-h-full md:overflow-y-auto md:overflow-x-hidden", n === "aside-main" ? "sm:border-l sm:border-l-f1-border-secondary" : "sm:border-r sm:border-r-f1-border-secondary", "border-t border-solid border-t-f1-border-secondary sm:border-t-0"),
        children: [i && p("header", {
          className: X("sticky top-0 z-30 bg-f1-background"),
          children: i
        }), p("div", {
          className: "flex-1",
          children: e
        })]
      }), t && p("aside", {
        className: X("min-w-30 sm:basis-1/4 md:max-w-80", "order-2", n === "aside-main" ? "md:order-1" : "md:order-3"),
        children: t
      })]
    })
  });
}), Cf = {
  Page: Be("Page", Bu),
  Block: Be("Block", gr),
  BlockContent: Be("BlockContent", Wl),
  Group: Be("Group", gn),
  GroupGrid: Be("GroupGrid", mr),
  GroupMasonry: Be("GroupMasonry", An)
}, Af = ze({
  name: "StandardLayout",
  type: "layout"
}, $o), Of = ze({
  name: "TwoColumnLayout",
  type: "layout"
}, pl), Sf = ze({
  name: "HomeLayout",
  type: "layout"
}, fl);
var Mi;
function Tt(r) {
  "@babel/helpers - typeof";
  return Tt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Tt(r);
}
function Ot() {
  return Ot = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, Ot.apply(this, arguments);
}
function io(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function K(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? io(Object(t), !0).forEach(function(i) {
      Se(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : io(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Fu(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ro(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, ws(i.key), i);
  }
}
function Hu(r, e, t) {
  return e && ro(r.prototype, e), t && ro(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Wu(r, e, t) {
  return e = Ji(e), Gu(r, xs() ? Reflect.construct(e, t || [], Ji(r).constructor) : e.apply(r, t));
}
function Gu(r, e) {
  if (e && (Tt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Uu(r);
}
function Uu(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function xs() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (xs = function() {
    return !!r;
  })();
}
function Ji(r) {
  return Ji = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Ji(r);
}
function Ku(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Gr(r, e);
}
function Gr(r, e) {
  return Gr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, Gr(r, e);
}
function Se(r, e, t) {
  return e = ws(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function ws(r) {
  var e = Vu(r, "string");
  return Tt(e) == "symbol" ? e : e + "";
}
function Vu(r, e) {
  if (Tt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Tt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var qe = /* @__PURE__ */ (function(r) {
  function e(t) {
    var i;
    return Fu(this, e), i = Wu(this, e, [t]), Se(i, "pieRef", null), Se(i, "sectorRefs", []), Se(i, "id", ar("recharts-pie-")), Se(i, "handleAnimationEnd", function() {
      var n = i.props.onAnimationEnd;
      i.setState({
        isAnimationFinished: !0
      }), re(n) && n();
    }), Se(i, "handleAnimationStart", function() {
      var n = i.props.onAnimationStart;
      i.setState({
        isAnimationFinished: !1
      }), re(n) && n();
    }), i.state = {
      isAnimationFinished: !t.isAnimationActive,
      prevIsAnimationActive: t.isAnimationActive,
      prevAnimationId: t.animationId,
      sectorToFocus: 0
    }, i;
  }
  return Ku(e, r), Hu(e, [{
    key: "isActiveIndex",
    value: function(i) {
      var n = this.props.activeIndex;
      return Array.isArray(n) ? n.indexOf(i) !== -1 : i === n;
    }
  }, {
    key: "hasActiveIndex",
    value: function() {
      var i = this.props.activeIndex;
      return Array.isArray(i) ? i.length !== 0 : i || i === 0;
    }
  }, {
    key: "renderLabels",
    value: function(i) {
      var n = this.props.isAnimationActive;
      if (n && !this.state.isAnimationFinished)
        return null;
      var o = this.props, s = o.label, a = o.labelLine, c = o.dataKey, u = o.valueKey, l = q(this.props, !1), d = q(s, !1), h = q(a, !1), f = s && s.offsetRadius || 20, g = i.map(function(m, y) {
        var x = (m.startAngle + m.endAngle) / 2, _ = Ir(m.cx, m.cy, m.outerRadius + f, x), v = K(K(K(K({}, l), m), {}, {
          stroke: "none"
        }, d), {}, {
          index: y,
          textAnchor: e.getTextAnchor(_.x, m.cx)
        }, _), E = K(K(K(K({}, l), m), {}, {
          fill: "none",
          stroke: m.fill
        }, h), {}, {
          index: y,
          points: [Ir(m.cx, m.cy, m.outerRadius, x), _]
        }), b = c;
        return ne(c) && ne(u) ? b = "value" : ne(c) && (b = u), // eslint-disable-next-line react/no-array-index-key
        /* @__PURE__ */ k.createElement(Z, {
          key: "label-".concat(m.startAngle, "-").concat(m.endAngle, "-").concat(m.midAngle, "-").concat(y)
        }, a && e.renderLabelLineItem(a, E, "line"), e.renderLabelItem(s, v, fe(m, b)));
      });
      return /* @__PURE__ */ k.createElement(Z, {
        className: "recharts-pie-labels"
      }, g);
    }
  }, {
    key: "renderSectorsStatically",
    value: function(i) {
      var n = this, o = this.props, s = o.activeShape, a = o.blendStroke, c = o.inactiveShape;
      return i.map(function(u, l) {
        if (u?.startAngle === 0 && u?.endAngle === 0 && i.length !== 1) return null;
        var d = n.isActiveIndex(l), h = c && n.hasActiveIndex() ? c : null, f = d ? s : h, g = K(K({}, u), {}, {
          stroke: a ? u.fill : u.stroke,
          tabIndex: -1
        });
        return /* @__PURE__ */ k.createElement(Z, Ot({
          ref: function(y) {
            y && !n.sectorRefs.includes(y) && n.sectorRefs.push(y);
          },
          tabIndex: -1,
          className: "recharts-pie-sector"
        }, an(n.props, u, l), {
          // eslint-disable-next-line react/no-array-index-key
          key: "sector-".concat(u?.startAngle, "-").concat(u?.endAngle, "-").concat(u.midAngle, "-").concat(l)
        }), /* @__PURE__ */ k.createElement($r, Ot({
          option: f,
          isActive: d,
          shapeType: "sector"
        }, g)));
      });
    }
  }, {
    key: "renderSectorsWithAnimation",
    value: function() {
      var i = this, n = this.props, o = n.sectors, s = n.isAnimationActive, a = n.animationBegin, c = n.animationDuration, u = n.animationEasing, l = n.animationId, d = this.state, h = d.prevSectors, f = d.prevIsAnimationActive;
      return /* @__PURE__ */ k.createElement(sr, {
        begin: a,
        duration: c,
        isActive: s,
        easing: u,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l, "-").concat(f),
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd
      }, function(g) {
        var m = g.t, y = [], x = o && o[0], _ = x.startAngle;
        return o.forEach(function(v, E) {
          var b = h && h[E], w = E > 0 ? jr(v, "paddingAngle", 0) : 0;
          if (b) {
            var C = ie(b.endAngle - b.startAngle, v.endAngle - v.startAngle), O = K(K({}, v), {}, {
              startAngle: _ + w,
              endAngle: _ + C(m) + w
            });
            y.push(O), _ = O.endAngle;
          } else {
            var N = v.endAngle, D = v.startAngle, S = ie(0, N - D), P = S(m), R = K(K({}, v), {}, {
              startAngle: _ + w,
              endAngle: _ + P + w
            });
            y.push(R), _ = R.endAngle;
          }
        }), /* @__PURE__ */ k.createElement(Z, null, i.renderSectorsStatically(y));
      });
    }
  }, {
    key: "attachKeyboardHandlers",
    value: function(i) {
      var n = this;
      i.onkeydown = function(o) {
        if (!o.altKey)
          switch (o.key) {
            case "ArrowLeft": {
              var s = ++n.state.sectorToFocus % n.sectorRefs.length;
              n.sectorRefs[s].focus(), n.setState({
                sectorToFocus: s
              });
              break;
            }
            case "ArrowRight": {
              var a = --n.state.sectorToFocus < 0 ? n.sectorRefs.length - 1 : n.state.sectorToFocus % n.sectorRefs.length;
              n.sectorRefs[a].focus(), n.setState({
                sectorToFocus: a
              });
              break;
            }
            case "Escape": {
              n.sectorRefs[n.state.sectorToFocus].blur(), n.setState({
                sectorToFocus: 0
              });
              break;
            }
          }
      };
    }
  }, {
    key: "renderSectors",
    value: function() {
      var i = this.props, n = i.sectors, o = i.isAnimationActive, s = this.state.prevSectors;
      return o && n && n.length && (!s || !Dt(s, n)) ? this.renderSectorsWithAnimation() : this.renderSectorsStatically(n);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      this.pieRef && this.attachKeyboardHandlers(this.pieRef);
    }
  }, {
    key: "render",
    value: function() {
      var i = this, n = this.props, o = n.hide, s = n.sectors, a = n.className, c = n.label, u = n.cx, l = n.cy, d = n.innerRadius, h = n.outerRadius, f = n.isAnimationActive, g = this.state.isAnimationFinished;
      if (o || !s || !s.length || !Y(u) || !Y(l) || !Y(d) || !Y(h))
        return null;
      var m = we("recharts-pie", a);
      return /* @__PURE__ */ k.createElement(Z, {
        tabIndex: this.props.rootTabIndex,
        className: m,
        ref: function(x) {
          i.pieRef = x;
        }
      }, this.renderSectors(), c && this.renderLabels(s), ln.renderCallByParent(this.props, null, !1), (!f || g) && mt.renderCallByParent(this.props, s, !1));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, n) {
      return n.prevIsAnimationActive !== i.isAnimationActive ? {
        prevIsAnimationActive: i.isAnimationActive,
        prevAnimationId: i.animationId,
        curSectors: i.sectors,
        prevSectors: [],
        isAnimationFinished: !0
      } : i.isAnimationActive && i.animationId !== n.prevAnimationId ? {
        prevAnimationId: i.animationId,
        curSectors: i.sectors,
        prevSectors: n.curSectors,
        isAnimationFinished: !0
      } : i.sectors !== n.curSectors ? {
        curSectors: i.sectors,
        isAnimationFinished: !0
      } : null;
    }
  }, {
    key: "getTextAnchor",
    value: function(i, n) {
      return i > n ? "start" : i < n ? "end" : "middle";
    }
  }, {
    key: "renderLabelLineItem",
    value: function(i, n, o) {
      if (/* @__PURE__ */ k.isValidElement(i))
        return /* @__PURE__ */ k.cloneElement(i, n);
      if (re(i))
        return i(n);
      var s = we("recharts-pie-label-line", typeof i != "boolean" ? i.className : "");
      return /* @__PURE__ */ k.createElement(kt, Ot({}, n, {
        key: o,
        type: "linear",
        className: s
      }));
    }
  }, {
    key: "renderLabelItem",
    value: function(i, n, o) {
      if (/* @__PURE__ */ k.isValidElement(i))
        return /* @__PURE__ */ k.cloneElement(i, n);
      var s = o;
      if (re(i) && (s = i(n), /* @__PURE__ */ k.isValidElement(s)))
        return s;
      var a = we("recharts-pie-label-text", typeof i != "boolean" && !re(i) ? i.className : "");
      return /* @__PURE__ */ k.createElement(sn, Ot({}, n, {
        alignmentBaseline: "middle",
        className: a
      }), s);
    }
  }]);
})(fr);
Mi = qe;
Se(qe, "displayName", "Pie");
Se(qe, "defaultProps", {
  stroke: "#fff",
  fill: "#808080",
  legendType: "rect",
  cx: "50%",
  cy: "50%",
  startAngle: 0,
  endAngle: 360,
  innerRadius: 0,
  outerRadius: "80%",
  paddingAngle: 0,
  labelLine: !0,
  hide: !1,
  minAngle: 0,
  isAnimationActive: !gi.isSsr,
  animationBegin: 400,
  animationDuration: 1500,
  animationEasing: "ease",
  nameKey: "name",
  blendStroke: !1,
  rootTabIndex: 0
});
Se(qe, "parseDeltaAngle", function(r, e) {
  var t = ii(e - r), i = Math.min(Math.abs(e - r), 360);
  return t * i;
});
Se(qe, "getRealPieData", function(r) {
  var e = r.data, t = r.children, i = q(r, !1), n = lr(t, cn);
  return e && e.length ? e.map(function(o, s) {
    return K(K(K({
      payload: o
    }, i), o), n && n[s] && n[s].props);
  }) : n && n.length ? n.map(function(o) {
    return K(K({}, i), o.props);
  }) : [];
});
Se(qe, "parseCoordinateOfPie", function(r, e) {
  var t = e.top, i = e.left, n = e.width, o = e.height, s = ua(n, o), a = i + Di(r.cx, n, n / 2), c = t + Di(r.cy, o, o / 2), u = Di(r.innerRadius, s, 0), l = Di(r.outerRadius, s, s * 0.8), d = r.maxRadius || Math.sqrt(n * n + o * o) / 2;
  return {
    cx: a,
    cy: c,
    innerRadius: u,
    outerRadius: l,
    maxRadius: d
  };
});
Se(qe, "getComposedData", function(r) {
  var e = r.item, t = r.offset, i = e.type.defaultProps !== void 0 ? K(K({}, e.type.defaultProps), e.props) : e.props, n = Mi.getRealPieData(i);
  if (!n || !n.length)
    return null;
  var o = i.cornerRadius, s = i.startAngle, a = i.endAngle, c = i.paddingAngle, u = i.dataKey, l = i.nameKey, d = i.valueKey, h = i.tooltipType, f = Math.abs(i.minAngle), g = Mi.parseCoordinateOfPie(i, t), m = Mi.parseDeltaAngle(s, a), y = Math.abs(m), x = u;
  ne(u) && ne(d) ? (Ii(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), x = "value") : ne(u) && (Ii(!1, `Use "dataKey" to specify the value of pie,
      the props "valueKey" will be deprecated in 1.1.0`), x = d);
  var _ = n.filter(function(O) {
    return fe(O, x, 0) !== 0;
  }).length, v = (y >= 360 ? _ : _ - 1) * c, E = y - _ * f - v, b = n.reduce(function(O, N) {
    var D = fe(N, x, 0);
    return O + (Y(D) ? D : 0);
  }, 0), w;
  if (b > 0) {
    var C;
    w = n.map(function(O, N) {
      var D = fe(O, x, 0), S = fe(O, l, N), P = (Y(D) ? D : 0) / b, R;
      N ? R = C.endAngle + ii(m) * c * (D !== 0 ? 1 : 0) : R = s;
      var M = R + ii(m) * ((D !== 0 ? f : 0) + P * E), U = (R + M) / 2, H = (g.innerRadius + g.outerRadius) / 2, V = [{
        name: S,
        value: D,
        payload: O,
        dataKey: x,
        type: h
      }], le = Ir(g.cx, g.cy, H, U);
      return C = K(K(K({
        percent: P,
        cornerRadius: o,
        name: S,
        tooltipPayload: V,
        midAngle: U,
        middleRadius: H,
        tooltipPosition: le
      }, O), g), {}, {
        value: fe(O, x),
        startAngle: R,
        endAngle: M,
        payload: O,
        paddingAngle: ii(m) * c
      }), C;
    });
  }
  return K(K({}, g), {}, {
    sectors: w,
    data: n
  });
});
function _s(r, e, t) {
  if (e < 1)
    return [];
  if (e === 1 && t === void 0)
    return r;
  for (var i = [], n = 0; n < r.length; n += e)
    i.push(r[n]);
  return i;
}
function Xu(r, e, t) {
  var i = {
    width: r.width + e.width,
    height: r.height + e.height
  };
  return da(i, t);
}
function Yu(r, e, t) {
  var i = t === "width", n = r.x, o = r.y, s = r.width, a = r.height;
  return e === 1 ? {
    start: i ? n : o,
    end: i ? n + s : o + a
  } : {
    start: i ? n + s : o + a,
    end: i ? n : o
  };
}
function Zi(r, e, t, i, n) {
  if (r * e < r * i || r * e > r * n)
    return !1;
  var o = t();
  return r * (e - r * o / 2 - i) >= 0 && r * (e + r * o / 2 - n) <= 0;
}
function qu(r, e) {
  return _s(r, e + 1);
}
function Ju(r, e, t, i, n) {
  for (var o = (i || []).slice(), s = e.start, a = e.end, c = 0, u = 1, l = s, d = function() {
    var g = i?.[c];
    if (g === void 0)
      return {
        v: _s(i, u)
      };
    var m = c, y, x = function() {
      return y === void 0 && (y = t(g, m)), y;
    }, _ = g.coordinate, v = c === 0 || Zi(r, _, x, l, a);
    v || (c = 0, l = s, u += 1), v && (l = _ + r * (x() / 2 + n), c += u);
  }, h; u <= o.length; )
    if (h = d(), h) return h.v;
  return [];
}
function pi(r) {
  "@babel/helpers - typeof";
  return pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pi(r);
}
function no(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function se(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? no(Object(t), !0).forEach(function(i) {
      Zu(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : no(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Zu(r, e, t) {
  return e = Qu(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Qu(r) {
  var e = ed(r, "string");
  return pi(e) == "symbol" ? e : e + "";
}
function ed(r, e) {
  if (pi(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (pi(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function td(r, e, t, i, n) {
  for (var o = (i || []).slice(), s = o.length, a = e.start, c = e.end, u = function(h) {
    var f = o[h], g, m = function() {
      return g === void 0 && (g = t(f, h)), g;
    };
    if (h === s - 1) {
      var y = r * (f.coordinate + r * m() / 2 - c);
      o[h] = f = se(se({}, f), {}, {
        tickCoord: y > 0 ? f.coordinate - y * r : f.coordinate
      });
    } else
      o[h] = f = se(se({}, f), {}, {
        tickCoord: f.coordinate
      });
    var x = Zi(r, f.tickCoord, m, a, c);
    x && (c = f.tickCoord - r * (m() / 2 + n), o[h] = se(se({}, f), {}, {
      isShow: !0
    }));
  }, l = s - 1; l >= 0; l--)
    u(l);
  return o;
}
function id(r, e, t, i, n, o) {
  var s = (i || []).slice(), a = s.length, c = e.start, u = e.end;
  if (o) {
    var l = i[a - 1], d = t(l, a - 1), h = r * (l.coordinate + r * d / 2 - u);
    s[a - 1] = l = se(se({}, l), {}, {
      tickCoord: h > 0 ? l.coordinate - h * r : l.coordinate
    });
    var f = Zi(r, l.tickCoord, function() {
      return d;
    }, c, u);
    f && (u = l.tickCoord - r * (d / 2 + n), s[a - 1] = se(se({}, l), {}, {
      isShow: !0
    }));
  }
  for (var g = o ? a - 1 : a, m = function(_) {
    var v = s[_], E, b = function() {
      return E === void 0 && (E = t(v, _)), E;
    };
    if (_ === 0) {
      var w = r * (v.coordinate - r * b() / 2 - c);
      s[_] = v = se(se({}, v), {}, {
        tickCoord: w < 0 ? v.coordinate - w * r : v.coordinate
      });
    } else
      s[_] = v = se(se({}, v), {}, {
        tickCoord: v.coordinate
      });
    var C = Zi(r, v.tickCoord, b, c, u);
    C && (c = v.tickCoord + r * (b() / 2 + n), s[_] = se(se({}, v), {}, {
      isShow: !0
    }));
  }, y = 0; y < g; y++)
    m(y);
  return s;
}
function On(r, e, t) {
  var i = r.tick, n = r.ticks, o = r.viewBox, s = r.minTickGap, a = r.orientation, c = r.interval, u = r.tickFormatter, l = r.unit, d = r.angle;
  if (!n || !n.length || !i)
    return [];
  if (Y(c) || gi.isSsr)
    return qu(n, typeof c == "number" && Y(c) ? c : 0);
  var h = [], f = a === "top" || a === "bottom" ? "width" : "height", g = l && f === "width" ? Pr(l, {
    fontSize: e,
    letterSpacing: t
  }) : {
    width: 0,
    height: 0
  }, m = function(v, E) {
    var b = re(u) ? u(v.value, E) : v.value;
    return f === "width" ? Xu(Pr(b, {
      fontSize: e,
      letterSpacing: t
    }), g, d) : Pr(b, {
      fontSize: e,
      letterSpacing: t
    })[f];
  }, y = n.length >= 2 ? ii(n[1].coordinate - n[0].coordinate) : 1, x = Yu(o, y, f);
  return c === "equidistantPreserveStart" ? Ju(y, x, m, n, s) : (c === "preserveStart" || c === "preserveStartEnd" ? h = id(y, x, m, n, s, c === "preserveStartEnd") : h = td(y, x, m, n, s), h.filter(function(_) {
    return _.isShow;
  }));
}
var rd = ["viewBox"], nd = ["viewBox"], od = ["ticks"];
function zt(r) {
  "@babel/helpers - typeof";
  return zt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, zt(r);
}
function St() {
  return St = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, St.apply(this, arguments);
}
function oo(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function ue(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? oo(Object(t), !0).forEach(function(i) {
      Sn(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : oo(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Mr(r, e) {
  if (r == null) return {};
  var t = sd(r, e), i, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (n = 0; n < o.length; n++)
      i = o[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(r, i) && (t[i] = r[i]);
  }
  return t;
}
function sd(r, e) {
  if (r == null) return {};
  var t = {};
  for (var i in r)
    if (Object.prototype.hasOwnProperty.call(r, i)) {
      if (e.indexOf(i) >= 0) continue;
      t[i] = r[i];
    }
  return t;
}
function ad(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function so(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Cs(i.key), i);
  }
}
function ld(r, e, t) {
  return e && so(r.prototype, e), t && so(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function cd(r, e, t) {
  return e = Qi(e), ud(r, Es() ? Reflect.construct(e, t || [], Qi(r).constructor) : e.apply(r, t));
}
function ud(r, e) {
  if (e && (zt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return dd(r);
}
function dd(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Es() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Es = function() {
    return !!r;
  })();
}
function Qi(r) {
  return Qi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Qi(r);
}
function hd(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Ur(r, e);
}
function Ur(r, e) {
  return Ur = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, Ur(r, e);
}
function Sn(r, e, t) {
  return e = Cs(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Cs(r) {
  var e = fd(r, "string");
  return zt(e) == "symbol" ? e : e + "";
}
function fd(r, e) {
  if (zt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (zt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Vt = /* @__PURE__ */ (function(r) {
  function e(t) {
    var i;
    return ad(this, e), i = cd(this, e, [t]), i.state = {
      fontSize: "",
      letterSpacing: ""
    }, i;
  }
  return hd(e, r), ld(e, [{
    key: "shouldComponentUpdate",
    value: function(i, n) {
      var o = i.viewBox, s = Mr(i, rd), a = this.props, c = a.viewBox, u = Mr(a, nd);
      return !Dr(o, c) || !Dr(s, u) || !Dr(n, this.state);
    }
  }, {
    key: "componentDidMount",
    value: function() {
      var i = this.layerReference;
      if (i) {
        var n = i.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
        n && this.setState({
          fontSize: window.getComputedStyle(n).fontSize,
          letterSpacing: window.getComputedStyle(n).letterSpacing
        });
      }
    }
    /**
     * Calculate the coordinates of endpoints in ticks
     * @param  {Object} data The data of a simple tick
     * @return {Object} (x1, y1): The coordinate of endpoint close to tick text
     *  (x2, y2): The coordinate of endpoint close to axis
     */
  }, {
    key: "getTickLineCoord",
    value: function(i) {
      var n = this.props, o = n.x, s = n.y, a = n.width, c = n.height, u = n.orientation, l = n.tickSize, d = n.mirror, h = n.tickMargin, f, g, m, y, x, _, v = d ? -1 : 1, E = i.tickSize || l, b = Y(i.tickCoord) ? i.tickCoord : i.coordinate;
      switch (u) {
        case "top":
          f = g = i.coordinate, y = s + +!d * c, m = y - v * E, _ = m - v * h, x = b;
          break;
        case "left":
          m = y = i.coordinate, g = o + +!d * a, f = g - v * E, x = f - v * h, _ = b;
          break;
        case "right":
          m = y = i.coordinate, g = o + +d * a, f = g + v * E, x = f + v * h, _ = b;
          break;
        default:
          f = g = i.coordinate, y = s + +d * c, m = y + v * E, _ = m + v * h, x = b;
          break;
      }
      return {
        line: {
          x1: f,
          y1: m,
          x2: g,
          y2: y
        },
        tick: {
          x,
          y: _
        }
      };
    }
  }, {
    key: "getTickTextAnchor",
    value: function() {
      var i = this.props, n = i.orientation, o = i.mirror, s;
      switch (n) {
        case "left":
          s = o ? "start" : "end";
          break;
        case "right":
          s = o ? "end" : "start";
          break;
        default:
          s = "middle";
          break;
      }
      return s;
    }
  }, {
    key: "getTickVerticalAnchor",
    value: function() {
      var i = this.props, n = i.orientation, o = i.mirror, s = "end";
      switch (n) {
        case "left":
        case "right":
          s = "middle";
          break;
        case "top":
          s = o ? "start" : "end";
          break;
        default:
          s = o ? "end" : "start";
          break;
      }
      return s;
    }
  }, {
    key: "renderAxisLine",
    value: function() {
      var i = this.props, n = i.x, o = i.y, s = i.width, a = i.height, c = i.orientation, u = i.mirror, l = i.axisLine, d = ue(ue(ue({}, q(this.props, !1)), q(l, !1)), {}, {
        fill: "none"
      });
      if (c === "top" || c === "bottom") {
        var h = +(c === "top" && !u || c === "bottom" && u);
        d = ue(ue({}, d), {}, {
          x1: n,
          y1: o + h * a,
          x2: n + s,
          y2: o + h * a
        });
      } else {
        var f = +(c === "left" && !u || c === "right" && u);
        d = ue(ue({}, d), {}, {
          x1: n + f * s,
          y1: o,
          x2: n + f * s,
          y2: o + a
        });
      }
      return /* @__PURE__ */ k.createElement("line", St({}, d, {
        className: we("recharts-cartesian-axis-line", jr(l, "className"))
      }));
    }
  }, {
    key: "renderTicks",
    value: (
      /**
       * render the ticks
       * @param {Array} ticks The ticks to actually render (overrides what was passed in props)
       * @param {string} fontSize Fontsize to consider for tick spacing
       * @param {string} letterSpacing Letterspacing to consider for tick spacing
       * @return {ReactComponent} renderedTicks
       */
      function(i, n, o) {
        var s = this, a = this.props, c = a.tickLine, u = a.stroke, l = a.tick, d = a.tickFormatter, h = a.unit, f = On(ue(ue({}, this.props), {}, {
          ticks: i
        }), n, o), g = this.getTickTextAnchor(), m = this.getTickVerticalAnchor(), y = q(this.props, !1), x = q(l, !1), _ = ue(ue({}, y), {}, {
          fill: "none"
        }, q(c, !1)), v = f.map(function(E, b) {
          var w = s.getTickLineCoord(E), C = w.line, O = w.tick, N = ue(ue(ue(ue({
            textAnchor: g,
            verticalAnchor: m
          }, y), {}, {
            stroke: "none",
            fill: u
          }, x), O), {}, {
            index: b,
            payload: E,
            visibleTicksCount: f.length,
            tickFormatter: d
          });
          return /* @__PURE__ */ k.createElement(Z, St({
            className: "recharts-cartesian-axis-tick",
            key: "tick-".concat(E.value, "-").concat(E.coordinate, "-").concat(E.tickCoord)
          }, an(s.props, E, b)), c && /* @__PURE__ */ k.createElement("line", St({}, _, C, {
            className: we("recharts-cartesian-axis-tick-line", jr(c, "className"))
          })), l && e.renderTickItem(l, N, "".concat(re(d) ? d(E.value, b) : E.value).concat(h || "")));
        });
        return /* @__PURE__ */ k.createElement("g", {
          className: "recharts-cartesian-axis-ticks"
        }, v);
      }
    )
  }, {
    key: "render",
    value: function() {
      var i = this, n = this.props, o = n.axisLine, s = n.width, a = n.height, c = n.ticksGenerator, u = n.className, l = n.hide;
      if (l)
        return null;
      var d = this.props, h = d.ticks, f = Mr(d, od), g = h;
      return re(c) && (g = h && h.length > 0 ? c(this.props) : c(f)), s <= 0 || a <= 0 || !g || !g.length ? null : /* @__PURE__ */ k.createElement(Z, {
        className: we("recharts-cartesian-axis", u),
        ref: function(y) {
          i.layerReference = y;
        }
      }, o && this.renderAxisLine(), this.renderTicks(g, this.state.fontSize, this.state.letterSpacing), ln.renderCallByParent(this.props));
    }
  }], [{
    key: "renderTickItem",
    value: function(i, n, o) {
      var s;
      return /* @__PURE__ */ k.isValidElement(i) ? s = /* @__PURE__ */ k.cloneElement(i, n) : re(i) ? s = i(n) : s = /* @__PURE__ */ k.createElement(sn, St({}, n, {
        className: "recharts-cartesian-axis-tick-value"
      }), o), s;
    }
  }]);
})(dl);
Sn(Vt, "displayName", "CartesianAxis");
Sn(Vt, "defaultProps", {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  viewBox: {
    x: 0,
    y: 0,
    width: 0,
    height: 0
  },
  // The orientation of axis
  orientation: "bottom",
  // The ticks
  ticks: [],
  stroke: "#666",
  tickLine: !0,
  axisLine: !0,
  tick: !0,
  mirror: !1,
  minTickGap: 5,
  // The width or height of tick
  tickSize: 6,
  tickMargin: 2,
  interval: "preserveEnd"
});
var pd = ["x1", "y1", "x2", "y2", "key"], md = ["offset"];
function pt(r) {
  "@babel/helpers - typeof";
  return pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, pt(r);
}
function ao(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function ae(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ao(Object(t), !0).forEach(function(i) {
      gd(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : ao(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function gd(r, e, t) {
  return e = vd(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function vd(r) {
  var e = yd(r, "string");
  return pt(e) == "symbol" ? e : e + "";
}
function yd(r, e) {
  if (pt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (pt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, ht.apply(this, arguments);
}
function lo(r, e) {
  if (r == null) return {};
  var t = bd(r, e), i, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (n = 0; n < o.length; n++)
      i = o[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(r, i) && (t[i] = r[i]);
  }
  return t;
}
function bd(r, e) {
  if (r == null) return {};
  var t = {};
  for (var i in r)
    if (Object.prototype.hasOwnProperty.call(r, i)) {
      if (e.indexOf(i) >= 0) continue;
      t[i] = r[i];
    }
  return t;
}
var xd = function(e) {
  var t = e.fill;
  if (!t || t === "none")
    return null;
  var i = e.fillOpacity, n = e.x, o = e.y, s = e.width, a = e.height, c = e.ry;
  return /* @__PURE__ */ k.createElement("rect", {
    x: n,
    y: o,
    ry: c,
    width: s,
    height: a,
    stroke: "none",
    fill: t,
    fillOpacity: i,
    className: "recharts-cartesian-grid-bg"
  });
};
function As(r, e) {
  var t;
  if (/* @__PURE__ */ k.isValidElement(r))
    t = /* @__PURE__ */ k.cloneElement(r, e);
  else if (re(r))
    t = r(e);
  else {
    var i = e.x1, n = e.y1, o = e.x2, s = e.y2, a = e.key, c = lo(e, pd), u = q(c, !1);
    u.offset;
    var l = lo(u, md);
    t = /* @__PURE__ */ k.createElement("line", ht({}, l, {
      x1: i,
      y1: n,
      x2: o,
      y2: s,
      fill: "none",
      key: a
    }));
  }
  return t;
}
function wd(r) {
  var e = r.x, t = r.width, i = r.horizontal, n = i === void 0 ? !0 : i, o = r.horizontalPoints;
  if (!n || !o || !o.length)
    return null;
  var s = o.map(function(a, c) {
    var u = ae(ae({}, r), {}, {
      x1: e,
      y1: a,
      x2: e + t,
      y2: a,
      key: "line-".concat(c),
      index: c
    });
    return As(n, u);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-horizontal"
  }, s);
}
function _d(r) {
  var e = r.y, t = r.height, i = r.vertical, n = i === void 0 ? !0 : i, o = r.verticalPoints;
  if (!n || !o || !o.length)
    return null;
  var s = o.map(function(a, c) {
    var u = ae(ae({}, r), {}, {
      x1: a,
      y1: e,
      x2: a,
      y2: e + t,
      key: "line-".concat(c),
      index: c
    });
    return As(n, u);
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid-vertical"
  }, s);
}
function Ed(r) {
  var e = r.horizontalFill, t = r.fillOpacity, i = r.x, n = r.y, o = r.width, s = r.height, a = r.horizontalPoints, c = r.horizontal, u = c === void 0 ? !0 : c;
  if (!u || !e || !e.length)
    return null;
  var l = a.map(function(h) {
    return Math.round(h + n - n);
  }).sort(function(h, f) {
    return h - f;
  });
  n !== l[0] && l.unshift(0);
  var d = l.map(function(h, f) {
    var g = !l[f + 1], m = g ? n + s - h : l[f + 1] - h;
    if (m <= 0)
      return null;
    var y = f % e.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(f),
      y: h,
      x: i,
      height: m,
      width: o,
      stroke: "none",
      fill: e[y],
      fillOpacity: t,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-horizontal"
  }, d);
}
function Cd(r) {
  var e = r.vertical, t = e === void 0 ? !0 : e, i = r.verticalFill, n = r.fillOpacity, o = r.x, s = r.y, a = r.width, c = r.height, u = r.verticalPoints;
  if (!t || !i || !i.length)
    return null;
  var l = u.map(function(h) {
    return Math.round(h + o - o);
  }).sort(function(h, f) {
    return h - f;
  });
  o !== l[0] && l.unshift(0);
  var d = l.map(function(h, f) {
    var g = !l[f + 1], m = g ? o + a - h : l[f + 1] - h;
    if (m <= 0)
      return null;
    var y = f % i.length;
    return /* @__PURE__ */ k.createElement("rect", {
      key: "react-".concat(f),
      x: h,
      y: s,
      width: m,
      height: c,
      stroke: "none",
      fill: i[y],
      fillOpacity: n,
      className: "recharts-cartesian-grid-bg"
    });
  });
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-gridstripes-vertical"
  }, d);
}
var Ad = function(e, t) {
  var i = e.xAxis, n = e.width, o = e.height, s = e.offset;
  return _o(On(ae(ae(ae({}, Vt.defaultProps), i), {}, {
    ticks: cr(i, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: o
    }
  })), s.left, s.left + s.width, t);
}, Od = function(e, t) {
  var i = e.yAxis, n = e.width, o = e.height, s = e.offset;
  return _o(On(ae(ae(ae({}, Vt.defaultProps), i), {}, {
    ticks: cr(i, !0),
    viewBox: {
      x: 0,
      y: 0,
      width: n,
      height: o
    }
  })), s.top, s.top + s.height, t);
}, Et = {
  horizontal: !0,
  vertical: !0,
  stroke: "#ccc",
  fill: "none",
  // The fill of colors of grid lines
  verticalFill: [],
  horizontalFill: []
};
function Xt(r) {
  var e, t, i, n, o, s, a = un(), c = dn(), u = ha(), l = ae(ae({}, r), {}, {
    stroke: (e = r.stroke) !== null && e !== void 0 ? e : Et.stroke,
    fill: (t = r.fill) !== null && t !== void 0 ? t : Et.fill,
    horizontal: (i = r.horizontal) !== null && i !== void 0 ? i : Et.horizontal,
    horizontalFill: (n = r.horizontalFill) !== null && n !== void 0 ? n : Et.horizontalFill,
    vertical: (o = r.vertical) !== null && o !== void 0 ? o : Et.vertical,
    verticalFill: (s = r.verticalFill) !== null && s !== void 0 ? s : Et.verticalFill,
    x: Y(r.x) ? r.x : u.left,
    y: Y(r.y) ? r.y : u.top,
    width: Y(r.width) ? r.width : u.width,
    height: Y(r.height) ? r.height : u.height
  }), d = l.x, h = l.y, f = l.width, g = l.height, m = l.syncWithTicks, y = l.horizontalValues, x = l.verticalValues, _ = fa(), v = pa();
  if (!Y(f) || f <= 0 || !Y(g) || g <= 0 || !Y(d) || d !== +d || !Y(h) || h !== +h)
    return null;
  var E = l.verticalCoordinatesGenerator || Ad, b = l.horizontalCoordinatesGenerator || Od, w = l.horizontalPoints, C = l.verticalPoints;
  if ((!w || !w.length) && re(b)) {
    var O = y && y.length, N = b({
      yAxis: v ? ae(ae({}, v), {}, {
        ticks: O ? y : v.ticks
      }) : void 0,
      width: a,
      height: c,
      offset: u
    }, O ? !0 : m);
    Ii(Array.isArray(N), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(pt(N), "]")), Array.isArray(N) && (w = N);
  }
  if ((!C || !C.length) && re(E)) {
    var D = x && x.length, S = E({
      xAxis: _ ? ae(ae({}, _), {}, {
        ticks: D ? x : _.ticks
      }) : void 0,
      width: a,
      height: c,
      offset: u
    }, D ? !0 : m);
    Ii(Array.isArray(S), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(pt(S), "]")), Array.isArray(S) && (C = S);
  }
  return /* @__PURE__ */ k.createElement("g", {
    className: "recharts-cartesian-grid"
  }, /* @__PURE__ */ k.createElement(xd, {
    fill: l.fill,
    fillOpacity: l.fillOpacity,
    x: l.x,
    y: l.y,
    width: l.width,
    height: l.height,
    ry: l.ry
  }), /* @__PURE__ */ k.createElement(wd, ht({}, l, {
    offset: u,
    horizontalPoints: w,
    xAxis: _,
    yAxis: v
  })), /* @__PURE__ */ k.createElement(_d, ht({}, l, {
    offset: u,
    verticalPoints: C,
    xAxis: _,
    yAxis: v
  })), /* @__PURE__ */ k.createElement(Ed, ht({}, l, {
    horizontalPoints: w
  })), /* @__PURE__ */ k.createElement(Cd, ht({}, l, {
    verticalPoints: C
  })));
}
Xt.displayName = "CartesianGrid";
var Sd = ["type", "layout", "connectNulls", "ref"], kd = ["key"];
function Lt(r) {
  "@babel/helpers - typeof";
  return Lt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Lt(r);
}
function co(r, e) {
  if (r == null) return {};
  var t = Pd(r, e), i, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (n = 0; n < o.length; n++)
      i = o[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(r, i) && (t[i] = r[i]);
  }
  return t;
}
function Pd(r, e) {
  if (r == null) return {};
  var t = {};
  for (var i in r)
    if (Object.prototype.hasOwnProperty.call(r, i)) {
      if (e.indexOf(i) >= 0) continue;
      t[i] = r[i];
    }
  return t;
}
function si() {
  return si = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, si.apply(this, arguments);
}
function uo(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function xe(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? uo(Object(t), !0).forEach(function(i) {
      De(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : uo(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Ct(r) {
  return Td(r) || Nd(r) || Rd(r) || Dd();
}
function Dd() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Rd(r, e) {
  if (r) {
    if (typeof r == "string") return Kr(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set") return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Kr(r, e);
  }
}
function Nd(r) {
  if (typeof Symbol < "u" && r[Symbol.iterator] != null || r["@@iterator"] != null) return Array.from(r);
}
function Td(r) {
  if (Array.isArray(r)) return Kr(r);
}
function Kr(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, i = new Array(e); t < e; t++) i[t] = r[t];
  return i;
}
function zd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ho(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Ss(i.key), i);
  }
}
function Ld(r, e, t) {
  return e && ho(r.prototype, e), t && ho(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Md(r, e, t) {
  return e = er(e), Id(r, Os() ? Reflect.construct(e, t || [], er(r).constructor) : e.apply(r, t));
}
function Id(r, e) {
  if (e && (Lt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return $d(r);
}
function $d(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Os() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Os = function() {
    return !!r;
  })();
}
function er(r) {
  return er = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, er(r);
}
function jd(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Vr(r, e);
}
function Vr(r, e) {
  return Vr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, Vr(r, e);
}
function De(r, e, t) {
  return e = Ss(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Ss(r) {
  var e = Bd(r, "string");
  return Lt(e) == "symbol" ? e : e + "";
}
function Bd(r, e) {
  if (Lt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Lt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var gt = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    zd(this, e);
    for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++)
      n[o] = arguments[o];
    return t = Md(this, e, [].concat(n)), De(t, "state", {
      isAnimationFinished: !0,
      totalLength: 0
    }), De(t, "generateSimpleStrokeDasharray", function(s, a) {
      return "".concat(a, "px ").concat(s - a, "px");
    }), De(t, "getStrokeDasharray", function(s, a, c) {
      var u = c.reduce(function(x, _) {
        return x + _;
      });
      if (!u)
        return t.generateSimpleStrokeDasharray(a, s);
      for (var l = Math.floor(s / u), d = s % u, h = a - s, f = [], g = 0, m = 0; g < c.length; m += c[g], ++g)
        if (m + c[g] > d) {
          f = [].concat(Ct(c.slice(0, g)), [d - m]);
          break;
        }
      var y = f.length % 2 === 0 ? [0, h] : [h];
      return [].concat(Ct(e.repeat(c, l)), Ct(f), y).map(function(x) {
        return "".concat(x, "px");
      }).join(", ");
    }), De(t, "id", ar("recharts-line-")), De(t, "pathRef", function(s) {
      t.mainCurve = s;
    }), De(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      }), t.props.onAnimationEnd && t.props.onAnimationEnd();
    }), De(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      }), t.props.onAnimationStart && t.props.onAnimationStart();
    }), t;
  }
  return jd(e, r), Ld(e, [{
    key: "componentDidMount",
    value: function() {
      if (this.props.isAnimationActive) {
        var i = this.getTotalLength();
        this.setState({
          totalLength: i
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function() {
      if (this.props.isAnimationActive) {
        var i = this.getTotalLength();
        i !== this.state.totalLength && this.setState({
          totalLength: i
        });
      }
    }
  }, {
    key: "getTotalLength",
    value: function() {
      var i = this.mainCurve;
      try {
        return i && i.getTotalLength && i.getTotalLength() || 0;
      } catch {
        return 0;
      }
    }
  }, {
    key: "renderErrorBar",
    value: function(i, n) {
      if (this.props.isAnimationActive && !this.state.isAnimationFinished)
        return null;
      var o = this.props, s = o.points, a = o.xAxis, c = o.yAxis, u = o.layout, l = o.children, d = lr(l, Co);
      if (!d)
        return null;
      var h = function(m, y) {
        return {
          x: m.x,
          y: m.y,
          value: m.value,
          errorVal: fe(m.payload, y)
        };
      }, f = {
        clipPath: i ? "url(#clipPath-".concat(n, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Z, f, d.map(function(g) {
        return /* @__PURE__ */ k.cloneElement(g, {
          key: "bar-".concat(g.props.dataKey),
          data: s,
          xAxis: a,
          yAxis: c,
          layout: u,
          dataPointFormatter: h
        });
      }));
    }
  }, {
    key: "renderDots",
    value: function(i, n, o) {
      var s = this.props.isAnimationActive;
      if (s && !this.state.isAnimationFinished)
        return null;
      var a = this.props, c = a.dot, u = a.points, l = a.dataKey, d = q(this.props, !1), h = q(c, !0), f = u.map(function(m, y) {
        var x = xe(xe(xe({
          key: "dot-".concat(y),
          r: 3
        }, d), h), {}, {
          value: m.value,
          dataKey: l,
          cx: m.x,
          cy: m.y,
          index: y,
          payload: m.payload
        });
        return e.renderDotItem(c, x);
      }), g = {
        clipPath: i ? "url(#clipPath-".concat(n ? "" : "dots-").concat(o, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Z, si({
        className: "recharts-line-dots",
        key: "dots"
      }, g), f);
    }
  }, {
    key: "renderCurveStatically",
    value: function(i, n, o, s) {
      var a = this.props, c = a.type, u = a.layout, l = a.connectNulls;
      a.ref;
      var d = co(a, Sd), h = xe(xe(xe({}, q(d, !0)), {}, {
        fill: "none",
        className: "recharts-line-curve",
        clipPath: n ? "url(#clipPath-".concat(o, ")") : null,
        points: i
      }, s), {}, {
        type: c,
        layout: u,
        connectNulls: l
      });
      return /* @__PURE__ */ k.createElement(kt, si({}, h, {
        pathRef: this.pathRef
      }));
    }
  }, {
    key: "renderCurveWithAnimation",
    value: function(i, n) {
      var o = this, s = this.props, a = s.points, c = s.strokeDasharray, u = s.isAnimationActive, l = s.animationBegin, d = s.animationDuration, h = s.animationEasing, f = s.animationId, g = s.animateNewValues, m = s.width, y = s.height, x = this.state, _ = x.prevPoints, v = x.totalLength;
      return /* @__PURE__ */ k.createElement(sr, {
        begin: l,
        duration: d,
        isActive: u,
        easing: h,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "line-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(E) {
        var b = E.t;
        if (_) {
          var w = _.length / a.length, C = a.map(function(P, R) {
            var M = Math.floor(R * w);
            if (_[M]) {
              var U = _[M], H = ie(U.x, P.x), V = ie(U.y, P.y);
              return xe(xe({}, P), {}, {
                x: H(b),
                y: V(b)
              });
            }
            if (g) {
              var le = ie(m * 2, P.x), G = ie(y / 2, P.y);
              return xe(xe({}, P), {}, {
                x: le(b),
                y: G(b)
              });
            }
            return xe(xe({}, P), {}, {
              x: P.x,
              y: P.y
            });
          });
          return o.renderCurveStatically(C, i, n);
        }
        var O = ie(0, v), N = O(b), D;
        if (c) {
          var S = "".concat(c).split(/[,\s]+/gim).map(function(P) {
            return parseFloat(P);
          });
          D = o.getStrokeDasharray(N, v, S);
        } else
          D = o.generateSimpleStrokeDasharray(v, N);
        return o.renderCurveStatically(a, i, n, {
          strokeDasharray: D
        });
      });
    }
  }, {
    key: "renderCurve",
    value: function(i, n) {
      var o = this.props, s = o.points, a = o.isAnimationActive, c = this.state, u = c.prevPoints, l = c.totalLength;
      return a && s && s.length && (!u && l > 0 || !Dt(u, s)) ? this.renderCurveWithAnimation(i, n) : this.renderCurveStatically(s, i, n);
    }
  }, {
    key: "render",
    value: function() {
      var i, n = this.props, o = n.hide, s = n.dot, a = n.points, c = n.className, u = n.xAxis, l = n.yAxis, d = n.top, h = n.left, f = n.width, g = n.height, m = n.isAnimationActive, y = n.id;
      if (o || !a || !a.length)
        return null;
      var x = this.state.isAnimationFinished, _ = a.length === 1, v = we("recharts-line", c), E = u && u.allowDataOverflow, b = l && l.allowDataOverflow, w = E || b, C = ne(y) ? this.id : y, O = (i = q(s, !1)) !== null && i !== void 0 ? i : {
        r: 3,
        strokeWidth: 2
      }, N = O.r, D = N === void 0 ? 3 : N, S = O.strokeWidth, P = S === void 0 ? 2 : S, R = Ao(s) ? s : {}, M = R.clipDot, U = M === void 0 ? !0 : M, H = D * 2 + P;
      return /* @__PURE__ */ k.createElement(Z, {
        className: v
      }, E || b ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: E ? h : h - f / 2,
        y: b ? d : d - g / 2,
        width: E ? f : f * 2,
        height: b ? g : g * 2
      })), !U && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: h - H / 2,
        y: d - H / 2,
        width: f + H,
        height: g + H
      }))) : null, !_ && this.renderCurve(w, C), this.renderErrorBar(w, C), (_ || s) && this.renderDots(w, U, C), (!m || x) && mt.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, n) {
      return i.animationId !== n.prevAnimationId ? {
        prevAnimationId: i.animationId,
        curPoints: i.points,
        prevPoints: n.curPoints
      } : i.points !== n.curPoints ? {
        curPoints: i.points
      } : null;
    }
  }, {
    key: "repeat",
    value: function(i, n) {
      for (var o = i.length % 2 !== 0 ? [].concat(Ct(i), [0]) : i, s = [], a = 0; a < n; ++a)
        s = [].concat(Ct(s), Ct(o));
      return s;
    }
  }, {
    key: "renderDotItem",
    value: function(i, n) {
      var o;
      if (/* @__PURE__ */ k.isValidElement(i))
        o = /* @__PURE__ */ k.cloneElement(i, n);
      else if (re(i))
        o = i(n);
      else {
        var s = n.key, a = co(n, kd), c = we("recharts-line-dot", typeof i != "boolean" ? i.className : "");
        o = /* @__PURE__ */ k.createElement(Eo, si({
          key: s
        }, a, {
          className: c
        }));
      }
      return o;
    }
  }]);
})(fr);
De(gt, "displayName", "Line");
De(gt, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  connectNulls: !1,
  activeDot: !0,
  dot: !0,
  legendType: "line",
  stroke: "#3182bd",
  strokeWidth: 1,
  fill: "#fff",
  points: [],
  isAnimationActive: !gi.isSsr,
  animateNewValues: !0,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease",
  hide: !1,
  label: !1
});
De(gt, "getComposedData", function(r) {
  var e = r.props, t = r.xAxis, i = r.yAxis, n = r.xAxisTicks, o = r.yAxisTicks, s = r.dataKey, a = r.bandSize, c = r.displayedData, u = r.offset, l = e.layout, d = c.map(function(h, f) {
    var g = fe(h, s);
    return l === "horizontal" ? {
      x: Rt({
        axis: t,
        ticks: n,
        bandSize: a,
        entry: h,
        index: f
      }),
      y: ne(g) ? null : i.scale(g),
      value: g,
      payload: h
    } : {
      x: ne(g) ? null : t.scale(g),
      y: Rt({
        axis: i,
        ticks: o,
        bandSize: a,
        entry: h,
        index: f
      }),
      value: g,
      payload: h
    };
  });
  return xe({
    points: d,
    layout: l
  }, u);
});
var Fd = ["layout", "type", "stroke", "connectNulls", "isRange", "ref"], Hd = ["key"], ks;
function Mt(r) {
  "@babel/helpers - typeof";
  return Mt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Mt(r);
}
function Ps(r, e) {
  if (r == null) return {};
  var t = Wd(r, e), i, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (n = 0; n < o.length; n++)
      i = o[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(r, i) && (t[i] = r[i]);
  }
  return t;
}
function Wd(r, e) {
  if (r == null) return {};
  var t = {};
  for (var i in r)
    if (Object.prototype.hasOwnProperty.call(r, i)) {
      if (e.indexOf(i) >= 0) continue;
      t[i] = r[i];
    }
  return t;
}
function ft() {
  return ft = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, ft.apply(this, arguments);
}
function fo(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function ot(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fo(Object(t), !0).forEach(function(i) {
      He(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : fo(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Gd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function po(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Rs(i.key), i);
  }
}
function Ud(r, e, t) {
  return e && po(r.prototype, e), t && po(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function Kd(r, e, t) {
  return e = tr(e), Vd(r, Ds() ? Reflect.construct(e, t || [], tr(r).constructor) : e.apply(r, t));
}
function Vd(r, e) {
  if (e && (Mt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Xd(r);
}
function Xd(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ds() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ds = function() {
    return !!r;
  })();
}
function tr(r) {
  return tr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, tr(r);
}
function Yd(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Xr(r, e);
}
function Xr(r, e) {
  return Xr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, Xr(r, e);
}
function He(r, e, t) {
  return e = Rs(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Rs(r) {
  var e = qd(r, "string");
  return Mt(e) == "symbol" ? e : e + "";
}
function qd(r, e) {
  if (Mt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Mt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Je = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    Gd(this, e);
    for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++)
      n[o] = arguments[o];
    return t = Kd(this, e, [].concat(n)), He(t, "state", {
      isAnimationFinished: !0
    }), He(t, "id", ar("recharts-area-")), He(t, "handleAnimationEnd", function() {
      var s = t.props.onAnimationEnd;
      t.setState({
        isAnimationFinished: !0
      }), re(s) && s();
    }), He(t, "handleAnimationStart", function() {
      var s = t.props.onAnimationStart;
      t.setState({
        isAnimationFinished: !1
      }), re(s) && s();
    }), t;
  }
  return Yd(e, r), Ud(e, [{
    key: "renderDots",
    value: function(i, n, o) {
      var s = this.props.isAnimationActive, a = this.state.isAnimationFinished;
      if (s && !a)
        return null;
      var c = this.props, u = c.dot, l = c.points, d = c.dataKey, h = q(this.props, !1), f = q(u, !0), g = l.map(function(y, x) {
        var _ = ot(ot(ot({
          key: "dot-".concat(x),
          r: 3
        }, h), f), {}, {
          index: x,
          cx: y.x,
          cy: y.y,
          dataKey: d,
          value: y.value,
          payload: y.payload,
          points: l
        });
        return e.renderDotItem(u, _);
      }), m = {
        clipPath: i ? "url(#clipPath-".concat(n ? "" : "dots-").concat(o, ")") : null
      };
      return /* @__PURE__ */ k.createElement(Z, ft({
        className: "recharts-area-dots"
      }, m), g);
    }
  }, {
    key: "renderHorizontalRect",
    value: function(i) {
      var n = this.props, o = n.baseLine, s = n.points, a = n.strokeWidth, c = s[0].x, u = s[s.length - 1].x, l = i * Math.abs(c - u), d = Ri(s.map(function(h) {
        return h.y || 0;
      }));
      return Y(o) && typeof o == "number" ? d = Math.max(o, d) : o && Array.isArray(o) && o.length && (d = Math.max(Ri(o.map(function(h) {
        return h.y || 0;
      })), d)), Y(d) ? /* @__PURE__ */ k.createElement("rect", {
        x: c < u ? c : c - l,
        y: 0,
        width: l,
        height: Math.floor(d + (a ? parseInt("".concat(a), 10) : 1))
      }) : null;
    }
  }, {
    key: "renderVerticalRect",
    value: function(i) {
      var n = this.props, o = n.baseLine, s = n.points, a = n.strokeWidth, c = s[0].y, u = s[s.length - 1].y, l = i * Math.abs(c - u), d = Ri(s.map(function(h) {
        return h.x || 0;
      }));
      return Y(o) && typeof o == "number" ? d = Math.max(o, d) : o && Array.isArray(o) && o.length && (d = Math.max(Ri(o.map(function(h) {
        return h.x || 0;
      })), d)), Y(d) ? /* @__PURE__ */ k.createElement("rect", {
        x: 0,
        y: c < u ? c : c - l,
        width: d + (a ? parseInt("".concat(a), 10) : 1),
        height: Math.floor(l)
      }) : null;
    }
  }, {
    key: "renderClipRect",
    value: function(i) {
      var n = this.props.layout;
      return n === "vertical" ? this.renderVerticalRect(i) : this.renderHorizontalRect(i);
    }
  }, {
    key: "renderAreaStatically",
    value: function(i, n, o, s) {
      var a = this.props, c = a.layout, u = a.type, l = a.stroke, d = a.connectNulls, h = a.isRange;
      a.ref;
      var f = Ps(a, Fd);
      return /* @__PURE__ */ k.createElement(Z, {
        clipPath: o ? "url(#clipPath-".concat(s, ")") : null
      }, /* @__PURE__ */ k.createElement(kt, ft({}, q(f, !0), {
        points: i,
        connectNulls: d,
        type: u,
        baseLine: n,
        layout: c,
        stroke: "none",
        className: "recharts-area-area"
      })), l !== "none" && /* @__PURE__ */ k.createElement(kt, ft({}, q(this.props, !1), {
        className: "recharts-area-curve",
        layout: c,
        type: u,
        connectNulls: d,
        fill: "none",
        points: i
      })), l !== "none" && h && /* @__PURE__ */ k.createElement(kt, ft({}, q(this.props, !1), {
        className: "recharts-area-curve",
        layout: c,
        type: u,
        connectNulls: d,
        fill: "none",
        points: n
      })));
    }
  }, {
    key: "renderAreaWithAnimation",
    value: function(i, n) {
      var o = this, s = this.props, a = s.points, c = s.baseLine, u = s.isAnimationActive, l = s.animationBegin, d = s.animationDuration, h = s.animationEasing, f = s.animationId, g = this.state, m = g.prevPoints, y = g.prevBaseLine;
      return /* @__PURE__ */ k.createElement(sr, {
        begin: l,
        duration: d,
        isActive: u,
        easing: h,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "area-".concat(f),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(x) {
        var _ = x.t;
        if (m) {
          var v = m.length / a.length, E = a.map(function(O, N) {
            var D = Math.floor(N * v);
            if (m[D]) {
              var S = m[D], P = ie(S.x, O.x), R = ie(S.y, O.y);
              return ot(ot({}, O), {}, {
                x: P(_),
                y: R(_)
              });
            }
            return O;
          }), b;
          if (Y(c) && typeof c == "number") {
            var w = ie(y, c);
            b = w(_);
          } else if (ne(c) || ma(c)) {
            var C = ie(y, 0);
            b = C(_);
          } else
            b = c.map(function(O, N) {
              var D = Math.floor(N * v);
              if (y[D]) {
                var S = y[D], P = ie(S.x, O.x), R = ie(S.y, O.y);
                return ot(ot({}, O), {}, {
                  x: P(_),
                  y: R(_)
                });
              }
              return O;
            });
          return o.renderAreaStatically(E, b, i, n);
        }
        return /* @__PURE__ */ k.createElement(Z, null, /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
          id: "animationClipPath-".concat(n)
        }, o.renderClipRect(_))), /* @__PURE__ */ k.createElement(Z, {
          clipPath: "url(#animationClipPath-".concat(n, ")")
        }, o.renderAreaStatically(a, c, i, n)));
      });
    }
  }, {
    key: "renderArea",
    value: function(i, n) {
      var o = this.props, s = o.points, a = o.baseLine, c = o.isAnimationActive, u = this.state, l = u.prevPoints, d = u.prevBaseLine, h = u.totalLength;
      return c && s && s.length && (!l && h > 0 || !Dt(l, s) || !Dt(d, a)) ? this.renderAreaWithAnimation(i, n) : this.renderAreaStatically(s, a, i, n);
    }
  }, {
    key: "render",
    value: function() {
      var i, n = this.props, o = n.hide, s = n.dot, a = n.points, c = n.className, u = n.top, l = n.left, d = n.xAxis, h = n.yAxis, f = n.width, g = n.height, m = n.isAnimationActive, y = n.id;
      if (o || !a || !a.length)
        return null;
      var x = this.state.isAnimationFinished, _ = a.length === 1, v = we("recharts-area", c), E = d && d.allowDataOverflow, b = h && h.allowDataOverflow, w = E || b, C = ne(y) ? this.id : y, O = (i = q(s, !1)) !== null && i !== void 0 ? i : {
        r: 3,
        strokeWidth: 2
      }, N = O.r, D = N === void 0 ? 3 : N, S = O.strokeWidth, P = S === void 0 ? 2 : S, R = Ao(s) ? s : {}, M = R.clipDot, U = M === void 0 ? !0 : M, H = D * 2 + P;
      return /* @__PURE__ */ k.createElement(Z, {
        className: v
      }, E || b ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: E ? l : l - f / 2,
        y: b ? u : u - g / 2,
        width: E ? f : f * 2,
        height: b ? g : g * 2
      })), !U && /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-dots-".concat(C)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: l - H / 2,
        y: u - H / 2,
        width: f + H,
        height: g + H
      }))) : null, _ ? null : this.renderArea(w, C), (s || _) && this.renderDots(w, U, C), (!m || x) && mt.renderCallByParent(this.props, a));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, n) {
      return i.animationId !== n.prevAnimationId ? {
        prevAnimationId: i.animationId,
        curPoints: i.points,
        curBaseLine: i.baseLine,
        prevPoints: n.curPoints,
        prevBaseLine: n.curBaseLine
      } : i.points !== n.curPoints || i.baseLine !== n.curBaseLine ? {
        curPoints: i.points,
        curBaseLine: i.baseLine
      } : null;
    }
  }]);
})(fr);
ks = Je;
He(Je, "displayName", "Area");
He(Je, "defaultProps", {
  stroke: "#3182bd",
  fill: "#3182bd",
  fillOpacity: 0.6,
  xAxisId: 0,
  yAxisId: 0,
  legendType: "line",
  connectNulls: !1,
  // points of area
  points: [],
  dot: !1,
  activeDot: !0,
  hide: !1,
  isAnimationActive: !gi.isSsr,
  animationBegin: 0,
  animationDuration: 1500,
  animationEasing: "ease"
});
He(Je, "getBaseValue", function(r, e, t, i) {
  var n = r.layout, o = r.baseValue, s = e.props.baseValue, a = s ?? o;
  if (Y(a) && typeof a == "number")
    return a;
  var c = n === "horizontal" ? i : t, u = c.scale.domain();
  if (c.type === "number") {
    var l = Math.max(u[0], u[1]), d = Math.min(u[0], u[1]);
    return a === "dataMin" ? d : a === "dataMax" || l < 0 ? l : Math.max(Math.min(u[0], u[1]), 0);
  }
  return a === "dataMin" ? u[0] : a === "dataMax" ? u[1] : u[0];
});
He(Je, "getComposedData", function(r) {
  var e = r.props, t = r.item, i = r.xAxis, n = r.yAxis, o = r.xAxisTicks, s = r.yAxisTicks, a = r.bandSize, c = r.dataKey, u = r.stackedData, l = r.dataStartIndex, d = r.displayedData, h = r.offset, f = e.layout, g = u && u.length, m = ks.getBaseValue(e, t, i, n), y = f === "horizontal", x = !1, _ = d.map(function(E, b) {
    var w;
    g ? w = u[l + b] : (w = fe(E, c), Array.isArray(w) ? x = !0 : w = [m, w]);
    var C = w[1] == null || g && fe(E, c) == null;
    return y ? {
      x: Rt({
        axis: i,
        ticks: o,
        bandSize: a,
        entry: E,
        index: b
      }),
      y: C ? null : n.scale(w[1]),
      value: w,
      payload: E
    } : {
      x: C ? null : i.scale(w[1]),
      y: Rt({
        axis: n,
        ticks: s,
        bandSize: a,
        entry: E,
        index: b
      }),
      value: w,
      payload: E
    };
  }), v;
  return g || x ? v = _.map(function(E) {
    var b = Array.isArray(E.value) ? E.value[0] : null;
    return y ? {
      x: E.x,
      y: b != null && E.y != null ? n.scale(b) : null
    } : {
      x: b != null ? i.scale(b) : null,
      y: E.y
    };
  }) : v = y ? n.scale(m) : i.scale(m), ot({
    points: _,
    baseLine: v,
    layout: f,
    isRange: x
  }, h);
});
He(Je, "renderDotItem", function(r, e) {
  var t;
  if (/* @__PURE__ */ k.isValidElement(r))
    t = /* @__PURE__ */ k.cloneElement(r, e);
  else if (re(r))
    t = r(e);
  else {
    var i = we("recharts-area-dot", typeof r != "boolean" ? r.className : ""), n = e.key, o = Ps(e, Hd);
    t = /* @__PURE__ */ k.createElement(Eo, ft({}, o, {
      key: n,
      className: i
    }));
  }
  return t;
});
function It(r) {
  "@babel/helpers - typeof";
  return It = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, It(r);
}
function Jd(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Zd(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, zs(i.key), i);
  }
}
function Qd(r, e, t) {
  return e && Zd(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function eh(r, e, t) {
  return e = ir(e), th(r, Ns() ? Reflect.construct(e, t || [], ir(r).constructor) : e.apply(r, t));
}
function th(r, e) {
  if (e && (It(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return ih(r);
}
function ih(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ns() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ns = function() {
    return !!r;
  })();
}
function ir(r) {
  return ir = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ir(r);
}
function rh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Yr(r, e);
}
function Yr(r, e) {
  return Yr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, Yr(r, e);
}
function Ts(r, e, t) {
  return e = zs(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function zs(r) {
  var e = nh(r, "string");
  return It(e) == "symbol" ? e : e + "";
}
function nh(r, e) {
  if (It(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (It(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Er = /* @__PURE__ */ (function(r) {
  function e() {
    return Jd(this, e), eh(this, e, arguments);
  }
  return rh(e, r), Qd(e, [{
    key: "render",
    value: function() {
      return null;
    }
  }]);
})(k.Component);
Ts(Er, "displayName", "ZAxis");
Ts(Er, "defaultProps", {
  zAxisId: 0,
  range: [64, 64],
  scale: "auto",
  type: "number"
});
var oh = ["option", "isActive"];
function ai() {
  return ai = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, ai.apply(this, arguments);
}
function sh(r, e) {
  if (r == null) return {};
  var t = ah(r, e), i, n;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(r);
    for (n = 0; n < o.length; n++)
      i = o[n], !(e.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(r, i) && (t[i] = r[i]);
  }
  return t;
}
function ah(r, e) {
  if (r == null) return {};
  var t = {};
  for (var i in r)
    if (Object.prototype.hasOwnProperty.call(r, i)) {
      if (e.indexOf(i) >= 0) continue;
      t[i] = r[i];
    }
  return t;
}
function lh(r) {
  var e = r.option, t = r.isActive, i = sh(r, oh);
  return typeof e == "string" ? /* @__PURE__ */ k.createElement($r, ai({
    option: /* @__PURE__ */ k.createElement(ga, ai({
      type: e
    }, i)),
    isActive: t,
    shapeType: "symbols"
  }, i)) : /* @__PURE__ */ k.createElement($r, ai({
    option: e,
    isActive: t,
    shapeType: "symbols"
  }, i));
}
function $t(r) {
  "@babel/helpers - typeof";
  return $t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, $t(r);
}
function li() {
  return li = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, li.apply(this, arguments);
}
function mo(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function Ae(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? mo(Object(t), !0).forEach(function(i) {
      at(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : mo(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function ch(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function go(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Ms(i.key), i);
  }
}
function uh(r, e, t) {
  return e && go(r.prototype, e), t && go(r, t), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function dh(r, e, t) {
  return e = rr(e), hh(r, Ls() ? Reflect.construct(e, t || [], rr(r).constructor) : e.apply(r, t));
}
function hh(r, e) {
  if (e && ($t(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return fh(r);
}
function fh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Ls() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ls = function() {
    return !!r;
  })();
}
function rr(r) {
  return rr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, rr(r);
}
function ph(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && qr(r, e);
}
function qr(r, e) {
  return qr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, qr(r, e);
}
function at(r, e, t) {
  return e = Ms(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Ms(r) {
  var e = mh(r, "string");
  return $t(e) == "symbol" ? e : e + "";
}
function mh(r, e) {
  if ($t(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if ($t(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
var Ei = /* @__PURE__ */ (function(r) {
  function e() {
    var t;
    ch(this, e);
    for (var i = arguments.length, n = new Array(i), o = 0; o < i; o++)
      n[o] = arguments[o];
    return t = dh(this, e, [].concat(n)), at(t, "state", {
      isAnimationFinished: !1
    }), at(t, "handleAnimationEnd", function() {
      t.setState({
        isAnimationFinished: !0
      });
    }), at(t, "handleAnimationStart", function() {
      t.setState({
        isAnimationFinished: !1
      });
    }), at(t, "id", ar("recharts-scatter-")), t;
  }
  return ph(e, r), uh(e, [{
    key: "renderSymbolsStatically",
    value: function(i) {
      var n = this, o = this.props, s = o.shape, a = o.activeShape, c = o.activeIndex, u = q(this.props, !1);
      return i.map(function(l, d) {
        var h = c === d, f = h ? a : s, g = Ae(Ae({}, u), l);
        return /* @__PURE__ */ k.createElement(Z, li({
          className: "recharts-scatter-symbol",
          key: "symbol-".concat(l?.cx, "-").concat(l?.cy, "-").concat(l?.size, "-").concat(d)
        }, an(n.props, l, d), {
          role: "img"
        }), /* @__PURE__ */ k.createElement(lh, li({
          option: f,
          isActive: h,
          key: "symbol-".concat(d)
        }, g)));
      });
    }
  }, {
    key: "renderSymbolsWithAnimation",
    value: function() {
      var i = this, n = this.props, o = n.points, s = n.isAnimationActive, a = n.animationBegin, c = n.animationDuration, u = n.animationEasing, l = n.animationId, d = this.state.prevPoints;
      return /* @__PURE__ */ k.createElement(sr, {
        begin: a,
        duration: c,
        isActive: s,
        easing: u,
        from: {
          t: 0
        },
        to: {
          t: 1
        },
        key: "pie-".concat(l),
        onAnimationEnd: this.handleAnimationEnd,
        onAnimationStart: this.handleAnimationStart
      }, function(h) {
        var f = h.t, g = o.map(function(m, y) {
          var x = d && d[y];
          if (x) {
            var _ = ie(x.cx, m.cx), v = ie(x.cy, m.cy), E = ie(x.size, m.size);
            return Ae(Ae({}, m), {}, {
              cx: _(f),
              cy: v(f),
              size: E(f)
            });
          }
          var b = ie(0, m.size);
          return Ae(Ae({}, m), {}, {
            size: b(f)
          });
        });
        return /* @__PURE__ */ k.createElement(Z, null, i.renderSymbolsStatically(g));
      });
    }
  }, {
    key: "renderSymbols",
    value: function() {
      var i = this.props, n = i.points, o = i.isAnimationActive, s = this.state.prevPoints;
      return o && n && n.length && (!s || !Dt(s, n)) ? this.renderSymbolsWithAnimation() : this.renderSymbolsStatically(n);
    }
  }, {
    key: "renderErrorBar",
    value: function() {
      var i = this.props.isAnimationActive;
      if (i && !this.state.isAnimationFinished)
        return null;
      var n = this.props, o = n.points, s = n.xAxis, a = n.yAxis, c = n.children, u = lr(c, Co);
      return u ? u.map(function(l, d) {
        var h = l.props, f = h.direction, g = h.dataKey;
        return /* @__PURE__ */ k.cloneElement(l, {
          key: "".concat(f, "-").concat(g, "-").concat(o[d]),
          data: o,
          xAxis: s,
          yAxis: a,
          layout: f === "x" ? "vertical" : "horizontal",
          dataPointFormatter: function(y, x) {
            return {
              x: y.cx,
              y: y.cy,
              value: f === "x" ? +y.node.x : +y.node.y,
              errorVal: fe(y, x)
            };
          }
        });
      }) : null;
    }
  }, {
    key: "renderLine",
    value: function() {
      var i = this.props, n = i.points, o = i.line, s = i.lineType, a = i.lineJointType, c = q(this.props, !1), u = q(o, !1), l, d;
      if (s === "joint")
        l = n.map(function(v) {
          return {
            x: v.cx,
            y: v.cy
          };
        });
      else if (s === "fitting") {
        var h = va(n), f = h.xmin, g = h.xmax, m = h.a, y = h.b, x = function(E) {
          return m * E + y;
        };
        l = [{
          x: f,
          y: x(f)
        }, {
          x: g,
          y: x(g)
        }];
      }
      var _ = Ae(Ae(Ae({}, c), {}, {
        fill: "none",
        stroke: c && c.fill
      }, u), {}, {
        points: l
      });
      return /* @__PURE__ */ k.isValidElement(o) ? d = /* @__PURE__ */ k.cloneElement(o, _) : re(o) ? d = o(_) : d = /* @__PURE__ */ k.createElement(kt, li({}, _, {
        type: a
      })), /* @__PURE__ */ k.createElement(Z, {
        className: "recharts-scatter-line",
        key: "recharts-scatter-line"
      }, d);
    }
  }, {
    key: "render",
    value: function() {
      var i = this.props, n = i.hide, o = i.points, s = i.line, a = i.className, c = i.xAxis, u = i.yAxis, l = i.left, d = i.top, h = i.width, f = i.height, g = i.id, m = i.isAnimationActive;
      if (n || !o || !o.length)
        return null;
      var y = this.state.isAnimationFinished, x = we("recharts-scatter", a), _ = c && c.allowDataOverflow, v = u && u.allowDataOverflow, E = _ || v, b = ne(g) ? this.id : g;
      return /* @__PURE__ */ k.createElement(Z, {
        className: x,
        clipPath: E ? "url(#clipPath-".concat(b, ")") : null
      }, _ || v ? /* @__PURE__ */ k.createElement("defs", null, /* @__PURE__ */ k.createElement("clipPath", {
        id: "clipPath-".concat(b)
      }, /* @__PURE__ */ k.createElement("rect", {
        x: _ ? l : l - h / 2,
        y: v ? d : d - f / 2,
        width: _ ? h : h * 2,
        height: v ? f : f * 2
      }))) : null, s && this.renderLine(), this.renderErrorBar(), /* @__PURE__ */ k.createElement(Z, {
        key: "recharts-scatter-symbols"
      }, this.renderSymbols()), (!m || y) && mt.renderCallByParent(this.props, o));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(i, n) {
      return i.animationId !== n.prevAnimationId ? {
        prevAnimationId: i.animationId,
        curPoints: i.points,
        prevPoints: n.curPoints
      } : i.points !== n.curPoints ? {
        curPoints: i.points
      } : null;
    }
  }]);
})(fr);
at(Ei, "displayName", "Scatter");
at(Ei, "defaultProps", {
  xAxisId: 0,
  yAxisId: 0,
  zAxisId: 0,
  legendType: "circle",
  lineType: "joint",
  lineJointType: "linear",
  data: [],
  shape: "circle",
  hide: !1,
  isAnimationActive: !gi.isSsr,
  animationBegin: 0,
  animationDuration: 400,
  animationEasing: "linear"
});
at(Ei, "getComposedData", function(r) {
  var e = r.xAxis, t = r.yAxis, i = r.zAxis, n = r.item, o = r.displayedData, s = r.xAxisTicks, a = r.yAxisTicks, c = r.offset, u = n.props.tooltipType, l = lr(n.props.children, cn), d = ne(e.dataKey) ? n.props.dataKey : e.dataKey, h = ne(t.dataKey) ? n.props.dataKey : t.dataKey, f = i && i.dataKey, g = i ? i.range : Er.defaultProps.range, m = g && g[0], y = e.scale.bandwidth ? e.scale.bandwidth() : 0, x = t.scale.bandwidth ? t.scale.bandwidth() : 0, _ = o.map(function(v, E) {
    var b = fe(v, d), w = fe(v, h), C = !ne(f) && fe(v, f) || "-", O = [{
      name: ne(e.dataKey) ? n.props.name : e.name || e.dataKey,
      unit: e.unit || "",
      value: b,
      payload: v,
      dataKey: d,
      type: u
    }, {
      name: ne(t.dataKey) ? n.props.name : t.name || t.dataKey,
      unit: t.unit || "",
      value: w,
      payload: v,
      dataKey: h,
      type: u
    }];
    C !== "-" && O.push({
      name: i.name || i.dataKey,
      unit: i.unit || "",
      value: C,
      payload: v,
      dataKey: f,
      type: u
    });
    var N = Rt({
      axis: e,
      ticks: s,
      bandSize: y,
      entry: v,
      index: E,
      dataKey: d
    }), D = Rt({
      axis: t,
      ticks: a,
      bandSize: x,
      entry: v,
      index: E,
      dataKey: h
    }), S = C !== "-" ? i.scale(C) : m, P = Math.sqrt(Math.max(S, 0) / Math.PI);
    return Ae(Ae({}, v), {}, {
      cx: N,
      cy: D,
      x: N - P,
      y: D - P,
      xAxis: e,
      yAxis: t,
      zAxis: i,
      width: 2 * P,
      height: 2 * P,
      size: S,
      node: {
        x: b,
        y: w,
        z: C
      },
      tooltipPayload: O,
      tooltipPosition: {
        x: N,
        y: D
      },
      payload: v
    }, l && l[E] && l[E].props);
  });
  return Ae({
    points: _
  }, c);
});
function jt(r) {
  "@babel/helpers - typeof";
  return jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, jt(r);
}
function gh(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function vh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, js(i.key), i);
  }
}
function yh(r, e, t) {
  return e && vh(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function bh(r, e, t) {
  return e = nr(e), xh(r, Is() ? Reflect.construct(e, t || [], nr(r).constructor) : e.apply(r, t));
}
function xh(r, e) {
  if (e && (jt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return wh(r);
}
function wh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Is() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Is = function() {
    return !!r;
  })();
}
function nr(r) {
  return nr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, nr(r);
}
function _h(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Jr(r, e);
}
function Jr(r, e) {
  return Jr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, Jr(r, e);
}
function $s(r, e, t) {
  return e = js(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function js(r) {
  var e = Eh(r, "string");
  return jt(e) == "symbol" ? e : e + "";
}
function Eh(r, e) {
  if (jt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (jt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function Zr() {
  return Zr = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, Zr.apply(this, arguments);
}
function Ch(r) {
  var e = r.xAxisId, t = un(), i = dn(), n = ya(e);
  return n == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(Vt, Zr({}, n, {
      className: we("recharts-".concat(n.axisType, " ").concat(n.axisType), n.className),
      viewBox: {
        x: 0,
        y: 0,
        width: t,
        height: i
      },
      ticksGenerator: function(s) {
        return cr(s, !0);
      }
    }))
  );
}
var Le = /* @__PURE__ */ (function(r) {
  function e() {
    return gh(this, e), bh(this, e, arguments);
  }
  return _h(e, r), yh(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ k.createElement(Ch, this.props);
    }
  }]);
})(k.Component);
$s(Le, "displayName", "XAxis");
$s(Le, "defaultProps", {
  allowDecimals: !0,
  hide: !1,
  orientation: "bottom",
  width: 0,
  height: 30,
  mirror: !1,
  xAxisId: 0,
  tickCount: 5,
  type: "category",
  padding: {
    left: 0,
    right: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1,
  allowDuplicatedCategory: !0
});
function Bt(r) {
  "@babel/helpers - typeof";
  return Bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Bt(r);
}
function Ah(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Oh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, Hs(i.key), i);
  }
}
function Sh(r, e, t) {
  return e && Oh(r.prototype, e), Object.defineProperty(r, "prototype", { writable: !1 }), r;
}
function kh(r, e, t) {
  return e = or(e), Ph(r, Bs() ? Reflect.construct(e, t || [], or(r).constructor) : e.apply(r, t));
}
function Ph(r, e) {
  if (e && (Bt(e) === "object" || typeof e == "function"))
    return e;
  if (e !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Dh(r);
}
function Dh(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Bs() {
  try {
    var r = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Bs = function() {
    return !!r;
  })();
}
function or(r) {
  return or = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, or(r);
}
function Rh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), e && Qr(r, e);
}
function Qr(r, e) {
  return Qr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, n) {
    return i.__proto__ = n, i;
  }, Qr(r, e);
}
function Fs(r, e, t) {
  return e = Hs(e), e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Hs(r) {
  var e = Nh(r, "string");
  return Bt(e) == "symbol" ? e : e + "";
}
function Nh(r, e) {
  if (Bt(r) != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (Bt(i) != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function en() {
  return en = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, en.apply(this, arguments);
}
var Th = function(e) {
  var t = e.yAxisId, i = un(), n = dn(), o = ba(t);
  return o == null ? null : (
    // @ts-expect-error the axisOptions type is not exactly what CartesianAxis is expecting.
    /* @__PURE__ */ k.createElement(Vt, en({}, o, {
      className: we("recharts-".concat(o.axisType, " ").concat(o.axisType), o.className),
      viewBox: {
        x: 0,
        y: 0,
        width: i,
        height: n
      },
      ticksGenerator: function(a) {
        return cr(a, !0);
      }
    }))
  );
}, ke = /* @__PURE__ */ (function(r) {
  function e() {
    return Ah(this, e), kh(this, e, arguments);
  }
  return Rh(e, r), Sh(e, [{
    key: "render",
    value: function() {
      return /* @__PURE__ */ k.createElement(Th, this.props);
    }
  }]);
})(k.Component);
Fs(ke, "displayName", "YAxis");
Fs(ke, "defaultProps", {
  allowDuplicatedCategory: !0,
  allowDecimals: !0,
  hide: !1,
  orientation: "left",
  width: 60,
  height: 0,
  mirror: !1,
  yAxisId: 0,
  tickCount: 5,
  type: "number",
  padding: {
    top: 0,
    bottom: 0
  },
  allowDataOverflow: !1,
  scale: "auto",
  reversed: !1
});
var zh = vi({
  chartName: "LineChart",
  GraphicalChild: gt,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Le
  }, {
    axisType: "yAxis",
    AxisComp: ke
  }],
  formatAxisMap: ur
}), Ws = vi({
  chartName: "BarChart",
  GraphicalChild: yi,
  defaultTooltipEventType: "axis",
  validateTooltipEventTypes: ["axis", "item"],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Le
  }, {
    axisType: "yAxis",
    AxisComp: ke
  }],
  formatAxisMap: ur
}), Lh = vi({
  chartName: "PieChart",
  GraphicalChild: qe,
  validateTooltipEventTypes: ["item"],
  defaultTooltipEventType: "item",
  legendContent: "children",
  axisComponents: [{
    axisType: "angleAxis",
    AxisComp: xa
  }, {
    axisType: "radiusAxis",
    AxisComp: wa
  }],
  formatAxisMap: _a,
  defaultProps: {
    layout: "centric",
    startAngle: 0,
    endAngle: 360,
    cx: "50%",
    cy: "50%",
    innerRadius: 0,
    outerRadius: "80%"
  }
}), Mh = vi({
  chartName: "AreaChart",
  GraphicalChild: Je,
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Le
  }, {
    axisType: "yAxis",
    AxisComp: ke
  }],
  formatAxisMap: ur
}), Ih = vi({
  chartName: "ComposedChart",
  GraphicalChild: [gt, Je, yi, Ei],
  axisComponents: [{
    axisType: "xAxis",
    AxisComp: Le
  }, {
    axisType: "yAxis",
    AxisComp: ke
  }, {
    axisType: "zAxis",
    AxisComp: Er
  }],
  formatAxisMap: ur
});
function Yt(r, e = "12px Inter, sans-serif") {
  const i = document.createElement("canvas").getContext("2d");
  return i ? (i.font = e, i.measureText(r).width) : 0;
}
const Cr = (r) => ({
  dataKey: "x",
  domain: r?.domain,
  tickLine: !1,
  axisLine: !1,
  tickMargin: 8,
  ticks: r?.ticks,
  tickCount: r?.tickCount,
  tickFormatter: r?.tickFormatter
}), mi = (r) => ({
  tickLine: !1,
  axisLine: !1,
  domain: r?.domain,
  tickMargin: 8,
  ticks: r?.ticks,
  tickCount: r?.tickCount,
  tickFormatter: r?.tickFormatter
}), Ci = () => ({
  vertical: !1,
  strokeDasharray: "4"
}), Ai = (r = !1) => ({
  cursor: !0,
  offset: r ? 0 : 20,
  position: {
    y: r ? void 0 : 0,
    x: r ? 120 : void 0
  },
  animationDuration: 100,
  isAnimationActive: !0
});
function Ar(r) {
  return r.map((e) => ({ x: e.label, ...e.values }));
}
const $h = ({ index: r, visibleTicksCount: e, payload: t, tickFormatter: i, ...n }) => {
  const o = r === 0, s = r === e - 1;
  return p(sn, {
    ...n,
    textAnchor: o ? "start" : s ? "end" : "middle",
    children: i?.(t.value, t.index) ?? t.value
  });
}, jh = ({ data: r, dataConfig: e, xAxis: t, yAxis: i, canBeBlurred: n, blurArea: o, lineType: s = "monotoneX", aspect: a, marginTop: c = 0 }, u) => {
  const { enabled: l } = Ea(), d = Object.keys(e), h = Ca(12), f = Ar(r), g = Math.max(...f.flatMap((v) => d.map((E) => Yt(i?.tickFormatter ? i.tickFormatter(`${v[E]}`) : `${v[E]}`)))), m = i?.width ?? g + 20, y = !i?.hide, x = !t?.hide, _ = !n || !l;
  return p(Ft, {
    config: e,
    ref: u,
    aspect: a,
    children: T(Mh, {
      accessibilityLayer: !0,
      data: f,
      className: "overflow-visible [&_.recharts-surface]:overflow-visible",
      margin: {
        top: c
      },
      children: [T("defs", {
        children: [T("linearGradient", {
          id: `${h}-fadeGradient`,
          gradientUnits: "userSpaceOnUse",
          x1: `${y ? m : 0}`,
          y1: "0",
          x2: "100%",
          y2: "0",
          children: [(o === "l" || o === "lr") && T(lt, {
            children: [p("stop", {
              offset: "0%",
              stopColor: "black",
              stopOpacity: "0"
            }), p("stop", {
              offset: "1%",
              stopColor: "white",
              stopOpacity: "0.1"
            }), p("stop", {
              offset: "7%",
              stopColor: "white",
              stopOpacity: "1"
            })]
          }), (o === "r" || o === "lr") && T(lt, {
            children: [p("stop", {
              offset: "93%",
              stopColor: "white",
              stopOpacity: "1"
            }), p("stop", {
              offset: "99%",
              stopColor: "white",
              stopOpacity: "0.1"
            }), p("stop", {
              offset: "100%",
              stopColor: "black",
              stopOpacity: "0"
            })]
          }), !o && T(lt, {
            children: [p("stop", {
              offset: "0%",
              stopColor: "white",
              stopOpacity: "1"
            }), p("stop", {
              offset: "100%",
              stopColor: "white",
              stopOpacity: "1"
            })]
          })]
        }), p("mask", {
          id: `${h}-transparent-edges`,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse",
          children: p("rect", {
            x: "0",
            y: "0",
            width: "100%",
            height: "100%",
            fill: `url(#${h}-fadeGradient)`
          })
        }), d.map((v, E) => T("linearGradient", {
          id: `fill${String(v)}-${h}`,
          x1: "0",
          y1: "0",
          x2: "0",
          y2: "1",
          children: [p("stop", {
            offset: "5%",
            stopColor: e[v].color ? pe(e[v].color) : me(E),
            stopOpacity: 0.8
          }), p("stop", {
            offset: "95%",
            stopColor: e[v].color ? pe(e[v].color) : me(E),
            stopOpacity: 0.1
          })]
        }, E))]
      }), p(Xt, {
        ...Ci(),
        mask: `url(#${h}-transparent-edges)`
      }), x && p(Le, {
        dataKey: "x",
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickFormatter: t?.tickFormatter,
        ticks: t?.ticks,
        domain: t?.domain,
        interval: 0,
        tick: $h
      }), y && p(ke, {
        tickLine: !1,
        axisLine: !1,
        tickMargin: 8,
        tickCount: i?.tickCount,
        tickFormatter: n && l ? () => "**" : i?.tickFormatter,
        ticks: i?.ticks,
        domain: i?.domain,
        width: m
      }), _ && p(Ht, {
        ...Ai(),
        content: p(Wt, {
          indicator: "dot",
          yAxisFormatter: i?.tickFormatter
        })
      }), d.map((v, E) => p(Je, {
        isAnimationActive: !1,
        dataKey: v,
        type: s,
        mask: `url(#${h}-transparent-edges)`,
        fill: `url(#fill${v}-${h})`,
        fillOpacity: e[v].dashed ? 0 : 0.4,
        stroke: e[v].color ? pe(e[v].color) : me(E),
        strokeWidth: 1.5,
        strokeDasharray: e[v].dashed ? "4 4" : void 0
      }, v)), Object.keys(e).length > 1 && p(dr, {
        className: "flex justify-start",
        content: p(hr, {})
      })]
    })
  });
}, Bh = ut(jh), Fh = ({ dataConfig: r, data: e, xAxis: t, yAxis: i = {
  hide: !0
}, label: n = !1, type: o = "simple", hideTooltip: s = !1, hideGrid: a = !1, aspect: c, legend: u, showValueUnderLabel: l = !1, highlightLastBar: d = !1, onClick: h }, f) => {
  const g = Object.keys(r), m = Ar(e).map((x, _, v) => d && g.length === 1 && !r[g[0]]?.color ? {
    ...x,
    fill: _ === v.length - 1 ? me(_) : me(_, 0.5)
  } : x), y = Math.max(...m.flatMap((x) => g.map((_) => Yt(i?.tickFormatter ? i.tickFormatter(`${x[_]}`) : `${x[_]}`))));
  return p(Ft, {
    config: r,
    ref: f,
    aspect: c,
    children: T(Ws, {
      accessibilityLayer: !0,
      data: m,
      margin: {
        left: i && !i.hide ? 0 : 12,
        right: 12,
        top: n ? 24 : 0,
        bottom: l ? 24 : 12
      },
      stackOffset: o === "stacked-by-sign" ? "sign" : void 0,
      onClick: (x) => {
        if (!h || !x.activeLabel || !x.activePayload)
          return;
        const _ = {
          label: x.activeLabel,
          values: {}
        };
        for (const v of x.activePayload)
          _.values[v.name] = v.value;
        h(_);
      },
      children: [!s && p(Ht, {
        ...Ai(),
        content: p(Wt, {
          yAxisFormatter: i.tickFormatter
        })
      }), !a && p(Xt, {
        ...Ci()
      }), p(ke, {
        ...mi(i),
        tick: !0,
        width: i.width ?? y + 20,
        hide: i.hide
      }), p(Le, {
        ...Cr(t),
        hide: t?.hide,
        tick: l ? (x) => {
          const { x: _, y: v, payload: E } = x, b = e.find((O) => O.label === E.value)?.values || "", w = Object.keys(b).length === 1 ? Object.values(b)?.[0] : void 0, C = w !== void 0 && i.tickFormatter ? i.tickFormatter(`${w}`) : w.toLocaleString();
          return T("g", {
            transform: `translate(${_},${v})`,
            children: [p("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: E.value
            }), !!w && p("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: C
            })]
          });
        } : void 0
      }), g.map((x, _) => p(yi, {
        isAnimationActive: !1,
        dataKey: x,
        stackId: o === "stacked" || o === "stacked-by-sign" ? "stack" : void 0,
        fill: d ? (v) => v.fill : r[x].color ? pe(r[x].color) : me(_),
        radius: o === "stacked-by-sign" ? [4, 4, 0, 0] : 4,
        maxBarSize: 32,
        children: n && p(mt, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${x}`)
      }, `bar-${x}`)), u && p(dr, {
        content: p(hr, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, Hh = ut(Fh), Wh = ({ data: r, legend: e = !0, hideTooltip: t = !1 }, i) => {
  const n = r.reduce((o, s) => o + s.value, 0);
  return T(Aa, {
    children: [p("div", {
      className: "w-full",
      ref: i,
      children: p("div", {
        className: "flex h-2 gap-1 overflow-hidden",
        children: r.map((o, s) => {
          const a = o.value / n * 100, c = o.color ? pe(o.color) : me(s), u = (l) => {
            const d = l / n * 100;
            return d % 1 === 0 ? d.toFixed(0) : d.toFixed(1);
          };
          return a === 0 ? null : T(Oa, {
            children: [p(Sa, {
              className: "h-full cursor-default overflow-hidden rounded-2xs",
              style: {
                width: `${a}%`
              },
              title: o.name,
              asChild: !0,
              children: p("div", {
                className: "h-full w-full",
                style: {
                  backgroundColor: c
                },
                role: "img",
                title: o.name,
                tabIndex: 0
              })
            }), !t && T(ka, {
              className: "flex items-center gap-1 text-sm",
              children: [p("div", {
                className: "h-2.5 w-2.5 shrink-0 translate-y-px rounded-full",
                style: {
                  backgroundColor: c
                }
              }), p("span", {
                className: "pl-0.5 pr-2 text-f1-foreground-inverse-secondary dark:text-f1-foreground-secondary",
                children: o.name
              }), T("span", {
                className: "font-mono font-medium tabular-nums text-f1-foreground-inverse dark:text-f1-foreground",
                children: [o.value, " (", u(o.value), "%)"]
              })]
            })]
          }, o.name);
        })
      })
    }), e && p("div", {
      className: "mt-2 flex w-full flex-wrap gap-x-2.5 gap-y-0.5",
      role: "list",
      children: r.map((o, s) => {
        const a = o.color ? pe(o.color) : me(s);
        return T("div", {
          className: "flex items-center gap-1.5",
          role: "listitem",
          children: [p("div", {
            className: "h-2 w-2 shrink-0 rounded-full",
            style: {
              backgroundColor: a
            }
          }), p("span", {
            className: "text-f1-foreground",
            children: o.name
          })]
        }, o.name);
      })
    })]
  });
}, Gh = ut(Wh), Uh = (r) => {
  const e = (t) => {
    const { cx: i, cy: n, fill: o, payload: s } = t, a = () => {
      if (!s) return "-";
      if (s[r] !== void 0)
        return s[r];
      for (const [c, u] of Object.entries(s))
        if (typeof u == "number" && c !== "x")
          return u;
      return "-";
    };
    return p("circle", {
      cx: i,
      cy: n,
      r: 4,
      fill: o,
      stroke: "white",
      strokeWidth: 2,
      ref: (c) => {
        c?.parentElement && c.parentElement.setAttribute("aria-label", `Data point: ${a()}`);
      }
    });
  };
  return e.displayName = `Scatter-${r}`, e;
}, Kh = ({ dataConfig: r, data: e, xAxis: t, yAxis: i = {
  hide: !0
}, label: n = !1, hideTooltip: o = !1, hideGrid: s = !1, aspect: a, legend: c, showValueUnderLabel: u = !1, bar: l, line: d, scatter: h, onClick: f }, g) => {
  const m = Ar(e), y = l?.categories ? Array.isArray(l.categories) ? l.categories : [l.categories] : [], x = d?.categories ? Array.isArray(d.categories) ? d.categories : [d.categories] : [], _ = h?.categories ? Array.isArray(h.categories) ? h.categories : [h.categories] : [], v = [...y, ...x, ..._], E = Math.max(...m.flatMap((C) => v.map((O) => Yt(i?.tickFormatter ? i.tickFormatter(`${C[O]}`) : `${C[O]}`)))), b = [l, d, h].filter((C) => C?.axisPosition === "left"), w = [l, d, h].filter((C) => C?.axisPosition === "right");
  return p(Ft, {
    config: r,
    ref: g,
    aspect: a,
    children: T(Ih, {
      accessibilityLayer: !0,
      data: m,
      margin: {
        left: i && !i.hide ? 0 : 12,
        right: 12,
        top: n ? 24 : 0,
        bottom: u ? 24 : 12
      },
      stackOffset: void 0,
      onClick: (C) => {
        if (!f || !C.activeLabel || !C.activePayload)
          return;
        const O = {
          label: C.activeLabel,
          values: {}
        };
        for (const N of C.activePayload)
          O.values[N.name] = N.value;
        f(O);
      },
      children: [!o && p(Ht, {
        ...Ai(),
        content: p(Wt, {
          yAxisFormatter: i.tickFormatter
        })
      }), !s && p(Xt, {
        ...Ci()
      }), b.length > 0 && p(ke, {
        ...mi(i),
        tick: !0,
        width: i.width ?? E + 20 + (w.length > 0 && b[0]?.axisLabel ? 20 : 0),
        hide: i.hide || b.some((C) => C?.hideAxis),
        label: b[0]?.axisLabel ? {
          value: b[0].axisLabel,
          angle: -90,
          position: "insideLeft"
        } : void 0
      }), w.length > 0 && p(ke, {
        ...mi(i),
        yAxisId: "right",
        orientation: "right",
        tick: !0,
        width: i.width ?? E + 20 + (b.length > 0 && w[0]?.axisLabel ? 20 : 0),
        hide: i.hide || w.some((C) => C?.hideAxis),
        label: w[0]?.axisLabel ? {
          value: w[0].axisLabel,
          angle: 90,
          position: "insideRight"
        } : void 0
      }), p(Le, {
        ...Cr(t),
        hide: t?.hide,
        tick: u ? (C) => {
          const { x: O, y: N, payload: D } = C, S = e.find((M) => M.label === D.value)?.values || "", P = Object.keys(S).length === 1 ? Object.values(S)?.[0] : void 0, R = P !== void 0 && i.tickFormatter ? i.tickFormatter(`${P}`) : P.toLocaleString();
          return T("g", {
            transform: `translate(${O},${N})`,
            children: [p("text", {
              x: 0,
              y: 0,
              dy: 12,
              textAnchor: "middle",
              className: "text-sm font-medium !text-f1-foreground-secondary",
              children: D.value
            }), !!P && p("text", {
              x: 0,
              y: 0,
              dy: 28,
              textAnchor: "middle",
              className: "!fill-f1-foreground text-sm font-medium",
              children: R
            })]
          });
        } : void 0
      }), y.map((C, O) => p(yi, {
        isAnimationActive: !1,
        dataKey: String(C),
        fill: r[C].color ? pe(r[C].color) : me(O),
        radius: 4,
        maxBarSize: 32,
        children: n && p(mt, {
          position: "top",
          offset: 10,
          className: "fill-f1-foreground",
          fontSize: 12
        }, `label-${String(C)}`)
      }, `bar-${String(C)}`)), x.map((C, O) => p(gt, {
        type: d?.lineType ?? "natural",
        dataKey: String(C),
        stroke: r[C].color ? pe(r[C].color) : me(y.length + O),
        strokeWidth: 2,
        dot: d?.dot ?? !1,
        isAnimationActive: !1,
        yAxisId: d?.axisPosition === "right" ? "right" : void 0
      }, `line-${String(C)}`)), _.map((C, O) => p(Ei, {
        dataKey: String(C),
        fill: r[C].color ? pe(r[C].color) : me(y.length + x.length + O),
        r: 4,
        isAnimationActive: !1,
        yAxisId: h?.axisPosition === "right" ? "right" : void 0,
        shape: Uh(String(C))
      }, `scatter-${String(C)}`)), c && p(dr, {
        content: p(hr, {
          nameKey: "label"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, Vh = ut(Kh), Xh = ({ data: r, dataConfig: e, xAxis: t, yAxis: i = {
  hide: !0
}, lineType: n = "natural", aspect: o, hideTooltip: s = !1, hideGrid: a = !1 }, c) => {
  const u = Object.keys(e), l = Ar(r), d = Math.max(...l.flatMap((h) => u.map((f) => Yt(i?.tickFormatter ? i.tickFormatter(`${h[f]}`) : `${h[f]}`))));
  return p(Ft, {
    config: e,
    ref: c,
    aspect: o,
    children: T(zh, {
      accessibilityLayer: !0,
      data: l,
      margin: {
        left: i && !i.hide ? 0 : 12,
        right: 12
      },
      children: [!a && p(Xt, {
        ...Ci()
      }), !t?.hide && p(Le, {
        ...Cr(t)
      }), !i?.hide && p(ke, {
        ...mi(i),
        width: i.width ?? d + 20
      }), !s && p(Ht, {
        ...Ai(),
        content: p(Wt, {
          yAxisFormatter: i?.tickFormatter
        })
      }), u.map((h, f) => p(gt, {
        dataKey: h,
        isAnimationActive: !1,
        type: n,
        stroke: e[h].color ? pe(e[h].color) : me(f),
        strokeWidth: 1.5,
        strokeDasharray: e[h].dashed ? "4 4" : void 0,
        dot: !1
      }, h))]
    })
  });
}, Yh = ut(Xh), qh = ({ data: r, dataConfig: e, overview: t, aspect: i, tickFormatter: n }, o) => {
  const s = r.map((u, l) => ({
    ...u,
    fill: e[u.label]?.color ? pe(e[u.label].color) : me(l)
  })), c = r.map((u) => u.value).reduce((u, l) => u + l);
  return c === 0 && s.push({
    label: "-",
    value: 1,
    fill: "hsl(var(--neutral-2))"
  }), p(Ft, {
    config: e,
    ref: o,
    aspect: i,
    "data-chromatic": "ignore",
    style: {
      height: 380
    },
    children: T(Lh, {
      accessibilityLayer: !0,
      margin: {
        left: 0,
        right: 0
      },
      children: [c !== 0 && p(Ht, {
        isAnimationActive: !1,
        content: p(Wt, {
          yAxisFormatter: n
        })
      }), T(qe, {
        isAnimationActive: !1,
        nameKey: "label",
        legendType: "circle",
        dataKey: "value",
        data: s,
        innerRadius: 120,
        outerRadius: 135,
        paddingAngle: 2.5,
        children: [s.map((u, l) => {
          const d = n ? n(String(u.value)) : u.value;
          return p(cn, {
            fill: u.fill,
            "aria-label": `${u.label}: ${d} (${(u.value / c * 100).toFixed(0)}%)`
          }, `cell-${l}`);
        }), p(ln, {
          content: ({ viewBox: u }) => {
            if (u && "cx" in u && "cy" in u)
              return T("text", {
                x: u.cx,
                y: u.cy,
                textAnchor: "middle",
                dominantBaseline: "middle",
                children: [p("tspan", {
                  x: u.cx,
                  y: (u.cy || 0) + 8,
                  className: "fill-f1-foreground text-4xl font-semibold",
                  children: t?.number ? n ? n(String(t.number)) : t.number : null
                }), p("tspan", {
                  x: u.cx,
                  y: (u.cy || 0) - 16,
                  className: "fill-f1-foreground-secondary",
                  children: t?.label
                })]
              });
          }
        })]
      }), p(dr, {
        content: p(hr, {
          nameKey: "label",
          hiddenKey: "-"
        }),
        align: "center",
        verticalAlign: "bottom",
        layout: "vertical",
        className: "flex-row items-start gap-4 pr-3 pt-2"
      })]
    })
  });
}, Jh = ut(qh), Zh = ({ value: r, max: e = 100, label: t, color: i }, n) => {
  const o = i ? pe(i) : pe("categorical-1"), s = r / e * 100;
  return T("div", {
    className: "flex items-center space-x-2",
    "aria-live": "polite",
    children: [p("div", {
      className: "flex-grow",
      children: p(Pa, {
        color: o,
        value: s,
        className: "w-full",
        "aria-valuemin": 0,
        "aria-valuemax": e,
        "aria-valuenow": r,
        "aria-label": `${s.toFixed(1)}%`
      })
    }), t && p("div", {
      className: "flex-shrink-0 text-sm font-medium",
      children: t
    })]
  });
}, Qh = ut(Zh);
function ef(r) {
  return r.map((e) => ({ x: e.label, ...e.values }));
}
const tf = (r) => {
  const e = Da.cloneDeep(r);
  let t = "", i = 0;
  return e.forEach((n) => {
    delete n.x, Object.entries(n).forEach(([o, s]) => {
      i < s && (i = s, t = o);
    });
  }), t;
}, rf = ({ dataConfig: r, data: e, xAxis: t = {
  hide: !0
}, yAxis: i, label: n = !1, aspect: o, hideTooltip: s = !1, hideGrid: a = !1, showRatio: c = !1, valueFormatter: u }, l) => {
  const d = Object.keys(r), h = ef(e), f = Math.max(...h.map((x) => Yt(`${x.x}`))), g = d.reduce((x, _) => (x[_] = e.reduce((v, E) => v + E.values[_], 0), x), {}), m = {
    ...Cr(t),
    type: "number",
    dataKey: tf(h)
  }, y = {
    ...mi(i),
    type: "category",
    dataKey: "x"
  };
  return p(Ft, {
    config: r,
    ref: l,
    aspect: o,
    children: T(Ws, {
      layout: "vertical",
      accessibilityLayer: !0,
      data: h,
      margin: {
        left: i && !i.hide ? 8 : 12,
        right: n || c ? 100 : 0
      },
      children: [!s && p(Ht, {
        ...Ai(!0),
        content: p(Wt, {
          yAxisFormatter: i?.tickFormatter
        })
      }), !a && p(Xt, {
        ...Ci(),
        vertical: !0,
        horizontal: !1
      }), p(Le, {
        ...m,
        hide: t?.hide
      }), p(ke, {
        ...y,
        hide: i?.hide,
        width: i?.width ?? f + 20
      }), d.map((x, _) => p(lt, {
        children: p(yi, {
          isAnimationActive: !1,
          layout: "vertical",
          dataKey: x,
          fill: r[x].color ? pe(r[x].color) : me(_),
          radius: 4,
          maxBarSize: 24,
          children: (n || c) && p(mt, {
            position: "right",
            offset: 10,
            className: "fill-f1-foreground",
            fontSize: 12,
            formatter: u,
            content: c ? p(of, {
              valueFormatter: u,
              total: g[x],
              showLabel: n
            }) : void 0
          }, `label-{${x}}`)
        }, `bar-${x}`)
      }))]
    })
  });
}, nf = ut(rf), of = ({ viewBox: r, offset: e = 0, value: t, valueFormatter: i, total: n, showLabel: o }) => {
  const { x: s = 0, y: a = 0, width: c = 0, height: u = 0 } = r, l = s + c + e, d = a + u / 2, h = i ? i(t) : t, f = Yt(`${h}`), g = n > 0 ? Math.round(Number(t) / n * 100) : 0;
  return T("g", {
    transform: `translate(${l},${d + 4})`,
    children: [o && p("text", {
      x: 0,
      textAnchor: "start",
      className: "fill-f1-foreground-secondary text-sm font-medium",
      children: h
    }), T("text", {
      x: o ? f + 8 : 0,
      textAnchor: "start",
      className: "fill-f1-foreground text-sm font-medium",
      children: [g, "%"]
    })]
  });
}, kf = ze(
  {
    name: "AreaChart",
    type: "info"
  },
  Bh
), Pf = ze(
  {
    name: "BarChart",
    type: "info"
  },
  Hh
), Df = ze(
  {
    name: "CategoryBarChart",
    type: "info"
  },
  Gh
), Rf = ze(
  {
    name: "LineChart",
    type: "info"
  },
  Yh
), Nf = ze(
  {
    name: "PieChart",
    type: "info"
  },
  Jh
), Tf = ze(
  {
    name: "VerticalBarChart",
    type: "info"
  },
  nf
), zf = ze(
  {
    name: "ProgressBarChart",
    type: "info"
  },
  Qh
), Lf = ze(
  {
    name: "ComboChart",
    type: "info"
  },
  Vh
), sf = (r) => typeof r == "boolean" || !r ? {
  show: !!r,
  invertStatus: !1
} : {
  show: r.show ?? !0,
  invertStatus: r.invertStatus ?? !1
}, Gs = ({ label: r, ...e }) => {
  const t = Ra(), i = t(e.value, {
    formatterOptions: {
      decimalPlaces: 2
    }
  }), n = sf(e.trend), o = t(e.comparison), s = Na(i.numericValue, i.formatterOptions), a = Mn(o.numericValue), c = Mn(i.numericValue), u = j(() => {
    if (!(!a || !n.show) && !(!a || !c))
      return (c - a) / a * 100;
  }, [c, a, n.show]);
  return T("div", {
    className: "flex flex-col gap-2",
    children: [r && p("div", {
      children: r
    }), T("div", {
      className: "flex flex-row flex-wrap items-center gap-2",
      children: [p("span", {
        className: "font-bold text-2xl",
        children: s
      }), a !== void 0 && p(Ta, {
        percentage: u,
        amount: o,
        invertStatus: n.invertStatus,
        hint: e.comparisonHint
      })]
    })]
  });
}, af = () => T("div", {
  className: "relative flex h-full w-full cursor-progress flex-col gap-2",
  children: [p(je, {
    className: "h-3 w-full max-w-16 rounded-md"
  }), T("div", {
    className: "flex flex-row flex-wrap items-end gap-2",
    children: [p(je, {
      className: "h-8 w-full max-w-36 rounded-sm"
    }), p(je, {
      className: "h-6 w-full max-w-18 rounded-sm"
    })]
  })]
});
Gs.displayName = "F0BigNumber";
const lf = xo(Gs, af), Mf = Be("F0BigNumber", lf), If = za.filter(
  (r) => r !== "ai"
), $f = Oo, jf = ["default", "outline", "neutral"], Bf = Oo, Ff = ["sm", "md", "lg"], Hf = ["compact", "expanded"], Wf = La, Gf = [
  "viridian",
  "malibu",
  "yellow",
  "purple",
  "lilac",
  "barbie",
  "smoke",
  "army",
  "flubber",
  "indigo",
  "camel"
], tn = ({ count: r, list: e }) => {
  const [t, i] = F(!1), n = p($i, {
    label: `+${r}`
  });
  return e?.length ? T(So, {
    open: t,
    onOpenChange: i,
    children: [p(ko, {
      asChild: !0,
      children: p("button", {
        className: Ma("inline-flex flex-shrink-0 items-center"),
        children: n
      })
    }), p(Po, {
      className: "rounded-md border border-solid border-f1-border-secondary p-1 shadow-md",
      align: "end",
      children: T(Do, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[172px] flex-col",
        children: [e.map((o, s) => p("div", {
          className: "flex w-[220px] min-w-0 items-center gap-1.5 px-2 py-1 [&:first-child]:pt-2 [&:last-child]:pb-2",
          children: p($i, {
            ...o
          })
        }, s)), p(Ro, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })
    })]
  }) : n;
};
tn.displayName = "ChipCounter";
const Us = ({ chips: r, max: e = 4, remainingCount: t, layout: i = "compact" }) => {
  if (i === "fill")
    return p(Ia, {
      items: r,
      renderListItem: (c) => p($i, {
        ...c
      }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: t !== void 0,
      renderOverflowIndicator: (c) => p(tn, {
        count: (t ?? 0) + c,
        list: t ? void 0 : r.slice(r.length - c)
      }),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    });
  const n = r.slice(0, e), o = r.slice(e), s = t ?? r.length - e, a = s > 0;
  return T("div", {
    className: "flex items-center gap-2",
    children: [n.map((c, u) => p($i, {
      ...c
    }, u)), a && p(tn, {
      count: s,
      list: t ? void 0 : o
    })]
  });
};
Us.displayName = "F0ChipList";
const Uf = Be("F0ChipList", Us), Kf = $a, cf = _e((r, e) => p(mn, {
  ref: e,
  variant: "heading",
  ...r
}));
cf.displayName = "F0Heading";
const Vf = Be(
  "F0GridStack",
  pn
), uf = ({ benefits: r }) => p("div", {
  className: "flex flex-col gap-2",
  children: r.map((e, t) => p(df, {
    text: e
  }, t))
}), df = ({ text: r }) => T("div", {
  className: "flex flex-row items-start gap-2",
  children: [p(wo, {
    icon: Fa,
    size: "md",
    className: "text-f1-icon-positive"
  }), p("span", {
    children: r
  })]
}), Ks = _e(({ title: r, image: e, benefits: t, actions: i, withShadow: n = !0, module: o, moduleName: s, tag: a, promoTag: c }, u) => T("div", {
  ref: u,
  className: X("bg-white flex flex-row rounded-xl border border-f1-border-secondary", n && "shadow-md"),
  children: [p("div", {
    className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
    children: p("img", {
      src: e,
      alt: "",
      className: "h-full w-full rounded-lg object-cover"
    })
  }), T("div", {
    className: "flex flex-col justify-center gap-8 px-8 py-5",
    children: [T("div", {
      className: "flex flex-col gap-5",
      children: [T("div", {
        className: "flex flex-col gap-2",
        children: [T("div", {
          className: "flex flex-row items-center gap-2",
          children: [o && p(No, {
            module: o
          }), s && p("p", {
            className: "text-base font-medium text-f1-foreground",
            children: s
          })]
        }), (a || c) && T("div", {
          className: "flex justify-start gap-2",
          children: [a && p(ja, {
            icon: a.icon,
            text: a.label
          }), c && p(Ba, {
            variant: c.variant || "positive",
            text: c.label
          })]
        }), p("h2", {
          className: "font-bold text-xl text-f1-foreground",
          children: r
        })]
      }), p(uf, {
        benefits: t
      })]
    }), i && p("div", {
      className: "flex gap-3",
      children: i
    })]
  })]
}));
Ks.displayName = "ProductBlankslate";
function hf({ isOpen: r, onClose: e, title: t, children: i, module: n, portalContainer: o }) {
  const [s, a] = F(r);
  return $(() => {
    a(r);
  }, [r]), p(Ha, {
    open: s,
    onOpenChange: (u) => {
      a(u), u || e();
    },
    modal: !0,
    children: T(Wa, {
      className: "max-h-[620px] w-[760px] overflow-y-auto overflow-x-hidden bg-f1-background",
      container: o,
      children: [T("div", {
        className: "flex flex-row items-center justify-between px-4 py-4",
        children: [T(Ga, {
          className: "flex flex-row items-center gap-2 text-lg font-semibold text-f1-foreground",
          children: [n && p(No, {
            module: n,
            size: "lg"
          }), t]
        }), p(on, {
          variant: "outline",
          icon: To,
          onClick: e,
          label: "Close modal",
          hideLabel: !0
        })]
      }), T(Do, {
        className: "[*[data-state=visible]_div]:bg-f1-background flex max-h-[512px] flex-col",
        children: [i, p(Ro, {
          orientation: "vertical",
          className: "[&_div]:bg-f1-background"
        })]
      })]
    })
  });
}
function Xf({ isOpen: r, onClose: e, title: t, image: i, benefits: n, errorMessage: o, successMessage: s, loadingState: a, nextSteps: c, closeLabel: u, primaryAction: l, modalTitle: d, modalModule: h, secondaryAction: f, portalContainer: g, tag: m, promoTag: y, showResponseDialog: x = !0 }) {
  const [_, v] = F(r), [E, b] = F(null), [w, C] = F(!1), O = async () => {
    if (l?.onClick) {
      C(!0);
      try {
        await l.onClick(), v(!1), x && b("success");
      } catch {
        x && b("error");
      } finally {
        C(!1);
      }
    }
  }, N = () => {
    v(!1), e?.();
  }, D = w;
  return T(lt, {
    children: [p(hf, {
      isOpen: _,
      onClose: N,
      title: d,
      module: h,
      portalContainer: g,
      children: p("div", {
        className: "pb-4 pl-4",
        children: p(Ks, {
          title: t,
          image: i,
          benefits: n,
          withShadow: !1,
          tag: m,
          promoTag: y,
          actions: T("div", {
            className: "flex gap-3",
            children: [l && p(Nt, {
              variant: l.variant,
              label: D ? a.label : l.label,
              icon: l.icon || void 0,
              onClick: O,
              loading: l.loading,
              size: l.size
            }), f && p(Nt, {
              onClick: f.onClick,
              label: f.label,
              variant: f.variant,
              size: f.size,
              icon: f.icon
            })]
          })
        })
      })
    }), E && x && p(zo, {
      open: !0,
      onClose: () => {
        N(), b(null);
      },
      success: E === "success",
      errorMessage: o,
      successMessage: s,
      nextSteps: c,
      closeLabel: u,
      portalContainer: g
    })]
  });
}
function ff({ mediaUrl: r, title: e, description: t, onClose: i, dismissible: n, width: o, trackVisibility: s, actions: a, showConfirmation: c = !0 }) {
  const [u, l] = F(!1), d = () => {
    l(!0), i && i();
  };
  $(() => {
    s && s(!u);
  }, [s, u]);
  const h = r?.includes(".mp4");
  return p(lt, {
    children: u ? null : T(Ua, {
      style: {
        width: o
      },
      className: "relative bg-f1-background p-1",
      children: [T(Ka, {
        children: [n && p("div", {
          className: "absolute right-2 top-2 z-10",
          children: p(Nt, {
            variant: "ghost",
            icon: To,
            size: "sm",
            hideLabel: !0,
            onClick: d,
            label: "Close"
          })
        }), T("div", {
          children: [p("div", {
            children: r && (h ? p("video", {
              src: r,
              autoPlay: !0,
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: "h-full w-full rounded-md"
            }) : p("img", {
              src: r,
              alt: e,
              className: "h-full w-full rounded-md"
            }))
          }), T("div", {
            className: "flex flex-col gap-[2px] p-3",
            children: [p(In, {
              className: "text-lg font-medium",
              children: e
            }), p(In, {
              className: "line-clamp-3 text-base font-normal text-f1-foreground-secondary",
              children: t
            })]
          })]
        })]
      }), a && p(Va, {
        className: "p-3",
        children: a.map((f) => f.type === "upsell" ? p(Lo, {
          label: f.label,
          onRequest: f.onClick,
          errorMessage: f.errorMessage,
          successMessage: f.successMessage,
          loadingState: f.loadingState,
          nextSteps: f.nextSteps,
          closeLabel: f.closeLabel,
          showConfirmation: c && f.showConfirmation,
          variant: f.variant
        }, f.label) : p(Nt, {
          label: f.label,
          onClick: f.onClick,
          variant: f.variant
        }, f.label))
      })]
    })
  });
}
const pf = _e(function({ primaryAction: e, secondaryAction: t, ...i }, n) {
  const o = (c) => c.variant === "promote" ? p(Lo, {
    label: c.label,
    onRequest: async () => {
      await c.onClick();
    },
    errorMessage: c.errorMessage,
    successMessage: c.successMessage,
    loadingState: c.loadingState,
    nextSteps: c.nextSteps,
    closeLabel: c.closeLabel,
    showIcon: c.showIcon,
    showConfirmation: c.showConfirmation,
    variant: c.variant
  }) : p(Nt, {
    onClick: c.onClick,
    label: c.label,
    variant: c.variant || "default",
    size: "md",
    icon: c.icon
  }), s = e?.variant !== "promote" ? e : void 0, a = t?.variant !== "promote" ? t : void 0;
  return T(Xa, {
    ref: n,
    ...i,
    primaryAction: s,
    secondaryAction: a,
    children: [e?.variant === "promote" && o(e), t?.variant === "promote" && o(t)]
  });
});
pf.displayName = "UpsellingBanner";
function Yf({ isOpen: r, setIsOpen: e, label: t, variant: i = "promote", size: n = "md", showIcon: o = !0, side: s = "right", align: a = "center", icon: c = Ya, mediaUrl: u, title: l, description: d, width: h = "300px", trackVisibility: f, actions: g, onClick: m, hideLabel: y = !1 }) {
  const [x, _] = F(!1), [v, E] = F(null), [b, w] = F(null), C = (P) => {
    e(P), m && m();
  }, O = async (P) => {
    if (P.type === "upsell") {
      w(P);
      try {
        await P.onClick(), P.showConfirmation && (_(!0), E("success"));
      } catch {
        _(!0), E("error");
      }
    }
  }, N = () => {
    E(null), _(!1), w(null), e(!1);
  }, D = r && !x, S = g?.map((P) => P.type === "upsell" ? {
    ...P,
    onClick: () => O(P)
  } : P);
  return T(lt, {
    children: [T(So, {
      open: D,
      onOpenChange: C,
      children: [p(ko, {
        asChild: !0,
        children: p(Nt, {
          variant: i,
          label: t,
          size: n,
          icon: o ? c : void 0,
          onClick: () => e(r),
          hideLabel: y
        })
      }), p(Po, {
        side: s,
        align: a,
        className: "w-fit border-none bg-transparent p-2 shadow-none",
        children: p(ff, {
          mediaUrl: u,
          title: l,
          description: d,
          onClose: () => e(!1),
          dismissible: !1,
          width: h,
          trackVisibility: f,
          actions: S,
          showConfirmation: !1
        })
      })]
    }), b?.type === "upsell" && b.showConfirmation && v && p(zo, {
      open: !0,
      onClose: N,
      success: v === "success",
      errorMessage: b.errorMessage,
      successMessage: b.successMessage,
      nextSteps: b.nextSteps,
      closeLabel: b.closeLabel,
      portalContainer: null
    })]
  });
}
const mf = Ye(null), gf = ({ children: r, fullScreen: e = !0 }) => {
  const t = I(null), [i, n] = F(t.current);
  return ol(() => {
    n(t.current);
  }, []), p(mf.Provider, {
    value: {
      element: i
    },
    children: p("div", {
      ref: t,
      id: "f0-layout",
      className: X({
        "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]": e
      }),
      children: r
    })
  });
}, vf = ({ children: r }) => p(nl, {
  reducedMotion: "user",
  children: r
}), qf = ({ children: r, layout: e, link: t, privacyModeInitiallyEnabled: i, image: n, i18n: o, l10n: s, isDev: a = !1, dataCollectionStorageHandler: c, showExperimentalWarnings: u = !1 }) => p(vf, {
  children: p(qa, {
    isDev: a,
    showExperimentalWarnings: u,
    children: p(Ja, {
      ...s,
      children: p(Za, {
        ...o,
        children: p(Qa, {
          ...t,
          children: p(gf, {
            ...e,
            children: p(el, {
              children: p(tl, {
                initiallyEnabled: i,
                children: p(il, {
                  ...n,
                  children: p(rl, {
                    handler: c,
                    children: r
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}), vo = (r) => `datacollection-${r}`, Jf = {
  get: async (r) => JSON.parse(
    localStorage.getItem(vo(r)) ?? "{}"
  ),
  set: async (r, e) => {
    localStorage.setItem(vo(r), JSON.stringify(e));
  }
}, Zf = 1;
export {
  kf as AreaChart,
  tp as Await,
  Pf as BarChart,
  Df as CategoryBarChart,
  Lf as ComboChart,
  Ef as Dashboard,
  ip as DndProvider,
  rp as EmojiImage,
  np as F0Avatar,
  op as F0AvatarAlert,
  sp as F0AvatarCompany,
  ap as F0AvatarDate,
  lp as F0AvatarEmoji,
  cp as F0AvatarFile,
  up as F0AvatarIcon,
  dp as F0AvatarList,
  No as F0AvatarModule,
  hp as F0AvatarPerson,
  fp as F0AvatarTeam,
  Mf as F0BigNumber,
  Nt as F0Button,
  pp as F0ButtonDropdown,
  mp as F0ButtonToggle,
  gp as F0Card,
  vp as F0Checkbox,
  Uf as F0ChipList,
  yp as F0DatePicker,
  bp as F0EventCatcherProvider,
  Vf as F0GridStack,
  cf as F0Heading,
  wo as F0Icon,
  xp as F0Link,
  qf as F0Provider,
  wp as F0Select,
  _p as F0TagAlert,
  Ta as F0TagBalance,
  Ep as F0TagCompany,
  Cp as F0TagDot,
  Ap as F0TagList,
  Op as F0TagPerson,
  ja as F0TagRaw,
  Ba as F0TagStatus,
  Sp as F0TagTeam,
  Uo as F0Text,
  kp as GROUP_ID_SYMBOL,
  Sf as HomeLayout,
  Cf as Layout,
  Rf as LineChart,
  Pp as OneFilterPicker,
  Nf as PieChart,
  tl as PrivacyModeProvider,
  Ks as ProductBlankslate,
  Dp as ProductCard,
  Xf as ProductModal,
  ff as ProductWidget,
  zf as ProgressBarChart,
  Af as StandardLayout,
  Rp as Tag,
  Np as TagCounter,
  Of as TwoColumnLayout,
  zo as UpsellRequestResponseDialog,
  pf as UpsellingBanner,
  Lo as UpsellingButton,
  Yf as UpsellingPopover,
  Tf as VerticalBarChart,
  _f as avatarVariants,
  Tp as buildTranslations,
  Bf as buttonDropdownSizes,
  jf as buttonDropdownVariants,
  $f as buttonSizes,
  Ff as buttonToggleSizes,
  Hf as buttonToggleVariants,
  If as buttonVariants,
  zp as createAtlaskitDriver,
  Lp as createDataSourceDefinition,
  Dl as createPageLayoutBlock,
  Rl as createPageLayoutBlockGroup,
  Jf as dataCollectionLocalStorageHandler,
  Kf as datepickerSizes,
  tm as defaultTranslations,
  Be as experimental,
  Mp as getAnimationVariants,
  Ip as getDataSourcePaginationType,
  $p as getEmojiLabel,
  jp as isInfiniteScrollPagination,
  Bp as isPageBasedPagination,
  Wf as linkVariants,
  Fp as modules,
  Hp as predefinedPresets,
  Wp as selectSizes,
  Gf as tagDotColors,
  Zf as test,
  Gp as useData,
  Up as useDataSource,
  Kp as useDndEvents,
  Vp as useDraggable,
  Xp as useDroppableList,
  Yp as useEmojiConfetti,
  qp as useGroups,
  Ea as usePrivacyMode,
  Jp as useReducedMotion,
  Zp as useSelectable,
  Qp as useXRay
};
