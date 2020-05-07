<script>
	import Navbar from '../components/Navbar.svelte';
	import Tabbar from '../components/Tabbar.svelte';
	import SupportCard from '../components/SupportCard.svelte';
</script>

<Navbar title="Support" />
<Tabbar location="5" />
<div id="support">
	<SupportCard title="Recent Products" />
	<SupportCard single="true" name="Configure app" />
	<SupportCard combined="true" name="Configure app" />
	<h5>rohanharikr/commit vesion</h5>
</div>

<style>
	#support{
		padding: 90px 0px;
		padding-right: 0;
		padding-bottom: 80px;
	}

	h5{
		padding: 0 30px;
		color: #9099a1;
	}
</style>
