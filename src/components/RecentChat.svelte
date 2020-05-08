<script>
	export let image, status, name;
</script>

<!-- status codes
	1 = ingame, 2 online, 3 offline
status codes -->

<div id="imageholder" class={status === 1 ? "status ingame" : ''}{status === 2 ? "status online" : ''}{status === 3 ? "status offline" : ''} style="background-image: url({image});"><div id="name" class={status === 1 ? "name--ingame" : ''}{status === 2 ? "name--online" : ''}{status === 3 ? "status offline" : ''}>{name}</div></div>

<style>
	#imageholder{
		height: 50px;
		width: 50px;
		background-position: center;
  		background-repeat: no-repeat;
  		background-size: cover;
  		border-radius: 2px;
  		margin-right: 20px;
  		position: relative;
	}

	#name {
		position: absolute;
		bottom: -22px;
		font-size: 12px;
		width: 50px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.name--ingame{
		color: #5c7e10;
	}

	.name--online{
		color: #57cbde;
	}

	.name--offline{
		color: #A0A0A0;
	}

	.status::after{
		content: '';
		position: absolute;
		width: 50px;
		height: 2px;
		bottom: -28px;
	}

	.ingame::after{
		background-color: #5c7e10;
	}

	.online::after{
		background-color: #57cbde;
	}

	.offline{
		opacity: 0.6;
	}

	.offline::after{
		background-color: #A0A0A0;
	}
</style>