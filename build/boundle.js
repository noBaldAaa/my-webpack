(() => {
  var e = {
      5: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => c });
        var n = r(81),
          o = r.n(n),
          a = r(645),
          s = r.n(a)()(o());
        s.push([e.id, ".content{\n    color: red;\n}", ""]);
        const c = s;
      },
      645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var r = "",
                  n = void 0 !== t[5];
                return (
                  t[4] && (r += "@supports (".concat(t[4], ") {")),
                  t[2] && (r += "@media ".concat(t[2], " {")),
                  n &&
                    (r += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {"
                    )),
                  (r += e(t)),
                  n && (r += "}"),
                  t[2] && (r += "}"),
                  t[4] && (r += "}"),
                  r
                );
              }).join("");
            }),
            (t.i = function (e, r, n, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (n)
                for (var c = 0; c < this.length; c++) {
                  var i = this[c][0];
                  null != i && (s[i] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (n && s[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  r &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = r))
                      : (l[2] = r)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      81: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      379: (e) => {
        "use strict";
        var t = [];
        function r(e) {
          for (var r = -1, n = 0; n < t.length; n++)
            if (t[n].identifier === e) {
              r = n;
              break;
            }
          return r;
        }
        function n(e, n) {
          for (var a = {}, s = [], c = 0; c < e.length; c++) {
            var i = e[c],
              u = n.base ? i[0] + n.base : i[0],
              l = a[u] || 0,
              p = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var d = r(p),
              f = {
                css: i[1],
                media: i[2],
                sourceMap: i[3],
                supports: i[4],
                layer: i[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(f);
            else {
              var v = o(f, n);
              (n.byIndex = c),
                t.splice(c, 0, { identifier: p, updater: v, references: 1 });
            }
            s.push(p);
          }
          return s;
        }
        function o(e, t) {
          var r = t.domAPI(t);
          return (
            r.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                r.update((e = t));
              } else r.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = n((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var s = 0; s < a.length; s++) {
              var c = r(a[s]);
              t[c].references--;
            }
            for (var i = n(e, o), u = 0; u < a.length; u++) {
              var l = r(a[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = i;
          };
        };
      },
      569: (e) => {
        "use strict";
        var t = {};
        e.exports = function (e, r) {
          var n = (function (e) {
            if (void 0 === t[e]) {
              var r = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                r instanceof window.HTMLIFrameElement
              )
                try {
                  r = r.contentDocument.head;
                } catch (e) {
                  r = null;
                }
              t[e] = r;
            }
            return t[e];
          })(e);
          if (!n)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          n.appendChild(r);
        };
      },
      216: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      565: (e, t, r) => {
        "use strict";
        e.exports = function (e) {
          var t = r.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      795: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = e.insertStyleElement(e);
          return {
            update: function (r) {
              !(function (e, t, r) {
                var n = "";
                r.supports && (n += "@supports (".concat(r.supports, ") {")),
                  r.media && (n += "@media ".concat(r.media, " {"));
                var o = void 0 !== r.layer;
                o &&
                  (n += "@layer".concat(
                    r.layer.length > 0 ? " ".concat(r.layer) : "",
                    " {"
                  )),
                  (n += r.css),
                  o && (n += "}"),
                  r.media && (n += "}"),
                  r.supports && (n += "}");
                var a = r.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (n +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */"
                    )),
                  t.styleTagTransform(n, e, t.options);
              })(t, e, r);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
      589: (e) => {
        "use strict";
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      880: (e) => {
        e.exports = { formatPrice: () => "100.00" };
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { id: n, exports: {} });
    return e[n](a, a.exports, r), a.exports;
  }
  (r.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return r.d(t, { a: t }), t;
  }),
    (r.d = (e, t) => {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      var e = r(379),
        t = r.n(e),
        n = r(795),
        o = r.n(n),
        a = r(569),
        s = r.n(a),
        c = r(565),
        i = r.n(c),
        u = r(216),
        l = r.n(u),
        p = r(589),
        d = r.n(p),
        f = r(5),
        v = {};
      (v.styleTagTransform = d()),
        (v.setAttributes = i()),
        (v.insert = s().bind(null, "head")),
        (v.domAPI = o()),
        (v.insertStyleElement = l()),
        t()(f.Z, v),
        f.Z && f.Z.locals && f.Z.locals,
        document.body.append(
          (() => {
            const e = document.createElement("div");
            return (
              (e.innerHTML = "hello webpack"), (e.className = "content"), e
            );
          })()
        );
      const { formatPrice: m } = r(880);
      console.log(3), console.log(4), console.log(m());
    })();
})();
