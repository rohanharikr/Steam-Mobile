<script>
  import AboutMeTile from './AboutMeTile.svelte'
  import ProfileTile from './ProfileTile.svelte'
  import Artwork from './Artwork.svelte'
  // import Comments from './Badges.svelte'
</script>

<main>
  <AboutMeTile />
  <ProfileTile id="friends" name="Friends" number="28" />
  <ProfileTile id="badges" name="Badges" number="14" />
  <ProfileTile id="groups" name="Groups" number="8" />
  <!-- <Comments /> -->
</main>
<Artwork />

<style>
  main {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(auto-fit, minmax(192px, 50%));
    grid-gap: 15px;
  }
</style>
