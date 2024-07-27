import type { Meta, StoryObj } from "@storybook/react";
import AtomProgressBar from "./index";

const meta = {
  title: "Atoms/Progress Bar",
  component: AtomProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
    },
    value: {
      control: "number",
    },
    disabled: {
      control: "boolean",
    },
  },
  args: {},
} satisfies Meta<typeof AtomProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "With Label",
    value: 50,
  },
};
