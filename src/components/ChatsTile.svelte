<script>
  export let userName, gameName, userImage, status, timestamp, offline
</script>

<!-- status codes
	1 = ingame, 2 online, 3 offline
status codes -->

<li
  class="{status === 1 ? 'status ingame' : ''}{status === 2 ? 'status online' : ''}{status === 3 ? 'status offline statusoffline' : ''}">
  <div id="userimage" style="background-image:url({userImage});" />
  <div id="info">
    <div id="username" class={!gameName ? 'onlineusername' : ''}>
      {userName}
    </div>
    {#if !offline}
      <div id="usergame" class={!gameName ? 'onlinegamename' : ''}>
        {!gameName ? 'Online' : gameName}
      </div>
    {:else if offline}
      <div id="lastonline">Last online {timestamp} days ago</div>
    {/if}
  </div>
</li>

<style>
  li {
    display: flex;
    align-items: center;
    padding: 14px 0px;
  }

  #username {
    color: #5c7e10;
  }

  #usergame,
  #lastonline {
    font-size: 12px;
  }

  #usergame {
    color: #5c7e10;
  }

  #lastonline {
    color: #9099a1;
  }

  .onlineusername {
    color: #6fbfec !important;
    opacity: 0.8;
  }

  .onlinegamename {
    color: #a7d6f0 !important;
    opacity: 0.8;
  }

  .offline {
    color: #eaeaea !important;
  }

  #userimage {
    width: 40px;
    height: 40px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 2px;
  }

  .status::after {
    content: '';
    position: absolute;
    width: 3px;
    height: 40px;
    margin-left: 44px;
  }

  .ingame::after {
    background-color: #5c7e10;
  }

  .online::after {
    background-color: #57cbde;
  }

  .offline::after {
    background-color: #9099a1;
  }

  #info {
    margin-left: 15px;
  }

  .statusoffline {
    opacity: 0.6 !important;
  }
</style>
