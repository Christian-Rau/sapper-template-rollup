<!-- 
Copyright 2020 Christian Rau www.blunodes.com 
github: https://github.com/Christian-Rau/saptail-autoprefixer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 -->
<script>
	import TestComponent from "../components/TestComponent.svelte";
</script>

<style>
	.centerer {
		display: flex;
		flex: 1 1 0%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>

<svelte:head>
	<title>Sapper base-template</title>
</svelte:head>



<div class="flex flex-col w-full h-64 leading-none">
	<div class="flex flex-col flex-1" id="sapper">
		<div class:centerer={true}>
			<!-- Here's how you could extract conditional class groups with @apply -->
			<TestComponent title="Sapper TailwindCSS Starter" paragraph="This is an example component." />
		</div>
	</div>
</div>