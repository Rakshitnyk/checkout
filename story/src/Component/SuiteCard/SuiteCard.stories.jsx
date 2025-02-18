import React from 'react';
import SuiteCard from './SuiteCard';

export default {
  title: 'Components/SuiteCard',
  component: SuiteCard,
};

const Template = (args) => <SuiteCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/300x150', // Replace with actual image URL if needed
  price: '$160',
  season: 'High season',
  location: 'Viana do Castelo, Portugal',
  guests: 3,
  beds: 2,
  bathrooms: 1,
  size: '53.75 sqm',
  rating: 4.2,
  accommodations: [
    'Wi-Fi',
    'King-size bed 2x2m',
    'Minibar',
    'Sea side balcony',
    'Digital safe',
    'Soundproof windows',
  ],
  description:
    'Sophisticated and cosy, these suites were designed to envelop your senses, enabling you to free your mind, relax and enjoy a complete experience.',
};