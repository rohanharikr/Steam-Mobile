<script>
 export let image,
 			genre;	
</script>

<div id="card">
	<div id="image" style="background-image:url({image});"><div id="imageController">{genre}</div></div>
	<div id="cardInfo">
	</div>
</div>

<style>
	#card {
		display: flex;
		flex-direction: column;
	}

	#imageController {
		color: white;
		font-size: 18px;
		background-color: rgba(0,0,0,0.6);
		width: 100%;
		height: 100%;
  		display: flex;
  		justify-content: center;
  		align-items: center;

	}

	#image {
		width: 145px;
		height: 60px;
 		background-position: center;
  		background-repeat: no-repeat;
  		background-size: cover;
  		display: inline-block;
  		scroll-snap-align: center;
  		margin-left: 10px;
	}

</style>