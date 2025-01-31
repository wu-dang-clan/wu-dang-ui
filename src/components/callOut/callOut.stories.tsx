import type { Meta, StoryObj } from "@storybook/react";

import { CallOut } from "./CallOut";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof CallOut> = {
  title: "Components/CallOut",
  component: CallOut,
  parameters: {
    docs: {
      description: {
        component: "CallOut을 렌더링합니다.",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    style: {
      control: "select",
      options: ["filled", "tonal", "outlined"],
      description: "CallOut의 스타일을 설정합니다",
      table: {
        defaultValue: { summary: "filled" },
      },
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "error"],
      description: "CallOut의 색상을 설정합니다",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    label: {
      control: "text",
      description: "CallOut에 표시될 텍스트를 설정합니다",
      table: {
        defaultValue: { summary: "CallOut" },
      },
    },
  },

  args: {
    style: "filled",
    color: "primary",
    label: "CallOut",
  },
} satisfies Meta<typeof CallOut>;

export default meta;
type Story = StoryObj<typeof CallOut>;

export const CallOutStory: Story = {
  args: {
    style: "filled",
    color: "primary",
    label: "CallOut",
  },
};
