import Counter from './Counter.vue'
import { Variant } from './types'

interface Story {
  (): any
  args?: any // Optional since args is defined after function declaration
}

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Counter',
  component: Counter,
  //👇 Creates specific argTypes with options
  argTypes: {
    variant: {
      options: Variant,
    },
  },
}

//👇 We create a “template” of how args map to rendering
const Template = (args: unknown) => ({
  components: { Counter },
  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: '<Counter v-bind="args">{{ args.slotContent }}</Counter>',
})

//👇 Each story then reuses that template
export const Default = Template.bind({}) as Story
Default.args = {
  label: 'Default',
}

export const Colored = Template.bind({}) as Story
Colored.args = {
  label: 'Colored',
  variant: Variant.Colored,
}

export const NegativeValues = Template.bind({}) as Story
NegativeValues.args = {
  allowNegativeValues: true,
  initialValue: -1,
}

export const Slot = Template.bind({}) as Story
Slot.args = {
  slotContent: 'SLOT CONTENT',
}
