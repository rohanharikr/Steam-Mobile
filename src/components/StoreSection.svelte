<script>
	import RectangleCard from '../components/RectangleCard.svelte';
	import SquareCard from '../components/SquareCard.svelte';
	import StripCard from '../components/StripCard.svelte';

	export let tag = '',
			   heading,
			   rectangleCard = false,
			   squareCard = false,
			   stripCard = false;
</script>

<div id="section">
	<h6>{tag}</h6>
	<h3>{heading}</h3>
	<div id="spotlight">
		{#if rectangleCard}
			<RectangleCard image="https://cdn.arstechnica.net/wp-content/uploads/2019/10/outer-worlds-listing.png" originalPrice="69.99" reducedPrice="59.99" />
			<RectangleCard image="https://i.ytimg.com/vi/eaW0tYpxyp0/maxresdefault.jpg" />
			<RectangleCard image="https://steamcdn-a.akamaihd.net/steam/apps/374320/capsule_616x353.jpg" />
			<RectangleCard image="https://steam.cryotank.net/wp-content/gallery/ori/Ori-01-HD.png" mac="true" />
			<RectangleCard image="https://i.ytimg.com/vi/2enbYOMtR4I/maxresdefault.jpg" />
		{/if}
		{#if squareCard}
			<SquareCard image="https://lh3.googleusercontent.com/caNRdVjHrAC8AXjQwNp4u0FzK2xwKTMC--MYdb8xXNeCinjwQOF8EqSOcYCC3RFBdgjd" mac="true" steam="true" />
			<SquareCard image="https://www.androidpolice.com/wp-content/uploads/2018/10/81LJeCDylML.jpg" mac="true" steam="true" />
			<SquareCard image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQsrSn4-vAw6oUWmYryVBtEnTUUd6-5rCQdzS1p4Hik-dLxOnOz&usqp=CAU" mac="true" steam="true" />
			<SquareCard image="https://i.ytimg.com/vi/gvECQlxrhbw/maxresdefault.jpg" mac="true" />
			<SquareCard image="https://images-na.ssl-images-amazon.com/images/I/71p9r+IRobL.jpg" mac="true" />
		{/if}
		{#if stripCard}
			<StripCard genre="Indie" image="https://venturebeat.com/wp-content/uploads/2012/03/journey-1.jpg?w=1200&strip=all" />
			<StripCard genre="Action" image="https://store-images.s-microsoft.com/image/apps.38656.69038865179152125.af885fa8-7b94-47b1-be3a-d2ab6af95a6a.af83131f-d4dc-4d47-a84d-25aab92a5e5b?mode=scale&q=90&h=1080&w=1920" />
			<StripCard genre="Adventure" image="https://assets1.ignimgs.com/2020/03/24/ign-doom-eternal-complete-review-blogroll-1585092832291.jpg" />
			<StripCard genre="Multiplayer" image="https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png" />
			<StripCard genre="Horror" image="https://i2.wp.com/tecake.com/wp-content/uploads/2020/04/4L2MLiPnTT5hMHbCqgyjAc.jpg?fit=1920%2C1080&ssl=1" />
		{/if}
	</div>
</div>

<style>
	h6{
		text-transform: uppercase;
		color: #9099a1;
		font-weight: 600;
		font-size: 10px;
	}

	h3{
		font-size: 18px;
		font-weight: 500;
	}

	#section{
		margin-bottom: 30px;
	}

	#spotlight {
		margin: 20px 0px;
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
		scroll-snap-type: x mandatory;
		scroll-snap-align: start;
		margin-left: -10px;
		display: flex;
		scrollbar-width: none;
	}

	#spotlight::-webkit-scrollbar { 
    	display: none;
	}
</style>