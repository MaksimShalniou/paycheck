import React from 'react';
import {
    BrowserRouter as Router,
  } from "react-router-dom";
import { Card } from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: 'UI-kit/Card',
    component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Router><Card {...args} /></Router>;

export const Primary = Template.bind({});
Primary.args = {
    card: {
        gender: "Male",
        id: 1,
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        location: {
            name: "Citadel of Ricks", 
        },
        name: "Citadel of Ricks",
        origin: {
            name: "Earth (C-137)", 
        },
        status: "Alive",
    }
};
