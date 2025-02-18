import React from 'react';
import HotelGuestDashboard from './HotelGuestDashboard';

export default {
  title: 'Dashboard/HotelGuestDashboard',
  component: HotelGuestDashboard,
};

const Template = (args) => <HotelGuestDashboard {...args} />;

export const Default = Template.bind({});
Default.args = {};