!(function () {
  var t =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
      ? self
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : {};
  function e(t) {
    return t && t.__esModule ? t.default : t;
  }
  var r,
    n,
    o = {},
    i = function (t) {
      return t && t.Math == Math && t;
    };
  o =
    i('object' == typeof globalThis && globalThis) ||
    i('object' == typeof window && window) ||
    i('object' == typeof self && self) ||
    i('object' == typeof t && t) ||
    (function () {
      return this;
    })() ||
    Function('return this')();
  var s, a;
  s = !(a = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  })(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1]
    );
  });
  var u,
    c = {};
  u = !a(function () {
    var t = function () {}.bind();
    return 'function' != typeof t || t.hasOwnProperty('prototype');
  });
  var f,
    l = Function.prototype.call;
  c = u
    ? l.bind(l)
    : function () {
        return l.apply(l, arguments);
      };
  var h = {}.propertyIsEnumerable,
    p = Object.getOwnPropertyDescriptor,
    d = p && !h.call({ 1: 2 }, 1);
  f = d
    ? function (t) {
        var e = p(this, t);
        return !!e && e.enumerable;
      }
    : h;
  var y;
  y = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e,
    };
  };
  var g,
    m,
    w,
    b,
    v = {},
    E = Function.prototype,
    O = E.call,
    A = u && E.bind.bind(O, O);
  b = function (t) {
    return u
      ? A(t)
      : function () {
          return O.apply(t, arguments);
        };
  };
  var T = b({}.toString),
    S = b(''.slice);
  (w = function (t) {
    return S(T(t), 8, -1);
  }),
    (m = function (t) {
      if ('Function' === w(t)) return b(t);
    });
  var B = Object,
    R = m(''.split);
  v = a(function () {
    return !B('z').propertyIsEnumerable(0);
  })
    ? function (t) {
        return 'String' == w(t) ? R(t, '') : B(t);
      }
    : B;
  var I, j;
  j = function (t) {
    return null == t;
  };
  var L = TypeError;
  (I = function (t) {
    if (j(t)) throw L("Can't call method on " + t);
    return t;
  }),
    (g = function (t) {
      return v(I(t));
    });
  var _,
    U,
    x,
    C = {},
    P = {},
    N = 'object' == typeof document && document.all,
    F = (x = { all: N, IS_HTMLDDA: void 0 === N && void 0 !== N }).all;
  P = x.IS_HTMLDDA
    ? function (t) {
        return 'function' == typeof t || t === F;
      }
    : function (t) {
        return 'function' == typeof t;
      };
  var k = x.all;
  C = x.IS_HTMLDDA
    ? function (t) {
        return 'object' == typeof t ? null !== t : P(t) || t === k;
      }
    : function (t) {
        return 'object' == typeof t ? null !== t : P(t);
      };
  var D,
    M = {},
    z = function (t) {
      return P(t) ? t : void 0;
    };
  D = function (t, e) {
    return arguments.length < 2 ? z(o[t]) : o[t] && o[t][e];
  };
  var $ = {};
  $ = m({}.isPrototypeOf);
  var q,
    V,
    G,
    H = {};
  H = D('navigator', 'userAgent') || '';
  var J,
    W,
    Y = o.process,
    K = o.Deno,
    X = (Y && Y.versions) || (K && K.version),
    Q = X && X.v8;
  Q && (W = (J = Q.split('.'))[0] > 0 && J[0] < 4 ? 1 : +(J[0] + J[1])),
    !W &&
      H &&
      (!(J = H.match(/Edge\/(\d+)/)) || J[1] >= 74) &&
      (J = H.match(/Chrome\/(\d+)/)) &&
      (W = +J[1]),
    (G = W),
    (V =
      !!Object.getOwnPropertySymbols &&
      !a(function () {
        var t = Symbol();
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && G && G < 41)
        );
      })),
    (q = V && !Symbol.sham && 'symbol' == typeof Symbol.iterator);
  var Z = Object;
  M = q
    ? function (t) {
        return 'symbol' == typeof t;
      }
    : function (t) {
        var e = D('Symbol');
        return P(e) && $(e.prototype, Z(t));
      };
  var tt,
    et,
    rt,
    nt = String;
  rt = function (t) {
    try {
      return nt(t);
    } catch (t) {
      return 'Object';
    }
  };
  var ot = TypeError;
  (et = function (t) {
    if (P(t)) return t;
    throw ot(rt(t) + ' is not a function');
  }),
    (tt = function (t, e) {
      var r = t[e];
      return j(r) ? void 0 : et(r);
    });
  var it,
    st = TypeError;
  it = function (t, e) {
    var r, n;
    if ('string' === e && P((r = t.toString)) && !C((n = c(r, t)))) return n;
    if (P((r = t.valueOf)) && !C((n = c(r, t)))) return n;
    if ('string' !== e && P((r = t.toString)) && !C((n = c(r, t)))) return n;
    throw st("Can't convert object to primitive value");
  };
  var at, ut;
  var ct,
    ft = {},
    lt = Object.defineProperty;
  ct = function (t, e) {
    try {
      lt(o, t, { value: e, configurable: !0, writable: !0 });
    } catch (r) {
      o[t] = e;
    }
    return e;
  };
  var ht = '__core-js_shared__',
    pt = o['__core-js_shared__'] || ct(ht, {});
  (ft = pt),
    (ut = function (t, e) {
      return ft[t] || (ft[t] = void 0 !== e ? e : {});
    })('versions', []).push({
      version: '3.25.5',
      mode: 'global',
      copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
      license: 'https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE',
      source: 'https://github.com/zloirock/core-js',
    });
  var dt,
    yt = {},
    gt = Object;
  dt = function (t) {
    return gt(I(t));
  };
  var mt = m({}.hasOwnProperty);
  yt =
    Object.hasOwn ||
    function (t, e) {
      return mt(dt(t), e);
    };
  var wt,
    bt = 0,
    vt = Math.random(),
    Et = m((1).toString);
  wt = function (t) {
    return 'Symbol(' + (void 0 === t ? '' : t) + ')_' + Et(++bt + vt, 36);
  };
  var Ot = ut('wks'),
    At = o.Symbol,
    Tt = At && At.for,
    St = q ? At : (At && At.withoutSetter) || wt;
  at = function (t) {
    if (!yt(Ot, t) || (!V && 'string' != typeof Ot[t])) {
      var e = 'Symbol.' + t;
      V && yt(At, t) ? (Ot[t] = At[t]) : (Ot[t] = q && Tt ? Tt(e) : St(e));
    }
    return Ot[t];
  };
  var Bt = TypeError,
    Rt = at('toPrimitive');
  (U = function (t, e) {
    if (!C(t) || M(t)) return t;
    var r,
      n = tt(t, Rt);
    if (n) {
      if ((void 0 === e && (e = 'default'), (r = c(n, t, e)), !C(r) || M(r)))
        return r;
      throw Bt("Can't convert object to primitive value");
    }
    return void 0 === e && (e = 'number'), it(t, e);
  }),
    (_ = function (t) {
      var e = U(t, 'string');
      return M(e) ? e : e + '';
    });
  var It,
    jt,
    Lt = o.document,
    _t = C(Lt) && C(Lt.createElement);
  (jt = function (t) {
    return _t ? Lt.createElement(t) : {};
  }),
    (It =
      !s &&
      !a(function () {
        return (
          7 !=
          Object.defineProperty(jt('div'), 'a', {
            get: function () {
              return 7;
            },
          }).a
        );
      }));
  var Ut,
    xt,
    Ct = Object.getOwnPropertyDescriptor,
    Pt = (n = s
      ? Ct
      : function (t, e) {
          if (((t = g(t)), (e = _(e)), It))
            try {
              return Ct(t, e);
            } catch (t) {}
          if (yt(t, e)) return y(!c(f, t, e), t[e]);
        }),
    Nt = {};
  xt =
    s &&
    a(function () {
      return (
        42 !=
        Object.defineProperty(function () {}, 'prototype', {
          value: 42,
          writable: !1,
        }).prototype
      );
    });
  var Ft,
    kt = String,
    Dt = TypeError;
  Ft = function (t) {
    if (C(t)) return t;
    throw Dt(kt(t) + ' is not an object');
  };
  var Mt = TypeError,
    zt = Object.defineProperty,
    $t = Object.getOwnPropertyDescriptor,
    qt = 'enumerable',
    Vt = 'configurable',
    Gt = 'writable';
  (Ut = s
    ? xt
      ? function (t, e, r) {
          if (
            (Ft(t),
            (e = _(e)),
            Ft(r),
            'function' == typeof t &&
              'prototype' === e &&
              'value' in r &&
              Gt in r &&
              !r.writable)
          ) {
            var n = $t(t, e);
            n &&
              n.writable &&
              ((t[e] = r.value),
              (r = {
                configurable: Vt in r ? r.configurable : n.configurable,
                enumerable: qt in r ? r.enumerable : n.enumerable,
                writable: !1,
              }));
          }
          return zt(t, e, r);
        }
      : zt
    : function (t, e, r) {
        if ((Ft(t), (e = _(e)), Ft(r), It))
          try {
            return zt(t, e, r);
          } catch (t) {}
        if ('get' in r || 'set' in r) throw Mt('Accessors not supported');
        return 'value' in r && (t[e] = r.value), t;
      }),
    (Nt = s
      ? function (t, e, r) {
          return Ut(t, e, y(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        });
  var Ht,
    Jt,
    Wt = Function.prototype,
    Yt = s && Object.getOwnPropertyDescriptor,
    Kt = yt(Wt, 'name'),
    Xt = {
      EXISTS: Kt,
      PROPER: Kt && 'something' === function () {}.name,
      CONFIGURABLE: Kt && (!s || (s && Yt(Wt, 'name').configurable)),
    }.CONFIGURABLE,
    Qt = {},
    Zt = m(Function.toString);
  P(ft.inspectSource) ||
    (ft.inspectSource = function (t) {
      return Zt(t);
    }),
    (Qt = ft.inspectSource);
  var te,
    ee,
    re = o.WeakMap;
  ee = P(re) && /native code/.test(String(re));
  var ne,
    oe = ut('keys');
  ne = function (t) {
    return oe[t] || (oe[t] = wt(t));
  };
  var ie = {};
  ie = {};
  var se,
    ae,
    ue,
    ce = 'Object already initialized',
    fe = o.TypeError,
    le = o.WeakMap;
  if (ee || ft.state) {
    var he = ft.state || (ft.state = new le());
    (he.get = he.get),
      (he.has = he.has),
      (he.set = he.set),
      (se = function (t, e) {
        if (he.has(t)) throw fe(ce);
        return (e.facade = t), he.set(t, e), e;
      }),
      (ae = function (t) {
        return he.get(t) || {};
      }),
      (ue = function (t) {
        return he.has(t);
      });
  } else {
    var pe = ne('state');
    (ie[pe] = !0),
      (se = function (t, e) {
        if (yt(t, pe)) throw fe(ce);
        return (e.facade = t), Nt(t, pe, e), e;
      }),
      (ae = function (t) {
        return yt(t, pe) ? t[pe] : {};
      }),
      (ue = function (t) {
        return yt(t, pe);
      });
  }
  var de = (te = {
      set: se,
      get: ae,
      has: ue,
      enforce: function (t) {
        return ue(t) ? ae(t) : se(t, {});
      },
      getterFor: function (t) {
        return function (e) {
          var r;
          if (!C(e) || (r = ae(e)).type !== t)
            throw fe('Incompatible receiver, ' + t + ' required');
          return r;
        };
      },
    }).enforce,
    ye = te.get,
    ge = Object.defineProperty,
    me =
      s &&
      !a(function () {
        return 8 !== ge(function () {}, 'length', { value: 8 }).length;
      }),
    we = String(String).split('String'),
    be = (Jt = function (t, e, r) {
      'Symbol(' === String(e).slice(0, 7) &&
        (e = '[' + String(e).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
        r && r.getter && (e = 'get ' + e),
        r && r.setter && (e = 'set ' + e),
        (!yt(t, 'name') || (Xt && t.name !== e)) &&
          (s ? ge(t, 'name', { value: e, configurable: !0 }) : (t.name = e)),
        me &&
          r &&
          yt(r, 'arity') &&
          t.length !== r.arity &&
          ge(t, 'length', { value: r.arity });
      try {
        r && yt(r, 'constructor') && r.constructor
          ? s && ge(t, 'prototype', { writable: !1 })
          : t.prototype && (t.prototype = void 0);
      } catch (t) {}
      var n = de(t);
      return (
        yt(n, 'source') || (n.source = we.join('string' == typeof e ? e : '')),
        t
      );
    });
  (Function.prototype.toString = be(function () {
    return (P(this) && ye(this).source) || Qt(this);
  }, 'toString')),
    (Ht = function (t, e, r, n) {
      n || (n = {});
      var o = n.enumerable,
        i = void 0 !== n.name ? n.name : e;
      if ((P(r) && Jt(r, i, n), n.global)) o ? (t[e] = r) : ct(e, r);
      else {
        try {
          n.unsafe ? t[e] && (o = !0) : delete t[e];
        } catch (t) {}
        o
          ? (t[e] = r)
          : Ut(t, e, {
              value: r,
              enumerable: !1,
              configurable: !n.nonConfigurable,
              writable: !n.nonWritable,
            });
      }
      return t;
    });
  var ve,
    Ee,
    Oe,
    Ae,
    Te,
    Se = {},
    Be = {},
    Re = Math.ceil,
    Ie = Math.floor;
  (Be =
    Math.trunc ||
    function (t) {
      var e = +t;
      return (e > 0 ? Ie : Re)(e);
    }),
    (Te = function (t) {
      var e = +t;
      return e != e || 0 === e ? 0 : Be(e);
    });
  var je = Math.max,
    Le = Math.min;
  Ae = function (t, e) {
    var r = Te(t);
    return r < 0 ? je(r + e, 0) : Le(r, e);
  };
  var _e,
    Ue,
    xe = Math.min;
  (Ue = function (t) {
    return t > 0 ? xe(Te(t), 9007199254740991) : 0;
  }),
    (_e = function (t) {
      return Ue(t.length);
    });
  var Ce = function (t) {
      return function (e, r, n) {
        var o,
          i = g(e),
          s = _e(i),
          a = Ae(n, s);
        if (t && r != r) {
          for (; s > a; ) if ((o = i[a++]) != o) return !0;
        } else
          for (; s > a; a++)
            if ((t || a in i) && i[a] === r) return t || a || 0;
        return !t && -1;
      };
    },
    Pe = { includes: Ce(!0), indexOf: Ce(!1) }.indexOf,
    Ne = m([].push);
  Oe = function (t, e) {
    var r,
      n = g(t),
      o = 0,
      i = [];
    for (r in n) !yt(ie, r) && yt(n, r) && Ne(i, r);
    for (; e.length > o; ) yt(n, (r = e[o++])) && (~Pe(i, r) || Ne(i, r));
    return i;
  };
  var Fe,
    ke = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ].concat('length', 'prototype');
  (Ee =
    Object.getOwnPropertyNames ||
    function (t) {
      return Oe(t, ke);
    }),
    (Fe = Object.getOwnPropertySymbols);
  var De = m([].concat);
  (Se =
    D('Reflect', 'ownKeys') ||
    function (t) {
      var e = Ee(Ft(t));
      return Fe ? De(e, Fe(t)) : e;
    }),
    (ve = function (t, e, r) {
      for (var o = Se(e), i = Ut, s = n, a = 0; a < o.length; a++) {
        var u = o[a];
        yt(t, u) || (r && yt(r, u)) || i(t, u, s(e, u));
      }
    });
  var Me = {},
    ze = /#|\.prototype\./,
    $e = function (t, e) {
      var r = Ve[qe(t)];
      return r == He || (r != Ge && (P(e) ? a(e) : !!e));
    },
    qe = ($e.normalize = function (t) {
      return String(t).replace(ze, '.').toLowerCase();
    }),
    Ve = ($e.data = {}),
    Ge = ($e.NATIVE = 'N'),
    He = ($e.POLYFILL = 'P');
  (Me = $e),
    (r = function (t, e) {
      var r,
        n,
        i,
        s,
        a,
        u = t.target,
        c = t.global,
        f = t.stat;
      if ((r = c ? o : f ? o[u] || ct(u, {}) : (o[u] || {}).prototype))
        for (n in e) {
          if (
            ((s = e[n]),
            (i = t.dontCallGetSet ? (a = Pt(r, n)) && a.value : r[n]),
            !Me(c ? n : u + (f ? '.' : '#') + n, t.forced) && void 0 !== i)
          ) {
            if (typeof s == typeof i) continue;
            ve(s, i);
          }
          (t.sham || (i && i.sham)) && Nt(s, 'sham', !0), Ht(r, n, s, t);
        }
    });
  var Je,
    We,
    Ye = TypeError,
    Ke = function (t) {
      return function (e, r, n, o) {
        et(r);
        var i = dt(e),
          s = v(i),
          a = _e(i),
          u = t ? a - 1 : 0,
          c = t ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (u in s) {
              (o = s[u]), (u += c);
              break;
            }
            if (((u += c), t ? u < 0 : a <= u))
              throw Ye('Reduce of empty array with no initial value');
          }
        for (; t ? u >= 0 : a > u; u += c) u in s && (o = r(o, s[u], u, i));
        return o;
      };
    },
    Xe = (Je = { left: Ke(!1), right: Ke(!0) }).left;
  We = function (t, e) {
    var r = [][t];
    return (
      !!r &&
      a(function () {
        r.call(
          null,
          e ||
            function () {
              return 1;
            },
          1
        );
      })
    );
  };
  var Qe;
  (Qe = 'process' == w(o.process)),
    r(
      {
        target: 'Array',
        proto: !0,
        forced: !We('reduce') || (!Qe && G > 79 && G < 83),
      },
      {
        reduce: function (t) {
          var e = arguments.length;
          return Xe(this, t, e, e > 1 ? arguments[1] : void 0);
        },
      }
    );
  var Ze = Je.right;
  r(
    {
      target: 'Array',
      proto: !0,
      forced: !We('reduceRight') || (!Qe && G > 79 && G < 83),
    },
    {
      reduceRight: function (t) {
        return Ze(
          this,
          t,
          arguments.length,
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  var tr = Math.hypot,
    er = Math.abs,
    rr = Math.sqrt;
  r(
    {
      target: 'Math',
      stat: !0,
      arity: 2,
      forced: !!tr && tr(1 / 0, NaN) !== 1 / 0,
    },
    {
      hypot: function (t, e) {
        for (var r, n, o = 0, i = 0, s = arguments.length, a = 0; i < s; )
          a < (r = er(arguments[i++]))
            ? ((o = o * (n = a / r) * n + 1), (a = r))
            : (o += r > 0 ? (n = r / a) * n : r);
        return a === 1 / 0 ? 1 / 0 : a * rr(o);
      },
    }
  );
  var nr, or;
  or = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView;
  var ir,
    sr = {},
    ar = {};
  (ar[at('toStringTag')] = 'z'), (ir = '[object z]' === String(ar));
  var ur = at('toStringTag'),
    cr = Object,
    fr =
      'Arguments' ==
      w(
        (function () {
          return arguments;
        })()
      );
  sr = ir
    ? w
    : function (t) {
        var e, r, n;
        return void 0 === t
          ? 'Undefined'
          : null === t
          ? 'Null'
          : 'string' ==
            typeof (r = (function (t, e) {
              try {
                return t[e];
              } catch (t) {}
            })((e = cr(t)), ur))
          ? r
          : fr
          ? w(e)
          : 'Object' == (n = w(e)) && P(e.callee)
          ? 'Arguments'
          : n;
      };
  var lr,
    hr = Ut,
    pr = {};
  lr = !a(function () {
    function t() {}
    return (
      (t.prototype.constructor = null),
      Object.getPrototypeOf(new t()) !== t.prototype
    );
  });
  var dr = ne('IE_PROTO'),
    yr = Object,
    gr = yr.prototype;
  pr = lr
    ? yr.getPrototypeOf
    : function (t) {
        var e = dt(t);
        if (yt(e, dr)) return e[dr];
        var r = e.constructor;
        return P(r) && e instanceof r
          ? r.prototype
          : e instanceof yr
          ? gr
          : null;
      };
  var mr,
    wr = {},
    br = String,
    vr = TypeError;
  (mr = function (t) {
    if ('object' == typeof t || P(t)) return t;
    throw vr("Can't set " + br(t) + ' as a prototype');
  }),
    (wr =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = m(
                Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')
                  .set
              ))(r, []),
                (e = r instanceof Array);
            } catch (t) {}
            return function (r, n) {
              return Ft(r), mr(n), e ? t(r, n) : (r.__proto__ = n), r;
            };
          })()
        : void 0));
  var Er,
    Or,
    Ar,
    Tr = te.enforce,
    Sr = te.get,
    Br = o.Int8Array,
    Rr = Br && Br.prototype,
    Ir = o.Uint8ClampedArray,
    jr = Ir && Ir.prototype,
    Lr = Br && pr(Br),
    _r = Rr && pr(Rr),
    Ur = Object.prototype,
    xr = o.TypeError,
    Cr = at('toStringTag'),
    Pr = wt('TYPED_ARRAY_TAG'),
    Nr = 'TypedArrayConstructor',
    Fr = or && !!wr && 'Opera' !== sr(o.opera),
    kr = !1,
    Dr = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8,
    },
    Mr = { BigInt64Array: 8, BigUint64Array: 8 },
    zr = function (t) {
      var e = pr(t);
      if (C(e)) {
        var r = Sr(e);
        return r && yt(r, Nr) ? r.TypedArrayConstructor : zr(e);
      }
    },
    $r = function (t) {
      if (!C(t)) return !1;
      var e = sr(t);
      return yt(Dr, e) || yt(Mr, e);
    };
  for (Er in Dr)
    (Ar = (Or = o[Er]) && Or.prototype)
      ? (Tr(Ar).TypedArrayConstructor = Or)
      : (Fr = !1);
  for (Er in Mr)
    (Ar = (Or = o[Er]) && Or.prototype) && (Tr(Ar).TypedArrayConstructor = Or);
  if (
    (!Fr || !P(Lr) || Lr === Function.prototype) &&
    ((Lr = function () {
      throw xr('Incorrect invocation');
    }),
    Fr)
  )
    for (Er in Dr) o[Er] && wr(o[Er], Lr);
  if ((!Fr || !_r || _r === Ur) && ((_r = Lr.prototype), Fr))
    for (Er in Dr) o[Er] && wr(o[Er].prototype, _r);
  if ((Fr && pr(jr) !== _r && wr(jr, _r), s && !yt(_r, Cr)))
    for (Er in ((kr = !0),
    hr(_r, Cr, {
      get: function () {
        return C(this) ? this[Pr] : void 0;
      },
    }),
    Dr))
      o[Er] && Nt(o[Er], Pr, Er);
  nr = {
    NATIVE_ARRAY_BUFFER_VIEWS: Fr,
    TYPED_ARRAY_TAG: kr && Pr,
    aTypedArray: function (t) {
      if ($r(t)) return t;
      throw xr('Target is not a typed array');
    },
    aTypedArrayConstructor: function (t) {
      if (P(t) && (!wr || $(Lr, t))) return t;
      throw xr(rt(t) + ' is not a typed array constructor');
    },
    exportTypedArrayMethod: function (t, e, r, n) {
      if (s) {
        if (r)
          for (var i in Dr) {
            var a = o[i];
            if (a && yt(a.prototype, t))
              try {
                delete a.prototype[t];
              } catch (r) {
                try {
                  a.prototype[t] = e;
                } catch (t) {}
              }
          }
        (_r[t] && !r) || Ht(_r, t, r ? e : (Fr && Rr[t]) || e, n);
      }
    },
    exportTypedArrayStaticMethod: function (t, e, r) {
      var n, i;
      if (s) {
        if (wr) {
          if (r)
            for (n in Dr)
              if ((i = o[n]) && yt(i, t))
                try {
                  delete i[t];
                } catch (t) {}
          if (Lr[t] && !r) return;
          try {
            return Ht(Lr, t, r ? e : (Fr && Lr[t]) || e);
          } catch (t) {}
        }
        for (n in Dr) !(i = o[n]) || (i[t] && !r) || Ht(i, t, e);
      }
    },
    getTypedArrayConstructor: zr,
    isView: function (t) {
      if (!C(t)) return !1;
      var e = sr(t);
      return 'DataView' === e || yt(Dr, e) || yt(Mr, e);
    },
    isTypedArray: $r,
    TypedArray: Lr,
    TypedArrayPrototype: _r,
  };
  var qr,
    Vr,
    Gr = RangeError;
  Vr = function (t) {
    var e = Te(t);
    if (e < 0) throw Gr("The argument can't be less than 0");
    return e;
  };
  var Hr = RangeError;
  qr = function (t, e) {
    var r = Vr(t);
    if (r % e) throw Hr('Wrong offset');
    return r;
  };
  var Jr = o.RangeError,
    Wr = o.Int8Array,
    Yr = Wr && Wr.prototype,
    Kr = Yr && Yr.set,
    Xr = nr.aTypedArray,
    Qr = nr.exportTypedArrayMethod,
    Zr = !a(function () {
      var t = new Uint8ClampedArray(2);
      return c(Kr, t, { length: 1, 0: 3 }, 1), 3 !== t[1];
    }),
    tn =
      Zr &&
      nr.NATIVE_ARRAY_BUFFER_VIEWS &&
      a(function () {
        var t = new Wr(2);
        return t.set(1), t.set('2', 1), 0 !== t[0] || 2 !== t[1];
      });
  Qr(
    'set',
    function (t) {
      Xr(this);
      var e = qr(arguments.length > 1 ? arguments[1] : void 0, 1),
        r = dt(t);
      if (Zr) return c(Kr, this, r, e);
      var n = this.length,
        o = _e(r),
        i = 0;
      if (o + e > n) throw Jr('Wrong length');
      for (; i < o; ) this[e + i] = r[i++];
    },
    !Zr || tn
  );
  var en,
    rn = {},
    nn = Function.prototype,
    on = nn.apply,
    sn = nn.call;
  rn =
    ('object' == typeof Reflect && Reflect.apply) ||
    (u
      ? sn.bind(on)
      : function () {
          return sn.apply(on, arguments);
        });
  var an,
    un = m(m.bind);
  an = function (t, e) {
    return (
      et(t),
      void 0 === e
        ? t
        : u
        ? un(t, e)
        : function () {
            return t.apply(e, arguments);
          }
    );
  };
  var cn = {};
  cn = D('document', 'documentElement');
  var fn = {};
  fn = m([].slice);
  var ln,
    hn = TypeError;
  ln = function (t, e) {
    if (t < e) throw hn('Not enough arguments');
    return t;
  };
  var pn;
  pn = /(?:ipad|iphone|ipod).*applewebkit/i.test(H);
  var dn,
    yn,
    gn,
    mn,
    wn = o.setImmediate,
    bn = o.clearImmediate,
    vn = o.process,
    En = o.Dispatch,
    On = o.Function,
    An = o.MessageChannel,
    Tn = o.String,
    Sn = 0,
    Bn = {},
    Rn = 'onreadystatechange';
  try {
    dn = o.location;
  } catch (t) {}
  var In = function (t) {
      if (yt(Bn, t)) {
        var e = Bn[t];
        delete Bn[t], e();
      }
    },
    jn = function (t) {
      return function () {
        In(t);
      };
    },
    Ln = function (t) {
      In(t.data);
    },
    _n = function (t) {
      o.postMessage(Tn(t), dn.protocol + '//' + dn.host);
    };
  (wn && bn) ||
    ((wn = function (t) {
      ln(arguments.length, 1);
      var e = P(t) ? t : On(t),
        r = fn(arguments, 1);
      return (
        (Bn[++Sn] = function () {
          rn(e, void 0, r);
        }),
        yn(Sn),
        Sn
      );
    }),
    (bn = function (t) {
      delete Bn[t];
    }),
    Qe
      ? (yn = function (t) {
          vn.nextTick(jn(t));
        })
      : En && En.now
      ? (yn = function (t) {
          En.now(jn(t));
        })
      : An && !pn
      ? ((mn = (gn = new An()).port2),
        (gn.port1.onmessage = Ln),
        (yn = an(mn.postMessage, mn)))
      : o.addEventListener &&
        P(o.postMessage) &&
        !o.importScripts &&
        dn &&
        'file:' !== dn.protocol &&
        !a(_n)
      ? ((yn = _n), o.addEventListener('message', Ln, !1))
      : (yn =
          Rn in jt('script')
            ? function (t) {
                cn.appendChild(jt('script')).onreadystatechange = function () {
                  cn.removeChild(this), In(t);
                };
              }
            : function (t) {
                setTimeout(jn(t), 0);
              }));
  var Un = (en = { set: wn, clear: bn }).clear;
  r(
    { global: !0, bind: !0, enumerable: !0, forced: o.clearImmediate !== Un },
    { clearImmediate: Un }
  );
  var xn = en.set;
  r(
    { global: !0, bind: !0, enumerable: !0, forced: o.setImmediate !== xn },
    { setImmediate: xn }
  );
  var Cn = (function (t) {
    'use strict';
    var e,
      r = Object.prototype,
      n = r.hasOwnProperty,
      o = 'function' == typeof Symbol ? Symbol : {},
      i = o.iterator || '@@iterator',
      s = o.asyncIterator || '@@asyncIterator',
      a = o.toStringTag || '@@toStringTag';
    function u(t, e, r) {
      return (
        Object.defineProperty(t, e, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[e]
      );
    }
    try {
      u({}, '');
    } catch (t) {
      u = function (t, e, r) {
        return (t[e] = r);
      };
    }
    function c(t, e, r, n) {
      var o = e && e.prototype instanceof g ? e : g,
        i = Object.create(o.prototype),
        s = new I(n || []);
      return (
        (i._invoke = (function (t, e, r) {
          var n = l;
          return function (o, i) {
            if (n === p) throw new Error('Generator is already running');
            if (n === d) {
              if ('throw' === o) throw i;
              return L();
            }
            for (r.method = o, r.arg = i; ; ) {
              var s = r.delegate;
              if (s) {
                var a = S(s, r);
                if (a) {
                  if (a === y) continue;
                  return a;
                }
              }
              if ('next' === r.method) r.sent = r._sent = r.arg;
              else if ('throw' === r.method) {
                if (n === l) throw ((n = d), r.arg);
                r.dispatchException(r.arg);
              } else 'return' === r.method && r.abrupt('return', r.arg);
              n = p;
              var u = f(t, e, r);
              if ('normal' === u.type) {
                if (((n = r.done ? d : h), u.arg === y)) continue;
                return { value: u.arg, done: r.done };
              }
              'throw' === u.type &&
                ((n = d), (r.method = 'throw'), (r.arg = u.arg));
            }
          };
        })(t, r, s)),
        i
      );
    }
    function f(t, e, r) {
      try {
        return { type: 'normal', arg: t.call(e, r) };
      } catch (t) {
        return { type: 'throw', arg: t };
      }
    }
    t.wrap = c;
    var l = 'suspendedStart',
      h = 'suspendedYield',
      p = 'executing',
      d = 'completed',
      y = {};
    function g() {}
    function m() {}
    function w() {}
    var b = {};
    u(b, i, function () {
      return this;
    });
    var v = Object.getPrototypeOf,
      E = v && v(v(j([])));
    E && E !== r && n.call(E, i) && (b = E);
    var O = (w.prototype = g.prototype = Object.create(b));
    function A(t) {
      ['next', 'throw', 'return'].forEach(function (e) {
        u(t, e, function (t) {
          return this._invoke(e, t);
        });
      });
    }
    function T(t, e) {
      function r(o, i, s, a) {
        var u = f(t[o], t, i);
        if ('throw' !== u.type) {
          var c = u.arg,
            l = c.value;
          return l && 'object' == typeof l && n.call(l, '__await')
            ? e.resolve(l.__await).then(
                function (t) {
                  r('next', t, s, a);
                },
                function (t) {
                  r('throw', t, s, a);
                }
              )
            : e.resolve(l).then(
                function (t) {
                  (c.value = t), s(c);
                },
                function (t) {
                  return r('throw', t, s, a);
                }
              );
        }
        a(u.arg);
      }
      var o;
      this._invoke = function (t, n) {
        function i() {
          return new e(function (e, o) {
            r(t, n, e, o);
          });
        }
        return (o = o ? o.then(i, i) : i());
      };
    }
    function S(t, r) {
      var n = t.iterator[r.method];
      if (n === e) {
        if (((r.delegate = null), 'throw' === r.method)) {
          if (
            t.iterator.return &&
            ((r.method = 'return'), (r.arg = e), S(t, r), 'throw' === r.method)
          )
            return y;
          (r.method = 'throw'),
            (r.arg = new TypeError(
              "The iterator does not provide a 'throw' method"
            ));
        }
        return y;
      }
      var o = f(n, t.iterator, r.arg);
      if ('throw' === o.type)
        return (r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), y;
      var i = o.arg;
      return i
        ? i.done
          ? ((r[t.resultName] = i.value),
            (r.next = t.nextLoc),
            'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
            (r.delegate = null),
            y)
          : i
        : ((r.method = 'throw'),
          (r.arg = new TypeError('iterator result is not an object')),
          (r.delegate = null),
          y);
    }
    function B(t) {
      var e = { tryLoc: t[0] };
      1 in t && (e.catchLoc = t[1]),
        2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
        this.tryEntries.push(e);
    }
    function R(t) {
      var e = t.completion || {};
      (e.type = 'normal'), delete e.arg, (t.completion = e);
    }
    function I(t) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        t.forEach(B, this),
        this.reset(!0);
    }
    function j(t) {
      if (t) {
        var r = t[i];
        if (r) return r.call(t);
        if ('function' == typeof t.next) return t;
        if (!isNaN(t.length)) {
          var o = -1,
            s = function r() {
              for (; ++o < t.length; )
                if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
              return (r.value = e), (r.done = !0), r;
            };
          return (s.next = s);
        }
      }
      return { next: L };
    }
    function L() {
      return { value: e, done: !0 };
    }
    return (
      (m.prototype = w),
      u(O, 'constructor', w),
      u(w, 'constructor', m),
      (m.displayName = u(w, a, 'GeneratorFunction')),
      (t.isGeneratorFunction = function (t) {
        var e = 'function' == typeof t && t.constructor;
        return (
          !!e && (e === m || 'GeneratorFunction' === (e.displayName || e.name))
        );
      }),
      (t.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, w)
            : ((t.__proto__ = w), u(t, a, 'GeneratorFunction')),
          (t.prototype = Object.create(O)),
          t
        );
      }),
      (t.awrap = function (t) {
        return { __await: t };
      }),
      A(T.prototype),
      u(T.prototype, s, function () {
        return this;
      }),
      (t.AsyncIterator = T),
      (t.async = function (e, r, n, o, i) {
        void 0 === i && (i = Promise);
        var s = new T(c(e, r, n, o), i);
        return t.isGeneratorFunction(r)
          ? s
          : s.next().then(function (t) {
              return t.done ? t.value : s.next();
            });
      }),
      A(O),
      u(O, a, 'Generator'),
      u(O, i, function () {
        return this;
      }),
      u(O, 'toString', function () {
        return '[object Generator]';
      }),
      (t.keys = function (t) {
        var e = [];
        for (var r in t) e.push(r);
        return (
          e.reverse(),
          function r() {
            for (; e.length; ) {
              var n = e.pop();
              if (n in t) return (r.value = n), (r.done = !1), r;
            }
            return (r.done = !0), r;
          }
        );
      }),
      (t.values = j),
      (I.prototype = {
        constructor: I,
        reset: function (t) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = e),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = e),
            this.tryEntries.forEach(R),
            !t)
          )
            for (var r in this)
              't' === r.charAt(0) &&
                n.call(this, r) &&
                !isNaN(+r.slice(1)) &&
                (this[r] = e);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ('throw' === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (t) {
          if (this.done) throw t;
          var r = this;
          function o(n, o) {
            return (
              (a.type = 'throw'),
              (a.arg = t),
              (r.next = n),
              o && ((r.method = 'next'), (r.arg = e)),
              !!o
            );
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var s = this.tryEntries[i],
              a = s.completion;
            if ('root' === s.tryLoc) return o('end');
            if (s.tryLoc <= this.prev) {
              var u = n.call(s, 'catchLoc'),
                c = n.call(s, 'finallyLoc');
              if (u && c) {
                if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
                if (this.prev < s.finallyLoc) return o(s.finallyLoc);
              } else if (u) {
                if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
              } else {
                if (!c)
                  throw new Error('try statement without catch or finally');
                if (this.prev < s.finallyLoc) return o(s.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, e) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (
              o.tryLoc <= this.prev &&
              n.call(o, 'finallyLoc') &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ('break' === t || 'continue' === t) &&
            i.tryLoc <= e &&
            e <= i.finallyLoc &&
            (i = null);
          var s = i ? i.completion : {};
          return (
            (s.type = t),
            (s.arg = e),
            i
              ? ((this.method = 'next'), (this.next = i.finallyLoc), y)
              : this.complete(s)
          );
        },
        complete: function (t, e) {
          if ('throw' === t.type) throw t.arg;
          return (
            'break' === t.type || 'continue' === t.type
              ? (this.next = t.arg)
              : 'return' === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : 'normal' === t.type && e && (this.next = e),
            y
          );
        },
        finish: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.finallyLoc === t)
              return this.complete(r.completion, r.afterLoc), R(r), y;
          }
        },
        catch: function (t) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var r = this.tryEntries[e];
            if (r.tryLoc === t) {
              var n = r.completion;
              if ('throw' === n.type) {
                var o = n.arg;
                R(r);
              }
              return o;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (t, r, n) {
          return (
            (this.delegate = { iterator: j(t), resultName: r, nextLoc: n }),
            'next' === this.method && (this.arg = e),
            y
          );
        },
      }),
      t
    );
  })({});
  try {
    regeneratorRuntime = Cn;
  } catch (t) {
    'object' == typeof globalThis
      ? (globalThis.regeneratorRuntime = Cn)
      : Function('r', 'regeneratorRuntime = r')(Cn);
  }
  const Pn = (t) => {
    mapboxgl.accessToken =
      'pk.eyJ1IjoiY3J5cHRvem9kIiwiYSI6ImNsN3l2ODk1MDBtajkzd3A1d2V6YXc5dWIifQ.PBcqo1oCSj8l9YzpauJpIQ';
    var e = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/cryptozod/cl80307bz000s14tn6q76wz90',
      scrollZoom: !1,
    });
    const r = new mapboxgl.LngLatBounds();
    t.forEach((t) => {
      const n = document.createElement('div');
      (n.className = 'marker'),
        new mapboxgl.Marker({ element: n, anchor: 'bottom' })
          .setLngLat(t.coordinates)
          .addTo(e),
        new mapboxgl.Popup({ offset: 30 })
          .setLngLat(t.coordinates)
          .setHTML(`<p>Day ${t.day}: ${t.description}</p>`)
          .addTo(e),
        r.extend(t.coordinates);
    }),
      e.fitBounds(r, {
        padding: { top: 200, bottom: 150, left: 100, right: 100 },
      });
  };
  function Nn(t, e) {
    return function () {
      return t.apply(e, arguments);
    };
  }
  const { toString: Fn } = Object.prototype,
    { getPrototypeOf: kn } = Object,
    Dn =
      ((Mn = Object.create(null)),
      (t) => {
        const e = Fn.call(t);
        return Mn[e] || (Mn[e] = e.slice(8, -1).toLowerCase());
      });
  var Mn;
  const zn = (t) => ((t = t.toLowerCase()), (e) => Dn(e) === t),
    $n = (t) => (e) => typeof e === t,
    { isArray: qn } = Array,
    Vn = $n('undefined');
  const Gn = zn('ArrayBuffer');
  const Hn = $n('string'),
    Jn = $n('function'),
    Wn = $n('number'),
    Yn = (t) => null !== t && 'object' == typeof t,
    Kn = (t) => {
      if ('object' !== Dn(t)) return !1;
      const e = kn(t);
      return !(
        (null !== e &&
          e !== Object.prototype &&
          null !== Object.getPrototypeOf(e)) ||
        Symbol.toStringTag in t ||
        Symbol.iterator in t
      );
    },
    Xn = zn('Date'),
    Qn = zn('File'),
    Zn = zn('Blob'),
    to = zn('FileList'),
    eo = zn('URLSearchParams');
  function ro(t, e, { allOwnKeys: r = !1 } = {}) {
    if (null == t) return;
    let n, o;
    if (('object' != typeof t && (t = [t]), qn(t)))
      for (n = 0, o = t.length; n < o; n++) e.call(null, t[n], n, t);
    else {
      const o = r ? Object.getOwnPropertyNames(t) : Object.keys(t),
        i = o.length;
      let s;
      for (n = 0; n < i; n++) (s = o[n]), e.call(null, t[s], s, t);
    }
  }
  const no =
    ((oo = 'undefined' != typeof Uint8Array && kn(Uint8Array)),
    (t) => oo && t instanceof oo);
  var oo;
  const io = zn('HTMLFormElement'),
    so = (
      ({ hasOwnProperty: t }) =>
      (e, r) =>
        t.call(e, r)
    )(Object.prototype),
    ao = zn('RegExp'),
    uo = (t, e) => {
      const r = Object.getOwnPropertyDescriptors(t),
        n = {};
      ro(r, (r, o) => {
        !1 !== e(r, o, t) && (n[o] = r);
      }),
        Object.defineProperties(t, n);
    };
  var co = {
    isArray: qn,
    isArrayBuffer: Gn,
    isBuffer: function (t) {
      return (
        null !== t &&
        !Vn(t) &&
        null !== t.constructor &&
        !Vn(t.constructor) &&
        Jn(t.constructor.isBuffer) &&
        t.constructor.isBuffer(t)
      );
    },
    isFormData: (t) => {
      const e = '[object FormData]';
      return (
        t &&
        (('function' == typeof FormData && t instanceof FormData) ||
          Fn.call(t) === e ||
          (Jn(t.toString) && t.toString() === e))
      );
    },
    isArrayBufferView: function (t) {
      let e;
      return (
        (e =
          'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
            ? ArrayBuffer.isView(t)
            : t && t.buffer && Gn(t.buffer)),
        e
      );
    },
    isString: Hn,
    isNumber: Wn,
    isBoolean: (t) => !0 === t || !1 === t,
    isObject: Yn,
    isPlainObject: Kn,
    isUndefined: Vn,
    isDate: Xn,
    isFile: Qn,
    isBlob: Zn,
    isRegExp: ao,
    isFunction: Jn,
    isStream: (t) => Yn(t) && Jn(t.pipe),
    isURLSearchParams: eo,
    isTypedArray: no,
    isFileList: to,
    forEach: ro,
    merge: function t() {
      const e = {},
        r = (r, n) => {
          Kn(e[n]) && Kn(r)
            ? (e[n] = t(e[n], r))
            : Kn(r)
            ? (e[n] = t({}, r))
            : qn(r)
            ? (e[n] = r.slice())
            : (e[n] = r);
        };
      for (let t = 0, e = arguments.length; t < e; t++)
        arguments[t] && ro(arguments[t], r);
      return e;
    },
    extend: (t, e, r, { allOwnKeys: n } = {}) => (
      ro(
        e,
        (e, n) => {
          r && Jn(e) ? (t[n] = Nn(e, r)) : (t[n] = e);
        },
        { allOwnKeys: n }
      ),
      t
    ),
    trim: (t) =>
      t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''),
    stripBOM: (t) => (65279 === t.charCodeAt(0) && (t = t.slice(1)), t),
    inherits: (t, e, r, n) => {
      (t.prototype = Object.create(e.prototype, n)),
        (t.prototype.constructor = t),
        Object.defineProperty(t, 'super', { value: e.prototype }),
        r && Object.assign(t.prototype, r);
    },
    toFlatObject: (t, e, r, n) => {
      let o, i, s;
      const a = {};
      if (((e = e || {}), null == t)) return e;
      do {
        for (o = Object.getOwnPropertyNames(t), i = o.length; i-- > 0; )
          (s = o[i]),
            (n && !n(s, t, e)) || a[s] || ((e[s] = t[s]), (a[s] = !0));
        t = !1 !== r && kn(t);
      } while (t && (!r || r(t, e)) && t !== Object.prototype);
      return e;
    },
    kindOf: Dn,
    kindOfTest: zn,
    endsWith: (t, e, r) => {
      (t = String(t)),
        (void 0 === r || r > t.length) && (r = t.length),
        (r -= e.length);
      const n = t.indexOf(e, r);
      return -1 !== n && n === r;
    },
    toArray: (t) => {
      if (!t) return null;
      if (qn(t)) return t;
      let e = t.length;
      if (!Wn(e)) return null;
      const r = new Array(e);
      for (; e-- > 0; ) r[e] = t[e];
      return r;
    },
    forEachEntry: (t, e) => {
      const r = (t && t[Symbol.iterator]).call(t);
      let n;
      for (; (n = r.next()) && !n.done; ) {
        const r = n.value;
        e.call(t, r[0], r[1]);
      }
    },
    matchAll: (t, e) => {
      let r;
      const n = [];
      for (; null !== (r = t.exec(e)); ) n.push(r);
      return n;
    },
    isHTMLForm: io,
    hasOwnProperty: so,
    hasOwnProp: so,
    reduceDescriptors: uo,
    freezeMethods: (t) => {
      uo(t, (e, r) => {
        const n = t[r];
        Jn(n) &&
          ((e.enumerable = !1),
          'writable' in e
            ? (e.writable = !1)
            : e.set ||
              (e.set = () => {
                throw Error("Can not read-only method '" + r + "'");
              }));
      });
    },
    toObjectSet: (t, e) => {
      const r = {},
        n = (t) => {
          t.forEach((t) => {
            r[t] = !0;
          });
        };
      return qn(t) ? n(t) : n(String(t).split(e)), r;
    },
    toCamelCase: (t) =>
      t.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g, function (t, e, r) {
        return e.toUpperCase() + r;
      }),
    noop: () => {},
    toFiniteNumber: (t, e) => ((t = +t), Number.isFinite(t) ? t : e),
  };
  function fo(t, e, r, n, o) {
    Error.call(this),
      Error.captureStackTrace
        ? Error.captureStackTrace(this, this.constructor)
        : (this.stack = new Error().stack),
      (this.message = t),
      (this.name = 'AxiosError'),
      e && (this.code = e),
      r && (this.config = r),
      n && (this.request = n),
      o && (this.response = o);
  }
  co.inherits(fo, Error, {
    toJSON: function () {
      return {
        message: this.message,
        name: this.name,
        description: this.description,
        number: this.number,
        fileName: this.fileName,
        lineNumber: this.lineNumber,
        columnNumber: this.columnNumber,
        stack: this.stack,
        config: this.config,
        code: this.code,
        status:
          this.response && this.response.status ? this.response.status : null,
      };
    },
  });
  const lo = fo.prototype,
    ho = {};
  [
    'ERR_BAD_OPTION_VALUE',
    'ERR_BAD_OPTION',
    'ECONNABORTED',
    'ETIMEDOUT',
    'ERR_NETWORK',
    'ERR_FR_TOO_MANY_REDIRECTS',
    'ERR_DEPRECATED',
    'ERR_BAD_RESPONSE',
    'ERR_BAD_REQUEST',
    'ERR_CANCELED',
    'ERR_NOT_SUPPORT',
    'ERR_INVALID_URL',
  ].forEach((t) => {
    ho[t] = { value: t };
  }),
    Object.defineProperties(fo, ho),
    Object.defineProperty(lo, 'isAxiosError', { value: !0 }),
    (fo.from = (t, e, r, n, o, i) => {
      const s = Object.create(lo);
      return (
        co.toFlatObject(
          t,
          s,
          function (t) {
            return t !== Error.prototype;
          },
          (t) => 'isAxiosError' !== t
        ),
        fo.call(s, t.message, e, r, n, o),
        (s.cause = t),
        (s.name = t.name),
        i && Object.assign(s, i),
        s
      );
    });
  var po,
    yo,
    go,
    mo = fo,
    wo = e('object' == typeof self ? self.FormData : window.FormData);
  (yo = function (t) {
    var e,
      r,
      n = Ro(t),
      o = n[0],
      i = n[1],
      s = new Ao(
        (function (t, e, r) {
          return (3 * (e + r)) / 4 - r;
        })(0, o, i)
      ),
      a = 0,
      u = i > 0 ? o - 4 : o;
    for (r = 0; r < u; r += 4)
      (e =
        (Oo[t.charCodeAt(r)] << 18) |
        (Oo[t.charCodeAt(r + 1)] << 12) |
        (Oo[t.charCodeAt(r + 2)] << 6) |
        Oo[t.charCodeAt(r + 3)]),
        (s[a++] = (e >> 16) & 255),
        (s[a++] = (e >> 8) & 255),
        (s[a++] = 255 & e);
    2 === i &&
      ((e = (Oo[t.charCodeAt(r)] << 2) | (Oo[t.charCodeAt(r + 1)] >> 4)),
      (s[a++] = 255 & e));
    1 === i &&
      ((e =
        (Oo[t.charCodeAt(r)] << 10) |
        (Oo[t.charCodeAt(r + 1)] << 4) |
        (Oo[t.charCodeAt(r + 2)] >> 2)),
      (s[a++] = (e >> 8) & 255),
      (s[a++] = 255 & e));
    return s;
  }),
    (go = function (t) {
      for (
        var e, r = t.length, n = r % 3, o = [], i = 16383, s = 0, a = r - n;
        s < a;
        s += i
      )
        o.push(Io(t, s, s + i > a ? a : s + i));
      1 === n
        ? ((e = t[r - 1]), o.push(Eo[e >> 2] + Eo[(e << 4) & 63] + '=='))
        : 2 === n &&
          ((e = (t[r - 2] << 8) + t[r - 1]),
          o.push(Eo[e >> 10] + Eo[(e >> 4) & 63] + Eo[(e << 2) & 63] + '='));
      return o.join('');
    });
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  for (
    var bo,
      vo,
      Eo = [],
      Oo = [],
      Ao = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
      To = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
      So = 0,
      Bo = To.length;
    So < Bo;
    ++So
  )
    (Eo[So] = To[So]), (Oo[To.charCodeAt(So)] = So);
  function Ro(t) {
    var e = t.length;
    if (e % 4 > 0)
      throw new Error('Invalid string. Length must be a multiple of 4');
    var r = t.indexOf('=');
    return -1 === r && (r = e), [r, r === e ? 0 : 4 - (r % 4)];
  }
  function Io(t, e, r) {
    for (var n, o, i = [], s = e; s < r; s += 3)
      (n =
        ((t[s] << 16) & 16711680) +
        ((t[s + 1] << 8) & 65280) +
        (255 & t[s + 2])),
        i.push(
          Eo[((o = n) >> 18) & 63] +
            Eo[(o >> 12) & 63] +
            Eo[(o >> 6) & 63] +
            Eo[63 & o]
        );
    return i.join('');
  }
  (Oo['-'.charCodeAt(0)] = 62),
    (Oo['_'.charCodeAt(0)] = 63),
    (bo = function (t, e, r, n, o) {
      var i,
        s,
        a = 8 * o - n - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        f = -7,
        l = r ? o - 1 : 0,
        h = r ? -1 : 1,
        p = t[e + l];
      for (
        l += h, i = p & ((1 << -f) - 1), p >>= -f, f += a;
        f > 0;
        i = 256 * i + t[e + l], l += h, f -= 8
      );
      for (
        s = i & ((1 << -f) - 1), i >>= -f, f += n;
        f > 0;
        s = 256 * s + t[e + l], l += h, f -= 8
      );
      if (0 === i) i = 1 - c;
      else {
        if (i === u) return s ? NaN : (1 / 0) * (p ? -1 : 1);
        (s += Math.pow(2, n)), (i -= c);
      }
      return (p ? -1 : 1) * s * Math.pow(2, i - n);
    }),
    (vo = function (t, e, r, n, o, i) {
      var s,
        a,
        u,
        c = 8 * i - o - 1,
        f = (1 << c) - 1,
        l = f >> 1,
        h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        p = n ? 0 : i - 1,
        d = n ? 1 : -1,
        y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
      for (
        e = Math.abs(e),
          isNaN(e) || e === 1 / 0
            ? ((a = isNaN(e) ? 1 : 0), (s = f))
            : ((s = Math.floor(Math.log(e) / Math.LN2)),
              e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
              (e += s + l >= 1 ? h / u : h * Math.pow(2, 1 - l)) * u >= 2 &&
                (s++, (u /= 2)),
              s + l >= f
                ? ((a = 0), (s = f))
                : s + l >= 1
                ? ((a = (e * u - 1) * Math.pow(2, o)), (s += l))
                : ((a = e * Math.pow(2, l - 1) * Math.pow(2, o)), (s = 0)));
        o >= 8;
        t[r + p] = 255 & a, p += d, a /= 256, o -= 8
      );
      for (
        s = (s << o) | a, c += o;
        c > 0;
        t[r + p] = 255 & s, p += d, s /= 256, c -= 8
      );
      t[r + p - d] |= 128 * y;
    });
  const jo =
    'function' == typeof Symbol && 'function' == typeof Symbol.for
      ? Symbol.for('nodejs.util.inspect.custom')
      : null;
  po = Uo;
  const Lo = 2147483647;
  function _o(t) {
    if (t > Lo)
      throw new RangeError(
        'The value "' + t + '" is invalid for option "size"'
      );
    const e = new Uint8Array(t);
    return Object.setPrototypeOf(e, Uo.prototype), e;
  }
  function Uo(t, e, r) {
    if ('number' == typeof t) {
      if ('string' == typeof e)
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return Po(t);
    }
    return xo(t, e, r);
  }
  function xo(t, e, r) {
    if ('string' == typeof t)
      return (function (t, e) {
        ('string' == typeof e && '' !== e) || (e = 'utf8');
        if (!Uo.isEncoding(e)) throw new TypeError('Unknown encoding: ' + e);
        const r = 0 | Do(t, e);
        let n = _o(r);
        const o = n.write(t, e);
        o !== r && (n = n.slice(0, o));
        return n;
      })(t, e);
    if (ArrayBuffer.isView(t))
      return (function (t) {
        if (bi(t, Uint8Array)) {
          const e = new Uint8Array(t);
          return Fo(e.buffer, e.byteOffset, e.byteLength);
        }
        return No(t);
      })(t);
    if (null == t)
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
          typeof t
      );
    if (bi(t, ArrayBuffer) || (t && bi(t.buffer, ArrayBuffer)))
      return Fo(t, e, r);
    if (
      'undefined' != typeof SharedArrayBuffer &&
      (bi(t, SharedArrayBuffer) || (t && bi(t.buffer, SharedArrayBuffer)))
    )
      return Fo(t, e, r);
    if ('number' == typeof t)
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const n = t.valueOf && t.valueOf();
    if (null != n && n !== t) return Uo.from(n, e, r);
    const o = (function (t) {
      if (Uo.isBuffer(t)) {
        const e = 0 | ko(t.length),
          r = _o(e);
        return 0 === r.length || t.copy(r, 0, 0, e), r;
      }
      if (void 0 !== t.length)
        return 'number' != typeof t.length || vi(t.length) ? _o(0) : No(t);
      if ('Buffer' === t.type && Array.isArray(t.data)) return No(t.data);
    })(t);
    if (o) return o;
    if (
      'undefined' != typeof Symbol &&
      null != Symbol.toPrimitive &&
      'function' == typeof t[Symbol.toPrimitive]
    )
      return Uo.from(t[Symbol.toPrimitive]('string'), e, r);
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
        typeof t
    );
  }
  function Co(t) {
    if ('number' != typeof t)
      throw new TypeError('"size" argument must be of type number');
    if (t < 0)
      throw new RangeError(
        'The value "' + t + '" is invalid for option "size"'
      );
  }
  function Po(t) {
    return Co(t), _o(t < 0 ? 0 : 0 | ko(t));
  }
  function No(t) {
    const e = t.length < 0 ? 0 : 0 | ko(t.length),
      r = _o(e);
    for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
    return r;
  }
  function Fo(t, e, r) {
    if (e < 0 || t.byteLength < e)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (t.byteLength < e + (r || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      (n =
        void 0 === e && void 0 === r
          ? new Uint8Array(t)
          : void 0 === r
          ? new Uint8Array(t, e)
          : new Uint8Array(t, e, r)),
      Object.setPrototypeOf(n, Uo.prototype),
      n
    );
  }
  function ko(t) {
    if (t >= Lo)
      throw new RangeError(
        'Attempt to allocate Buffer larger than maximum size: 0x' +
          Lo.toString(16) +
          ' bytes'
      );
    return 0 | t;
  }
  function Do(t, e) {
    if (Uo.isBuffer(t)) return t.length;
    if (ArrayBuffer.isView(t) || bi(t, ArrayBuffer)) return t.byteLength;
    if ('string' != typeof t)
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof t
      );
    const r = t.length,
      n = arguments.length > 2 && !0 === arguments[2];
    if (!n && 0 === r) return 0;
    let o = !1;
    for (;;)
      switch (e) {
        case 'ascii':
        case 'latin1':
        case 'binary':
          return r;
        case 'utf8':
        case 'utf-8':
          return gi(t).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return 2 * r;
        case 'hex':
          return r >>> 1;
        case 'base64':
          return mi(t).length;
        default:
          if (o) return n ? -1 : gi(t).length;
          (e = ('' + e).toLowerCase()), (o = !0);
      }
  }
  function Mo(t, e, r) {
    let n = !1;
    if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return '';
    if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
      return '';
    if ((r >>>= 0) <= (e >>>= 0)) return '';
    for (t || (t = 'utf8'); ; )
      switch (t) {
        case 'hex':
          return ti(this, e, r);
        case 'utf8':
        case 'utf-8':
          return Ko(this, e, r);
        case 'ascii':
          return Qo(this, e, r);
        case 'latin1':
        case 'binary':
          return Zo(this, e, r);
        case 'base64':
          return Yo(this, e, r);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return ei(this, e, r);
        default:
          if (n) throw new TypeError('Unknown encoding: ' + t);
          (t = (t + '').toLowerCase()), (n = !0);
      }
  }
  function zo(t, e, r) {
    const n = t[e];
    (t[e] = t[r]), (t[r] = n);
  }
  function $o(t, e, r, n, o) {
    if (0 === t.length) return -1;
    if (
      ('string' == typeof r
        ? ((n = r), (r = 0))
        : r > 2147483647
        ? (r = 2147483647)
        : r < -2147483648 && (r = -2147483648),
      vi((r = +r)) && (r = o ? 0 : t.length - 1),
      r < 0 && (r = t.length + r),
      r >= t.length)
    ) {
      if (o) return -1;
      r = t.length - 1;
    } else if (r < 0) {
      if (!o) return -1;
      r = 0;
    }
    if (('string' == typeof e && (e = Uo.from(e, n)), Uo.isBuffer(e)))
      return 0 === e.length ? -1 : qo(t, e, r, n, o);
    if ('number' == typeof e)
      return (
        (e &= 255),
        'function' == typeof Uint8Array.prototype.indexOf
          ? o
            ? Uint8Array.prototype.indexOf.call(t, e, r)
            : Uint8Array.prototype.lastIndexOf.call(t, e, r)
          : qo(t, [e], r, n, o)
      );
    throw new TypeError('val must be string, number or Buffer');
  }
  function qo(t, e, r, n, o) {
    let i,
      s = 1,
      a = t.length,
      u = e.length;
    if (
      void 0 !== n &&
      ('ucs2' === (n = String(n).toLowerCase()) ||
        'ucs-2' === n ||
        'utf16le' === n ||
        'utf-16le' === n)
    ) {
      if (t.length < 2 || e.length < 2) return -1;
      (s = 2), (a /= 2), (u /= 2), (r /= 2);
    }
    function c(t, e) {
      return 1 === s ? t[e] : t.readUInt16BE(e * s);
    }
    if (o) {
      let n = -1;
      for (i = r; i < a; i++)
        if (c(t, i) === c(e, -1 === n ? 0 : i - n)) {
          if ((-1 === n && (n = i), i - n + 1 === u)) return n * s;
        } else -1 !== n && (i -= i - n), (n = -1);
    } else
      for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
        let r = !0;
        for (let n = 0; n < u; n++)
          if (c(t, i + n) !== c(e, n)) {
            r = !1;
            break;
          }
        if (r) return i;
      }
    return -1;
  }
  function Vo(t, e, r, n) {
    r = Number(r) || 0;
    const o = t.length - r;
    n ? (n = Number(n)) > o && (n = o) : (n = o);
    const i = e.length;
    let s;
    for (n > i / 2 && (n = i / 2), s = 0; s < n; ++s) {
      const n = parseInt(e.substr(2 * s, 2), 16);
      if (vi(n)) return s;
      t[r + s] = n;
    }
    return s;
  }
  function Go(t, e, r, n) {
    return wi(gi(e, t.length - r), t, r, n);
  }
  function Ho(t, e, r, n) {
    return wi(
      (function (t) {
        const e = [];
        for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
        return e;
      })(e),
      t,
      r,
      n
    );
  }
  function Jo(t, e, r, n) {
    return wi(mi(e), t, r, n);
  }
  function Wo(t, e, r, n) {
    return wi(
      (function (t, e) {
        let r, n, o;
        const i = [];
        for (let s = 0; s < t.length && !((e -= 2) < 0); ++s)
          (r = t.charCodeAt(s)),
            (n = r >> 8),
            (o = r % 256),
            i.push(o),
            i.push(n);
        return i;
      })(e, t.length - r),
      t,
      r,
      n
    );
  }
  function Yo(t, e, r) {
    return 0 === e && r === t.length ? go(t) : go(t.slice(e, r));
  }
  function Ko(t, e, r) {
    r = Math.min(t.length, r);
    const n = [];
    let o = e;
    for (; o < r; ) {
      const e = t[o];
      let i = null,
        s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
      if (o + s <= r) {
        let r, n, a, u;
        switch (s) {
          case 1:
            e < 128 && (i = e);
            break;
          case 2:
            (r = t[o + 1]),
              128 == (192 & r) &&
                ((u = ((31 & e) << 6) | (63 & r)), u > 127 && (i = u));
            break;
          case 3:
            (r = t[o + 1]),
              (n = t[o + 2]),
              128 == (192 & r) &&
                128 == (192 & n) &&
                ((u = ((15 & e) << 12) | ((63 & r) << 6) | (63 & n)),
                u > 2047 && (u < 55296 || u > 57343) && (i = u));
            break;
          case 4:
            (r = t[o + 1]),
              (n = t[o + 2]),
              (a = t[o + 3]),
              128 == (192 & r) &&
                128 == (192 & n) &&
                128 == (192 & a) &&
                ((u =
                  ((15 & e) << 18) |
                  ((63 & r) << 12) |
                  ((63 & n) << 6) |
                  (63 & a)),
                u > 65535 && u < 1114112 && (i = u));
        }
      }
      null === i
        ? ((i = 65533), (s = 1))
        : i > 65535 &&
          ((i -= 65536),
          n.push(((i >>> 10) & 1023) | 55296),
          (i = 56320 | (1023 & i))),
        n.push(i),
        (o += s);
    }
    return (function (t) {
      const e = t.length;
      if (e <= Xo) return String.fromCharCode.apply(String, t);
      let r = '',
        n = 0;
      for (; n < e; )
        r += String.fromCharCode.apply(String, t.slice(n, (n += Xo)));
      return r;
    })(n);
  }
  (Uo.TYPED_ARRAY_SUPPORT = (function () {
    try {
      const t = new Uint8Array(1),
        e = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(e, Uint8Array.prototype),
        Object.setPrototypeOf(t, e),
        42 === t.foo()
      );
    } catch (t) {
      return !1;
    }
  })()),
    Uo.TYPED_ARRAY_SUPPORT ||
      'undefined' == typeof console ||
      'function' != typeof console.error ||
      console.error(
        'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
      ),
    Object.defineProperty(Uo.prototype, 'parent', {
      enumerable: !0,
      get: function () {
        if (Uo.isBuffer(this)) return this.buffer;
      },
    }),
    Object.defineProperty(Uo.prototype, 'offset', {
      enumerable: !0,
      get: function () {
        if (Uo.isBuffer(this)) return this.byteOffset;
      },
    }),
    (Uo.poolSize = 8192),
    (Uo.from = function (t, e, r) {
      return xo(t, e, r);
    }),
    Object.setPrototypeOf(Uo.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(Uo, Uint8Array),
    (Uo.alloc = function (t, e, r) {
      return (function (t, e, r) {
        return (
          Co(t),
          t <= 0
            ? _o(t)
            : void 0 !== e
            ? 'string' == typeof r
              ? _o(t).fill(e, r)
              : _o(t).fill(e)
            : _o(t)
        );
      })(t, e, r);
    }),
    (Uo.allocUnsafe = function (t) {
      return Po(t);
    }),
    (Uo.allocUnsafeSlow = function (t) {
      return Po(t);
    }),
    (Uo.isBuffer = function (t) {
      return null != t && !0 === t._isBuffer && t !== Uo.prototype;
    }),
    (Uo.compare = function (t, e) {
      if (
        (bi(t, Uint8Array) && (t = Uo.from(t, t.offset, t.byteLength)),
        bi(e, Uint8Array) && (e = Uo.from(e, e.offset, e.byteLength)),
        !Uo.isBuffer(t) || !Uo.isBuffer(e))
      )
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        );
      if (t === e) return 0;
      let r = t.length,
        n = e.length;
      for (let o = 0, i = Math.min(r, n); o < i; ++o)
        if (t[o] !== e[o]) {
          (r = t[o]), (n = e[o]);
          break;
        }
      return r < n ? -1 : n < r ? 1 : 0;
    }),
    (Uo.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return !0;
        default:
          return !1;
      }
    }),
    (Uo.concat = function (t, e) {
      if (!Array.isArray(t))
        throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return Uo.alloc(0);
      let r;
      if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
      const n = Uo.allocUnsafe(e);
      let o = 0;
      for (r = 0; r < t.length; ++r) {
        let e = t[r];
        if (bi(e, Uint8Array))
          o + e.length > n.length
            ? (Uo.isBuffer(e) || (e = Uo.from(e)), e.copy(n, o))
            : Uint8Array.prototype.set.call(n, e, o);
        else {
          if (!Uo.isBuffer(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          e.copy(n, o);
        }
        o += e.length;
      }
      return n;
    }),
    (Uo.byteLength = Do),
    (Uo.prototype._isBuffer = !0),
    (Uo.prototype.swap16 = function () {
      const t = this.length;
      if (t % 2 != 0)
        throw new RangeError('Buffer size must be a multiple of 16-bits');
      for (let e = 0; e < t; e += 2) zo(this, e, e + 1);
      return this;
    }),
    (Uo.prototype.swap32 = function () {
      const t = this.length;
      if (t % 4 != 0)
        throw new RangeError('Buffer size must be a multiple of 32-bits');
      for (let e = 0; e < t; e += 4) zo(this, e, e + 3), zo(this, e + 1, e + 2);
      return this;
    }),
    (Uo.prototype.swap64 = function () {
      const t = this.length;
      if (t % 8 != 0)
        throw new RangeError('Buffer size must be a multiple of 64-bits');
      for (let e = 0; e < t; e += 8)
        zo(this, e, e + 7),
          zo(this, e + 1, e + 6),
          zo(this, e + 2, e + 5),
          zo(this, e + 3, e + 4);
      return this;
    }),
    (Uo.prototype.toString = function () {
      const t = this.length;
      return 0 === t
        ? ''
        : 0 === arguments.length
        ? Ko(this, 0, t)
        : Mo.apply(this, arguments);
    }),
    (Uo.prototype.toLocaleString = Uo.prototype.toString),
    (Uo.prototype.equals = function (t) {
      if (!Uo.isBuffer(t)) throw new TypeError('Argument must be a Buffer');
      return this === t || 0 === Uo.compare(this, t);
    }),
    (Uo.prototype.inspect = function () {
      let t = '';
      return (
        (t = this.toString('hex', 0, 50)
          .replace(/(.{2})/g, '$1 ')
          .trim()),
        this.length > 50 && (t += ' ... '),
        '<Buffer ' + t + '>'
      );
    }),
    jo && (Uo.prototype[jo] = Uo.prototype.inspect),
    (Uo.prototype.compare = function (t, e, r, n, o) {
      if (
        (bi(t, Uint8Array) && (t = Uo.from(t, t.offset, t.byteLength)),
        !Uo.isBuffer(t))
      )
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
            typeof t
        );
      if (
        (void 0 === e && (e = 0),
        void 0 === r && (r = t ? t.length : 0),
        void 0 === n && (n = 0),
        void 0 === o && (o = this.length),
        e < 0 || r > t.length || n < 0 || o > this.length)
      )
        throw new RangeError('out of range index');
      if (n >= o && e >= r) return 0;
      if (n >= o) return -1;
      if (e >= r) return 1;
      if (this === t) return 0;
      let i = (o >>>= 0) - (n >>>= 0),
        s = (r >>>= 0) - (e >>>= 0);
      const a = Math.min(i, s),
        u = this.slice(n, o),
        c = t.slice(e, r);
      for (let t = 0; t < a; ++t)
        if (u[t] !== c[t]) {
          (i = u[t]), (s = c[t]);
          break;
        }
      return i < s ? -1 : s < i ? 1 : 0;
    }),
    (Uo.prototype.includes = function (t, e, r) {
      return -1 !== this.indexOf(t, e, r);
    }),
    (Uo.prototype.indexOf = function (t, e, r) {
      return $o(this, t, e, r, !0);
    }),
    (Uo.prototype.lastIndexOf = function (t, e, r) {
      return $o(this, t, e, r, !1);
    }),
    (Uo.prototype.write = function (t, e, r, n) {
      if (void 0 === e) (n = 'utf8'), (r = this.length), (e = 0);
      else if (void 0 === r && 'string' == typeof e)
        (n = e), (r = this.length), (e = 0);
      else {
        if (!isFinite(e))
          throw new Error(
            'Buffer.write(string, encoding, offset[, length]) is no longer supported'
          );
        (e >>>= 0),
          isFinite(r)
            ? ((r >>>= 0), void 0 === n && (n = 'utf8'))
            : ((n = r), (r = void 0));
      }
      const o = this.length - e;
      if (
        ((void 0 === r || r > o) && (r = o),
        (t.length > 0 && (r < 0 || e < 0)) || e > this.length)
      )
        throw new RangeError('Attempt to write outside buffer bounds');
      n || (n = 'utf8');
      let i = !1;
      for (;;)
        switch (n) {
          case 'hex':
            return Vo(this, t, e, r);
          case 'utf8':
          case 'utf-8':
            return Go(this, t, e, r);
          case 'ascii':
          case 'latin1':
          case 'binary':
            return Ho(this, t, e, r);
          case 'base64':
            return Jo(this, t, e, r);
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return Wo(this, t, e, r);
          default:
            if (i) throw new TypeError('Unknown encoding: ' + n);
            (n = ('' + n).toLowerCase()), (i = !0);
        }
    }),
    (Uo.prototype.toJSON = function () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0),
      };
    });
  const Xo = 4096;
  function Qo(t, e, r) {
    let n = '';
    r = Math.min(t.length, r);
    for (let o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
    return n;
  }
  function Zo(t, e, r) {
    let n = '';
    r = Math.min(t.length, r);
    for (let o = e; o < r; ++o) n += String.fromCharCode(t[o]);
    return n;
  }
  function ti(t, e, r) {
    const n = t.length;
    (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
    let o = '';
    for (let n = e; n < r; ++n) o += Ei[t[n]];
    return o;
  }
  function ei(t, e, r) {
    const n = t.slice(e, r);
    let o = '';
    for (let t = 0; t < n.length - 1; t += 2)
      o += String.fromCharCode(n[t] + 256 * n[t + 1]);
    return o;
  }
  function ri(t, e, r) {
    if (t % 1 != 0 || t < 0) throw new RangeError('offset is not uint');
    if (t + e > r)
      throw new RangeError('Trying to access beyond buffer length');
  }
  function ni(t, e, r, n, o, i) {
    if (!Uo.isBuffer(t))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (e > o || e < i)
      throw new RangeError('"value" argument is out of bounds');
    if (r + n > t.length) throw new RangeError('Index out of range');
  }
  function oi(t, e, r, n, o) {
    hi(e, n, o, t, r, 7);
    let i = Number(e & BigInt(4294967295));
    (t[r++] = i),
      (i >>= 8),
      (t[r++] = i),
      (i >>= 8),
      (t[r++] = i),
      (i >>= 8),
      (t[r++] = i);
    let s = Number((e >> BigInt(32)) & BigInt(4294967295));
    return (
      (t[r++] = s),
      (s >>= 8),
      (t[r++] = s),
      (s >>= 8),
      (t[r++] = s),
      (s >>= 8),
      (t[r++] = s),
      r
    );
  }
  function ii(t, e, r, n, o) {
    hi(e, n, o, t, r, 7);
    let i = Number(e & BigInt(4294967295));
    (t[r + 7] = i),
      (i >>= 8),
      (t[r + 6] = i),
      (i >>= 8),
      (t[r + 5] = i),
      (i >>= 8),
      (t[r + 4] = i);
    let s = Number((e >> BigInt(32)) & BigInt(4294967295));
    return (
      (t[r + 3] = s),
      (s >>= 8),
      (t[r + 2] = s),
      (s >>= 8),
      (t[r + 1] = s),
      (s >>= 8),
      (t[r] = s),
      r + 8
    );
  }
  function si(t, e, r, n, o, i) {
    if (r + n > t.length) throw new RangeError('Index out of range');
    if (r < 0) throw new RangeError('Index out of range');
  }
  function ai(t, e, r, n, o) {
    return (
      (e = +e), (r >>>= 0), o || si(t, 0, r, 4), vo(t, e, r, n, 23, 4), r + 4
    );
  }
  function ui(t, e, r, n, o) {
    return (
      (e = +e), (r >>>= 0), o || si(t, 0, r, 8), vo(t, e, r, n, 52, 8), r + 8
    );
  }
  (Uo.prototype.slice = function (t, e) {
    const r = this.length;
    (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
      (e = void 0 === e ? r : ~~e) < 0
        ? (e += r) < 0 && (e = 0)
        : e > r && (e = r),
      e < t && (e = t);
    const n = this.subarray(t, e);
    return Object.setPrototypeOf(n, Uo.prototype), n;
  }),
    (Uo.prototype.readUintLE = Uo.prototype.readUIntLE =
      function (t, e, r) {
        (t >>>= 0), (e >>>= 0), r || ri(t, e, this.length);
        let n = this[t],
          o = 1,
          i = 0;
        for (; ++i < e && (o *= 256); ) n += this[t + i] * o;
        return n;
      }),
    (Uo.prototype.readUintBE = Uo.prototype.readUIntBE =
      function (t, e, r) {
        (t >>>= 0), (e >>>= 0), r || ri(t, e, this.length);
        let n = this[t + --e],
          o = 1;
        for (; e > 0 && (o *= 256); ) n += this[t + --e] * o;
        return n;
      }),
    (Uo.prototype.readUint8 = Uo.prototype.readUInt8 =
      function (t, e) {
        return (t >>>= 0), e || ri(t, 1, this.length), this[t];
      }),
    (Uo.prototype.readUint16LE = Uo.prototype.readUInt16LE =
      function (t, e) {
        return (
          (t >>>= 0), e || ri(t, 2, this.length), this[t] | (this[t + 1] << 8)
        );
      }),
    (Uo.prototype.readUint16BE = Uo.prototype.readUInt16BE =
      function (t, e) {
        return (
          (t >>>= 0), e || ri(t, 2, this.length), (this[t] << 8) | this[t + 1]
        );
      }),
    (Uo.prototype.readUint32LE = Uo.prototype.readUInt32LE =
      function (t, e) {
        return (
          (t >>>= 0),
          e || ri(t, 4, this.length),
          (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
            16777216 * this[t + 3]
        );
      }),
    (Uo.prototype.readUint32BE = Uo.prototype.readUInt32BE =
      function (t, e) {
        return (
          (t >>>= 0),
          e || ri(t, 4, this.length),
          16777216 * this[t] +
            ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
        );
      }),
    (Uo.prototype.readBigUInt64LE = Oi(function (t) {
      pi((t >>>= 0), 'offset');
      const e = this[t],
        r = this[t + 7];
      (void 0 !== e && void 0 !== r) || di(t, this.length - 8);
      const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
        o = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
      return BigInt(n) + (BigInt(o) << BigInt(32));
    })),
    (Uo.prototype.readBigUInt64BE = Oi(function (t) {
      pi((t >>>= 0), 'offset');
      const e = this[t],
        r = this[t + 7];
      (void 0 !== e && void 0 !== r) || di(t, this.length - 8);
      const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
        o = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
      return (BigInt(n) << BigInt(32)) + BigInt(o);
    })),
    (Uo.prototype.readIntLE = function (t, e, r) {
      (t >>>= 0), (e >>>= 0), r || ri(t, e, this.length);
      let n = this[t],
        o = 1,
        i = 0;
      for (; ++i < e && (o *= 256); ) n += this[t + i] * o;
      return (o *= 128), n >= o && (n -= Math.pow(2, 8 * e)), n;
    }),
    (Uo.prototype.readIntBE = function (t, e, r) {
      (t >>>= 0), (e >>>= 0), r || ri(t, e, this.length);
      let n = e,
        o = 1,
        i = this[t + --n];
      for (; n > 0 && (o *= 256); ) i += this[t + --n] * o;
      return (o *= 128), i >= o && (i -= Math.pow(2, 8 * e)), i;
    }),
    (Uo.prototype.readInt8 = function (t, e) {
      return (
        (t >>>= 0),
        e || ri(t, 1, this.length),
        128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
      );
    }),
    (Uo.prototype.readInt16LE = function (t, e) {
      (t >>>= 0), e || ri(t, 2, this.length);
      const r = this[t] | (this[t + 1] << 8);
      return 32768 & r ? 4294901760 | r : r;
    }),
    (Uo.prototype.readInt16BE = function (t, e) {
      (t >>>= 0), e || ri(t, 2, this.length);
      const r = this[t + 1] | (this[t] << 8);
      return 32768 & r ? 4294901760 | r : r;
    }),
    (Uo.prototype.readInt32LE = function (t, e) {
      return (
        (t >>>= 0),
        e || ri(t, 4, this.length),
        this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
      );
    }),
    (Uo.prototype.readInt32BE = function (t, e) {
      return (
        (t >>>= 0),
        e || ri(t, 4, this.length),
        (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
      );
    }),
    (Uo.prototype.readBigInt64LE = Oi(function (t) {
      pi((t >>>= 0), 'offset');
      const e = this[t],
        r = this[t + 7];
      (void 0 !== e && void 0 !== r) || di(t, this.length - 8);
      const n =
        this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
      return (
        (BigInt(n) << BigInt(32)) +
        BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
      );
    })),
    (Uo.prototype.readBigInt64BE = Oi(function (t) {
      pi((t >>>= 0), 'offset');
      const e = this[t],
        r = this[t + 7];
      (void 0 !== e && void 0 !== r) || di(t, this.length - 8);
      const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
      return (
        (BigInt(n) << BigInt(32)) +
        BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
      );
    })),
    (Uo.prototype.readFloatLE = function (t, e) {
      return (t >>>= 0), e || ri(t, 4, this.length), bo(this, t, !0, 23, 4);
    }),
    (Uo.prototype.readFloatBE = function (t, e) {
      return (t >>>= 0), e || ri(t, 4, this.length), bo(this, t, !1, 23, 4);
    }),
    (Uo.prototype.readDoubleLE = function (t, e) {
      return (t >>>= 0), e || ri(t, 8, this.length), bo(this, t, !0, 52, 8);
    }),
    (Uo.prototype.readDoubleBE = function (t, e) {
      return (t >>>= 0), e || ri(t, 8, this.length), bo(this, t, !1, 52, 8);
    }),
    (Uo.prototype.writeUintLE = Uo.prototype.writeUIntLE =
      function (t, e, r, n) {
        if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
          ni(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
        }
        let o = 1,
          i = 0;
        for (this[e] = 255 & t; ++i < r && (o *= 256); )
          this[e + i] = (t / o) & 255;
        return e + r;
      }),
    (Uo.prototype.writeUintBE = Uo.prototype.writeUIntBE =
      function (t, e, r, n) {
        if (((t = +t), (e >>>= 0), (r >>>= 0), !n)) {
          ni(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
        }
        let o = r - 1,
          i = 1;
        for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
          this[e + o] = (t / i) & 255;
        return e + r;
      }),
    (Uo.prototype.writeUint8 = Uo.prototype.writeUInt8 =
      function (t, e, r) {
        return (
          (t = +t),
          (e >>>= 0),
          r || ni(this, t, e, 1, 255, 0),
          (this[e] = 255 & t),
          e + 1
        );
      }),
    (Uo.prototype.writeUint16LE = Uo.prototype.writeUInt16LE =
      function (t, e, r) {
        return (
          (t = +t),
          (e >>>= 0),
          r || ni(this, t, e, 2, 65535, 0),
          (this[e] = 255 & t),
          (this[e + 1] = t >>> 8),
          e + 2
        );
      }),
    (Uo.prototype.writeUint16BE = Uo.prototype.writeUInt16BE =
      function (t, e, r) {
        return (
          (t = +t),
          (e >>>= 0),
          r || ni(this, t, e, 2, 65535, 0),
          (this[e] = t >>> 8),
          (this[e + 1] = 255 & t),
          e + 2
        );
      }),
    (Uo.prototype.writeUint32LE = Uo.prototype.writeUInt32LE =
      function (t, e, r) {
        return (
          (t = +t),
          (e >>>= 0),
          r || ni(this, t, e, 4, 4294967295, 0),
          (this[e + 3] = t >>> 24),
          (this[e + 2] = t >>> 16),
          (this[e + 1] = t >>> 8),
          (this[e] = 255 & t),
          e + 4
        );
      }),
    (Uo.prototype.writeUint32BE = Uo.prototype.writeUInt32BE =
      function (t, e, r) {
        return (
          (t = +t),
          (e >>>= 0),
          r || ni(this, t, e, 4, 4294967295, 0),
          (this[e] = t >>> 24),
          (this[e + 1] = t >>> 16),
          (this[e + 2] = t >>> 8),
          (this[e + 3] = 255 & t),
          e + 4
        );
      }),
    (Uo.prototype.writeBigUInt64LE = Oi(function (t, e = 0) {
      return oi(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
    })),
    (Uo.prototype.writeBigUInt64BE = Oi(function (t, e = 0) {
      return ii(this, t, e, BigInt(0), BigInt('0xffffffffffffffff'));
    })),
    (Uo.prototype.writeIntLE = function (t, e, r, n) {
      if (((t = +t), (e >>>= 0), !n)) {
        const n = Math.pow(2, 8 * r - 1);
        ni(this, t, e, r, n - 1, -n);
      }
      let o = 0,
        i = 1,
        s = 0;
      for (this[e] = 255 & t; ++o < r && (i *= 256); )
        t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1),
          (this[e + o] = (((t / i) >> 0) - s) & 255);
      return e + r;
    }),
    (Uo.prototype.writeIntBE = function (t, e, r, n) {
      if (((t = +t), (e >>>= 0), !n)) {
        const n = Math.pow(2, 8 * r - 1);
        ni(this, t, e, r, n - 1, -n);
      }
      let o = r - 1,
        i = 1,
        s = 0;
      for (this[e + o] = 255 & t; --o >= 0 && (i *= 256); )
        t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1),
          (this[e + o] = (((t / i) >> 0) - s) & 255);
      return e + r;
    }),
    (Uo.prototype.writeInt8 = function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || ni(this, t, e, 1, 127, -128),
        t < 0 && (t = 255 + t + 1),
        (this[e] = 255 & t),
        e + 1
      );
    }),
    (Uo.prototype.writeInt16LE = function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || ni(this, t, e, 2, 32767, -32768),
        (this[e] = 255 & t),
        (this[e + 1] = t >>> 8),
        e + 2
      );
    }),
    (Uo.prototype.writeInt16BE = function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || ni(this, t, e, 2, 32767, -32768),
        (this[e] = t >>> 8),
        (this[e + 1] = 255 & t),
        e + 2
      );
    }),
    (Uo.prototype.writeInt32LE = function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || ni(this, t, e, 4, 2147483647, -2147483648),
        (this[e] = 255 & t),
        (this[e + 1] = t >>> 8),
        (this[e + 2] = t >>> 16),
        (this[e + 3] = t >>> 24),
        e + 4
      );
    }),
    (Uo.prototype.writeInt32BE = function (t, e, r) {
      return (
        (t = +t),
        (e >>>= 0),
        r || ni(this, t, e, 4, 2147483647, -2147483648),
        t < 0 && (t = 4294967295 + t + 1),
        (this[e] = t >>> 24),
        (this[e + 1] = t >>> 16),
        (this[e + 2] = t >>> 8),
        (this[e + 3] = 255 & t),
        e + 4
      );
    }),
    (Uo.prototype.writeBigInt64LE = Oi(function (t, e = 0) {
      return oi(
        this,
        t,
        e,
        -BigInt('0x8000000000000000'),
        BigInt('0x7fffffffffffffff')
      );
    })),
    (Uo.prototype.writeBigInt64BE = Oi(function (t, e = 0) {
      return ii(
        this,
        t,
        e,
        -BigInt('0x8000000000000000'),
        BigInt('0x7fffffffffffffff')
      );
    })),
    (Uo.prototype.writeFloatLE = function (t, e, r) {
      return ai(this, t, e, !0, r);
    }),
    (Uo.prototype.writeFloatBE = function (t, e, r) {
      return ai(this, t, e, !1, r);
    }),
    (Uo.prototype.writeDoubleLE = function (t, e, r) {
      return ui(this, t, e, !0, r);
    }),
    (Uo.prototype.writeDoubleBE = function (t, e, r) {
      return ui(this, t, e, !1, r);
    }),
    (Uo.prototype.copy = function (t, e, r, n) {
      if (!Uo.isBuffer(t)) throw new TypeError('argument should be a Buffer');
      if (
        (r || (r = 0),
        n || 0 === n || (n = this.length),
        e >= t.length && (e = t.length),
        e || (e = 0),
        n > 0 && n < r && (n = r),
        n === r)
      )
        return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (e < 0) throw new RangeError('targetStart out of bounds');
      if (r < 0 || r >= this.length) throw new RangeError('Index out of range');
      if (n < 0) throw new RangeError('sourceEnd out of bounds');
      n > this.length && (n = this.length),
        t.length - e < n - r && (n = t.length - e + r);
      const o = n - r;
      return (
        this === t && 'function' == typeof Uint8Array.prototype.copyWithin
          ? this.copyWithin(e, r, n)
          : Uint8Array.prototype.set.call(t, this.subarray(r, n), e),
        o
      );
    }),
    (Uo.prototype.fill = function (t, e, r, n) {
      if ('string' == typeof t) {
        if (
          ('string' == typeof e
            ? ((n = e), (e = 0), (r = this.length))
            : 'string' == typeof r && ((n = r), (r = this.length)),
          void 0 !== n && 'string' != typeof n)
        )
          throw new TypeError('encoding must be a string');
        if ('string' == typeof n && !Uo.isEncoding(n))
          throw new TypeError('Unknown encoding: ' + n);
        if (1 === t.length) {
          const e = t.charCodeAt(0);
          (('utf8' === n && e < 128) || 'latin1' === n) && (t = e);
        }
      } else
        'number' == typeof t
          ? (t &= 255)
          : 'boolean' == typeof t && (t = Number(t));
      if (e < 0 || this.length < e || this.length < r)
        throw new RangeError('Out of range index');
      if (r <= e) return this;
      let o;
      if (
        ((e >>>= 0),
        (r = void 0 === r ? this.length : r >>> 0),
        t || (t = 0),
        'number' == typeof t)
      )
        for (o = e; o < r; ++o) this[o] = t;
      else {
        const i = Uo.isBuffer(t) ? t : Uo.from(t, n),
          s = i.length;
        if (0 === s)
          throw new TypeError(
            'The value "' + t + '" is invalid for argument "value"'
          );
        for (o = 0; o < r - e; ++o) this[o + e] = i[o % s];
      }
      return this;
    });
  const ci = {};
  function fi(t, e, r) {
    ci[t] = class extends r {
      get code() {
        return t;
      }
      set code(t) {
        Object.defineProperty(this, 'code', {
          configurable: !0,
          enumerable: !0,
          value: t,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${t}]: ${this.message}`;
      }
      constructor() {
        super(),
          Object.defineProperty(this, 'message', {
            value: e.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${t}]`),
          this.stack,
          delete this.name;
      }
    };
  }
  function li(t) {
    let e = '',
      r = t.length;
    const n = '-' === t[0] ? 1 : 0;
    for (; r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
    return `${t.slice(0, r)}${e}`;
  }
  function hi(t, e, r, n, o, i) {
    if (t > r || t < e) {
      const n = 'bigint' == typeof e ? 'n' : '';
      let o;
      throw (
        ((o =
          i > 3
            ? 0 === e || e === BigInt(0)
              ? `>= 0${n} and < 2${n} ** ${8 * (i + 1)}${n}`
              : `>= -(2${n} ** ${8 * (i + 1) - 1}${n}) and < 2 ** ${
                  8 * (i + 1) - 1
                }${n}`
            : `>= ${e}${n} and <= ${r}${n}`),
        new ci.ERR_OUT_OF_RANGE('value', o, t))
      );
    }
    !(function (t, e, r) {
      pi(e, 'offset'),
        (void 0 !== t[e] && void 0 !== t[e + r]) || di(e, t.length - (r + 1));
    })(n, o, i);
  }
  function pi(t, e) {
    if ('number' != typeof t) throw new ci.ERR_INVALID_ARG_TYPE(e, 'number', t);
  }
  function di(t, e, r) {
    if (Math.floor(t) !== t)
      throw (pi(t, r), new ci.ERR_OUT_OF_RANGE(r || 'offset', 'an integer', t));
    if (e < 0) throw new ci.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new ci.ERR_OUT_OF_RANGE(
      r || 'offset',
      `>= ${r ? 1 : 0} and <= ${e}`,
      t
    );
  }
  fi(
    'ERR_BUFFER_OUT_OF_BOUNDS',
    function (t) {
      return t
        ? `${t} is outside of buffer bounds`
        : 'Attempt to access memory outside buffer bounds';
    },
    RangeError
  ),
    fi(
      'ERR_INVALID_ARG_TYPE',
      function (t, e) {
        return `The "${t}" argument must be of type number. Received type ${typeof e}`;
      },
      TypeError
    ),
    fi(
      'ERR_OUT_OF_RANGE',
      function (t, e, r) {
        let n = `The value of "${t}" is out of range.`,
          o = r;
        return (
          Number.isInteger(r) && Math.abs(r) > 2 ** 32
            ? (o = li(String(r)))
            : 'bigint' == typeof r &&
              ((o = String(r)),
              (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) &&
                (o = li(o)),
              (o += 'n')),
          (n += ` It must be ${e}. Received ${o}`),
          n
        );
      },
      RangeError
    );
  const yi = /[^+/0-9A-Za-z-_]/g;
  function gi(t, e) {
    let r;
    e = e || 1 / 0;
    const n = t.length;
    let o = null;
    const i = [];
    for (let s = 0; s < n; ++s) {
      if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
        if (!o) {
          if (r > 56319) {
            (e -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          if (s + 1 === n) {
            (e -= 3) > -1 && i.push(239, 191, 189);
            continue;
          }
          o = r;
          continue;
        }
        if (r < 56320) {
          (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
          continue;
        }
        r = 65536 + (((o - 55296) << 10) | (r - 56320));
      } else o && (e -= 3) > -1 && i.push(239, 191, 189);
      if (((o = null), r < 128)) {
        if ((e -= 1) < 0) break;
        i.push(r);
      } else if (r < 2048) {
        if ((e -= 2) < 0) break;
        i.push((r >> 6) | 192, (63 & r) | 128);
      } else if (r < 65536) {
        if ((e -= 3) < 0) break;
        i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
      } else {
        if (!(r < 1114112)) throw new Error('Invalid code point');
        if ((e -= 4) < 0) break;
        i.push(
          (r >> 18) | 240,
          ((r >> 12) & 63) | 128,
          ((r >> 6) & 63) | 128,
          (63 & r) | 128
        );
      }
    }
    return i;
  }
  function mi(t) {
    return yo(
      (function (t) {
        if ((t = (t = t.split('=')[0]).trim().replace(yi, '')).length < 2)
          return '';
        for (; t.length % 4 != 0; ) t += '=';
        return t;
      })(t)
    );
  }
  function wi(t, e, r, n) {
    let o;
    for (o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o)
      e[o + r] = t[o];
    return o;
  }
  function bi(t, e) {
    return (
      t instanceof e ||
      (null != t &&
        null != t.constructor &&
        null != t.constructor.name &&
        t.constructor.name === e.name)
    );
  }
  function vi(t) {
    return t != t;
  }
  const Ei = (function () {
    const t = '0123456789abcdef',
      e = new Array(256);
    for (let r = 0; r < 16; ++r) {
      const n = 16 * r;
      for (let o = 0; o < 16; ++o) e[n + o] = t[r] + t[o];
    }
    return e;
  })();
  function Oi(t) {
    return 'undefined' == typeof BigInt ? Ai : t;
  }
  function Ai() {
    throw new Error('BigInt not supported');
  }
  var Ti = po;
  function Si(t) {
    return co.isPlainObject(t) || co.isArray(t);
  }
  function Bi(t) {
    return co.endsWith(t, '[]') ? t.slice(0, -2) : t;
  }
  function Ri(t, e, r) {
    return t
      ? t
          .concat(e)
          .map(function (t, e) {
            return (t = Bi(t)), !r && e ? '[' + t + ']' : t;
          })
          .join(r ? '.' : '')
      : e;
  }
  const Ii = co.toFlatObject(co, {}, null, function (t) {
    return /^is[A-Z]/.test(t);
  });
  var ji = function (t, e, r) {
    if (!co.isObject(t)) throw new TypeError('target must be an object');
    e = e || new (wo || FormData)();
    const n = (r = co.toFlatObject(
        r,
        { metaTokens: !0, dots: !1, indexes: !1 },
        !1,
        function (t, e) {
          return !co.isUndefined(e[t]);
        }
      )).metaTokens,
      o = r.visitor || f,
      i = r.dots,
      s = r.indexes,
      a =
        (r.Blob || ('undefined' != typeof Blob && Blob)) &&
        (u = e) &&
        co.isFunction(u.append) &&
        'FormData' === u[Symbol.toStringTag] &&
        u[Symbol.iterator];
    var u;
    if (!co.isFunction(o)) throw new TypeError('visitor must be a function');
    function c(t) {
      if (null === t) return '';
      if (co.isDate(t)) return t.toISOString();
      if (!a && co.isBlob(t))
        throw new mo('Blob is not supported. Use a Buffer instead.');
      return co.isArrayBuffer(t) || co.isTypedArray(t)
        ? a && 'function' == typeof Blob
          ? new Blob([t])
          : Ti.from(t)
        : t;
    }
    function f(t, r, o) {
      let a = t;
      if (t && !o && 'object' == typeof t)
        if (co.endsWith(r, '{}'))
          (r = n ? r : r.slice(0, -2)), (t = JSON.stringify(t));
        else if (
          (co.isArray(t) &&
            (function (t) {
              return co.isArray(t) && !t.some(Si);
            })(t)) ||
          co.isFileList(t) ||
          (co.endsWith(r, '[]') && (a = co.toArray(t)))
        )
          return (
            (r = Bi(r)),
            a.forEach(function (t, n) {
              !co.isUndefined(t) &&
                null !== t &&
                e.append(
                  !0 === s ? Ri([r], n, i) : null === s ? r : r + '[]',
                  c(t)
                );
            }),
            !1
          );
      return !!Si(t) || (e.append(Ri(o, r, i), c(t)), !1);
    }
    const l = [],
      h = Object.assign(Ii, {
        defaultVisitor: f,
        convertValue: c,
        isVisitable: Si,
      });
    if (!co.isObject(t)) throw new TypeError('data must be an object');
    return (
      (function t(r, n) {
        if (!co.isUndefined(r)) {
          if (-1 !== l.indexOf(r))
            throw Error('Circular reference detected in ' + n.join('.'));
          l.push(r),
            co.forEach(r, function (r, i) {
              !0 ===
                (!(co.isUndefined(r) || null === r) &&
                  o.call(e, r, co.isString(i) ? i.trim() : i, n, h)) &&
                t(r, n ? n.concat(i) : [i]);
            }),
            l.pop();
        }
      })(t),
      e
    );
  };
  function Li(t) {
    const e = {
      '!': '%21',
      "'": '%27',
      '(': '%28',
      ')': '%29',
      '~': '%7E',
      '%20': '+',
      '%00': '\0',
    };
    return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g, function (t) {
      return e[t];
    });
  }
  function _i(t, e) {
    (this._pairs = []), t && ji(t, this, e);
  }
  const Ui = _i.prototype;
  (Ui.append = function (t, e) {
    this._pairs.push([t, e]);
  }),
    (Ui.toString = function (t) {
      const e = t
        ? function (e) {
            return t.call(this, e, Li);
          }
        : Li;
      return this._pairs
        .map(function (t) {
          return e(t[0]) + '=' + e(t[1]);
        }, '')
        .join('&');
    });
  var xi = _i;
  function Ci(t) {
    return encodeURIComponent(t)
      .replace(/%3A/gi, ':')
      .replace(/%24/g, '$')
      .replace(/%2C/gi, ',')
      .replace(/%20/g, '+')
      .replace(/%5B/gi, '[')
      .replace(/%5D/gi, ']');
  }
  function Pi(t, e, r) {
    if (!e) return t;
    const n = (r && r.encode) || Ci,
      o = r && r.serialize;
    let i;
    if (
      ((i = o
        ? o(e, r)
        : co.isURLSearchParams(e)
        ? e.toString()
        : new xi(e, r).toString(n)),
      i)
    ) {
      const e = t.indexOf('#');
      -1 !== e && (t = t.slice(0, e)),
        (t += (-1 === t.indexOf('?') ? '?' : '&') + i);
    }
    return t;
  }
  var Ni = class {
      use(t, e, r) {
        return (
          this.handlers.push({
            fulfilled: t,
            rejected: e,
            synchronous: !!r && r.synchronous,
            runWhen: r ? r.runWhen : null,
          }),
          this.handlers.length - 1
        );
      }
      eject(t) {
        this.handlers[t] && (this.handlers[t] = null);
      }
      clear() {
        this.handlers && (this.handlers = []);
      }
      forEach(t) {
        co.forEach(this.handlers, function (e) {
          null !== e && t(e);
        });
      }
      constructor() {
        this.handlers = [];
      }
    },
    Fi = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    },
    ki = 'undefined' != typeof URLSearchParams ? URLSearchParams : xi,
    Di = FormData;
  const Mi = (() => {
    let t;
    return (
      ('undefined' == typeof navigator ||
        ('ReactNative' !== (t = navigator.product) &&
          'NativeScript' !== t &&
          'NS' !== t)) &&
      'undefined' != typeof window &&
      'undefined' != typeof document
    );
  })();
  var zi = {
    isBrowser: !0,
    classes: { URLSearchParams: ki, FormData: Di, Blob: Blob },
    isStandardBrowserEnv: Mi,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data'],
  };
  function $i(t, e) {
    return ji(
      t,
      new zi.classes.URLSearchParams(),
      Object.assign(
        {
          visitor: function (t, e, r, n) {
            return zi.isNode && co.isBuffer(t)
              ? (this.append(e, t.toString('base64')), !1)
              : n.defaultVisitor.apply(this, arguments);
          },
        },
        e
      )
    );
  }
  var qi = function (t) {
    function e(t, r, n, o) {
      let i = t[o++];
      const s = Number.isFinite(+i),
        a = o >= t.length;
      if (((i = !i && co.isArray(n) ? n.length : i), a))
        return co.hasOwnProp(n, i) ? (n[i] = [n[i], r]) : (n[i] = r), !s;
      (n[i] && co.isObject(n[i])) || (n[i] = []);
      return (
        e(t, r, n[i], o) &&
          co.isArray(n[i]) &&
          (n[i] = (function (t) {
            const e = {},
              r = Object.keys(t);
            let n;
            const o = r.length;
            let i;
            for (n = 0; n < o; n++) (i = r[n]), (e[i] = t[i]);
            return e;
          })(n[i])),
        !s
      );
    }
    if (co.isFormData(t) && co.isFunction(t.entries)) {
      const r = {};
      return (
        co.forEachEntry(t, (t, n) => {
          e(
            (function (t) {
              return co
                .matchAll(/\w+|\[(\w*)]/g, t)
                .map((t) => ('[]' === t[0] ? '' : t[1] || t[0]));
            })(t),
            n,
            r,
            0
          );
        }),
        r
      );
    }
    return null;
  };
  function Vi(t, e, r) {
    const n = r.config.validateStatus;
    r.status && n && !n(r.status)
      ? e(
          new mo(
            'Request failed with status code ' + r.status,
            [mo.ERR_BAD_REQUEST, mo.ERR_BAD_RESPONSE][
              Math.floor(r.status / 100) - 4
            ],
            r.config,
            r.request,
            r
          )
        )
      : t(r);
  }
  var Gi = zi.isStandardBrowserEnv
    ? {
        write: function (t, e, r, n, o, i) {
          const s = [];
          s.push(t + '=' + encodeURIComponent(e)),
            co.isNumber(r) && s.push('expires=' + new Date(r).toGMTString()),
            co.isString(n) && s.push('path=' + n),
            co.isString(o) && s.push('domain=' + o),
            !0 === i && s.push('secure'),
            (document.cookie = s.join('; '));
        },
        read: function (t) {
          const e = document.cookie.match(
            new RegExp('(^|;\\s*)(' + t + ')=([^;]*)')
          );
          return e ? decodeURIComponent(e[3]) : null;
        },
        remove: function (t) {
          this.write(t, '', Date.now() - 864e5);
        },
      }
    : {
        write: function () {},
        read: function () {
          return null;
        },
        remove: function () {},
      };
  function Hi(t, e) {
    return e ? t.replace(/\/+$/, '') + '/' + e.replace(/^\/+/, '') : t;
  }
  function Ji(t, e) {
    return t && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) ? Hi(t, e) : e;
  }
  var Wi = zi.isStandardBrowserEnv
    ? (function () {
        const t = /(msie|trident)/i.test(navigator.userAgent),
          e = document.createElement('a');
        let r;
        function n(r) {
          let n = r;
          return (
            t && (e.setAttribute('href', n), (n = e.href)),
            e.setAttribute('href', n),
            {
              href: e.href,
              protocol: e.protocol ? e.protocol.replace(/:$/, '') : '',
              host: e.host,
              search: e.search ? e.search.replace(/^\?/, '') : '',
              hash: e.hash ? e.hash.replace(/^#/, '') : '',
              hostname: e.hostname,
              port: e.port,
              pathname:
                '/' === e.pathname.charAt(0) ? e.pathname : '/' + e.pathname,
            }
          );
        }
        return (
          (r = n(window.location.href)),
          function (t) {
            const e = co.isString(t) ? n(t) : t;
            return e.protocol === r.protocol && e.host === r.host;
          }
        );
      })()
    : function () {
        return !0;
      };
  function Yi(t, e, r) {
    mo.call(this, null == t ? 'canceled' : t, mo.ERR_CANCELED, e, r),
      (this.name = 'CanceledError');
  }
  co.inherits(Yi, mo, { __CANCEL__: !0 });
  var Ki = Yi;
  function Xi(t) {
    const e = /^([-+\w]{1,25})(:?\/\/|:)/.exec(t);
    return (e && e[1]) || '';
  }
  const Qi = co.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent',
  ]);
  var Zi = (t) => {
    const e = {};
    let r, n, o;
    return (
      t &&
        t.split('\n').forEach(function (t) {
          (o = t.indexOf(':')),
            (r = t.substring(0, o).trim().toLowerCase()),
            (n = t.substring(o + 1).trim()),
            !r ||
              (e[r] && Qi[r]) ||
              ('set-cookie' === r
                ? e[r]
                  ? e[r].push(n)
                  : (e[r] = [n])
                : (e[r] = e[r] ? e[r] + ', ' + n : n));
        }),
      e
    );
  };
  const ts = Symbol('internals'),
    es = Symbol('defaults');
  function rs(t) {
    return t && String(t).trim().toLowerCase();
  }
  function ns(t) {
    return !1 === t || null == t ? t : co.isArray(t) ? t.map(ns) : String(t);
  }
  function os(t, e, r, n) {
    return co.isFunction(n)
      ? n.call(this, e, r)
      : co.isString(e)
      ? co.isString(n)
        ? -1 !== e.indexOf(n)
        : co.isRegExp(n)
        ? n.test(e)
        : void 0
      : void 0;
  }
  function is(t, e) {
    e = e.toLowerCase();
    const r = Object.keys(t);
    let n,
      o = r.length;
    for (; o-- > 0; ) if (((n = r[o]), e === n.toLowerCase())) return n;
    return null;
  }
  function ss(t, e) {
    t && this.set(t), (this[es] = e || null);
  }
  Object.assign(ss.prototype, {
    set: function (t, e, r) {
      const n = this;
      function o(t, e, r) {
        const o = rs(e);
        if (!o) throw new Error('header name must be a non-empty string');
        const i = is(n, o);
        (!i || !0 === r || (!1 !== n[i] && !1 !== r)) && (n[i || e] = ns(t));
      }
      return (
        co.isPlainObject(t)
          ? co.forEach(t, (t, r) => {
              o(t, r, e);
            })
          : o(e, t, r),
        this
      );
    },
    get: function (t, e) {
      if (!(t = rs(t))) return;
      const r = is(this, t);
      if (r) {
        const t = this[r];
        if (!e) return t;
        if (!0 === e)
          return (function (t) {
            const e = Object.create(null),
              r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
            let n;
            for (; (n = r.exec(t)); ) e[n[1]] = n[2];
            return e;
          })(t);
        if (co.isFunction(e)) return e.call(this, t, r);
        if (co.isRegExp(e)) return e.exec(t);
        throw new TypeError('parser must be boolean|regexp|function');
      }
    },
    has: function (t, e) {
      if ((t = rs(t))) {
        const r = is(this, t);
        return !(!r || (e && !os(0, this[r], r, e)));
      }
      return !1;
    },
    delete: function (t, e) {
      const r = this;
      let n = !1;
      function o(t) {
        if ((t = rs(t))) {
          const o = is(r, t);
          !o || (e && !os(0, r[o], o, e)) || (delete r[o], (n = !0));
        }
      }
      return co.isArray(t) ? t.forEach(o) : o(t), n;
    },
    clear: function () {
      return Object.keys(this).forEach(this.delete.bind(this));
    },
    normalize: function (t) {
      const e = this,
        r = {};
      return (
        co.forEach(this, (n, o) => {
          const i = is(r, o);
          if (i) return (e[i] = ns(n)), void delete e[o];
          const s = t
            ? (function (t) {
                return t
                  .trim()
                  .toLowerCase()
                  .replace(/([a-z\d])(\w*)/g, (t, e, r) => e.toUpperCase() + r);
              })(o)
            : String(o).trim();
          s !== o && delete e[o], (e[s] = ns(n)), (r[s] = !0);
        }),
        this
      );
    },
    toJSON: function (t) {
      const e = Object.create(null);
      return (
        co.forEach(Object.assign({}, this[es] || null, this), (r, n) => {
          null != r &&
            !1 !== r &&
            (e[n] = t && co.isArray(r) ? r.join(', ') : r);
        }),
        e
      );
    },
  }),
    Object.assign(ss, {
      from: function (t) {
        return co.isString(t)
          ? new this(Zi(t))
          : t instanceof this
          ? t
          : new this(t);
      },
      accessor: function (t) {
        const e = (this[ts] = this[ts] = { accessors: {} }).accessors,
          r = this.prototype;
        function n(t) {
          const n = rs(t);
          e[n] ||
            (!(function (t, e) {
              const r = co.toCamelCase(' ' + e);
              ['get', 'set', 'has'].forEach((n) => {
                Object.defineProperty(t, n + r, {
                  value: function (t, r, o) {
                    return this[n].call(this, e, t, r, o);
                  },
                  configurable: !0,
                });
              });
            })(r, t),
            (e[n] = !0));
        }
        return co.isArray(t) ? t.forEach(n) : n(t), this;
      },
    }),
    ss.accessor([
      'Content-Type',
      'Content-Length',
      'Accept',
      'Accept-Encoding',
      'User-Agent',
    ]),
    co.freezeMethods(ss.prototype),
    co.freezeMethods(ss);
  var as = ss;
  var us = function (t, e) {
    t = t || 10;
    const r = new Array(t),
      n = new Array(t);
    let o,
      i = 0,
      s = 0;
    return (
      (e = void 0 !== e ? e : 1e3),
      function (a) {
        const u = Date.now(),
          c = n[s];
        o || (o = u), (r[i] = a), (n[i] = u);
        let f = s,
          l = 0;
        for (; f !== i; ) (l += r[f++]), (f %= t);
        if (((i = (i + 1) % t), i === s && (s = (s + 1) % t), u - o < e))
          return;
        const h = c && u - c;
        return h ? Math.round((1e3 * l) / h) : void 0;
      }
    );
  };
  function cs(t, e) {
    let r = 0;
    const n = us(50, 250);
    return (o) => {
      const i = o.loaded,
        s = o.lengthComputable ? o.total : void 0,
        a = i - r,
        u = n(a);
      r = i;
      const c = {
        loaded: i,
        total: s,
        progress: s ? i / s : void 0,
        bytes: a,
        rate: u || void 0,
        estimated: u && s && i <= s ? (s - i) / u : void 0,
      };
      (c[e ? 'download' : 'upload'] = !0), t(c);
    };
  }
  function fs(t) {
    return new Promise(function (e, r) {
      let n = t.data;
      const o = as.from(t.headers).normalize(),
        i = t.responseType;
      let s;
      function a() {
        t.cancelToken && t.cancelToken.unsubscribe(s),
          t.signal && t.signal.removeEventListener('abort', s);
      }
      co.isFormData(n) && zi.isStandardBrowserEnv && o.setContentType(!1);
      let u = new XMLHttpRequest();
      if (t.auth) {
        const e = t.auth.username || '',
          r = t.auth.password
            ? unescape(encodeURIComponent(t.auth.password))
            : '';
        o.set('Authorization', 'Basic ' + btoa(e + ':' + r));
      }
      const c = Ji(t.baseURL, t.url);
      function f() {
        if (!u) return;
        const n = as.from(
          'getAllResponseHeaders' in u && u.getAllResponseHeaders()
        );
        Vi(
          function (t) {
            e(t), a();
          },
          function (t) {
            r(t), a();
          },
          {
            data:
              i && 'text' !== i && 'json' !== i ? u.response : u.responseText,
            status: u.status,
            statusText: u.statusText,
            headers: n,
            config: t,
            request: u,
          }
        ),
          (u = null);
      }
      if (
        (u.open(
          t.method.toUpperCase(),
          Pi(c, t.params, t.paramsSerializer),
          !0
        ),
        (u.timeout = t.timeout),
        'onloadend' in u
          ? (u.onloadend = f)
          : (u.onreadystatechange = function () {
              u &&
                4 === u.readyState &&
                (0 !== u.status ||
                  (u.responseURL && 0 === u.responseURL.indexOf('file:'))) &&
                setTimeout(f);
            }),
        (u.onabort = function () {
          u &&
            (r(new mo('Request aborted', mo.ECONNABORTED, t, u)), (u = null));
        }),
        (u.onerror = function () {
          r(new mo('Network Error', mo.ERR_NETWORK, t, u)), (u = null);
        }),
        (u.ontimeout = function () {
          let e = t.timeout
            ? 'timeout of ' + t.timeout + 'ms exceeded'
            : 'timeout exceeded';
          const n = t.transitional || Fi;
          t.timeoutErrorMessage && (e = t.timeoutErrorMessage),
            r(
              new mo(
                e,
                n.clarifyTimeoutError ? mo.ETIMEDOUT : mo.ECONNABORTED,
                t,
                u
              )
            ),
            (u = null);
        }),
        zi.isStandardBrowserEnv)
      ) {
        const e =
          (t.withCredentials || Wi(c)) &&
          t.xsrfCookieName &&
          Gi.read(t.xsrfCookieName);
        e && o.set(t.xsrfHeaderName, e);
      }
      void 0 === n && o.setContentType(null),
        'setRequestHeader' in u &&
          co.forEach(o.toJSON(), function (t, e) {
            u.setRequestHeader(e, t);
          }),
        co.isUndefined(t.withCredentials) ||
          (u.withCredentials = !!t.withCredentials),
        i && 'json' !== i && (u.responseType = t.responseType),
        'function' == typeof t.onDownloadProgress &&
          u.addEventListener('progress', cs(t.onDownloadProgress, !0)),
        'function' == typeof t.onUploadProgress &&
          u.upload &&
          u.upload.addEventListener('progress', cs(t.onUploadProgress)),
        (t.cancelToken || t.signal) &&
          ((s = (e) => {
            u &&
              (r(!e || e.type ? new Ki(null, t, u) : e), u.abort(), (u = null));
          }),
          t.cancelToken && t.cancelToken.subscribe(s),
          t.signal &&
            (t.signal.aborted ? s() : t.signal.addEventListener('abort', s)));
      const l = Xi(c);
      l && -1 === zi.protocols.indexOf(l)
        ? r(new mo('Unsupported protocol ' + l + ':', mo.ERR_BAD_REQUEST, t))
        : u.send(n || null);
    });
  }
  const ls = { http: fs, xhr: fs };
  var hs,
    ps,
    ds,
    ys = {
      getAdapter: (t) => {
        if (co.isString(t)) {
          const e = ls[t];
          if (!t)
            throw Error(
              co.hasOwnProp(t)
                ? `Adapter '${t}' is not available in the build`
                : `Can not resolve adapter '${t}'`
            );
          return e;
        }
        if (!co.isFunction(t)) throw new TypeError('adapter is not a function');
        return t;
      },
      adapters: ls,
    },
    gs = (hs = {});
  function ms() {
    throw new Error('setTimeout has not been defined');
  }
  function ws() {
    throw new Error('clearTimeout has not been defined');
  }
  function bs(t) {
    if (ps === setTimeout) return setTimeout(t, 0);
    if ((ps === ms || !ps) && setTimeout)
      return (ps = setTimeout), setTimeout(t, 0);
    try {
      return ps(t, 0);
    } catch (e) {
      try {
        return ps.call(null, t, 0);
      } catch (e) {
        return ps.call(this, t, 0);
      }
    }
  }
  !(function () {
    try {
      ps = 'function' == typeof setTimeout ? setTimeout : ms;
    } catch (t) {
      ps = ms;
    }
    try {
      ds = 'function' == typeof clearTimeout ? clearTimeout : ws;
    } catch (t) {
      ds = ws;
    }
  })();
  var vs,
    Es = [],
    Os = !1,
    As = -1;
  function Ts() {
    Os &&
      vs &&
      ((Os = !1),
      vs.length ? (Es = vs.concat(Es)) : (As = -1),
      Es.length && Ss());
  }
  function Ss() {
    if (!Os) {
      var t = bs(Ts);
      Os = !0;
      for (var e = Es.length; e; ) {
        for (vs = Es, Es = []; ++As < e; ) vs && vs[As].run();
        (As = -1), (e = Es.length);
      }
      (vs = null),
        (Os = !1),
        (function (t) {
          if (ds === clearTimeout) return clearTimeout(t);
          if ((ds === ws || !ds) && clearTimeout)
            return (ds = clearTimeout), clearTimeout(t);
          try {
            ds(t);
          } catch (e) {
            try {
              return ds.call(null, t);
            } catch (e) {
              return ds.call(this, t);
            }
          }
        })(t);
    }
  }
  function Bs(t, e) {
    (this.fun = t), (this.array = e);
  }
  function Rs() {}
  (gs.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    Es.push(new Bs(t, e)), 1 !== Es.length || Os || bs(Ss);
  }),
    (Bs.prototype.run = function () {
      this.fun.apply(null, this.array);
    }),
    (gs.title = 'browser'),
    (gs.browser = !0),
    (gs.env = {}),
    (gs.argv = []),
    (gs.version = ''),
    (gs.versions = {}),
    (gs.on = Rs),
    (gs.addListener = Rs),
    (gs.once = Rs),
    (gs.off = Rs),
    (gs.removeListener = Rs),
    (gs.removeAllListeners = Rs),
    (gs.emit = Rs),
    (gs.prependListener = Rs),
    (gs.prependOnceListener = Rs),
    (gs.listeners = function (t) {
      return [];
    }),
    (gs.binding = function (t) {
      throw new Error('process.binding is not supported');
    }),
    (gs.cwd = function () {
      return '/';
    }),
    (gs.chdir = function (t) {
      throw new Error('process.chdir is not supported');
    }),
    (gs.umask = function () {
      return 0;
    });
  const Is = { 'Content-Type': 'application/x-www-form-urlencoded' };
  const js = {
    transitional: Fi,
    adapter: (function () {
      let t;
      return (
        'undefined' != typeof XMLHttpRequest
          ? (t = ys.getAdapter('xhr'))
          : void 0 !== hs &&
            'process' === co.kindOf(hs) &&
            (t = ys.getAdapter('http')),
        t
      );
    })(),
    transformRequest: [
      function (t, e) {
        const r = e.getContentType() || '',
          n = r.indexOf('application/json') > -1,
          o = co.isObject(t);
        o && co.isHTMLForm(t) && (t = new FormData(t));
        if (co.isFormData(t)) return n && n ? JSON.stringify(qi(t)) : t;
        if (
          co.isArrayBuffer(t) ||
          co.isBuffer(t) ||
          co.isStream(t) ||
          co.isFile(t) ||
          co.isBlob(t)
        )
          return t;
        if (co.isArrayBufferView(t)) return t.buffer;
        if (co.isURLSearchParams(t))
          return (
            e.setContentType(
              'application/x-www-form-urlencoded;charset=utf-8',
              !1
            ),
            t.toString()
          );
        let i;
        if (o) {
          if (r.indexOf('application/x-www-form-urlencoded') > -1)
            return $i(t, this.formSerializer).toString();
          if ((i = co.isFileList(t)) || r.indexOf('multipart/form-data') > -1) {
            const e = this.env && this.env.FormData;
            return ji(
              i ? { 'files[]': t } : t,
              e && new e(),
              this.formSerializer
            );
          }
        }
        return o || n
          ? (e.setContentType('application/json', !1),
            (function (t, e, r) {
              if (co.isString(t))
                try {
                  return (e || JSON.parse)(t), co.trim(t);
                } catch (t) {
                  if ('SyntaxError' !== t.name) throw t;
                }
              return (r || JSON.stringify)(t);
            })(t))
          : t;
      },
    ],
    transformResponse: [
      function (t) {
        const e = this.transitional || js.transitional,
          r = e && e.forcedJSONParsing,
          n = 'json' === this.responseType;
        if (t && co.isString(t) && ((r && !this.responseType) || n)) {
          const r = !(e && e.silentJSONParsing) && n;
          try {
            return JSON.parse(t);
          } catch (t) {
            if (r) {
              if ('SyntaxError' === t.name)
                throw mo.from(
                  t,
                  mo.ERR_BAD_RESPONSE,
                  this,
                  null,
                  this.response
                );
              throw t;
            }
          }
        }
        return t;
      },
    ],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: { FormData: zi.classes.FormData, Blob: zi.classes.Blob },
    validateStatus: function (t) {
      return t >= 200 && t < 300;
    },
    headers: { common: { Accept: 'application/json, text/plain, */*' } },
  };
  co.forEach(['delete', 'get', 'head'], function (t) {
    js.headers[t] = {};
  }),
    co.forEach(['post', 'put', 'patch'], function (t) {
      js.headers[t] = co.merge(Is);
    });
  var Ls = js;
  function _s(t, e) {
    const r = this || Ls,
      n = e || r,
      o = as.from(n.headers);
    let i = n.data;
    return (
      co.forEach(t, function (t) {
        i = t.call(r, i, o.normalize(), e ? e.status : void 0);
      }),
      o.normalize(),
      i
    );
  }
  function Us(t) {
    return !(!t || !t.__CANCEL__);
  }
  function xs(t) {
    if (
      (t.cancelToken && t.cancelToken.throwIfRequested(),
      t.signal && t.signal.aborted)
    )
      throw new Ki();
  }
  function Cs(t) {
    xs(t),
      (t.headers = as.from(t.headers)),
      (t.data = _s.call(t, t.transformRequest));
    return (t.adapter || Ls.adapter)(t).then(
      function (e) {
        return (
          xs(t),
          (e.data = _s.call(t, t.transformResponse, e)),
          (e.headers = as.from(e.headers)),
          e
        );
      },
      function (e) {
        return (
          Us(e) ||
            (xs(t),
            e &&
              e.response &&
              ((e.response.data = _s.call(t, t.transformResponse, e.response)),
              (e.response.headers = as.from(e.response.headers)))),
          Promise.reject(e)
        );
      }
    );
  }
  function Ps(t, e) {
    e = e || {};
    const r = {};
    function n(t, e) {
      return co.isPlainObject(t) && co.isPlainObject(e)
        ? co.merge(t, e)
        : co.isPlainObject(e)
        ? co.merge({}, e)
        : co.isArray(e)
        ? e.slice()
        : e;
    }
    function o(r) {
      return co.isUndefined(e[r])
        ? co.isUndefined(t[r])
          ? void 0
          : n(void 0, t[r])
        : n(t[r], e[r]);
    }
    function i(t) {
      if (!co.isUndefined(e[t])) return n(void 0, e[t]);
    }
    function s(r) {
      return co.isUndefined(e[r])
        ? co.isUndefined(t[r])
          ? void 0
          : n(void 0, t[r])
        : n(void 0, e[r]);
    }
    function a(r) {
      return r in e ? n(t[r], e[r]) : r in t ? n(void 0, t[r]) : void 0;
    }
    const u = {
      url: i,
      method: i,
      data: i,
      baseURL: s,
      transformRequest: s,
      transformResponse: s,
      paramsSerializer: s,
      timeout: s,
      timeoutMessage: s,
      withCredentials: s,
      adapter: s,
      responseType: s,
      xsrfCookieName: s,
      xsrfHeaderName: s,
      onUploadProgress: s,
      onDownloadProgress: s,
      decompress: s,
      maxContentLength: s,
      maxBodyLength: s,
      beforeRedirect: s,
      transport: s,
      httpAgent: s,
      httpsAgent: s,
      cancelToken: s,
      socketPath: s,
      responseEncoding: s,
      validateStatus: a,
    };
    return (
      co.forEach(Object.keys(t).concat(Object.keys(e)), function (t) {
        const e = u[t] || o,
          n = e(t);
        (co.isUndefined(n) && e !== a) || (r[t] = n);
      }),
      r
    );
  }
  const Ns = '1.1.3',
    Fs = {};
  ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
    (t, e) => {
      Fs[t] = function (r) {
        return typeof r === t || 'a' + (e < 1 ? 'n ' : ' ') + t;
      };
    }
  );
  const ks = {};
  Fs.transitional = function (t, e, r) {
    function n(t, e) {
      return (
        "[Axios v1.1.3] Transitional option '" +
        t +
        "'" +
        e +
        (r ? '. ' + r : '')
      );
    }
    return (r, o, i) => {
      if (!1 === t)
        throw new mo(
          n(o, ' has been removed' + (e ? ' in ' + e : '')),
          mo.ERR_DEPRECATED
        );
      return (
        e &&
          !ks[o] &&
          ((ks[o] = !0),
          console.warn(
            n(
              o,
              ' has been deprecated since v' +
                e +
                ' and will be removed in the near future'
            )
          )),
        !t || t(r, o, i)
      );
    };
  };
  var Ds = {
    assertOptions: function (t, e, r) {
      if ('object' != typeof t)
        throw new mo('options must be an object', mo.ERR_BAD_OPTION_VALUE);
      const n = Object.keys(t);
      let o = n.length;
      for (; o-- > 0; ) {
        const i = n[o],
          s = e[i];
        if (s) {
          const e = t[i],
            r = void 0 === e || s(e, i, t);
          if (!0 !== r)
            throw new mo(
              'option ' + i + ' must be ' + r,
              mo.ERR_BAD_OPTION_VALUE
            );
        } else if (!0 !== r)
          throw new mo('Unknown option ' + i, mo.ERR_BAD_OPTION);
      }
    },
    validators: Fs,
  };
  const Ms = Ds.validators;
  class zs {
    request(t, e) {
      'string' == typeof t ? ((e = e || {}).url = t) : (e = t || {}),
        (e = Ps(this.defaults, e));
      const { transitional: r, paramsSerializer: n } = e;
      void 0 !== r &&
        Ds.assertOptions(
          r,
          {
            silentJSONParsing: Ms.transitional(Ms.boolean),
            forcedJSONParsing: Ms.transitional(Ms.boolean),
            clarifyTimeoutError: Ms.transitional(Ms.boolean),
          },
          !1
        ),
        void 0 !== n &&
          Ds.assertOptions(
            n,
            { encode: Ms.function, serialize: Ms.function },
            !0
          ),
        (e.method = (e.method || this.defaults.method || 'get').toLowerCase());
      const o = e.headers && co.merge(e.headers.common, e.headers[e.method]);
      o &&
        co.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          function (t) {
            delete e.headers[t];
          }
        ),
        (e.headers = new as(e.headers, o));
      const i = [];
      let s = !0;
      this.interceptors.request.forEach(function (t) {
        ('function' == typeof t.runWhen && !1 === t.runWhen(e)) ||
          ((s = s && t.synchronous), i.unshift(t.fulfilled, t.rejected));
      });
      const a = [];
      let u;
      this.interceptors.response.forEach(function (t) {
        a.push(t.fulfilled, t.rejected);
      });
      let c,
        f = 0;
      if (!s) {
        const t = [Cs.bind(this), void 0];
        for (
          t.unshift.apply(t, i),
            t.push.apply(t, a),
            c = t.length,
            u = Promise.resolve(e);
          f < c;

        )
          u = u.then(t[f++], t[f++]);
        return u;
      }
      c = i.length;
      let l = e;
      for (f = 0; f < c; ) {
        const t = i[f++],
          e = i[f++];
        try {
          l = t(l);
        } catch (t) {
          e.call(this, t);
          break;
        }
      }
      try {
        u = Cs.call(this, l);
      } catch (t) {
        return Promise.reject(t);
      }
      for (f = 0, c = a.length; f < c; ) u = u.then(a[f++], a[f++]);
      return u;
    }
    getUri(t) {
      return Pi(
        Ji((t = Ps(this.defaults, t)).baseURL, t.url),
        t.params,
        t.paramsSerializer
      );
    }
    constructor(t) {
      (this.defaults = t),
        (this.interceptors = { request: new Ni(), response: new Ni() });
    }
  }
  co.forEach(['delete', 'get', 'head', 'options'], function (t) {
    zs.prototype[t] = function (e, r) {
      return this.request(
        Ps(r || {}, { method: t, url: e, data: (r || {}).data })
      );
    };
  }),
    co.forEach(['post', 'put', 'patch'], function (t) {
      function e(e) {
        return function (r, n, o) {
          return this.request(
            Ps(o || {}, {
              method: t,
              headers: e ? { 'Content-Type': 'multipart/form-data' } : {},
              url: r,
              data: n,
            })
          );
        };
      }
      (zs.prototype[t] = e()), (zs.prototype[t + 'Form'] = e(!0));
    });
  var $s = zs;
  class qs {
    throwIfRequested() {
      if (this.reason) throw this.reason;
    }
    subscribe(t) {
      this.reason
        ? t(this.reason)
        : this._listeners
        ? this._listeners.push(t)
        : (this._listeners = [t]);
    }
    unsubscribe(t) {
      if (!this._listeners) return;
      const e = this._listeners.indexOf(t);
      -1 !== e && this._listeners.splice(e, 1);
    }
    static source() {
      let t;
      return {
        token: new qs(function (e) {
          t = e;
        }),
        cancel: t,
      };
    }
    constructor(t) {
      if ('function' != typeof t)
        throw new TypeError('executor must be a function.');
      let e;
      this.promise = new Promise(function (t) {
        e = t;
      });
      const r = this;
      this.promise.then((t) => {
        if (!r._listeners) return;
        let e = r._listeners.length;
        for (; e-- > 0; ) r._listeners[e](t);
        r._listeners = null;
      }),
        (this.promise.then = (t) => {
          let e;
          const n = new Promise((t) => {
            r.subscribe(t), (e = t);
          }).then(t);
          return (
            (n.cancel = function () {
              r.unsubscribe(e);
            }),
            n
          );
        }),
        t(function (t, n, o) {
          r.reason || ((r.reason = new Ki(t, n, o)), e(r.reason));
        });
    }
  }
  var Vs = qs;
  const Gs = (function t(e) {
    const r = new $s(e),
      n = Nn($s.prototype.request, r);
    return (
      co.extend(n, $s.prototype, r, { allOwnKeys: !0 }),
      co.extend(n, r, null, { allOwnKeys: !0 }),
      (n.create = function (r) {
        return t(Ps(e, r));
      }),
      n
    );
  })(Ls);
  (Gs.Axios = $s),
    (Gs.CanceledError = Ki),
    (Gs.CancelToken = Vs),
    (Gs.isCancel = Us),
    (Gs.VERSION = Ns),
    (Gs.toFormData = ji),
    (Gs.AxiosError = mo),
    (Gs.Cancel = Gs.CanceledError),
    (Gs.all = function (t) {
      return Promise.all(t);
    }),
    (Gs.spread = function (t) {
      return function (e) {
        return t.apply(null, e);
      };
    }),
    (Gs.isAxiosError = function (t) {
      return co.isObject(t) && !0 === t.isAxiosError;
    }),
    (Gs.formToJSON = (t) => qi(co.isHTMLForm(t) ? new FormData(t) : t));
  var Hs = Gs;
  const {
    Axios: Js,
    AxiosError: Ws,
    CanceledError: Ys,
    isCancel: Ks,
    CancelToken: Xs,
    VERSION: Qs,
    all: Zs,
    Cancel: ta,
    isAxiosError: ea,
    spread: ra,
    toFormData: na,
  } = Hs;
  var oa = Hs;
  const ia = () => {
      const t = document.querySelector('.alert');
      t && t.parentElement.removeChild(t);
    },
    sa = (t, e) => {
      ia();
      const r = `<div class="alert alert--${t}">${e}</div>`;
      document.querySelector('body').insertAdjacentHTML('afterbegin', r),
        window.setTimeout(ia, 5e3);
    },
    aa = async (t) => {
      try {
        const e = await oa(`/api/v1/booking/checkout-session/${t}`);
        window.location.href = e.data.response.data.authorization_url;
      } catch (t) {
        sa('error', t);
      }
    },
    ua = async (t, e) => {
      try {
        'success' ===
          (
            await oa({
              method: 'POST',
              url: '/api/v1/users/login',
              data: { email: t, password: e },
            })
          ).data.status &&
          (sa('success', 'Logged in sucessfully'),
          window.setTimeout(() => {
            location.assign('/');
          }, 1500));
      } catch (t) {
        sa('error', t.response.data.message);
      }
    },
    ca = async (t, e) => {
      try {
        const r =
          'password' === e
            ? 'http://127.0.0.1:8000/api/v1/users/updateMyPassword/'
            : 'http://127.0.0.1:8000/api/v1/users/updateMe';
        'success' ===
          (await oa({ method: 'PATCH', url: r, data: t })).data.status &&
          sa('success', `${e.toUpperCase()} Updated sucessfully`);
      } catch (t) {
        sa('error', t.response.data.message);
      }
    },
    fa = document.getElementById('map'),
    la = document.querySelector('.form--login'),
    ha = document.querySelector('.nav__el--logout'),
    pa = document.querySelector('.form-user-data'),
    da = document.querySelector('.form-user-password'),
    ya = document.getElementById('book-tour');
  if (fa) {
    Pn(JSON.parse(fa.dataset.locations));
  }
  la &&
    la.addEventListener('submit', (t) => {
      t.preventDefault();
      const e = document.getElementById('email').value,
        r = document.getElementById('password').value;
      ua(e, r);
    }),
    ha &&
      ha.addEventListener('click', async () => {
        try {
          ((
            await oa({ method: 'GET', url: '/api/v1/users/logout' })
          ).data.status = 'success'),
            window.setTimeout(() => {
              location.reload(!0), location.assign('/');
            }, 1e3);
        } catch (t) {
          sa('error', 'Error logging out! Try again.');
        }
      }),
    pa &&
      pa.addEventListener('submit', (t) => {
        t.preventDefault();
        const e = new FormData();
        e.append('name', document.getElementById('name').value),
          e.append('email', document.getElementById('email').value),
          e.append('photo', document.getElementById('photo').files[0]);
        for (const [t, r] of e.entries());
        ca(e, 'data');
      }),
    da &&
      da.addEventListener('submit', async (t) => {
        t.preventDefault(),
          (document.querySelector('.btn--save-password').textContent =
            'Updating...');
        const e = document.getElementById('password-current').value,
          r = document.getElementById('password').value,
          n = document.getElementById('password-confirm').value;
        await ca(
          { passwordCurrent: e, password: r, passwordConfirm: n },
          'password'
        ),
          (document.querySelector('.btn--save-password').textContent =
            'Save password'),
          (document.getElementById('password-current').value = ''),
          (document.getElementById('password').value = ''),
          (document.getElementById('password-confirm').value = '');
      }),
    ya &&
      ya.addEventListener('click', (t) => {
        t.target.textContent = 'Processing...';
        const { tourId: e } = t.target.dataset;
        aa(e);
      });
})();
//# sourceMappingURL=index.js.map
