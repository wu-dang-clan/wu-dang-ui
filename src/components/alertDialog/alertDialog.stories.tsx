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

  argTypes: {
    label: {
      control: "text",
      description: "버튼에 표시될 텍스트를 설정합니다",
      table: {
        defaultValue: { summary: "Button" },
      },
    },
    title: {
      control: "text",
      description: "다이얼로그의 제목을 설정합니다",
      table: {
        defaultValue: { summary: "Title" },
      },
    },
    message: {
      control: "text",
      description: "다이얼로그의 메시지를 설정합니다",
      table: {
        defaultValue: { summary: "Message" },
      },
    },
    style: {
      control: "select",
      options: ["filled", "tonal", "outlined", "text"],
      description: "버튼의 스타일을 설정합니다",
      table: {
        defaultValue: { summary: "filled" },
      },
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "error"],
      description: "다이얼로그의 색상을 설정합니다",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "다이얼로그의 크기를 설정합니다",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
    onConfirm: {
      description: "확인 버튼 클릭 시 실행될 함수",
    },
    confirmLabel: {
      control: "text",
      description: "확인 버튼의 텍스트를 설정합니다",
      table: {
        defaultValue: { summary: "Confirm" },
      },
    },
    cancelLabel: {
      control: "text",
      description: "취소 버튼의 텍스트를 설정합니다",
      table: {
        defaultValue: { summary: "Cancel" },
      },
    },
  },

  args: {
    onConfirm: fn(),
  },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const 기본다이얼로그: Story = {
  args: {
    label: "다이얼로그 열기",
    title: "타이틀",
    message: "타이틀 하시겠습니까?",
    style: "filled",
    color: "primary",
    size: "small",
    confirmLabel: "확인",
    cancelLabel: "취소",
  },
};
