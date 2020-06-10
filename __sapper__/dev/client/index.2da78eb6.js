import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, t as text, c as claim_element, b as children, f as detach_dev, g as claim_space, h as claim_text, j as attr_dev, k as set_style, l as add_location, m as insert_dev, n as append_dev, o as set_data_dev, p as noop, q as create_component, r as query_selector_all, u as claim_component, w as mount_component, x as transition_in, y as transition_out, z as destroy_component } from './client.38071560.js';
import { N as Navbar, T as Tabbar } from './Tabbar.3bcb9ce3.js';
import { u as username } from './stores.74424b63.js';

/* src/components/SteamGuard.svelte generated by Svelte v3.22.2 */
const file = "src/components/SteamGuard.svelte";

function create_fragment(ctx) {
	let div4;
	let div0;
	let t0;
	let div1;
	let t1;
	let div2;
	let t2_value = (/*code*/ ctx[1] || /*codegen*/ ctx[3]()) + "";
	let t2;
	let t3;
	let div3;
	let t4;

	const block = {
		c: function create() {
			div4 = element("div");
			div0 = element("div");
			t0 = space();
			div1 = element("div");
			t1 = space();
			div2 = element("div");
			t2 = text(t2_value);
			t3 = space();
			div3 = element("div");
			t4 = text(/*username_value*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div4 = claim_element(nodes, "DIV", { id: true, class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true, style: true });
			children(div0).forEach(detach_dev);
			t0 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			children(div1).forEach(detach_dev);
			t1 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { id: true, style: true, class: true });
			var div2_nodes = children(div2);
			t2 = claim_text(div2_nodes, t2_value);
			div2_nodes.forEach(detach_dev);
			t3 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { id: true, class: true });
			var div3_nodes = children(div3);
			t4 = claim_text(div3_nodes, /*username_value*/ ctx[2]);
			div3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "timerbar svelte-e6vlhl");
			set_style(div0, "width", 100 - /*percentage*/ ctx[0] * 10 + "%");

			set_style(div0, "background-image", /*percentage*/ ctx[0] >= 7
			? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
			: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)");

			set_style(div0, "z-index", "9999");
			add_location(div0, file, 36, 2, 670);
			attr_dev(div1, "class", "timerbar trail svelte-e6vlhl");
			add_location(div1, file, 40, 2, 948);
			attr_dev(div2, "id", "code");
			set_style(div2, "color", /*percentage*/ ctx[0] >= 7 ? "#AD2821" : "white");
			attr_dev(div2, "class", "svelte-e6vlhl");
			add_location(div2, file, 41, 2, 981);
			attr_dev(div3, "id", "username");
			attr_dev(div3, "class", "svelte-e6vlhl");
			add_location(div3, file, 44, 2, 1087);
			attr_dev(div4, "id", "wrapper");
			attr_dev(div4, "class", "svelte-e6vlhl");
			add_location(div4, file, 35, 0, 649);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div4, anchor);
			append_dev(div4, div0);
			append_dev(div4, t0);
			append_dev(div4, div1);
			append_dev(div4, t1);
			append_dev(div4, div2);
			append_dev(div2, t2);
			append_dev(div4, t3);
			append_dev(div4, div3);
			append_dev(div3, t4);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*percentage*/ 1) {
				set_style(div0, "width", 100 - /*percentage*/ ctx[0] * 10 + "%");
			}

			if (dirty & /*percentage*/ 1) {
				set_style(div0, "background-image", /*percentage*/ ctx[0] >= 7
				? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
				: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)");
			}

			if (dirty & /*code*/ 2 && t2_value !== (t2_value = (/*code*/ ctx[1] || /*codegen*/ ctx[3]()) + "")) set_data_dev(t2, t2_value);

			if (dirty & /*percentage*/ 1) {
				set_style(div2, "color", /*percentage*/ ctx[0] >= 7 ? "#AD2821" : "white");
			}

			if (dirty & /*username_value*/ 4) set_data_dev(t4, /*username_value*/ ctx[2]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function onInterval(callback, time) {
	const interval = setInterval(callback, time);
} // onDestroy(() => {
// clearInterval(interval);

function instance($$self, $$props, $$invalidate) {
	let percentage = 0;
	let code;

	// });
	function codegen() {
		$$invalidate(1, code = Math.random().toString(36).slice(-5).toUpperCase());
	}

	onInterval(
		function check() {
			if (percentage < 9) {
				$$invalidate(0, ++percentage);
			} else {
				$$invalidate(0, percentage = 0);
				codegen();
			}
		},
		1000
	);

	let username_value;

	const unsubscribe = username.subscribe(value => {
		$$invalidate(2, username_value = value);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SteamGuard> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("SteamGuard", $$slots, []);

	$$self.$capture_state = () => ({
		username,
		percentage,
		code,
		onInterval,
		codegen,
		username_value,
		unsubscribe
	});

	$$self.$inject_state = $$props => {
		if ("percentage" in $$props) $$invalidate(0, percentage = $$props.percentage);
		if ("code" in $$props) $$invalidate(1, code = $$props.code);
		if ("username_value" in $$props) $$invalidate(2, username_value = $$props.username_value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [percentage, code, username_value, codegen];
}

class SteamGuard extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SteamGuard",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/SteamMusic.svelte generated by Svelte v3.22.2 */

function create_fragment$1(ctx) {
	const block = {
		c: noop,
		l: noop,
		m: noop,
		p: noop,
		i: noop,
		o: noop,
		d: noop
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SteamMusic> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("SteamMusic", $$slots, []);
	return [];
}

class SteamMusic extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SteamMusic",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/routes/index.svelte generated by Svelte v3.22.2 */
const file$1 = "src/routes/index.svelte";

function create_fragment$2(ctx) {
	let t0;
	let t1;
	let div;
	let t2;
	let t3;
	let current;

	const navbar = new Navbar({
			props: { title: "Guard" },
			$$inline: true
		});

	const steamguard = new SteamGuard({ $$inline: true });
	const steammusic = new SteamMusic({ $$inline: true });
	const tabbar = new Tabbar({ props: { location: 3 }, $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(navbar.$$.fragment);
			t1 = space();
			div = element("div");
			create_component(steamguard.$$.fragment);
			t2 = space();
			create_component(steammusic.$$.fragment);
			t3 = space();
			create_component(tabbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-xql9z2\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(navbar.$$.fragment, nodes);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);
			claim_component(steamguard.$$.fragment, div_nodes);
			t2 = claim_space(div_nodes);
			claim_component(steammusic.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			claim_component(tabbar.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Guard :: Steam Mobile";
			attr_dev(div, "id", "guard");
			attr_dev(div, "class", "svelte-1w0j7dt");
			add_location(div, file$1, 12, 0, 334);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(navbar, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);
			mount_component(steamguard, div, null);
			append_dev(div, t2);
			mount_component(steammusic, div, null);
			insert_dev(target, t3, anchor);
			mount_component(tabbar, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(navbar.$$.fragment, local);
			transition_in(steamguard.$$.fragment, local);
			transition_in(steammusic.$$.fragment, local);
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navbar.$$.fragment, local);
			transition_out(steamguard.$$.fragment, local);
			transition_out(steammusic.$$.fragment, local);
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(navbar, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			destroy_component(steamguard);
			destroy_component(steammusic);
			if (detaching) detach_dev(t3);
			destroy_component(tabbar, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ Navbar, Tabbar, SteamGuard, SteamMusic });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$2.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMmRhNzhlYjYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0ZWFtR3VhcmQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgLy8gaW1wb3J0IHsgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJ1xuICBpbXBvcnQgeyB1c2VybmFtZSB9IGZyb20gJy4uL3JvdXRlcy9zdG9yZXMuanMnXG5cbiAgbGV0IHBlcmNlbnRhZ2UgPSAwXG4gIGxldCBjb2RlXG5cbiAgZnVuY3Rpb24gb25JbnRlcnZhbChjYWxsYmFjaywgdGltZSkge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIHRpbWUpXG5cbiAgICAvLyBvbkRlc3Ryb3koKCkgPT4ge1xuICAgIC8vIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIC8vIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY29kZWdlbigpIHtcbiAgICBjb2RlID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoLTUpLnRvVXBwZXJDYXNlKClcbiAgfVxuXG4gIG9uSW50ZXJ2YWwoZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPCA5KSB7XG4gICAgICArK3BlcmNlbnRhZ2VcbiAgICB9IGVsc2Uge1xuICAgICAgcGVyY2VudGFnZSA9IDBcbiAgICAgIGNvZGVnZW4oKVxuICAgIH1cbiAgfSwgMTAwMClcblxuICBsZXQgdXNlcm5hbWVfdmFsdWVcblxuICBjb25zdCB1bnN1YnNjcmliZSA9IHVzZXJuYW1lLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICB1c2VybmFtZV92YWx1ZSA9IHZhbHVlXG4gIH0pXG48L3NjcmlwdD5cblxuPGRpdiBpZD1cIndyYXBwZXJcIj5cbiAgPGRpdlxuICAgIGNsYXNzPVwidGltZXJiYXJcIlxuICAgIHN0eWxlPVwid2lkdGg6IHsxMDAgLSBwZXJjZW50YWdlICogMTB9JTsgYmFja2dyb3VuZC1pbWFnZToge3BlcmNlbnRhZ2UgPj0gNyA/ICdsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2JhKDE3Myw0MCwzMywxKSAwJSwgcmdiYSgxNzMsNDAsMzMsMSkgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEoMCwwLDI1NSwxKSAwJSwgcmdiYSgxNjMsNjgsMjAxLDEpIDEwMCUpJ307XG4gICAgei1pbmRleDogOTk5OVwiIC8+XG4gIDxkaXYgY2xhc3M9XCJ0aW1lcmJhciB0cmFpbFwiIC8+XG4gIDxkaXYgaWQ9XCJjb2RlXCIgc3R5bGU9XCJjb2xvcjoge3BlcmNlbnRhZ2UgPj0gNyA/ICcjQUQyODIxJyA6ICd3aGl0ZSd9XCI+XG4gICAge2NvZGUgfHwgY29kZWdlbigpfVxuICA8L2Rpdj5cbiAgPGRpdiBpZD1cInVzZXJuYW1lXCI+e3VzZXJuYW1lX3ZhbHVlfTwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgI3dyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTQ1cHg7XG4gICAgcGFkZGluZy10b3A6IDkwcHg7XG4gIH1cblxuICAjY29kZSB7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gICN1c2VybmFtZSB7XG4gICAgY29sb3I6ICNhN2Q2ZjA7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG9wYWNpdHk6IDAuODtcbiAgfVxuXG4gIC50aW1lcmJhciB7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogOHB4O1xuICAgIHRvcDogOTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbiAgfVxuXG4gIC50cmFpbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWMxYztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTk5OTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gIH1cbjwvc3R5bGU+XG4iLCI8c2NyaXB0PlxuICBpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyLnN2ZWx0ZSdcbiAgaW1wb3J0IFRhYmJhciBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJhci5zdmVsdGUnXG4gIGltcG9ydCBTdGVhbUd1YXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU3RlYW1HdWFyZC5zdmVsdGUnXG4gIGltcG9ydCBTdGVhbU11c2ljIGZyb20gJy4uL2NvbXBvbmVudHMvU3RlYW1NdXNpYy5zdmVsdGUnXG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuICA8dGl0bGU+R3VhcmQgOjogU3RlYW0gTW9iaWxlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxOYXZiYXIgdGl0bGU9XCJHdWFyZFwiIC8+XG48ZGl2IGlkPVwiZ3VhcmRcIj5cbiAgPFN0ZWFtR3VhcmQgLz5cbiAgPFN0ZWFtTXVzaWMgLz5cbjwvZGl2PlxuPFRhYmJhciBsb2NhdGlvbj17M30gLz5cblxuPHN0eWxlPlxuICAjZ3VhcmQge1xuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzswQkEwQ0ssR0FBSSxtQkFBSSxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztnQ0FFRSxHQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tEQUFkLEdBQWM7Ozs7Ozs7NEJBTmpCLEdBQUcsa0JBQUcsR0FBVSxNQUFHLEVBQUU7O3NEQUF1QixHQUFVLE9BQUksQ0FBQztLQUFHLHVFQUF1RTtLQUFHLHNFQUFzRTs7Ozs7OzsyQ0FHak0sR0FBVSxPQUFJLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQUhsRCxHQUFHLGtCQUFHLEdBQVUsTUFBRyxFQUFFOzs7O3VEQUF1QixHQUFVLE9BQUksQ0FBQztNQUFHLHVFQUF1RTtNQUFHLHNFQUFzRTs7O2dFQUk1TixHQUFJLG1CQUFJLEdBQU87Ozs0Q0FEWSxHQUFVLE9BQUksQ0FBQyxHQUFHLFNBQVMsR0FBRyxPQUFPOzs7eUVBRy9DLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBckN6QixVQUFVLENBQUMsUUFBUSxFQUFFLElBQUk7T0FDMUIsUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSTs7Ozs7S0FKekMsVUFBVSxHQUFHLENBQUM7S0FDZCxJQUFJOzs7VUFVQyxPQUFPO2tCQUNkLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxXQUFXOzs7Q0FHekQsVUFBVTtXQUFVLEtBQUs7T0FDbkIsVUFBVSxHQUFHLENBQUM7c0JBQ2QsVUFBVTs7b0JBRVosVUFBVSxHQUFHLENBQUM7SUFDZCxPQUFPOzs7RUFFUixJQUFJOzs7S0FFSCxjQUFjOztPQUVaLFdBQVcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFFLEtBQUs7a0JBQzNDLGNBQWMsR0FBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RDZlIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
