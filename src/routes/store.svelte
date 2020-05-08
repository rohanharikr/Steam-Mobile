<script>
	import Navbar from '../components/Navbar.svelte';
	import Tabbar from '../components/Tabbar.svelte';
	import StoreSection from '../components/StoreSection.svelte';
</script>

<svelte:head>
	<title>Store :: Steam Mobile</title>
</svelte:head>

<Navbar title="Steam Store"/>
<div id="store">
	<StoreSection tag="Special Offers" heading="Midnight Madness" rectangleCard="true" />
	<StoreSection heading="Featured & Recommended" squareCard="true" />
	<StoreSection heading="Tags" stripCard="true" />
</div>
<Tabbar location={1} />

<style>
	#store{
		padding: 90px 30px;
		padding-right: 0;
		padding-bottom: 60px;
	}
</style>
