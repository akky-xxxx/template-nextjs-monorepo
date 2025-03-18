import { SampleServerComponent } from "@/serverComponents/SampleServerComponent/index"

import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: SampleServerComponent,
} satisfies Meta<typeof SampleServerComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
