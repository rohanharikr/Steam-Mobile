<script>
	import Navbar from '../components/Navbar.svelte';
	import Tabbar from '../components/Tabbar.svelte';
	import StoreSection from '../components/StoreSection.svelte';
</script>

<Navbar title="Steam Guard" />
<Tabbar location="3" />
<div id="guard">
	72826
</div>

<style>
	#guard{
		padding: 90px 30px;
		padding-right: 0;
		padding-bottom: 60px;
	}
</style>
