import React from "react";
import CategoryCard from "./CategoryCard";

export default {
  title: "Components/CategoryCard",
  component: CategoryCard,
};

const Template = (args) => <CategoryCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "/icons/restaurant.png",
  label: "Restaurants",
}; 