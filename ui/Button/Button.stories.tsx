import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

// const meta: Meta<typeof Button> = {
//   component: Button,
// }

// export default meta

// type Story = StoryObj<typeof Button>

export default {
  title: 'Button',
  component: Button,
}

const Template = (arg: any) => <Button {...arg} />

export const Default: any = Template.bind({})
Default.args = {
  children: 'Press me',
  size: 's',
}
