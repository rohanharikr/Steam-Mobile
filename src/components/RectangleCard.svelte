<script>
  import PriceBox from './PriceBox.svelte'

  export let image,
    windows = true,
    mac = false,
    steam = false,
    originalPrice,
    reducedPrice
</script>

<div id="card">
  <div id="image" class="image" style="background-image: url({image});">
    <PriceBox {originalPrice} {reducedPrice} />
  </div>
  <div id="cardInfo">
    <div id="owners">11 friends own this game</div>
    <div>
      {#if windows}
        <img src="windows.svg" height="15px;" />
      {/if}
      {#if mac}
        <img src="mac.svg" height="15px;" style="margin-left: 4px" />
      {/if}
      {#if steam}
        <img src="steamlogo.svg" height="15px;" style="margin-left: 4px" />
      {/if}
    </div>
  </div>
</div>

<style>
  #card {
    display: flex;
    flex-direction: column;
  }

  .image {
    width: 300px;
    height: 150px;
    scroll-snap-stop: always;
    scroll-snap-align: center;
  }

  #owners {
    margin-left: 10px;
    font-size: 12px;
    color: #a7d6f0;
  }

  #cardInfo {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 5px;
  }
</style>
