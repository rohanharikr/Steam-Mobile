<script>
  // import { onDestroy } from 'svelte'
  import { username } from '../routes/stores.js'

  let percentage = 0
  let code

  function onInterval(callback, time) {
    const interval = setInterval(callback, time)

    // onDestroy(() => {
    // clearInterval(interval);
    // });
  }

  function codegen() {
    code = Math.random().toString(36).slice(-5).toUpperCase()
  }

  onInterval(function check() {
    if (percentage < 9) {
      ++percentage
    } else {
      percentage = 0
      codegen()
    }
  }, 1000)

  let username_value

  const unsubscribe = username.subscribe((value) => {
    username_value = value
  })
</script>

<div id="wrapper">
  <div
    class="timerbar"
    style="width: {100 - percentage * 10}%; background-image: {percentage >= 7 ? 'linear-gradient(145deg, rgba(173,40,33,1) 0%, rgba(173,40,33,1) 100%)' : 'linear-gradient(145deg, rgba(0,0,255,1) 0%, rgba(163,68,201,1) 100%)'};
    z-index: 9999" />
  <div class="timerbar trail" />
  <div id="code" style="color: {percentage >= 7 ? '#AD2821' : 'white'}">
    {code || codegen()}
  </div>
  <div id="username">{username_value}</div>
</div>

<style>
  #wrapper {
    width: 100%;
    height: 145px;
    padding-top: 90px;
  }

  #code {
    font-size: 52px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 4px;
    transition: 0.5s;
  }

  #username {
    color: #a7d6f0;
    font-size: 14px;
    opacity: 0.8;
  }

  .timerbar {
    right: 0;
    left: 0;
    margin-right: auto;
    margin-left: auto;
    min-height: 8px;
    top: 90px;
    transform: scale(0.8);
    transition: 0.5s;
  }

  .trail {
    background-color: #1c1c1c;
    position: absolute;
    z-index: -999;
    opacity: 0.6;
  }
</style>
