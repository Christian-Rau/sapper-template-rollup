<!-- 
Copyright 2020 Christian Rau www.blunodes.com 
github: https://github.com/Christian-Rau/saptail-autoprefixer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 -->
<script>
	import { fade } from 'svelte/transition';

	export let segment;

	// toggle menu function:
	let isToggled = false

	function toggle() {
		isToggled = !isToggled
	}
</script>

<style>

</style>

<nav class="flex flex-wrap items-center p-1 bg-transparent">
	<!-- logo section -->
	<a class="inline-flex flex-wrap items-center p-2" href=".">
		<h3 class="uppercase"><span class="font-bold">base</span>template</h3>
	</a>
	<!-- burger section -->
	<button class="inline-flex p-2 ml-auto text-gray-700 rounded-full md:hidden hover:bg-gray-300 focus:outline-none"
		on:click="{toggle}">
		<div class="cursor-pointer md:hidden " id="burger">
			<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
				stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
				class="feather feather-menu">
				{#if !isToggled}
				<line in:fade x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>
				{:else}
				<line in:fade x1="18" y1="6" x2="6" y2="18"></line><line in:fade x1="6" y1="6" x2="18" y2="18"></line>
				{/if}
			</svg>
		</div>
	</button>
	<!-- burger section END -->

	
		<div
			class:hidden="{!isToggled}"
			class="w-full top-navbar md:inline-flex md:flex-grow md:w-auto"
			id="navigation"
		>
			
			<div 
			class="flex flex-col items-start w-full text-right md:inline-flex md:flex-row md:ml-auto md:w-auto md:items-center md:h-auto">
				<a 
					class="items-center justify-center w-full px-3 py-2 text-gray-700 rounded md:inline-flex md:w-auto hover:text-teal-500"
					aria-current="{segment === undefined ? 'page' : undefined}"
					on:click="{toggle}"
					href="."
				>
				Home
				</a>
				<a 
					class="items-center justify-center w-full px-3 py-2 text-gray-700 rounded md:inline-flex md:w-auto hover:text-teal-500"
					aria-current="{segment === 'about' ? 'page' : undefined}"
					on:click="{toggle}"
					href="about"
				>
				About
				</a>
				<a 
					class="items-center justify-center w-full px-3 py-2 text-gray-700 rounded md:inline-flex md:w-auto hover:text-teal-500"
					rel="prefetch"
					aria-current="{segment === 'blog' ? 'page' : undefined}"
					on:click="{toggle}"
					href="blog"
				>
				Blog
				</a>
				<a 
					class="items-center justify-center w-full px-3 py-2 text-gray-700 rounded md:inline-flex md:w-auto hover:text-teal-500" on:click="{toggle}" href="https://github.com/Christian-Rau/saptail-autoprefixer">
					<div class="flex justify-end">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
				</a>
		</div>
	</div>
</nav>