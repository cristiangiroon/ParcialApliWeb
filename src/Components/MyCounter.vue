<template>
  <h1>Hola</h1>
  <h3>contador:{{ contador }}</h3>
  <h3>contador:{{ contador * contador }}</h3>

  <div>
    <button v-on:click="contador++">+1</button>
    <button v-on:click="contador--">-1</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
console.log('first');

const props = defineProps<{
  value: number;
}>();

const contador = ref(props.value);
</script>

<style scoped>
h1 {
  color: rgb(22, 203, 134);
}
</style>
