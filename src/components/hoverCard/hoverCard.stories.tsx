import type { Meta, StoryObj } from "@storybook/react";
import { HoverCard } from "./HoverCard";

const meta: Meta<typeof HoverCard> = {
  title: "Component/HoverCard",
  component: HoverCard,
  parameters: {
    docs: {
      description: {
        component:
          "HoverCard 컴포넌트는 마우스를 올렸을 때 나타나는 카드입니다.",
      },
    },
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    style: {
      control: "select",
      options: ["tonal", "outlined"],
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
      description: "표시될 텍스트를 설정합니다",
      table: {
        defaultValue: { summary: "label" },
      },
    },
    title: {
      control: "text",
      description: "호버시 표시될 Card의 title을 설정합니다",
      table: {
        defaultValue: { summary: "title" },
      },
    },
    description: {
      control: "text",
      description: "호버시 표시될 Card의 description을 설정합니다",
      table: {
        defaultValue: { summary: "description" },
      },
    },
  },

  args: {
    style: "tonal",
    color: "primary",
    label: "hoverCard",
    title: "title",
    description: "description",
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const HoverCardDefault: Story = {
  args: {},
};
