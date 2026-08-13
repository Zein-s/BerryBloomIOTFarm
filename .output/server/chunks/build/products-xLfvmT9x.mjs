import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-DxzlVooo.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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

//#region app/pages/products.vue?vue&type=script&setup=true&lang.ts
var products_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "products",
	__ssrInlineRender: true,
	setup(__props) {
		const products = [
			{
				name: "Botanical Serum",
				tag: "Skincare",
				image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80"
			},
			{
				name: "Glow Lotion",
				tag: "Hydration",
				image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80"
			},
			{
				name: "Rose Mist",
				tag: "Mist",
				image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80"
			},
			{
				name: "Herbal Cleanser",
				tag: "Cleanser",
				image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
			},
			{
				name: "Night Cream",
				tag: "Night Care",
				image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
			},
			{
				name: "Sunscreen",
				tag: "Sun Protection",
				image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80"
			},
			{
				name: "Body Oil",
				tag: "Body Care",
				image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80"
			},
			{
				name: "Hair Tonic",
				tag: "Hair Care",
				image: "https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=800&q=80"
			},
			{
				name: "Essence Water",
				tag: "Essence",
				image: "https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80"
			},
			{
				name: "Recovery Mask",
				tag: "Mask",
				image: "https://images.unsplash.com/photo-1556228720-6d0d6f0e783b?auto=format&fit=crop&w=800&q=80"
			}
		];
		return (_ctx, _push, _parent, _attrs) => {
			const _component_NuxtLink = NuxtLink;
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "products-page" }, _attrs))} data-v-829a803e><header class="topbar" data-v-829a803e><div class="brand-wrap" data-v-829a803e><div class="brand-mark" data-v-829a803e>B</div><span data-v-829a803e>Berry Bloom</span></div><nav class="nav" data-v-829a803e>`);
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
			_push(`</nav>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "btn btn-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Mulai proyek`);
					else return [createTextVNode("Mulai proyek")];
				}),
				_: 1
			}, _parent));
			_push(`</header><section class="hero" data-v-829a803e><div data-v-829a803e><p class="eyebrow" data-v-829a803e>Katalog produk</p><h1 data-v-829a803e>Semua produk yang siap menghadirkan pengalaman brand lebih premium.</h1></div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/",
				class: "btn btn-secondary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Kembali ke home`);
					else return [createTextVNode("Kembali ke home")];
				}),
				_: 1
			}, _parent));
			_push(`</section><section class="product-grid" data-v-829a803e><!--[-->`);
			ssrRenderList(products, (item) => {
				_push(`<article class="product-card" data-v-829a803e><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} data-v-829a803e><div class="product-info" data-v-829a803e><strong data-v-829a803e>${ssrInterpolate(item.name)}</strong><span data-v-829a803e>${ssrInterpolate(item.tag)}</span></div></article>`);
			});
			_push(`<!--]--></section></main>`);
		};
	}
});
//#endregion
//#region app/pages/products.vue
var _sfc_setup = products_vue_vue_type_script_setup_true_lang_default.setup;
products_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/products.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var products_default = /*#__PURE__*/ _plugin_vue_export_helper_default(products_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-829a803e"]]);

export { products_default as default };
//# sourceMappingURL=products-xLfvmT9x.mjs.map
