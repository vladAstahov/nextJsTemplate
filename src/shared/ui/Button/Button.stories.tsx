import React from 'react';
import { ComponentStory } from '@storybook/react';
import { ButtonProps, Button } from "./Button";

export default {
    title: 'shared/Button',
    component: Button
}

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args} > Button </Button>

export const Default = Template.bind({})

Default.args = {
    view: 'primary',
    size: 'medium'
}