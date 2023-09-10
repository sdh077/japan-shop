<script lang="ts">
	import classNames from 'classnames';
	import Frame from '../utils/Frame.svelte';
	import { createEventDispatcher, type ComponentProps } from 'svelte';
	import CloseButton from '../utils/CloseButton.svelte';
	import focusTrap from '../utils/focusTrap';
	import type { ModalPlacementType, SizeType } from '../types';

	// propagate props type from underlying Frame
	interface $$Props extends ComponentProps<Frame> {
		open?: boolean;
		title?: string;
		size?: SizeType;
		placement?:
			| 'top-left'
			| 'top-center'
			| 'top-right'
			| 'center-left'
			| 'center'
			| 'center-right'
			| 'bottom-left'
			| 'bottom-center'
			| 'bottom-right';
		autoclose?: boolean;
		permanent?: boolean;
		backdropClasses?: string;
		defaultClass?: string;
		outsideclose?: boolean;
	}

	export let open: boolean = false;
	export let title: string = '';
	export let size: SizeType = 'md';
	export let placement: ModalPlacementType = 'center';
	export let autoclose: boolean = false;
	export let permanent: boolean = false;
	export let backdropClasses: string = 'modal-backdrop';
	export let defaultClass: string = 'modal show';
	export let outsideclose: boolean = false;
	export let paddingTop: string = '';

	const dispatch = createEventDispatcher();
	$: dispatch(open ? 'open' : 'hide');

	function prepareFocus(node: HTMLElement) {
		const walker = document.createTreeWalker(node, NodeFilter.SHOW_ELEMENT);
		let n: Node | null;
		while ((n = walker.nextNode())) {
			if (n instanceof HTMLElement) {
				const el = n as HTMLElement;
				const [x, y] = isScrollable(el);
				if (x || y) el.tabIndex = 0;
			}
		}
		node.focus();
	}

	const getPlacementClasses = () => {
		switch (placement) {
			// top
			case 'top-left':
				return ['justify-start', 'items-start'];
			case 'top-center':
				return ['justify-center', 'items-start'];
			case 'top-right':
				return ['justify-end', 'items-start'];

			// center
			case 'center-left':
				return ['justify-start', 'items-center'];
			case 'center':
				return ['justify-center', 'items-center'];
			case 'center-right':
				return ['justify-end', 'items-center'];

			// bottom
			case 'bottom-left':
				return ['justify-start', 'items-end'];
			case 'bottom-center':
				return ['justify-center', 'items-end'];
			case 'bottom-right':
				return ['justify-end', 'items-end'];

			default:
				return ['justify-center', 'items-center'];
		}
	};

	const sizes = {
		xs: 'max-w-md',
		sm: 'max-w-lg',
		md: 'w-md-75',
		lg: 'max-w-4xl',
		xl: 'max-w-7xl'
	};

	const onAutoClose = (e: MouseEvent) => {
		console.log(e);
		const target: Element = e.target as Element;
		if (autoclose && target?.tagName === 'BUTTON') hide(e);
		if (outsideclose && target === e.currentTarget) hide(e);
	};

	const hide = (e: Event) => {
		e.preventDefault();
		open = false;
	};

	let frameClass: string;
	$: frameClass = classNames(defaultClass, $$props.class, 'w-full');

	const isScrollable = (e: HTMLElement): boolean[] => [
		e.scrollWidth > e.clientWidth && ['scroll', 'auto'].indexOf(getComputedStyle(e).overflowX) >= 0,
		e.scrollHeight > e.clientHeight &&
			['scroll', 'auto'].indexOf(getComputedStyle(e).overflowY) >= 0
	];

	function preventWheelDefault(e: Event) {
		// @ts-ignore
		const [x, y] = isScrollable(this);
		return x || y || e.preventDefault();
	}

	function handleKeys(e: KeyboardEvent) {
		if (e.key === 'Escape' && !permanent) return hide(e);
	}
</script>

{#if open}
	<div
		class="modal fade show"
		id="modalBasic"
		tabindex="-1"
		aria-labelledby="modalBasicLabel"
		aria-hidden="true"
		on:keydown={handleKeys}
		on:wheel|preventDefault|nonpassive
		use:prepareFocus
		use:focusTrap
		on:click={autoclose ? onAutoClose : null}
		aria-modal="true"
		role="dialog"
	>
		<div class="modal-dialog">
			<div class="modal-content border-0">
				<div class="modal-header border-0 bg-body-tertiary">
					{#if $$slots.header || title}
						<slot name="header">
							<h5 class="modal-title">{title}</h5>
						</slot>
					{/if}
					<!--Close button-->
					<button
						type="button"
						class="btn btn-gray-200 p-0 border-2 width-3x height-3x rounded-circle flex-center z-1"
						data-bs-dismiss="modal"
						aria-label="Close"
					>
						<i class="bx bx-x fs-5" />
					</button>
				</div>
				<div
					class="modal-body py-5 border-0"
					on:keydown|stopPropagation={handleKeys}
					on:wheel|stopPropagation|passive
				>
					<slot />
				</div>
				{#if $$slots.footer}
					<slot name="footer" />
				{:else}
					<div class="modal-footer bg-body-tertiary border-0">
						<button type="button" class="btn btn-gray-200 btn-sm" data-bs-dismiss="modal"
							>Close</button
						>
					</div>
				{/if}
			</div>
		</div>
	</div>
	<!-- backdrop -->
	<!-- <div class={classNames('fixed inset-0 z-40', backdropClasses)} /> -->
	<!-- dialog -->
	<!-- <div
		on:keydown={handleKeys}
		on:wheel|preventDefault|nonpassive
		use:prepareFocus
		use:focusTrap
		on:click={autoclose ? onAutoClose : null}
		class={classNames(
			'fixed top-0 left-0 right-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 d-flex ',
			...getPlacementClasses()
		)}
		tabindex="-1"
		aria-modal="true"
		role="dialog"
	>
		<div class="d-flex relative {sizes[size]} modalScroll">
			<Frame rounded shadow {...$$restProps} class={frameClass}>
				{#if $$slots.header || title}
					<Frame
						color={$$restProps.color}
						class="d-flex justify-between items-center p-8 pb-0 rounded-t-4"
					>
						<slot name="header">
							<h3
								class="text-lg font-semibold mb-0 {$$restProps.color
									? ''
									: 'text-gray-900 dark:text-white'} p-0"
							>
								{title}
							</h3>
						</slot>
					</Frame>
				{:else if !permanent}
					<CloseButton
						name="Close modal"
						class="absolute top-3 right-1"
						on:click={hide}
						size={'custom'}
						color={$$restProps.color}
					/>
				{/if}
				<div
					id="modal"
					class="px-8 pb-8 {paddingTop
						? paddingTop
						: 'pt-8'} pb-0 space-y-6 d-flex-1 overflow-y-auto overscroll-contain modalScroll"
					on:keydown|stopPropagation={handleKeys}
					on:wheel|stopPropagation|passive
				>
					<slot />
				</div>
				{#if $$slots.footer}
					<Frame
						color={$$restProps.color}
						class="d-flex items-center p-8 pt-0 space-x-2 rounded-b-4 justify-end mt-5"
					>
						<slot name="footer" />
					</Frame>
				{/if}
			</Frame>
		</div>
	</div> -->
{/if}

<style>
	.modalScroll::-webkit-scrollbar {
		width: 10px; /* 스크롤바의 너비 */
	}

	.modalScroll::-webkit-scrollbar-thumb {
		height: 30%; /* 스크롤바의 길이 */
		background: #555; /* 스크롤바의 색상 */

		border-radius: 10px;
	}

	.modalScroll::-webkit-scrollbar-track {
		background: #f5f5f5; /*스크롤바 뒷 배경 색상*/
	}
</style>
