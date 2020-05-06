<script>
 export let image,
 			windows = true,
 			mac = false,
 			steam = false;
</script>

<div id="card">
	<div id="image" style="background-image: url({image});"></div>
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

	#image {
		width: 300px;
		height: 150px;
 		background-position: center;
  		background-repeat: no-repeat;
  		background-size: cover;
  		display: inline-block;
  		scroll-snap-align: center;
  		margin-left: 10px;
	}

	#owners {
		margin-left: 10px;
		font-size: 12px;
		color: #a7d6f0;
	}

	#ownersr::hover{
		transform: scale(2);
	}

	#cardInfo {
		margin-top: 10px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 5px;
	}
</style>