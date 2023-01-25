import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TestComp from './TestComp.vue'

describe('TestComp.vue', () => {
  it('should render', () => {
    const wrapper = mount(TestComp)
    expect(wrapper).toBeTruthy()
  })
})
