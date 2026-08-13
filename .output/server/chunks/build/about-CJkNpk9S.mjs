import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-DxzlVooo.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'nostics';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue-router';
import 'unhead/utils';

//#region app/pages/about.vue?vue&type=script&setup=true&lang.ts
var about_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "about",
	__ssrInlineRender: true,
	setup(__props) {
		const values = [
			"Branding yang konsisten dari awal sampai akhir funnel.",
			"Desain premium yang mudah dipahami audiens.",
			"Proses kerja yang jelas, cepat, dan terstruktur."
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "page-shell" }, _attrs))} data-v-dc6cfa28><header class="topbar" data-v-dc6cfa28>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "brand-wrap"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="brand-mark" data-v-dc6cfa28${_scopeId}>B</div><span data-v-dc6cfa28${_scopeId}>Berry Bloom</span>`);
					else return [createVNode("div", { class: "brand-mark" }, "B"), createVNode("span", null, "Berry Bloom")];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="nav" data-v-dc6cfa28>`);
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Home`);
					else return [createTextVNode("Home")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`About`);
					else return [createTextVNode("About")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/services" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Services`);
					else return [createTextVNode("Services")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/pricing" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Pricing`);
					else return [createTextVNode("Pricing")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Kontak`);
					else return [createTextVNode("Kontak")];
				}),
				_: 1
			}, _parent));
			_push(`</nav></header><section class="hero-card" data-v-dc6cfa28><p class="eyebrow" data-v-dc6cfa28>Tentang kami</p><h1 data-v-dc6cfa28>Branding yang terasa premium, sekaligus mudah dipahami.</h1><p class="subtitle" data-v-dc6cfa28> Berry Bloom hadir untuk membantu brand tumbuh lewat visual yang lebih kuat, strategi yang lebih tajam, dan pengalaman digital yang membuat bisnis lebih dipercaya pelanggan. </p><div class="value-grid" data-v-dc6cfa28><!--[-->`);
			ssrRenderList(values, (item) => {
				_push(`<div class="value-card" data-v-dc6cfa28><span class="check" data-v-dc6cfa28>✓</span><p data-v-dc6cfa28>${ssrInterpolate(item)}</p></div>`);
			});
			_push(`<!--]--></div></section></main>`);
		};
	}
});
//#endregion
//#region app/pages/about.vue
var _sfc_setup = about_vue_vue_type_script_setup_true_lang_default.setup;
about_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about_default = /*#__PURE__*/ _plugin_vue_export_helper_default(about_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-dc6cfa28"]]);

export { about_default as default };
//# sourceMappingURL=about-CJkNpk9S.mjs.map
