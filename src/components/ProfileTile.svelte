<script>
  import MainBadge from './MainBadge.svelte'
  import Showcase from './Showcase.svelte'

  export let name, number, id
</script>

<div {id}>
  <div id="title">
    <h3>{name}</h3>
    <h2>{number}</h2>
  </div>
  {#if name === 'Badges'}
    <MainBadge />
    <Showcase
      images={[{ link: 'https://steamcommunity-a.akamaihd.net/public/images/badges/37_summer2019/level25_80.png' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/54e40b9e2288fbab8bd4c6537b0325d405c7e1b0.png' }, { link: 'https://steamcommunity-a.akamaihd.net/public/images/badges/28_springcleaning2018/bronze_80.png' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/762800/d467ec8eaed4643c47fbed43ed781daef2525963.png' }, { link: 'https://steamcommunity-a.akamaihd.net/public/images/badges/27_steamawardnominations/level04_80.png' }]} />
  {:else if name === 'Friends'}
    <Showcase
      images={[{ link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8f/8fee180ace401f3bd50d5b96f7d19ab8da65553b_full.jpg' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8f/8fee180ace401f3bd50d5b96f7d19ab8da65553b_full.jpg' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8f/8fee180ace401f3bd50d5b96f7d19ab8da65553b_full.jpg' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8f/8fee180ace401f3bd50d5b96f7d19ab8da65553b_full.jpg' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8f/8fee180ace401f3bd50d5b96f7d19ab8da65553b_full.jpg' }]} />
  {:else if name === 'Groups'}
    <Showcase
      images={[{ link: 'https://steamcommunity-a.akamaihd.net/public/images/badges/37_summer2019/level25_80.png' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/54e40b9e2288fbab8bd4c6537b0325d405c7e1b0.png' }, { link: 'https://steamcommunity-a.akamaihd.net/public/images/badges/28_springcleaning2018/bronze_80.png' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/762800/d467ec8eaed4643c47fbed43ed781daef2525963.png' }, { link: 'https://steamcommunity-a.akamaihd.net/public/images/badges/27_steamawardnominations/level04_80.png' }]} />
  {/if}
</div>

<style>
  #title {
    justify-content: space-between;
    display: flex;
    margin-bottom: 10px;
  }

  h2 {
    font-weight: 500;
    color: #027aff;
  }

  #badges,
  #friends,
  #groups {
    background-color: #0f0b20;
    padding: 10px 15px;
    border-radius: 2px;
    font-size: 12px;
    line-height: 18px;
    font-weight: 300;
  }

  #badges {
    grid-column: 1/2;
    grid-row: 2/4;
  }

  #friends {
    grid-column: 2 / auto;
    grid-row: 2/3;
  }

  #groups {
    grid-column: 2 / auto;
    grid-row: 3/4;
  }

  @media only screen and (max-width: 600px) {
    #badges {
      grid-column: 1/3;
    }
  }

  @media only screen and (max-width: 600px) {
    #friends {
      grid-column: 1/3;
      grid-row: 4;
    }
  }

  @media only screen and (max-width: 600px) {
    #groups {
      grid-column: 1/3;
      grid-row: 5;
    }
  }
</style>
