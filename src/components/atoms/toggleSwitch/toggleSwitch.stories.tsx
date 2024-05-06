import type { Meta, StoryObj } from "@storybook/react";
import AtomToogleSwitch from "./index";

const meta = {
  title: "Atoms/Toggle Switch",
  component: AtomToogleSwitch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    active: {
      type: "boolean",
      control: "boolean",
    },
    children: {
      type: "string",
      control: "text",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
    },
    size: {
      control: "radio",
      options: ["L", "S"],
    },
  },
  args: {
    size: "L",
  },
} satisfies Meta<typeof AtomToogleSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "T",
  },
};
