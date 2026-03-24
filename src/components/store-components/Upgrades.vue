<script lang="ts" setup>

</script>
<template>
    <section class="upgrades">
          <p>upgrades</p>
          <ul>
            <li>
              <div class="main-content">
                <img class="upgrade-img" src="/cursor.png" alt="">
                <div class="name-cost">
                  <p>Cursor</p>
                  <div class="cost">
                    <img src="/coin.png" alt="game currency coin">
                    <p>500</p>
                  </div>
                </div>
              </div>
              <p>0</p>
            </li>
            <li>
              <div class="main-content">
                <img src="/upgrade-placeholder.png" alt="">
                <div class="name-cost">
                  <p>???</p>
                  <div class="cost">
                    <img src="/coin.png" alt="game currency coin">
                    <p>500</p>
                  </div>
                </div>
              </div>
              <p></p>
            </li>
            <li>
              <div class="main-content">
                <img src="/upgrade-placeholder.png" alt="">
                <div class="name-cost">
                  <p>???</p>
                  <div class="cost">
                    <img src="/coin.png" alt="game currency coin">
                    <p>1 500</p>
                  </div>
                </div>
              </div>
              <p></p>
            </li>
            <li>
              <div class="main-content">
                <img src="/upgrade-placeholder.png" alt="">
                <div class="name-cost">
                  <p>???</p>
                  <div class="cost">
                    <img src="/coin.png" alt="game currency coin">
                    <p>5 000</p>
                  </div>
                </div>
              </div>
              <p></p>
            </li>
            <li>
              <div class="main-content">
                <img src="/upgrade-placeholder.png" alt="">
                <div class="name-cost">
                  <p>???</p>
                  <div class="cost">
                    <img src="/coin.png" alt="game currency coin">
                    <p>10 000</p>
                  </div>
                </div>
              </div>
              <p></p>
            </li>
            <li>
              <div class="main-content">
                <img src="/upgrade-placeholder.png" alt="">
                <div class="name-cost">
                  <p>???</p>
                  <div class="cost">
                    <img src="/coin.png" alt="game currency coin">
                    <p>50 000</p>
                  </div>
                </div>
              </div>
              <p></p>
            </li>
          </ul>
        </section>
</template>
<style scoped>
      .upgrades img{
    width: 1rem;
    height: auto;
  }
  img.upgrade-img{
    width: 2rem;
    height: fit-content;
  }
  li {
    list-style-type: none;
  }
  .shop section{
    background-color: var(--neutral-600);
  }
  .upgrades{
    width: 100%;
    border-bottom: var(--neutral-400) solid 8px;
  }
  .upgrades ul{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 1rem;
    gap: 1.4rem;
  }
  .upgrades li{
    display: flex;
    width: 90%;
    background-color: var(--neutral-900);
    border-radius: 10rem;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1.5rem;
    box-shadow: inset 0 0 12px 0 #FFDC8F, 0 0 5.5px 0 var(--secondary-500);

  }
  .upgrades div{
    display: flex;
  }
  .name-cost{
    flex-direction: column;
  }
  .cost{
    gap: 0.5rem;
  }
  .cost img{
    width: 1.5em;
    height: auto;
  }
  li > p{
    color: rgba(255, 255, 255, 0.242);
    font-size: 2em;
  }
  .upgrades .main-content > img{
    width: 1.5rem;
    height: 2.5rem;
    border: rgba(0, 0, 0, 0);
  }
  .upgrades .main-content{
    gap: 1rem;
    align-items: center;
  }
  article> section > p{
    background-color: var(--secondary-500);
    width: fit-content;
    padding: 0 8px;
    color: var(--neutral-900);
    font-size: 0.8em;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.687);
  }
  @media screen and (max-width: 750px) {
    article{
      height: unset;
    }
  }
</style>