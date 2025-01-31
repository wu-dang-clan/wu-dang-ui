import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "버튼을 렌더링합니다.",
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
      options: ["filled", "tonal", "outlined", "text"],
      description: "버튼의 스타일을 설정합니다",
      table: {
        defaultValue: { summary: "filled" },
      },
    },

    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "버튼의 크기를 설정합니다",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "error"],
      description: "버튼의 색상을 설정합니다",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    label: {
      control: "text",
      description: "버튼에 표시될 텍스트를 설정합니다",
      table: {
        defaultValue: { summary: "Button" },
      },
    },
    onClick: {
      description: "클릭 이벤트 핸들러",
      action: "clicked",
    },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    onClick: fn(),
    style: "filled",
    size: "small",
    label: "Button",
    color: "primary",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본버튼: Story = {
  args: {
    label: "기본 버튼",
  },
};

export const tonal버튼: Story = {
  args: {
    style: "tonal",
    label: "tonal 버튼",
  },
};

export const outlined버튼: Story = {
  args: {
    style: "outlined",
    label: "outlined 버튼",
  },
};

export const text버튼: Story = {
  args: {
    style: "text",
    label: "text 버튼",
  },
};
