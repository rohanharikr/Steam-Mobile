<script>
  import LikeButton from './LikeButton.svelte'
</script>

<main>
  <div id="title">
    <h3>Artwork</h3>
    <h2>6</h2>
  </div>
  <div id="artwork">
    <div class="artwork_container">
      <div
        class="artwork--item"
        style="background-image:
        url(https://cdnb.artstation.com/p/assets/images/images/013/913/993/large/rao-zhengang-0e1215a3-1791-4c60-aad9-633627659cf9.jpg?1541630208);" />
      <div class="artwork--info">
        <div class="title">"Ashen one"</div>
        <div class="actions">
          <LikeButton />
        </div>
      </div>
    </div>
    <div class="artwork_container">
      <div
        class="artwork--item"
        style="background-image:
        url(https://farm5.staticflickr.com/4610/39871466181_d6b592a9e1_b.jpg);" />
      <div class="artwork--info">
        <div class="title">"Too many shadows"</div>
        <div class="actions">
          <LikeButton />
        </div>
      </div>
    </div>
    <div class="artwork_container">
      <div
        class="artwork--item"
        style="background-image:
        url(https://cdnb.artstation.com/p/assets/images/images/005/617/333/large/omer-tunc-bloodborn-jpgg.jpg?1492494545);" />
      <div class="artwork--info">
        <div class="title">"You DIED"</div>
        <div class="actions">
          <LikeButton />
        </div>
      </div>
    </div>
    <div class="artwork_container">
      <div
        class="artwork--item"
        style="background-image:
        url(https://images.hdqwalls.com/download/sekiro-shadows-die-twice-digital-fan-art-6l-2560x1700.jpg);" />
      <div class="artwork--info">
        <div class="title">"Shadows die many times"</div>
        <div class="actions">
          <LikeButton />
        </div>
      </div>
    </div>
    <div class="artwork_container">
      <div
        class="artwork--item"
        style="background-image:
        url(https://pbs.twimg.com/media/D5QAdraWkAIQsCO.jpg);" />
      <div class="artwork--info">
        <div class="title">"Estus Flask"</div>
        <div class="actions">
          <LikeButton />
        </div>
      </div>
    </div>
    <div class="artwork_container">
      <div
        class="artwork--item"
        style="background-image:
        url(https://cdn.staticneo.com/ca/journey_conceptart_EaFXQ.jpg);" />
      <div class="artwork--info">
        <div class="title">"One short journey"</div>
        <div class="actions">
          <LikeButton />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  main {
    background-color: #0f0b20;
    padding: 10px 15px;
    padding-right: 0px;
    border-radius: 2px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 300;
    grid-column: 1/3;
    margin-top: 15px;
  }

  .artwork_container {
    display: flex;
    flex-direction: column;
  }

  #title {
    justify-content: space-between;
    display: flex;
    padding-right: 15px;
  }

  h2 {
    font-weight: 500;
    color: #027aff;
  }

  h3 {
    color: #9099a1;
  }

  #artwork {
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
    margin-top: 10px;
    display: flex;
    scrollbar-width: none;
  }

  .artwork--item {
    height: 200px;
    width: 250px;
    background-color: #161c2d;
    display: inline-block;
    margin-right: 10px;
    scroll-snap-stop: always;
    scroll-snap-align: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 2px;
  }

  #artwork::-webkit-scrollbar {
    display: none;
  }

  .artwork--info {
    display: flex;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 10px;
    align-items: center;
  }

  .artwork--info .actions {
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
</style>
