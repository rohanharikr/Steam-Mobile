import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as add_render_callback, v as validate_slots, o as onDestroy, e as element, b as space, t as text, c as claim_element, f as children, g as detach_dev, h as claim_space, j as claim_text, k as attr_dev, l as set_style, m as add_location, n as insert_dev, p as append_dev, q as listen_dev, r as set_data_dev, u as noop, w as create_component, x as query_selector_all, y as claim_component, z as mount_component, A as transition_in, B as transition_out, C as destroy_component } from './client.5dd5ff18.js';
import { N as Navbar, T as Tabbar } from './Tabbar.bb999250.js';
import { u as username } from './stores.8f6b580e.js';

/* src/components/SteamGuard.svelte generated by Svelte v3.22.2 */
const file = "src/components/SteamGuard.svelte";

function create_fragment(ctx) {
	let scrolling = false;

	let clear_scrolling = () => {
		scrolling = false;
	};

	let scrolling_timeout;
	let div3;
	let div0;
	let t0;
	let div1;
	let t1;
	let t2;
	let div2;
	let t3;
	let dispose;
	add_render_callback(/*onwindowscroll*/ ctx[8]);

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			t0 = space();
			div1 = element("div");
			t1 = text(/*code*/ ctx[0]);
			t2 = space();
			div2 = element("div");
			t3 = text(/*username_value*/ ctx[3]);
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
			t3 = claim_text(div2_nodes, /*username_value*/ ctx[3]);
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

			attr_dev(div0, "class", "svelte-8ouwzj");
			add_location(div0, file, 42, 1, 740);
			attr_dev(div1, "id", "code");
			set_style(div1, "color", /*percentage*/ ctx[1] >= 7 ? "#AD2821" : "white");
			attr_dev(div1, "class", "svelte-8ouwzj");
			add_location(div1, file, 43, 1, 989);
			attr_dev(div2, "id", "username");
			attr_dev(div2, "class", "svelte-8ouwzj");
			add_location(div2, file, 44, 1, 1072);
			attr_dev(div3, "id", "wrapper");
			attr_dev(div3, "class", "svelte-8ouwzj");
			add_location(div3, file, 41, 0, 720);
		},
		m: function mount(target, anchor, remount) {
			insert_dev(target, div3, anchor);
			append_dev(div3, div0);
			append_dev(div3, t0);
			append_dev(div3, div1);
			append_dev(div1, t1);
			append_dev(div3, t2);
			append_dev(div3, div2);
			append_dev(div2, t3);
			if (remount) dispose();

			dispose = listen_dev(window, "scroll", () => {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
				/*onwindowscroll*/ ctx[8]();
			});
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*y*/ 4 && !scrolling) {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				scrollTo(window.pageXOffset, /*y*/ ctx[2]);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
			}

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

			if (dirty & /*username_value*/ 8) set_data_dev(t3, /*username_value*/ ctx[3]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			dispose();
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
		$$invalidate(3, username_value = value);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SteamGuard> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("SteamGuard", $$slots, []);

	function onwindowscroll() {
		$$invalidate(2, y = window.pageYOffset);
	}

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
		if ("y" in $$props) $$invalidate(2, y = $$props.y);
		if ("username_value" in $$props) $$invalidate(3, username_value = $$props.username_value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		code,
		percentage,
		y,
		username_value,
		layers,
		onInterval,
		codegen,
		unsubscribe,
		onwindowscroll
	];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjQ0NzQyOTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0ZWFtR3VhcmQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgdXNlcm5hbWUgfSBmcm9tICcuLi9yb3V0ZXMvc3RvcmVzLmpzJztcblxuXHRsZXQgY29kZSA9IDcyODI2O1xuXHRsZXQgcGVyY2VudGFnZSA9IDA7XG5cblx0Y29uc3QgbGF5ZXJzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdO1xuXHRsZXQgeTtcblxuXHRmdW5jdGlvbiBvbkludGVydmFsKGNhbGxiYWNrLCB0aW1lKSB7XG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjYWxsYmFjaywgdGltZSk7XG5cblx0XHRvbkRlc3Ryb3koKCkgPT4ge1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGNvZGVnZW4oKSB7XG5cdFx0Y29kZSA9ICggTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoLTUpICkudG9VcHBlckNhc2UoKTtcblx0fVxuXHRcblx0b25JbnRlcnZhbChcblx0XHRmdW5jdGlvbiBjaGVjaygpe1xuXHRcdFx0aWYgKHBlcmNlbnRhZ2UgPCA5KXtcblx0XHRcdFx0KytwZXJjZW50YWdlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGVyY2VudGFnZSA9IDA7XG5cdFx0XHRcdGNvZGVnZW4oKTtcblx0XHRcdH1cblx0XHR9XG5cdCwgMTAwMCk7XG5cblx0bGV0IHVzZXJuYW1lX3ZhbHVlO1xuXG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gdXNlcm5hbWUuc3Vic2NyaWJlKHZhbHVlID0+IHtcblx0XHR1c2VybmFtZV92YWx1ZSA9IHZhbHVlO1xuXHR9KTtcblxuPC9zY3JpcHQ+XG48c3ZlbHRlOndpbmRvdyBiaW5kOnNjcm9sbFk9e3l9Lz5cbjxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG5cdDxkaXYgaWQ9XCJ0aW1lcmJhclwiIHN0eWxlPVwid2lkdGg6IHsxMDAgLSBwZXJjZW50YWdlKjEwfSU7IGJhY2tncm91bmQtaW1hZ2U6IHtwZXJjZW50YWdlID49NyA/ICdsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2JhKDE3Myw0MCwzMywxKSAwJSwgcmdiYSgxNzMsNDAsMzMsMSkgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEoMCwwLDI1NSwxKSAwJSwgcmdiYSgxNjMsNjgsMjAxLDEpIDEwMCUpJ307XCI+PC9kaXY+XG5cdDxkaXYgaWQ9XCJjb2RlXCIgc3R5bGU9XCJjb2xvcjoge3BlcmNlbnRhZ2UgPj03ID8gJyNBRDI4MjEnIDogJ3doaXRlJ31cIj57Y29kZX08L2Rpdj5cblx0PGRpdiBpZD1cInVzZXJuYW1lXCI+e3VzZXJuYW1lX3ZhbHVlfTwvZGl2PlxuPC9kaXY+XG48c3R5bGU+XG5cdCN3cmFwcGVye1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRoZWlnaHQ6IDE5MHB4O1xuXHRcdHBhZGRpbmctdG9wOiA0MHB4O1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL3d3dy5maXJld2F0Y2hnYW1lLmNvbS9pbWFnZXMvcGFyYWxsYXgvcGFyYWxsYXg1LnBuZyk7XG5cdFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuXHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcblx0fVxuXG5cdCNjb2RlIHtcblx0XHRmb250LXNpemU6IDUycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDRweDtcblx0XHR0cmFuc2l0aW9uOiAwLjVzO1xuXHR9XG5cblx0I3VzZXJuYW1lIHtcblx0XHRjb2xvcjogI2E3ZDZmMDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cblx0I3RpbWVyYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogOHB4O1xuICAgIHRvcDogOTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcblx0fVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIuc3ZlbHRlJztcblx0aW1wb3J0IFRhYmJhciBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJhci5zdmVsdGUnO1xuXHRpbXBvcnQgU3RlYW1HdWFyZCBmcm9tICcuLi9jb21wb25lbnRzL1N0ZWFtR3VhcmQuc3ZlbHRlJztcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5HdWFyZCA6OiBTdGVhbSBNb2JpbGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPE5hdmJhciB0aXRsZT1cIlN0ZWFtIEd1YXJkXCIgLz5cbjxkaXYgaWQ9XCJndWFyZFwiPlxuXHQ8U3RlYW1HdWFyZCAvPlxuPC9kaXY+XG5cbjxUYWJiYXIgbG9jYXRpb249ezN9IC8+XG5cbjxzdHlsZT5cblx0I2d1YXJkIHtcblx0XHRwYWRkaW5nOiA2MHB4IDBweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogNjBweDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdH1cbjwvc3R5bGU+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0JBMkN1RSxHQUFJOzs7Z0NBQ3RELEdBQWM7Ozs7Ozs7Ozs7O3dDQURvQyxHQUFJOzs7OztrREFDdEQsR0FBYzs7Ozs7Ozs0QkFGQSxHQUFHLGtCQUFHLEdBQVUsTUFBQyxFQUFFOztzREFBdUIsR0FBVSxPQUFHLENBQUM7S0FBRyx1RUFBdUU7S0FBRyxzRUFBc0U7Ozs7OzJDQUMvTSxHQUFVLE9BQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQURoQyxHQUFHLGtCQUFHLEdBQVUsTUFBQyxFQUFFOzs7O3VEQUF1QixHQUFVLE9BQUcsQ0FBQztNQUFHLHVFQUF1RTtNQUFHLHNFQUFzRTs7O3FEQUN2SyxHQUFJOzs7NENBQTVDLEdBQVUsT0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLE9BQU87Ozt5RUFDOUMsR0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQXhDOUIsSUFBSSxHQUFHLEtBQUs7S0FDWixVQUFVLEdBQUcsQ0FBQztPQUVaLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDckMsQ0FBQzs7VUFFSSxVQUFVLENBQUMsUUFBUSxFQUFFLElBQUk7UUFDM0IsUUFBUSxHQUFHLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSTs7RUFFM0MsU0FBUztHQUNULGFBQWEsQ0FBQyxRQUFROzs7Ozs7VUFJZCxPQUFPO2tCQUNmLElBQUksR0FBSyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBSSxXQUFXOzs7Q0FHNUQsVUFBVTtXQUNBLEtBQUs7T0FDVCxVQUFVLEdBQUcsQ0FBQztzQkFDZixVQUFVOztvQkFFWixVQUFVLEdBQUcsQ0FBQztJQUNkLE9BQU87OztFQUdSLElBQUk7OztLQUVGLGNBQWM7O09BRVosV0FBVyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSztrQkFDM0MsY0FBYyxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQ3JCTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
