'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function null_to_empty(value) {
    return value == null ? '' : value;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

const username = writable("bingotheslayer");

var route_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    username: username
});

/* src/components/Navbar.svelte generated by Svelte v3.22.2 */

const css = {
	code: "#navbar.svelte-l6bd8a{background-color:#0a1226;height:60px;display:flex;justify-content:space-between;align-items:center;padding:0px 30px;color:#9099a1;font-weight:500;position:fixed;top:0;left:0;right:0;z-index:998}",
	map: "{\"version\":3,\"file\":\"Navbar.svelte\",\"sources\":[\"Navbar.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let title;\\n</script>\\n\\n<div id=\\\"navbar\\\">\\n\\t<div><img src=\\\"search.svg\\\" /></div>\\n\\t<div>{title}</div>\\n\\t<div><img src=\\\"filter.svg\\\" height=\\\"12px;\\\" /></div>\\n</div>\\n\\n<style>\\n\\t#navbar {\\n\\t\\tbackground-color: #0a1226;\\n\\t\\theight: 60px;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0px 30px;\\n\\t\\tcolor: #9099a1;\\n\\t\\tfont-weight: 500;\\n\\t\\tposition: fixed;\\n\\t\\ttop: 0;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\tz-index: 998;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAWC,OAAO,cAAC,CAAC,AACR,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,GAAG,AACb,CAAC\"}"
};

const Navbar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	$$result.css.add(css);

	return `<div id="${"navbar"}" class="${"svelte-l6bd8a"}"><div><img src="${"search.svg"}"></div>
	<div>${escape(title)}</div>
	<div><img src="${"filter.svg"}" height="${"12px;"}"></div>
</div>`;
});

/* src/components/Tabbar.svelte generated by Svelte v3.22.2 */

const css$1 = {
	code: "#tabbar.svelte-quz69i.svelte-quz69i{background-color:#171a21;height:65px;display:flex;justify-content:space-between;align-items:center;padding:0px 30px;color:#9099a1;font-weight:500;position:fixed;bottom:0;left:0;right:0;z-index:999}.tabItem.svelte-quz69i.svelte-quz69i{display:flex;flex-direction:column;font-size:10px;align-items:center}.tabItem.svelte-quz69i img.svelte-quz69i{margin-bottom:6px}.selected.svelte-quz69i.svelte-quz69i{color:white}",
	map: "{\"version\":3,\"file\":\"Tabbar.svelte\",\"sources\":[\"Tabbar.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let location;\\n</script>\\n\\n<div id=\\\"tabbar\\\">\\n\\t<a href=\\\"store\\\">\\n\\t\\t<div class=\\\"tabItem {location === 1 ? 'selected' : ''}\\\"><img src={location == 1 ? 'storewhite.svg' : 'store.svg'} />Store</div>\\n\\t</a>\\n\\t<a href=\\\"profile\\\">\\n\\t\\t<div class=\\\"tabItem {location === 2 ? 'selected' : ''}\\\"><img src={location == 2 ? 'profilewhite.svg' : 'profile.svg'} />Profile</div>\\n\\t</a>\\n\\t<a href=\\\"./\\\">\\n\\t\\t<div class=\\\"tabItem {location === 3 ? 'selected' : ''}\\\"><img src={location == 3 ? 'guardwhite.svg' : 'guard.svg'} />Guard</div>\\n\\t</a>\\n\\t<a href=\\\"chat\\\">\\n\\t\\t<div class=\\\"tabItem {location === 4 ? 'selected' : ''}\\\"><img src={location == 4 ? 'chatwhite.svg' : 'chat.svg'} />Chat</div>\\n\\t</a>\\n\\t<a href=\\\"support\\\">\\n\\t\\t<div class=\\\"tabItem {location === 5 ? 'selected' : ''}\\\"><img src={location == 5 ? 'supportwhite.svg' : 'support.svg'} />Support</div>\\n\\t</a>\\n</div>\\n\\n<style>\\n\\t#tabbar {\\n\\t\\tbackground-color: #171a21;\\n\\t\\theight: 65px;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 0px 30px;\\n\\t\\tcolor: #9099a1;\\n\\t\\tfont-weight: 500;\\n\\t\\tposition: fixed;\\n\\t\\tbottom: 0;\\n\\t\\tleft: 0;\\n\\t\\tright: 0;\\n\\t\\tz-index: 999;\\n\\t}\\n\\n\\t.tabItem{\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\tfont-size: 10px;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\t.tabItem img {\\n\\t\\tmargin-bottom: 6px;\\n\\t}\\n\\n\\t.selected{\\n\\t\\tcolor: white;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAuBC,OAAO,4BAAC,CAAC,AACR,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,GAAG,AACb,CAAC,AAED,oCAAQ,CAAC,AACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACpB,CAAC,AAED,sBAAQ,CAAC,GAAG,cAAC,CAAC,AACb,aAAa,CAAE,GAAG,AACnB,CAAC,AAED,qCAAS,CAAC,AACT,KAAK,CAAE,KAAK,AACb,CAAC\"}"
};

const Tabbar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { location } = $$props;
	if ($$props.location === void 0 && $$bindings.location && location !== void 0) $$bindings.location(location);
	$$result.css.add(css$1);

	return `<div id="${"tabbar"}" class="${"svelte-quz69i"}"><a href="${"store"}"><div class="${"tabItem " + escape(location === 1 ? "selected" : "") + " svelte-quz69i"}"><img${add_attribute("src", location == 1 ? "storewhite.svg" : "store.svg", 0)} class="${"svelte-quz69i"}">Store</div></a>
	<a href="${"profile"}"><div class="${"tabItem " + escape(location === 2 ? "selected" : "") + " svelte-quz69i"}"><img${add_attribute("src", location == 2 ? "profilewhite.svg" : "profile.svg", 0)} class="${"svelte-quz69i"}">Profile</div></a>
	<a href="${"./"}"><div class="${"tabItem " + escape(location === 3 ? "selected" : "") + " svelte-quz69i"}"><img${add_attribute("src", location == 3 ? "guardwhite.svg" : "guard.svg", 0)} class="${"svelte-quz69i"}">Guard</div></a>
	<a href="${"chat"}"><div class="${"tabItem " + escape(location === 4 ? "selected" : "") + " svelte-quz69i"}"><img${add_attribute("src", location == 4 ? "chatwhite.svg" : "chat.svg", 0)} class="${"svelte-quz69i"}">Chat</div></a>
	<a href="${"support"}"><div class="${"tabItem " + escape(location === 5 ? "selected" : "") + " svelte-quz69i"}"><img${add_attribute("src", location == 5 ? "supportwhite.svg" : "support.svg", 0)} class="${"svelte-quz69i"}">Support</div></a>
</div>`;
});

/* src/components/SteamGuard.svelte generated by Svelte v3.22.2 */

const css$2 = {
	code: "#wrapper.svelte-nv9xl4{background-color:#161c2d;width:100%;height:145px;padding-top:90px}#code.svelte-nv9xl4{font-size:52px;font-weight:400;text-align:center;letter-spacing:4px;transition:0.5s}#username.svelte-nv9xl4{color:#a7d6f0;font-size:14px;opacity:0.8}#timerbar.svelte-nv9xl4{right:0;left:0;margin-right:auto;margin-left:auto;min-height:8px;top:90px;transform:scale(0.8);transition:0.5s}",
	map: "{\"version\":3,\"file\":\"SteamGuard.svelte\",\"sources\":[\"SteamGuard.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { onDestroy } from 'svelte';\\n\\timport { username } from '../routes/stores.js';\\n\\n\\tlet code = 72826;\\n\\tlet percentage = 0;\\n\\n\\tfunction onInterval(callback, time) {\\n\\t\\tconst interval = setInterval(callback, time);\\n\\n\\t\\t// onDestroy(() => {\\n\\t\\t// clearInterval(interval);\\n\\t\\t// });\\n\\t};\\n\\n\\tfunction codegen() {\\n\\t\\tcode = ( Math.random().toString(36).slice(-5) ).toUpperCase();\\n\\t}\\n\\t\\n\\tonInterval(\\n\\t\\tfunction check(){\\n\\t\\t\\tif (percentage < 9){\\n\\t\\t\\t\\t++percentage;\\n\\t\\t\\t} else {\\n\\t\\t\\t\\tpercentage = 0;\\n\\t\\t\\t\\tcodegen();\\n\\t\\t\\t}\\n\\t\\t}\\n\\t, 1000);\\n\\n\\tlet username_value;\\n\\n\\tconst unsubscribe = username.subscribe(value => {\\n\\t\\tusername_value = value;\\n\\t});\\n\\n</script>\\n\\n<div id=\\\"wrapper\\\">\\n\\t<div id=\\\"timerbar\\\" style=\\\"width: {100 - percentage*10}%; background-image: {percentage >=7 ? 'linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)' : 'linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)'};\\\"></div>\\n\\t<div id=\\\"code\\\" style=\\\"color: {percentage >=7 ? '#AD2821' : 'white'}\\\">{code}</div>\\n\\t<div id=\\\"username\\\">{username_value}</div>\\n</div>\\n\\n<style>\\n\\t#wrapper{\\n\\t\\tbackground-color: #161c2d;\\n\\t\\twidth: 100%;\\n\\t\\theight: 145px;\\n\\t\\tpadding-top: 90px;\\n\\t}\\n\\n\\t#code {\\n\\t\\tfont-size: 52px;\\n\\t\\tfont-weight: 400;\\n\\t\\ttext-align: center;\\n\\t\\tletter-spacing: 4px;\\n\\t\\ttransition: 0.5s;\\n\\t}\\n\\n\\t#username {\\n\\t\\tcolor: #a7d6f0;\\n\\t\\tfont-size: 14px;\\n\\t\\topacity: 0.8;\\n\\t}\\n\\n\\t#timerbar {\\n\\t    right: 0;\\n\\t    left: 0;\\n\\t    margin-right: auto;\\n\\t    margin-left: auto;\\n\\t    min-height: 8px;\\n\\t    top: 90px;\\n\\t    transform: scale(0.8);\\n\\t    transition: 0.5s;\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AA6CC,sBAAQ,CAAC,AACR,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,WAAW,CAAE,IAAI,AAClB,CAAC,AAED,KAAK,cAAC,CAAC,AACN,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,GAAG,CACnB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,SAAS,cAAC,CAAC,AACV,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,AACb,CAAC,AAED,SAAS,cAAC,CAAC,AACP,KAAK,CAAE,CAAC,CACR,IAAI,CAAE,CAAC,CACP,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,GAAG,CACf,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,UAAU,CAAE,IAAI,AACpB,CAAC\"}"
};

function onInterval(callback, time) {
	const interval = setInterval(callback, time);
} // onDestroy(() => {
// clearInterval(interval);

const SteamGuard = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let code = 72826;
	let percentage = 0;

	// });
	

	function codegen() {
		code = Math.random().toString(36).slice(-5).toUpperCase();
	}

	onInterval(
		function check() {
			if (percentage < 9) {
				++percentage;
			} else {
				percentage = 0;
				codegen();
			}
		},
		1000
	);

	let username_value;

	const unsubscribe = username.subscribe(value => {
		username_value = value;
	});

	$$result.css.add(css$2);

	return `<div id="${"wrapper"}" class="${"svelte-nv9xl4"}"><div id="${"timerbar"}" style="${"width: " + escape(100 - percentage * 10) + "%; background-image: " + escape(percentage >= 7
	? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
	: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)") + ";"}" class="${"svelte-nv9xl4"}"></div>
	<div id="${"code"}" style="${"color: " + escape(percentage >= 7 ? "#AD2821" : "white")}" class="${"svelte-nv9xl4"}">${escape(code)}</div>
	<div id="${"username"}" class="${"svelte-nv9xl4"}">${escape(username_value)}</div>
</div>`;
});

/* src/routes/index.svelte generated by Svelte v3.22.2 */

const css$3 = {
	code: "#guard.svelte-lnewky{padding:0;padding-bottom:60px;text-align:center}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Navbar from '../components/Navbar.svelte';\\n\\timport Tabbar from '../components/Tabbar.svelte';\\n\\timport SteamGuard from '../components/SteamGuard.svelte';\\n</script>\\n\\n<svelte:head>\\n\\t<title>Guard :: Steam Mobile</title>\\n</svelte:head>\\n\\n<Navbar title=\\\"Steam Guard\\\" />\\n<div id=\\\"guard\\\">\\n\\t<SteamGuard />\\n\\t<div style=\\\"height: 2000px\\\"></div>\\n</div>\\n<Tabbar location={3} />\\n\\n<style>\\n\\t#guard {\\n\\t\\tpadding: 0;\\n\\t\\tpadding-bottom: 60px;\\n\\t\\ttext-align: center;\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAkBC,MAAM,cAAC,CAAC,AACP,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,MAAM,AACnB,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>Guard :: Steam Mobile</title>`, "")}`, "")}

${validate_component(Navbar, "Navbar").$$render($$result, { title: "Steam Guard" }, {}, {})}
<div id="${"guard"}" class="${"svelte-lnewky"}">${validate_component(SteamGuard, "SteamGuard").$$render($$result, {}, {}, {})}
	<div style="${"height: 2000px"}"></div></div>
${validate_component(Tabbar, "Tabbar").$$render($$result, { location: 3 }, {}, {})}`;
});

/* src/routes/profile.svelte generated by Svelte v3.22.2 */

const css$4 = {
	code: "#profile.svelte-10530ck{padding-bottom:60px}#profilepicture.svelte-10530ck{border:1px solid #4B90AB;height:90px;border-radius:2px}#top.svelte-10530ck{margin-top:40px;padding:50px 30px;display:flex;align-items:center;background-image:url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/ef7cb44d312df5038cba0f69a0901da427900645.jpg);height:100px;background-repeat:no-repeat;background-size:cover;background-position:center;padding-bottom:20px}h2.svelte-10530ck{font-weight:600}h3.svelte-10530ck{opacity:0.8}h2.svelte-10530ck,h3.svelte-10530ck{line-height:1}#maininfo.svelte-10530ck{margin-left:20px;display:flex;flex-direction:column}",
	map: "{\"version\":3,\"file\":\"profile.svelte\",\"sources\":[\"profile.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Navbar from '../components/Navbar.svelte';\\n\\timport Tabbar from '../components/Tabbar.svelte';\\n\\timport { username } from './stores.js';\\n\\n\\tlet username_value;\\n\\n\\tconst unsubscribe = username.subscribe(value => {\\n\\t\\tusername_value = value;\\n\\t});\\n</script>\\n\\n<svelte:head>\\n\\t<title>Profile :: Steam Mobile</title>\\n</svelte:head>\\n\\n<Navbar title=\\\"Profile\\\" />\\n<div id=\\\"profile\\\">\\n\\t<div id=\\\"top\\\">\\n\\t\\t<img id=\\\"profilepicture\\\" src=\\\"profilepicture.jpg\\\" />\\n\\t\\t<div id=\\\"maininfo\\\">\\n\\t\\t\\t<h2>{username_value}</h2>\\n\\t\\t\\t<h3>Rohan Harikumar</h3>\\n\\t\\t</div>\\n\\t</div>\\n\\t<div id=\\\"level\\\"></div>\\n\\t<div id=\\\"level\\\"></div>\\n\\t<div id=\\\"level\\\"></div>\\n</div>\\n<Tabbar location={2} />\\n\\n<style>\\n\\t#profile{\\n\\t\\tpadding-bottom: 60px;\\n\\t}\\n\\n\\t#profilepicture {\\n\\t\\tborder: 1px solid #4B90AB;\\n\\t\\theight: 90px;\\n\\t\\tborder-radius: 2px;\\n\\t}\\n\\n\\t#top{\\n\\t\\tmargin-top: 40px;\\n\\t\\tpadding: 50px 30px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tbackground-image: url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/ef7cb44d312df5038cba0f69a0901da427900645.jpg);\\n\\t\\theight: 100px;\\n    \\tbackground-repeat: no-repeat;\\n    \\tbackground-size: cover;\\n    \\tbackground-position: center;\\n    \\tpadding-bottom: 20px;\\n\\t}\\n\\n\\th2{\\n\\t\\tfont-weight: 600;\\n\\t}\\n\\n\\th3{\\n\\t\\topacity: 0.8;\\n\\t}\\n\\n\\th2, h3 {\\n\\t\\tline-height: 1;\\n\\t}\\n\\n\\t#maininfo {\\n\\t\\tmargin-left: 20px;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAgCC,uBAAQ,CAAC,AACR,cAAc,CAAE,IAAI,AACrB,CAAC,AAED,eAAe,eAAC,CAAC,AAChB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,AACnB,CAAC,AAED,mBAAI,CAAC,AACJ,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,IAAI,mHAAmH,CAAC,CAC1I,MAAM,CAAE,KAAK,CACV,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,cAAc,CAAE,IAAI,AACxB,CAAC,AAED,iBAAE,CAAC,AACF,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,iBAAE,CAAC,AACF,OAAO,CAAE,GAAG,AACb,CAAC,AAED,iBAAE,CAAE,EAAE,eAAC,CAAC,AACP,WAAW,CAAE,CAAC,AACf,CAAC,AAED,SAAS,eAAC,CAAC,AACV,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACvB,CAAC\"}"
};

const Profile = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let username_value;

	const unsubscribe = username.subscribe(value => {
		username_value = value;
	});

	$$result.css.add(css$4);

	return `${($$result.head += `${($$result.title = `<title>Profile :: Steam Mobile</title>`, "")}`, "")}

${validate_component(Navbar, "Navbar").$$render($$result, { title: "Profile" }, {}, {})}
<div id="${"profile"}" class="${"svelte-10530ck"}"><div id="${"top"}" class="${"svelte-10530ck"}"><img id="${"profilepicture"}" src="${"profilepicture.jpg"}" class="${"svelte-10530ck"}">
		<div id="${"maininfo"}" class="${"svelte-10530ck"}"><h2 class="${"svelte-10530ck"}">${escape(username_value)}</h2>
			<h3 class="${"svelte-10530ck"}">Rohan Harikumar</h3></div></div>
	<div id="${"level"}"></div>
	<div id="${"level"}"></div>
	<div id="${"level"}"></div></div>
${validate_component(Tabbar, "Tabbar").$$render($$result, { location: 2 }, {}, {})}`;
});

/* src/components/SupportCardItem.svelte generated by Svelte v3.22.2 */

const css$5 = {
	code: "img.svelte-nbzu51{height:42px;margin-right:16px}",
	map: "{\"version\":3,\"file\":\"SupportCardItem.svelte\",\"sources\":[\"SupportCardItem.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let name, logo, height;\\n</script>\\n\\n<img src=\\\"{logo}\\\" style=\\\"height:{height}\\\" />{name}\\n\\n<style>\\n\\timg {\\n\\t\\theight: 42px;\\n\\t\\tmargin-right: 16px;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAOC,GAAG,cAAC,CAAC,AACJ,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,IAAI,AACnB,CAAC\"}"
};

const SupportCardItem = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { name } = $$props, { logo } = $$props, { height } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0) $$bindings.logo(logo);
	if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
	$$result.css.add(css$5);
	return `<img${add_attribute("src", logo, 0)} style="${"height:" + escape(height)}" class="${"svelte-nbzu51"}">${escape(name)}`;
});

/* src/components/SupportCard.svelte generated by Svelte v3.22.2 */

const css$6 = {
	code: "h3.svelte-1sngiaw.svelte-1sngiaw{color:#a7d6f0;text-transform:uppercase;font-weight:500;font-size:12px;padding:0px 30px}ul.svelte-1sngiaw.svelte-1sngiaw{list-style:none;padding:0px 30px;background-color:#0f0b20}ul.svelte-1sngiaw li.svelte-1sngiaw{display:flex;align-items:center;padding:16px 0px}",
	map: "{\"version\":3,\"file\":\"SupportCard.svelte\",\"sources\":[\"SupportCard.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport SupportCardItem from './SupportCardItem.svelte'\\n\\n\\texport let title, single, name, icon, combined;\\n</script>\\n\\n<div id=\\\"card\\\">\\n\\t{#if !single && !combined}\\n\\t\\t<h3>{title}</h3>\\n\\t{/if}\\n\\t<ul>\\n\\t\\t{#if !single && !combined}\\n\\t\\t\\t<li><SupportCardItem name=\\\"Dota 2\\\" logo=\\\"dota2.svg\\\" /></li>\\n\\t\\t\\t<li><SupportCardItem name=\\\"Stardew Valley\\\" logo=\\\"stardewvalley.svg\\\"/></li>\\n\\t\\t\\t<li><SupportCardItem name=\\\"Half-Life: Alyx\\\" logo=\\\"halflifealyx.svg\\\" /></li>\\n\\t\\t{/if}\\n\\t\\t{#if single}\\n\\t\\t\\t<li><SupportCardItem {name} logo=\\\"configure.svg\\\" /></li>\\n\\t\\t{/if}\\n\\t\\t{#if combined}\\n\\t\\t\\t<li><SupportCardItem name=\\\"Games, Software, etc.\\\" logo=\\\"games.svg\\\" /></li>\\n\\t\\t\\t<li><SupportCardItem name=\\\"Puchases\\\" logo=\\\"purchases.svg\\\"/></li>\\n\\t\\t\\t<li><SupportCardItem name=\\\"My Account\\\" logo=\\\"myaccount.svg\\\" /></li>\\n\\t\\t\\t<li><SupportCardItem name=\\\"Trading, Gifting, Items, Community Market\\\" logo=\\\"trading.svg\\\" /></li>\\n\\t\\t\\t<li><SupportCardItem name=\\\"Steam Community\\\" logo=\\\"community.svg\\\" /></li>\\n\\t\\t{/if}\\n\\t</ul>\\n</div>\\n\\n<style>\\n\\th3{\\n\\t\\tcolor: #a7d6f0;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tfont-weight: 500;\\n\\t\\tfont-size: 12px;\\n\\t\\tpadding: 0px 30px;\\n\\t}\\n\\n\\tul{\\n\\t\\tlist-style: none;\\n\\t\\tpadding: 0px 30px;\\n\\t\\tbackground-color: #0f0b20;\\n\\t}\\n\\n\\tul li{\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 16px 0px;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AA8BC,gCAAE,CAAC,AACF,KAAK,CAAE,OAAO,CACd,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CAAC,IAAI,AAClB,CAAC,AAED,gCAAE,CAAC,AACF,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,gBAAgB,CAAE,OAAO,AAC1B,CAAC,AAED,iBAAE,CAAC,iBAAE,CAAC,AACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CAAC,GAAG,AAClB,CAAC\"}"
};

const SupportCard = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title } = $$props,
		{ single } = $$props,
		{ name } = $$props,
		{ icon } = $$props,
		{ combined } = $$props;

	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	if ($$props.single === void 0 && $$bindings.single && single !== void 0) $$bindings.single(single);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
	if ($$props.combined === void 0 && $$bindings.combined && combined !== void 0) $$bindings.combined(combined);
	$$result.css.add(css$6);

	return `<div id="${"card"}">${!single && !combined
	? `<h3 class="${"svelte-1sngiaw"}">${escape(title)}</h3>`
	: ``}
	<ul class="${"svelte-1sngiaw"}">${!single && !combined
	? `<li class="${"svelte-1sngiaw"}">${validate_component(SupportCardItem, "SupportCardItem").$$render($$result, { name: "Dota 2", logo: "dota2.svg" }, {}, {})}</li>
			<li class="${"svelte-1sngiaw"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
			$$result,
			{
				name: "Stardew Valley",
				logo: "stardewvalley.svg"
			},
			{},
			{}
		)}</li>
			<li class="${"svelte-1sngiaw"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
			$$result,
			{
				name: "Half-Life: Alyx",
				logo: "halflifealyx.svg"
			},
			{},
			{}
		)}</li>`
	: ``}
		${single
	? `<li class="${"svelte-1sngiaw"}">${validate_component(SupportCardItem, "SupportCardItem").$$render($$result, { name, logo: "configure.svg" }, {}, {})}</li>`
	: ``}
		${combined
	? `<li class="${"svelte-1sngiaw"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
			$$result,
			{
				name: "Games, Software, etc.",
				logo: "games.svg"
			},
			{},
			{}
		)}</li>
			<li class="${"svelte-1sngiaw"}">${validate_component(SupportCardItem, "SupportCardItem").$$render($$result, { name: "Puchases", logo: "purchases.svg" }, {}, {})}</li>
			<li class="${"svelte-1sngiaw"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
			$$result,
			{
				name: "My Account",
				logo: "myaccount.svg"
			},
			{},
			{}
		)}</li>
			<li class="${"svelte-1sngiaw"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
			$$result,
			{
				name: "Trading, Gifting, Items, Community Market",
				logo: "trading.svg"
			},
			{},
			{}
		)}</li>
			<li class="${"svelte-1sngiaw"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
			$$result,
			{
				name: "Steam Community",
				logo: "community.svg"
			},
			{},
			{}
		)}</li>`
	: ``}</ul>
</div>`;
});

/* src/routes/support.svelte generated by Svelte v3.22.2 */

const css$7 = {
	code: "#support.svelte-16drkxf{padding:90px 0px;padding-right:0;padding-bottom:80px}h5.svelte-16drkxf{padding:0 30px;color:#9099a1}",
	map: "{\"version\":3,\"file\":\"support.svelte\",\"sources\":[\"support.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Navbar from '../components/Navbar.svelte';\\n\\timport Tabbar from '../components/Tabbar.svelte';\\n\\timport SupportCard from '../components/SupportCard.svelte';\\n</script>\\n\\n<svelte:head>\\n\\t<title>Support :: Steam Mobile</title>\\n</svelte:head>\\n\\n<Navbar title=\\\"Support\\\" />\\n<div id=\\\"support\\\">\\n\\t<SupportCard title=\\\"Recent Products\\\" />\\n\\t<SupportCard single=\\\"true\\\" name=\\\"Configure app\\\" />\\n\\t<SupportCard combined=\\\"true\\\" name=\\\"Configure app\\\" />\\n\\t<h5>rohanharikr/commit vesion</h5>\\n</div>\\n<Tabbar location={5} />\\n\\n<style>\\n\\t#support{\\n\\t\\tpadding: 90px 0px;\\n\\t\\tpadding-right: 0;\\n\\t\\tpadding-bottom: 80px;\\n\\t}\\n\\n\\th5{\\n\\t\\tpadding: 0 30px;\\n\\t\\tcolor: #9099a1;\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAoBC,uBAAQ,CAAC,AACR,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,aAAa,CAAE,CAAC,CAChB,cAAc,CAAE,IAAI,AACrB,CAAC,AAED,iBAAE,CAAC,AACF,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,KAAK,CAAE,OAAO,AACf,CAAC\"}"
};

const Support = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$7);

	return `${($$result.head += `${($$result.title = `<title>Support :: Steam Mobile</title>`, "")}`, "")}

${validate_component(Navbar, "Navbar").$$render($$result, { title: "Support" }, {}, {})}
<div id="${"support"}" class="${"svelte-16drkxf"}">${validate_component(SupportCard, "SupportCard").$$render($$result, { title: "Recent Products" }, {}, {})}
	${validate_component(SupportCard, "SupportCard").$$render($$result, { single: "true", name: "Configure app" }, {}, {})}
	${validate_component(SupportCard, "SupportCard").$$render($$result, { combined: "true", name: "Configure app" }, {}, {})}
	<h5 class="${"svelte-16drkxf"}">rohanharikr/commit vesion</h5></div>
${validate_component(Tabbar, "Tabbar").$$render($$result, { location: 5 }, {}, {})}`;
});

/* src/components/PriceBox.svelte generated by Svelte v3.22.2 */

const css$8 = {
	code: "#pricebox.svelte-mkh1u6{position:absolute;bottom:0;right:0;margin:15px;display:flex;justify-content:space-between}#discount.svelte-mkh1u6,#prices.svelte-mkh1u6{width:50%;display:flex;justify-content:center;align-items:center;padding:2px 10px}#discount.svelte-mkh1u6{background-color:#4c6b22;color:#a4d007;font-size:16px;font-weight:500}#prices.svelte-mkh1u6{background-color:#0d303f;color:#a7d6f0;display:flex;flex-direction:column;align-items:flex-end}#originalprice.svelte-mkh1u6{font-size:8px;text-decoration:line-through}#reducedprice.svelte-mkh1u6{font-size:12px;font-weight:500}.discount.svelte-mkh1u6,.prices.svelte-mkh1u6{padding:1px 8px !important}.discount--square.svelte-mkh1u6{font-size:14px !important}.originalprice--square.svelte-mkh1u6{font-size:6px !important}.reducedprice--square.svelte-mkh1u6{font-size:10px !important}",
	map: "{\"version\":3,\"file\":\"PriceBox.svelte\",\"sources\":[\"PriceBox.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let originalPrice, reducedPrice, small = false;\\n\\tlet discount = ( ((originalPrice - reducedPrice) * 100)/originalPrice ).toFixed(0); \\n</script>\\n\\n<div id=\\\"pricebox\\\">\\n\\t<div id=\\\"discount\\\" class={small ? 'discount discount--square' : ''}>-{discount}%</div>\\n\\t<div id=\\\"prices\\\" class={small ? 'prices prices--square' : ''}>\\n\\t\\t<div id=\\\"originalprice\\\" class={small ? 'originalprice--square' : ''}>${originalPrice}</div>\\n\\t\\t<div id=\\\"reducedprice\\\" class={small ? 'reducedprice--square' : ''}>${reducedPrice}</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t#pricebox{\\n\\t\\tposition: absolute;\\n\\t\\tbottom: 0;\\n\\t\\tright: 0;\\n\\t\\tmargin: 15px;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n\\n\\t#discount, #prices{\\n\\t\\twidth: 50%;\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 2px 10px;\\n\\t}\\n\\n\\t#discount{\\n\\t\\tbackground-color: #4c6b22;\\n\\t\\tcolor: #a4d007;\\n\\t\\tfont-size: 16px;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t#prices{\\n\\t\\tbackground-color: #0d303f;\\n\\t\\tcolor: #a7d6f0;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: flex-end;\\n\\t}\\n\\n\\n\\t#originalprice {\\n\\t\\tfont-size: 8px;\\n\\t\\ttext-decoration: line-through;\\n\\t}\\n\\n\\n\\t#reducedprice {\\n\\t\\tfont-size: 12px;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t/*square card modifier*/\\n\\t.discount, .prices{\\n\\t\\tpadding: 1px 8px !important;\\n\\t}\\n\\n\\t.discount--square{\\n\\t\\tfont-size: 14px !important;\\n\\t}\\n\\n\\n\\t.originalprice--square {\\n\\t\\tfont-size: 6px !important;\\n\\t}\\n\\n\\t.reducedprice--square {\\n\\t\\tfont-size: 10px !important;\\n\\t}\\n\\n</style>\\n\\n\"],\"names\":[],\"mappings\":\"AAcC,uBAAS,CAAC,AACT,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,AAC/B,CAAC,AAED,uBAAS,CAAE,qBAAO,CAAC,AAClB,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CAAC,IAAI,AAClB,CAAC,AAED,uBAAS,CAAC,AACT,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,qBAAO,CAAC,AACP,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,QAAQ,AACtB,CAAC,AAGD,cAAc,cAAC,CAAC,AACf,SAAS,CAAE,GAAG,CACd,eAAe,CAAE,YAAY,AAC9B,CAAC,AAGD,aAAa,cAAC,CAAC,AACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AACjB,CAAC,AAGD,uBAAS,CAAE,qBAAO,CAAC,AAClB,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,UAAU,AAC5B,CAAC,AAED,+BAAiB,CAAC,AACjB,SAAS,CAAE,IAAI,CAAC,UAAU,AAC3B,CAAC,AAGD,sBAAsB,cAAC,CAAC,AACvB,SAAS,CAAE,GAAG,CAAC,UAAU,AAC1B,CAAC,AAED,qBAAqB,cAAC,CAAC,AACtB,SAAS,CAAE,IAAI,CAAC,UAAU,AAC3B,CAAC\"}"
};

const PriceBox = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { originalPrice } = $$props,
		{ reducedPrice } = $$props,
		{ small = false } = $$props;

	let discount = ((originalPrice - reducedPrice) * 100 / originalPrice).toFixed(0);
	if ($$props.originalPrice === void 0 && $$bindings.originalPrice && originalPrice !== void 0) $$bindings.originalPrice(originalPrice);
	if ($$props.reducedPrice === void 0 && $$bindings.reducedPrice && reducedPrice !== void 0) $$bindings.reducedPrice(reducedPrice);
	if ($$props.small === void 0 && $$bindings.small && small !== void 0) $$bindings.small(small);
	$$result.css.add(css$8);

	return `<div id="${"pricebox"}" class="${"svelte-mkh1u6"}"><div id="${"discount"}" class="${escape(null_to_empty(small ? "discount discount--square" : "")) + " svelte-mkh1u6"}">-${escape(discount)}%</div>
	<div id="${"prices"}" class="${escape(null_to_empty(small ? "prices prices--square" : "")) + " svelte-mkh1u6"}"><div id="${"originalprice"}" class="${escape(null_to_empty(small ? "originalprice--square" : "")) + " svelte-mkh1u6"}">$${escape(originalPrice)}</div>
		<div id="${"reducedprice"}" class="${escape(null_to_empty(small ? "reducedprice--square" : "")) + " svelte-mkh1u6"}">$${escape(reducedPrice)}</div></div>
</div>`;
});

/* src/components/RectangleCard.svelte generated by Svelte v3.22.2 */

const css$9 = {
	code: "#card.svelte-q0wr4p{display:flex;flex-direction:column}#image.svelte-q0wr4p{width:300px;height:150px;background-position:center;background-repeat:no-repeat;background-size:cover;display:inline-block;scroll-snap-align:center;margin-left:10px;position:relative}#owners.svelte-q0wr4p{margin-left:10px;font-size:12px;color:#a7d6f0}#cardInfo.svelte-q0wr4p{margin-top:10px;display:flex;align-items:center;justify-content:space-between;padding:0 5px}",
	map: "{\"version\":3,\"file\":\"RectangleCard.svelte\",\"sources\":[\"RectangleCard.svelte\"],\"sourcesContent\":[\"<script>\\n import PriceBox from './PriceBox.svelte';\\n\\n export let image,\\n \\t\\t\\twindows = true,\\n \\t\\t\\tmac = false,\\n \\t\\t\\tsteam = false,\\n \\t\\t\\toriginalPrice,\\n \\t\\t\\treducedPrice;\\n</script>\\n\\n<div id=\\\"card\\\">\\n\\t<div id=\\\"image\\\" style=\\\"background-image: url({image});\\\"><PriceBox {originalPrice} {reducedPrice} /></div>\\n\\t<div id=\\\"cardInfo\\\">\\n\\t\\t<div id=\\\"owners\\\">11 friends own this game</div>\\n\\t\\t<div>\\n\\t\\t\\t{#if windows}\\n\\t\\t\\t\\t<img src=\\\"windows.svg\\\" height=\\\"15px;\\\" />\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if mac}\\n\\t\\t\\t\\t<img src=\\\"mac.svg\\\" height=\\\"15px;\\\" style=\\\"margin-left: 4px\\\" />\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if steam}\\n\\t\\t\\t\\t<img src=\\\"steamlogo.svg\\\" height=\\\"15px;\\\" style=\\\"margin-left: 4px\\\" />\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t#card {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\n\\t#image {\\n\\t\\twidth: 300px;\\n\\t\\theight: 150px;\\n \\t\\tbackground-position: center;\\n  \\t\\tbackground-repeat: no-repeat;\\n  \\t\\tbackground-size: cover;\\n  \\t\\tdisplay: inline-block;\\n  \\t\\tscroll-snap-align: center;\\n  \\t\\tmargin-left: 10px;\\n  \\t\\tposition: relative;\\n\\t}\\n\\n\\t#owners {\\n\\t\\tmargin-left: 10px;\\n\\t\\tfont-size: 12px;\\n\\t\\tcolor: #a7d6f0;\\n\\t}\\n\\n\\t#cardInfo {\\n\\t\\tmargin-top: 10px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: space-between;\\n\\t\\tpadding: 0 5px;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AA8BC,KAAK,cAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACvB,CAAC,AAED,MAAM,cAAC,CAAC,AACP,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACZ,mBAAmB,CAAE,MAAM,CAC1B,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,OAAO,CAAE,YAAY,CACrB,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,IAAI,CACjB,QAAQ,CAAE,QAAQ,AACrB,CAAC,AAED,OAAO,cAAC,CAAC,AACR,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,AACf,CAAC,AAED,SAAS,cAAC,CAAC,AACV,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,CAAC,CAAC,GAAG,AACf,CAAC\"}"
};

const RectangleCard = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { image } = $$props,
		{ windows = true } = $$props,
		{ mac = false } = $$props,
		{ steam = false } = $$props,
		{ originalPrice } = $$props,
		{ reducedPrice } = $$props;

	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.windows === void 0 && $$bindings.windows && windows !== void 0) $$bindings.windows(windows);
	if ($$props.mac === void 0 && $$bindings.mac && mac !== void 0) $$bindings.mac(mac);
	if ($$props.steam === void 0 && $$bindings.steam && steam !== void 0) $$bindings.steam(steam);
	if ($$props.originalPrice === void 0 && $$bindings.originalPrice && originalPrice !== void 0) $$bindings.originalPrice(originalPrice);
	if ($$props.reducedPrice === void 0 && $$bindings.reducedPrice && reducedPrice !== void 0) $$bindings.reducedPrice(reducedPrice);
	$$result.css.add(css$9);

	return `<div id="${"card"}" class="${"svelte-q0wr4p"}"><div id="${"image"}" style="${"background-image: url(" + escape(image) + ");"}" class="${"svelte-q0wr4p"}">${validate_component(PriceBox, "PriceBox").$$render($$result, { originalPrice, reducedPrice }, {}, {})}</div>
	<div id="${"cardInfo"}" class="${"svelte-q0wr4p"}"><div id="${"owners"}" class="${"svelte-q0wr4p"}">11 friends own this game</div>
		<div>${windows
	? `<img src="${"windows.svg"}" height="${"15px;"}">`
	: ``}
			${mac
	? `<img src="${"mac.svg"}" height="${"15px;"}" style="${"margin-left: 4px"}">`
	: ``}
			${steam
	? `<img src="${"steamlogo.svg"}" height="${"15px;"}" style="${"margin-left: 4px"}">`
	: ``}</div></div>
</div>`;
});

/* src/components/SquareCard.svelte generated by Svelte v3.22.2 */

const css$a = {
	code: "#card.svelte-9nlnma{display:flex;flex-direction:column}#image.svelte-9nlnma{width:145px;height:145px;background-position:center;background-repeat:no-repeat;background-size:cover;display:inline-block;scroll-snap-align:center;margin-left:10px;position:relative}#cardInfo.svelte-9nlnma{margin-top:10px;display:flex;align-items:center;justify-content:flex-end;padding:0 5px;padding:0 5px}",
	map: "{\"version\":3,\"file\":\"SquareCard.svelte\",\"sources\":[\"SquareCard.svelte\"],\"sourcesContent\":[\"<script>\\n import PriceBox from './PriceBox.svelte'\\n\\n export let image,\\n \\t\\t\\twindows = true,\\n \\t\\t\\tmac = false,\\n \\t\\t\\tsteam = false,\\n \\t\\t\\toriginalPrice,\\n \\t\\t\\treducedPrice;\\n</script>\\n\\n<div id=\\\"card\\\">\\n\\t<div id=\\\"image\\\" style=\\\"background-image: url({image});\\\"><PriceBox {originalPrice} {reducedPrice} small={true} /></div>\\n\\t<div id=\\\"cardInfo\\\">\\n\\t\\t<!-- <div id=\\\"owners\\\">11 friends own this game</div> -->\\n\\t\\t<div>\\n\\t\\t\\t{#if windows}\\n\\t\\t\\t\\t<img src=\\\"windows.svg\\\" height=\\\"12px;\\\" />\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if mac}\\n\\t\\t\\t\\t<img src=\\\"mac.svg\\\" height=\\\"12px;\\\" style=\\\"margin-left: 4px\\\" />\\n\\t\\t\\t{/if}\\n\\t\\t\\t{#if steam}\\n\\t\\t\\t\\t<img src=\\\"steamlogo.svg\\\" height=\\\"12px;\\\" style=\\\"margin-left: 4px\\\" />\\n\\t\\t\\t{/if}\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t#card {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\n\\t#image {\\n\\t\\twidth: 145px;\\n\\t\\theight: 145px;\\n \\t\\tbackground-position: center;\\n  \\t\\tbackground-repeat: no-repeat;\\n  \\t\\tbackground-size: cover;\\n  \\t\\tdisplay: inline-block;\\n  \\t\\tscroll-snap-align: center;\\n  \\t\\tmargin-left: 10px;\\n  \\t\\tposition: relative;\\n\\t}\\n\\n/*\\t#owners {\\n\\t\\tfont-size: 8px;\\n\\t\\tcolor: #a7d6f0;\\n\\t}*/\\n\\n\\t#cardInfo {\\n\\t\\tmargin-top: 10px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\t/*justify-content: space-between;*/\\n\\t\\tjustify-content: flex-end;\\n\\t\\tpadding: 0 5px;\\n\\t\\tpadding: 0 5px;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AA8BC,KAAK,cAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACvB,CAAC,AAED,MAAM,cAAC,CAAC,AACP,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACZ,mBAAmB,CAAE,MAAM,CAC1B,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,OAAO,CAAE,YAAY,CACrB,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,IAAI,CACjB,QAAQ,CAAE,QAAQ,AACrB,CAAC,AAOD,SAAS,cAAC,CAAC,AACV,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CAEnB,eAAe,CAAE,QAAQ,CACzB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,OAAO,CAAE,CAAC,CAAC,GAAG,AACf,CAAC\"}"
};

const SquareCard = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { image } = $$props,
		{ windows = true } = $$props,
		{ mac = false } = $$props,
		{ steam = false } = $$props,
		{ originalPrice } = $$props,
		{ reducedPrice } = $$props;

	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.windows === void 0 && $$bindings.windows && windows !== void 0) $$bindings.windows(windows);
	if ($$props.mac === void 0 && $$bindings.mac && mac !== void 0) $$bindings.mac(mac);
	if ($$props.steam === void 0 && $$bindings.steam && steam !== void 0) $$bindings.steam(steam);
	if ($$props.originalPrice === void 0 && $$bindings.originalPrice && originalPrice !== void 0) $$bindings.originalPrice(originalPrice);
	if ($$props.reducedPrice === void 0 && $$bindings.reducedPrice && reducedPrice !== void 0) $$bindings.reducedPrice(reducedPrice);
	$$result.css.add(css$a);

	return `<div id="${"card"}" class="${"svelte-9nlnma"}"><div id="${"image"}" style="${"background-image: url(" + escape(image) + ");"}" class="${"svelte-9nlnma"}">${validate_component(PriceBox, "PriceBox").$$render($$result, { originalPrice, reducedPrice, small: true }, {}, {})}</div>
	<div id="${"cardInfo"}" class="${"svelte-9nlnma"}">
		<div>${windows
	? `<img src="${"windows.svg"}" height="${"12px;"}">`
	: ``}
			${mac
	? `<img src="${"mac.svg"}" height="${"12px;"}" style="${"margin-left: 4px"}">`
	: ``}
			${steam
	? `<img src="${"steamlogo.svg"}" height="${"12px;"}" style="${"margin-left: 4px"}">`
	: ``}</div></div>
</div>`;
});

/* src/components/StripCard.svelte generated by Svelte v3.22.2 */

const css$b = {
	code: "#card.svelte-1ebs6ji{display:flex;flex-direction:column}#imageController.svelte-1ebs6ji{color:white;font-size:18px;background-color:rgba(0,0,0,0.6);width:100%;height:100%;display:flex;justify-content:center;align-items:center}#image.svelte-1ebs6ji{width:145px;height:60px;background-position:center;background-repeat:no-repeat;background-size:cover;display:inline-block;scroll-snap-align:center;margin-left:10px}",
	map: "{\"version\":3,\"file\":\"StripCard.svelte\",\"sources\":[\"StripCard.svelte\"],\"sourcesContent\":[\"<script>\\n export let image,\\n \\t\\t\\tgenre;\\t\\n</script>\\n\\n<div id=\\\"card\\\">\\n\\t<div id=\\\"image\\\" style=\\\"background-image:url({image});\\\"><div id=\\\"imageController\\\">{genre}</div></div>\\n\\t<div id=\\\"cardInfo\\\">\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t#card {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t}\\n\\n\\t#imageController {\\n\\t\\tcolor: white;\\n\\t\\tfont-size: 18px;\\n\\t\\tbackground-color: rgba(0,0,0,0.6);\\n\\t\\twidth: 100%;\\n\\t\\theight: 100%;\\n  \\t\\tdisplay: flex;\\n  \\t\\tjustify-content: center;\\n  \\t\\talign-items: center;\\n\\n\\t}\\n\\n\\t#image {\\n\\t\\twidth: 145px;\\n\\t\\theight: 60px;\\n \\t\\tbackground-position: center;\\n  \\t\\tbackground-repeat: no-repeat;\\n  \\t\\tbackground-size: cover;\\n  \\t\\tdisplay: inline-block;\\n  \\t\\tscroll-snap-align: center;\\n  \\t\\tmargin-left: 10px;\\n\\t}\\n\\n</style>\"],\"names\":[],\"mappings\":\"AAYC,KAAK,eAAC,CAAC,AACN,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACvB,CAAC,AAED,gBAAgB,eAAC,CAAC,AACjB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACjC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,AAEtB,CAAC,AAED,MAAM,eAAC,CAAC,AACP,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACX,mBAAmB,CAAE,MAAM,CAC1B,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,OAAO,CAAE,YAAY,CACrB,iBAAiB,CAAE,MAAM,CACzB,WAAW,CAAE,IAAI,AACpB,CAAC\"}"
};

const StripCard = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { image } = $$props, { genre } = $$props;
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.genre === void 0 && $$bindings.genre && genre !== void 0) $$bindings.genre(genre);
	$$result.css.add(css$b);

	return `<div id="${"card"}" class="${"svelte-1ebs6ji"}"><div id="${"image"}" style="${"background-image:url(" + escape(image) + ");"}" class="${"svelte-1ebs6ji"}"><div id="${"imageController"}" class="${"svelte-1ebs6ji"}">${escape(genre)}</div></div>
	<div id="${"cardInfo"}"></div>
</div>`;
});

/* src/components/StoreSection.svelte generated by Svelte v3.22.2 */

const css$c = {
	code: "h6.svelte-hhgy6c{text-transform:uppercase;color:#9099a1;font-weight:600;font-size:10px}h3.svelte-hhgy6c{font-size:18px;font-weight:500}#section.svelte-hhgy6c{margin-bottom:30px}#spotlight.svelte-hhgy6c{margin:20px 0px;overflow-x:scroll;overflow-y:hidden;white-space:nowrap;scroll-snap-type:x mandatory;scroll-snap-align:start;margin-left:-10px;display:flex;scrollbar-width:none}#spotlight.svelte-hhgy6c::-webkit-scrollbar{display:none}",
	map: "{\"version\":3,\"file\":\"StoreSection.svelte\",\"sources\":[\"StoreSection.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport RectangleCard from '../components/RectangleCard.svelte';\\n\\timport SquareCard from '../components/SquareCard.svelte';\\n\\timport StripCard from '../components/StripCard.svelte';\\n\\n\\texport let tag = '',\\n\\t\\t\\t   heading,\\n\\t\\t\\t   rectangleCard = false,\\n\\t\\t\\t   squareCard = false,\\n\\t\\t\\t   stripCard = false;\\n</script>\\n\\n<div id=\\\"section\\\">\\n\\t<h6>{tag}</h6>\\n\\t<h3>{heading}</h3>\\n\\t<div id=\\\"spotlight\\\">\\n\\t\\t{#if rectangleCard}\\n\\t\\t\\t<RectangleCard image=\\\"https://cdn.arstechnica.net/wp-content/uploads/2019/10/outer-worlds-listing.png\\\" originalPrice=\\\"69.99\\\" reducedPrice=\\\"59.99\\\" />\\n\\t\\t\\t<RectangleCard image=\\\"https://i.ytimg.com/vi/eaW0tYpxyp0/maxresdefault.jpg\\\" originalPrice=\\\"69.99\\\" reducedPrice=\\\"59.99\\\" />\\n\\t\\t\\t<RectangleCard image=\\\"https://steamcdn-a.akamaihd.net/steam/apps/374320/capsule_616x353.jpg\\\" originalPrice=\\\"69.99\\\" reducedPrice=\\\"59.99\\\" />\\n\\t\\t\\t<RectangleCard image=\\\"https://steam.cryotank.net/wp-content/gallery/ori/Ori-01-HD.png\\\" mac=\\\"true\\\" originalPrice=\\\"69.99\\\" reducedPrice=\\\"59.99\\\" />\\n\\t\\t\\t<RectangleCard image=\\\"https://i.ytimg.com/vi/2enbYOMtR4I/maxresdefault.jpg\\\" originalPrice=\\\"69.99\\\" reducedPrice=\\\"59.99\\\" />\\n\\t\\t{/if}\\n\\t\\t{#if squareCard}\\n\\t\\t\\t<SquareCard image=\\\"https://lh3.googleusercontent.com/caNRdVjHrAC8AXjQwNp4u0FzK2xwKTMC--MYdb8xXNeCinjwQOF8EqSOcYCC3RFBdgjd\\\" mac=\\\"true\\\" steam=\\\"true\\\" originalPrice=\\\"69.99\\\" reducedPrice=\\\"59.99\\\" />\\n\\t\\t\\t<SquareCard image=\\\"https://www.androidpolice.com/wp-content/uploads/2018/10/81LJeCDylML.jpg\\\" mac=\\\"true\\\" steam=\\\"true\\\" originalPrice=\\\"69.99\\\" reducedPrice=\\\"59.99\\\" />\\n\\t\\t\\t<SquareCard image=\\\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsrSn4-vAw6oUWmYryVBtEnTUUd6-5rCQdzS1p4Hik-dLxOnOz&usqp=CAU\\\" mac=\\\"true\\\" steam=\\\"true\\\" originalPrice=\\\"69.99\\\" reducedPrice=\\\"59.99\\\" />\\n\\t\\t\\t<SquareCard image=\\\"https://i.ytimg.com/vi/gvECQlxrhbw/maxresdefault.jpg\\\" mac=\\\"true\\\" originalPrice=\\\"69.99\\\" reducedPrice=\\\"59.99\\\" />\\n\\t\\t\\t<SquareCard image=\\\"https://images-na.ssl-images-amazon.com/images/I/71p9r+IRobL.jpg\\\" mac=\\\"true\\\" originalPrice=\\\"69.99\\\" reducedPrice=\\\"59.99\\\" />\\n\\t\\t{/if}\\n\\t\\t{#if stripCard}\\n\\t\\t\\t<StripCard genre=\\\"Indie\\\" image=\\\"https://venturebeat.com/wp-content/uploads/2012/03/journey-1.jpg?w=1200&strip=all\\\" />\\n\\t\\t\\t<StripCard genre=\\\"Action\\\" image=\\\"https://store-images.s-microsoft.com/image/apps.38656.69038865179152125.af885fa8-7b94-47b1-be3a-d2ab6af95a6a.af83131f-d4dc-4d47-a84d-25aab92a5e5b?mode=scale&q=90&h=1080&w=1920\\\" />\\n\\t\\t\\t<StripCard genre=\\\"Adventure\\\" image=\\\"https://assets1.ignimgs.com/2020/03/24/ign-doom-eternal-complete-review-blogroll-1585092832291.jpg\\\" />\\n\\t\\t\\t<StripCard genre=\\\"Multiplayer\\\" image=\\\"https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png\\\" />\\n\\t\\t\\t<StripCard genre=\\\"Horror\\\" image=\\\"https://i2.wp.com/tecake.com/wp-content/uploads/2020/04/4L2MLiPnTT5hMHbCqgyjAc.jpg?fit=1920%2C1080&ssl=1\\\" />\\n\\t\\t{/if}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\th6{\\n\\t\\ttext-transform: uppercase;\\n\\t\\tcolor: #9099a1;\\n\\t\\tfont-weight: 600;\\n\\t\\tfont-size: 10px;\\n\\t}\\n\\n\\th3{\\n\\t\\tfont-size: 18px;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t#section{\\n\\t\\tmargin-bottom: 30px;\\n\\t}\\n\\n\\t#spotlight {\\n\\t\\tmargin: 20px 0px;\\n\\t\\toverflow-x: scroll;\\n\\t\\toverflow-y: hidden;\\n\\t\\twhite-space: nowrap;\\n\\t\\tscroll-snap-type: x mandatory;\\n\\t\\tscroll-snap-align: start;\\n\\t\\tmargin-left: -10px;\\n\\t\\tdisplay: flex;\\n\\t\\tscrollbar-width: none;\\n\\t}\\n\\n\\t#spotlight::-webkit-scrollbar { \\n    \\tdisplay: none;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAyCC,gBAAE,CAAC,AACF,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,AAChB,CAAC,AAED,gBAAE,CAAC,AACF,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AACR,aAAa,CAAE,IAAI,AACpB,CAAC,AAED,UAAU,cAAC,CAAC,AACX,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,CAAC,CAAC,SAAS,CAC7B,iBAAiB,CAAE,KAAK,CACxB,WAAW,CAAE,KAAK,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,IAAI,AACtB,CAAC,AAED,wBAAU,mBAAmB,AAAC,CAAC,AAC3B,OAAO,CAAE,IAAI,AACjB,CAAC\"}"
};

const StoreSection = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { tag = "" } = $$props,
		{ heading } = $$props,
		{ rectangleCard = false } = $$props,
		{ squareCard = false } = $$props,
		{ stripCard = false } = $$props;

	if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0) $$bindings.tag(tag);
	if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0) $$bindings.heading(heading);
	if ($$props.rectangleCard === void 0 && $$bindings.rectangleCard && rectangleCard !== void 0) $$bindings.rectangleCard(rectangleCard);
	if ($$props.squareCard === void 0 && $$bindings.squareCard && squareCard !== void 0) $$bindings.squareCard(squareCard);
	if ($$props.stripCard === void 0 && $$bindings.stripCard && stripCard !== void 0) $$bindings.stripCard(stripCard);
	$$result.css.add(css$c);

	return `<div id="${"section"}" class="${"svelte-hhgy6c"}"><h6 class="${"svelte-hhgy6c"}">${escape(tag)}</h6>
	<h3 class="${"svelte-hhgy6c"}">${escape(heading)}</h3>
	<div id="${"spotlight"}" class="${"svelte-hhgy6c"}">${rectangleCard
	? `${validate_component(RectangleCard, "RectangleCard").$$render(
			$$result,
			{
				image: "https://cdn.arstechnica.net/wp-content/uploads/2019/10/outer-worlds-listing.png",
				originalPrice: "69.99",
				reducedPrice: "59.99"
			},
			{},
			{}
		)}
			${validate_component(RectangleCard, "RectangleCard").$$render(
			$$result,
			{
				image: "https://i.ytimg.com/vi/eaW0tYpxyp0/maxresdefault.jpg",
				originalPrice: "69.99",
				reducedPrice: "59.99"
			},
			{},
			{}
		)}
			${validate_component(RectangleCard, "RectangleCard").$$render(
			$$result,
			{
				image: "https://steamcdn-a.akamaihd.net/steam/apps/374320/capsule_616x353.jpg",
				originalPrice: "69.99",
				reducedPrice: "59.99"
			},
			{},
			{}
		)}
			${validate_component(RectangleCard, "RectangleCard").$$render(
			$$result,
			{
				image: "https://steam.cryotank.net/wp-content/gallery/ori/Ori-01-HD.png",
				mac: "true",
				originalPrice: "69.99",
				reducedPrice: "59.99"
			},
			{},
			{}
		)}
			${validate_component(RectangleCard, "RectangleCard").$$render(
			$$result,
			{
				image: "https://i.ytimg.com/vi/2enbYOMtR4I/maxresdefault.jpg",
				originalPrice: "69.99",
				reducedPrice: "59.99"
			},
			{},
			{}
		)}`
	: ``}
		${squareCard
	? `${validate_component(SquareCard, "SquareCard").$$render(
			$$result,
			{
				image: "https://lh3.googleusercontent.com/caNRdVjHrAC8AXjQwNp4u0FzK2xwKTMC--MYdb8xXNeCinjwQOF8EqSOcYCC3RFBdgjd",
				mac: "true",
				steam: "true",
				originalPrice: "69.99",
				reducedPrice: "59.99"
			},
			{},
			{}
		)}
			${validate_component(SquareCard, "SquareCard").$$render(
			$$result,
			{
				image: "https://www.androidpolice.com/wp-content/uploads/2018/10/81LJeCDylML.jpg",
				mac: "true",
				steam: "true",
				originalPrice: "69.99",
				reducedPrice: "59.99"
			},
			{},
			{}
		)}
			${validate_component(SquareCard, "SquareCard").$$render(
			$$result,
			{
				image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsrSn4-vAw6oUWmYryVBtEnTUUd6-5rCQdzS1p4Hik-dLxOnOz&usqp=CAU",
				mac: "true",
				steam: "true",
				originalPrice: "69.99",
				reducedPrice: "59.99"
			},
			{},
			{}
		)}
			${validate_component(SquareCard, "SquareCard").$$render(
			$$result,
			{
				image: "https://i.ytimg.com/vi/gvECQlxrhbw/maxresdefault.jpg",
				mac: "true",
				originalPrice: "69.99",
				reducedPrice: "59.99"
			},
			{},
			{}
		)}
			${validate_component(SquareCard, "SquareCard").$$render(
			$$result,
			{
				image: "https://images-na.ssl-images-amazon.com/images/I/71p9r+IRobL.jpg",
				mac: "true",
				originalPrice: "69.99",
				reducedPrice: "59.99"
			},
			{},
			{}
		)}`
	: ``}
		${stripCard
	? `${validate_component(StripCard, "StripCard").$$render(
			$$result,
			{
				genre: "Indie",
				image: "https://venturebeat.com/wp-content/uploads/2012/03/journey-1.jpg?w=1200&strip=all"
			},
			{},
			{}
		)}
			${validate_component(StripCard, "StripCard").$$render(
			$$result,
			{
				genre: "Action",
				image: "https://store-images.s-microsoft.com/image/apps.38656.69038865179152125.af885fa8-7b94-47b1-be3a-d2ab6af95a6a.af83131f-d4dc-4d47-a84d-25aab92a5e5b?mode=scale&q=90&h=1080&w=1920"
			},
			{},
			{}
		)}
			${validate_component(StripCard, "StripCard").$$render(
			$$result,
			{
				genre: "Adventure",
				image: "https://assets1.ignimgs.com/2020/03/24/ign-doom-eternal-complete-review-blogroll-1585092832291.jpg"
			},
			{},
			{}
		)}
			${validate_component(StripCard, "StripCard").$$render(
			$$result,
			{
				genre: "Multiplayer",
				image: "https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png"
			},
			{},
			{}
		)}
			${validate_component(StripCard, "StripCard").$$render(
			$$result,
			{
				genre: "Horror",
				image: "https://i2.wp.com/tecake.com/wp-content/uploads/2020/04/4L2MLiPnTT5hMHbCqgyjAc.jpg?fit=1920%2C1080&ssl=1"
			},
			{},
			{}
		)}`
	: ``}</div>
</div>`;
});

/* src/routes/store.svelte generated by Svelte v3.22.2 */

const css$d = {
	code: "#store.svelte-e8nmt8{padding:90px 30px;padding-right:0;padding-bottom:60px}",
	map: "{\"version\":3,\"file\":\"store.svelte\",\"sources\":[\"store.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Navbar from '../components/Navbar.svelte';\\n\\timport Tabbar from '../components/Tabbar.svelte';\\n\\timport StoreSection from '../components/StoreSection.svelte';\\n</script>\\n\\n<svelte:head>\\n\\t<title>Store :: Steam Mobile</title>\\n</svelte:head>\\n\\n<Navbar title=\\\"Steam Store\\\"/>\\n<div id=\\\"store\\\">\\n\\t<StoreSection tag=\\\"Special Offers\\\" heading=\\\"Midnight Madness\\\" rectangleCard=\\\"true\\\" />\\n\\t<StoreSection heading=\\\"Featured & Recommended\\\" squareCard=\\\"true\\\" />\\n\\t<StoreSection heading=\\\"Tags\\\" stripCard=\\\"true\\\" />\\n</div>\\n<Tabbar location={1} />\\n\\n<style>\\n\\t#store{\\n\\t\\tpadding: 90px 30px;\\n\\t\\tpadding-right: 0;\\n\\t\\tpadding-bottom: 60px;\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAmBC,oBAAM,CAAC,AACN,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,aAAa,CAAE,CAAC,CAChB,cAAc,CAAE,IAAI,AACrB,CAAC\"}"
};

const Store = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$d);

	return `${($$result.head += `${($$result.title = `<title>Store :: Steam Mobile</title>`, "")}`, "")}

${validate_component(Navbar, "Navbar").$$render($$result, { title: "Steam Store" }, {}, {})}
<div id="${"store"}" class="${"svelte-e8nmt8"}">${validate_component(StoreSection, "StoreSection").$$render(
		$$result,
		{
			tag: "Special Offers",
			heading: "Midnight Madness",
			rectangleCard: "true"
		},
		{},
		{}
	)}
	${validate_component(StoreSection, "StoreSection").$$render(
		$$result,
		{
			heading: "Featured & Recommended",
			squareCard: "true"
		},
		{},
		{}
	)}
	${validate_component(StoreSection, "StoreSection").$$render($$result, { heading: "Tags", stripCard: "true" }, {}, {})}</div>
${validate_component(Tabbar, "Tabbar").$$render($$result, { location: 1 }, {}, {})}`;
});

/* src/components/RecentChat.svelte generated by Svelte v3.22.2 */

const css$e = {
	code: "#imageholder.svelte-rf5a4b{height:50px;width:50px;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:2px;margin-right:20px;position:relative}#name.svelte-rf5a4b{position:absolute;bottom:-22px;font-size:12px;width:50px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.name--ingame.svelte-rf5a4b{color:#5c7e10}.name--online.svelte-rf5a4b{color:#57cbde}.status.svelte-rf5a4b::after{content:'';position:absolute;width:50px;height:2px;bottom:-28px}.ingame.svelte-rf5a4b::after{background-color:#5c7e10}.online.svelte-rf5a4b::after{background-color:#57cbde}.offline.svelte-rf5a4b{opacity:0.6}.offline.svelte-rf5a4b::after{background-color:#A0A0A0}",
	map: "{\"version\":3,\"file\":\"RecentChat.svelte\",\"sources\":[\"RecentChat.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let image, status, name;\\n</script>\\n\\n<!-- status codes\\n\\t1 = ingame, 2 online, 3 offline\\nstatus codes -->\\n\\n<div id=\\\"imageholder\\\"\\n\\t class={status === 1 ? \\\"status ingame\\\" : ''}{status === 2 ? \\\"status online\\\" : ''}{status === 3 ? \\\"status offline\\\" : ''} style=\\\"background-image: url({image});\\\">\\n\\t<div id=\\\"name\\\"\\n\\t\\t class={status === 1 ? \\\"name--ingame\\\" : ''}{status === 2 ? \\\"name--online\\\" : ''}{status === 3 ? \\\"status offline\\\" : ''}>\\n\\t{name}\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t#imageholder{\\n\\t\\theight: 50px;\\n\\t\\twidth: 50px;\\n\\t\\tbackground-position: center;\\n  \\t\\tbackground-repeat: no-repeat;\\n  \\t\\tbackground-size: cover;\\n  \\t\\tborder-radius: 2px;\\n  \\t\\tmargin-right: 20px;\\n  \\t\\tposition: relative;\\n\\t}\\n\\n\\t#name {\\n\\t\\tposition: absolute;\\n\\t\\tbottom: -22px;\\n\\t\\tfont-size: 12px;\\n\\t\\twidth: 50px;\\n\\t\\twhite-space: nowrap;\\n\\t\\toverflow: hidden;\\n\\t\\ttext-overflow: ellipsis;\\n\\t}\\n\\n\\t.name--ingame{\\n\\t\\tcolor: #5c7e10;\\n\\t}\\n\\n\\t.name--online{\\n\\t\\tcolor: #57cbde;\\n\\t}\\n\\n\\t.name--offline{\\n\\t\\tcolor: #A0A0A0;\\n\\t}\\n\\n\\t.status::after{\\n\\t\\tcontent: '';\\n\\t\\tposition: absolute;\\n\\t\\twidth: 50px;\\n\\t\\theight: 2px;\\n\\t\\tbottom: -28px;\\n\\t}\\n\\n\\t.ingame::after{\\n\\t\\tbackground-color: #5c7e10;\\n\\t}\\n\\n\\t.online::after{\\n\\t\\tbackground-color: #57cbde;\\n\\t}\\n\\n\\t.offline{\\n\\t\\topacity: 0.6;\\n\\t}\\n\\n\\t.offline::after{\\n\\t\\tbackground-color: #A0A0A0;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAiBC,0BAAY,CAAC,AACZ,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,mBAAmB,CAAE,MAAM,CACzB,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,aAAa,CAAE,GAAG,CAClB,YAAY,CAAE,IAAI,CAClB,QAAQ,CAAE,QAAQ,AACrB,CAAC,AAED,KAAK,cAAC,CAAC,AACN,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QAAQ,AACxB,CAAC,AAED,2BAAa,CAAC,AACb,KAAK,CAAE,OAAO,AACf,CAAC,AAED,2BAAa,CAAC,AACb,KAAK,CAAE,OAAO,AACf,CAAC,AAMD,qBAAO,OAAO,CAAC,AACd,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,KAAK,AACd,CAAC,AAED,qBAAO,OAAO,CAAC,AACd,gBAAgB,CAAE,OAAO,AAC1B,CAAC,AAED,qBAAO,OAAO,CAAC,AACd,gBAAgB,CAAE,OAAO,AAC1B,CAAC,AAED,sBAAQ,CAAC,AACR,OAAO,CAAE,GAAG,AACb,CAAC,AAED,sBAAQ,OAAO,CAAC,AACf,gBAAgB,CAAE,OAAO,AAC1B,CAAC\"}"
};

const RecentChat = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { image } = $$props, { status } = $$props, { name } = $$props;
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	$$result.css.add(css$e);

	return `

<div id="${"imageholder"}" class="${escape(status === 1 ? "status ingame" : "") + escape(status === 2 ? "status online" : "") + escape(status === 3 ? "status offline" : "") + " svelte-rf5a4b"}" style="${"background-image: url(" + escape(image) + ");"}"><div id="${"name"}" class="${escape(status === 1 ? "name--ingame" : "") + escape(status === 2 ? "name--online" : "") + escape(status === 3 ? "status offline" : "") + " svelte-rf5a4b"}">${escape(name)}</div>
</div>`;
});

/* src/components/RecentChats.svelte generated by Svelte v3.22.2 */

const css$f = {
	code: "h3.svelte-15bq6de{color:#a7d6f0;text-transform:uppercase;font-weight:500;font-size:12px;padding:0px 30px}#list.svelte-15bq6de{margin:14px 0px;padding-left:30px;display:flex;align-items:center}#card.svelte-15bq6de{position:sticky;padding-top:30px;top:60px;height:120px;background-color:black;z-index:999}",
	map: "{\"version\":3,\"file\":\"RecentChats.svelte\",\"sources\":[\"RecentChats.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport RecentChat from './RecentChat.svelte'\\n\\n\\texport let title;\\n</script>\\n\\n<!-- status codes\\n\\t1 = ingame, 2 online, 3 offline\\nstatus codes -->\\n\\n<div id=\\\"card\\\">\\n\\t<h3>Recent Chats</h3>\\n\\t<div id=\\\"list\\\">\\n\\t\\t<RecentChat image=\\\"friendone.png\\\" status={1} name=\\\"bingotheslayeer\\\" />\\n\\t\\t<RecentChat image=\\\"friendtwo.png\\\" status={2} name=\\\"fatherdeath\\\" />\\n\\t\\t<RecentChat image=\\\"friendthree.png\\\" status={2} name=\\\"pyschotherapist\\\" />\\n\\t\\t<RecentChat image=\\\"friendfour.png\\\" status={3} name=\\\"fatfather64\\\" />\\n\\t</div>\\n</div>\\n\\n<style>\\n\\th3{\\n\\t\\tcolor: #a7d6f0;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tfont-weight: 500;\\n\\t\\tfont-size: 12px;\\n\\t\\tpadding: 0px 30px;\\n\\t}\\n\\n\\t#list {\\n\\t\\tmargin: 14px 0px;\\n\\t\\tpadding-left: 30px;\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\t#tabs{\\n\\t\\tdisplay: flex;\\n\\t}\\n\\n\\t#card{\\n\\t\\tposition: sticky;\\n\\t\\tpadding-top: 30px;\\n\\t\\ttop: 60px;\\n\\t\\theight: 120px;\\n\\t\\tbackground-color: black;\\n\\t\\tz-index: 999;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAqBC,iBAAE,CAAC,AACF,KAAK,CAAE,OAAO,CACd,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CAAC,IAAI,AAClB,CAAC,AAED,KAAK,eAAC,CAAC,AACN,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,YAAY,CAAE,IAAI,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,AACpB,CAAC,AAMD,oBAAK,CAAC,AACL,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,IAAI,CACjB,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,GAAG,AACb,CAAC\"}"
};

const RecentChats = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	$$result.css.add(css$f);

	return `

<div id="${"card"}" class="${"svelte-15bq6de"}"><h3 class="${"svelte-15bq6de"}">Recent Chats</h3>
	<div id="${"list"}" class="${"svelte-15bq6de"}">${validate_component(RecentChat, "RecentChat").$$render(
		$$result,
		{
			image: "friendone.png",
			status: 1,
			name: "bingotheslayeer"
		},
		{},
		{}
	)}
		${validate_component(RecentChat, "RecentChat").$$render(
		$$result,
		{
			image: "friendtwo.png",
			status: 2,
			name: "fatherdeath"
		},
		{},
		{}
	)}
		${validate_component(RecentChat, "RecentChat").$$render(
		$$result,
		{
			image: "friendthree.png",
			status: 2,
			name: "pyschotherapist"
		},
		{},
		{}
	)}
		${validate_component(RecentChat, "RecentChat").$$render(
		$$result,
		{
			image: "friendfour.png",
			status: 3,
			name: "fatfather64"
		},
		{},
		{}
	)}</div>
</div>`;
});

/* src/components/ChatsTile.svelte generated by Svelte v3.22.2 */

const css$g = {
	code: "li.svelte-16yjp43{display:flex;align-items:center;padding:14px 0px}#username.svelte-16yjp43{color:#5c7e10}#usergame.svelte-16yjp43,#lastonline.svelte-16yjp43{font-size:12px}#usergame.svelte-16yjp43{color:#5c7e10}#lastonline.svelte-16yjp43{color:#9099a1}.onlineusername.svelte-16yjp43{color:#6fbfec !important;opacity:0.8}.onlinegamename.svelte-16yjp43{color:#a7d6f0 !important;opacity:0.8}.offline.svelte-16yjp43{color:#eaeaea !important}#userimage.svelte-16yjp43{width:40px;height:40px;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:2px}.status.svelte-16yjp43::after{content:'';position:absolute;width:3px;height:40px;margin-left:44px}.ingame.svelte-16yjp43::after{background-color:#5c7e10}.online.svelte-16yjp43::after{background-color:#57cbde}.offline.svelte-16yjp43::after{background-color:#9099a1}#info.svelte-16yjp43{margin-left:15px}.statusoffline.svelte-16yjp43{opacity:0.6 !important}",
	map: "{\"version\":3,\"file\":\"ChatsTile.svelte\",\"sources\":[\"ChatsTile.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let userName, gameName, userImage, status, timestamp, offline;\\n</script>\\n\\n<!-- status codes\\n\\t1 = ingame, 2 online, 3 offline\\nstatus codes -->\\n\\n<li class={status === 1 ? \\\"status ingame\\\" : \\\"\\\"}{status === 2 ? \\\"status online\\\" : \\\"\\\"}{status === 3 ? \\\"status offline statusoffline\\\"  : \\\"\\\"}>\\n\\t<div id=\\\"userimage\\\" style=\\\"background-image:url({userImage});\\\"></div>\\n\\t<div id=\\\"info\\\">\\n\\t\\t\\t<div id=\\\"username\\\" class={!gameName ? \\\"onlineusername\\\" : ''}>{userName}</div>\\n\\t\\t{#if !offline}\\n\\t\\t\\t<div id=\\\"usergame\\\" class={!gameName ? \\\"onlinegamename\\\" : ''}>{!gameName ? 'Online' : gameName}</div>\\n\\t\\t{:else if offline}\\n\\t\\t\\t<div id=\\\"lastonline\\\">Last online {timestamp} days ago</div>\\n\\t\\t{/if}\\n\\t</div>\\n</li>\\n\\n<style>\\n\\tli{\\n\\t\\tdisplay: flex;\\n\\t\\talign-items: center;\\n\\t\\tpadding: 14px 0px;\\n\\t}\\n\\n\\t#username{\\n\\t\\tcolor: #5c7e10;\\n\\t}\\n\\n\\t#usergame, #lastonline{\\n\\t\\tfont-size: 12px;\\n\\t}\\n\\n\\t#usergame {\\n\\t\\tcolor: #5c7e10;\\n\\t}\\n\\n\\t#lastonline {\\n\\t\\tcolor: #9099a1;\\n\\t}\\n\\n\\t.onlineusername{\\n\\t\\tcolor: #6fbfec !important;\\n\\t\\topacity: 0.8;\\n\\t}\\n\\n\\t.onlinegamename{\\n\\t\\tcolor: #a7d6f0 !important;\\n\\t\\topacity: 0.8;\\n\\t}\\n\\n\\t.offline{\\n\\t\\tcolor: #eaeaea !important;\\n\\t}\\n\\n\\t#userimage{\\n\\t\\twidth: 40px;\\n\\t\\theight: 40px;\\n\\t\\tbackground-position: center;\\n  \\t\\tbackground-repeat: no-repeat;\\n  \\t\\tbackground-size: cover;\\n  \\t\\tborder-radius: 2px;\\n\\t}\\n\\n\\t.status::after{\\n\\t\\tcontent: '';\\n\\t\\tposition: absolute;\\n\\t\\twidth: 3px;\\n\\t\\theight: 40px;\\n\\t\\tmargin-left: 44px;\\n\\t}\\n\\n\\t.ingame::after{\\n\\t\\tbackground-color: #5c7e10;\\n\\t}\\n\\n\\t.online::after{\\n\\t\\tbackground-color: #57cbde;\\n\\t}\\n\\n\\n\\t.offline::after{\\n\\t\\tbackground-color: #9099a1;\\n\\t}\\n\\n\\t#info{\\n\\t\\tmargin-left: 15px;\\n\\t}\\t\\n\\n\\t.statusoffline{\\n\\t\\topacity: 0.6 !important;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAqBC,iBAAE,CAAC,AACF,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CAAC,GAAG,AAClB,CAAC,AAED,wBAAS,CAAC,AACT,KAAK,CAAE,OAAO,AACf,CAAC,AAED,wBAAS,CAAE,0BAAW,CAAC,AACtB,SAAS,CAAE,IAAI,AAChB,CAAC,AAED,SAAS,eAAC,CAAC,AACV,KAAK,CAAE,OAAO,AACf,CAAC,AAED,WAAW,eAAC,CAAC,AACZ,KAAK,CAAE,OAAO,AACf,CAAC,AAED,8BAAe,CAAC,AACf,KAAK,CAAE,OAAO,CAAC,UAAU,CACzB,OAAO,CAAE,GAAG,AACb,CAAC,AAED,8BAAe,CAAC,AACf,KAAK,CAAE,OAAO,CAAC,UAAU,CACzB,OAAO,CAAE,GAAG,AACb,CAAC,AAED,uBAAQ,CAAC,AACR,KAAK,CAAE,OAAO,CAAC,UAAU,AAC1B,CAAC,AAED,yBAAU,CAAC,AACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,mBAAmB,CAAE,MAAM,CACzB,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,aAAa,CAAE,GAAG,AACrB,CAAC,AAED,sBAAO,OAAO,CAAC,AACd,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IAAI,AAClB,CAAC,AAED,sBAAO,OAAO,CAAC,AACd,gBAAgB,CAAE,OAAO,AAC1B,CAAC,AAED,sBAAO,OAAO,CAAC,AACd,gBAAgB,CAAE,OAAO,AAC1B,CAAC,AAGD,uBAAQ,OAAO,CAAC,AACf,gBAAgB,CAAE,OAAO,AAC1B,CAAC,AAED,oBAAK,CAAC,AACL,WAAW,CAAE,IAAI,AAClB,CAAC,AAED,6BAAc,CAAC,AACd,OAAO,CAAE,GAAG,CAAC,UAAU,AACxB,CAAC\"}"
};

const ChatsTile = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { userName } = $$props,
		{ gameName } = $$props,
		{ userImage } = $$props,
		{ status } = $$props,
		{ timestamp } = $$props,
		{ offline } = $$props;

	if ($$props.userName === void 0 && $$bindings.userName && userName !== void 0) $$bindings.userName(userName);
	if ($$props.gameName === void 0 && $$bindings.gameName && gameName !== void 0) $$bindings.gameName(gameName);
	if ($$props.userImage === void 0 && $$bindings.userImage && userImage !== void 0) $$bindings.userImage(userImage);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.timestamp === void 0 && $$bindings.timestamp && timestamp !== void 0) $$bindings.timestamp(timestamp);
	if ($$props.offline === void 0 && $$bindings.offline && offline !== void 0) $$bindings.offline(offline);
	$$result.css.add(css$g);

	return `

<li class="${escape(status === 1 ? "status ingame" : "") + escape(status === 2 ? "status online" : "") + escape(status === 3 ? "status offline statusoffline" : "") + " svelte-16yjp43"}"><div id="${"userimage"}" style="${"background-image:url(" + escape(userImage) + ");"}" class="${"svelte-16yjp43"}"></div>
	<div id="${"info"}" class="${"svelte-16yjp43"}"><div id="${"username"}" class="${escape(null_to_empty(!gameName ? "onlineusername" : "")) + " svelte-16yjp43"}">${escape(userName)}</div>
		${!offline
	? `<div id="${"usergame"}" class="${escape(null_to_empty(!gameName ? "onlinegamename" : "")) + " svelte-16yjp43"}">${escape(!gameName ? "Online" : gameName)}</div>`
	: `${offline
		? `<div id="${"lastonline"}" class="${"svelte-16yjp43"}">Last online ${escape(timestamp)} days ago</div>`
		: ``}`}</div>
</li>`;
});

/* src/components/Chats.svelte generated by Svelte v3.22.2 */

const css$h = {
	code: "#tabs.svelte-16sc42{display:flex;padding:0px 30px;width:150px;justify-content:space-between;align-items:center}h3.svelte-16sc42{color:#9099a1;text-transform:uppercase;font-weight:500;font-size:12px}ul.svelte-16sc42{list-style:none;padding:0px 30px;background-color:#0f0b20;position:relative;margin:0}#card.svelte-16sc42{margin-top:30px}.selectedtab.svelte-16sc42{color:#a7d6f0}#tabscontainer.svelte-16sc42{position:sticky;padding-top:30px;padding-bottom:10px;top:200px;z-index:998;background-color:black}",
	map: "{\"version\":3,\"file\":\"Chats.svelte\",\"sources\":[\"Chats.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport ChatsTile from './ChatsTile.svelte';\\n\\n\\tlet offline = false, onlineusers = 3, offlineusers = 2;\\n\\n\\n</script>\\n\\n<!-- status codes\\n\\t1 = ingame, 2 online, 3 offline\\nstatus codes -->\\n\\n<div id=\\\"card\\\">\\n\\t<div id=\\\"tabscontainer\\\">\\n\\t\\t<div id=\\\"tabs\\\">\\n\\t\\t\\t<h3 class={!offline ? \\\"selectedtab\\\" : ''} on:click={() => {offline = false}}>Online ({onlineusers})</h3>\\n\\t\\t\\t<h3 class={offline ? \\\"selectedtab\\\" : ''} on:click={() => {offline = true}}>Offline ({offlineusers})</h3>\\n\\t\\t</div>\\n\\t</div>\\n\\t{#if !offline}\\n\\t\\t<ul>\\n\\t\\t\\t<ChatsTile userName=\\\"bingotheslayer\\\" gameName=\\\"Dank Souls 3\\\" userImage=\\\"friendone.png\\\" status={1} {offline} />\\n\\t\\t\\t<ChatsTile userName=\\\"fatherdeath\\\" userImage=\\\"friendtwo.png\\\" status={2} {offline} />\\n\\t\\t\\t<ChatsTile userName=\\\"pyschotherapist\\\" userImage=\\\"friendthree.png\\\" status={2} {offline} />\\n\\t\\t</ul>\\n\\t{/if}\\n\\t{#if offline}\\n\\t\\t<ul>\\n\\t\\t\\t<ChatsTile userName=\\\"fatfather64\\\" gameName=\\\"Grand Theft Auto: San Andreas\\\" userImage=\\\"friendfour.png\\\" status={3} {offline} timestamp=\\\"6\\\" />\\n\\t\\t\\t<ChatsTile userName=\\\"dingdongding\\\" gameName=\\\"Grand Theft Auto: San Andreas\\\" userImage=\\\"profilepicture.jpg\\\" status={3} {offline} timestamp=\\\"12\\\"  />\\n\\t\\t</ul>\\n\\t{/if}\\n</div>\\n\\n<style>\\n\\t#tabs{\\n\\t\\tdisplay: flex;\\n\\t\\tpadding: 0px 30px;\\n\\t\\twidth: 150px;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t}\\n\\n\\th3{\\n\\t\\tcolor: #9099a1;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tfont-weight: 500;\\n\\t\\tfont-size: 12px;\\n\\t}\\n\\n\\tul{\\n\\t\\tlist-style: none;\\n\\t\\tpadding: 0px 30px;\\n\\t\\tbackground-color: #0f0b20;\\n\\t\\tposition: relative;\\n\\t\\tmargin: 0;\\n\\t}\\n\\n\\t#card{\\n\\t\\tmargin-top: 30px;\\n\\t}\\n\\n\\t.selectedtab{\\n\\t\\tcolor: #a7d6f0;\\n\\t}\\n\\n\\t#tabscontainer{\\n\\t\\tposition: sticky;\\n\\t\\tpadding-top: 30px;\\n\\t\\tpadding-bottom: 10px;\\n\\t\\ttop: 200px;\\n\\t\\tz-index: 998;\\n\\t\\tbackground-color: black;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAmCC,mBAAK,CAAC,AACL,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,KAAK,CAAE,KAAK,CACZ,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,AACpB,CAAC,AAED,gBAAE,CAAC,AACF,KAAK,CAAE,OAAO,CACd,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,AAChB,CAAC,AAED,gBAAE,CAAC,AACF,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,gBAAgB,CAAE,OAAO,CACzB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,AACV,CAAC,AAED,mBAAK,CAAC,AACL,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,0BAAY,CAAC,AACZ,KAAK,CAAE,OAAO,AACf,CAAC,AAED,4BAAc,CAAC,AACd,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,CACpB,GAAG,CAAE,KAAK,CACV,OAAO,CAAE,GAAG,CACZ,gBAAgB,CAAE,KAAK,AACxB,CAAC\"}"
};

const Chats = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let offline = false, onlineusers = 3, offlineusers = 2;
	$$result.css.add(css$h);

	return `

<div id="${"card"}" class="${"svelte-16sc42"}"><div id="${"tabscontainer"}" class="${"svelte-16sc42"}"><div id="${"tabs"}" class="${"svelte-16sc42"}"><h3 class="${escape(null_to_empty( "selectedtab" )) + " svelte-16sc42"}">Online (${escape(onlineusers)})</h3>
			<h3 class="${escape(null_to_empty( "")) + " svelte-16sc42"}">Offline (${escape(offlineusers)})</h3></div></div>
	${ `<ul class="${"svelte-16sc42"}">${validate_component(ChatsTile, "ChatsTile").$$render(
			$$result,
			{
				userName: "bingotheslayer",
				gameName: "Dank Souls 3",
				userImage: "friendone.png",
				status: 1,
				offline
			},
			{},
			{}
		)}
			${validate_component(ChatsTile, "ChatsTile").$$render(
			$$result,
			{
				userName: "fatherdeath",
				userImage: "friendtwo.png",
				status: 2,
				offline
			},
			{},
			{}
		)}
			${validate_component(ChatsTile, "ChatsTile").$$render(
			$$result,
			{
				userName: "pyschotherapist",
				userImage: "friendthree.png",
				status: 2,
				offline
			},
			{},
			{}
		)}</ul>`
	}
	${ ``}
</div>`;
});

/* src/routes/chat.svelte generated by Svelte v3.22.2 */

const css$i = {
	code: "#chat.svelte-18avg01{padding:40px 0px;padding-right:0;padding-bottom:80px}",
	map: "{\"version\":3,\"file\":\"chat.svelte\",\"sources\":[\"chat.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Navbar from '../components/Navbar.svelte';\\n\\timport Tabbar from '../components/Tabbar.svelte';\\n\\timport RecentChats from '../components/RecentChats.svelte';\\n\\timport Chats from '../components/Chats.svelte';\\n</script>\\n\\n<svelte:head>\\n\\t<title>Chat :: Steam Mobile</title>\\n</svelte:head>\\n\\n<Navbar title=\\\"Chat\\\" />\\n<div id=\\\"chat\\\">\\n\\t<!-- Need to make x-scrollable and add notification bubble-->\\n\\t<RecentChats title=\\\"Recent Chats\\\" />\\n\\t<!-- Need to make x-scrollable and add notification bubble-->\\n\\t<Chats />\\n</div>\\n<Tabbar location={4} />\\n\\n<style>\\n\\t#chat{\\n\\t\\tpadding: 40px 0px;\\n\\t\\tpadding-right: 0;\\n\\t\\tpadding-bottom: 80px;\\n\\t}\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAqBC,oBAAK,CAAC,AACL,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,aAAa,CAAE,CAAC,CAChB,cAAc,CAAE,IAAI,AACrB,CAAC\"}"
};

const Chat = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$i);

	return `${($$result.head += `${($$result.title = `<title>Chat :: Steam Mobile</title>`, "")}`, "")}

${validate_component(Navbar, "Navbar").$$render($$result, { title: "Chat" }, {}, {})}
<div id="${"chat"}" class="${"svelte-18avg01"}">
	${validate_component(RecentChats, "RecentChats").$$render($$result, { title: "Recent Chats" }, {}, {})}
	
	${validate_component(Chats, "Chats").$$render($$result, {}, {}, {})}</div>
${validate_component(Tabbar, "Tabbar").$$render($$result, { location: 4 }, {}, {})}`;
});

/* src/routes/_layout.svelte generated by Svelte v3.22.2 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<main>${$$slots.default ? $$slots.default({}) : ``}</main>`;
});

/* src/routes/_error.svelte generated by Svelte v3.22.2 */

const css$j = {
	code: "@media(min-width: 480px){}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = undefined === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n\"],\"names\":[],\"mappings\":\"AAsBC,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAI3B,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$j);
	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}`;
});

// This file is generated by Sapper — do not edit it!

const manifest = {
	server_routes: [
		{
			// stores.js
			pattern: /^\/stores\/?$/,
			handlers: route_0,
			params: () => ({})
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Routes }
			]
		},

		{
			// profile.svelte
			pattern: /^\/profile\/?$/,
			parts: [
				{ name: "profile", file: "profile.svelte", component: Profile }
			]
		},

		{
			// support.svelte
			pattern: /^\/support\/?$/,
			parts: [
				{ name: "support", file: "support.svelte", component: Support }
			]
		},

		{
			// store.svelte
			pattern: /^\/store\/?$/,
			parts: [
				{ name: "store", file: "store.svelte", component: Store }
			]
		},

		{
			// chat.svelte
			pattern: /^\/chat\/?$/,
			parts: [
				{ name: "chat", file: "chat.svelte", component: Chat }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/build";

const CONTEXT_KEY = {};

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.22.2 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  (assets => () => assets)(JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8')));

	const template =  (str => () => str)(read_template(build_dir));

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  'Internal server error';

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'max-age=600');

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		const session = session_getter(req, res);

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				if (opts) {
					opts = Object.assign({}, opts);

					const include_cookies = (
						opts.credentials === 'include' ||
						opts.credentials === 'same-origin' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
					);

					if (include_cookies) {
						opts.headers = Object.assign({}, opts.headers);

						const cookies = Object.assign(
							{},
							cookie.parse(req.headers.cookie || ''),
							cookie.parse(opts.headers.cookie || '')
						);

						const set_cookie = res.getHeader('Set-Cookie');
						(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
							const match = /([^=]+)=([^;]+)/.exec(str);
							if (match) cookies[match[1]] = match[2];
						});

						const str = Object.keys(cookies)
							.map(key => `${key}=${cookies[key]}`)
							.join('; ');

						opts.headers.cookie = str;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && try_serialize(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'max-age=31536000, immutable'
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const cache = new Map();

	const read =  (file) => (cache.has(file) ? cache : cache.set(file, fs.readFileSync(path.join(build_dir, file)))).get(file);

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
