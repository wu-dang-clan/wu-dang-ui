import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "./Badge";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Badge> = {
  title: "Component/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: "배지를 렌더링합니다.",
      },
    },
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  argTypes: {
    style: {
      control: "select",
      options: ["filled", "tonal", "outlined"],
      description: "배지의 스타일을 설정합니다",
      table: {
        defaultValue: { summary: "filled" },
      },
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "배지의 색상을 설정합니다",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    label: {
      control: "text",
      description: "배지에 표시될 텍스트를 설정합니다",
      table: {
        defaultValue: { summary: "Badge" },
      },
    },
  },

  args: {
    style: "filled",
    color: "primary",
    label: "Badge",
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;

export const 뱃지: Story = {
  args: {
    style: "filled",
    color: "primary",
    label: "Badge",
  },
};
