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
      images={[{ link: 'https://steamcommunity-a.akamaihd.net/public/images/badges/37_summer2019/level25_80.png', height: '32px' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/730/54e40b9e2288fbab8bd4c6537b0325d405c7e1b0.png', height: '32px' }, { link: 'https://steamcommunity-a.akamaihd.net/public/images/badges/28_springcleaning2018/bronze_80.png', height: '40px' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/762800/d467ec8eaed4643c47fbed43ed781daef2525963.png', height: '36px' }, { link: 'https://steamcommunity-a.akamaihd.net/public/images/badges/27_steamawardnominations/level04_80.png', height: '38px' }]} />
  {:else if name === 'Friends'}
    <Showcase
      images={[{ link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/54/5428a931843bec66cdcd8a58b20060cc4c581cad_full.jpg', borderRadius: '2px' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/8f/8fee180ace401f3bd50d5b96f7d19ab8da65553b_full.jpg', borderRadius: '2px' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/b4/b4f03f03f8997cb0de81b6d1c35a5dc3633be69a_full.jpg', borderRadius: '2px' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/23/232bf1a8e7db9e853cc508295b9908bf61cda90b_full.jpg', borderRadius: '2px' }, { link: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/53/53edb1365f53a23314beb6c943ddf38104fc50cf_full.jpg', borderRadius: '2px' }]} />
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

  h3 {
    color: #9099a1;
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
