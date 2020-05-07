<script>
 import PriceBox from './PriceBox.svelte'

 export let image,
 			windows = true,
 			mac = false,
 			steam = false,
 			originalPrice,
 			reducedPrice;
</script>

<div id="card">
	<div id="image" style="background-image: url({image});"><PriceBox {originalPrice} {reducedPrice} small={true} /></div>
	<div id="cardInfo">
		<!-- <div id="owners">11 friends own this game</div> -->
		<div>
			{#if windows}
				<img src="windows.svg" height="12px;" />
			{/if}
			{#if mac}
				<img src="mac.svg" height="12px;" style="margin-left: 4px" />
			{/if}
			{#if steam}
				<img src="steamlogo.svg" height="12px;" style="margin-left: 4px" />
			{/if}
		</div>
	</div>
</div>

<style>
	#card {
		display: flex;
		flex-direction: column;
	}

	#image {
		width: 145px;
		height: 145px;
 		background-position: center;
  		background-repeat: no-repeat;
  		background-size: cover;
  		display: inline-block;
  		scroll-snap-align: center;
  		margin-left: 10px;
  		position: relative;
	}

/*	#owners {
		font-size: 8px;
		color: #a7d6f0;
	}*/

	#cardInfo {
		margin-top: 10px;
		display: flex;
		align-items: center;
		/*justify-content: space-between;*/
		justify-content: flex-end;
		padding: 0 5px;
		padding: 0 5px;
	}
</style>