import React from 'react';
import SuiteCard from './SuiteCard';

export default {
  title: 'Components/SuiteCard',
  component: SuiteCard,
};

const Template = (args) => <SuiteCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://img.freepik.com/premium-photo/high-end-clean-atmospheric-hotel-rooms_149197-85.jpg?uid=R188074966&ga=GA1.1.1689134594.1739360757&semt=ais_hybrid', // or the exact image you want
  price: '$160',
  season: 'High season',
  location: 'Viana do Castelo, Portugal',
  guests: 3,
  beds: 2,
  bathrooms: 1,
  size: '53.75 sqm',
  rating: 4.2,
  description:
    'Sophisticated and cosy, these suites were designed to envelop your senses, enabling you to free your mind, relax and enjoy a complete experience.',
};