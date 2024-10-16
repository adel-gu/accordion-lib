import {Meta, StoryObj} from "@storybook/react"

import {Button} from "."

const story = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    asChild: {
      options: [true, false],
      control: { type: "boolean" },
    },
    pill: {
      options: [true, false],
      control: { type: "boolean" },
    },
    size: {
      options: ['default','xs',
        'sm',
        'md',
        'lg',
        'xl'],
      control: {type: "inline-radio"}
    }
  },
  args: {
    asChild: false,
    pill: false,
    size: "default",
    children: "Button"
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>;

export const Default: Story = {}

export const Gray: Story = {
  args: {
    variant: "gray"
  }
}

export const Dark: Story = {
  args: {
    variant: "dark"
  }
}

export const Light: Story = {
  args: {
    variant: "light"
  }
}

export const Danger: Story = {
  args: {
    variant: "danger"
  }
}

export const Success: Story = {
  args: {
    variant: "success"
  }
}

export const Warning: Story = {
  args: {
    variant: "warning"
  }
}

export const Gradient: Story = {
  argTypes: {
    variant: {
      options: ['pinkToOrange', 'greenToBlue', 'purpleToPink', 'redToYellow'],
      control: { type: "inline-radio" },
    }
  },
  args: {
    variant: "pinkToOrange"
  }
}

export const Disabled: Story = {
  args: {
    disabled: true
  }
}

export const Icon: Story = {
  argTypes: {
    variant: {
      options: ['default', 'gray',
        'dark',
        'light',
        'danger',
        'success',
        'warning','pinkToOrange', 'greenToBlue', 'purpleToPink', 'redToYellow'],
      control: { type: "inline-radio" },
    }
  },
  args: {
    variant: "default",
    children: ">",
    size: "icon",
    pill: true
  }
}

export default story