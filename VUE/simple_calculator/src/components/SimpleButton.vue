<template>
  <button @click="calculate">
    {{description}}
  </button>
</template>

<script>
export default {
  emits: ['calculate'],
  name:'SimpleButton',
  props: {
    description: String
  },
  data() {
    return [];
  },
  methods: {
    calculate() {
      this.$emit('calculate', this.description);
    }
  }
}
</script>