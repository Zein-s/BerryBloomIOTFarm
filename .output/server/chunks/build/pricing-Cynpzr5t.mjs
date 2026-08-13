import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-DxzlVooo.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/pages/pricing.vue?vue&type=script&setup=true&lang.ts
var pricing_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "pricing",
	__ssrInlineRender: true,
	setup(__props) {
		const plans = [
			{
				name: "Starter",
				price: "Rp1.5jt",
				features: [
					"Brand audit",
					"Landing page satu halaman",
					"Desain visual dasar"
				],
				highlight: false
			},
			{
				name: "Growth",
				price: "Rp3.5jt",
				features: [
					"Brand identity lengkap",
					"Landing page premium",
					"Copywriting ringan"
				],
				highlight: true
			},
			{
				name: "Scale",
				price: "Rp6jt",
				features: [
					"Strategy marketing",
					"Campaign creative",
					"Support konsultasi rutin"
				],
				highlight: false
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "page-shell" }, _attrs))} data-v-7b6ff393><header class="topbar" data-v-7b6ff393>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "brand-wrap"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`<div class="brand-mark" data-v-7b6ff393${_scopeId}>B</div><span data-v-7b6ff393${_scopeId}>Berry Bloom</span>`);
					else return [createVNode("div", { class: "brand-mark" }, "B"), createVNode("span", null, "Berry Bloom")];
				}),
				_: 1
			}, _parent));
			_push(`<nav class="nav" data-v-7b6ff393>`);
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
			_push(`</nav></header><section class="hero-card" data-v-7b6ff393><p class="eyebrow" data-v-7b6ff393>Pricing</p><h1 data-v-7b6ff393>Pilih paket yang paling sesuai dengan kebutuhan brand Anda.</h1><div class="pricing-grid" data-v-7b6ff393><!--[-->`);
			ssrRenderList(plans, (plan) => {
				_push(`<article class="${ssrRenderClass(["plan-card", { highlight: plan.highlight }])}" data-v-7b6ff393><p class="plan-name" data-v-7b6ff393>${ssrInterpolate(plan.name)}</p><h2 data-v-7b6ff393>${ssrInterpolate(plan.price)}</h2><ul data-v-7b6ff393><!--[-->`);
				ssrRenderList(plan.features, (feature) => {
					_push(`<li data-v-7b6ff393>${ssrInterpolate(feature)}</li>`);
				});
				_push(`<!--]--></ul>`);
				_push(ssrRenderComponent(_component_NuxtLink, {
					to: "/contact",
					class: "btn"
				}, {
					default: withCtx((_, _push, _parent, _scopeId) => {
						if (_push) _push(`Pilih paket`);
						else return [createTextVNode("Pilih paket")];
					}),
					_: 2
				}, _parent));
				_push(`</article>`);
			});
			_push(`<!--]--></div></section></main>`);
		};
	}
});
//#endregion
//#region app/pages/pricing.vue
var _sfc_setup = pricing_vue_vue_type_script_setup_true_lang_default.setup;
pricing_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pricing_default = /*#__PURE__*/ _plugin_vue_export_helper_default(pricing_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-7b6ff393"]]);

export { pricing_default as default };
//# sourceMappingURL=pricing-Cynpzr5t.mjs.map
