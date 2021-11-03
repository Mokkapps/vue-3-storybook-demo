<template>
  <div>
    <h2>Counter Options API</h2>
    <p>Count: {{ count }}</p>
    <p>2^Count: {{ countPow }}</p>
    <button @click="increment()">Increase Count</button>
    <button @click="incrementBy(5)">Increase Count by 5</button>
    <button @click="decrement()">Decrease Count</button>
  </div>
</template>

<script>
export default {
  props: {
    initialValue: {
      type: Number,
      default: 0,
    },
  },
  emits: ['counter-update'],
  data: function () {
    return {
      count: this.initialValue,
    };
  },
  watch: {
    count: function (newCount) {
      this.$emit('counter-update', newCount);
    },
  },
  computed: {
    countPow: function () {
      return this.count * this.count;
    },
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    incrementBy(count) {
      this.count += count;
    },
  },
  mounted: function () {
    console.log('Options API counter mounted');
  },
};
</script>
