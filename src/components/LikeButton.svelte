<script>
  export let update = false
  let count = 27

  function likeUnlike() {
    update = !update
    if (update) {
      count++
    } else {
      count--
    }
  }
</script>

<div class="count">{count}</div>
<img src={update ? 'like.svg' : 'likeidle.svg'} on:click={likeUnlike} />


<style>
  .artwork--info .actions img {
    height: 16px;
  }

  .count {
    margin-right: 12px;
    margin-top: 6px;
  }
</style>
