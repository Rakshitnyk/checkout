import React from "react";
import styled from "styled-components";
import CategoryCard from "./CategoryCard";

// ✅ Updated category data with online image URLs
const categories = [
  { label: "Restaurants", icon: "https://img.freepik.com/free-vector/business-collapse-crisis-restaurant-empty-restaurant-cafe-depressed-man-sitting-inside-stress-burnout-bankruptcy-company_575670-1272.jpg?semt=ais_hybrid" },
  { label: "Hotels", icon: "https://img.freepik.com/free-vector/hotel-building-tropical-country-with-palms-cartoon-icon_1284-63176.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Beauty Spa", icon: "https://img.freepik.com/free-photo/organic-spa-products-white-background_169016-3484.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Home Decor", icon: "https://img.freepik.com/free-vector/set-interior-furniture-eco-minimalism-style_1284-45504.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Wedding Planning", icon: "https://img.freepik.com/free-vector/hand-drawn-flat-design-wedding-planner-design-template_23-2149276759.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Education", icon: "https://img.freepik.com/premium-photo/school-supplies-isolated_241146-168.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Rent & Hire", icon: "https://img.freepik.com/free-vector/real-estate-agent-offering-house-young-family-couple-wife-husband-choosing-new-suburb-home-living_575670-754.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Hospitals", icon: "https://img.freepik.com/free-vector/modern-3d-urban-hospital-building-with-helipad-roof-isometric-isolated-vector-illustration_1284-2215.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Contractors", icon: "https://img.freepik.com/premium-vector/construction-workers-crane_1262629-1945.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Pet Shops", icon: "https://img.freepik.com/free-vector/pet-shop-with-happy-animals_1308-172634.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "PG/Hostels", icon: "https://img.freepik.com/free-vector/cheap-inn-affordable-guesthouse-college-dormitory-motel-check-hostel-services-lower-priced-accommodation-best-hostel-facilities-concept_335657-694.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Estate Agent", icon: "https://img.freepik.com/premium-photo/3d-rendering-real-estate-agent-standing-front-house_605022-30336.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Dentists", icon: "https://img.freepik.com/free-vector/dentist-woman-examining-patient-teeth-white-background_1308-91242.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Gym", icon: "https://img.freepik.com/premium-photo/dumbbells-isolated-white-background_319172-2904.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Loans", icon: "https://img.freepik.com/free-psd/house-coins-calculator-real-estate-investment-concept_191095-86439.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Event Organisers", icon: "https://img.freepik.com/free-vector/groom-bride-wedding-arch_107791-25576.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Driving Schools", icon: "https://img.freepik.com/free-vector/driving-school-background_23-2149424638.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Packers & Movers", icon: "https://img.freepik.com/premium-psd/realistic-vector-icon-illustration-movie-night-concept-background-with-film-roll-popcorn-bucket-drinks_1036975-266786.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Courier Service", icon: "https://img.freepik.com/free-vector/delivery-man-diving-motorcycle-moterbike-with-map-screen-tablet_1308-51374.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
  { label: "Popular Categories", icon: "https://img.freepik.com/free-vector/girl-green-shirt-searching-laptop-cartoon-character-isolated-white-background_1308-52917.jpg?ga=GA1.1.1689134594.1739360757&semt=ais_hybrid" },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); /* Adjust column width */
  gap: 20px;
  justify-items: center;
  padding: 20px;
  
  
`;

const CategoryGrid = () => {
  return (
    <Grid>
      {categories.map((category, index) => (
        <CategoryCard key={index} icon={category.icon} label={category.label} />
      ))}
    </Grid>
  );
};

export default CategoryGrid;