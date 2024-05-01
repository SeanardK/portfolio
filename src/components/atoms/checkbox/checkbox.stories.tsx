import type { Meta, StoryObj } from "@storybook/react";
import AtomCheckbox from "./index";

const meta = {
  title: "Atoms/Checkbox",
  component: AtomCheckbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      type: "boolean",
    },
    className: {
      control: "text",
      type: "string",
    },
    disabled: {
      control: "boolean",
      type: "boolean",
    },
    id: {
      control: "text",
      type: "string",
    },
    label: {
      control: "text",
      type: "string",
    },
    name: {
      control: "text",
      type: "string",
    },
    onChange: {
      control: "text",
      type: "function",
    },
    ref: {
      control: "text",
      type: "function",
    },
    variant: {
      control: "radio",
      options: ["check", "dot"],
    },
  },
  args: {
    checked: false,
    variant: "check",
    disabled: false,
  },
} satisfies Meta<typeof AtomCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Label",
  },
};
