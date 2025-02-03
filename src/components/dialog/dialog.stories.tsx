import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Component/Dialog",
  component: Dialog,
  parameters: {
    docs: {
      description: {
        component: "다이얼로그를 렌더링합니다.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const 다이얼로그: Story = {
  args: {
    style: "filled",
    color: "primary",
    content: "Dialog",
  },
};
