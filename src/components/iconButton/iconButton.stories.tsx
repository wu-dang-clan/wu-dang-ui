import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { IconButton } from "./IconButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof IconButton> = {
  title: "Component/IconButton",
  component: IconButton,
  parameters: {
    docs: {
      description: {
        component: "아이콘 버튼을 렌더링합니다.",
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
      description: "아이콘 버튼의 스타일을 설정합니다",
      table: {
        defaultValue: { summary: "filled" },
      },
    },

    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "아이콘 버튼의 색상을 설정합니다",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "아이콘 버튼의 크기를 설정합니다",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    name: {
      control: "select",
      options: [
        "accountCircle",
        "add",
        "arrowBack",
        "arrowFoward",
        "close",
        "delete",
        "done",
        "edit",
        "favorite",
        "favoriteBorder",
        "home",
        "menu",
        "notifications",
        "search",
        "settings",
        "share",
        "star",
        "starBorder",
        "thumbUp",
      ],
      description: "아이콘 버튼의 아이콘을 설정합니다",
      table: {
        defaultValue: { summary: "accountCircle" },
      },
    },
    onClick: {
      description: "클릭 이벤트 핸들러",
      action: "clicked",
    },
  },

  args: {
    onClick: fn(),
    style: "filled",
    color: "primary",
    size: "medium",
    name: "accountCircle",
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const 기본아이콘버튼: Story = {
  args: {
    name: "accountCircle",
  },
};
