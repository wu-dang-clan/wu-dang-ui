import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { AlertDialog } from "./AlertDialog";

const meta: Meta<typeof AlertDialog> = {
  title: "Component/AlertDialog",
  component: AlertDialog,
  parameters: {
    docs: {
      description: {
        component: "Alert dialog를 렌더링합니다.",
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const 기본다이얼로그: Story = {
  args: {},
};
