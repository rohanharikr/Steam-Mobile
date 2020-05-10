import { w as writable, S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, o as onDestroy, a as space, c as create_component, e as element, t as text, q as query_selector_all, b as detach_dev, f as claim_space, g as claim_component, h as claim_element, j as children, k as claim_text, l as attr_dev, m as set_style, n as add_location, p as insert_dev, r as mount_component, u as append_dev, x as set_data_dev, y as transition_in, z as transition_out, A as destroy_component } from './client.d9d945f6.js';
import { N as Navbar, T as Tabbar } from './Tabbar.a50eb5da.js';

const username = writable(0);

/* src/routes/index.svelte generated by Svelte v3.22.2 */
const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let t1;
	let div2;
	let div0;
	let t2;
	let div1;
	let t3;
	let t4;
	let div3;
	let t5;
	let t6;
	let current;

	const navbar = new Navbar({
			props: { title: "Steam Guard" },
			$$inline: true
		});

	const tabbar = new Tabbar({ props: { location: 3 }, $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			create_component(navbar.$$.fragment);
			t1 = space();
			div2 = element("div");
			div0 = element("div");
			t2 = space();
			div1 = element("div");
			t3 = text(/*code*/ ctx[0]);
			t4 = space();
			div3 = element("div");
			t5 = text(username);
			t6 = space();
			create_component(tabbar.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-uh0s2l\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(navbar.$$.fragment, nodes);
			t1 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { id: true, class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { id: true, style: true, class: true });
			children(div0).forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { id: true, style: true, class: true });
			var div1_nodes = children(div1);
			t3 = claim_text(div1_nodes, /*code*/ ctx[0]);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", {});
			var div3_nodes = children(div3);
			t5 = claim_text(div3_nodes, username);
			div3_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			claim_component(tabbar.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Guard :: Steam Mobile";
			attr_dev(div0, "id", "timerbar");
			set_style(div0, "width", 100 - /*percentage*/ ctx[1] * 10 + "%");

			set_style(div0, "background-image", /*percentage*/ ctx[1] >= 7
			? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
			: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)");

			attr_dev(div0, "class", "svelte-1d8lf8y");
			add_location(div0, file, 46, 1, 835);
			attr_dev(div1, "id", "code");
			set_style(div1, "color", /*percentage*/ ctx[1] >= 7 ? "#AD2821" : "white");
			attr_dev(div1, "class", "svelte-1d8lf8y");
			add_location(div1, file, 47, 1, 1084);
			attr_dev(div2, "id", "guard");
			attr_dev(div2, "class", "svelte-1d8lf8y");
			add_location(div2, file, 45, 0, 817);
			add_location(div3, file, 49, 0, 1173);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			mount_component(navbar, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div0);
			append_dev(div2, t2);
			append_dev(div2, div1);
			append_dev(div1, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, t5);
			insert_dev(target, t6, anchor);
			mount_component(tabbar, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*percentage*/ 2) {
				set_style(div0, "width", 100 - /*percentage*/ ctx[1] * 10 + "%");
			}

			if (!current || dirty & /*percentage*/ 2) {
				set_style(div0, "background-image", /*percentage*/ ctx[1] >= 7
				? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
				: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)");
			}

			if (!current || dirty & /*code*/ 1) set_data_dev(t3, /*code*/ ctx[0]);

			if (!current || dirty & /*percentage*/ 2) {
				set_style(div1, "color", /*percentage*/ ctx[1] >= 7 ? "#AD2821" : "white");
			}
		},
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
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(div3);
			if (detaching) detach_dev(t6);
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

	let count_value;

	const unsubscribe = count.subscribe(value => {
		count_value = value;
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);

	$$self.$capture_state = () => ({
		Navbar,
		Tabbar,
		onDestroy,
		username,
		code,
		percentage,
		onInterval,
		codegen,
		count_value,
		unsubscribe
	});

	$$self.$inject_state = $$props => {
		if ("code" in $$props) $$invalidate(0, code = $$props.code);
		if ("percentage" in $$props) $$invalidate(1, percentage = $$props.percentage);
		if ("count_value" in $$props) count_value = $$props.count_value;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [code, percentage];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjYyZjc2NjUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3RvcmVzLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuZXhwb3J0IGNvbnN0IHVzZXJuYW1lID0gd3JpdGFibGUoMCk7XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyLnN2ZWx0ZSc7XG5cdGltcG9ydCBUYWJiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiYXIuc3ZlbHRlJztcblx0aW1wb3J0IHsgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgdXNlcm5hbWUgfSBmcm9tICcuL3N0b3Jlcy5qcyc7XG5cblx0bGV0IGNvZGUgPSA3MjgyNjtcblx0bGV0IHBlcmNlbnRhZ2UgPSAwO1xuXG5cdGZ1bmN0aW9uIG9uSW50ZXJ2YWwoY2FsbGJhY2ssIHRpbWUpIHtcblx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGNhbGxiYWNrLCB0aW1lKTtcblxuXHRcdG9uRGVzdHJveSgoKSA9PiB7XG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0fSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gY29kZWdlbigpIHtcblx0XHRjb2RlID0gKCBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgtNSkgKS50b1VwcGVyQ2FzZSgpO1xuXHR9XG5cdFxuXHRvbkludGVydmFsKFxuXHRcdGZ1bmN0aW9uIGNoZWNrKCl7XG5cdFx0XHRpZiAocGVyY2VudGFnZSA8IDkpe1xuXHRcdFx0XHQrK3BlcmNlbnRhZ2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwZXJjZW50YWdlID0gMDtcblx0XHRcdFx0Y29kZWdlbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0LCAxMDAwKTtcblxuXHRsZXQgY291bnRfdmFsdWU7XG5cblx0Y29uc3QgdW5zdWJzY3JpYmUgPSBjb3VudC5zdWJzY3JpYmUodmFsdWUgPT4ge1xuXHRcdGNvdW50X3ZhbHVlID0gdmFsdWU7XG5cdH0pO1xuXG48L3NjcmlwdD5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+R3VhcmQgOjogU3RlYW0gTW9iaWxlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxOYXZiYXIgdGl0bGU9XCJTdGVhbSBHdWFyZFwiIC8+XG48ZGl2IGlkPVwiZ3VhcmRcIj5cblx0PGRpdiBpZD1cInRpbWVyYmFyXCIgc3R5bGU9XCJ3aWR0aDogezEwMCAtIHBlcmNlbnRhZ2UqMTB9JTsgYmFja2dyb3VuZC1pbWFnZToge3BlcmNlbnRhZ2UgPj03ID8gJ2xpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEoMTczLDQwLDMzLDEpIDAlLCByZ2JhKDE3Myw0MCwzMywxKSAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDE0NWRlZywgcmdiYSgwLDAsMjU1LDEpIDAlLCByZ2JhKDE2Myw2OCwyMDEsMSkgMTAwJSknfTtcIj48L2Rpdj5cblx0PGRpdiBpZD1cImNvZGVcIiBzdHlsZT1cImNvbG9yOiB7cGVyY2VudGFnZSA+PTcgPyAnI0FEMjgyMScgOiAnd2hpdGUnfVwiPntjb2RlfTwvZGl2PlxuPC9kaXY+XG48ZGl2Pnt1c2VybmFtZX08L2Rpdj5cbjxUYWJiYXIgbG9jYXRpb249ezN9IC8+XG5cbjxzdHlsZT5cblx0I2d1YXJkIHtcblx0XHRwYWRkaW5nOiAxMDBweCAzMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiA2MHB4O1xuXHR9XG5cblx0I2NvZGUge1xuXHRcdGZvbnQtc2l6ZTogNTJweDtcblx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRsZXR0ZXItc3BhY2luZzogNHB4O1xuXHRcdHRyYW5zaXRpb246IDAuNXM7XG5cdH1cblxuXHQjdGltZXJiYXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtaW4taGVpZ2h0OiA4cHg7XG4gICAgdG9wOiA5MHB4O1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuXHR9XG48L3N0eWxlPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNPLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnRENpRGpCLENBQUM7Ozs7Ozs7Ozs7O3NCQUhvRCxHQUFJOzs7YUFFckUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dDQUZ5RCxHQUFJOzs7Ozs7K0JBRXJFLFFBQVE7Ozs7Ozs7Ozs0QkFIcUIsR0FBRyxrQkFBRyxHQUFVLE1BQUMsRUFBRTs7c0RBQXVCLEdBQVUsT0FBRyxDQUFDO0tBQUcsdUVBQXVFO0tBQUcsc0VBQXNFOzs7OzsyQ0FDL00sR0FBVSxPQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRGhDLEdBQUcsa0JBQUcsR0FBVSxNQUFDLEVBQUU7Ozs7dURBQXVCLEdBQVUsT0FBRyxDQUFDO01BQUcsdUVBQXVFO01BQUcsc0VBQXNFOzs7aUVBQ3ZLLEdBQUk7Ozs0Q0FBNUMsR0FBVSxPQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F6QzlELElBQUksR0FBRyxLQUFLO0tBQ1osVUFBVSxHQUFHLENBQUM7O1VBRVQsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJO1FBQzNCLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUk7O0VBRTNDLFNBQVM7R0FDVCxhQUFhLENBQUMsUUFBUTs7Ozs7O1VBSWQsT0FBTztrQkFDZixJQUFJLEdBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUksV0FBVzs7O0NBRzVELFVBQVU7V0FDQSxLQUFLO09BQ1QsVUFBVSxHQUFHLENBQUM7c0JBQ2YsVUFBVTs7b0JBRVosVUFBVSxHQUFHLENBQUM7SUFDZCxPQUFPOzs7RUFHUixJQUFJOzs7S0FFRixXQUFXOztPQUVULFdBQVcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUs7RUFDeEMsV0FBVyxHQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
