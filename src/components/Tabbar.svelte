<script>
	export let location;
</script>

<div id="tabbar">
	<a href="store">
		<div class="tabItem {location == 1 ? 'selected' : ''}"><img src={location == 1 ? 'storewhite.svg' : 'store.svg'} />Store</div>
	</a>
	<a href="profile">
		<div class="tabItem {location == 2 ? 'selected' : ''}"><img src={location == 2 ? 'profilewhite.svg' : 'profile.svg'} />Profile</div>
	</a>
	<a href="guard">
		<div class="tabItem {location == 3 ? 'selected' : ''}"><img src={location == 3 ? 'guardwhite.svg' : 'guard.svg'} />Guard</div>
	</a>
	<a href="chat">
		<div class="tabItem {location == 4 ? 'selected' : ''}"><img src={location == 4 ? 'chatwhite.svg' : 'chat.svg'} />Chat</div>
	</a>
	<a href="support">
		<div class="tabItem {location == 5 ? 'selected' : ''}"><img src={location == 5 ? 'supportwhite.svg' : 'support.svg'} />Support</div>
	</a>
</div>

<style>
	#tabbar {
		background-color: #171a21;
		height: 65px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 30px;
		color: #9099a1;
		font-weight: 500;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 999;
	}

	.tabItem{
		display: flex;
		flex-direction: column;
		font-size: 10px;
		align-items: center;
	}

	.tabItem img {
		margin-bottom: 6px;
	}

	.selected{
		color: white;
	}
</style>