<script>
	import Navbar from '../components/Navbar.svelte';
	import Tabbar from '../components/Tabbar.svelte';
	import StoreSection from '../components/StoreSection.svelte';
</script>

<Navbar title="Steam Store"/>
<Tabbar location="1" />
<div id="store">
	<StoreSection tag="Special Offers" heading="Midnight Madness" rectangleCard="true" />
	<StoreSection heading="Featured & Recommended" squareCard="true" />
	<StoreSection heading="Tags" stripCard="true" />
</div>

<style>
	#store{
		padding: 90px 30px;
		padding-right: 0;
		padding-bottom: 60px;
	}
</style>
