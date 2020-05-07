<script>
	export let title;
</script>

<div id="navbar">
	<div><img src="search.svg" /></div>
	<div>{title}</div>
	<div><img src="filter.svg" height="12px;" /></div>
</div>

<style>
	#navbar {
		background-color: #0a1226;
		height: 60px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0px 30px;
		color: #9099a1;
		font-weight: 500;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 998;
	}
</style>