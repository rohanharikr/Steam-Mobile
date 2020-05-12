import {
  S as e,
  i as r,
  s as a,
  e as t,
  t as i,
  a as s,
  c as n,
  b as c,
  g as l,
  d as g,
  f as m,
  h as d,
  z as o,
  k as $,
  l as u,
  m as f,
  n as p,
  j as h,
  o as v,
  p as w,
  r as P,
  u as I,
  v as q,
  w as b,
  H as x,
  I as C,
  q as E,
} from './client.17c49226.js'
import { N as y, T as D } from './Tabbar.2448f4e0.js'
function V(e) {
  let r, a, h, v, w, P, I, q, b, x, C, E, y, D, V, j, z, M
  return {
    c() {
      ;(r = t('div')),
        (a = t('div')),
        (h = i('-')),
        (v = i(e[3])),
        (w = i('%')),
        (I = s()),
        (q = t('div')),
        (b = t('div')),
        (x = i('$')),
        (C = i(e[0])),
        (y = s()),
        (D = t('div')),
        (V = i('$')),
        (j = i(e[1])),
        this.h()
    },
    l(t) {
      r = n(t, 'DIV', { id: !0, class: !0 })
      var i = c(r)
      a = n(i, 'DIV', { id: !0, class: !0 })
      var s = c(a)
      ;(h = l(s, '-')),
        (v = l(s, e[3])),
        (w = l(s, '%')),
        s.forEach(g),
        (I = m(i)),
        (q = n(i, 'DIV', { id: !0, class: !0 }))
      var d = c(q)
      b = n(d, 'DIV', { id: !0, class: !0 })
      var o = c(b)
      ;(x = l(o, '$')),
        (C = l(o, e[0])),
        o.forEach(g),
        (y = m(d)),
        (D = n(d, 'DIV', { id: !0, class: !0 }))
      var $ = c(D)
      ;(V = l($, '$')),
        (j = l($, e[1])),
        $.forEach(g),
        d.forEach(g),
        i.forEach(g),
        this.h()
    },
    h() {
      d(a, 'id', 'discount'),
        d(
          a,
          'class',
          (P = o(e[2] ? 'discount discount--square' : '') + ' svelte-nwzu5p')
        ),
        d(b, 'id', 'originalprice'),
        d(
          b,
          'class',
          (E = o(e[2] ? 'originalprice--square' : '') + ' svelte-nwzu5p')
        ),
        d(D, 'id', 'reducedprice'),
        d(
          D,
          'class',
          (z = o(e[2] ? 'reducedprice--square' : '') + ' svelte-nwzu5p')
        ),
        d(q, 'id', 'prices'),
        d(
          q,
          'class',
          (M = o(e[2] ? 'prices prices--square' : '') + ' svelte-nwzu5p')
        ),
        d(r, 'id', 'pricebox'),
        d(r, 'class', 'svelte-nwzu5p')
    },
    m(e, t) {
      $(e, r, t),
        u(r, a),
        u(a, h),
        u(a, v),
        u(a, w),
        u(r, I),
        u(r, q),
        u(q, b),
        u(b, x),
        u(b, C),
        u(q, y),
        u(q, D),
        u(D, V),
        u(D, j)
    },
    p(e, [r]) {
      4 & r &&
        P !==
          (P = o(e[2] ? 'discount discount--square' : '') + ' svelte-nwzu5p') &&
        d(a, 'class', P),
        1 & r && f(C, e[0]),
        4 & r &&
          E !==
            (E = o(e[2] ? 'originalprice--square' : '') + ' svelte-nwzu5p') &&
          d(b, 'class', E),
        2 & r && f(j, e[1]),
        4 & r &&
          z !==
            (z = o(e[2] ? 'reducedprice--square' : '') + ' svelte-nwzu5p') &&
          d(D, 'class', z),
        4 & r &&
          M !==
            (M = o(e[2] ? 'prices prices--square' : '') + ' svelte-nwzu5p') &&
          d(q, 'class', M)
    },
    i: p,
    o: p,
    d(e) {
      e && g(r)
    },
  }
}
function j(e, r, a) {
  let { originalPrice: t } = r,
    { reducedPrice: i } = r,
    { small: s = !1 } = r,
    n = ((100 * (t - i)) / t).toFixed(0)
  return (
    (e.$set = (e) => {
      'originalPrice' in e && a(0, (t = e.originalPrice)),
        'reducedPrice' in e && a(1, (i = e.reducedPrice)),
        'small' in e && a(2, (s = e.small))
    }),
    [t, i, s, n]
  )
}
class z extends e {
  constructor(e) {
    super(),
      r(this, e, j, V, a, { originalPrice: 0, reducedPrice: 1, small: 2 })
  }
}
function M(e) {
  let r, a
  return {
    c() {
      ;(r = t('img')), this.h()
    },
    l(e) {
      ;(r = n(e, 'IMG', { src: !0, height: !0 })), this.h()
    },
    h() {
      r.src !== (a = 'windows.svg') && d(r, 'src', 'windows.svg'),
        d(r, 'height', '15px;')
    },
    m(e, a) {
      $(e, r, a)
    },
    d(e) {
      e && g(r)
    },
  }
}
function k(e) {
  let r, a
  return {
    c() {
      ;(r = t('img')), this.h()
    },
    l(e) {
      ;(r = n(e, 'IMG', { src: !0, height: !0, style: !0 })), this.h()
    },
    h() {
      r.src !== (a = 'mac.svg') && d(r, 'src', 'mac.svg'),
        d(r, 'height', '15px;'),
        h(r, 'margin-left', '4px')
    },
    m(e, a) {
      $(e, r, a)
    },
    d(e) {
      e && g(r)
    },
  }
}
function A(e) {
  let r, a
  return {
    c() {
      ;(r = t('img')), this.h()
    },
    l(e) {
      ;(r = n(e, 'IMG', { src: !0, height: !0, style: !0 })), this.h()
    },
    h() {
      r.src !== (a = 'steamlogo.svg') && d(r, 'src', 'steamlogo.svg'),
        d(r, 'height', '15px;'),
        h(r, 'margin-left', '4px')
    },
    m(e, a) {
      $(e, r, a)
    },
    d(e) {
      e && g(r)
    },
  }
}
function H(e) {
  let r, a, o, f, p, x, C, E, y, D, V
  const j = new z({ props: { originalPrice: e[4], reducedPrice: e[5] } })
  let H = e[1] && M(),
    S = e[2] && k(),
    G = e[3] && A()
  return {
    c() {
      ;(r = t('div')),
        (a = t('div')),
        v(j.$$.fragment),
        (o = s()),
        (f = t('div')),
        (p = t('div')),
        (x = i('11 friends own this game')),
        (C = s()),
        (E = t('div')),
        H && H.c(),
        (y = s()),
        S && S.c(),
        (D = s()),
        G && G.c(),
        this.h()
    },
    l(e) {
      r = n(e, 'DIV', { id: !0, class: !0 })
      var t = c(r)
      a = n(t, 'DIV', { id: !0, class: !0, style: !0 })
      var i = c(a)
      w(j.$$.fragment, i),
        i.forEach(g),
        (o = m(t)),
        (f = n(t, 'DIV', { id: !0, class: !0 }))
      var s = c(f)
      p = n(s, 'DIV', { id: !0, class: !0 })
      var d = c(p)
      ;(x = l(d, '11 friends own this game')),
        d.forEach(g),
        (C = m(s)),
        (E = n(s, 'DIV', {}))
      var $ = c(E)
      H && H.l($),
        (y = m($)),
        S && S.l($),
        (D = m($)),
        G && G.l($),
        $.forEach(g),
        s.forEach(g),
        t.forEach(g),
        this.h()
    },
    h() {
      d(a, 'id', 'image'),
        d(a, 'class', 'image svelte-1tl6par'),
        h(a, 'background-image', 'url(' + e[0] + ')'),
        d(p, 'id', 'owners'),
        d(p, 'class', 'svelte-1tl6par'),
        d(f, 'id', 'cardInfo'),
        d(f, 'class', 'svelte-1tl6par'),
        d(r, 'id', 'card'),
        d(r, 'class', 'svelte-1tl6par')
    },
    m(e, t) {
      $(e, r, t),
        u(r, a),
        P(j, a, null),
        u(r, o),
        u(r, f),
        u(f, p),
        u(p, x),
        u(f, C),
        u(f, E),
        H && H.m(E, null),
        u(E, y),
        S && S.m(E, null),
        u(E, D),
        G && G.m(E, null),
        (V = !0)
    },
    p(e, [r]) {
      const t = {}
      16 & r && (t.originalPrice = e[4]),
        32 & r && (t.reducedPrice = e[5]),
        j.$set(t),
        (!V || 1 & r) && h(a, 'background-image', 'url(' + e[0] + ')'),
        e[1] ? H || ((H = M()), H.c(), H.m(E, y)) : H && (H.d(1), (H = null)),
        e[2] ? S || ((S = k()), S.c(), S.m(E, D)) : S && (S.d(1), (S = null)),
        e[3] ? G || ((G = A()), G.c(), G.m(E, null)) : G && (G.d(1), (G = null))
    },
    i(e) {
      V || (I(j.$$.fragment, e), (V = !0))
    },
    o(e) {
      q(j.$$.fragment, e), (V = !1)
    },
    d(e) {
      e && g(r), b(j), H && H.d(), S && S.d(), G && G.d()
    },
  }
}
function S(e, r, a) {
  let { image: t } = r,
    { windows: i = !0 } = r,
    { mac: s = !1 } = r,
    { steam: n = !1 } = r,
    { originalPrice: c } = r,
    { reducedPrice: l } = r
  return (
    (e.$set = (e) => {
      'image' in e && a(0, (t = e.image)),
        'windows' in e && a(1, (i = e.windows)),
        'mac' in e && a(2, (s = e.mac)),
        'steam' in e && a(3, (n = e.steam)),
        'originalPrice' in e && a(4, (c = e.originalPrice)),
        'reducedPrice' in e && a(5, (l = e.reducedPrice))
    }),
    [t, i, s, n, c, l]
  )
}
class G extends e {
  constructor(e) {
    super(),
      r(this, e, S, H, a, {
        image: 0,
        windows: 1,
        mac: 2,
        steam: 3,
        originalPrice: 4,
        reducedPrice: 5,
      })
  }
}
function O(e) {
  let r, a
  return {
    c() {
      ;(r = t('img')), this.h()
    },
    l(e) {
      ;(r = n(e, 'IMG', { src: !0, height: !0 })), this.h()
    },
    h() {
      r.src !== (a = 'windows.svg') && d(r, 'src', 'windows.svg'),
        d(r, 'height', '12px;')
    },
    m(e, a) {
      $(e, r, a)
    },
    d(e) {
      e && g(r)
    },
  }
}
function T(e) {
  let r, a
  return {
    c() {
      ;(r = t('img')), this.h()
    },
    l(e) {
      ;(r = n(e, 'IMG', { src: !0, height: !0, style: !0 })), this.h()
    },
    h() {
      r.src !== (a = 'mac.svg') && d(r, 'src', 'mac.svg'),
        d(r, 'height', '12px;'),
        h(r, 'margin-left', '4px')
    },
    m(e, a) {
      $(e, r, a)
    },
    d(e) {
      e && g(r)
    },
  }
}
function L(e) {
  let r, a
  return {
    c() {
      ;(r = t('img')), this.h()
    },
    l(e) {
      ;(r = n(e, 'IMG', { src: !0, height: !0, style: !0 })), this.h()
    },
    h() {
      r.src !== (a = 'steamlogo.svg') && d(r, 'src', 'steamlogo.svg'),
        d(r, 'height', '12px;'),
        h(r, 'margin-left', '4px')
    },
    m(e, a) {
      $(e, r, a)
    },
    d(e) {
      e && g(r)
    },
  }
}
function F(e) {
  let r, a, i, l, o, f, p, x
  const C = new z({
    props: { originalPrice: e[4], reducedPrice: e[5], small: !0 },
  })
  let E = e[1] && O(),
    y = e[2] && T(),
    D = e[3] && L()
  return {
    c() {
      ;(r = t('div')),
        (a = t('div')),
        v(C.$$.fragment),
        (i = s()),
        (l = t('div')),
        (o = t('div')),
        E && E.c(),
        (f = s()),
        y && y.c(),
        (p = s()),
        D && D.c(),
        this.h()
    },
    l(e) {
      r = n(e, 'DIV', { id: !0, class: !0 })
      var t = c(r)
      a = n(t, 'DIV', { id: !0, class: !0, style: !0 })
      var s = c(a)
      w(C.$$.fragment, s),
        s.forEach(g),
        (i = m(t)),
        (l = n(t, 'DIV', { id: !0, class: !0 }))
      var d = c(l)
      o = n(d, 'DIV', {})
      var $ = c(o)
      E && E.l($),
        (f = m($)),
        y && y.l($),
        (p = m($)),
        D && D.l($),
        $.forEach(g),
        d.forEach(g),
        t.forEach(g),
        this.h()
    },
    h() {
      d(a, 'id', 'image'),
        d(a, 'class', 'image svelte-1toy9u1'),
        h(a, 'background-image', 'url(' + e[0] + ')'),
        d(l, 'id', 'cardInfo'),
        d(l, 'class', 'svelte-1toy9u1'),
        d(r, 'id', 'card'),
        d(r, 'class', 'svelte-1toy9u1')
    },
    m(e, t) {
      $(e, r, t),
        u(r, a),
        P(C, a, null),
        u(r, i),
        u(r, l),
        u(l, o),
        E && E.m(o, null),
        u(o, f),
        y && y.m(o, null),
        u(o, p),
        D && D.m(o, null),
        (x = !0)
    },
    p(e, [r]) {
      const t = {}
      16 & r && (t.originalPrice = e[4]),
        32 & r && (t.reducedPrice = e[5]),
        C.$set(t),
        (!x || 1 & r) && h(a, 'background-image', 'url(' + e[0] + ')'),
        e[1] ? E || ((E = O()), E.c(), E.m(o, f)) : E && (E.d(1), (E = null)),
        e[2] ? y || ((y = T()), y.c(), y.m(o, p)) : y && (y.d(1), (y = null)),
        e[3] ? D || ((D = L()), D.c(), D.m(o, null)) : D && (D.d(1), (D = null))
    },
    i(e) {
      x || (I(C.$$.fragment, e), (x = !0))
    },
    o(e) {
      q(C.$$.fragment, e), (x = !1)
    },
    d(e) {
      e && g(r), b(C), E && E.d(), y && y.d(), D && D.d()
    },
  }
}
function N(e, r, a) {
  let { image: t } = r,
    { windows: i = !0 } = r,
    { mac: s = !1 } = r,
    { steam: n = !1 } = r,
    { originalPrice: c } = r,
    { reducedPrice: l } = r
  return (
    (e.$set = (e) => {
      'image' in e && a(0, (t = e.image)),
        'windows' in e && a(1, (i = e.windows)),
        'mac' in e && a(2, (s = e.mac)),
        'steam' in e && a(3, (n = e.steam)),
        'originalPrice' in e && a(4, (c = e.originalPrice)),
        'reducedPrice' in e && a(5, (l = e.reducedPrice))
    }),
    [t, i, s, n, c, l]
  )
}
class Q extends e {
  constructor(e) {
    super(),
      r(this, e, N, F, a, {
        image: 0,
        windows: 1,
        mac: 2,
        steam: 3,
        originalPrice: 4,
        reducedPrice: 5,
      })
  }
}
function R(e) {
  let r, a, o, v, w, P
  return {
    c() {
      ;(r = t('div')),
        (a = t('div')),
        (o = t('div')),
        (v = i(e[1])),
        (w = s()),
        (P = t('div')),
        this.h()
    },
    l(t) {
      r = n(t, 'DIV', { id: !0, class: !0 })
      var i = c(r)
      a = n(i, 'DIV', { id: !0, class: !0, style: !0 })
      var s = c(a)
      o = n(s, 'DIV', { id: !0, class: !0 })
      var d = c(o)
      ;(v = l(d, e[1])),
        d.forEach(g),
        s.forEach(g),
        (w = m(i)),
        (P = n(i, 'DIV', { id: !0 })),
        c(P).forEach(g),
        i.forEach(g),
        this.h()
    },
    h() {
      d(o, 'id', 'imageController'),
        d(o, 'class', 'svelte-1r4wzwv'),
        d(a, 'id', 'image'),
        d(a, 'class', 'image svelte-1r4wzwv'),
        h(a, 'background-image', 'url(' + e[0] + ')'),
        d(P, 'id', 'cardInfo'),
        d(r, 'id', 'card'),
        d(r, 'class', 'svelte-1r4wzwv')
    },
    m(e, t) {
      $(e, r, t), u(r, a), u(a, o), u(o, v), u(r, w), u(r, P)
    },
    p(e, [r]) {
      2 & r && f(v, e[1]),
        1 & r && h(a, 'background-image', 'url(' + e[0] + ')')
    },
    i: p,
    o: p,
    d(e) {
      e && g(r)
    },
  }
}
function Y(e, r, a) {
  let { image: t } = r,
    { genre: i } = r
  return (
    (e.$set = (e) => {
      'image' in e && a(0, (t = e.image)), 'genre' in e && a(1, (i = e.genre))
    }),
    [t, i]
  )
}
class U extends e {
  constructor(e) {
    super(), r(this, e, Y, R, a, { image: 0, genre: 1 })
  }
}
function B(e) {
  let r, a, t, i, n
  const c = new G({
      props: {
        image:
          'https://cdn.arstechnica.net/wp-content/uploads/2019/10/outer-worlds-listing.png',
        originalPrice: '69.99',
        reducedPrice: '59.99',
      },
    }),
    l = new G({
      props: {
        image: 'https://i.ytimg.com/vi/eaW0tYpxyp0/maxresdefault.jpg',
        originalPrice: '69.99',
        reducedPrice: '59.99',
      },
    }),
    d = new G({
      props: {
        image:
          'https://steamcdn-a.akamaihd.net/steam/apps/374320/capsule_616x353.jpg',
        originalPrice: '69.99',
        reducedPrice: '59.99',
      },
    }),
    o = new G({
      props: {
        image:
          'https://steam.cryotank.net/wp-content/gallery/ori/Ori-01-HD.png',
        mac: 'true',
        originalPrice: '69.99',
        reducedPrice: '59.99',
      },
    }),
    u = new G({
      props: {
        image: 'https://i.ytimg.com/vi/2enbYOMtR4I/maxresdefault.jpg',
        originalPrice: '69.99',
        reducedPrice: '59.99',
      },
    })
  return {
    c() {
      v(c.$$.fragment),
        (r = s()),
        v(l.$$.fragment),
        (a = s()),
        v(d.$$.fragment),
        (t = s()),
        v(o.$$.fragment),
        (i = s()),
        v(u.$$.fragment)
    },
    l(e) {
      w(c.$$.fragment, e),
        (r = m(e)),
        w(l.$$.fragment, e),
        (a = m(e)),
        w(d.$$.fragment, e),
        (t = m(e)),
        w(o.$$.fragment, e),
        (i = m(e)),
        w(u.$$.fragment, e)
    },
    m(e, s) {
      P(c, e, s),
        $(e, r, s),
        P(l, e, s),
        $(e, a, s),
        P(d, e, s),
        $(e, t, s),
        P(o, e, s),
        $(e, i, s),
        P(u, e, s),
        (n = !0)
    },
    i(e) {
      n ||
        (I(c.$$.fragment, e),
        I(l.$$.fragment, e),
        I(d.$$.fragment, e),
        I(o.$$.fragment, e),
        I(u.$$.fragment, e),
        (n = !0))
    },
    o(e) {
      q(c.$$.fragment, e),
        q(l.$$.fragment, e),
        q(d.$$.fragment, e),
        q(o.$$.fragment, e),
        q(u.$$.fragment, e),
        (n = !1)
    },
    d(e) {
      b(c, e),
        e && g(r),
        b(l, e),
        e && g(a),
        b(d, e),
        e && g(t),
        b(o, e),
        e && g(i),
        b(u, e)
    },
  }
}
function K(e) {
  let r, a, t, i, n
  const c = new Q({
      props: {
        image:
          'https://lh3.googleusercontent.com/caNRdVjHrAC8AXjQwNp4u0FzK2xwKTMC--MYdb8xXNeCinjwQOF8EqSOcYCC3RFBdgjd',
        mac: 'true',
        steam: 'true',
        originalPrice: '69.99',
        reducedPrice: '59.99',
      },
    }),
    l = new Q({
      props: {
        image:
          'https://www.androidpolice.com/wp-content/uploads/2018/10/81LJeCDylML.jpg',
        mac: 'true',
        steam: 'true',
        originalPrice: '69.99',
        reducedPrice: '59.99',
      },
    }),
    d = new Q({
      props: {
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsrSn4-vAw6oUWmYryVBtEnTUUd6-5rCQdzS1p4Hik-dLxOnOz&usqp=CAU',
        mac: 'true',
        steam: 'true',
        originalPrice: '69.99',
        reducedPrice: '59.99',
      },
    }),
    o = new Q({
      props: {
        image: 'https://i.ytimg.com/vi/gvECQlxrhbw/maxresdefault.jpg',
        mac: 'true',
        originalPrice: '69.99',
        reducedPrice: '59.99',
      },
    }),
    u = new Q({
      props: {
        image:
          'https://images-na.ssl-images-amazon.com/images/I/71p9r+IRobL.jpg',
        mac: 'true',
        originalPrice: '69.99',
        reducedPrice: '59.99',
      },
    })
  return {
    c() {
      v(c.$$.fragment),
        (r = s()),
        v(l.$$.fragment),
        (a = s()),
        v(d.$$.fragment),
        (t = s()),
        v(o.$$.fragment),
        (i = s()),
        v(u.$$.fragment)
    },
    l(e) {
      w(c.$$.fragment, e),
        (r = m(e)),
        w(l.$$.fragment, e),
        (a = m(e)),
        w(d.$$.fragment, e),
        (t = m(e)),
        w(o.$$.fragment, e),
        (i = m(e)),
        w(u.$$.fragment, e)
    },
    m(e, s) {
      P(c, e, s),
        $(e, r, s),
        P(l, e, s),
        $(e, a, s),
        P(d, e, s),
        $(e, t, s),
        P(o, e, s),
        $(e, i, s),
        P(u, e, s),
        (n = !0)
    },
    i(e) {
      n ||
        (I(c.$$.fragment, e),
        I(l.$$.fragment, e),
        I(d.$$.fragment, e),
        I(o.$$.fragment, e),
        I(u.$$.fragment, e),
        (n = !0))
    },
    o(e) {
      q(c.$$.fragment, e),
        q(l.$$.fragment, e),
        q(d.$$.fragment, e),
        q(o.$$.fragment, e),
        q(u.$$.fragment, e),
        (n = !1)
    },
    d(e) {
      b(c, e),
        e && g(r),
        b(l, e),
        e && g(a),
        b(d, e),
        e && g(t),
        b(o, e),
        e && g(i),
        b(u, e)
    },
  }
}
function W(e) {
  let r, a, t, i, n
  const c = new U({
      props: {
        genre: 'Indie',
        image:
          'https://venturebeat.com/wp-content/uploads/2012/03/journey-1.jpg?w=1200&strip=all',
      },
    }),
    l = new U({
      props: {
        genre: 'Action',
        image:
          'https://store-images.s-microsoft.com/image/apps.38656.69038865179152125.af885fa8-7b94-47b1-be3a-d2ab6af95a6a.af83131f-d4dc-4d47-a84d-25aab92a5e5b?mode=scale&q=90&h=1080&w=1920',
      },
    }),
    d = new U({
      props: {
        genre: 'Adventure',
        image:
          'https://assets1.ignimgs.com/2020/03/24/ign-doom-eternal-complete-review-blogroll-1585092832291.jpg',
      },
    }),
    o = new U({
      props: {
        genre: 'Multiplayer',
        image:
          'https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png',
      },
    }),
    u = new U({
      props: {
        genre: 'Horror',
        image:
          'https://i2.wp.com/tecake.com/wp-content/uploads/2020/04/4L2MLiPnTT5hMHbCqgyjAc.jpg?fit=1920%2C1080&ssl=1',
      },
    })
  return {
    c() {
      v(c.$$.fragment),
        (r = s()),
        v(l.$$.fragment),
        (a = s()),
        v(d.$$.fragment),
        (t = s()),
        v(o.$$.fragment),
        (i = s()),
        v(u.$$.fragment)
    },
    l(e) {
      w(c.$$.fragment, e),
        (r = m(e)),
        w(l.$$.fragment, e),
        (a = m(e)),
        w(d.$$.fragment, e),
        (t = m(e)),
        w(o.$$.fragment, e),
        (i = m(e)),
        w(u.$$.fragment, e)
    },
    m(e, s) {
      P(c, e, s),
        $(e, r, s),
        P(l, e, s),
        $(e, a, s),
        P(d, e, s),
        $(e, t, s),
        P(o, e, s),
        $(e, i, s),
        P(u, e, s),
        (n = !0)
    },
    i(e) {
      n ||
        (I(c.$$.fragment, e),
        I(l.$$.fragment, e),
        I(d.$$.fragment, e),
        I(o.$$.fragment, e),
        I(u.$$.fragment, e),
        (n = !0))
    },
    o(e) {
      q(c.$$.fragment, e),
        q(l.$$.fragment, e),
        q(d.$$.fragment, e),
        q(o.$$.fragment, e),
        q(u.$$.fragment, e),
        (n = !1)
    },
    d(e) {
      b(c, e),
        e && g(r),
        b(l, e),
        e && g(a),
        b(d, e),
        e && g(t),
        b(o, e),
        e && g(i),
        b(u, e)
    },
  }
}
function X(e) {
  let r,
    a,
    o,
    p,
    h,
    v,
    w,
    P,
    b,
    E,
    y,
    D = e[2] && B(),
    V = e[3] && K(),
    j = e[4] && W()
  return {
    c() {
      ;(r = t('div')),
        (a = t('h6')),
        (o = i(e[0])),
        (p = s()),
        (h = t('h3')),
        (v = i(e[1])),
        (w = s()),
        (P = t('div')),
        D && D.c(),
        (b = s()),
        V && V.c(),
        (E = s()),
        j && j.c(),
        this.h()
    },
    l(t) {
      r = n(t, 'DIV', { id: !0, class: !0 })
      var i = c(r)
      a = n(i, 'H6', { class: !0 })
      var s = c(a)
      ;(o = l(s, e[0])),
        s.forEach(g),
        (p = m(i)),
        (h = n(i, 'H3', { class: !0 }))
      var d = c(h)
      ;(v = l(d, e[1])),
        d.forEach(g),
        (w = m(i)),
        (P = n(i, 'DIV', { id: !0, class: !0 }))
      var $ = c(P)
      D && D.l($),
        (b = m($)),
        V && V.l($),
        (E = m($)),
        j && j.l($),
        $.forEach(g),
        i.forEach(g),
        this.h()
    },
    h() {
      d(a, 'class', 'svelte-1bqqa9q'),
        d(h, 'class', 'svelte-1bqqa9q'),
        d(P, 'id', 'spotlight'),
        d(P, 'class', 'svelte-1bqqa9q'),
        d(r, 'id', 'section'),
        d(r, 'class', 'svelte-1bqqa9q')
    },
    m(e, t) {
      $(e, r, t),
        u(r, a),
        u(a, o),
        u(r, p),
        u(r, h),
        u(h, v),
        u(r, w),
        u(r, P),
        D && D.m(P, null),
        u(P, b),
        V && V.m(P, null),
        u(P, E),
        j && j.m(P, null),
        (y = !0)
    },
    p(e, [r]) {
      ;(!y || 1 & r) && f(o, e[0]),
        (!y || 2 & r) && f(v, e[1]),
        e[2]
          ? D
            ? 4 & r && I(D, 1)
            : ((D = B()), D.c(), I(D, 1), D.m(P, b))
          : D &&
            (x(),
            q(D, 1, 1, () => {
              D = null
            }),
            C()),
        e[3]
          ? V
            ? 8 & r && I(V, 1)
            : ((V = K()), V.c(), I(V, 1), V.m(P, E))
          : V &&
            (x(),
            q(V, 1, 1, () => {
              V = null
            }),
            C()),
        e[4]
          ? j
            ? 16 & r && I(j, 1)
            : ((j = W()), j.c(), I(j, 1), j.m(P, null))
          : j &&
            (x(),
            q(j, 1, 1, () => {
              j = null
            }),
            C())
    },
    i(e) {
      y || (I(D), I(V), I(j), (y = !0))
    },
    o(e) {
      q(D), q(V), q(j), (y = !1)
    },
    d(e) {
      e && g(r), D && D.d(), V && V.d(), j && j.d()
    },
  }
}
function _(e, r, a) {
  let { tag: t = '' } = r,
    { heading: i } = r,
    { rectangleCard: s = !1 } = r,
    { squareCard: n = !1 } = r,
    { stripCard: c = !1 } = r
  return (
    (e.$set = (e) => {
      'tag' in e && a(0, (t = e.tag)),
        'heading' in e && a(1, (i = e.heading)),
        'rectangleCard' in e && a(2, (s = e.rectangleCard)),
        'squareCard' in e && a(3, (n = e.squareCard)),
        'stripCard' in e && a(4, (c = e.stripCard))
    }),
    [t, i, s, n, c]
  )
}
class J extends e {
  constructor(e) {
    super(),
      r(this, e, _, X, a, {
        tag: 0,
        heading: 1,
        rectangleCard: 2,
        squareCard: 3,
        stripCard: 4,
      })
  }
}
function Z(e) {
  let r, a, i, l, o, f, h
  const x = new y({ props: { title: 'Store' } }),
    C = new J({
      props: {
        tag: 'Special Offers',
        heading: 'Midnight Madness',
        rectangleCard: 'true',
      },
    }),
    V = new J({
      props: { heading: 'Featured & Recommended', squareCard: 'true' },
    }),
    j = new J({ props: { heading: 'Tags', stripCard: 'true' } }),
    z = new D({ props: { location: 1 } })
  return {
    c() {
      ;(r = s()),
        v(x.$$.fragment),
        (a = s()),
        (i = t('div')),
        v(C.$$.fragment),
        (l = s()),
        v(V.$$.fragment),
        (o = s()),
        v(j.$$.fragment),
        (f = s()),
        v(z.$$.fragment),
        this.h()
    },
    l(e) {
      E('[data-svelte="svelte-160duyq"]', document.head).forEach(g),
        (r = m(e)),
        w(x.$$.fragment, e),
        (a = m(e)),
        (i = n(e, 'DIV', { id: !0, class: !0 }))
      var t = c(i)
      w(C.$$.fragment, t),
        (l = m(t)),
        w(V.$$.fragment, t),
        (o = m(t)),
        w(j.$$.fragment, t),
        t.forEach(g),
        (f = m(e)),
        w(z.$$.fragment, e),
        this.h()
    },
    h() {
      ;(document.title = 'Store :: Steam Mobile'),
        d(i, 'id', 'store'),
        d(i, 'class', 'svelte-1s5ozd4')
    },
    m(e, t) {
      $(e, r, t),
        P(x, e, t),
        $(e, a, t),
        $(e, i, t),
        P(C, i, null),
        u(i, l),
        P(V, i, null),
        u(i, o),
        P(j, i, null),
        $(e, f, t),
        P(z, e, t),
        (h = !0)
    },
    p: p,
    i(e) {
      h ||
        (I(x.$$.fragment, e),
        I(C.$$.fragment, e),
        I(V.$$.fragment, e),
        I(j.$$.fragment, e),
        I(z.$$.fragment, e),
        (h = !0))
    },
    o(e) {
      q(x.$$.fragment, e),
        q(C.$$.fragment, e),
        q(V.$$.fragment, e),
        q(j.$$.fragment, e),
        q(z.$$.fragment, e),
        (h = !1)
    },
    d(e) {
      e && g(r),
        b(x, e),
        e && g(a),
        e && g(i),
        b(C),
        b(V),
        b(j),
        e && g(f),
        b(z, e)
    },
  }
}
export default class extends e {
  constructor(e) {
    super(), r(this, e, null, Z, a, {})
  }
}
