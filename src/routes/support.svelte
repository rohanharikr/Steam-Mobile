<script>
  import { onMount } from 'svelte'
  import Navbar from '../components/Navbar.svelte'
  import Tabbar from '../components/Tabbar.svelte'
  import SupportCard from '../components/SupportCard.svelte'

  let version

  onMount(async () => {
    await fetch('https://api.github.com/repos/rohanharikr/Steam-Mobile/commits')
      .then((response) => response.json())
      .then((data) => {
        version = data[0].sha.slice(0, 7)
      })
  })
</script>

<svelte:head>
  <title>Support :: Steam Mobile</title>
</svelte:head>

<Navbar title="Support" />
<div id="support">
  <SupportCard title="Recent Products" />
  <SupportCard single="true" name="Configure app" />
  <SupportCard combined="true" name="Configure app" />
  <h5>
    rohanharikr /
    <i>commit</i>
    {version}
  </h5>
</div>
<Tabbar location={5} />

<style>
  #support {
    padding: 90px 0px;
    padding-right: 0;
    padding-bottom: 80px;
  }

  h5 {
    padding: 0 30px;
    color: #9099a1;
  }
</style>
