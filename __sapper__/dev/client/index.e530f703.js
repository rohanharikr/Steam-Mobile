import {
  S as SvelteComponentDev,
  i as init,
  s as safe_not_equal,
  d as dispatch_dev,
  v as validate_slots,
  e as element,
  a as space,
  t as text,
  c as claim_element,
  b as children,
  f as detach_dev,
  g as claim_space,
  h as claim_text,
  j as attr_dev,
  k as set_style,
  l as add_location,
  m as insert_dev,
  n as append_dev,
  o as set_data_dev,
  p as noop,
  q as create_component,
  r as query_selector_all,
  u as claim_component,
  w as mount_component,
  x as transition_in,
  y as transition_out,
  z as destroy_component,
} from './client.6ab7ec82.js'
import { N as Navbar, T as Tabbar } from './Tabbar.3fb0ea02.js'
import { u as username } from './stores.21c81019.js'

/* src/components/SteamGuard.svelte generated by Svelte v3.22.2 */
const file = 'src/components/SteamGuard.svelte'

function create_fragment(ctx) {
  let div4
  let div0
  let t0
  let div1
  let t1
  let div2
  let t2_value = /*code*/ (ctx[1] || /*codegen*/ ctx[3]()) + ''
  let t2
  let t3
  let div3
  let t4

  const block = {
    c: function create() {
      div4 = element('div')
      div0 = element('div')
      t0 = space()
      div1 = element('div')
      t1 = space()
      div2 = element('div')
      t2 = text(t2_value)
      t3 = space()
      div3 = element('div')
      t4 = text(/*username_value*/ ctx[2])
      this.h()
    },
    l: function claim(nodes) {
      div4 = claim_element(nodes, 'DIV', { id: true, class: true })
      var div4_nodes = children(div4)
      div0 = claim_element(div4_nodes, 'DIV', { class: true, style: true })
      children(div0).forEach(detach_dev)
      t0 = claim_space(div4_nodes)
      div1 = claim_element(div4_nodes, 'DIV', { class: true })
      children(div1).forEach(detach_dev)
      t1 = claim_space(div4_nodes)
      div2 = claim_element(div4_nodes, 'DIV', {
        id: true,
        style: true,
        class: true,
      })
      var div2_nodes = children(div2)
      t2 = claim_text(div2_nodes, t2_value)
      div2_nodes.forEach(detach_dev)
      t3 = claim_space(div4_nodes)
      div3 = claim_element(div4_nodes, 'DIV', { id: true, class: true })
      var div3_nodes = children(div3)
      t4 = claim_text(div3_nodes, /*username_value*/ ctx[2])
      div3_nodes.forEach(detach_dev)
      div4_nodes.forEach(detach_dev)
      this.h()
    },
    h: function hydrate() {
      attr_dev(div0, 'class', 'timerbar svelte-ss3kfl')
      set_style(div0, 'width', 100 - /*percentage*/ ctx[0] * 10 + '%')

      set_style(
        div0,
        'background-image',
        /*percentage*/ ctx[0] >= 7
          ? 'linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)'
          : 'linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)'
      )

      set_style(div0, 'z-index', '9999')
      add_location(div0, file, 36, 2, 674)
      attr_dev(div1, 'class', 'timerbar trail svelte-ss3kfl')
      add_location(div1, file, 39, 2, 948)
      attr_dev(div2, 'id', 'code')
      set_style(div2, 'color', /*percentage*/ ctx[0] >= 7 ? '#AD2821' : 'white')
      attr_dev(div2, 'class', 'svelte-ss3kfl')
      add_location(div2, file, 40, 2, 985)
      attr_dev(div3, 'id', 'username')
      attr_dev(div3, 'class', 'svelte-ss3kfl')
      add_location(div3, file, 43, 2, 1091)
      attr_dev(div4, 'id', 'wrapper')
      attr_dev(div4, 'class', 'svelte-ss3kfl')
      add_location(div4, file, 35, 0, 653)
    },
    m: function mount(target, anchor) {
      insert_dev(target, div4, anchor)
      append_dev(div4, div0)
      append_dev(div4, t0)
      append_dev(div4, div1)
      append_dev(div4, t1)
      append_dev(div4, div2)
      append_dev(div2, t2)
      append_dev(div4, t3)
      append_dev(div4, div3)
      append_dev(div3, t4)
    },
    p: function update(ctx, [dirty]) {
      if (dirty & /*percentage*/ 1) {
        set_style(div0, 'width', 100 - /*percentage*/ ctx[0] * 10 + '%')
      }

      if (dirty & /*percentage*/ 1) {
        set_style(
          div0,
          'background-image',
          /*percentage*/ ctx[0] >= 7
            ? 'linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)'
            : 'linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)'
        )
      }

      if (
        dirty & /*code*/ 2 &&
        t2_value !== (t2_value = /*code*/ (ctx[1] || /*codegen*/ ctx[3]()) + '')
      )
        set_data_dev(t2, t2_value)

      if (dirty & /*percentage*/ 1) {
        set_style(
          div2,
          'color',
          /*percentage*/ ctx[0] >= 7 ? '#AD2821' : 'white'
        )
      }

      if (dirty & /*username_value*/ 4)
        set_data_dev(t4, /*username_value*/ ctx[2])
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div4)
    },
  }

  dispatch_dev('SvelteRegisterBlock', {
    block,
    id: create_fragment.name,
    type: 'component',
    source: '',
    ctx,
  })

  return block
}

function onInterval(callback, time) {
  const interval = setInterval(callback, time)
} // onDestroy(() => {
// clearInterval(interval);

function instance($$self, $$props, $$invalidate) {
  let percentage = 0
  let code

  // });
  function codegen() {
    $$invalidate(1, (code = Math.random().toString(36).slice(-5).toUpperCase()))
  }

  onInterval(function check() {
    if (percentage < 9) {
      $$invalidate(0, ++percentage)
    } else {
      $$invalidate(0, (percentage = 0))
      codegen()
    }
  }, 1000)

  let username_value

  const unsubscribe = username.subscribe((value) => {
    $$invalidate(2, (username_value = value))
  })

  const writable_props = []

  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$')
      console.warn(`<SteamGuard> was created with unknown prop '${key}'`)
  })

  let { $$slots = {}, $$scope } = $$props
  validate_slots('SteamGuard', $$slots, [])

  $$self.$capture_state = () => ({
    username,
    percentage,
    code,
    onInterval,
    codegen,
    username_value,
    unsubscribe,
  })

  $$self.$inject_state = ($$props) => {
    if ('percentage' in $$props)
      $$invalidate(0, (percentage = $$props.percentage))
    if ('code' in $$props) $$invalidate(1, (code = $$props.code))
    if ('username_value' in $$props)
      $$invalidate(2, (username_value = $$props.username_value))
  }

  if ($$props && '$$inject' in $$props) {
    $$self.$inject_state($$props.$$inject)
  }

  return [percentage, code, username_value, codegen]
}

class SteamGuard extends SvelteComponentDev {
  constructor(options) {
    super(options)
    init(this, options, instance, create_fragment, safe_not_equal, {})

    dispatch_dev('SvelteRegisterComponent', {
      component: this,
      tagName: 'SteamGuard',
      options,
      id: create_fragment.name,
    })
  }
}

/* src/components/SteamMusic.svelte generated by Svelte v3.22.2 */

const file$1 = 'src/components/SteamMusic.svelte'

function create_fragment$1(ctx) {
  let div

  const block = {
    c: function create() {
      div = element('div')
      this.h()
    },
    l: function claim(nodes) {
      div = claim_element(nodes, 'DIV', { id: true, class: true })
      var div_nodes = children(div)
      div_nodes.forEach(detach_dev)
      this.h()
    },
    h: function hydrate() {
      attr_dev(div, 'id', 'player')
      attr_dev(div, 'class', 'svelte-1kyd4en')
      add_location(div, file$1, 0, 0, 0)
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor)
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div)
    },
  }

  dispatch_dev('SvelteRegisterBlock', {
    block,
    id: create_fragment$1.name,
    type: 'component',
    source: '',
    ctx,
  })

  return block
}

function instance$1($$self, $$props) {
  const writable_props = []

  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$')
      console.warn(`<SteamMusic> was created with unknown prop '${key}'`)
  })

  let { $$slots = {}, $$scope } = $$props
  validate_slots('SteamMusic', $$slots, [])
  return []
}

class SteamMusic extends SvelteComponentDev {
  constructor(options) {
    super(options)
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {})

    dispatch_dev('SvelteRegisterComponent', {
      component: this,
      tagName: 'SteamMusic',
      options,
      id: create_fragment$1.name,
    })
  }
}

/* src/routes/index.svelte generated by Svelte v3.22.2 */
const file$2 = 'src/routes/index.svelte'

function create_fragment$2(ctx) {
  let t0
  let t1
  let div
  let t2
  let t3
  let current

  const navbar = new Navbar({
    props: { title: 'Steam Guard' },
    $$inline: true,
  })

  const steamguard = new SteamGuard({ $$inline: true })
  const steammusic = new SteamMusic({ $$inline: true })
  const tabbar = new Tabbar({ props: { location: 3 }, $$inline: true })

  const block = {
    c: function create() {
      t0 = space()
      create_component(navbar.$$.fragment)
      t1 = space()
      div = element('div')
      create_component(steamguard.$$.fragment)
      t2 = space()
      create_component(steammusic.$$.fragment)
      t3 = space()
      create_component(tabbar.$$.fragment)
      this.h()
    },
    l: function claim(nodes) {
      const head_nodes = query_selector_all(
        '[data-svelte="svelte-xql9z2"]',
        document.head
      )
      head_nodes.forEach(detach_dev)
      t0 = claim_space(nodes)
      claim_component(navbar.$$.fragment, nodes)
      t1 = claim_space(nodes)
      div = claim_element(nodes, 'DIV', { id: true, class: true })
      var div_nodes = children(div)
      claim_component(steamguard.$$.fragment, div_nodes)
      t2 = claim_space(div_nodes)
      claim_component(steammusic.$$.fragment, div_nodes)
      div_nodes.forEach(detach_dev)
      t3 = claim_space(nodes)
      claim_component(tabbar.$$.fragment, nodes)
      this.h()
    },
    h: function hydrate() {
      document.title = 'Guard :: Steam Mobile'
      attr_dev(div, 'id', 'guard')
      attr_dev(div, 'class', 'svelte-lmiees')
      add_location(div, file$2, 12, 0, 340)
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor)
      mount_component(navbar, target, anchor)
      insert_dev(target, t1, anchor)
      insert_dev(target, div, anchor)
      mount_component(steamguard, div, null)
      append_dev(div, t2)
      mount_component(steammusic, div, null)
      insert_dev(target, t3, anchor)
      mount_component(tabbar, target, anchor)
      current = true
    },
    p: noop,
    i: function intro(local) {
      if (current) return
      transition_in(navbar.$$.fragment, local)
      transition_in(steamguard.$$.fragment, local)
      transition_in(steammusic.$$.fragment, local)
      transition_in(tabbar.$$.fragment, local)
      current = true
    },
    o: function outro(local) {
      transition_out(navbar.$$.fragment, local)
      transition_out(steamguard.$$.fragment, local)
      transition_out(steammusic.$$.fragment, local)
      transition_out(tabbar.$$.fragment, local)
      current = false
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0)
      destroy_component(navbar, detaching)
      if (detaching) detach_dev(t1)
      if (detaching) detach_dev(div)
      destroy_component(steamguard)
      destroy_component(steammusic)
      if (detaching) detach_dev(t3)
      destroy_component(tabbar, detaching)
    },
  }

  dispatch_dev('SvelteRegisterBlock', {
    block,
    id: create_fragment$2.name,
    type: 'component',
    source: '',
    ctx,
  })

  return block
}

function instance$2($$self, $$props, $$invalidate) {
  const writable_props = []

  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$')
      console.warn(`<Routes> was created with unknown prop '${key}'`)
  })

  let { $$slots = {}, $$scope } = $$props
  validate_slots('Routes', $$slots, [])
  $$self.$capture_state = () => ({ Navbar, Tabbar, SteamGuard, SteamMusic })
  return []
}

class Routes extends SvelteComponentDev {
  constructor(options) {
    super(options)
    init(this, options, instance$2, create_fragment$2, safe_not_equal, {})

    dispatch_dev('SvelteRegisterComponent', {
      component: this,
      tagName: 'Routes',
      options,
      id: create_fragment$2.name,
    })
  }
}

export default Routes
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTUzMGY3MDMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0ZWFtR3VhcmQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgLy8gaW1wb3J0IHsgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJ1xuICBpbXBvcnQgeyB1c2VybmFtZSB9IGZyb20gJy4uL3JvdXRlcy9zdG9yZXMuanMnXG5cbiAgbGV0IHBlcmNlbnRhZ2UgPSAwXG4gIGxldCBjb2RlO1xuXG4gIGZ1bmN0aW9uIG9uSW50ZXJ2YWwoY2FsbGJhY2ssIHRpbWUpIHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGNhbGxiYWNrLCB0aW1lKVxuXG4gICAgLy8gb25EZXN0cm95KCgpID0+IHtcbiAgICAvLyBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvZGVnZW4oKSB7XG4gICAgY29kZSA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKC01KS50b1VwcGVyQ2FzZSgpO1xuICB9O1xuXG4gIG9uSW50ZXJ2YWwoZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPCA5KSB7XG4gICAgICArK3BlcmNlbnRhZ2VcbiAgICB9IGVsc2Uge1xuICAgICAgcGVyY2VudGFnZSA9IDBcbiAgICAgIGNvZGVnZW4oKTtcbiAgICB9XG4gIH0sIDEwMDApXG5cbiAgbGV0IHVzZXJuYW1lX3ZhbHVlXG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSB1c2VybmFtZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgdXNlcm5hbWVfdmFsdWUgPSB2YWx1ZVxuICB9KVxuPC9zY3JpcHQ+XG5cbjxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG4gIDxkaXZcbiAgICBjbGFzcz1cInRpbWVyYmFyXCJcbiAgICBzdHlsZT1cIndpZHRoOiB7MTAwIC0gcGVyY2VudGFnZSAqIDEwfSU7IGJhY2tncm91bmQtaW1hZ2U6IHtwZXJjZW50YWdlID49IDcgPyAnbGluZWFyLWdyYWRpZW50KDE0NWRlZywgcmdiYSgxNzMsNDAsMzMsMSkgMCUsIHJnYmEoMTczLDQwLDMzLDEpIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2JhKDAsMCwyNTUsMSkgMCUsIHJnYmEoMTYzLDY4LDIwMSwxKSAxMDAlKSd9OyB6LWluZGV4OiA5OTk5XCIgLz5cbiAgPGRpdiBjbGFzcz1cInRpbWVyYmFyIHRyYWlsXCI+PC9kaXY+XG4gIDxkaXYgaWQ9XCJjb2RlXCIgc3R5bGU9XCJjb2xvcjoge3BlcmNlbnRhZ2UgPj0gNyA/ICcjQUQyODIxJyA6ICd3aGl0ZSd9XCI+XG4gICAge2NvZGUgfHwgY29kZWdlbigpfVxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cInVzZXJuYW1lXCI+e3VzZXJuYW1lX3ZhbHVlfTwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgI3dyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQ1cHg7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gIH1cblxuICAjY29kZSB7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gICN1c2VybmFtZSB7XG4gICAgY29sb3I6ICNhN2Q2ZjA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4gIC50aW1lcmJhciB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogOHB4O1xuICAgIHRvcDogOTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIC50cmFpbHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxYzFjO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtOTk5OyAgXG4gIH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyLnN2ZWx0ZSdcbiAgaW1wb3J0IFRhYmJhciBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJhci5zdmVsdGUnXG4gIGltcG9ydCBTdGVhbUd1YXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU3RlYW1HdWFyZC5zdmVsdGUnXG4gIGltcG9ydCBTdGVhbU11c2ljIGZyb20gJy4uL2NvbXBvbmVudHMvU3RlYW1NdXNpYy5zdmVsdGUnXG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+R3VhcmQgOjogU3RlYW0gTW9iaWxlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxOYXZiYXIgdGl0bGU9XCJTdGVhbSBHdWFyZFwiIC8+XG48ZGl2IGlkPVwiZ3VhcmRcIj5cbiAgPFN0ZWFtR3VhcmQgLz5cbiAgPFN0ZWFtTXVzaWMgLz5cbjwvZGl2PlxuPFRhYmJhciBsb2NhdGlvbj17M30gLz5cblxuPHN0eWxlPlxuICAjZ3VhcmQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OzBCQXlDSyxHQUFJLG1CQUFJLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUVFLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBQWQsR0FBYzs7Ozs7Ozs0QkFMakIsR0FBRyxrQkFBRyxHQUFVLE1BQUcsRUFBRTs7c0RBQXVCLEdBQVUsT0FBSSxDQUFDO0tBQUcsdUVBQXVFO0tBQUcsc0VBQXNFOzs7Ozs7OzJDQUVqTSxHQUFVLE9BQUksQ0FBQyxHQUFHLFNBQVMsR0FBRyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRmxELEdBQUcsa0JBQUcsR0FBVSxNQUFHLEVBQUU7Ozs7dURBQXVCLEdBQVUsT0FBSSxDQUFDO01BQUcsdUVBQXVFO01BQUcsc0VBQXNFOzs7Z0VBRzVOLEdBQUksbUJBQUksR0FBTzs7OzRDQURZLEdBQVUsT0FBSSxDQUFDLEdBQUcsU0FBUyxHQUFHLE9BQU87Ozt5RUFHL0MsR0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FwQ3pCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsSUFBSTtPQUMxQixRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJOzs7OztLQUp6QyxVQUFVLEdBQUcsQ0FBQztLQUNkLElBQUk7OztVQVVDLE9BQU87a0JBQ2QsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFdBQVc7Ozs7O0NBR3pELFVBQVU7V0FBVSxLQUFLO09BQ25CLFVBQVUsR0FBRyxDQUFDO3NCQUNkLFVBQVU7O29CQUVaLFVBQVUsR0FBRyxDQUFDO0lBQ2QsT0FBTzs7O0VBRVIsSUFBSTs7O0tBRUgsY0FBYzs7T0FFWixXQUFXLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBRSxLQUFLO2tCQUMzQyxjQUFjLEdBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQ2ZSLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
