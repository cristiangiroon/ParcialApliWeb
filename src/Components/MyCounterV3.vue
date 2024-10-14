<template>
  <div class="flex flex-col items-center">
    <h3 class="text-2xl font-bold mb-4">Contador: {{ contador }}</h3>
    <h3 class="text-xl text-gray-500 mb-4">Contador al cuadrado: {{ contador * contador }}</h3>

    <div class="flex space-x-4">
      <button @click="increment" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        +1
      </button>
      <button @click="decrement" class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
        -1
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from '../Composables/Counter';

const props = defineProps<{ value: number }>();
const { contador, increment, decrement } = useCounter(props.value);
</script>
