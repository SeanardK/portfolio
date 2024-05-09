import type { Meta, StoryObj } from "@storybook/react";
import AtomAvatar from "./index";

const meta = {
  title: "Atoms/Avatar",
  component: AtomAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      type: "boolean",
      control: "boolean",
    },
    name: {
      type: "string",
      control: "text",
    },
    size: {
      type: "string",
      control: "radio",
      options: ["XL", "L", "M", "S", "XS"],
    },
    variant: {
      type: "string",
      control: "radio",
      options: ["1", "2", "3", "4", "5", "6", "7"],
    },
  },
  args: {},
} satisfies Meta<typeof AtomAvatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Avatar",
    size: "L",
    variant: "1",
  },
};
