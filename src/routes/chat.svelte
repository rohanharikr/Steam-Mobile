<script>
	import Navbar from '../components/Navbar.svelte';
	import Tabbar from '../components/Tabbar.svelte';
	import StoreSection from '../components/StoreSection.svelte';
</script>

<svelte:head>
	<title>Chat :: Steam Mobile</title>
</svelte:head>

<Navbar title="Chat" />
<Tabbar location="4" />
<div id="chat">
</div>

<style>
	#chat{
		padding: 90px 30px;
		padding-right: 0;
		padding-bottom: 60px;
	}
</style>
