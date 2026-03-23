<script lang="ts" setup>

</script>
<template>
    <nav>
      <h1>Strike</h1>
      <button>How to play?</button>
    </nav>
</template>
<style scoped>
    nav{
    background-color: var(--neutral-800);
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
    color: var(--neutral-200);
    background-color: var(--neutral-800);
    border: var(--neutral-200) solid 2px;
    padding: 0.25rem 0.5rem;
    height: max-content;
    border-radius: 8px;
    font-size: 0.8rem;
  }  
</style>