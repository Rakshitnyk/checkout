import React from 'react';
import HotelExplorePage from './HotelExplorePage';

export default {
  title: 'Pages/HotelExplorePage',
  component: HotelExplorePage,
};

export const LargeView = () => <div style={{ width: '375px', height: '812px', margin: 'auto', backgroundColor: '#121212' }}><HotelExplorePage /></div>;