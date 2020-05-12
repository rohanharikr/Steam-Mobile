<script>
  import Navbar from '../components/Navbar.svelte'
  import Tabbar from '../components/Tabbar.svelte'
  import ProfileHeader from '../components/ProfileHeader.svelte'
  import NavTray from '../components/NavTray.svelte'
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
    profilepicture="profilepicture.jpg"
    level="40" />
  <NavTray />
  <About />
</div>
<Tabbar location={2} />

<style>
  #profile {
    padding: 60px 0px;
  }
</style>
