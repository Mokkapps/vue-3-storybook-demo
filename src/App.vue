<template>
  <div id="app">
    <h1>Vue Composition API</h1>
    <div v-for="[key, value] of counterEntries">
      <p>{{ key }}: {{ value }}</p>
    </div>
    <CounterOptionsApi @counter-update="updateCounter('Options API', $event)" />
    <CounterCompositionApi
      @counter-update="updateCounter('Composition API V1', $event)"
    />
    <CounterCompositionApiv2
      @counter-update="updateCounter('Composition API V2', $event)"
    />
    <CounterCompositionApiv3
      @counter-update="updateCounter('Composition API V3', $event)"
    />
  </div>
</template>

<script>
import CounterOptionsApi from './components/CounterOptionsApi.vue'
import CounterCompositionApi from './components/CounterCompositionApi.vue'
import CounterCompositionApiv2 from './components/CounterCompositionApiv2.vue'
import CounterCompositionApiv3 from './components/CounterCompositionApiv3.vue'

export default {
  name: 'App',
  components: {
    CounterOptionsApi,
    CounterCompositionApi,
    CounterCompositionApiv2,
    CounterCompositionApiv3,
  },
  data: function () {
    return {
      counterValues: {},
    }
  },
  computed: {
    counterEntries: function () {
      return Object.entries(this.counterValues)
    },
  },
  methods: {
    updateCounter(key, value) {
      this.counterValues[key] = value
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
