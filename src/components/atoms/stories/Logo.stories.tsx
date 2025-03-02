import type { Meta, StoryObj } from "@storybook/react";

import Logo from "../Logo";

const meta = {
  title: "Components/Atoms/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "ID of the logo",
    },
    link: {
      control: "text",
      description: "Link of the logo",
    },
    size: {
      options: ["small", "medium", "large"],
      defaultValue: "medium",
      description: "Size of the logo",
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "logo",
    link: "/",
    size: "medium",
  },
};
