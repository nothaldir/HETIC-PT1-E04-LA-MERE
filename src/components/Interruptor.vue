<template>
  <div class="interruptor" v-bind:style="{ backgroundColor: color}" v-bind:class="{ rounded: rounded }">
    Test
  </div>
</template>
<script>
export default {
  name: 'interruptor',
  props: ['color', 'rounded'],
  data() {
    return {
      msgs: [
        'Mon bouton',
      ],
    };
  },
};
</script>
<style scoped>
  .rounded {
    border-radius: 100%;
  }
</style>
