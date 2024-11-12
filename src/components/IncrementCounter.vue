<template>
    <h3>{{ counter }}</h3>
    <button v-on:click="increment">Increment</button>
</template>
  
<script lang="ts" setup>
    import { ref, Ref } from 'vue';

    const counter: Ref<number> = ref(0);

    const increment = ()=>  counter.value++
    
</script>
  
<style scoped>
</style>
  