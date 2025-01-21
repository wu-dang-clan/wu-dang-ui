import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "Icon/Icon",
  component: Icon,
  parameters: {
    docs: {
      description: {
        component: "svg 아이콘을 렌더링합니다",
      },
    },
    layout: "centered",
  },
  tags: ["autodocs"],

  argTypes: {
    name: {
      control: "select",
      options: ["menu"],
      description: "아이콘의 종류를 설정합니다",
      table: {
        defaultValue: { summary: "menu" },
      },
    },

    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "아이콘의 색상을 설정합니다",
      table: {
        defaultValue: { summary: "primary" },
      },
    },

    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "아이콘의 크기를 설정합니다",
      table: {
        defaultValue: { summary: "medium" },
      },
    },
  },

  args: {
    name: "menu",
    color: "primary",
    size: "medium",
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    name: "menu",
    color: "primary",
    size: "medium",
  },
};
