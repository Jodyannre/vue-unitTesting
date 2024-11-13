<template>
    <div>
        <h1>{{ props.title }}</h1>
        <p> {{ props.content }}</p>
        <button @click="handleClick"> Click me </button>
    </div>
</template>
  
<script lang="ts" setup>
    import { defineProps, defineEmits } from 'vue';
    const props = defineProps(['title','content'])
    const emit = defineEmits(['clickMe'])

    const handleClick = () => emit('clickMe',1)
</script>
  
<style scoped>
</style>
  