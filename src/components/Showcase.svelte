<script>
  export let images
</script>

<div id="badgeshowcase">
  <img src={images[0].link} style="height: 32px;" />
  <img src={images[1].link} style="height: 32px;" />
  <img src={images[2].link} />
  <img src={images[3].link} style="height: 36px;" />
  <img src={images[4].link} style="height: 38px;" />
</div>

<style>
  #badgeshowcase img {
    height: 40px;
  }

  #badgeshowcase {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
