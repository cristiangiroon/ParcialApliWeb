<template>
  <MyCounter :value="5" />
  <MyCounterV2 :value="10" />
  <MyCounterV3 :value="1" />
</template>

<script lang="ts" setup>
// import MyCounter from './Components/MyCounter.vue';
// import MyCounterV2 from './Components/MyCounterV2.vue';
//import MyCounterV3 from './Components/MyCounterV2.vue';
import MyCounterV3 from './Components/MyCounterV3.vue';
</script>
