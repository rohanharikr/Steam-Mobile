import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, b as validate_slots, e as element, t as text, c as claim_element, p as claim_text, g as attr_dev, f as set_style, h as add_location, j as insert_dev, u as set_data_dev, w as noop, k as detach_dev, m as children, q as append_dev, y as create_component, l as space, A as claim_component, n as claim_space, B as mount_component, C as transition_in, D as transition_out, E as destroy_component, G as group_outros, H as check_outros, z as query_selector_all } from './client.7279d690.js';
import { N as Navbar, T as Tabbar } from './Tabbar.df65a38a.js';

/* src/components/SupportCardItem.svelte generated by Svelte v3.22.2 */

const file = "src/components/SupportCardItem.svelte";

function create_fragment(ctx) {
	let img;
	let img_src_value;
	let t;

	const block = {
		c: function create() {
			img = element("img");
			t = text(/*name*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			img = claim_element(nodes, "IMG", { src: true, style: true, class: true });
			t = claim_text(nodes, /*name*/ ctx[0]);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*logo*/ ctx[1])) attr_dev(img, "src", img_src_value);
			set_style(img, "height", /*height*/ ctx[2]);
			attr_dev(img, "class", "svelte-nbzu51");
			add_location(img, file, 4, 0, 52);
		},
		m: function mount(target, anchor) {
			insert_dev(target, img, anchor);
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*logo*/ 2 && img.src !== (img_src_value = /*logo*/ ctx[1])) {
				attr_dev(img, "src", img_src_value);
			}

			if (dirty & /*height*/ 4) {
				set_style(img, "height", /*height*/ ctx[2]);
			}

			if (dirty & /*name*/ 1) set_data_dev(t, /*name*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(img);
			if (detaching) detach_dev(t);
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
	let { name } = $$props, { logo } = $$props, { height } = $$props;
	const writable_props = ["name", "logo", "height"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SupportCardItem> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("SupportCardItem", $$slots, []);

	$$self.$set = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("logo" in $$props) $$invalidate(1, logo = $$props.logo);
		if ("height" in $$props) $$invalidate(2, height = $$props.height);
	};

	$$self.$capture_state = () => ({ name, logo, height });

	$$self.$inject_state = $$props => {
		if ("name" in $$props) $$invalidate(0, name = $$props.name);
		if ("logo" in $$props) $$invalidate(1, logo = $$props.logo);
		if ("height" in $$props) $$invalidate(2, height = $$props.height);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [name, logo, height];
}

class SupportCardItem extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { name: 0, logo: 1, height: 2 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SupportCardItem",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*name*/ ctx[0] === undefined && !("name" in props)) {
			console.warn("<SupportCardItem> was created without expected prop 'name'");
		}

		if (/*logo*/ ctx[1] === undefined && !("logo" in props)) {
			console.warn("<SupportCardItem> was created without expected prop 'logo'");
		}

		if (/*height*/ ctx[2] === undefined && !("height" in props)) {
			console.warn("<SupportCardItem> was created without expected prop 'height'");
		}
	}

	get name() {
		throw new Error("<SupportCardItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<SupportCardItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get logo() {
		throw new Error("<SupportCardItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set logo(value) {
		throw new Error("<SupportCardItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get height() {
		throw new Error("<SupportCardItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set height(value) {
		throw new Error("<SupportCardItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/SupportCard.svelte generated by Svelte v3.22.2 */
const file$1 = "src/components/SupportCard.svelte";

// (8:1) {#if !single && !combined}
function create_if_block_3(ctx) {
	let h3;
	let t;

	const block = {
		c: function create() {
			h3 = element("h3");
			t = text(/*title*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			h3 = claim_element(nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t = claim_text(h3_nodes, /*title*/ ctx[0]);
			h3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h3, "class", "svelte-1sngiaw");
			add_location(h3, file$1, 8, 2, 172);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h3, anchor);
			append_dev(h3, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*title*/ 1) set_data_dev(t, /*title*/ ctx[0]);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(8:1) {#if !single && !combined}",
		ctx
	});

	return block;
}

// (12:2) {#if !single && !combined}
function create_if_block_2(ctx) {
	let li0;
	let t0;
	let li1;
	let t1;
	let li2;
	let current;

	const supportcarditem0 = new SupportCardItem({
			props: { name: "Dota 2", logo: "dota2.svg" },
			$$inline: true
		});

	const supportcarditem1 = new SupportCardItem({
			props: {
				name: "Stardew Valley",
				logo: "stardewvalley.svg"
			},
			$$inline: true
		});

	const supportcarditem2 = new SupportCardItem({
			props: {
				name: "Half-Life: Alyx",
				logo: "halflifealyx.svg"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			li0 = element("li");
			create_component(supportcarditem0.$$.fragment);
			t0 = space();
			li1 = element("li");
			create_component(supportcarditem1.$$.fragment);
			t1 = space();
			li2 = element("li");
			create_component(supportcarditem2.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			claim_component(supportcarditem0.$$.fragment, li0_nodes);
			li0_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			claim_component(supportcarditem1.$$.fragment, li1_nodes);
			li1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			li2 = claim_element(nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			claim_component(supportcarditem2.$$.fragment, li2_nodes);
			li2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(li0, "class", "svelte-1sngiaw");
			add_location(li0, file$1, 12, 3, 234);
			attr_dev(li1, "class", "svelte-1sngiaw");
			add_location(li1, file$1, 13, 3, 297);
			attr_dev(li2, "class", "svelte-1sngiaw");
			add_location(li2, file$1, 14, 3, 375);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li0, anchor);
			mount_component(supportcarditem0, li0, null);
			insert_dev(target, t0, anchor);
			insert_dev(target, li1, anchor);
			mount_component(supportcarditem1, li1, null);
			insert_dev(target, t1, anchor);
			insert_dev(target, li2, anchor);
			mount_component(supportcarditem2, li2, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(supportcarditem0.$$.fragment, local);
			transition_in(supportcarditem1.$$.fragment, local);
			transition_in(supportcarditem2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(supportcarditem0.$$.fragment, local);
			transition_out(supportcarditem1.$$.fragment, local);
			transition_out(supportcarditem2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li0);
			destroy_component(supportcarditem0);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(li1);
			destroy_component(supportcarditem1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(li2);
			destroy_component(supportcarditem2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(12:2) {#if !single && !combined}",
		ctx
	});

	return block;
}

// (17:2) {#if single}
function create_if_block_1(ctx) {
	let li;
	let current;

	const supportcarditem = new SupportCardItem({
			props: {
				name: /*name*/ ctx[2],
				logo: "configure.svg"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			li = element("li");
			create_component(supportcarditem.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			claim_component(supportcarditem.$$.fragment, li_nodes);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(li, "class", "svelte-1sngiaw");
			add_location(li, file$1, 17, 3, 477);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			mount_component(supportcarditem, li, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const supportcarditem_changes = {};
			if (dirty & /*name*/ 4) supportcarditem_changes.name = /*name*/ ctx[2];
			supportcarditem.$set(supportcarditem_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(supportcarditem.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(supportcarditem.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
			destroy_component(supportcarditem);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(17:2) {#if single}",
		ctx
	});

	return block;
}

// (20:2) {#if combined}
function create_if_block(ctx) {
	let li0;
	let t0;
	let li1;
	let t1;
	let li2;
	let t2;
	let li3;
	let t3;
	let li4;
	let current;

	const supportcarditem0 = new SupportCardItem({
			props: {
				name: "Games, Software, etc.",
				logo: "games.svg"
			},
			$$inline: true
		});

	const supportcarditem1 = new SupportCardItem({
			props: { name: "Puchases", logo: "purchases.svg" },
			$$inline: true
		});

	const supportcarditem2 = new SupportCardItem({
			props: {
				name: "My Account",
				logo: "myaccount.svg"
			},
			$$inline: true
		});

	const supportcarditem3 = new SupportCardItem({
			props: {
				name: "Trading, Gifting, Items, Community Market",
				logo: "trading.svg"
			},
			$$inline: true
		});

	const supportcarditem4 = new SupportCardItem({
			props: {
				name: "Steam Community",
				logo: "community.svg"
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			li0 = element("li");
			create_component(supportcarditem0.$$.fragment);
			t0 = space();
			li1 = element("li");
			create_component(supportcarditem1.$$.fragment);
			t1 = space();
			li2 = element("li");
			create_component(supportcarditem2.$$.fragment);
			t2 = space();
			li3 = element("li");
			create_component(supportcarditem3.$$.fragment);
			t3 = space();
			li4 = element("li");
			create_component(supportcarditem4.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			li0 = claim_element(nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			claim_component(supportcarditem0.$$.fragment, li0_nodes);
			li0_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			li1 = claim_element(nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			claim_component(supportcarditem1.$$.fragment, li1_nodes);
			li1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			li2 = claim_element(nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			claim_component(supportcarditem2.$$.fragment, li2_nodes);
			li2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			li3 = claim_element(nodes, "LI", { class: true });
			var li3_nodes = children(li3);
			claim_component(supportcarditem3.$$.fragment, li3_nodes);
			li3_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			li4 = claim_element(nodes, "LI", { class: true });
			var li4_nodes = children(li4);
			claim_component(supportcarditem4.$$.fragment, li4_nodes);
			li4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(li0, "class", "svelte-1sngiaw");
			add_location(li0, file$1, 20, 3, 562);
			attr_dev(li1, "class", "svelte-1sngiaw");
			add_location(li1, file$1, 21, 3, 640);
			attr_dev(li2, "class", "svelte-1sngiaw");
			add_location(li2, file$1, 22, 3, 708);
			attr_dev(li3, "class", "svelte-1sngiaw");
			add_location(li3, file$1, 23, 3, 779);
			attr_dev(li4, "class", "svelte-1sngiaw");
			add_location(li4, file$1, 24, 3, 879);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li0, anchor);
			mount_component(supportcarditem0, li0, null);
			insert_dev(target, t0, anchor);
			insert_dev(target, li1, anchor);
			mount_component(supportcarditem1, li1, null);
			insert_dev(target, t1, anchor);
			insert_dev(target, li2, anchor);
			mount_component(supportcarditem2, li2, null);
			insert_dev(target, t2, anchor);
			insert_dev(target, li3, anchor);
			mount_component(supportcarditem3, li3, null);
			insert_dev(target, t3, anchor);
			insert_dev(target, li4, anchor);
			mount_component(supportcarditem4, li4, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(supportcarditem0.$$.fragment, local);
			transition_in(supportcarditem1.$$.fragment, local);
			transition_in(supportcarditem2.$$.fragment, local);
			transition_in(supportcarditem3.$$.fragment, local);
			transition_in(supportcarditem4.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(supportcarditem0.$$.fragment, local);
			transition_out(supportcarditem1.$$.fragment, local);
			transition_out(supportcarditem2.$$.fragment, local);
			transition_out(supportcarditem3.$$.fragment, local);
			transition_out(supportcarditem4.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li0);
			destroy_component(supportcarditem0);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(li1);
			destroy_component(supportcarditem1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(li2);
			destroy_component(supportcarditem2);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(li3);
			destroy_component(supportcarditem3);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(li4);
			destroy_component(supportcarditem4);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(20:2) {#if combined}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let div;
	let t0;
	let ul;
	let t1;
	let t2;
	let current;
	let if_block0 = !/*single*/ ctx[1] && !/*combined*/ ctx[3] && create_if_block_3(ctx);
	let if_block1 = !/*single*/ ctx[1] && !/*combined*/ ctx[3] && create_if_block_2(ctx);
	let if_block2 = /*single*/ ctx[1] && create_if_block_1(ctx);
	let if_block3 = /*combined*/ ctx[3] && create_if_block(ctx);

	const block = {
		c: function create() {
			div = element("div");
			if (if_block0) if_block0.c();
			t0 = space();
			ul = element("ul");
			if (if_block1) if_block1.c();
			t1 = space();
			if (if_block2) if_block2.c();
			t2 = space();
			if (if_block3) if_block3.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { id: true });
			var div_nodes = children(div);
			if (if_block0) if_block0.l(div_nodes);
			t0 = claim_space(div_nodes);
			ul = claim_element(div_nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			if (if_block1) if_block1.l(ul_nodes);
			t1 = claim_space(ul_nodes);
			if (if_block2) if_block2.l(ul_nodes);
			t2 = claim_space(ul_nodes);
			if (if_block3) if_block3.l(ul_nodes);
			ul_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(ul, "class", "svelte-1sngiaw");
			add_location(ul, file$1, 10, 1, 197);
			attr_dev(div, "id", "card");
			add_location(div, file$1, 6, 0, 126);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			if (if_block0) if_block0.m(div, null);
			append_dev(div, t0);
			append_dev(div, ul);
			if (if_block1) if_block1.m(ul, null);
			append_dev(ul, t1);
			if (if_block2) if_block2.m(ul, null);
			append_dev(ul, t2);
			if (if_block3) if_block3.m(ul, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!/*single*/ ctx[1] && !/*combined*/ ctx[3]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);
				} else {
					if_block0 = create_if_block_3(ctx);
					if_block0.c();
					if_block0.m(div, t0);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (!/*single*/ ctx[1] && !/*combined*/ ctx[3]) {
				if (if_block1) {
					if (dirty & /*single, combined*/ 10) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block_2(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(ul, t1);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (/*single*/ ctx[1]) {
				if (if_block2) {
					if_block2.p(ctx, dirty);

					if (dirty & /*single*/ 2) {
						transition_in(if_block2, 1);
					}
				} else {
					if_block2 = create_if_block_1(ctx);
					if_block2.c();
					transition_in(if_block2, 1);
					if_block2.m(ul, t2);
				}
			} else if (if_block2) {
				group_outros();

				transition_out(if_block2, 1, 1, () => {
					if_block2 = null;
				});

				check_outros();
			}

			if (/*combined*/ ctx[3]) {
				if (if_block3) {
					if (dirty & /*combined*/ 8) {
						transition_in(if_block3, 1);
					}
				} else {
					if_block3 = create_if_block(ctx);
					if_block3.c();
					transition_in(if_block3, 1);
					if_block3.m(ul, null);
				}
			} else if (if_block3) {
				group_outros();

				transition_out(if_block3, 1, 1, () => {
					if_block3 = null;
				});

				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block1);
			transition_in(if_block2);
			transition_in(if_block3);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block1);
			transition_out(if_block2);
			transition_out(if_block3);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
			if (if_block3) if_block3.d();
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
	let { title } = $$props,
		{ single } = $$props,
		{ name } = $$props,
		{ icon } = $$props,
		{ combined } = $$props;

	const writable_props = ["title", "single", "name", "icon", "combined"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<SupportCard> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("SupportCard", $$slots, []);

	$$self.$set = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("single" in $$props) $$invalidate(1, single = $$props.single);
		if ("name" in $$props) $$invalidate(2, name = $$props.name);
		if ("icon" in $$props) $$invalidate(4, icon = $$props.icon);
		if ("combined" in $$props) $$invalidate(3, combined = $$props.combined);
	};

	$$self.$capture_state = () => ({
		SupportCardItem,
		title,
		single,
		name,
		icon,
		combined
	});

	$$self.$inject_state = $$props => {
		if ("title" in $$props) $$invalidate(0, title = $$props.title);
		if ("single" in $$props) $$invalidate(1, single = $$props.single);
		if ("name" in $$props) $$invalidate(2, name = $$props.name);
		if ("icon" in $$props) $$invalidate(4, icon = $$props.icon);
		if ("combined" in $$props) $$invalidate(3, combined = $$props.combined);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [title, single, name, combined, icon];
}

class SupportCard extends SvelteComponentDev {
	constructor(options) {
		super(options);

		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
			title: 0,
			single: 1,
			name: 2,
			icon: 4,
			combined: 3
		});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "SupportCard",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*title*/ ctx[0] === undefined && !("title" in props)) {
			console.warn("<SupportCard> was created without expected prop 'title'");
		}

		if (/*single*/ ctx[1] === undefined && !("single" in props)) {
			console.warn("<SupportCard> was created without expected prop 'single'");
		}

		if (/*name*/ ctx[2] === undefined && !("name" in props)) {
			console.warn("<SupportCard> was created without expected prop 'name'");
		}

		if (/*icon*/ ctx[4] === undefined && !("icon" in props)) {
			console.warn("<SupportCard> was created without expected prop 'icon'");
		}

		if (/*combined*/ ctx[3] === undefined && !("combined" in props)) {
			console.warn("<SupportCard> was created without expected prop 'combined'");
		}
	}

	get title() {
		throw new Error("<SupportCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<SupportCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get single() {
		throw new Error("<SupportCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set single(value) {
		throw new Error("<SupportCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get name() {
		throw new Error("<SupportCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set name(value) {
		throw new Error("<SupportCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get icon() {
		throw new Error("<SupportCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set icon(value) {
		throw new Error("<SupportCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get combined() {
		throw new Error("<SupportCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set combined(value) {
		throw new Error("<SupportCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/support.svelte generated by Svelte v3.22.2 */
const file$2 = "src/routes/support.svelte";

function create_fragment$2(ctx) {
	let t0;
	let t1;
	let div;
	let t2;
	let t3;
	let t4;
	let h5;
	let t5;
	let t6;
	let current;

	const navbar = new Navbar({
			props: { title: "Support" },
			$$inline: true
		});

	const supportcard0 = new SupportCard({
			props: { title: "Recent Products" },
			$$inline: true
		});

	const supportcard1 = new SupportCard({
			props: { single: "true", name: "Configure app" },
			$$inline: true
		});

	const supportcard2 = new SupportCard({
			props: { combined: "true", name: "Configure app" },
			$$inline: true
		});

	const tabbar = new Tabbar({ props: { location: 5 }, $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(navbar.$$.fragment);
			t1 = space();
			div = element("div");
			create_component(supportcard0.$$.fragment);
			t2 = space();
			create_component(supportcard1.$$.fragment);
			t3 = space();
			create_component(supportcard2.$$.fragment);
			t4 = space();
			h5 = element("h5");
			t5 = text("rohanharikr/commit vesion");
			t6 = space();
			create_component(tabbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-e77f2z\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(navbar.$$.fragment, nodes);
			t1 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { id: true, class: true });
			var div_nodes = children(div);
			claim_component(supportcard0.$$.fragment, div_nodes);
			t2 = claim_space(div_nodes);
			claim_component(supportcard1.$$.fragment, div_nodes);
			t3 = claim_space(div_nodes);
			claim_component(supportcard2.$$.fragment, div_nodes);
			t4 = claim_space(div_nodes);
			h5 = claim_element(div_nodes, "H5", { class: true });
			var h5_nodes = children(h5);
			t5 = claim_text(h5_nodes, "rohanharikr/commit vesion");
			h5_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			claim_component(tabbar.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Support :: Steam Mobile";
			attr_dev(h5, "class", "svelte-16drkxf");
			add_location(h5, file$2, 15, 1, 447);
			attr_dev(div, "id", "support");
			attr_dev(div, "class", "svelte-16drkxf");
			add_location(div, file$2, 11, 0, 280);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(navbar, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div, anchor);
			mount_component(supportcard0, div, null);
			append_dev(div, t2);
			mount_component(supportcard1, div, null);
			append_dev(div, t3);
			mount_component(supportcard2, div, null);
			append_dev(div, t4);
			append_dev(div, h5);
			append_dev(h5, t5);
			insert_dev(target, t6, anchor);
			mount_component(tabbar, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(navbar.$$.fragment, local);
			transition_in(supportcard0.$$.fragment, local);
			transition_in(supportcard1.$$.fragment, local);
			transition_in(supportcard2.$$.fragment, local);
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navbar.$$.fragment, local);
			transition_out(supportcard0.$$.fragment, local);
			transition_out(supportcard1.$$.fragment, local);
			transition_out(supportcard2.$$.fragment, local);
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(navbar, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div);
			destroy_component(supportcard0);
			destroy_component(supportcard1);
			destroy_component(supportcard2);
			if (detaching) detach_dev(t6);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Support> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Support", $$slots, []);
	$$self.$capture_state = () => ({ Navbar, Tabbar, SupportCard });
	return [];
}

class Support extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Support",
			options,
			id: create_fragment$2.name
		});
	}
}

export default Support;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VwcG9ydC44MDFiNzM1Yy5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvU3VwcG9ydENhcmRJdGVtLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N1cHBvcnRDYXJkLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3VwcG9ydC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBuYW1lLCBsb2dvLCBoZWlnaHQ7XG48L3NjcmlwdD5cblxuPGltZyBzcmM9XCJ7bG9nb31cIiBzdHlsZT1cImhlaWdodDp7aGVpZ2h0fVwiIC8+e25hbWV9XG5cbjxzdHlsZT5cblx0aW1nIHtcblx0XHRoZWlnaHQ6IDQycHg7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxNnB4O1xuXHR9XG48L3N0eWxlPiIsIjxzY3JpcHQ+XG5cdGltcG9ydCBTdXBwb3J0Q2FyZEl0ZW0gZnJvbSAnLi9TdXBwb3J0Q2FyZEl0ZW0uc3ZlbHRlJ1xuXG5cdGV4cG9ydCBsZXQgdGl0bGUsIHNpbmdsZSwgbmFtZSwgaWNvbiwgY29tYmluZWQ7XG48L3NjcmlwdD5cblxuPGRpdiBpZD1cImNhcmRcIj5cblx0eyNpZiAhc2luZ2xlICYmICFjb21iaW5lZH1cblx0XHQ8aDM+e3RpdGxlfTwvaDM+XG5cdHsvaWZ9XG5cdDx1bD5cblx0XHR7I2lmICFzaW5nbGUgJiYgIWNvbWJpbmVkfVxuXHRcdFx0PGxpPjxTdXBwb3J0Q2FyZEl0ZW0gbmFtZT1cIkRvdGEgMlwiIGxvZ289XCJkb3RhMi5zdmdcIiAvPjwvbGk+XG5cdFx0XHQ8bGk+PFN1cHBvcnRDYXJkSXRlbSBuYW1lPVwiU3RhcmRldyBWYWxsZXlcIiBsb2dvPVwic3RhcmRld3ZhbGxleS5zdmdcIi8+PC9saT5cblx0XHRcdDxsaT48U3VwcG9ydENhcmRJdGVtIG5hbWU9XCJIYWxmLUxpZmU6IEFseXhcIiBsb2dvPVwiaGFsZmxpZmVhbHl4LnN2Z1wiIC8+PC9saT5cblx0XHR7L2lmfVxuXHRcdHsjaWYgc2luZ2xlfVxuXHRcdFx0PGxpPjxTdXBwb3J0Q2FyZEl0ZW0ge25hbWV9IGxvZ289XCJjb25maWd1cmUuc3ZnXCIgLz48L2xpPlxuXHRcdHsvaWZ9XG5cdFx0eyNpZiBjb21iaW5lZH1cblx0XHRcdDxsaT48U3VwcG9ydENhcmRJdGVtIG5hbWU9XCJHYW1lcywgU29mdHdhcmUsIGV0Yy5cIiBsb2dvPVwiZ2FtZXMuc3ZnXCIgLz48L2xpPlxuXHRcdFx0PGxpPjxTdXBwb3J0Q2FyZEl0ZW0gbmFtZT1cIlB1Y2hhc2VzXCIgbG9nbz1cInB1cmNoYXNlcy5zdmdcIi8+PC9saT5cblx0XHRcdDxsaT48U3VwcG9ydENhcmRJdGVtIG5hbWU9XCJNeSBBY2NvdW50XCIgbG9nbz1cIm15YWNjb3VudC5zdmdcIiAvPjwvbGk+XG5cdFx0XHQ8bGk+PFN1cHBvcnRDYXJkSXRlbSBuYW1lPVwiVHJhZGluZywgR2lmdGluZywgSXRlbXMsIENvbW11bml0eSBNYXJrZXRcIiBsb2dvPVwidHJhZGluZy5zdmdcIiAvPjwvbGk+XG5cdFx0XHQ8bGk+PFN1cHBvcnRDYXJkSXRlbSBuYW1lPVwiU3RlYW0gQ29tbXVuaXR5XCIgbG9nbz1cImNvbW11bml0eS5zdmdcIiAvPjwvbGk+XG5cdFx0ey9pZn1cblx0PC91bD5cbjwvZGl2PlxuXG48c3R5bGU+XG5cdGgze1xuXHRcdGNvbG9yOiAjYTdkNmYwO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0cGFkZGluZzogMHB4IDMwcHg7XG5cdH1cblxuXHR1bHtcblx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdHBhZGRpbmc6IDBweCAzMHB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwZjBiMjA7XG5cdH1cblxuXHR1bCBsaXtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMTZweCAwcHg7XG5cdH1cbjwvc3R5bGU+IiwiPHNjcmlwdD5cblx0aW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdmJhci5zdmVsdGUnO1xuXHRpbXBvcnQgVGFiYmFyIGZyb20gJy4uL2NvbXBvbmVudHMvVGFiYmFyLnN2ZWx0ZSc7XG5cdGltcG9ydCBTdXBwb3J0Q2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1N1cHBvcnRDYXJkLnN2ZWx0ZSc7XG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U3VwcG9ydCA6OiBTdGVhbSBNb2JpbGU8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPE5hdmJhciB0aXRsZT1cIlN1cHBvcnRcIiAvPlxuPGRpdiBpZD1cInN1cHBvcnRcIj5cblx0PFN1cHBvcnRDYXJkIHRpdGxlPVwiUmVjZW50IFByb2R1Y3RzXCIgLz5cblx0PFN1cHBvcnRDYXJkIHNpbmdsZT1cInRydWVcIiBuYW1lPVwiQ29uZmlndXJlIGFwcFwiIC8+XG5cdDxTdXBwb3J0Q2FyZCBjb21iaW5lZD1cInRydWVcIiBuYW1lPVwiQ29uZmlndXJlIGFwcFwiIC8+XG5cdDxoNT5yb2hhbmhhcmlrci9jb21taXQgdmVzaW9uPC9oNT5cbjwvZGl2PlxuPFRhYmJhciBsb2NhdGlvbj17NX0gLz5cblxuPHN0eWxlPlxuXHQjc3VwcG9ydHtcblx0XHRwYWRkaW5nOiA5MHB4IDBweDtcblx0XHRwYWRkaW5nLXJpZ2h0OiAwO1xuXHRcdHBhZGRpbmctYm90dG9tOiA4MHB4O1xuXHR9XG5cblx0aDV7XG5cdFx0cGFkZGluZzogMCAzMHB4O1xuXHRcdGNvbG9yOiAjOTA5OWExO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztxQkFJNkMsR0FBSTs7Ozs7a0NBQUosR0FBSTs7Ozs2Q0FBdEMsR0FBSTt1Q0FBa0IsR0FBTTs7Ozs7Ozs7O21FQUE1QixHQUFJOzs7Ozt3Q0FBa0IsR0FBTTs7O29EQUFNLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FIckMsSUFBSSxnQkFBRSxJQUFJLGdCQUFFLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQ092QixHQUFLOzs7Ozs7c0NBQUwsR0FBSzs7Ozs7Ozs7Ozs7OztzREFBTCxHQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBREwsR0FBTSxxQkFBSyxHQUFROzZCQUlsQixHQUFNLHFCQUFLLEdBQVE7NEJBS3BCLEdBQU07OEJBR04sR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBWlIsR0FBTSxxQkFBSyxHQUFROzs7Ozs7Ozs7Ozs7O21CQUlsQixHQUFNLHFCQUFLLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFLcEIsR0FBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBR04sR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWhCSCxLQUFLO0lBQUUsTUFBTTtJQUFFLElBQUk7SUFBRSxJQUFJO0lBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dEQ2M3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
