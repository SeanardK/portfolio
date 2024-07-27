import type { Meta, StoryObj } from "@storybook/react";
import AtomRadio from "./index";

const meta = {
  title: "Atoms/Radio",
  component: AtomRadio,
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
  },
  args: {
    checked: false,
    disabled: false,
  },
} satisfies Meta<typeof AtomRadio>;

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
