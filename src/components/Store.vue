<script lang="ts" setup>

</script>
<template>
    <article class="shop">
        <section class="upgrades">
          <p>upgrades</p>
          <ul>
            <li>
              <div class="main-content">
                <img class="upgrade-img" src="/public/cursor.png" alt="">
                <div class="name-cost">
                  <p>Cursor</p>
                  <div class="cost">
                    <img src="/public/coin.png" alt="game currency coin">
                    <p>500</p>
                  </div>
                </div>
              </div>
              <p>0</p>
            </li>
            <li>
              <div class="main-content">
                <img src="/public/upgrade-placeholder.png" alt="">
                <div class="name-cost">
                  <p>???</p>
                  <div class="cost">
                    <img src="/public/coin.png" alt="game currency coin">
                    <p>500</p>
                  </div>
                </div>
              </div>
              <p></p>
            </li>
            <li>
              <div class="main-content">
                <img src="/public/upgrade-placeholder.png" alt="">
                <div class="name-cost">
                  <p>???</p>
                  <div class="cost">
                    <img src="/public/coin.png" alt="game currency coin">
                    <p>1 500</p>
                  </div>
                </div>
              </div>
              <p></p>
            </li>
            <li>
              <div class="main-content">
                <img src="/public/upgrade-placeholder.png" alt="">
                <div class="name-cost">
                  <p>???</p>
                  <div class="cost">
                    <img src="/public/coin.png" alt="game currency coin">
                    <p>5 000</p>
                  </div>
                </div>
              </div>
              <p></p>
            </li>
            <li>
              <div class="main-content">
                <img src="/public/upgrade-placeholder.png" alt="">
                <div class="name-cost">
                  <p>???</p>
                  <div class="cost">
                    <img src="/public/coin.png" alt="game currency coin">
                    <p>10 000</p>
                  </div>
                </div>
              </div>
              <p></p>
            </li>
            <li>
              <div class="main-content">
                <img src="/public/upgrade-placeholder.png" alt="">
                <div class="name-cost">
                  <p>???</p>
                  <div class="cost">
                    <img src="/public/coin.png" alt="game currency coin">
                    <p>50 000</p>
                  </div>
                </div>
              </div>
              <p></p>
            </li>
          </ul>
        </section>
        <section class="weapons">
          <p>weapons</p>
          <ul>
            <li>
              <img src="/public/weapon-1.png" alt="">
            </li>
            <li>
              <img src="/public/weapon-2.png" alt="">
            </li>
            <li>
              <img src="/public/weapon-3.png" alt="">
            </li>
            <li>
              <img src="/public/weapon-4.png" alt="">
            </li>
            <li>
              <img src="/public/weapon-5.png" alt="">
            </li>
          </ul>
        </section>
      </article>
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
  .shop{
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: space-between;
    background-color: #333333;
    z-index: 2;
    box-shadow: -3px 0px 6px 0px rgb(0, 0, 0);
  }
  li {
    list-style-type: none;
  }
  .shop section{
    background-color: #262626;
  }
  .upgrades{
    width: 100%;
    border-bottom: #333333 solid 8px;
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
    background-color: #0D0D0D;
    border-radius: 10rem;
    justify-content: space-between;
    align-items: center;
    padding: 0.6rem 1.5rem;
    box-shadow: inset 0 0 12px 0 #FFDC8F, 0 0 5.5px 0 #FFC64A;

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
    background-color: #FFC64A;
    width: fit-content;
    padding: 0 8px;
    color: #0D0D0D;
    font-size: 0.8em;
    border-radius: 4px;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.687);
  }
  .weapons > p{
    background-color: #8C4AFF;
  }
  .weapons{
    width: 50%;
    border-bottom: #333333 solid 8px;
  }
  .weapons ul{
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 1.5rem;
    height: 100%;
    align-items: center;
    padding: 1rem 0;
    padding-bottom: 2.6rem;
  }
  .weapons li{
    display: flex;
    width: 80%;
    background-color: #0D0D0D;
    border-radius: 1rem;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 1.5rem;
    box-shadow: inset 0 0 12px 0 #B88FFF, 0 0 5.5px 0 #8C4AFF;
  }
  .weapons img{
    width: 5rem;
    height: auto;
  }
  @media screen and (max-width: 1200px) {
  .won-efficiency{
    min-width: 50%;
  }
  }
  @media screen and (max-width: 750px) {
    article{
      height: unset;
    }
  }
</style>