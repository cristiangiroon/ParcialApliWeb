import { ref } from 'vue';

export function useCounter(initialValue: number) {
  const contador = ref(initialValue);

  const increment = () => contador.value++;
  const decrement = () => contador.value--;

  return {
    contador,
    increment,
    decrement,
  };
}
