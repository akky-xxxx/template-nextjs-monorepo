import { Button } from "."

import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: Button,

  args: {
    children: "button children",
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
