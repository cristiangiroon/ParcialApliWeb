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


// Este composable encapsula la lógica del contador con las funciones increment y decrement, utilizando un ref para mantener el estado reactivo de contador
