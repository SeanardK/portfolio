import type { Meta, StoryObj } from "@storybook/react";
import { AtomButton } from "@BigStyle";

const meta = {
  title: "Atoms/Button",
  component: AtomButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "object",
      description: "Children",
      type: "symbol",
    },
    className: {
      control: "text",
      description: "Custom className",
      type: "string",
    },
    disabled: {
      control: "boolean",
      description: "Disabled button",
      type: "boolean",
    },
    isLoading: {
      control: "boolean",
      description: "Loading state",
      type: "boolean",
    },
    LeftIcon: {
      control: "text",
      description: "Icon Left",
      type: "symbol",
    },
    RightIcon: {
      control: "text",
      description: "Icon Left",
      type: "symbol",
    },
    onClick: {
      control: "object",
      description: "Function onClick",
      type: "function",
    },
    size: {
      control: "radio",
      options: ["L", "M", "S"],
      description: "Button Size",
      type: "string",
    },
    type: {
      control: "radio",
      options: ["button", "submit", "reset"],
      description: "Button Type",
      type: "string",
    },
    variant: {
      control: "radio",
      options: [
        "primary",
        "secondary",
        "outline",
        "transparent1",
        "transparent2",
      ],
      description: "Button Style",
      type: "string",
    },
  },
  args: {
    children: "Click Me!",
    onClick: () => {},
  },
} satisfies Meta<typeof AtomButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "M",
    type: "button",
    variant: "primary",
    onClick: () => {},
  },
};
