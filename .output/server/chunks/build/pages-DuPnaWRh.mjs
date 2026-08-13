import { _ as _plugin_vue_export_helper_default } from '../virtual/entry.mjs';
import { N as NuxtLink } from './nuxt-link-DxzlVooo.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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

//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const features = [
			{
				title: "Branding yang konsisten",
				description: "Buat identitas visual yang kuat dan terlihat profesional di setiap kanal digital."
			},
			{
				title: "Landing page yang cepat",
				description: "Desain dibuat ringan, responsif, dan optimal untuk kecepatan loading di desktop maupun mobile."
			},
			{
				title: "Siap untuk ekspor",
				description: "Struktur halaman dibuat agar mudah dipindah ke proyek lain atau dipublikasikan sebagai landing page statis."
			}
		];
		const metrics = [
			{
				value: "4.9/5",
				label: "Rating klien"
			},
			{
				value: "2.4x",
				label: "Peningkatan engagement"
			},
			{
				value: "24/7",
				label: "Ketersediaan brand"
			}
		];
		const testimonials = [
			{
				name: "Nadia",
				role: "Owner Brand",
				quote: "Desain yang terasa premium dan mudah dicerna. Brand kami langsung lebih dipercaya setelah landing page baru dibuat."
			},
			{
				name: "Rizky",
				role: "Founder Startup",
				quote: "Prosesnya cepat, hasilnya rapi, dan benar-benar membantu conversion. Kami merasa lebih siap untuk scale."
			},
			{
				name: "Salsa",
				role: "Marketing Lead",
				quote: "Semua elemen terasa konsisten. Tim kami lebih mudah menjelaskan value proposition dengan tampilan yang kuat."
			}
		];
		const team = [{
			name: "Aisyah",
			role: "Creative Director",
			image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
		}, {
			name: "Rafi",
			role: "Brand Strategist",
			image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
		}];
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
			_push(`<main${ssrRenderAttrs(mergeProps({ class: "page-shell" }, _attrs))} data-v-8128c1c7><header class="topbar" data-v-8128c1c7><div class="brand-wrap" data-v-8128c1c7><div class="brand-mark" data-v-8128c1c7>B</div><span data-v-8128c1c7>Berry Bloom</span></div><nav class="nav" data-v-8128c1c7>`);
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
			_push(`</header><section class="hero" data-v-8128c1c7><div class="hero-copy" data-v-8128c1c7><p class="eyebrow" data-v-8128c1c7>Website siap ekspor</p><h1 data-v-8128c1c7>Bangun brand yang lebih hidup dan lebih dipercaya.</h1><p class="subtitle" data-v-8128c1c7> Berry Bloom membantu bisnis tumbuh dengan strategi branding, tampilan landing page yang modern, dan pengalaman digital yang membuat audiens segera percaya. </p><div class="cta-row" data-v-8128c1c7>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "btn btn-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Jadwalkan konsultasi`);
					else return [createTextVNode("Jadwalkan konsultasi")];
				}),
				_: 1
			}, _parent));
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "#features",
				class: "btn btn-secondary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Lihat fitur`);
					else return [createTextVNode("Lihat fitur")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="stats" data-v-8128c1c7><!--[-->`);
			ssrRenderList(metrics, (item) => {
				_push(`<div class="stat-card" data-v-8128c1c7><strong data-v-8128c1c7>${ssrInterpolate(item.value)}</strong><span data-v-8128c1c7>${ssrInterpolate(item.label)}</span></div>`);
			});
			_push(`<!--]--></div></div><div class="hero-visual" aria-label="Preview brand showcase" data-v-8128c1c7><div class="visual-card main-card" data-v-8128c1c7><span class="chip" data-v-8128c1c7>Campaign</span><h3 data-v-8128c1c7>Spring Collection</h3><div class="product-showcase" data-v-8128c1c7><div class="product product-one" data-v-8128c1c7></div><div class="product product-two" data-v-8128c1c7></div></div><div class="mini-row" data-v-8128c1c7><span data-v-8128c1c7>+18.4%</span><span data-v-8128c1c7>Brand Reach</span></div></div><div class="visual-card floating-card" data-v-8128c1c7><p data-v-8128c1c7>Conversion</p><strong data-v-8128c1c7>7.8%</strong><small data-v-8128c1c7>+2.1% dibanding bulan lalu</small></div></div></section><section id="features" class="features" data-v-8128c1c7><div class="section-heading" data-v-8128c1c7><p class="eyebrow" data-v-8128c1c7>Kenapa pilih kami</p><h2 data-v-8128c1c7>Solusi yang dibuat untuk pertumbuhan brand.</h2></div><div class="feature-grid" data-v-8128c1c7><!--[-->`);
			ssrRenderList(features, (feature) => {
				_push(`<article class="feature-card" data-v-8128c1c7><div class="feature-icon" data-v-8128c1c7>✦</div><h3 data-v-8128c1c7>${ssrInterpolate(feature.title)}</h3><p data-v-8128c1c7>${ssrInterpolate(feature.description)}</p></article>`);
			});
			_push(`<!--]--></div></section><section id="about" class="about" data-v-8128c1c7><div class="about-copy" data-v-8128c1c7><p class="eyebrow" data-v-8128c1c7>Tentang Berry Bloom</p><h2 data-v-8128c1c7>Branding yang terasa premium dan jauh lebih mudah dicerna audiens.</h2></div><div class="about-panel" data-v-8128c1c7><p data-v-8128c1c7> Kami menggabungkan strategi visual, storytelling, dan pengalaman pengguna agar tiap halaman mampu menonjembatani bisnis dengan target audiens dengan cara yang lebih elegan dan efektif. </p></div></section><section class="team-section" data-v-8128c1c7><div class="section-heading" data-v-8128c1c7><p class="eyebrow" data-v-8128c1c7>Tim kami</p><h2 data-v-8128c1c7>Orang-orang di balik produk yang tumbuh bersama brand.</h2></div><div class="team-layout" data-v-8128c1c7><article class="team-card featured" data-v-8128c1c7><img${ssrRenderAttr("src", team[0].image)}${ssrRenderAttr("alt", team[0].name)} data-v-8128c1c7><div class="team-info" data-v-8128c1c7><strong data-v-8128c1c7>${ssrInterpolate(team[0].name)}</strong><span data-v-8128c1c7>${ssrInterpolate(team[0].role)}</span></div></article><!--[-->`);
			ssrRenderList(team.slice(1), (member) => {
				_push(`<article class="team-card" data-v-8128c1c7><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} data-v-8128c1c7><div class="team-info" data-v-8128c1c7><strong data-v-8128c1c7>${ssrInterpolate(member.name)}</strong><span data-v-8128c1c7>${ssrInterpolate(member.role)}</span></div></article>`);
			});
			_push(`<!--]--></div></section><section class="product-showcase-section" data-v-8128c1c7><div class="section-heading product-header" data-v-8128c1c7><div data-v-8128c1c7><p class="eyebrow" data-v-8128c1c7>Produk kami</p><h2 data-v-8128c1c7>10 produk yang siap menghadirkan nilai lebih untuk pelanggan.</h2></div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/products",
				class: "btn btn-secondary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`Lihat semua`);
					else return [createTextVNode("Lihat semua")];
				}),
				_: 1
			}, _parent));
			_push(`</div><div class="product-grid" data-v-8128c1c7><!--[-->`);
			ssrRenderList(products, (item) => {
				_push(`<article class="product-card" data-v-8128c1c7><img${ssrRenderAttr("src", item.image)}${ssrRenderAttr("alt", item.name)} data-v-8128c1c7><div class="product-info" data-v-8128c1c7><strong data-v-8128c1c7>${ssrInterpolate(item.name)}</strong><span data-v-8128c1c7>${ssrInterpolate(item.tag)}</span></div></article>`);
			});
			_push(`<!--]--></div></section><section class="testimonials" data-v-8128c1c7><div class="section-heading" data-v-8128c1c7><p class="eyebrow" data-v-8128c1c7>Testimoni</p><h2 data-v-8128c1c7>Klien merasa lebih percaya sejak brand mereka terlihat lebih kuat.</h2></div><div class="testimonial-grid" data-v-8128c1c7><!--[-->`);
			ssrRenderList(testimonials, (item) => {
				_push(`<article class="testimonial-card" data-v-8128c1c7><div class="stars" data-v-8128c1c7>★★★★★</div><p data-v-8128c1c7>“${ssrInterpolate(item.quote)}”</p><div class="person" data-v-8128c1c7><strong data-v-8128c1c7>${ssrInterpolate(item.name)}</strong><span data-v-8128c1c7>${ssrInterpolate(item.role)}</span></div></article>`);
			});
			_push(`<!--]--></div></section><section class="cta-panel" data-v-8128c1c7><div data-v-8128c1c7><p class="eyebrow" data-v-8128c1c7>Siap memulai?</p><h2 data-v-8128c1c7>Mari buat website yang menonjual tanpa perlu terlalu banyak penjelasan.</h2></div>`);
			_push(ssrRenderComponent(_component_NuxtLink, {
				to: "/contact",
				class: "btn btn-primary"
			}, {
				default: withCtx((_, _push, _parent, _scopeId) => {
					if (_push) _push(`hello@berrybloom.id`);
					else return [createTextVNode("hello@berrybloom.id")];
				}),
				_: 1
			}, _parent));
			_push(`</section><footer class="site-footer" data-v-8128c1c7><div class="brand-wrap" data-v-8128c1c7><div class="brand-mark" data-v-8128c1c7>B</div><span data-v-8128c1c7>Berry Bloom</span></div><div class="footer-links" data-v-8128c1c7>`);
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
			_push(`</div><p data-v-8128c1c7>© 2026 Berry Bloom. Semua hak dilindungi.</p></footer></main>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = /*#__PURE__*/ _plugin_vue_export_helper_default(index_vue_vue_type_script_setup_true_lang_default, [["__scopeId", "data-v-8128c1c7"]]);

export { pages_default as default };
//# sourceMappingURL=pages-DuPnaWRh.mjs.map
