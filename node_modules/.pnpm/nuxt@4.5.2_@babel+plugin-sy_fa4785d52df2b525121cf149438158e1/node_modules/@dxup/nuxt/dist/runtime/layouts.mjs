import { defineComponent, getCurrentInstance, h, inject, onScopeDispose, provide, shallowRef } from "vue";
import { NuxtLayout } from "#build/dxup/layouts.mjs";
//#region src/module/named-layout-slots/runtime/layouts.ts
const injectionKey = Symbol.for("dxup:layout-slots");
var layouts_default = defineComponent((props, ctx) => {
	const slots = shallowRef(null);
	let currentOwner = null;
	let resolveReady;
	provide(injectionKey, {
		slots,
		ready: new Promise((resolve) => {
			resolveReady = resolve;
		}),
		use(value, owner) {
			if (currentOwner) {
				for (let parent = owner?.parent; parent; parent = parent.parent) if (parent === currentOwner) return;
			}
			slots.value = value;
			currentOwner = owner;
			onScopeDispose(() => {
				if (currentOwner === owner) {
					slots.value = null;
					currentOwner = null;
				}
			});
			resolveReady?.();
		}
	});
	return () => h(NuxtLayout, props, ctx.slots);
});
const LayoutSlot = defineComponent({
	props: { name: {
		type: String,
		required: true
	} },
	setup(props, ctx) {
		const { slots, ready } = inject(injectionKey);
		const currentInstance = getCurrentInstance();
		const render = () => {
			return (slots.value?.[props.name] ?? currentInstance?.parent?.slots[props.name])?.(ctx.attrs) ?? ctx.slots.default?.();
		};
		if (import.meta.server && !slots.value?.[props.name]) return ready.then(() => render);
		return render;
	}
});
const LayoutSlotsForward = defineComponent((props, ctx) => {
	const { use } = inject(injectionKey);
	const currentInstance = getCurrentInstance();
	use(ctx.slots, currentInstance);
	return () => {
		const vnodes = ctx.slots.default?.();
		return vnodes?.length === 1 ? vnodes[0] : vnodes;
	};
});
//#endregion
export { LayoutSlot, LayoutSlotsForward, layouts_default as default };
