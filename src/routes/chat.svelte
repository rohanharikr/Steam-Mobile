<script>
  import Navbar from '../components/Navbar.svelte'
  import Tabbar from '../components/Tabbar.svelte'
  import Chats from '../components/Chats.svelte'
  import RecentChats from '../components/RecentChats.svelte'
</script>

<svelte:head>
  <title>Chat :: Steam Mobile</title>
</svelte:head>

<Navbar title="Chat" />
<div id="chat">
  <!-- Need to make x-scrollable and add notification bubble-->
  <RecentChats title="Recent Chats" />
  <!-- Need to make x-scrollable and add notification bubble-->
  <Chats />
</div>
<Tabbar location={4} />

<style>
  #chat {
    padding: 40px 0px;
    padding-right: 0;
    padding-bottom: 80px;
  }
</style>
