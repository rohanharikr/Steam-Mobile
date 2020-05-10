<script>
  export let originalPrice,
    reducedPrice,
    small = false
  let discount = (
    ((originalPrice - reducedPrice) * 100) /
    originalPrice
  ).toFixed(0)
</script>

<div id="pricebox">
  <div id="discount" class={small ? 'discount discount--square' : ''}>
    -{discount}%
  </div>
  <div id="prices" class={small ? 'prices prices--square' : ''}>
    <div id="originalprice" class={small ? 'originalprice--square' : ''}>
      ${originalPrice}
    </div>
    <div id="reducedprice" class={small ? 'reducedprice--square' : ''}>
      ${reducedPrice}
    </div>
  </div>
</div>

<style>
  #pricebox {
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 15px;
    display: flex;
    justify-content: space-between;
  }

  #discount,
  #prices {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 10px;
  }

  #discount {
    background-color: #4c6b22;
    color: #a4d007;
    font-size: 16px;
    font-weight: 500;
  }

  #prices {
    background-color: #0d303f;
    color: #a7d6f0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  #originalprice {
    font-size: 8px;
    text-decoration: line-through;
  }

  #reducedprice {
    font-size: 12px;
    font-weight: 500;
  }

  /*square card modifier*/
  .discount,
  .prices {
    padding: 1px 8px !important;
  }

  .discount--square {
    font-size: 14px !important;
  }

  .originalprice--square {
    font-size: 6px !important;
  }

  .reducedprice--square {
    font-size: 10px !important;
  }
</style>
