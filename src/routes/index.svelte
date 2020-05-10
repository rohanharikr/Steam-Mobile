<script>
  import Navbar from '../components/Navbar.svelte'
  import Tabbar from '../components/Tabbar.svelte'
  import SteamGuard from '../components/SteamGuard.svelte'
  import SteamMusic from '../components/SteamMusic.svelte'
</script>

<svelte:head>
  <title>Guard :: Steam Mobile</title>
</svelte:head>

<Navbar title="Steam Guard" />
<div id="guard">
  <SteamGuard />
  <SteamMusic />
</div>
<Tabbar location={3} />

<style>
  #guard {
    padding: 0;
    padding-bottom: 60px;
    text-align: center;
  }
</style>
