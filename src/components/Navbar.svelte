<script>
  import Headroom from 'svelte-headroom'
  export let title
</script>

<Headroom offset={50} tolerance={5}>
  <div id="navbar">
    <div>
      <img src="search.svg" />
    </div>
    <div>{title}</div>
    <div>
      <img src="filter.svg" height="12px;" />
    </div>
  </div>
</Headroom>

<style>
  #navbar {
    background-color: #0a1226;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 30px;
    color: #9099a1;
    font-weight: 500;
    font-size: 16px;
  }
</style>
