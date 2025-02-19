import React from 'react';
import HotelCard from './HotelCard';

export default {
  title: 'Components/HotelCard',
  component: HotelCard,
};

const Template = (args) => <HotelCard {...args} />;

export const Default = Template.bind({});
Default.args = {};