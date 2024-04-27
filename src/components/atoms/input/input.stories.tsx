import { fn } from "@storybook/test";
import type { Meta, StoryObj } from "@storybook/react";
import AtomInput from "./index";

const meta = {
  title: "Atoms/Input",
  component: AtomInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
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
    isError: {
      control: "boolean",
      description: "is error",
      type: "boolean",
    },
    ref: {
      control: "object",
      description: "React useRef",
      type: "function",
    },
    LeftIcon: {
      control: "object",
      description: "Icon Left",
      type: "symbol",
    },
    RightIcon: {
      control: "object",
      description: "Icon Left",
      type: "symbol",
    },
    onChange: {
      control: "object",
      description: "Function onChange",
      type: "function",
    },
    size: {
      control: "radio",
      options: ["L", "M", "S"],
      description: "Input Size",
      type: "string",
    },
    placeholder: {
      control: "text",
      description: "placeholder text",
      type: "string",
    },
  },
  args: {
    placeholder: "Input Your Name",
    size: "M",
  },
} satisfies Meta<typeof AtomInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "M",
  },
};
