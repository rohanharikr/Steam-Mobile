<script>
  import Navbar from '../components/Navbar.svelte'
  import Tabbar from '../components/Tabbar.svelte'
  import ProfileHeader from '../components/ProfileHeader.svelte'
  import About from '../components/About.svelte'
  import { username } from './stores.js'

  let username_value

  const unsubscribe = username.subscribe((value) => {
    username_value = value
  })
</script>

<svelte:head>
  <title>Profile :: Steam Mobile</title>
</svelte:head>

<Navbar title="Profile" />
<div id="profile">
  <ProfileHeader
    name={username_value}
    alias="bingotheslayer"
    profilePicture="profilepicture.jpg"
    level="40" />
  <div id="navtray">
    <div class="selected">About</div>
    <div>Activity</div>
    <div>Inventory</div>
  </div>
  <div id="container">
    <About />
  </div>
</div>
<Tabbar location={2} />

<style>
  #container {
    padding: 20px 20px;
  }

  #profile {
    padding: 60px 0px;
  }

  #navtray {
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
  }

  #navtray div {
    background-color: #0f0b20;
    width: 22%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
  }

  .selected {
    border: 1px solid #027aff;
  }
</style>
