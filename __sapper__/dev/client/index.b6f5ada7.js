import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, o as onDestroy, e as element, a as space, t as text, c as claim_element, b as children, f as detach_dev, g as claim_space, h as claim_text, j as attr_dev, k as set_style, l as add_location, m as insert_dev, n as append_dev, p as set_data_dev, q as noop, r as create_component, u as query_selector_all, w as claim_component, x as mount_component, y as transition_in, z as transition_out, A as destroy_component } from './client.a058bfe6.js';
import { N as Navbar, T as Tabbar } from './Tabbar.6d4219cf.js';
import { u as username } from './stores.e594d93a.js';

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

			attr_dev(div0, "class", "svelte-c14r7x");
			add_location(div0, file, 41, 1, 706);
			attr_dev(div1, "id", "code");
			set_style(div1, "color", /*percentage*/ ctx[1] >= 7 ? "#AD2821" : "white");
			attr_dev(div1, "class", "svelte-c14r7x");
			add_location(div1, file, 42, 1, 955);
			attr_dev(div2, "id", "username");
			attr_dev(div2, "class", "svelte-c14r7x");
			add_location(div2, file, 43, 1, 1038);
			attr_dev(div3, "id", "wrapper");
			attr_dev(div3, "class", "svelte-c14r7x");
			add_location(div3, file, 40, 0, 686);
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
	const layers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	let y;

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
		layers,
		y,
		onInterval,
		codegen,
		username_value,
		unsubscribe
	});

	$$self.$inject_state = $$props => {
		if ("code" in $$props) $$invalidate(0, code = $$props.code);
		if ("percentage" in $$props) $$invalidate(1, percentage = $$props.percentage);
		if ("y" in $$props) y = $$props.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjZmNWFkYTcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0ZWFtR3VhcmQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgdXNlcm5hbWUgfSBmcm9tICcuLi9yb3V0ZXMvc3RvcmVzLmpzJztcblxuXHRsZXQgY29kZSA9IDcyODI2O1xuXHRsZXQgcGVyY2VudGFnZSA9IDA7XG5cblx0Y29uc3QgbGF5ZXJzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdO1xuXHRsZXQgeTtcblxuXHRmdW5jdGlvbiBvbkludGVydmFsKGNhbGxiYWNrLCB0aW1lKSB7XG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjYWxsYmFjaywgdGltZSk7XG5cblx0XHRvbkRlc3Ryb3koKCkgPT4ge1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGNvZGVnZW4oKSB7XG5cdFx0Y29kZSA9ICggTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoLTUpICkudG9VcHBlckNhc2UoKTtcblx0fVxuXHRcblx0b25JbnRlcnZhbChcblx0XHRmdW5jdGlvbiBjaGVjaygpe1xuXHRcdFx0aWYgKHBlcmNlbnRhZ2UgPCA5KXtcblx0XHRcdFx0KytwZXJjZW50YWdlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGVyY2VudGFnZSA9IDA7XG5cdFx0XHRcdGNvZGVnZW4oKTtcblx0XHRcdH1cblx0XHR9XG5cdCwgMTAwMCk7XG5cblx0bGV0IHVzZXJuYW1lX3ZhbHVlO1xuXG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gdXNlcm5hbWUuc3Vic2NyaWJlKHZhbHVlID0+IHtcblx0XHR1c2VybmFtZV92YWx1ZSA9IHZhbHVlO1xuXHR9KTtcblxuPC9zY3JpcHQ+XG48ZGl2IGlkPVwid3JhcHBlclwiPlxuXHQ8ZGl2IGlkPVwidGltZXJiYXJcIiBzdHlsZT1cIndpZHRoOiB7MTAwIC0gcGVyY2VudGFnZSoxMH0lOyBiYWNrZ3JvdW5kLWltYWdlOiB7cGVyY2VudGFnZSA+PTcgPyAnbGluZWFyLWdyYWRpZW50KDE0NWRlZywgcmdiYSgxNzMsNDAsMzMsMSkgMCUsIHJnYmEoMTczLDQwLDMzLDEpIDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2JhKDAsMCwyNTUsMSkgMCUsIHJnYmEoMTYzLDY4LDIwMSwxKSAxMDAlKSd9O1wiPjwvZGl2PlxuXHQ8ZGl2IGlkPVwiY29kZVwiIHN0eWxlPVwiY29sb3I6IHtwZXJjZW50YWdlID49NyA/ICcjQUQyODIxJyA6ICd3aGl0ZSd9XCI+e2NvZGV9PC9kaXY+XG5cdDxkaXYgaWQ9XCJ1c2VybmFtZVwiPnt1c2VybmFtZV92YWx1ZX08L2Rpdj5cbjwvZGl2PlxuPHN0eWxlPlxuXHQjd3JhcHBlcntcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0aGVpZ2h0OiAxOTBweDtcblx0XHRwYWRkaW5nLXRvcDogNDBweDtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93d3cuZmlyZXdhdGNoZ2FtZS5jb20vaW1hZ2VzL3BhcmFsbGF4L3BhcmFsbGF4NS5wbmcpO1xuXHR9XG5cblx0I2NvZGUge1xuXHRcdGZvbnQtc2l6ZTogNTJweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRsZXR0ZXItc3BhY2luZzogNHB4O1xuXHRcdHRyYW5zaXRpb246IDAuNXM7XG5cdH1cblxuXHQjdXNlcm5hbWUge1xuXHRcdGNvbG9yOiAjYTdkNmYwO1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRvcGFjaXR5OiAwLjg7XG5cdH1cblxuXHQjdGltZXJiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiA4cHg7XG4gICAgdG9wOiA5MHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuXHR9XG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cblx0aW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci5zdmVsdGUnO1xuXHRpbXBvcnQgVGFiYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmFyLnN2ZWx0ZSc7XG5cdGltcG9ydCBTdGVhbUd1YXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU3RlYW1HdWFyZC5zdmVsdGUnO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkd1YXJkIDo6IFN0ZWFtIE1vYmlsZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48TmF2YmFyIHRpdGxlPVwiU3RlYW0gR3VhcmRcIiAvPlxuPGRpdiBpZD1cImd1YXJkXCI+XG5cdDxTdGVhbUd1YXJkIC8+XG48L2Rpdj5cblxuPFRhYmJhciBsb2NhdGlvbj17M30gLz5cblxuPHN0eWxlPlxuXHQjZ3VhcmQge1xuXHRcdHBhZGRpbmc6IDYwcHggMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA2MHB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkEwQ3VFLEdBQUk7OztnQ0FDdEQsR0FBYzs7Ozs7Ozs7Ozs7d0NBRG9DLEdBQUk7Ozs7O2tEQUN0RCxHQUFjOzs7Ozs7OzRCQUZBLEdBQUcsa0JBQUcsR0FBVSxNQUFDLEVBQUU7O3NEQUF1QixHQUFVLE9BQUcsQ0FBQztLQUFHLHVFQUF1RTtLQUFHLHNFQUFzRTs7Ozs7MkNBQy9NLEdBQVUsT0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRGhDLEdBQUcsa0JBQUcsR0FBVSxNQUFDLEVBQUU7Ozs7dURBQXVCLEdBQVUsT0FBRyxDQUFDO01BQUcsdUVBQXVFO01BQUcsc0VBQXNFOzs7cURBQ3ZLLEdBQUk7Ozs0Q0FBNUMsR0FBVSxPQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTzs7O3lFQUM5QyxHQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F2QzlCLElBQUksR0FBRyxLQUFLO0tBQ1osVUFBVSxHQUFHLENBQUM7T0FFWixNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQ3JDLENBQUM7O1VBRUksVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJO1FBQzNCLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUk7O0VBRTNDLFNBQVM7R0FDVCxhQUFhLENBQUMsUUFBUTs7Ozs7O1VBSWQsT0FBTztrQkFDZixJQUFJLEdBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUksV0FBVzs7O0NBRzVELFVBQVU7V0FDQSxLQUFLO09BQ1QsVUFBVSxHQUFHLENBQUM7c0JBQ2YsVUFBVTs7b0JBRVosVUFBVSxHQUFHLENBQUM7SUFDZCxPQUFPOzs7RUFHUixJQUFJOzs7S0FFRixjQUFjOztPQUVaLFdBQVcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUs7a0JBQzNDLGNBQWMsR0FBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RDckJOLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
