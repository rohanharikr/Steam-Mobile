<script>
	import SupportCardItem from './SupportCardItem.svelte'

	export let title, single, name, icon, combined;
</script>

<div id="card">
	{#if !single && !combined}
		<h3>{title}</h3>
	{/if}
	<ul>
		{#if !single && !combined}
			<li><SupportCardItem name="Dota 2" logo="dota2.svg" /></li>
			<li><SupportCardItem name="Stardew Valley" logo="stardewvalley.svg"/></li>
			<li><SupportCardItem name="Half-Life: Alyx" logo="halflifealyx.svg" /></li>
		{/if}
		{#if single}
			<li><SupportCardItem {name} logo="configure.svg" /></li>
		{/if}
		{#if combined}
			<li><SupportCardItem name="Games, Software, etc." logo="games.svg" /></li>
			<li><SupportCardItem name="Puchases" logo="purchases.svg"/></li>
			<li><SupportCardItem name="My Account" logo="myaccount.svg" /></li>
			<li><SupportCardItem name="Trading, Gifting, Items, Community Market" logo="trading.svg" /></li>
			<li><SupportCardItem name="Steam Community" logo="community.svg" /></li>
		{/if}
	</ul>
</div>

<style>
	h3{
		color: #a7d6f0;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 12px;
		padding: 0px 30px;
	}

	ul{
		list-style: none;
		padding: 0px 30px;
		background-color: #0f0b20;
	}

	ul li{
		display: flex;
		align-items: center;
		padding: 16px 0px;
	}
</style>