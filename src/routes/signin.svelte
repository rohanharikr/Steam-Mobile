<script>
	let username,
		password;	
</script>
<div id="container">
	<header>
		<div id="signintext">Sign In
			<div id="signinsubtext">to your existing Steam account</div>
		</div>
		<img src="steamlogofull.svg" height="15px" />
	</header>
	<div id="form">
		<div id="username">
			<label>Username</label>
			<input type="text" bind:value={username} />
		</div>
		<div id="password">
			<label>Password</label>
			<input type="password" bind:value={password} />
		</div>
	</div>
	<div  id="actions">
		<button onclick="location.href='store';" style="background-color: {username && password ? '' : '#9099a1'}">Sign in</button>
		<div id="forgot">Forgot your password?</div>
	</div>
</div>

<style>
	header{
		display: flex;
		justify-content: space-between;
		align-items: baseline;
	}

	#signintext{
		font-size: 22px;
		line-height: 30px;
	}

	#signinsubtext{
		font-size: 0.5em;
		opacity: 0.6;
	}

	#form{
		margin: 50px 0px;
	}

	#form input {
		width: 90%;
	}

	label {
		color: #2f89bc
	}

	#username {
		margin-bottom: 60px;
	}

	#actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 90%;
	}

	#forgot {
		font-size: 12px;
		color: #9099a1;
	}

</style>