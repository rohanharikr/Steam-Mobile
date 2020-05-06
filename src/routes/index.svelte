<script>
	
</script>
<div id="container">
	<div id="greeting">
		<img src="steamlogo.svg" height="60px;" />
		<div id="greeting--text">
			<h2>Welcome to</h2>
			<h1>Steam Mobile</h1>
		</div>
		<button onclick="location.href='signin';">Continue</button>
	</div>
</div>

<style>
	#greeting {
		height: 400px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}

	#greeting--text {
		margin-top: -30px;
	}

	button {
	    font-size: 16px;
	    width: min-content;
	    font-weight: 500;
	}

	h1 {
		font-size: 36px;
		font-weight: 400;
	}

	h2{
		font-size: 26px;
		font-weight: 300;
	}
</style>