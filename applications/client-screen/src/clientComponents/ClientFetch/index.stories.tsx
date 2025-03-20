import { within, userEvent, expect } from "@storybook/test"

import { ClientFetch } from "@/clientComponents/ClientFetch/index"

import { handlersForRouteHandler } from "../../../spec/mock/handlersForRouteHandler"

import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: ClientFetch,
  parameters: {
    msw: handlersForRouteHandler,
  },
} satisfies Meta<typeof ClientFetch>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ActionForEvenInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.keyboard("0")
    await expect(canvas.getAllByRole<HTMLInputElement>("textbox").at(0)?.value).toBe("0")
  },
}

export const ActionForOddInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.keyboard("1")
    await expect(canvas.getAllByRole<HTMLInputElement>("textbox").at(0)?.value).toBe("1")
  },
}

export const ActionForInvalidInput: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.keyboard("a")
    await expect(canvas.getAllByRole<HTMLInputElement>("textbox").at(0)?.value).toBe("a")
  },
}

export const ActionForEvenSubmit: Story = {
  play: async (context) => {
    const { canvasElement } = context
    const canvas = within(canvasElement)
    await ActionForEvenInput.play?.(context)
    await userEvent.click(canvas.getByRole("button"))
    await expect(canvas.getAllByRole("textbox").at(1)?.textContent).toBe("even")
  },
}

export const ActionForOddSubmit: Story = {
  play: async (context) => {
    const { canvasElement } = context
    const canvas = within(canvasElement)
    await ActionForOddInput.play?.(context)
    await userEvent.click(canvas.getByRole("button"))

    await expect(canvas.getAllByRole("textbox").at(1)?.textContent).toBe("odd")
  },
}

export const ActionForInvalidSubmit: Story = {
  play: async (context) => {
    const { canvasElement } = context
    const canvas = within(canvasElement)
    await ActionForInvalidInput.play?.(context)
    await userEvent.click(canvas.getByRole("button"))
    await expect(canvas.getAllByRole("textbox").at(1)?.textContent).toBe("NaN")
  },
}
