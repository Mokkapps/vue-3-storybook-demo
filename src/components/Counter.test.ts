import { mount } from '@vue/test-utils'

import Counter from './Counter.vue'

//👇 Imports a specific story for the test
import { Colored, Default } from './Counter.stories'

it('renders default button', () => {
  const wrapper = mount(Counter, {
    propsData: Default.args,
  })
  expect(wrapper.find('.container').classes()).toContain('default')
})

it('renders colored button', () => {
  const wrapper = mount(Counter, {
    propsData: Colored.args,
  })
  expect(wrapper.find('.container').classes()).toContain('colored')
})

it('renders snapshot', () => {
  const wrapper = mount(Counter, {
    propsData: Colored.args,
  })
  expect(wrapper.element).toMatchSnapshot()
})
