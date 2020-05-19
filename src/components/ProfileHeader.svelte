<script>
  export let alias, name, profilePicture, level
</script>

<main>
  <div id="head">
    <div id="layer1" />
    <div id="contentwrapper">
      <div id="content">
        <div
          id="profilepicture"
          style="background-image: url({profilePicture});" />
        <div id="userinfo">
          <h3>{alias}</h3>
          <h5>{name}</h5>
        </div>
        <!-- need to right logic for handling badge color -->
        <div id="level">{level}</div>
        <!-- need to right logic for handling badge color -->
      </div>
    </div>
    <div id="layer2" style="background-image: url(gta.jpg);" />
    <div id="layer3" />
  </div>
</main>

<style>
  #head {
    position: relative;
  }

  #userinfo {
    margin-left: 18px;
  }

  #level {
    margin-left: auto;
    font-size: 16px;
    font-weight: 300;
    border: 2px solid #467a3c;
    border-radius: 50%;
    margin-bottom: 12px;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    line-height: 1;
  }

  h5 {
    font-size: 14px;
    font-weight: 300;
    line-height: 1;
    color: #696969;
  }

  #profilepicture {
    background-size: cover;
    background-repeat: no-repeat;
    height: 75px;
    width: 75px;
    border-radius: 2px;
  }

  #layer1 {
    position: absolute;
    height: 50px;
    background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
    bottom: 0;
    width: 100%;
    z-index: 975;
  }

  #contentwrapper {
    position: absolute;
    z-index: 99;
    width: 100%;
  }

  #content {
    padding: 30px;
    display: flex;
    align-items: center;
  }

  #layer2 {
    background-size: cover;
    width: 100%;
    height: 140px;
    background-repeat: no-repeat;
    z-index: 3;
    position: relative;
    opacity: 0.1;
  }

  @media only screen and (min-width: 600px) {
    #layer2 {
      background-position: 0px -100px;
    }
  }

  #layer3 {
    background: #0f0b20;
    height: 140px;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
  }
</style>
