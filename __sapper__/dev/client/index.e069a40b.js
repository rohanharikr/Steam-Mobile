import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onDestroy, e as element, a as space, t as text, c as claim_element, b as children, f as detach_dev, g as claim_space, h as claim_text, j as attr_dev, k as set_style, l as add_location, m as insert_dev, n as append_dev, p as set_data_dev, q as noop, r as create_component, u as query_selector_all, w as claim_component, x as mount_component, y as transition_in, z as transition_out, A as destroy_component } from './client.2b72b428.js';
import { N as Navbar, T as Tabbar } from './Tabbar.52f1b164.js';
import { u as username } from './stores.b4c91baf.js';

/* src/components/SteamGuard.svelte generated by Svelte v3.22.2 */
const file = "src/components/SteamGuard.svelte";

function create_fragment(ctx) {
	let div3;
	let div0;
	let t0;
	let div1;
	let t1;
	let t2;
	let div2;
	let t3;

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			t0 = space();
			div1 = element("div");
			t1 = text(/*code*/ ctx[0]);
			t2 = space();
			div2 = element("div");
			t3 = text(/*username_value*/ ctx[2]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { id: true, class: true });
			var div3_nodes = children(div3);
			div0 = claim_element(div3_nodes, "DIV", { id: true, style: true, class: true });
			children(div0).forEach(detach_dev);
			t0 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { id: true, style: true, class: true });
			var div1_nodes = children(div1);
			t1 = claim_text(div1_nodes, /*code*/ ctx[0]);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { id: true, class: true });
			var div2_nodes = children(div2);
			t3 = claim_text(div2_nodes, /*username_value*/ ctx[2]);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "id", "timerbar");
			set_style(div0, "width", 100 - /*percentage*/ ctx[1] * 10 + "%");

			set_style(div0, "background-image", /*percentage*/ ctx[1] >= 7
			? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
			: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)");

			attr_dev(div0, "class", "svelte-16p5hz2");
			add_location(div0, file, 38, 1, 652);
			attr_dev(div1, "id", "code");
			set_style(div1, "color", /*percentage*/ ctx[1] >= 7 ? "#AD2821" : "white");
			attr_dev(div1, "class", "svelte-16p5hz2");
			add_location(div1, file, 39, 1, 901);
			attr_dev(div2, "id", "username");
			attr_dev(div2, "class", "svelte-16p5hz2");
			add_location(div2, file, 40, 1, 984);
			attr_dev(div3, "id", "wrapper");
			attr_dev(div3, "class", "svelte-16p5hz2");
			add_location(div3, file, 37, 0, 632);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			append_dev(div3, t0);
			append_dev(div3, div1);
			append_dev(div1, t1);
			append_dev(div3, t2);
			append_dev(div3, div2);
			append_dev(div2, t3);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*percentage*/ 2) {
				set_style(div0, "width", 100 - /*percentage*/ ctx[1] * 10 + "%");
			}

			if (dirty & /*percentage*/ 2) {
				set_style(div0, "background-image", /*percentage*/ ctx[1] >= 7
				? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
				: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)");
			}

			if (dirty & /*code*/ 1) set_data_dev(t1, /*code*/ ctx[0]);

			if (dirty & /*percentage*/ 2) {
				set_style(div1, "color", /*percentage*/ ctx[1] >= 7 ? "#AD2821" : "white");
			}

			if (dirty & /*username_value*/ 4) set_data_dev(t3, /*username_value*/ ctx[2]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
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

function instance($$self, $$props, $$invalidate) {
	let code = 72826;
	let percentage = 0;

	function onInterval(callback, time) {
		const interval = setInterval(callback, time);

		onDestroy(() => {
			clearInterval(interval);
		});
	}

	

	function codegen() {
		$$invalidate(0, code = Math.random().toString(36).slice(-5).toUpperCase());
	}

	onInterval(
		function check() {
			if (percentage < 9) {
				$$invalidate(1, ++percentage);
			} else {
				$$invalidate(1, percentage = 0);
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
		onDestroy,
		username,
		code,
		percentage,
		onInterval,
		codegen,
		username_value,
		unsubscribe
	});

	$$self.$inject_state = $$props => {
		if ("code" in $$props) $$invalidate(0, code = $$props.code);
		if ("percentage" in $$props) $$invalidate(1, percentage = $$props.percentage);
		if ("username_value" in $$props) $$invalidate(2, username_value = $$props.username_value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [code, percentage, username_value];
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

/* src/routes/index.svelte generated by Svelte v3.22.2 */
const file$1 = "src/routes/index.svelte";

function create_fragment$1(ctx) {
	let t0;
	let t1;
	let div;
	let t2;
	let current;

	const navbar = new Navbar({
			props: { title: "Steam Guard" },
			$$inline: true
		});

	const steamguard = new SteamGuard({ $$inline: true });
	const tabbar = new Tabbar({ props: { location: 3 }, $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(navbar.$$.fragment);
			t1 = space();
			div = element("div");
			create_component(steamguard.$$.fragment);
			t2 = space();
			create_component(tabbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-uh0s2l\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(navbar.$$.fragment, nodes);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);
			claim_component(steamguard.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			claim_component(tabbar.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Guard :: Steam Mobile";
			attr_dev(div, "id", "guard");
			attr_dev(div, "class", "svelte-qfrmoq");
			add_location(div, file$1, 11, 0, 280);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(navbar, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);
			mount_component(steamguard, div, null);
			insert_dev(target, t2, anchor);
			mount_component(tabbar, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(navbar.$$.fragment, local);
			transition_in(steamguard.$$.fragment, local);
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navbar.$$.fragment, local);
			transition_out(steamguard.$$.fragment, local);
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(navbar, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			destroy_component(steamguard);
			if (detaching) detach_dev(t2);
			destroy_component(tabbar, detaching);
		}
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

function instance$1($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ Navbar, Tabbar, SteamGuard });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTA2OWE0MGIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0ZWFtR3VhcmQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgdXNlcm5hbWUgfSBmcm9tICcuLi9yb3V0ZXMvc3RvcmVzLmpzJztcblxuXHRsZXQgY29kZSA9IDcyODI2O1xuXHRsZXQgcGVyY2VudGFnZSA9IDA7XG5cblx0ZnVuY3Rpb24gb25JbnRlcnZhbChjYWxsYmFjaywgdGltZSkge1xuXHRcdGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIHRpbWUpO1xuXG5cdFx0b25EZXN0cm95KCgpID0+IHtcblx0XHRjbGVhckludGVydmFsKGludGVydmFsKTtcblx0XHR9KTtcblx0fTtcblxuXHRmdW5jdGlvbiBjb2RlZ2VuKCkge1xuXHRcdGNvZGUgPSAoIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKC01KSApLnRvVXBwZXJDYXNlKCk7XG5cdH1cblx0XG5cdG9uSW50ZXJ2YWwoXG5cdFx0ZnVuY3Rpb24gY2hlY2soKXtcblx0XHRcdGlmIChwZXJjZW50YWdlIDwgOSl7XG5cdFx0XHRcdCsrcGVyY2VudGFnZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHBlcmNlbnRhZ2UgPSAwO1xuXHRcdFx0XHRjb2RlZ2VuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHQsIDEwMDApO1xuXG5cdGxldCB1c2VybmFtZV92YWx1ZTtcblxuXHRjb25zdCB1bnN1YnNjcmliZSA9IHVzZXJuYW1lLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG5cdFx0dXNlcm5hbWVfdmFsdWUgPSB2YWx1ZTtcblx0fSk7XG5cbjwvc2NyaXB0PlxuPGRpdiBpZD1cIndyYXBwZXJcIj5cblx0PGRpdiBpZD1cInRpbWVyYmFyXCIgc3R5bGU9XCJ3aWR0aDogezEwMCAtIHBlcmNlbnRhZ2UqMTB9JTsgYmFja2dyb3VuZC1pbWFnZToge3BlcmNlbnRhZ2UgPj03ID8gJ2xpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEoMTczLDQwLDMzLDEpIDAlLCByZ2JhKDE3Myw0MCwzMywxKSAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDE0NWRlZywgcmdiYSgwLDAsMjU1LDEpIDAlLCByZ2JhKDE2Myw2OCwyMDEsMSkgMTAwJSknfTtcIj48L2Rpdj5cblx0PGRpdiBpZD1cImNvZGVcIiBzdHlsZT1cImNvbG9yOiB7cGVyY2VudGFnZSA+PTcgPyAnI0FEMjgyMScgOiAnd2hpdGUnfVwiPntjb2RlfTwvZGl2PlxuXHQ8ZGl2IGlkPVwidXNlcm5hbWVcIj57dXNlcm5hbWVfdmFsdWV9PC9kaXY+XG48L2Rpdj5cbjxzdHlsZT5cblx0I3dyYXBwZXJ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzE2MWMyZDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0aGVpZ2h0OiAxNDVweDtcblx0XHRwYWRkaW5nLXRvcDogNDBweDtcblx0fVxuXG5cdCNjb2RlIHtcblx0XHRmb250LXNpemU6IDUycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDRweDtcblx0XHR0cmFuc2l0aW9uOiAwLjVzO1xuXHR9XG5cblx0I3VzZXJuYW1lIHtcblx0XHRjb2xvcjogI2E3ZDZmMDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cblx0I3RpbWVyYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogOHB4O1xuICAgIHRvcDogOTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcblx0fVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIuc3ZlbHRlJztcblx0aW1wb3J0IFRhYmJhciBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJhci5zdmVsdGUnO1xuXHRpbXBvcnQgU3RlYW1HdWFyZCBmcm9tICcuLi9jb21wb25lbnRzL1N0ZWFtR3VhcmQuc3ZlbHRlJztcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5HdWFyZCA6OiBTdGVhbSBNb2JpbGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPE5hdmJhciB0aXRsZT1cIlN0ZWFtIEd1YXJkXCIgLz5cbjxkaXYgaWQ9XCJndWFyZFwiPlxuXHQ8U3RlYW1HdWFyZCAvPlxuPC9kaXY+XG48VGFiYmFyIGxvY2F0aW9uPXszfSAvPlxuXG48c3R5bGU+XG5cdCNndWFyZCB7XG5cdFx0cGFkZGluZzogNjBweCAwcHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDYwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQXVDdUUsR0FBSTs7O2dDQUN0RCxHQUFjOzs7Ozs7Ozs7Ozt3Q0FEb0MsR0FBSTs7Ozs7a0RBQ3RELEdBQWM7Ozs7Ozs7NEJBRkEsR0FBRyxrQkFBRyxHQUFVLE1BQUMsRUFBRTs7c0RBQXVCLEdBQVUsT0FBRyxDQUFDO0tBQUcsdUVBQXVFO0tBQUcsc0VBQXNFOzs7OzsyQ0FDL00sR0FBVSxPQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFEaEMsR0FBRyxrQkFBRyxHQUFVLE1BQUMsRUFBRTs7Ozt1REFBdUIsR0FBVSxPQUFHLENBQUM7TUFBRyx1RUFBdUU7TUFBRyxzRUFBc0U7OztxREFDdkssR0FBSTs7OzRDQUE1QyxHQUFVLE9BQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxPQUFPOzs7eUVBQzlDLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXBDOUIsSUFBSSxHQUFHLEtBQUs7S0FDWixVQUFVLEdBQUcsQ0FBQzs7VUFFVCxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUk7UUFDM0IsUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSTs7RUFFM0MsU0FBUztHQUNULGFBQWEsQ0FBQyxRQUFROzs7Ozs7VUFJZCxPQUFPO2tCQUNmLElBQUksR0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBSSxXQUFXOzs7Q0FHNUQsVUFBVTtXQUNBLEtBQUs7T0FDVCxVQUFVLEdBQUcsQ0FBQztzQkFDZixVQUFVOztvQkFFWixVQUFVLEdBQUcsQ0FBQztJQUNkLE9BQU87OztFQUdSLElBQUk7OztLQUVGLGNBQWM7O09BRVosV0FBVyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSztrQkFDM0MsY0FBYyxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRENuQk4sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
