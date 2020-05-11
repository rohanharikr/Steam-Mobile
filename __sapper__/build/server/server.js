'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var Headroom = _interopDefault(require('svelte-headroom'));
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

const username = writable('bingotheslayer');

var route_0 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    username: username
});

/* src/components/Navbar.svelte generated by Svelte v3.22.2 */

const css = {
	code: "#navbar.svelte-13oo9il.svelte-13oo9il{background-color:#0a1226;height:60px;display:flex;justify-content:space-between;align-items:center;padding:0px 20px;color:#027aff;font-weight:500;font-size:16px}#navbar--right.svelte-13oo9il.svelte-13oo9il{display:flex}#navbar--right.svelte-13oo9il div.svelte-13oo9il{padding-right:30px}#navbar--right.svelte-13oo9il div.svelte-13oo9il::after{content:'';position:absolute;width:1px;height:24px;background-color:#9099a1;opacity:0.2;top:18px;margin-left:15px}",
	map: "{\"version\":3,\"file\":\"Navbar.svelte\",\"sources\":[\"Navbar.svelte\"],\"sourcesContent\":[\"<script>\\n  import Headroom from 'svelte-headroom'\\n  export let title\\n</script>\\n\\n<Headroom offset={50} tolerance={5}>\\n  <div id=\\\"navbar\\\">\\n    <img src=\\\"steambrand.svg\\\" height=\\\"28px\\\" style=\\\"opacity: 0.6\\\" />\\n    <div id=\\\"navbar--right\\\">\\n      <div style=\\\"opacity: 0.6\\\">{title}</div>\\n      <img src=\\\"search.svg\\\" />\\n    </div>\\n  </div>\\n</Headroom>\\n\\n<style>\\n  #navbar {\\n    background-color: #0a1226;\\n    height: 60px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0px 20px;\\n    color: #027aff;\\n    font-weight: 500;\\n    font-size: 16px;\\n  }\\n\\n  #navbar--right {\\n    display: flex;\\n  }\\n\\n  #navbar--right div {\\n    padding-right: 30px;\\n  }\\n\\n  #navbar--right div::after {\\n    content: '';\\n    position: absolute;\\n    width: 1px;\\n    height: 24px;\\n    background-color: #9099a1;\\n    opacity: 0.2;\\n    top: 18px;\\n    margin-left: 15px;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAgBE,OAAO,8BAAC,CAAC,AACP,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,cAAc,8BAAC,CAAC,AACd,OAAO,CAAE,IAAI,AACf,CAAC,AAED,6BAAc,CAAC,GAAG,eAAC,CAAC,AAClB,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,6BAAc,CAAC,kBAAG,OAAO,AAAC,CAAC,AACzB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,GAAG,CACZ,GAAG,CAAE,IAAI,CACT,WAAW,CAAE,IAAI,AACnB,CAAC\"}"
};

const Navbar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	$$result.css.add(css);

	return `${validate_component(Headroom, "Headroom").$$render($$result, { offset: 50, tolerance: 5 }, {}, {
		default: () => `<div id="${"navbar"}" class="${"svelte-13oo9il"}"><img src="${"steambrand.svg"}" height="${"28px"}" style="${"opacity: 0.6"}">
    <div id="${"navbar--right"}" class="${"svelte-13oo9il"}"><div style="${"opacity: 0.6"}" class="${"svelte-13oo9il"}">${escape(title)}</div>
      <img src="${"search.svg"}"></div></div>
`
	})}`;
});

/* src/components/Tabbar.svelte generated by Svelte v3.22.2 */

const css$1 = {
	code: "#tabbar.svelte-1paas4.svelte-1paas4{background-color:#171a21;height:65px;display:flex;justify-content:space-between;align-items:center;padding:0px 30px;color:#9099a1;font-weight:500;position:fixed;bottom:0;left:0;right:0;z-index:999}.tabItem.svelte-1paas4.svelte-1paas4{display:flex;flex-direction:column;font-size:12px;align-items:center}.tabItem.svelte-1paas4 img.svelte-1paas4{margin-bottom:6px;height:20px}.selected.svelte-1paas4.svelte-1paas4{color:white;font-weight:600}",
	map: "{\"version\":3,\"file\":\"Tabbar.svelte\",\"sources\":[\"Tabbar.svelte\"],\"sourcesContent\":[\"<script>\\n  export let location\\n</script>\\n\\n<div id=\\\"tabbar\\\">\\n  <a href=\\\"store\\\">\\n    <div class=\\\"tabItem {location === 1 ? 'selected' : ''}\\\">\\n      <img src={location == 1 ? 'store-active.svg' : 'store.svg'} />\\n      Store\\n    </div>\\n  </a>\\n  <a href=\\\"profile\\\">\\n    <div class=\\\"tabItem {location === 2 ? 'selected' : ''}\\\">\\n      <img src={location == 2 ? 'profile-active.svg' : 'profile.svg'} />\\n      Profile\\n    </div>\\n  </a>\\n  <a href=\\\"./\\\">\\n    <div class=\\\"tabItem {location === 3 ? 'selected' : ''}\\\">\\n      <img src={location == 3 ? 'guard-active.svg' : 'guard.svg'} />\\n      Guard\\n    </div>\\n  </a>\\n  <a href=\\\"chat\\\">\\n    <div class=\\\"tabItem {location === 4 ? 'selected' : ''}\\\">\\n      <img src={location == 4 ? 'chat-active.svg' : 'chat.svg'} />\\n      Chat\\n    </div>\\n  </a>\\n  <a href=\\\"support\\\">\\n    <div class=\\\"tabItem {location === 5 ? 'selected' : ''}\\\">\\n      <img src={location == 5 ? 'support-active.svg' : 'support.svg'} />\\n      Support\\n    </div>\\n  </a>\\n</div>\\n\\n<style>\\n  #tabbar {\\n    background-color: #171a21;\\n    height: 65px;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    padding: 0px 30px;\\n    color: #9099a1;\\n    font-weight: 500;\\n    position: fixed;\\n    bottom: 0;\\n    left: 0;\\n    right: 0;\\n    z-index: 999;\\n  }\\n\\n  .tabItem {\\n    display: flex;\\n    flex-direction: column;\\n    font-size: 12px;\\n    align-items: center;\\n  }\\n\\n  .tabItem img {\\n    margin-bottom: 6px;\\n    height: 20px;\\n  }\\n\\n  .selected {\\n    color: white;\\n    font-weight: 600;\\n  }\\n\\n  svg {\\n    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAsCE,OAAO,4BAAC,CAAC,AACP,gBAAgB,CAAE,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,CAAC,CACR,OAAO,CAAE,GAAG,AACd,CAAC,AAED,QAAQ,4BAAC,CAAC,AACR,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,MAAM,AACrB,CAAC,AAED,sBAAQ,CAAC,GAAG,cAAC,CAAC,AACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,AACd,CAAC,AAED,SAAS,4BAAC,CAAC,AACT,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,GAAG,AAClB,CAAC\"}"
};

const Tabbar = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { location } = $$props;
	if ($$props.location === void 0 && $$bindings.location && location !== void 0) $$bindings.location(location);
	$$result.css.add(css$1);

	return `<div id="${"tabbar"}" class="${"svelte-1paas4"}"><a href="${"store"}"><div class="${"tabItem " + escape(location === 1 ? "selected" : "") + " svelte-1paas4"}"><img${add_attribute("src", location == 1 ? "store-active.svg" : "store.svg", 0)} class="${"svelte-1paas4"}">
      Store
    </div></a>
  <a href="${"profile"}"><div class="${"tabItem " + escape(location === 2 ? "selected" : "") + " svelte-1paas4"}"><img${add_attribute("src", location == 2 ? "profile-active.svg" : "profile.svg", 0)} class="${"svelte-1paas4"}">
      Profile
    </div></a>
  <a href="${"./"}"><div class="${"tabItem " + escape(location === 3 ? "selected" : "") + " svelte-1paas4"}"><img${add_attribute("src", location == 3 ? "guard-active.svg" : "guard.svg", 0)} class="${"svelte-1paas4"}">
      Guard
    </div></a>
  <a href="${"chat"}"><div class="${"tabItem " + escape(location === 4 ? "selected" : "") + " svelte-1paas4"}"><img${add_attribute("src", location == 4 ? "chat-active.svg" : "chat.svg", 0)} class="${"svelte-1paas4"}">
      Chat
    </div></a>
  <a href="${"support"}"><div class="${"tabItem " + escape(location === 5 ? "selected" : "") + " svelte-1paas4"}"><img${add_attribute("src", location == 5 ? "support-active.svg" : "support.svg", 0)} class="${"svelte-1paas4"}">
      Support
    </div></a>
</div>`;
});

/* src/components/SteamGuard.svelte generated by Svelte v3.22.2 */

const css$2 = {
	code: "#wrapper.svelte-e6vlhl{width:100%;height:145px;padding-top:90px}#code.svelte-e6vlhl{font-size:52px;font-weight:400;text-align:center;letter-spacing:4px;transition:0.5s}#username.svelte-e6vlhl{color:#a7d6f0;font-size:14px;opacity:0.8}.timerbar.svelte-e6vlhl{right:0;left:0;margin-right:auto;margin-left:auto;min-height:8px;top:90px;transform:scale(0.8);transition:0.5s}.trail.svelte-e6vlhl{background-color:#1c1c1c;position:absolute;z-index:-999;opacity:0.6}",
	map: "{\"version\":3,\"file\":\"SteamGuard.svelte\",\"sources\":[\"SteamGuard.svelte\"],\"sourcesContent\":[\"<script>\\n  // import { onDestroy } from 'svelte'\\n  import { username } from '../routes/stores.js'\\n\\n  let percentage = 0\\n  let code\\n\\n  function onInterval(callback, time) {\\n    const interval = setInterval(callback, time)\\n\\n    // onDestroy(() => {\\n    // clearInterval(interval);\\n    // });\\n  }\\n\\n  function codegen() {\\n    code = Math.random().toString(36).slice(-5).toUpperCase()\\n  }\\n\\n  onInterval(function check() {\\n    if (percentage < 9) {\\n      ++percentage\\n    } else {\\n      percentage = 0\\n      codegen()\\n    }\\n  }, 1000)\\n\\n  let username_value\\n\\n  const unsubscribe = username.subscribe((value) => {\\n    username_value = value\\n  })\\n</script>\\n\\n<div id=\\\"wrapper\\\">\\n  <div\\n    class=\\\"timerbar\\\"\\n    style=\\\"width: {100 - percentage * 10}%; background-image: {percentage >= 7 ? 'linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)' : 'linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)'};\\n    z-index: 9999\\\" />\\n  <div class=\\\"timerbar trail\\\" />\\n  <div id=\\\"code\\\" style=\\\"color: {percentage >= 7 ? '#AD2821' : 'white'}\\\">\\n    {code || codegen()}\\n  </div>\\n  <div id=\\\"username\\\">{username_value}</div>\\n</div>\\n\\n<style>\\n  #wrapper {\\n    width: 100%;\\n    height: 145px;\\n    padding-top: 90px;\\n  }\\n\\n  #code {\\n    font-size: 52px;\\n    font-weight: 400;\\n    text-align: center;\\n    letter-spacing: 4px;\\n    transition: 0.5s;\\n  }\\n\\n  #username {\\n    color: #a7d6f0;\\n    font-size: 14px;\\n    opacity: 0.8;\\n  }\\n\\n  .timerbar {\\n    right: 0;\\n    left: 0;\\n    margin-right: auto;\\n    margin-left: auto;\\n    min-height: 8px;\\n    top: 90px;\\n    transform: scale(0.8);\\n    transition: 0.5s;\\n  }\\n\\n  .trail {\\n    background-color: #1c1c1c;\\n    position: absolute;\\n    z-index: -999;\\n    opacity: 0.6;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAgDE,QAAQ,cAAC,CAAC,AACR,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,WAAW,CAAE,IAAI,AACnB,CAAC,AAED,KAAK,cAAC,CAAC,AACL,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,cAAc,CAAE,GAAG,CACnB,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,SAAS,cAAC,CAAC,AACT,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,AACd,CAAC,AAED,SAAS,cAAC,CAAC,AACT,KAAK,CAAE,CAAC,CACR,IAAI,CAAE,CAAC,CACP,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,GAAG,CACf,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,MAAM,GAAG,CAAC,CACrB,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,MAAM,cAAC,CAAC,AACN,gBAAgB,CAAE,OAAO,CACzB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,AACd,CAAC\"}"
};

function onInterval(callback, time) {
	const interval = setInterval(callback, time);
} // onDestroy(() => {
// clearInterval(interval);

const SteamGuard = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let percentage = 0;
	let code;

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

	return `<div id="${"wrapper"}" class="${"svelte-e6vlhl"}"><div class="${"timerbar svelte-e6vlhl"}" style="${"width: " + escape(100 - percentage * 10) + "%; background-image: " + escape(percentage >= 7
	? "linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)"
	: "linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)") + ";\n    z-index: 9999"}"></div>
  <div class="${"timerbar trail svelte-e6vlhl"}"></div>
  <div id="${"code"}" style="${"color: " + escape(percentage >= 7 ? "#AD2821" : "white")}" class="${"svelte-e6vlhl"}">${escape(code || codegen())}</div>
  <div id="${"username"}" class="${"svelte-e6vlhl"}">${escape(username_value)}</div>
</div>`;
});

/* src/components/SteamMusic.svelte generated by Svelte v3.22.2 */

const SteamMusic = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div id="${"player"}" class="${"svelte-1ja8oyv"}"></div>`;
});

/* src/routes/index.svelte generated by Svelte v3.22.2 */

const css$3 = {
	code: "#guard.svelte-lmiees{padding:0;padding-bottom:60px;text-align:center}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\n  import Navbar from '../components/Navbar.svelte'\\n  import Tabbar from '../components/Tabbar.svelte'\\n  import SteamGuard from '../components/SteamGuard.svelte'\\n  import SteamMusic from '../components/SteamMusic.svelte'\\n</script>\\n\\n<svelte:head>\\n  <title>Guard :: Steam Mobile</title>\\n</svelte:head>\\n\\n<Navbar title=\\\"Guard\\\" />\\n<div id=\\\"guard\\\">\\n  <SteamGuard />\\n  <SteamMusic />\\n</div>\\n<Tabbar location={3} />\\n\\n<style>\\n  #guard {\\n    padding: 0;\\n    padding-bottom: 60px;\\n    text-align: center;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAmBE,MAAM,cAAC,CAAC,AACN,OAAO,CAAE,CAAC,CACV,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,MAAM,AACpB,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$3);

	return `${($$result.head += `${($$result.title = `<title>Guard :: Steam Mobile</title>`, "")}`, "")}

${validate_component(Navbar, "Navbar").$$render($$result, { title: "Guard" }, {}, {})}
<div id="${"guard"}" class="${"svelte-lmiees"}">${validate_component(SteamGuard, "SteamGuard").$$render($$result, {}, {}, {})}
  ${validate_component(SteamMusic, "SteamMusic").$$render($$result, {}, {}, {})}</div>
${validate_component(Tabbar, "Tabbar").$$render($$result, { location: 3 }, {}, {})}`;
});

/* src/routes/profile.svelte generated by Svelte v3.22.2 */

const css$4 = {
	code: "#profile.svelte-11iydj4{padding-bottom:60px}#profilepicture.svelte-11iydj4{border:1px solid #4b90ab;height:90px;border-radius:2px}#top.svelte-11iydj4{margin-top:40px;padding:50px 30px;display:flex;align-items:center;background-image:url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/ef7cb44d312df5038cba0f69a0901da427900645.jpg);height:100px;background-repeat:no-repeat;background-size:cover;background-position:center;padding-bottom:20px}h2.svelte-11iydj4{font-weight:600}h3.svelte-11iydj4{opacity:0.8}h2.svelte-11iydj4,h3.svelte-11iydj4{line-height:1}#maininfo.svelte-11iydj4{margin-left:20px;display:flex;flex-direction:column}",
	map: "{\"version\":3,\"file\":\"profile.svelte\",\"sources\":[\"profile.svelte\"],\"sourcesContent\":[\"<script>\\n  import Navbar from '../components/Navbar.svelte'\\n  import Tabbar from '../components/Tabbar.svelte'\\n  import { username } from './stores.js'\\n\\n  let username_value\\n\\n  const unsubscribe = username.subscribe((value) => {\\n    username_value = value\\n  })\\n</script>\\n\\n<svelte:head>\\n  <title>Profile :: Steam Mobile</title>\\n</svelte:head>\\n\\n<Navbar title=\\\"Profile\\\" />\\n<div id=\\\"profile\\\">\\n  <div id=\\\"top\\\">\\n    <img id=\\\"profilepicture\\\" src=\\\"profilepicture.jpg\\\" />\\n    <div id=\\\"maininfo\\\">\\n      <h2>{username_value}</h2>\\n      <h3>Rohan Harikumar</h3>\\n    </div>\\n  </div>\\n  <div id=\\\"level\\\" />\\n  <div id=\\\"level\\\" />\\n  <div id=\\\"level\\\" />\\n</div>\\n<Tabbar location={2} />\\n\\n<style>\\n  #profile {\\n    padding-bottom: 60px;\\n  }\\n\\n  #profilepicture {\\n    border: 1px solid #4b90ab;\\n    height: 90px;\\n    border-radius: 2px;\\n  }\\n\\n  #top {\\n    margin-top: 40px;\\n    padding: 50px 30px;\\n    display: flex;\\n    align-items: center;\\n    background-image: url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/ef7cb44d312df5038cba0f69a0901da427900645.jpg);\\n    height: 100px;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    background-position: center;\\n    padding-bottom: 20px;\\n  }\\n\\n  h2 {\\n    font-weight: 600;\\n  }\\n\\n  h3 {\\n    opacity: 0.8;\\n  }\\n\\n  h2,\\n  h3 {\\n    line-height: 1;\\n  }\\n\\n  #maininfo {\\n    margin-left: 20px;\\n    display: flex;\\n    flex-direction: column;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAgCE,QAAQ,eAAC,CAAC,AACR,cAAc,CAAE,IAAI,AACtB,CAAC,AAED,eAAe,eAAC,CAAC,AACf,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CACzB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,AACpB,CAAC,AAED,IAAI,eAAC,CAAC,AACJ,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,IAAI,mHAAmH,CAAC,CAC1I,MAAM,CAAE,KAAK,CACb,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,mBAAmB,CAAE,MAAM,CAC3B,cAAc,CAAE,IAAI,AACtB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,WAAW,CAAE,GAAG,AAClB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,OAAO,CAAE,GAAG,AACd,CAAC,AAED,iBAAE,CACF,EAAE,eAAC,CAAC,AACF,WAAW,CAAE,CAAC,AAChB,CAAC,AAED,SAAS,eAAC,CAAC,AACT,WAAW,CAAE,IAAI,CACjB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACxB,CAAC\"}"
};

const Profile = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let username_value;

	const unsubscribe = username.subscribe(value => {
		username_value = value;
	});

	$$result.css.add(css$4);

	return `${($$result.head += `${($$result.title = `<title>Profile :: Steam Mobile</title>`, "")}`, "")}

${validate_component(Navbar, "Navbar").$$render($$result, { title: "Profile" }, {}, {})}
<div id="${"profile"}" class="${"svelte-11iydj4"}"><div id="${"top"}" class="${"svelte-11iydj4"}"><img id="${"profilepicture"}" src="${"profilepicture.jpg"}" class="${"svelte-11iydj4"}">
    <div id="${"maininfo"}" class="${"svelte-11iydj4"}"><h2 class="${"svelte-11iydj4"}">${escape(username_value)}</h2>
      <h3 class="${"svelte-11iydj4"}">Rohan Harikumar</h3></div></div>
  <div id="${"level"}"></div>
  <div id="${"level"}"></div>
  <div id="${"level"}"></div></div>
${validate_component(Tabbar, "Tabbar").$$render($$result, { location: 2 }, {}, {})}`;
});

/* src/components/SupportCardItem.svelte generated by Svelte v3.22.2 */

const css$5 = {
	code: "img.svelte-1tuxmip{height:42px;margin-right:16px}",
	map: "{\"version\":3,\"file\":\"SupportCardItem.svelte\",\"sources\":[\"SupportCardItem.svelte\"],\"sourcesContent\":[\"<script>\\n  export let name, logo, height\\n</script>\\n\\n<img src={logo} style=\\\"height:{height}\\\" />\\n{name}\\n\\n<style>\\n  img {\\n    height: 42px;\\n    margin-right: 16px;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAQE,GAAG,eAAC,CAAC,AACH,MAAM,CAAE,IAAI,CACZ,YAAY,CAAE,IAAI,AACpB,CAAC\"}"
};

const SupportCardItem = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { name } = $$props, { logo } = $$props, { height } = $$props;
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	if ($$props.logo === void 0 && $$bindings.logo && logo !== void 0) $$bindings.logo(logo);
	if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
	$$result.css.add(css$5);

	return `<img${add_attribute("src", logo, 0)} style="${"height:" + escape(height)}" class="${"svelte-1tuxmip"}">
${escape(name)}`;
});

/* src/components/SupportCard.svelte generated by Svelte v3.22.2 */

const css$6 = {
	code: "h3.svelte-mx8qlj.svelte-mx8qlj{color:#027aff;text-transform:uppercase;font-weight:600;font-size:12px;padding:0px 30px;opacity:0.8}ul.svelte-mx8qlj.svelte-mx8qlj{list-style:none;padding:0px 30px;background-color:#0f0b20}ul.svelte-mx8qlj li.svelte-mx8qlj{display:flex;align-items:center;padding:16px 0px}",
	map: "{\"version\":3,\"file\":\"SupportCard.svelte\",\"sources\":[\"SupportCard.svelte\"],\"sourcesContent\":[\"<script>\\n  import SupportCardItem from './SupportCardItem.svelte'\\n\\n  export let title, single, name, icon, combined\\n</script>\\n\\n<div id=\\\"card\\\">\\n  {#if !single && !combined}\\n    <h3>{title}</h3>\\n  {/if}\\n  <ul>\\n    {#if !single && !combined}\\n      <li>\\n        <SupportCardItem name=\\\"Dota 2\\\" logo=\\\"dota2.svg\\\" />\\n      </li>\\n      <li>\\n        <SupportCardItem name=\\\"Stardew Valley\\\" logo=\\\"stardewvalley.svg\\\" />\\n      </li>\\n      <li>\\n        <SupportCardItem name=\\\"Half-Life: Alyx\\\" logo=\\\"halflifealyx.svg\\\" />\\n      </li>\\n    {/if}\\n    {#if single}\\n      <li>\\n        <SupportCardItem {name} logo=\\\"configure.svg\\\" />\\n      </li>\\n    {/if}\\n    {#if combined}\\n      <li>\\n        <SupportCardItem name=\\\"Games, Software, etc.\\\" logo=\\\"games.svg\\\" />\\n      </li>\\n      <li>\\n        <SupportCardItem name=\\\"Puchases\\\" logo=\\\"purchases.svg\\\" />\\n      </li>\\n      <li>\\n        <SupportCardItem name=\\\"My Account\\\" logo=\\\"myaccount.svg\\\" />\\n      </li>\\n      <li>\\n        <SupportCardItem\\n          name=\\\"Trading, Gifting, Items, Community Market\\\"\\n          logo=\\\"trading.svg\\\" />\\n      </li>\\n      <li>\\n        <SupportCardItem name=\\\"Steam Community\\\" logo=\\\"community.svg\\\" />\\n      </li>\\n    {/if}\\n  </ul>\\n</div>\\n\\n<style>\\n  h3 {\\n    color: #027aff;\\n    text-transform: uppercase;\\n    font-weight: 600;\\n    font-size: 12px;\\n    padding: 0px 30px;\\n    opacity: 0.8;\\n  }\\n\\n  ul {\\n    list-style: none;\\n    padding: 0px 30px;\\n    background-color: #0f0b20;\\n  }\\n\\n  ul li {\\n    display: flex;\\n    align-items: center;\\n    padding: 16px 0px;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAkDE,EAAE,4BAAC,CAAC,AACF,KAAK,CAAE,OAAO,CACd,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,OAAO,CAAE,GAAG,AACd,CAAC,AAED,EAAE,4BAAC,CAAC,AACF,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AAED,gBAAE,CAAC,EAAE,cAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CAAC,GAAG,AACnB,CAAC\"}"
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
	? `<h3 class="${"svelte-mx8qlj"}">${escape(title)}</h3>`
	: ``}
  <ul class="${"svelte-mx8qlj"}">${!single && !combined
	? `<li class="${"svelte-mx8qlj"}">${validate_component(SupportCardItem, "SupportCardItem").$$render($$result, { name: "Dota 2", logo: "dota2.svg" }, {}, {})}</li>
      <li class="${"svelte-mx8qlj"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
			$$result,
			{
				name: "Stardew Valley",
				logo: "stardewvalley.svg"
			},
			{},
			{}
		)}</li>
      <li class="${"svelte-mx8qlj"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
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
	? `<li class="${"svelte-mx8qlj"}">${validate_component(SupportCardItem, "SupportCardItem").$$render($$result, { name, logo: "configure.svg" }, {}, {})}</li>`
	: ``}
    ${combined
	? `<li class="${"svelte-mx8qlj"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
			$$result,
			{
				name: "Games, Software, etc.",
				logo: "games.svg"
			},
			{},
			{}
		)}</li>
      <li class="${"svelte-mx8qlj"}">${validate_component(SupportCardItem, "SupportCardItem").$$render($$result, { name: "Puchases", logo: "purchases.svg" }, {}, {})}</li>
      <li class="${"svelte-mx8qlj"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
			$$result,
			{
				name: "My Account",
				logo: "myaccount.svg"
			},
			{},
			{}
		)}</li>
      <li class="${"svelte-mx8qlj"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
			$$result,
			{
				name: "Trading, Gifting, Items, Community Market",
				logo: "trading.svg"
			},
			{},
			{}
		)}</li>
      <li class="${"svelte-mx8qlj"}">${validate_component(SupportCardItem, "SupportCardItem").$$render(
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
	code: "#support.svelte-1pwsucv{padding:90px 0px;padding-right:0;padding-bottom:80px}h5.svelte-1pwsucv{padding:0 30px;color:#9099a1}",
	map: "{\"version\":3,\"file\":\"support.svelte\",\"sources\":[\"support.svelte\"],\"sourcesContent\":[\"<script>\\n  import Navbar from '../components/Navbar.svelte'\\n  import Tabbar from '../components/Tabbar.svelte'\\n  import SupportCard from '../components/SupportCard.svelte'\\n</script>\\n\\n<svelte:head>\\n  <title>Support :: Steam Mobile</title>\\n</svelte:head>\\n\\n<Navbar title=\\\"Support\\\" />\\n<div id=\\\"support\\\">\\n  <SupportCard title=\\\"Recent Products\\\" />\\n  <SupportCard single=\\\"true\\\" name=\\\"Configure app\\\" />\\n  <SupportCard combined=\\\"true\\\" name=\\\"Configure app\\\" />\\n  <h5>rohanharikr/commit vesion</h5>\\n</div>\\n<Tabbar location={5} />\\n\\n<style>\\n  #support {\\n    padding: 90px 0px;\\n    padding-right: 0;\\n    padding-bottom: 80px;\\n  }\\n\\n  h5 {\\n    padding: 0 30px;\\n    color: #9099a1;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAoBE,QAAQ,eAAC,CAAC,AACR,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,aAAa,CAAE,CAAC,CAChB,cAAc,CAAE,IAAI,AACtB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,KAAK,CAAE,OAAO,AAChB,CAAC\"}"
};

const Support = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$7);

	return `${($$result.head += `${($$result.title = `<title>Support :: Steam Mobile</title>`, "")}`, "")}

${validate_component(Navbar, "Navbar").$$render($$result, { title: "Support" }, {}, {})}
<div id="${"support"}" class="${"svelte-1pwsucv"}">${validate_component(SupportCard, "SupportCard").$$render($$result, { title: "Recent Products" }, {}, {})}
  ${validate_component(SupportCard, "SupportCard").$$render($$result, { single: "true", name: "Configure app" }, {}, {})}
  ${validate_component(SupportCard, "SupportCard").$$render($$result, { combined: "true", name: "Configure app" }, {}, {})}
  <h5 class="${"svelte-1pwsucv"}">rohanharikr/commit vesion</h5></div>
${validate_component(Tabbar, "Tabbar").$$render($$result, { location: 5 }, {}, {})}`;
});

/* src/components/PriceBox.svelte generated by Svelte v3.22.2 */

const css$8 = {
	code: "#pricebox.svelte-nwzu5p{position:absolute;bottom:0;right:0;margin:15px;display:flex;justify-content:space-between}#discount.svelte-nwzu5p,#prices.svelte-nwzu5p{width:50%;display:flex;justify-content:center;align-items:center;padding:2px 10px}#discount.svelte-nwzu5p{background-color:#4c6b22;color:#a4d007;font-size:16px;font-weight:500}#prices.svelte-nwzu5p{background-color:#0d303f;color:#a7d6f0;display:flex;flex-direction:column;align-items:flex-end}#originalprice.svelte-nwzu5p{font-size:8px;text-decoration:line-through}#reducedprice.svelte-nwzu5p{font-size:12px;font-weight:500}.discount.svelte-nwzu5p,.prices.svelte-nwzu5p{padding:1px 8px !important}.discount--square.svelte-nwzu5p{font-size:14px !important}.originalprice--square.svelte-nwzu5p{font-size:6px !important}.reducedprice--square.svelte-nwzu5p{font-size:10px !important}",
	map: "{\"version\":3,\"file\":\"PriceBox.svelte\",\"sources\":[\"PriceBox.svelte\"],\"sourcesContent\":[\"<script>\\n  export let originalPrice,\\n    reducedPrice,\\n    small = false\\n  let discount = (\\n    ((originalPrice - reducedPrice) * 100) /\\n    originalPrice\\n  ).toFixed(0)\\n</script>\\n\\n<div id=\\\"pricebox\\\">\\n  <div id=\\\"discount\\\" class={small ? 'discount discount--square' : ''}>\\n    -{discount}%\\n  </div>\\n  <div id=\\\"prices\\\" class={small ? 'prices prices--square' : ''}>\\n    <div id=\\\"originalprice\\\" class={small ? 'originalprice--square' : ''}>\\n      ${originalPrice}\\n    </div>\\n    <div id=\\\"reducedprice\\\" class={small ? 'reducedprice--square' : ''}>\\n      ${reducedPrice}\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  #pricebox {\\n    position: absolute;\\n    bottom: 0;\\n    right: 0;\\n    margin: 15px;\\n    display: flex;\\n    justify-content: space-between;\\n  }\\n\\n  #discount,\\n  #prices {\\n    width: 50%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding: 2px 10px;\\n  }\\n\\n  #discount {\\n    background-color: #4c6b22;\\n    color: #a4d007;\\n    font-size: 16px;\\n    font-weight: 500;\\n  }\\n\\n  #prices {\\n    background-color: #0d303f;\\n    color: #a7d6f0;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n  }\\n\\n  #originalprice {\\n    font-size: 8px;\\n    text-decoration: line-through;\\n  }\\n\\n  #reducedprice {\\n    font-size: 12px;\\n    font-weight: 500;\\n  }\\n\\n  /*square card modifier*/\\n  .discount,\\n  .prices {\\n    padding: 1px 8px !important;\\n  }\\n\\n  .discount--square {\\n    font-size: 14px !important;\\n  }\\n\\n  .originalprice--square {\\n    font-size: 6px !important;\\n  }\\n\\n  .reducedprice--square {\\n    font-size: 10px !important;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAyBE,SAAS,cAAC,CAAC,AACT,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,aAAa,AAChC,CAAC,AAED,uBAAS,CACT,OAAO,cAAC,CAAC,AACP,KAAK,CAAE,GAAG,CACV,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,GAAG,CAAC,IAAI,AACnB,CAAC,AAED,SAAS,cAAC,CAAC,AACT,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AAClB,CAAC,AAED,OAAO,cAAC,CAAC,AACP,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,QAAQ,AACvB,CAAC,AAED,cAAc,cAAC,CAAC,AACd,SAAS,CAAE,GAAG,CACd,eAAe,CAAE,YAAY,AAC/B,CAAC,AAED,aAAa,cAAC,CAAC,AACb,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AAClB,CAAC,AAGD,uBAAS,CACT,OAAO,cAAC,CAAC,AACP,OAAO,CAAE,GAAG,CAAC,GAAG,CAAC,UAAU,AAC7B,CAAC,AAED,iBAAiB,cAAC,CAAC,AACjB,SAAS,CAAE,IAAI,CAAC,UAAU,AAC5B,CAAC,AAED,sBAAsB,cAAC,CAAC,AACtB,SAAS,CAAE,GAAG,CAAC,UAAU,AAC3B,CAAC,AAED,qBAAqB,cAAC,CAAC,AACrB,SAAS,CAAE,IAAI,CAAC,UAAU,AAC5B,CAAC\"}"
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

	return `<div id="${"pricebox"}" class="${"svelte-nwzu5p"}"><div id="${"discount"}" class="${escape(null_to_empty(small ? "discount discount--square" : "")) + " svelte-nwzu5p"}">-${escape(discount)}%
  </div>
  <div id="${"prices"}" class="${escape(null_to_empty(small ? "prices prices--square" : "")) + " svelte-nwzu5p"}"><div id="${"originalprice"}" class="${escape(null_to_empty(small ? "originalprice--square" : "")) + " svelte-nwzu5p"}">$${escape(originalPrice)}</div>
    <div id="${"reducedprice"}" class="${escape(null_to_empty(small ? "reducedprice--square" : "")) + " svelte-nwzu5p"}">$${escape(reducedPrice)}</div></div>
</div>`;
});

/* src/components/RectangleCard.svelte generated by Svelte v3.22.2 */

const css$9 = {
	code: "#card.svelte-1tl6par{display:flex;flex-direction:column}.image.svelte-1tl6par{width:300px;height:150px;scroll-snap-stop:always;scroll-snap-align:center}#owners.svelte-1tl6par{margin-left:10px;font-size:12px;color:#a7d6f0}#cardInfo.svelte-1tl6par{margin-top:10px;display:flex;align-items:center;justify-content:space-between;padding:0 5px}",
	map: "{\"version\":3,\"file\":\"RectangleCard.svelte\",\"sources\":[\"RectangleCard.svelte\"],\"sourcesContent\":[\"<script>\\n  import PriceBox from './PriceBox.svelte'\\n\\n  export let image,\\n    windows = true,\\n    mac = false,\\n    steam = false,\\n    originalPrice,\\n    reducedPrice\\n</script>\\n\\n<div id=\\\"card\\\">\\n  <div id=\\\"image\\\" class=\\\"image\\\" style=\\\"background-image: url({image});\\\">\\n    <PriceBox {originalPrice} {reducedPrice} />\\n  </div>\\n  <div id=\\\"cardInfo\\\">\\n    <div id=\\\"owners\\\">11 friends own this game</div>\\n    <div>\\n      {#if windows}\\n        <img src=\\\"windows.svg\\\" height=\\\"15px;\\\" />\\n      {/if}\\n      {#if mac}\\n        <img src=\\\"mac.svg\\\" height=\\\"15px;\\\" style=\\\"margin-left: 4px\\\" />\\n      {/if}\\n      {#if steam}\\n        <img src=\\\"steamlogo.svg\\\" height=\\\"15px;\\\" style=\\\"margin-left: 4px\\\" />\\n      {/if}\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  #card {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n  .image {\\n    width: 300px;\\n    height: 150px;\\n    scroll-snap-stop: always;\\n    scroll-snap-align: center;\\n  }\\n\\n  #owners {\\n    margin-left: 10px;\\n    font-size: 12px;\\n    color: #a7d6f0;\\n  }\\n\\n  #cardInfo {\\n    margin-top: 10px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n    padding: 0 5px;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAgCE,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACxB,CAAC,AAED,MAAM,eAAC,CAAC,AACN,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,MAAM,CACxB,iBAAiB,CAAE,MAAM,AAC3B,CAAC,AAED,OAAO,eAAC,CAAC,AACP,WAAW,CAAE,IAAI,CACjB,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,SAAS,eAAC,CAAC,AACT,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,CAAC,CAAC,GAAG,AAChB,CAAC\"}"
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

	return `<div id="${"card"}" class="${"svelte-1tl6par"}"><div id="${"image"}" class="${"image svelte-1tl6par"}" style="${"background-image: url(" + escape(image) + ");"}">${validate_component(PriceBox, "PriceBox").$$render($$result, { originalPrice, reducedPrice }, {}, {})}</div>
  <div id="${"cardInfo"}" class="${"svelte-1tl6par"}"><div id="${"owners"}" class="${"svelte-1tl6par"}">11 friends own this game</div>
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
	code: "#card.svelte-1toy9u1{display:flex;flex-direction:column}.image.svelte-1toy9u1{width:145px;height:145px;scroll-snap-align:center}#cardInfo.svelte-1toy9u1{margin-top:10px;display:flex;align-items:center;justify-content:flex-end;padding:0 5px;padding:0 5px}",
	map: "{\"version\":3,\"file\":\"SquareCard.svelte\",\"sources\":[\"SquareCard.svelte\"],\"sourcesContent\":[\"<script>\\n  import PriceBox from './PriceBox.svelte'\\n\\n  export let image,\\n    windows = true,\\n    mac = false,\\n    steam = false,\\n    originalPrice,\\n    reducedPrice\\n</script>\\n\\n<div id=\\\"card\\\">\\n  <div id=\\\"image\\\" class=\\\"image\\\" style=\\\"background-image: url({image});\\\">\\n    <PriceBox {originalPrice} {reducedPrice} small={true} />\\n  </div>\\n  <div id=\\\"cardInfo\\\">\\n    <!-- <div id=\\\"owners\\\">11 friends own this game</div> -->\\n    <div>\\n      {#if windows}\\n        <img src=\\\"windows.svg\\\" height=\\\"12px;\\\" />\\n      {/if}\\n      {#if mac}\\n        <img src=\\\"mac.svg\\\" height=\\\"12px;\\\" style=\\\"margin-left: 4px\\\" />\\n      {/if}\\n      {#if steam}\\n        <img src=\\\"steamlogo.svg\\\" height=\\\"12px;\\\" style=\\\"margin-left: 4px\\\" />\\n      {/if}\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  #card {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n  .image {\\n    width: 145px;\\n    height: 145px;\\n    scroll-snap-align: center;\\n  }\\n\\n  /*\\t#owners {\\n\\t\\tfont-size: 8px;\\n\\t\\tcolor: #a7d6f0;\\n\\t}*/\\n\\n  #cardInfo {\\n    margin-top: 10px;\\n    display: flex;\\n    align-items: center;\\n    /*justify-content: space-between;*/\\n    justify-content: flex-end;\\n    padding: 0 5px;\\n    padding: 0 5px;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAgCE,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACxB,CAAC,AAED,MAAM,eAAC,CAAC,AACN,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,CACb,iBAAiB,CAAE,MAAM,AAC3B,CAAC,AAOD,SAAS,eAAC,CAAC,AACT,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CAEnB,eAAe,CAAE,QAAQ,CACzB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,OAAO,CAAE,CAAC,CAAC,GAAG,AAChB,CAAC\"}"
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

	return `<div id="${"card"}" class="${"svelte-1toy9u1"}"><div id="${"image"}" class="${"image svelte-1toy9u1"}" style="${"background-image: url(" + escape(image) + ");"}">${validate_component(PriceBox, "PriceBox").$$render($$result, { originalPrice, reducedPrice, small: true }, {}, {})}</div>
  <div id="${"cardInfo"}" class="${"svelte-1toy9u1"}">
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
	code: "#card.svelte-1r4wzwv{display:flex;flex-direction:column}#imageController.svelte-1r4wzwv{color:white;font-size:18px;background-color:rgba(0, 0, 0, 0.6);width:100%;height:100%;display:flex;justify-content:center;align-items:center}.image.svelte-1r4wzwv{width:145px;height:60px;scroll-snap-align:center}",
	map: "{\"version\":3,\"file\":\"StripCard.svelte\",\"sources\":[\"StripCard.svelte\"],\"sourcesContent\":[\"<script>\\n  export let image, genre\\n</script>\\n\\n<div id=\\\"card\\\">\\n  <div id=\\\"image\\\" class=\\\"image\\\" style=\\\"background-image:url({image});\\\">\\n    <div id=\\\"imageController\\\">{genre}</div>\\n  </div>\\n  <div id=\\\"cardInfo\\\" />\\n</div>\\n\\n<style>\\n  #card {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n\\n  #imageController {\\n    color: white;\\n    font-size: 18px;\\n    background-color: rgba(0, 0, 0, 0.6);\\n    width: 100%;\\n    height: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n  }\\n\\n  .image {\\n    width: 145px;\\n    height: 60px;\\n    scroll-snap-align: center;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAYE,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,AACxB,CAAC,AAED,gBAAgB,eAAC,CAAC,AAChB,KAAK,CAAE,KAAK,CACZ,SAAS,CAAE,IAAI,CACf,gBAAgB,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CACpC,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MAAM,AACrB,CAAC,AAED,MAAM,eAAC,CAAC,AACN,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,IAAI,CACZ,iBAAiB,CAAE,MAAM,AAC3B,CAAC\"}"
};

const StripCard = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { image } = $$props, { genre } = $$props;
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.genre === void 0 && $$bindings.genre && genre !== void 0) $$bindings.genre(genre);
	$$result.css.add(css$b);

	return `<div id="${"card"}" class="${"svelte-1r4wzwv"}"><div id="${"image"}" class="${"image svelte-1r4wzwv"}" style="${"background-image:url(" + escape(image) + ");"}"><div id="${"imageController"}" class="${"svelte-1r4wzwv"}">${escape(genre)}</div></div>
  <div id="${"cardInfo"}"></div>
</div>`;
});

/* src/components/StoreSection.svelte generated by Svelte v3.22.2 */

const css$c = {
	code: "h6.svelte-1bqqa9q{text-transform:uppercase;color:#9099a1;font-weight:600;font-size:10px}h3.svelte-1bqqa9q{font-size:18px;font-weight:500}#section.svelte-1bqqa9q{margin-bottom:30px}#spotlight.svelte-1bqqa9q{margin:20px 0px;overflow-x:scroll;overflow-y:hidden;white-space:nowrap;scroll-snap-type:x mandatory;margin-left:-10px;display:flex;scrollbar-width:none}#spotlight.svelte-1bqqa9q::-webkit-scrollbar{display:none}",
	map: "{\"version\":3,\"file\":\"StoreSection.svelte\",\"sources\":[\"StoreSection.svelte\"],\"sourcesContent\":[\"<script>\\n  import RectangleCard from '../components/RectangleCard.svelte'\\n  import SquareCard from '../components/SquareCard.svelte'\\n  import StripCard from '../components/StripCard.svelte'\\n\\n  export let tag = '',\\n    heading,\\n    rectangleCard = false,\\n    squareCard = false,\\n    stripCard = false\\n</script>\\n\\n<div id=\\\"section\\\">\\n  <h6>{tag}</h6>\\n  <h3>{heading}</h3>\\n  <div id=\\\"spotlight\\\">\\n    {#if rectangleCard}\\n      <RectangleCard\\n        image=\\\"https://cdn.arstechnica.net/wp-content/uploads/2019/10/outer-worlds-listing.png\\\"\\n        originalPrice=\\\"69.99\\\"\\n        reducedPrice=\\\"59.99\\\" />\\n      <RectangleCard\\n        image=\\\"https://i.ytimg.com/vi/eaW0tYpxyp0/maxresdefault.jpg\\\"\\n        originalPrice=\\\"69.99\\\"\\n        reducedPrice=\\\"59.99\\\" />\\n      <RectangleCard\\n        image=\\\"https://steamcdn-a.akamaihd.net/steam/apps/374320/capsule_616x353.jpg\\\"\\n        originalPrice=\\\"69.99\\\"\\n        reducedPrice=\\\"59.99\\\" />\\n      <RectangleCard\\n        image=\\\"https://steam.cryotank.net/wp-content/gallery/ori/Ori-01-HD.png\\\"\\n        mac=\\\"true\\\"\\n        originalPrice=\\\"69.99\\\"\\n        reducedPrice=\\\"59.99\\\" />\\n      <RectangleCard\\n        image=\\\"https://i.ytimg.com/vi/2enbYOMtR4I/maxresdefault.jpg\\\"\\n        originalPrice=\\\"69.99\\\"\\n        reducedPrice=\\\"59.99\\\" />\\n    {/if}\\n    {#if squareCard}\\n      <SquareCard\\n        image=\\\"https://lh3.googleusercontent.com/caNRdVjHrAC8AXjQwNp4u0FzK2xwKTMC--MYdb8xXNeCinjwQOF8EqSOcYCC3RFBdgjd\\\"\\n        mac=\\\"true\\\"\\n        steam=\\\"true\\\"\\n        originalPrice=\\\"69.99\\\"\\n        reducedPrice=\\\"59.99\\\" />\\n      <SquareCard\\n        image=\\\"https://www.androidpolice.com/wp-content/uploads/2018/10/81LJeCDylML.jpg\\\"\\n        mac=\\\"true\\\"\\n        steam=\\\"true\\\"\\n        originalPrice=\\\"69.99\\\"\\n        reducedPrice=\\\"59.99\\\" />\\n      <SquareCard\\n        image=\\\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsrSn4-vAw6oUWmYryVBtEnTUUd6-5rCQdzS1p4Hik-dLxOnOz&usqp=CAU\\\"\\n        mac=\\\"true\\\"\\n        steam=\\\"true\\\"\\n        originalPrice=\\\"69.99\\\"\\n        reducedPrice=\\\"59.99\\\" />\\n      <SquareCard\\n        image=\\\"https://i.ytimg.com/vi/gvECQlxrhbw/maxresdefault.jpg\\\"\\n        mac=\\\"true\\\"\\n        originalPrice=\\\"69.99\\\"\\n        reducedPrice=\\\"59.99\\\" />\\n      <SquareCard\\n        image=\\\"https://images-na.ssl-images-amazon.com/images/I/71p9r+IRobL.jpg\\\"\\n        mac=\\\"true\\\"\\n        originalPrice=\\\"69.99\\\"\\n        reducedPrice=\\\"59.99\\\" />\\n    {/if}\\n    {#if stripCard}\\n      <StripCard\\n        genre=\\\"Indie\\\"\\n        image=\\\"https://venturebeat.com/wp-content/uploads/2012/03/journey-1.jpg?w=1200&strip=all\\\" />\\n      <StripCard\\n        genre=\\\"Action\\\"\\n        image=\\\"https://store-images.s-microsoft.com/image/apps.38656.69038865179152125.af885fa8-7b94-47b1-be3a-d2ab6af95a6a.af83131f-d4dc-4d47-a84d-25aab92a5e5b?mode=scale&q=90&h=1080&w=1920\\\" />\\n      <StripCard\\n        genre=\\\"Adventure\\\"\\n        image=\\\"https://assets1.ignimgs.com/2020/03/24/ign-doom-eternal-complete-review-blogroll-1585092832291.jpg\\\" />\\n      <StripCard\\n        genre=\\\"Multiplayer\\\"\\n        image=\\\"https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png\\\" />\\n      <StripCard\\n        genre=\\\"Horror\\\"\\n        image=\\\"https://i2.wp.com/tecake.com/wp-content/uploads/2020/04/4L2MLiPnTT5hMHbCqgyjAc.jpg?fit=1920%2C1080&ssl=1\\\" />\\n    {/if}\\n  </div>\\n</div>\\n\\n<style>\\n  h6 {\\n    text-transform: uppercase;\\n    color: #9099a1;\\n    font-weight: 600;\\n    font-size: 10px;\\n  }\\n\\n  h3 {\\n    font-size: 18px;\\n    font-weight: 500;\\n  }\\n\\n  #section {\\n    margin-bottom: 30px;\\n  }\\n\\n  #spotlight {\\n    margin: 20px 0px;\\n    overflow-x: scroll;\\n    overflow-y: hidden;\\n    white-space: nowrap;\\n    scroll-snap-type: x mandatory;\\n    margin-left: -10px;\\n    display: flex;\\n    scrollbar-width: none;\\n  }\\n\\n  #spotlight::-webkit-scrollbar {\\n    display: none;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AA0FE,EAAE,eAAC,CAAC,AACF,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,EAAE,eAAC,CAAC,AACF,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,AAClB,CAAC,AAED,QAAQ,eAAC,CAAC,AACR,aAAa,CAAE,IAAI,AACrB,CAAC,AAED,UAAU,eAAC,CAAC,AACV,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,CAAC,CAAC,SAAS,CAC7B,WAAW,CAAE,KAAK,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,IAAI,AACvB,CAAC,AAED,yBAAU,mBAAmB,AAAC,CAAC,AAC7B,OAAO,CAAE,IAAI,AACf,CAAC\"}"
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

	return `<div id="${"section"}" class="${"svelte-1bqqa9q"}"><h6 class="${"svelte-1bqqa9q"}">${escape(tag)}</h6>
  <h3 class="${"svelte-1bqqa9q"}">${escape(heading)}</h3>
  <div id="${"spotlight"}" class="${"svelte-1bqqa9q"}">${rectangleCard
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
	code: "#store.svelte-1s5ozd4{padding:90px 30px;padding-right:0;padding-bottom:60px}",
	map: "{\"version\":3,\"file\":\"store.svelte\",\"sources\":[\"store.svelte\"],\"sourcesContent\":[\"<script>\\n  import Navbar from '../components/Navbar.svelte'\\n  import Tabbar from '../components/Tabbar.svelte'\\n  import StoreSection from '../components/StoreSection.svelte'\\n</script>\\n\\n<svelte:head>\\n  <title>Store :: Steam Mobile</title>\\n</svelte:head>\\n\\n<Navbar title=\\\"Store\\\" />\\n<div id=\\\"store\\\">\\n  <StoreSection\\n    tag=\\\"Special Offers\\\"\\n    heading=\\\"Midnight Madness\\\"\\n    rectangleCard=\\\"true\\\" />\\n  <StoreSection heading=\\\"Featured & Recommended\\\" squareCard=\\\"true\\\" />\\n  <StoreSection heading=\\\"Tags\\\" stripCard=\\\"true\\\" />\\n</div>\\n<Tabbar location={1} />\\n\\n<style>\\n  #store {\\n    padding: 90px 30px;\\n    padding-right: 0;\\n    padding-bottom: 60px;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAsBE,MAAM,eAAC,CAAC,AACN,OAAO,CAAE,IAAI,CAAC,IAAI,CAClB,aAAa,CAAE,CAAC,CAChB,cAAc,CAAE,IAAI,AACtB,CAAC\"}"
};

const Store = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$d);

	return `${($$result.head += `${($$result.title = `<title>Store :: Steam Mobile</title>`, "")}`, "")}

${validate_component(Navbar, "Navbar").$$render($$result, { title: "Store" }, {}, {})}
<div id="${"store"}" class="${"svelte-1s5ozd4"}">${validate_component(StoreSection, "StoreSection").$$render(
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
	code: "#imageholder.svelte-gwm1hn{height:50px;width:50px;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:2px;margin-right:20px;position:relative}#name.svelte-gwm1hn{position:absolute;bottom:-22px;font-size:12px;width:50px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.name--ingame.svelte-gwm1hn{color:#5c7e10}.name--online.svelte-gwm1hn{color:#57cbde}.status.svelte-gwm1hn::after{content:'';position:absolute;width:50px;height:2px;bottom:-28px}.ingame.svelte-gwm1hn::after{background-color:#5c7e10}.online.svelte-gwm1hn::after{background-color:#57cbde}.offline.svelte-gwm1hn{opacity:0.6}.offline.svelte-gwm1hn::after{background-color:#a0a0a0}",
	map: "{\"version\":3,\"file\":\"RecentChat.svelte\",\"sources\":[\"RecentChat.svelte\"],\"sourcesContent\":[\"<script>\\n  export let image, status, name\\n</script>\\n\\n<!-- status codes\\n\\t1 = ingame, 2 online, 3 offline\\nstatus codes -->\\n\\n<div\\n  id=\\\"imageholder\\\"\\n  class=\\\"{status === 1 ? 'status ingame' : ''}{status === 2 ? 'status online' : ''}{status === 3 ? 'status offline' : ''}\\\"\\n  style=\\\"background-image: url({image});\\\">\\n  <div\\n    id=\\\"name\\\"\\n    class=\\\"{status === 1 ? 'name--ingame' : ''}{status === 2 ? 'name--online' : ''}{status === 3 ? 'status offline' : ''}\\\">\\n    {name}\\n  </div>\\n</div>\\n\\n<style>\\n  #imageholder {\\n    height: 50px;\\n    width: 50px;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    border-radius: 2px;\\n    margin-right: 20px;\\n    position: relative;\\n  }\\n\\n  #name {\\n    position: absolute;\\n    bottom: -22px;\\n    font-size: 12px;\\n    width: 50px;\\n    white-space: nowrap;\\n    overflow: hidden;\\n    text-overflow: ellipsis;\\n  }\\n\\n  .name--ingame {\\n    color: #5c7e10;\\n  }\\n\\n  .name--online {\\n    color: #57cbde;\\n  }\\n\\n  .name--offline {\\n    color: #a0a0a0;\\n  }\\n\\n  .status::after {\\n    content: '';\\n    position: absolute;\\n    width: 50px;\\n    height: 2px;\\n    bottom: -28px;\\n  }\\n\\n  .ingame::after {\\n    background-color: #5c7e10;\\n  }\\n\\n  .online::after {\\n    background-color: #57cbde;\\n  }\\n\\n  .offline {\\n    opacity: 0.6;\\n  }\\n\\n  .offline::after {\\n    background-color: #a0a0a0;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAoBE,YAAY,cAAC,CAAC,AACZ,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,mBAAmB,CAAE,MAAM,CAC3B,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,aAAa,CAAE,GAAG,CAClB,YAAY,CAAE,IAAI,CAClB,QAAQ,CAAE,QAAQ,AACpB,CAAC,AAED,KAAK,cAAC,CAAC,AACL,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KAAK,CACb,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,IAAI,CACX,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,aAAa,CAAE,QAAQ,AACzB,CAAC,AAED,aAAa,cAAC,CAAC,AACb,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,aAAa,cAAC,CAAC,AACb,KAAK,CAAE,OAAO,AAChB,CAAC,AAMD,qBAAO,OAAO,AAAC,CAAC,AACd,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,KAAK,AACf,CAAC,AAED,qBAAO,OAAO,AAAC,CAAC,AACd,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AAED,qBAAO,OAAO,AAAC,CAAC,AACd,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AAED,QAAQ,cAAC,CAAC,AACR,OAAO,CAAE,GAAG,AACd,CAAC,AAED,sBAAQ,OAAO,AAAC,CAAC,AACf,gBAAgB,CAAE,OAAO,AAC3B,CAAC\"}"
};

const RecentChat = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { image } = $$props, { status } = $$props, { name } = $$props;
	if ($$props.image === void 0 && $$bindings.image && image !== void 0) $$bindings.image(image);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.name === void 0 && $$bindings.name && name !== void 0) $$bindings.name(name);
	$$result.css.add(css$e);

	return `

<div id="${"imageholder"}" class="${escape(status === 1 ? "status ingame" : "") + escape(status === 2 ? "status online" : "") + escape(status === 3 ? "status offline" : "") + " svelte-gwm1hn"}" style="${"background-image: url(" + escape(image) + ");"}"><div id="${"name"}" class="${escape(status === 1 ? "name--ingame" : "") + escape(status === 2 ? "name--online" : "") + escape(status === 3 ? "status offline" : "") + " svelte-gwm1hn"}">${escape(name)}</div>
</div>`;
});

/* src/components/RecentChats.svelte generated by Svelte v3.22.2 */

const css$f = {
	code: "h3.svelte-1l3lyrr{color:#027aff;text-transform:uppercase;font-weight:600;font-size:12px;padding:0px 30px;opacity:0.8}#list.svelte-1l3lyrr{margin:14px 0px;padding-left:30px;display:flex;align-items:center}#card.svelte-1l3lyrr{position:sticky;padding-top:30px;top:60px;height:120px;background-color:black;z-index:999}",
	map: "{\"version\":3,\"file\":\"RecentChats.svelte\",\"sources\":[\"RecentChats.svelte\"],\"sourcesContent\":[\"<script>\\n  import RecentChat from './RecentChat.svelte'\\n\\n  export let title\\n</script>\\n\\n<!-- status codes\\n\\t1 = ingame, 2 online, 3 offline\\nstatus codes -->\\n\\n<div id=\\\"card\\\">\\n  <h3>Recent Chats</h3>\\n  <div id=\\\"list\\\">\\n    <RecentChat image=\\\"friendone.png\\\" status={1} name=\\\"bingotheslayeer\\\" />\\n    <RecentChat image=\\\"friendtwo.png\\\" status={2} name=\\\"fatherdeath\\\" />\\n    <RecentChat image=\\\"friendthree.png\\\" status={2} name=\\\"pyschotherapist\\\" />\\n    <RecentChat image=\\\"friendfour.png\\\" status={3} name=\\\"fatfather64\\\" />\\n  </div>\\n</div>\\n\\n<style>\\n  h3 {\\n    color: #027aff;\\n    text-transform: uppercase;\\n    font-weight: 600;\\n    font-size: 12px;\\n    padding: 0px 30px;\\n    opacity: 0.8;\\n  }\\n\\n  #list {\\n    margin: 14px 0px;\\n    padding-left: 30px;\\n    display: flex;\\n    align-items: center;\\n  }\\n\\n  #tabs {\\n    display: flex;\\n  }\\n\\n  #card {\\n    position: sticky;\\n    padding-top: 30px;\\n    top: 60px;\\n    height: 120px;\\n    background-color: black;\\n    z-index: 999;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAqBE,EAAE,eAAC,CAAC,AACF,KAAK,CAAE,OAAO,CACd,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,OAAO,CAAE,GAAG,AACd,CAAC,AAED,KAAK,eAAC,CAAC,AACL,MAAM,CAAE,IAAI,CAAC,GAAG,CAChB,YAAY,CAAE,IAAI,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,AACrB,CAAC,AAMD,KAAK,eAAC,CAAC,AACL,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,IAAI,CACjB,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,GAAG,AACd,CAAC\"}"
};

const RecentChats = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { title } = $$props;
	if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
	$$result.css.add(css$f);

	return `

<div id="${"card"}" class="${"svelte-1l3lyrr"}"><h3 class="${"svelte-1l3lyrr"}">Recent Chats</h3>
  <div id="${"list"}" class="${"svelte-1l3lyrr"}">${validate_component(RecentChat, "RecentChat").$$render(
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
	code: "li.svelte-zt7sbu{display:flex;align-items:center;padding:14px 0px}#username.svelte-zt7sbu{color:#5c7e10}#usergame.svelte-zt7sbu,#lastonline.svelte-zt7sbu{font-size:12px}#usergame.svelte-zt7sbu{color:#5c7e10}#lastonline.svelte-zt7sbu{color:#9099a1}.onlineusername.svelte-zt7sbu{color:#6fbfec !important;opacity:0.8}.onlinegamename.svelte-zt7sbu{color:#a7d6f0 !important;opacity:0.8}.offline.svelte-zt7sbu{color:#eaeaea !important}#userimage.svelte-zt7sbu{width:40px;height:40px;background-position:center;background-repeat:no-repeat;background-size:cover;border-radius:2px}.status.svelte-zt7sbu::after{content:'';position:absolute;width:3px;height:40px;margin-left:44px}.ingame.svelte-zt7sbu::after{background-color:#5c7e10}.online.svelte-zt7sbu::after{background-color:#57cbde}.offline.svelte-zt7sbu::after{background-color:#9099a1}#info.svelte-zt7sbu{margin-left:15px}.statusoffline.svelte-zt7sbu{opacity:0.6 !important}",
	map: "{\"version\":3,\"file\":\"ChatsTile.svelte\",\"sources\":[\"ChatsTile.svelte\"],\"sourcesContent\":[\"<script>\\n  export let userName, gameName, userImage, status, timestamp, offline\\n</script>\\n\\n<!-- status codes\\n\\t1 = ingame, 2 online, 3 offline\\nstatus codes -->\\n\\n<li\\n  class=\\\"{status === 1 ? 'status ingame' : ''}{status === 2 ? 'status online' : ''}{status === 3 ? 'status offline statusoffline' : ''}\\\">\\n  <div id=\\\"userimage\\\" style=\\\"background-image:url({userImage});\\\" />\\n  <div id=\\\"info\\\">\\n    <div id=\\\"username\\\" class={!gameName ? 'onlineusername' : ''}>\\n      {userName}\\n    </div>\\n    {#if !offline}\\n      <div id=\\\"usergame\\\" class={!gameName ? 'onlinegamename' : ''}>\\n        {!gameName ? 'Online' : gameName}\\n      </div>\\n    {:else if offline}\\n      <div id=\\\"lastonline\\\">Last online {timestamp} days ago</div>\\n    {/if}\\n  </div>\\n</li>\\n\\n<style>\\n  li {\\n    display: flex;\\n    align-items: center;\\n    padding: 14px 0px;\\n  }\\n\\n  #username {\\n    color: #5c7e10;\\n  }\\n\\n  #usergame,\\n  #lastonline {\\n    font-size: 12px;\\n  }\\n\\n  #usergame {\\n    color: #5c7e10;\\n  }\\n\\n  #lastonline {\\n    color: #9099a1;\\n  }\\n\\n  .onlineusername {\\n    color: #6fbfec !important;\\n    opacity: 0.8;\\n  }\\n\\n  .onlinegamename {\\n    color: #a7d6f0 !important;\\n    opacity: 0.8;\\n  }\\n\\n  .offline {\\n    color: #eaeaea !important;\\n  }\\n\\n  #userimage {\\n    width: 40px;\\n    height: 40px;\\n    background-position: center;\\n    background-repeat: no-repeat;\\n    background-size: cover;\\n    border-radius: 2px;\\n  }\\n\\n  .status::after {\\n    content: '';\\n    position: absolute;\\n    width: 3px;\\n    height: 40px;\\n    margin-left: 44px;\\n  }\\n\\n  .ingame::after {\\n    background-color: #5c7e10;\\n  }\\n\\n  .online::after {\\n    background-color: #57cbde;\\n  }\\n\\n  .offline::after {\\n    background-color: #9099a1;\\n  }\\n\\n  #info {\\n    margin-left: 15px;\\n  }\\n\\n  .statusoffline {\\n    opacity: 0.6 !important;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AA0BE,EAAE,cAAC,CAAC,AACF,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,IAAI,CAAC,GAAG,AACnB,CAAC,AAED,SAAS,cAAC,CAAC,AACT,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,uBAAS,CACT,WAAW,cAAC,CAAC,AACX,SAAS,CAAE,IAAI,AACjB,CAAC,AAED,SAAS,cAAC,CAAC,AACT,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,WAAW,cAAC,CAAC,AACX,KAAK,CAAE,OAAO,AAChB,CAAC,AAED,eAAe,cAAC,CAAC,AACf,KAAK,CAAE,OAAO,CAAC,UAAU,CACzB,OAAO,CAAE,GAAG,AACd,CAAC,AAED,eAAe,cAAC,CAAC,AACf,KAAK,CAAE,OAAO,CAAC,UAAU,CACzB,OAAO,CAAE,GAAG,AACd,CAAC,AAED,QAAQ,cAAC,CAAC,AACR,KAAK,CAAE,OAAO,CAAC,UAAU,AAC3B,CAAC,AAED,UAAU,cAAC,CAAC,AACV,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,mBAAmB,CAAE,MAAM,CAC3B,iBAAiB,CAAE,SAAS,CAC5B,eAAe,CAAE,KAAK,CACtB,aAAa,CAAE,GAAG,AACpB,CAAC,AAED,qBAAO,OAAO,AAAC,CAAC,AACd,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,GAAG,CACV,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IAAI,AACnB,CAAC,AAED,qBAAO,OAAO,AAAC,CAAC,AACd,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AAED,qBAAO,OAAO,AAAC,CAAC,AACd,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AAED,sBAAQ,OAAO,AAAC,CAAC,AACf,gBAAgB,CAAE,OAAO,AAC3B,CAAC,AAED,KAAK,cAAC,CAAC,AACL,WAAW,CAAE,IAAI,AACnB,CAAC,AAED,cAAc,cAAC,CAAC,AACd,OAAO,CAAE,GAAG,CAAC,UAAU,AACzB,CAAC\"}"
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

<li class="${escape(status === 1 ? "status ingame" : "") + escape(status === 2 ? "status online" : "") + escape(status === 3 ? "status offline statusoffline" : "") + " svelte-zt7sbu"}"><div id="${"userimage"}" style="${"background-image:url(" + escape(userImage) + ");"}" class="${"svelte-zt7sbu"}"></div>
  <div id="${"info"}" class="${"svelte-zt7sbu"}"><div id="${"username"}" class="${escape(null_to_empty(!gameName ? "onlineusername" : "")) + " svelte-zt7sbu"}">${escape(userName)}</div>
    ${!offline
	? `<div id="${"usergame"}" class="${escape(null_to_empty(!gameName ? "onlinegamename" : "")) + " svelte-zt7sbu"}">${escape(!gameName ? "Online" : gameName)}</div>`
	: `${offline
		? `<div id="${"lastonline"}" class="${"svelte-zt7sbu"}">Last online ${escape(timestamp)} days ago</div>`
		: ``}`}</div>
</li>`;
});

/* src/components/Chats.svelte generated by Svelte v3.22.2 */

const css$h = {
	code: "#tabs.svelte-qg84f2{display:flex;padding:0px 30px;width:145px;justify-content:space-between;align-items:center}h3.svelte-qg84f2{color:#9099a1;text-transform:uppercase;font-weight:400;font-size:12px;opacity:0.8}ul.svelte-qg84f2{list-style:none;padding:0px 30px;background-color:#0f0b20;position:relative;margin:0}#card.svelte-qg84f2{margin-top:30px}.selectedtab.svelte-qg84f2{color:#027aff;font-weight:600}#tabscontainer.svelte-qg84f2{position:sticky;padding-top:30px;padding-bottom:10px;top:200px;z-index:998;background-color:black}",
	map: "{\"version\":3,\"file\":\"Chats.svelte\",\"sources\":[\"Chats.svelte\"],\"sourcesContent\":[\"<script>\\n  import ChatsTile from './ChatsTile.svelte'\\n\\n  let offline = false,\\n    onlineusers = 3,\\n    offlineusers = 2\\n</script>\\n\\n<!-- status codes\\n\\t1 = ingame, 2 online, 3 offline\\nstatus codes -->\\n\\n<div id=\\\"card\\\">\\n  <div id=\\\"tabscontainer\\\">\\n    <div id=\\\"tabs\\\">\\n      <h3\\n        class={!offline ? 'selectedtab' : ''}\\n        on:click={() => {\\n          offline = false\\n        }}>\\n        Online ({onlineusers})\\n      </h3>\\n      <h3\\n        class={offline ? 'selectedtab' : ''}\\n        on:click={() => {\\n          offline = true\\n        }}>\\n        Offline ({offlineusers})\\n      </h3>\\n    </div>\\n  </div>\\n  {#if !offline}\\n    <ul>\\n      <ChatsTile\\n        userName=\\\"bingotheslayer\\\"\\n        gameName=\\\"Dank Souls 3\\\"\\n        userImage=\\\"friendone.png\\\"\\n        status={1}\\n        {offline} />\\n      <ChatsTile\\n        userName=\\\"fatherdeath\\\"\\n        userImage=\\\"friendtwo.png\\\"\\n        status={2}\\n        {offline} />\\n      <ChatsTile\\n        userName=\\\"pyschotherapist\\\"\\n        userImage=\\\"friendthree.png\\\"\\n        status={2}\\n        {offline} />\\n    </ul>\\n  {/if}\\n  {#if offline}\\n    <ul>\\n      <ChatsTile\\n        userName=\\\"fatfather64\\\"\\n        gameName=\\\"Grand Theft Auto: San Andreas\\\"\\n        userImage=\\\"friendfour.png\\\"\\n        status={3}\\n        {offline}\\n        timestamp=\\\"6\\\" />\\n      <ChatsTile\\n        userName=\\\"dingdongding\\\"\\n        gameName=\\\"Grand Theft Auto: San Andreas\\\"\\n        userImage=\\\"profilepicture.jpg\\\"\\n        status={3}\\n        {offline}\\n        timestamp=\\\"12\\\" />\\n    </ul>\\n  {/if}\\n</div>\\n\\n<style>\\n  #tabs {\\n    display: flex;\\n    padding: 0px 30px;\\n    width: 145px;\\n    justify-content: space-between;\\n    align-items: center;\\n  }\\n\\n  h3 {\\n    color: #9099a1;\\n    text-transform: uppercase;\\n    font-weight: 400;\\n    font-size: 12px;\\n    opacity: 0.8;\\n  }\\n\\n  ul {\\n    list-style: none;\\n    padding: 0px 30px;\\n    background-color: #0f0b20;\\n    position: relative;\\n    margin: 0;\\n  }\\n\\n  #card {\\n    margin-top: 30px;\\n  }\\n\\n  .selectedtab {\\n    color: #027aff;\\n    font-weight: 600;\\n  }\\n\\n  #tabscontainer {\\n    position: sticky;\\n    padding-top: 30px;\\n    padding-bottom: 10px;\\n    top: 200px;\\n    z-index: 998;\\n    background-color: black;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAwEE,KAAK,cAAC,CAAC,AACL,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,KAAK,CAAE,KAAK,CACZ,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,AACrB,CAAC,AAED,EAAE,cAAC,CAAC,AACF,KAAK,CAAE,OAAO,CACd,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,GAAG,AACd,CAAC,AAED,EAAE,cAAC,CAAC,AACF,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,GAAG,CAAC,IAAI,CACjB,gBAAgB,CAAE,OAAO,CACzB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,AACX,CAAC,AAED,KAAK,cAAC,CAAC,AACL,UAAU,CAAE,IAAI,AAClB,CAAC,AAED,YAAY,cAAC,CAAC,AACZ,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,AAClB,CAAC,AAED,cAAc,cAAC,CAAC,AACd,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,IAAI,CACpB,GAAG,CAAE,KAAK,CACV,OAAO,CAAE,GAAG,CACZ,gBAAgB,CAAE,KAAK,AACzB,CAAC\"}"
};

const Chats = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let offline = false, onlineusers = 3, offlineusers = 2;
	$$result.css.add(css$h);

	return `

<div id="${"card"}" class="${"svelte-qg84f2"}"><div id="${"tabscontainer"}" class="${"svelte-qg84f2"}"><div id="${"tabs"}" class="${"svelte-qg84f2"}"><h3 class="${escape(null_to_empty( "selectedtab" )) + " svelte-qg84f2"}">Online (${escape(onlineusers)})
      </h3>
      <h3 class="${escape(null_to_empty( "")) + " svelte-qg84f2"}">Offline (${escape(offlineusers)})
      </h3></div></div>
  ${ `<ul class="${"svelte-qg84f2"}">${validate_component(ChatsTile, "ChatsTile").$$render(
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
	code: "#chat.svelte-1dg3h8b{padding:40px 0px;padding-right:0;padding-bottom:80px}",
	map: "{\"version\":3,\"file\":\"chat.svelte\",\"sources\":[\"chat.svelte\"],\"sourcesContent\":[\"<script>\\n  import Navbar from '../components/Navbar.svelte'\\n  import Tabbar from '../components/Tabbar.svelte'\\n  import RecentChats from '../components/RecentChats.svelte'\\n  import Chats from '../components/Chats.svelte'\\n</script>\\n\\n<svelte:head>\\n  <title>Chat :: Steam Mobile</title>\\n</svelte:head>\\n\\n<Navbar title=\\\"Chat\\\" />\\n<div id=\\\"chat\\\">\\n  <!-- Need to make x-scrollable and add notification bubble-->\\n  <RecentChats title=\\\"Recent Chats\\\" />\\n  <!-- Need to make x-scrollable and add notification bubble-->\\n  <Chats />\\n</div>\\n<Tabbar location={4} />\\n\\n<style>\\n  #chat {\\n    padding: 40px 0px;\\n    padding-right: 0;\\n    padding-bottom: 80px;\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAqBE,KAAK,eAAC,CAAC,AACL,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,aAAa,CAAE,CAAC,CAChB,cAAc,CAAE,IAAI,AACtB,CAAC\"}"
};

const Chat = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$i);

	return `${($$result.head += `${($$result.title = `<title>Chat :: Steam Mobile</title>`, "")}`, "")}

${validate_component(Navbar, "Navbar").$$render($$result, { title: "Chat" }, {}, {})}
<div id="${"chat"}" class="${"svelte-1dg3h8b"}">
  ${validate_component(RecentChats, "RecentChats").$$render($$result, { title: "Recent Chats" }, {}, {})}
  
  ${validate_component(Chats, "Chats").$$render($$result, {}, {}, {})}</div>
${validate_component(Tabbar, "Tabbar").$$render($$result, { location: 4 }, {}, {})}`;
});

/* src/routes/_layout.svelte generated by Svelte v3.22.2 */

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<main>${$$slots.default ? $$slots.default({}) : ``}
</main>`;
});

/* src/routes/_error.svelte generated by Svelte v3.22.2 */

const css$j = {
	code: "@media(min-width: 480px){}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n  export let status\\n  export let error\\n\\n  const dev = undefined === 'development'\\n</script>\\n\\n<svelte:head>\\n  <title>{status}</title>\\n</svelte:head>\\n\\n<style>\\n  h1,\\n  p {\\n    margin: 0 auto;\\n  }\\n\\n  h1 {\\n    font-size: 2.8em;\\n    font-weight: 700;\\n    margin: 0 0 0.5em 0;\\n  }\\n\\n  p {\\n    margin: 1em auto;\\n  }\\n\\n  @media (min-width: 480px) {\\n    h1 {\\n      font-size: 4em;\\n    }\\n  }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AA2BE,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAI3B,CAAC\"}"
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
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });
