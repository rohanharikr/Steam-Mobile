import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, c as create_component, e as element, t as text, q as query_selector_all, b as detach_dev, f as claim_space, g as claim_component, h as claim_element, j as children, k as claim_text, l as attr_dev, n as add_location, p as insert_dev, r as mount_component, u as append_dev, B as noop, y as transition_in, z as transition_out, A as destroy_component } from './client.9eb3b67e.js';
import { N as Navbar, T as Tabbar } from './Tabbar.1d472805.js';

/* src/routes/profile.svelte generated by Svelte v3.22.2 */
const file = "src/routes/profile.svelte";

function create_fragment(ctx) {
	let t0;
	let t1;
	let div5;
	let div1;
	let img;
	let img_src_value;
	let t2;
	let div0;
	let h2;
	let t3;
	let t4;
	let h3;
	let t5;
	let t6;
	let div2;
	let t7;
	let div3;
	let t8;
	let div4;
	let t9;
	let current;

	const navbar = new Navbar({
			props: { title: "Profile" },
			$$inline: true
		});

	const tabbar = new Tabbar({ props: { location: 2 }, $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(navbar.$$.fragment);
			t1 = space();
			div5 = element("div");
			div1 = element("div");
			img = element("img");
			t2 = space();
			div0 = element("div");
			h2 = element("h2");
			t3 = text("thoran");
			t4 = space();
			h3 = element("h3");
			t5 = text("Rohan Harikumar");
			t6 = space();
			div2 = element("div");
			t7 = space();
			div3 = element("div");
			t8 = space();
			div4 = element("div");
			t9 = space();
			create_component(tabbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-196mgmx\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(navbar.$$.fragment, nodes);
			t1 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { id: true, class: true });
			var div5_nodes = children(div5);
			div1 = claim_element(div5_nodes, "DIV", { id: true, class: true });
			var div1_nodes = children(div1);
			img = claim_element(div1_nodes, "IMG", { id: true, src: true, class: true });
			t2 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { id: true, class: true });
			var div0_nodes = children(div0);
			h2 = claim_element(div0_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, "thoran");
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			h3 = claim_element(div0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t5 = claim_text(h3_nodes, "Rohan Harikumar");
			h3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t6 = claim_space(div5_nodes);
			div2 = claim_element(div5_nodes, "DIV", { id: true });
			children(div2).forEach(detach_dev);
			t7 = claim_space(div5_nodes);
			div3 = claim_element(div5_nodes, "DIV", { id: true });
			children(div3).forEach(detach_dev);
			t8 = claim_space(div5_nodes);
			div4 = claim_element(div5_nodes, "DIV", { id: true });
			children(div4).forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			claim_component(tabbar.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Profile :: Steam Mobile";
			attr_dev(img, "id", "profilepicture");
			if (img.src !== (img_src_value = "profilepicture.jpg")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "svelte-10530ck");
			add_location(img, file, 12, 2, 256);
			attr_dev(h2, "class", "svelte-10530ck");
			add_location(h2, file, 14, 3, 334);
			attr_dev(h3, "class", "svelte-10530ck");
			add_location(h3, file, 15, 3, 353);
			attr_dev(div0, "id", "maininfo");
			attr_dev(div0, "class", "svelte-10530ck");
			add_location(div0, file, 13, 2, 311);
			attr_dev(div1, "id", "top");
			attr_dev(div1, "class", "svelte-10530ck");
			add_location(div1, file, 11, 1, 239);
			attr_dev(div2, "id", "level");
			add_location(div2, file, 18, 1, 396);
			attr_dev(div3, "id", "level");
			add_location(div3, file, 19, 1, 420);
			attr_dev(div4, "id", "level");
			add_location(div4, file, 20, 1, 444);
			attr_dev(div5, "id", "profile");
			attr_dev(div5, "class", "svelte-10530ck");
			add_location(div5, file, 10, 0, 219);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(navbar, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div5, anchor);
			append_dev(div5, div1);
			append_dev(div1, img);
			append_dev(div1, t2);
			append_dev(div1, div0);
			append_dev(div0, h2);
			append_dev(h2, t3);
			append_dev(div0, t4);
			append_dev(div0, h3);
			append_dev(h3, t5);
			append_dev(div5, t6);
			append_dev(div5, div2);
			append_dev(div5, t7);
			append_dev(div5, div3);
			append_dev(div5, t8);
			append_dev(div5, div4);
			insert_dev(target, t9, anchor);
			mount_component(tabbar, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(navbar.$$.fragment, local);
			transition_in(tabbar.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navbar.$$.fragment, local);
			transition_out(tabbar.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			destroy_component(navbar, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(div5);
			if (detaching) detach_dev(t9);
			destroy_component(tabbar, detaching);
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
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Profile> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Profile", $$slots, []);
	$$self.$capture_state = () => ({ Navbar, Tabbar });
	return [];
}

class Profile extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Profile",
			options,
			id: create_fragment.name
		});
	}
}

export default Profile;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5lNGFjM2Q3Ny5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9wcm9maWxlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyLnN2ZWx0ZSc7XG5cdGltcG9ydCBUYWJiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiYXIuc3ZlbHRlJztcbjwvc2NyaXB0PlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Qcm9maWxlIDo6IFN0ZWFtIE1vYmlsZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48TmF2YmFyIHRpdGxlPVwiUHJvZmlsZVwiIC8+XG48ZGl2IGlkPVwicHJvZmlsZVwiPlxuXHQ8ZGl2IGlkPVwidG9wXCI+XG5cdFx0PGltZyBpZD1cInByb2ZpbGVwaWN0dXJlXCIgc3JjPVwicHJvZmlsZXBpY3R1cmUuanBnXCIgLz5cblx0XHQ8ZGl2IGlkPVwibWFpbmluZm9cIj5cblx0XHRcdDxoMj50aG9yYW48L2gyPlxuXHRcdFx0PGgzPlJvaGFuIEhhcmlrdW1hcjwvaDM+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8ZGl2IGlkPVwibGV2ZWxcIj48L2Rpdj5cblx0PGRpdiBpZD1cImxldmVsXCI+PC9kaXY+XG5cdDxkaXYgaWQ9XCJsZXZlbFwiPjwvZGl2PlxuPC9kaXY+XG48VGFiYmFyIGxvY2F0aW9uPXsyfSAvPlxuXG48c3R5bGU+XG5cdCNwcm9maWxle1xuXHRcdHBhZGRpbmctYm90dG9tOiA2MHB4O1xuXHR9XG5cblx0I3Byb2ZpbGVwaWN0dXJlIHtcblx0XHRib3JkZXI6IDFweCBzb2xpZCAjNEI5MEFCO1xuXHRcdGhlaWdodDogOTBweDtcblx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdH1cblxuXHQjdG9we1xuXHRcdG1hcmdpbi10b3A6IDQwcHg7XG5cdFx0cGFkZGluZzogNTBweCAzMHB4O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9zdGVhbWNkbi1hLmFrYW1haWhkLm5ldC9zdGVhbWNvbW11bml0eS9wdWJsaWMvaW1hZ2VzL2l0ZW1zLzczMC9lZjdjYjQ0ZDMxMmRmNTAzOGNiYTBmNjlhMDkwMWRhNDI3OTAwNjQ1LmpwZyk7XG5cdFx0aGVpZ2h0OiAxMDBweDtcbiAgICBcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIFx0YmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIFx0cGFkZGluZy1ib3R0b206IDIwcHg7XG5cdH1cblxuXHRoMntcblx0XHRmb250LXdlaWdodDogNjAwO1xuXHR9XG5cblx0aDN7XG5cdFx0b3BhY2l0eTogMC44O1xuXHR9XG5cblx0aDIsIGgzIHtcblx0XHRsaW5lLWhlaWdodDogMTtcblx0fVxuXG5cdCNtYWluaW5mbyB7XG5cdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RBc0JrQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
