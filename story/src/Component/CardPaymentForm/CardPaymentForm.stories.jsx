import React from 'react';
import CardPaymentForm from './CardPaymentForm';

export default {
  title: 'Components/CardPaymentForm',
  component: CardPaymentForm,
};

const Template = (args) => <CardPaymentForm {...args} />;

export const Default = Template.bind({});
Default.args = {};