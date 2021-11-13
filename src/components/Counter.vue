<template>
  <p>{{ label }}</p>
  <!-- @slot Slot to show content below label -->
  <slot name="sub-label" />
  <div class="container" :class="variant">
    <button @click="increment()">+</button>
    <p class="value">{{ count }}</p>
    <button @click="decrement()">-</button>
  </div>
  <!-- @slot Default slot to show any content below the counter -->
  <slot />
</template>

<script lang="ts">
import { ref, watch, PropType } from 'vue'
import { Variant } from './types'

/**
 * This is my amazing counter component
 *
 * It can increment and decrement!
 */
export default {
  props: {
    /**
     * The initial value for the counter
     */
    initialValue: {
      type: Number,
      default: 0,
    },
    /**
     * Text shown above the counter
     */
    label: {
      type: String,
      default: 'Counter',
    },
    /**
     * If true, the counter can show negative numbers
     */
    allowNegativeValues: {
      type: Boolean,
      default: false,
    },
    /**
     * Defines the visual appearance of the counter
     */
    variant: {
      type: String as PropType<Variant>,
      default: Variant.Default,
    },
  },
  emits: ['counter-update'],
  setup(props, context) {
    const count = ref(props.initialValue)

    const increment = () => {
      count.value += 1
    }

    const decrement = () => {
      const newValue = count.value - 1
      if (newValue < 0 && !props.allowNegativeValues) {
        count.value = 0
      } else {
        count.value -= 1
      }
    }

    watch(count, (value) => {
      context.emit('counter-update', value)
    })

    return {
      count,
      increment,
      decrement,
    }
  },
}
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px 10px;
}

.container.colored {
  background-color: lightgoldenrodyellow;
}

button {
  min-width: 50px;
  font-size: 24px;
}

.value {
  font-weight: bold;
  font-size: 24px;
}
</style>
