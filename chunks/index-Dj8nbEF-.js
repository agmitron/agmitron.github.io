var a = {}, c = {}, l;
function v() {
  if (l) return c;
  l = 1, Object.defineProperty(c, "__esModule", { value: !0 }), c.ddmmyyyy = void 0;
  const r = (n, s = "00:00:00") => {
    const [i, t, e] = n.split(".");
    return /* @__PURE__ */ new Date(`${e}-${t}-${i} ${s}`);
  };
  return c.ddmmyyyy = r, c;
}
var o = {}, d;
function y() {
  if (d) return o;
  d = 1, Object.defineProperty(o, "__esModule", { value: !0 }), o.right = o.left = void 0;
  class r {
    constructor(e) {
      this.value = e, this.tag = "Left";
    }
    isLeft() {
      return !0;
    }
    isRight() {
      return !1;
    }
    map(e) {
      return new r(this.value);
    }
    flatMap(e) {
      return new r(this.value);
    }
  }
  class n {
    constructor(e) {
      this.value = e, this.tag = "Right";
    }
    isLeft() {
      return !1;
    }
    isRight() {
      return !0;
    }
    map(e) {
      return new n(e(this.value));
    }
    flatMap(e) {
      return e(this.value);
    }
  }
  const s = (t) => new r(t);
  o.left = s;
  const i = (t) => new n(t);
  return o.right = i, o;
}
var h;
function _() {
  return h || (h = 1, (function(r) {
    var n = a && a.__createBinding || (Object.create ? (function(i, t, e, u) {
      u === void 0 && (u = e);
      var f = Object.getOwnPropertyDescriptor(t, e);
      (!f || ("get" in f ? !t.__esModule : f.writable || f.configurable)) && (f = { enumerable: !0, get: function() {
        return t[e];
      } }), Object.defineProperty(i, u, f);
    }) : (function(i, t, e, u) {
      u === void 0 && (u = e), i[u] = t[e];
    })), s = a && a.__exportStar || function(i, t) {
      for (var e in i) e !== "default" && !Object.prototype.hasOwnProperty.call(t, e) && n(t, i, e);
    };
    Object.defineProperty(r, "__esModule", { value: !0 }), s(v(), r), s(y(), r);
  })(a)), a;
}
var b = _();
export {
  b as l
};
//# sourceMappingURL=index-Dj8nbEF-.js.map
