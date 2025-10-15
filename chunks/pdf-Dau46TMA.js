var ce = {
  /***/
  1782: (
    /***/
    ((w, D, t) => {
      var s = t(7316), g = t(9762), u = TypeError;
      w.exports = function(A) {
        if (s(A))
          return A;
        throw new u(g(A) + " is not a function");
      };
    })
  ),
  /***/
  4958: (
    /***/
    ((w, D, t) => {
      var s = t(7316), g = String, u = TypeError;
      w.exports = function(A) {
        if (typeof A == "object" || s(A))
          return A;
        throw new u("Can't set " + g(A) + " as a prototype");
      };
    })
  ),
  /***/
  5690: (
    /***/
    ((w, D, t) => {
      var s = t(23).has;
      w.exports = function(g) {
        return s(g), g;
      };
    })
  ),
  /***/
  5834: (
    /***/
    ((w, D, t) => {
      var s = t(2658), g = TypeError;
      w.exports = function(u, A) {
        if (s(A, u))
          return u;
        throw new g("Incorrect invocation");
      };
    })
  ),
  /***/
  4719: (
    /***/
    ((w, D, t) => {
      var s = t(7633), g = String, u = TypeError;
      w.exports = function(A) {
        if (s(A))
          return A;
        throw new u(g(A) + " is not an object");
      };
    })
  ),
  /***/
  5115: (
    /***/
    ((w) => {
      w.exports = typeof ArrayBuffer < "u" && typeof DataView < "u";
    })
  ),
  /***/
  7585: (
    /***/
    ((w, D, t) => {
      var s = t(1299), g = t(8374), u = TypeError;
      w.exports = s(ArrayBuffer.prototype, "byteLength", "get") || function(A) {
        if (g(A) !== "ArrayBuffer")
          throw new u("ArrayBuffer expected");
        return A.byteLength;
      };
    })
  ),
  /***/
  582: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = t(7585), u = s(ArrayBuffer.prototype.slice);
      w.exports = function(A) {
        if (g(A) !== 0)
          return !1;
        try {
          return u(A, 0, 0), !1;
        } catch {
          return !0;
        }
      };
    })
  ),
  /***/
  4358: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(8403), u = t(1299), A = t(9548), b = t(582), x = t(7585), p = t(8126), m = t(4837), o = s.structuredClone, l = s.ArrayBuffer, c = s.DataView, r = s.TypeError, f = Math.min, e = l.prototype, i = c.prototype, y = g(e.slice), T = u(e, "resizable", "get"), E = u(e, "maxByteLength", "get"), R = g(i.getInt8), L = g(i.setInt8);
      w.exports = (m || p) && function(M, $, j) {
        var K = x(M), Q = $ === void 0 ? K : A($), J = !T || !T(M), at;
        if (b(M))
          throw new r("ArrayBuffer is detached");
        if (m && (M = o(M, { transfer: [M] }), K === Q && (j || J)))
          return M;
        if (K >= Q && (!j || J))
          at = y(M, 0, Q);
        else {
          var ut = j && !J && E ? { maxByteLength: E(M) } : void 0;
          at = new l(Q, ut);
          for (var ht = new c(M), _ = new c(at), Z = f(Q, K), z = 0; z < Z; z++)
            L(_, z, R(ht, z));
        }
        return m || p(M), at;
      };
    })
  ),
  /***/
  5861: (
    /***/
    ((w, D, t) => {
      var s = t(5115), g = t(940), u = t(9298), A = t(7316), b = t(7633), x = t(936), p = t(8329), m = t(9762), o = t(9293), l = t(7041), c = t(9691), r = t(2658), f = t(2176), e = t(9763), i = t(2292), y = t(7561), T = t(1649), E = T.enforce, R = T.get, L = u.Int8Array, M = L && L.prototype, $ = u.Uint8ClampedArray, j = $ && $.prototype, K = L && f(L), Q = M && f(M), J = Object.prototype, at = u.TypeError, ut = i("toStringTag"), ht = y("TYPED_ARRAY_TAG"), _ = "TypedArrayConstructor", Z = s && !!e && p(u.opera) !== "Opera", z = !1, V, nt, ot, lt = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
      }, vt = {
        BigInt64Array: 8,
        BigUint64Array: 8
      }, Tt = function(S) {
        if (!b(S))
          return !1;
        var C = p(S);
        return C === "DataView" || x(lt, C) || x(vt, C);
      }, St = function(d) {
        var S = f(d);
        if (b(S)) {
          var C = R(S);
          return C && x(C, _) ? C[_] : St(S);
        }
      }, tt = function(d) {
        if (!b(d))
          return !1;
        var S = p(d);
        return x(lt, S) || x(vt, S);
      }, v = function(d) {
        if (tt(d))
          return d;
        throw new at("Target is not a typed array");
      }, h = function(d) {
        if (A(d) && (!e || r(K, d)))
          return d;
        throw new at(m(d) + " is not a typed array constructor");
      }, n = function(d, S, C, P) {
        if (g) {
          if (C)
            for (var F in lt) {
              var O = u[F];
              if (O && x(O.prototype, d))
                try {
                  delete O.prototype[d];
                } catch {
                  try {
                    O.prototype[d] = S;
                  } catch {
                  }
                }
            }
          (!Q[d] || C) && l(Q, d, C ? S : Z && M[d] || S, P);
        }
      }, a = function(d, S, C) {
        var P, F;
        if (g) {
          if (e) {
            if (C) {
              for (P in lt)
                if (F = u[P], F && x(F, d))
                  try {
                    delete F[d];
                  } catch {
                  }
            }
            if (!K[d] || C)
              try {
                return l(K, d, C ? S : Z && K[d] || S);
              } catch {
              }
            else
              return;
          }
          for (P in lt)
            F = u[P], F && (!F[d] || C) && l(F, d, S);
        }
      };
      for (V in lt)
        nt = u[V], ot = nt && nt.prototype, ot ? E(ot)[_] = nt : Z = !1;
      for (V in vt)
        nt = u[V], ot = nt && nt.prototype, ot && (E(ot)[_] = nt);
      if ((!Z || !A(K) || K === Function.prototype) && (K = function() {
        throw new at("Incorrect invocation");
      }, Z))
        for (V in lt)
          u[V] && e(u[V], K);
      if ((!Z || !Q || Q === J) && (Q = K.prototype, Z))
        for (V in lt)
          u[V] && e(u[V].prototype, Q);
      if (Z && f(j) !== Q && e(j, Q), g && !x(Q, ut)) {
        z = !0, c(Q, ut, {
          configurable: !0,
          get: function() {
            return b(this) ? this[ht] : void 0;
          }
        });
        for (V in lt)
          u[V] && o(u[V], ht, V);
      }
      w.exports = {
        NATIVE_ARRAY_BUFFER_VIEWS: Z,
        TYPED_ARRAY_TAG: z && ht,
        aTypedArray: v,
        aTypedArrayConstructor: h,
        exportTypedArrayMethod: n,
        exportTypedArrayStaticMethod: a,
        getTypedArrayConstructor: St,
        isView: Tt,
        isTypedArray: tt,
        TypedArray: K,
        TypedArrayPrototype: Q
      };
    })
  ),
  /***/
  7003: (
    /***/
    ((w, D, t) => {
      var s = t(451);
      w.exports = function(g, u, A) {
        for (var b = 0, x = arguments.length > 2 ? A : s(u), p = new g(x); x > b; )
          p[b] = u[b++];
        return p;
      };
    })
  ),
  /***/
  9773: (
    /***/
    ((w, D, t) => {
      var s = t(4115), g = t(6985), u = t(451), A = function(b) {
        return function(x, p, m) {
          var o = s(x), l = u(o), c = g(m, l), r;
          if (b && p !== p) {
            for (; l > c; )
              if (r = o[c++], r !== r)
                return !0;
          } else
            for (; l > c; c++)
              if ((b || c in o) && o[c] === p)
                return b || c || 0;
          return !b && -1;
        };
      };
      w.exports = {
        includes: A(!0),
        indexOf: A(!1)
      };
    })
  ),
  /***/
  4026: (
    /***/
    ((w, D, t) => {
      var s = t(7789), g = t(3622), u = t(2007), A = t(451), b = function(x) {
        var p = x === 1;
        return function(m, o, l) {
          for (var c = u(m), r = g(c), f = A(r), e = s(o, l), i, y; f-- > 0; )
            if (i = r[f], y = e(i, f, c), y)
              switch (x) {
                case 0:
                  return i;
                case 1:
                  return f;
              }
          return p ? -1 : void 0;
        };
      };
      w.exports = {
        findLast: b(0),
        findLastIndex: b(1)
      };
    })
  ),
  /***/
  6661: (
    /***/
    ((w, D, t) => {
      var s = t(940), g = t(6998), u = TypeError, A = Object.getOwnPropertyDescriptor, b = s && !(function() {
        if (this !== void 0)
          return !0;
        try {
          Object.defineProperty([], "length", { writable: !1 }).length = 1;
        } catch (x) {
          return x instanceof TypeError;
        }
      })();
      w.exports = b ? function(x, p) {
        if (g(x) && !A(x, "length").writable)
          throw new u("Cannot set read only .length");
        return x.length = p;
      } : function(x, p) {
        return x.length = p;
      };
    })
  ),
  /***/
  2304: (
    /***/
    ((w, D, t) => {
      var s = t(451);
      w.exports = function(g, u) {
        for (var A = s(g), b = new u(A), x = 0; x < A; x++)
          b[x] = g[A - x - 1];
        return b;
      };
    })
  ),
  /***/
  5886: (
    /***/
    ((w, D, t) => {
      var s = t(451), g = t(1003), u = RangeError;
      w.exports = function(A, b, x, p) {
        var m = s(A), o = g(x), l = o < 0 ? m + o : o;
        if (l >= m || l < 0)
          throw new u("Incorrect index");
        for (var c = new b(m), r = 0; r < m; r++)
          c[r] = r === l ? p : A[r];
        return c;
      };
    })
  ),
  /***/
  5723: (
    /***/
    ((w, D, t) => {
      var s = t(4719), g = t(3316);
      w.exports = function(u, A, b, x) {
        try {
          return x ? A(s(b)[0], b[1]) : A(b);
        } catch (p) {
          g(u, "throw", p);
        }
      };
    })
  ),
  /***/
  8374: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = s({}.toString), u = s("".slice);
      w.exports = function(A) {
        return u(g(A), 8, -1);
      };
    })
  ),
  /***/
  8329: (
    /***/
    ((w, D, t) => {
      var s = t(3077), g = t(7316), u = t(8374), A = t(2292), b = A("toStringTag"), x = Object, p = u(/* @__PURE__ */ (function() {
        return arguments;
      })()) === "Arguments", m = function(o, l) {
        try {
          return o[l];
        } catch {
        }
      };
      w.exports = s ? u : function(o) {
        var l, c, r;
        return o === void 0 ? "Undefined" : o === null ? "Null" : typeof (c = m(l = x(o), b)) == "string" ? c : p ? u(l) : (r = u(l)) === "Object" && g(l.callee) ? "Arguments" : r;
      };
    })
  ),
  /***/
  1425: (
    /***/
    ((w, D, t) => {
      var s = t(936), g = t(8953), u = t(5764), A = t(7744);
      w.exports = function(b, x, p) {
        for (var m = g(x), o = A.f, l = u.f, c = 0; c < m.length; c++) {
          var r = m[c];
          !s(b, r) && !(p && s(p, r)) && o(b, r, l(x, r));
        }
      };
    })
  ),
  /***/
  7888: (
    /***/
    ((w, D, t) => {
      var s = t(8154);
      w.exports = !s(function() {
        function g() {
        }
        return g.prototype.constructor = null, Object.getPrototypeOf(new g()) !== g.prototype;
      });
    })
  ),
  /***/
  1111: (
    /***/
    ((w) => {
      w.exports = function(D, t) {
        return {
          value: D,
          done: t
        };
      };
    })
  ),
  /***/
  9293: (
    /***/
    ((w, D, t) => {
      var s = t(940), g = t(7744), u = t(1198);
      w.exports = s ? function(A, b, x) {
        return g.f(A, b, u(1, x));
      } : function(A, b, x) {
        return A[b] = x, A;
      };
    })
  ),
  /***/
  1198: (
    /***/
    ((w) => {
      w.exports = function(D, t) {
        return {
          enumerable: !(D & 1),
          configurable: !(D & 2),
          writable: !(D & 4),
          value: t
        };
      };
    })
  ),
  /***/
  8947: (
    /***/
    ((w, D, t) => {
      var s = t(4871), g = t(7744), u = t(1198);
      w.exports = function(A, b, x) {
        var p = s(b);
        p in A ? g.f(A, p, u(0, x)) : A[p] = x;
      };
    })
  ),
  /***/
  9691: (
    /***/
    ((w, D, t) => {
      var s = t(9687), g = t(7744);
      w.exports = function(u, A, b) {
        return b.get && s(b.get, A, { getter: !0 }), b.set && s(b.set, A, { setter: !0 }), g.f(u, A, b);
      };
    })
  ),
  /***/
  7041: (
    /***/
    ((w, D, t) => {
      var s = t(7316), g = t(7744), u = t(9687), A = t(6e3);
      w.exports = function(b, x, p, m) {
        m || (m = {});
        var o = m.enumerable, l = m.name !== void 0 ? m.name : x;
        if (s(p) && u(p, l, m), m.global)
          o ? b[x] = p : A(x, p);
        else {
          try {
            m.unsafe ? b[x] && (o = !0) : delete b[x];
          } catch {
          }
          o ? b[x] = p : g.f(b, x, {
            value: p,
            enumerable: !1,
            configurable: !m.nonConfigurable,
            writable: !m.nonWritable
          });
        }
        return b;
      };
    })
  ),
  /***/
  6880: (
    /***/
    ((w, D, t) => {
      var s = t(7041);
      w.exports = function(g, u, A) {
        for (var b in u)
          s(g, b, u[b], A);
        return g;
      };
    })
  ),
  /***/
  6e3: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = Object.defineProperty;
      w.exports = function(u, A) {
        try {
          g(s, u, {
            value: A,
            configurable: !0,
            writable: !0
          });
        } catch {
          s[u] = A;
        }
        return A;
      };
    })
  ),
  /***/
  940: (
    /***/
    ((w, D, t) => {
      var s = t(8154);
      w.exports = !s(function() {
        return Object.defineProperty({}, 1, {
          get: function() {
            return 7;
          }
        })[1] !== 7;
      });
    })
  ),
  /***/
  8126: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(2276), u = t(4837), A = s.structuredClone, b = s.ArrayBuffer, x = s.MessageChannel, p = !1, m, o, l, c;
      if (u)
        p = function(r) {
          A(r, { transfer: [r] });
        };
      else if (b)
        try {
          x || (m = g("worker_threads"), m && (x = m.MessageChannel)), x && (o = new x(), l = new b(2), c = function(r) {
            o.port1.postMessage(null, [r]);
          }, l.byteLength === 2 && (c(l), l.byteLength === 0 && (p = c)));
        } catch {
        }
      w.exports = p;
    })
  ),
  /***/
  1558: (
    /***/
    ((w) => {
      var D = typeof document == "object" && document.all, t = typeof D > "u" && D !== void 0;
      w.exports = {
        all: D,
        IS_HTMLDDA: t
      };
    })
  ),
  /***/
  5584: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(7633), u = s.document, A = g(u) && g(u.createElement);
      w.exports = function(b) {
        return A ? u.createElement(b) : {};
      };
    })
  ),
  /***/
  4287: (
    /***/
    ((w) => {
      var D = TypeError, t = 9007199254740991;
      w.exports = function(s) {
        if (s > t)
          throw D("Maximum allowed index exceeded");
        return s;
      };
    })
  ),
  /***/
  5050: (
    /***/
    ((w) => {
      w.exports = {
        IndexSizeError: {
          s: "INDEX_SIZE_ERR",
          c: 1,
          m: 1
        },
        DOMStringSizeError: {
          s: "DOMSTRING_SIZE_ERR",
          c: 2,
          m: 0
        },
        HierarchyRequestError: {
          s: "HIERARCHY_REQUEST_ERR",
          c: 3,
          m: 1
        },
        WrongDocumentError: {
          s: "WRONG_DOCUMENT_ERR",
          c: 4,
          m: 1
        },
        InvalidCharacterError: {
          s: "INVALID_CHARACTER_ERR",
          c: 5,
          m: 1
        },
        NoDataAllowedError: {
          s: "NO_DATA_ALLOWED_ERR",
          c: 6,
          m: 0
        },
        NoModificationAllowedError: {
          s: "NO_MODIFICATION_ALLOWED_ERR",
          c: 7,
          m: 1
        },
        NotFoundError: {
          s: "NOT_FOUND_ERR",
          c: 8,
          m: 1
        },
        NotSupportedError: {
          s: "NOT_SUPPORTED_ERR",
          c: 9,
          m: 1
        },
        InUseAttributeError: {
          s: "INUSE_ATTRIBUTE_ERR",
          c: 10,
          m: 1
        },
        InvalidStateError: {
          s: "INVALID_STATE_ERR",
          c: 11,
          m: 1
        },
        SyntaxError: {
          s: "SYNTAX_ERR",
          c: 12,
          m: 1
        },
        InvalidModificationError: {
          s: "INVALID_MODIFICATION_ERR",
          c: 13,
          m: 1
        },
        NamespaceError: {
          s: "NAMESPACE_ERR",
          c: 14,
          m: 1
        },
        InvalidAccessError: {
          s: "INVALID_ACCESS_ERR",
          c: 15,
          m: 1
        },
        ValidationError: {
          s: "VALIDATION_ERR",
          c: 16,
          m: 0
        },
        TypeMismatchError: {
          s: "TYPE_MISMATCH_ERR",
          c: 17,
          m: 1
        },
        SecurityError: {
          s: "SECURITY_ERR",
          c: 18,
          m: 1
        },
        NetworkError: {
          s: "NETWORK_ERR",
          c: 19,
          m: 1
        },
        AbortError: {
          s: "ABORT_ERR",
          c: 20,
          m: 1
        },
        URLMismatchError: {
          s: "URL_MISMATCH_ERR",
          c: 21,
          m: 1
        },
        QuotaExceededError: {
          s: "QUOTA_EXCEEDED_ERR",
          c: 22,
          m: 1
        },
        TimeoutError: {
          s: "TIMEOUT_ERR",
          c: 23,
          m: 1
        },
        InvalidNodeTypeError: {
          s: "INVALID_NODE_TYPE_ERR",
          c: 24,
          m: 1
        },
        DataCloneError: {
          s: "DATA_CLONE_ERR",
          c: 25,
          m: 1
        }
      };
    })
  ),
  /***/
  3413: (
    /***/
    ((w, D, t) => {
      var s = t(8471), g = t(4864);
      w.exports = !s && !g && typeof window == "object" && typeof document == "object";
    })
  ),
  /***/
  8471: (
    /***/
    ((w) => {
      w.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object";
    })
  ),
  /***/
  4864: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(8374);
      w.exports = g(s.process) === "process";
    })
  ),
  /***/
  234: (
    /***/
    ((w) => {
      w.exports = typeof navigator < "u" && String(navigator.userAgent) || "";
    })
  ),
  /***/
  2171: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(234), u = s.process, A = s.Deno, b = u && u.versions || A && A.version, x = b && b.v8, p, m;
      x && (p = x.split("."), m = p[0] > 0 && p[0] < 4 ? 1 : +(p[0] + p[1])), !m && g && (p = g.match(/Edge\/(\d+)/), (!p || p[1] >= 74) && (p = g.match(/Chrome\/(\d+)/), p && (m = +p[1]))), w.exports = m;
    })
  ),
  /***/
  298: (
    /***/
    ((w) => {
      w.exports = [
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf"
      ];
    })
  ),
  /***/
  34: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = Error, u = s("".replace), A = (function(p) {
        return String(new g(p).stack);
      })("zxcasd"), b = /\n\s*at [^:]*:[^\n]*/, x = b.test(A);
      w.exports = function(p, m) {
        if (x && typeof p == "string" && !g.prepareStackTrace)
          for (; m--; )
            p = u(p, b, "");
        return p;
      };
    })
  ),
  /***/
  1931: (
    /***/
    ((w, D, t) => {
      var s = t(9293), g = t(34), u = t(3437), A = Error.captureStackTrace;
      w.exports = function(b, x, p, m) {
        u && (A ? A(b, x) : s(b, "stack", g(p, m)));
      };
    })
  ),
  /***/
  3437: (
    /***/
    ((w, D, t) => {
      var s = t(8154), g = t(1198);
      w.exports = !s(function() {
        var u = new Error("a");
        return "stack" in u ? (Object.defineProperty(u, "stack", g(1, 7)), u.stack !== 7) : !0;
      });
    })
  ),
  /***/
  4978: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(5764).f, u = t(9293), A = t(7041), b = t(6e3), x = t(1425), p = t(7007);
      w.exports = function(m, o) {
        var l = m.target, c = m.global, r = m.stat, f, e, i, y, T, E;
        if (c ? e = s : r ? e = s[l] || b(l, {}) : e = (s[l] || {}).prototype, e)
          for (i in o) {
            if (T = o[i], m.dontCallGetSet ? (E = g(e, i), y = E && E.value) : y = e[i], f = p(c ? i : l + (r ? "." : "#") + i, m.forced), !f && y !== void 0) {
              if (typeof T == typeof y)
                continue;
              x(T, y);
            }
            (m.sham || y && y.sham) && u(T, "sham", !0), A(e, i, T, m);
          }
      };
    })
  ),
  /***/
  8154: (
    /***/
    ((w) => {
      w.exports = function(D) {
        try {
          return !!D();
        } catch {
          return !0;
        }
      };
    })
  ),
  /***/
  7294: (
    /***/
    ((w, D, t) => {
      var s = t(2486), g = Function.prototype, u = g.apply, A = g.call;
      w.exports = typeof Reflect == "object" && Reflect.apply || (s ? A.bind(u) : function() {
        return A.apply(u, arguments);
      });
    })
  ),
  /***/
  7789: (
    /***/
    ((w, D, t) => {
      var s = t(6218), g = t(1782), u = t(2486), A = s(s.bind);
      w.exports = function(b, x) {
        return g(b), x === void 0 ? b : u ? A(b, x) : function() {
          return b.apply(x, arguments);
        };
      };
    })
  ),
  /***/
  2486: (
    /***/
    ((w, D, t) => {
      var s = t(8154);
      w.exports = !s(function() {
        var g = function() {
        }.bind();
        return typeof g != "function" || g.hasOwnProperty("prototype");
      });
    })
  ),
  /***/
  2026: (
    /***/
    ((w, D, t) => {
      var s = t(2486), g = Function.prototype.call;
      w.exports = s ? g.bind(g) : function() {
        return g.apply(g, arguments);
      };
    })
  ),
  /***/
  5145: (
    /***/
    ((w, D, t) => {
      var s = t(940), g = t(936), u = Function.prototype, A = s && Object.getOwnPropertyDescriptor, b = g(u, "name"), x = b && function() {
      }.name === "something", p = b && (!s || s && A(u, "name").configurable);
      w.exports = {
        EXISTS: b,
        PROPER: x,
        CONFIGURABLE: p
      };
    })
  ),
  /***/
  1299: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = t(1782);
      w.exports = function(u, A, b) {
        try {
          return s(g(Object.getOwnPropertyDescriptor(u, A)[b]));
        } catch {
        }
      };
    })
  ),
  /***/
  6218: (
    /***/
    ((w, D, t) => {
      var s = t(8374), g = t(8403);
      w.exports = function(u) {
        if (s(u) === "Function")
          return g(u);
      };
    })
  ),
  /***/
  8403: (
    /***/
    ((w, D, t) => {
      var s = t(2486), g = Function.prototype, u = g.call, A = s && g.bind.bind(u, u);
      w.exports = s ? A : function(b) {
        return function() {
          return u.apply(b, arguments);
        };
      };
    })
  ),
  /***/
  7187: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(7316), u = function(A) {
        return g(A) ? A : void 0;
      };
      w.exports = function(A, b) {
        return arguments.length < 2 ? u(s[A]) : s[A] && s[A][b];
      };
    })
  ),
  /***/
  9235: (
    /***/
    ((w) => {
      w.exports = function(D) {
        return {
          iterator: D,
          next: D.next,
          done: !1
        };
      };
    })
  ),
  /***/
  907: (
    /***/
    ((w, D, t) => {
      var s = t(2026), g = t(4719), u = t(9235), A = t(273);
      w.exports = function(b, x) {
        (!x || typeof b != "string") && g(b);
        var p = A(b);
        return u(g(p !== void 0 ? s(p, b) : b));
      };
    })
  ),
  /***/
  273: (
    /***/
    ((w, D, t) => {
      var s = t(8329), g = t(8486), u = t(3734), A = t(6596), b = t(2292), x = b("iterator");
      w.exports = function(p) {
        if (!u(p))
          return g(p, x) || g(p, "@@iterator") || A[s(p)];
      };
    })
  ),
  /***/
  7612: (
    /***/
    ((w, D, t) => {
      var s = t(2026), g = t(1782), u = t(4719), A = t(9762), b = t(273), x = TypeError;
      w.exports = function(p, m) {
        var o = arguments.length < 2 ? b(p) : m;
        if (g(o))
          return u(s(o, p));
        throw new x(A(p) + " is not iterable");
      };
    })
  ),
  /***/
  8486: (
    /***/
    ((w, D, t) => {
      var s = t(1782), g = t(3734);
      w.exports = function(u, A) {
        var b = u[A];
        return g(b) ? void 0 : s(b);
      };
    })
  ),
  /***/
  1096: (
    /***/
    ((w, D, t) => {
      var s = t(1782), g = t(4719), u = t(2026), A = t(1003), b = t(9235), x = "Invalid size", p = RangeError, m = TypeError, o = Math.max, l = function(c, r, f, e) {
        this.set = c, this.size = r, this.has = f, this.keys = e;
      };
      l.prototype = {
        getIterator: function() {
          return b(g(u(this.keys, this.set)));
        },
        includes: function(c) {
          return u(this.has, this.set, c);
        }
      }, w.exports = function(c) {
        g(c);
        var r = +c.size;
        if (r !== r)
          throw new m(x);
        var f = A(r);
        if (f < 0)
          throw new p(x);
        return new l(c, o(f, 0), s(c.has), s(c.keys));
      };
    })
  ),
  /***/
  9298: (
    /***/
    (function(w) {
      var D = function(t) {
        return t && t.Math === Math && t;
      };
      w.exports = D(typeof globalThis == "object" && globalThis) || D(typeof window == "object" && window) || D(typeof self == "object" && self) || D(typeof global == "object" && global) || D(typeof this == "object" && this) || /* @__PURE__ */ (function() {
        return this;
      })() || Function("return this")();
    })
  ),
  /***/
  936: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = t(2007), u = s({}.hasOwnProperty);
      w.exports = Object.hasOwn || function(b, x) {
        return u(g(b), x);
      };
    })
  ),
  /***/
  6010: (
    /***/
    ((w) => {
      w.exports = {};
    })
  ),
  /***/
  519: (
    /***/
    ((w, D, t) => {
      var s = t(7187);
      w.exports = s("document", "documentElement");
    })
  ),
  /***/
  9394: (
    /***/
    ((w, D, t) => {
      var s = t(940), g = t(8154), u = t(5584);
      w.exports = !s && !g(function() {
        return Object.defineProperty(u("div"), "a", {
          get: function() {
            return 7;
          }
        }).a !== 7;
      });
    })
  ),
  /***/
  3622: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = t(8154), u = t(8374), A = Object, b = s("".split);
      w.exports = g(function() {
        return !A("z").propertyIsEnumerable(0);
      }) ? function(x) {
        return u(x) === "String" ? b(x, "") : A(x);
      } : A;
    })
  ),
  /***/
  7523: (
    /***/
    ((w, D, t) => {
      var s = t(7316), g = t(7633), u = t(9763);
      w.exports = function(A, b, x) {
        var p, m;
        return u && s(p = b.constructor) && p !== x && g(m = p.prototype) && m !== x.prototype && u(A, m), A;
      };
    })
  ),
  /***/
  4993: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = t(7316), u = t(7542), A = s(Function.toString);
      g(u.inspectSource) || (u.inspectSource = function(b) {
        return A(b);
      }), w.exports = u.inspectSource;
    })
  ),
  /***/
  8422: (
    /***/
    ((w, D, t) => {
      var s = t(7633), g = t(9293);
      w.exports = function(u, A) {
        s(A) && "cause" in A && g(u, "cause", A.cause);
      };
    })
  ),
  /***/
  1649: (
    /***/
    ((w, D, t) => {
      var s = t(8443), g = t(9298), u = t(7633), A = t(9293), b = t(936), x = t(7542), p = t(3727), m = t(6010), o = "Object already initialized", l = g.TypeError, c = g.WeakMap, r, f, e, i = function(R) {
        return e(R) ? f(R) : r(R, {});
      }, y = function(R) {
        return function(L) {
          var M;
          if (!u(L) || (M = f(L)).type !== R)
            throw new l("Incompatible receiver, " + R + " required");
          return M;
        };
      };
      if (s || x.state) {
        var T = x.state || (x.state = new c());
        T.get = T.get, T.has = T.has, T.set = T.set, r = function(R, L) {
          if (T.has(R))
            throw new l(o);
          return L.facade = R, T.set(R, L), L;
        }, f = function(R) {
          return T.get(R) || {};
        }, e = function(R) {
          return T.has(R);
        };
      } else {
        var E = p("state");
        m[E] = !0, r = function(R, L) {
          if (b(R, E))
            throw new l(o);
          return L.facade = R, A(R, E, L), L;
        }, f = function(R) {
          return b(R, E) ? R[E] : {};
        }, e = function(R) {
          return b(R, E);
        };
      }
      w.exports = {
        set: r,
        get: f,
        has: e,
        enforce: i,
        getterFor: y
      };
    })
  ),
  /***/
  5191: (
    /***/
    ((w, D, t) => {
      var s = t(2292), g = t(6596), u = s("iterator"), A = Array.prototype;
      w.exports = function(b) {
        return b !== void 0 && (g.Array === b || A[u] === b);
      };
    })
  ),
  /***/
  6998: (
    /***/
    ((w, D, t) => {
      var s = t(8374);
      w.exports = Array.isArray || function(u) {
        return s(u) === "Array";
      };
    })
  ),
  /***/
  5986: (
    /***/
    ((w, D, t) => {
      var s = t(8329);
      w.exports = function(g) {
        var u = s(g);
        return u === "BigInt64Array" || u === "BigUint64Array";
      };
    })
  ),
  /***/
  7316: (
    /***/
    ((w, D, t) => {
      var s = t(1558), g = s.all;
      w.exports = s.IS_HTMLDDA ? function(u) {
        return typeof u == "function" || u === g;
      } : function(u) {
        return typeof u == "function";
      };
    })
  ),
  /***/
  7007: (
    /***/
    ((w, D, t) => {
      var s = t(8154), g = t(7316), u = /#|\.prototype\./, A = function(o, l) {
        var c = x[b(o)];
        return c === m ? !0 : c === p ? !1 : g(l) ? s(l) : !!l;
      }, b = A.normalize = function(o) {
        return String(o).replace(u, ".").toLowerCase();
      }, x = A.data = {}, p = A.NATIVE = "N", m = A.POLYFILL = "P";
      w.exports = A;
    })
  ),
  /***/
  3734: (
    /***/
    ((w) => {
      w.exports = function(D) {
        return D == null;
      };
    })
  ),
  /***/
  7633: (
    /***/
    ((w, D, t) => {
      var s = t(7316), g = t(1558), u = g.all;
      w.exports = g.IS_HTMLDDA ? function(A) {
        return typeof A == "object" ? A !== null : s(A) || A === u;
      } : function(A) {
        return typeof A == "object" ? A !== null : s(A);
      };
    })
  ),
  /***/
  2554: (
    /***/
    ((w) => {
      w.exports = !1;
    })
  ),
  /***/
  7814: (
    /***/
    ((w, D, t) => {
      var s = t(7187), g = t(7316), u = t(2658), A = t(7960), b = Object;
      w.exports = A ? function(x) {
        return typeof x == "symbol";
      } : function(x) {
        var p = s("Symbol");
        return g(p) && u(p.prototype, b(x));
      };
    })
  ),
  /***/
  5504: (
    /***/
    ((w, D, t) => {
      var s = t(2026);
      w.exports = function(g, u, A) {
        for (var b = A ? g : g.iterator, x = g.next, p, m; !(p = s(x, b)).done; )
          if (m = u(p.value), m !== void 0)
            return m;
      };
    })
  ),
  /***/
  6837: (
    /***/
    ((w, D, t) => {
      var s = t(7789), g = t(2026), u = t(4719), A = t(9762), b = t(5191), x = t(451), p = t(2658), m = t(7612), o = t(273), l = t(3316), c = TypeError, r = function(e, i) {
        this.stopped = e, this.result = i;
      }, f = r.prototype;
      w.exports = function(e, i, y) {
        var T = y && y.that, E = !!(y && y.AS_ENTRIES), R = !!(y && y.IS_RECORD), L = !!(y && y.IS_ITERATOR), M = !!(y && y.INTERRUPTED), $ = s(i, T), j, K, Q, J, at, ut, ht, _ = function(z) {
          return j && l(j, "normal", z), new r(!0, z);
        }, Z = function(z) {
          return E ? (u(z), M ? $(z[0], z[1], _) : $(z[0], z[1])) : M ? $(z, _) : $(z);
        };
        if (R)
          j = e.iterator;
        else if (L)
          j = e;
        else {
          if (K = o(e), !K)
            throw new c(A(e) + " is not iterable");
          if (b(K)) {
            for (Q = 0, J = x(e); J > Q; Q++)
              if (at = Z(e[Q]), at && p(f, at))
                return at;
            return new r(!1);
          }
          j = m(e, K);
        }
        for (ut = R ? e.next : j.next; !(ht = g(ut, j)).done; ) {
          try {
            at = Z(ht.value);
          } catch (z) {
            l(j, "throw", z);
          }
          if (typeof at == "object" && at && p(f, at))
            return at;
        }
        return new r(!1);
      };
    })
  ),
  /***/
  3316: (
    /***/
    ((w, D, t) => {
      var s = t(2026), g = t(4719), u = t(8486);
      w.exports = function(A, b, x) {
        var p, m;
        g(A);
        try {
          if (p = u(A, "return"), !p) {
            if (b === "throw")
              throw x;
            return x;
          }
          p = s(p, A);
        } catch (o) {
          m = !0, p = o;
        }
        if (b === "throw")
          throw x;
        if (m)
          throw p;
        return g(p), x;
      };
    })
  ),
  /***/
  375: (
    /***/
    ((w, D, t) => {
      var s = t(2026), g = t(6941), u = t(9293), A = t(6880), b = t(2292), x = t(1649), p = t(8486), m = t(5238).IteratorPrototype, o = t(1111), l = t(3316), c = b("toStringTag"), r = "IteratorHelper", f = "WrapForValidIterator", e = x.set, i = function(E) {
        var R = x.getterFor(E ? f : r);
        return A(g(m), {
          next: function() {
            var M = R(this);
            if (E)
              return M.nextHandler();
            try {
              var $ = M.done ? void 0 : M.nextHandler();
              return o($, M.done);
            } catch (j) {
              throw M.done = !0, j;
            }
          },
          return: function() {
            var L = R(this), M = L.iterator;
            if (L.done = !0, E) {
              var $ = p(M, "return");
              return $ ? s($, M) : o(void 0, !0);
            }
            if (L.inner)
              try {
                l(L.inner.iterator, "normal");
              } catch (j) {
                return l(M, "throw", j);
              }
            return l(M, "normal"), o(void 0, !0);
          }
        });
      }, y = i(!0), T = i(!1);
      u(T, c, "Iterator Helper"), w.exports = function(E, R) {
        var L = function($, j) {
          j ? (j.iterator = $.iterator, j.next = $.next) : j = $, j.type = R ? f : r, j.nextHandler = E, j.counter = 0, j.done = !1, e(this, j);
        };
        return L.prototype = R ? y : T, L;
      };
    })
  ),
  /***/
  8142: (
    /***/
    ((w, D, t) => {
      var s = t(2026), g = t(1782), u = t(4719), A = t(9235), b = t(375), x = t(5723), p = b(function() {
        var m = this.iterator, o = u(s(this.next, m)), l = this.done = !!o.done;
        if (!l)
          return x(m, this.mapper, [
            o.value,
            this.counter++
          ], !0);
      });
      w.exports = function(o) {
        return u(this), g(o), new p(A(this), { mapper: o });
      };
    })
  ),
  /***/
  5238: (
    /***/
    ((w, D, t) => {
      var s = t(8154), g = t(7316), u = t(7633), A = t(6941), b = t(2176), x = t(7041), p = t(2292), m = t(2554), o = p("iterator"), l = !1, c, r, f;
      [].keys && (f = [].keys(), "next" in f ? (r = b(b(f)), r !== Object.prototype && (c = r)) : l = !0);
      var e = !u(c) || s(function() {
        var i = {};
        return c[o].call(i) !== i;
      });
      e ? c = {} : m && (c = A(c)), g(c[o]) || x(c, o, function() {
        return this;
      }), w.exports = {
        IteratorPrototype: c,
        BUGGY_SAFARI_ITERATORS: l
      };
    })
  ),
  /***/
  6596: (
    /***/
    ((w) => {
      w.exports = {};
    })
  ),
  /***/
  451: (
    /***/
    ((w, D, t) => {
      var s = t(8293);
      w.exports = function(g) {
        return s(g.length);
      };
    })
  ),
  /***/
  9687: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = t(8154), u = t(7316), A = t(936), b = t(940), x = t(5145).CONFIGURABLE, p = t(4993), m = t(1649), o = m.enforce, l = m.get, c = String, r = Object.defineProperty, f = s("".slice), e = s("".replace), i = s([].join), y = b && !g(function() {
        return r(function() {
        }, "length", { value: 8 }).length !== 8;
      }), T = String(String).split("String"), E = w.exports = function(R, L, M) {
        f(c(L), 0, 7) === "Symbol(" && (L = "[" + e(c(L), /^Symbol\(([^)]*)\)/, "$1") + "]"), M && M.getter && (L = "get " + L), M && M.setter && (L = "set " + L), (!A(R, "name") || x && R.name !== L) && (b ? r(R, "name", {
          value: L,
          configurable: !0
        }) : R.name = L), y && M && A(M, "arity") && R.length !== M.arity && r(R, "length", { value: M.arity });
        try {
          M && A(M, "constructor") && M.constructor ? b && r(R, "prototype", { writable: !1 }) : R.prototype && (R.prototype = void 0);
        } catch {
        }
        var $ = o(R);
        return A($, "source") || ($.source = i(T, typeof L == "string" ? L : "")), R;
      };
      Function.prototype.toString = E(function() {
        return u(this) && l(this).source || p(this);
      }, "toString");
    })
  ),
  /***/
  8537: (
    /***/
    ((w) => {
      var D = Math.ceil, t = Math.floor;
      w.exports = Math.trunc || function(g) {
        var u = +g;
        return (u > 0 ? t : D)(u);
      };
    })
  ),
  /***/
  1264: (
    /***/
    ((w, D, t) => {
      var s = t(5730);
      w.exports = function(g, u) {
        return g === void 0 ? arguments.length < 2 ? "" : u : s(g);
      };
    })
  ),
  /***/
  6941: (
    /***/
    ((w, D, t) => {
      var s = t(4719), g = t(6617), u = t(298), A = t(6010), b = t(519), x = t(5584), p = t(3727), m = ">", o = "<", l = "prototype", c = "script", r = p("IE_PROTO"), f = function() {
      }, e = function(R) {
        return o + c + m + R + o + "/" + c + m;
      }, i = function(R) {
        R.write(e("")), R.close();
        var L = R.parentWindow.Object;
        return R = null, L;
      }, y = function() {
        var R = x("iframe"), L = "java" + c + ":", M;
        return R.style.display = "none", b.appendChild(R), R.src = String(L), M = R.contentWindow.document, M.open(), M.write(e("document.F=Object")), M.close(), M.F;
      }, T, E = function() {
        try {
          T = new ActiveXObject("htmlfile");
        } catch {
        }
        E = typeof document < "u" ? document.domain && T ? i(T) : y() : i(T);
        for (var R = u.length; R--; )
          delete E[l][u[R]];
        return E();
      };
      A[r] = !0, w.exports = Object.create || function(L, M) {
        var $;
        return L !== null ? (f[l] = s(L), $ = new f(), f[l] = null, $[r] = L) : $ = E(), M === void 0 ? $ : g.f($, M);
      };
    })
  ),
  /***/
  6617: (
    /***/
    ((w, D, t) => {
      var s = t(940), g = t(9610), u = t(7744), A = t(4719), b = t(4115), x = t(1706);
      D.f = s && !g ? Object.defineProperties : function(m, o) {
        A(m);
        for (var l = b(o), c = x(o), r = c.length, f = 0, e; r > f; )
          u.f(m, e = c[f++], l[e]);
        return m;
      };
    })
  ),
  /***/
  7744: (
    /***/
    ((w, D, t) => {
      var s = t(940), g = t(9394), u = t(9610), A = t(4719), b = t(4871), x = TypeError, p = Object.defineProperty, m = Object.getOwnPropertyDescriptor, o = "enumerable", l = "configurable", c = "writable";
      D.f = s ? u ? function(f, e, i) {
        if (A(f), e = b(e), A(i), typeof f == "function" && e === "prototype" && "value" in i && c in i && !i[c]) {
          var y = m(f, e);
          y && y[c] && (f[e] = i.value, i = {
            configurable: l in i ? i[l] : y[l],
            enumerable: o in i ? i[o] : y[o],
            writable: !1
          });
        }
        return p(f, e, i);
      } : p : function(f, e, i) {
        if (A(f), e = b(e), A(i), g)
          try {
            return p(f, e, i);
          } catch {
          }
        if ("get" in i || "set" in i)
          throw new x("Accessors not supported");
        return "value" in i && (f[e] = i.value), f;
      };
    })
  ),
  /***/
  5764: (
    /***/
    ((w, D, t) => {
      var s = t(940), g = t(2026), u = t(1879), A = t(1198), b = t(4115), x = t(4871), p = t(936), m = t(9394), o = Object.getOwnPropertyDescriptor;
      D.f = s ? o : function(c, r) {
        if (c = b(c), r = x(r), m)
          try {
            return o(c, r);
          } catch {
          }
        if (p(c, r))
          return A(!g(u.f, c, r), c[r]);
      };
    })
  ),
  /***/
  5455: (
    /***/
    ((w, D, t) => {
      var s = t(9138), g = t(298), u = g.concat("length", "prototype");
      D.f = Object.getOwnPropertyNames || function(b) {
        return s(b, u);
      };
    })
  ),
  /***/
  1963: (
    /***/
    ((w, D) => {
      D.f = Object.getOwnPropertySymbols;
    })
  ),
  /***/
  2176: (
    /***/
    ((w, D, t) => {
      var s = t(936), g = t(7316), u = t(2007), A = t(3727), b = t(7888), x = A("IE_PROTO"), p = Object, m = p.prototype;
      w.exports = b ? p.getPrototypeOf : function(o) {
        var l = u(o);
        if (s(l, x))
          return l[x];
        var c = l.constructor;
        return g(c) && l instanceof c ? c.prototype : l instanceof p ? m : null;
      };
    })
  ),
  /***/
  2658: (
    /***/
    ((w, D, t) => {
      var s = t(8403);
      w.exports = s({}.isPrototypeOf);
    })
  ),
  /***/
  9138: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = t(936), u = t(4115), A = t(9773).indexOf, b = t(6010), x = s([].push);
      w.exports = function(p, m) {
        var o = u(p), l = 0, c = [], r;
        for (r in o)
          !g(b, r) && g(o, r) && x(c, r);
        for (; m.length > l; )
          g(o, r = m[l++]) && (~A(c, r) || x(c, r));
        return c;
      };
    })
  ),
  /***/
  1706: (
    /***/
    ((w, D, t) => {
      var s = t(9138), g = t(298);
      w.exports = Object.keys || function(A) {
        return s(A, g);
      };
    })
  ),
  /***/
  1879: (
    /***/
    ((w, D) => {
      var t = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, g = s && !t.call({ 1: 2 }, 1);
      D.f = g ? function(A) {
        var b = s(this, A);
        return !!b && b.enumerable;
      } : t;
    })
  ),
  /***/
  9763: (
    /***/
    ((w, D, t) => {
      var s = t(1299), g = t(4719), u = t(4958);
      w.exports = Object.setPrototypeOf || ("__proto__" in {} ? (function() {
        var A = !1, b = {}, x;
        try {
          x = s(Object.prototype, "__proto__", "set"), x(b, []), A = b instanceof Array;
        } catch {
        }
        return function(m, o) {
          return g(m), u(o), A ? x(m, o) : m.__proto__ = o, m;
        };
      })() : void 0);
    })
  ),
  /***/
  2923: (
    /***/
    ((w, D, t) => {
      var s = t(2026), g = t(7316), u = t(7633), A = TypeError;
      w.exports = function(b, x) {
        var p, m;
        if (x === "string" && g(p = b.toString) && !u(m = s(p, b)) || g(p = b.valueOf) && !u(m = s(p, b)) || x !== "string" && g(p = b.toString) && !u(m = s(p, b)))
          return m;
        throw new A("Can't convert object to primitive value");
      };
    })
  ),
  /***/
  8953: (
    /***/
    ((w, D, t) => {
      var s = t(7187), g = t(8403), u = t(5455), A = t(1963), b = t(4719), x = g([].concat);
      w.exports = s("Reflect", "ownKeys") || function(m) {
        var o = u.f(b(m)), l = A.f;
        return l ? x(o, l(m)) : o;
      };
    })
  ),
  /***/
  3713: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = t(936), u = SyntaxError, A = parseInt, b = String.fromCharCode, x = s("".charAt), p = s("".slice), m = s(/./.exec), o = {
        '\\"': '"',
        "\\\\": "\\",
        "\\/": "/",
        "\\b": "\b",
        "\\f": "\f",
        "\\n": `
`,
        "\\r": "\r",
        "\\t": "	"
      }, l = /^[\da-f]{4}$/i, c = /^[\u0000-\u001F]$/;
      w.exports = function(r, f) {
        for (var e = !0, i = ""; f < r.length; ) {
          var y = x(r, f);
          if (y === "\\") {
            var T = p(r, f, f + 2);
            if (g(o, T))
              i += o[T], f += 2;
            else if (T === "\\u") {
              f += 2;
              var E = p(r, f, f + 4);
              if (!m(l, E))
                throw new u("Bad Unicode escape at: " + f);
              i += b(A(E, 16)), f += 4;
            } else
              throw new u('Unknown escape sequence: "' + T + '"');
          } else if (y === '"') {
            e = !1, f++;
            break;
          } else {
            if (m(c, y))
              throw new u("Bad control character in string literal at: " + f);
            i += y, f++;
          }
        }
        if (e)
          throw new u("Unterminated string at: " + f);
        return {
          value: i,
          end: f
        };
      };
    })
  ),
  /***/
  6085: (
    /***/
    ((w, D, t) => {
      var s = t(7744).f;
      w.exports = function(g, u, A) {
        A in g || s(g, A, {
          configurable: !0,
          get: function() {
            return u[A];
          },
          set: function(b) {
            u[A] = b;
          }
        });
      };
    })
  ),
  /***/
  5645: (
    /***/
    ((w, D, t) => {
      var s = t(3734), g = TypeError;
      w.exports = function(u) {
        if (s(u))
          throw new g("Can't call method on " + u);
        return u;
      };
    })
  ),
  /***/
  4057: (
    /***/
    ((w, D, t) => {
      var s = t(23), g = t(8848), u = s.Set, A = s.add;
      w.exports = function(b) {
        var x = new u();
        return g(b, function(p) {
          A(x, p);
        }), x;
      };
    })
  ),
  /***/
  5656: (
    /***/
    ((w, D, t) => {
      var s = t(5690), g = t(23), u = t(4057), A = t(6098), b = t(1096), x = t(8848), p = t(5504), m = g.has, o = g.remove;
      w.exports = function(c) {
        var r = s(this), f = b(c), e = u(r);
        return A(r) <= f.size ? x(r, function(i) {
          f.includes(i) && o(e, i);
        }) : p(f.getIterator(), function(i) {
          m(r, i) && o(e, i);
        }), e;
      };
    })
  ),
  /***/
  23: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = Set.prototype;
      w.exports = {
        Set,
        add: s(g.add),
        has: s(g.has),
        remove: s(g.delete),
        proto: g
      };
    })
  ),
  /***/
  8461: (
    /***/
    ((w, D, t) => {
      var s = t(5690), g = t(23), u = t(6098), A = t(1096), b = t(8848), x = t(5504), p = g.Set, m = g.add, o = g.has;
      w.exports = function(c) {
        var r = s(this), f = A(c), e = new p();
        return u(r) > f.size ? x(f.getIterator(), function(i) {
          o(r, i) && m(e, i);
        }) : b(r, function(i) {
          f.includes(i) && m(e, i);
        }), e;
      };
    })
  ),
  /***/
  8550: (
    /***/
    ((w, D, t) => {
      var s = t(5690), g = t(23).has, u = t(6098), A = t(1096), b = t(8848), x = t(5504), p = t(3316);
      w.exports = function(o) {
        var l = s(this), c = A(o);
        if (u(l) <= c.size)
          return b(l, function(f) {
            if (c.includes(f))
              return !1;
          }, !0) !== !1;
        var r = c.getIterator();
        return x(r, function(f) {
          if (g(l, f))
            return p(r, "normal", !1);
        }) !== !1;
      };
    })
  ),
  /***/
  990: (
    /***/
    ((w, D, t) => {
      var s = t(5690), g = t(6098), u = t(8848), A = t(1096);
      w.exports = function(x) {
        var p = s(this), m = A(x);
        return g(p) > m.size ? !1 : u(p, function(o) {
          if (!m.includes(o))
            return !1;
        }, !0) !== !1;
      };
    })
  ),
  /***/
  194: (
    /***/
    ((w, D, t) => {
      var s = t(5690), g = t(23).has, u = t(6098), A = t(1096), b = t(5504), x = t(3316);
      w.exports = function(m) {
        var o = s(this), l = A(m);
        if (u(o) < l.size)
          return !1;
        var c = l.getIterator();
        return b(c, function(r) {
          if (!g(o, r))
            return x(c, "normal", !1);
        }) !== !1;
      };
    })
  ),
  /***/
  8848: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = t(5504), u = t(23), A = u.Set, b = u.proto, x = s(b.forEach), p = s(b.keys), m = p(new A()).next;
      w.exports = function(o, l, c) {
        return c ? g({
          iterator: p(o),
          next: m
        }, l) : x(o, l);
      };
    })
  ),
  /***/
  507: (
    /***/
    ((w, D, t) => {
      var s = t(7187), g = function(u) {
        return {
          size: u,
          has: function() {
            return !1;
          },
          keys: function() {
            return {
              next: function() {
                return { done: !0 };
              }
            };
          }
        };
      };
      w.exports = function(u) {
        var A = s("Set");
        try {
          new A()[u](g(0));
          try {
            return new A()[u](g(-1)), !1;
          } catch {
            return !0;
          }
        } catch {
          return !1;
        }
      };
    })
  ),
  /***/
  6098: (
    /***/
    ((w, D, t) => {
      var s = t(1299), g = t(23);
      w.exports = s(g.proto, "size", "get") || function(u) {
        return u.size;
      };
    })
  ),
  /***/
  3194: (
    /***/
    ((w, D, t) => {
      var s = t(5690), g = t(23), u = t(4057), A = t(1096), b = t(5504), x = g.add, p = g.has, m = g.remove;
      w.exports = function(l) {
        var c = s(this), r = A(l).getIterator(), f = u(c);
        return b(r, function(e) {
          p(c, e) ? m(f, e) : x(f, e);
        }), f;
      };
    })
  ),
  /***/
  5703: (
    /***/
    ((w, D, t) => {
      var s = t(5690), g = t(23).add, u = t(4057), A = t(1096), b = t(5504);
      w.exports = function(p) {
        var m = s(this), o = A(p).getIterator(), l = u(m);
        return b(o, function(c) {
          g(l, c);
        }), l;
      };
    })
  ),
  /***/
  3727: (
    /***/
    ((w, D, t) => {
      var s = t(6807), g = t(7561), u = s("keys");
      w.exports = function(A) {
        return u[A] || (u[A] = g(A));
      };
    })
  ),
  /***/
  7542: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(6e3), u = "__core-js_shared__", A = s[u] || g(u, {});
      w.exports = A;
    })
  ),
  /***/
  6807: (
    /***/
    ((w, D, t) => {
      var s = t(2554), g = t(7542);
      (w.exports = function(u, A) {
        return g[u] || (g[u] = A !== void 0 ? A : {});
      })("versions", []).push({
        version: "3.34.0",
        mode: s ? "pure" : "global",
        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.34.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
      });
    })
  ),
  /***/
  4837: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(8154), u = t(2171), A = t(3413), b = t(8471), x = t(4864), p = s.structuredClone;
      w.exports = !!p && !g(function() {
        if (b && u > 92 || x && u > 94 || A && u > 97)
          return !1;
        var m = new ArrayBuffer(8), o = p(m, { transfer: [m] });
        return m.byteLength !== 0 || o.byteLength !== 8;
      });
    })
  ),
  /***/
  3663: (
    /***/
    ((w, D, t) => {
      var s = t(2171), g = t(8154), u = t(9298), A = u.String;
      w.exports = !!Object.getOwnPropertySymbols && !g(function() {
        var b = Symbol("symbol detection");
        return !A(b) || !(Object(b) instanceof Symbol) || !Symbol.sham && s && s < 41;
      });
    })
  ),
  /***/
  6985: (
    /***/
    ((w, D, t) => {
      var s = t(1003), g = Math.max, u = Math.min;
      w.exports = function(A, b) {
        var x = s(A);
        return x < 0 ? g(x + b, 0) : u(x, b);
      };
    })
  ),
  /***/
  212: (
    /***/
    ((w, D, t) => {
      var s = t(4151), g = TypeError;
      w.exports = function(u) {
        var A = s(u, "number");
        if (typeof A == "number")
          throw new g("Can't convert number to bigint");
        return BigInt(A);
      };
    })
  ),
  /***/
  9548: (
    /***/
    ((w, D, t) => {
      var s = t(1003), g = t(8293), u = RangeError;
      w.exports = function(A) {
        if (A === void 0)
          return 0;
        var b = s(A), x = g(b);
        if (b !== x)
          throw new u("Wrong length or index");
        return x;
      };
    })
  ),
  /***/
  4115: (
    /***/
    ((w, D, t) => {
      var s = t(3622), g = t(5645);
      w.exports = function(u) {
        return s(g(u));
      };
    })
  ),
  /***/
  1003: (
    /***/
    ((w, D, t) => {
      var s = t(8537);
      w.exports = function(g) {
        var u = +g;
        return u !== u || u === 0 ? 0 : s(u);
      };
    })
  ),
  /***/
  8293: (
    /***/
    ((w, D, t) => {
      var s = t(1003), g = Math.min;
      w.exports = function(u) {
        return u > 0 ? g(s(u), 9007199254740991) : 0;
      };
    })
  ),
  /***/
  2007: (
    /***/
    ((w, D, t) => {
      var s = t(5645), g = Object;
      w.exports = function(u) {
        return g(s(u));
      };
    })
  ),
  /***/
  9892: (
    /***/
    ((w, D, t) => {
      var s = t(9817), g = RangeError;
      w.exports = function(u, A) {
        var b = s(u);
        if (b % A)
          throw new g("Wrong offset");
        return b;
      };
    })
  ),
  /***/
  9817: (
    /***/
    ((w, D, t) => {
      var s = t(1003), g = RangeError;
      w.exports = function(u) {
        var A = s(u);
        if (A < 0)
          throw new g("The argument can't be less than 0");
        return A;
      };
    })
  ),
  /***/
  4151: (
    /***/
    ((w, D, t) => {
      var s = t(2026), g = t(7633), u = t(7814), A = t(8486), b = t(2923), x = t(2292), p = TypeError, m = x("toPrimitive");
      w.exports = function(o, l) {
        if (!g(o) || u(o))
          return o;
        var c = A(o, m), r;
        if (c) {
          if (l === void 0 && (l = "default"), r = s(c, o, l), !g(r) || u(r))
            return r;
          throw new p("Can't convert object to primitive value");
        }
        return l === void 0 && (l = "number"), b(o, l);
      };
    })
  ),
  /***/
  4871: (
    /***/
    ((w, D, t) => {
      var s = t(4151), g = t(7814);
      w.exports = function(u) {
        var A = s(u, "string");
        return g(A) ? A : A + "";
      };
    })
  ),
  /***/
  3077: (
    /***/
    ((w, D, t) => {
      var s = t(2292), g = s("toStringTag"), u = {};
      u[g] = "z", w.exports = String(u) === "[object z]";
    })
  ),
  /***/
  5730: (
    /***/
    ((w, D, t) => {
      var s = t(8329), g = String;
      w.exports = function(u) {
        if (s(u) === "Symbol")
          throw new TypeError("Cannot convert a Symbol value to a string");
        return g(u);
      };
    })
  ),
  /***/
  2276: (
    /***/
    ((w, D, t) => {
      var s = t(4864);
      w.exports = function(g) {
        try {
          if (s)
            return Function('return require("' + g + '")')();
        } catch {
        }
      };
    })
  ),
  /***/
  9762: (
    /***/
    ((w) => {
      var D = String;
      w.exports = function(t) {
        try {
          return D(t);
        } catch {
          return "Object";
        }
      };
    })
  ),
  /***/
  7561: (
    /***/
    ((w, D, t) => {
      var s = t(8403), g = 0, u = Math.random(), A = s(1 .toString);
      w.exports = function(b) {
        return "Symbol(" + (b === void 0 ? "" : b) + ")_" + A(++g + u, 36);
      };
    })
  ),
  /***/
  7960: (
    /***/
    ((w, D, t) => {
      var s = t(3663);
      w.exports = s && !Symbol.sham && typeof Symbol.iterator == "symbol";
    })
  ),
  /***/
  9610: (
    /***/
    ((w, D, t) => {
      var s = t(940), g = t(8154);
      w.exports = s && g(function() {
        return Object.defineProperty(function() {
        }, "prototype", {
          value: 42,
          writable: !1
        }).prototype !== 42;
      });
    })
  ),
  /***/
  2743: (
    /***/
    ((w) => {
      var D = TypeError;
      w.exports = function(t, s) {
        if (t < s)
          throw new D("Not enough arguments");
        return t;
      };
    })
  ),
  /***/
  8443: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(7316), u = s.WeakMap;
      w.exports = g(u) && /native code/.test(String(u));
    })
  ),
  /***/
  2292: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(6807), u = t(936), A = t(7561), b = t(3663), x = t(7960), p = s.Symbol, m = g("wks"), o = x ? p.for || p : p && p.withoutSetter || A;
      w.exports = function(l) {
        return u(m, l) || (m[l] = b && u(p, l) ? p[l] : o("Symbol." + l)), m[l];
      };
    })
  ),
  /***/
  7342: (
    /***/
    ((w, D, t) => {
      var s = t(7187), g = t(936), u = t(9293), A = t(2658), b = t(9763), x = t(1425), p = t(6085), m = t(7523), o = t(1264), l = t(8422), c = t(1931), r = t(940), f = t(2554);
      w.exports = function(e, i, y, T) {
        var E = "stackTraceLimit", R = T ? 2 : 1, L = e.split("."), M = L[L.length - 1], $ = s.apply(null, L);
        if ($) {
          var j = $.prototype;
          if (!f && g(j, "cause") && delete j.cause, !y)
            return $;
          var K = s("Error"), Q = i(function(J, at) {
            var ut = o(T ? at : J, void 0), ht = T ? new $(J) : new $();
            return ut !== void 0 && u(ht, "message", ut), c(ht, Q, ht.stack, 2), this && A(j, this) && m(ht, this, Q), arguments.length > R && l(ht, arguments[R]), ht;
          });
          if (Q.prototype = j, M !== "Error" ? b ? b(Q, K) : x(Q, K, { name: !0 }) : r && E in $ && (p(Q, $, E), p(Q, $, "prepareStackTrace")), x(Q, $), !f)
            try {
              j.name !== M && u(j, "name", M), j.constructor = Q;
            } catch {
            }
          return Q;
        }
      };
    })
  ),
  /***/
  4226: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(2007), u = t(451), A = t(6661), b = t(4287), x = t(8154), p = x(function() {
        return [].push.call({ length: 4294967296 }, 1) !== 4294967297;
      }), m = function() {
        try {
          Object.defineProperty([], "length", { writable: !1 }).push();
        } catch (l) {
          return l instanceof TypeError;
        }
      }, o = p || !m();
      s({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: o
      }, {
        push: function(c) {
          var r = g(this), f = u(r), e = arguments.length;
          b(f + e);
          for (var i = 0; i < e; i++)
            r[f] = arguments[i], f++;
          return A(r, f), f;
        }
      });
    })
  ),
  /***/
  3352: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(9298), u = t(7294), A = t(7342), b = "WebAssembly", x = g[b], p = new Error("e", { cause: 7 }).cause !== 7, m = function(l, c) {
        var r = {};
        r[l] = A(l, c, p), s({
          global: !0,
          constructor: !0,
          arity: 1,
          forced: p
        }, r);
      }, o = function(l, c) {
        if (x && x[l]) {
          var r = {};
          r[l] = A(b + "." + l, c, p), s({
            target: b,
            stat: !0,
            constructor: !0,
            arity: 1,
            forced: p
          }, r);
        }
      };
      m("Error", function(l) {
        return function(r) {
          return u(l, this, arguments);
        };
      }), m("EvalError", function(l) {
        return function(r) {
          return u(l, this, arguments);
        };
      }), m("RangeError", function(l) {
        return function(r) {
          return u(l, this, arguments);
        };
      }), m("ReferenceError", function(l) {
        return function(r) {
          return u(l, this, arguments);
        };
      }), m("SyntaxError", function(l) {
        return function(r) {
          return u(l, this, arguments);
        };
      }), m("TypeError", function(l) {
        return function(r) {
          return u(l, this, arguments);
        };
      }), m("URIError", function(l) {
        return function(r) {
          return u(l, this, arguments);
        };
      }), o("CompileError", function(l) {
        return function(r) {
          return u(l, this, arguments);
        };
      }), o("LinkError", function(l) {
        return function(r) {
          return u(l, this, arguments);
        };
      }), o("RuntimeError", function(l) {
        return function(r) {
          return u(l, this, arguments);
        };
      });
    })
  ),
  /***/
  9803: (
    /***/
    ((w, D, t) => {
      var s = t(5861), g = t(4026).findLastIndex, u = s.aTypedArray, A = s.exportTypedArrayMethod;
      A("findLastIndex", function(x) {
        return g(u(this), x, arguments.length > 1 ? arguments[1] : void 0);
      });
    })
  ),
  /***/
  8837: (
    /***/
    ((w, D, t) => {
      var s = t(5861), g = t(4026).findLast, u = s.aTypedArray, A = s.exportTypedArrayMethod;
      A("findLast", function(x) {
        return g(u(this), x, arguments.length > 1 ? arguments[1] : void 0);
      });
    })
  ),
  /***/
  8347: (
    /***/
    ((w, D, t) => {
      var s = t(9298), g = t(2026), u = t(5861), A = t(451), b = t(9892), x = t(2007), p = t(8154), m = s.RangeError, o = s.Int8Array, l = o && o.prototype, c = l && l.set, r = u.aTypedArray, f = u.exportTypedArrayMethod, e = !p(function() {
        var y = new Uint8ClampedArray(2);
        return g(c, y, {
          length: 1,
          0: 3
        }, 1), y[1] !== 3;
      }), i = e && u.NATIVE_ARRAY_BUFFER_VIEWS && p(function() {
        var y = new o(2);
        return y.set(1), y.set("2", 1), y[0] !== 0 || y[1] !== 2;
      });
      f("set", function(T) {
        r(this);
        var E = b(arguments.length > 1 ? arguments[1] : void 0, 1), R = x(T);
        if (e)
          return g(c, this, R, E);
        var L = this.length, M = A(R), $ = 0;
        if (M + E > L)
          throw new m("Wrong length");
        for (; $ < M; )
          this[E + $] = R[$++];
      }, !e || i);
    })
  ),
  /***/
  7995: (
    /***/
    ((w, D, t) => {
      var s = t(2304), g = t(5861), u = g.aTypedArray, A = g.exportTypedArrayMethod, b = g.getTypedArrayConstructor;
      A("toReversed", function() {
        return s(u(this), b(this));
      });
    })
  ),
  /***/
  62: (
    /***/
    ((w, D, t) => {
      var s = t(5861), g = t(8403), u = t(1782), A = t(7003), b = s.aTypedArray, x = s.getTypedArrayConstructor, p = s.exportTypedArrayMethod, m = g(s.TypedArrayPrototype.sort);
      p("toSorted", function(l) {
        l !== void 0 && u(l);
        var c = b(this), r = A(x(c), c);
        return m(r, l);
      });
    })
  ),
  /***/
  4602: (
    /***/
    ((w, D, t) => {
      var s = t(5886), g = t(5861), u = t(5986), A = t(1003), b = t(212), x = g.aTypedArray, p = g.getTypedArrayConstructor, m = g.exportTypedArrayMethod, o = !!(function() {
        try {
          new Int8Array(1).with(2, {
            valueOf: function() {
              throw 8;
            }
          });
        } catch (l) {
          return l === 8;
        }
      })();
      m("with", function(l, c) {
        var r = x(this), f = A(l), e = u(r) ? b(c) : +c;
        return s(r, p(r), f, e);
      }, !o);
    })
  ),
  /***/
  344: (
    /***/
    ((w, D, t) => {
      var s = t(940), g = t(9691), u = t(582), A = ArrayBuffer.prototype;
      s && !("detached" in A) && g(A, "detached", {
        configurable: !0,
        get: function() {
          return u(this);
        }
      });
    })
  ),
  /***/
  7583: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(4358);
      g && s({
        target: "ArrayBuffer",
        proto: !0
      }, {
        transferToFixedLength: function() {
          return g(this, arguments.length ? arguments[0] : void 0, !1);
        }
      });
    })
  ),
  /***/
  4305: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(4358);
      g && s({
        target: "ArrayBuffer",
        proto: !0
      }, {
        transfer: function() {
          return g(this, arguments.length ? arguments[0] : void 0, !0);
        }
      });
    })
  ),
  /***/
  7121: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(9298), u = t(5834), A = t(4719), b = t(7316), x = t(2176), p = t(9691), m = t(8947), o = t(8154), l = t(936), c = t(2292), r = t(5238).IteratorPrototype, f = t(940), e = t(2554), i = "constructor", y = "Iterator", T = c("toStringTag"), E = TypeError, R = g[y], L = e || !b(R) || R.prototype !== r || !o(function() {
        R({});
      }), M = function() {
        if (u(this, r), x(this) === r)
          throw new E("Abstract class Iterator not directly constructable");
      }, $ = function(j, K) {
        f ? p(r, j, {
          configurable: !0,
          get: function() {
            return K;
          },
          set: function(Q) {
            if (A(this), this === r)
              throw new E("You can't redefine this property");
            l(this, j) ? this[j] = Q : m(this, j, Q);
          }
        }) : r[j] = K;
      };
      l(r, T) || $(T, y), (L || !l(r, i) || r[i] === Object) && $(i, M), M.prototype = r, s({
        global: !0,
        constructor: !0,
        forced: L
      }, { Iterator: M });
    })
  ),
  /***/
  385: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(6837), u = t(1782), A = t(4719), b = t(9235);
      s({
        target: "Iterator",
        proto: !0,
        real: !0
      }, {
        every: function(p) {
          A(this), u(p);
          var m = b(this), o = 0;
          return !g(m, function(l, c) {
            if (!p(l, o++))
              return c();
          }, {
            IS_RECORD: !0,
            INTERRUPTED: !0
          }).stopped;
        }
      });
    })
  ),
  /***/
  2993: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(2026), u = t(1782), A = t(4719), b = t(9235), x = t(375), p = t(5723), m = t(2554), o = x(function() {
        for (var l = this.iterator, c = this.predicate, r = this.next, f, e, i; ; ) {
          if (f = A(g(r, l)), e = this.done = !!f.done, e)
            return;
          if (i = f.value, p(l, c, [
            i,
            this.counter++
          ], !0))
            return i;
        }
      });
      s({
        target: "Iterator",
        proto: !0,
        real: !0,
        forced: m
      }, {
        filter: function(c) {
          return A(this), u(c), new o(b(this), { predicate: c });
        }
      });
    })
  ),
  /***/
  8497: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(2026), u = t(1782), A = t(4719), b = t(9235), x = t(907), p = t(375), m = t(3316), o = t(2554), l = p(function() {
        for (var c = this.iterator, r = this.mapper, f, e; ; ) {
          if (e = this.inner)
            try {
              if (f = A(g(e.next, e.iterator)), !f.done)
                return f.value;
              this.inner = null;
            } catch (i) {
              m(c, "throw", i);
            }
          if (f = A(g(this.next, c)), this.done = !!f.done)
            return;
          try {
            this.inner = x(r(f.value, this.counter++), !1);
          } catch (i) {
            m(c, "throw", i);
          }
        }
      });
      s({
        target: "Iterator",
        proto: !0,
        real: !0,
        forced: o
      }, {
        flatMap: function(r) {
          return A(this), u(r), new l(b(this), {
            mapper: r,
            inner: null
          });
        }
      });
    })
  ),
  /***/
  7944: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(8142), u = t(2554);
      s({
        target: "Iterator",
        proto: !0,
        real: !0,
        forced: u
      }, { map: g });
    })
  ),
  /***/
  8518: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(6837), u = t(1782), A = t(4719), b = t(9235);
      s({
        target: "Iterator",
        proto: !0,
        real: !0
      }, {
        some: function(p) {
          A(this), u(p);
          var m = b(this), o = 0;
          return g(m, function(l, c) {
            if (p(l, o++))
              return c();
          }, {
            IS_RECORD: !0,
            INTERRUPTED: !0
          }).stopped;
        }
      });
    })
  ),
  /***/
  2808: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(940), u = t(9298), A = t(7187), b = t(8403), x = t(2026), p = t(7316), m = t(7633), o = t(6998), l = t(936), c = t(5730), r = t(451), f = t(8947), e = t(8154), i = t(3713), y = t(3663), T = u.JSON, E = u.Number, R = u.SyntaxError, L = T && T.parse, M = A("Object", "keys"), $ = Object.getOwnPropertyDescriptor, j = b("".charAt), K = b("".slice), Q = b(/./.exec), J = b([].push), at = /^\d$/, ut = /^[1-9]$/, ht = /^(?:-|\d)$/, _ = /^[\t\n\r ]$/, Z = 0, z = 1, V = function(tt, v) {
        tt = c(tt);
        var h = new vt(tt, 0), n = h.parse(), a = n.value, d = h.skip(_, n.end);
        if (d < tt.length)
          throw new R('Unexpected extra character: "' + j(tt, d) + '" after the parsed data at: ' + d);
        return p(v) ? nt({ "": a }, "", v, n) : a;
      }, nt = function(tt, v, h, n) {
        var a = tt[v], d = n && a === n.value, S = d && typeof n.source == "string" ? { source: n.source } : {}, C, P, F, O, N;
        if (m(a)) {
          var k = o(a), U = d ? n.nodes : k ? [] : {};
          if (k)
            for (C = U.length, F = r(a), O = 0; O < F; O++)
              ot(a, O, nt(a, "" + O, h, O < C ? U[O] : void 0));
          else
            for (P = M(a), F = r(P), O = 0; O < F; O++)
              N = P[O], ot(a, N, nt(a, N, h, l(U, N) ? U[N] : void 0));
        }
        return x(h, tt, v, a, S);
      }, ot = function(tt, v, h) {
        if (g) {
          var n = $(tt, v);
          if (n && !n.configurable)
            return;
        }
        h === void 0 ? delete tt[v] : f(tt, v, h);
      }, lt = function(tt, v, h, n) {
        this.value = tt, this.end = v, this.source = h, this.nodes = n;
      }, vt = function(tt, v) {
        this.source = tt, this.index = v;
      };
      vt.prototype = {
        fork: function(tt) {
          return new vt(this.source, tt);
        },
        parse: function() {
          var tt = this.source, v = this.skip(_, this.index), h = this.fork(v), n = j(tt, v);
          if (Q(ht, n))
            return h.number();
          switch (n) {
            case "{":
              return h.object();
            case "[":
              return h.array();
            case '"':
              return h.string();
            case "t":
              return h.keyword(!0);
            case "f":
              return h.keyword(!1);
            case "n":
              return h.keyword(null);
          }
          throw new R('Unexpected character: "' + n + '" at: ' + v);
        },
        node: function(tt, v, h, n, a) {
          return new lt(v, n, tt ? null : K(this.source, h, n), a);
        },
        object: function() {
          for (var tt = this.source, v = this.index + 1, h = !1, n = {}, a = {}; v < tt.length; ) {
            if (v = this.until([
              '"',
              "}"
            ], v), j(tt, v) === "}" && !h) {
              v++;
              break;
            }
            var d = this.fork(v).string(), S = d.value;
            v = d.end, v = this.until([":"], v) + 1, v = this.skip(_, v), d = this.fork(v).parse(), f(a, S, d), f(n, S, d.value), v = this.until([
              ",",
              "}"
            ], d.end);
            var C = j(tt, v);
            if (C === ",")
              h = !0, v++;
            else if (C === "}") {
              v++;
              break;
            }
          }
          return this.node(z, n, this.index, v, a);
        },
        array: function() {
          for (var tt = this.source, v = this.index + 1, h = !1, n = [], a = []; v < tt.length; ) {
            if (v = this.skip(_, v), j(tt, v) === "]" && !h) {
              v++;
              break;
            }
            var d = this.fork(v).parse();
            if (J(a, d), J(n, d.value), v = this.until([
              ",",
              "]"
            ], d.end), j(tt, v) === ",")
              h = !0, v++;
            else if (j(tt, v) === "]") {
              v++;
              break;
            }
          }
          return this.node(z, n, this.index, v, a);
        },
        string: function() {
          var tt = this.index, v = i(this.source, this.index + 1);
          return this.node(Z, v.value, tt, v.end);
        },
        number: function() {
          var tt = this.source, v = this.index, h = v;
          if (j(tt, h) === "-" && h++, j(tt, h) === "0")
            h++;
          else if (Q(ut, j(tt, h)))
            h = this.skip(at, ++h);
          else
            throw new R("Failed to parse number at: " + h);
          if (j(tt, h) === "." && (h = this.skip(at, ++h)), j(tt, h) === "e" || j(tt, h) === "E") {
            h++, (j(tt, h) === "+" || j(tt, h) === "-") && h++;
            var n = h;
            if (h = this.skip(at, h), n === h)
              throw new R("Failed to parse number's exponent value at: " + h);
          }
          return this.node(Z, E(K(tt, v, h)), v, h);
        },
        keyword: function(tt) {
          var v = "" + tt, h = this.index, n = h + v.length;
          if (K(this.source, h, n) !== v)
            throw new R("Failed to parse value at: " + h);
          return this.node(Z, tt, h, n);
        },
        skip: function(tt, v) {
          for (var h = this.source; v < h.length && Q(tt, j(h, v)); v++)
            ;
          return v;
        },
        until: function(tt, v) {
          v = this.skip(_, v);
          for (var h = j(this.source, v), n = 0; n < tt.length; n++)
            if (tt[n] === h)
              return v;
          throw new R('Unexpected character: "' + h + '" at: ' + v);
        }
      };
      var Tt = e(function() {
        var tt = "9007199254740993", v;
        return L(tt, function(h, n, a) {
          v = a.source;
        }), v !== tt;
      }), St = y && !e(function() {
        return 1 / L("-0 	") !== -1 / 0;
      });
      s({
        target: "JSON",
        stat: !0,
        forced: Tt
      }, {
        parse: function(v, h) {
          return St && !p(h) ? L(v) : V(v, h);
        }
      });
    })
  ),
  /***/
  5561: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(5656), u = t(507);
      s({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !u("difference")
      }, { difference: g });
    })
  ),
  /***/
  8587: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(8154), u = t(8461), A = t(507), b = !A("intersection") || g(function() {
        return Array.from((/* @__PURE__ */ new Set([
          1,
          2,
          3
        ])).intersection(/* @__PURE__ */ new Set([
          3,
          2
        ]))) !== "3,2";
      });
      s({
        target: "Set",
        proto: !0,
        real: !0,
        forced: b
      }, { intersection: u });
    })
  ),
  /***/
  3247: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(8550), u = t(507);
      s({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !u("isDisjointFrom")
      }, { isDisjointFrom: g });
    })
  ),
  /***/
  3302: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(990), u = t(507);
      s({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !u("isSubsetOf")
      }, { isSubsetOf: g });
    })
  ),
  /***/
  9490: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(194), u = t(507);
      s({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !u("isSupersetOf")
      }, { isSupersetOf: g });
    })
  ),
  /***/
  5438: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(3194), u = t(507);
      s({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !u("symmetricDifference")
      }, { symmetricDifference: g });
    })
  ),
  /***/
  7914: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(5703), u = t(507);
      s({
        target: "Set",
        proto: !0,
        real: !0,
        forced: !u("union")
      }, { union: g });
    })
  ),
  /***/
  9709: (
    /***/
    ((w, D, t) => {
      var s = t(4978), g = t(9298), u = t(7187), A = t(1198), b = t(7744).f, x = t(936), p = t(5834), m = t(7523), o = t(1264), l = t(5050), c = t(34), r = t(940), f = t(2554), e = "DOMException", i = u("Error"), y = u(e), T = function() {
        p(this, E);
        var _ = arguments.length, Z = o(_ < 1 ? void 0 : arguments[0]), z = o(_ < 2 ? void 0 : arguments[1], "Error"), V = new y(Z, z), nt = new i(Z);
        return nt.name = e, b(V, "stack", A(1, c(nt.stack, 1))), m(V, this, T), V;
      }, E = T.prototype = y.prototype, R = "stack" in new i(e), L = "stack" in new y(1, 2), M = y && r && Object.getOwnPropertyDescriptor(g, e), $ = !!M && !(M.writable && M.configurable), j = R && !$ && !L;
      s({
        global: !0,
        constructor: !0,
        forced: f || j
      }, { DOMException: j ? T : y });
      var K = u(e), Q = K.prototype;
      if (Q.constructor !== K) {
        f || b(Q, "constructor", A(1, K));
        for (var J in l)
          if (x(l, J)) {
            var at = l[J], ut = at.s;
            x(K, ut) || b(K, ut, A(6, at.c));
          }
      }
    })
  ),
  /***/
  3655: (
    /***/
    ((w, D, t) => {
      var s = t(7041), g = t(8403), u = t(5730), A = t(2743), b = URLSearchParams, x = b.prototype, p = g(x.append), m = g(x.delete), o = g(x.forEach), l = g([].push), c = new b("a=1&a=2&b=3");
      c.delete("a", 1), c.delete("b", void 0), c + "" != "a=2" && s(x, "delete", function(r) {
        var f = arguments.length, e = f < 2 ? void 0 : arguments[1];
        if (f && e === void 0)
          return m(this, r);
        var i = [];
        o(this, function(j, K) {
          l(i, {
            key: K,
            value: j
          });
        }), A(f, 1);
        for (var y = u(r), T = u(e), E = 0, R = 0, L = !1, M = i.length, $; E < M; )
          $ = i[E++], L || $.key === y ? (L = !0, m(this, $.key)) : R++;
        for (; R < M; )
          $ = i[R++], $.key === y && $.value === T || p(this, $.key, $.value);
      }, {
        enumerable: !0,
        unsafe: !0
      });
    })
  ),
  /***/
  2555: (
    /***/
    ((w, D, t) => {
      var s = t(7041), g = t(8403), u = t(5730), A = t(2743), b = URLSearchParams, x = b.prototype, p = g(x.getAll), m = g(x.has), o = new b("a=1");
      (o.has("a", 2) || !o.has("a", void 0)) && s(x, "has", function(c) {
        var r = arguments.length, f = r < 2 ? void 0 : arguments[1];
        if (r && f === void 0)
          return m(this, c);
        var e = p(this, c);
        A(r, 1);
        for (var i = u(f), y = 0; y < e.length; )
          if (e[y++] === i)
            return !0;
        return !1;
      }, {
        enumerable: !0,
        unsafe: !0
      });
    })
  ),
  /***/
  2202: (
    /***/
    ((w, D, t) => {
      var s = t(940), g = t(8403), u = t(9691), A = URLSearchParams.prototype, b = g(A.forEach);
      s && !("size" in A) && u(A, "size", {
        get: function() {
          var p = 0;
          return b(this, function() {
            p++;
          }), p;
        },
        configurable: !0,
        enumerable: !0
      });
    })
  ),
  /***/
  7640: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        AnnotationLayer: () => (
          /* binding */
          St
        ),
        FreeTextAnnotationElement: () => (
          /* binding */
          Q
        ),
        InkAnnotationElement: () => (
          /* binding */
          z
        ),
        StampAnnotationElement: () => (
          /* binding */
          vt
        )
      }), t(4226), t(5561), t(8587), t(3247), t(3302), t(9490), t(5438), t(7914), t(7944), t(7121), t(8497);
      var s = t(3266), g = t(473), u = t(4780);
      function A(tt) {
        return Math.floor(Math.max(0, Math.min(1, tt)) * 255).toString(16).padStart(2, "0");
      }
      function b(tt) {
        return Math.max(0, Math.min(255, 255 * tt));
      }
      class x {
        static CMYK_G(v) {
          let [h, n, a, d] = v;
          return ["G", 1 - Math.min(1, 0.3 * h + 0.59 * a + 0.11 * n + d)];
        }
        static G_CMYK(v) {
          let [h] = v;
          return ["CMYK", 0, 0, 0, 1 - h];
        }
        static G_RGB(v) {
          let [h] = v;
          return ["RGB", h, h, h];
        }
        static G_rgb(v) {
          let [h] = v;
          return h = b(h), [h, h, h];
        }
        static G_HTML(v) {
          let [h] = v;
          const n = A(h);
          return `#${n}${n}${n}`;
        }
        static RGB_G(v) {
          let [h, n, a] = v;
          return ["G", 0.3 * h + 0.59 * n + 0.11 * a];
        }
        static RGB_rgb(v) {
          return v.map(b);
        }
        static RGB_HTML(v) {
          return `#${v.map(A).join("")}`;
        }
        static T_HTML() {
          return "#00000000";
        }
        static T_rgb() {
          return [null];
        }
        static CMYK_RGB(v) {
          let [h, n, a, d] = v;
          return ["RGB", 1 - Math.min(1, h + d), 1 - Math.min(1, a + d), 1 - Math.min(1, n + d)];
        }
        static CMYK_rgb(v) {
          let [h, n, a, d] = v;
          return [b(1 - Math.min(1, h + d)), b(1 - Math.min(1, a + d)), b(1 - Math.min(1, n + d))];
        }
        static CMYK_HTML(v) {
          const h = this.CMYK_RGB(v).slice(1);
          return this.RGB_HTML(h);
        }
        static RGB_CMYK(v) {
          let [h, n, a] = v;
          const d = 1 - h, S = 1 - n, C = 1 - a, P = Math.min(d, S, C);
          return ["CMYK", d, S, C, P];
        }
      }
      var p = t(8266);
      const m = 1e3, o = 9, l = /* @__PURE__ */ new WeakSet();
      function c(tt) {
        return {
          width: tt[2] - tt[0],
          height: tt[3] - tt[1]
        };
      }
      class r {
        static create(v) {
          switch (v.data.annotationType) {
            case s.AnnotationType.LINK:
              return new e(v);
            case s.AnnotationType.TEXT:
              return new i(v);
            case s.AnnotationType.WIDGET:
              switch (v.data.fieldType) {
                case "Tx":
                  return new T(v);
                case "Btn":
                  return v.data.radioButton ? new L(v) : v.data.checkBox ? new R(v) : new M(v);
                case "Ch":
                  return new $(v);
                case "Sig":
                  return new E(v);
              }
              return new y(v);
            case s.AnnotationType.POPUP:
              return new j(v);
            case s.AnnotationType.FREETEXT:
              return new Q(v);
            case s.AnnotationType.LINE:
              return new J(v);
            case s.AnnotationType.SQUARE:
              return new at(v);
            case s.AnnotationType.CIRCLE:
              return new ut(v);
            case s.AnnotationType.POLYLINE:
              return new ht(v);
            case s.AnnotationType.CARET:
              return new Z(v);
            case s.AnnotationType.INK:
              return new z(v);
            case s.AnnotationType.POLYGON:
              return new _(v);
            case s.AnnotationType.HIGHLIGHT:
              return new V(v);
            case s.AnnotationType.UNDERLINE:
              return new nt(v);
            case s.AnnotationType.SQUIGGLY:
              return new ot(v);
            case s.AnnotationType.STRIKEOUT:
              return new lt(v);
            case s.AnnotationType.STAMP:
              return new vt(v);
            case s.AnnotationType.FILEATTACHMENT:
              return new Tt(v);
            default:
              return new f(v);
          }
        }
      }
      class f {
        #t = !1;
        constructor(v) {
          let {
            isRenderable: h = !1,
            ignoreBorder: n = !1,
            createQuadrilaterals: a = !1
          } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.isRenderable = h, this.data = v.data, this.layer = v.layer, this.linkService = v.linkService, this.downloadManager = v.downloadManager, this.imageResourcesPath = v.imageResourcesPath, this.renderForms = v.renderForms, this.svgFactory = v.svgFactory, this.annotationStorage = v.annotationStorage, this.enableScripting = v.enableScripting, this.hasJSActions = v.hasJSActions, this._fieldObjects = v.fieldObjects, this.parent = v.parent, h && (this.container = this._createContainer(n)), a && this._createQuadrilaterals();
        }
        static _hasPopupData(v) {
          let {
            titleObj: h,
            contentsObj: n,
            richText: a
          } = v;
          return !!(h?.str || n?.str || a?.str);
        }
        get hasPopupData() {
          return f._hasPopupData(this.data);
        }
        _createContainer(v) {
          const {
            data: h,
            parent: {
              page: n,
              viewport: a
            }
          } = this, d = document.createElement("section");
          d.setAttribute("data-annotation-id", h.id), this instanceof y || (d.tabIndex = m), d.style.zIndex = this.parent.zIndex++, this.data.popupRef && d.setAttribute("aria-haspopup", "dialog"), h.noRotate && d.classList.add("norotate");
          const {
            pageWidth: S,
            pageHeight: C,
            pageX: P,
            pageY: F
          } = a.rawDims;
          if (!h.rect || this instanceof j) {
            const {
              rotation: Y
            } = h;
            return !h.hasOwnCanvas && Y !== 0 && this.setRotation(Y, d), d;
          }
          const {
            width: O,
            height: N
          } = c(h.rect), k = s.Util.normalizeRect([h.rect[0], n.view[3] - h.rect[1] + n.view[1], h.rect[2], n.view[3] - h.rect[3] + n.view[1]]);
          if (!v && h.borderStyle.width > 0) {
            d.style.borderWidth = `${h.borderStyle.width}px`;
            const Y = h.borderStyle.horizontalCornerRadius, G = h.borderStyle.verticalCornerRadius;
            if (Y > 0 || G > 0) {
              const B = `calc(${Y}px * var(--scale-factor)) / calc(${G}px * var(--scale-factor))`;
              d.style.borderRadius = B;
            } else if (this instanceof L) {
              const B = `calc(${O}px * var(--scale-factor)) / calc(${N}px * var(--scale-factor))`;
              d.style.borderRadius = B;
            }
            switch (h.borderStyle.style) {
              case s.AnnotationBorderStyleType.SOLID:
                d.style.borderStyle = "solid";
                break;
              case s.AnnotationBorderStyleType.DASHED:
                d.style.borderStyle = "dashed";
                break;
              case s.AnnotationBorderStyleType.BEVELED:
                (0, s.warn)("Unimplemented border style: beveled");
                break;
              case s.AnnotationBorderStyleType.INSET:
                (0, s.warn)("Unimplemented border style: inset");
                break;
              case s.AnnotationBorderStyleType.UNDERLINE:
                d.style.borderBottomStyle = "solid";
                break;
            }
            const I = h.borderColor || null;
            I ? (this.#t = !0, d.style.borderColor = s.Util.makeHexColor(I[0] | 0, I[1] | 0, I[2] | 0)) : d.style.borderWidth = 0;
          }
          d.style.left = `${100 * (k[0] - P) / S}%`, d.style.top = `${100 * (k[1] - F) / C}%`;
          const {
            rotation: U
          } = h;
          return h.hasOwnCanvas || U === 0 ? (d.style.width = `${100 * O / S}%`, d.style.height = `${100 * N / C}%`) : this.setRotation(U, d), d;
        }
        setRotation(v) {
          let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.container;
          if (!this.data.rect)
            return;
          const {
            pageWidth: n,
            pageHeight: a
          } = this.parent.viewport.rawDims, {
            width: d,
            height: S
          } = c(this.data.rect);
          let C, P;
          v % 180 === 0 ? (C = 100 * d / n, P = 100 * S / a) : (C = 100 * S / n, P = 100 * d / a), h.style.width = `${C}%`, h.style.height = `${P}%`, h.setAttribute("data-main-rotation", (360 - v) % 360);
        }
        get _commonActions() {
          const v = (h, n, a) => {
            const d = a.detail[h], S = d[0], C = d.slice(1);
            a.target.style[n] = x[`${S}_HTML`](C), this.annotationStorage.setValue(this.data.id, {
              [n]: x[`${S}_rgb`](C)
            });
          };
          return (0, s.shadow)(this, "_commonActions", {
            display: (h) => {
              const {
                display: n
              } = h.detail, a = n % 2 === 1;
              this.container.style.visibility = a ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                noView: a,
                noPrint: n === 1 || n === 2
              });
            },
            print: (h) => {
              this.annotationStorage.setValue(this.data.id, {
                noPrint: !h.detail.print
              });
            },
            hidden: (h) => {
              const {
                hidden: n
              } = h.detail;
              this.container.style.visibility = n ? "hidden" : "visible", this.annotationStorage.setValue(this.data.id, {
                noPrint: n,
                noView: n
              });
            },
            focus: (h) => {
              setTimeout(() => h.target.focus({
                preventScroll: !1
              }), 0);
            },
            userName: (h) => {
              h.target.title = h.detail.userName;
            },
            readonly: (h) => {
              h.target.disabled = h.detail.readonly;
            },
            required: (h) => {
              this._setRequired(h.target, h.detail.required);
            },
            bgColor: (h) => {
              v("bgColor", "backgroundColor", h);
            },
            fillColor: (h) => {
              v("fillColor", "backgroundColor", h);
            },
            fgColor: (h) => {
              v("fgColor", "color", h);
            },
            textColor: (h) => {
              v("textColor", "color", h);
            },
            borderColor: (h) => {
              v("borderColor", "borderColor", h);
            },
            strokeColor: (h) => {
              v("strokeColor", "borderColor", h);
            },
            rotation: (h) => {
              const n = h.detail.rotation;
              this.setRotation(n), this.annotationStorage.setValue(this.data.id, {
                rotation: n
              });
            }
          });
        }
        _dispatchEventFromSandbox(v, h) {
          const n = this._commonActions;
          for (const a of Object.keys(h.detail))
            (v[a] || n[a])?.(h);
        }
        _setDefaultPropertiesFromJS(v) {
          if (!this.enableScripting)
            return;
          const h = this.annotationStorage.getRawValue(this.data.id);
          if (!h)
            return;
          const n = this._commonActions;
          for (const [a, d] of Object.entries(h)) {
            const S = n[a];
            if (S) {
              const C = {
                detail: {
                  [a]: d
                },
                target: v
              };
              S(C), delete h[a];
            }
          }
        }
        _createQuadrilaterals() {
          if (!this.container)
            return;
          const {
            quadPoints: v
          } = this.data;
          if (!v)
            return;
          const [h, n, a, d] = this.data.rect;
          if (v.length === 1) {
            const [, {
              x: G,
              y: I
            }, {
              x: B,
              y: st
            }] = v[0];
            if (a === G && d === I && h === B && n === st)
              return;
          }
          const {
            style: S
          } = this.container;
          let C;
          if (this.#t) {
            const {
              borderColor: G,
              borderWidth: I
            } = S;
            S.borderWidth = 0, C = ["url('data:image/svg+xml;utf8,", '<svg xmlns="http://www.w3.org/2000/svg"', ' preserveAspectRatio="none" viewBox="0 0 1 1">', `<g fill="transparent" stroke="${G}" stroke-width="${I}">`], this.container.classList.add("hasBorder");
          }
          const P = a - h, F = d - n, {
            svgFactory: O
          } = this, N = O.createElement("svg");
          N.classList.add("quadrilateralsContainer"), N.setAttribute("width", 0), N.setAttribute("height", 0);
          const k = O.createElement("defs");
          N.append(k);
          const U = O.createElement("clipPath"), Y = `clippath_${this.data.id}`;
          U.setAttribute("id", Y), U.setAttribute("clipPathUnits", "objectBoundingBox"), k.append(U);
          for (const [, {
            x: G,
            y: I
          }, {
            x: B,
            y: st
          }] of v) {
            const q = O.createElement("rect"), ct = (B - h) / P, pt = (d - I) / F, ft = (G - B) / P, mt = (I - st) / F;
            q.setAttribute("x", ct), q.setAttribute("y", pt), q.setAttribute("width", ft), q.setAttribute("height", mt), U.append(q), C?.push(`<rect vector-effect="non-scaling-stroke" x="${ct}" y="${pt}" width="${ft}" height="${mt}"/>`);
          }
          this.#t && (C.push("</g></svg>')"), S.backgroundImage = C.join("")), this.container.append(N), this.container.style.clipPath = `url(#${Y})`;
        }
        _createPopup() {
          const {
            container: v,
            data: h
          } = this;
          v.setAttribute("aria-haspopup", "dialog");
          const n = new j({
            data: {
              color: h.color,
              titleObj: h.titleObj,
              modificationDate: h.modificationDate,
              contentsObj: h.contentsObj,
              richText: h.richText,
              parentRect: h.rect,
              borderStyle: 0,
              id: `popup_${h.id}`,
              rotation: h.rotation
            },
            parent: this.parent,
            elements: [this]
          });
          this.parent.div.append(n.render());
        }
        render() {
          (0, s.unreachable)("Abstract method `AnnotationElement.render` called");
        }
        _getElementsByName(v) {
          let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const n = [];
          if (this._fieldObjects) {
            const a = this._fieldObjects[v];
            if (a)
              for (const {
                page: d,
                id: S,
                exportValues: C
              } of a) {
                if (d === -1 || S === h)
                  continue;
                const P = typeof C == "string" ? C : null, F = document.querySelector(`[data-element-id="${S}"]`);
                if (F && !l.has(F)) {
                  (0, s.warn)(`_getElementsByName - element not allowed: ${S}`);
                  continue;
                }
                n.push({
                  id: S,
                  exportValue: P,
                  domElement: F
                });
              }
            return n;
          }
          for (const a of document.getElementsByName(v)) {
            const {
              exportValue: d
            } = a, S = a.getAttribute("data-element-id");
            S !== h && l.has(a) && n.push({
              id: S,
              exportValue: d,
              domElement: a
            });
          }
          return n;
        }
        show() {
          this.container && (this.container.hidden = !1), this.popup?.maybeShow();
        }
        hide() {
          this.container && (this.container.hidden = !0), this.popup?.forceHide();
        }
        getElementsToTriggerPopup() {
          return this.container;
        }
        addHighlightArea() {
          const v = this.getElementsToTriggerPopup();
          if (Array.isArray(v))
            for (const h of v)
              h.classList.add("highlightArea");
          else
            v.classList.add("highlightArea");
        }
        get _isEditable() {
          return !1;
        }
        _editOnDoubleClick() {
          if (!this._isEditable)
            return;
          const {
            annotationEditorType: v,
            data: {
              id: h
            }
          } = this;
          this.container.addEventListener("dblclick", () => {
            this.linkService.eventBus?.dispatch("switchannotationeditormode", {
              source: this,
              mode: v,
              editId: h
            });
          });
        }
      }
      class e extends f {
        constructor(v) {
          let h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          super(v, {
            isRenderable: !0,
            ignoreBorder: !!h?.ignoreBorder,
            createQuadrilaterals: !0
          }), this.isTooltipOnly = v.data.isTooltipOnly;
        }
        render() {
          const {
            data: v,
            linkService: h
          } = this, n = document.createElement("a");
          n.setAttribute("data-element-id", v.id);
          let a = !1;
          return v.url ? (h.addLinkAttributes(n, v.url, v.newWindow), a = !0) : v.action ? (this._bindNamedAction(n, v.action), a = !0) : v.attachment ? (this.#e(n, v.attachment, v.attachmentDest), a = !0) : v.setOCGState ? (this.#n(n, v.setOCGState), a = !0) : v.dest ? (this._bindLink(n, v.dest), a = !0) : (v.actions && (v.actions.Action || v.actions["Mouse Up"] || v.actions["Mouse Down"]) && this.enableScripting && this.hasJSActions && (this._bindJSAction(n, v), a = !0), v.resetForm ? (this._bindResetFormAction(n, v.resetForm), a = !0) : this.isTooltipOnly && !a && (this._bindLink(n, ""), a = !0)), this.container.classList.add("linkAnnotation"), a && this.container.append(n), this.container;
        }
        #t() {
          this.container.setAttribute("data-internal-link", "");
        }
        _bindLink(v, h) {
          v.href = this.linkService.getDestinationHash(h), v.onclick = () => (h && this.linkService.goToDestination(h), !1), (h || h === "") && this.#t();
        }
        _bindNamedAction(v, h) {
          v.href = this.linkService.getAnchorUrl(""), v.onclick = () => (this.linkService.executeNamedAction(h), !1), this.#t();
        }
        #e(v, h) {
          let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
          v.href = this.linkService.getAnchorUrl(""), v.onclick = () => (this.downloadManager?.openOrDownloadData(h.content, h.filename, n), !1), this.#t();
        }
        #n(v, h) {
          v.href = this.linkService.getAnchorUrl(""), v.onclick = () => (this.linkService.executeSetOCGState(h), !1), this.#t();
        }
        _bindJSAction(v, h) {
          v.href = this.linkService.getAnchorUrl("");
          const n = /* @__PURE__ */ new Map([["Action", "onclick"], ["Mouse Up", "onmouseup"], ["Mouse Down", "onmousedown"]]);
          for (const a of Object.keys(h.actions)) {
            const d = n.get(a);
            d && (v[d] = () => (this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: h.id,
                name: a
              }
            }), !1));
          }
          v.onclick || (v.onclick = () => !1), this.#t();
        }
        _bindResetFormAction(v, h) {
          const n = v.onclick;
          if (n || (v.href = this.linkService.getAnchorUrl("")), this.#t(), !this._fieldObjects) {
            (0, s.warn)('_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.'), n || (v.onclick = () => !1);
            return;
          }
          v.onclick = () => {
            n?.();
            const {
              fields: a,
              refs: d,
              include: S
            } = h, C = [];
            if (a.length !== 0 || d.length !== 0) {
              const O = new Set(d);
              for (const N of a) {
                const k = this._fieldObjects[N] || [];
                for (const {
                  id: U
                } of k)
                  O.add(U);
              }
              for (const N of Object.values(this._fieldObjects))
                for (const k of N)
                  O.has(k.id) === S && C.push(k);
            } else
              for (const O of Object.values(this._fieldObjects))
                C.push(...O);
            const P = this.annotationStorage, F = [];
            for (const O of C) {
              const {
                id: N
              } = O;
              switch (F.push(N), O.type) {
                case "text": {
                  const U = O.defaultValue || "";
                  P.setValue(N, {
                    value: U
                  });
                  break;
                }
                case "checkbox":
                case "radiobutton": {
                  const U = O.defaultValue === O.exportValues;
                  P.setValue(N, {
                    value: U
                  });
                  break;
                }
                case "combobox":
                case "listbox": {
                  const U = O.defaultValue || "";
                  P.setValue(N, {
                    value: U
                  });
                  break;
                }
                default:
                  continue;
              }
              const k = document.querySelector(`[data-element-id="${N}"]`);
              if (k) {
                if (!l.has(k)) {
                  (0, s.warn)(`_bindResetFormAction - element not allowed: ${N}`);
                  continue;
                }
              } else continue;
              k.dispatchEvent(new Event("resetform"));
            }
            return this.enableScripting && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: "app",
                ids: F,
                name: "ResetForm"
              }
            }), !1;
          };
        }
      }
      class i extends f {
        constructor(v) {
          super(v, {
            isRenderable: !0
          });
        }
        render() {
          this.container.classList.add("textAnnotation");
          const v = document.createElement("img");
          return v.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", v.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"), v.setAttribute("data-l10n-args", JSON.stringify({
            type: this.data.name
          })), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.append(v), this.container;
        }
      }
      class y extends f {
        render() {
          return this.data.alternativeText && (this.container.title = this.data.alternativeText), this.container;
        }
        showElementAndHideCanvas(v) {
          this.data.hasOwnCanvas && (v.previousSibling?.nodeName === "CANVAS" && (v.previousSibling.hidden = !0), v.hidden = !1);
        }
        _getKeyModifier(v) {
          return s.FeatureTest.platform.isMac ? v.metaKey : v.ctrlKey;
        }
        _setEventListener(v, h, n, a, d) {
          n.includes("mouse") ? v.addEventListener(n, (S) => {
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: this.data.id,
                name: a,
                value: d(S),
                shift: S.shiftKey,
                modifier: this._getKeyModifier(S)
              }
            });
          }) : v.addEventListener(n, (S) => {
            if (n === "blur") {
              if (!h.focused || !S.relatedTarget)
                return;
              h.focused = !1;
            } else if (n === "focus") {
              if (h.focused)
                return;
              h.focused = !0;
            }
            d && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: this.data.id,
                name: a,
                value: d(S)
              }
            });
          });
        }
        _setEventListeners(v, h, n, a) {
          for (const [d, S] of n)
            (S === "Action" || this.data.actions?.[S]) && ((S === "Focus" || S === "Blur") && (h ||= {
              focused: !1
            }), this._setEventListener(v, h, d, S, a), S === "Focus" && !this.data.actions?.Blur ? this._setEventListener(v, h, "blur", "Blur", null) : S === "Blur" && !this.data.actions?.Focus && this._setEventListener(v, h, "focus", "Focus", null));
        }
        _setBackgroundColor(v) {
          const h = this.data.backgroundColor || null;
          v.style.backgroundColor = h === null ? "transparent" : s.Util.makeHexColor(h[0], h[1], h[2]);
        }
        _setTextStyle(v) {
          const h = ["left", "center", "right"], {
            fontColor: n
          } = this.data.defaultAppearanceData, a = this.data.defaultAppearanceData.fontSize || o, d = v.style;
          let S;
          const C = 2, P = (F) => Math.round(10 * F) / 10;
          if (this.data.multiLine) {
            const F = Math.abs(this.data.rect[3] - this.data.rect[1] - C), O = Math.round(F / (s.LINE_FACTOR * a)) || 1, N = F / O;
            S = Math.min(a, P(N / s.LINE_FACTOR));
          } else {
            const F = Math.abs(this.data.rect[3] - this.data.rect[1] - C);
            S = Math.min(a, P(F / s.LINE_FACTOR));
          }
          d.fontSize = `calc(${S}px * var(--scale-factor))`, d.color = s.Util.makeHexColor(n[0], n[1], n[2]), this.data.textAlignment !== null && (d.textAlign = h[this.data.textAlignment]);
        }
        _setRequired(v, h) {
          h ? v.setAttribute("required", !0) : v.removeAttribute("required"), v.setAttribute("aria-required", h);
        }
      }
      class T extends y {
        constructor(v) {
          const h = v.renderForms || v.data.hasOwnCanvas || !v.data.hasAppearance && !!v.data.fieldValue;
          super(v, {
            isRenderable: h
          });
        }
        setPropertyOnSiblings(v, h, n, a) {
          const d = this.annotationStorage;
          for (const S of this._getElementsByName(v.name, v.id))
            S.domElement && (S.domElement[h] = n), d.setValue(S.id, {
              [a]: n
            });
        }
        render() {
          const v = this.annotationStorage, h = this.data.id;
          this.container.classList.add("textWidgetAnnotation");
          let n = null;
          if (this.renderForms) {
            const a = v.getValue(h, {
              value: this.data.fieldValue
            });
            let d = a.value || "";
            const S = v.getValue(h, {
              charLimit: this.data.maxLen
            }).charLimit;
            S && d.length > S && (d = d.slice(0, S));
            let C = a.formattedValue || this.data.textContent?.join(`
`) || null;
            C && this.data.comb && (C = C.replaceAll(/\s+/g, ""));
            const P = {
              userValue: d,
              formattedValue: C,
              lastCommittedValue: null,
              commitKey: 1,
              focused: !1
            };
            this.data.multiLine ? (n = document.createElement("textarea"), n.textContent = C ?? d, this.data.doNotScroll && (n.style.overflowY = "hidden")) : (n = document.createElement("input"), n.type = "text", n.setAttribute("value", C ?? d), this.data.doNotScroll && (n.style.overflowX = "hidden")), this.data.hasOwnCanvas && (n.hidden = !0), l.add(n), n.setAttribute("data-element-id", h), n.disabled = this.data.readOnly, n.name = this.data.fieldName, n.tabIndex = m, this._setRequired(n, this.data.required), S && (n.maxLength = S), n.addEventListener("input", (O) => {
              v.setValue(h, {
                value: O.target.value
              }), this.setPropertyOnSiblings(n, "value", O.target.value, "value"), P.formattedValue = null;
            }), n.addEventListener("resetform", (O) => {
              const N = this.data.defaultFieldValue ?? "";
              n.value = P.userValue = N, P.formattedValue = null;
            });
            let F = (O) => {
              const {
                formattedValue: N
              } = P;
              N != null && (O.target.value = N), O.target.scrollLeft = 0;
            };
            if (this.enableScripting && this.hasJSActions) {
              n.addEventListener("focus", (N) => {
                if (P.focused)
                  return;
                const {
                  target: k
                } = N;
                P.userValue && (k.value = P.userValue), P.lastCommittedValue = k.value, P.commitKey = 1, this.data.actions?.Focus || (P.focused = !0);
              }), n.addEventListener("updatefromsandbox", (N) => {
                this.showElementAndHideCanvas(N.target);
                const k = {
                  value(U) {
                    P.userValue = U.detail.value ?? "", v.setValue(h, {
                      value: P.userValue.toString()
                    }), U.target.value = P.userValue;
                  },
                  formattedValue(U) {
                    const {
                      formattedValue: Y
                    } = U.detail;
                    P.formattedValue = Y, Y != null && U.target !== document.activeElement && (U.target.value = Y), v.setValue(h, {
                      formattedValue: Y
                    });
                  },
                  selRange(U) {
                    U.target.setSelectionRange(...U.detail.selRange);
                  },
                  charLimit: (U) => {
                    const {
                      charLimit: Y
                    } = U.detail, {
                      target: G
                    } = U;
                    if (Y === 0) {
                      G.removeAttribute("maxLength");
                      return;
                    }
                    G.setAttribute("maxLength", Y);
                    let I = P.userValue;
                    !I || I.length <= Y || (I = I.slice(0, Y), G.value = P.userValue = I, v.setValue(h, {
                      value: I
                    }), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                      source: this,
                      detail: {
                        id: h,
                        name: "Keystroke",
                        value: I,
                        willCommit: !0,
                        commitKey: 1,
                        selStart: G.selectionStart,
                        selEnd: G.selectionEnd
                      }
                    }));
                  }
                };
                this._dispatchEventFromSandbox(k, N);
              }), n.addEventListener("keydown", (N) => {
                P.commitKey = 1;
                let k = -1;
                if (N.key === "Escape" ? k = 0 : N.key === "Enter" && !this.data.multiLine ? k = 2 : N.key === "Tab" && (P.commitKey = 3), k === -1)
                  return;
                const {
                  value: U
                } = N.target;
                P.lastCommittedValue !== U && (P.lastCommittedValue = U, P.userValue = U, this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: h,
                    name: "Keystroke",
                    value: U,
                    willCommit: !0,
                    commitKey: k,
                    selStart: N.target.selectionStart,
                    selEnd: N.target.selectionEnd
                  }
                }));
              });
              const O = F;
              F = null, n.addEventListener("blur", (N) => {
                if (!P.focused || !N.relatedTarget)
                  return;
                this.data.actions?.Blur || (P.focused = !1);
                const {
                  value: k
                } = N.target;
                P.userValue = k, P.lastCommittedValue !== k && this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: h,
                    name: "Keystroke",
                    value: k,
                    willCommit: !0,
                    commitKey: P.commitKey,
                    selStart: N.target.selectionStart,
                    selEnd: N.target.selectionEnd
                  }
                }), O(N);
              }), this.data.actions?.Keystroke && n.addEventListener("beforeinput", (N) => {
                P.lastCommittedValue = null;
                const {
                  data: k,
                  target: U
                } = N, {
                  value: Y,
                  selectionStart: G,
                  selectionEnd: I
                } = U;
                let B = G, st = I;
                switch (N.inputType) {
                  case "deleteWordBackward": {
                    const q = Y.substring(0, G).match(/\w*[^\w]*$/);
                    q && (B -= q[0].length);
                    break;
                  }
                  case "deleteWordForward": {
                    const q = Y.substring(G).match(/^[^\w]*\w*/);
                    q && (st += q[0].length);
                    break;
                  }
                  case "deleteContentBackward":
                    G === I && (B -= 1);
                    break;
                  case "deleteContentForward":
                    G === I && (st += 1);
                    break;
                }
                N.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: h,
                    name: "Keystroke",
                    value: Y,
                    change: k || "",
                    willCommit: !1,
                    selStart: B,
                    selEnd: st
                  }
                });
              }), this._setEventListeners(n, P, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (N) => N.target.value);
            }
            if (F && n.addEventListener("blur", F), this.data.comb) {
              const N = (this.data.rect[2] - this.data.rect[0]) / S;
              n.classList.add("comb"), n.style.letterSpacing = `calc(${N}px * var(--scale-factor) - 1ch)`;
            }
          } else
            n = document.createElement("div"), n.textContent = this.data.fieldValue, n.style.verticalAlign = "middle", n.style.display = "table-cell", this.data.hasOwnCanvas && (n.hidden = !0);
          return this._setTextStyle(n), this._setBackgroundColor(n), this._setDefaultPropertiesFromJS(n), this.container.append(n), this.container;
        }
      }
      class E extends y {
        constructor(v) {
          super(v, {
            isRenderable: !!v.data.hasOwnCanvas
          });
        }
      }
      class R extends y {
        constructor(v) {
          super(v, {
            isRenderable: v.renderForms
          });
        }
        render() {
          const v = this.annotationStorage, h = this.data, n = h.id;
          let a = v.getValue(n, {
            value: h.exportValue === h.fieldValue
          }).value;
          typeof a == "string" && (a = a !== "Off", v.setValue(n, {
            value: a
          })), this.container.classList.add("buttonWidgetAnnotation", "checkBox");
          const d = document.createElement("input");
          return l.add(d), d.setAttribute("data-element-id", n), d.disabled = h.readOnly, this._setRequired(d, this.data.required), d.type = "checkbox", d.name = h.fieldName, a && d.setAttribute("checked", !0), d.setAttribute("exportValue", h.exportValue), d.tabIndex = m, d.addEventListener("change", (S) => {
            const {
              name: C,
              checked: P
            } = S.target;
            for (const F of this._getElementsByName(C, n)) {
              const O = P && F.exportValue === h.exportValue;
              F.domElement && (F.domElement.checked = O), v.setValue(F.id, {
                value: O
              });
            }
            v.setValue(n, {
              value: P
            });
          }), d.addEventListener("resetform", (S) => {
            const C = h.defaultFieldValue || "Off";
            S.target.checked = C === h.exportValue;
          }), this.enableScripting && this.hasJSActions && (d.addEventListener("updatefromsandbox", (S) => {
            const C = {
              value(P) {
                P.target.checked = P.detail.value !== "Off", v.setValue(n, {
                  value: P.target.checked
                });
              }
            };
            this._dispatchEventFromSandbox(C, S);
          }), this._setEventListeners(d, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (S) => S.target.checked)), this._setBackgroundColor(d), this._setDefaultPropertiesFromJS(d), this.container.append(d), this.container;
        }
      }
      class L extends y {
        constructor(v) {
          super(v, {
            isRenderable: v.renderForms
          });
        }
        render() {
          this.container.classList.add("buttonWidgetAnnotation", "radioButton");
          const v = this.annotationStorage, h = this.data, n = h.id;
          let a = v.getValue(n, {
            value: h.fieldValue === h.buttonValue
          }).value;
          if (typeof a == "string" && (a = a !== h.buttonValue, v.setValue(n, {
            value: a
          })), a)
            for (const S of this._getElementsByName(h.fieldName, n))
              v.setValue(S.id, {
                value: !1
              });
          const d = document.createElement("input");
          if (l.add(d), d.setAttribute("data-element-id", n), d.disabled = h.readOnly, this._setRequired(d, this.data.required), d.type = "radio", d.name = h.fieldName, a && d.setAttribute("checked", !0), d.tabIndex = m, d.addEventListener("change", (S) => {
            const {
              name: C,
              checked: P
            } = S.target;
            for (const F of this._getElementsByName(C, n))
              v.setValue(F.id, {
                value: !1
              });
            v.setValue(n, {
              value: P
            });
          }), d.addEventListener("resetform", (S) => {
            const C = h.defaultFieldValue;
            S.target.checked = C != null && C === h.buttonValue;
          }), this.enableScripting && this.hasJSActions) {
            const S = h.buttonValue;
            d.addEventListener("updatefromsandbox", (C) => {
              const P = {
                value: (F) => {
                  const O = S === F.detail.value;
                  for (const N of this._getElementsByName(F.target.name)) {
                    const k = O && N.id === n;
                    N.domElement && (N.domElement.checked = k), v.setValue(N.id, {
                      value: k
                    });
                  }
                }
              };
              this._dispatchEventFromSandbox(P, C);
            }), this._setEventListeners(d, null, [["change", "Validate"], ["change", "Action"], ["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"]], (C) => C.target.checked);
          }
          return this._setBackgroundColor(d), this._setDefaultPropertiesFromJS(d), this.container.append(d), this.container;
        }
      }
      class M extends e {
        constructor(v) {
          super(v, {
            ignoreBorder: v.data.hasAppearance
          });
        }
        render() {
          const v = super.render();
          v.classList.add("buttonWidgetAnnotation", "pushButton"), this.data.alternativeText && (v.title = this.data.alternativeText);
          const h = v.lastChild;
          return this.enableScripting && this.hasJSActions && h && (this._setDefaultPropertiesFromJS(h), h.addEventListener("updatefromsandbox", (n) => {
            this._dispatchEventFromSandbox({}, n);
          })), v;
        }
      }
      class $ extends y {
        constructor(v) {
          super(v, {
            isRenderable: v.renderForms
          });
        }
        render() {
          this.container.classList.add("choiceWidgetAnnotation");
          const v = this.annotationStorage, h = this.data.id, n = v.getValue(h, {
            value: this.data.fieldValue
          }), a = document.createElement("select");
          l.add(a), a.setAttribute("data-element-id", h), a.disabled = this.data.readOnly, this._setRequired(a, this.data.required), a.name = this.data.fieldName, a.tabIndex = m;
          let d = this.data.combo && this.data.options.length > 0;
          this.data.combo || (a.size = this.data.options.length, this.data.multiSelect && (a.multiple = !0)), a.addEventListener("resetform", (O) => {
            const N = this.data.defaultFieldValue;
            for (const k of a.options)
              k.selected = k.value === N;
          });
          for (const O of this.data.options) {
            const N = document.createElement("option");
            N.textContent = O.displayValue, N.value = O.exportValue, n.value.includes(O.exportValue) && (N.setAttribute("selected", !0), d = !1), a.append(N);
          }
          let S = null;
          if (d) {
            const O = document.createElement("option");
            O.value = " ", O.setAttribute("hidden", !0), O.setAttribute("selected", !0), a.prepend(O), S = () => {
              O.remove(), a.removeEventListener("input", S), S = null;
            }, a.addEventListener("input", S);
          }
          const C = (O) => {
            const N = O ? "value" : "textContent", {
              options: k,
              multiple: U
            } = a;
            return U ? Array.prototype.filter.call(k, (Y) => Y.selected).map((Y) => Y[N]) : k.selectedIndex === -1 ? null : k[k.selectedIndex][N];
          };
          let P = C(!1);
          const F = (O) => {
            const N = O.target.options;
            return Array.prototype.map.call(N, (k) => ({
              displayValue: k.textContent,
              exportValue: k.value
            }));
          };
          return this.enableScripting && this.hasJSActions ? (a.addEventListener("updatefromsandbox", (O) => {
            const N = {
              value(k) {
                S?.();
                const U = k.detail.value, Y = new Set(Array.isArray(U) ? U : [U]);
                for (const G of a.options)
                  G.selected = Y.has(G.value);
                v.setValue(h, {
                  value: C(!0)
                }), P = C(!1);
              },
              multipleSelection(k) {
                a.multiple = !0;
              },
              remove(k) {
                const U = a.options, Y = k.detail.remove;
                U[Y].selected = !1, a.remove(Y), U.length > 0 && Array.prototype.findIndex.call(U, (I) => I.selected) === -1 && (U[0].selected = !0), v.setValue(h, {
                  value: C(!0),
                  items: F(k)
                }), P = C(!1);
              },
              clear(k) {
                for (; a.length !== 0; )
                  a.remove(0);
                v.setValue(h, {
                  value: null,
                  items: []
                }), P = C(!1);
              },
              insert(k) {
                const {
                  index: U,
                  displayValue: Y,
                  exportValue: G
                } = k.detail.insert, I = a.children[U], B = document.createElement("option");
                B.textContent = Y, B.value = G, I ? I.before(B) : a.append(B), v.setValue(h, {
                  value: C(!0),
                  items: F(k)
                }), P = C(!1);
              },
              items(k) {
                const {
                  items: U
                } = k.detail;
                for (; a.length !== 0; )
                  a.remove(0);
                for (const Y of U) {
                  const {
                    displayValue: G,
                    exportValue: I
                  } = Y, B = document.createElement("option");
                  B.textContent = G, B.value = I, a.append(B);
                }
                a.options.length > 0 && (a.options[0].selected = !0), v.setValue(h, {
                  value: C(!0),
                  items: F(k)
                }), P = C(!1);
              },
              indices(k) {
                const U = new Set(k.detail.indices);
                for (const Y of k.target.options)
                  Y.selected = U.has(Y.index);
                v.setValue(h, {
                  value: C(!0)
                }), P = C(!1);
              },
              editable(k) {
                k.target.disabled = !k.detail.editable;
              }
            };
            this._dispatchEventFromSandbox(N, O);
          }), a.addEventListener("input", (O) => {
            const N = C(!0);
            v.setValue(h, {
              value: N
            }), O.preventDefault(), this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: {
                id: h,
                name: "Keystroke",
                value: P,
                changeEx: N,
                willCommit: !1,
                commitKey: 1,
                keyDown: !1
              }
            });
          }), this._setEventListeners(a, null, [["focus", "Focus"], ["blur", "Blur"], ["mousedown", "Mouse Down"], ["mouseenter", "Mouse Enter"], ["mouseleave", "Mouse Exit"], ["mouseup", "Mouse Up"], ["input", "Action"], ["input", "Validate"]], (O) => O.target.value)) : a.addEventListener("input", function(O) {
            v.setValue(h, {
              value: C(!0)
            });
          }), this.data.combo && this._setTextStyle(a), this._setBackgroundColor(a), this._setDefaultPropertiesFromJS(a), this.container.append(a), this.container;
        }
      }
      class j extends f {
        constructor(v) {
          const {
            data: h,
            elements: n
          } = v;
          super(v, {
            isRenderable: f._hasPopupData(h)
          }), this.elements = n;
        }
        render() {
          this.container.classList.add("popupAnnotation");
          const v = new K({
            container: this.container,
            color: this.data.color,
            titleObj: this.data.titleObj,
            modificationDate: this.data.modificationDate,
            contentsObj: this.data.contentsObj,
            richText: this.data.richText,
            rect: this.data.rect,
            parentRect: this.data.parentRect || null,
            parent: this.parent,
            elements: this.elements,
            open: this.data.open
          }), h = [];
          for (const n of this.elements)
            n.popup = v, h.push(n.data.id), n.addHighlightArea();
          return this.container.setAttribute("aria-controls", h.map((n) => `${s.AnnotationPrefix}${n}`).join(",")), this.container;
        }
      }
      class K {
        #t = this.#y.bind(this);
        #e = this.#g.bind(this);
        #n = this.#A.bind(this);
        #s = this.#b.bind(this);
        #r = null;
        #i = null;
        #o = null;
        #l = null;
        #h = null;
        #c = null;
        #f = null;
        #u = !1;
        #d = null;
        #a = null;
        #p = null;
        #m = null;
        #v = !1;
        constructor(v) {
          let {
            container: h,
            color: n,
            elements: a,
            titleObj: d,
            modificationDate: S,
            contentsObj: C,
            richText: P,
            parent: F,
            rect: O,
            parentRect: N,
            open: k
          } = v;
          this.#i = h, this.#m = d, this.#o = C, this.#p = P, this.#c = F, this.#r = n, this.#a = O, this.#f = N, this.#h = a, this.#l = g.PDFDateString.toDateObject(S), this.trigger = a.flatMap((U) => U.getElementsToTriggerPopup());
          for (const U of this.trigger)
            U.addEventListener("click", this.#s), U.addEventListener("mouseenter", this.#n), U.addEventListener("mouseleave", this.#e), U.classList.add("popupTriggerArea");
          for (const U of a)
            U.container?.addEventListener("keydown", this.#t);
          this.#i.hidden = !0, k && this.#b();
        }
        render() {
          if (this.#d)
            return;
          const {
            page: {
              view: v
            },
            viewport: {
              rawDims: {
                pageWidth: h,
                pageHeight: n,
                pageX: a,
                pageY: d
              }
            }
          } = this.#c, S = this.#d = document.createElement("div");
          if (S.className = "popup", this.#r) {
            const q = S.style.outlineColor = s.Util.makeHexColor(...this.#r);
            CSS.supports("background-color", "color-mix(in srgb, red 30%, white)") ? S.style.backgroundColor = `color-mix(in srgb, ${q} 30%, white)` : S.style.backgroundColor = s.Util.makeHexColor(...this.#r.map((pt) => Math.floor(0.7 * (255 - pt) + pt)));
          }
          const C = document.createElement("span");
          C.className = "header";
          const P = document.createElement("h1");
          if (C.append(P), {
            dir: P.dir,
            str: P.textContent
          } = this.#m, S.append(C), this.#l) {
            const q = document.createElement("span");
            q.classList.add("popupDate"), q.setAttribute("data-l10n-id", "pdfjs-annotation-date-string"), q.setAttribute("data-l10n-args", JSON.stringify({
              date: this.#l.toLocaleDateString(),
              time: this.#l.toLocaleTimeString()
            })), C.append(q);
          }
          const F = this.#o, O = this.#p;
          if (O?.str && (!F?.str || F.str === O.str))
            p.XfaLayer.render({
              xfaHtml: O.html,
              intent: "richText",
              div: S
            }), S.lastChild.classList.add("richText", "popupContent");
          else {
            const q = this._formatContents(F);
            S.append(q);
          }
          let N = !!this.#f, k = N ? this.#f : this.#a;
          for (const q of this.#h)
            if (!k || s.Util.intersect(q.data.rect, k) !== null) {
              k = q.data.rect, N = !0;
              break;
            }
          const U = s.Util.normalizeRect([k[0], v[3] - k[1] + v[1], k[2], v[3] - k[3] + v[1]]), G = N ? k[2] - k[0] + 5 : 0, I = U[0] + G, B = U[1], {
            style: st
          } = this.#i;
          st.left = `${100 * (I - a) / h}%`, st.top = `${100 * (B - d) / n}%`, this.#i.append(S);
        }
        _formatContents(v) {
          let {
            str: h,
            dir: n
          } = v;
          const a = document.createElement("p");
          a.classList.add("popupContent"), a.dir = n;
          const d = h.split(/(?:\r\n?|\n)/);
          for (let S = 0, C = d.length; S < C; ++S) {
            const P = d[S];
            a.append(document.createTextNode(P)), S < C - 1 && a.append(document.createElement("br"));
          }
          return a;
        }
        #y(v) {
          v.altKey || v.shiftKey || v.ctrlKey || v.metaKey || (v.key === "Enter" || v.key === "Escape" && this.#u) && this.#b();
        }
        #b() {
          this.#u = !this.#u, this.#u ? (this.#A(), this.#i.addEventListener("click", this.#s), this.#i.addEventListener("keydown", this.#t)) : (this.#g(), this.#i.removeEventListener("click", this.#s), this.#i.removeEventListener("keydown", this.#t));
        }
        #A() {
          this.#d || this.render(), this.isVisible ? this.#u && this.#i.classList.add("focused") : (this.#i.hidden = !1, this.#i.style.zIndex = parseInt(this.#i.style.zIndex) + 1e3);
        }
        #g() {
          this.#i.classList.remove("focused"), !(this.#u || !this.isVisible) && (this.#i.hidden = !0, this.#i.style.zIndex = parseInt(this.#i.style.zIndex) - 1e3);
        }
        forceHide() {
          this.#v = this.isVisible, this.#v && (this.#i.hidden = !0);
        }
        maybeShow() {
          this.#v && (this.#v = !1, this.#i.hidden = !1);
        }
        get isVisible() {
          return this.#i.hidden === !1;
        }
      }
      class Q extends f {
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0
          }), this.textContent = v.data.textContent, this.textPosition = v.data.textPosition, this.annotationEditorType = s.AnnotationEditorType.FREETEXT;
        }
        render() {
          if (this.container.classList.add("freeTextAnnotation"), this.textContent) {
            const v = document.createElement("div");
            v.classList.add("annotationTextContent"), v.setAttribute("role", "comment");
            for (const h of this.textContent) {
              const n = document.createElement("span");
              n.textContent = h, v.append(n);
            }
            this.container.append(v);
          }
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this._editOnDoubleClick(), this.container;
        }
        get _isEditable() {
          return this.data.hasOwnCanvas;
        }
      }
      class J extends f {
        #t = null;
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0
          });
        }
        render() {
          this.container.classList.add("lineAnnotation");
          const v = this.data, {
            width: h,
            height: n
          } = c(v.rect), a = this.svgFactory.create(h, n, !0), d = this.#t = this.svgFactory.createElement("svg:line");
          return d.setAttribute("x1", v.rect[2] - v.lineCoordinates[0]), d.setAttribute("y1", v.rect[3] - v.lineCoordinates[1]), d.setAttribute("x2", v.rect[2] - v.lineCoordinates[2]), d.setAttribute("y2", v.rect[3] - v.lineCoordinates[3]), d.setAttribute("stroke-width", v.borderStyle.width || 1), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "transparent"), a.append(d), this.container.append(a), !v.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return this.#t;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      class at extends f {
        #t = null;
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0
          });
        }
        render() {
          this.container.classList.add("squareAnnotation");
          const v = this.data, {
            width: h,
            height: n
          } = c(v.rect), a = this.svgFactory.create(h, n, !0), d = v.borderStyle.width, S = this.#t = this.svgFactory.createElement("svg:rect");
          return S.setAttribute("x", d / 2), S.setAttribute("y", d / 2), S.setAttribute("width", h - d), S.setAttribute("height", n - d), S.setAttribute("stroke-width", d || 1), S.setAttribute("stroke", "transparent"), S.setAttribute("fill", "transparent"), a.append(S), this.container.append(a), !v.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return this.#t;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      class ut extends f {
        #t = null;
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0
          });
        }
        render() {
          this.container.classList.add("circleAnnotation");
          const v = this.data, {
            width: h,
            height: n
          } = c(v.rect), a = this.svgFactory.create(h, n, !0), d = v.borderStyle.width, S = this.#t = this.svgFactory.createElement("svg:ellipse");
          return S.setAttribute("cx", h / 2), S.setAttribute("cy", n / 2), S.setAttribute("rx", h / 2 - d / 2), S.setAttribute("ry", n / 2 - d / 2), S.setAttribute("stroke-width", d || 1), S.setAttribute("stroke", "transparent"), S.setAttribute("fill", "transparent"), a.append(S), this.container.append(a), !v.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return this.#t;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      class ht extends f {
        #t = null;
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0
          }), this.containerClassName = "polylineAnnotation", this.svgElementName = "svg:polyline";
        }
        render() {
          this.container.classList.add(this.containerClassName);
          const v = this.data, {
            width: h,
            height: n
          } = c(v.rect), a = this.svgFactory.create(h, n, !0);
          let d = [];
          for (const C of v.vertices) {
            const P = C.x - v.rect[0], F = v.rect[3] - C.y;
            d.push(P + "," + F);
          }
          d = d.join(" ");
          const S = this.#t = this.svgFactory.createElement(this.svgElementName);
          return S.setAttribute("points", d), S.setAttribute("stroke-width", v.borderStyle.width || 1), S.setAttribute("stroke", "transparent"), S.setAttribute("fill", "transparent"), a.append(S), this.container.append(a), !v.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
        getElementsToTriggerPopup() {
          return this.#t;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      class _ extends ht {
        constructor(v) {
          super(v), this.containerClassName = "polygonAnnotation", this.svgElementName = "svg:polygon";
        }
      }
      class Z extends f {
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0
          });
        }
        render() {
          return this.container.classList.add("caretAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
      }
      class z extends f {
        #t = [];
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0
          }), this.containerClassName = "inkAnnotation", this.svgElementName = "svg:polyline", this.annotationEditorType = s.AnnotationEditorType.INK;
        }
        render() {
          this.container.classList.add(this.containerClassName);
          const v = this.data, {
            width: h,
            height: n
          } = c(v.rect), a = this.svgFactory.create(h, n, !0);
          for (const d of v.inkLists) {
            let S = [];
            for (const P of d) {
              const F = P.x - v.rect[0], O = v.rect[3] - P.y;
              S.push(`${F},${O}`);
            }
            S = S.join(" ");
            const C = this.svgFactory.createElement(this.svgElementName);
            this.#t.push(C), C.setAttribute("points", S), C.setAttribute("stroke-width", v.borderStyle.width || 1), C.setAttribute("stroke", "transparent"), C.setAttribute("fill", "transparent"), !v.popupRef && this.hasPopupData && this._createPopup(), a.append(C);
          }
          return this.container.append(a), this.container;
        }
        getElementsToTriggerPopup() {
          return this.#t;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
      }
      class V extends f {
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0,
            createQuadrilaterals: !0
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("highlightAnnotation"), this.container;
        }
      }
      class nt extends f {
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0,
            createQuadrilaterals: !0
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("underlineAnnotation"), this.container;
        }
      }
      class ot extends f {
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0,
            createQuadrilaterals: !0
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("squigglyAnnotation"), this.container;
        }
      }
      class lt extends f {
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0,
            createQuadrilaterals: !0
          });
        }
        render() {
          return !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container.classList.add("strikeoutAnnotation"), this.container;
        }
      }
      class vt extends f {
        constructor(v) {
          super(v, {
            isRenderable: !0,
            ignoreBorder: !0
          });
        }
        render() {
          return this.container.classList.add("stampAnnotation"), !this.data.popupRef && this.hasPopupData && this._createPopup(), this.container;
        }
      }
      class Tt extends f {
        #t = null;
        constructor(v) {
          super(v, {
            isRenderable: !0
          });
          const {
            filename: h,
            content: n
          } = this.data.file;
          this.filename = (0, g.getFilenameFromUrl)(h, !0), this.content = n, this.linkService.eventBus?.dispatch("fileattachmentannotation", {
            source: this,
            filename: h,
            content: n
          });
        }
        render() {
          this.container.classList.add("fileAttachmentAnnotation");
          const {
            container: v,
            data: h
          } = this;
          let n;
          h.hasAppearance || h.fillAlpha === 0 ? n = document.createElement("div") : (n = document.createElement("img"), n.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(h.name) ? "paperclip" : "pushpin"}.svg`, h.fillAlpha && h.fillAlpha < 1 && (n.style = `filter: opacity(${Math.round(h.fillAlpha * 100)}%);`)), n.addEventListener("dblclick", this.#e.bind(this)), this.#t = n;
          const {
            isMac: a
          } = s.FeatureTest.platform;
          return v.addEventListener("keydown", (d) => {
            d.key === "Enter" && (a ? d.metaKey : d.ctrlKey) && this.#e();
          }), !h.popupRef && this.hasPopupData ? this._createPopup() : n.classList.add("popupTriggerArea"), v.append(n), v;
        }
        getElementsToTriggerPopup() {
          return this.#t;
        }
        addHighlightArea() {
          this.container.classList.add("highlightArea");
        }
        #e() {
          this.downloadManager?.openOrDownloadData(this.content, this.filename);
        }
      }
      class St {
        #t = null;
        #e = null;
        #n = /* @__PURE__ */ new Map();
        constructor(v) {
          let {
            div: h,
            accessibilityManager: n,
            annotationCanvasMap: a,
            page: d,
            viewport: S
          } = v;
          this.div = h, this.#t = n, this.#e = a, this.page = d, this.viewport = S, this.zIndex = 0;
        }
        #s(v, h) {
          const n = v.firstChild || v;
          n.id = `${s.AnnotationPrefix}${h}`, this.div.append(v), this.#t?.moveElementInDOM(this.div, v, n, !1);
        }
        async render(v) {
          const {
            annotations: h
          } = v, n = this.div;
          (0, g.setLayerDimensions)(n, this.viewport);
          const a = /* @__PURE__ */ new Map(), d = {
            data: null,
            layer: n,
            linkService: v.linkService,
            downloadManager: v.downloadManager,
            imageResourcesPath: v.imageResourcesPath || "",
            renderForms: v.renderForms !== !1,
            svgFactory: new g.DOMSVGFactory(),
            annotationStorage: v.annotationStorage || new u.AnnotationStorage(),
            enableScripting: v.enableScripting === !0,
            hasJSActions: v.hasJSActions,
            fieldObjects: v.fieldObjects,
            parent: this,
            elements: null
          };
          for (const S of h) {
            if (S.noHTML)
              continue;
            const C = S.annotationType === s.AnnotationType.POPUP;
            if (C) {
              const O = a.get(S.id);
              if (!O)
                continue;
              d.elements = O;
            } else {
              const {
                width: O,
                height: N
              } = c(S.rect);
              if (O <= 0 || N <= 0)
                continue;
            }
            d.data = S;
            const P = r.create(d);
            if (!P.isRenderable)
              continue;
            if (!C && S.popupRef) {
              const O = a.get(S.popupRef);
              O ? O.push(P) : a.set(S.popupRef, [P]);
            }
            P.annotationEditorType > 0 && this.#n.set(P.data.id, P);
            const F = P.render();
            S.hidden && (F.style.visibility = "hidden"), this.#s(F, S.id);
          }
          this.#r();
        }
        update(v) {
          let {
            viewport: h
          } = v;
          const n = this.div;
          this.viewport = h, (0, g.setLayerDimensions)(n, {
            rotation: h.rotation
          }), this.#r(), n.hidden = !1;
        }
        #r() {
          if (!this.#e)
            return;
          const v = this.div;
          for (const [h, n] of this.#e) {
            const a = v.querySelector(`[data-annotation-id="${h}"]`);
            if (!a)
              continue;
            const {
              firstChild: d
            } = a;
            d ? d.nodeName === "CANVAS" ? d.replaceWith(n) : d.before(n) : a.append(n);
          }
          this.#e.clear();
        }
        getEditableAnnotations() {
          return Array.from(this.#n.values());
        }
        getEditableAnnotation(v) {
          return this.#n.get(v);
        }
      }
    })
  ),
  /***/
  4780: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        AnnotationStorage: () => (
          /* binding */
          b
        ),
        /* harmony export */
        PrintAnnotationStorage: () => (
          /* binding */
          x
        ),
        /* harmony export */
        SerializableEmpty: () => (
          /* binding */
          A
        )
        /* harmony export */
      }), t(4226), t(7944), t(9709);
      var s = t(3266), g = t(9115), u = t(2825);
      const A = Object.freeze({
        map: null,
        hash: "",
        transfer: void 0
      });
      class b {
        #t = !1;
        #e = /* @__PURE__ */ new Map();
        constructor() {
          this.onSetModified = null, this.onResetModified = null, this.onAnnotationEditor = null;
        }
        getValue(m, o) {
          const l = this.#e.get(m);
          return l === void 0 ? o : Object.assign(o, l);
        }
        getRawValue(m) {
          return this.#e.get(m);
        }
        remove(m) {
          if (this.#e.delete(m), this.#e.size === 0 && this.resetModified(), typeof this.onAnnotationEditor == "function") {
            for (const o of this.#e.values())
              if (o instanceof g.AnnotationEditor)
                return;
            this.onAnnotationEditor(null);
          }
        }
        setValue(m, o) {
          const l = this.#e.get(m);
          let c = !1;
          if (l !== void 0)
            for (const [r, f] of Object.entries(o))
              l[r] !== f && (c = !0, l[r] = f);
          else
            c = !0, this.#e.set(m, o);
          c && this.#n(), o instanceof g.AnnotationEditor && typeof this.onAnnotationEditor == "function" && this.onAnnotationEditor(o.constructor._type);
        }
        has(m) {
          return this.#e.has(m);
        }
        getAll() {
          return this.#e.size > 0 ? (0, s.objectFromMap)(this.#e) : null;
        }
        setAll(m) {
          for (const [o, l] of Object.entries(m))
            this.setValue(o, l);
        }
        get size() {
          return this.#e.size;
        }
        #n() {
          this.#t || (this.#t = !0, typeof this.onSetModified == "function" && this.onSetModified());
        }
        resetModified() {
          this.#t && (this.#t = !1, typeof this.onResetModified == "function" && this.onResetModified());
        }
        get print() {
          return new x(this);
        }
        get serializable() {
          if (this.#e.size === 0)
            return A;
          const m = /* @__PURE__ */ new Map(), o = new u.MurmurHash3_64(), l = [], c = /* @__PURE__ */ Object.create(null);
          let r = !1;
          for (const [f, e] of this.#e) {
            const i = e instanceof g.AnnotationEditor ? e.serialize(!1, c) : e;
            i && (m.set(f, i), o.update(`${f}:${JSON.stringify(i)}`), r ||= !!i.bitmap);
          }
          if (r)
            for (const f of m.values())
              f.bitmap && l.push(f.bitmap);
          return m.size > 0 ? {
            map: m,
            hash: o.hexdigest(),
            transfer: l
          } : A;
        }
      }
      class x extends b {
        #t;
        constructor(m) {
          super();
          const {
            map: o,
            hash: l,
            transfer: c
          } = m.serializable, r = structuredClone(o, c ? {
            transfer: c
          } : null);
          this.#t = {
            map: r,
            hash: l,
            transfer: c
          };
        }
        get print() {
          (0, s.unreachable)("Should not call PrintAnnotationStorage.print");
        }
        get serializable() {
          return this.#t;
        }
      }
    })
  ),
  /***/
  9406: (
    /***/
    ((w, D, t) => {
      t.a(w, async (s, g) => {
        try {
          let F = function(et) {
            if (typeof et == "string" || et instanceof URL ? et = {
              url: et
            } : (0, J.isArrayBuffer)(et) && (et = {
              data: et
            }), typeof et != "object")
              throw new Error("Invalid parameter in getDocument, need parameter object.");
            if (!et.url && !et.data && !et.range)
              throw new Error("Invalid parameter object: need either .data, .range or .url");
            const H = new U(), {
              docId: W
            } = H, X = et.url ? N(et.url) : null, rt = et.data ? k(et.data) : null, it = et.httpHeaders || null, dt = et.withCredentials === !0, gt = et.password ?? null, Et = et.range instanceof Y ? et.range : null, xt = Number.isInteger(et.rangeChunkSize) && et.rangeChunkSize > 0 ? et.rangeChunkSize : h;
            let Ct = et.worker instanceof q ? et.worker : null;
            const wt = et.verbosity, Pt = typeof et.docBaseUrl == "string" && !(0, ut.isDataScheme)(et.docBaseUrl) ? et.docBaseUrl : null, Rt = typeof et.cMapUrl == "string" ? et.cMapUrl : null, Mt = et.cMapPacked !== !1, It = et.CMapReaderFactory || S, Lt = typeof et.standardFontDataUrl == "string" ? et.standardFontDataUrl : null, Nt = et.StandardFontDataFactory || P, Dt = et.stopAtErrors !== !0, Ft = Number.isInteger(et.maxImageSize) && et.maxImageSize > -1 ? et.maxImageSize : -1, jt = et.isEvalSupported !== !1, _t = typeof et.isOffscreenCanvasSupported == "boolean" ? et.isOffscreenCanvasSupported : !J.isNodeJS, te = Number.isInteger(et.canvasMaxAreaInBytes) ? et.canvasMaxAreaInBytes : -1, Ut = typeof et.disableFontFace == "boolean" ? et.disableFontFace : J.isNodeJS, Wt = et.fontExtraProperties === !0, Yt = et.enableXfa === !0, zt = et.ownerDocument || globalThis.document, Kt = et.disableRange === !0, Jt = et.disableStream === !0, Qt = et.disableAutoFetch === !0, ee = et.pdfBug === !0, $t = Et ? Et.length : et.length ?? NaN, ne = typeof et.useSystemFonts == "boolean" ? et.useSystemFonts : !J.isNodeJS && !Ut, Vt = typeof et.useWorkerFetch == "boolean" ? et.useWorkerFetch : It === ut.DOMCMapReaderFactory && Nt === ut.DOMStandardFontDataFactory && Rt && Lt && (0, ut.isValidFetchUrl)(Rt, document.baseURI) && (0, ut.isValidFetchUrl)(Lt, document.baseURI), se = et.canvasFactory || new d({
              ownerDocument: zt
            }), re = et.filterFactory || new C({
              docId: W,
              ownerDocument: zt
            }), ie = null;
            (0, J.setVerbosityLevel)(wt);
            const Gt = {
              canvasFactory: se,
              filterFactory: re
            };
            if (Vt || (Gt.cMapReaderFactory = new It({
              baseUrl: Rt,
              isCompressed: Mt
            }), Gt.standardFontDataFactory = new Nt({
              baseUrl: Lt
            })), !Ct) {
              const Bt = {
                verbosity: wt,
                port: z.GlobalWorkerOptions.workerPort
              };
              Ct = Bt.port ? q.fromPort(Bt) : new q(Bt), H._worker = Ct;
            }
            const ae = {
              docId: W,
              apiVersion: "4.0.379",
              data: rt,
              password: gt,
              disableAutoFetch: Qt,
              rangeChunkSize: xt,
              length: $t,
              docBaseUrl: Pt,
              enableXfa: Yt,
              evaluatorOptions: {
                maxImageSize: Ft,
                disableFontFace: Ut,
                ignoreErrors: Dt,
                isEvalSupported: jt,
                isOffscreenCanvasSupported: _t,
                canvasMaxAreaInBytes: te,
                fontExtraProperties: Wt,
                useSystemFonts: ne,
                cMapUrl: Vt ? Rt : null,
                standardFontDataUrl: Vt ? Lt : null
              }
            }, oe = {
              ignoreErrors: Dt,
              isEvalSupported: jt,
              disableFontFace: Ut,
              fontExtraProperties: Wt,
              enableXfa: Yt,
              ownerDocument: zt,
              disableAutoFetch: Qt,
              pdfBug: ee,
              styleElement: ie
            };
            return Ct.promise.then(function() {
              if (H.destroyed)
                throw new Error("Loading aborted");
              const Bt = O(Ct, ae), le = new Promise(function(Xt) {
                let Ht;
                Et ? Ht = new lt.PDFDataTransportStream({
                  length: $t,
                  initialData: Et.initialData,
                  progressiveDone: Et.progressiveDone,
                  contentDispositionFilename: Et.contentDispositionFilename,
                  disableRange: Kt,
                  disableStream: Jt
                }, Et) : rt || (Ht = ((Ot) => J.isNodeJS ? new St.PDFNodeStream(Ot) : (0, ut.isValidFetchUrl)(Ot.url) ? new vt.PDFFetchStream(Ot) : new Tt.PDFNetworkStream(Ot))({
                  url: X,
                  length: $t,
                  httpHeaders: it,
                  withCredentials: dt,
                  rangeChunkSize: xt,
                  disableRange: Kt,
                  disableStream: Jt
                })), Xt(Ht);
              });
              return Promise.all([Bt, le]).then(function(Xt) {
                let [Ht, Zt] = Xt;
                if (H.destroyed)
                  throw new Error("Loading aborted");
                const Ot = new V.MessageHandler(W, Ht, Ct.port), he = new ct(Ot, H, Zt, oe, Gt);
                H._transport = he, Ot.send("Ready", null);
              });
            }).catch(H._capability.reject), H;
          }, N = function(et) {
            if (et instanceof URL)
              return et.href;
            try {
              return new URL(et, window.location).href;
            } catch {
              if (J.isNodeJS && typeof et == "string")
                return et;
            }
            throw new Error("Invalid PDF url data: either string or URL-object is expected in the url property.");
          }, k = function(et) {
            if (J.isNodeJS && typeof Buffer < "u" && et instanceof Buffer)
              throw new Error("Please provide binary data as `Uint8Array`, rather than `Buffer`.");
            if (et instanceof Uint8Array && et.byteLength === et.buffer.byteLength)
              return et;
            if (typeof et == "string")
              return (0, J.stringToBytes)(et);
            if (typeof et == "object" && !isNaN(et?.length) || (0, J.isArrayBuffer)(et))
              return new Uint8Array(et);
            throw new Error("Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.");
          };
          t.d(D, {
            /* harmony export */
            PDFDataRangeTransport: () => (
              /* binding */
              Y
            ),
            /* harmony export */
            PDFWorker: () => (
              /* binding */
              q
            ),
            /* harmony export */
            build: () => (
              /* binding */
              At
            ),
            /* harmony export */
            getDocument: () => (
              /* binding */
              F
            ),
            /* harmony export */
            version: () => (
              /* binding */
              yt
            )
            /* harmony export */
          });
          var u = t(3655), A = t(2555), b = t(2202), x = t(3352), p = t(8837), m = t(9803), o = t(8347), l = t(7995), c = t(62), r = t(4602), f = t(344), e = t(4305), i = t(7583), y = t(4226), T = t(5561), E = t(8587), R = t(3247), L = t(3302), M = t(9490), $ = t(5438), j = t(7914), K = t(7944), Q = t(9709), J = t(3266), at = t(4780), ut = t(473), ht = t(3742), _ = t(7738), Z = t(1250), z = t(1368), V = t(6694), nt = t(3472), ot = t(3890), lt = t(4092), vt = t(5171), Tt = t(3474), St = t(3498), tt = t(1521), v = s([_, St]);
          [_, St] = v.then ? (await v)() : v;
          const h = 65536, n = 100, a = 5e3, d = J.isNodeJS ? _.NodeCanvasFactory : ut.DOMCanvasFactory, S = J.isNodeJS ? _.NodeCMapReaderFactory : ut.DOMCMapReaderFactory, C = J.isNodeJS ? _.NodeFilterFactory : ut.DOMFilterFactory, P = J.isNodeJS ? _.NodeStandardFontDataFactory : ut.DOMStandardFontDataFactory;
          async function O(et, H) {
            if (et.destroyed)
              throw new Error("Worker was destroyed");
            const W = await et.messageHandler.sendWithPromise("GetDocRequest", H, H.data ? [H.data.buffer] : null);
            if (et.destroyed)
              throw new Error("Worker was destroyed");
            return W;
          }
          class U {
            static #t = 0;
            constructor() {
              this._capability = new J.PromiseCapability(), this._transport = null, this._worker = null, this.docId = `d${U.#t++}`, this.destroyed = !1, this.onPassword = null, this.onProgress = null;
            }
            get promise() {
              return this._capability.promise;
            }
            async destroy() {
              this.destroyed = !0;
              try {
                this._worker?.port && (this._worker._pendingDestroy = !0), await this._transport?.destroy();
              } catch (H) {
                throw this._worker?.port && delete this._worker._pendingDestroy, H;
              }
              this._transport = null, this._worker && (this._worker.destroy(), this._worker = null);
            }
          }
          class Y {
            constructor(H, W) {
              let X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, rt = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
              this.length = H, this.initialData = W, this.progressiveDone = X, this.contentDispositionFilename = rt, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._progressiveDoneListeners = [], this._readyCapability = new J.PromiseCapability();
            }
            addRangeListener(H) {
              this._rangeListeners.push(H);
            }
            addProgressListener(H) {
              this._progressListeners.push(H);
            }
            addProgressiveReadListener(H) {
              this._progressiveReadListeners.push(H);
            }
            addProgressiveDoneListener(H) {
              this._progressiveDoneListeners.push(H);
            }
            onDataRange(H, W) {
              for (const X of this._rangeListeners)
                X(H, W);
            }
            onDataProgress(H, W) {
              this._readyCapability.promise.then(() => {
                for (const X of this._progressListeners)
                  X(H, W);
              });
            }
            onDataProgressiveRead(H) {
              this._readyCapability.promise.then(() => {
                for (const W of this._progressiveReadListeners)
                  W(H);
              });
            }
            onDataProgressiveDone() {
              this._readyCapability.promise.then(() => {
                for (const H of this._progressiveDoneListeners)
                  H();
              });
            }
            transportReady() {
              this._readyCapability.resolve();
            }
            requestDataRange(H, W) {
              (0, J.unreachable)("Abstract method PDFDataRangeTransport.requestDataRange");
            }
            abort() {
            }
          }
          class G {
            constructor(H, W) {
              this._pdfInfo = H, this._transport = W;
            }
            get annotationStorage() {
              return this._transport.annotationStorage;
            }
            get filterFactory() {
              return this._transport.filterFactory;
            }
            get numPages() {
              return this._pdfInfo.numPages;
            }
            get fingerprints() {
              return this._pdfInfo.fingerprints;
            }
            get isPureXfa() {
              return (0, J.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
            }
            get allXfaHtml() {
              return this._transport._htmlForXfa;
            }
            getPage(H) {
              return this._transport.getPage(H);
            }
            getPageIndex(H) {
              return this._transport.getPageIndex(H);
            }
            getDestinations() {
              return this._transport.getDestinations();
            }
            getDestination(H) {
              return this._transport.getDestination(H);
            }
            getPageLabels() {
              return this._transport.getPageLabels();
            }
            getPageLayout() {
              return this._transport.getPageLayout();
            }
            getPageMode() {
              return this._transport.getPageMode();
            }
            getViewerPreferences() {
              return this._transport.getViewerPreferences();
            }
            getOpenAction() {
              return this._transport.getOpenAction();
            }
            getAttachments() {
              return this._transport.getAttachments();
            }
            getJSActions() {
              return this._transport.getDocJSActions();
            }
            getOutline() {
              return this._transport.getOutline();
            }
            getOptionalContentConfig() {
              return this._transport.getOptionalContentConfig();
            }
            getPermissions() {
              return this._transport.getPermissions();
            }
            getMetadata() {
              return this._transport.getMetadata();
            }
            getMarkInfo() {
              return this._transport.getMarkInfo();
            }
            getData() {
              return this._transport.getData();
            }
            saveDocument() {
              return this._transport.saveDocument();
            }
            getDownloadInfo() {
              return this._transport.downloadInfoCapability.promise;
            }
            cleanup() {
              let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
              return this._transport.startCleanup(H || this.isPureXfa);
            }
            destroy() {
              return this.loadingTask.destroy();
            }
            get loadingParams() {
              return this._transport.loadingParams;
            }
            get loadingTask() {
              return this._transport.loadingTask;
            }
            getFieldObjects() {
              return this._transport.getFieldObjects();
            }
            hasJSActions() {
              return this._transport.hasJSActions();
            }
            getCalculationOrderIds() {
              return this._transport.getCalculationOrderIds();
            }
          }
          class I {
            #t = null;
            #e = !1;
            constructor(H, W, X) {
              let rt = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
              this._pageIndex = H, this._pageInfo = W, this._transport = X, this._stats = rt ? new ut.StatTimer() : null, this._pdfBug = rt, this.commonObjs = X.commonObjs, this.objs = new pt(), this._maybeCleanupAfterRender = !1, this._intentStates = /* @__PURE__ */ new Map(), this.destroyed = !1;
            }
            get pageNumber() {
              return this._pageIndex + 1;
            }
            get rotate() {
              return this._pageInfo.rotate;
            }
            get ref() {
              return this._pageInfo.ref;
            }
            get userUnit() {
              return this._pageInfo.userUnit;
            }
            get view() {
              return this._pageInfo.view;
            }
            getViewport() {
              let {
                scale: H,
                rotation: W = this.rotate,
                offsetX: X = 0,
                offsetY: rt = 0,
                dontFlip: it = !1
              } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return new ut.PageViewport({
                viewBox: this.view,
                scale: H,
                rotation: W,
                offsetX: X,
                offsetY: rt,
                dontFlip: it
              });
            }
            getAnnotations() {
              let {
                intent: H = "display"
              } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              const W = this._transport.getRenderingIntent(H);
              return this._transport.getAnnotations(this._pageIndex, W.renderingIntent);
            }
            getJSActions() {
              return this._transport.getPageJSActions(this._pageIndex);
            }
            get filterFactory() {
              return this._transport.filterFactory;
            }
            get isPureXfa() {
              return (0, J.shadow)(this, "isPureXfa", !!this._transport._htmlForXfa);
            }
            async getXfa() {
              return this._transport._htmlForXfa?.children[this._pageIndex] || null;
            }
            render(H) {
              let {
                canvasContext: W,
                viewport: X,
                intent: rt = "display",
                annotationMode: it = J.AnnotationMode.ENABLE,
                transform: dt = null,
                background: gt = null,
                optionalContentConfigPromise: Et = null,
                annotationCanvasMap: xt = null,
                pageColors: Ct = null,
                printAnnotationStorage: wt = null
              } = H;
              this._stats?.time("Overall");
              const Pt = this._transport.getRenderingIntent(rt, it, wt);
              this.#e = !1, this.#s(), Et || (Et = this._transport.getOptionalContentConfig());
              let Rt = this._intentStates.get(Pt.cacheKey);
              Rt || (Rt = /* @__PURE__ */ Object.create(null), this._intentStates.set(Pt.cacheKey, Rt)), Rt.streamReaderCancelTimeout && (clearTimeout(Rt.streamReaderCancelTimeout), Rt.streamReaderCancelTimeout = null);
              const Mt = !!(Pt.renderingIntent & J.RenderingIntentFlag.PRINT);
              Rt.displayReadyCapability || (Rt.displayReadyCapability = new J.PromiseCapability(), Rt.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
              }, this._stats?.time("Page Request"), this._pumpOperatorList(Pt));
              const It = (Dt) => {
                Rt.renderTasks.delete(Lt), (this._maybeCleanupAfterRender || Mt) && (this.#e = !0), this.#n(!Mt), Dt ? (Lt.capability.reject(Dt), this._abortOperatorList({
                  intentState: Rt,
                  reason: Dt instanceof Error ? Dt : new Error(Dt)
                })) : Lt.capability.resolve(), this._stats?.timeEnd("Rendering"), this._stats?.timeEnd("Overall");
              }, Lt = new mt({
                callback: It,
                params: {
                  canvasContext: W,
                  viewport: X,
                  transform: dt,
                  background: gt
                },
                objs: this.objs,
                commonObjs: this.commonObjs,
                annotationCanvasMap: xt,
                operatorList: Rt.operatorList,
                pageIndex: this._pageIndex,
                canvasFactory: this._transport.canvasFactory,
                filterFactory: this._transport.filterFactory,
                useRequestAnimationFrame: !Mt,
                pdfBug: this._pdfBug,
                pageColors: Ct
              });
              (Rt.renderTasks ||= /* @__PURE__ */ new Set()).add(Lt);
              const Nt = Lt.task;
              return Promise.all([Rt.displayReadyCapability.promise, Et]).then((Dt) => {
                let [Ft, jt] = Dt;
                if (this.destroyed) {
                  It();
                  return;
                }
                this._stats?.time("Rendering"), Lt.initializeGraphics({
                  transparency: Ft,
                  optionalContentConfig: jt
                }), Lt.operatorListChanged();
              }).catch(It), Nt;
            }
            getOperatorList() {
              let {
                intent: H = "display",
                annotationMode: W = J.AnnotationMode.ENABLE,
                printAnnotationStorage: X = null
              } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              function rt() {
                dt.operatorList.lastChunk && (dt.opListReadCapability.resolve(dt.operatorList), dt.renderTasks.delete(gt));
              }
              const it = this._transport.getRenderingIntent(H, W, X, !0);
              let dt = this._intentStates.get(it.cacheKey);
              dt || (dt = /* @__PURE__ */ Object.create(null), this._intentStates.set(it.cacheKey, dt));
              let gt;
              return dt.opListReadCapability || (gt = /* @__PURE__ */ Object.create(null), gt.operatorListChanged = rt, dt.opListReadCapability = new J.PromiseCapability(), (dt.renderTasks ||= /* @__PURE__ */ new Set()).add(gt), dt.operatorList = {
                fnArray: [],
                argsArray: [],
                lastChunk: !1,
                separateAnnots: null
              }, this._stats?.time("Page Request"), this._pumpOperatorList(it)), dt.opListReadCapability.promise;
            }
            streamTextContent() {
              let {
                includeMarkedContent: H = !1,
                disableNormalization: W = !1
              } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              return this._transport.messageHandler.sendWithStream("GetTextContent", {
                pageIndex: this._pageIndex,
                includeMarkedContent: H === !0,
                disableNormalization: W === !0
              }, {
                highWaterMark: 100,
                size(rt) {
                  return rt.items.length;
                }
              });
            }
            getTextContent() {
              let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              if (this._transport._htmlForXfa)
                return this.getXfa().then((X) => tt.XfaText.textContent(X));
              const W = this.streamTextContent(H);
              return new Promise(function(X, rt) {
                function it() {
                  dt.read().then(function(Et) {
                    let {
                      value: xt,
                      done: Ct
                    } = Et;
                    if (Ct) {
                      X(gt);
                      return;
                    }
                    Object.assign(gt.styles, xt.styles), gt.items.push(...xt.items), it();
                  }, rt);
                }
                const dt = W.getReader(), gt = {
                  items: [],
                  styles: /* @__PURE__ */ Object.create(null)
                };
                it();
              });
            }
            getStructTree() {
              return this._transport.getStructTree(this._pageIndex);
            }
            _destroy() {
              this.destroyed = !0;
              const H = [];
              for (const W of this._intentStates.values())
                if (this._abortOperatorList({
                  intentState: W,
                  reason: new Error("Page was destroyed."),
                  force: !0
                }), !W.opListReadCapability)
                  for (const X of W.renderTasks)
                    H.push(X.completed), X.cancel();
              return this.objs.clear(), this.#e = !1, this.#s(), Promise.all(H);
            }
            cleanup() {
              let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
              this.#e = !0;
              const W = this.#n(!1);
              return H && W && (this._stats &&= new ut.StatTimer()), W;
            }
            #n() {
              let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
              if (this.#s(), !this.#e || this.destroyed)
                return !1;
              if (H)
                return this.#t = setTimeout(() => {
                  this.#t = null, this.#n(!1);
                }, a), !1;
              for (const {
                renderTasks: W,
                operatorList: X
              } of this._intentStates.values())
                if (W.size > 0 || !X.lastChunk)
                  return !1;
              return this._intentStates.clear(), this.objs.clear(), this.#e = !1, !0;
            }
            #s() {
              this.#t && (clearTimeout(this.#t), this.#t = null);
            }
            _startRenderPage(H, W) {
              const X = this._intentStates.get(W);
              X && (this._stats?.timeEnd("Page Request"), X.displayReadyCapability?.resolve(H));
            }
            _renderPageChunk(H, W) {
              for (let X = 0, rt = H.length; X < rt; X++)
                W.operatorList.fnArray.push(H.fnArray[X]), W.operatorList.argsArray.push(H.argsArray[X]);
              W.operatorList.lastChunk = H.lastChunk, W.operatorList.separateAnnots = H.separateAnnots;
              for (const X of W.renderTasks)
                X.operatorListChanged();
              H.lastChunk && this.#n(!0);
            }
            _pumpOperatorList(H) {
              let {
                renderingIntent: W,
                cacheKey: X,
                annotationStorageSerializable: rt
              } = H;
              const {
                map: it,
                transfer: dt
              } = rt, Et = this._transport.messageHandler.sendWithStream("GetOperatorList", {
                pageIndex: this._pageIndex,
                intent: W,
                cacheKey: X,
                annotationStorage: it
              }, dt).getReader(), xt = this._intentStates.get(X);
              xt.streamReader = Et;
              const Ct = () => {
                Et.read().then((wt) => {
                  let {
                    value: Pt,
                    done: Rt
                  } = wt;
                  if (Rt) {
                    xt.streamReader = null;
                    return;
                  }
                  this._transport.destroyed || (this._renderPageChunk(Pt, xt), Ct());
                }, (wt) => {
                  if (xt.streamReader = null, !this._transport.destroyed) {
                    if (xt.operatorList) {
                      xt.operatorList.lastChunk = !0;
                      for (const Pt of xt.renderTasks)
                        Pt.operatorListChanged();
                      this.#n(!0);
                    }
                    if (xt.displayReadyCapability)
                      xt.displayReadyCapability.reject(wt);
                    else if (xt.opListReadCapability)
                      xt.opListReadCapability.reject(wt);
                    else
                      throw wt;
                  }
                });
              };
              Ct();
            }
            _abortOperatorList(H) {
              let {
                intentState: W,
                reason: X,
                force: rt = !1
              } = H;
              if (W.streamReader) {
                if (W.streamReaderCancelTimeout && (clearTimeout(W.streamReaderCancelTimeout), W.streamReaderCancelTimeout = null), !rt) {
                  if (W.renderTasks.size > 0)
                    return;
                  if (X instanceof ut.RenderingCancelledException) {
                    let it = n;
                    X.extraDelay > 0 && X.extraDelay < 1e3 && (it += X.extraDelay), W.streamReaderCancelTimeout = setTimeout(() => {
                      W.streamReaderCancelTimeout = null, this._abortOperatorList({
                        intentState: W,
                        reason: X,
                        force: !0
                      });
                    }, it);
                    return;
                  }
                }
                if (W.streamReader.cancel(new J.AbortException(X.message)).catch(() => {
                }), W.streamReader = null, !this._transport.destroyed) {
                  for (const [it, dt] of this._intentStates)
                    if (dt === W) {
                      this._intentStates.delete(it);
                      break;
                    }
                  this.cleanup();
                }
              }
            }
            get stats() {
              return this._stats;
            }
          }
          class B {
            #t = /* @__PURE__ */ new Set();
            #e = Promise.resolve();
            postMessage(H, W) {
              const X = {
                data: structuredClone(H, W ? {
                  transfer: W
                } : null)
              };
              this.#e.then(() => {
                for (const rt of this.#t)
                  rt.call(this, X);
              });
            }
            addEventListener(H, W) {
              this.#t.add(W);
            }
            removeEventListener(H, W) {
              this.#t.delete(W);
            }
            terminate() {
              this.#t.clear();
            }
          }
          const st = {
            isWorkerDisabled: !1,
            fakeWorkerId: 0
          };
          J.isNodeJS && (st.isWorkerDisabled = !0, z.GlobalWorkerOptions.workerSrc ||= "./pdf.worker.mjs"), st.isSameOrigin = function(et, H) {
            let W;
            try {
              if (W = new URL(et), !W.origin || W.origin === "null")
                return !1;
            } catch {
              return !1;
            }
            const X = new URL(H, W);
            return W.origin === X.origin;
          }, st.createCDNWrapper = function(et) {
            const H = `await import("${et}");`;
            return URL.createObjectURL(new Blob([H], {
              type: "text/javascript"
            }));
          };
          class q {
            static #t;
            constructor() {
              let {
                name: H = null,
                port: W = null,
                verbosity: X = (0, J.getVerbosityLevel)()
              } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              if (this.name = H, this.destroyed = !1, this.verbosity = X, this._readyCapability = new J.PromiseCapability(), this._port = null, this._webWorker = null, this._messageHandler = null, W) {
                if (q.#t?.has(W))
                  throw new Error("Cannot use more than one PDFWorker per port.");
                (q.#t ||= /* @__PURE__ */ new WeakMap()).set(W, this), this._initializeFromPort(W);
                return;
              }
              this._initialize();
            }
            get promise() {
              return this._readyCapability.promise;
            }
            get port() {
              return this._port;
            }
            get messageHandler() {
              return this._messageHandler;
            }
            _initializeFromPort(H) {
              this._port = H, this._messageHandler = new V.MessageHandler("main", "worker", H), this._messageHandler.on("ready", function() {
              }), this._readyCapability.resolve(), this._messageHandler.send("configure", {
                verbosity: this.verbosity
              });
            }
            _initialize() {
              if (!st.isWorkerDisabled && !q.#e) {
                let {
                  workerSrc: H
                } = q;
                try {
                  st.isSameOrigin(window.location.href, H) || (H = st.createCDNWrapper(new URL(H, window.location).href));
                  const W = new Worker(H, {
                    type: "module"
                  }), X = new V.MessageHandler("main", "worker", W), rt = () => {
                    W.removeEventListener("error", it), X.destroy(), W.terminate(), this.destroyed ? this._readyCapability.reject(new Error("Worker was destroyed")) : this._setupFakeWorker();
                  }, it = () => {
                    this._webWorker || rt();
                  };
                  W.addEventListener("error", it), X.on("test", (gt) => {
                    if (W.removeEventListener("error", it), this.destroyed) {
                      rt();
                      return;
                    }
                    gt ? (this._messageHandler = X, this._port = W, this._webWorker = W, this._readyCapability.resolve(), X.send("configure", {
                      verbosity: this.verbosity
                    })) : (this._setupFakeWorker(), X.destroy(), W.terminate());
                  }), X.on("ready", (gt) => {
                    if (W.removeEventListener("error", it), this.destroyed) {
                      rt();
                      return;
                    }
                    try {
                      dt();
                    } catch {
                      this._setupFakeWorker();
                    }
                  });
                  const dt = () => {
                    const gt = new Uint8Array();
                    X.send("test", gt, [gt.buffer]);
                  };
                  dt();
                  return;
                } catch {
                  (0, J.info)("The worker has been disabled.");
                }
              }
              this._setupFakeWorker();
            }
            _setupFakeWorker() {
              st.isWorkerDisabled || ((0, J.warn)("Setting up fake worker."), st.isWorkerDisabled = !0), q._setupFakeWorkerGlobal.then((H) => {
                if (this.destroyed) {
                  this._readyCapability.reject(new Error("Worker was destroyed"));
                  return;
                }
                const W = new B();
                this._port = W;
                const X = `fake${st.fakeWorkerId++}`, rt = new V.MessageHandler(X + "_worker", X, W);
                H.setup(rt, W);
                const it = new V.MessageHandler(X, X + "_worker", W);
                this._messageHandler = it, this._readyCapability.resolve(), it.send("configure", {
                  verbosity: this.verbosity
                });
              }).catch((H) => {
                this._readyCapability.reject(new Error(`Setting up fake worker failed: "${H.message}".`));
              });
            }
            destroy() {
              this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), q.#t?.delete(this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null);
            }
            static fromPort(H) {
              if (!H?.port)
                throw new Error("PDFWorker.fromPort - invalid method signature.");
              const W = this.#t?.get(H.port);
              if (W) {
                if (W._pendingDestroy)
                  throw new Error("PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.");
                return W;
              }
              return new q(H);
            }
            static get workerSrc() {
              if (z.GlobalWorkerOptions.workerSrc)
                return z.GlobalWorkerOptions.workerSrc;
              throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
            }
            static get #e() {
              try {
                return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
              } catch {
                return null;
              }
            }
            static get _setupFakeWorkerGlobal() {
              const H = async () => this.#e ? this.#e : (await import(
                /* webpackIgnore: true */
                this.workerSrc
              )).WorkerMessageHandler;
              return (0, J.shadow)(this, "_setupFakeWorkerGlobal", H());
            }
          }
          class ct {
            #t = /* @__PURE__ */ new Map();
            #e = /* @__PURE__ */ new Map();
            #n = /* @__PURE__ */ new Map();
            #s = null;
            constructor(H, W, X, rt, it) {
              this.messageHandler = H, this.loadingTask = W, this.commonObjs = new pt(), this.fontLoader = new ht.FontLoader({
                ownerDocument: rt.ownerDocument,
                styleElement: rt.styleElement
              }), this._params = rt, this.canvasFactory = it.canvasFactory, this.filterFactory = it.filterFactory, this.cMapReaderFactory = it.cMapReaderFactory, this.standardFontDataFactory = it.standardFontDataFactory, this.destroyed = !1, this.destroyCapability = null, this._networkStream = X, this._fullReader = null, this._lastProgress = null, this.downloadInfoCapability = new J.PromiseCapability(), this.setupMessageHandler();
            }
            #r(H) {
              let W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              const X = this.#t.get(H);
              if (X)
                return X;
              const rt = this.messageHandler.sendWithPromise(H, W);
              return this.#t.set(H, rt), rt;
            }
            get annotationStorage() {
              return (0, J.shadow)(this, "annotationStorage", new at.AnnotationStorage());
            }
            getRenderingIntent(H) {
              let W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : J.AnnotationMode.ENABLE, X = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, rt = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, it = J.RenderingIntentFlag.DISPLAY, dt = at.SerializableEmpty;
              switch (H) {
                case "any":
                  it = J.RenderingIntentFlag.ANY;
                  break;
                case "display":
                  break;
                case "print":
                  it = J.RenderingIntentFlag.PRINT;
                  break;
                default:
                  (0, J.warn)(`getRenderingIntent - invalid intent: ${H}`);
              }
              switch (W) {
                case J.AnnotationMode.DISABLE:
                  it += J.RenderingIntentFlag.ANNOTATIONS_DISABLE;
                  break;
                case J.AnnotationMode.ENABLE:
                  break;
                case J.AnnotationMode.ENABLE_FORMS:
                  it += J.RenderingIntentFlag.ANNOTATIONS_FORMS;
                  break;
                case J.AnnotationMode.ENABLE_STORAGE:
                  it += J.RenderingIntentFlag.ANNOTATIONS_STORAGE, dt = (it & J.RenderingIntentFlag.PRINT && X instanceof at.PrintAnnotationStorage ? X : this.annotationStorage).serializable;
                  break;
                default:
                  (0, J.warn)(`getRenderingIntent - invalid annotationMode: ${W}`);
              }
              return rt && (it += J.RenderingIntentFlag.OPLIST), {
                renderingIntent: it,
                cacheKey: `${it}_${dt.hash}`,
                annotationStorageSerializable: dt
              };
            }
            destroy() {
              if (this.destroyCapability)
                return this.destroyCapability.promise;
              this.destroyed = !0, this.destroyCapability = new J.PromiseCapability(), this.#s?.reject(new Error("Worker was destroyed during onPassword callback"));
              const H = [];
              for (const X of this.#e.values())
                H.push(X._destroy());
              this.#e.clear(), this.#n.clear(), this.hasOwnProperty("annotationStorage") && this.annotationStorage.resetModified();
              const W = this.messageHandler.sendWithPromise("Terminate", null);
              return H.push(W), Promise.all(H).then(() => {
                this.commonObjs.clear(), this.fontLoader.clear(), this.#t.clear(), this.filterFactory.destroy(), this._networkStream?.cancelAllRequests(new J.AbortException("Worker was terminated.")), this.messageHandler && (this.messageHandler.destroy(), this.messageHandler = null), this.destroyCapability.resolve();
              }, this.destroyCapability.reject), this.destroyCapability.promise;
            }
            setupMessageHandler() {
              const {
                messageHandler: H,
                loadingTask: W
              } = this;
              H.on("GetReader", (X, rt) => {
                (0, J.assert)(this._networkStream, "GetReader - no `IPDFStream` instance available."), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = (it) => {
                  this._lastProgress = {
                    loaded: it.loaded,
                    total: it.total
                  };
                }, rt.onPull = () => {
                  this._fullReader.read().then(function(it) {
                    let {
                      value: dt,
                      done: gt
                    } = it;
                    if (gt) {
                      rt.close();
                      return;
                    }
                    (0, J.assert)(dt instanceof ArrayBuffer, "GetReader - expected an ArrayBuffer."), rt.enqueue(new Uint8Array(dt), 1, [dt]);
                  }).catch((it) => {
                    rt.error(it);
                  });
                }, rt.onCancel = (it) => {
                  this._fullReader.cancel(it), rt.ready.catch((dt) => {
                    if (!this.destroyed)
                      throw dt;
                  });
                };
              }), H.on("ReaderHeadersReady", (X) => {
                const rt = new J.PromiseCapability(), it = this._fullReader;
                return it.headersReady.then(() => {
                  (!it.isStreamingSupported || !it.isRangeSupported) && (this._lastProgress && W.onProgress?.(this._lastProgress), it.onProgress = (dt) => {
                    W.onProgress?.({
                      loaded: dt.loaded,
                      total: dt.total
                    });
                  }), rt.resolve({
                    isStreamingSupported: it.isStreamingSupported,
                    isRangeSupported: it.isRangeSupported,
                    contentLength: it.contentLength
                  });
                }, rt.reject), rt.promise;
              }), H.on("GetRangeReader", (X, rt) => {
                (0, J.assert)(this._networkStream, "GetRangeReader - no `IPDFStream` instance available.");
                const it = this._networkStream.getRangeReader(X.begin, X.end);
                if (!it) {
                  rt.close();
                  return;
                }
                rt.onPull = () => {
                  it.read().then(function(dt) {
                    let {
                      value: gt,
                      done: Et
                    } = dt;
                    if (Et) {
                      rt.close();
                      return;
                    }
                    (0, J.assert)(gt instanceof ArrayBuffer, "GetRangeReader - expected an ArrayBuffer."), rt.enqueue(new Uint8Array(gt), 1, [gt]);
                  }).catch((dt) => {
                    rt.error(dt);
                  });
                }, rt.onCancel = (dt) => {
                  it.cancel(dt), rt.ready.catch((gt) => {
                    if (!this.destroyed)
                      throw gt;
                  });
                };
              }), H.on("GetDoc", (X) => {
                let {
                  pdfInfo: rt
                } = X;
                this._numPages = rt.numPages, this._htmlForXfa = rt.htmlForXfa, delete rt.htmlForXfa, W._capability.resolve(new G(rt, this));
              }), H.on("DocException", function(X) {
                let rt;
                switch (X.name) {
                  case "PasswordException":
                    rt = new J.PasswordException(X.message, X.code);
                    break;
                  case "InvalidPDFException":
                    rt = new J.InvalidPDFException(X.message);
                    break;
                  case "MissingPDFException":
                    rt = new J.MissingPDFException(X.message);
                    break;
                  case "UnexpectedResponseException":
                    rt = new J.UnexpectedResponseException(X.message, X.status);
                    break;
                  case "UnknownErrorException":
                    rt = new J.UnknownErrorException(X.message, X.details);
                    break;
                  default:
                    (0, J.unreachable)("DocException - expected a valid Error.");
                }
                W._capability.reject(rt);
              }), H.on("PasswordRequest", (X) => {
                if (this.#s = new J.PromiseCapability(), W.onPassword) {
                  const rt = (it) => {
                    it instanceof Error ? this.#s.reject(it) : this.#s.resolve({
                      password: it
                    });
                  };
                  try {
                    W.onPassword(rt, X.code);
                  } catch (it) {
                    this.#s.reject(it);
                  }
                } else
                  this.#s.reject(new J.PasswordException(X.message, X.code));
                return this.#s.promise;
              }), H.on("DataLoaded", (X) => {
                W.onProgress?.({
                  loaded: X.length,
                  total: X.length
                }), this.downloadInfoCapability.resolve(X);
              }), H.on("StartRenderPage", (X) => {
                if (this.destroyed)
                  return;
                this.#e.get(X.pageIndex)._startRenderPage(X.transparency, X.cacheKey);
              }), H.on("commonobj", (X) => {
                let [rt, it, dt] = X;
                if (this.destroyed || this.commonObjs.has(rt))
                  return null;
                switch (it) {
                  case "Font":
                    const gt = this._params;
                    if ("error" in dt) {
                      const wt = dt.error;
                      (0, J.warn)(`Error during font loading: ${wt}`), this.commonObjs.resolve(rt, wt);
                      break;
                    }
                    const Et = gt.pdfBug && globalThis.FontInspector?.enabled ? (wt, Pt) => globalThis.FontInspector.fontAdded(wt, Pt) : null, xt = new ht.FontFaceObject(dt, {
                      isEvalSupported: gt.isEvalSupported,
                      disableFontFace: gt.disableFontFace,
                      ignoreErrors: gt.ignoreErrors,
                      inspectFont: Et
                    });
                    this.fontLoader.bind(xt).catch((wt) => H.sendWithPromise("FontFallback", {
                      id: rt
                    })).finally(() => {
                      !gt.fontExtraProperties && xt.data && (xt.data = null), this.commonObjs.resolve(rt, xt);
                    });
                    break;
                  case "CopyLocalImage":
                    const {
                      imageRef: Ct
                    } = dt;
                    (0, J.assert)(Ct, "The imageRef must be defined.");
                    for (const wt of this.#e.values())
                      for (const [, Pt] of wt.objs)
                        if (Pt.ref === Ct)
                          return Pt.dataLen ? (this.commonObjs.resolve(rt, structuredClone(Pt)), Pt.dataLen) : null;
                    break;
                  case "FontPath":
                  case "Image":
                  case "Pattern":
                    this.commonObjs.resolve(rt, dt);
                    break;
                  default:
                    throw new Error(`Got unknown common object type ${it}`);
                }
                return null;
              }), H.on("obj", (X) => {
                let [rt, it, dt, gt] = X;
                if (this.destroyed)
                  return;
                const Et = this.#e.get(it);
                if (!Et.objs.has(rt)) {
                  if (Et._intentStates.size === 0) {
                    gt?.bitmap?.close();
                    return;
                  }
                  switch (dt) {
                    case "Image":
                      Et.objs.resolve(rt, gt), gt?.dataLen > J.MAX_IMAGE_SIZE_TO_CACHE && (Et._maybeCleanupAfterRender = !0);
                      break;
                    case "Pattern":
                      Et.objs.resolve(rt, gt);
                      break;
                    default:
                      throw new Error(`Got unknown object type ${dt}`);
                  }
                }
              }), H.on("DocProgress", (X) => {
                this.destroyed || W.onProgress?.({
                  loaded: X.loaded,
                  total: X.total
                });
              }), H.on("FetchBuiltInCMap", (X) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.cMapReaderFactory ? this.cMapReaderFactory.fetch(X) : Promise.reject(new Error("CMapReaderFactory not initialized, see the `useWorkerFetch` parameter."))), H.on("FetchStandardFontData", (X) => this.destroyed ? Promise.reject(new Error("Worker was destroyed.")) : this.standardFontDataFactory ? this.standardFontDataFactory.fetch(X) : Promise.reject(new Error("StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.")));
            }
            getData() {
              return this.messageHandler.sendWithPromise("GetData", null);
            }
            saveDocument() {
              this.annotationStorage.size <= 0 && (0, J.warn)("saveDocument called while `annotationStorage` is empty, please use the getData-method instead.");
              const {
                map: H,
                transfer: W
              } = this.annotationStorage.serializable;
              return this.messageHandler.sendWithPromise("SaveDocument", {
                isPureXfa: !!this._htmlForXfa,
                numPages: this._numPages,
                annotationStorage: H,
                filename: this._fullReader?.filename ?? null
              }, W).finally(() => {
                this.annotationStorage.resetModified();
              });
            }
            getPage(H) {
              if (!Number.isInteger(H) || H <= 0 || H > this._numPages)
                return Promise.reject(new Error("Invalid page request."));
              const W = H - 1, X = this.#n.get(W);
              if (X)
                return X;
              const rt = this.messageHandler.sendWithPromise("GetPage", {
                pageIndex: W
              }).then((it) => {
                if (this.destroyed)
                  throw new Error("Transport destroyed");
                const dt = new I(W, it, this, this._params.pdfBug);
                return this.#e.set(W, dt), dt;
              });
              return this.#n.set(W, rt), rt;
            }
            getPageIndex(H) {
              return typeof H != "object" || H === null || !Number.isInteger(H.num) || H.num < 0 || !Number.isInteger(H.gen) || H.gen < 0 ? Promise.reject(new Error("Invalid pageIndex request.")) : this.messageHandler.sendWithPromise("GetPageIndex", {
                num: H.num,
                gen: H.gen
              });
            }
            getAnnotations(H, W) {
              return this.messageHandler.sendWithPromise("GetAnnotations", {
                pageIndex: H,
                intent: W
              });
            }
            getFieldObjects() {
              return this.#r("GetFieldObjects");
            }
            hasJSActions() {
              return this.#r("HasJSActions");
            }
            getCalculationOrderIds() {
              return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
            }
            getDestinations() {
              return this.messageHandler.sendWithPromise("GetDestinations", null);
            }
            getDestination(H) {
              return typeof H != "string" ? Promise.reject(new Error("Invalid destination request.")) : this.messageHandler.sendWithPromise("GetDestination", {
                id: H
              });
            }
            getPageLabels() {
              return this.messageHandler.sendWithPromise("GetPageLabels", null);
            }
            getPageLayout() {
              return this.messageHandler.sendWithPromise("GetPageLayout", null);
            }
            getPageMode() {
              return this.messageHandler.sendWithPromise("GetPageMode", null);
            }
            getViewerPreferences() {
              return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
            }
            getOpenAction() {
              return this.messageHandler.sendWithPromise("GetOpenAction", null);
            }
            getAttachments() {
              return this.messageHandler.sendWithPromise("GetAttachments", null);
            }
            getDocJSActions() {
              return this.#r("GetDocJSActions");
            }
            getPageJSActions(H) {
              return this.messageHandler.sendWithPromise("GetPageJSActions", {
                pageIndex: H
              });
            }
            getStructTree(H) {
              return this.messageHandler.sendWithPromise("GetStructTree", {
                pageIndex: H
              });
            }
            getOutline() {
              return this.messageHandler.sendWithPromise("GetOutline", null);
            }
            getOptionalContentConfig() {
              return this.messageHandler.sendWithPromise("GetOptionalContentConfig", null).then((H) => new ot.OptionalContentConfig(H));
            }
            getPermissions() {
              return this.messageHandler.sendWithPromise("GetPermissions", null);
            }
            getMetadata() {
              const H = "GetMetadata", W = this.#t.get(H);
              if (W)
                return W;
              const X = this.messageHandler.sendWithPromise(H, null).then((rt) => ({
                info: rt[0],
                metadata: rt[1] ? new nt.Metadata(rt[1]) : null,
                contentDispositionFilename: this._fullReader?.filename ?? null,
                contentLength: this._fullReader?.contentLength ?? null
              }));
              return this.#t.set(H, X), X;
            }
            getMarkInfo() {
              return this.messageHandler.sendWithPromise("GetMarkInfo", null);
            }
            async startCleanup() {
              let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
              if (!this.destroyed) {
                await this.messageHandler.sendWithPromise("Cleanup", null);
                for (const W of this.#e.values())
                  if (!W.cleanup())
                    throw new Error(`startCleanup: Page ${W.pageNumber} is currently rendering.`);
                this.commonObjs.clear(), H || this.fontLoader.clear(), this.#t.clear(), this.filterFactory.destroy(!0);
              }
            }
            get loadingParams() {
              const {
                disableAutoFetch: H,
                enableXfa: W
              } = this._params;
              return (0, J.shadow)(this, "loadingParams", {
                disableAutoFetch: H,
                enableXfa: W
              });
            }
          }
          class pt {
            #t = /* @__PURE__ */ Object.create(null);
            #e(H) {
              return this.#t[H] ||= {
                capability: new J.PromiseCapability(),
                data: null
              };
            }
            get(H) {
              let W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              if (W) {
                const rt = this.#e(H);
                return rt.capability.promise.then(() => W(rt.data)), null;
              }
              const X = this.#t[H];
              if (!X?.capability.settled)
                throw new Error(`Requesting object that isn't resolved yet ${H}.`);
              return X.data;
            }
            has(H) {
              return this.#t[H]?.capability.settled ?? !1;
            }
            resolve(H) {
              let W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
              const X = this.#e(H);
              X.data = W, X.capability.resolve();
            }
            clear() {
              for (const H in this.#t) {
                const {
                  data: W
                } = this.#t[H];
                W?.bitmap?.close();
              }
              this.#t = /* @__PURE__ */ Object.create(null);
            }
            *[Symbol.iterator]() {
              for (const H in this.#t) {
                const {
                  capability: W,
                  data: X
                } = this.#t[H];
                W.settled && (yield [H, X]);
              }
            }
          }
          class ft {
            #t = null;
            constructor(H) {
              this.#t = H, this.onContinue = null;
            }
            get promise() {
              return this.#t.capability.promise;
            }
            cancel() {
              let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
              this.#t.cancel(null, H);
            }
            get separateAnnots() {
              const {
                separateAnnots: H
              } = this.#t.operatorList;
              if (!H)
                return !1;
              const {
                annotationCanvasMap: W
              } = this.#t;
              return H.form || H.canvas && W?.size > 0;
            }
          }
          class mt {
            static #t = /* @__PURE__ */ new WeakSet();
            constructor(H) {
              let {
                callback: W,
                params: X,
                objs: rt,
                commonObjs: it,
                annotationCanvasMap: dt,
                operatorList: gt,
                pageIndex: Et,
                canvasFactory: xt,
                filterFactory: Ct,
                useRequestAnimationFrame: wt = !1,
                pdfBug: Pt = !1,
                pageColors: Rt = null
              } = H;
              this.callback = W, this.params = X, this.objs = rt, this.commonObjs = it, this.annotationCanvasMap = dt, this.operatorListIdx = null, this.operatorList = gt, this._pageIndex = Et, this.canvasFactory = xt, this.filterFactory = Ct, this._pdfBug = Pt, this.pageColors = Rt, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this._useRequestAnimationFrame = wt === !0 && typeof window < "u", this.cancelled = !1, this.capability = new J.PromiseCapability(), this.task = new ft(this), this._cancelBound = this.cancel.bind(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = X.canvasContext.canvas;
            }
            get completed() {
              return this.capability.promise.catch(function() {
              });
            }
            initializeGraphics(H) {
              let {
                transparency: W = !1,
                optionalContentConfig: X
              } = H;
              if (this.cancelled)
                return;
              if (this._canvas) {
                if (mt.#t.has(this._canvas))
                  throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
                mt.#t.add(this._canvas);
              }
              this._pdfBug && globalThis.StepperManager?.enabled && (this.stepper = globalThis.StepperManager.create(this._pageIndex), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
              const {
                canvasContext: rt,
                viewport: it,
                transform: dt,
                background: gt
              } = this.params;
              this.gfx = new Z.CanvasGraphics(rt, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: X
              }, this.annotationCanvasMap, this.pageColors), this.gfx.beginDrawing({
                transform: dt,
                viewport: it,
                transparency: W,
                background: gt
              }), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback?.();
            }
            cancel() {
              let H = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, W = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
              this.running = !1, this.cancelled = !0, this.gfx?.endDrawing(), mt.#t.delete(this._canvas), this.callback(H || new ut.RenderingCancelledException(`Rendering cancelled, page ${this._pageIndex + 1}`, W));
            }
            operatorListChanged() {
              if (!this.graphicsReady) {
                this.graphicsReadyCallback ||= this._continueBound;
                return;
              }
              this.stepper?.updateOperatorList(this.operatorList), !this.running && this._continue();
            }
            _continue() {
              this.running = !0, !this.cancelled && (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext());
            }
            _scheduleNext() {
              this._useRequestAnimationFrame ? window.requestAnimationFrame(() => {
                this._nextBound().catch(this._cancelBound);
              }) : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
            }
            async _next() {
              this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), mt.#t.delete(this._canvas), this.callback())));
            }
          }
          const yt = "4.0.379", At = "9e14d04fd";
          g();
        } catch (h) {
          g(h);
        }
      });
    })
  ),
  /***/
  6822: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        BaseCMapReaderFactory: () => (
          /* binding */
          A
        ),
        /* harmony export */
        BaseCanvasFactory: () => (
          /* binding */
          u
        ),
        /* harmony export */
        BaseFilterFactory: () => (
          /* binding */
          g
        ),
        /* harmony export */
        BaseSVGFactory: () => (
          /* binding */
          x
        ),
        /* harmony export */
        BaseStandardFontDataFactory: () => (
          /* binding */
          b
        )
        /* harmony export */
      }), t(3352);
      var s = t(3266);
      class g {
        constructor() {
          this.constructor === g && (0, s.unreachable)("Cannot initialize BaseFilterFactory.");
        }
        addFilter(m) {
          return "none";
        }
        addHCMFilter(m, o) {
          return "none";
        }
        addHighlightHCMFilter(m, o, l, c) {
          return "none";
        }
        destroy() {
        }
      }
      class u {
        constructor() {
          this.constructor === u && (0, s.unreachable)("Cannot initialize BaseCanvasFactory.");
        }
        create(m, o) {
          if (m <= 0 || o <= 0)
            throw new Error("Invalid canvas size");
          const l = this._createCanvas(m, o);
          return {
            canvas: l,
            context: l.getContext("2d")
          };
        }
        reset(m, o, l) {
          if (!m.canvas)
            throw new Error("Canvas is not specified");
          if (o <= 0 || l <= 0)
            throw new Error("Invalid canvas size");
          m.canvas.width = o, m.canvas.height = l;
        }
        destroy(m) {
          if (!m.canvas)
            throw new Error("Canvas is not specified");
          m.canvas.width = 0, m.canvas.height = 0, m.canvas = null, m.context = null;
        }
        _createCanvas(m, o) {
          (0, s.unreachable)("Abstract method `_createCanvas` called.");
        }
      }
      class A {
        constructor(m) {
          let {
            baseUrl: o = null,
            isCompressed: l = !0
          } = m;
          this.constructor === A && (0, s.unreachable)("Cannot initialize BaseCMapReaderFactory."), this.baseUrl = o, this.isCompressed = l;
        }
        async fetch(m) {
          let {
            name: o
          } = m;
          if (!this.baseUrl)
            throw new Error('The CMap "baseUrl" parameter must be specified, ensure that the "cMapUrl" and "cMapPacked" API parameters are provided.');
          if (!o)
            throw new Error("CMap name must be specified.");
          const l = this.baseUrl + o + (this.isCompressed ? ".bcmap" : ""), c = this.isCompressed ? s.CMapCompressionType.BINARY : s.CMapCompressionType.NONE;
          return this._fetchData(l, c).catch((r) => {
            throw new Error(`Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${l}`);
          });
        }
        _fetchData(m, o) {
          (0, s.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      class b {
        constructor(m) {
          let {
            baseUrl: o = null
          } = m;
          this.constructor === b && (0, s.unreachable)("Cannot initialize BaseStandardFontDataFactory."), this.baseUrl = o;
        }
        async fetch(m) {
          let {
            filename: o
          } = m;
          if (!this.baseUrl)
            throw new Error('The standard font "baseUrl" parameter must be specified, ensure that the "standardFontDataUrl" API parameter is provided.');
          if (!o)
            throw new Error("Font filename must be specified.");
          const l = `${this.baseUrl}${o}`;
          return this._fetchData(l).catch((c) => {
            throw new Error(`Unable to load font data at: ${l}`);
          });
        }
        _fetchData(m) {
          (0, s.unreachable)("Abstract method `_fetchData` called.");
        }
      }
      class x {
        constructor() {
          this.constructor === x && (0, s.unreachable)("Cannot initialize BaseSVGFactory.");
        }
        create(m, o) {
          let l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          if (m <= 0 || o <= 0)
            throw new Error("Invalid SVG dimensions");
          const c = this._createSVG("svg:svg");
          return c.setAttribute("version", "1.1"), l || (c.setAttribute("width", `${m}px`), c.setAttribute("height", `${o}px`)), c.setAttribute("preserveAspectRatio", "none"), c.setAttribute("viewBox", `0 0 ${m} ${o}`), c;
        }
        createElement(m) {
          if (typeof m != "string")
            throw new Error("Invalid SVG element type");
          return this._createSVG(m);
        }
        _createSVG(m) {
          (0, s.unreachable)("Abstract method `_createSVG` called.");
        }
      }
    })
  ),
  /***/
  1250: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        CanvasGraphics: () => (
          /* binding */
          v
        )
      }), t(3352), t(8837), t(9803), t(8347), t(7995), t(62), t(4602), t(344), t(4305), t(7583), t(7121), t(2993), t(4226), t(7944);
      var s = t(3266), g = t(473);
      const u = {
        FILL: "Fill",
        STROKE: "Stroke",
        SHADING: "Shading"
      };
      function A(h, n) {
        if (!n)
          return;
        const a = n[2] - n[0], d = n[3] - n[1], S = new Path2D();
        S.rect(n[0], n[1], a, d), h.clip(S);
      }
      class b {
        constructor() {
          this.constructor === b && (0, s.unreachable)("Cannot initialize BaseShadingPattern.");
        }
        getPattern() {
          (0, s.unreachable)("Abstract method `getPattern` called.");
        }
      }
      class x extends b {
        constructor(n) {
          super(), this._type = n[1], this._bbox = n[2], this._colorStops = n[3], this._p0 = n[4], this._p1 = n[5], this._r0 = n[6], this._r1 = n[7], this.matrix = null;
        }
        _createGradient(n) {
          let a;
          this._type === "axial" ? a = n.createLinearGradient(this._p0[0], this._p0[1], this._p1[0], this._p1[1]) : this._type === "radial" && (a = n.createRadialGradient(this._p0[0], this._p0[1], this._r0, this._p1[0], this._p1[1], this._r1));
          for (const d of this._colorStops)
            a.addColorStop(d[0], d[1]);
          return a;
        }
        getPattern(n, a, d, S) {
          let C;
          if (S === u.STROKE || S === u.FILL) {
            const P = a.current.getClippedPathBoundingBox(S, (0, g.getCurrentTransform)(n)) || [0, 0, 0, 0], F = Math.ceil(P[2] - P[0]) || 1, O = Math.ceil(P[3] - P[1]) || 1, N = a.cachedCanvases.getCanvas("pattern", F, O, !0), k = N.context;
            k.clearRect(0, 0, k.canvas.width, k.canvas.height), k.beginPath(), k.rect(0, 0, k.canvas.width, k.canvas.height), k.translate(-P[0], -P[1]), d = s.Util.transform(d, [1, 0, 0, 1, P[0], P[1]]), k.transform(...a.baseTransform), this.matrix && k.transform(...this.matrix), A(k, this._bbox), k.fillStyle = this._createGradient(k), k.fill(), C = n.createPattern(N.canvas, "no-repeat");
            const U = new DOMMatrix(d);
            C.setTransform(U);
          } else
            A(n, this._bbox), C = this._createGradient(n);
          return C;
        }
      }
      function p(h, n, a, d, S, C, P, F) {
        const O = n.coords, N = n.colors, k = h.data, U = h.width * 4;
        let Y;
        O[a + 1] > O[d + 1] && (Y = a, a = d, d = Y, Y = C, C = P, P = Y), O[d + 1] > O[S + 1] && (Y = d, d = S, S = Y, Y = P, P = F, F = Y), O[a + 1] > O[d + 1] && (Y = a, a = d, d = Y, Y = C, C = P, P = Y);
        const G = (O[a] + n.offsetX) * n.scaleX, I = (O[a + 1] + n.offsetY) * n.scaleY, B = (O[d] + n.offsetX) * n.scaleX, st = (O[d + 1] + n.offsetY) * n.scaleY, q = (O[S] + n.offsetX) * n.scaleX, ct = (O[S + 1] + n.offsetY) * n.scaleY;
        if (I >= ct)
          return;
        const pt = N[C], ft = N[C + 1], mt = N[C + 2], yt = N[P], At = N[P + 1], et = N[P + 2], H = N[F], W = N[F + 1], X = N[F + 2], rt = Math.round(I), it = Math.round(ct);
        let dt, gt, Et, xt, Ct, wt, Pt, Rt;
        for (let Mt = rt; Mt <= it; Mt++) {
          if (Mt < st) {
            const Ft = Mt < I ? 0 : (I - Mt) / (I - st);
            dt = G - (G - B) * Ft, gt = pt - (pt - yt) * Ft, Et = ft - (ft - At) * Ft, xt = mt - (mt - et) * Ft;
          } else {
            let Ft;
            Mt > ct ? Ft = 1 : st === ct ? Ft = 0 : Ft = (st - Mt) / (st - ct), dt = B - (B - q) * Ft, gt = yt - (yt - H) * Ft, Et = At - (At - W) * Ft, xt = et - (et - X) * Ft;
          }
          let It;
          Mt < I ? It = 0 : Mt > ct ? It = 1 : It = (I - Mt) / (I - ct), Ct = G - (G - q) * It, wt = pt - (pt - H) * It, Pt = ft - (ft - W) * It, Rt = mt - (mt - X) * It;
          const Lt = Math.round(Math.min(dt, Ct)), Nt = Math.round(Math.max(dt, Ct));
          let Dt = U * Mt + Lt * 4;
          for (let Ft = Lt; Ft <= Nt; Ft++)
            It = (dt - Ft) / (dt - Ct), It < 0 ? It = 0 : It > 1 && (It = 1), k[Dt++] = gt - (gt - wt) * It | 0, k[Dt++] = Et - (Et - Pt) * It | 0, k[Dt++] = xt - (xt - Rt) * It | 0, k[Dt++] = 255;
        }
      }
      function m(h, n, a) {
        const d = n.coords, S = n.colors;
        let C, P;
        switch (n.type) {
          case "lattice":
            const F = n.verticesPerRow, O = Math.floor(d.length / F) - 1, N = F - 1;
            for (C = 0; C < O; C++) {
              let k = C * F;
              for (let U = 0; U < N; U++, k++)
                p(h, a, d[k], d[k + 1], d[k + F], S[k], S[k + 1], S[k + F]), p(h, a, d[k + F + 1], d[k + 1], d[k + F], S[k + F + 1], S[k + 1], S[k + F]);
            }
            break;
          case "triangles":
            for (C = 0, P = d.length; C < P; C += 3)
              p(h, a, d[C], d[C + 1], d[C + 2], S[C], S[C + 1], S[C + 2]);
            break;
          default:
            throw new Error("illegal figure");
        }
      }
      class o extends b {
        constructor(n) {
          super(), this._coords = n[2], this._colors = n[3], this._figures = n[4], this._bounds = n[5], this._bbox = n[7], this._background = n[8], this.matrix = null;
        }
        _createMeshCanvas(n, a, d) {
          const F = Math.floor(this._bounds[0]), O = Math.floor(this._bounds[1]), N = Math.ceil(this._bounds[2]) - F, k = Math.ceil(this._bounds[3]) - O, U = Math.min(Math.ceil(Math.abs(N * n[0] * 1.1)), 3e3), Y = Math.min(Math.ceil(Math.abs(k * n[1] * 1.1)), 3e3), G = N / U, I = k / Y, B = {
            coords: this._coords,
            colors: this._colors,
            offsetX: -F,
            offsetY: -O,
            scaleX: 1 / G,
            scaleY: 1 / I
          }, st = U + 4, q = Y + 4, ct = d.getCanvas("mesh", st, q, !1), pt = ct.context, ft = pt.createImageData(U, Y);
          if (a) {
            const yt = ft.data;
            for (let At = 0, et = yt.length; At < et; At += 4)
              yt[At] = a[0], yt[At + 1] = a[1], yt[At + 2] = a[2], yt[At + 3] = 255;
          }
          for (const yt of this._figures)
            m(ft, yt, B);
          return pt.putImageData(ft, 2, 2), {
            canvas: ct.canvas,
            offsetX: F - 2 * G,
            offsetY: O - 2 * I,
            scaleX: G,
            scaleY: I
          };
        }
        getPattern(n, a, d, S) {
          A(n, this._bbox);
          let C;
          if (S === u.SHADING)
            C = s.Util.singularValueDecompose2dScale((0, g.getCurrentTransform)(n));
          else if (C = s.Util.singularValueDecompose2dScale(a.baseTransform), this.matrix) {
            const F = s.Util.singularValueDecompose2dScale(this.matrix);
            C = [C[0] * F[0], C[1] * F[1]];
          }
          const P = this._createMeshCanvas(C, S === u.SHADING ? null : this._background, a.cachedCanvases);
          return S !== u.SHADING && (n.setTransform(...a.baseTransform), this.matrix && n.transform(...this.matrix)), n.translate(P.offsetX, P.offsetY), n.scale(P.scaleX, P.scaleY), n.createPattern(P.canvas, "no-repeat");
        }
      }
      class l extends b {
        getPattern() {
          return "hotpink";
        }
      }
      function c(h) {
        switch (h[0]) {
          case "RadialAxial":
            return new x(h);
          case "Mesh":
            return new o(h);
          case "Dummy":
            return new l();
        }
        throw new Error(`Unknown IR type: ${h[0]}`);
      }
      const r = {
        COLORED: 1,
        UNCOLORED: 2
      };
      class f {
        static MAX_PATTERN_SIZE = 3e3;
        constructor(n, a, d, S, C) {
          this.operatorList = n[2], this.matrix = n[3] || [1, 0, 0, 1, 0, 0], this.bbox = n[4], this.xstep = n[5], this.ystep = n[6], this.paintType = n[7], this.tilingType = n[8], this.color = a, this.ctx = d, this.canvasGraphicsFactory = S, this.baseTransform = C;
        }
        createPatternCanvas(n) {
          const a = this.operatorList, d = this.bbox, S = this.xstep, C = this.ystep, P = this.paintType, F = this.tilingType, O = this.color, N = this.canvasGraphicsFactory;
          (0, s.info)("TilingType: " + F);
          const k = d[0], U = d[1], Y = d[2], G = d[3], I = s.Util.singularValueDecompose2dScale(this.matrix), B = s.Util.singularValueDecompose2dScale(this.baseTransform), st = [I[0] * B[0], I[1] * B[1]], q = this.getSizeAndScale(S, this.ctx.canvas.width, st[0]), ct = this.getSizeAndScale(C, this.ctx.canvas.height, st[1]), pt = n.cachedCanvases.getCanvas("pattern", q.size, ct.size, !0), ft = pt.context, mt = N.createCanvasGraphics(ft);
          mt.groupLevel = n.groupLevel, this.setFillAndStrokeStyleToContext(mt, P, O);
          let yt = k, At = U, et = Y, H = G;
          return k < 0 && (yt = 0, et += Math.abs(k)), U < 0 && (At = 0, H += Math.abs(U)), ft.translate(-(q.scale * yt), -(ct.scale * At)), mt.transform(q.scale, 0, 0, ct.scale, 0, 0), ft.save(), this.clipBbox(mt, yt, At, et, H), mt.baseTransform = (0, g.getCurrentTransform)(mt.ctx), mt.executeOperatorList(a), mt.endDrawing(), {
            canvas: pt.canvas,
            scaleX: q.scale,
            scaleY: ct.scale,
            offsetX: yt,
            offsetY: At
          };
        }
        getSizeAndScale(n, a, d) {
          n = Math.abs(n);
          const S = Math.max(f.MAX_PATTERN_SIZE, a);
          let C = Math.ceil(n * d);
          return C >= S ? C = S : d = C / n, {
            scale: d,
            size: C
          };
        }
        clipBbox(n, a, d, S, C) {
          const P = S - a, F = C - d;
          n.ctx.rect(a, d, P, F), n.current.updateRectMinMax((0, g.getCurrentTransform)(n.ctx), [a, d, S, C]), n.clip(), n.endPath();
        }
        setFillAndStrokeStyleToContext(n, a, d) {
          const S = n.ctx, C = n.current;
          switch (a) {
            case r.COLORED:
              const P = this.ctx;
              S.fillStyle = P.fillStyle, S.strokeStyle = P.strokeStyle, C.fillColor = P.fillStyle, C.strokeColor = P.strokeStyle;
              break;
            case r.UNCOLORED:
              const F = s.Util.makeHexColor(d[0], d[1], d[2]);
              S.fillStyle = F, S.strokeStyle = F, C.fillColor = F, C.strokeColor = F;
              break;
            default:
              throw new s.FormatError(`Unsupported paint type: ${a}`);
          }
        }
        getPattern(n, a, d, S) {
          let C = d;
          S !== u.SHADING && (C = s.Util.transform(C, a.baseTransform), this.matrix && (C = s.Util.transform(C, this.matrix)));
          const P = this.createPatternCanvas(a);
          let F = new DOMMatrix(C);
          F = F.translate(P.offsetX, P.offsetY), F = F.scale(1 / P.scaleX, 1 / P.scaleY);
          const O = n.createPattern(P.canvas, "repeat");
          return O.setTransform(F), O;
        }
      }
      function e(h) {
        let {
          src: n,
          srcPos: a = 0,
          dest: d,
          width: S,
          height: C,
          nonBlackColor: P = 4294967295,
          inverseDecode: F = !1
        } = h;
        const O = s.FeatureTest.isLittleEndian ? 4278190080 : 255, [N, k] = F ? [P, O] : [O, P], U = S >> 3, Y = S & 7, G = n.length;
        d = new Uint32Array(d.buffer);
        let I = 0;
        for (let B = 0; B < C; B++) {
          for (const q = a + U; a < q; a++) {
            const ct = a < G ? n[a] : 255;
            d[I++] = ct & 128 ? k : N, d[I++] = ct & 64 ? k : N, d[I++] = ct & 32 ? k : N, d[I++] = ct & 16 ? k : N, d[I++] = ct & 8 ? k : N, d[I++] = ct & 4 ? k : N, d[I++] = ct & 2 ? k : N, d[I++] = ct & 1 ? k : N;
          }
          if (Y === 0)
            continue;
          const st = a < G ? n[a++] : 255;
          for (let q = 0; q < Y; q++)
            d[I++] = st & 1 << 7 - q ? k : N;
        }
        return {
          srcPos: a,
          destPos: I
        };
      }
      const i = 16, y = 100, T = 4096, E = 15, R = 10, L = 1e3, M = 16;
      function $(h, n) {
        if (h._removeMirroring)
          throw new Error("Context is already forwarding operations.");
        h.__originalSave = h.save, h.__originalRestore = h.restore, h.__originalRotate = h.rotate, h.__originalScale = h.scale, h.__originalTranslate = h.translate, h.__originalTransform = h.transform, h.__originalSetTransform = h.setTransform, h.__originalResetTransform = h.resetTransform, h.__originalClip = h.clip, h.__originalMoveTo = h.moveTo, h.__originalLineTo = h.lineTo, h.__originalBezierCurveTo = h.bezierCurveTo, h.__originalRect = h.rect, h.__originalClosePath = h.closePath, h.__originalBeginPath = h.beginPath, h._removeMirroring = () => {
          h.save = h.__originalSave, h.restore = h.__originalRestore, h.rotate = h.__originalRotate, h.scale = h.__originalScale, h.translate = h.__originalTranslate, h.transform = h.__originalTransform, h.setTransform = h.__originalSetTransform, h.resetTransform = h.__originalResetTransform, h.clip = h.__originalClip, h.moveTo = h.__originalMoveTo, h.lineTo = h.__originalLineTo, h.bezierCurveTo = h.__originalBezierCurveTo, h.rect = h.__originalRect, h.closePath = h.__originalClosePath, h.beginPath = h.__originalBeginPath, delete h._removeMirroring;
        }, h.save = function() {
          n.save(), this.__originalSave();
        }, h.restore = function() {
          n.restore(), this.__originalRestore();
        }, h.translate = function(d, S) {
          n.translate(d, S), this.__originalTranslate(d, S);
        }, h.scale = function(d, S) {
          n.scale(d, S), this.__originalScale(d, S);
        }, h.transform = function(d, S, C, P, F, O) {
          n.transform(d, S, C, P, F, O), this.__originalTransform(d, S, C, P, F, O);
        }, h.setTransform = function(d, S, C, P, F, O) {
          n.setTransform(d, S, C, P, F, O), this.__originalSetTransform(d, S, C, P, F, O);
        }, h.resetTransform = function() {
          n.resetTransform(), this.__originalResetTransform();
        }, h.rotate = function(d) {
          n.rotate(d), this.__originalRotate(d);
        }, h.clip = function(d) {
          n.clip(d), this.__originalClip(d);
        }, h.moveTo = function(a, d) {
          n.moveTo(a, d), this.__originalMoveTo(a, d);
        }, h.lineTo = function(a, d) {
          n.lineTo(a, d), this.__originalLineTo(a, d);
        }, h.bezierCurveTo = function(a, d, S, C, P, F) {
          n.bezierCurveTo(a, d, S, C, P, F), this.__originalBezierCurveTo(a, d, S, C, P, F);
        }, h.rect = function(a, d, S, C) {
          n.rect(a, d, S, C), this.__originalRect(a, d, S, C);
        }, h.closePath = function() {
          n.closePath(), this.__originalClosePath();
        }, h.beginPath = function() {
          n.beginPath(), this.__originalBeginPath();
        };
      }
      class j {
        constructor(n) {
          this.canvasFactory = n, this.cache = /* @__PURE__ */ Object.create(null);
        }
        getCanvas(n, a, d) {
          let S;
          return this.cache[n] !== void 0 ? (S = this.cache[n], this.canvasFactory.reset(S, a, d)) : (S = this.canvasFactory.create(a, d), this.cache[n] = S), S;
        }
        delete(n) {
          delete this.cache[n];
        }
        clear() {
          for (const n in this.cache) {
            const a = this.cache[n];
            this.canvasFactory.destroy(a), delete this.cache[n];
          }
        }
      }
      function K(h, n, a, d, S, C, P, F, O, N) {
        const [k, U, Y, G, I, B] = (0, g.getCurrentTransform)(h);
        if (U === 0 && Y === 0) {
          const ct = P * k + I, pt = Math.round(ct), ft = F * G + B, mt = Math.round(ft), yt = (P + O) * k + I, At = Math.abs(Math.round(yt) - pt) || 1, et = (F + N) * G + B, H = Math.abs(Math.round(et) - mt) || 1;
          return h.setTransform(Math.sign(k), 0, 0, Math.sign(G), pt, mt), h.drawImage(n, a, d, S, C, 0, 0, At, H), h.setTransform(k, U, Y, G, I, B), [At, H];
        }
        if (k === 0 && G === 0) {
          const ct = F * Y + I, pt = Math.round(ct), ft = P * U + B, mt = Math.round(ft), yt = (F + N) * Y + I, At = Math.abs(Math.round(yt) - pt) || 1, et = (P + O) * U + B, H = Math.abs(Math.round(et) - mt) || 1;
          return h.setTransform(0, Math.sign(U), Math.sign(Y), 0, pt, mt), h.drawImage(n, a, d, S, C, 0, 0, H, At), h.setTransform(k, U, Y, G, I, B), [H, At];
        }
        h.drawImage(n, a, d, S, C, P, F, O, N);
        const st = Math.hypot(k, U), q = Math.hypot(Y, G);
        return [st * O, q * N];
      }
      function Q(h) {
        const {
          width: n,
          height: a
        } = h;
        if (n > L || a > L)
          return null;
        const d = 1e3, S = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]), C = n + 1;
        let P = new Uint8Array(C * (a + 1)), F, O, N;
        const k = n + 7 & -8;
        let U = new Uint8Array(k * a), Y = 0;
        for (const q of h.data) {
          let ct = 128;
          for (; ct > 0; )
            U[Y++] = q & ct ? 0 : 255, ct >>= 1;
        }
        let G = 0;
        for (Y = 0, U[Y] !== 0 && (P[0] = 1, ++G), O = 1; O < n; O++)
          U[Y] !== U[Y + 1] && (P[O] = U[Y] ? 2 : 1, ++G), Y++;
        for (U[Y] !== 0 && (P[O] = 2, ++G), F = 1; F < a; F++) {
          Y = F * k, N = F * C, U[Y - k] !== U[Y] && (P[N] = U[Y] ? 1 : 8, ++G);
          let q = (U[Y] ? 4 : 0) + (U[Y - k] ? 8 : 0);
          for (O = 1; O < n; O++)
            q = (q >> 2) + (U[Y + 1] ? 4 : 0) + (U[Y - k + 1] ? 8 : 0), S[q] && (P[N + O] = S[q], ++G), Y++;
          if (U[Y - k] !== U[Y] && (P[N + O] = U[Y] ? 2 : 4, ++G), G > d)
            return null;
        }
        for (Y = k * (a - 1), N = F * C, U[Y] !== 0 && (P[N] = 8, ++G), O = 1; O < n; O++)
          U[Y] !== U[Y + 1] && (P[N + O] = U[Y] ? 4 : 8, ++G), Y++;
        if (U[Y] !== 0 && (P[N + O] = 4, ++G), G > d)
          return null;
        const I = new Int32Array([0, C, -1, 0, -C, 0, 0, 0, 1]), B = new Path2D();
        for (F = 0; G && F <= a; F++) {
          let q = F * C;
          const ct = q + n;
          for (; q < ct && !P[q]; )
            q++;
          if (q === ct)
            continue;
          B.moveTo(q % C, F);
          const pt = q;
          let ft = P[q];
          do {
            const mt = I[ft];
            do
              q += mt;
            while (!P[q]);
            const yt = P[q];
            yt !== 5 && yt !== 10 ? (ft = yt, P[q] = 0) : (ft = yt & 51 * ft >> 4, P[q] &= ft >> 2 | ft << 2), B.lineTo(q % C, q / C | 0), P[q] || --G;
          } while (pt !== q);
          --F;
        }
        return U = null, P = null, function(q) {
          q.save(), q.scale(1 / n, -1 / a), q.translate(0, -a), q.fill(B), q.beginPath(), q.restore();
        };
      }
      class J {
        constructor(n, a) {
          this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = s.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = s.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = s.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.transferMaps = "none", this.startNewPathAndClipBox([0, 0, n, a]);
        }
        clone() {
          const n = Object.create(this);
          return n.clipBox = this.clipBox.slice(), n;
        }
        setCurrentPoint(n, a) {
          this.x = n, this.y = a;
        }
        updatePathMinMax(n, a, d) {
          [a, d] = s.Util.applyTransform([a, d], n), this.minX = Math.min(this.minX, a), this.minY = Math.min(this.minY, d), this.maxX = Math.max(this.maxX, a), this.maxY = Math.max(this.maxY, d);
        }
        updateRectMinMax(n, a) {
          const d = s.Util.applyTransform(a, n), S = s.Util.applyTransform(a.slice(2), n), C = s.Util.applyTransform([a[0], a[3]], n), P = s.Util.applyTransform([a[2], a[1]], n);
          this.minX = Math.min(this.minX, d[0], S[0], C[0], P[0]), this.minY = Math.min(this.minY, d[1], S[1], C[1], P[1]), this.maxX = Math.max(this.maxX, d[0], S[0], C[0], P[0]), this.maxY = Math.max(this.maxY, d[1], S[1], C[1], P[1]);
        }
        updateScalingPathMinMax(n, a) {
          s.Util.scaleMinMax(n, a), this.minX = Math.min(this.minX, a[0]), this.maxX = Math.max(this.maxX, a[1]), this.minY = Math.min(this.minY, a[2]), this.maxY = Math.max(this.maxY, a[3]);
        }
        updateCurvePathMinMax(n, a, d, S, C, P, F, O, N, k) {
          const U = s.Util.bezierBoundingBox(a, d, S, C, P, F, O, N);
          if (k) {
            k[0] = Math.min(k[0], U[0], U[2]), k[1] = Math.max(k[1], U[0], U[2]), k[2] = Math.min(k[2], U[1], U[3]), k[3] = Math.max(k[3], U[1], U[3]);
            return;
          }
          this.updateRectMinMax(n, U);
        }
        getPathBoundingBox() {
          let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.FILL, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const d = [this.minX, this.minY, this.maxX, this.maxY];
          if (n === u.STROKE) {
            a || (0, s.unreachable)("Stroke bounding box must include transform.");
            const S = s.Util.singularValueDecompose2dScale(a), C = S[0] * this.lineWidth / 2, P = S[1] * this.lineWidth / 2;
            d[0] -= C, d[1] -= P, d[2] += C, d[3] += P;
          }
          return d;
        }
        updateClipFromPath() {
          const n = s.Util.intersect(this.clipBox, this.getPathBoundingBox());
          this.startNewPathAndClipBox(n || [0, 0, 0, 0]);
        }
        isEmptyClip() {
          return this.minX === 1 / 0;
        }
        startNewPathAndClipBox(n) {
          this.clipBox = n, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = 0, this.maxY = 0;
        }
        getClippedPathBoundingBox() {
          let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : u.FILL, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return s.Util.intersect(this.clipBox, this.getPathBoundingBox(n, a));
        }
      }
      function at(h, n) {
        if (typeof ImageData < "u" && n instanceof ImageData) {
          h.putImageData(n, 0, 0);
          return;
        }
        const a = n.height, d = n.width, S = a % M, C = (a - S) / M, P = S === 0 ? C : C + 1, F = h.createImageData(d, M);
        let O = 0, N;
        const k = n.data, U = F.data;
        let Y, G, I, B;
        if (n.kind === s.ImageKind.GRAYSCALE_1BPP) {
          const st = k.byteLength, q = new Uint32Array(U.buffer, 0, U.byteLength >> 2), ct = q.length, pt = d + 7 >> 3, ft = 4294967295, mt = s.FeatureTest.isLittleEndian ? 4278190080 : 255;
          for (Y = 0; Y < P; Y++) {
            for (I = Y < C ? M : S, N = 0, G = 0; G < I; G++) {
              const yt = st - O;
              let At = 0;
              const et = yt > pt ? d : yt * 8 - 7, H = et & -8;
              let W = 0, X = 0;
              for (; At < H; At += 8)
                X = k[O++], q[N++] = X & 128 ? ft : mt, q[N++] = X & 64 ? ft : mt, q[N++] = X & 32 ? ft : mt, q[N++] = X & 16 ? ft : mt, q[N++] = X & 8 ? ft : mt, q[N++] = X & 4 ? ft : mt, q[N++] = X & 2 ? ft : mt, q[N++] = X & 1 ? ft : mt;
              for (; At < et; At++)
                W === 0 && (X = k[O++], W = 128), q[N++] = X & W ? ft : mt, W >>= 1;
            }
            for (; N < ct; )
              q[N++] = 0;
            h.putImageData(F, 0, Y * M);
          }
        } else if (n.kind === s.ImageKind.RGBA_32BPP) {
          for (G = 0, B = d * M * 4, Y = 0; Y < C; Y++)
            U.set(k.subarray(O, O + B)), O += B, h.putImageData(F, 0, G), G += M;
          Y < P && (B = d * S * 4, U.set(k.subarray(O, O + B)), h.putImageData(F, 0, G));
        } else if (n.kind === s.ImageKind.RGB_24BPP)
          for (I = M, B = d * I, Y = 0; Y < P; Y++) {
            for (Y >= C && (I = S, B = d * I), N = 0, G = B; G--; )
              U[N++] = k[O++], U[N++] = k[O++], U[N++] = k[O++], U[N++] = 255;
            h.putImageData(F, 0, Y * M);
          }
        else
          throw new Error(`bad image kind: ${n.kind}`);
      }
      function ut(h, n) {
        if (n.bitmap) {
          h.drawImage(n.bitmap, 0, 0);
          return;
        }
        const a = n.height, d = n.width, S = a % M, C = (a - S) / M, P = S === 0 ? C : C + 1, F = h.createImageData(d, M);
        let O = 0;
        const N = n.data, k = F.data;
        for (let U = 0; U < P; U++) {
          const Y = U < C ? M : S;
          ({
            srcPos: O
          } = e({
            src: N,
            srcPos: O,
            dest: k,
            width: d,
            height: Y,
            nonBlackColor: 0
          })), h.putImageData(F, 0, U * M);
        }
      }
      function ht(h, n) {
        const a = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font", "filter"];
        for (const d of a)
          h[d] !== void 0 && (n[d] = h[d]);
        h.setLineDash !== void 0 && (n.setLineDash(h.getLineDash()), n.lineDashOffset = h.lineDashOffset);
      }
      function _(h) {
        if (h.strokeStyle = h.fillStyle = "#000000", h.fillRule = "nonzero", h.globalAlpha = 1, h.lineWidth = 1, h.lineCap = "butt", h.lineJoin = "miter", h.miterLimit = 10, h.globalCompositeOperation = "source-over", h.font = "10px sans-serif", h.setLineDash !== void 0 && (h.setLineDash([]), h.lineDashOffset = 0), !s.isNodeJS) {
          const {
            filter: n
          } = h;
          n !== "none" && n !== "" && (h.filter = "none");
        }
      }
      function Z(h, n, a, d) {
        const S = h.length;
        for (let C = 3; C < S; C += 4) {
          const P = h[C];
          if (P === 0)
            h[C - 3] = n, h[C - 2] = a, h[C - 1] = d;
          else if (P < 255) {
            const F = 255 - P;
            h[C - 3] = h[C - 3] * P + n * F >> 8, h[C - 2] = h[C - 2] * P + a * F >> 8, h[C - 1] = h[C - 1] * P + d * F >> 8;
          }
        }
      }
      function z(h, n, a) {
        const d = h.length, S = 1 / 255;
        for (let C = 3; C < d; C += 4) {
          const P = a ? a[h[C]] : h[C];
          n[C] = n[C] * P * S | 0;
        }
      }
      function V(h, n, a) {
        const d = h.length;
        for (let S = 3; S < d; S += 4) {
          const C = h[S - 3] * 77 + h[S - 2] * 152 + h[S - 1] * 28;
          n[S] = a ? n[S] * a[C >> 8] >> 8 : n[S] * C >> 16;
        }
      }
      function nt(h, n, a, d, S, C, P, F, O, N, k) {
        const U = !!C, Y = U ? C[0] : 0, G = U ? C[1] : 0, I = U ? C[2] : 0, B = S === "Luminosity" ? V : z, q = Math.min(d, Math.ceil(1048576 / a));
        for (let ct = 0; ct < d; ct += q) {
          const pt = Math.min(q, d - ct), ft = h.getImageData(F - N, ct + (O - k), a, pt), mt = n.getImageData(F, ct + O, a, pt);
          U && Z(ft.data, Y, G, I), B(ft.data, mt.data, P), n.putImageData(mt, F, ct + O);
        }
      }
      function ot(h, n, a, d) {
        const S = d[0], C = d[1], P = d[2] - S, F = d[3] - C;
        P === 0 || F === 0 || (nt(n.context, a, P, F, n.subtype, n.backdrop, n.transferMap, S, C, n.offsetX, n.offsetY), h.save(), h.globalAlpha = 1, h.globalCompositeOperation = "source-over", h.setTransform(1, 0, 0, 1, 0, 0), h.drawImage(a.canvas, 0, 0), h.restore());
      }
      function lt(h, n) {
        const a = s.Util.singularValueDecompose2dScale(h);
        a[0] = Math.fround(a[0]), a[1] = Math.fround(a[1]);
        const d = Math.fround((globalThis.devicePixelRatio || 1) * g.PixelsPerInch.PDF_TO_CSS_UNITS);
        return n !== void 0 ? n : a[0] <= d || a[1] <= d;
      }
      const vt = ["butt", "round", "square"], Tt = ["miter", "round", "bevel"], St = {}, tt = {};
      class v {
        constructor(n, a, d, S, C, P, F, O) {
          let {
            optionalContentConfig: N,
            markedContentStack: k = null
          } = P;
          this.ctx = n, this.current = new J(this.ctx.canvas.width, this.ctx.canvas.height), this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = a, this.objs = d, this.canvasFactory = S, this.filterFactory = C, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.suspendedCtx = null, this.contentVisible = !0, this.markedContentStack = k || [], this.optionalContentConfig = N, this.cachedCanvases = new j(this.canvasFactory), this.cachedPatterns = /* @__PURE__ */ new Map(), this.annotationCanvasMap = F, this.viewportScale = 1, this.outputScaleX = 1, this.outputScaleY = 1, this.pageColors = O, this._cachedScaleForStroking = [-1, 0], this._cachedGetSinglePixelWidth = null, this._cachedBitmapsMap = /* @__PURE__ */ new Map();
        }
        getObject(n) {
          let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          return typeof n == "string" ? n.startsWith("g_") ? this.commonObjs.get(n) : this.objs.get(n) : a;
        }
        beginDrawing(n) {
          let {
            transform: a,
            viewport: d,
            transparency: S = !1,
            background: C = null
          } = n;
          const P = this.ctx.canvas.width, F = this.ctx.canvas.height, O = this.ctx.fillStyle;
          if (this.ctx.fillStyle = C || "#ffffff", this.ctx.fillRect(0, 0, P, F), this.ctx.fillStyle = O, S) {
            const N = this.cachedCanvases.getCanvas("transparent", P, F);
            this.compositeCtx = this.ctx, this.transparentCanvas = N.canvas, this.ctx = N.context, this.ctx.save(), this.ctx.transform(...(0, g.getCurrentTransform)(this.compositeCtx));
          }
          this.ctx.save(), _(this.ctx), a && (this.ctx.transform(...a), this.outputScaleX = a[0], this.outputScaleY = a[0]), this.ctx.transform(...d.transform), this.viewportScale = d.scale, this.baseTransform = (0, g.getCurrentTransform)(this.ctx);
        }
        executeOperatorList(n, a, d, S) {
          const C = n.argsArray, P = n.fnArray;
          let F = a || 0;
          const O = C.length;
          if (O === F)
            return F;
          const N = O - F > R && typeof d == "function", k = N ? Date.now() + E : 0;
          let U = 0;
          const Y = this.commonObjs, G = this.objs;
          let I;
          for (; ; ) {
            if (S !== void 0 && F === S.nextBreakPoint)
              return S.breakIt(F, d), F;
            if (I = P[F], I !== s.OPS.dependency)
              this[I].apply(this, C[F]);
            else
              for (const B of C[F]) {
                const st = B.startsWith("g_") ? Y : G;
                if (!st.has(B))
                  return st.get(B, d), F;
              }
            if (F++, F === O)
              return F;
            if (N && ++U > R) {
              if (Date.now() > k)
                return d(), F;
              U = 0;
            }
          }
        }
        #t() {
          for (; this.stateStack.length || this.inSMaskMode; )
            this.restore();
          this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null);
        }
        endDrawing() {
          this.#t(), this.cachedCanvases.clear(), this.cachedPatterns.clear();
          for (const n of this._cachedBitmapsMap.values()) {
            for (const a of n.values())
              typeof HTMLCanvasElement < "u" && a instanceof HTMLCanvasElement && (a.width = a.height = 0);
            n.clear();
          }
          this._cachedBitmapsMap.clear(), this.#e();
        }
        #e() {
          if (this.pageColors) {
            const n = this.filterFactory.addHCMFilter(this.pageColors.foreground, this.pageColors.background);
            if (n !== "none") {
              const a = this.ctx.filter;
              this.ctx.filter = n, this.ctx.drawImage(this.ctx.canvas, 0, 0), this.ctx.filter = a;
            }
          }
        }
        _scaleImage(n, a) {
          const d = n.width, S = n.height;
          let C = Math.max(Math.hypot(a[0], a[1]), 1), P = Math.max(Math.hypot(a[2], a[3]), 1), F = d, O = S, N = "prescale1", k, U;
          for (; C > 2 && F > 1 || P > 2 && O > 1; ) {
            let Y = F, G = O;
            C > 2 && F > 1 && (Y = F >= 16384 ? Math.floor(F / 2) - 1 || 1 : Math.ceil(F / 2), C /= F / Y), P > 2 && O > 1 && (G = O >= 16384 ? Math.floor(O / 2) - 1 || 1 : Math.ceil(O) / 2, P /= O / G), k = this.cachedCanvases.getCanvas(N, Y, G), U = k.context, U.clearRect(0, 0, Y, G), U.drawImage(n, 0, 0, F, O, 0, 0, Y, G), n = k.canvas, F = Y, O = G, N = N === "prescale1" ? "prescale2" : "prescale1";
          }
          return {
            img: n,
            paintWidth: F,
            paintHeight: O
          };
        }
        _createMaskCanvas(n) {
          const a = this.ctx, {
            width: d,
            height: S
          } = n, C = this.current.fillColor, P = this.current.patternFill, F = (0, g.getCurrentTransform)(a);
          let O, N, k, U;
          if ((n.bitmap || n.data) && n.count > 1) {
            const et = n.bitmap || n.data.buffer;
            N = JSON.stringify(P ? F : [F.slice(0, 4), C]), O = this._cachedBitmapsMap.get(et), O || (O = /* @__PURE__ */ new Map(), this._cachedBitmapsMap.set(et, O));
            const H = O.get(N);
            if (H && !P) {
              const W = Math.round(Math.min(F[0], F[2]) + F[4]), X = Math.round(Math.min(F[1], F[3]) + F[5]);
              return {
                canvas: H,
                offsetX: W,
                offsetY: X
              };
            }
            k = H;
          }
          k || (U = this.cachedCanvases.getCanvas("maskCanvas", d, S), ut(U.context, n));
          let Y = s.Util.transform(F, [1 / d, 0, 0, -1 / S, 0, 0]);
          Y = s.Util.transform(Y, [1, 0, 0, 1, 0, -S]);
          const [G, I, B, st] = s.Util.getAxialAlignedBoundingBox([0, 0, d, S], Y), q = Math.round(B - G) || 1, ct = Math.round(st - I) || 1, pt = this.cachedCanvases.getCanvas("fillCanvas", q, ct), ft = pt.context, mt = G, yt = I;
          ft.translate(-mt, -yt), ft.transform(...Y), k || (k = this._scaleImage(U.canvas, (0, g.getCurrentTransformInverse)(ft)), k = k.img, O && P && O.set(N, k)), ft.imageSmoothingEnabled = lt((0, g.getCurrentTransform)(ft), n.interpolate), K(ft, k, 0, 0, k.width, k.height, 0, 0, d, S), ft.globalCompositeOperation = "source-in";
          const At = s.Util.transform((0, g.getCurrentTransformInverse)(ft), [1, 0, 0, 1, -mt, -yt]);
          return ft.fillStyle = P ? C.getPattern(a, this, At, u.FILL) : C, ft.fillRect(0, 0, d, S), O && !P && (this.cachedCanvases.delete("fillCanvas"), O.set(N, pt.canvas)), {
            canvas: pt.canvas,
            offsetX: Math.round(mt),
            offsetY: Math.round(yt)
          };
        }
        setLineWidth(n) {
          n !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1), this.current.lineWidth = n, this.ctx.lineWidth = n;
        }
        setLineCap(n) {
          this.ctx.lineCap = vt[n];
        }
        setLineJoin(n) {
          this.ctx.lineJoin = Tt[n];
        }
        setMiterLimit(n) {
          this.ctx.miterLimit = n;
        }
        setDash(n, a) {
          const d = this.ctx;
          d.setLineDash !== void 0 && (d.setLineDash(n), d.lineDashOffset = a);
        }
        setRenderingIntent(n) {
        }
        setFlatness(n) {
        }
        setGState(n) {
          for (const [a, d] of n)
            switch (a) {
              case "LW":
                this.setLineWidth(d);
                break;
              case "LC":
                this.setLineCap(d);
                break;
              case "LJ":
                this.setLineJoin(d);
                break;
              case "ML":
                this.setMiterLimit(d);
                break;
              case "D":
                this.setDash(d[0], d[1]);
                break;
              case "RI":
                this.setRenderingIntent(d);
                break;
              case "FL":
                this.setFlatness(d);
                break;
              case "Font":
                this.setFont(d[0], d[1]);
                break;
              case "CA":
                this.current.strokeAlpha = d;
                break;
              case "ca":
                this.current.fillAlpha = d, this.ctx.globalAlpha = d;
                break;
              case "BM":
                this.ctx.globalCompositeOperation = d;
                break;
              case "SMask":
                this.current.activeSMask = d ? this.tempSMask : null, this.tempSMask = null, this.checkSMaskState();
                break;
              case "TR":
                this.ctx.filter = this.current.transferMaps = this.filterFactory.addFilter(d);
                break;
            }
        }
        get inSMaskMode() {
          return !!this.suspendedCtx;
        }
        checkSMaskState() {
          const n = this.inSMaskMode;
          this.current.activeSMask && !n ? this.beginSMaskMode() : !this.current.activeSMask && n && this.endSMaskMode();
        }
        beginSMaskMode() {
          if (this.inSMaskMode)
            throw new Error("beginSMaskMode called while already in smask mode");
          const n = this.ctx.canvas.width, a = this.ctx.canvas.height, d = "smaskGroupAt" + this.groupLevel, S = this.cachedCanvases.getCanvas(d, n, a);
          this.suspendedCtx = this.ctx, this.ctx = S.context;
          const C = this.ctx;
          C.setTransform(...(0, g.getCurrentTransform)(this.suspendedCtx)), ht(this.suspendedCtx, C), $(C, this.suspendedCtx), this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]);
        }
        endSMaskMode() {
          if (!this.inSMaskMode)
            throw new Error("endSMaskMode called while not in smask mode");
          this.ctx._removeMirroring(), ht(this.ctx, this.suspendedCtx), this.ctx = this.suspendedCtx, this.suspendedCtx = null;
        }
        compose(n) {
          if (!this.current.activeSMask)
            return;
          n ? (n[0] = Math.floor(n[0]), n[1] = Math.floor(n[1]), n[2] = Math.ceil(n[2]), n[3] = Math.ceil(n[3])) : n = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height];
          const a = this.current.activeSMask, d = this.suspendedCtx;
          ot(d, a, this.ctx, n), this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height), this.ctx.restore();
        }
        save() {
          this.inSMaskMode ? (ht(this.ctx, this.suspendedCtx), this.suspendedCtx.save()) : this.ctx.save();
          const n = this.current;
          this.stateStack.push(n), this.current = n.clone();
        }
        restore() {
          this.stateStack.length === 0 && this.inSMaskMode && this.endSMaskMode(), this.stateStack.length !== 0 && (this.current = this.stateStack.pop(), this.inSMaskMode ? (this.suspendedCtx.restore(), ht(this.suspendedCtx, this.ctx)) : this.ctx.restore(), this.checkSMaskState(), this.pendingClip = null, this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null);
        }
        transform(n, a, d, S, C, P) {
          this.ctx.transform(n, a, d, S, C, P), this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null;
        }
        constructPath(n, a, d) {
          const S = this.ctx, C = this.current;
          let P = C.x, F = C.y, O, N;
          const k = (0, g.getCurrentTransform)(S), U = k[0] === 0 && k[3] === 0 || k[1] === 0 && k[2] === 0, Y = U ? d.slice(0) : null;
          for (let G = 0, I = 0, B = n.length; G < B; G++)
            switch (n[G] | 0) {
              case s.OPS.rectangle:
                P = a[I++], F = a[I++];
                const st = a[I++], q = a[I++], ct = P + st, pt = F + q;
                S.moveTo(P, F), st === 0 || q === 0 ? S.lineTo(ct, pt) : (S.lineTo(ct, F), S.lineTo(ct, pt), S.lineTo(P, pt)), U || C.updateRectMinMax(k, [P, F, ct, pt]), S.closePath();
                break;
              case s.OPS.moveTo:
                P = a[I++], F = a[I++], S.moveTo(P, F), U || C.updatePathMinMax(k, P, F);
                break;
              case s.OPS.lineTo:
                P = a[I++], F = a[I++], S.lineTo(P, F), U || C.updatePathMinMax(k, P, F);
                break;
              case s.OPS.curveTo:
                O = P, N = F, P = a[I + 4], F = a[I + 5], S.bezierCurveTo(a[I], a[I + 1], a[I + 2], a[I + 3], P, F), C.updateCurvePathMinMax(k, O, N, a[I], a[I + 1], a[I + 2], a[I + 3], P, F, Y), I += 6;
                break;
              case s.OPS.curveTo2:
                O = P, N = F, S.bezierCurveTo(P, F, a[I], a[I + 1], a[I + 2], a[I + 3]), C.updateCurvePathMinMax(k, O, N, P, F, a[I], a[I + 1], a[I + 2], a[I + 3], Y), P = a[I + 2], F = a[I + 3], I += 4;
                break;
              case s.OPS.curveTo3:
                O = P, N = F, P = a[I + 2], F = a[I + 3], S.bezierCurveTo(a[I], a[I + 1], P, F, P, F), C.updateCurvePathMinMax(k, O, N, a[I], a[I + 1], P, F, P, F, Y), I += 4;
                break;
              case s.OPS.closePath:
                S.closePath();
                break;
            }
          U && C.updateScalingPathMinMax(k, Y), C.setCurrentPoint(P, F);
        }
        closePath() {
          this.ctx.closePath();
        }
        stroke() {
          let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
          const a = this.ctx, d = this.current.strokeColor;
          a.globalAlpha = this.current.strokeAlpha, this.contentVisible && (typeof d == "object" && d?.getPattern ? (a.save(), a.strokeStyle = d.getPattern(a, this, (0, g.getCurrentTransformInverse)(a), u.STROKE), this.rescaleAndStroke(!1), a.restore()) : this.rescaleAndStroke(!0)), n && this.consumePath(this.current.getClippedPathBoundingBox()), a.globalAlpha = this.current.fillAlpha;
        }
        closeStroke() {
          this.closePath(), this.stroke();
        }
        fill() {
          let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
          const a = this.ctx, d = this.current.fillColor, S = this.current.patternFill;
          let C = !1;
          S && (a.save(), a.fillStyle = d.getPattern(a, this, (0, g.getCurrentTransformInverse)(a), u.FILL), C = !0);
          const P = this.current.getClippedPathBoundingBox();
          this.contentVisible && P !== null && (this.pendingEOFill ? (a.fill("evenodd"), this.pendingEOFill = !1) : a.fill()), C && a.restore(), n && this.consumePath(P);
        }
        eoFill() {
          this.pendingEOFill = !0, this.fill();
        }
        fillStroke() {
          this.fill(!1), this.stroke(!1), this.consumePath();
        }
        eoFillStroke() {
          this.pendingEOFill = !0, this.fillStroke();
        }
        closeFillStroke() {
          this.closePath(), this.fillStroke();
        }
        closeEOFillStroke() {
          this.pendingEOFill = !0, this.closePath(), this.fillStroke();
        }
        endPath() {
          this.consumePath();
        }
        clip() {
          this.pendingClip = St;
        }
        eoClip() {
          this.pendingClip = tt;
        }
        beginText() {
          this.current.textMatrix = s.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        endText() {
          const n = this.pendingTextPaths, a = this.ctx;
          if (n === void 0) {
            a.beginPath();
            return;
          }
          a.save(), a.beginPath();
          for (const d of n)
            a.setTransform(...d.transform), a.translate(d.x, d.y), d.addToPath(a, d.fontSize);
          a.restore(), a.clip(), a.beginPath(), delete this.pendingTextPaths;
        }
        setCharSpacing(n) {
          this.current.charSpacing = n;
        }
        setWordSpacing(n) {
          this.current.wordSpacing = n;
        }
        setHScale(n) {
          this.current.textHScale = n / 100;
        }
        setLeading(n) {
          this.current.leading = -n;
        }
        setFont(n, a) {
          const d = this.commonObjs.get(n), S = this.current;
          if (!d)
            throw new Error(`Can't find font for ${n}`);
          if (S.fontMatrix = d.fontMatrix || s.FONT_IDENTITY_MATRIX, (S.fontMatrix[0] === 0 || S.fontMatrix[3] === 0) && (0, s.warn)("Invalid font matrix for font " + n), a < 0 ? (a = -a, S.fontDirection = -1) : S.fontDirection = 1, this.current.font = d, this.current.fontSize = a, d.isType3Font)
            return;
          const C = d.loadedName || "sans-serif", P = d.systemFontInfo?.css || `"${C}", ${d.fallbackName}`;
          let F = "normal";
          d.black ? F = "900" : d.bold && (F = "bold");
          const O = d.italic ? "italic" : "normal";
          let N = a;
          a < i ? N = i : a > y && (N = y), this.current.fontSizeScale = a / N, this.ctx.font = `${O} ${F} ${N}px ${P}`;
        }
        setTextRenderingMode(n) {
          this.current.textRenderingMode = n;
        }
        setTextRise(n) {
          this.current.textRise = n;
        }
        moveText(n, a) {
          this.current.x = this.current.lineX += n, this.current.y = this.current.lineY += a;
        }
        setLeadingMoveText(n, a) {
          this.setLeading(-a), this.moveText(n, a);
        }
        setTextMatrix(n, a, d, S, C, P) {
          this.current.textMatrix = [n, a, d, S, C, P], this.current.textMatrixScale = Math.hypot(n, a), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0;
        }
        nextLine() {
          this.moveText(0, this.current.leading);
        }
        paintChar(n, a, d, S) {
          const C = this.ctx, P = this.current, F = P.font, O = P.textRenderingMode, N = P.fontSize / P.fontSizeScale, k = O & s.TextRenderingMode.FILL_STROKE_MASK, U = !!(O & s.TextRenderingMode.ADD_TO_PATH_FLAG), Y = P.patternFill && !F.missingFile;
          let G;
          (F.disableFontFace || U || Y) && (G = F.getPathGenerator(this.commonObjs, n)), F.disableFontFace || Y ? (C.save(), C.translate(a, d), C.beginPath(), G(C, N), S && C.setTransform(...S), (k === s.TextRenderingMode.FILL || k === s.TextRenderingMode.FILL_STROKE) && C.fill(), (k === s.TextRenderingMode.STROKE || k === s.TextRenderingMode.FILL_STROKE) && C.stroke(), C.restore()) : ((k === s.TextRenderingMode.FILL || k === s.TextRenderingMode.FILL_STROKE) && C.fillText(n, a, d), (k === s.TextRenderingMode.STROKE || k === s.TextRenderingMode.FILL_STROKE) && C.strokeText(n, a, d)), U && (this.pendingTextPaths ||= []).push({
            transform: (0, g.getCurrentTransform)(C),
            x: a,
            y: d,
            fontSize: N,
            addToPath: G
          });
        }
        get isFontSubpixelAAEnabled() {
          const {
            context: n
          } = this.cachedCanvases.getCanvas("isFontSubpixelAAEnabled", 10, 10);
          n.scale(1.5, 1), n.fillText("I", 0, 10);
          const a = n.getImageData(0, 0, 10, 10).data;
          let d = !1;
          for (let S = 3; S < a.length; S += 4)
            if (a[S] > 0 && a[S] < 255) {
              d = !0;
              break;
            }
          return (0, s.shadow)(this, "isFontSubpixelAAEnabled", d);
        }
        showText(n) {
          const a = this.current, d = a.font;
          if (d.isType3Font)
            return this.showType3Text(n);
          const S = a.fontSize;
          if (S === 0)
            return;
          const C = this.ctx, P = a.fontSizeScale, F = a.charSpacing, O = a.wordSpacing, N = a.fontDirection, k = a.textHScale * N, U = n.length, Y = d.vertical, G = Y ? 1 : -1, I = d.defaultVMetrics, B = S * a.fontMatrix[0], st = a.textRenderingMode === s.TextRenderingMode.FILL && !d.disableFontFace && !a.patternFill;
          C.save(), C.transform(...a.textMatrix), C.translate(a.x, a.y + a.textRise), N > 0 ? C.scale(k, -1) : C.scale(k, 1);
          let q;
          if (a.patternFill) {
            C.save();
            const yt = a.fillColor.getPattern(C, this, (0, g.getCurrentTransformInverse)(C), u.FILL);
            q = (0, g.getCurrentTransform)(C), C.restore(), C.fillStyle = yt;
          }
          let ct = a.lineWidth;
          const pt = a.textMatrixScale;
          if (pt === 0 || ct === 0) {
            const yt = a.textRenderingMode & s.TextRenderingMode.FILL_STROKE_MASK;
            (yt === s.TextRenderingMode.STROKE || yt === s.TextRenderingMode.FILL_STROKE) && (ct = this.getSinglePixelWidth());
          } else
            ct /= pt;
          if (P !== 1 && (C.scale(P, P), ct /= P), C.lineWidth = ct, d.isInvalidPDFjsFont) {
            const yt = [];
            let At = 0;
            for (const et of n)
              yt.push(et.unicode), At += et.width;
            C.fillText(yt.join(""), 0, 0), a.x += At * B * k, C.restore(), this.compose();
            return;
          }
          let ft = 0, mt;
          for (mt = 0; mt < U; ++mt) {
            const yt = n[mt];
            if (typeof yt == "number") {
              ft += G * yt * S / 1e3;
              continue;
            }
            let At = !1;
            const et = (yt.isSpace ? O : 0) + F, H = yt.fontChar, W = yt.accent;
            let X, rt, it = yt.width;
            if (Y) {
              const gt = yt.vmetric || I, Et = -(yt.vmetric ? gt[1] : it * 0.5) * B, xt = gt[2] * B;
              it = gt ? -gt[0] : it, X = Et / P, rt = (ft + xt) / P;
            } else
              X = ft / P, rt = 0;
            if (d.remeasure && it > 0) {
              const gt = C.measureText(H).width * 1e3 / S * P;
              if (it < gt && this.isFontSubpixelAAEnabled) {
                const Et = it / gt;
                At = !0, C.save(), C.scale(Et, 1), X /= Et;
              } else it !== gt && (X += (it - gt) / 2e3 * S / P);
            }
            if (this.contentVisible && (yt.isInFont || d.missingFile)) {
              if (st && !W)
                C.fillText(H, X, rt);
              else if (this.paintChar(H, X, rt, q), W) {
                const gt = X + S * W.offset.x / P, Et = rt - S * W.offset.y / P;
                this.paintChar(W.fontChar, gt, Et, q);
              }
            }
            const dt = Y ? it * B - et * N : it * B + et * N;
            ft += dt, At && C.restore();
          }
          Y ? a.y -= ft : a.x += ft * k, C.restore(), this.compose();
        }
        showType3Text(n) {
          const a = this.ctx, d = this.current, S = d.font, C = d.fontSize, P = d.fontDirection, F = S.vertical ? 1 : -1, O = d.charSpacing, N = d.wordSpacing, k = d.textHScale * P, U = d.fontMatrix || s.FONT_IDENTITY_MATRIX, Y = n.length, G = d.textRenderingMode === s.TextRenderingMode.INVISIBLE;
          let I, B, st, q;
          if (!(G || C === 0)) {
            for (this._cachedScaleForStroking[0] = -1, this._cachedGetSinglePixelWidth = null, a.save(), a.transform(...d.textMatrix), a.translate(d.x, d.y), a.scale(k, P), I = 0; I < Y; ++I) {
              if (B = n[I], typeof B == "number") {
                q = F * B * C / 1e3, this.ctx.translate(q, 0), d.x += q * k;
                continue;
              }
              const ct = (B.isSpace ? N : 0) + O, pt = S.charProcOperatorList[B.operatorListId];
              if (!pt) {
                (0, s.warn)(`Type3 character "${B.operatorListId}" is not available.`);
                continue;
              }
              this.contentVisible && (this.processingType3 = B, this.save(), a.scale(C, C), a.transform(...U), this.executeOperatorList(pt), this.restore()), st = s.Util.applyTransform([B.width, 0], U)[0] * C + ct, a.translate(st, 0), d.x += st * k;
            }
            a.restore(), this.processingType3 = null;
          }
        }
        setCharWidth(n, a) {
        }
        setCharWidthAndBounds(n, a, d, S, C, P) {
          this.ctx.rect(d, S, C - d, P - S), this.ctx.clip(), this.endPath();
        }
        getColorN_Pattern(n) {
          let a;
          if (n[0] === "TilingPattern") {
            const d = n[1], S = this.baseTransform || (0, g.getCurrentTransform)(this.ctx), C = {
              createCanvasGraphics: (P) => new v(P, this.commonObjs, this.objs, this.canvasFactory, this.filterFactory, {
                optionalContentConfig: this.optionalContentConfig,
                markedContentStack: this.markedContentStack
              })
            };
            a = new f(n, d, this.ctx, C, S);
          } else
            a = this._getPattern(n[1], n[2]);
          return a;
        }
        setStrokeColorN() {
          this.current.strokeColor = this.getColorN_Pattern(arguments);
        }
        setFillColorN() {
          this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0;
        }
        setStrokeRGBColor(n, a, d) {
          const S = s.Util.makeHexColor(n, a, d);
          this.ctx.strokeStyle = S, this.current.strokeColor = S;
        }
        setFillRGBColor(n, a, d) {
          const S = s.Util.makeHexColor(n, a, d);
          this.ctx.fillStyle = S, this.current.fillColor = S, this.current.patternFill = !1;
        }
        _getPattern(n) {
          let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, d;
          return this.cachedPatterns.has(n) ? d = this.cachedPatterns.get(n) : (d = c(this.getObject(n)), this.cachedPatterns.set(n, d)), a && (d.matrix = a), d;
        }
        shadingFill(n) {
          if (!this.contentVisible)
            return;
          const a = this.ctx;
          this.save();
          const d = this._getPattern(n);
          a.fillStyle = d.getPattern(a, this, (0, g.getCurrentTransformInverse)(a), u.SHADING);
          const S = (0, g.getCurrentTransformInverse)(a);
          if (S) {
            const {
              width: C,
              height: P
            } = a.canvas, [F, O, N, k] = s.Util.getAxialAlignedBoundingBox([0, 0, C, P], S);
            this.ctx.fillRect(F, O, N - F, k - O);
          } else
            this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
          this.compose(this.current.getClippedPathBoundingBox()), this.restore();
        }
        beginInlineImage() {
          (0, s.unreachable)("Should not call beginInlineImage");
        }
        beginImageData() {
          (0, s.unreachable)("Should not call beginImageData");
        }
        paintFormXObjectBegin(n, a) {
          if (this.contentVisible && (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(n) && n.length === 6 && this.transform(...n), this.baseTransform = (0, g.getCurrentTransform)(this.ctx), a)) {
            const d = a[2] - a[0], S = a[3] - a[1];
            this.ctx.rect(a[0], a[1], d, S), this.current.updateRectMinMax((0, g.getCurrentTransform)(this.ctx), a), this.clip(), this.endPath();
          }
        }
        paintFormXObjectEnd() {
          this.contentVisible && (this.restore(), this.baseTransform = this.baseTransformStack.pop());
        }
        beginGroup(n) {
          if (!this.contentVisible)
            return;
          this.save(), this.inSMaskMode && (this.endSMaskMode(), this.current.activeSMask = null);
          const a = this.ctx;
          n.isolated || (0, s.info)("TODO: Support non-isolated groups."), n.knockout && (0, s.warn)("Knockout groups not supported.");
          const d = (0, g.getCurrentTransform)(a);
          if (n.matrix && a.transform(...n.matrix), !n.bbox)
            throw new Error("Bounding box is required.");
          let S = s.Util.getAxialAlignedBoundingBox(n.bbox, (0, g.getCurrentTransform)(a));
          const C = [0, 0, a.canvas.width, a.canvas.height];
          S = s.Util.intersect(S, C) || [0, 0, 0, 0];
          const P = Math.floor(S[0]), F = Math.floor(S[1]);
          let O = Math.max(Math.ceil(S[2]) - P, 1), N = Math.max(Math.ceil(S[3]) - F, 1), k = 1, U = 1;
          O > T && (k = O / T, O = T), N > T && (U = N / T, N = T), this.current.startNewPathAndClipBox([0, 0, O, N]);
          let Y = "groupAt" + this.groupLevel;
          n.smask && (Y += "_smask_" + this.smaskCounter++ % 2);
          const G = this.cachedCanvases.getCanvas(Y, O, N), I = G.context;
          I.scale(1 / k, 1 / U), I.translate(-P, -F), I.transform(...d), n.smask ? this.smaskStack.push({
            canvas: G.canvas,
            context: I,
            offsetX: P,
            offsetY: F,
            scaleX: k,
            scaleY: U,
            subtype: n.smask.subtype,
            backdrop: n.smask.backdrop,
            transferMap: n.smask.transferMap || null,
            startTransformInverse: null
          }) : (a.setTransform(1, 0, 0, 1, 0, 0), a.translate(P, F), a.scale(k, U), a.save()), ht(a, I), this.ctx = I, this.setGState([["BM", "source-over"], ["ca", 1], ["CA", 1]]), this.groupStack.push(a), this.groupLevel++;
        }
        endGroup(n) {
          if (!this.contentVisible)
            return;
          this.groupLevel--;
          const a = this.ctx, d = this.groupStack.pop();
          if (this.ctx = d, this.ctx.imageSmoothingEnabled = !1, n.smask)
            this.tempSMask = this.smaskStack.pop(), this.restore();
          else {
            this.ctx.restore();
            const S = (0, g.getCurrentTransform)(this.ctx);
            this.restore(), this.ctx.save(), this.ctx.setTransform(...S);
            const C = s.Util.getAxialAlignedBoundingBox([0, 0, a.canvas.width, a.canvas.height], S);
            this.ctx.drawImage(a.canvas, 0, 0), this.ctx.restore(), this.compose(C);
          }
        }
        beginAnnotation(n, a, d, S, C) {
          if (this.#t(), _(this.ctx), this.ctx.save(), this.save(), this.baseTransform && this.ctx.setTransform(...this.baseTransform), Array.isArray(a) && a.length === 4) {
            const P = a[2] - a[0], F = a[3] - a[1];
            if (C && this.annotationCanvasMap) {
              d = d.slice(), d[4] -= a[0], d[5] -= a[1], a = a.slice(), a[0] = a[1] = 0, a[2] = P, a[3] = F;
              const [O, N] = s.Util.singularValueDecompose2dScale((0, g.getCurrentTransform)(this.ctx)), {
                viewportScale: k
              } = this, U = Math.ceil(P * this.outputScaleX * k), Y = Math.ceil(F * this.outputScaleY * k);
              this.annotationCanvas = this.canvasFactory.create(U, Y);
              const {
                canvas: G,
                context: I
              } = this.annotationCanvas;
              this.annotationCanvasMap.set(n, G), this.annotationCanvas.savedCtx = this.ctx, this.ctx = I, this.ctx.save(), this.ctx.setTransform(O, 0, 0, -N, 0, F * N), _(this.ctx);
            } else
              _(this.ctx), this.ctx.rect(a[0], a[1], P, F), this.ctx.clip(), this.endPath();
          }
          this.current = new J(this.ctx.canvas.width, this.ctx.canvas.height), this.transform(...d), this.transform(...S);
        }
        endAnnotation() {
          this.annotationCanvas && (this.ctx.restore(), this.#e(), this.ctx = this.annotationCanvas.savedCtx, delete this.annotationCanvas.savedCtx, delete this.annotationCanvas);
        }
        paintImageMaskXObject(n) {
          if (!this.contentVisible)
            return;
          const a = n.count;
          n = this.getObject(n.data, n), n.count = a;
          const d = this.ctx, S = this.processingType3;
          if (S && (S.compiled === void 0 && (S.compiled = Q(n)), S.compiled)) {
            S.compiled(d);
            return;
          }
          const C = this._createMaskCanvas(n), P = C.canvas;
          d.save(), d.setTransform(1, 0, 0, 1, 0, 0), d.drawImage(P, C.offsetX, C.offsetY), d.restore(), this.compose();
        }
        paintImageMaskXObjectRepeat(n, a) {
          let d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, C = arguments.length > 4 ? arguments[4] : void 0, P = arguments.length > 5 ? arguments[5] : void 0;
          if (!this.contentVisible)
            return;
          n = this.getObject(n.data, n);
          const F = this.ctx;
          F.save();
          const O = (0, g.getCurrentTransform)(F);
          F.transform(a, d, S, C, 0, 0);
          const N = this._createMaskCanvas(n);
          F.setTransform(1, 0, 0, 1, N.offsetX - O[4], N.offsetY - O[5]);
          for (let k = 0, U = P.length; k < U; k += 2) {
            const Y = s.Util.transform(O, [a, d, S, C, P[k], P[k + 1]]), [G, I] = s.Util.applyTransform([0, 0], Y);
            F.drawImage(N.canvas, G, I);
          }
          F.restore(), this.compose();
        }
        paintImageMaskXObjectGroup(n) {
          if (!this.contentVisible)
            return;
          const a = this.ctx, d = this.current.fillColor, S = this.current.patternFill;
          for (const C of n) {
            const {
              data: P,
              width: F,
              height: O,
              transform: N
            } = C, k = this.cachedCanvases.getCanvas("maskCanvas", F, O), U = k.context;
            U.save();
            const Y = this.getObject(P, C);
            ut(U, Y), U.globalCompositeOperation = "source-in", U.fillStyle = S ? d.getPattern(U, this, (0, g.getCurrentTransformInverse)(a), u.FILL) : d, U.fillRect(0, 0, F, O), U.restore(), a.save(), a.transform(...N), a.scale(1, -1), K(a, k.canvas, 0, 0, F, O, 0, -1, 1, 1), a.restore();
          }
          this.compose();
        }
        paintImageXObject(n) {
          if (!this.contentVisible)
            return;
          const a = this.getObject(n);
          if (!a) {
            (0, s.warn)("Dependent image isn't ready yet");
            return;
          }
          this.paintInlineImageXObject(a);
        }
        paintImageXObjectRepeat(n, a, d, S) {
          if (!this.contentVisible)
            return;
          const C = this.getObject(n);
          if (!C) {
            (0, s.warn)("Dependent image isn't ready yet");
            return;
          }
          const P = C.width, F = C.height, O = [];
          for (let N = 0, k = S.length; N < k; N += 2)
            O.push({
              transform: [a, 0, 0, d, S[N], S[N + 1]],
              x: 0,
              y: 0,
              w: P,
              h: F
            });
          this.paintInlineImageXObjectGroup(C, O);
        }
        applyTransferMapsToCanvas(n) {
          return this.current.transferMaps !== "none" && (n.filter = this.current.transferMaps, n.drawImage(n.canvas, 0, 0), n.filter = "none"), n.canvas;
        }
        applyTransferMapsToBitmap(n) {
          if (this.current.transferMaps === "none")
            return n.bitmap;
          const {
            bitmap: a,
            width: d,
            height: S
          } = n, C = this.cachedCanvases.getCanvas("inlineImage", d, S), P = C.context;
          return P.filter = this.current.transferMaps, P.drawImage(a, 0, 0), P.filter = "none", C.canvas;
        }
        paintInlineImageXObject(n) {
          if (!this.contentVisible)
            return;
          const a = n.width, d = n.height, S = this.ctx;
          if (this.save(), !s.isNodeJS) {
            const {
              filter: F
            } = S;
            F !== "none" && F !== "" && (S.filter = "none");
          }
          S.scale(1 / a, -1 / d);
          let C;
          if (n.bitmap)
            C = this.applyTransferMapsToBitmap(n);
          else if (typeof HTMLElement == "function" && n instanceof HTMLElement || !n.data)
            C = n;
          else {
            const O = this.cachedCanvases.getCanvas("inlineImage", a, d).context;
            at(O, n), C = this.applyTransferMapsToCanvas(O);
          }
          const P = this._scaleImage(C, (0, g.getCurrentTransformInverse)(S));
          S.imageSmoothingEnabled = lt((0, g.getCurrentTransform)(S), n.interpolate), K(S, P.img, 0, 0, P.paintWidth, P.paintHeight, 0, -d, a, d), this.compose(), this.restore();
        }
        paintInlineImageXObjectGroup(n, a) {
          if (!this.contentVisible)
            return;
          const d = this.ctx;
          let S;
          if (n.bitmap)
            S = n.bitmap;
          else {
            const C = n.width, P = n.height, O = this.cachedCanvases.getCanvas("inlineImage", C, P).context;
            at(O, n), S = this.applyTransferMapsToCanvas(O);
          }
          for (const C of a)
            d.save(), d.transform(...C.transform), d.scale(1, -1), K(d, S, C.x, C.y, C.w, C.h, 0, -1, 1, 1), d.restore();
          this.compose();
        }
        paintSolidColorImageMask() {
          this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
        }
        markPoint(n) {
        }
        markPointProps(n, a) {
        }
        beginMarkedContent(n) {
          this.markedContentStack.push({
            visible: !0
          });
        }
        beginMarkedContentProps(n, a) {
          n === "OC" ? this.markedContentStack.push({
            visible: this.optionalContentConfig.isVisible(a)
          }) : this.markedContentStack.push({
            visible: !0
          }), this.contentVisible = this.isContentVisible();
        }
        endMarkedContent() {
          this.markedContentStack.pop(), this.contentVisible = this.isContentVisible();
        }
        beginCompat() {
        }
        endCompat() {
        }
        consumePath(n) {
          const a = this.current.isEmptyClip();
          this.pendingClip && this.current.updateClipFromPath(), this.pendingClip || this.compose(n);
          const d = this.ctx;
          this.pendingClip && (a || (this.pendingClip === tt ? d.clip("evenodd") : d.clip()), this.pendingClip = null), this.current.startNewPathAndClipBox(this.current.clipBox), d.beginPath();
        }
        getSinglePixelWidth() {
          if (!this._cachedGetSinglePixelWidth) {
            const n = (0, g.getCurrentTransform)(this.ctx);
            if (n[1] === 0 && n[2] === 0)
              this._cachedGetSinglePixelWidth = 1 / Math.min(Math.abs(n[0]), Math.abs(n[3]));
            else {
              const a = Math.abs(n[0] * n[3] - n[2] * n[1]), d = Math.hypot(n[0], n[2]), S = Math.hypot(n[1], n[3]);
              this._cachedGetSinglePixelWidth = Math.max(d, S) / a;
            }
          }
          return this._cachedGetSinglePixelWidth;
        }
        getScaleForStroking() {
          if (this._cachedScaleForStroking[0] === -1) {
            const {
              lineWidth: n
            } = this.current, {
              a,
              b: d,
              c: S,
              d: C
            } = this.ctx.getTransform();
            let P, F;
            if (d === 0 && S === 0) {
              const O = Math.abs(a), N = Math.abs(C);
              if (O === N)
                if (n === 0)
                  P = F = 1 / O;
                else {
                  const k = O * n;
                  P = F = k < 1 ? 1 / k : 1;
                }
              else if (n === 0)
                P = 1 / O, F = 1 / N;
              else {
                const k = O * n, U = N * n;
                P = k < 1 ? 1 / k : 1, F = U < 1 ? 1 / U : 1;
              }
            } else {
              const O = Math.abs(a * C - d * S), N = Math.hypot(a, d), k = Math.hypot(S, C);
              if (n === 0)
                P = k / O, F = N / O;
              else {
                const U = n * O;
                P = k > U ? k / U : 1, F = N > U ? N / U : 1;
              }
            }
            this._cachedScaleForStroking[0] = P, this._cachedScaleForStroking[1] = F;
          }
          return this._cachedScaleForStroking;
        }
        rescaleAndStroke(n) {
          const {
            ctx: a
          } = this, {
            lineWidth: d
          } = this.current, [S, C] = this.getScaleForStroking();
          if (a.lineWidth = d || 1, S === 1 && C === 1) {
            a.stroke();
            return;
          }
          const P = a.getLineDash();
          if (n && a.save(), a.scale(S, C), P.length > 0) {
            const F = Math.max(S, C);
            a.setLineDash(P.map((O) => O / F)), a.lineDashOffset /= F;
          }
          a.stroke(), n && a.restore();
        }
        isContentVisible() {
          for (let n = this.markedContentStack.length - 1; n >= 0; n--)
            if (!this.markedContentStack[n].visible)
              return !1;
          return !0;
        }
      }
      for (const h in s.OPS)
        v.prototype[h] !== void 0 && (v.prototype[s.OPS[h]] = v.prototype[h]);
    })
  ),
  /***/
  473: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        DOMCMapReaderFactory: () => (
          /* binding */
          c
        ),
        /* harmony export */
        DOMCanvasFactory: () => (
          /* binding */
          o
        ),
        /* harmony export */
        DOMFilterFactory: () => (
          /* binding */
          m
        ),
        /* harmony export */
        DOMSVGFactory: () => (
          /* binding */
          f
        ),
        /* harmony export */
        DOMStandardFontDataFactory: () => (
          /* binding */
          r
        ),
        /* harmony export */
        PDFDateString: () => (
          /* binding */
          K
        ),
        /* harmony export */
        PageViewport: () => (
          /* binding */
          e
        ),
        /* harmony export */
        PixelsPerInch: () => (
          /* binding */
          p
        ),
        /* harmony export */
        RenderingCancelledException: () => (
          /* binding */
          i
        ),
        /* harmony export */
        StatTimer: () => (
          /* binding */
          L
        ),
        /* harmony export */
        fetchData: () => (
          /* binding */
          l
        ),
        /* harmony export */
        getColorValues: () => (
          /* binding */
          at
        ),
        /* harmony export */
        getCurrentTransform: () => (
          /* binding */
          ut
        ),
        /* harmony export */
        getCurrentTransformInverse: () => (
          /* binding */
          ht
        ),
        /* harmony export */
        getFilenameFromUrl: () => (
          /* binding */
          E
        ),
        /* harmony export */
        getPdfFilenameFromUrl: () => (
          /* binding */
          R
        ),
        /* harmony export */
        getRGB: () => (
          /* binding */
          J
        ),
        /* harmony export */
        getXfaPageViewport: () => (
          /* binding */
          Q
        ),
        /* harmony export */
        isDataScheme: () => (
          /* binding */
          y
        ),
        /* harmony export */
        isPdfFile: () => (
          /* binding */
          T
        ),
        /* harmony export */
        isValidFetchUrl: () => (
          /* binding */
          M
        ),
        /* harmony export */
        noContextMenu: () => (
          /* binding */
          $
        ),
        /* harmony export */
        setLayerDimensions: () => (
          /* binding */
          _
        )
        /* harmony export */
      }), t(7944), t(3352), t(8837), t(9803), t(8347), t(7995), t(62), t(4602), t(344), t(4305), t(7583), t(4226), t(3655), t(2555), t(2202);
      var s = t(6822), g = t(3266);
      function u(Z, z, V) {
        return z = A(z), z in Z ? Object.defineProperty(Z, z, { value: V, enumerable: !0, configurable: !0, writable: !0 }) : Z[z] = V, Z;
      }
      function A(Z) {
        var z = b(Z, "string");
        return typeof z == "symbol" ? z : String(z);
      }
      function b(Z, z) {
        if (typeof Z != "object" || !Z) return Z;
        var V = Z[Symbol.toPrimitive];
        if (V !== void 0) {
          var nt = V.call(Z, z);
          if (typeof nt != "object") return nt;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return (z === "string" ? String : Number)(Z);
      }
      const x = "http://www.w3.org/2000/svg";
      class p {
        static CSS = 96;
        static PDF = 72;
        static #t = u(this, "PDF_TO_CSS_UNITS", this.CSS / this.PDF);
      }
      class m extends s.BaseFilterFactory {
        #t;
        #e;
        #n;
        #s;
        #r;
        #i;
        #o;
        #l;
        #h;
        #c;
        #f = 0;
        constructor() {
          let {
            docId: z,
            ownerDocument: V = globalThis.document
          } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          super(), this.#n = z, this.#s = V;
        }
        get #u() {
          return this.#t ||= /* @__PURE__ */ new Map();
        }
        get #d() {
          if (!this.#e) {
            const z = this.#s.createElement("div"), {
              style: V
            } = z;
            V.visibility = "hidden", V.contain = "strict", V.width = V.height = 0, V.position = "absolute", V.top = V.left = 0, V.zIndex = -1;
            const nt = this.#s.createElementNS(x, "svg");
            nt.setAttribute("width", 0), nt.setAttribute("height", 0), this.#e = this.#s.createElementNS(x, "defs"), z.append(nt), nt.append(this.#e), this.#s.body.append(z);
          }
          return this.#e;
        }
        addFilter(z) {
          if (!z)
            return "none";
          let V = this.#u.get(z);
          if (V)
            return V;
          let nt, ot, lt, vt;
          if (z.length === 1) {
            const v = z[0], h = new Array(256);
            for (let n = 0; n < 256; n++)
              h[n] = v[n] / 255;
            vt = nt = ot = lt = h.join(",");
          } else {
            const [v, h, n] = z, a = new Array(256), d = new Array(256), S = new Array(256);
            for (let C = 0; C < 256; C++)
              a[C] = v[C] / 255, d[C] = h[C] / 255, S[C] = n[C] / 255;
            nt = a.join(","), ot = d.join(","), lt = S.join(","), vt = `${nt}${ot}${lt}`;
          }
          if (V = this.#u.get(vt), V)
            return this.#u.set(z, V), V;
          const Tt = `g_${this.#n}_transfer_map_${this.#f++}`, St = `url(#${Tt})`;
          this.#u.set(z, St), this.#u.set(vt, St);
          const tt = this.#p(Tt);
          return this.#v(nt, ot, lt, tt), St;
        }
        addHCMFilter(z, V) {
          const nt = `${z}-${V}`;
          if (this.#i === nt)
            return this.#o;
          if (this.#i = nt, this.#o = "none", this.#r?.remove(), !z || !V)
            return this.#o;
          const ot = this.#y(z);
          z = g.Util.makeHexColor(...ot);
          const lt = this.#y(V);
          if (V = g.Util.makeHexColor(...lt), this.#d.style.color = "", z === "#000000" && V === "#ffffff" || z === V)
            return this.#o;
          const vt = new Array(256);
          for (let h = 0; h <= 255; h++) {
            const n = h / 255;
            vt[h] = n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4;
          }
          const Tt = vt.join(","), St = `g_${this.#n}_hcm_filter`, tt = this.#l = this.#p(St);
          this.#v(Tt, Tt, Tt, tt), this.#a(tt);
          const v = (h, n) => {
            const a = ot[h] / 255, d = lt[h] / 255, S = new Array(n + 1);
            for (let C = 0; C <= n; C++)
              S[C] = a + C / n * (d - a);
            return S.join(",");
          };
          return this.#v(v(0, 5), v(1, 5), v(2, 5), tt), this.#o = `url(#${St})`, this.#o;
        }
        addHighlightHCMFilter(z, V, nt, ot) {
          const lt = `${z}-${V}-${nt}-${ot}`;
          if (this.#h === lt)
            return this.#c;
          if (this.#h = lt, this.#c = "none", this.#l?.remove(), !z || !V)
            return this.#c;
          const [vt, Tt] = [z, V].map(this.#y.bind(this));
          let St = Math.round(0.2126 * vt[0] + 0.7152 * vt[1] + 0.0722 * vt[2]), tt = Math.round(0.2126 * Tt[0] + 0.7152 * Tt[1] + 0.0722 * Tt[2]), [v, h] = [nt, ot].map(this.#y.bind(this));
          tt < St && ([St, tt, v, h] = [tt, St, h, v]), this.#d.style.color = "";
          const n = (S, C, P) => {
            const F = new Array(256), O = (tt - St) / P, N = S / 255, k = (C - S) / (255 * P);
            let U = 0;
            for (let Y = 0; Y <= P; Y++) {
              const G = Math.round(St + Y * O), I = N + Y * k;
              for (let B = U; B <= G; B++)
                F[B] = I;
              U = G + 1;
            }
            for (let Y = U; Y < 256; Y++)
              F[Y] = F[U - 1];
            return F.join(",");
          }, a = `g_${this.#n}_hcm_highlight_filter`, d = this.#l = this.#p(a);
          return this.#a(d), this.#v(n(v[0], h[0], 5), n(v[1], h[1], 5), n(v[2], h[2], 5), d), this.#c = `url(#${a})`, this.#c;
        }
        destroy() {
          arguments.length > 0 && arguments[0] !== void 0 && arguments[0] && (this.#o || this.#c) || (this.#e && (this.#e.parentNode.parentNode.remove(), this.#e = null), this.#t && (this.#t.clear(), this.#t = null), this.#f = 0);
        }
        #a(z) {
          const V = this.#s.createElementNS(x, "feColorMatrix");
          V.setAttribute("type", "matrix"), V.setAttribute("values", "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0"), z.append(V);
        }
        #p(z) {
          const V = this.#s.createElementNS(x, "filter");
          return V.setAttribute("color-interpolation-filters", "sRGB"), V.setAttribute("id", z), this.#d.append(V), V;
        }
        #m(z, V, nt) {
          const ot = this.#s.createElementNS(x, V);
          ot.setAttribute("type", "discrete"), ot.setAttribute("tableValues", nt), z.append(ot);
        }
        #v(z, V, nt, ot) {
          const lt = this.#s.createElementNS(x, "feComponentTransfer");
          ot.append(lt), this.#m(lt, "feFuncR", z), this.#m(lt, "feFuncG", V), this.#m(lt, "feFuncB", nt);
        }
        #y(z) {
          return this.#d.style.color = z, J(getComputedStyle(this.#d).getPropertyValue("color"));
        }
      }
      class o extends s.BaseCanvasFactory {
        constructor() {
          let {
            ownerDocument: z = globalThis.document
          } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          super(), this._document = z;
        }
        _createCanvas(z, V) {
          const nt = this._document.createElement("canvas");
          return nt.width = z, nt.height = V, nt;
        }
      }
      async function l(Z) {
        let z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "text";
        if (M(Z, document.baseURI)) {
          const V = await fetch(Z);
          if (!V.ok)
            throw new Error(V.statusText);
          switch (z) {
            case "arraybuffer":
              return V.arrayBuffer();
            case "blob":
              return V.blob();
            case "json":
              return V.json();
          }
          return V.text();
        }
        return new Promise((V, nt) => {
          const ot = new XMLHttpRequest();
          ot.open("GET", Z, !0), ot.responseType = z, ot.onreadystatechange = () => {
            if (ot.readyState === XMLHttpRequest.DONE) {
              if (ot.status === 200 || ot.status === 0) {
                let lt;
                switch (z) {
                  case "arraybuffer":
                  case "blob":
                  case "json":
                    lt = ot.response;
                    break;
                  default:
                    lt = ot.responseText;
                    break;
                }
                if (lt) {
                  V(lt);
                  return;
                }
              }
              nt(new Error(ot.statusText));
            }
          }, ot.send(null);
        });
      }
      class c extends s.BaseCMapReaderFactory {
        _fetchData(z, V) {
          return l(z, this.isCompressed ? "arraybuffer" : "text").then((nt) => ({
            cMapData: nt instanceof ArrayBuffer ? new Uint8Array(nt) : (0, g.stringToBytes)(nt),
            compressionType: V
          }));
        }
      }
      class r extends s.BaseStandardFontDataFactory {
        _fetchData(z) {
          return l(z, "arraybuffer").then((V) => new Uint8Array(V));
        }
      }
      class f extends s.BaseSVGFactory {
        _createSVG(z) {
          return document.createElementNS(x, z);
        }
      }
      class e {
        constructor(z) {
          let {
            viewBox: V,
            scale: nt,
            rotation: ot,
            offsetX: lt = 0,
            offsetY: vt = 0,
            dontFlip: Tt = !1
          } = z;
          this.viewBox = V, this.scale = nt, this.rotation = ot, this.offsetX = lt, this.offsetY = vt;
          const St = (V[2] + V[0]) / 2, tt = (V[3] + V[1]) / 2;
          let v, h, n, a;
          switch (ot %= 360, ot < 0 && (ot += 360), ot) {
            case 180:
              v = -1, h = 0, n = 0, a = 1;
              break;
            case 90:
              v = 0, h = 1, n = 1, a = 0;
              break;
            case 270:
              v = 0, h = -1, n = -1, a = 0;
              break;
            case 0:
              v = 1, h = 0, n = 0, a = -1;
              break;
            default:
              throw new Error("PageViewport: Invalid rotation, must be a multiple of 90 degrees.");
          }
          Tt && (n = -n, a = -a);
          let d, S, C, P;
          v === 0 ? (d = Math.abs(tt - V[1]) * nt + lt, S = Math.abs(St - V[0]) * nt + vt, C = (V[3] - V[1]) * nt, P = (V[2] - V[0]) * nt) : (d = Math.abs(St - V[0]) * nt + lt, S = Math.abs(tt - V[1]) * nt + vt, C = (V[2] - V[0]) * nt, P = (V[3] - V[1]) * nt), this.transform = [v * nt, h * nt, n * nt, a * nt, d - v * nt * St - n * nt * tt, S - h * nt * St - a * nt * tt], this.width = C, this.height = P;
        }
        get rawDims() {
          const {
            viewBox: z
          } = this;
          return (0, g.shadow)(this, "rawDims", {
            pageWidth: z[2] - z[0],
            pageHeight: z[3] - z[1],
            pageX: z[0],
            pageY: z[1]
          });
        }
        clone() {
          let {
            scale: z = this.scale,
            rotation: V = this.rotation,
            offsetX: nt = this.offsetX,
            offsetY: ot = this.offsetY,
            dontFlip: lt = !1
          } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          return new e({
            viewBox: this.viewBox.slice(),
            scale: z,
            rotation: V,
            offsetX: nt,
            offsetY: ot,
            dontFlip: lt
          });
        }
        convertToViewportPoint(z, V) {
          return g.Util.applyTransform([z, V], this.transform);
        }
        convertToViewportRectangle(z) {
          const V = g.Util.applyTransform([z[0], z[1]], this.transform), nt = g.Util.applyTransform([z[2], z[3]], this.transform);
          return [V[0], V[1], nt[0], nt[1]];
        }
        convertToPdfPoint(z, V) {
          return g.Util.applyInverseTransform([z, V], this.transform);
        }
      }
      class i extends g.BaseException {
        constructor(z) {
          let V = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
          super(z, "RenderingCancelledException"), this.extraDelay = V;
        }
      }
      function y(Z) {
        const z = Z.length;
        let V = 0;
        for (; V < z && Z[V].trim() === ""; )
          V++;
        return Z.substring(V, V + 5).toLowerCase() === "data:";
      }
      function T(Z) {
        return typeof Z == "string" && /\.pdf$/i.test(Z);
      }
      function E(Z) {
        return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1) || ([Z] = Z.split(/[#?]/, 1)), Z.substring(Z.lastIndexOf("/") + 1);
      }
      function R(Z) {
        let z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "document.pdf";
        if (typeof Z != "string")
          return z;
        if (y(Z))
          return (0, g.warn)('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'), z;
        const V = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/, nt = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i, ot = V.exec(Z);
        let lt = nt.exec(ot[1]) || nt.exec(ot[2]) || nt.exec(ot[3]);
        if (lt && (lt = lt[0], lt.includes("%")))
          try {
            lt = nt.exec(decodeURIComponent(lt))[0];
          } catch {
          }
        return lt || z;
      }
      class L {
        started = /* @__PURE__ */ Object.create(null);
        times = [];
        time(z) {
          z in this.started && (0, g.warn)(`Timer is already running for ${z}`), this.started[z] = Date.now();
        }
        timeEnd(z) {
          z in this.started || (0, g.warn)(`Timer has not been started for ${z}`), this.times.push({
            name: z,
            start: this.started[z],
            end: Date.now()
          }), delete this.started[z];
        }
        toString() {
          const z = [];
          let V = 0;
          for (const {
            name: nt
          } of this.times)
            V = Math.max(nt.length, V);
          for (const {
            name: nt,
            start: ot,
            end: lt
          } of this.times)
            z.push(`${nt.padEnd(V)} ${lt - ot}ms
`);
          return z.join("");
        }
      }
      function M(Z, z) {
        try {
          const {
            protocol: V
          } = z ? new URL(Z, z) : new URL(Z);
          return V === "http:" || V === "https:";
        } catch {
          return !1;
        }
      }
      function $(Z) {
        Z.preventDefault();
      }
      let j;
      class K {
        static toDateObject(z) {
          if (!z || typeof z != "string")
            return null;
          j ||= new RegExp("^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?");
          const V = j.exec(z);
          if (!V)
            return null;
          const nt = parseInt(V[1], 10);
          let ot = parseInt(V[2], 10);
          ot = ot >= 1 && ot <= 12 ? ot - 1 : 0;
          let lt = parseInt(V[3], 10);
          lt = lt >= 1 && lt <= 31 ? lt : 1;
          let vt = parseInt(V[4], 10);
          vt = vt >= 0 && vt <= 23 ? vt : 0;
          let Tt = parseInt(V[5], 10);
          Tt = Tt >= 0 && Tt <= 59 ? Tt : 0;
          let St = parseInt(V[6], 10);
          St = St >= 0 && St <= 59 ? St : 0;
          const tt = V[7] || "Z";
          let v = parseInt(V[8], 10);
          v = v >= 0 && v <= 23 ? v : 0;
          let h = parseInt(V[9], 10) || 0;
          return h = h >= 0 && h <= 59 ? h : 0, tt === "-" ? (vt += v, Tt += h) : tt === "+" && (vt -= v, Tt -= h), new Date(Date.UTC(nt, ot, lt, vt, Tt, St));
        }
      }
      function Q(Z, z) {
        let {
          scale: V = 1,
          rotation: nt = 0
        } = z;
        const {
          width: ot,
          height: lt
        } = Z.attributes.style, vt = [0, 0, parseInt(ot), parseInt(lt)];
        return new e({
          viewBox: vt,
          scale: V,
          rotation: nt
        });
      }
      function J(Z) {
        if (Z.startsWith("#")) {
          const z = parseInt(Z.slice(1), 16);
          return [(z & 16711680) >> 16, (z & 65280) >> 8, z & 255];
        }
        return Z.startsWith("rgb(") ? Z.slice(4, -1).split(",").map((z) => parseInt(z)) : Z.startsWith("rgba(") ? Z.slice(5, -1).split(",").map((z) => parseInt(z)).slice(0, 3) : ((0, g.warn)(`Not a valid color format: "${Z}"`), [0, 0, 0]);
      }
      function at(Z) {
        const z = document.createElement("span");
        z.style.visibility = "hidden", document.body.append(z);
        for (const V of Z.keys()) {
          z.style.color = V;
          const nt = window.getComputedStyle(z).color;
          Z.set(V, J(nt));
        }
        z.remove();
      }
      function ut(Z) {
        const {
          a: z,
          b: V,
          c: nt,
          d: ot,
          e: lt,
          f: vt
        } = Z.getTransform();
        return [z, V, nt, ot, lt, vt];
      }
      function ht(Z) {
        const {
          a: z,
          b: V,
          c: nt,
          d: ot,
          e: lt,
          f: vt
        } = Z.getTransform().invertSelf();
        return [z, V, nt, ot, lt, vt];
      }
      function _(Z, z) {
        let V = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, nt = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0;
        if (z instanceof e) {
          const {
            pageWidth: ot,
            pageHeight: lt
          } = z.rawDims, {
            style: vt
          } = Z, Tt = g.FeatureTest.isCSSRoundSupported, St = `var(--scale-factor) * ${ot}px`, tt = `var(--scale-factor) * ${lt}px`, v = Tt ? `round(${St}, 1px)` : `calc(${St})`, h = Tt ? `round(${tt}, 1px)` : `calc(${tt})`;
          !V || z.rotation % 180 === 0 ? (vt.width = v, vt.height = h) : (vt.width = h, vt.height = v);
        }
        nt && Z.setAttribute("data-main-rotation", z.rotation);
      }
    })
  ),
  /***/
  9423: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        DrawLayer: () => (
          /* binding */
          u
        )
        /* harmony export */
      }), t(4226);
      var s = t(473), g = t(3266);
      class u {
        #t = null;
        #e = 0;
        #n = /* @__PURE__ */ new Map();
        constructor(b) {
          let {
            pageIndex: x
          } = b;
          this.pageIndex = x;
        }
        setParent(b) {
          if (!this.#t) {
            this.#t = b;
            return;
          }
          if (this.#t !== b) {
            if (this.#n.size > 0)
              for (const x of this.#n.values())
                x.remove(), b.append(x);
            this.#t = b;
          }
        }
        static get _svgFactory() {
          return (0, g.shadow)(this, "_svgFactory", new s.DOMSVGFactory());
        }
        static #s(b, x) {
          let {
            x: p,
            y: m,
            width: o,
            height: l
          } = x;
          const {
            style: c
          } = b;
          c.top = `${100 * m}%`, c.left = `${100 * p}%`, c.width = `${100 * o}%`, c.height = `${100 * l}%`;
        }
        #r(b) {
          const x = u._svgFactory.create(1, 1, !0);
          return this.#t.append(x), u.#s(x, b), x;
        }
        highlight(b, x, p) {
          let {
            outlines: m,
            box: o
          } = b;
          const l = this.#e++, c = this.#r(o);
          c.classList.add("highlight");
          const r = u._svgFactory.createElement("defs");
          c.append(r);
          const f = u._svgFactory.createElement("path");
          r.append(f);
          const e = `path_p${this.pageIndex}_${l}`;
          f.setAttribute("id", e), f.setAttribute("d", u.#i(m));
          const i = u._svgFactory.createElement("clipPath");
          r.append(i);
          const y = `clip_${e}`;
          i.setAttribute("id", y), i.setAttribute("clipPathUnits", "objectBoundingBox");
          const T = u._svgFactory.createElement("use");
          i.append(T), T.setAttribute("href", `#${e}`), T.classList.add("clip");
          const E = u._svgFactory.createElement("use");
          return c.append(E), c.setAttribute("fill", x), c.setAttribute("fill-opacity", p), E.setAttribute("href", `#${e}`), this.#n.set(l, c), {
            id: l,
            clipPathId: `url(#${y})`
          };
        }
        highlightOutline(b) {
          let {
            outlines: x,
            box: p
          } = b;
          const m = this.#e++, o = this.#r(p);
          o.classList.add("highlightOutline");
          const l = u._svgFactory.createElement("defs");
          o.append(l);
          const c = u._svgFactory.createElement("path");
          l.append(c);
          const r = `path_p${this.pageIndex}_${m}`;
          c.setAttribute("id", r), c.setAttribute("d", u.#i(x)), c.setAttribute("vector-effect", "non-scaling-stroke");
          const f = u._svgFactory.createElement("use");
          o.append(f), f.setAttribute("href", `#${r}`);
          const e = f.cloneNode();
          return o.append(e), f.classList.add("mainOutline"), e.classList.add("secondaryOutline"), this.#n.set(m, o), m;
        }
        static #i(b) {
          const x = [];
          for (const p of b) {
            let [m, o] = p;
            x.push(`M${m} ${o}`);
            for (let l = 2; l < p.length; l += 2) {
              const c = p[l], r = p[l + 1];
              c === m ? (x.push(`V${r}`), o = r) : r === o && (x.push(`H${c}`), m = c);
            }
            x.push("Z");
          }
          return x.join(" ");
        }
        updateBox(b, x) {
          u.#s(this.#n.get(b), x);
        }
        rotate(b, x) {
          this.#n.get(b).setAttribute("data-main-rotation", x);
        }
        changeColor(b, x) {
          this.#n.get(b).setAttribute("fill", x);
        }
        changeOpacity(b, x) {
          this.#n.get(b).setAttribute("fill-opacity", x);
        }
        addClass(b, x) {
          this.#n.get(b).classList.add(x);
        }
        removeClass(b, x) {
          this.#n.get(b).classList.remove(x);
        }
        remove(b) {
          this.#t !== null && (this.#n.get(b).remove(), this.#n.delete(b));
        }
        destroy() {
          this.#t = null;
          for (const b of this.#n.values())
            b.remove();
          this.#n.clear();
        }
      }
    })
  ),
  /***/
  4629: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        AnnotationEditorLayer: () => (
          /* binding */
          r
        )
      }), t(7944), t(5561), t(8587), t(3247), t(3302), t(9490), t(5438), t(7914), t(4226);
      var s = t(3266), g = t(9115);
      t(7121), t(8518);
      var u = t(4812), A = t(7640);
      class b extends g.AnnotationEditor {
        #t = this.editorDivBlur.bind(this);
        #e = this.editorDivFocus.bind(this);
        #n = this.editorDivInput.bind(this);
        #s = this.editorDivKeydown.bind(this);
        #r;
        #i = "";
        #o = `${this.id}-editor`;
        #l;
        #h = null;
        static _freeTextDefaultContent = "";
        static _internalPadding = 0;
        static _defaultColor = null;
        static _defaultFontSize = 10;
        static get _keyboardManager() {
          const e = b.prototype, i = (E) => E.isEmpty(), y = u.AnnotationEditorUIManager.TRANSLATE_SMALL, T = u.AnnotationEditorUIManager.TRANSLATE_BIG;
          return (0, s.shadow)(this, "_keyboardManager", new u.KeyboardManager([[["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"], e.commitOrRemove, {
            bubbles: !0
          }], [["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"], e.commitOrRemove], [["ArrowLeft", "mac+ArrowLeft"], e._translateEmpty, {
            args: [-y, 0],
            checker: i
          }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], e._translateEmpty, {
            args: [-T, 0],
            checker: i
          }], [["ArrowRight", "mac+ArrowRight"], e._translateEmpty, {
            args: [y, 0],
            checker: i
          }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], e._translateEmpty, {
            args: [T, 0],
            checker: i
          }], [["ArrowUp", "mac+ArrowUp"], e._translateEmpty, {
            args: [0, -y],
            checker: i
          }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], e._translateEmpty, {
            args: [0, -T],
            checker: i
          }], [["ArrowDown", "mac+ArrowDown"], e._translateEmpty, {
            args: [0, y],
            checker: i
          }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], e._translateEmpty, {
            args: [0, T],
            checker: i
          }]]));
        }
        static _type = "freetext";
        static _editorType = s.AnnotationEditorType.FREETEXT;
        constructor(e) {
          super({
            ...e,
            name: "freeTextEditor"
          }), this.#r = e.color || b._defaultColor || g.AnnotationEditor._defaultLineColor, this.#l = e.fontSize || b._defaultFontSize;
        }
        static initialize(e) {
          g.AnnotationEditor.initialize(e, {
            strings: ["pdfjs-free-text-default-content"]
          });
          const i = getComputedStyle(document.documentElement);
          this._internalPadding = parseFloat(i.getPropertyValue("--freetext-padding"));
        }
        static updateDefaultParams(e, i) {
          switch (e) {
            case s.AnnotationEditorParamsType.FREETEXT_SIZE:
              b._defaultFontSize = i;
              break;
            case s.AnnotationEditorParamsType.FREETEXT_COLOR:
              b._defaultColor = i;
              break;
          }
        }
        updateParams(e, i) {
          switch (e) {
            case s.AnnotationEditorParamsType.FREETEXT_SIZE:
              this.#c(i);
              break;
            case s.AnnotationEditorParamsType.FREETEXT_COLOR:
              this.#f(i);
              break;
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[s.AnnotationEditorParamsType.FREETEXT_SIZE, b._defaultFontSize], [s.AnnotationEditorParamsType.FREETEXT_COLOR, b._defaultColor || g.AnnotationEditor._defaultLineColor]];
        }
        get propertiesToUpdate() {
          return [[s.AnnotationEditorParamsType.FREETEXT_SIZE, this.#l], [s.AnnotationEditorParamsType.FREETEXT_COLOR, this.#r]];
        }
        #c(e) {
          const i = (T) => {
            this.editorDiv.style.fontSize = `calc(${T}px * var(--scale-factor))`, this.translate(0, -(T - this.#l) * this.parentScale), this.#l = T, this.#d();
          }, y = this.#l;
          this.addCommands({
            cmd: () => {
              i(e);
            },
            undo: () => {
              i(y);
            },
            mustExec: !0,
            type: s.AnnotationEditorParamsType.FREETEXT_SIZE,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }
        #f(e) {
          const i = this.#r;
          this.addCommands({
            cmd: () => {
              this.#r = this.editorDiv.style.color = e;
            },
            undo: () => {
              this.#r = this.editorDiv.style.color = i;
            },
            mustExec: !0,
            type: s.AnnotationEditorParamsType.FREETEXT_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }
        _translateEmpty(e, i) {
          this._uiManager.translateSelectedEditors(e, i, !0);
        }
        getInitialTranslation() {
          const e = this.parentScale;
          return [-b._internalPadding * e, -(b._internalPadding + this.#l) * e];
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
        }
        enableEditMode() {
          this.isInEditMode() || (this.parent.setEditingState(!1), this.parent.updateToolbar(s.AnnotationEditorType.FREETEXT), super.enableEditMode(), this.overlayDiv.classList.remove("enabled"), this.editorDiv.contentEditable = !0, this._isDraggable = !1, this.div.removeAttribute("aria-activedescendant"), this.editorDiv.addEventListener("keydown", this.#s), this.editorDiv.addEventListener("focus", this.#e), this.editorDiv.addEventListener("blur", this.#t), this.editorDiv.addEventListener("input", this.#n));
        }
        disableEditMode() {
          this.isInEditMode() && (this.parent.setEditingState(!0), super.disableEditMode(), this.overlayDiv.classList.add("enabled"), this.editorDiv.contentEditable = !1, this.div.setAttribute("aria-activedescendant", this.#o), this._isDraggable = !0, this.editorDiv.removeEventListener("keydown", this.#s), this.editorDiv.removeEventListener("focus", this.#e), this.editorDiv.removeEventListener("blur", this.#t), this.editorDiv.removeEventListener("input", this.#n), this.div.focus({
            preventScroll: !0
          }), this.isEditing = !1, this.parent.div.classList.add("freetextEditing"));
        }
        focusin(e) {
          this._focusEventsAllowed && (super.focusin(e), e.target !== this.editorDiv && this.editorDiv.focus());
        }
        onceAdded() {
          if (this.width) {
            this.#m();
            return;
          }
          this.enableEditMode(), this.editorDiv.focus(), this._initialOptions?.isCentered && this.center(), this._initialOptions = null;
        }
        isEmpty() {
          return !this.editorDiv || this.editorDiv.innerText.trim() === "";
        }
        remove() {
          this.isEditing = !1, this.parent && (this.parent.setEditingState(!0), this.parent.div.classList.add("freetextEditing")), super.remove();
        }
        #u() {
          const e = this.editorDiv.getElementsByTagName("div");
          if (e.length === 0)
            return this.editorDiv.innerText;
          const i = [];
          for (const y of e)
            i.push(y.innerText.replace(/\r\n?|\n/, ""));
          return i.join(`
`);
        }
        #d() {
          const [e, i] = this.parentDimensions;
          let y;
          if (this.isAttachedToDOM)
            y = this.div.getBoundingClientRect();
          else {
            const {
              currentLayer: T,
              div: E
            } = this, R = E.style.display;
            E.style.display = "hidden", T.div.append(this.div), y = E.getBoundingClientRect(), E.remove(), E.style.display = R;
          }
          this.rotation % 180 === this.parentRotation % 180 ? (this.width = y.width / e, this.height = y.height / i) : (this.width = y.height / e, this.height = y.width / i), this.fixAndSetPosition();
        }
        commit() {
          if (!this.isInEditMode())
            return;
          super.commit(), this.disableEditMode();
          const e = this.#i, i = this.#i = this.#u().trimEnd();
          if (e === i)
            return;
          const y = (T) => {
            if (this.#i = T, !T) {
              this.remove();
              return;
            }
            this.#a(), this._uiManager.rebuild(this), this.#d();
          };
          this.addCommands({
            cmd: () => {
              y(i);
            },
            undo: () => {
              y(e);
            },
            mustExec: !1
          }), this.#d();
        }
        shouldGetKeyboardEvents() {
          return this.isInEditMode();
        }
        enterInEditMode() {
          this.enableEditMode(), this.editorDiv.focus();
        }
        dblclick(e) {
          this.enterInEditMode();
        }
        keydown(e) {
          e.target === this.div && e.key === "Enter" && (this.enterInEditMode(), e.preventDefault());
        }
        editorDivKeydown(e) {
          b._keyboardManager.exec(this, e);
        }
        editorDivFocus(e) {
          this.isEditing = !0;
        }
        editorDivBlur(e) {
          this.isEditing = !1;
        }
        editorDivInput(e) {
          this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
        }
        disableEditing() {
          this.editorDiv.setAttribute("role", "comment"), this.editorDiv.removeAttribute("aria-multiline");
        }
        enableEditing() {
          this.editorDiv.setAttribute("role", "textbox"), this.editorDiv.setAttribute("aria-multiline", !0);
        }
        render() {
          if (this.div)
            return this.div;
          let e, i;
          this.width && (e = this.x, i = this.y), super.render(), this.editorDiv = document.createElement("div"), this.editorDiv.className = "internal", this.editorDiv.setAttribute("id", this.#o), this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text"), this.enableEditing(), g.AnnotationEditor._l10nPromise.get("pdfjs-free-text-default-content").then((T) => this.editorDiv?.setAttribute("default-content", T)), this.editorDiv.contentEditable = !0;
          const {
            style: y
          } = this.editorDiv;
          if (y.fontSize = `calc(${this.#l}px * var(--scale-factor))`, y.color = this.#r, this.div.append(this.editorDiv), this.overlayDiv = document.createElement("div"), this.overlayDiv.classList.add("overlay", "enabled"), this.div.append(this.overlayDiv), (0, u.bindEvents)(this, this.div, ["dblclick", "keydown"]), this.width) {
            const [T, E] = this.parentDimensions;
            if (this.annotationElementId) {
              const {
                position: R
              } = this.#h;
              let [L, M] = this.getInitialTranslation();
              [L, M] = this.pageTranslationToScreen(L, M);
              const [$, j] = this.pageDimensions, [K, Q] = this.pageTranslation;
              let J, at;
              switch (this.rotation) {
                case 0:
                  J = e + (R[0] - K) / $, at = i + this.height - (R[1] - Q) / j;
                  break;
                case 90:
                  J = e + (R[0] - K) / $, at = i - (R[1] - Q) / j, [L, M] = [M, -L];
                  break;
                case 180:
                  J = e - this.width + (R[0] - K) / $, at = i - (R[1] - Q) / j, [L, M] = [-L, -M];
                  break;
                case 270:
                  J = e + (R[0] - K - this.height * j) / $, at = i + (R[1] - Q - this.width * $) / j, [L, M] = [-M, L];
                  break;
              }
              this.setAt(J * T, at * E, L, M);
            } else
              this.setAt(e * T, i * E, this.width * T, this.height * E);
            this.#a(), this._isDraggable = !0, this.editorDiv.contentEditable = !1;
          } else
            this._isDraggable = !1, this.editorDiv.contentEditable = !0;
          return this.div;
        }
        #a() {
          if (this.editorDiv.replaceChildren(), !!this.#i)
            for (const e of this.#i.split(`
`)) {
              const i = document.createElement("div");
              i.append(e ? document.createTextNode(e) : document.createElement("br")), this.editorDiv.append(i);
            }
        }
        get contentDiv() {
          return this.editorDiv;
        }
        static deserialize(e, i, y) {
          let T = null;
          if (e instanceof A.FreeTextAnnotationElement) {
            const {
              data: {
                defaultAppearanceData: {
                  fontSize: R,
                  fontColor: L
                },
                rect: M,
                rotation: $,
                id: j
              },
              textContent: K,
              textPosition: Q,
              parent: {
                page: {
                  pageNumber: J
                }
              }
            } = e;
            if (!K || K.length === 0)
              return null;
            T = e = {
              annotationType: s.AnnotationEditorType.FREETEXT,
              color: Array.from(L),
              fontSize: R,
              value: K.join(`
`),
              position: Q,
              pageIndex: J - 1,
              rect: M,
              rotation: $,
              id: j,
              deleted: !1
            };
          }
          const E = super.deserialize(e, i, y);
          return E.#l = e.fontSize, E.#r = s.Util.makeHexColor(...e.color), E.#i = e.value, E.annotationElementId = e.id || null, E.#h = T, E;
        }
        serialize() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          if (this.isEmpty())
            return null;
          if (this.deleted)
            return {
              pageIndex: this.pageIndex,
              id: this.annotationElementId,
              deleted: !0
            };
          const i = b._internalPadding * this.parentScale, y = this.getRect(i, i), T = g.AnnotationEditor._colorManager.convert(this.isAttachedToDOM ? getComputedStyle(this.editorDiv).color : this.#r), E = {
            annotationType: s.AnnotationEditorType.FREETEXT,
            color: T,
            fontSize: this.#l,
            value: this.#i,
            pageIndex: this.pageIndex,
            rect: y,
            rotation: this.rotation,
            structTreeParentId: this._structTreeParentId
          };
          return e ? E : this.annotationElementId && !this.#p(E) ? null : (E.id = this.annotationElementId, E);
        }
        #p(e) {
          const {
            value: i,
            fontSize: y,
            color: T,
            rect: E,
            pageIndex: R
          } = this.#h;
          return e.value !== i || e.fontSize !== y || e.rect.some((L, M) => Math.abs(L - E[M]) >= 1) || e.color.some((L, M) => L !== T[M]) || e.pageIndex !== R;
        }
        #m() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          if (!this.annotationElementId)
            return;
          if (this.#d(), !e && (this.width === 0 || this.height === 0)) {
            setTimeout(() => this.#m(!0), 0);
            return;
          }
          const i = b._internalPadding * this.parentScale;
          this.#h.rect = this.getRect(i, i);
        }
      }
      var x = t(5097), p = t(7405);
      class m extends g.AnnotationEditor {
        #t;
        #e = null;
        #n = null;
        #s = null;
        #r = null;
        #i = null;
        #o = null;
        #l = null;
        #h;
        #c = null;
        static _defaultColor = null;
        static _defaultOpacity = 1;
        static _l10nPromise;
        static _type = "highlight";
        static _editorType = s.AnnotationEditorType.HIGHLIGHT;
        constructor(e) {
          super({
            ...e,
            name: "highlightEditor"
          }), m._defaultColor ||= this._uiManager.highlightColors?.values().next().value || "#fff066", this.color = e.color || m._defaultColor, this.#h = e.opacity || m._defaultOpacity, this.#t = e.boxes || null, this._isDraggable = !1, this.#f(), this.#a(), this.rotate(this.rotation);
        }
        #f() {
          const e = new p.Outliner(this.#t, 1e-3);
          this.#i = e.getOutlines(), {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
          } = this.#i.box;
          const i = new p.Outliner(this.#t, 25e-4, 1e-3, this._uiManager.direction === "ltr");
          this.#s = i.getOutlines();
          const {
            lastPoint: y
          } = this.#s.box;
          this.#l = [(y[0] - this.x) / this.width, (y[1] - this.y) / this.height];
        }
        static initialize(e) {
          g.AnnotationEditor.initialize(e);
        }
        static updateDefaultParams(e, i) {
          switch (e) {
            case s.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
              m._defaultColor = i;
              break;
          }
        }
        get toolbarPosition() {
          return this.#l;
        }
        updateParams(e, i) {
          switch (e) {
            case s.AnnotationEditorParamsType.HIGHLIGHT_COLOR:
              this.#u(i);
              break;
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[s.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR, m._defaultColor]];
        }
        get propertiesToUpdate() {
          return [[s.AnnotationEditorParamsType.HIGHLIGHT_COLOR, this.color || m._defaultColor]];
        }
        #u(e) {
          const i = this.color;
          this.addCommands({
            cmd: () => {
              this.color = e, this.parent.drawLayer.changeColor(this.#o, e), this.#n?.updateColor(e);
            },
            undo: () => {
              this.color = i, this.parent.drawLayer.changeColor(this.#o, i), this.#n?.updateColor(i);
            },
            mustExec: !0,
            type: s.AnnotationEditorParamsType.HIGHLIGHT_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }
        async addEditToolbar() {
          const e = await super.addEditToolbar();
          return e ? (this._uiManager.highlightColors && (this.#n = new x.ColorPicker({
            editor: this
          }), e.addColorPicker(this.#n)), e) : null;
        }
        disableEditing() {
          super.disableEditing(), this.div.classList.toggle("disabled", !0);
        }
        enableEditing() {
          super.enableEditing(), this.div.classList.toggle("disabled", !1);
        }
        fixAndSetPosition() {
          return super.fixAndSetPosition(0);
        }
        getRect(e, i) {
          return super.getRect(e, i, 0);
        }
        onceAdded() {
          this.parent.addUndoableEditor(this), this.div.focus();
        }
        remove() {
          super.remove(), this.#d();
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (this.#a(), this.isAttachedToDOM || this.parent.add(this)));
        }
        setParent(e) {
          let i = !1;
          this.parent && !e ? this.#d() : e && (this.#a(e), i = !this.parent && this.div?.classList.contains("selectedEditor")), super.setParent(e), i && this.select();
        }
        #d() {
          this.#o === null || !this.parent || (this.parent.drawLayer.remove(this.#o), this.#o = null, this.parent.drawLayer.remove(this.#c), this.#c = null);
        }
        #a() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.parent;
          this.#o === null && ({
            id: this.#o,
            clipPathId: this.#e
          } = e.drawLayer.highlight(this.#i, this.color, this.#h), this.#r && (this.#r.style.clipPath = this.#e), this.#c = e.drawLayer.highlightOutline(this.#s));
        }
        static #p(e, i) {
          let {
            x: y,
            y: T,
            width: E,
            height: R
          } = e;
          switch (i) {
            case 90:
              return {
                x: 1 - T - R,
                y,
                width: R,
                height: E
              };
            case 180:
              return {
                x: 1 - y - E,
                y: 1 - T - R,
                width: E,
                height: R
              };
            case 270:
              return {
                x: T,
                y: 1 - y - E,
                width: R,
                height: E
              };
          }
          return {
            x: y,
            y: T,
            width: E,
            height: R
          };
        }
        rotate(e) {
          const {
            drawLayer: i
          } = this.parent;
          i.rotate(this.#o, e), i.rotate(this.#c, e), i.updateBox(this.#o, m.#p(this, e)), i.updateBox(this.#c, m.#p(this.#s.box, e));
        }
        render() {
          if (this.div)
            return this.div;
          const e = super.render(), i = this.#r = document.createElement("div");
          e.append(i), i.className = "internal", i.style.clipPath = this.#e;
          const [y, T] = this.parentDimensions;
          return this.setDims(this.width * y, this.height * T), (0, u.bindEvents)(this, this.#r, ["pointerover", "pointerleave"]), this.enableEditing(), e;
        }
        pointerover() {
          this.parent.drawLayer.addClass(this.#c, "hovered");
        }
        pointerleave() {
          this.parent.drawLayer.removeClass(this.#c, "hovered");
        }
        select() {
          super.select(), this.parent?.drawLayer.removeClass(this.#c, "hovered"), this.parent?.drawLayer.addClass(this.#c, "selected");
        }
        unselect() {
          super.unselect(), this.parent?.drawLayer.removeClass(this.#c, "selected");
        }
        #m() {
          const [e, i] = this.pageDimensions, y = this.#t, T = new Array(y.length * 8);
          let E = 0;
          for (const {
            x: R,
            y: L,
            width: M,
            height: $
          } of y) {
            const j = R * e, K = (1 - L - $) * i;
            T[E] = T[E + 4] = j, T[E + 1] = T[E + 3] = K, T[E + 2] = T[E + 6] = j + M * e, T[E + 5] = T[E + 7] = K + $ * i, E += 8;
          }
          return T;
        }
        #v() {
          const [e, i] = this.pageDimensions, y = this.width * e, T = this.height * i, E = this.x * e, R = (1 - this.y - this.height) * i, L = [];
          for (const M of this.#i.outlines) {
            const $ = new Array(M.length);
            for (let j = 0; j < M.length; j += 2)
              $[j] = E + M[j] * y, $[j + 1] = R + (1 - M[j + 1]) * T;
            L.push($);
          }
          return L;
        }
        static deserialize(e, i, y) {
          const T = super.deserialize(e, i, y), {
            rect: E,
            color: R,
            quadPoints: L
          } = e;
          T.color = s.Util.makeHexColor(...R), T.#h = e.opacity;
          const [M, $] = T.pageDimensions;
          T.width = (E[2] - E[0]) / M, T.height = (E[3] - E[1]) / $;
          const j = T.#t = [];
          for (let K = 0; K < L.length; K += 8)
            j.push({
              x: L[4] / M,
              y: 1 - L[K + 5] / $,
              width: (L[K + 2] - L[K]) / M,
              height: (L[K + 5] - L[K + 1]) / $
            });
          return T.#f(), T;
        }
        serialize() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          if (this.isEmpty() || e)
            return null;
          const i = this.getRect(0, 0), y = g.AnnotationEditor._colorManager.convert(this.color);
          return {
            annotationType: s.AnnotationEditorType.HIGHLIGHT,
            color: y,
            opacity: this.#h,
            quadPoints: this.#m(),
            outlines: this.#v(),
            pageIndex: this.pageIndex,
            rect: i,
            rotation: 0,
            structTreeParentId: this._structTreeParentId
          };
        }
        static canCreateNewEmptyEditor() {
          return !1;
        }
      }
      t(3352);
      var o = t(473);
      class l extends g.AnnotationEditor {
        #t = 0;
        #e = 0;
        #n = this.canvasPointermove.bind(this);
        #s = this.canvasPointerleave.bind(this);
        #r = this.canvasPointerup.bind(this);
        #i = this.canvasPointerdown.bind(this);
        #o = null;
        #l = new Path2D();
        #h = !1;
        #c = !1;
        #f = !1;
        #u = null;
        #d = 0;
        #a = 0;
        #p = null;
        static _defaultColor = null;
        static _defaultOpacity = 1;
        static _defaultThickness = 1;
        static _type = "ink";
        static _editorType = s.AnnotationEditorType.INK;
        constructor(e) {
          super({
            ...e,
            name: "inkEditor"
          }), this.color = e.color || null, this.thickness = e.thickness || null, this.opacity = e.opacity || null, this.paths = [], this.bezierPath2D = [], this.allRawPaths = [], this.currentPath = [], this.scaleFactor = 1, this.translationX = this.translationY = 0, this.x = 0, this.y = 0, this._willKeepAspectRatio = !0;
        }
        static initialize(e) {
          g.AnnotationEditor.initialize(e);
        }
        static updateDefaultParams(e, i) {
          switch (e) {
            case s.AnnotationEditorParamsType.INK_THICKNESS:
              l._defaultThickness = i;
              break;
            case s.AnnotationEditorParamsType.INK_COLOR:
              l._defaultColor = i;
              break;
            case s.AnnotationEditorParamsType.INK_OPACITY:
              l._defaultOpacity = i / 100;
              break;
          }
        }
        updateParams(e, i) {
          switch (e) {
            case s.AnnotationEditorParamsType.INK_THICKNESS:
              this.#m(i);
              break;
            case s.AnnotationEditorParamsType.INK_COLOR:
              this.#v(i);
              break;
            case s.AnnotationEditorParamsType.INK_OPACITY:
              this.#y(i);
              break;
          }
        }
        static get defaultPropertiesToUpdate() {
          return [[s.AnnotationEditorParamsType.INK_THICKNESS, l._defaultThickness], [s.AnnotationEditorParamsType.INK_COLOR, l._defaultColor || g.AnnotationEditor._defaultLineColor], [s.AnnotationEditorParamsType.INK_OPACITY, Math.round(l._defaultOpacity * 100)]];
        }
        get propertiesToUpdate() {
          return [[s.AnnotationEditorParamsType.INK_THICKNESS, this.thickness || l._defaultThickness], [s.AnnotationEditorParamsType.INK_COLOR, this.color || l._defaultColor || g.AnnotationEditor._defaultLineColor], [s.AnnotationEditorParamsType.INK_OPACITY, Math.round(100 * (this.opacity ?? l._defaultOpacity))]];
        }
        #m(e) {
          const i = this.thickness;
          this.addCommands({
            cmd: () => {
              this.thickness = e, this.#I();
            },
            undo: () => {
              this.thickness = i, this.#I();
            },
            mustExec: !0,
            type: s.AnnotationEditorParamsType.INK_THICKNESS,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }
        #v(e) {
          const i = this.color;
          this.addCommands({
            cmd: () => {
              this.color = e, this.#x();
            },
            undo: () => {
              this.color = i, this.#x();
            },
            mustExec: !0,
            type: s.AnnotationEditorParamsType.INK_COLOR,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }
        #y(e) {
          e /= 100;
          const i = this.opacity;
          this.addCommands({
            cmd: () => {
              this.opacity = e, this.#x();
            },
            undo: () => {
              this.opacity = i, this.#x();
            },
            mustExec: !0,
            type: s.AnnotationEditorParamsType.INK_OPACITY,
            overwriteIfSameType: !0,
            keepUndo: !0
          });
        }
        rebuild() {
          this.parent && (super.rebuild(), this.div !== null && (this.canvas || (this.#C(), this.#S()), this.isAttachedToDOM || (this.parent.add(this), this.#F()), this.#I()));
        }
        remove() {
          this.canvas !== null && (this.isEmpty() || this.commit(), this.canvas.width = this.canvas.height = 0, this.canvas.remove(), this.canvas = null, this.#o && (clearTimeout(this.#o), this.#o = null), this.#u.disconnect(), this.#u = null, super.remove());
        }
        setParent(e) {
          !this.parent && e ? this._uiManager.removeShouldRescale(this) : this.parent && e === null && this._uiManager.addShouldRescale(this), super.setParent(e);
        }
        onScaleChanging() {
          const [e, i] = this.parentDimensions, y = this.width * e, T = this.height * i;
          this.setDimensions(y, T);
        }
        enableEditMode() {
          this.#h || this.canvas === null || (super.enableEditMode(), this._isDraggable = !1, this.canvas.addEventListener("pointerdown", this.#i));
        }
        disableEditMode() {
          !this.isInEditMode() || this.canvas === null || (super.disableEditMode(), this._isDraggable = !this.isEmpty(), this.div.classList.remove("editing"), this.canvas.removeEventListener("pointerdown", this.#i));
        }
        onceAdded() {
          this._isDraggable = !this.isEmpty();
        }
        isEmpty() {
          return this.paths.length === 0 || this.paths.length === 1 && this.paths[0].length === 0;
        }
        #b() {
          const {
            parentRotation: e,
            parentDimensions: [i, y]
          } = this;
          switch (e) {
            case 90:
              return [0, y, y, i];
            case 180:
              return [i, y, i, y];
            case 270:
              return [i, 0, y, i];
            default:
              return [0, 0, i, y];
          }
        }
        #A() {
          const {
            ctx: e,
            color: i,
            opacity: y,
            thickness: T,
            parentScale: E,
            scaleFactor: R
          } = this;
          e.lineWidth = T * E / R, e.lineCap = "round", e.lineJoin = "round", e.miterLimit = 10, e.strokeStyle = `${i}${(0, u.opacityToHex)(y)}`;
        }
        #g(e, i) {
          this.canvas.addEventListener("contextmenu", o.noContextMenu), this.canvas.addEventListener("pointerleave", this.#s), this.canvas.addEventListener("pointermove", this.#n), this.canvas.addEventListener("pointerup", this.#r), this.canvas.removeEventListener("pointerdown", this.#i), this.isEditing = !0, this.#f || (this.#f = !0, this.#F(), this.thickness ||= l._defaultThickness, this.color ||= l._defaultColor || g.AnnotationEditor._defaultLineColor, this.opacity ??= l._defaultOpacity), this.currentPath.push([e, i]), this.#c = !1, this.#A(), this.#p = () => {
            this.#D(), this.#p && window.requestAnimationFrame(this.#p);
          }, window.requestAnimationFrame(this.#p);
        }
        #T(e, i) {
          const [y, T] = this.currentPath.at(-1);
          if (this.currentPath.length > 1 && e === y && i === T)
            return;
          const E = this.currentPath;
          let R = this.#l;
          if (E.push([e, i]), this.#c = !0, E.length <= 2) {
            R.moveTo(...E[0]), R.lineTo(e, i);
            return;
          }
          E.length === 3 && (this.#l = R = new Path2D(), R.moveTo(...E[0])), this.#k(R, ...E.at(-3), ...E.at(-2), e, i);
        }
        #M() {
          if (this.currentPath.length === 0)
            return;
          const e = this.currentPath.at(-1);
          this.#l.lineTo(...e);
        }
        #L(e, i) {
          this.#p = null, e = Math.min(Math.max(e, 0), this.canvas.width), i = Math.min(Math.max(i, 0), this.canvas.height), this.#T(e, i), this.#M();
          let y;
          if (this.currentPath.length !== 1)
            y = this.#N();
          else {
            const M = [e, i];
            y = [[M, M.slice(), M.slice(), M]];
          }
          const T = this.#l, E = this.currentPath;
          this.currentPath = [], this.#l = new Path2D();
          const R = () => {
            this.allRawPaths.push(E), this.paths.push(y), this.bezierPath2D.push(T), this.rebuild();
          }, L = () => {
            this.allRawPaths.pop(), this.paths.pop(), this.bezierPath2D.pop(), this.paths.length === 0 ? this.remove() : (this.canvas || (this.#C(), this.#S()), this.#I());
          };
          this.addCommands({
            cmd: R,
            undo: L,
            mustExec: !0
          });
        }
        #D() {
          if (!this.#c)
            return;
          this.#c = !1;
          const e = Math.ceil(this.thickness * this.parentScale), i = this.currentPath.slice(-3), y = i.map((R) => R[0]), T = i.map((R) => R[1]);
          Math.min(...y) - e, Math.max(...y) + e, Math.min(...T) - e, Math.max(...T) + e;
          const {
            ctx: E
          } = this;
          E.save(), E.clearRect(0, 0, this.canvas.width, this.canvas.height);
          for (const R of this.bezierPath2D)
            E.stroke(R);
          E.stroke(this.#l), E.restore();
        }
        #k(e, i, y, T, E, R, L) {
          const M = (i + T) / 2, $ = (y + E) / 2, j = (T + R) / 2, K = (E + L) / 2;
          e.bezierCurveTo(M + 2 * (T - M) / 3, $ + 2 * (E - $) / 3, j + 2 * (T - j) / 3, K + 2 * (E - K) / 3, j, K);
        }
        #N() {
          const e = this.currentPath;
          if (e.length <= 2)
            return [[e[0], e[0], e.at(-1), e.at(-1)]];
          const i = [];
          let y, [T, E] = e[0];
          for (y = 1; y < e.length - 2; y++) {
            const [Q, J] = e[y], [at, ut] = e[y + 1], ht = (Q + at) / 2, _ = (J + ut) / 2, Z = [T + 2 * (Q - T) / 3, E + 2 * (J - E) / 3], z = [ht + 2 * (Q - ht) / 3, _ + 2 * (J - _) / 3];
            i.push([[T, E], Z, z, [ht, _]]), [T, E] = [ht, _];
          }
          const [R, L] = e[y], [M, $] = e[y + 1], j = [T + 2 * (R - T) / 3, E + 2 * (L - E) / 3], K = [M + 2 * (R - M) / 3, $ + 2 * (L - $) / 3];
          return i.push([[T, E], j, K, [M, $]]), i;
        }
        #x() {
          if (this.isEmpty()) {
            this.#w();
            return;
          }
          this.#A();
          const {
            canvas: e,
            ctx: i
          } = this;
          i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, e.width, e.height), this.#w();
          for (const y of this.bezierPath2D)
            i.stroke(y);
        }
        commit() {
          this.#h || (super.commit(), this.isEditing = !1, this.disableEditMode(), this.setInForeground(), this.#h = !0, this.div.classList.add("disabled"), this.#I(!0), this.select(), this.parent.addInkEditorIfNeeded(!0), this.moveInDOM(), this.div.focus({
            preventScroll: !0
          }));
        }
        focusin(e) {
          this._focusEventsAllowed && (super.focusin(e), this.enableEditMode());
        }
        canvasPointerdown(e) {
          e.button !== 0 || !this.isInEditMode() || this.#h || (this.setInForeground(), e.preventDefault(), this.div.contains(document.activeElement) || this.div.focus({
            preventScroll: !0
          }), this.#g(e.offsetX, e.offsetY));
        }
        canvasPointermove(e) {
          e.preventDefault(), this.#T(e.offsetX, e.offsetY);
        }
        canvasPointerup(e) {
          e.preventDefault(), this.#O(e);
        }
        canvasPointerleave(e) {
          this.#O(e);
        }
        #O(e) {
          this.canvas.removeEventListener("pointerleave", this.#s), this.canvas.removeEventListener("pointermove", this.#n), this.canvas.removeEventListener("pointerup", this.#r), this.canvas.addEventListener("pointerdown", this.#i), this.#o && clearTimeout(this.#o), this.#o = setTimeout(() => {
            this.#o = null, this.canvas.removeEventListener("contextmenu", o.noContextMenu);
          }, 10), this.#L(e.offsetX, e.offsetY), this.addToAnnotationStorage(), this.setInBackground();
        }
        #C() {
          this.canvas = document.createElement("canvas"), this.canvas.width = this.canvas.height = 0, this.canvas.className = "inkEditorCanvas", this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"), this.div.append(this.canvas), this.ctx = this.canvas.getContext("2d");
        }
        #S() {
          this.#u = new ResizeObserver((e) => {
            const i = e[0].contentRect;
            i.width && i.height && this.setDimensions(i.width, i.height);
          }), this.#u.observe(this.div);
        }
        get isResizable() {
          return !this.isEmpty() && this.#h;
        }
        render() {
          if (this.div)
            return this.div;
          let e, i;
          this.width && (e = this.x, i = this.y), super.render(), this.div.setAttribute("data-l10n-id", "pdfjs-ink");
          const [y, T, E, R] = this.#b();
          if (this.setAt(y, T, 0, 0), this.setDims(E, R), this.#C(), this.width) {
            const [L, M] = this.parentDimensions;
            this.setAspectRatio(this.width * L, this.height * M), this.setAt(e * L, i * M, this.width * L, this.height * M), this.#f = !0, this.#F(), this.setDims(this.width * L, this.height * M), this.#x(), this.div.classList.add("disabled");
          } else
            this.div.classList.add("editing"), this.enableEditMode();
          return this.#S(), this.div;
        }
        #F() {
          if (!this.#f)
            return;
          const [e, i] = this.parentDimensions;
          this.canvas.width = Math.ceil(this.width * e), this.canvas.height = Math.ceil(this.height * i), this.#w();
        }
        setDimensions(e, i) {
          const y = Math.round(e), T = Math.round(i);
          if (this.#d === y && this.#a === T)
            return;
          this.#d = y, this.#a = T, this.canvas.style.visibility = "hidden";
          const [E, R] = this.parentDimensions;
          this.width = e / E, this.height = i / R, this.fixAndSetPosition(), this.#h && this.#H(e, i), this.#F(), this.#x(), this.canvas.style.visibility = "visible", this.fixDims();
        }
        #H(e, i) {
          const y = this.#B(), T = (e - y) / this.#e, E = (i - y) / this.#t;
          this.scaleFactor = Math.min(T, E);
        }
        #w() {
          const e = this.#B() / 2;
          this.ctx.setTransform(this.scaleFactor, 0, 0, this.scaleFactor, this.translationX * this.scaleFactor + e, this.translationY * this.scaleFactor + e);
        }
        static #R(e) {
          const i = new Path2D();
          for (let y = 0, T = e.length; y < T; y++) {
            const [E, R, L, M] = e[y];
            y === 0 && i.moveTo(...E), i.bezierCurveTo(R[0], R[1], L[0], L[1], M[0], M[1]);
          }
          return i;
        }
        static #P(e, i, y) {
          const [T, E, R, L] = i;
          switch (y) {
            case 0:
              for (let M = 0, $ = e.length; M < $; M += 2)
                e[M] += T, e[M + 1] = L - e[M + 1];
              break;
            case 90:
              for (let M = 0, $ = e.length; M < $; M += 2) {
                const j = e[M];
                e[M] = e[M + 1] + T, e[M + 1] = j + E;
              }
              break;
            case 180:
              for (let M = 0, $ = e.length; M < $; M += 2)
                e[M] = R - e[M], e[M + 1] += E;
              break;
            case 270:
              for (let M = 0, $ = e.length; M < $; M += 2) {
                const j = e[M];
                e[M] = R - e[M + 1], e[M + 1] = L - j;
              }
              break;
            default:
              throw new Error("Invalid rotation");
          }
          return e;
        }
        static #U(e, i, y) {
          const [T, E, R, L] = i;
          switch (y) {
            case 0:
              for (let M = 0, $ = e.length; M < $; M += 2)
                e[M] -= T, e[M + 1] = L - e[M + 1];
              break;
            case 90:
              for (let M = 0, $ = e.length; M < $; M += 2) {
                const j = e[M];
                e[M] = e[M + 1] - E, e[M + 1] = j - T;
              }
              break;
            case 180:
              for (let M = 0, $ = e.length; M < $; M += 2)
                e[M] = R - e[M], e[M + 1] -= E;
              break;
            case 270:
              for (let M = 0, $ = e.length; M < $; M += 2) {
                const j = e[M];
                e[M] = L - e[M + 1], e[M + 1] = R - j;
              }
              break;
            default:
              throw new Error("Invalid rotation");
          }
          return e;
        }
        #V(e, i, y, T) {
          const E = [], R = this.thickness / 2, L = e * i + R, M = e * y + R;
          for (const $ of this.paths) {
            const j = [], K = [];
            for (let Q = 0, J = $.length; Q < J; Q++) {
              const [at, ut, ht, _] = $[Q], Z = e * at[0] + L, z = e * at[1] + M, V = e * ut[0] + L, nt = e * ut[1] + M, ot = e * ht[0] + L, lt = e * ht[1] + M, vt = e * _[0] + L, Tt = e * _[1] + M;
              Q === 0 && (j.push(Z, z), K.push(Z, z)), j.push(V, nt, ot, lt, vt, Tt), K.push(V, nt), Q === J - 1 && K.push(vt, Tt);
            }
            E.push({
              bezier: l.#P(j, T, this.rotation),
              points: l.#P(K, T, this.rotation)
            });
          }
          return E;
        }
        #j() {
          let e = 1 / 0, i = -1 / 0, y = 1 / 0, T = -1 / 0;
          for (const E of this.paths)
            for (const [R, L, M, $] of E) {
              const j = s.Util.bezierBoundingBox(...R, ...L, ...M, ...$);
              e = Math.min(e, j[0]), y = Math.min(y, j[1]), i = Math.max(i, j[2]), T = Math.max(T, j[3]);
            }
          return [e, y, i, T];
        }
        #B() {
          return this.#h ? Math.ceil(this.thickness * this.parentScale) : 0;
        }
        #I() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          if (this.isEmpty())
            return;
          if (!this.#h) {
            this.#x();
            return;
          }
          const i = this.#j(), y = this.#B();
          this.#e = Math.max(g.AnnotationEditor.MIN_SIZE, i[2] - i[0]), this.#t = Math.max(g.AnnotationEditor.MIN_SIZE, i[3] - i[1]);
          const T = Math.ceil(y + this.#e * this.scaleFactor), E = Math.ceil(y + this.#t * this.scaleFactor), [R, L] = this.parentDimensions;
          this.width = T / R, this.height = E / L, this.setAspectRatio(T, E);
          const M = this.translationX, $ = this.translationY;
          this.translationX = -i[0], this.translationY = -i[1], this.#F(), this.#x(), this.#d = T, this.#a = E, this.setDims(T, E);
          const j = e ? y / this.scaleFactor / 2 : 0;
          this.translate(M - this.translationX - j, $ - this.translationY - j);
        }
        static deserialize(e, i, y) {
          if (e instanceof A.InkAnnotationElement)
            return null;
          const T = super.deserialize(e, i, y);
          T.thickness = e.thickness, T.color = s.Util.makeHexColor(...e.color), T.opacity = e.opacity;
          const [E, R] = T.pageDimensions, L = T.width * E, M = T.height * R, $ = T.parentScale, j = e.thickness / 2;
          T.#h = !0, T.#d = Math.round(L), T.#a = Math.round(M);
          const {
            paths: K,
            rect: Q,
            rotation: J
          } = e;
          for (let {
            bezier: ut
          } of K) {
            ut = l.#U(ut, Q, J);
            const ht = [];
            T.paths.push(ht);
            let _ = $ * (ut[0] - j), Z = $ * (ut[1] - j);
            for (let V = 2, nt = ut.length; V < nt; V += 6) {
              const ot = $ * (ut[V] - j), lt = $ * (ut[V + 1] - j), vt = $ * (ut[V + 2] - j), Tt = $ * (ut[V + 3] - j), St = $ * (ut[V + 4] - j), tt = $ * (ut[V + 5] - j);
              ht.push([[_, Z], [ot, lt], [vt, Tt], [St, tt]]), _ = St, Z = tt;
            }
            const z = this.#R(ht);
            T.bezierPath2D.push(z);
          }
          const at = T.#j();
          return T.#e = Math.max(g.AnnotationEditor.MIN_SIZE, at[2] - at[0]), T.#t = Math.max(g.AnnotationEditor.MIN_SIZE, at[3] - at[1]), T.#H(L, M), T;
        }
        serialize() {
          if (this.isEmpty())
            return null;
          const e = this.getRect(0, 0), i = g.AnnotationEditor._colorManager.convert(this.ctx.strokeStyle);
          return {
            annotationType: s.AnnotationEditorType.INK,
            color: i,
            thickness: this.thickness,
            opacity: this.opacity,
            paths: this.#V(this.scaleFactor / this.parentScale, this.translationX, this.translationY, e),
            pageIndex: this.pageIndex,
            rect: e,
            rotation: this.rotation,
            structTreeParentId: this._structTreeParentId
          };
        }
      }
      t(2993), t(9709);
      class c extends g.AnnotationEditor {
        #t = null;
        #e = null;
        #n = null;
        #s = null;
        #r = null;
        #i = "";
        #o = null;
        #l = null;
        #h = null;
        #c = !1;
        #f = !1;
        static _type = "stamp";
        static _editorType = s.AnnotationEditorType.STAMP;
        constructor(e) {
          super({
            ...e,
            name: "stampEditor"
          }), this.#s = e.bitmapUrl, this.#r = e.bitmapFile;
        }
        static initialize(e) {
          g.AnnotationEditor.initialize(e);
        }
        static get supportedTypes() {
          const e = ["apng", "avif", "bmp", "gif", "jpeg", "png", "svg+xml", "webp", "x-icon"];
          return (0, s.shadow)(this, "supportedTypes", e.map((i) => `image/${i}`));
        }
        static get supportedTypesStr() {
          return (0, s.shadow)(this, "supportedTypesStr", this.supportedTypes.join(","));
        }
        static isHandlingMimeForPasting(e) {
          return this.supportedTypes.includes(e);
        }
        static paste(e, i) {
          i.pasteEditor(s.AnnotationEditorType.STAMP, {
            bitmapFile: e.getAsFile()
          });
        }
        #u(e) {
          let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          if (!e) {
            this.remove();
            return;
          }
          this.#t = e.bitmap, i || (this.#e = e.id, this.#c = e.isSvg), e.file && (this.#i = e.file.name), this.#p();
        }
        #d() {
          this.#n = null, this._uiManager.enableWaiting(!1), this.#o && this.div.focus();
        }
        #a() {
          if (this.#e) {
            this._uiManager.enableWaiting(!0), this._uiManager.imageManager.getFromId(this.#e).then((i) => this.#u(i, !0)).finally(() => this.#d());
            return;
          }
          if (this.#s) {
            const i = this.#s;
            this.#s = null, this._uiManager.enableWaiting(!0), this.#n = this._uiManager.imageManager.getFromUrl(i).then((y) => this.#u(y)).finally(() => this.#d());
            return;
          }
          if (this.#r) {
            const i = this.#r;
            this.#r = null, this._uiManager.enableWaiting(!0), this.#n = this._uiManager.imageManager.getFromFile(i).then((y) => this.#u(y)).finally(() => this.#d());
            return;
          }
          const e = document.createElement("input");
          e.type = "file", e.accept = c.supportedTypesStr, this.#n = new Promise((i) => {
            e.addEventListener("change", async () => {
              if (!e.files || e.files.length === 0)
                this.remove();
              else {
                this._uiManager.enableWaiting(!0);
                const y = await this._uiManager.imageManager.getFromFile(e.files[0]);
                this.#u(y);
              }
              i();
            }), e.addEventListener("cancel", () => {
              this.remove(), i();
            });
          }).finally(() => this.#d()), e.click();
        }
        remove() {
          this.#e && (this.#t = null, this._uiManager.imageManager.deleteId(this.#e), this.#o?.remove(), this.#o = null, this.#l?.disconnect(), this.#l = null, this.#h && (clearTimeout(this.#h), this.#h = null)), super.remove();
        }
        rebuild() {
          if (!this.parent) {
            this.#e && this.#a();
            return;
          }
          super.rebuild(), this.div !== null && (this.#e && this.#a(), this.isAttachedToDOM || this.parent.add(this));
        }
        onceAdded() {
          this._isDraggable = !0, this.div.focus();
        }
        isEmpty() {
          return !(this.#n || this.#t || this.#s || this.#r);
        }
        get isResizable() {
          return !0;
        }
        render() {
          if (this.div)
            return this.div;
          let e, i;
          if (this.width && (e = this.x, i = this.y), super.render(), this.div.hidden = !0, this.#t ? this.#p() : this.#a(), this.width) {
            const [y, T] = this.parentDimensions;
            this.setAt(e * y, i * T, this.width * y, this.height * T);
          }
          return this.div;
        }
        #p() {
          const {
            div: e
          } = this;
          let {
            width: i,
            height: y
          } = this.#t;
          const [T, E] = this.pageDimensions, R = 0.75;
          if (this.width)
            i = this.width * T, y = this.height * E;
          else if (i > R * T || y > R * E) {
            const j = Math.min(R * T / i, R * E / y);
            i *= j, y *= j;
          }
          const [L, M] = this.parentDimensions;
          this.setDims(i * L / T, y * M / E), this._uiManager.enableWaiting(!1);
          const $ = this.#o = document.createElement("canvas");
          e.append($), e.hidden = !1, this.#y(i, y), this.#A(), this.#f || (this.parent.addUndoableEditor(this), this.#f = !0), this._uiManager._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              subtype: this.editorType,
              data: {
                action: "inserted_image"
              }
            }
          }), this.addAltTextButton(), this.#i && $.setAttribute("aria-label", this.#i);
        }
        #m(e, i) {
          const [y, T] = this.parentDimensions;
          this.width = e / y, this.height = i / T, this.setDims(e, i), this._initialOptions?.isCentered ? this.center() : this.fixAndSetPosition(), this._initialOptions = null, this.#h !== null && clearTimeout(this.#h);
          const E = 200;
          this.#h = setTimeout(() => {
            this.#h = null, this.#y(e, i);
          }, E);
        }
        #v(e, i) {
          const {
            width: y,
            height: T
          } = this.#t;
          let E = y, R = T, L = this.#t;
          for (; E > 2 * e || R > 2 * i; ) {
            const M = E, $ = R;
            E > 2 * e && (E = E >= 16384 ? Math.floor(E / 2) - 1 : Math.ceil(E / 2)), R > 2 * i && (R = R >= 16384 ? Math.floor(R / 2) - 1 : Math.ceil(R / 2));
            const j = new OffscreenCanvas(E, R);
            j.getContext("2d").drawImage(L, 0, 0, M, $, 0, 0, E, R), L = j.transferToImageBitmap();
          }
          return L;
        }
        #y(e, i) {
          e = Math.ceil(e), i = Math.ceil(i);
          const y = this.#o;
          if (!y || y.width === e && y.height === i)
            return;
          y.width = e, y.height = i;
          const T = this.#c ? this.#t : this.#v(e, i), E = y.getContext("2d");
          E.filter = this._uiManager.hcmFilter, E.drawImage(T, 0, 0, T.width, T.height, 0, 0, e, i);
        }
        getImageForAltText() {
          return this.#o;
        }
        #b(e) {
          if (e) {
            if (this.#c) {
              const T = this._uiManager.imageManager.getSvgUrl(this.#e);
              if (T)
                return T;
            }
            const i = document.createElement("canvas");
            return {
              width: i.width,
              height: i.height
            } = this.#t, i.getContext("2d").drawImage(this.#t, 0, 0), i.toDataURL();
          }
          if (this.#c) {
            const [i, y] = this.pageDimensions, T = Math.round(this.width * i * o.PixelsPerInch.PDF_TO_CSS_UNITS), E = Math.round(this.height * y * o.PixelsPerInch.PDF_TO_CSS_UNITS), R = new OffscreenCanvas(T, E);
            return R.getContext("2d").drawImage(this.#t, 0, 0, this.#t.width, this.#t.height, 0, 0, T, E), R.transferToImageBitmap();
          }
          return structuredClone(this.#t);
        }
        #A() {
          this.#l = new ResizeObserver((e) => {
            const i = e[0].contentRect;
            i.width && i.height && this.#m(i.width, i.height);
          }), this.#l.observe(this.div);
        }
        static deserialize(e, i, y) {
          if (e instanceof A.StampAnnotationElement)
            return null;
          const T = super.deserialize(e, i, y), {
            rect: E,
            bitmapUrl: R,
            bitmapId: L,
            isSvg: M,
            accessibilityData: $
          } = e;
          L && y.imageManager.isValidId(L) ? T.#e = L : T.#s = R, T.#c = M;
          const [j, K] = T.pageDimensions;
          return T.width = (E[2] - E[0]) / j, T.height = (E[3] - E[1]) / K, $ && (T.altTextData = $), T;
        }
        serialize() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          if (this.isEmpty())
            return null;
          const y = {
            annotationType: s.AnnotationEditorType.STAMP,
            bitmapId: this.#e,
            pageIndex: this.pageIndex,
            rect: this.getRect(0, 0),
            rotation: this.rotation,
            isSvg: this.#c,
            structTreeParentId: this._structTreeParentId
          };
          if (e)
            return y.bitmapUrl = this.#b(!0), y.accessibilityData = this.altTextData, y;
          const {
            decorative: T,
            altText: E
          } = this.altTextData;
          if (!T && E && (y.accessibilityData = {
            type: "Figure",
            alt: E
          }), i === null)
            return y;
          i.stamps ||= /* @__PURE__ */ new Map();
          const R = this.#c ? (y.rect[2] - y.rect[0]) * (y.rect[3] - y.rect[1]) : null;
          if (!i.stamps.has(this.#e))
            i.stamps.set(this.#e, {
              area: R,
              serialized: y
            }), y.bitmap = this.#b(!1);
          else if (this.#c) {
            const L = i.stamps.get(this.#e);
            R > L.area && (L.area = R, L.serialized.bitmap.close(), L.serialized.bitmap = this.#b(!1));
          }
          return y;
        }
      }
      class r {
        #t;
        #e = !1;
        #n = null;
        #s = this.pointerup.bind(this);
        #r = this.pointerUpAfterSelection.bind(this);
        #i = this.pointerdown.bind(this);
        #o = null;
        #l = this.selectionStart.bind(this);
        #h = /* @__PURE__ */ new Map();
        #c = !1;
        #f = !1;
        #u = !1;
        #d = null;
        #a;
        static _initialized = !1;
        static #p = new Map([b, l, c, m].map((e) => [e._editorType, e]));
        constructor(e) {
          let {
            uiManager: i,
            pageIndex: y,
            div: T,
            accessibilityManager: E,
            annotationLayer: R,
            drawLayer: L,
            textLayer: M,
            viewport: $,
            l10n: j
          } = e;
          const K = [...r.#p.values()];
          if (!r._initialized) {
            r._initialized = !0;
            for (const Q of K)
              Q.initialize(j);
          }
          i.registerEditorTypes(K), this.#a = i, this.pageIndex = y, this.div = T, this.#t = E, this.#n = R, this.viewport = $, this.#d = M, this.drawLayer = L, this.#a.addLayer(this);
        }
        get isEmpty() {
          return this.#h.size === 0;
        }
        updateToolbar(e) {
          this.#a.updateToolbar(e);
        }
        updateMode() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.#a.getMode();
          switch (this.#A(), e) {
            case s.AnnotationEditorType.NONE:
              this.disableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
              break;
            case s.AnnotationEditorType.INK:
              this.addInkEditorIfNeeded(!1), this.disableTextSelection(), this.togglePointerEvents(!0), this.disableClick();
              break;
            case s.AnnotationEditorType.HIGHLIGHT:
              this.enableTextSelection(), this.togglePointerEvents(!1), this.disableClick();
              break;
            default:
              this.disableTextSelection(), this.togglePointerEvents(!0), this.enableClick();
          }
          if (e !== s.AnnotationEditorType.NONE) {
            const {
              classList: i
            } = this.div;
            for (const y of r.#p.values())
              i.toggle(`${y._type}Editing`, e === y._editorType);
            this.div.hidden = !1;
          }
        }
        addInkEditorIfNeeded(e) {
          if (this.#a.getMode() !== s.AnnotationEditorType.INK)
            return;
          if (!e) {
            for (const y of this.#h.values())
              if (y.isEmpty()) {
                y.setInBackground();
                return;
              }
          }
          this.#y({
            offsetX: 0,
            offsetY: 0
          }, !1).setInBackground();
        }
        setEditingState(e) {
          this.#a.setEditingState(e);
        }
        addCommands(e) {
          this.#a.addCommands(e);
        }
        togglePointerEvents() {
          let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          this.div.classList.toggle("disabled", !e);
        }
        enable() {
          this.togglePointerEvents(!0);
          const e = /* @__PURE__ */ new Set();
          for (const y of this.#h.values())
            y.enableEditing(), y.annotationElementId && e.add(y.annotationElementId);
          if (!this.#n)
            return;
          const i = this.#n.getEditableAnnotations();
          for (const y of i) {
            if (y.hide(), this.#a.isDeletedAnnotationElement(y.data.id) || e.has(y.data.id))
              continue;
            const T = this.deserialize(y);
            T && (this.addOrRebuild(T), T.enableEditing());
          }
        }
        disable() {
          this.#u = !0, this.togglePointerEvents(!1);
          const e = /* @__PURE__ */ new Set();
          for (const y of this.#h.values()) {
            if (y.disableEditing(), !y.annotationElementId || y.serialize() !== null) {
              e.add(y.annotationElementId);
              continue;
            }
            this.getEditableAnnotation(y.annotationElementId)?.show(), y.remove();
          }
          if (this.#n) {
            const y = this.#n.getEditableAnnotations();
            for (const T of y) {
              const {
                id: E
              } = T.data;
              e.has(E) || this.#a.isDeletedAnnotationElement(E) || T.show();
            }
          }
          this.#A(), this.isEmpty && (this.div.hidden = !0);
          const {
            classList: i
          } = this.div;
          for (const y of r.#p.values())
            i.remove(`${y._type}Editing`);
          this.disableTextSelection(), this.#u = !1;
        }
        getEditableAnnotation(e) {
          return this.#n?.getEditableAnnotation(e) || null;
        }
        setActiveEditor(e) {
          this.#a.getActive() !== e && this.#a.setActiveEditor(e);
        }
        enableTextSelection() {
          this.#d?.div && document.addEventListener("selectstart", this.#l);
        }
        disableTextSelection() {
          this.#d?.div && document.removeEventListener("selectstart", this.#l);
        }
        enableClick() {
          this.div.addEventListener("pointerdown", this.#i), this.div.addEventListener("pointerup", this.#s);
        }
        disableClick() {
          this.div.removeEventListener("pointerdown", this.#i), this.div.removeEventListener("pointerup", this.#s);
        }
        attach(e) {
          this.#h.set(e.id, e);
          const {
            annotationElementId: i
          } = e;
          i && this.#a.isDeletedAnnotationElement(i) && this.#a.removeDeletedAnnotationElement(e);
        }
        detach(e) {
          this.#h.delete(e.id), this.#t?.removePointerInTextLayer(e.contentDiv), !this.#u && e.annotationElementId && this.#a.addDeletedAnnotationElement(e);
        }
        remove(e) {
          this.detach(e), this.#a.removeEditor(e), e.div.remove(), e.isAttachedToDOM = !1, this.#f || this.addInkEditorIfNeeded(!1);
        }
        changeParent(e) {
          e.parent !== this && (e.annotationElementId && (this.#a.addDeletedAnnotationElement(e.annotationElementId), g.AnnotationEditor.deleteAnnotationElement(e), e.annotationElementId = null), this.attach(e), e.parent?.detach(e), e.setParent(this), e.div && e.isAttachedToDOM && (e.div.remove(), this.div.append(e.div)));
        }
        add(e) {
          if (this.changeParent(e), this.#a.addEditor(e), this.attach(e), !e.isAttachedToDOM) {
            const i = e.render();
            this.div.append(i), e.isAttachedToDOM = !0;
          }
          e.fixAndSetPosition(), e.onceAdded(), this.#a.addToAnnotationStorage(e);
        }
        moveEditorInDOM(e) {
          if (!e.isAttachedToDOM)
            return;
          const {
            activeElement: i
          } = document;
          e.div.contains(i) && !this.#o && (e._focusEventsAllowed = !1, this.#o = setTimeout(() => {
            this.#o = null, e.div.contains(document.activeElement) ? e._focusEventsAllowed = !0 : (e.div.addEventListener("focusin", () => {
              e._focusEventsAllowed = !0;
            }, {
              once: !0
            }), i.focus());
          }, 0)), e._structTreeParentId = this.#t?.moveElementInDOM(this.div, e.div, e.contentDiv, !0);
        }
        addOrRebuild(e) {
          e.needsToBeRebuilt() ? (e.parent ||= this, e.rebuild()) : this.add(e);
        }
        addUndoableEditor(e) {
          const i = () => e._uiManager.rebuild(e), y = () => {
            e.remove();
          };
          this.addCommands({
            cmd: i,
            undo: y,
            mustExec: !1
          });
        }
        getNextId() {
          return this.#a.getId();
        }
        get #m() {
          return r.#p.get(this.#a.getMode());
        }
        #v(e) {
          const i = this.#m;
          return i ? new i.prototype.constructor(e) : null;
        }
        canCreateNewEmptyEditor() {
          return this.#m?.canCreateNewEmptyEditor();
        }
        pasteEditor(e, i) {
          this.#a.updateToolbar(e), this.#a.updateMode(e);
          const {
            offsetX: y,
            offsetY: T
          } = this.#b(), E = this.getNextId(), R = this.#v({
            parent: this,
            id: E,
            x: y,
            y: T,
            uiManager: this.#a,
            isCentered: !0,
            ...i
          });
          R && this.add(R);
        }
        deserialize(e) {
          return r.#p.get(e.annotationType ?? e.annotationEditorType)?.deserialize(e, this, this.#a) || null;
        }
        #y(e, i) {
          let y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          const T = this.getNextId(), E = this.#v({
            parent: this,
            id: T,
            x: e.offsetX,
            y: e.offsetY,
            uiManager: this.#a,
            isCentered: i,
            ...y
          });
          return E && this.add(E), E;
        }
        #b() {
          const {
            x: e,
            y: i,
            width: y,
            height: T
          } = this.div.getBoundingClientRect(), E = Math.max(0, e), R = Math.max(0, i), L = Math.min(window.innerWidth, e + y), M = Math.min(window.innerHeight, i + T), $ = (E + L) / 2 - e, j = (R + M) / 2 - i, [K, Q] = this.viewport.rotation % 180 === 0 ? [$, j] : [j, $];
          return {
            offsetX: K,
            offsetY: Q
          };
        }
        addNewEditor() {
          this.#y(this.#b(), !0);
        }
        setSelected(e) {
          this.#a.setSelected(e);
        }
        toggleSelected(e) {
          this.#a.toggleSelected(e);
        }
        isSelected(e) {
          return this.#a.isSelected(e);
        }
        unselect(e) {
          this.#a.unselect(e);
        }
        selectionStart(e) {
          this.#d?.div.addEventListener("pointerup", this.#r, {
            once: !0
          });
        }
        pointerUpAfterSelection(e) {
          const i = document.getSelection();
          if (i.rangeCount === 0)
            return;
          const y = i.getRangeAt(0);
          if (y.collapsed || !this.#d?.div.contains(y.commonAncestorContainer))
            return;
          const {
            x: T,
            y: E,
            width: R,
            height: L
          } = this.#d.div.getBoundingClientRect(), M = y.getClientRects();
          let $;
          switch (this.viewport.rotation) {
            case 90:
              $ = (K, Q, J, at) => ({
                x: (Q - E) / L,
                y: 1 - (K + J - T) / R,
                width: at / L,
                height: J / R
              });
              break;
            case 180:
              $ = (K, Q, J, at) => ({
                x: 1 - (K + J - T) / R,
                y: 1 - (Q + at - E) / L,
                width: J / R,
                height: at / L
              });
              break;
            case 270:
              $ = (K, Q, J, at) => ({
                x: 1 - (Q + at - E) / L,
                y: (K - T) / R,
                width: at / L,
                height: J / R
              });
              break;
            default:
              $ = (K, Q, J, at) => ({
                x: (K - T) / R,
                y: (Q - E) / L,
                width: J / R,
                height: at / L
              });
              break;
          }
          const j = [];
          for (const {
            x: K,
            y: Q,
            width: J,
            height: at
          } of M)
            J === 0 || at === 0 || j.push($(K, Q, J, at));
          j.length !== 0 && this.#y(e, !1, {
            boxes: j
          }), i.empty();
        }
        pointerup(e) {
          const {
            isMac: i
          } = s.FeatureTest.platform;
          if (!(e.button !== 0 || e.ctrlKey && i) && e.target === this.div && this.#c) {
            if (this.#c = !1, !this.#e) {
              this.#e = !0;
              return;
            }
            if (this.#a.getMode() === s.AnnotationEditorType.STAMP) {
              this.#a.unselectAll();
              return;
            }
            this.#y(e, !1);
          }
        }
        pointerdown(e) {
          if (this.#a.getMode() === s.AnnotationEditorType.HIGHLIGHT && this.enableTextSelection(), this.#c) {
            this.#c = !1;
            return;
          }
          const {
            isMac: i
          } = s.FeatureTest.platform;
          if (e.button !== 0 || e.ctrlKey && i || e.target !== this.div)
            return;
          this.#c = !0;
          const y = this.#a.getActive();
          this.#e = !y || y.isEmpty();
        }
        findNewParent(e, i, y) {
          const T = this.#a.findParent(i, y);
          return T === null || T === this ? !1 : (T.changeParent(e), !0);
        }
        destroy() {
          this.#a.getActive()?.parent === this && (this.#a.commitOrRemove(), this.#a.setActiveEditor(null)), this.#o && (clearTimeout(this.#o), this.#o = null);
          for (const e of this.#h.values())
            this.#t?.removePointerInTextLayer(e.contentDiv), e.setParent(null), e.isAttachedToDOM = !1, e.div.remove();
          this.div = null, this.#h.clear(), this.#a.removeLayer(this);
        }
        #A() {
          this.#f = !0;
          for (const e of this.#h.values())
            e.isEmpty() && e.remove();
          this.#f = !1;
        }
        render(e) {
          let {
            viewport: i
          } = e;
          this.viewport = i, (0, o.setLayerDimensions)(this.div, i);
          for (const y of this.#a.getEditors(this.pageIndex))
            this.add(y);
          this.updateMode();
        }
        update(e) {
          let {
            viewport: i
          } = e;
          this.#a.commitOrRemove();
          const y = this.viewport.rotation, T = i.rotation;
          if (this.viewport = i, (0, o.setLayerDimensions)(this.div, {
            rotation: T
          }), y !== T)
            for (const E of this.#h.values())
              E.rotate(T);
          this.updateMode();
        }
        get pageDimensions() {
          const {
            pageWidth: e,
            pageHeight: i
          } = this.viewport.rawDims;
          return [e, i];
        }
      }
    })
  ),
  /***/
  5097: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        ColorPicker: () => (
          /* binding */
          A
        )
        /* harmony export */
      });
      var s = t(3266), g = t(4812), u = t(473);
      class A {
        #t = this.#u.bind(this);
        #e = null;
        #n = null;
        #s;
        #r = null;
        #i = !1;
        #o = !1;
        #l;
        #h = null;
        static get _keyboardManager() {
          return (0, s.shadow)(this, "_keyboardManager", new g.KeyboardManager([[["Escape", "mac+Escape"], A.prototype._hideDropdownFromKeyboard], [[" ", "mac+ "], A.prototype._colorSelectFromKeyboard], [["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"], A.prototype._moveToNext], [["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"], A.prototype._moveToPrevious], [["Home", "mac+Home"], A.prototype._moveToBeginning], [["End", "mac+End"], A.prototype._moveToEnd]]));
        }
        constructor(x) {
          let {
            editor: p = null,
            uiManager: m = null
          } = x;
          this.#o = !p, this.#h = p?._uiManager || m, this.#l = this.#h._eventBus, this.#s = p?.color || this.#h?.highlightColors.values().next().value || "#FFFF98";
        }
        renderButton() {
          const x = this.#e = document.createElement("button");
          x.className = "colorPicker", x.tabIndex = "0", x.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"), x.setAttribute("aria-haspopup", !0), x.addEventListener("click", this.#d.bind(this));
          const p = this.#n = document.createElement("span");
          return p.className = "swatch", p.style.backgroundColor = this.#s, x.append(p), x;
        }
        renderMainDropdown() {
          const x = this.#r = this.#c(s.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR);
          return x.setAttribute("aria-orientation", "horizontal"), x.setAttribute("aria-labelledby", "highlightColorPickerLabel"), x;
        }
        #c(x) {
          const p = document.createElement("div");
          p.addEventListener("contextmenu", u.noContextMenu), p.className = "dropdown", p.role = "listbox", p.setAttribute("aria-multiselectable", !1), p.setAttribute("aria-orientation", "vertical"), p.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown");
          for (const [m, o] of this.#h.highlightColors) {
            const l = document.createElement("button");
            l.tabIndex = "0", l.role = "option", l.setAttribute("data-color", o), l.title = m, l.setAttribute("data-l10n-id", `pdfjs-editor-colorpicker-${m}`);
            const c = document.createElement("span");
            l.append(c), c.className = "swatch", c.style.backgroundColor = o, l.setAttribute("aria-selected", o === this.#s), l.addEventListener("click", this.#f.bind(this, x, o)), p.append(l);
          }
          return p.addEventListener("keydown", this.#t), p;
        }
        #f(x, p, m) {
          m.stopPropagation(), this.#l.dispatch("switchannotationeditorparams", {
            source: this,
            type: x,
            value: p
          });
        }
        _colorSelectFromKeyboard(x) {
          const p = x.target.getAttribute("data-color");
          p && this.#f(p, x);
        }
        _moveToNext(x) {
          if (x.target === this.#e) {
            this.#r.firstChild?.focus();
            return;
          }
          x.target.nextSibling?.focus();
        }
        _moveToPrevious(x) {
          x.target.previousSibling?.focus();
        }
        _moveToBeginning() {
          this.#r.firstChild?.focus();
        }
        _moveToEnd() {
          this.#r.lastChild?.focus();
        }
        #u(x) {
          A._keyboardManager.exec(this, x);
        }
        #d(x) {
          if (this.#r && !this.#r.classList.contains("hidden")) {
            this.hideDropdown();
            return;
          }
          if (this.#e.addEventListener("keydown", this.#t), this.#i = x.detail === 0, this.#r) {
            this.#r.classList.remove("hidden");
            return;
          }
          const p = this.#r = this.#c(s.AnnotationEditorParamsType.HIGHLIGHT_COLOR);
          this.#e.append(p);
        }
        hideDropdown() {
          this.#r?.classList.add("hidden");
        }
        _hideDropdownFromKeyboard() {
          this.#o || !this.#r || this.#r.classList.contains("hidden") || (this.hideDropdown(), this.#e.removeEventListener("keydown", this.#t), this.#e.focus({
            preventScroll: !0,
            focusVisible: this.#i
          }));
        }
        updateColor(x) {
          if (this.#n && (this.#n.style.backgroundColor = x), !this.#r)
            return;
          const p = this.#h.highlightColors.values();
          for (const m of this.#r.children)
            m.setAttribute("aria-selected", p.next().value === x);
        }
        destroy() {
          this.#e?.remove(), this.#e = null, this.#n = null, this.#r?.remove(), this.#r = null;
        }
      }
    })
  ),
  /***/
  9115: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        AnnotationEditor: () => (
          /* binding */
          x
        )
      }), t(3352);
      var s = t(4812), g = t(3266), u = t(473);
      class A {
        #t = "";
        #e = !1;
        #n = null;
        #s = null;
        #r = null;
        #i = !1;
        #o = null;
        static _l10nPromise = null;
        constructor(o) {
          this.#o = o;
        }
        static initialize(o) {
          A._l10nPromise ||= o;
        }
        async render() {
          const o = this.#n = document.createElement("button");
          o.className = "altText";
          const l = await A._l10nPromise.get("pdfjs-editor-alt-text-button-label");
          o.textContent = l, o.setAttribute("aria-label", l), o.tabIndex = "0", o.addEventListener("contextmenu", u.noContextMenu), o.addEventListener("pointerdown", (r) => r.stopPropagation());
          const c = (r) => {
            r.preventDefault(), this.#o._uiManager.editAltText(this.#o);
          };
          return o.addEventListener("click", c, {
            capture: !0
          }), o.addEventListener("keydown", (r) => {
            r.target === o && r.key === "Enter" && (this.#i = !0, c(r));
          }), await this.#l(), o;
        }
        finish() {
          this.#n && (this.#n.focus({
            focusVisible: this.#i
          }), this.#i = !1);
        }
        get data() {
          return {
            altText: this.#t,
            decorative: this.#e
          };
        }
        set data(o) {
          let {
            altText: l,
            decorative: c
          } = o;
          this.#t === l && this.#e === c || (this.#t = l, this.#e = c, this.#l());
        }
        toggle() {
          let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          this.#n && (!o && this.#r && (clearTimeout(this.#r), this.#r = null), this.#n.disabled = !o);
        }
        destroy() {
          this.#n?.remove(), this.#n = null, this.#s = null;
        }
        async #l() {
          const o = this.#n;
          if (!o)
            return;
          if (!this.#t && !this.#e) {
            o.classList.remove("done"), this.#s?.remove();
            return;
          }
          o.classList.add("done"), A._l10nPromise.get("pdfjs-editor-alt-text-edit-button-label").then((r) => {
            o.setAttribute("aria-label", r);
          });
          let l = this.#s;
          if (!l) {
            this.#s = l = document.createElement("span"), l.className = "tooltip", l.setAttribute("role", "tooltip");
            const r = l.id = `alt-text-tooltip-${this.#o.id}`;
            o.setAttribute("aria-describedby", r);
            const f = 100;
            o.addEventListener("mouseenter", () => {
              this.#r = setTimeout(() => {
                this.#r = null, this.#s.classList.add("show"), this.#o._uiManager._eventBus.dispatch("reporttelemetry", {
                  source: this,
                  details: {
                    type: "editing",
                    subtype: this.#o.editorType,
                    data: {
                      action: "alt_text_tooltip"
                    }
                  }
                });
              }, f);
            }), o.addEventListener("mouseleave", () => {
              this.#r && (clearTimeout(this.#r), this.#r = null), this.#s?.classList.remove("show");
            });
          }
          l.innerText = this.#e ? await A._l10nPromise.get("pdfjs-editor-alt-text-decorative-tooltip") : this.#t, l.parentNode || o.append(l), this.#o.getImageForAltText()?.setAttribute("aria-describedby", l.id);
        }
      }
      class b {
        #t = null;
        #e = null;
        #n;
        #s = null;
        constructor(o) {
          this.#n = o;
        }
        render() {
          const o = this.#t = document.createElement("div");
          o.className = "editToolbar", o.addEventListener("contextmenu", u.noContextMenu), o.addEventListener("pointerdown", b.#r);
          const l = this.#s = document.createElement("div");
          l.className = "buttons", o.append(l);
          const c = this.#n.toolbarPosition;
          if (c) {
            const {
              style: r
            } = o, f = this.#n._uiManager.direction === "ltr" ? 1 - c[0] : c[0];
            r.insetInlineEnd = `${100 * f}%`, r.top = `calc(${100 * c[1]}% + var(--editor-toolbar-vert-offset))`;
          }
          return this.#h(), o;
        }
        static #r(o) {
          o.stopPropagation();
        }
        #i(o) {
          this.#n._focusEventsAllowed = !1, o.preventDefault(), o.stopPropagation();
        }
        #o(o) {
          this.#n._focusEventsAllowed = !0, o.preventDefault(), o.stopPropagation();
        }
        #l(o) {
          o.addEventListener("focusin", this.#i.bind(this), {
            capture: !0
          }), o.addEventListener("focusout", this.#o.bind(this), {
            capture: !0
          }), o.addEventListener("contextmenu", u.noContextMenu);
        }
        hide() {
          this.#t.classList.add("hidden"), this.#e?.hideDropdown();
        }
        show() {
          this.#t.classList.remove("hidden");
        }
        #h() {
          const o = document.createElement("button");
          o.className = "delete", o.tabIndex = 0, o.setAttribute("data-l10n-id", `pdfjs-editor-remove-${this.#n.editorType}-button`), this.#l(o), o.addEventListener("click", (l) => {
            this.#n._uiManager.delete();
          }), this.#s.append(o);
        }
        get #c() {
          const o = document.createElement("div");
          return o.className = "divider", o;
        }
        addAltTextButton(o) {
          this.#l(o), this.#s.prepend(o, this.#c);
        }
        addColorPicker(o) {
          this.#e = o;
          const l = o.renderButton();
          this.#l(l), this.#s.prepend(l, this.#c);
        }
        remove() {
          this.#t.remove(), this.#e?.destroy(), this.#e = null;
        }
      }
      class x {
        #t = null;
        #e = null;
        #n = !1;
        #s = null;
        #r = null;
        #i = this.focusin.bind(this);
        #o = this.focusout.bind(this);
        #l = null;
        #h = "";
        #c = !1;
        #f = !1;
        #u = !1;
        #d = !1;
        #a = null;
        _initialOptions = /* @__PURE__ */ Object.create(null);
        _uiManager = null;
        _focusEventsAllowed = !0;
        _l10nPromise = null;
        #p = !1;
        #m = x._zIndex++;
        static _borderLineWidth = -1;
        static _colorManager = new s.ColorManager();
        static _zIndex = 1;
        static get _resizerKeyboardManager() {
          const o = x.prototype._resizeWithKeyboard, l = s.AnnotationEditorUIManager.TRANSLATE_SMALL, c = s.AnnotationEditorUIManager.TRANSLATE_BIG;
          return (0, g.shadow)(this, "_resizerKeyboardManager", new s.KeyboardManager([[["ArrowLeft", "mac+ArrowLeft"], o, {
            args: [-l, 0]
          }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], o, {
            args: [-c, 0]
          }], [["ArrowRight", "mac+ArrowRight"], o, {
            args: [l, 0]
          }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], o, {
            args: [c, 0]
          }], [["ArrowUp", "mac+ArrowUp"], o, {
            args: [0, -l]
          }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], o, {
            args: [0, -c]
          }], [["ArrowDown", "mac+ArrowDown"], o, {
            args: [0, l]
          }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], o, {
            args: [0, c]
          }], [["Escape", "mac+Escape"], x.prototype._stopResizingWithKeyboard]]));
        }
        constructor(o) {
          this.constructor === x && (0, g.unreachable)("Cannot initialize AnnotationEditor."), this.parent = o.parent, this.id = o.id, this.width = this.height = null, this.pageIndex = o.parent.pageIndex, this.name = o.name, this.div = null, this._uiManager = o.uiManager, this.annotationElementId = null, this._willKeepAspectRatio = !1, this._initialOptions.isCentered = o.isCentered, this._structTreeParentId = null;
          const {
            rotation: l,
            rawDims: {
              pageWidth: c,
              pageHeight: r,
              pageX: f,
              pageY: e
            }
          } = this.parent.viewport;
          this.rotation = l, this.pageRotation = (360 + l - this._uiManager.viewParameters.rotation) % 360, this.pageDimensions = [c, r], this.pageTranslation = [f, e];
          const [i, y] = this.parentDimensions;
          this.x = o.x / i, this.y = o.y / y, this.isAttachedToDOM = !1, this.deleted = !1;
        }
        get editorType() {
          return Object.getPrototypeOf(this).constructor._type;
        }
        static get _defaultLineColor() {
          return (0, g.shadow)(this, "_defaultLineColor", this._colorManager.getHexCode("CanvasText"));
        }
        static deleteAnnotationElement(o) {
          const l = new p({
            id: o.parent.getNextId(),
            parent: o.parent,
            uiManager: o._uiManager
          });
          l.annotationElementId = o.annotationElementId, l.deleted = !0, l._uiManager.addToAnnotationStorage(l);
        }
        static initialize(o) {
          let l = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          if (x._l10nPromise ||= new Map(["pdfjs-editor-alt-text-button-label", "pdfjs-editor-alt-text-edit-button-label", "pdfjs-editor-alt-text-decorative-tooltip", "pdfjs-editor-resizer-label-topLeft", "pdfjs-editor-resizer-label-topMiddle", "pdfjs-editor-resizer-label-topRight", "pdfjs-editor-resizer-label-middleRight", "pdfjs-editor-resizer-label-bottomRight", "pdfjs-editor-resizer-label-bottomMiddle", "pdfjs-editor-resizer-label-bottomLeft", "pdfjs-editor-resizer-label-middleLeft"].map((r) => [r, o.get(r.replaceAll(/([A-Z])/g, (f) => `-${f.toLowerCase()}`))])), l?.strings)
            for (const r of l.strings)
              x._l10nPromise.set(r, o.get(r));
          if (x._borderLineWidth !== -1)
            return;
          const c = getComputedStyle(document.documentElement);
          x._borderLineWidth = parseFloat(c.getPropertyValue("--outline-width")) || 0;
        }
        static updateDefaultParams(o, l) {
        }
        static get defaultPropertiesToUpdate() {
          return [];
        }
        static isHandlingMimeForPasting(o) {
          return !1;
        }
        static paste(o, l) {
          (0, g.unreachable)("Not implemented");
        }
        get propertiesToUpdate() {
          return [];
        }
        get _isDraggable() {
          return this.#p;
        }
        set _isDraggable(o) {
          this.#p = o, this.div?.classList.toggle("draggable", o);
        }
        get isEnterHandled() {
          return !0;
        }
        center() {
          const [o, l] = this.pageDimensions;
          switch (this.parentRotation) {
            case 90:
              this.x -= this.height * l / (o * 2), this.y += this.width * o / (l * 2);
              break;
            case 180:
              this.x += this.width / 2, this.y += this.height / 2;
              break;
            case 270:
              this.x += this.height * l / (o * 2), this.y -= this.width * o / (l * 2);
              break;
            default:
              this.x -= this.width / 2, this.y -= this.height / 2;
              break;
          }
          this.fixAndSetPosition();
        }
        addCommands(o) {
          this._uiManager.addCommands(o);
        }
        get currentLayer() {
          return this._uiManager.currentLayer;
        }
        setInBackground() {
          this.div.style.zIndex = 0;
        }
        setInForeground() {
          this.div.style.zIndex = this.#m;
        }
        setParent(o) {
          o !== null ? (this.pageIndex = o.pageIndex, this.pageDimensions = o.pageDimensions) : this.#S(), this.parent = o;
        }
        focusin(o) {
          this._focusEventsAllowed && (this.#c ? this.#c = !1 : this.parent.setSelected(this));
        }
        focusout(o) {
          !this._focusEventsAllowed || !this.isAttachedToDOM || o.relatedTarget?.closest(`#${this.id}`) || (o.preventDefault(), this.parent?.isMultipleSelection || this.commitOrRemove());
        }
        commitOrRemove() {
          this.isEmpty() ? this.remove() : this.commit();
        }
        commit() {
          this.addToAnnotationStorage();
        }
        addToAnnotationStorage() {
          this._uiManager.addToAnnotationStorage(this);
        }
        setAt(o, l, c, r) {
          const [f, e] = this.parentDimensions;
          [c, r] = this.screenToPageTranslation(c, r), this.x = (o + c) / f, this.y = (l + r) / e, this.fixAndSetPosition();
        }
        #v(o, l, c) {
          let [r, f] = o;
          [l, c] = this.screenToPageTranslation(l, c), this.x += l / r, this.y += c / f, this.fixAndSetPosition();
        }
        translate(o, l) {
          this.#v(this.parentDimensions, o, l);
        }
        translateInPage(o, l) {
          this.#v(this.pageDimensions, o, l), this.div.scrollIntoView({
            block: "nearest"
          });
        }
        drag(o, l) {
          const [c, r] = this.parentDimensions;
          if (this.x += o / c, this.y += l / r, this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1)) {
            const {
              x: T,
              y: E
            } = this.div.getBoundingClientRect();
            this.parent.findNewParent(this, T, E) && (this.x -= Math.floor(this.x), this.y -= Math.floor(this.y));
          }
          let {
            x: f,
            y: e
          } = this;
          const [i, y] = this.#y();
          f += i, e += y, this.div.style.left = `${(100 * f).toFixed(2)}%`, this.div.style.top = `${(100 * e).toFixed(2)}%`, this.div.scrollIntoView({
            block: "nearest"
          });
        }
        #y() {
          const [o, l] = this.parentDimensions, {
            _borderLineWidth: c
          } = x, r = c / o, f = c / l;
          switch (this.rotation) {
            case 90:
              return [-r, f];
            case 180:
              return [r, f];
            case 270:
              return [r, -f];
            default:
              return [-r, -f];
          }
        }
        fixAndSetPosition() {
          let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.rotation;
          const [l, c] = this.pageDimensions;
          let {
            x: r,
            y: f,
            width: e,
            height: i
          } = this;
          switch (e *= l, i *= c, r *= l, f *= c, o) {
            case 0:
              r = Math.max(0, Math.min(l - e, r)), f = Math.max(0, Math.min(c - i, f));
              break;
            case 90:
              r = Math.max(0, Math.min(l - i, r)), f = Math.min(c, Math.max(e, f));
              break;
            case 180:
              r = Math.min(l, Math.max(e, r)), f = Math.min(c, Math.max(i, f));
              break;
            case 270:
              r = Math.min(l, Math.max(i, r)), f = Math.max(0, Math.min(c - e, f));
              break;
          }
          this.x = r /= l, this.y = f /= c;
          const [y, T] = this.#y();
          r += y, f += T;
          const {
            style: E
          } = this.div;
          E.left = `${(100 * r).toFixed(2)}%`, E.top = `${(100 * f).toFixed(2)}%`, this.moveInDOM();
        }
        static #b(o, l, c) {
          switch (c) {
            case 90:
              return [l, -o];
            case 180:
              return [-o, -l];
            case 270:
              return [-l, o];
            default:
              return [o, l];
          }
        }
        screenToPageTranslation(o, l) {
          return x.#b(o, l, this.parentRotation);
        }
        pageTranslationToScreen(o, l) {
          return x.#b(o, l, 360 - this.parentRotation);
        }
        #A(o) {
          switch (o) {
            case 90: {
              const [l, c] = this.pageDimensions;
              return [0, -l / c, c / l, 0];
            }
            case 180:
              return [-1, 0, 0, -1];
            case 270: {
              const [l, c] = this.pageDimensions;
              return [0, l / c, -c / l, 0];
            }
            default:
              return [1, 0, 0, 1];
          }
        }
        get parentScale() {
          return this._uiManager.viewParameters.realScale;
        }
        get parentRotation() {
          return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
        }
        get parentDimensions() {
          const {
            parentScale: o,
            pageDimensions: [l, c]
          } = this, r = l * o, f = c * o;
          return g.FeatureTest.isCSSRoundSupported ? [Math.round(r), Math.round(f)] : [r, f];
        }
        setDims(o, l) {
          const [c, r] = this.parentDimensions;
          this.div.style.width = `${(100 * o / c).toFixed(2)}%`, this.#n || (this.div.style.height = `${(100 * l / r).toFixed(2)}%`);
        }
        fixDims() {
          const {
            style: o
          } = this.div, {
            height: l,
            width: c
          } = o, r = c.endsWith("%"), f = !this.#n && l.endsWith("%");
          if (r && f)
            return;
          const [e, i] = this.parentDimensions;
          r || (o.width = `${(100 * parseFloat(c) / e).toFixed(2)}%`), !this.#n && !f && (o.height = `${(100 * parseFloat(l) / i).toFixed(2)}%`);
        }
        getInitialTranslation() {
          return [0, 0];
        }
        #g() {
          if (this.#s)
            return;
          this.#s = document.createElement("div"), this.#s.classList.add("resizers");
          const o = this._willKeepAspectRatio ? ["topLeft", "topRight", "bottomRight", "bottomLeft"] : ["topLeft", "topMiddle", "topRight", "middleRight", "bottomRight", "bottomMiddle", "bottomLeft", "middleLeft"];
          for (const l of o) {
            const c = document.createElement("div");
            this.#s.append(c), c.classList.add("resizer", l), c.setAttribute("data-resizer-name", l), c.addEventListener("pointerdown", this.#T.bind(this, l)), c.addEventListener("contextmenu", u.noContextMenu), c.tabIndex = -1;
          }
          this.div.prepend(this.#s);
        }
        #T(o, l) {
          l.preventDefault();
          const {
            isMac: c
          } = g.FeatureTest.platform;
          if (l.button !== 0 || l.ctrlKey && c)
            return;
          this.#e?.toggle(!1);
          const r = this.#L.bind(this, o), f = this._isDraggable;
          this._isDraggable = !1;
          const e = {
            passive: !0,
            capture: !0
          };
          this.parent.togglePointerEvents(!1), window.addEventListener("pointermove", r, e);
          const i = this.x, y = this.y, T = this.width, E = this.height, R = this.parent.div.style.cursor, L = this.div.style.cursor;
          this.div.style.cursor = this.parent.div.style.cursor = window.getComputedStyle(l.target).cursor;
          const M = () => {
            this.parent.togglePointerEvents(!0), this.#e?.toggle(!0), this._isDraggable = f, window.removeEventListener("pointerup", M), window.removeEventListener("blur", M), window.removeEventListener("pointermove", r, e), this.parent.div.style.cursor = R, this.div.style.cursor = L, this.#M(i, y, T, E);
          };
          window.addEventListener("pointerup", M), window.addEventListener("blur", M);
        }
        #M(o, l, c, r) {
          const f = this.x, e = this.y, i = this.width, y = this.height;
          f === o && e === l && i === c && y === r || this.addCommands({
            cmd: () => {
              this.width = i, this.height = y, this.x = f, this.y = e;
              const [T, E] = this.parentDimensions;
              this.setDims(T * i, E * y), this.fixAndSetPosition();
            },
            undo: () => {
              this.width = c, this.height = r, this.x = o, this.y = l;
              const [T, E] = this.parentDimensions;
              this.setDims(T * c, E * r), this.fixAndSetPosition();
            },
            mustExec: !0
          });
        }
        #L(o, l) {
          const [c, r] = this.parentDimensions, f = this.x, e = this.y, i = this.width, y = this.height, T = x.MIN_SIZE / c, E = x.MIN_SIZE / r, R = (v) => Math.round(v * 1e4) / 1e4, L = this.#A(this.rotation), M = (v, h) => [L[0] * v + L[2] * h, L[1] * v + L[3] * h], $ = this.#A(360 - this.rotation), j = (v, h) => [$[0] * v + $[2] * h, $[1] * v + $[3] * h];
          let K, Q, J = !1, at = !1;
          switch (o) {
            case "topLeft":
              J = !0, K = (v, h) => [0, 0], Q = (v, h) => [v, h];
              break;
            case "topMiddle":
              K = (v, h) => [v / 2, 0], Q = (v, h) => [v / 2, h];
              break;
            case "topRight":
              J = !0, K = (v, h) => [v, 0], Q = (v, h) => [0, h];
              break;
            case "middleRight":
              at = !0, K = (v, h) => [v, h / 2], Q = (v, h) => [0, h / 2];
              break;
            case "bottomRight":
              J = !0, K = (v, h) => [v, h], Q = (v, h) => [0, 0];
              break;
            case "bottomMiddle":
              K = (v, h) => [v / 2, h], Q = (v, h) => [v / 2, 0];
              break;
            case "bottomLeft":
              J = !0, K = (v, h) => [0, h], Q = (v, h) => [v, 0];
              break;
            case "middleLeft":
              at = !0, K = (v, h) => [0, h / 2], Q = (v, h) => [v, h / 2];
              break;
          }
          const ut = K(i, y), ht = Q(i, y);
          let _ = M(...ht);
          const Z = R(f + _[0]), z = R(e + _[1]);
          let V = 1, nt = 1, [ot, lt] = this.screenToPageTranslation(l.movementX, l.movementY);
          if ([ot, lt] = j(ot / c, lt / r), J) {
            const v = Math.hypot(i, y);
            V = nt = Math.max(Math.min(Math.hypot(ht[0] - ut[0] - ot, ht[1] - ut[1] - lt) / v, 1 / i, 1 / y), T / i, E / y);
          } else at ? V = Math.max(T, Math.min(1, Math.abs(ht[0] - ut[0] - ot))) / i : nt = Math.max(E, Math.min(1, Math.abs(ht[1] - ut[1] - lt))) / y;
          const vt = R(i * V), Tt = R(y * nt);
          _ = M(...Q(vt, Tt));
          const St = Z - _[0], tt = z - _[1];
          this.width = vt, this.height = Tt, this.x = St, this.y = tt, this.setDims(c * vt, r * Tt), this.fixAndSetPosition();
        }
        altTextFinish() {
          this.#e?.finish();
        }
        async addEditToolbar() {
          return this.#l || this.#u ? this.#l : (this.#l = new b(this), this.div.append(this.#l.render()), this.#e && this.#l.addAltTextButton(await this.#e.render()), this.#l);
        }
        removeEditToolbar() {
          this.#l && (this.#l.remove(), this.#l = null, this.#e?.destroy());
        }
        getClientDimensions() {
          return this.div.getBoundingClientRect();
        }
        async addAltTextButton() {
          this.#e || (A.initialize(x._l10nPromise), this.#e = new A(this), await this.addEditToolbar());
        }
        get altTextData() {
          return this.#e?.data;
        }
        set altTextData(o) {
          this.#e && (this.#e.data = o);
        }
        render() {
          this.div = document.createElement("div"), this.div.setAttribute("data-editor-rotation", (360 - this.rotation) % 360), this.div.className = this.name, this.div.setAttribute("id", this.id), this.div.setAttribute("tabIndex", 0), this.setInForeground(), this.div.addEventListener("focusin", this.#i), this.div.addEventListener("focusout", this.#o);
          const [o, l] = this.parentDimensions;
          this.parentRotation % 180 !== 0 && (this.div.style.maxWidth = `${(100 * l / o).toFixed(2)}%`, this.div.style.maxHeight = `${(100 * o / l).toFixed(2)}%`);
          const [c, r] = this.getInitialTranslation();
          return this.translate(c, r), (0, s.bindEvents)(this, this.div, ["pointerdown"]), this.div;
        }
        pointerdown(o) {
          const {
            isMac: l
          } = g.FeatureTest.platform;
          if (o.button !== 0 || o.ctrlKey && l) {
            o.preventDefault();
            return;
          }
          if (this.#c = !0, this._isDraggable) {
            this.#k(o);
            return;
          }
          this.#D(o);
        }
        #D(o) {
          const {
            isMac: l
          } = g.FeatureTest.platform;
          o.ctrlKey && !l || o.shiftKey || o.metaKey && l ? this.parent.toggleSelected(this) : this.parent.setSelected(this);
        }
        #k(o) {
          const l = this._uiManager.isSelected(this);
          this._uiManager.setUpDragSession();
          let c, r;
          l && (c = {
            passive: !0,
            capture: !0
          }, r = (e) => {
            const [i, y] = this.screenToPageTranslation(e.movementX, e.movementY);
            this._uiManager.dragSelectedEditors(i, y);
          }, window.addEventListener("pointermove", r, c));
          const f = () => {
            window.removeEventListener("pointerup", f), window.removeEventListener("blur", f), l && window.removeEventListener("pointermove", r, c), this.#c = !1, this._uiManager.endDragSession() || this.#D(o);
          };
          window.addEventListener("pointerup", f), window.addEventListener("blur", f);
        }
        moveInDOM() {
          this.#a && clearTimeout(this.#a), this.#a = setTimeout(() => {
            this.#a = null, this.parent?.moveEditorInDOM(this);
          }, 0);
        }
        _setParentAndPosition(o, l, c) {
          o.changeParent(this), this.x = l, this.y = c, this.fixAndSetPosition();
        }
        getRect(o, l) {
          let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.rotation;
          const r = this.parentScale, [f, e] = this.pageDimensions, [i, y] = this.pageTranslation, T = o / r, E = l / r, R = this.x * f, L = this.y * e, M = this.width * f, $ = this.height * e;
          switch (c) {
            case 0:
              return [R + T + i, e - L - E - $ + y, R + T + M + i, e - L - E + y];
            case 90:
              return [R + E + i, e - L + T + y, R + E + $ + i, e - L + T + M + y];
            case 180:
              return [R - T - M + i, e - L + E + y, R - T + i, e - L + E + $ + y];
            case 270:
              return [R - E - $ + i, e - L - T - M + y, R - E + i, e - L - T + y];
            default:
              throw new Error("Invalid rotation");
          }
        }
        getRectInCurrentCoords(o, l) {
          const [c, r, f, e] = o, i = f - c, y = e - r;
          switch (this.rotation) {
            case 0:
              return [c, l - e, i, y];
            case 90:
              return [c, l - r, y, i];
            case 180:
              return [f, l - r, i, y];
            case 270:
              return [f, l - e, y, i];
            default:
              throw new Error("Invalid rotation");
          }
        }
        onceAdded() {
        }
        isEmpty() {
          return !1;
        }
        enableEditMode() {
          this.#u = !0;
        }
        disableEditMode() {
          this.#u = !1;
        }
        isInEditMode() {
          return this.#u;
        }
        shouldGetKeyboardEvents() {
          return this.#d;
        }
        needsToBeRebuilt() {
          return this.div && !this.isAttachedToDOM;
        }
        rebuild() {
          this.div?.addEventListener("focusin", this.#i), this.div?.addEventListener("focusout", this.#o);
        }
        rotate(o) {
        }
        serialize() {
          (0, g.unreachable)("An editor must be serializable");
        }
        static deserialize(o, l, c) {
          const r = new this.prototype.constructor({
            parent: l,
            id: l.getNextId(),
            uiManager: c
          });
          r.rotation = o.rotation;
          const [f, e] = r.pageDimensions, [i, y, T, E] = r.getRectInCurrentCoords(o.rect, e);
          return r.x = i / f, r.y = y / e, r.width = T / f, r.height = E / e, r;
        }
        remove() {
          this.div.removeEventListener("focusin", this.#i), this.div.removeEventListener("focusout", this.#o), this.isEmpty() || this.commit(), this.parent ? this.parent.remove(this) : this._uiManager.removeEditor(this), this.#a && (clearTimeout(this.#a), this.#a = null), this.#S(), this.removeEditToolbar();
        }
        get isResizable() {
          return !1;
        }
        makeResizable() {
          this.isResizable && (this.#g(), this.#s.classList.remove("hidden"), (0, s.bindEvents)(this, this.div, ["keydown"]));
        }
        get toolbarPosition() {
          return null;
        }
        keydown(o) {
          if (!this.isResizable || o.target !== this.div || o.key !== "Enter")
            return;
          this._uiManager.setSelected(this), this.#r = {
            savedX: this.x,
            savedY: this.y,
            savedWidth: this.width,
            savedHeight: this.height
          };
          const l = this.#s.children;
          if (!this.#t) {
            this.#t = Array.from(l);
            const e = this.#N.bind(this), i = this.#x.bind(this);
            for (const y of this.#t) {
              const T = y.getAttribute("data-resizer-name");
              y.setAttribute("role", "spinbutton"), y.addEventListener("keydown", e), y.addEventListener("blur", i), y.addEventListener("focus", this.#O.bind(this, T)), x._l10nPromise.get(`pdfjs-editor-resizer-label-${T}`).then((E) => y.setAttribute("aria-label", E));
            }
          }
          const c = this.#t[0];
          let r = 0;
          for (const e of l) {
            if (e === c)
              break;
            r++;
          }
          const f = (360 - this.rotation + this.parentRotation) % 360 / 90 * (this.#t.length / 4);
          if (f !== r) {
            if (f < r)
              for (let i = 0; i < r - f; i++)
                this.#s.append(this.#s.firstChild);
            else if (f > r)
              for (let i = 0; i < f - r; i++)
                this.#s.firstChild.before(this.#s.lastChild);
            let e = 0;
            for (const i of l) {
              const T = this.#t[e++].getAttribute("data-resizer-name");
              x._l10nPromise.get(`pdfjs-editor-resizer-label-${T}`).then((E) => i.setAttribute("aria-label", E));
            }
          }
          this.#C(0), this.#d = !0, this.#s.firstChild.focus({
            focusVisible: !0
          }), o.preventDefault(), o.stopImmediatePropagation();
        }
        #N(o) {
          x._resizerKeyboardManager.exec(this, o);
        }
        #x(o) {
          this.#d && o.relatedTarget?.parentNode !== this.#s && this.#S();
        }
        #O(o) {
          this.#h = this.#d ? o : "";
        }
        #C(o) {
          if (this.#t)
            for (const l of this.#t)
              l.tabIndex = o;
        }
        _resizeWithKeyboard(o, l) {
          this.#d && this.#L(this.#h, {
            movementX: o,
            movementY: l
          });
        }
        #S() {
          if (this.#d = !1, this.#C(-1), this.#r) {
            const {
              savedX: o,
              savedY: l,
              savedWidth: c,
              savedHeight: r
            } = this.#r;
            this.#M(o, l, c, r), this.#r = null;
          }
        }
        _stopResizingWithKeyboard() {
          this.#S(), this.div.focus();
        }
        select() {
          if (this.makeResizable(), this.div?.classList.add("selectedEditor"), !this.#l) {
            this.addEditToolbar().then(() => {
              this.div?.classList.contains("selectedEditor") && this.#l?.show();
            });
            return;
          }
          this.#l?.show();
        }
        unselect() {
          this.#s?.classList.add("hidden"), this.div?.classList.remove("selectedEditor"), this.div?.contains(document.activeElement) && this._uiManager.currentLayer.div.focus(), this.#l?.hide();
        }
        updateParams(o, l) {
        }
        disableEditing() {
        }
        enableEditing() {
        }
        enterInEditMode() {
        }
        getImageForAltText() {
          return null;
        }
        get contentDiv() {
          return this.div;
        }
        get isEditing() {
          return this.#f;
        }
        set isEditing(o) {
          this.#f = o, this.parent && (o ? (this.parent.setSelected(this), this.parent.setActiveEditor(this)) : this.parent.setActiveEditor(null));
        }
        setAspectRatio(o, l) {
          this.#n = !0;
          const c = o / l, {
            style: r
          } = this.div;
          r.aspectRatio = c, r.height = "auto";
        }
        static get MIN_SIZE() {
          return 16;
        }
        static canCreateNewEmptyEditor() {
          return !0;
        }
      }
      class p extends x {
        constructor(o) {
          super(o), this.annotationElementId = o.annotationElementId, this.deleted = !0;
        }
        serialize() {
          return {
            id: this.annotationElementId,
            deleted: !0,
            pageIndex: this.pageIndex
          };
        }
      }
    })
  ),
  /***/
  7405: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        Outliner: () => (
          /* binding */
          s
        )
        /* harmony export */
      }), t(4226), t(5561), t(8587), t(3247), t(3302), t(9490), t(5438), t(7914);
      class s {
        #t;
        #e = [];
        #n = [];
        constructor(u) {
          let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, x = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !0, p = 1 / 0, m = -1 / 0, o = 1 / 0, l = -1 / 0;
          const c = 10 ** -4;
          for (const {
            x: E,
            y: R,
            width: L,
            height: M
          } of u) {
            const $ = Math.floor((E - A) / c) * c, j = Math.ceil((E + L + A) / c) * c, K = Math.floor((R - A) / c) * c, Q = Math.ceil((R + M + A) / c) * c, J = [$, K, Q, !0], at = [j, K, Q, !1];
            this.#e.push(J, at), p = Math.min(p, $), m = Math.max(m, j), o = Math.min(o, K), l = Math.max(l, Q);
          }
          const r = m - p + 2 * b, f = l - o + 2 * b, e = p - b, i = o - b, y = this.#e.at(x ? -1 : -2), T = [y[0], y[2]];
          for (const E of this.#e) {
            const [R, L, M] = E;
            E[0] = (R - e) / r, E[1] = (L - i) / f, E[2] = (M - i) / f;
          }
          this.#t = {
            x: e,
            y: i,
            width: r,
            height: f,
            lastPoint: T
          };
        }
        getOutlines() {
          this.#e.sort((A, b) => A[0] - b[0] || A[1] - b[1] || A[2] - b[2]);
          const u = [];
          for (const A of this.#e)
            A[3] ? (u.push(...this.#l(A)), this.#i(A)) : (this.#o(A), u.push(...this.#l(A)));
          return this.#s(u);
        }
        #s(u) {
          const A = [], b = /* @__PURE__ */ new Set();
          for (const m of u) {
            const [o, l, c] = m;
            A.push([o, l, m], [o, c, m]);
          }
          A.sort((m, o) => m[1] - o[1] || m[0] - o[0]);
          for (let m = 0, o = A.length; m < o; m += 2) {
            const l = A[m][2], c = A[m + 1][2];
            l.push(c), c.push(l), b.add(l), b.add(c);
          }
          const x = [];
          let p;
          for (; b.size > 0; ) {
            const m = b.values().next().value;
            let [o, l, c, r, f] = m;
            b.delete(m);
            let e = o, i = l;
            for (p = [o, c], x.push(p); ; ) {
              let y;
              if (b.has(r))
                y = r;
              else if (b.has(f))
                y = f;
              else
                break;
              b.delete(y), [o, l, c, r, f] = y, e !== o && (p.push(e, i, o, i === l ? l : c), e = o), i = i === l ? c : l;
            }
            p.push(e, i);
          }
          return {
            outlines: x,
            box: this.#t
          };
        }
        #r(u) {
          const A = this.#n;
          let b = 0, x = A.length - 1;
          for (; b <= x; ) {
            const p = b + x >> 1, m = A[p][0];
            if (m === u)
              return p;
            m < u ? b = p + 1 : x = p - 1;
          }
          return x + 1;
        }
        #i(u) {
          let [, A, b] = u;
          const x = this.#r(A);
          this.#n.splice(x, 0, [A, b]);
        }
        #o(u) {
          let [, A, b] = u;
          const x = this.#r(A);
          for (let p = x; p < this.#n.length; p++) {
            const [m, o] = this.#n[p];
            if (m !== A)
              break;
            if (m === A && o === b) {
              this.#n.splice(p, 1);
              return;
            }
          }
          for (let p = x - 1; p >= 0; p--) {
            const [m, o] = this.#n[p];
            if (m !== A)
              break;
            if (m === A && o === b) {
              this.#n.splice(p, 1);
              return;
            }
          }
        }
        #l(u) {
          const [A, b, x] = u, p = [[A, b, x]], m = this.#r(x);
          for (let o = 0; o < m; o++) {
            const [l, c] = this.#n[o];
            for (let r = 0, f = p.length; r < f; r++) {
              const [, e, i] = p[r];
              if (!(c <= e || i <= l)) {
                if (e >= l) {
                  if (i > c)
                    p[r][1] = c;
                  else {
                    if (f === 1)
                      return [];
                    p.splice(r, 1), r--, f--;
                  }
                  continue;
                }
                p[r][2] = l, i > c && p.push([A, c, i]);
              }
            }
          }
          return p;
        }
      }
    })
  ),
  /***/
  4812: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        AnnotationEditorUIManager: () => (
          /* binding */
          l
        ),
        /* harmony export */
        ColorManager: () => (
          /* binding */
          o
        ),
        /* harmony export */
        KeyboardManager: () => (
          /* binding */
          m
        ),
        /* harmony export */
        bindEvents: () => (
          /* binding */
          u
        ),
        /* harmony export */
        opacityToHex: () => (
          /* binding */
          A
        )
        /* harmony export */
      }), t(8837), t(9803), t(8347), t(7995), t(62), t(4602), t(344), t(4305), t(7583), t(4226), t(5561), t(8587), t(3247), t(3302), t(9490), t(5438), t(7914), t(7121), t(385), t(7944), t(2808), t(8518);
      var s = t(3266), g = t(473);
      function u(c, r, f) {
        for (const e of f)
          r.addEventListener(e, c[e].bind(c));
      }
      function A(c) {
        return Math.round(Math.min(255, Math.max(1, 255 * c))).toString(16).padStart(2, "0");
      }
      class b {
        #t = 0;
        getId() {
          return `${s.AnnotationEditorPrefix}${this.#t++}`;
        }
      }
      class x {
        #t = (0, s.getUuid)();
        #e = 0;
        #n = null;
        static get _isSVGFittingCanvas() {
          const r = 'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>', e = new OffscreenCanvas(1, 3).getContext("2d"), i = new Image();
          i.src = r;
          const y = i.decode().then(() => (e.drawImage(i, 0, 0, 1, 1, 0, 0, 1, 3), new Uint32Array(e.getImageData(0, 0, 1, 1).data.buffer)[0] === 0));
          return (0, s.shadow)(this, "_isSVGFittingCanvas", y);
        }
        async #s(r, f) {
          this.#n ||= /* @__PURE__ */ new Map();
          let e = this.#n.get(r);
          if (e === null)
            return null;
          if (e?.bitmap)
            return e.refCounter += 1, e;
          try {
            e ||= {
              bitmap: null,
              id: `image_${this.#t}_${this.#e++}`,
              refCounter: 0,
              isSvg: !1
            };
            let i;
            if (typeof f == "string" ? (e.url = f, i = await (0, g.fetchData)(f, "blob")) : i = e.file = f, i.type === "image/svg+xml") {
              const y = x._isSVGFittingCanvas, T = new FileReader(), E = new Image(), R = new Promise((L, M) => {
                E.onload = () => {
                  e.bitmap = E, e.isSvg = !0, L();
                }, T.onload = async () => {
                  const $ = e.svgUrl = T.result;
                  E.src = await y ? `${$}#svgView(preserveAspectRatio(none))` : $;
                }, E.onerror = T.onerror = M;
              });
              T.readAsDataURL(i), await R;
            } else
              e.bitmap = await createImageBitmap(i);
            e.refCounter = 1;
          } catch (i) {
            console.error(i), e = null;
          }
          return this.#n.set(r, e), e && this.#n.set(e.id, e), e;
        }
        async getFromFile(r) {
          const {
            lastModified: f,
            name: e,
            size: i,
            type: y
          } = r;
          return this.#s(`${f}_${e}_${i}_${y}`, r);
        }
        async getFromUrl(r) {
          return this.#s(r, r);
        }
        async getFromId(r) {
          this.#n ||= /* @__PURE__ */ new Map();
          const f = this.#n.get(r);
          return f ? f.bitmap ? (f.refCounter += 1, f) : f.file ? this.getFromFile(f.file) : this.getFromUrl(f.url) : null;
        }
        getSvgUrl(r) {
          const f = this.#n.get(r);
          return f?.isSvg ? f.svgUrl : null;
        }
        deleteId(r) {
          this.#n ||= /* @__PURE__ */ new Map();
          const f = this.#n.get(r);
          f && (f.refCounter -= 1, f.refCounter === 0 && (f.bitmap = null));
        }
        isValidId(r) {
          return r.startsWith(`image_${this.#t}_`);
        }
      }
      class p {
        #t = [];
        #e = !1;
        #n;
        #s = -1;
        constructor() {
          let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 128;
          this.#n = r;
        }
        add(r) {
          let {
            cmd: f,
            undo: e,
            mustExec: i,
            type: y = NaN,
            overwriteIfSameType: T = !1,
            keepUndo: E = !1
          } = r;
          if (i && f(), this.#e)
            return;
          const R = {
            cmd: f,
            undo: e,
            type: y
          };
          if (this.#s === -1) {
            this.#t.length > 0 && (this.#t.length = 0), this.#s = 0, this.#t.push(R);
            return;
          }
          if (T && this.#t[this.#s].type === y) {
            E && (R.undo = this.#t[this.#s].undo), this.#t[this.#s] = R;
            return;
          }
          const L = this.#s + 1;
          L === this.#n ? this.#t.splice(0, 1) : (this.#s = L, L < this.#t.length && this.#t.splice(L)), this.#t.push(R);
        }
        undo() {
          this.#s !== -1 && (this.#e = !0, this.#t[this.#s].undo(), this.#e = !1, this.#s -= 1);
        }
        redo() {
          this.#s < this.#t.length - 1 && (this.#s += 1, this.#e = !0, this.#t[this.#s].cmd(), this.#e = !1);
        }
        hasSomethingToUndo() {
          return this.#s !== -1;
        }
        hasSomethingToRedo() {
          return this.#s < this.#t.length - 1;
        }
        destroy() {
          this.#t = null;
        }
      }
      class m {
        constructor(r) {
          this.buffer = [], this.callbacks = /* @__PURE__ */ new Map(), this.allKeys = /* @__PURE__ */ new Set();
          const {
            isMac: f
          } = s.FeatureTest.platform;
          for (const [e, i, y = {}] of r)
            for (const T of e) {
              const E = T.startsWith("mac+");
              f && E ? (this.callbacks.set(T.slice(4), {
                callback: i,
                options: y
              }), this.allKeys.add(T.split("+").at(-1))) : !f && !E && (this.callbacks.set(T, {
                callback: i,
                options: y
              }), this.allKeys.add(T.split("+").at(-1)));
            }
        }
        #t(r) {
          r.altKey && this.buffer.push("alt"), r.ctrlKey && this.buffer.push("ctrl"), r.metaKey && this.buffer.push("meta"), r.shiftKey && this.buffer.push("shift"), this.buffer.push(r.key);
          const f = this.buffer.join("+");
          return this.buffer.length = 0, f;
        }
        exec(r, f) {
          if (!this.allKeys.has(f.key))
            return;
          const e = this.callbacks.get(this.#t(f));
          if (!e)
            return;
          const {
            callback: i,
            options: {
              bubbles: y = !1,
              args: T = [],
              checker: E = null
            }
          } = e;
          E && !E(r, f) || (i.bind(r, ...T, f)(), y || (f.stopPropagation(), f.preventDefault()));
        }
      }
      class o {
        static _colorsMapping = /* @__PURE__ */ new Map([["CanvasText", [0, 0, 0]], ["Canvas", [255, 255, 255]]]);
        get _colors() {
          const r = /* @__PURE__ */ new Map([["CanvasText", null], ["Canvas", null]]);
          return (0, g.getColorValues)(r), (0, s.shadow)(this, "_colors", r);
        }
        convert(r) {
          const f = (0, g.getRGB)(r);
          if (!window.matchMedia("(forced-colors: active)").matches)
            return f;
          for (const [e, i] of this._colors)
            if (i.every((y, T) => y === f[T]))
              return o._colorsMapping.get(e);
          return f;
        }
        getHexCode(r) {
          const f = this._colors.get(r);
          return f ? s.Util.makeHexColor(...f) : r;
        }
      }
      class l {
        #t = null;
        #e = /* @__PURE__ */ new Map();
        #n = /* @__PURE__ */ new Map();
        #s = null;
        #r = null;
        #i = new p();
        #o = 0;
        #l = /* @__PURE__ */ new Set();
        #h = null;
        #c = null;
        #f = /* @__PURE__ */ new Set();
        #u = null;
        #d = null;
        #a = null;
        #p = new b();
        #m = !1;
        #v = !1;
        #y = null;
        #b = null;
        #A = s.AnnotationEditorType.NONE;
        #g = /* @__PURE__ */ new Set();
        #T = null;
        #M = this.blur.bind(this);
        #L = this.focus.bind(this);
        #D = this.copy.bind(this);
        #k = this.cut.bind(this);
        #N = this.paste.bind(this);
        #x = this.keydown.bind(this);
        #O = this.onEditingAction.bind(this);
        #C = this.onPageChanging.bind(this);
        #S = this.onScaleChanging.bind(this);
        #F = this.onRotationChanging.bind(this);
        #H = {
          isEditing: !1,
          isEmpty: !0,
          hasSomethingToUndo: !1,
          hasSomethingToRedo: !1,
          hasSelectedEditor: !1
        };
        #w = [0, 0];
        #R = null;
        #P = null;
        #U = null;
        static TRANSLATE_SMALL = 1;
        static TRANSLATE_BIG = 10;
        static get _keyboardManager() {
          const r = l.prototype, f = (T) => T.#P.contains(document.activeElement) && document.activeElement.tagName !== "BUTTON" && T.hasSomethingToControl(), e = (T, E) => {
            let {
              target: R
            } = E;
            if (R instanceof HTMLInputElement) {
              const {
                type: L
              } = R;
              return L !== "text" && L !== "number";
            }
            return !0;
          }, i = this.TRANSLATE_SMALL, y = this.TRANSLATE_BIG;
          return (0, s.shadow)(this, "_keyboardManager", new m([[["ctrl+a", "mac+meta+a"], r.selectAll, {
            checker: e
          }], [["ctrl+z", "mac+meta+z"], r.undo, {
            checker: e
          }], [["ctrl+y", "ctrl+shift+z", "mac+meta+shift+z", "ctrl+shift+Z", "mac+meta+shift+Z"], r.redo, {
            checker: e
          }], [["Backspace", "alt+Backspace", "ctrl+Backspace", "shift+Backspace", "mac+Backspace", "mac+alt+Backspace", "mac+ctrl+Backspace", "Delete", "ctrl+Delete", "shift+Delete", "mac+Delete"], r.delete, {
            checker: e
          }], [["Enter", "mac+Enter"], r.addNewEditorFromKeyboard, {
            checker: (T, E) => {
              let {
                target: R
              } = E;
              return !(R instanceof HTMLButtonElement) && T.#P.contains(R) && !T.isEnterHandled;
            }
          }], [[" ", "mac+ "], r.addNewEditorFromKeyboard, {
            checker: (T) => T.#P.contains(document.activeElement)
          }], [["Escape", "mac+Escape"], r.unselectAll], [["ArrowLeft", "mac+ArrowLeft"], r.translateSelectedEditors, {
            args: [-i, 0],
            checker: f
          }], [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], r.translateSelectedEditors, {
            args: [-y, 0],
            checker: f
          }], [["ArrowRight", "mac+ArrowRight"], r.translateSelectedEditors, {
            args: [i, 0],
            checker: f
          }], [["ctrl+ArrowRight", "mac+shift+ArrowRight"], r.translateSelectedEditors, {
            args: [y, 0],
            checker: f
          }], [["ArrowUp", "mac+ArrowUp"], r.translateSelectedEditors, {
            args: [0, -i],
            checker: f
          }], [["ctrl+ArrowUp", "mac+shift+ArrowUp"], r.translateSelectedEditors, {
            args: [0, -y],
            checker: f
          }], [["ArrowDown", "mac+ArrowDown"], r.translateSelectedEditors, {
            args: [0, i],
            checker: f
          }], [["ctrl+ArrowDown", "mac+shift+ArrowDown"], r.translateSelectedEditors, {
            args: [0, y],
            checker: f
          }]]));
        }
        constructor(r, f, e, i, y, T, E) {
          this.#P = r, this.#U = f, this.#s = e, this._eventBus = i, this._eventBus._on("editingaction", this.#O), this._eventBus._on("pagechanging", this.#C), this._eventBus._on("scalechanging", this.#S), this._eventBus._on("rotationchanging", this.#F), this.#r = y.annotationStorage, this.#u = y.filterFactory, this.#T = T, this.#a = E || null, this.viewParameters = {
            realScale: g.PixelsPerInch.PDF_TO_CSS_UNITS,
            rotation: 0
          };
        }
        destroy() {
          this.#I(), this.#j(), this._eventBus._off("editingaction", this.#O), this._eventBus._off("pagechanging", this.#C), this._eventBus._off("scalechanging", this.#S), this._eventBus._off("rotationchanging", this.#F);
          for (const r of this.#n.values())
            r.destroy();
          this.#n.clear(), this.#e.clear(), this.#f.clear(), this.#t = null, this.#g.clear(), this.#i.destroy(), this.#s?.destroy(), this.#d && (clearTimeout(this.#d), this.#d = null), this.#R && (clearTimeout(this.#R), this.#R = null);
        }
        get hcmFilter() {
          return (0, s.shadow)(this, "hcmFilter", this.#T ? this.#u.addHCMFilter(this.#T.foreground, this.#T.background) : "none");
        }
        get direction() {
          return (0, s.shadow)(this, "direction", getComputedStyle(this.#P).direction);
        }
        get highlightColors() {
          return (0, s.shadow)(this, "highlightColors", this.#a ? new Map(this.#a.split(",").map((r) => r.split("=").map((f) => f.trim()))) : null);
        }
        setMainHighlightColorPicker(r) {
          this.#b = r;
        }
        editAltText(r) {
          this.#s?.editAltText(this, r);
        }
        onPageChanging(r) {
          let {
            pageNumber: f
          } = r;
          this.#o = f - 1;
        }
        focusMainContainer() {
          this.#P.focus();
        }
        findParent(r, f) {
          for (const e of this.#n.values()) {
            const {
              x: i,
              y,
              width: T,
              height: E
            } = e.div.getBoundingClientRect();
            if (r >= i && r <= i + T && f >= y && f <= y + E)
              return e;
          }
          return null;
        }
        disableUserSelect() {
          let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          this.#U.classList.toggle("noUserSelect", r);
        }
        addShouldRescale(r) {
          this.#f.add(r);
        }
        removeShouldRescale(r) {
          this.#f.delete(r);
        }
        onScaleChanging(r) {
          let {
            scale: f
          } = r;
          this.commitOrRemove(), this.viewParameters.realScale = f * g.PixelsPerInch.PDF_TO_CSS_UNITS;
          for (const e of this.#f)
            e.onScaleChanging();
        }
        onRotationChanging(r) {
          let {
            pagesRotation: f
          } = r;
          this.commitOrRemove(), this.viewParameters.rotation = f;
        }
        addToAnnotationStorage(r) {
          !r.isEmpty() && this.#r && !this.#r.has(r.id) && this.#r.setValue(r.id, r);
        }
        #V() {
          window.addEventListener("focus", this.#L), window.addEventListener("blur", this.#M);
        }
        #j() {
          window.removeEventListener("focus", this.#L), window.removeEventListener("blur", this.#M);
        }
        blur() {
          if (!this.hasSelection)
            return;
          const {
            activeElement: r
          } = document;
          for (const f of this.#g)
            if (f.div.contains(r)) {
              this.#y = [f, r], f._focusEventsAllowed = !1;
              break;
            }
        }
        focus() {
          if (!this.#y)
            return;
          const [r, f] = this.#y;
          this.#y = null, f.addEventListener("focusin", () => {
            r._focusEventsAllowed = !0;
          }, {
            once: !0
          }), f.focus();
        }
        #B() {
          window.addEventListener("keydown", this.#x);
        }
        #I() {
          window.removeEventListener("keydown", this.#x);
        }
        #G() {
          document.addEventListener("copy", this.#D), document.addEventListener("cut", this.#k), document.addEventListener("paste", this.#N);
        }
        #X() {
          document.removeEventListener("copy", this.#D), document.removeEventListener("cut", this.#k), document.removeEventListener("paste", this.#N);
        }
        addEditListeners() {
          this.#B(), this.#G();
        }
        removeEditListeners() {
          this.#I(), this.#X();
        }
        copy(r) {
          if (r.preventDefault(), this.#t?.commitOrRemove(), !this.hasSelection)
            return;
          const f = [];
          for (const e of this.#g) {
            const i = e.serialize(!0);
            i && f.push(i);
          }
          f.length !== 0 && r.clipboardData.setData("application/pdfjs", JSON.stringify(f));
        }
        cut(r) {
          this.copy(r), this.delete();
        }
        paste(r) {
          r.preventDefault();
          const {
            clipboardData: f
          } = r;
          for (const y of f.items)
            for (const T of this.#c)
              if (T.isHandlingMimeForPasting(y.type)) {
                T.paste(y, this.currentLayer);
                return;
              }
          let e = f.getData("application/pdfjs");
          if (!e)
            return;
          try {
            e = JSON.parse(e);
          } catch (y) {
            (0, s.warn)(`paste: "${y.message}".`);
            return;
          }
          if (!Array.isArray(e))
            return;
          this.unselectAll();
          const i = this.currentLayer;
          try {
            const y = [];
            for (const R of e) {
              const L = i.deserialize(R);
              if (!L)
                return;
              y.push(L);
            }
            const T = () => {
              for (const R of y)
                this.#W(R);
              this.#Y(y);
            }, E = () => {
              for (const R of y)
                R.remove();
            };
            this.addCommands({
              cmd: T,
              undo: E,
              mustExec: !0
            });
          } catch (y) {
            (0, s.warn)(`paste: "${y.message}".`);
          }
        }
        keydown(r) {
          this.isEditorHandlingKeyboard || l._keyboardManager.exec(this, r);
        }
        onEditingAction(r) {
          ["undo", "redo", "delete", "selectAll"].includes(r.name) && this[r.name]();
        }
        #E(r) {
          Object.entries(r).some((e) => {
            let [i, y] = e;
            return this.#H[i] !== y;
          }) && this._eventBus.dispatch("annotationeditorstateschanged", {
            source: this,
            details: Object.assign(this.#H, r)
          });
        }
        #z(r) {
          this._eventBus.dispatch("annotationeditorparamschanged", {
            source: this,
            details: r
          });
        }
        setEditingState(r) {
          r ? (this.#V(), this.#B(), this.#G(), this.#E({
            isEditing: this.#A !== s.AnnotationEditorType.NONE,
            isEmpty: this.#$(),
            hasSomethingToUndo: this.#i.hasSomethingToUndo(),
            hasSomethingToRedo: this.#i.hasSomethingToRedo(),
            hasSelectedEditor: !1
          })) : (this.#j(), this.#I(), this.#X(), this.#E({
            isEditing: !1
          }), this.disableUserSelect(!1));
        }
        registerEditorTypes(r) {
          if (!this.#c) {
            this.#c = r;
            for (const f of this.#c)
              this.#z(f.defaultPropertiesToUpdate);
          }
        }
        getId() {
          return this.#p.getId();
        }
        get currentLayer() {
          return this.#n.get(this.#o);
        }
        getLayer(r) {
          return this.#n.get(r);
        }
        get currentPageIndex() {
          return this.#o;
        }
        addLayer(r) {
          this.#n.set(r.pageIndex, r), this.#m ? r.enable() : r.disable();
        }
        removeLayer(r) {
          this.#n.delete(r.pageIndex);
        }
        updateMode(r) {
          let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          if (this.#A !== r) {
            if (this.#A = r, r === s.AnnotationEditorType.NONE) {
              this.setEditingState(!1), this.#J();
              return;
            }
            this.setEditingState(!0), this.#K(), this.unselectAll();
            for (const i of this.#n.values())
              i.updateMode(r);
            if (!f && e) {
              this.addNewEditorFromKeyboard();
              return;
            }
            if (f) {
              for (const i of this.#e.values())
                if (i.annotationElementId === f) {
                  this.setSelected(i), i.enterInEditMode();
                  break;
                }
            }
          }
        }
        addNewEditorFromKeyboard() {
          this.currentLayer.canCreateNewEmptyEditor() && this.currentLayer.addNewEditor();
        }
        updateToolbar(r) {
          r !== this.#A && this._eventBus.dispatch("switchannotationeditormode", {
            source: this,
            mode: r
          });
        }
        updateParams(r, f) {
          if (this.#c) {
            switch (r) {
              case s.AnnotationEditorParamsType.CREATE:
                this.currentLayer.addNewEditor();
                return;
              case s.AnnotationEditorParamsType.HIGHLIGHT_DEFAULT_COLOR:
                this.#b?.updateColor(f);
                break;
            }
            for (const e of this.#g)
              e.updateParams(r, f);
            for (const e of this.#c)
              e.updateDefaultParams(r, f);
          }
        }
        enableWaiting() {
          let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          if (this.#v !== r) {
            this.#v = r;
            for (const f of this.#n.values())
              r ? f.disableClick() : f.enableClick(), f.div.classList.toggle("waiting", r);
          }
        }
        #K() {
          if (!this.#m) {
            this.#m = !0;
            for (const r of this.#n.values())
              r.enable();
          }
        }
        #J() {
          if (this.unselectAll(), this.#m) {
            this.#m = !1;
            for (const r of this.#n.values())
              r.disable();
          }
        }
        getEditors(r) {
          const f = [];
          for (const e of this.#e.values())
            e.pageIndex === r && f.push(e);
          return f;
        }
        getEditor(r) {
          return this.#e.get(r);
        }
        addEditor(r) {
          this.#e.set(r.id, r);
        }
        removeEditor(r) {
          r.div.contains(document.activeElement) && (this.#d && clearTimeout(this.#d), this.#d = setTimeout(() => {
            this.focusMainContainer(), this.#d = null;
          }, 0)), this.#e.delete(r.id), this.unselect(r), (!r.annotationElementId || !this.#l.has(r.annotationElementId)) && this.#r?.remove(r.id);
        }
        addDeletedAnnotationElement(r) {
          this.#l.add(r.annotationElementId), r.deleted = !0;
        }
        isDeletedAnnotationElement(r) {
          return this.#l.has(r);
        }
        removeDeletedAnnotationElement(r) {
          this.#l.delete(r.annotationElementId), r.deleted = !1;
        }
        #W(r) {
          const f = this.#n.get(r.pageIndex);
          f ? f.addOrRebuild(r) : this.addEditor(r);
        }
        setActiveEditor(r) {
          this.#t !== r && (this.#t = r, r && this.#z(r.propertiesToUpdate));
        }
        toggleSelected(r) {
          if (this.#g.has(r)) {
            this.#g.delete(r), r.unselect(), this.#E({
              hasSelectedEditor: this.hasSelection
            });
            return;
          }
          this.#g.add(r), r.select(), this.#z(r.propertiesToUpdate), this.#E({
            hasSelectedEditor: !0
          });
        }
        setSelected(r) {
          for (const f of this.#g)
            f !== r && f.unselect();
          this.#g.clear(), this.#g.add(r), r.select(), this.#z(r.propertiesToUpdate), this.#E({
            hasSelectedEditor: !0
          });
        }
        isSelected(r) {
          return this.#g.has(r);
        }
        get firstSelectedEditor() {
          return this.#g.values().next().value;
        }
        unselect(r) {
          r.unselect(), this.#g.delete(r), this.#E({
            hasSelectedEditor: this.hasSelection
          });
        }
        get hasSelection() {
          return this.#g.size !== 0;
        }
        get isEnterHandled() {
          return this.#g.size === 1 && this.firstSelectedEditor.isEnterHandled;
        }
        undo() {
          this.#i.undo(), this.#E({
            hasSomethingToUndo: this.#i.hasSomethingToUndo(),
            hasSomethingToRedo: !0,
            isEmpty: this.#$()
          });
        }
        redo() {
          this.#i.redo(), this.#E({
            hasSomethingToUndo: !0,
            hasSomethingToRedo: this.#i.hasSomethingToRedo(),
            isEmpty: this.#$()
          });
        }
        addCommands(r) {
          this.#i.add(r), this.#E({
            hasSomethingToUndo: !0,
            hasSomethingToRedo: !1,
            isEmpty: this.#$()
          });
        }
        #$() {
          if (this.#e.size === 0)
            return !0;
          if (this.#e.size === 1)
            for (const r of this.#e.values())
              return r.isEmpty();
          return !1;
        }
        delete() {
          if (this.commitOrRemove(), !this.hasSelection)
            return;
          const r = [...this.#g], f = () => {
            for (const i of r)
              i.remove();
          }, e = () => {
            for (const i of r)
              this.#W(i);
          };
          this.addCommands({
            cmd: f,
            undo: e,
            mustExec: !0
          });
        }
        commitOrRemove() {
          this.#t?.commitOrRemove();
        }
        hasSomethingToControl() {
          return this.#t || this.hasSelection;
        }
        #Y(r) {
          this.#g.clear();
          for (const f of r)
            f.isEmpty() || (this.#g.add(f), f.select());
          this.#E({
            hasSelectedEditor: !0
          });
        }
        selectAll() {
          for (const r of this.#g)
            r.commit();
          this.#Y(this.#e.values());
        }
        unselectAll() {
          if (!(this.#t && (this.#t.commitOrRemove(), this.#A !== s.AnnotationEditorType.NONE)) && this.hasSelection) {
            for (const r of this.#g)
              r.unselect();
            this.#g.clear(), this.#E({
              hasSelectedEditor: !1
            });
          }
        }
        translateSelectedEditors(r, f) {
          if ((arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1) || this.commitOrRemove(), !this.hasSelection)
            return;
          this.#w[0] += r, this.#w[1] += f;
          const [i, y] = this.#w, T = [...this.#g], E = 1e3;
          this.#R && clearTimeout(this.#R), this.#R = setTimeout(() => {
            this.#R = null, this.#w[0] = this.#w[1] = 0, this.addCommands({
              cmd: () => {
                for (const R of T)
                  this.#e.has(R.id) && R.translateInPage(i, y);
              },
              undo: () => {
                for (const R of T)
                  this.#e.has(R.id) && R.translateInPage(-i, -y);
              },
              mustExec: !1
            });
          }, E);
          for (const R of T)
            R.translateInPage(r, f);
        }
        setUpDragSession() {
          if (this.hasSelection) {
            this.disableUserSelect(!0), this.#h = /* @__PURE__ */ new Map();
            for (const r of this.#g)
              this.#h.set(r, {
                savedX: r.x,
                savedY: r.y,
                savedPageIndex: r.pageIndex,
                newX: 0,
                newY: 0,
                newPageIndex: -1
              });
          }
        }
        endDragSession() {
          if (!this.#h)
            return !1;
          this.disableUserSelect(!1);
          const r = this.#h;
          this.#h = null;
          let f = !1;
          for (const [{
            x: i,
            y,
            pageIndex: T
          }, E] of r)
            E.newX = i, E.newY = y, E.newPageIndex = T, f ||= i !== E.savedX || y !== E.savedY || T !== E.savedPageIndex;
          if (!f)
            return !1;
          const e = (i, y, T, E) => {
            if (this.#e.has(i.id)) {
              const R = this.#n.get(E);
              R ? i._setParentAndPosition(R, y, T) : (i.pageIndex = E, i.x = y, i.y = T);
            }
          };
          return this.addCommands({
            cmd: () => {
              for (const [i, {
                newX: y,
                newY: T,
                newPageIndex: E
              }] of r)
                e(i, y, T, E);
            },
            undo: () => {
              for (const [i, {
                savedX: y,
                savedY: T,
                savedPageIndex: E
              }] of r)
                e(i, y, T, E);
            },
            mustExec: !0
          }), !0;
        }
        dragSelectedEditors(r, f) {
          if (this.#h)
            for (const e of this.#h.keys())
              e.drag(r, f);
        }
        rebuild(r) {
          if (r.parent === null) {
            const f = this.getLayer(r.pageIndex);
            f ? (f.changeParent(r), f.addOrRebuild(r)) : (this.addEditor(r), this.addToAnnotationStorage(r), r.rebuild());
          } else
            r.parent.addOrRebuild(r);
        }
        get isEditorHandlingKeyboard() {
          return this.getActive()?.shouldGetKeyboardEvents() || this.#g.size === 1 && this.firstSelectedEditor.shouldGetKeyboardEvents();
        }
        isActive(r) {
          return this.#t === r;
        }
        getActive() {
          return this.#t;
        }
        getMode() {
          return this.#A;
        }
        get imageManager() {
          return (0, s.shadow)(this, "imageManager", new x());
        }
      }
    })
  ),
  /***/
  5171: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        PDFFetchStream: () => (
          /* binding */
          x
        )
        /* harmony export */
      }), t(8837), t(9803), t(8347), t(7995), t(62), t(4602), t(344), t(4305), t(7583), t(4226);
      var s = t(3266), g = t(8253);
      function u(o, l, c) {
        return {
          method: "GET",
          headers: o,
          signal: c.signal,
          mode: "cors",
          credentials: l ? "include" : "same-origin",
          redirect: "follow"
        };
      }
      function A(o) {
        const l = new Headers();
        for (const c in o) {
          const r = o[c];
          r !== void 0 && l.append(c, r);
        }
        return l;
      }
      function b(o) {
        return o instanceof Uint8Array ? o.buffer : o instanceof ArrayBuffer ? o : ((0, s.warn)(`getArrayBuffer - unexpected data format: ${o}`), new Uint8Array(o).buffer);
      }
      class x {
        constructor(l) {
          this.source = l, this.isHttp = /^https?:/i.test(l.url), this.httpHeaders = this.isHttp && l.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        get _progressiveDataLength() {
          return this._fullRequestReader?._loaded ?? 0;
        }
        getFullReader() {
          return (0, s.assert)(!this._fullRequestReader, "PDFFetchStream.getFullReader can only be called once."), this._fullRequestReader = new p(this), this._fullRequestReader;
        }
        getRangeReader(l, c) {
          if (c <= this._progressiveDataLength)
            return null;
          const r = new m(this, l, c);
          return this._rangeRequestReaders.push(r), r;
        }
        cancelAllRequests(l) {
          this._fullRequestReader?.cancel(l);
          for (const c of this._rangeRequestReaders.slice(0))
            c.cancel(l);
        }
      }
      class p {
        constructor(l) {
          this._stream = l, this._reader = null, this._loaded = 0, this._filename = null;
          const c = l.source;
          this._withCredentials = c.withCredentials || !1, this._contentLength = c.length, this._headersCapability = new s.PromiseCapability(), this._disableRange = c.disableRange || !1, this._rangeChunkSize = c.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._abortController = new AbortController(), this._isStreamingSupported = !c.disableStream, this._isRangeSupported = !c.disableRange, this._headers = A(this._stream.httpHeaders);
          const r = c.url;
          fetch(r, u(this._headers, this._withCredentials, this._abortController)).then((f) => {
            if (!(0, g.validateResponseStatus)(f.status))
              throw (0, g.createResponseStatusError)(f.status, r);
            this._reader = f.body.getReader(), this._headersCapability.resolve();
            const e = (T) => f.headers.get(T), {
              allowRangeRequests: i,
              suggestedLength: y
            } = (0, g.validateRangeRequestCapabilities)({
              getResponseHeader: e,
              isHttp: this._stream.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange
            });
            this._isRangeSupported = i, this._contentLength = y || this._contentLength, this._filename = (0, g.extractFilenameFromHeader)(e), !this._isStreamingSupported && this._isRangeSupported && this.cancel(new s.AbortException("Streaming is disabled."));
          }).catch(this._headersCapability.reject), this.onProgress = null;
        }
        get headersReady() {
          return this._headersCapability.promise;
        }
        get filename() {
          return this._filename;
        }
        get contentLength() {
          return this._contentLength;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._headersCapability.promise;
          const {
            value: l,
            done: c
          } = await this._reader.read();
          return c ? {
            value: l,
            done: c
          } : (this._loaded += l.byteLength, this.onProgress?.({
            loaded: this._loaded,
            total: this._contentLength
          }), {
            value: b(l),
            done: !1
          });
        }
        cancel(l) {
          this._reader?.cancel(l), this._abortController.abort();
        }
      }
      class m {
        constructor(l, c, r) {
          this._stream = l, this._reader = null, this._loaded = 0;
          const f = l.source;
          this._withCredentials = f.withCredentials || !1, this._readCapability = new s.PromiseCapability(), this._isStreamingSupported = !f.disableStream, this._abortController = new AbortController(), this._headers = A(this._stream.httpHeaders), this._headers.append("Range", `bytes=${c}-${r - 1}`);
          const e = f.url;
          fetch(e, u(this._headers, this._withCredentials, this._abortController)).then((i) => {
            if (!(0, g.validateResponseStatus)(i.status))
              throw (0, g.createResponseStatusError)(i.status, e);
            this._readCapability.resolve(), this._reader = i.body.getReader();
          }).catch(this._readCapability.reject), this.onProgress = null;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        async read() {
          await this._readCapability.promise;
          const {
            value: l,
            done: c
          } = await this._reader.read();
          return c ? {
            value: l,
            done: c
          } : (this._loaded += l.byteLength, this.onProgress?.({
            loaded: this._loaded
          }), {
            value: b(l),
            done: !1
          });
        }
        cancel(l) {
          this._reader?.cancel(l), this._abortController.abort();
        }
      }
    })
  ),
  /***/
  3742: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        FontFaceObject: () => (
          /* binding */
          u
        ),
        /* harmony export */
        FontLoader: () => (
          /* binding */
          g
        )
        /* harmony export */
      }), t(5561), t(8587), t(3247), t(3302), t(9490), t(5438), t(7914), t(4226), t(9709);
      var s = t(3266);
      class g {
        #t = /* @__PURE__ */ new Set();
        constructor(b) {
          let {
            ownerDocument: x = globalThis.document,
            styleElement: p = null
          } = b;
          this._document = x, this.nativeFontFaces = /* @__PURE__ */ new Set(), this.styleElement = null, this.loadingRequests = [], this.loadTestFontId = 0;
        }
        addNativeFontFace(b) {
          this.nativeFontFaces.add(b), this._document.fonts.add(b);
        }
        removeNativeFontFace(b) {
          this.nativeFontFaces.delete(b), this._document.fonts.delete(b);
        }
        insertRule(b) {
          this.styleElement || (this.styleElement = this._document.createElement("style"), this._document.documentElement.getElementsByTagName("head")[0].append(this.styleElement));
          const x = this.styleElement.sheet;
          x.insertRule(b, x.cssRules.length);
        }
        clear() {
          for (const b of this.nativeFontFaces)
            this._document.fonts.delete(b);
          this.nativeFontFaces.clear(), this.#t.clear(), this.styleElement && (this.styleElement.remove(), this.styleElement = null);
        }
        async loadSystemFont(b) {
          let {
            systemFontInfo: x,
            _inspectFont: p
          } = b;
          if (!(!x || this.#t.has(x.loadedName))) {
            if ((0, s.assert)(!this.disableFontFace, "loadSystemFont shouldn't be called when `disableFontFace` is set."), this.isFontLoadingAPISupported) {
              const {
                loadedName: m,
                src: o,
                style: l
              } = x, c = new FontFace(m, o, l);
              this.addNativeFontFace(c);
              try {
                await c.load(), this.#t.add(m), p?.(x);
              } catch {
                (0, s.warn)(`Cannot load system font: ${x.baseFontName}, installing it could help to improve PDF rendering.`), this.removeNativeFontFace(c);
              }
              return;
            }
            (0, s.unreachable)("Not implemented: loadSystemFont without the Font Loading API.");
          }
        }
        async bind(b) {
          if (b.attached || b.missingFile && !b.systemFontInfo)
            return;
          if (b.attached = !0, b.systemFontInfo) {
            await this.loadSystemFont(b);
            return;
          }
          if (this.isFontLoadingAPISupported) {
            const p = b.createNativeFontFace();
            if (p) {
              this.addNativeFontFace(p);
              try {
                await p.loaded;
              } catch (m) {
                throw (0, s.warn)(`Failed to load font '${p.family}': '${m}'.`), b.disableFontFace = !0, m;
              }
            }
            return;
          }
          const x = b.createFontFaceRule();
          if (x) {
            if (this.insertRule(x), this.isSyncFontLoadingSupported)
              return;
            await new Promise((p) => {
              const m = this._queueLoadingCallback(p);
              this._prepareFontLoadEvent(b, m);
            });
          }
        }
        get isFontLoadingAPISupported() {
          const b = !!this._document?.fonts;
          return (0, s.shadow)(this, "isFontLoadingAPISupported", b);
        }
        get isSyncFontLoadingSupported() {
          let b = !1;
          return (s.isNodeJS || typeof navigator < "u" && typeof navigator?.userAgent == "string" && /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent)) && (b = !0), (0, s.shadow)(this, "isSyncFontLoadingSupported", b);
        }
        _queueLoadingCallback(b) {
          function x() {
            for ((0, s.assert)(!m.done, "completeRequest() cannot be called twice."), m.done = !0; p.length > 0 && p[0].done; ) {
              const o = p.shift();
              setTimeout(o.callback, 0);
            }
          }
          const {
            loadingRequests: p
          } = this, m = {
            done: !1,
            complete: x,
            callback: b
          };
          return p.push(m), m;
        }
        get _loadTestFont() {
          const b = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==");
          return (0, s.shadow)(this, "_loadTestFont", b);
        }
        _prepareFontLoadEvent(b, x) {
          function p(K, Q) {
            return K.charCodeAt(Q) << 24 | K.charCodeAt(Q + 1) << 16 | K.charCodeAt(Q + 2) << 8 | K.charCodeAt(Q + 3) & 255;
          }
          function m(K, Q, J, at) {
            const ut = K.substring(0, Q), ht = K.substring(Q + J);
            return ut + at + ht;
          }
          let o, l;
          const c = this._document.createElement("canvas");
          c.width = 1, c.height = 1;
          const r = c.getContext("2d");
          let f = 0;
          function e(K, Q) {
            if (++f > 30) {
              (0, s.warn)("Load test font never loaded."), Q();
              return;
            }
            if (r.font = "30px " + K, r.fillText(".", 0, 20), r.getImageData(0, 0, 1, 1).data[3] > 0) {
              Q();
              return;
            }
            setTimeout(e.bind(null, K, Q));
          }
          const i = `lt${Date.now()}${this.loadTestFontId++}`;
          let y = this._loadTestFont;
          y = m(y, 976, i.length, i);
          const E = 16, R = 1482184792;
          let L = p(y, E);
          for (o = 0, l = i.length - 3; o < l; o += 4)
            L = L - R + p(i, o) | 0;
          o < i.length && (L = L - R + p(i + "XXX", o) | 0), y = m(y, E, 4, (0, s.string32)(L));
          const M = `url(data:font/opentype;base64,${btoa(y)});`, $ = `@font-face {font-family:"${i}";src:${M}}`;
          this.insertRule($);
          const j = this._document.createElement("div");
          j.style.visibility = "hidden", j.style.width = j.style.height = "10px", j.style.position = "absolute", j.style.top = j.style.left = "0px";
          for (const K of [b.loadedName, i]) {
            const Q = this._document.createElement("span");
            Q.textContent = "Hi", Q.style.fontFamily = K, j.append(Q);
          }
          this._document.body.append(j), e(i, () => {
            j.remove(), x.complete();
          });
        }
      }
      class u {
        constructor(b, x) {
          let {
            isEvalSupported: p = !0,
            disableFontFace: m = !1,
            ignoreErrors: o = !1,
            inspectFont: l = null
          } = x;
          this.compiledGlyphs = /* @__PURE__ */ Object.create(null);
          for (const c in b)
            this[c] = b[c];
          this.isEvalSupported = p !== !1, this.disableFontFace = m === !0, this.ignoreErrors = o === !0, this._inspectFont = l;
        }
        createNativeFontFace() {
          if (!this.data || this.disableFontFace)
            return null;
          let b;
          if (!this.cssFontInfo)
            b = new FontFace(this.loadedName, this.data, {});
          else {
            const x = {
              weight: this.cssFontInfo.fontWeight
            };
            this.cssFontInfo.italicAngle && (x.style = `oblique ${this.cssFontInfo.italicAngle}deg`), b = new FontFace(this.cssFontInfo.fontFamily, this.data, x);
          }
          return this._inspectFont?.(this), b;
        }
        createFontFaceRule() {
          if (!this.data || this.disableFontFace)
            return null;
          const b = (0, s.bytesToString)(this.data), x = `url(data:${this.mimetype};base64,${btoa(b)});`;
          let p;
          if (!this.cssFontInfo)
            p = `@font-face {font-family:"${this.loadedName}";src:${x}}`;
          else {
            let m = `font-weight: ${this.cssFontInfo.fontWeight};`;
            this.cssFontInfo.italicAngle && (m += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`), p = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${m}src:${x}}`;
          }
          return this._inspectFont?.(this, x), p;
        }
        getPathGenerator(b, x) {
          if (this.compiledGlyphs[x] !== void 0)
            return this.compiledGlyphs[x];
          let p;
          try {
            p = b.get(this.loadedName + "_path_" + x);
          } catch (m) {
            if (!this.ignoreErrors)
              throw m;
            return (0, s.warn)(`getPathGenerator - ignoring character: "${m}".`), this.compiledGlyphs[x] = function(o, l) {
            };
          }
          if (this.isEvalSupported && s.FeatureTest.isEvalSupported) {
            const m = [];
            for (const o of p) {
              const l = o.args !== void 0 ? o.args.join(",") : "";
              m.push("c.", o.cmd, "(", l, `);
`);
            }
            return this.compiledGlyphs[x] = new Function("c", "size", m.join(""));
          }
          return this.compiledGlyphs[x] = function(m, o) {
            for (const l of p)
              l.cmd === "scale" && (l.args = [o, -o]), m[l.cmd].apply(m, l.args);
          };
        }
      }
    })
  ),
  /***/
  3472: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        Metadata: () => (
          /* binding */
          g
        )
        /* harmony export */
      });
      var s = t(3266);
      class g {
        #t;
        #e;
        constructor(A) {
          let {
            parsedData: b,
            rawData: x
          } = A;
          this.#t = b, this.#e = x;
        }
        getRaw() {
          return this.#e;
        }
        get(A) {
          return this.#t.get(A) ?? null;
        }
        getAll() {
          return (0, s.objectFromMap)(this.#t);
        }
        has(A) {
          return this.#t.has(A);
        }
      }
    })
  ),
  /***/
  3474: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        PDFNetworkStream: () => (
          /* binding */
          p
        )
        /* harmony export */
      }), t(4226);
      var s = t(3266), g = t(8253);
      const u = 200, A = 206;
      function b(l) {
        const c = l.response;
        return typeof c != "string" ? c : (0, s.stringToBytes)(c).buffer;
      }
      class x {
        constructor(c) {
          let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          this.url = c, this.isHttp = /^https?:/i.test(c), this.httpHeaders = this.isHttp && r.httpHeaders || /* @__PURE__ */ Object.create(null), this.withCredentials = r.withCredentials || !1, this.currXhrId = 0, this.pendingRequests = /* @__PURE__ */ Object.create(null);
        }
        requestRange(c, r, f) {
          const e = {
            begin: c,
            end: r
          };
          for (const i in f)
            e[i] = f[i];
          return this.request(e);
        }
        requestFull(c) {
          return this.request(c);
        }
        request(c) {
          const r = new XMLHttpRequest(), f = this.currXhrId++, e = this.pendingRequests[f] = {
            xhr: r
          };
          r.open("GET", this.url), r.withCredentials = this.withCredentials;
          for (const i in this.httpHeaders) {
            const y = this.httpHeaders[i];
            y !== void 0 && r.setRequestHeader(i, y);
          }
          return this.isHttp && "begin" in c && "end" in c ? (r.setRequestHeader("Range", `bytes=${c.begin}-${c.end - 1}`), e.expectedStatus = A) : e.expectedStatus = u, r.responseType = "arraybuffer", c.onError && (r.onerror = function(i) {
            c.onError(r.status);
          }), r.onreadystatechange = this.onStateChange.bind(this, f), r.onprogress = this.onProgress.bind(this, f), e.onHeadersReceived = c.onHeadersReceived, e.onDone = c.onDone, e.onError = c.onError, e.onProgress = c.onProgress, r.send(null), f;
        }
        onProgress(c, r) {
          const f = this.pendingRequests[c];
          f && f.onProgress?.(r);
        }
        onStateChange(c, r) {
          const f = this.pendingRequests[c];
          if (!f)
            return;
          const e = f.xhr;
          if (e.readyState >= 2 && f.onHeadersReceived && (f.onHeadersReceived(), delete f.onHeadersReceived), e.readyState !== 4 || !(c in this.pendingRequests))
            return;
          if (delete this.pendingRequests[c], e.status === 0 && this.isHttp) {
            f.onError?.(e.status);
            return;
          }
          const i = e.status || u;
          if (!(i === u && f.expectedStatus === A) && i !== f.expectedStatus) {
            f.onError?.(e.status);
            return;
          }
          const T = b(e);
          if (i === A) {
            const E = e.getResponseHeader("Content-Range"), R = /bytes (\d+)-(\d+)\/(\d+)/.exec(E);
            f.onDone({
              begin: parseInt(R[1], 10),
              chunk: T
            });
          } else T ? f.onDone({
            begin: 0,
            chunk: T
          }) : f.onError?.(e.status);
        }
        getRequestXhr(c) {
          return this.pendingRequests[c].xhr;
        }
        isPendingRequest(c) {
          return c in this.pendingRequests;
        }
        abortRequest(c) {
          const r = this.pendingRequests[c].xhr;
          delete this.pendingRequests[c], r.abort();
        }
      }
      class p {
        constructor(c) {
          this._source = c, this._manager = new x(c.url, {
            httpHeaders: c.httpHeaders,
            withCredentials: c.withCredentials
          }), this._rangeChunkSize = c.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = [];
        }
        _onRangeRequestReaderClosed(c) {
          const r = this._rangeRequestReaders.indexOf(c);
          r >= 0 && this._rangeRequestReaders.splice(r, 1);
        }
        getFullReader() {
          return (0, s.assert)(!this._fullRequestReader, "PDFNetworkStream.getFullReader can only be called once."), this._fullRequestReader = new m(this._manager, this._source), this._fullRequestReader;
        }
        getRangeReader(c, r) {
          const f = new o(this._manager, c, r);
          return f.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(f), f;
        }
        cancelAllRequests(c) {
          this._fullRequestReader?.cancel(c);
          for (const r of this._rangeRequestReaders.slice(0))
            r.cancel(c);
        }
      }
      class m {
        constructor(c, r) {
          this._manager = c;
          const f = {
            onHeadersReceived: this._onHeadersReceived.bind(this),
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._url = r.url, this._fullRequestId = c.requestFull(f), this._headersReceivedCapability = new s.PromiseCapability(), this._disableRange = r.disableRange || !1, this._contentLength = r.length, this._rangeChunkSize = r.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this._filename = null, this.onProgress = null;
        }
        _onHeadersReceived() {
          const c = this._fullRequestId, r = this._manager.getRequestXhr(c), f = (y) => r.getResponseHeader(y), {
            allowRangeRequests: e,
            suggestedLength: i
          } = (0, g.validateRangeRequestCapabilities)({
            getResponseHeader: f,
            isHttp: this._manager.isHttp,
            rangeChunkSize: this._rangeChunkSize,
            disableRange: this._disableRange
          });
          e && (this._isRangeSupported = !0), this._contentLength = i || this._contentLength, this._filename = (0, g.extractFilenameFromHeader)(f), this._isRangeSupported && this._manager.abortRequest(c), this._headersReceivedCapability.resolve();
        }
        _onDone(c) {
          if (c && (this._requests.length > 0 ? this._requests.shift().resolve({
            value: c.chunk,
            done: !1
          }) : this._cachedChunks.push(c.chunk)), this._done = !0, !(this._cachedChunks.length > 0)) {
            for (const r of this._requests)
              r.resolve({
                value: void 0,
                done: !0
              });
            this._requests.length = 0;
          }
        }
        _onError(c) {
          this._storedError = (0, g.createResponseStatusError)(c, this._url), this._headersReceivedCapability.reject(this._storedError);
          for (const r of this._requests)
            r.reject(this._storedError);
          this._requests.length = 0, this._cachedChunks.length = 0;
        }
        _onProgress(c) {
          this.onProgress?.({
            loaded: c.loaded,
            total: c.lengthComputable ? c.total : this._contentLength
          });
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._isStreamingSupported;
        }
        get contentLength() {
          return this._contentLength;
        }
        get headersReady() {
          return this._headersReceivedCapability.promise;
        }
        async read() {
          if (this._storedError)
            throw this._storedError;
          if (this._cachedChunks.length > 0)
            return {
              value: this._cachedChunks.shift(),
              done: !1
            };
          if (this._done)
            return {
              value: void 0,
              done: !0
            };
          const c = new s.PromiseCapability();
          return this._requests.push(c), c.promise;
        }
        cancel(c) {
          this._done = !0, this._headersReceivedCapability.reject(c);
          for (const r of this._requests)
            r.resolve({
              value: void 0,
              done: !0
            });
          this._requests.length = 0, this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null;
        }
      }
      class o {
        constructor(c, r, f) {
          this._manager = c;
          const e = {
            onDone: this._onDone.bind(this),
            onError: this._onError.bind(this),
            onProgress: this._onProgress.bind(this)
          };
          this._url = c.url, this._requestId = c.requestRange(r, f, e), this._requests = [], this._queuedChunk = null, this._done = !1, this._storedError = void 0, this.onProgress = null, this.onClosed = null;
        }
        _close() {
          this.onClosed?.(this);
        }
        _onDone(c) {
          const r = c.chunk;
          this._requests.length > 0 ? this._requests.shift().resolve({
            value: r,
            done: !1
          }) : this._queuedChunk = r, this._done = !0;
          for (const f of this._requests)
            f.resolve({
              value: void 0,
              done: !0
            });
          this._requests.length = 0, this._close();
        }
        _onError(c) {
          this._storedError = (0, g.createResponseStatusError)(c, this._url);
          for (const r of this._requests)
            r.reject(this._storedError);
          this._requests.length = 0, this._queuedChunk = null;
        }
        _onProgress(c) {
          this.isStreamingSupported || this.onProgress?.({
            loaded: c.loaded
          });
        }
        get isStreamingSupported() {
          return !1;
        }
        async read() {
          if (this._storedError)
            throw this._storedError;
          if (this._queuedChunk !== null) {
            const r = this._queuedChunk;
            return this._queuedChunk = null, {
              value: r,
              done: !1
            };
          }
          if (this._done)
            return {
              value: void 0,
              done: !0
            };
          const c = new s.PromiseCapability();
          return this._requests.push(c), c.promise;
        }
        cancel(c) {
          this._done = !0;
          for (const r of this._requests)
            r.resolve({
              value: void 0,
              done: !0
            });
          this._requests.length = 0, this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close();
        }
      }
    })
  ),
  /***/
  8253: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        createResponseStatusError: () => (
          /* binding */
          x
        ),
        extractFilenameFromHeader: () => (
          /* binding */
          b
        ),
        validateRangeRequestCapabilities: () => (
          /* binding */
          A
        ),
        validateResponseStatus: () => (
          /* binding */
          p
        )
      });
      var s = t(3266);
      t(4226), t(9709);
      function g(m) {
        let o = !0, l = c("filename\\*", "i").exec(m);
        if (l) {
          l = l[1];
          let E = i(l);
          return E = unescape(E), E = y(E), E = T(E), f(E);
        }
        if (l = e(m), l) {
          const E = T(l);
          return f(E);
        }
        if (l = c("filename", "i").exec(m), l) {
          l = l[1];
          let E = i(l);
          return E = T(E), f(E);
        }
        function c(E, R) {
          return new RegExp("(?:^|;)\\s*" + E + '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)', R);
        }
        function r(E, R) {
          if (E) {
            if (!/^[\x00-\xFF]+$/.test(R))
              return R;
            try {
              const L = new TextDecoder(E, {
                fatal: !0
              }), M = (0, s.stringToBytes)(R);
              R = L.decode(M), o = !1;
            } catch {
            }
          }
          return R;
        }
        function f(E) {
          return o && /[\x80-\xff]/.test(E) && (E = r("utf-8", E), o && (E = r("iso-8859-1", E))), E;
        }
        function e(E) {
          const R = [];
          let L;
          const M = c("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          for (; (L = M.exec(E)) !== null; ) {
            let [, j, K, Q] = L;
            if (j = parseInt(j, 10), j in R) {
              if (j === 0)
                break;
              continue;
            }
            R[j] = [K, Q];
          }
          const $ = [];
          for (let j = 0; j < R.length && j in R; ++j) {
            let [K, Q] = R[j];
            Q = i(Q), K && (Q = unescape(Q), j === 0 && (Q = y(Q))), $.push(Q);
          }
          return $.join("");
        }
        function i(E) {
          if (E.startsWith('"')) {
            const R = E.slice(1).split('\\"');
            for (let L = 0; L < R.length; ++L) {
              const M = R[L].indexOf('"');
              M !== -1 && (R[L] = R[L].slice(0, M), R.length = L + 1), R[L] = R[L].replaceAll(/\\(.)/g, "$1");
            }
            E = R.join('"');
          }
          return E;
        }
        function y(E) {
          const R = E.indexOf("'");
          if (R === -1)
            return E;
          const L = E.slice(0, R), $ = E.slice(R + 1).replace(/^[^']*'/, "");
          return r(L, $);
        }
        function T(E) {
          return !E.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(E) ? E : E.replaceAll(/=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g, function(R, L, M, $) {
            if (M === "q" || M === "Q")
              return $ = $.replaceAll("_", " "), $ = $.replaceAll(/=([0-9a-fA-F]{2})/g, function(j, K) {
                return String.fromCharCode(parseInt(K, 16));
              }), r(L, $);
            try {
              $ = atob($);
            } catch {
            }
            return r(L, $);
          });
        }
        return "";
      }
      var u = t(473);
      function A(m) {
        let {
          getResponseHeader: o,
          isHttp: l,
          rangeChunkSize: c,
          disableRange: r
        } = m;
        const f = {
          allowRangeRequests: !1,
          suggestedLength: void 0
        }, e = parseInt(o("Content-Length"), 10);
        return !Number.isInteger(e) || (f.suggestedLength = e, e <= 2 * c) || r || !l || o("Accept-Ranges") !== "bytes" || (o("Content-Encoding") || "identity") !== "identity" || (f.allowRangeRequests = !0), f;
      }
      function b(m) {
        const o = m("Content-Disposition");
        if (o) {
          let l = g(o);
          if (l.includes("%"))
            try {
              l = decodeURIComponent(l);
            } catch {
            }
          if ((0, u.isPdfFile)(l))
            return l;
        }
        return null;
      }
      function x(m, o) {
        return m === 404 || m === 0 && o.startsWith("file:") ? new s.MissingPDFException('Missing PDF "' + o + '".') : new s.UnexpectedResponseException(`Unexpected server response (${m}) while retrieving PDF "${o}".`, m);
      }
      function p(m) {
        return m === 200 || m === 206;
      }
    })
  ),
  /***/
  3498: (
    /***/
    ((w, D, t) => {
      t.a(w, async (s, g) => {
        try {
          let L = function(ht) {
            const _ = E.parse(ht);
            return _.protocol === "file:" || _.host ? _ : /^[a-z]:[/\\]/i.test(ht) ? E.parse(`file:///${ht}`) : (_.host || (_.protocol = "file:"), _);
          }, K = function(ht, _) {
            return {
              protocol: ht.protocol,
              auth: ht.auth,
              host: ht.hostname,
              port: ht.port,
              path: ht.path,
              method: "GET",
              headers: _
            };
          };
          t.d(D, {
            /* harmony export */
            PDFNodeStream: () => (
              /* binding */
              M
            )
            /* harmony export */
          });
          var u = t(4226), A = t(8837), b = t(9803), x = t(8347), p = t(7995), m = t(62), o = t(4602), l = t(344), c = t(4305), r = t(7583), f = t(3266), e = t(8253);
          let i, y, T, E;
          f.isNodeJS && (i = await import(
            /* webpackIgnore: true */
            "./__vite-browser-external-DYxpcVy9.js"
          ), y = await import(
            /* webpackIgnore: true */
            "./__vite-browser-external-DYxpcVy9.js"
          ), T = await import(
            /* webpackIgnore: true */
            "./__vite-browser-external-DYxpcVy9.js"
          ), E = await import(
            /* webpackIgnore: true */
            "./__vite-browser-external-DYxpcVy9.js"
          ));
          const R = /^file:\/\/\/[a-zA-Z]:\//;
          class M {
            constructor(_) {
              this.source = _, this.url = L(_.url), this.isHttp = this.url.protocol === "http:" || this.url.protocol === "https:", this.isFsUrl = this.url.protocol === "file:", this.httpHeaders = this.isHttp && _.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = [];
            }
            get _progressiveDataLength() {
              return this._fullRequestReader?._loaded ?? 0;
            }
            getFullReader() {
              return (0, f.assert)(!this._fullRequestReader, "PDFNodeStream.getFullReader can only be called once."), this._fullRequestReader = this.isFsUrl ? new at(this) : new Q(this), this._fullRequestReader;
            }
            getRangeReader(_, Z) {
              if (Z <= this._progressiveDataLength)
                return null;
              const z = this.isFsUrl ? new ut(this, _, Z) : new J(this, _, Z);
              return this._rangeRequestReaders.push(z), z;
            }
            cancelAllRequests(_) {
              this._fullRequestReader?.cancel(_);
              for (const Z of this._rangeRequestReaders.slice(0))
                Z.cancel(_);
            }
          }
          class $ {
            constructor(_) {
              this._url = _.url, this._done = !1, this._storedError = null, this.onProgress = null;
              const Z = _.source;
              this._contentLength = Z.length, this._loaded = 0, this._filename = null, this._disableRange = Z.disableRange || !1, this._rangeChunkSize = Z.rangeChunkSize, !this._rangeChunkSize && !this._disableRange && (this._disableRange = !0), this._isStreamingSupported = !Z.disableStream, this._isRangeSupported = !Z.disableRange, this._readableStream = null, this._readCapability = new f.PromiseCapability(), this._headersCapability = new f.PromiseCapability();
            }
            get headersReady() {
              return this._headersCapability.promise;
            }
            get filename() {
              return this._filename;
            }
            get contentLength() {
              return this._contentLength;
            }
            get isRangeSupported() {
              return this._isRangeSupported;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              if (await this._readCapability.promise, this._done)
                return {
                  value: void 0,
                  done: !0
                };
              if (this._storedError)
                throw this._storedError;
              const _ = this._readableStream.read();
              return _ === null ? (this._readCapability = new f.PromiseCapability(), this.read()) : (this._loaded += _.length, this.onProgress?.({
                loaded: this._loaded,
                total: this._contentLength
              }), {
                value: new Uint8Array(_).buffer,
                done: !1
              });
            }
            cancel(_) {
              if (!this._readableStream) {
                this._error(_);
                return;
              }
              this._readableStream.destroy(_);
            }
            _error(_) {
              this._storedError = _, this._readCapability.resolve();
            }
            _setReadableStream(_) {
              this._readableStream = _, _.on("readable", () => {
                this._readCapability.resolve();
              }), _.on("end", () => {
                _.destroy(), this._done = !0, this._readCapability.resolve();
              }), _.on("error", (Z) => {
                this._error(Z);
              }), !this._isStreamingSupported && this._isRangeSupported && this._error(new f.AbortException("streaming is disabled")), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          class j {
            constructor(_) {
              this._url = _.url, this._done = !1, this._storedError = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = new f.PromiseCapability();
              const Z = _.source;
              this._isStreamingSupported = !Z.disableStream;
            }
            get isStreamingSupported() {
              return this._isStreamingSupported;
            }
            async read() {
              if (await this._readCapability.promise, this._done)
                return {
                  value: void 0,
                  done: !0
                };
              if (this._storedError)
                throw this._storedError;
              const _ = this._readableStream.read();
              return _ === null ? (this._readCapability = new f.PromiseCapability(), this.read()) : (this._loaded += _.length, this.onProgress?.({
                loaded: this._loaded
              }), {
                value: new Uint8Array(_).buffer,
                done: !1
              });
            }
            cancel(_) {
              if (!this._readableStream) {
                this._error(_);
                return;
              }
              this._readableStream.destroy(_);
            }
            _error(_) {
              this._storedError = _, this._readCapability.resolve();
            }
            _setReadableStream(_) {
              this._readableStream = _, _.on("readable", () => {
                this._readCapability.resolve();
              }), _.on("end", () => {
                _.destroy(), this._done = !0, this._readCapability.resolve();
              }), _.on("error", (Z) => {
                this._error(Z);
              }), this._storedError && this._readableStream.destroy(this._storedError);
            }
          }
          class Q extends $ {
            constructor(_) {
              super(_);
              const Z = (z) => {
                if (z.statusCode === 404) {
                  const lt = new f.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = lt, this._headersCapability.reject(lt);
                  return;
                }
                this._headersCapability.resolve(), this._setReadableStream(z);
                const V = (lt) => this._readableStream.headers[lt.toLowerCase()], {
                  allowRangeRequests: nt,
                  suggestedLength: ot
                } = (0, e.validateRangeRequestCapabilities)({
                  getResponseHeader: V,
                  isHttp: _.isHttp,
                  rangeChunkSize: this._rangeChunkSize,
                  disableRange: this._disableRange
                });
                this._isRangeSupported = nt, this._contentLength = ot || this._contentLength, this._filename = (0, e.extractFilenameFromHeader)(V);
              };
              this._request = null, this._url.protocol === "http:" ? this._request = y.request(K(this._url, _.httpHeaders), Z) : this._request = T.request(K(this._url, _.httpHeaders), Z), this._request.on("error", (z) => {
                this._storedError = z, this._headersCapability.reject(z);
              }), this._request.end();
            }
          }
          class J extends j {
            constructor(_, Z, z) {
              super(_), this._httpHeaders = {};
              for (const nt in _.httpHeaders) {
                const ot = _.httpHeaders[nt];
                ot !== void 0 && (this._httpHeaders[nt] = ot);
              }
              this._httpHeaders.Range = `bytes=${Z}-${z - 1}`;
              const V = (nt) => {
                if (nt.statusCode === 404) {
                  const ot = new f.MissingPDFException(`Missing PDF "${this._url}".`);
                  this._storedError = ot;
                  return;
                }
                this._setReadableStream(nt);
              };
              this._request = null, this._url.protocol === "http:" ? this._request = y.request(K(this._url, this._httpHeaders), V) : this._request = T.request(K(this._url, this._httpHeaders), V), this._request.on("error", (nt) => {
                this._storedError = nt;
              }), this._request.end();
            }
          }
          class at extends $ {
            constructor(_) {
              super(_);
              let Z = decodeURIComponent(this._url.path);
              R.test(this._url.href) && (Z = Z.replace(/^\//, "")), i.lstat(Z, (z, V) => {
                if (z) {
                  z.code === "ENOENT" && (z = new f.MissingPDFException(`Missing PDF "${Z}".`)), this._storedError = z, this._headersCapability.reject(z);
                  return;
                }
                this._contentLength = V.size, this._setReadableStream(i.createReadStream(Z)), this._headersCapability.resolve();
              });
            }
          }
          class ut extends j {
            constructor(_, Z, z) {
              super(_);
              let V = decodeURIComponent(this._url.path);
              R.test(this._url.href) && (V = V.replace(/^\//, "")), this._setReadableStream(i.createReadStream(V, {
                start: Z,
                end: z - 1
              }));
            }
          }
          g();
        } catch (i) {
          g(i);
        }
      }, 1);
    })
  ),
  /***/
  7738: (
    /***/
    ((w, D, t) => {
      t.a(w, async (s, g) => {
        try {
          t.d(D, {
            /* harmony export */
            NodeCMapReaderFactory: () => (
              /* binding */
              M
            ),
            /* harmony export */
            NodeCanvasFactory: () => (
              /* binding */
              L
            ),
            /* harmony export */
            NodeFilterFactory: () => (
              /* binding */
              R
            ),
            /* harmony export */
            NodeStandardFontDataFactory: () => (
              /* binding */
              $
            )
            /* harmony export */
          });
          var u = t(3352), A = t(8837), b = t(9803), x = t(8347), p = t(7995), m = t(62), o = t(4602), l = t(344), c = t(4305), r = t(7583), f = t(6822), e = t(3266);
          let i, y, T;
          if (e.isNodeJS) {
            i = await import(
              /* webpackIgnore: true */
              "./__vite-browser-external-DYxpcVy9.js"
            );
            try {
              y = await import(
                /* webpackIgnore: true */
                "./__vite-browser-external-DYxpcVy9.js"
              );
            } catch {
            }
            try {
              T = await import(
                /* webpackIgnore: true */
                "./path2d-polyfill.esm-Blr_52vv.js"
              );
            } catch {
            }
          }
          (function() {
            if (globalThis.DOMMatrix || !e.isNodeJS)
              return;
            const K = y?.DOMMatrix;
            K ? globalThis.DOMMatrix = K : (0, e.warn)("Cannot polyfill `DOMMatrix`, rendering may be broken.");
          })(), (function() {
            if (globalThis.Path2D || !e.isNodeJS)
              return;
            const K = y?.CanvasRenderingContext2D, Q = T?.polyfillPath2D;
            K && Q ? (globalThis.CanvasRenderingContext2D = K, Q(globalThis)) : (0, e.warn)("Cannot polyfill `Path2D`, rendering may be broken.");
          })();
          const E = function(j) {
            return new Promise((K, Q) => {
              i.readFile(j, (J, at) => {
                if (J || !at) {
                  Q(new Error(J));
                  return;
                }
                K(new Uint8Array(at));
              });
            });
          };
          class R extends f.BaseFilterFactory {
          }
          class L extends f.BaseCanvasFactory {
            _createCanvas(K, Q) {
              return y.createCanvas(K, Q);
            }
          }
          class M extends f.BaseCMapReaderFactory {
            _fetchData(K, Q) {
              return E(K).then((J) => ({
                cMapData: J,
                compressionType: Q
              }));
            }
          }
          class $ extends f.BaseStandardFontDataFactory {
            _fetchData(K) {
              return E(K);
            }
          }
          g();
        } catch (i) {
          g(i);
        }
      }, 1);
    })
  ),
  /***/
  3890: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        OptionalContentConfig: () => (
          /* binding */
          b
        )
        /* harmony export */
      });
      var s = t(3266), g = t(2825);
      const u = Symbol("INTERNAL");
      class A {
        #t = !0;
        constructor(p, m) {
          this.name = p, this.intent = m;
        }
        get visible() {
          return this.#t;
        }
        _setVisible(p, m) {
          p !== u && (0, s.unreachable)("Internal method `_setVisible` called."), this.#t = m;
        }
      }
      class b {
        #t = null;
        #e = /* @__PURE__ */ new Map();
        #n = null;
        #s = null;
        constructor(p) {
          if (this.name = null, this.creator = null, p !== null) {
            this.name = p.name, this.creator = p.creator, this.#s = p.order;
            for (const m of p.groups)
              this.#e.set(m.id, new A(m.name, m.intent));
            if (p.baseState === "OFF")
              for (const m of this.#e.values())
                m._setVisible(u, !1);
            for (const m of p.on)
              this.#e.get(m)._setVisible(u, !0);
            for (const m of p.off)
              this.#e.get(m)._setVisible(u, !1);
            this.#n = this.getHash();
          }
        }
        #r(p) {
          const m = p.length;
          if (m < 2)
            return !0;
          const o = p[0];
          for (let l = 1; l < m; l++) {
            const c = p[l];
            let r;
            if (Array.isArray(c))
              r = this.#r(c);
            else if (this.#e.has(c))
              r = this.#e.get(c).visible;
            else
              return (0, s.warn)(`Optional content group not found: ${c}`), !0;
            switch (o) {
              case "And":
                if (!r)
                  return !1;
                break;
              case "Or":
                if (r)
                  return !0;
                break;
              case "Not":
                return !r;
              default:
                return !0;
            }
          }
          return o === "And";
        }
        isVisible(p) {
          if (this.#e.size === 0)
            return !0;
          if (!p)
            return (0, s.warn)("Optional content group not defined."), !0;
          if (p.type === "OCG")
            return this.#e.has(p.id) ? this.#e.get(p.id).visible : ((0, s.warn)(`Optional content group not found: ${p.id}`), !0);
          if (p.type === "OCMD") {
            if (p.expression)
              return this.#r(p.expression);
            if (!p.policy || p.policy === "AnyOn") {
              for (const m of p.ids) {
                if (!this.#e.has(m))
                  return (0, s.warn)(`Optional content group not found: ${m}`), !0;
                if (this.#e.get(m).visible)
                  return !0;
              }
              return !1;
            } else if (p.policy === "AllOn") {
              for (const m of p.ids) {
                if (!this.#e.has(m))
                  return (0, s.warn)(`Optional content group not found: ${m}`), !0;
                if (!this.#e.get(m).visible)
                  return !1;
              }
              return !0;
            } else if (p.policy === "AnyOff") {
              for (const m of p.ids) {
                if (!this.#e.has(m))
                  return (0, s.warn)(`Optional content group not found: ${m}`), !0;
                if (!this.#e.get(m).visible)
                  return !0;
              }
              return !1;
            } else if (p.policy === "AllOff") {
              for (const m of p.ids) {
                if (!this.#e.has(m))
                  return (0, s.warn)(`Optional content group not found: ${m}`), !0;
                if (this.#e.get(m).visible)
                  return !1;
              }
              return !0;
            }
            return (0, s.warn)(`Unknown optional content policy ${p.policy}.`), !0;
          }
          return (0, s.warn)(`Unknown group type ${p.type}.`), !0;
        }
        setVisibility(p) {
          let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
          if (!this.#e.has(p)) {
            (0, s.warn)(`Optional content group not found: ${p}`);
            return;
          }
          this.#e.get(p)._setVisible(u, !!m), this.#t = null;
        }
        get hasInitialVisibility() {
          return this.#n === null || this.getHash() === this.#n;
        }
        getOrder() {
          return this.#e.size ? this.#s ? this.#s.slice() : [...this.#e.keys()] : null;
        }
        getGroups() {
          return this.#e.size > 0 ? (0, s.objectFromMap)(this.#e) : null;
        }
        getGroup(p) {
          return this.#e.get(p) || null;
        }
        getHash() {
          if (this.#t !== null)
            return this.#t;
          const p = new g.MurmurHash3_64();
          for (const [m, o] of this.#e)
            p.update(`${m}:${o.visible}`);
          return this.#t = p.hexdigest();
        }
      }
    })
  ),
  /***/
  5739: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        renderTextLayer: () => (
          /* binding */
          f
        ),
        /* harmony export */
        updateTextLayer: () => (
          /* binding */
          e
        )
        /* harmony export */
      }), t(4226), t(3352);
      var s = t(3266), g = t(473);
      const u = 1e5, A = 30, b = 0.8, x = /* @__PURE__ */ new Map();
      function p(i, y) {
        let T;
        if (y && s.FeatureTest.isOffscreenCanvasSupported)
          T = new OffscreenCanvas(i, i).getContext("2d", {
            alpha: !1
          });
        else {
          const E = document.createElement("canvas");
          E.width = E.height = i, T = E.getContext("2d", {
            alpha: !1
          });
        }
        return T;
      }
      function m(i, y) {
        const T = x.get(i);
        if (T)
          return T;
        const E = p(A, y);
        E.font = `${A}px ${i}`;
        const R = E.measureText("");
        let L = R.fontBoundingBoxAscent, M = Math.abs(R.fontBoundingBoxDescent);
        if (L) {
          const j = L / (L + M);
          return x.set(i, j), E.canvas.width = E.canvas.height = 0, j;
        }
        E.strokeStyle = "red", E.clearRect(0, 0, A, A), E.strokeText("g", 0, 0);
        let $ = E.getImageData(0, 0, A, A).data;
        M = 0;
        for (let j = $.length - 1 - 3; j >= 0; j -= 4)
          if ($[j] > 0) {
            M = Math.ceil(j / 4 / A);
            break;
          }
        E.clearRect(0, 0, A, A), E.strokeText("A", 0, A), $ = E.getImageData(0, 0, A, A).data, L = 0;
        for (let j = 0, K = $.length; j < K; j += 4)
          if ($[j] > 0) {
            L = A - Math.floor(j / 4 / A);
            break;
          }
        if (E.canvas.width = E.canvas.height = 0, L) {
          const j = L / (L + M);
          return x.set(i, j), j;
        }
        return x.set(i, b), b;
      }
      function o(i, y, T) {
        const E = document.createElement("span"), R = {
          angle: 0,
          canvasWidth: 0,
          hasText: y.str !== "",
          hasEOL: y.hasEOL,
          fontSize: 0
        };
        i._textDivs.push(E);
        const L = s.Util.transform(i._transform, y.transform);
        let M = Math.atan2(L[1], L[0]);
        const $ = T[y.fontName];
        $.vertical && (M += Math.PI / 2);
        const j = i._fontInspectorEnabled && $.fontSubstitution || $.fontFamily, K = Math.hypot(L[2], L[3]), Q = K * m(j, i._isOffscreenCanvasSupported);
        let J, at;
        M === 0 ? (J = L[4], at = L[5] - Q) : (J = L[4] + Q * Math.sin(M), at = L[5] - Q * Math.cos(M));
        const ut = "calc(var(--scale-factor)*", ht = E.style;
        i._container === i._rootContainer ? (ht.left = `${(100 * J / i._pageWidth).toFixed(2)}%`, ht.top = `${(100 * at / i._pageHeight).toFixed(2)}%`) : (ht.left = `${ut}${J.toFixed(2)}px)`, ht.top = `${ut}${at.toFixed(2)}px)`), ht.fontSize = `${ut}${K.toFixed(2)}px)`, ht.fontFamily = j, R.fontSize = K, E.setAttribute("role", "presentation"), E.textContent = y.str, E.dir = y.dir, i._fontInspectorEnabled && (E.dataset.fontName = $.fontSubstitutionLoadedName || y.fontName), M !== 0 && (R.angle = M * (180 / Math.PI));
        let _ = !1;
        if (y.str.length > 1)
          _ = !0;
        else if (y.str !== " " && y.transform[0] !== y.transform[3]) {
          const Z = Math.abs(y.transform[0]), z = Math.abs(y.transform[3]);
          Z !== z && Math.max(Z, z) / Math.min(Z, z) > 1.5 && (_ = !0);
        }
        _ && (R.canvasWidth = $.vertical ? y.height : y.width), i._textDivProperties.set(E, R), i._isReadableStream && i._layoutText(E);
      }
      function l(i) {
        const {
          div: y,
          scale: T,
          properties: E,
          ctx: R,
          prevFontSize: L,
          prevFontFamily: M
        } = i, {
          style: $
        } = y;
        let j = "";
        if (E.canvasWidth !== 0 && E.hasText) {
          const {
            fontFamily: K
          } = $, {
            canvasWidth: Q,
            fontSize: J
          } = E;
          (L !== J || M !== K) && (R.font = `${J * T}px ${K}`, i.prevFontSize = J, i.prevFontFamily = K);
          const {
            width: at
          } = R.measureText(y.textContent);
          at > 0 && (j = `scaleX(${Q * T / at})`);
        }
        E.angle !== 0 && (j = `rotate(${E.angle}deg) ${j}`), j.length > 0 && ($.transform = j);
      }
      function c(i) {
        if (i._canceled)
          return;
        const y = i._textDivs, T = i._capability;
        if (y.length > u) {
          T.resolve();
          return;
        }
        if (!i._isReadableStream)
          for (const R of y)
            i._layoutText(R);
        T.resolve();
      }
      class r {
        constructor(y) {
          let {
            textContentSource: T,
            container: E,
            viewport: R,
            textDivs: L,
            textDivProperties: M,
            textContentItemsStr: $,
            isOffscreenCanvasSupported: j
          } = y;
          this._textContentSource = T, this._isReadableStream = T instanceof ReadableStream, this._container = this._rootContainer = E, this._textDivs = L || [], this._textContentItemsStr = $ || [], this._isOffscreenCanvasSupported = j, this._fontInspectorEnabled = !!globalThis.FontInspector?.enabled, this._reader = null, this._textDivProperties = M || /* @__PURE__ */ new WeakMap(), this._canceled = !1, this._capability = new s.PromiseCapability(), this._layoutTextParams = {
            prevFontSize: null,
            prevFontFamily: null,
            div: null,
            scale: R.scale * (globalThis.devicePixelRatio || 1),
            properties: null,
            ctx: p(0, j)
          };
          const {
            pageWidth: K,
            pageHeight: Q,
            pageX: J,
            pageY: at
          } = R.rawDims;
          this._transform = [1, 0, 0, -1, -J, at + Q], this._pageWidth = K, this._pageHeight = Q, (0, g.setLayerDimensions)(E, R), this._capability.promise.finally(() => {
            this._layoutTextParams = null;
          }).catch(() => {
          });
        }
        get promise() {
          return this._capability.promise;
        }
        cancel() {
          this._canceled = !0, this._reader && (this._reader.cancel(new s.AbortException("TextLayer task cancelled.")).catch(() => {
          }), this._reader = null), this._capability.reject(new s.AbortException("TextLayer task cancelled."));
        }
        _processItems(y, T) {
          for (const E of y) {
            if (E.str === void 0) {
              if (E.type === "beginMarkedContentProps" || E.type === "beginMarkedContent") {
                const R = this._container;
                this._container = document.createElement("span"), this._container.classList.add("markedContent"), E.id !== null && this._container.setAttribute("id", `${E.id}`), R.append(this._container);
              } else E.type === "endMarkedContent" && (this._container = this._container.parentNode);
              continue;
            }
            this._textContentItemsStr.push(E.str), o(this, E, T);
          }
        }
        _layoutText(y) {
          const T = this._layoutTextParams.properties = this._textDivProperties.get(y);
          if (this._layoutTextParams.div = y, l(this._layoutTextParams), T.hasText && this._container.append(y), T.hasEOL) {
            const E = document.createElement("br");
            E.setAttribute("role", "presentation"), this._container.append(E);
          }
        }
        _render() {
          const y = new s.PromiseCapability();
          let T = /* @__PURE__ */ Object.create(null);
          if (this._isReadableStream) {
            const E = () => {
              this._reader.read().then((R) => {
                let {
                  value: L,
                  done: M
                } = R;
                if (M) {
                  y.resolve();
                  return;
                }
                Object.assign(T, L.styles), this._processItems(L.items, T), E();
              }, y.reject);
            };
            this._reader = this._textContentSource.getReader(), E();
          } else if (this._textContentSource) {
            const {
              items: E,
              styles: R
            } = this._textContentSource;
            this._processItems(E, R), y.resolve();
          } else
            throw new Error('No "textContentSource" parameter specified.');
          y.promise.then(() => {
            T = null, c(this);
          }, this._capability.reject);
        }
      }
      function f(i) {
        const y = new r(i);
        return y._render(), y;
      }
      function e(i) {
        let {
          container: y,
          viewport: T,
          textDivs: E,
          textDivProperties: R,
          isOffscreenCanvasSupported: L,
          mustRotate: M = !0,
          mustRescale: $ = !0
        } = i;
        if (M && (0, g.setLayerDimensions)(y, {
          rotation: T.rotation
        }), $) {
          const j = p(0, L), Q = {
            prevFontSize: null,
            prevFontFamily: null,
            div: null,
            scale: T.scale * (globalThis.devicePixelRatio || 1),
            properties: null,
            ctx: j
          };
          for (const J of E)
            Q.properties = R.get(J), Q.div = J, l(Q);
        }
      }
    })
  ),
  /***/
  4092: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        PDFDataTransportStream: () => (
          /* binding */
          u
        )
        /* harmony export */
      }), t(8837), t(9803), t(8347), t(7995), t(62), t(4602), t(344), t(4305), t(7583), t(4226), t(7121), t(8518);
      var s = t(3266), g = t(473);
      class u {
        constructor(p, m) {
          let {
            length: o,
            initialData: l,
            progressiveDone: c = !1,
            contentDispositionFilename: r = null,
            disableRange: f = !1,
            disableStream: e = !1
          } = p;
          if ((0, s.assert)(m, 'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.'), this._queuedChunks = [], this._progressiveDone = c, this._contentDispositionFilename = r, l?.length > 0) {
            const i = l instanceof Uint8Array && l.byteLength === l.buffer.byteLength ? l.buffer : new Uint8Array(l).buffer;
            this._queuedChunks.push(i);
          }
          this._pdfDataRangeTransport = m, this._isStreamingSupported = !e, this._isRangeSupported = !f, this._contentLength = o, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener((i, y) => {
            this._onReceiveData({
              begin: i,
              chunk: y
            });
          }), this._pdfDataRangeTransport.addProgressListener((i, y) => {
            this._onProgress({
              loaded: i,
              total: y
            });
          }), this._pdfDataRangeTransport.addProgressiveReadListener((i) => {
            this._onReceiveData({
              chunk: i
            });
          }), this._pdfDataRangeTransport.addProgressiveDoneListener(() => {
            this._onProgressiveDone();
          }), this._pdfDataRangeTransport.transportReady();
        }
        _onReceiveData(p) {
          let {
            begin: m,
            chunk: o
          } = p;
          const l = o instanceof Uint8Array && o.byteLength === o.buffer.byteLength ? o.buffer : new Uint8Array(o).buffer;
          if (m === void 0)
            this._fullRequestReader ? this._fullRequestReader._enqueue(l) : this._queuedChunks.push(l);
          else {
            const c = this._rangeReaders.some(function(r) {
              return r._begin !== m ? !1 : (r._enqueue(l), !0);
            });
            (0, s.assert)(c, "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.");
          }
        }
        get _progressiveDataLength() {
          return this._fullRequestReader?._loaded ?? 0;
        }
        _onProgress(p) {
          p.total === void 0 ? this._rangeReaders[0]?.onProgress?.({
            loaded: p.loaded
          }) : this._fullRequestReader?.onProgress?.({
            loaded: p.loaded,
            total: p.total
          });
        }
        _onProgressiveDone() {
          this._fullRequestReader?.progressiveDone(), this._progressiveDone = !0;
        }
        _removeRangeReader(p) {
          const m = this._rangeReaders.indexOf(p);
          m >= 0 && this._rangeReaders.splice(m, 1);
        }
        getFullReader() {
          (0, s.assert)(!this._fullRequestReader, "PDFDataTransportStream.getFullReader can only be called once.");
          const p = this._queuedChunks;
          return this._queuedChunks = null, new A(this, p, this._progressiveDone, this._contentDispositionFilename);
        }
        getRangeReader(p, m) {
          if (m <= this._progressiveDataLength)
            return null;
          const o = new b(this, p, m);
          return this._pdfDataRangeTransport.requestDataRange(p, m), this._rangeReaders.push(o), o;
        }
        cancelAllRequests(p) {
          this._fullRequestReader?.cancel(p);
          for (const m of this._rangeReaders.slice(0))
            m.cancel(p);
          this._pdfDataRangeTransport.abort();
        }
      }
      class A {
        constructor(p, m) {
          let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
          this._stream = p, this._done = o || !1, this._filename = (0, g.isPdfFile)(l) ? l : null, this._queuedChunks = m || [], this._loaded = 0;
          for (const c of this._queuedChunks)
            this._loaded += c.byteLength;
          this._requests = [], this._headersReady = Promise.resolve(), p._fullRequestReader = this, this.onProgress = null;
        }
        _enqueue(p) {
          this._done || (this._requests.length > 0 ? this._requests.shift().resolve({
            value: p,
            done: !1
          }) : this._queuedChunks.push(p), this._loaded += p.byteLength);
        }
        get headersReady() {
          return this._headersReady;
        }
        get filename() {
          return this._filename;
        }
        get isRangeSupported() {
          return this._stream._isRangeSupported;
        }
        get isStreamingSupported() {
          return this._stream._isStreamingSupported;
        }
        get contentLength() {
          return this._stream._contentLength;
        }
        async read() {
          if (this._queuedChunks.length > 0)
            return {
              value: this._queuedChunks.shift(),
              done: !1
            };
          if (this._done)
            return {
              value: void 0,
              done: !0
            };
          const p = new s.PromiseCapability();
          return this._requests.push(p), p.promise;
        }
        cancel(p) {
          this._done = !0;
          for (const m of this._requests)
            m.resolve({
              value: void 0,
              done: !0
            });
          this._requests.length = 0;
        }
        progressiveDone() {
          this._done || (this._done = !0);
        }
      }
      class b {
        constructor(p, m, o) {
          this._stream = p, this._begin = m, this._end = o, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null;
        }
        _enqueue(p) {
          if (!this._done) {
            if (this._requests.length === 0)
              this._queuedChunk = p;
            else {
              this._requests.shift().resolve({
                value: p,
                done: !1
              });
              for (const o of this._requests)
                o.resolve({
                  value: void 0,
                  done: !0
                });
              this._requests.length = 0;
            }
            this._done = !0, this._stream._removeRangeReader(this);
          }
        }
        get isStreamingSupported() {
          return !1;
        }
        async read() {
          if (this._queuedChunk) {
            const m = this._queuedChunk;
            return this._queuedChunk = null, {
              value: m,
              done: !1
            };
          }
          if (this._done)
            return {
              value: void 0,
              done: !0
            };
          const p = new s.PromiseCapability();
          return this._requests.push(p), p.promise;
        }
        cancel(p) {
          this._done = !0;
          for (const m of this._requests)
            m.resolve({
              value: void 0,
              done: !0
            });
          this._requests.length = 0, this._stream._removeRangeReader(this);
        }
      }
    })
  ),
  /***/
  1368: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        GlobalWorkerOptions: () => (
          /* binding */
          s
        )
        /* harmony export */
      });
      const s = /* @__PURE__ */ Object.create(null);
      s.workerPort = null, s.workerSrc = "";
    })
  ),
  /***/
  8266: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        XfaLayer: () => (
          /* binding */
          g
        )
        /* harmony export */
      }), t(4226);
      var s = t(1521);
      class g {
        static setupStorage(A, b, x, p, m) {
          const o = p.getValue(b, {
            value: null
          });
          switch (x.name) {
            case "textarea":
              if (o.value !== null && (A.textContent = o.value), m === "print")
                break;
              A.addEventListener("input", (l) => {
                p.setValue(b, {
                  value: l.target.value
                });
              });
              break;
            case "input":
              if (x.attributes.type === "radio" || x.attributes.type === "checkbox") {
                if (o.value === x.attributes.xfaOn ? A.setAttribute("checked", !0) : o.value === x.attributes.xfaOff && A.removeAttribute("checked"), m === "print")
                  break;
                A.addEventListener("change", (l) => {
                  p.setValue(b, {
                    value: l.target.checked ? l.target.getAttribute("xfaOn") : l.target.getAttribute("xfaOff")
                  });
                });
              } else {
                if (o.value !== null && A.setAttribute("value", o.value), m === "print")
                  break;
                A.addEventListener("input", (l) => {
                  p.setValue(b, {
                    value: l.target.value
                  });
                });
              }
              break;
            case "select":
              if (o.value !== null) {
                A.setAttribute("value", o.value);
                for (const l of x.children)
                  l.attributes.value === o.value ? l.attributes.selected = !0 : l.attributes.hasOwnProperty("selected") && delete l.attributes.selected;
              }
              A.addEventListener("input", (l) => {
                const c = l.target.options, r = c.selectedIndex === -1 ? "" : c[c.selectedIndex].value;
                p.setValue(b, {
                  value: r
                });
              });
              break;
          }
        }
        static setAttributes(A) {
          let {
            html: b,
            element: x,
            storage: p = null,
            intent: m,
            linkService: o
          } = A;
          const {
            attributes: l
          } = x, c = b instanceof HTMLAnchorElement;
          l.type === "radio" && (l.name = `${l.name}-${m}`);
          for (const [r, f] of Object.entries(l))
            if (f != null)
              switch (r) {
                case "class":
                  f.length && b.setAttribute(r, f.join(" "));
                  break;
                case "dataId":
                  break;
                case "id":
                  b.setAttribute("data-element-id", f);
                  break;
                case "style":
                  Object.assign(b.style, f);
                  break;
                case "textContent":
                  b.textContent = f;
                  break;
                default:
                  (!c || r !== "href" && r !== "newWindow") && b.setAttribute(r, f);
              }
          c && o.addLinkAttributes(b, l.href, l.newWindow), p && l.dataId && this.setupStorage(b, l.dataId, x, p);
        }
        static render(A) {
          const b = A.annotationStorage, x = A.linkService, p = A.xfaHtml, m = A.intent || "display", o = document.createElement(p.name);
          p.attributes && this.setAttributes({
            html: o,
            element: p,
            intent: m,
            linkService: x
          });
          const l = m !== "richText", c = A.div;
          if (c.append(o), A.viewport) {
            const e = `matrix(${A.viewport.transform.join(",")})`;
            c.style.transform = e;
          }
          l && c.setAttribute("class", "xfaLayer xfaFont");
          const r = [];
          if (p.children.length === 0) {
            if (p.value) {
              const e = document.createTextNode(p.value);
              o.append(e), l && s.XfaText.shouldBuildText(p.name) && r.push(e);
            }
            return {
              textDivs: r
            };
          }
          const f = [[p, -1, o]];
          for (; f.length > 0; ) {
            const [e, i, y] = f.at(-1);
            if (i + 1 === e.children.length) {
              f.pop();
              continue;
            }
            const T = e.children[++f.at(-1)[1]];
            if (T === null)
              continue;
            const {
              name: E
            } = T;
            if (E === "#text") {
              const L = document.createTextNode(T.value);
              r.push(L), y.append(L);
              continue;
            }
            const R = T?.attributes?.xmlns ? document.createElementNS(T.attributes.xmlns, E) : document.createElement(E);
            if (y.append(R), T.attributes && this.setAttributes({
              html: R,
              element: T,
              storage: b,
              intent: m,
              linkService: x
            }), T.children?.length > 0)
              f.push([T, -1, R]);
            else if (T.value) {
              const L = document.createTextNode(T.value);
              l && s.XfaText.shouldBuildText(E) && r.push(L), R.append(L);
            }
          }
          for (const e of c.querySelectorAll(".xfaNonInteractive input, .xfaNonInteractive textarea"))
            e.setAttribute("readOnly", !0);
          return {
            textDivs: r
          };
        }
        static update(A) {
          const b = `matrix(${A.viewport.transform.join(",")})`;
          A.div.style.transform = b, A.div.hidden = !1;
        }
      }
    })
  ),
  /***/
  1521: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        XfaText: () => (
          /* binding */
          s
        )
        /* harmony export */
      }), t(4226);
      class s {
        static textContent(u) {
          const A = [], b = {
            items: A,
            styles: /* @__PURE__ */ Object.create(null)
          };
          function x(p) {
            if (!p)
              return;
            let m = null;
            const o = p.name;
            if (o === "#text")
              m = p.value;
            else if (s.shouldBuildText(o))
              p?.attributes?.textContent ? m = p.attributes.textContent : p.value && (m = p.value);
            else return;
            if (m !== null && A.push({
              str: m
            }), !!p.children)
              for (const l of p.children)
                x(l);
          }
          return x(u), b;
        }
        static shouldBuildText(u) {
          return !(u === "textarea" || u === "input" || u === "option" || u === "select");
        }
      }
    })
  ),
  /***/
  9907: (
    /***/
    ((w, D, t) => {
      t.a(w, async (s, g) => {
        try {
          t.d(D, {
            /* harmony export */
            AbortException: () => (
              /* reexport safe */
              u.AbortException
            ),
            /* harmony export */
            AnnotationEditorLayer: () => (
              /* reexport safe */
              p.AnnotationEditorLayer
            ),
            /* harmony export */
            AnnotationEditorParamsType: () => (
              /* reexport safe */
              u.AnnotationEditorParamsType
            ),
            /* harmony export */
            AnnotationEditorType: () => (
              /* reexport safe */
              u.AnnotationEditorType
            ),
            /* harmony export */
            AnnotationEditorUIManager: () => (
              /* reexport safe */
              m.AnnotationEditorUIManager
            ),
            /* harmony export */
            AnnotationLayer: () => (
              /* reexport safe */
              o.AnnotationLayer
            ),
            /* harmony export */
            AnnotationMode: () => (
              /* reexport safe */
              u.AnnotationMode
            ),
            /* harmony export */
            CMapCompressionType: () => (
              /* reexport safe */
              u.CMapCompressionType
            ),
            /* harmony export */
            ColorPicker: () => (
              /* reexport safe */
              l.ColorPicker
            ),
            /* harmony export */
            DOMSVGFactory: () => (
              /* reexport safe */
              b.DOMSVGFactory
            ),
            /* harmony export */
            DrawLayer: () => (
              /* reexport safe */
              c.DrawLayer
            ),
            /* harmony export */
            FeatureTest: () => (
              /* reexport safe */
              u.FeatureTest
            ),
            /* harmony export */
            GlobalWorkerOptions: () => (
              /* reexport safe */
              r.GlobalWorkerOptions
            ),
            /* harmony export */
            ImageKind: () => (
              /* reexport safe */
              u.ImageKind
            ),
            /* harmony export */
            InvalidPDFException: () => (
              /* reexport safe */
              u.InvalidPDFException
            ),
            /* harmony export */
            MissingPDFException: () => (
              /* reexport safe */
              u.MissingPDFException
            ),
            /* harmony export */
            OPS: () => (
              /* reexport safe */
              u.OPS
            ),
            /* harmony export */
            Outliner: () => (
              /* reexport safe */
              f.Outliner
            ),
            /* harmony export */
            PDFDataRangeTransport: () => (
              /* reexport safe */
              A.PDFDataRangeTransport
            ),
            /* harmony export */
            PDFDateString: () => (
              /* reexport safe */
              b.PDFDateString
            ),
            /* harmony export */
            PDFWorker: () => (
              /* reexport safe */
              A.PDFWorker
            ),
            /* harmony export */
            PasswordResponses: () => (
              /* reexport safe */
              u.PasswordResponses
            ),
            /* harmony export */
            PermissionFlag: () => (
              /* reexport safe */
              u.PermissionFlag
            ),
            /* harmony export */
            PixelsPerInch: () => (
              /* reexport safe */
              b.PixelsPerInch
            ),
            /* harmony export */
            PromiseCapability: () => (
              /* reexport safe */
              u.PromiseCapability
            ),
            /* harmony export */
            RenderingCancelledException: () => (
              /* reexport safe */
              b.RenderingCancelledException
            ),
            /* harmony export */
            UnexpectedResponseException: () => (
              /* reexport safe */
              u.UnexpectedResponseException
            ),
            /* harmony export */
            Util: () => (
              /* reexport safe */
              u.Util
            ),
            /* harmony export */
            VerbosityLevel: () => (
              /* reexport safe */
              u.VerbosityLevel
            ),
            /* harmony export */
            XfaLayer: () => (
              /* reexport safe */
              e.XfaLayer
            ),
            /* harmony export */
            build: () => (
              /* reexport safe */
              A.build
            ),
            /* harmony export */
            createValidAbsoluteUrl: () => (
              /* reexport safe */
              u.createValidAbsoluteUrl
            ),
            /* harmony export */
            fetchData: () => (
              /* reexport safe */
              b.fetchData
            ),
            /* harmony export */
            getDocument: () => (
              /* reexport safe */
              A.getDocument
            ),
            /* harmony export */
            getFilenameFromUrl: () => (
              /* reexport safe */
              b.getFilenameFromUrl
            ),
            /* harmony export */
            getPdfFilenameFromUrl: () => (
              /* reexport safe */
              b.getPdfFilenameFromUrl
            ),
            /* harmony export */
            getXfaPageViewport: () => (
              /* reexport safe */
              b.getXfaPageViewport
            ),
            /* harmony export */
            isDataScheme: () => (
              /* reexport safe */
              b.isDataScheme
            ),
            /* harmony export */
            isPdfFile: () => (
              /* reexport safe */
              b.isPdfFile
            ),
            /* harmony export */
            noContextMenu: () => (
              /* reexport safe */
              b.noContextMenu
            ),
            /* harmony export */
            normalizeUnicode: () => (
              /* reexport safe */
              u.normalizeUnicode
            ),
            /* harmony export */
            renderTextLayer: () => (
              /* reexport safe */
              x.renderTextLayer
            ),
            /* harmony export */
            setLayerDimensions: () => (
              /* reexport safe */
              b.setLayerDimensions
            ),
            /* harmony export */
            shadow: () => (
              /* reexport safe */
              u.shadow
            ),
            /* harmony export */
            updateTextLayer: () => (
              /* reexport safe */
              x.updateTextLayer
            ),
            /* harmony export */
            version: () => (
              /* reexport safe */
              A.version
            )
            /* harmony export */
          });
          var u = t(3266), A = t(9406), b = t(473), x = t(5739), p = t(4629), m = t(4812), o = t(7640), l = t(5097), c = t(9423), r = t(1368), f = t(7405), e = t(8266), i = s([A]);
          A = (i.then ? (await i)() : i)[0];
          const y = "4.0.379", T = "9e14d04fd";
          g();
        } catch (y) {
          g(y);
        }
      });
    })
  ),
  /***/
  6694: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        MessageHandler: () => (
          /* binding */
          b
        )
        /* harmony export */
      }), t(3352);
      var s = t(3266);
      const g = {
        DATA: 1,
        ERROR: 2
      }, u = {
        CANCEL: 1,
        CANCEL_COMPLETE: 2,
        CLOSE: 3,
        ENQUEUE: 4,
        ERROR: 5,
        PULL: 6,
        PULL_COMPLETE: 7,
        START_COMPLETE: 8
      };
      function A(x) {
        switch (x instanceof Error || typeof x == "object" && x !== null || (0, s.unreachable)('wrapReason: Expected "reason" to be a (possibly cloned) Error.'), x.name) {
          case "AbortException":
            return new s.AbortException(x.message);
          case "MissingPDFException":
            return new s.MissingPDFException(x.message);
          case "PasswordException":
            return new s.PasswordException(x.message, x.code);
          case "UnexpectedResponseException":
            return new s.UnexpectedResponseException(x.message, x.status);
          case "UnknownErrorException":
            return new s.UnknownErrorException(x.message, x.details);
          default:
            return new s.UnknownErrorException(x.message, x.toString());
        }
      }
      class b {
        constructor(p, m, o) {
          this.sourceName = p, this.targetName = m, this.comObj = o, this.callbackId = 1, this.streamId = 1, this.streamSinks = /* @__PURE__ */ Object.create(null), this.streamControllers = /* @__PURE__ */ Object.create(null), this.callbackCapabilities = /* @__PURE__ */ Object.create(null), this.actionHandler = /* @__PURE__ */ Object.create(null), this._onComObjOnMessage = (l) => {
            const c = l.data;
            if (c.targetName !== this.sourceName)
              return;
            if (c.stream) {
              this.#e(c);
              return;
            }
            if (c.callback) {
              const f = c.callbackId, e = this.callbackCapabilities[f];
              if (!e)
                throw new Error(`Cannot resolve callback ${f}`);
              if (delete this.callbackCapabilities[f], c.callback === g.DATA)
                e.resolve(c.data);
              else if (c.callback === g.ERROR)
                e.reject(A(c.reason));
              else
                throw new Error("Unexpected callback case");
              return;
            }
            const r = this.actionHandler[c.action];
            if (!r)
              throw new Error(`Unknown action from worker: ${c.action}`);
            if (c.callbackId) {
              const f = this.sourceName, e = c.sourceName;
              new Promise(function(i) {
                i(r(c.data));
              }).then(function(i) {
                o.postMessage({
                  sourceName: f,
                  targetName: e,
                  callback: g.DATA,
                  callbackId: c.callbackId,
                  data: i
                });
              }, function(i) {
                o.postMessage({
                  sourceName: f,
                  targetName: e,
                  callback: g.ERROR,
                  callbackId: c.callbackId,
                  reason: A(i)
                });
              });
              return;
            }
            if (c.streamId) {
              this.#t(c);
              return;
            }
            r(c.data);
          }, o.addEventListener("message", this._onComObjOnMessage);
        }
        on(p, m) {
          const o = this.actionHandler;
          if (o[p])
            throw new Error(`There is already an actionName called "${p}"`);
          o[p] = m;
        }
        send(p, m, o) {
          this.comObj.postMessage({
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: p,
            data: m
          }, o);
        }
        sendWithPromise(p, m, o) {
          const l = this.callbackId++, c = new s.PromiseCapability();
          this.callbackCapabilities[l] = c;
          try {
            this.comObj.postMessage({
              sourceName: this.sourceName,
              targetName: this.targetName,
              action: p,
              callbackId: l,
              data: m
            }, o);
          } catch (r) {
            c.reject(r);
          }
          return c.promise;
        }
        sendWithStream(p, m, o, l) {
          const c = this.streamId++, r = this.sourceName, f = this.targetName, e = this.comObj;
          return new ReadableStream({
            start: (i) => {
              const y = new s.PromiseCapability();
              return this.streamControllers[c] = {
                controller: i,
                startCall: y,
                pullCall: null,
                cancelCall: null,
                isClosed: !1
              }, e.postMessage({
                sourceName: r,
                targetName: f,
                action: p,
                streamId: c,
                data: m,
                desiredSize: i.desiredSize
              }, l), y.promise;
            },
            pull: (i) => {
              const y = new s.PromiseCapability();
              return this.streamControllers[c].pullCall = y, e.postMessage({
                sourceName: r,
                targetName: f,
                stream: u.PULL,
                streamId: c,
                desiredSize: i.desiredSize
              }), y.promise;
            },
            cancel: (i) => {
              (0, s.assert)(i instanceof Error, "cancel must have a valid reason");
              const y = new s.PromiseCapability();
              return this.streamControllers[c].cancelCall = y, this.streamControllers[c].isClosed = !0, e.postMessage({
                sourceName: r,
                targetName: f,
                stream: u.CANCEL,
                streamId: c,
                reason: A(i)
              }), y.promise;
            }
          }, o);
        }
        #t(p) {
          const m = p.streamId, o = this.sourceName, l = p.sourceName, c = this.comObj, r = this, f = this.actionHandler[p.action], e = {
            enqueue(i) {
              let y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1, T = arguments.length > 2 ? arguments[2] : void 0;
              if (this.isCancelled)
                return;
              const E = this.desiredSize;
              this.desiredSize -= y, E > 0 && this.desiredSize <= 0 && (this.sinkCapability = new s.PromiseCapability(), this.ready = this.sinkCapability.promise), c.postMessage({
                sourceName: o,
                targetName: l,
                stream: u.ENQUEUE,
                streamId: m,
                chunk: i
              }, T);
            },
            close() {
              this.isCancelled || (this.isCancelled = !0, c.postMessage({
                sourceName: o,
                targetName: l,
                stream: u.CLOSE,
                streamId: m
              }), delete r.streamSinks[m]);
            },
            error(i) {
              (0, s.assert)(i instanceof Error, "error must have a valid reason"), !this.isCancelled && (this.isCancelled = !0, c.postMessage({
                sourceName: o,
                targetName: l,
                stream: u.ERROR,
                streamId: m,
                reason: A(i)
              }));
            },
            sinkCapability: new s.PromiseCapability(),
            onPull: null,
            onCancel: null,
            isCancelled: !1,
            desiredSize: p.desiredSize,
            ready: null
          };
          e.sinkCapability.resolve(), e.ready = e.sinkCapability.promise, this.streamSinks[m] = e, new Promise(function(i) {
            i(f(p.data, e));
          }).then(function() {
            c.postMessage({
              sourceName: o,
              targetName: l,
              stream: u.START_COMPLETE,
              streamId: m,
              success: !0
            });
          }, function(i) {
            c.postMessage({
              sourceName: o,
              targetName: l,
              stream: u.START_COMPLETE,
              streamId: m,
              reason: A(i)
            });
          });
        }
        #e(p) {
          const m = p.streamId, o = this.sourceName, l = p.sourceName, c = this.comObj, r = this.streamControllers[m], f = this.streamSinks[m];
          switch (p.stream) {
            case u.START_COMPLETE:
              p.success ? r.startCall.resolve() : r.startCall.reject(A(p.reason));
              break;
            case u.PULL_COMPLETE:
              p.success ? r.pullCall.resolve() : r.pullCall.reject(A(p.reason));
              break;
            case u.PULL:
              if (!f) {
                c.postMessage({
                  sourceName: o,
                  targetName: l,
                  stream: u.PULL_COMPLETE,
                  streamId: m,
                  success: !0
                });
                break;
              }
              f.desiredSize <= 0 && p.desiredSize > 0 && f.sinkCapability.resolve(), f.desiredSize = p.desiredSize, new Promise(function(e) {
                e(f.onPull?.());
              }).then(function() {
                c.postMessage({
                  sourceName: o,
                  targetName: l,
                  stream: u.PULL_COMPLETE,
                  streamId: m,
                  success: !0
                });
              }, function(e) {
                c.postMessage({
                  sourceName: o,
                  targetName: l,
                  stream: u.PULL_COMPLETE,
                  streamId: m,
                  reason: A(e)
                });
              });
              break;
            case u.ENQUEUE:
              if ((0, s.assert)(r, "enqueue should have stream controller"), r.isClosed)
                break;
              r.controller.enqueue(p.chunk);
              break;
            case u.CLOSE:
              if ((0, s.assert)(r, "close should have stream controller"), r.isClosed)
                break;
              r.isClosed = !0, r.controller.close(), this.#n(r, m);
              break;
            case u.ERROR:
              (0, s.assert)(r, "error should have stream controller"), r.controller.error(A(p.reason)), this.#n(r, m);
              break;
            case u.CANCEL_COMPLETE:
              p.success ? r.cancelCall.resolve() : r.cancelCall.reject(A(p.reason)), this.#n(r, m);
              break;
            case u.CANCEL:
              if (!f)
                break;
              new Promise(function(e) {
                e(f.onCancel?.(A(p.reason)));
              }).then(function() {
                c.postMessage({
                  sourceName: o,
                  targetName: l,
                  stream: u.CANCEL_COMPLETE,
                  streamId: m,
                  success: !0
                });
              }, function(e) {
                c.postMessage({
                  sourceName: o,
                  targetName: l,
                  stream: u.CANCEL_COMPLETE,
                  streamId: m,
                  reason: A(e)
                });
              }), f.sinkCapability.reject(A(p.reason)), f.isCancelled = !0, delete this.streamSinks[m];
              break;
            default:
              throw new Error("Unexpected stream case");
          }
        }
        async #n(p, m) {
          await Promise.allSettled([p.startCall?.promise, p.pullCall?.promise, p.cancelCall?.promise]), delete this.streamControllers[m];
        }
        destroy() {
          this.comObj.removeEventListener("message", this._onComObjOnMessage);
        }
      }
    })
  ),
  /***/
  2825: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        MurmurHash3_64: () => (
          /* binding */
          b
        )
        /* harmony export */
      }), t(8837), t(9803), t(8347), t(7995), t(62), t(4602), t(344), t(4305), t(7583), t(3352);
      var s = t(3266);
      const g = 3285377520, u = 4294901760, A = 65535;
      class b {
        constructor(p) {
          this.h1 = p ? p & 4294967295 : g, this.h2 = p ? p & 4294967295 : g;
        }
        update(p) {
          let m, o;
          if (typeof p == "string") {
            m = new Uint8Array(p.length * 2), o = 0;
            for (let M = 0, $ = p.length; M < $; M++) {
              const j = p.charCodeAt(M);
              j <= 255 ? m[o++] = j : (m[o++] = j >>> 8, m[o++] = j & 255);
            }
          } else if ((0, s.isArrayBuffer)(p))
            m = p.slice(), o = m.byteLength;
          else
            throw new Error("Wrong data format in MurmurHash3_64_update. Input must be a string or array.");
          const l = o >> 2, c = o - l * 4, r = new Uint32Array(m.buffer, 0, l);
          let f = 0, e = 0, i = this.h1, y = this.h2;
          const T = 3432918353, E = 461845907, R = T & A, L = E & A;
          for (let M = 0; M < l; M++)
            M & 1 ? (f = r[M], f = f * T & u | f * R & A, f = f << 15 | f >>> 17, f = f * E & u | f * L & A, i ^= f, i = i << 13 | i >>> 19, i = i * 5 + 3864292196) : (e = r[M], e = e * T & u | e * R & A, e = e << 15 | e >>> 17, e = e * E & u | e * L & A, y ^= e, y = y << 13 | y >>> 19, y = y * 5 + 3864292196);
          switch (f = 0, c) {
            case 3:
              f ^= m[l * 4 + 2] << 16;
            case 2:
              f ^= m[l * 4 + 1] << 8;
            case 1:
              f ^= m[l * 4], f = f * T & u | f * R & A, f = f << 15 | f >>> 17, f = f * E & u | f * L & A, l & 1 ? i ^= f : y ^= f;
          }
          this.h1 = i, this.h2 = y;
        }
        hexdigest() {
          let p = this.h1, m = this.h2;
          return p ^= m >>> 1, p = p * 3981806797 & u | p * 36045 & A, m = m * 4283543511 & u | ((m << 16 | p >>> 16) * 2950163797 & u) >>> 16, p ^= m >>> 1, p = p * 444984403 & u | p * 60499 & A, m = m * 3301882366 & u | ((m << 16 | p >>> 16) * 3120437893 & u) >>> 16, p ^= m >>> 1, (p >>> 0).toString(16).padStart(8, "0") + (m >>> 0).toString(16).padStart(8, "0");
        }
      }
    })
  ),
  /***/
  3266: (
    /***/
    ((w, D, t) => {
      t.d(D, {
        /* harmony export */
        AbortException: () => (
          /* binding */
          vt
        ),
        /* harmony export */
        AnnotationBorderStyleType: () => (
          /* binding */
          i
        ),
        /* harmony export */
        AnnotationEditorParamsType: () => (
          /* binding */
          l
        ),
        /* harmony export */
        AnnotationEditorPrefix: () => (
          /* binding */
          m
        ),
        /* harmony export */
        AnnotationEditorType: () => (
          /* binding */
          o
        ),
        /* harmony export */
        AnnotationMode: () => (
          /* binding */
          p
        ),
        /* harmony export */
        AnnotationPrefix: () => (
          /* binding */
          Y
        ),
        /* harmony export */
        AnnotationType: () => (
          /* binding */
          e
        ),
        /* harmony export */
        BaseException: () => (
          /* binding */
          _
        ),
        /* harmony export */
        CMapCompressionType: () => (
          /* binding */
          T
        ),
        /* harmony export */
        FONT_IDENTITY_MATRIX: () => (
          /* binding */
          u
        ),
        /* harmony export */
        FeatureTest: () => (
          /* binding */
          a
        ),
        /* harmony export */
        FormatError: () => (
          /* binding */
          lt
        ),
        /* harmony export */
        IDENTITY_MATRIX: () => (
          /* binding */
          g
        ),
        /* harmony export */
        ImageKind: () => (
          /* binding */
          f
        ),
        /* harmony export */
        InvalidPDFException: () => (
          /* binding */
          V
        ),
        /* harmony export */
        LINE_FACTOR: () => (
          /* binding */
          b
        ),
        /* harmony export */
        MAX_IMAGE_SIZE_TO_CACHE: () => (
          /* binding */
          A
        ),
        /* harmony export */
        MissingPDFException: () => (
          /* binding */
          nt
        ),
        /* harmony export */
        OPS: () => (
          /* binding */
          E
        ),
        /* harmony export */
        PasswordException: () => (
          /* binding */
          Z
        ),
        /* harmony export */
        PasswordResponses: () => (
          /* binding */
          R
        ),
        /* harmony export */
        PermissionFlag: () => (
          /* binding */
          c
        ),
        /* harmony export */
        PromiseCapability: () => (
          /* binding */
          F
        ),
        /* harmony export */
        RenderingIntentFlag: () => (
          /* binding */
          x
        ),
        /* harmony export */
        TextRenderingMode: () => (
          /* binding */
          r
        ),
        /* harmony export */
        UnexpectedResponseException: () => (
          /* binding */
          ot
        ),
        /* harmony export */
        UnknownErrorException: () => (
          /* binding */
          z
        ),
        /* harmony export */
        Util: () => (
          /* binding */
          S
        ),
        /* harmony export */
        VerbosityLevel: () => (
          /* binding */
          y
        ),
        /* harmony export */
        assert: () => (
          /* binding */
          J
        ),
        /* harmony export */
        bytesToString: () => (
          /* binding */
          Tt
        ),
        /* harmony export */
        createValidAbsoluteUrl: () => (
          /* binding */
          ut
        ),
        /* harmony export */
        getUuid: () => (
          /* binding */
          U
        ),
        /* harmony export */
        getVerbosityLevel: () => (
          /* binding */
          $
        ),
        /* harmony export */
        info: () => (
          /* binding */
          j
        ),
        /* harmony export */
        isArrayBuffer: () => (
          /* binding */
          P
        ),
        /* harmony export */
        isNodeJS: () => (
          /* binding */
          s
        ),
        /* harmony export */
        normalizeUnicode: () => (
          /* binding */
          k
        ),
        /* harmony export */
        objectFromMap: () => (
          /* binding */
          v
        ),
        /* harmony export */
        setVerbosityLevel: () => (
          /* binding */
          M
        ),
        /* harmony export */
        shadow: () => (
          /* binding */
          ht
        ),
        /* harmony export */
        string32: () => (
          /* binding */
          tt
        ),
        /* harmony export */
        stringToBytes: () => (
          /* binding */
          St
        ),
        /* harmony export */
        unreachable: () => (
          /* binding */
          Q
        ),
        /* harmony export */
        warn: () => (
          /* binding */
          K
        )
        /* harmony export */
      }), t(3352), t(3655), t(2555), t(2202), t(4226), t(8837), t(9803), t(8347), t(7995), t(62), t(4602), t(344), t(4305), t(7583), t(7944);
      const s = typeof process == "object" && process + "" == "[object process]" && !process.versions.nw && !(process.versions.electron && process.type && process.type !== "browser"), g = [1, 0, 0, 1, 0, 0], u = [1e-3, 0, 0, 1e-3, 0, 0], A = 1e7, b = 1.35, x = {
        ANY: 1,
        DISPLAY: 2,
        PRINT: 4,
        SAVE: 8,
        ANNOTATIONS_FORMS: 16,
        ANNOTATIONS_STORAGE: 32,
        ANNOTATIONS_DISABLE: 64,
        OPLIST: 256
      }, p = {
        DISABLE: 0,
        ENABLE: 1,
        ENABLE_FORMS: 2,
        ENABLE_STORAGE: 3
      }, m = "pdfjs_internal_editor_", o = {
        DISABLE: -1,
        NONE: 0,
        FREETEXT: 3,
        HIGHLIGHT: 9,
        STAMP: 13,
        INK: 15
      }, l = {
        RESIZE: 1,
        CREATE: 2,
        FREETEXT_SIZE: 11,
        FREETEXT_COLOR: 12,
        FREETEXT_OPACITY: 13,
        INK_COLOR: 21,
        INK_THICKNESS: 22,
        INK_OPACITY: 23,
        HIGHLIGHT_COLOR: 31,
        HIGHLIGHT_DEFAULT_COLOR: 32
      }, c = {
        PRINT: 4,
        MODIFY_CONTENTS: 8,
        COPY: 16,
        MODIFY_ANNOTATIONS: 32,
        FILL_INTERACTIVE_FORMS: 256,
        COPY_FOR_ACCESSIBILITY: 512,
        ASSEMBLE: 1024,
        PRINT_HIGH_QUALITY: 2048
      }, r = {
        FILL: 0,
        STROKE: 1,
        FILL_STROKE: 2,
        INVISIBLE: 3,
        FILL_ADD_TO_PATH: 4,
        STROKE_ADD_TO_PATH: 5,
        FILL_STROKE_ADD_TO_PATH: 6,
        ADD_TO_PATH: 7,
        FILL_STROKE_MASK: 3,
        ADD_TO_PATH_FLAG: 4
      }, f = {
        GRAYSCALE_1BPP: 1,
        RGB_24BPP: 2,
        RGBA_32BPP: 3
      }, e = {
        TEXT: 1,
        LINK: 2,
        FREETEXT: 3,
        LINE: 4,
        SQUARE: 5,
        CIRCLE: 6,
        POLYGON: 7,
        POLYLINE: 8,
        HIGHLIGHT: 9,
        UNDERLINE: 10,
        SQUIGGLY: 11,
        STRIKEOUT: 12,
        STAMP: 13,
        CARET: 14,
        INK: 15,
        POPUP: 16,
        FILEATTACHMENT: 17,
        SOUND: 18,
        MOVIE: 19,
        WIDGET: 20,
        SCREEN: 21,
        PRINTERMARK: 22,
        TRAPNET: 23,
        WATERMARK: 24,
        THREED: 25,
        REDACT: 26
      }, i = {
        SOLID: 1,
        DASHED: 2,
        BEVELED: 3,
        INSET: 4,
        UNDERLINE: 5
      }, y = {
        ERRORS: 0,
        WARNINGS: 1,
        INFOS: 5
      }, T = {
        NONE: 0,
        BINARY: 1
      }, E = {
        dependency: 1,
        setLineWidth: 2,
        setLineCap: 3,
        setLineJoin: 4,
        setMiterLimit: 5,
        setDash: 6,
        setRenderingIntent: 7,
        setFlatness: 8,
        setGState: 9,
        save: 10,
        restore: 11,
        transform: 12,
        moveTo: 13,
        lineTo: 14,
        curveTo: 15,
        curveTo2: 16,
        curveTo3: 17,
        closePath: 18,
        rectangle: 19,
        stroke: 20,
        closeStroke: 21,
        fill: 22,
        eoFill: 23,
        fillStroke: 24,
        eoFillStroke: 25,
        closeFillStroke: 26,
        closeEOFillStroke: 27,
        endPath: 28,
        clip: 29,
        eoClip: 30,
        beginText: 31,
        endText: 32,
        setCharSpacing: 33,
        setWordSpacing: 34,
        setHScale: 35,
        setLeading: 36,
        setFont: 37,
        setTextRenderingMode: 38,
        setTextRise: 39,
        moveText: 40,
        setLeadingMoveText: 41,
        setTextMatrix: 42,
        nextLine: 43,
        showText: 44,
        showSpacedText: 45,
        nextLineShowText: 46,
        nextLineSetSpacingShowText: 47,
        setCharWidth: 48,
        setCharWidthAndBounds: 49,
        setStrokeColorSpace: 50,
        setFillColorSpace: 51,
        setStrokeColor: 52,
        setStrokeColorN: 53,
        setFillColor: 54,
        setFillColorN: 55,
        setStrokeGray: 56,
        setFillGray: 57,
        setStrokeRGBColor: 58,
        setFillRGBColor: 59,
        setStrokeCMYKColor: 60,
        setFillCMYKColor: 61,
        shadingFill: 62,
        beginInlineImage: 63,
        beginImageData: 64,
        endInlineImage: 65,
        paintXObject: 66,
        markPoint: 67,
        markPointProps: 68,
        beginMarkedContent: 69,
        beginMarkedContentProps: 70,
        endMarkedContent: 71,
        beginCompat: 72,
        endCompat: 73,
        paintFormXObjectBegin: 74,
        paintFormXObjectEnd: 75,
        beginGroup: 76,
        endGroup: 77,
        beginAnnotation: 80,
        endAnnotation: 81,
        paintImageMaskXObject: 83,
        paintImageMaskXObjectGroup: 84,
        paintImageXObject: 85,
        paintInlineImageXObject: 86,
        paintInlineImageXObjectGroup: 87,
        paintImageXObjectRepeat: 88,
        paintImageMaskXObjectRepeat: 89,
        paintSolidColorImageMask: 90,
        constructPath: 91
      }, R = {
        NEED_PASSWORD: 1,
        INCORRECT_PASSWORD: 2
      };
      let L = y.WARNINGS;
      function M(G) {
        Number.isInteger(G) && (L = G);
      }
      function $() {
        return L;
      }
      function j(G) {
        L >= y.INFOS && console.log(`Info: ${G}`);
      }
      function K(G) {
        L >= y.WARNINGS && console.log(`Warning: ${G}`);
      }
      function Q(G) {
        throw new Error(G);
      }
      function J(G, I) {
        G || Q(I);
      }
      function at(G) {
        switch (G?.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "mailto:":
          case "tel:":
            return !0;
          default:
            return !1;
        }
      }
      function ut(G) {
        let I = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, B = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
        if (!G)
          return null;
        try {
          if (B && typeof G == "string" && (B.addDefaultProtocol && G.startsWith("www.") && G.match(/\./g)?.length >= 2 && (G = `http://${G}`), B.tryConvertEncoding))
            try {
              G = C(G);
            } catch {
            }
          const st = I ? new URL(G, I) : new URL(G);
          if (at(st))
            return st;
        } catch {
        }
        return null;
      }
      function ht(G, I, B) {
        let st = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        return Object.defineProperty(G, I, {
          value: B,
          enumerable: !st,
          configurable: !0,
          writable: !1
        }), B;
      }
      const _ = (function() {
        function I(B, st) {
          this.constructor === I && Q("Cannot initialize BaseException."), this.message = B, this.name = st;
        }
        return I.prototype = new Error(), I.constructor = I, I;
      })();
      class Z extends _ {
        constructor(I, B) {
          super(I, "PasswordException"), this.code = B;
        }
      }
      class z extends _ {
        constructor(I, B) {
          super(I, "UnknownErrorException"), this.details = B;
        }
      }
      class V extends _ {
        constructor(I) {
          super(I, "InvalidPDFException");
        }
      }
      class nt extends _ {
        constructor(I) {
          super(I, "MissingPDFException");
        }
      }
      class ot extends _ {
        constructor(I, B) {
          super(I, "UnexpectedResponseException"), this.status = B;
        }
      }
      class lt extends _ {
        constructor(I) {
          super(I, "FormatError");
        }
      }
      class vt extends _ {
        constructor(I) {
          super(I, "AbortException");
        }
      }
      function Tt(G) {
        (typeof G != "object" || G?.length === void 0) && Q("Invalid argument for bytesToString");
        const I = G.length, B = 8192;
        if (I < B)
          return String.fromCharCode.apply(null, G);
        const st = [];
        for (let q = 0; q < I; q += B) {
          const ct = Math.min(q + B, I), pt = G.subarray(q, ct);
          st.push(String.fromCharCode.apply(null, pt));
        }
        return st.join("");
      }
      function St(G) {
        typeof G != "string" && Q("Invalid argument for stringToBytes");
        const I = G.length, B = new Uint8Array(I);
        for (let st = 0; st < I; ++st)
          B[st] = G.charCodeAt(st) & 255;
        return B;
      }
      function tt(G) {
        return String.fromCharCode(G >> 24 & 255, G >> 16 & 255, G >> 8 & 255, G & 255);
      }
      function v(G) {
        const I = /* @__PURE__ */ Object.create(null);
        for (const [B, st] of G)
          I[B] = st;
        return I;
      }
      function h() {
        const G = new Uint8Array(4);
        return G[0] = 1, new Uint32Array(G.buffer, 0, 1)[0] === 1;
      }
      function n() {
        try {
          return new Function(""), !0;
        } catch {
          return !1;
        }
      }
      class a {
        static get isLittleEndian() {
          return ht(this, "isLittleEndian", h());
        }
        static get isEvalSupported() {
          return ht(this, "isEvalSupported", n());
        }
        static get isOffscreenCanvasSupported() {
          return ht(this, "isOffscreenCanvasSupported", typeof OffscreenCanvas < "u");
        }
        static get platform() {
          return typeof navigator < "u" && typeof navigator?.platform == "string" ? ht(this, "platform", {
            isMac: navigator.platform.includes("Mac")
          }) : ht(this, "platform", {
            isMac: !1
          });
        }
        static get isCSSRoundSupported() {
          return ht(this, "isCSSRoundSupported", globalThis.CSS?.supports?.("width: round(1.5px, 1px)"));
        }
      }
      const d = [...Array(256).keys()].map((G) => G.toString(16).padStart(2, "0"));
      class S {
        static makeHexColor(I, B, st) {
          return `#${d[I]}${d[B]}${d[st]}`;
        }
        static scaleMinMax(I, B) {
          let st;
          I[0] ? (I[0] < 0 && (st = B[0], B[0] = B[1], B[1] = st), B[0] *= I[0], B[1] *= I[0], I[3] < 0 && (st = B[2], B[2] = B[3], B[3] = st), B[2] *= I[3], B[3] *= I[3]) : (st = B[0], B[0] = B[2], B[2] = st, st = B[1], B[1] = B[3], B[3] = st, I[1] < 0 && (st = B[2], B[2] = B[3], B[3] = st), B[2] *= I[1], B[3] *= I[1], I[2] < 0 && (st = B[0], B[0] = B[1], B[1] = st), B[0] *= I[2], B[1] *= I[2]), B[0] += I[4], B[1] += I[4], B[2] += I[5], B[3] += I[5];
        }
        static transform(I, B) {
          return [I[0] * B[0] + I[2] * B[1], I[1] * B[0] + I[3] * B[1], I[0] * B[2] + I[2] * B[3], I[1] * B[2] + I[3] * B[3], I[0] * B[4] + I[2] * B[5] + I[4], I[1] * B[4] + I[3] * B[5] + I[5]];
        }
        static applyTransform(I, B) {
          const st = I[0] * B[0] + I[1] * B[2] + B[4], q = I[0] * B[1] + I[1] * B[3] + B[5];
          return [st, q];
        }
        static applyInverseTransform(I, B) {
          const st = B[0] * B[3] - B[1] * B[2], q = (I[0] * B[3] - I[1] * B[2] + B[2] * B[5] - B[4] * B[3]) / st, ct = (-I[0] * B[1] + I[1] * B[0] + B[4] * B[1] - B[5] * B[0]) / st;
          return [q, ct];
        }
        static getAxialAlignedBoundingBox(I, B) {
          const st = this.applyTransform(I, B), q = this.applyTransform(I.slice(2, 4), B), ct = this.applyTransform([I[0], I[3]], B), pt = this.applyTransform([I[2], I[1]], B);
          return [Math.min(st[0], q[0], ct[0], pt[0]), Math.min(st[1], q[1], ct[1], pt[1]), Math.max(st[0], q[0], ct[0], pt[0]), Math.max(st[1], q[1], ct[1], pt[1])];
        }
        static inverseTransform(I) {
          const B = I[0] * I[3] - I[1] * I[2];
          return [I[3] / B, -I[1] / B, -I[2] / B, I[0] / B, (I[2] * I[5] - I[4] * I[3]) / B, (I[4] * I[1] - I[5] * I[0]) / B];
        }
        static singularValueDecompose2dScale(I) {
          const B = [I[0], I[2], I[1], I[3]], st = I[0] * B[0] + I[1] * B[2], q = I[0] * B[1] + I[1] * B[3], ct = I[2] * B[0] + I[3] * B[2], pt = I[2] * B[1] + I[3] * B[3], ft = (st + pt) / 2, mt = Math.sqrt((st + pt) ** 2 - 4 * (st * pt - ct * q)) / 2, yt = ft + mt || 1, At = ft - mt || 1;
          return [Math.sqrt(yt), Math.sqrt(At)];
        }
        static normalizeRect(I) {
          const B = I.slice(0);
          return I[0] > I[2] && (B[0] = I[2], B[2] = I[0]), I[1] > I[3] && (B[1] = I[3], B[3] = I[1]), B;
        }
        static intersect(I, B) {
          const st = Math.max(Math.min(I[0], I[2]), Math.min(B[0], B[2])), q = Math.min(Math.max(I[0], I[2]), Math.max(B[0], B[2]));
          if (st > q)
            return null;
          const ct = Math.max(Math.min(I[1], I[3]), Math.min(B[1], B[3])), pt = Math.min(Math.max(I[1], I[3]), Math.max(B[1], B[3]));
          return ct > pt ? null : [st, ct, q, pt];
        }
        static bezierBoundingBox(I, B, st, q, ct, pt, ft, mt) {
          const yt = [], At = [[], []];
          let et, H, W, X, rt, it, dt, gt;
          for (let wt = 0; wt < 2; ++wt) {
            if (wt === 0 ? (H = 6 * I - 12 * st + 6 * ct, et = -3 * I + 9 * st - 9 * ct + 3 * ft, W = 3 * st - 3 * I) : (H = 6 * B - 12 * q + 6 * pt, et = -3 * B + 9 * q - 9 * pt + 3 * mt, W = 3 * q - 3 * B), Math.abs(et) < 1e-12) {
              if (Math.abs(H) < 1e-12)
                continue;
              X = -W / H, 0 < X && X < 1 && yt.push(X);
              continue;
            }
            dt = H * H - 4 * W * et, gt = Math.sqrt(dt), !(dt < 0) && (rt = (-H + gt) / (2 * et), 0 < rt && rt < 1 && yt.push(rt), it = (-H - gt) / (2 * et), 0 < it && it < 1 && yt.push(it));
          }
          let Et = yt.length, xt;
          const Ct = Et;
          for (; Et--; )
            X = yt[Et], xt = 1 - X, At[0][Et] = xt * xt * xt * I + 3 * xt * xt * X * st + 3 * xt * X * X * ct + X * X * X * ft, At[1][Et] = xt * xt * xt * B + 3 * xt * xt * X * q + 3 * xt * X * X * pt + X * X * X * mt;
          return At[0][Ct] = I, At[1][Ct] = B, At[0][Ct + 1] = ft, At[1][Ct + 1] = mt, At[0].length = At[1].length = Ct + 2, [Math.min(...At[0]), Math.min(...At[1]), Math.max(...At[0]), Math.max(...At[1])];
        }
      }
      function C(G) {
        return decodeURIComponent(escape(G));
      }
      function P(G) {
        return typeof G == "object" && G?.byteLength !== void 0;
      }
      class F {
        #t = !1;
        constructor() {
          this.promise = new Promise((I, B) => {
            this.resolve = (st) => {
              this.#t = !0, I(st);
            }, this.reject = (st) => {
              this.#t = !0, B(st);
            };
          });
        }
        get settled() {
          return this.#t;
        }
      }
      let O = null, N = null;
      function k(G) {
        return O || (O = /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu, N = /* @__PURE__ */ new Map([["ﬅ", "ſt"]])), G.replaceAll(O, (I, B, st) => B ? B.normalize("NFKC") : N.get(st));
      }
      function U() {
        if (typeof crypto < "u" && typeof crypto?.randomUUID == "function")
          return crypto.randomUUID();
        const G = new Uint8Array(32);
        if (typeof crypto < "u" && typeof crypto?.getRandomValues == "function")
          crypto.getRandomValues(G);
        else
          for (let I = 0; I < 32; I++)
            G[I] = Math.floor(Math.random() * 255);
        return Tt(G);
      }
      const Y = "pdfjs_internal_id_";
    })
  )
  /******/
}, qt = {};
function kt(w) {
  var D = qt[w];
  if (D !== void 0)
    return D.exports;
  var t = qt[w] = {
    /******/
    // no module.id needed
    /******/
    // no module.loaded needed
    /******/
    exports: {}
    /******/
  };
  return ce[w].call(t.exports, t, t.exports, kt), t.exports;
}
(() => {
  var w = typeof Symbol == "function" ? Symbol("webpack queues") : "__webpack_queues__", D = typeof Symbol == "function" ? Symbol("webpack exports") : "__webpack_exports__", t = typeof Symbol == "function" ? Symbol("webpack error") : "__webpack_error__", s = (u) => {
    u && u.d < 1 && (u.d = 1, u.forEach((A) => A.r--), u.forEach((A) => A.r-- ? A.r++ : A()));
  }, g = (u) => u.map((A) => {
    if (A !== null && typeof A == "object") {
      if (A[w]) return A;
      if (A.then) {
        var b = [];
        b.d = 0, A.then((m) => {
          x[D] = m, s(b);
        }, (m) => {
          x[t] = m, s(b);
        });
        var x = {};
        return x[w] = (m) => m(b), x;
      }
    }
    var p = {};
    return p[w] = (m) => {
    }, p[D] = A, p;
  });
  kt.a = (u, A, b) => {
    var x;
    b && ((x = []).d = -1);
    var p = /* @__PURE__ */ new Set(), m = u.exports, o, l, c, r = new Promise((f, e) => {
      c = e, l = f;
    });
    r[D] = m, r[w] = (f) => (x && f(x), p.forEach(f), r.catch((e) => {
    })), u.exports = r, A((f) => {
      o = g(f);
      var e, i = () => o.map((T) => {
        if (T[t]) throw T[t];
        return T[D];
      }), y = new Promise((T) => {
        e = () => T(i), e.r = 0;
        var E = (R) => R !== x && !p.has(R) && (p.add(R), R && !R.d && (e.r++, R.push(e)));
        o.map((R) => R[w](E));
      });
      return e.r ? y : i();
    }, (f) => (f ? c(r[t] = f) : l(m), s(x))), x && x.d < 0 && (x.d = 0);
  };
})();
kt.d = (w, D) => {
  for (var t in D)
    kt.o(D, t) && !kt.o(w, t) && Object.defineProperty(w, t, { enumerable: !0, get: D[t] });
};
kt.o = (w, D) => Object.prototype.hasOwnProperty.call(w, D);
var bt = kt(9907);
bt = globalThis.pdfjsLib = await (globalThis.pdfjsLibPromise = bt);
bt.AbortException;
bt.AnnotationEditorLayer;
bt.AnnotationEditorParamsType;
bt.AnnotationEditorType;
bt.AnnotationEditorUIManager;
bt.AnnotationLayer;
bt.AnnotationMode;
bt.CMapCompressionType;
bt.ColorPicker;
bt.DOMSVGFactory;
bt.DrawLayer;
bt.FeatureTest;
var de = bt.GlobalWorkerOptions;
bt.ImageKind;
bt.InvalidPDFException;
bt.MissingPDFException;
bt.OPS;
bt.Outliner;
bt.PDFDataRangeTransport;
bt.PDFDateString;
bt.PDFWorker;
bt.PasswordResponses;
bt.PermissionFlag;
bt.PixelsPerInch;
bt.PromiseCapability;
bt.RenderingCancelledException;
bt.UnexpectedResponseException;
bt.Util;
bt.VerbosityLevel;
bt.XfaLayer;
bt.build;
bt.createValidAbsoluteUrl;
bt.fetchData;
var ue = bt.getDocument;
bt.getFilenameFromUrl;
bt.getPdfFilenameFromUrl;
bt.getXfaPageViewport;
bt.isDataScheme;
bt.isPdfFile;
bt.noContextMenu;
bt.normalizeUnicode;
bt.renderTextLayer;
bt.setLayerDimensions;
bt.shadow;
bt.updateTextLayer;
var fe = bt.version;
export {
  ue as _,
  fe as a,
  de as b
};
//# sourceMappingURL=pdf-Dau46TMA.js.map
