<script>
	import Navbar from '../components/Navbar.svelte';
	import Tabbar from '../components/Tabbar.svelte';
</script>

<svelte:head>
	<title>Guard :: Steam Mobile</title>
</svelte:head>

<Navbar title="Steam Guard" />
<div id="guard">
	72826
</div>
<Tabbar location={3} />

<style>
	#guard{
		padding: 90px 30px;
		padding-right: 0;
		padding-bottom: 60px;
	}
</style>
