import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, a as add_render_callback, v as validate_each_argument, b as validate_slots, o as onDestroy, e as element, c as claim_element, f as set_style, g as attr_dev, h as add_location, j as insert_dev, k as detach_dev, l as space, t as text, m as children, n as claim_space, p as claim_text, q as append_dev, r as listen_dev, u as set_data_dev, w as noop, x as destroy_each, y as create_component, z as query_selector_all, A as claim_component, B as mount_component, C as transition_in, D as transition_out, E as destroy_component } from './client.882f5a2e.js';
import { N as Navbar, T as Tabbar } from './Tabbar.986ba872.js';
import { u as username } from './stores.29c6fe2c.js';

/* src/components/SteamGuard.svelte generated by Svelte v3.22.2 */
const file = "src/components/SteamGuard.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[9] = list[i];
	return child_ctx;
}

// (49:2) {#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as layer}
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
			img = claim_element(nodes, "IMG", {
				style: true,
				src: true,
				alt: true,
				class: true
			});

			this.h();
		},
		h: function hydrate() {
			set_style(img, "transform", "translate(0," + -/*y*/ ctx[0] * /*layer*/ ctx[9] / (/*layers*/ ctx[4].length - 1) + "px)");
			if (img.src !== (img_src_value = "https://www.firewatchgame.com/images/parallax/parallax" + /*layer*/ ctx[9] + ".png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = "parallax layer " + /*layer*/ ctx[9]);
			attr_dev(img, "class", "svelte-9n3483");
			add_location(img, file, 49, 3, 1236);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*y*/ 1) {
				set_style(img, "transform", "translate(0," + -/*y*/ ctx[0] * /*layer*/ ctx[9] / (/*layers*/ ctx[4].length - 1) + "px)");
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
		source: "(49:2) {#each [0, 1, 2, 3, 4, 5, 6, 7, 8] as layer}",
		ctx
	});

	return block;
}

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
	let t4;
	let a;
	let dispose;
	add_render_callback(/*onwindowscroll*/ ctx[8]);
	let each_value = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < 9; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			div3 = element("div");
			div0 = element("div");
			t0 = space();
			div1 = element("div");
			t1 = text(/*code*/ ctx[1]);
			t2 = space();
			div2 = element("div");
			t3 = text(/*username_value*/ ctx[3]);
			t4 = space();
			a = element("a");

			for (let i = 0; i < 9; i += 1) {
				each_blocks[i].c();
			}

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
			t1 = claim_text(div1_nodes, /*code*/ ctx[1]);
			div1_nodes.forEach(detach_dev);
			t2 = claim_space(div3_nodes);
			div2 = claim_element(div3_nodes, "DIV", { id: true, class: true });
			var div2_nodes = children(div2);
			t3 = claim_text(div2_nodes, /*username_value*/ ctx[3]);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(div3_nodes);
			a = claim_element(div3_nodes, "A", { class: true, href: true });
			var a_nodes = children(a);

			for (let i = 0; i < 9; i += 1) {
				each_blocks[i].l(a_nodes);
			}

			a_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "id", "timerbar");
			set_style(div0, "width", 100 - /*percentage*/ ctx[2] * 10 + "%");

			set_style(div0, "background-image", /*percentage*/ ctx[2] >= 7
			? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
			: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)");

			attr_dev(div0, "class", "svelte-9n3483");
			add_location(div0, file, 44, 1, 743);
			attr_dev(div1, "id", "code");
			set_style(div1, "color", /*percentage*/ ctx[2] >= 7 ? "#AD2821" : "white");
			attr_dev(div1, "class", "svelte-9n3483");
			add_location(div1, file, 45, 1, 992);
			attr_dev(div2, "id", "username");
			attr_dev(div2, "class", "svelte-9n3483");
			add_location(div2, file, 46, 1, 1075);
			attr_dev(a, "class", "parallax-container svelte-9n3483");
			attr_dev(a, "href", "https://www.firewatchgame.com");
			add_location(a, file, 47, 1, 1118);
			attr_dev(div3, "id", "wrapper");
			attr_dev(div3, "class", "svelte-9n3483");
			add_location(div3, file, 43, 0, 723);
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
			append_dev(div3, t4);
			append_dev(div3, a);

			for (let i = 0; i < 9; i += 1) {
				each_blocks[i].m(a, null);
			}

			if (remount) dispose();

			dispose = listen_dev(window, "scroll", () => {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
				/*onwindowscroll*/ ctx[8]();
			});
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*y*/ 1 && !scrolling) {
				scrolling = true;
				clearTimeout(scrolling_timeout);
				scrollTo(window.pageXOffset, /*y*/ ctx[0]);
				scrolling_timeout = setTimeout(clear_scrolling, 100);
			}

			if (dirty & /*percentage*/ 4) {
				set_style(div0, "width", 100 - /*percentage*/ ctx[2] * 10 + "%");
			}

			if (dirty & /*percentage*/ 4) {
				set_style(div0, "background-image", /*percentage*/ ctx[2] >= 7
				? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
				: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)");
			}

			if (dirty & /*code*/ 2) set_data_dev(t1, /*code*/ ctx[1]);

			if (dirty & /*percentage*/ 4) {
				set_style(div1, "color", /*percentage*/ ctx[2] >= 7 ? "#AD2821" : "white");
			}

			if (dirty & /*username_value*/ 8) set_data_dev(t3, /*username_value*/ ctx[3]);

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
						each_blocks[i].m(a, null);
					}
				}

				for (; i < 9; i += 1) {
					each_blocks[i].d(1);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div3);
			destroy_each(each_blocks, detaching);
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
	const layers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	let y;
	let code = 72826;
	let percentage = 0;

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

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SteamGuard> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("SteamGuard", $$slots, []);

	function onwindowscroll() {
		$$invalidate(0, y = window.pageYOffset);
	}

	$$self.$capture_state = () => ({
		onDestroy,
		username,
		layers,
		y,
		code,
		percentage,
		onInterval,
		codegen,
		username_value,
		unsubscribe
	});

	$$self.$inject_state = $$props => {
		if ("y" in $$props) $$invalidate(0, y = $$props.y);
		if ("code" in $$props) $$invalidate(1, code = $$props.code);
		if ("percentage" in $$props) $$invalidate(2, percentage = $$props.percentage);
		if ("username_value" in $$props) $$invalidate(3, username_value = $$props.username_value);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		y,
		code,
		percentage,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjA4Yzg5YTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N0ZWFtR3VhcmQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgdXNlcm5hbWUgfSBmcm9tICcuLi9yb3V0ZXMvc3RvcmVzLmpzJztcblxuXHRjb25zdCBsYXllcnMgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF07XG5cblx0bGV0IHk7XG5cdFxuXG5cdGxldCBjb2RlID0gNzI4MjY7XG5cdGxldCBwZXJjZW50YWdlID0gMDtcblxuXHRmdW5jdGlvbiBvbkludGVydmFsKGNhbGxiYWNrLCB0aW1lKSB7XG5cdFx0Y29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChjYWxsYmFjaywgdGltZSk7XG5cblx0XHRvbkRlc3Ryb3koKCkgPT4ge1xuXHRcdGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGNvZGVnZW4oKSB7XG5cdFx0Y29kZSA9ICggTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoLTUpICkudG9VcHBlckNhc2UoKTtcblx0fVxuXHRcblx0b25JbnRlcnZhbChcblx0XHRmdW5jdGlvbiBjaGVjaygpe1xuXHRcdFx0aWYgKHBlcmNlbnRhZ2UgPCA5KXtcblx0XHRcdFx0KytwZXJjZW50YWdlO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cGVyY2VudGFnZSA9IDA7XG5cdFx0XHRcdGNvZGVnZW4oKTtcblx0XHRcdH1cblx0XHR9XG5cdCwgMTAwMCk7XG5cblx0bGV0IHVzZXJuYW1lX3ZhbHVlO1xuXG5cdGNvbnN0IHVuc3Vic2NyaWJlID0gdXNlcm5hbWUuc3Vic2NyaWJlKHZhbHVlID0+IHtcblx0XHR1c2VybmFtZV92YWx1ZSA9IHZhbHVlO1xuXHR9KTtcblxuPC9zY3JpcHQ+XG48c3ZlbHRlOndpbmRvdyBiaW5kOnNjcm9sbFk9e3l9Lz5cbjxkaXYgaWQ9XCJ3cmFwcGVyXCI+XG5cdDxkaXYgaWQ9XCJ0aW1lcmJhclwiIHN0eWxlPVwid2lkdGg6IHsxMDAgLSBwZXJjZW50YWdlKjEwfSU7IGJhY2tncm91bmQtaW1hZ2U6IHtwZXJjZW50YWdlID49NyA/ICdsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2JhKDE3Myw0MCwzMywxKSAwJSwgcmdiYSgxNzMsNDAsMzMsMSkgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEoMCwwLDI1NSwxKSAwJSwgcmdiYSgxNjMsNjgsMjAxLDEpIDEwMCUpJ307XCI+PC9kaXY+XG5cdDxkaXYgaWQ9XCJjb2RlXCIgc3R5bGU9XCJjb2xvcjoge3BlcmNlbnRhZ2UgPj03ID8gJyNBRDI4MjEnIDogJ3doaXRlJ31cIj57Y29kZX08L2Rpdj5cblx0PGRpdiBpZD1cInVzZXJuYW1lXCI+e3VzZXJuYW1lX3ZhbHVlfTwvZGl2PlxuXHQ8YSBjbGFzcz1cInBhcmFsbGF4LWNvbnRhaW5lclwiIGhyZWY9XCJodHRwczovL3d3dy5maXJld2F0Y2hnYW1lLmNvbVwiPlxuXHRcdHsjZWFjaCBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOF0gYXMgbGF5ZXJ9XG5cdFx0XHQ8aW1nXG5cdFx0XHRcdHN0eWxlPVwidHJhbnNmb3JtOiB0cmFuc2xhdGUoMCx7LXkgKiBsYXllciAvIChsYXllcnMubGVuZ3RoIC0gMSl9cHgpXCJcblx0XHRcdFx0c3JjPVwiaHR0cHM6Ly93d3cuZmlyZXdhdGNoZ2FtZS5jb20vaW1hZ2VzL3BhcmFsbGF4L3BhcmFsbGF4e2xheWVyfS5wbmdcIlxuXHRcdFx0XHRhbHQ9XCJwYXJhbGxheCBsYXllciB7bGF5ZXJ9XCJcblx0XHRcdD5cblx0XHR7L2VhY2h9XG5cdDwvYT5cbjwvZGl2PlxuPHN0eWxlPlxuXHQjd3JhcHBlcntcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGhlaWdodDogMTkwcHg7XG5cdFx0cGFkZGluZy10b3A6IDUwcHg7XG5cdH1cblxuXHQjY29kZSB7XG5cdFx0Zm9udC1zaXplOiA1MnB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdGxldHRlci1zcGFjaW5nOiA0cHg7XG5cdFx0dHJhbnNpdGlvbjogMC41cztcblx0fVxuXG5cdCN1c2VybmFtZSB7XG5cdFx0Y29sb3I6ICNhN2Q2ZjA7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdG9wYWNpdHk6IDAuODtcblx0fVxuXG5cdCN0aW1lcmJhciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHJpZ2h0OiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDhweDtcbiAgICB0b3A6IDkwcHg7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xuICAgIHRyYW5zaXRpb246IDAuNXM7XG5cdH1cblxuXHQucGFyYWxsYXgtY29udGFpbmVyIHtcblx0XHRwb3NpdGlvbjogZml4ZWQ7XG5cdFx0d2lkdGg6IDI0MDBweDtcblx0XHRoZWlnaHQ6IDcxMnB4O1xuXHRcdGxlZnQ6IDUwJTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDApO1xuXHR9XG5cblx0LnBhcmFsbGF4LWNvbnRhaW5lciBpbWcge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR0b3A6IDA7XG5cdFx0bGVmdDogMDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuXHR9XG5cblx0LnBhcmFsbGF4LWNvbnRhaW5lciBpbWc6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0YmFja2dyb3VuZDogcmdiKDQ1LDEwLDEzKTtcblx0fVxuXG5cdC5mb3JlZ3JvdW5kIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dG9wOiA3MTFweDtcblx0XHRsZWZ0OiAwO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGhlaWdodDogY2FsYygxMDAlIC0gNzEycHgpO1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwwLDEpO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRwYWRkaW5nOiA1MHZoIDAgMCAwO1xuXHR9XG48L3N0eWxlPlxuIiwiPHNjcmlwdD5cblx0aW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci5zdmVsdGUnO1xuXHRpbXBvcnQgVGFiYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmFyLnN2ZWx0ZSc7XG5cdGltcG9ydCBTdGVhbUd1YXJkIGZyb20gJy4uL2NvbXBvbmVudHMvU3RlYW1HdWFyZC5zdmVsdGUnO1xuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkd1YXJkIDo6IFN0ZWFtIE1vYmlsZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48TmF2YmFyIHRpdGxlPVwiU3RlYW0gR3VhcmRcIiAvPlxuPGRpdiBpZD1cImd1YXJkXCI+XG5cdDxTdGVhbUd1YXJkIC8+XG48L2Rpdj5cblxuPFRhYmJhciBsb2NhdGlvbj17M30gLz5cblxuPHN0eWxlPlxuXHQjZ3VhcmQge1xuXHRcdHBhZGRpbmc6IDYwcHggMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA2MHB4O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1REFrRG9DLEdBQUMsZ0JBQUcsR0FBSyxrQkFBSSxHQUFNLElBQUMsTUFBTSxHQUFH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
