import type { Meta, StoryObj } from '@storybook/vue3'
import TestComp from './TestComp.vue'

const meta: Meta<typeof TestComp> = {
  title: 'Components/Base/TestComp',
  component: TestComp,
  tags: ['autodocs'],
  argTypes: {
    // Define your interactive Props here
    // example: {
    //  options: ['text', 'password', 'email', 'number'],
    //  control: {
    //    type: 'select'
    //  }
  },
  parameters: {
    docs: {
      description: {
        component: 'Some component _markdown_'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof TestComp>

// First Story of the Component
export const TestCompStory: Story = {
  // name: 'Self defined Story Name',
  render: (args) => ({
    components: { TestComp },
    setup() {
      return { args }
    },
    template: '<TestComp v-bind="args" />'
  }),
  args: {
    // Define the Data for your props
    // example: 'Prefilled value'
  }
}