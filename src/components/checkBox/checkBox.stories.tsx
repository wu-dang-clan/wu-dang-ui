import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { CheckBox } from "./CheckBox";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CheckBox> = {
  title: "Component/CheckBox",
  component: CheckBox,
  parameters: {
    docs: {
      description: {
        component: "체크박스를 렌더링합니다.",
      },
    },
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },

  tags: ["autodocs"],

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    style: {
      control: "select",
      options: ["filled", "tonal"],
      description: "체크박스의 스타일을 설정합니다",
      table: {
        defaultValue: { summary: "filled" },
      },
    },

    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "체크박스의 색상을 설정합니다",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    label: {
      control: "text",
      description: "체크박스에 표시될 텍스트를 설정합니다",
      table: {
        defaultValue: { summary: "CheckBox" },
      },
    },

    onChange: {
      description: "체크박스의 상태를 변경하는 이벤트 핸들러",
      action: "changed",
    },
  },

  args: {
    style: "filled",
    color: "primary",
    label: "CheckBox",
    onChange: fn(),
  },
} satisfies StoryObj<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본체크박스: Story = {
  args: {
    size: "large"
  }
};
