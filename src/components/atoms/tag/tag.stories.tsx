import type { Meta, StoryObj } from "@storybook/react";
import AtomTag from "./index";

const meta = {
  title: "Atoms/Tag",
  component: AtomTag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      type: "boolean",
    },
    variant: {
      control: "radio",
      options: ["neutral", "primary", "success", "warning", "danger"],
      type: "string",
    },
    className: {
      control: "text",
      type: "string",
    },
    children: {
      control: "text",
      type: "string",
    },
    size: {
      control: "radio",
      options: ["L", "M", "S"],
    },
    onClick: {
      control: "text",
    },
  },
  args: {
    children: "Some child",
    size: "M",
    variant: "neutral",
  },
} satisfies Meta<typeof AtomTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
