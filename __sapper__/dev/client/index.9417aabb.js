import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_each_argument, a as validate_slots, o as onDestroy, e as element, c as claim_element, b as set_style, f as attr_dev, g as add_location, h as insert_dev, j as detach_dev, k as space, t as text, l as children, m as claim_space, n as claim_text, p as append_dev, q as set_data_dev, r as noop, u as destroy_each, w as create_component, x as query_selector_all, y as claim_component, z as mount_component, A as transition_in, B as transition_out, C as destroy_component } from './client.ee6bca83.js';
import { N as Navbar, T as Tabbar } from './Tabbar.8cf443a0.js';
import { u as username } from './stores.b425240c.js';

/* src/components/SteamGuard.svelte generated by Svelte v3.22.2 */
const file = "src/components/SteamGuard.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[8] = list[i];
	return child_ctx;
}

// (42:1) {#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as layer}
function create_each_block(ctx) {
	let img;
	let img_src_value;
	let img_alt_value;

	const block = {
		c: function create() {
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { style: true, src: true, alt: true });
			this.h();
		},
		h: function hydrate() {
			set_style(img, "transform", "translate(0," + -/*y*/ ctx[0] * /*layer*/ ctx[8] / (/*layers*/ ctx[4].length - 1) + "px)");
			if (img.src !== (img_src_value = "https://www.firewatchgame.com/images/parallax/parallax" + /*layer*/ ctx[8] + ".png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = "parallax layer " + /*layer*/ ctx[8]);
			add_location(img, file, 42, 2, 782);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*y*/ 1) {
				set_style(img, "transform", "translate(0," + -/*y*/ ctx[0] * /*layer*/ ctx[8] / (/*layers*/ ctx[4].length - 1) + "px)");
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(42:1) {#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as layer}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let div3;
	let t0;
	let div0;
	let t1;
	let div1;
	let t2;
	let t3;
	let div2;
	let t4;
	let each_value = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < 9; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div3 = element("div");

			for (let i = 0; i < 9; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			div0 = element("div");
			t1 = space();
			div1 = element("div");
			t2 = text(/*code*/ ctx[1]);
			t3 = space();
			div2 = element("div");
			t4 = text(/*username_value*/ ctx[3]);
			this.h();
		},
		l: function claim(nodes) {
			div3 = claim_element(nodes, "DIV", { id: true });
			var div3_nodes = children(div3);

			for (let i = 0; i < 9; i += 1) {
				each_blocks[i].l(div3_nodes);
			}

			t0 = claim_space(div3_nodes);
			div0 = claim_element(div3_nodes, "DIV", { id: true, style: true, class: true });
			children(div0).forEach(detach_dev);
			t1 = claim_space(div3_nodes);
			div1 = claim_element(div3_nodes, "DIV", { id: true, style: true, class: true });
			var div1_nodes = children(div1);
			t2 = claim_text(div1_nodes, /*code*/ ctx[1]);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { id: true, class: true });
			var div2_nodes = children(div2);
			t4 = claim_text(div2_nodes, /*username_value*/ ctx[3]);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "id", "timerbar");
			set_style(div0, "width", 100 - /*percentage*/ ctx[2] * 10 + "%");

			set_style(div0, "background-image", /*percentage*/ ctx[2] >= 7
			? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
			: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)");

			attr_dev(div0, "class", "svelte-1vkl980");
			add_location(div0, file, 48, 1, 980);
			attr_dev(div1, "id", "code");
			set_style(div1, "color", /*percentage*/ ctx[2] >= 7 ? "#AD2821" : "white");
			attr_dev(div1, "class", "svelte-1vkl980");
			add_location(div1, file, 49, 1, 1229);
			attr_dev(div2, "id", "username");
			attr_dev(div2, "class", "svelte-1vkl980");
			add_location(div2, file, 50, 1, 1312);
			attr_dev(div3, "id", "wrapper parallax-container");
			add_location(div3, file, 40, 0, 696);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div3, anchor);

			for (let i = 0; i < 9; i += 1) {
				each_blocks[i].m(div3, null);
			}

			append_dev(div3, t0);
			append_dev(div3, div0);
			append_dev(div3, t1);
			append_dev(div3, div1);
			append_dev(div1, t2);
			append_dev(div3, t3);
			append_dev(div3, div2);
			append_dev(div2, t4);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*y, layers*/ 17) {
				each_value = [0, 1, 2, 3, 4, 5, 6, 7, 8];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < 9; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div3, t0);
					}
				}

				for (; i < 9; i += 1) {
					each_blocks[i].d(1);
				}
			}

			if (dirty & /*percentage*/ 4) {
				set_style(div0, "width", 100 - /*percentage*/ ctx[2] * 10 + "%");
			}

			if (dirty & /*percentage*/ 4) {
				set_style(div0, "background-image", /*percentage*/ ctx[2] >= 7
				? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
				: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)");
			}

			if (dirty & /*code*/ 2) set_data_dev(t2, /*code*/ ctx[1]);

			if (dirty & /*percentage*/ 4) {
				set_style(div1, "color", /*percentage*/ ctx[2] >= 7 ? "#AD2821" : "white");
			}

			if (dirty & /*username_value*/ 8) set_data_dev(t4, /*username_value*/ ctx[3]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_each(each_blocks, detaching);
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
	let { y } = $$props;

	function onInterval(callback, time) {
		const interval = setInterval(callback, time);

		onDestroy(() => {
			clearInterval(interval);
		});
	}

	

	function codegen() {
		$$invalidate(1, code = Math.random().toString(36).slice(-5).toUpperCase());
	}

	onInterval(
		function check() {
			if (percentage < 9) {
				$$invalidate(2, ++percentage);
			} else {
				$$invalidate(2, percentage = 0);
				codegen();
			}
		},
		1000
	);

	let username_value;

	const unsubscribe = username.subscribe(value => {
		$$invalidate(3, username_value = value);
	});

	const writable_props = ["y"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SteamGuard> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("SteamGuard", $$slots, []);

	$$self.$set = $$props => {
		if ("y" in $$props) $$invalidate(0, y = $$props.y);
	};

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
		if ("code" in $$props) $$invalidate(1, code = $$props.code);
		if ("percentage" in $$props) $$invalidate(2, percentage = $$props.percentage);
		if ("y" in $$props) $$invalidate(0, y = $$props.y);
		if ("username_value" in $$props) $$invalidate(3, username_value = $$props.username_value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [y, code, percentage, username_value, layers];
}

class SteamGuard extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { y: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SteamGuard",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*y*/ ctx[0] === undefined && !("y" in props)) {
			console.warn("<SteamGuard> was created without expected prop 'y'");
		}
	}

	get y() {
		throw new Error("<SteamGuard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set y(value) {
		throw new Error("<SteamGuard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTQxN2FhYmIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0ZWFtR3VhcmQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgdXNlcm5hbWUgfSBmcm9tICcuLi9yb3V0ZXMvc3RvcmVzLmpzJztcblxuXHRsZXQgY29kZSA9IDcyODI2O1xuXHRsZXQgcGVyY2VudGFnZSA9IDA7XG5cblx0Y29uc3QgbGF5ZXJzID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDhdO1xuICAgIGV4cG9ydCBsZXQgeTtcblxuXHRmdW5jdGlvbiBvbkludGVydmFsKGNhbGxiYWNrLCB0aW1lKSB7XG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjYWxsYmFjaywgdGltZSk7XG5cblx0XHRvbkRlc3Ryb3koKCkgPT4ge1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGNvZGVnZW4oKSB7XG5cdFx0Y29kZSA9ICggTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoLTUpICkudG9VcHBlckNhc2UoKTtcblx0fVxuXHRcblx0b25JbnRlcnZhbChcblx0XHRmdW5jdGlvbiBjaGVjaygpe1xuXHRcdFx0aWYgKHBlcmNlbnRhZ2UgPCA5KXtcblx0XHRcdFx0KytwZXJjZW50YWdlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGVyY2VudGFnZSA9IDA7XG5cdFx0XHRcdGNvZGVnZW4oKTtcblx0XHRcdH1cblx0XHR9XG5cdCwgMTAwMCk7XG5cblx0bGV0IHVzZXJuYW1lX3ZhbHVlO1xuXG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gdXNlcm5hbWUuc3Vic2NyaWJlKHZhbHVlID0+IHtcblx0XHR1c2VybmFtZV92YWx1ZSA9IHZhbHVlO1xuXHR9KTtcblxuPC9zY3JpcHQ+XG48ZGl2IGlkPVwid3JhcHBlciBwYXJhbGxheC1jb250YWluZXJcIj5cblx0eyNlYWNoIFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4XSBhcyBsYXllcn1cblx0XHQ8aW1nXG5cdFx0XHRzdHlsZT1cInRyYW5zZm9ybTogdHJhbnNsYXRlKDAsey15ICogbGF5ZXIgLyAobGF5ZXJzLmxlbmd0aCAtIDEpfXB4KVwiXG5cdFx0XHRzcmM9XCJodHRwczovL3d3dy5maXJld2F0Y2hnYW1lLmNvbS9pbWFnZXMvcGFyYWxsYXgvcGFyYWxsYXh7bGF5ZXJ9LnBuZ1wiXG5cdFx0XHRhbHQ9XCJwYXJhbGxheCBsYXllciB7bGF5ZXJ9XCJcblx0XHQ+XG5cdHsvZWFjaH1cblx0PGRpdiBpZD1cInRpbWVyYmFyXCIgc3R5bGU9XCJ3aWR0aDogezEwMCAtIHBlcmNlbnRhZ2UqMTB9JTsgYmFja2dyb3VuZC1pbWFnZToge3BlcmNlbnRhZ2UgPj03ID8gJ2xpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEoMTczLDQwLDMzLDEpIDAlLCByZ2JhKDE3Myw0MCwzMywxKSAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDE0NWRlZywgcmdiYSgwLDAsMjU1LDEpIDAlLCByZ2JhKDE2Myw2OCwyMDEsMSkgMTAwJSknfTtcIj48L2Rpdj5cblx0PGRpdiBpZD1cImNvZGVcIiBzdHlsZT1cImNvbG9yOiB7cGVyY2VudGFnZSA+PTcgPyAnI0FEMjgyMScgOiAnd2hpdGUnfVwiPntjb2RlfTwvZGl2PlxuXHQ8ZGl2IGlkPVwidXNlcm5hbWVcIj57dXNlcm5hbWVfdmFsdWV9PC9kaXY+XG48L2Rpdj5cbjxzdHlsZT5cblx0I3dyYXBwZXJ7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzE2MWMyZDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0aGVpZ2h0OiAxNDVweDtcblx0XHRwYWRkaW5nLXRvcDogNDBweDtcblx0fVxuXG5cdCNjb2RlIHtcblx0XHRmb250LXNpemU6IDUycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDRweDtcblx0XHR0cmFuc2l0aW9uOiAwLjVzO1xuXHR9XG5cblx0I3VzZXJuYW1lIHtcblx0XHRjb2xvcjogI2E3ZDZmMDtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cblx0I3RpbWVyYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogOHB4O1xuICAgIHRvcDogOTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcblx0fVxuXG5cdC5wYXJhbGxheC1jb250YWluZXIge1xuXHRcdHBvc2l0aW9uOiBmaXhlZDtcblx0XHR3aWR0aDogMjQwMHB4O1xuXHRcdGhlaWdodDogNzEycHg7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsMCk7XG5cdH1cblxuXHQucGFyYWxsYXgtY29udGFpbmVyIGltZyB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRvcDogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG5cdH1cblxuXHQucGFyYWxsYXgtY29udGFpbmVyIGltZzpsYXN0LWNoaWxkOjphZnRlciB7XG5cdFx0Y29udGVudDogJyc7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRiYWNrZ3JvdW5kOiByZ2IoNDUsMTAsMTMpO1xuXHR9XG5cblx0LnRleHQge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDMwMHZoO1xuXHRcdGNvbG9yOiByZ2IoMjIwLDExMyw0Myk7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdHBhZGRpbmc6IDRlbSAwLjVlbSAwLjVlbSAwLjVlbTtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdHBvaW50ZXItZXZlbnRzOiBub25lO1xuXHR9XG5cblx0c3BhbiB7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0Zm9udC1zaXplOiAxZW07XG5cdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtLCBvcGFjaXR5O1xuXHR9XG5cblx0LmZvcmVncm91bmQge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDcxMXB4O1xuXHRcdGxlZnQ6IDA7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiBjYWxjKDEwMCUgLSA3MTJweCk7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDMyLDAsMSk7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHBhZGRpbmc6IDUwdmggMCAwIDA7XG5cdH1cblxuXHQ6Z2xvYmFsKGJvZHkpIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUzLCAxNzQsIDUxKTtcblx0fVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG5cdGltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9OYXZiYXIuc3ZlbHRlJztcblx0aW1wb3J0IFRhYmJhciBmcm9tICcuLi9jb21wb25lbnRzL1RhYmJhci5zdmVsdGUnO1xuXHRpbXBvcnQgU3RlYW1HdWFyZCBmcm9tICcuLi9jb21wb25lbnRzL1N0ZWFtR3VhcmQuc3ZlbHRlJztcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5HdWFyZCA6OiBTdGVhbSBNb2JpbGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPE5hdmJhciB0aXRsZT1cIlN0ZWFtIEd1YXJkXCIgLz5cbjxkaXYgaWQ9XCJndWFyZFwiPlxuXHQ8U3RlYW1HdWFyZCAvPlxuPC9kaXY+XG48VGFiYmFyIGxvY2F0aW9uPXszfSAvPlxuXG48c3R5bGU+XG5cdCNndWFyZCB7XG5cdFx0cGFkZGluZzogNjBweCAwcHg7XG5cdFx0cGFkZGluZy1ib3R0b206IDYwcHg7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQTJDbUMsR0FBQyxnQkFBRyxHQUFLLGtCQUFJLEdBQU0sSUFBQyxNQUFNLEdBQUcsQ0FBQzt5R0FDRixHQUFLO3NFQUM1QyxHQUFLOzs7Ozs7Ozt3REFGTSxHQUFDLGdCQUFHLEdBQUssa0JBQUksR0FBTSxJQUFDLE1BQU0sR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFGeEQsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFRcUMsR0FBSTs7O2dDQUN0RCxHQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FEb0MsR0FBSTs7Ozs7a0RBQ3RELEdBQWM7Ozs7Ozs7NEJBRkEsR0FBRyxrQkFBRyxHQUFVLE1BQUMsRUFBRTs7c0RBQXVCLEdBQVUsT0FBRyxDQUFDO0tBQUcsdUVBQXVFO0tBQUcsc0VBQXNFOzs7OzsyQ0FDL00sR0FBVSxPQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQVIxRCxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBT0MsR0FBRyxrQkFBRyxHQUFVLE1BQUMsRUFBRTs7Ozt1REFBdUIsR0FBVSxPQUFHLENBQUM7TUFBRyx1RUFBdUU7TUFBRyxzRUFBc0U7OztxREFDdkssR0FBSTs7OzRDQUE1QyxHQUFVLE9BQUcsQ0FBQyxHQUFHLFNBQVMsR0FBRyxPQUFPOzs7eUVBQzlDLEdBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0E5QzlCLElBQUksR0FBRyxLQUFLO0tBQ1osVUFBVSxHQUFHLENBQUM7T0FFWixNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO09BQzNCLENBQUM7O1VBRU4sVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJO1FBQzNCLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUk7O0VBRTNDLFNBQVM7R0FDVCxhQUFhLENBQUMsUUFBUTs7Ozs7O1VBSWQsT0FBTztrQkFDZixJQUFJLEdBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUksV0FBVzs7O0NBRzVELFVBQVU7V0FDQSxLQUFLO09BQ1QsVUFBVSxHQUFHLENBQUM7c0JBQ2YsVUFBVTs7b0JBRVosVUFBVSxHQUFHLENBQUM7SUFDZCxPQUFPOzs7RUFHUixJQUFJOzs7S0FFRixjQUFjOztPQUVaLFdBQVcsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUs7a0JBQzNDLGNBQWMsR0FBRyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQ3RCTixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
