<script setup lang="ts">
</script>

<template>
  <body>
    <nav>
      <h1>Strike</h1>
      <button>How to play?</button>
    </nav>
    <main>
      <article class="clicker">
        <div>
          <img class="achievement-badge" src="/public/achievement-cup.png" alt="">
          <p>Cadet</p>
        </div>
        <p class="coin-counter">1000 Coins</p>
        <button class="click-coin">
          <img src="/public/coin.png" alt="game currency coin">
        </button>
      </article>
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
    </main>
    <footer>
      <section class="won-efficiency">
        <p>Won efficiency display</p>
      </section>
      
      <section class="launch-button">
        <button>Launch</button>
      </section>
    </footer>
  </body>
</template>

<style>
  *{
    font-family: "Geom", sans-serif;
  }
  body{
    background-color: #0D0D0D;
    color: #F2F2F2;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  nav{
    background-color: #1A1A1A;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    box-shadow: 0 0px 8px 0px rgb(0, 0, 0);
    height: 3rem;
  }
  h1{
    font-weight: 500;
  }
  nav button{
    color: #BFBFBF;
    background-color: #1A1A1A;
    border: #BFBFBF solid 2px;
    padding: 0.25rem 0.5rem;
    height: max-content;
    border-radius: 8px;
    font-size: 0.8rem;
  }
  main{
    display: flex;
  }
  .upgrades img{
    width: 1rem;
    height: auto;
  }
  img.upgrade-img{
    width: 2rem;
    height: fit-content;
  }
  .click-coin{
    width: 22rem;
    height: auto;
    background-color: rgba(255, 255, 255, 0);
    border: rgba(255, 255, 255, 0);
  }
  .clicker{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 60%;
    gap: 1.5rem;
    padding: 1.5rem
  }
  .clicker > div{
    display: flex;
    max-width: max-content;
    gap: 0.5rem;
    font-size: 1.5em;
    justify-content: space-between;
    align-items: center;
    border-bottom: #FFC64A solid 1px;
  }
  img.achievement-badge{
    width: auto;
    height: 1.2em;

  }
  article{
    height: calc(100vh - 8rem);
  }
  .coin-counter{
    font-size: 3em;
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
  footer{
    width: 100%;
    background-color: #1A1A1A;
    height: 5rem;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  footer button{
    background-color: #8C4AFF;
    color: #F2F2F2;
    border: none;
    box-shadow: 0 0 17px 0 #8C4AFF , inset 0 -4px 13px 0 #B88FFF  ;
    border-radius: 10rem;
    width: 100%;
    margin: 1.2rem;
    padding: 0.5rem 0;
    font-size: 1.6em;
  }
  .won-efficiency{
    min-width: 60%;
  }
  .won-efficiency p{
    padding: 0 1rem;
  }
  .launch-button{
    width: 100%;
    height: 100%;
    background-color: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 1200px) {
  .weapons{
    width: 80%;
  }
  .clicker{
    min-width: 50%;
  }
  .won-efficiency{
    min-width: 50%;
  }
  }
  @media screen and (max-width: 750px) {
    main{
      flex-direction: column;
    }
    article{
      height: unset;
    }
    body{
      height: unset;
    }
    footer{
      flex-direction: column;
      height: unset;
    }
    .won-efficiency{
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .click-coin{
      width: 18rem;
    }
    .launch-button{
      border-top: #333333 solid 8px;
    }
    .clicker{
      padding: 2.5rem 0;
    }

  }
</style>