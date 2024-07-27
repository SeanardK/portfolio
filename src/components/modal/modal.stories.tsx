import type { Meta, StoryObj } from "@storybook/react";
import AtomModal from "./index";

const meta = {
  title: "Atoms/Modal",
  component: AtomModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    header: {
      control: "text",
    },
    footer: {
      control: "text",
    },
    center: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
    className: {
      control: "text",
    },
    onClose: {
      control: "text",
    },
    open: {
      control: "boolean",
    },
    size: { control: "radio", options: ["L", "M", "S"] },
  },
  args: {},
} satisfies Meta<typeof AtomModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Children", onClose: () => {}, open: true },
};
