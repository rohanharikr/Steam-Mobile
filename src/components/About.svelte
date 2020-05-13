<script>
  import AboutMeTile from './AboutMeTile.svelte'
  import ProfileTile from './ProfileTile.svelte'
  // import Artwork from './Badges.svelte'
  // import Comments from './Badges.svelte'
</script>

<main>
  <AboutMeTile />
  <ProfileTile id="badges" name="Badges" number="14" />
  <ProfileTile id="friends" name="Friends" number="28" />
  <ProfileTile id="groups" name="Groups" number="8" />
  <!-- <Artwork /> -->
  <!-- <Comments /> -->
</main>

<style>
  main {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(auto-fit, minmax(192px, 50%));
    grid-gap: 15px;
  }
</style>
