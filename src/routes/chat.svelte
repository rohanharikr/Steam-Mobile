<script>
	import Navbar from '../components/Navbar.svelte';
	import Tabbar from '../components/Tabbar.svelte';
	import RecentChats from '../components/RecentChats.svelte';
</script>

<svelte:head>
	<title>Chat :: Steam Mobile</title>
</svelte:head>

<Navbar title="Chat" />
<div id="chat">
	<RecentChats title="Recent Chats" />
</div>
<Tabbar location={4} />

<style>
	#chat{
		padding: 90px 0px;
		padding-right: 0;
		padding-bottom: 60px;
	}
</style>
