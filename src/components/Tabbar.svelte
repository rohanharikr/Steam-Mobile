<script>
	export let title;
</script>

<div id="tabbar">
	<div class="tabItem selected"><img src="store.svg" />Store</div>
	<div class="tabItem"><img src="profile.svg" />Profile</div>
	<div class="tabItem"><img src="guard.svg" />Guard</div>
	<div class="tabItem"><img src="chat.svg" />Chat</div>
	<div class="tabItem"><img src="support.svg" />Support</div>
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