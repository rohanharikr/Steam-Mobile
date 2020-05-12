<script>
  import Headroom from 'svelte-headroom'
  export let title
</script>

<Headroom offset={50} tolerance={5}>
  <div id="navbar">
    <img src="steambrand.svg" height="28px" style="opacity: 1" />
    <div id="navbar--right">
      <div style="opacity: 0.6">{title}</div>
      <img src="search.svg" />
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
    padding: 0px 20px;
    color: #027aff;
    font-weight: 500;
    font-size: 16px;
  }

  #navbar--right {
    display: flex;
  }

  #navbar--right div {
    padding-right: 30px;
  }

  #navbar--right div::after {
    content: '';
    position: absolute;
    width: 1px;
    height: 24px;
    background-color: #9099a1;
    opacity: 0.2;
    top: 18px;
    margin-left: 15px;
  }
</style>
