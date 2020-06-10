<script>
  export let images, height, borderRadius
</script>

<div id="badgeshowcase">
  <img
    src={images[0].link}
    style="height: {images[0].height}; border-radius: {images[0].borderRadius}" />
  <img
    src={images[1].link}
    style="height: {images[1].height}; border-radius: {images[0].borderRadius}" />
  <img
    src={images[2].link}
    style="height: {images[2].height}; border-radius: {images[0].borderRadius}" />
  <img
    src={images[3].link}
    style="height: {images[3].height}; border-radius: {images[0].borderRadius}" />
  <img
    src={images[4].link}
    style="height: {images[4].height}; border-radius: {images[0].borderRadius}" />
</div>

<style>
  #badgeshowcase img {
    height: 36px;
  }

  #badgeshowcase {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2px;
  }
</style>
