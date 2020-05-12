import {
  S as s,
  i as a,
  s as e,
  e as r,
  a as t,
  t as l,
  c,
  b as i,
  d as n,
  f as o,
  g as f,
  h as v,
  j as d,
  k as p,
  l as m,
  m as u,
  n as h,
  o as $,
  q as g,
  p as b,
  r as E,
  u as I,
  v as x,
  w as y,
} from './client.17c49226.js'
import { N as w, T as D } from './Tabbar.2448f4e0.js'
import { u as V } from './stores.e90cc3d3.js'
function k(s) {
  let a, e, $, g, b, E, I, x, y, w, D, V, k, A, j, M, N, H, P, S, T
  return {
    c() {
      ;(a = r('main')),
        (e = r('div')),
        ($ = r('div')),
        (g = t()),
        (b = r('div')),
        (E = r('div')),
        (I = r('div')),
        (x = t()),
        (y = r('div')),
        (w = r('h3')),
        (D = l(s[0])),
        (V = t()),
        (k = r('h5')),
        (A = l(s[1])),
        (j = t()),
        (M = r('div')),
        (N = l(s[3])),
        (H = t()),
        (P = r('div')),
        (S = t()),
        (T = r('div')),
        this.h()
    },
    l(r) {
      a = c(r, 'MAIN', {})
      var t = i(a)
      e = c(t, 'DIV', { id: !0, class: !0 })
      var l = i(e)
      ;($ = c(l, 'DIV', { id: !0, class: !0 })),
        i($).forEach(n),
        (g = o(l)),
        (b = c(l, 'DIV', { id: !0, class: !0 }))
      var v = i(b)
      E = c(v, 'DIV', { id: !0, class: !0 })
      var d = i(E)
      ;(I = c(d, 'DIV', { id: !0, style: !0, class: !0 })),
        i(I).forEach(n),
        (x = o(d)),
        (y = c(d, 'DIV', { id: !0, class: !0 }))
      var p = i(y)
      w = c(p, 'H3', { class: !0 })
      var m = i(w)
      ;(D = f(m, s[0])),
        m.forEach(n),
        (V = o(p)),
        (k = c(p, 'H5', { class: !0 }))
      var u = i(k)
      ;(A = f(u, s[1])),
        u.forEach(n),
        p.forEach(n),
        (j = o(d)),
        (M = c(d, 'DIV', { id: !0, class: !0 }))
      var h = i(M)
      ;(N = f(h, s[3])),
        h.forEach(n),
        d.forEach(n),
        v.forEach(n),
        (H = o(l)),
        (P = c(l, 'DIV', { id: !0, style: !0, class: !0 })),
        i(P).forEach(n),
        (S = o(l)),
        (T = c(l, 'DIV', { id: !0, class: !0 })),
        i(T).forEach(n),
        l.forEach(n),
        t.forEach(n),
        this.h()
    },
    h() {
      v($, 'id', 'layer1'),
        v($, 'class', 'svelte-18ba1px'),
        v(I, 'id', 'profilepicture'),
        d(I, 'background-image', 'url(' + s[2] + ')'),
        v(I, 'class', 'svelte-18ba1px'),
        v(w, 'class', 'svelte-18ba1px'),
        v(k, 'class', 'svelte-18ba1px'),
        v(y, 'id', 'userinfo'),
        v(y, 'class', 'svelte-18ba1px'),
        v(M, 'id', 'level'),
        v(M, 'class', 'svelte-18ba1px'),
        v(E, 'id', 'content'),
        v(E, 'class', 'svelte-18ba1px'),
        v(b, 'id', 'contentwrapper'),
        v(b, 'class', 'svelte-18ba1px'),
        v(P, 'id', 'layer2'),
        d(P, 'background-image', 'url(gta.jpg)'),
        v(P, 'class', 'svelte-18ba1px'),
        v(T, 'id', 'layer3'),
        v(T, 'class', 'svelte-18ba1px'),
        v(e, 'id', 'head'),
        v(e, 'class', 'svelte-18ba1px')
    },
    m(s, r) {
      p(s, a, r),
        m(a, e),
        m(e, $),
        m(e, g),
        m(e, b),
        m(b, E),
        m(E, I),
        m(E, x),
        m(E, y),
        m(y, w),
        m(w, D),
        m(y, V),
        m(y, k),
        m(k, A),
        m(E, j),
        m(E, M),
        m(M, N),
        m(e, H),
        m(e, P),
        m(e, S),
        m(e, T)
    },
    p(s, [a]) {
      4 & a && d(I, 'background-image', 'url(' + s[2] + ')'),
        1 & a && u(D, s[0]),
        2 & a && u(A, s[1]),
        8 & a && u(N, s[3])
    },
    i: h,
    o: h,
    d(s) {
      s && n(a)
    },
  }
}
function A(s, a, e) {
  let { alias: r } = a,
    { name: t } = a,
    { profilepicture: l } = a,
    { level: c } = a
  return (
    (s.$set = (s) => {
      'alias' in s && e(0, (r = s.alias)),
        'name' in s && e(1, (t = s.name)),
        'profilepicture' in s && e(2, (l = s.profilepicture)),
        'level' in s && e(3, (c = s.level))
    }),
    [r, t, l, c]
  )
}
class j extends s {
  constructor(s) {
    super(),
      a(this, s, A, k, e, { alias: 0, name: 1, profilepicture: 2, level: 3 })
  }
}
function M(s) {
  let a, e, d, u, $, g, b, E, I, x, y, w
  return {
    c() {
      ;(a = r('main')),
        (e = r('div')),
        (d = l('About')),
        (u = t()),
        ($ = r('div')),
        (g = l('Activity')),
        (b = t()),
        (E = r('div')),
        (I = l('Inventory')),
        (x = t()),
        (y = r('div')),
        (w = l('Artwork')),
        this.h()
    },
    l(s) {
      a = c(s, 'MAIN', { class: !0 })
      var r = i(a)
      e = c(r, 'DIV', { class: !0 })
      var t = i(e)
      ;(d = f(t, 'About')),
        t.forEach(n),
        (u = o(r)),
        ($ = c(r, 'DIV', { class: !0 }))
      var l = i($)
      ;(g = f(l, 'Activity')),
        l.forEach(n),
        (b = o(r)),
        (E = c(r, 'DIV', { class: !0 }))
      var v = i(E)
      ;(I = f(v, 'Inventory')),
        v.forEach(n),
        (x = o(r)),
        (y = c(r, 'DIV', { class: !0 }))
      var p = i(y)
      ;(w = f(p, 'Artwork')), p.forEach(n), r.forEach(n), this.h()
    },
    h() {
      v(e, 'class', 'selected svelte-1snwkpy'),
        v($, 'class', 'svelte-1snwkpy'),
        v(E, 'class', 'svelte-1snwkpy'),
        v(y, 'class', 'svelte-1snwkpy'),
        v(a, 'class', 'svelte-1snwkpy')
    },
    m(s, r) {
      p(s, a, r),
        m(a, e),
        m(e, d),
        m(a, u),
        m(a, $),
        m($, g),
        m(a, b),
        m(a, E),
        m(E, I),
        m(a, x),
        m(a, y),
        m(y, w)
    },
    p: h,
    i: h,
    o: h,
    d(s) {
      s && n(a)
    },
  }
}
class N extends s {
  constructor(s) {
    super(), a(this, s, null, M, e, {})
  }
}
function H(s) {
  let a
  return {
    c() {
      a = r('main')
    },
    l(s) {
      ;(a = c(s, 'MAIN', {})), i(a).forEach(n)
    },
    m(s, e) {
      p(s, a, e)
    },
    p: h,
    i: h,
    o: h,
    d(s) {
      s && n(a)
    },
  }
}
class P extends s {
  constructor(s) {
    super(), a(this, s, null, H, e, {})
  }
}
function S(s) {
  let a, e, l, f, d, u, h
  const V = new w({ props: { title: 'Profile' } }),
    k = new j({
      props: {
        name: s[0],
        alias: 'bingotheslayer',
        profilepicture: 'profilepicture.jpg',
        level: '40',
      },
    }),
    A = new N({}),
    M = new P({}),
    H = new D({ props: { location: 2 } })
  return {
    c() {
      ;(a = t()),
        $(V.$$.fragment),
        (e = t()),
        (l = r('div')),
        $(k.$$.fragment),
        (f = t()),
        $(A.$$.fragment),
        (d = t()),
        $(M.$$.fragment),
        (u = t()),
        $(H.$$.fragment),
        this.h()
    },
    l(s) {
      g('[data-svelte="svelte-fcey8i"]', document.head).forEach(n),
        (a = o(s)),
        b(V.$$.fragment, s),
        (e = o(s)),
        (l = c(s, 'DIV', { id: !0, class: !0 }))
      var r = i(l)
      b(k.$$.fragment, r),
        (f = o(r)),
        b(A.$$.fragment, r),
        (d = o(r)),
        b(M.$$.fragment, r),
        r.forEach(n),
        (u = o(s)),
        b(H.$$.fragment, s),
        this.h()
    },
    h() {
      ;(document.title = 'Profile :: Steam Mobile'),
        v(l, 'id', 'profile'),
        v(l, 'class', 'svelte-meywdx')
    },
    m(s, r) {
      p(s, a, r),
        E(V, s, r),
        p(s, e, r),
        p(s, l, r),
        E(k, l, null),
        m(l, f),
        E(A, l, null),
        m(l, d),
        E(M, l, null),
        p(s, u, r),
        E(H, s, r),
        (h = !0)
    },
    p(s, [a]) {
      const e = {}
      1 & a && (e.name = s[0]), k.$set(e)
    },
    i(s) {
      h ||
        (I(V.$$.fragment, s),
        I(k.$$.fragment, s),
        I(A.$$.fragment, s),
        I(M.$$.fragment, s),
        I(H.$$.fragment, s),
        (h = !0))
    },
    o(s) {
      x(V.$$.fragment, s),
        x(k.$$.fragment, s),
        x(A.$$.fragment, s),
        x(M.$$.fragment, s),
        x(H.$$.fragment, s),
        (h = !1)
    },
    d(s) {
      s && n(a),
        y(V, s),
        s && n(e),
        s && n(l),
        y(k),
        y(A),
        y(M),
        s && n(u),
        y(H, s)
    },
  }
}
function T(s, a, e) {
  let r
  V.subscribe((s) => {
    e(0, (r = s))
  })
  return [r]
}
export default class extends s {
  constructor(s) {
    super(), a(this, s, T, S, e, {})
  }
}
