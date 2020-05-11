import {
  S as SvelteComponentDev,
  i as init,
  d as dispatch_dev,
  s as safe_not_equal,
  v as validate_slots,
  a as space,
  q as create_component,
  e as element,
  t as text,
  r as query_selector_all,
  f as detach_dev,
  g as claim_space,
  u as claim_component,
  c as claim_element,
  b as children,
  h as claim_text,
  j as attr_dev,
  l as add_location,
  m as insert_dev,
  w as mount_component,
  n as append_dev,
  o as set_data_dev,
  x as transition_in,
  y as transition_out,
  z as destroy_component,
} from './client.100fee72.js'
import { N as Navbar, T as Tabbar } from './Tabbar.9b64089a.js'
import { u as username } from './stores.c470237b.js'

/* src/routes/profile.svelte generated by Svelte v3.22.2 */
const file = 'src/routes/profile.svelte'

function create_fragment(ctx) {
  let t0
  let t1
  let div5
  let div1
  let img
  let img_src_value
  let t2
  let div0
  let h2
  let t3
  let t4
  let h3
  let t5
  let t6
  let div2
  let t7
  let div3
  let t8
  let div4
  let t9
  let current

  const navbar = new Navbar({
    props: { title: 'Profile' },
    $$inline: true,
  })

  const tabbar = new Tabbar({ props: { location: 2 }, $$inline: true })

  const block = {
    c: function create() {
      t0 = space()
      create_component(navbar.$$.fragment)
      t1 = space()
      div5 = element('div')
      div1 = element('div')
      img = element('img')
      t2 = space()
      div0 = element('div')
      h2 = element('h2')
      t3 = text(/*username_value*/ ctx[0])
      t4 = space()
      h3 = element('h3')
      t5 = text('Rohan Harikumar')
      t6 = space()
      div2 = element('div')
      t7 = space()
      div3 = element('div')
      t8 = space()
      div4 = element('div')
      t9 = space()
      create_component(tabbar.$$.fragment)
      this.h()
    },
    l: function claim(nodes) {
      const head_nodes = query_selector_all(
        '[data-svelte="svelte-fcey8i"]',
        document.head
      )
      head_nodes.forEach(detach_dev)
      t0 = claim_space(nodes)
      claim_component(navbar.$$.fragment, nodes)
      t1 = claim_space(nodes)
      div5 = claim_element(nodes, 'DIV', { id: true, class: true })
      var div5_nodes = children(div5)
      div1 = claim_element(div5_nodes, 'DIV', { id: true, class: true })
      var div1_nodes = children(div1)
      img = claim_element(div1_nodes, 'IMG', {
        id: true,
        src: true,
        class: true,
      })
      t2 = claim_space(div1_nodes)
      div0 = claim_element(div1_nodes, 'DIV', { id: true, class: true })
      var div0_nodes = children(div0)
      h2 = claim_element(div0_nodes, 'H2', { class: true })
      var h2_nodes = children(h2)
      t3 = claim_text(h2_nodes, /*username_value*/ ctx[0])
      h2_nodes.forEach(detach_dev)
      t4 = claim_space(div0_nodes)
      h3 = claim_element(div0_nodes, 'H3', { class: true })
      var h3_nodes = children(h3)
      t5 = claim_text(h3_nodes, 'Rohan Harikumar')
      h3_nodes.forEach(detach_dev)
      div0_nodes.forEach(detach_dev)
      div1_nodes.forEach(detach_dev)
      t6 = claim_space(div5_nodes)
      div2 = claim_element(div5_nodes, 'DIV', { id: true })
      children(div2).forEach(detach_dev)
      t7 = claim_space(div5_nodes)
      div3 = claim_element(div5_nodes, 'DIV', { id: true })
      children(div3).forEach(detach_dev)
      t8 = claim_space(div5_nodes)
      div4 = claim_element(div5_nodes, 'DIV', { id: true })
      children(div4).forEach(detach_dev)
      div5_nodes.forEach(detach_dev)
      t9 = claim_space(nodes)
      claim_component(tabbar.$$.fragment, nodes)
      this.h()
    },
    h: function hydrate() {
      document.title = 'Profile :: Steam Mobile'
      attr_dev(img, 'id', 'profilepicture')
      if (img.src !== (img_src_value = 'profilepicture.jpg'))
        attr_dev(img, 'src', img_src_value)
      attr_dev(img, 'class', 'svelte-1vuvqp')
      add_location(img, file, 19, 4, 410)
      attr_dev(h2, 'class', 'svelte-1vuvqp')
      add_location(h2, file, 21, 6, 493)
      attr_dev(h3, 'class', 'svelte-1vuvqp')
      add_location(h3, file, 22, 6, 525)
      attr_dev(div0, 'id', 'maininfo')
      attr_dev(div0, 'class', 'svelte-1vuvqp')
      add_location(div0, file, 20, 4, 467)
      attr_dev(div1, 'id', 'top')
      attr_dev(div1, 'class', 'svelte-1vuvqp')
      add_location(div1, file, 18, 2, 391)
      attr_dev(div2, 'id', 'level')
      add_location(div2, file, 25, 2, 572)
      attr_dev(div3, 'id', 'level')
      add_location(div3, file, 26, 2, 593)
      attr_dev(div4, 'id', 'level')
      add_location(div4, file, 27, 2, 614)
      attr_dev(div5, 'id', 'profile')
      attr_dev(div5, 'class', 'svelte-1vuvqp')
      add_location(div5, file, 17, 0, 370)
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor)
      mount_component(navbar, target, anchor)
      insert_dev(target, t1, anchor)
      insert_dev(target, div5, anchor)
      append_dev(div5, div1)
      append_dev(div1, img)
      append_dev(div1, t2)
      append_dev(div1, div0)
      append_dev(div0, h2)
      append_dev(h2, t3)
      append_dev(div0, t4)
      append_dev(div0, h3)
      append_dev(h3, t5)
      append_dev(div5, t6)
      append_dev(div5, div2)
      append_dev(div5, t7)
      append_dev(div5, div3)
      append_dev(div5, t8)
      append_dev(div5, div4)
      insert_dev(target, t9, anchor)
      mount_component(tabbar, target, anchor)
      current = true
    },
    p: function update(ctx, [dirty]) {
      if (!current || dirty & /*username_value*/ 1)
        set_data_dev(t3, /*username_value*/ ctx[0])
    },
    i: function intro(local) {
      if (current) return
      transition_in(navbar.$$.fragment, local)
      transition_in(tabbar.$$.fragment, local)
      current = true
    },
    o: function outro(local) {
      transition_out(navbar.$$.fragment, local)
      transition_out(tabbar.$$.fragment, local)
      current = false
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0)
      destroy_component(navbar, detaching)
      if (detaching) detach_dev(t1)
      if (detaching) detach_dev(div5)
      if (detaching) detach_dev(t9)
      destroy_component(tabbar, detaching)
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

function instance($$self, $$props, $$invalidate) {
  let username_value

  const unsubscribe = username.subscribe((value) => {
    $$invalidate(0, (username_value = value))
  })

  const writable_props = []

  Object.keys($$props).forEach((key) => {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$')
      console.warn(`<Profile> was created with unknown prop '${key}'`)
  })

  let { $$slots = {}, $$scope } = $$props
  validate_slots('Profile', $$slots, [])

  $$self.$capture_state = () => ({
    Navbar,
    Tabbar,
    username,
    username_value,
    unsubscribe,
  })

  $$self.$inject_state = ($$props) => {
    if ('username_value' in $$props)
      $$invalidate(0, (username_value = $$props.username_value))
  }

  if ($$props && '$$inject' in $$props) {
    $$self.$inject_state($$props.$$inject)
  }

  return [username_value]
}

class Profile extends SvelteComponentDev {
  constructor(options) {
    super(options)
    init(this, options, instance, create_fragment, safe_not_equal, {})

    dispatch_dev('SvelteRegisterComponent', {
      component: this,
      tagName: 'Profile',
      options,
      id: create_fragment.name,
    })
  }
}

export default Profile
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS44OWE4NWY2OS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9wcm9maWxlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICBpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyLnN2ZWx0ZSdcbiAgaW1wb3J0IFRhYmJhciBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJhci5zdmVsdGUnXG4gIGltcG9ydCB7IHVzZXJuYW1lIH0gZnJvbSAnLi9zdG9yZXMuanMnXG5cbiAgbGV0IHVzZXJuYW1lX3ZhbHVlXG5cbiAgY29uc3QgdW5zdWJzY3JpYmUgPSB1c2VybmFtZS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgdXNlcm5hbWVfdmFsdWUgPSB2YWx1ZVxuICB9KVxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPlByb2ZpbGUgOjogU3RlYW0gTW9iaWxlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxOYXZiYXIgdGl0bGU9XCJQcm9maWxlXCIgLz5cbjxkaXYgaWQ9XCJwcm9maWxlXCI+XG4gIDxkaXYgaWQ9XCJ0b3BcIj5cbiAgICA8aW1nIGlkPVwicHJvZmlsZXBpY3R1cmVcIiBzcmM9XCJwcm9maWxlcGljdHVyZS5qcGdcIiAvPlxuICAgIDxkaXYgaWQ9XCJtYWluaW5mb1wiPlxuICAgICAgPGgyPnt1c2VybmFtZV92YWx1ZX08L2gyPlxuICAgICAgPGgzPlJvaGFuIEhhcmlrdW1hcjwvaDM+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuICA8ZGl2IGlkPVwibGV2ZWxcIiAvPlxuICA8ZGl2IGlkPVwibGV2ZWxcIiAvPlxuICA8ZGl2IGlkPVwibGV2ZWxcIiAvPlxuPC9kaXY+XG48VGFiYmFyIGxvY2F0aW9uPXsyfSAvPlxuXG48c3R5bGU+XG4gICNwcm9maWxlIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbiAgfVxuXG4gICNwcm9maWxlcGljdHVyZSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRiOTBhYjtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG5cbiAgI3RvcCB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBwYWRkaW5nOiA1MHB4IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3N0ZWFtY2RuLWEuYWthbWFpaGQubmV0L3N0ZWFtY29tbXVuaXR5L3B1YmxpYy9pbWFnZXMvaXRlbXMvNzMwL2VmN2NiNDRkMzEyZGY1MDM4Y2JhMGY2OWEwOTAxZGE0Mjc5MDA2NDUuanBnKTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIGgzIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gIH1cblxuICBoMixcbiAgaDMge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG5cbiAgI21haW5pbmZvIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBNkJrQixDQUFDOzs7Ozs7Ozs7Ozs7O2dDQVJSLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnREFBZCxHQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxRkFBZCxHQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWhCbkIsY0FBYzs7T0FFWixXQUFXLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBRSxLQUFLO2tCQUMzQyxjQUFjLEdBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
