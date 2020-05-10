import { w as writable, S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, o as onDestroy, a as space, c as create_component, e as element, t as text, q as query_selector_all, b as detach_dev, f as claim_space, g as claim_component, h as claim_element, j as children, k as claim_text, l as attr_dev, m as set_style, n as add_location, p as insert_dev, r as mount_component, u as append_dev, x as set_data_dev, y as transition_in, z as transition_out, A as destroy_component } from './client.07a2c352.js';
import { N as Navbar, T as Tabbar } from './Tabbar.f3fc1f88.js';

const username = writable("thoran");

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
			t5 = text(username_value);
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
			t5 = claim_text(div3_nodes, username_value);
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
			add_location(div0, file, 46, 1, 855);
			attr_dev(div1, "id", "code");
			set_style(div1, "color", /*percentage*/ ctx[1] >= 7 ? "#AD2821" : "white");
			attr_dev(div1, "class", "svelte-1d8lf8y");
			add_location(div1, file, 47, 1, 1104);
			attr_dev(div2, "id", "guard");
			attr_dev(div2, "class", "svelte-1d8lf8y");
			add_location(div2, file, 45, 0, 837);
			add_location(div3, file, 49, 0, 1193);
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
		codegen
	});

	$$self.$inject_state = $$props => {
		if ("code" in $$props) $$invalidate(0, code = $$props.code);
		if ("percentage" in $$props) $$invalidate(1, percentage = $$props.percentage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZWMwMzQ1MzEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvc3RvcmVzLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgdXNlcm5hbWUgPSB3cml0YWJsZShcInRob3JhblwiKTsiLCI8c2NyaXB0PlxuXHRpbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2YmFyLnN2ZWx0ZSc7XG5cdGltcG9ydCBUYWJiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9UYWJiYXIuc3ZlbHRlJztcblx0aW1wb3J0IHsgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgdXNlcm5hbWUgfSBmcm9tICcuL3N0b3Jlcy5qcyc7XG5cblx0bGV0IGNvZGUgPSA3MjgyNjtcblx0bGV0IHBlcmNlbnRhZ2UgPSAwO1xuXG5cdGZ1bmN0aW9uIG9uSW50ZXJ2YWwoY2FsbGJhY2ssIHRpbWUpIHtcblx0XHRjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGNhbGxiYWNrLCB0aW1lKTtcblxuXHRcdG9uRGVzdHJveSgoKSA9PiB7XG5cdFx0Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG5cdFx0fSk7XG5cdH07XG5cblx0ZnVuY3Rpb24gY29kZWdlbigpIHtcblx0XHRjb2RlID0gKCBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgtNSkgKS50b1VwcGVyQ2FzZSgpO1xuXHR9XG5cdFxuXHRvbkludGVydmFsKFxuXHRcdGZ1bmN0aW9uIGNoZWNrKCl7XG5cdFx0XHRpZiAocGVyY2VudGFnZSA8IDkpe1xuXHRcdFx0XHQrK3BlcmNlbnRhZ2U7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwZXJjZW50YWdlID0gMDtcblx0XHRcdFx0Y29kZWdlbigpO1xuXHRcdFx0fVxuXHRcdH1cblx0LCAxMDAwKTtcblxuLy8gbGV0IHVzZXJuYW1lX3ZhbHVlO1xuXG4vLyBcdGNvbnN0IHVuc3Vic2NyaWJlID0gdXNlcm5hbWUuc3Vic2NyaWJlKHZhbHVlID0+IHtcbi8vIFx0XHR1c2VybmFtZV92YWx1ZSA9IHZhbHVlO1xuLy8gXHR9KTtcblxuPC9zY3JpcHQ+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkd1YXJkIDo6IFN0ZWFtIE1vYmlsZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48TmF2YmFyIHRpdGxlPVwiU3RlYW0gR3VhcmRcIiAvPlxuPGRpdiBpZD1cImd1YXJkXCI+XG5cdDxkaXYgaWQ9XCJ0aW1lcmJhclwiIHN0eWxlPVwid2lkdGg6IHsxMDAgLSBwZXJjZW50YWdlKjEwfSU7IGJhY2tncm91bmQtaW1hZ2U6IHtwZXJjZW50YWdlID49NyA/ICdsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2JhKDE3Myw0MCwzMywxKSAwJSwgcmdiYSgxNzMsNDAsMzMsMSkgMTAwJSknIDogJ2xpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEoMCwwLDI1NSwxKSAwJSwgcmdiYSgxNjMsNjgsMjAxLDEpIDEwMCUpJ307XCI+PC9kaXY+XG5cdDxkaXYgaWQ9XCJjb2RlXCIgc3R5bGU9XCJjb2xvcjoge3BlcmNlbnRhZ2UgPj03ID8gJyNBRDI4MjEnIDogJ3doaXRlJ31cIj57Y29kZX08L2Rpdj5cbjwvZGl2PlxuPGRpdj57dXNlcm5hbWVfdmFsdWV9PC9kaXY+XG48VGFiYmFyIGxvY2F0aW9uPXszfSAvPlxuXG48c3R5bGU+XG5cdCNndWFyZCB7XG5cdFx0cGFkZGluZzogMTAwcHggMzBweDtcblx0XHRwYWRkaW5nLWJvdHRvbTogNjBweDtcblx0fVxuXG5cdCNjb2RlIHtcblx0XHRmb250LXNpemU6IDUycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDQwMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0bGV0dGVyLXNwYWNpbmc6IDRweDtcblx0XHR0cmFuc2l0aW9uOiAwLjVzO1xuXHR9XG5cblx0I3RpbWVyYmFyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWluLWhlaWdodDogOHB4O1xuICAgIHRvcDogOTBweDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gICAgdHJhbnNpdGlvbjogMC41cztcblx0fVxuPC9zdHlsZT5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFTyxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0RDZ0R4QixDQUFDOzs7Ozs7Ozs7OztzQkFIb0QsR0FBSTs7O2FBRXJFLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FGbUQsR0FBSTs7Ozs7OytCQUVyRSxjQUFjOzs7Ozs7Ozs7NEJBSGUsR0FBRyxrQkFBRyxHQUFVLE1BQUMsRUFBRTs7c0RBQXVCLEdBQVUsT0FBRyxDQUFDO0tBQUcsdUVBQXVFO0tBQUcsc0VBQXNFOzs7OzsyQ0FDL00sR0FBVSxPQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBRGhDLEdBQUcsa0JBQUcsR0FBVSxNQUFDLEVBQUU7Ozs7dURBQXVCLEdBQVUsT0FBRyxDQUFDO01BQUcsdUVBQXVFO01BQUcsc0VBQXNFOzs7aUVBQ3ZLLEdBQUk7Ozs0Q0FBNUMsR0FBVSxPQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F6QzlELElBQUksR0FBRyxLQUFLO0tBQ1osVUFBVSxHQUFHLENBQUM7O1VBRVQsVUFBVSxDQUFDLFFBQVEsRUFBRSxJQUFJO1FBQzNCLFFBQVEsR0FBRyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUk7O0VBRTNDLFNBQVM7R0FDVCxhQUFhLENBQUMsUUFBUTs7Ozs7O1VBSWQsT0FBTztrQkFDZixJQUFJLEdBQUssSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUksV0FBVzs7O0NBRzVELFVBQVU7V0FDQSxLQUFLO09BQ1QsVUFBVSxHQUFHLENBQUM7c0JBQ2YsVUFBVTs7b0JBRVosVUFBVSxHQUFHLENBQUM7SUFDZCxPQUFPOzs7RUFHUixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
