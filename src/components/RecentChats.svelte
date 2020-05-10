<script>
  import RecentChat from './RecentChat.svelte'

  export let title
</script>

<!-- status codes
	1 = ingame, 2 online, 3 offline
status codes -->

<div id="card">
  <h3>Recent Chats</h3>
  <div id="list">
    <RecentChat image="friendone.png" status={1} name="bingotheslayeer" />
    <RecentChat image="friendtwo.png" status={2} name="fatherdeath" />
    <RecentChat image="friendthree.png" status={2} name="pyschotherapist" />
    <RecentChat image="friendfour.png" status={3} name="fatfather64" />
  </div>
</div>

<style>
  h3 {
    color: #a7d6f0;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;
    padding: 0px 30px;
  }

  #list {
    margin: 14px 0px;
    padding-left: 30px;
    display: flex;
    align-items: center;
  }

  #tabs {
    display: flex;
  }

  #card {
    position: sticky;
    padding-top: 30px;
    top: 60px;
    height: 120px;
    background-color: black;
    z-index: 999;
  }
</style>
