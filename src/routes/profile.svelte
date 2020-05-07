<script>
	import Navbar from '../components/Navbar.svelte';
	import Tabbar from '../components/Tabbar.svelte';
	import StoreSection from '../components/StoreSection.svelte';
</script>

<svelte:head>
	<title>Profile :: Steam Mobile</title>
</svelte:head>

<Navbar title="Profile" />
<Tabbar location="2" />
<div id="profile">
	<div id="top">
		<img id="profilepicture" src="profilepicture.jpg" />
		<div id="maininfo">
			<h2>thoran</h2>
			<h3>Rohan Harikumar</h3>
		</div>
	</div>
	<div id="level"></div>
	<div id="level"></div>
	<div id="level"></div>
</div>

<style>
	#profile{
		padding-bottom: 60px;
	}

	#profilepicture {
		border: 1px solid #4B90AB;
		height: 90px;
		border-radius: 2px;
	}

	#top{
		margin-top: 40px;
		padding: 50px 30px;
		display: flex;
		align-items: center;
		background-image: url(https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/ef7cb44d312df5038cba0f69a0901da427900645.jpg);
		height: 100px;
    	background-repeat: no-repeat;
    	background-size: cover;
    	background-position: center;
    	padding-bottom: 20px;
	}

	h2{
		font-weight: 600;
	}

	h3{
		opacity: 0.8;
	}

	h2, h3 {
		line-height: 1;
	}

	#maininfo {
		margin-left: 20px;
		display: flex;
		flex-direction: column;
	}
</style>
