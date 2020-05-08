<script>
	import ChatsTile from './ChatsTile.svelte';

	let offline = false, onlineusers = 3, offlineusers = 2;


</script>

<!-- status codes
	1 = ingame, 2 online, 3 offline
status codes -->

<div id="card">
	<div id="tabscontainer">
		<div id="tabs">
			<h3 class={!offline ? "selectedtab" : ''} on:click={() => {offline = false}}>Online ({onlineusers})</h3>
			<h3 class={offline ? "selectedtab" : ''} on:click={() => {offline = true}}>Offline ({offlineusers})</h3>
		</div>
	</div>
	{#if !offline}
		<ul>
			<ChatsTile userName="bingotheslayer" gameName="Dank Souls 3" userImage="friendone.png" status={1} {offline} />
			<ChatsTile userName="fatherdeath" userImage="friendtwo.png" status={2} {offline} />
			<ChatsTile userName="pyschotherapist" userImage="friendthree.png" status={2} {offline} />
		</ul>
	{/if}
	{#if offline}
		<ul>
			<ChatsTile userName="fatfather64" gameName="Grand Theft Auto: San Andreas" userImage="friendfour.png" status={3} {offline} timestamp="6" />
			<ChatsTile userName="dingdongding" gameName="Grand Theft Auto: San Andreas" userImage="profilepicture.jpg" status={3} {offline} timestamp="12"  />
		</ul>
	{/if}
</div>

<style>
	#tabs{
		display: flex;
		padding: 0px 30px;
		width: 150px;
		justify-content: space-between;
		align-items: center;
	}

	h3{
		color: #9099a1;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 12px;
	}

	ul{
		list-style: none;
		padding: 0px 30px;
		background-color: #0f0b20;
		position: relative;
		margin: 0;
	}

	#card{
		margin-top: 30px;
	}

	.selectedtab{
		color: #a7d6f0;
	}

	#tabscontainer{
		position: sticky;
		padding-top: 30px;
		padding-bottom: 10px;
		top: 200px;
		z-index: 998;
		background-color: black;
	}
</style>