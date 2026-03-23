<script lang="ts" setup>

</script>
<template>
    <footer>
      <section class="won-efficiency">
        <p>Won efficiency display</p>
      </section>
      
      <section class="launch-button">
        <button>Launch</button>
      </section>
    </footer>
</template>
<style scoped>
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
  .won-efficiency{
    min-width: 50%;
  }
  }
  @media screen and (max-width: 750px) {
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
    .launch-button{
      border-top: #333333 solid 8px;
    }

  }
</style>