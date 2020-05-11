<script>
  export let location
</script>

<div id="tabbar">
  <a href="store">
    <div class="tabItem {location === 1 ? 'selected' : ''}">
      <img src={location == 1 ? 'store-active.svg' : 'store.svg'} />
      Store
    </div>
  </a>
  <a href="profile">
    <div class="tabItem {location === 2 ? 'selected' : ''}">
      <img src={location == 2 ? 'profile-active.svg' : 'profile.svg'} />
      Profile
    </div>
  </a>
  <a href="./">
    <div class="tabItem {location === 3 ? 'selected' : ''}">
      <img src={location == 3 ? 'guard-active.svg' : 'guard.svg'} />
      Guard
    </div>
  </a>
  <a href="chat">
    <div class="tabItem {location === 4 ? 'selected' : ''}">
      <img src={location == 4 ? 'chat-active.svg' : 'chat.svg'} />
      Chat
    </div>
  </a>
  <a href="support">
    <div class="tabItem {location === 5 ? 'selected' : ''}">
      <img src={location == 5 ? 'support-active.svg' : 'support.svg'} />
      Support
    </div>
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

  .tabItem {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    align-items: center;
  }

  .tabItem img {
    margin-bottom: 6px;
    height: 20px;
  }

  .selected {
    color: white;
    font-weight: 600;
  }

  svg {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }
</style>
